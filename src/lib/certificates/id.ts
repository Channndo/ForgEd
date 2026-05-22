import { CERTIFICATE_ID_PREFIX } from "@/lib/certificates/constants";

/** Public verification ID (UUID v4, uppercase, prefixed). */
export function createCertificateId(): string {
  const raw = crypto.randomUUID().replace(/-/g, "").toUpperCase();
  return `${CERTIFICATE_ID_PREFIX}${raw.slice(0, 8)}-${raw.slice(8, 12)}-${raw.slice(12, 16)}-${raw.slice(16, 20)}-${raw.slice(20, 32)}`;
}

export function isCertificateIdFormat(id: string): boolean {
  return /^FE-CERT-[A-F0-9]{8}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{12}$/i.test(
    id.trim()
  );
}
