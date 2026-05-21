/**
 * Where KODA runs inference in this deployment.
 * Production: Syntrix API → shared Hetzner Ollama (same path as MIRA / CoverIQ).
 * Local dev: direct OLLAMA_BASE_URL when set, else Syntrix forged bridge when configured.
 */

export function syntrixApiBase(): string {
  return (
    process.env.SYNTRIX_API_URL?.trim().replace(/\/$/, "") ||
    "https://api.syntrix.solutions"
  );
}

/** ForgEd Google Apps Script accounts (session token on chat). */
export function useForgedAccountKoda(): boolean {
  return Boolean(process.env.FORGED_WEB_APP_URL?.trim());
}

/**
 * Syntrix server bridge — same Ollama as MIRA; uses FORGED_SERVER_SECRET (not learner JWT).
 * This is how ForgEd reaches Hetzner without duplicating OLLAMA_API_KEY on Netlify.
 */
export function useSyntrixForgedKoda(): boolean {
  if (!useForgedAccountKoda()) return false;
  const flag = process.env.KODA_USE_SYNTRIX_FORGED?.trim().toLowerCase();
  if (flag === "false" || flag === "0") return false;
  return Boolean(process.env.FORGED_SERVER_SECRET?.trim());
}

/** Legacy JWT KODA routes on Syntrix (/api/koda/*) — CoverIQ-style; not used when ForgEd GAS auth is on. */
export function useSyntrixKoda(): boolean {
  if (useForgedAccountKoda()) return false;
  const flag = process.env.KODA_USE_SYNTRIX?.trim().toLowerCase();
  if (flag === "false" || flag === "0") return false;
  if (flag === "true" || flag === "1") return true;
  return false;
}

/** Optional: call Ollama from Apps Script instead of Syntrix (not recommended). */
export function useForgedGasOllama(): boolean {
  if (!useForgedAccountKoda()) return false;
  const flag = process.env.KODA_USE_GAS_OLLAMA?.trim().toLowerCase();
  return flag === "true" || flag === "1";
}

/** Direct Hetzner Ollama (same URL + API key as Render MIRA) — Netlify fallback when Syntrix bridge lacks secret. */
export function useDirectHetznerOllama(): boolean {
  return Boolean(
    process.env.OLLAMA_API_KEY?.trim() && process.env.OLLAMA_BASE_URL?.trim()
  );
}

export function extractBearer(authHeader: string | null | undefined): string | null {
  if (!authHeader) return null;
  const m = authHeader.match(/^Bearer\s+(.+)$/i);
  return m?.[1]?.trim() || null;
}
