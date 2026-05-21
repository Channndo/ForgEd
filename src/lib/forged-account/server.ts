/**
 * Server-only ForgEd session validation (Google Apps Script).
 */

const WEB_APP_URL = process.env.FORGED_WEB_APP_URL ?? "";

const VALIDATION_CACHE_MS = 90_000;
const GAS_VALIDATE_TIMEOUT_MS = 22_000;

type CacheEntry = { until: number };

/** Per-isolate cache — avoids a GAS round-trip on every KODA message. */
const validationCache = new Map<string, CacheEntry>();

export type ForgedTokenValidation =
  | { ok: true }
  | { ok: false; reason: "missing" | "expired" | "unavailable" };

export function isForgedAccountConfigured(): boolean {
  return Boolean(WEB_APP_URL.trim());
}

function parseGasError(data: { ok?: boolean; error?: string }): ForgedTokenValidation {
  if (data.ok) return { ok: true };
  const err = String(data.error || "");
  if (/session expired|sign in required/i.test(err)) {
    return { ok: false, reason: "expired" };
  }
  return { ok: false, reason: "unavailable" };
}

export async function validateForgedAccessToken(
  token: string | null | undefined
): Promise<ForgedTokenValidation> {
  const t = token?.trim();
  if (!t || !WEB_APP_URL) {
    return { ok: false, reason: "missing" };
  }

  const cached = validationCache.get(t);
  if (cached && cached.until > Date.now()) {
    return { ok: true };
  }

  try {
    const res = await fetch(WEB_APP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "getUserProfile", accessToken: t }),
      redirect: "follow",
      signal: AbortSignal.timeout(GAS_VALIDATE_TIMEOUT_MS),
    });
    const data = (await res.json().catch(() => ({}))) as {
      ok?: boolean;
      error?: string;
    };
    const result = parseGasError(data);
    if (result.ok) {
      validationCache.set(t, { until: Date.now() + VALIDATION_CACHE_MS });
    } else if (result.reason === "expired") {
      validationCache.delete(t);
    }
    return result;
  } catch {
    return { ok: false, reason: "unavailable" };
  }
}

/** @deprecated Prefer validateForgedAccessToken for error detail */
export async function validateForgedAccessTokenBoolean(
  token: string | null | undefined
): Promise<boolean> {
  const r = await validateForgedAccessToken(token);
  return r.ok;
}

export function extractBearerToken(
  authHeader: string | null | undefined
): string | null {
  if (!authHeader) return null;
  const m = authHeader.match(/^Bearer\s+(.+)$/i);
  return m?.[1]?.trim() || null;
}
