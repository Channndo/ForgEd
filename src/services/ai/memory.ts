/**
 * Future Omnistrata memory layer placeholder.
 * KODA will plug into shared Redis / Qdrant / Postgres patterns (see KODA MemoryService)
 * without coupling ForgEd UI to MIRA branding.
 */

import type { KodaChatMessage } from "./types";

export interface MemoryRecord {
  sessionId: string;
  userId?: string;
  messages: KodaChatMessage[];
  updatedAt: string;
  venture: "forged";
}

/** In-process stub until shared memory service is wired. */
const sessionStore = new Map<string, MemoryRecord>();

export function isMemoryEnabled(): boolean {
  return process.env.KODA_MEMORY_ENABLED === "true";
}

export async function loadSession(
  sessionId: string
): Promise<MemoryRecord | null> {
  if (!isMemoryEnabled()) return sessionStore.get(sessionId) ?? null;
  // TODO: Redis short-term + Qdrant semantic recall via Omnistrata memory API
  return sessionStore.get(sessionId) ?? null;
}

export async function saveSession(
  sessionId: string,
  messages: KodaChatMessage[],
  userId?: string
): Promise<void> {
  const record: MemoryRecord = {
    sessionId,
    userId,
    messages: messages.slice(-48),
    updatedAt: new Date().toISOString(),
    venture: "forged",
  };
  sessionStore.set(sessionId, record);
  if (!isMemoryEnabled()) return;
  // TODO: persist to shared memory pipeline
}

export async function appendToSession(
  sessionId: string,
  message: KodaChatMessage
): Promise<void> {
  const existing = (await loadSession(sessionId)) ?? {
    sessionId,
    messages: [],
    updatedAt: new Date().toISOString(),
    venture: "forged" as const,
  };
  existing.messages.push(message);
  await saveSession(sessionId, existing.messages, existing.userId);
}
