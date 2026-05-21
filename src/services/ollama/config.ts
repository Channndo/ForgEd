/**
 * Omnistrata shared Ollama configuration.
 * Mirrors Syntrix scanner env (config.py) — same runtime, same variable names.
 */

function envBool(name: string, defaultValue = false): boolean {
  const raw = process.env[name];
  if (raw === undefined || raw.trim() === "") return defaultValue;
  return ["1", "true", "yes", "on"].includes(raw.trim().toLowerCase());
}

function envFloat(name: string, defaultValue: number): number {
  const raw = process.env[name];
  if (!raw?.trim()) return defaultValue;
  const n = parseFloat(raw.trim());
  return Number.isFinite(n) ? n : defaultValue;
}

function envIntOptional(name: string): number | undefined {
  const raw = process.env[name]?.trim();
  if (!raw) return undefined;
  const n = parseInt(raw, 10);
  return Number.isFinite(n) ? n : undefined;
}

/** Same remap logic as Syntrix `resolved_ollama_model_from_env`. */
export function resolvedOllamaModel(): string {
  const raw = (process.env.OLLAMA_MODEL || "llama3.2:1b").trim() || "llama3.2:1b";
  if (envBool("SYNTRIX_DISABLE_OLLAMA_MODEL_AUTO_CORRECT", false)) return raw;
  if (raw.toLowerCase() === "llama3.1:8b") return "llama3.2:1b";
  return raw;
}

export interface OllamaSettings {
  baseUrl: string;
  model: string;
  apiKey: string;
  temperature: number;
  numCtx: number;
  numPredict: number;
  httpTimeoutSeconds: number;
  kodaEnabled: boolean;
}

/** ForgEd production keeps KODA on unless explicitly turned off. */
export function isKodaFeatureEnabled(): boolean {
  if (envBool("KODA_DISABLED", false)) return false;
  if (process.env.NETLIFY === "true" || process.env.NODE_ENV === "production") {
    return true;
  }
  if (process.env.FORGED_WEB_APP_URL?.trim()) return true;
  return envBool("KODA_ENABLED", true);
}

/** Same Hetzner host as Syntrix MIRA (see /api/mira/status base_url). */
export function defaultOllamaBaseUrl(): string {
  const raw = process.env.OLLAMA_BASE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  if (process.env.NETLIFY === "true" || process.env.FORGED_WEB_APP_URL?.trim()) {
    return "https://ollama.syntrix.solutions:11434";
  }
  return "http://127.0.0.1:11434";
}

export function getOllamaSettings(): OllamaSettings {
  const ctx = envIntOptional("OLLAMA_NUM_CTX") ?? 4096;
  const pred = envIntOptional("OLLAMA_NUM_PREDICT") ?? 768;

  return {
    baseUrl: defaultOllamaBaseUrl(),
    model: resolvedOllamaModel(),
    apiKey: (process.env.OLLAMA_API_KEY || "").trim(),
    temperature: envFloat("OLLAMA_TEMPERATURE", 0.5),
    numCtx: Math.min(Math.max(512, ctx), 8192),
    numPredict: Math.min(Math.max(64, pred), 2048),
    httpTimeoutSeconds: envFloat("OLLAMA_HTTP_TIMEOUT_SECONDS", 900),
    kodaEnabled: isKodaFeatureEnabled(),
  };
}

export function ollamaChatUrl(baseUrl: string): string {
  return `${baseUrl.replace(/\/$/, "")}/api/chat`;
}

export function ollamaTagsUrl(baseUrl: string): string {
  return `${baseUrl.replace(/\/$/, "")}/api/tags`;
}
