/**
 * KODA via Syntrix API — same pattern as CoverIQ MIRA (JWT + shared Ollama on api.syntrix.solutions).
 */

import { buildKodaSystemPrompt } from "./kodaPrompt";
import { syntrixApiBase } from "./inference";
import type {
  KodaChatMessage,
  KodaChatRequest,
  KodaChatResponse,
  KodaLearningContext,
  KodaMode,
  KodaStatusResponse,
} from "./types";

function clientMessages(messages: KodaChatMessage[]) {
  return messages
    .filter((m) => m.role === "user" || m.role === "assistant")
    .map((m) => ({ role: m.role, content: m.content }));
}

export async function getSyntrixKodaStatus(): Promise<KodaStatusResponse> {
  try {
    const r = await fetch(`${syntrixApiBase()}/api/koda/status`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(8000),
    });
    const data = (await r.json()) as {
      enabled?: boolean;
      model?: string;
      cognitive_stack?: string;
      assistant?: string;
    };
    return {
      enabled: Boolean(data.enabled),
      available: r.ok && Boolean(data.enabled),
      model: data.model ?? "",
      cognitiveStack: "Omnistrata-Ollama",
      assistant: "KODA",
      requiresSignIn: true,
    };
  } catch {
    return {
      enabled: false,
      available: false,
      model: "",
      cognitiveStack: "Omnistrata-Ollama",
      assistant: "KODA",
      requiresSignIn: true,
    };
  }
}

export async function syntrixKodaChat(
  request: KodaChatRequest,
  authHeader: string | null
): Promise<KodaChatResponse> {
  if (!authHeader) {
    throw new SyntrixKodaError(
      401,
      "Sign in with your Omnistrata account to use KODA."
    );
  }

  const mode = (request.mode ?? "chat") as KodaMode;
  const systemPrompt = buildKodaSystemPrompt(mode, request.context);
  const conversation = clientMessages(request.messages);
  const lastUser = [...conversation].reverse().find((m) => m.role === "user");
  if (!lastUser?.content?.trim()) {
    throw new SyntrixKodaError(400, "A user message is required.");
  }

  const r = await fetch(`${syntrixApiBase()}/api/koda/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: authHeader,
    },
    body: JSON.stringify({
      messages: conversation,
      mode,
      systemPrompt,
    }),
    signal: AbortSignal.timeout(120_000),
  });

  const data = (await r.json().catch(() => ({}))) as {
    message?: string;
    model?: string;
    detail?: string;
  };

  if (!r.ok) {
    throw new SyntrixKodaError(
      r.status,
      typeof data.detail === "string"
        ? data.detail
        : r.status === 401
          ? "Sign in with your Omnistrata account to use KODA."
          : "KODA is temporarily unavailable."
    );
  }

  return {
    message: data.message ?? "",
    model: data.model ?? "",
    sessionId: request.sessionId,
  };
}

export class SyntrixKodaError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message);
    this.name = "SyntrixKodaError";
  }
}
