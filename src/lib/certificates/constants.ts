import { withBasePath } from "@/lib/basePath";

export const CERTIFICATE_ID_PREFIX = "FE-CERT-";

/** Script-style signature and printed name on certificates */
export const FOUNDER_NAME = "Chandler Hill";
export const FOUNDER_SIGNATURE = FOUNDER_NAME;
export const FOUNDER_TITLE = "Founder, ForgEd";

export const CERTIFICATE_TAGLINE = "Learn Skills That Matter";

export function getSiteOrigin(): string {
  if (typeof window !== "undefined") {
    return window.location.origin + (process.env.NEXT_PUBLIC_BASE_PATH ?? "");
  }
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://forgedlearn.com"
  );
}

export function buildVerificationUrl(certificateId: string): string {
  return `${getSiteOrigin()}${withBasePath(`/verify/${certificateId}`)}`;
}

export function buildLinkedInShareUrl(
  certificate: { courseTitle: string; verificationUrl: string }
): string {
  const text = encodeURIComponent(
    `I completed ${certificate.courseTitle} on ForgEd. Verify my certificate:`
  );
  const url = encodeURIComponent(certificate.verificationUrl);
  return `https://www.linkedin.com/sharing/share-offsite/?url=${url}&text=${text}`;
}
