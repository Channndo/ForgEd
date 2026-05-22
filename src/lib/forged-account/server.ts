/**
 * Server-only ForgEd session validation (Google Apps Script).
 */

import type { ForgedAccountUser } from "./types";

const WEB_APP_URL = process.env.FORGED_WEB_APP_URL ?? "";

const VALIDATION_CACHE_MS = 90_000;
const GAS_VALIDATE_TIMEOUT_MS = 22_000;

type CacheEntry = { until: number; user?: ForgedAccountUser };

/** Per-isolate cache — avoids a GAS round-trip on every KODA message. */
const validationCache = new Map<string, CacheEntry>();

export type ForgedTokenValidation =
  | { ok: true }
  | { ok: false; reason: "missing" | "expired" | "unavailable" };

export function isForgedAccountConfigured(): boolean {
  return Boolean(WEB_APP_URL.trim());
}

function parseGasProfileResponse(data: {
  ok?: boolean;
  error?: string;
  user?: ForgedAccountUser;
}): { validation: ForgedTokenValidation; user?: ForgedAccountUser } {
  if (data.ok && data.user) {
    return { validation: { ok: true }, user: data.user };
  }
  const err = String(data.error || "");
  if (/session expired|sign in required/i.test(err)) {
    return { validation: { ok: false, reason: "expired" } };
  }
  return { validation: { ok: false, reason: "unavailable" } };
}

async function fetchProfileFromGas(
  token: string
): Promise<{ validation: ForgedTokenValidation; user?: ForgedAccountUser }> {
  try {
    const res = await fetch(WEB_APP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "getUserProfile", accessToken: token }),
      redirect: "follow",
      signal: AbortSignal.timeout(GAS_VALIDATE_TIMEOUT_MS),
    });
    const data = (await res.json().catch(() => ({}))) as {
      ok?: boolean;
      error?: string;
      user?: ForgedAccountUser;
    };
    const parsed = parseGasProfileResponse(data);
    if (parsed.validation.ok) {
      validationCache.set(token, {
        until: Date.now() + VALIDATION_CACHE_MS,
        user: parsed.user,
      });
    } else if (parsed.validation.reason === "expired") {
      validationCache.delete(token);
    }
    return parsed;
  } catch {
    return { validation: { ok: false, reason: "unavailable" } };
  }
}

export async function getForgedUserFromToken(
  token: string | null | undefined
): Promise<ForgedAccountUser | null> {
  const t = token?.trim();
  if (!t || !WEB_APP_URL) return null;

  const cached = validationCache.get(t);
  if (cached?.user && cached.until > Date.now()) {
    return cached.user;
  }

  const { validation, user } = await fetchProfileFromGas(t);
  if (!validation.ok) return null;
  return user ?? null;
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

  const { validation } = await fetchProfileFromGas(t);
  return validation;
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
