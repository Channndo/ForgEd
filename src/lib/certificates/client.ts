import { apiUrl } from "@/lib/basePath";
import { getAccessToken } from "@/lib/forged-account/session";
import type {
  CertificateRecord,
  CertificateVerificationResult,
  IssueCertificateResponse,
} from "@/lib/certificates/types";

async function certFetch<T>(
  path: string,
  init?: RequestInit
): Promise<T> {
  const token = getAccessToken();
  const headers: Record<string, string> = {
    Accept: "application/json",
    ...(init?.headers as Record<string, string>),
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(apiUrl(path), { ...init, headers });
  const data = (await res.json().catch(() => ({}))) as T & {
    error?: string;
    ok?: boolean;
  };
  if (!res.ok) {
    throw new Error(
      (data as { error?: string }).error || `Request failed (${res.status}).`
    );
  }
  return data;
}

export async function issueCertificateClient(body: {
  courseSlug: string;
  studentName: string;
  examScore?: number;
  examTotal?: number;
}): Promise<IssueCertificateResponse> {
  return certFetch<IssueCertificateResponse>("/api/certificates/issue", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

export async function listCertificatesClient(): Promise<{
  certificates: CertificateRecord[];
}> {
  return certFetch<{ ok: boolean; certificates: CertificateRecord[] }>(
    "/api/certificates"
  );
}

export function certificatePdfUrl(certificateId: string): string {
  return apiUrl(`/api/certificates/${encodeURIComponent(certificateId)}/pdf`);
}

export function certificatePreviewUrl(certificateId: string): string {
  return apiUrl(
    `/api/certificates/${encodeURIComponent(certificateId)}/preview`
  );
}

export async function verifyCertificateClient(
  certificateId: string
): Promise<CertificateVerificationResult> {
  const res = await fetch(
    apiUrl(`/api/certificates/verify/${encodeURIComponent(certificateId)}`),
    { headers: { Accept: "application/json" } }
  );
  return (await res.json()) as CertificateVerificationResult;
}
