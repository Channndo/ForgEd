/**
 * KODA memory persistence on ForgEd Google Sheets (per user account).
 * FORGED ONLY — never Syntrix or CoverIQ backends.
 */

import { callForgedGas } from "@/lib/forged-account/gasClient";
import type { KodaChatMessage, KodaLearningContext, KodaMode } from "@/services/ai/types";
import { KODA_MEMORY_MAX_FACTS, KODA_MEMORY_TOP_K } from "./config";
import type { KodaMemoryFact, KodaPrepareResult } from "./types";

export function formatMemoryBlock(
  progressBlock: string,
  facts: KodaMemoryFact[]
): string {
  const lines: string[] = [];
  if (progressBlock?.trim()) {
    lines.push(progressBlock.trim());
  }
  if (facts.length) {
    lines.push(
      "",
      "## Learner memory (ForgEd KODA only — personalize; prefer current lesson if conflict)"
    );
    for (const f of facts) {
      lines.push(`- [${f.factType}] ${f.content}`);
    }
  }
  return lines.join("\n").trim();
}

export async function prepareKodaMemoryFromAccount(params: {
  accessToken: string;
  sessionId: string;
  query: string;
  context?: KodaLearningContext;
}): Promise<KodaPrepareResult> {
  const data = await callForgedGas({
    action: "kodaMemoryPrepare",
    accessToken: params.accessToken,
    sessionId: params.sessionId,
    query: params.query,
    courseSlug: params.context?.courseSlug ?? "",
    topK: KODA_MEMORY_TOP_K,
    maxMessages: 24,
  });

  const transcript = Array.isArray(data.transcript)
    ? (data.transcript as KodaChatMessage[])
    : [];
  const memoryFacts = Array.isArray(data.memoryFacts)
    ? (data.memoryFacts as KodaMemoryFact[])
    : [];
  const progressBlock = String(data.progressBlock || "");

  return {
    transcript,
    memoryFacts,
    progressBlock,
    memoryBlock: formatMemoryBlock(progressBlock, memoryFacts),
  };
}

export async function saveKodaTurnToAccount(params: {
  accessToken: string;
  sessionId: string;
  userMessage: string;
  assistantMessage: string;
  mode: KodaMode;
  context?: KodaLearningContext;
  facts: KodaMemoryFact[];
}): Promise<void> {
  await callForgedGas({
    action: "kodaMemorySaveTurn",
    accessToken: params.accessToken,
    sessionId: params.sessionId,
    userMessage: params.userMessage,
    assistantMessage: params.assistantMessage,
    mode: params.mode,
    courseSlug: params.context?.courseSlug ?? "",
    facts: params.facts,
    maxFacts: KODA_MEMORY_MAX_FACTS,
  });
}
