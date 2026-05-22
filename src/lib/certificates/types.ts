/** Certificate record stored in ForgEd Accounts (Google Sheets CERTIFICATES tab). */
export interface CertificateRecord {
  certificateId: string;
  userId: string;
  studentName: string;
  courseId: string;
  courseTitle: string;
  courseSlug: string;
  completionDate: string;
  hoursCompleted: number;
  examScore?: number;
  examTotal?: number;
  verificationUrl: string;
  issuedAt: string;
  status: "valid" | "revoked";
  instructorSignature?: string;
}

/** Payload used to render PDF / preview (no secrets). */
export interface CertificateRenderData {
  certificateId: string;
  studentName: string;
  courseTitle: string;
  completionDate: string;
  hoursCompleted: number;
  verificationUrl: string;
  instructorSignature: string;
}

export interface CertificateVerificationResult {
  valid: boolean;
  certificate?: {
    certificateId: string;
    studentName: string;
    courseTitle: string;
    completionDate: string;
    hoursCompleted: number;
    issuedAt: string;
    status: string;
  };
  error?: string;
}

export interface IssueCertificateResponse {
  ok: boolean;
  certificate?: CertificateRecord;
  alreadyIssued?: boolean;
  error?: string;
}
