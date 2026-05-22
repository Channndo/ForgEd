"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import type { QuizQuestion } from "@/lib/quizTypes";

/** Draw a fresh randomized question set on mount and whenever `newAttempt` runs. */
export function useQuizAttempt(pick: () => QuizQuestion[]) {
  const pickRef = useRef(pick);
  pickRef.current = pick;
  const [attempt, setAttempt] = useState(0);
  const questions = useMemo(() => pickRef.current(), [attempt]);
  const newAttempt = useCallback(() => setAttempt((n) => n + 1), []);
  return { questions, attemptKey: attempt, newAttempt };
}
