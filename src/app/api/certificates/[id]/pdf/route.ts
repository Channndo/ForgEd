import { NextRequest, NextResponse } from "next/server";
import { generateCertificatePdf } from "@/lib/certificates/pdf/generateCertificatePdf";
import {
  gasGetCertificate,
  gasVerifyCertificate,
} from "@/lib/certificates/server/gasCertificates";
import {
  buildVerificationUrl,
  FOUNDER_NAME,
} from "@/lib/certificates/constants";
import { isCertificateIdFormat } from "@/lib/certificates/id";
import { MOCK_CERTIFICATES } from "@/lib/certificates/mockData";
import type { CertificateRecord, CertificateRenderData } from "@/lib/certificates/types";

function useMockStore(): boolean {
  return (
    process.env.CERTIFICATES_USE_MOCK === "true" ||
    !process.env.FORGED_WEB_APP_URL
  );
}

function toRenderData(cert: CertificateRecord): CertificateRenderData {
  return {
    certificateId: cert.certificateId,
    studentName: cert.studentName,
    courseTitle: cert.courseTitle,
    completionDate: cert.completionDate,
    hoursCompleted: cert.hoursCompleted,
    verificationUrl:
      cert.verificationUrl || buildVerificationUrl(cert.certificateId),
    instructorSignature: cert.instructorSignature || FOUNDER_SIGNATURE,
  };
}

async function resolveCertificate(
  certificateId: string,
  token: string
): Promise<CertificateRecord | null> {
  if (useMockStore()) {
    return MOCK_CERTIFICATES.find((c) => c.certificateId === certificateId) ?? null;
  }

  if (token) {
    const owned = await gasGetCertificate(token, certificateId);
    if (owned) return owned;
  }

  const verified = await gasVerifyCertificate(certificateId);
  if (!verified.valid || !verified.certificate) return null;

  const pub = verified.certificate;
  return {
    certificateId,
    userId: "",
    studentName: pub.studentName,
    courseId: "",
    courseTitle: pub.courseTitle,
    courseSlug: "",
    completionDate: pub.completionDate,
    hoursCompleted: pub.hoursCompleted,
    verificationUrl: buildVerificationUrl(certificateId),
    issuedAt: pub.issuedAt,
    status: pub.status as "valid" | "revoked",
    instructorSignature: FOUNDER_NAME,
  };
}

export async function GET(
  req: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;
  const certificateId = decodeURIComponent(id).trim();

  if (!isCertificateIdFormat(certificateId)) {
    return NextResponse.json({ error: "Invalid certificate ID." }, { status: 400 });
  }

  const token = (req.headers.get("authorization") ?? "")
    .replace(/^Bearer\s+/i, "")
    .trim();

  const cert = await resolveCertificate(certificateId, token);
  if (!cert || cert.status === "revoked") {
    return NextResponse.json({ error: "Certificate not found." }, { status: 404 });
  }

  try {
    const pdf = await generateCertificatePdf(toRenderData(cert));
    const filename = `ForgEd-Certificate-${cert.courseTitle
      .replace(/[^\w]+/g, "-")
      .slice(0, 40)}.pdf`;

    return new NextResponse(Buffer.from(pdf), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "private, max-age=3600",
      },
    });
  } catch (e) {
    console.error("[certificates/pdf]", e);
    return NextResponse.json(
      { error: "PDF generation failed." },
      { status: 500 }
    );
  }
}
