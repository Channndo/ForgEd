/**
 * KODA via Syntrix API — same Hetzner Ollama host as MIRA/CoverIQ.
 * ForgEd Netlify validates the learner session, then calls Syntrix with FORGED_SERVER_SECRET.
 */

import { buildKodaSystemPrompt } from "./kodaPrompt";
import { syntrixApiBase } from "./inference";
import type {
  KodaChatMessage,
  KodaChatRequest,
  KodaChatResponse,
  KodaStatusResponse,
} from "./types";

const SERVER_SECRET = process.env.FORGED_SERVER_SECRET?.trim() ?? "";

function secretHeaders(): HeadersInit {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Forged-Server-Secret": SERVER_SECRET,
  };
}

export function isForgedSyntrixKodaConfigured(): boolean {
  return Boolean(SERVER_SECRET && syntrixApiBase());
}

export async function getForgedSyntrixKodaStatus(): Promise<KodaStatusResponse> {
  if (!isForgedSyntrixKodaConfigured()) {
    return {
      enabled: false,
      available: false,
      model: "",
      cognitiveStack: "Omnistrata-Ollama",
      assistant: "KODA",
      requiresSignIn: true,
      detail: "FORGED_SERVER_SECRET is not set on the ForgEd API host.",
    };
  }
  try {
    const r = await fetch(`${syntrixApiBase()}/api/forged/koda/status`, {
      headers: secretHeaders(),
      signal: AbortSignal.timeout(12_000),
    });
    const data = (await r.json().catch(() => ({}))) as {
      enabled?: boolean;
      model?: string;
      cognitive_stack?: string;
      assistant?: string;
      detail?: string;
    };
    const enabled = r.ok && Boolean(data.enabled);
    return {
      enabled,
      available: enabled,
      model: data.model ?? "",
      cognitiveStack: "Omnistrata-Ollama",
      assistant: "KODA",
      requiresSignIn: true,
      detail:
        typeof data.detail === "string"
          ? data.detail
          : !r.ok
            ? "Syntrix KODA bridge unavailable — deploy the latest Syntrix API to Render."
            : undefined,
    };
  } catch {
    return {
      enabled: false,
      available: false,
      model: "",
      cognitiveStack: "Omnistrata-Ollama",
      assistant: "KODA",
      requiresSignIn: true,
      detail:
        "Could not reach Syntrix API. Deploy Syntrix with /api/forged/koda and matching FORGED_SERVER_SECRET.",
    };
  }
}

export async function forgedSyntrixKodaChat(
  request: KodaChatRequest
): Promise<KodaChatResponse> {
  if (!isForgedSyntrixKodaConfigured()) {
    throw new ForgedSyntrixKodaError(
      503,
      "KODA is not configured. Set FORGED_SERVER_SECRET on ForgEd and Syntrix (Render)."
    );
  }

  const mode = request.mode ?? "chat";
  const systemPrompt = buildKodaSystemPrompt(mode, request.context);
  const messages = request.messages
    .filter((m) => m.role === "user" || m.role === "assistant")
    .map((m) => ({ role: m.role, content: m.content }));

  const r = await fetch(`${syntrixApiBase()}/api/forged/koda/chat`, {
    method: "POST",
    headers: secretHeaders(),
    body: JSON.stringify({ messages, system_prompt: systemPrompt }),
    signal: AbortSignal.timeout(120_000),
  });

  const data = (await r.json().catch(() => ({}))) as {
    message?: string;
    model?: string;
    detail?: string;
  };

  if (!r.ok) {
    throw new ForgedSyntrixKodaError(
      r.status,
      typeof data.detail === "string"
        ? data.detail
        : "KODA is temporarily unavailable on the shared AI host."
    );
  }

  return {
    message: data.message ?? "",
    model: data.model ?? "",
    sessionId: request.sessionId,
  };
}

export class ForgedSyntrixKodaError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message);
    this.name = "ForgedSyntrixKodaError";
  }
}
