/**
 * KODA AI service — educational layer on shared Omnistrata Ollama inference.
 * Same backbone as MIRA (Syntrix); different system prompts and consumer identity.
 */

import {
  ollamaChatAggregate,
  ollamaChatStream,
  ollamaHealth,
  OllamaError,
  type OllamaMessage,
} from "@/services/ollama";
import { getOllamaSettings } from "@/services/ollama/config";
import { assertKodaAuthorized, kodaRequiresSignIn, KodaAuthError } from "./kodaAuth";
import { forgedGasKodaChat, forgedGasKodaHealth } from "./forgedGasKoda";
import {
  useForgedAccountKoda,
  useForgedGasOllama,
  useSyntrixKoda,
} from "./inference";
import { getSyntrixKodaStatus, syntrixKodaChat, SyntrixKodaError } from "./syntrixKoda";
import { loadSession, saveSession } from "./memory";
import { buildKodaSystemPrompt } from "./kodaPrompt";
import type {
  KodaChatMessage,
  KodaChatRequest,
  KodaChatResponse,
  KodaLearningContext,
  KodaMode,
  KodaStatusResponse,
} from "./types";

const CLIENT_ROLES = new Set(["user", "assistant"]);

function extractBearerFromHeader(authHeader?: string | null): string | undefined {
  if (!authHeader) return undefined;
  const m = authHeader.match(/^Bearer\s+(.+)$/i);
  return m?.[1]?.trim() || undefined;
}

function sanitizeText(text: string): string {
  if (!text) return "";
  return text
    .replace(/\x00/g, "")
    .replace(/\ufeff/g, "")
    .split("")
    .filter((ch) => ch === "\t" || ch === "\n" || ch === "\r" || (ch.charCodeAt(0) >= 32 && ch.charCodeAt(0) !== 127))
    .join("")
    .trim();
}

function toOllamaMessages(
  systemPrompt: string,
  messages: KodaChatMessage[]
): OllamaMessage[] {
  const out: OllamaMessage[] = [{ role: "system", content: systemPrompt }];
  for (const m of messages) {
    if (!CLIENT_ROLES.has(m.role)) continue;
    const content = sanitizeText(m.content);
    if (!content) continue;
    out.push({ role: m.role, content });
  }
  return out;
}

export async function getKodaStatus(
  authHeader?: string | null
): Promise<KodaStatusResponse> {
  const settings = getOllamaSettings();
  if (!settings.kodaEnabled) {
    return {
      enabled: false,
      available: false,
      model: settings.model,
      cognitiveStack: "Omnistrata-Ollama",
      assistant: "KODA",
    };
  }

  const requiresSignIn = await kodaRequiresSignIn();

  if (useSyntrixKoda()) {
    const st = await getSyntrixKodaStatus();
    const hasToken = Boolean(authHeader?.replace(/^Bearer\s+/i, "").trim());
    return {
      ...st,
      available: st.available && hasToken,
      requiresSignIn: true,
    };
  }

  const health = useForgedGasOllama()
    ? await forgedGasKodaHealth().then((h) => ({
        ok: h.ok,
        model: h.model || settings.model,
        baseUrl: h.configured ? "forged-gas" : "",
      }))
    : await ollamaHealth();
  const token = extractBearerFromHeader(authHeader);
  const hasToken = Boolean(token);
  const ollamaUp = health.ok && !!settings.baseUrl;
  const localhostOnHost =
    !useForgedGasOllama() && /127\.0\.0\.1|localhost/i.test(settings.baseUrl);
  let available = settings.kodaEnabled && ollamaUp;
  if (requiresSignIn) {
    available = settings.kodaEnabled && hasToken && (ollamaUp || !localhostOnHost);
    if (!ollamaUp && hasToken && settings.kodaEnabled) {
      available = true;
    }
  }

  return {
    enabled: settings.kodaEnabled,
    available,
    model: settings.model,
    cognitiveStack: "Omnistrata-Ollama",
    assistant: "KODA",
    requiresSignIn,
    degraded: hasToken && settings.kodaEnabled && !ollamaUp,
    detail: !ollamaUp
      ? useForgedGasOllama()
        ? "KODA cannot reach Ollama from ForgEd Apps Script. In Code.gs set FORGED_SETUP.OLLAMA_BASE_URL and OLLAMA_API_KEY, then redeploy the Web App."
        : localhostOnHost
          ? "OLLAMA_BASE_URL is still localhost on the server — set it in Netlify environment variables to your shared Ollama host."
          : `Ollama not reachable at ${settings.baseUrl}`
      : undefined,
  };
}

export function assertKodaEnabled(): void {
  const settings = getOllamaSettings();
  if (!settings.kodaEnabled) {
    throw new KodaServiceError(503, "KODA is disabled on this deployment.");
  }
  if (!settings.baseUrl) {
    throw new KodaServiceError(503, "OLLAMA_BASE_URL is not configured.");
  }
  if (!settings.model) {
    throw new KodaServiceError(503, "OLLAMA_MODEL is not configured.");
  }
}

