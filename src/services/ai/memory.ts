/**
 * Ephemeral in-process session cache (fallback when account memory is off).
 * Per-user memory lives in Google Sheets via @/services/koda/memory.
 */

import type { KodaChatMessage } from "./types";

type Session = { messages: KodaChatMessage[]; updatedAt: number };

const sessions = new Map<string, Session>();

const MAX_SESSIONS = 500;
const SESSION_TTL_MS = 24 * 60 * 60 * 1000;

function pruneSessions(): void {
  const now = Date.now();
  for (const [id, s] of sessions) {
    if (now - s.updatedAt > SESSION_TTL_MS) sessions.delete(id);
  }
  if (sessions.size > MAX_SESSIONS) {
    const sorted = [...sessions.entries()].sort(
      (a, b) => a[1].updatedAt - b[1].updatedAt
    );
    for (let i = 0; i < sorted.length - MAX_SESSIONS; i++) {
      sessions.delete(sorted[i][0]);
    }
  }
}

export async function loadSession(
  sessionId: string
): Promise<Session | null> {
  pruneSessions();
  return sessions.get(sessionId) ?? null;
}

export async function saveSession(
  sessionId: string,
  messages: KodaChatMessage[]
): Promise<void> {
  pruneSessions();
  sessions.set(sessionId, { messages, updatedAt: Date.now() });
}
