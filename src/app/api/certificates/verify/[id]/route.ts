import { NextRequest, NextResponse } from "next/server";
import { gasVerifyCertificate } from "@/lib/certificates/server/gasCertificates";
import { isCertificateIdFormat } from "@/lib/certificates/id";
import { MOCK_CERTIFICATES, MOCK_INVALID_CERTIFICATE_ID } from "@/lib/certificates/mockData";

function useMockStore(): boolean {
  return (
    process.env.CERTIFICATES_USE_MOCK === "true" ||
    !process.env.FORGED_WEB_APP_URL
  );
}

export async function GET(
  _req: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;
  const certificateId = decodeURIComponent(id).trim();

  if (!certificateId) {
    return NextResponse.json(
      { valid: false, error: "Certificate ID required." },
      { status: 400 }
    );
  }

  if (certificateId === MOCK_INVALID_CERTIFICATE_ID) {
    return NextResponse.json({ valid: false, error: "Invalid certificate." });
  }

  if (!isCertificateIdFormat(certificateId)) {
    return NextResponse.json({ valid: false, error: "Invalid certificate ID format." });
  }

  if (useMockStore()) {
    const found = MOCK_CERTIFICATES.find((c) => c.certificateId === certificateId);
    if (!found || found.status === "revoked") {
      return NextResponse.json({ valid: false, error: "Invalid certificate." });
    }
    return NextResponse.json({
      valid: true,
      certificate: {
        certificateId: found.certificateId,
        studentName: found.studentName,
        courseTitle: found.courseTitle,
        completionDate: found.completionDate,
        hoursCompleted: found.hoursCompleted,
        issuedAt: found.issuedAt,
        status: found.status,
      },
    });
  }

  try {
    const result = await gasVerifyCertificate(certificateId);
    return NextResponse.json(result);
  } catch (e) {
    console.error("[certificates/verify]", e);
    return NextResponse.json(
      { valid: false, error: "Verification service unavailable." },
      { status: 502 }
    );
  }
}