export async function kodaChat(
  request: KodaChatRequest,
  authHeader?: string | null
): Promise<KodaChatResponse> {
  assertKodaEnabled();
  if (useForgedAccountKoda() || (await kodaRequiresSignIn())) {
    try {
      await assertKodaAuthorized(authHeader);
    } catch (e) {
      if (e instanceof KodaAuthError) {
        throw new KodaServiceError(e.status, e.message);
      }
      throw e;
    }
  }

  if (useSyntrixKoda()) {
    try {
      return await syntrixKodaChat(request, authHeader ?? null);
    } catch (e) {
      if (e instanceof SyntrixKodaError) {
        throw new KodaServiceError(e.status, e.message);
      }
      throw e;
    }
  }

  const mode = request.mode ?? "chat";
  const systemPrompt = buildKodaSystemPrompt(mode, request.context);
  const sessionId = request.sessionId ?? crypto.randomUUID();

  let messages = request.messages;
  if (request.sessionId) {
    const prior = await loadSession(request.sessionId);
    if (prior?.messages.length) {
      messages = [...prior.messages, ...request.messages.slice(-1)];
    }
  }

  const ollamaMessages = toOllamaMessages(systemPrompt, messages);
  if (ollamaMessages.length < 2) {
    throw new KodaServiceError(400, "A user message is required.");
  }

  try {
    const token = extractBearerFromHeader(authHeader);
    const { content, model } = useForgedGasOllama()
      ? await forgedGasKodaChat({
          accessToken: token ?? "",
          messages: ollamaMessages,
          model: getOllamaSettings().model,
        })
      : await ollamaChatAggregate(ollamaMessages);
    const reply = content || "I'm here to help — could you rephrase that?";
    await saveSession(sessionId, [
      ...messages,
      { role: "assistant", content: reply },
    ]);
    return { message: reply, model, sessionId };
  } catch (e) {
    if (e instanceof OllamaError) {
      throw new KodaServiceError(e.status, e.message);
    }
    throw e;
  }
}

export async function* kodaChatStreamGenerator(
  request: KodaChatRequest,
  authHeader?: string | null
): AsyncGenerator<string> {
  assertKodaEnabled();
  if (useForgedAccountKoda() || (await kodaRequiresSignIn())) {
    try {
      await assertKodaAuthorized(authHeader);
    } catch (e) {
      if (e instanceof KodaAuthError) {
        throw new KodaServiceError(e.status, e.message);
      }
      throw e;
    }
  }

  if (useSyntrixKoda()) {
    const result = await syntrixKodaChat(request, authHeader ?? null);
    if (result.message) yield result.message;
    return;
  }

  const mode = request.mode ?? "chat";
  const systemPrompt = buildKodaSystemPrompt(mode, request.context);
  const ollamaMessages = toOllamaMessages(systemPrompt, request.messages);

  if (ollamaMessages.length < 2) {
    throw new KodaServiceError(400, "A user message is required.");
  }

  try {
    for await (const token of ollamaChatStream(ollamaMessages)) {
      yield token;
    }
  } catch (e) {
    if (e instanceof OllamaError) {
      throw new KodaServiceError(e.status, e.message);
    }
    throw e;
  }
}

export async function kodaExplainLesson(
  context: KodaLearningContext,
  userQuestion?: string
): Promise<KodaChatResponse> {
  const prompt =
    userQuestion?.trim() ||
    "Please explain this lesson in simpler terms with one real-world example.";
  return kodaChat({
    messages: [{ role: "user", content: prompt }],
    mode: "lesson",
    context: { ...context, skillLevel: context.skillLevel ?? "beginner" },
  });
}

export async function kodaSummarizeLesson(
  context: KodaLearningContext
): Promise<KodaChatResponse> {
  return kodaChat({
    messages: [
      {
        role: "user",
        content:
          "Summarize this lesson in 4–6 bullet points a beginner can review quickly.",
      },
    ],
    mode: "summarize",
    context,
  });
}

export async function kodaExplainQuiz(
  context: KodaLearningContext
): Promise<KodaChatResponse> {
  return kodaChat({
    messages: [
      {
        role: "user",
        content:
          "Help me understand this quiz question and my answer. Be encouraging.",
      },
    ],
    mode: "quiz_explain",
    context,
  });
}

export async function kodaRecommendNext(
  context: KodaLearningContext
): Promise<KodaChatResponse> {
  return kodaChat({
    messages: [
      {
        role: "user",
        content: "What should I study next on ForgEd and why?",
      },
    ],
    mode: "recommend",
    context,
  });
}

/** Placeholder rules-based recommendations when Ollama is offline. */
export function placeholderRecommendations(
  context: KodaLearningContext
): string[] {
  const recs: string[] = [];
  if (context.courseSlug === "insurance-fundamentals") {
    recs.push("Continue your current Insurance Fundamentals module");
    recs.push("Try Financial Literacy for money skills");
  } else if (!context.completedCourses?.length) {
    recs.push("Start Insurance Fundamentals — our deepest beginner path");
    recs.push("Explore AI Fundamentals for everyday AI literacy");
  } else {
    recs.push("Pick a new category you have not started yet");
    recs.push("Retake a quiz on a module you found challenging");
  }
  if ((context.streak ?? 0) < 3) {
    recs.push("Complete one short lesson today to build your streak");
  }
  return recs;
}

export class KodaServiceError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message);
    this.name = "KodaServiceError";
  }
}
