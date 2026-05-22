import { NextRequest, NextResponse } from "next/server";
import { getCourseBySlug } from "@/lib/courses/catalog";
import {
  buildVerificationUrl,
  FOUNDER_NAME,
} from "@/lib/certificates/constants";
import { createCertificateId } from "@/lib/certificates/id";
import { issueCourseCertificate } from "@/lib/certificates/issue";
import { MOCK_CERTIFICATES } from "@/lib/certificates/mockData";
import { callForgedGas } from "@/lib/forged-account/gasClient";

function useMockStore(): boolean {
  return (
    process.env.CERTIFICATES_USE_MOCK === "true" ||
    !process.env.FORGED_WEB_APP_URL
  );
}

function tokenFromRequest(req: NextRequest): string {
  const auth = req.headers.get("authorization") ?? "";
  return auth.replace(/^Bearer\s+/i, "").trim();
}

export async function POST(req: NextRequest) {
  const accessToken = tokenFromRequest(req);
  if (!accessToken) {
    return NextResponse.json(
      { ok: false, error: "Sign in to receive your certificate." },
      { status: 401 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const courseSlug = String(body.courseSlug || "").trim();
  const studentName = String(body.studentName || "").trim();
  const examScore = body.examScore != null ? Number(body.examScore) : undefined;
  const examTotal = body.examTotal != null ? Number(body.examTotal) : undefined;

  if (!courseSlug) {
    return NextResponse.json({ ok: false, error: "courseSlug required." }, { status: 400 });
  }

  const course = getCourseBySlug(courseSlug);
  if (!course) {
    return NextResponse.json({ ok: false, error: "Course not found." }, { status: 404 });
  }

  if (useMockStore()) {
    const existing = MOCK_CERTIFICATES.find(
      (c) => c.courseSlug === courseSlug && c.studentName === studentName
    );
    if (existing) {
      return NextResponse.json({ ok: true, alreadyIssued: true, certificate: existing });
    }
    const certificateId = createCertificateId();
    const cert = {
      certificateId,
      userId: "mock",
      studentName: studentName || "ForgEd Learner",
      courseId: course.id,
      courseTitle: course.title,
      courseSlug: course.slug,
      completionDate: new Date().toISOString(),
      hoursCompleted: course.estimatedHours,
      examScore,
      examTotal,
      verificationUrl: buildVerificationUrl(certificateId),
      issuedAt: new Date().toISOString(),
      status: "valid" as const,
      instructorSignature: FOUNDER_NAME,
    };
    MOCK_CERTIFICATES.push(cert);
    return NextResponse.json({ ok: true, certificate: cert, alreadyIssued: false });
  }

  try {
    let displayName = studentName;
    if (!displayName) {
      const profile = await callForgedGas({
        action: "getUserProfile",
        accessToken,
      });
      const user = profile.user as Record<string, unknown> | undefined;
      displayName = String(user?.displayName || user?.username || "ForgEd Learner");
    }

    const { certificate, alreadyIssued } = await issueCourseCertificate({
      accessToken,
      courseSlug,
      studentName: displayName,
      examScore,
      examTotal,
    });

    return NextResponse.json({ ok: true, certificate, alreadyIssued });
  } catch (e) {
    console.error("[certificates/issue]", e);
    return NextResponse.json(
      {
        ok: false,
        error:
          e instanceof Error
            ? e.message
            : "Could not issue certificate. Try again shortly.",
      },
      { status: 502 }
    );
  }
}
