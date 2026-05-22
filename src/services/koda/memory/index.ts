/**
 * KODA memory service — per ForgEd user account (Google Sheets), isolated from Syntrix/CoverIQ.
 */

import type { KodaChatMessage, KodaChatRequest, KodaLearningContext } from "@/services/ai/types";
import { extractBearerToken, getForgedUserFromToken } from "@/lib/forged-account/server";
import { isKodaMemoryEnabled } from "./config";
import { extractKodaFactsFromTurn } from "./extract";
import { prepareKodaMemoryFromAccount, saveKodaTurnToAccount } from "./gasStore";
import { formatMemoryBlock } from "./gasStore";
import { hasActiveLessonContext, isCasualGreeting } from "./greeting";
import type { KodaMemoryFact, KodaPrepareResult } from "./types";

export { isCasualGreeting, hasActiveLessonContext } from "./greeting";

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
  const freshGreeting =
    isCasualGreeting(query) && !hasActiveLessonContext(request.context);

  try {
    const prepared: KodaPrepareResult = await prepareKodaMemoryFromAccount({
      accessToken: token,
      sessionId,
      query,
      context: request.context,
    });

    if (freshGreeting) {
      return {
        enabled: true,
        memoryBlock: formatMemoryBlock(prepared.progressBlock, []),
        transcript: request.messages,
      };
    }

    return {
      enabled: true,
      memoryBlock: prepared.memoryBlock,
      // UI sends the full active thread; do not prepend older GAS rows (wrong topic/session).
      transcript: request.messages,
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

  if (isCasualGreeting(userMessage) && !hasActiveLessonContext(request.context)) {
    try {
      await saveKodaTurnToAccount({
        accessToken: token,
        sessionId,
        userMessage,
        assistantMessage,
        mode,
        context: request.context,
        facts: [],
      });
    } catch {
      /* non-fatal */
    }
    return;
  }

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
