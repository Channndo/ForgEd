import type {
  KodaChatMessage,
  KodaChatResponse,
  KodaLearningContext,
  KodaMode,
  KodaStatusResponse,
} from "./types";
import { apiUrl } from "@/lib/basePath";

export async function fetchKodaStatus(): Promise<KodaStatusResponse & { responded: boolean }> {
  try {
    const r = await fetch(apiUrl("/api/koda/status"), { cache: "no-store" });
    const data = (await r.json()) as KodaStatusResponse;
    return { ...data, responded: true };
  } catch {
    return {
      enabled: false,
      available: false,
      model: "",
      cognitiveStack: "Omnistrata-Ollama",
      assistant: "KODA",
      responded: false,
    };
  }
}

export async function sendKodaChat(params: {
  messages: KodaChatMessage[];
  mode?: KodaMode;
  context?: KodaLearningContext;
  sessionId?: string;
  stream?: boolean;
  onToken?: (chunk: string) => void;
}): Promise<{
  ok: boolean;
  status: number;
  data?: KodaChatResponse;
  error?: string;
}> {
  const { stream, onToken, ...body } = params;

  if (stream && onToken) {
    try {
      const r = await fetch(apiUrl("/api/koda/chat?stream=1"), {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "text/event-stream" },
        body: JSON.stringify({ ...body, stream: true }),
      });
      if (!r.ok) {
        const err = await r.json().catch(() => ({}));
        return {
          ok: false,
          status: r.status,
          error: (err as { detail?: string }).detail || "KODA is temporarily unavailable.",
        };
      }
      const reader = r.body?.getReader();
      if (!reader) return { ok: false, status: 502, error: "No stream body." };

      const decoder = new TextDecoder();
      let full = "";
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          try {
            const payload = JSON.parse(line.slice(6)) as {
              content?: string;
              done?: boolean;
              error?: string;
              sessionId?: string;
              model?: string;
            };
            if (payload.error) {
              return { ok: false, status: 502, error: payload.error };
            }
            if (payload.content) {
              full += payload.content;
              onToken(payload.content);
            }
            if (payload.done) {
              return {
                ok: true,
                status: 200,
                data: {
                  message: full,
                  model: payload.model ?? "",
                  sessionId: payload.sessionId,
                },
              };
            }
          } catch {
            /* skip */
          }
        }
      }
      return { ok: true, status: 200, data: { message: full, model: "" } };
    } catch (e) {
      return {
        ok: false,
        status: 0,
        error: e instanceof Error ? e.message : "Could not reach KODA.",
      };
    }
  }

  try {
    const r = await fetch(apiUrl("/api/koda/chat"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = (await r.json().catch(() => ({}))) as KodaChatResponse & {
      detail?: string;
    };
    if (!r.ok) {
      return {
        ok: false,
        status: r.status,
        error: data.detail || "KODA is temporarily unavailable.",
      };
    }
    return { ok: true, status: r.status, data };
  } catch (e) {
    return {
      ok: false,
      status: 0,
      error: e instanceof Error ? e.message : "Could not reach KODA.",
    };
  }
}

export async function kodaSummarize(context: KodaLearningContext): Promise<string | null> {
  const r = await fetch(apiUrl("/api/koda/summarize"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ context }),
  });
  const data = (await r.json().catch(() => ({}))) as { summary?: string; detail?: string };
  if (!r.ok) return null;
  return data.summary ?? null;
}

export async function kodaExplainQuiz(context: KodaLearningContext): Promise<string | null> {
  const r = await fetch(apiUrl("/api/koda/explain-quiz"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ context }),
  });
  const data = (await r.json().catch(() => ({}))) as { explanation?: string };
  if (!r.ok) return null;
  return data.explanation ?? null;
}

export async function kodaRecommend(context: KodaLearningContext): Promise<{
  message: string | null;
  placeholders: string[];
}> {
  const r = await fetch(apiUrl("/api/koda/recommend"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ context }),
  });
  const data = (await r.json().catch(() => ({}))) as {
    message?: string;
    placeholders?: string[];
  };
  if (!r.ok) {
    return { message: null, placeholders: data.placeholders ?? [] };
  }
  return {
    message: data.message ?? null,
    placeholders: data.placeholders ?? [],
  };
}
