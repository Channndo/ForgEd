import { NextRequest, NextResponse } from "next/server";
import { callForgedGas } from "@/lib/forged-account/gasClient";
import {
  extractBearerToken,
  getForgedUserFromToken,
  validateForgedAccessToken,
} from "@/lib/forged-account/server";
import type { UserProgress } from "@/lib/types";
import { generateForgedPathCertificatePdf } from "@/lib/forged-path/pdf/generateForgedPathCertificatePdf";
import { getForgedPathProgram } from "@/lib/forged-path/programs";
import { isForgedPathCertificateUnlocked } from "@/lib/forged-path/progress";
import { resolveForgedPathStudentName } from "@/lib/forged-path/studentName";

export async function GET(
  req: NextRequest,
  ctx: { params: Promise<{ programId: string }> }
) {
  const { programId } = await ctx.params;
  const program = getForgedPathProgram(programId);
  if (!program) {
    return NextResponse.json({ error: "Program not found." }, { status: 404 });
  }

  const token = extractBearerToken(req.headers.get("authorization"));
  const validation = await validateForgedAccessToken(token);
  if (!validation.ok) {
    return NextResponse.json(
      { error: "Sign in to download your certificate." },
      { status: 401 }
    );
  }

  const user = await getForgedUserFromToken(token);
  if (!user) {
    return NextResponse.json({ error: "Could not verify account." }, { status: 401 });
  }

  let completionDate = new Date().toISOString();
  let progressVerified = false;

  try {
    const dash = await callForgedGas({
      action: "loadUserDashboard",
      accessToken: token,
    });
    const progress = dash.progress as UserProgress | null | undefined;
    if (progress) {
      if (!isForgedPathCertificateUnlocked(progress)) {
        return NextResponse.json(
          { error: "Complete all 14 courses to unlock your certificate." },
          { status: 403 }
        );
      }
      completionDate =
        progress.forgedPathProgress?.certificateUnlockedAt ?? completionDate;
      progressVerified = true;
    }
  } catch {
    /* dashboard unavailable — allow download only when GAS not configured */
  }

  if (!progressVerified && process.env.FORGED_WEB_APP_URL) {
    return NextResponse.json(
      { error: "Complete all 14 courses to unlock your certificate." },
      { status: 403 }
    );
  }

  const studentName = resolveForgedPathStudentName(user);

  try {
    const pdf = await generateForgedPathCertificatePdf({
      studentName,
      completionDate,
      programId,
    });

    const safeName = studentName.replace(/[^\w]+/g, "-").slice(0, 30);
    const filename = `ForgEd-Path-${program.certificate.programTitle.replace(/\s+/g, "-")}-${safeName}.pdf`;

    return new NextResponse(Buffer.from(pdf), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "private, max-age=3600",
      },
    });
  } catch (e) {
    console.error("[forged-path/certificates/pdf]", e);
    return NextResponse.json({ error: "PDF generation failed." }, { status: 500 });
  }
}
