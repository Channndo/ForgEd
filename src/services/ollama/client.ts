/**
 * Server-side Ollama HTTP client — shared Omnistrata inference pipeline.
 * Browser never calls Ollama directly; API routes use this module.
 */

import { getOllamaSettings, ollamaChatUrl, ollamaTagsUrl } from "./config";

export interface OllamaMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface ChatOptions {
  temperature?: number;
  numCtx?: number;
  numPredict?: number;
  signal?: AbortSignal;
}

function mergeAbortSignals(a: AbortSignal, b: AbortSignal): AbortSignal {
  if (typeof AbortSignal !== "undefined" && "any" in AbortSignal) {
    return AbortSignal.any([a, b]);
  }
  const merged = new AbortController();
  const onAbort = () => merged.abort();
  a.addEventListener("abort", onAbort);
  b.addEventListener("abort", onAbort);
  if (a.aborted || b.aborted) merged.abort();
  return merged.signal;
}

function authHeaders(apiKey: string): HeadersInit {
  if (!apiKey) return {};
  return { Authorization: `Bearer ${apiKey}` };
}

function buildBody(
  model: string,
  messages: OllamaMessage[],
  stream: boolean,
  opts?: ChatOptions
) {
  const settings = getOllamaSettings();
  return {
    model,
    messages,
    stream,
    options: {
      temperature: opts?.temperature ?? settings.temperature,
      num_ctx: opts?.numCtx ?? settings.numCtx,
      num_predict: opts?.numPredict ?? settings.numPredict,
    },
  };
}

export async function ollamaHealth(): Promise<{
  ok: boolean;
  model: string;
  baseUrl: string;
}> {
  const settings = getOllamaSettings();
  try {
    const r = await fetch(ollamaTagsUrl(settings.baseUrl), {
      headers: authHeaders(settings.apiKey),
      signal: AbortSignal.timeout(8000),
    });
    return {
      ok: r.ok,
      model: settings.model,
      baseUrl: settings.baseUrl,
    };
  } catch {
    return { ok: false, model: settings.model, baseUrl: settings.baseUrl };
  }
}

/** Aggregate streamed NDJSON into one assistant reply (Syntrix pattern). */
export async function ollamaChatAggregate(
  messages: OllamaMessage[],
  opts?: ChatOptions
): Promise<{ content: string; model: string }> {
  const settings = getOllamaSettings();
  const url = ollamaChatUrl(settings.baseUrl);
  const wallMs = (settings.httpTimeoutSeconds + 60) * 1000;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), wallMs);
  const signal = opts?.signal
    ? mergeAbortSignals(opts.signal, controller.signal)
    : controller.signal;

  try {
    const r = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeaders(settings.apiKey),
      },
      body: JSON.stringify(
        buildBody(settings.model, messages, true, opts)
      ),
      signal,
    });

    if (!r.ok) {
      const errText = await r.text().catch(() => "");
      throw new OllamaError(
        r.status,
        parseOllamaError(errText, settings.model)
      );
    }

    const reader = r.body?.getReader();
    if (!reader) throw new OllamaError(502, "Empty response from Ollama.");

    const decoder = new TextDecoder();
    let buffer = "";
    let usedModel = settings.model;
    const parts: string[] = [];

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        try {
          const obj = JSON.parse(trimmed) as {
            model?: string;
            message?: { content?: string };
          };
          if (typeof obj.model === "string" && obj.model.trim()) {
            usedModel = obj.model.trim();
          }
          const piece = obj.message?.content;
          if (typeof piece === "string" && piece) parts.push(piece);
        } catch {
          /* skip malformed NDJSON line */
        }
      }
    }

    return { content: parts.join("").trim(), model: usedModel };
  } finally {
    clearTimeout(timer);
  }
}

/** Stream assistant tokens for SSE to the browser. */
export async function* ollamaChatStream(
  messages: OllamaMessage[],
  opts?: ChatOptions
): AsyncGenerator<string> {
  const settings = getOllamaSettings();
  const url = ollamaChatUrl(settings.baseUrl);
  const wallMs = (settings.httpTimeoutSeconds + 60) * 1000;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), wallMs);
  const signal = opts?.signal
    ? mergeAbortSignals(opts.signal, controller.signal)
    : controller.signal;

  try {
    const r = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeaders(settings.apiKey),
      },
      body: JSON.stringify(
        buildBody(settings.model, messages, true, opts)
      ),
      signal,
    });

    if (!r.ok) {
      const errText = await r.text().catch(() => "");
      throw new OllamaError(
        r.status,
        parseOllamaError(errText, settings.model)
      );
    }

    const reader = r.body?.getReader();
    if (!reader) return;

    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        try {
          const obj = JSON.parse(trimmed) as {
            message?: { content?: string };
            done?: boolean;
          };
          const piece = obj.message?.content;
          if (typeof piece === "string" && piece) yield piece;
        } catch {
          /* skip */
        }
      }
    }
  } finally {
    clearTimeout(timer);
  }
}

export class OllamaError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message);
    this.name = "OllamaError";
  }
}

function parseOllamaError(raw: string, model: string): string {
  const low = raw.toLowerCase();
  if (low.includes("not found") && low.includes("model")) {
    return `Ollama model "${model}" is not installed on the shared host. Run \`ollama pull ${model}\` or set OLLAMA_MODEL to a pulled tag.`;
  }
  return "Model server error. Check OLLAMA_BASE_URL and OLLAMA_API_KEY on the ForgEd API host.";
}
