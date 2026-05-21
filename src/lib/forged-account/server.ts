/**
 * Server-only ForgEd session validation (Google Apps Script).
 */

const WEB_APP_URL = process.env.FORGED_WEB_APP_URL ?? "";

export function isForgedAccountConfigured(): boolean {
  return Boolean(WEB_APP_URL.trim());
}

export async function validateForgedAccessToken(
  token: string | null | undefined
): Promise<boolean> {
  const t = token?.trim();
  if (!t || !WEB_APP_URL) return false;
  try {
    const res = await fetch(WEB_APP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "getUserProfile", accessToken: t }),
      redirect: "follow",
      signal: AbortSignal.timeout(12_000),
    });
    const data = (await res.json().catch(() => ({}))) as { ok?: boolean };
    return res.ok && Boolean(data.ok);
  } catch {
    return false;
  }
}

export function extractBearerToken(
  authHeader: string | null | undefined
): string | null {
  if (!authHeader) return null;
  const m = authHeader.match(/^Bearer\s+(.+)$/i);
  return m?.[1]?.trim() || null;
}
