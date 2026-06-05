import { NextRequest, NextResponse } from "next/server";
import { FORGED_PATH_COURSES } from "@/lib/forged-path/curriculum";
import {
  extractBearerToken,
  validateForgedAccessToken,
} from "@/lib/forged-account/server";
import { validateVerificationUrl } from "@/lib/forged-path/verification";

export async function POST(req: NextRequest) {
  const token = extractBearerToken(req.headers.get("authorization"));
  const validation = await validateForgedAccessToken(token);
  if (!validation.ok) {
    return NextResponse.json(
      { ok: false, error: "Sign in to verify course completion." },
      { status: 401 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const courseId = String(body.courseId || "").trim();
  const verificationUrl = String(body.verificationUrl || "").trim();

  if (!courseId || !verificationUrl) {
    return NextResponse.json(
      { ok: false, error: "courseId and verificationUrl are required." },
      { status: 400 }
    );
  }

  const course = FORGED_PATH_COURSES.find((c) => c.id === courseId);
  if (!course) {
    return NextResponse.json({ ok: false, error: "Course not found." }, { status: 404 });
  }

  const urlCheck = validateVerificationUrl(course.platform, verificationUrl);
  if (!urlCheck.ok) {
    return NextResponse.json({ ok: false, error: urlCheck.error }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    verification: {
      courseId,
      platform: course.platform,
      verificationUrl: urlCheck.url,
      verifiedAt: new Date().toISOString(),
    },
  });
}
