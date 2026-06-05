import { apiUrl } from "@/lib/basePath";
import { getAccessToken } from "@/lib/forged-account/session";
import type { ForgedPathCourseVerification } from "./verification";

export async function verifyForgedPathCertificateClient(input: {
  courseId: string;
  verificationUrl: string;
}): Promise<{ ok: boolean; verification?: ForgedPathCourseVerification; error?: string }> {
  const token = getAccessToken();
  const res = await fetch(apiUrl("/api/forged-path/verify"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(input),
  });

  const data = (await res.json().catch(() => ({}))) as {
    ok?: boolean;
    verification?: ForgedPathCourseVerification;
    error?: string;
  };

  if (!res.ok || !data.ok || !data.verification) {
    return { ok: false, error: data.error || "Verification failed." };
  }

  return { ok: true, verification: data.verification };
}
