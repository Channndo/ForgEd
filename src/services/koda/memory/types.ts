/**
 * KODA / ForgEd ONLY — memory types. Not used by Syntrix MIRA or CoverIQ.
 */

import type { KodaChatMessage, KodaLearningContext, KodaMode } from "@/services/ai/types";

export const KODA_MEMORY_VENTURE = "forged" as const;
export const KODA_MEMORY_ASSISTANT = "koda" as const;

export type KodaFactType =
  | "preference"
  | "skill_level"
  | "goal"
  | "misconception"
  | "context";

export interface KodaMemoryFact {
  factId?: string;
  factType: KodaFactType;
  content: string;
  confidence: number;
  courseSlug?: string;
}

export interface KodaPrepareResult {
  transcript: KodaChatMessage[];
  memoryFacts: KodaMemoryFact[];
  progressBlock: string;
  memoryBlock: string;
}

export interface KodaAfterTurnInput {
  sessionId: string;
  userMessage: string;
  assistantMessage: string;
  mode: KodaMode;
  context?: KodaLearningContext;
  userId: string;
}
