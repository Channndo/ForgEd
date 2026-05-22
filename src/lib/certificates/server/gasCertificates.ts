/**
 * Server-side Google Apps Script bridge for certificate records.
 */
import { callForgedGas } from "@/lib/forged-account/gasClient";
import type {
  CertificateRecord,
  CertificateVerificationResult,
} from "@/lib/certificates/types";

function mapCertificate(row: Record<string, unknown>): CertificateRecord {
  return {
    certificateId: String(row.certificateId || ""),
    userId: String(row.userId || ""),
    studentName: String(row.studentName || ""),
    courseId: String(row.courseId || ""),
    courseTitle: String(row.courseTitle || ""),
    courseSlug: String(row.courseSlug || ""),
    completionDate: String(row.completionDate || ""),
    hoursCompleted: Number(row.hoursCompleted) || 0,
    examScore: row.examScore != null ? Number(row.examScore) : undefined,
    examTotal: row.examTotal != null ? Number(row.examTotal) : undefined,
    verificationUrl: String(row.verificationUrl || ""),
    issuedAt: String(row.issuedAt || ""),
    status: (row.status === "revoked" ? "revoked" : "valid") as "valid" | "revoked",
    instructorSignature: row.instructorSignature
      ? String(row.instructorSignature)
      : undefined,
  };
}

export async function gasIssueCertificate(
  accessToken: string,
  payload: {
    courseId: string;
    courseTitle: string;
    courseSlug: string;
    studentName: string;
    hoursCompleted: number;
    completionDate: string;
    verificationUrl: string;
    certificateId: string;
    examScore?: number;
    examTotal?: number;
    instructorSignature?: string;
  }
): Promise<{ certificate: CertificateRecord; alreadyIssued: boolean }> {
  const data = await callForgedGas({
    action: "issueCertificate",
    accessToken,
    ...payload,
  });
  if (!data.ok) {
    throw new Error(String(data.error || "Certificate issue failed."));
  }
  return {
    certificate: mapCertificate(
      (data.certificate as Record<string, unknown>) || {}
    ),
    alreadyIssued: Boolean(data.alreadyIssued),
  };
}

export async function gasListCertificates(
  accessToken: string
): Promise<CertificateRecord[]> {
  const data = await callForgedGas({
    action: "listCertificates",
    accessToken,
  });
  if (!data.ok) {
    throw new Error(String(data.error || "Could not list certificates."));
  }
  const list = (data.certificates as Record<string, unknown>[]) || [];
  return list.map(mapCertificate);
}

export async function gasGetCertificate(
  accessToken: string,
  certificateId: string
): Promise<CertificateRecord | null> {
  const data = await callForgedGas({
    action: "getCertificate",
    accessToken,
    certificateId,
  });
  if (!data.ok) return null;
  if (!data.certificate) return null;
  return mapCertificate(data.certificate as Record<string, unknown>);
}

export async function gasVerifyCertificate(
  certificateId: string
): Promise<CertificateVerificationResult> {
  const data = await callForgedGas({
    action: "verifyCertificate",
    certificateId,
  });
  if (!data.ok) {
    return { valid: false, error: String(data.error || "Verification failed.") };
  }
  if (!data.valid) {
    return { valid: false, error: "Invalid certificate." };
  }
  const c = data.certificate as Record<string, unknown> | undefined;
  if (!c) return { valid: false, error: "Invalid certificate." };
  return {
    valid: true,
    certificate: {
      certificateId: String(c.certificateId || certificateId),
      studentName: String(c.studentName || ""),
      courseTitle: String(c.courseTitle || ""),
      completionDate: String(c.completionDate || ""),
      hoursCompleted: Number(c.hoursCompleted) || 0,
      issuedAt: String(c.issuedAt || ""),
      status: String(c.status || "valid"),
    },
  };
}
