/**
 * KODA fact extraction — ForgEd-only prompts; stored on user account via GAS.
 */

import { ollamaChatAggregate } from "@/services/ollama";
import type { KodaLearningContext, KodaMode } from "@/services/ai/types";
import type { KodaFactType, KodaMemoryFact } from "./types";

const EXTRACT_SYSTEM = `You extract durable learning facts about a ForgEd learner from one chat exchange.
Return ONLY valid JSON: {"facts":[{"factType":"goal|skill_level|preference|misconception|context","content":"...","confidence":0.0-1.0,"courseSlug":""}],"noop":false}
Rules:
- Only stable facts worth remembering next month (goals, skill level, preferences, recurring misconceptions).
- Skip passwords, medical/legal advice requests, one-off chit-chat.
- Use courseSlug from context when relevant.
- If nothing to store, {"facts":[],"noop":true}`;

export async function extractKodaFactsFromTurn(params: {
  userMessage: string;
  assistantMessage: string;
  mode: KodaMode;
  context?: KodaLearningContext;
}): Promise<KodaMemoryFact[]> {
  const ctx = params.context;
  const userPayload = JSON.stringify({
    mode: params.mode,
    courseSlug: ctx?.courseSlug ?? "",
    courseTitle: ctx?.courseTitle ?? "",
    user: params.userMessage.slice(0, 2000),
    assistant: params.assistantMessage.slice(0, 2000),
  });

  try {
    const { content } = await ollamaChatAggregate([
      { role: "system", content: EXTRACT_SYSTEM },
      { role: "user", content: userPayload },
    ]);

    const parsed = JSON.parse(content.replace(/```json|```/g, "").trim()) as {
      facts?: Array<{
        factType?: string;
        content?: string;
        confidence?: number;
        courseSlug?: string;
      }>;
      noop?: boolean;
    };

    if (parsed.noop || !Array.isArray(parsed.facts)) return [];

    const allowed = new Set<KodaFactType>([
      "preference",
      "skill_level",
      "goal",
      "misconception",
      "context",
    ]);

    return parsed.facts
      .filter((f) => f.content?.trim())
      .map((f) => ({
        factType: (allowed.has(f.factType as KodaFactType)
          ? f.factType
          : "context") as KodaFactType,
        content: String(f.content).trim().slice(0, 2000),
        confidence: Math.min(1, Math.max(0, Number(f.confidence) || 0.7)),
        courseSlug: String(f.courseSlug || ctx?.courseSlug || "").trim() || undefined,
      }))
      .slice(0, 6);
  } catch {
    return [];
  }
}
