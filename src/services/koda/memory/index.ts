/**
 * KODA memory service — per ForgEd user account (Google Sheets), isolated from Syntrix/CoverIQ.
 */

import type { KodaChatMessage, KodaChatRequest, KodaLearningContext } from "@/services/ai/types";
import { extractBearerToken, getForgedUserFromToken } from "@/lib/forged-account/server";
import { isKodaMemoryEnabled } from "./config";
import { extractKodaFactsFromTurn } from "./extract";
import { prepareKodaMemoryFromAccount, saveKodaTurnToAccount } from "./gasStore";
import type { KodaMemoryFact, KodaPrepareResult } from "./types";

export type { KodaMemoryFact, KodaPrepareResult } from "./types";
export { isKodaMemoryEnabled } from "./config";

function lastUserMessage(messages: KodaChatMessage[]): string {
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].role === "user") return messages[i].content;
  }
  return "";
}

export async function prepareKodaTurnMemory(
  authHeader: string | null | undefined,
  request: KodaChatRequest
): Promise<{
  enabled: boolean;
  memoryBlock: string;
  transcript: KodaChatMessage[];
}> {
  if (!isKodaMemoryEnabled()) {
    return { enabled: false, memoryBlock: "", transcript: request.messages };
  }

  const token = extractBearerToken(authHeader);
  const user = await getForgedUserFromToken(token);
  if (!user?.userId || !token) {
    return { enabled: false, memoryBlock: "", transcript: request.messages };
  }

  const sessionId = request.sessionId ?? "";
  const query = lastUserMessage(request.messages);

  try {
    const prepared: KodaPrepareResult = await prepareKodaMemoryFromAccount({
      accessToken: token,
      sessionId,
      query,
      context: request.context,
    });

    const prior = prepared.transcript;
    const latest = request.messages.slice(-1);
    const transcript =
      prior.length > 0
        ? [...prior, ...latest.filter((m) => m.role === "user" || m.role === "assistant")]
        : request.messages;

    return {
      enabled: true,
      memoryBlock: prepared.memoryBlock,
      transcript,
    };
  } catch {
    return { enabled: false, memoryBlock: "", transcript: request.messages };
  }
}

export async function persistKodaTurnMemory(
  authHeader: string | null | undefined,
  request: KodaChatRequest,
  assistantMessage: string
): Promise<void> {
  if (!isKodaMemoryEnabled()) return;

  const token = extractBearerToken(authHeader);
  const user = await getForgedUserFromToken(token);
  if (!user?.userId || !token) return;

  const sessionId = request.sessionId ?? "";
  if (!sessionId) return;

  const userMessage = lastUserMessage(request.messages);
  const mode = request.mode ?? "chat";

  let facts: KodaMemoryFact[] = [];
  try {
    facts = await extractKodaFactsFromTurn({
      userMessage,
      assistantMessage,
      mode,
      context: request.context,
    });
  } catch {
    facts = [];
  }

  try {
    await saveKodaTurnToAccount({
      accessToken: token,
      sessionId,
      userMessage,
      assistantMessage,
      mode,
      context: request.context,
      facts,
    });
  } catch {
    /* chat already succeeded — do not fail the user */
  }
}
