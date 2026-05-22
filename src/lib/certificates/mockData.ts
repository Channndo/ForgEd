import type { CertificateRecord } from "@/lib/certificates/types";
import { buildVerificationUrl } from "@/lib/certificates/constants";

/** Placeholder certificates for UI development and offline demos. */
export const MOCK_CERTIFICATES: CertificateRecord[] = [
  {
    certificateId: "FE-CERT-4F2A8B1C-3D4E-5F60-9A1B-2C3D4E5F60718",
    userId: "FE-mock-user-01",
    studentName: "Alex Morgan",
    courseId: "insurance-fundamentals",
    courseTitle: "Insurance Fundamentals",
    courseSlug: "insurance-fundamentals",
    completionDate: "2026-05-13T18:00:00.000Z",
    hoursCompleted: 12,
    examScore: 17,
    examTotal: 20,
    verificationUrl: buildVerificationUrl(
      "FE-CERT-4F2A8B1C-3D4E-5F60-9A1B-2C3D4E5F60718"
    ),
    issuedAt: "2026-05-13T18:05:00.000Z",
    status: "valid",
  },
  {
    certificateId: "FE-CERT-A1B2C3D4-E5F6-7890-ABCD-EF1234567890",
    userId: "FE-mock-user-01",
    studentName: "Alex Morgan",
    courseId: "ai-fundamentals",
    courseTitle: "Artificial Intelligence Fundamentals",
    courseSlug: "ai-fundamentals",
    completionDate: "2026-04-02T14:30:00.000Z",
    hoursCompleted: 10,
    examScore: 16,
    examTotal: 20,
    verificationUrl: buildVerificationUrl(
      "FE-CERT-A1B2C3D4-E5F6-7890-ABCD-EF1234567890"
    ),
    issuedAt: "2026-04-02T14:35:00.000Z",
    status: "valid",
  },
];

export const MOCK_INVALID_CERTIFICATE_ID =
  "FE-CERT-00000000-0000-0000-0000-000000000000";
