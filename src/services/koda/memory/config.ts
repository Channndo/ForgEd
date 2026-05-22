/**
 * KODA / ForgEd ONLY — memory feature flags.
 */

export function isKodaMemoryEnabled(): boolean {
  if (process.env.KODA_MEMORY_DISABLED === "true") return false;
  if (process.env.KODA_MEMORY_ENABLED === "true") return true;
  return Boolean(process.env.FORGED_WEB_APP_URL?.trim());
}

export const KODA_MEMORY_TOP_K = 8;
export const KODA_MEMORY_MAX_FACTS = 200;
