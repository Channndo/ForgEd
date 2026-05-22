import { getCourseBySlug } from "@/lib/courses/catalog";
import {
  buildVerificationUrl,
  FOUNDER_NAME,
} from "@/lib/certificates/constants";
import { createCertificateId } from "@/lib/certificates/id";
import type { CertificateRecord } from "@/lib/certificates/types";
import { gasIssueCertificate } from "@/lib/certificates/server/gasCertificates";

export interface IssueCertificateInput {
  accessToken: string;
  courseSlug: string;
  studentName: string;
  examScore?: number;
  examTotal?: number;
  completionDate?: string;
}

export async function issueCourseCertificate(
  input: IssueCertificateInput
): Promise<{ certificate: CertificateRecord; alreadyIssued: boolean }> {
  const course = getCourseBySlug(input.courseSlug);
  if (!course) {
    throw new Error("Course not found.");
  }

  const certificateId = createCertificateId();
  const completionDate = input.completionDate ?? new Date().toISOString();
  const verificationUrl = buildVerificationUrl(certificateId);

  const result = await gasIssueCertificate(input.accessToken, {
    certificateId,
    courseId: course.id,
    courseTitle: course.title,
    courseSlug: course.slug,
    studentName: input.studentName.trim(),
    hoursCompleted: course.estimatedHours,
    completionDate,
    verificationUrl,
    examScore: input.examScore,
    examTotal: input.examTotal,
    instructorSignature: FOUNDER_NAME,
  });

  return result;
}
