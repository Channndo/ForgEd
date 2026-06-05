import { apiUrl } from "@/lib/basePath";
import { getAccessToken } from "@/lib/forged-account/session";

export function forgedPathCertificatePdfUrl(programId: string): string {
  return apiUrl(
    `/api/forged-path/certificates/${encodeURIComponent(programId)}/pdf`
  );
}

export async function downloadForgedPathCertificate(programId: string): Promise<void> {
  const token = getAccessToken();
  const res = await fetch(forgedPathCertificatePdfUrl(programId), {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!res.ok) {
    const data = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(data.error || "Download failed.");
  }
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download =
    res.headers.get("Content-Disposition")?.match(/filename="([^"]+)"/)?.[1] ||
    `ForgEd-Path-Certificate.pdf`;
  a.click();
  URL.revokeObjectURL(url);
}
