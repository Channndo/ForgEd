/**
 * Where KODA runs inference in this deployment.
 * Production (Netlify): Syntrix /api/koda/* → shared Omnistrata Ollama (same as MIRA).
 * Local dev: direct OLLAMA_BASE_URL unless KODA_USE_SYNTRIX=true.
 */

export function syntrixApiBase(): string {
  return (
    process.env.SYNTRIX_API_URL?.trim().replace(/\/$/, "") ||
    "https://api.syntrix.solutions"
  );
}

function syntrixKodaEnabled(): boolean {
  const flag = process.env.KODA_USE_SYNTRIX?.trim().toLowerCase();
  if (flag === "false" || flag === "0") return false;
  if (flag === "true" || flag === "1") return true;
  if (process.env.NETLIFY === "true") return true;
  if (process.env.VERCEL === "1") return true;
  if (process.env.NODE_ENV === "production") return true;
  return false;
}

/** ForgEd GAS session + server-side Ollama (see README — requires OLLAMA_BASE_URL on Netlify). */
export function useForgedAccountKoda(): boolean {
  return Boolean(process.env.FORGED_WEB_APP_URL?.trim());
}

/** Syntrix KODA API — only when ForgEd accounts are not configured. */
export function useSyntrixKoda(): boolean {
  if (useForgedAccountKoda()) return false;
  return syntrixKodaEnabled();
}

export function extractBearer(authHeader: string | null | undefined): string | null {
  if (!authHeader) return null;
  const m = authHeader.match(/^Bearer\s+(.+)$/i);
  return m?.[1]?.trim() || null;
}
