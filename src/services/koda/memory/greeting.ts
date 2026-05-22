import type { KodaLearningContext } from "@/services/ai/types";

const GREETING_RE =
  /^(hi|hello|hey|yo|howdy|greetings|good\s+(morning|afternoon|evening)|what'?s\s+up|sup)[\s!.?]*$/i;

/** Short openers that should not replay unrelated prior chat or memory facts. */
export function isCasualGreeting(text: string): boolean {
  const t = text.trim();
  if (!t || t.length > 40) return false;
  return GREETING_RE.test(t);
}

export function hasActiveLessonContext(ctx?: KodaLearningContext): boolean {
  if (!ctx) return false;
  return Boolean(
    ctx.lessonExcerpt?.trim() ||
      ctx.quizQuestion?.trim() ||
      (ctx.courseTitle?.trim() && ctx.lessonTitle?.trim())
  );
}
