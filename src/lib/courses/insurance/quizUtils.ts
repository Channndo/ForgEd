import type { QuizQuestion } from "@/lib/quizTypes";
import {
  CHAPTER_QUICK_CHECK_LENGTH,
  QUIZ_SESSION_LENGTH,
} from "@/lib/quizTypes";
import { INSURANCE_QUIZ_BANK } from "./quizBank";
import { TEXTBOOK_CHAPTER_COUNT } from "./textbook";

const LIFE_HEALTH_QUESTION_IDS = new Set([
  "q55", "q56", "q57", "q58", "q59", "q60", "q61",
]);

const LIFE_HEALTH_ID_MAX = 105;
const BUYING_GUIDE_IDS = new Set(["q106", "q107", "q108"]);
const AGENCY_IDS = new Set(["q109", "q110"]);

export function chapterForQuizQuestion(id: string): number {
  if (BUYING_GUIDE_IDS.has(id)) return 12;
  if (AGENCY_IDS.has(id)) return 13;
  const n = parseInt(id.replace(/\D/g, ""), 10);
  if (!Number.isFinite(n) || n < 1) return 1;
  if (LIFE_HEALTH_QUESTION_IDS.has(id) || (n >= 76 && n <= LIFE_HEALTH_ID_MAX)) {
    return 7;
  }
  const legacyChapter = Math.min(10, Math.max(1, Math.ceil(n / 7.5)));
  if (legacyChapter >= 7) return legacyChapter + 1;
  return legacyChapter;
}

export function shuffleQuestions<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function questionsForChapter(chapterNumber: number): QuizQuestion[] {
  return INSURANCE_QUIZ_BANK.filter(
    (q) => chapterForQuizQuestion(q.id) === chapterNumber
  );
}

export function pickChapterQuickCheck(
  chapterNumber: number,
  count = CHAPTER_QUICK_CHECK_LENGTH
): QuizQuestion[] {
  const pool = questionsForChapter(chapterNumber);
  if (pool.length <= count) return shuffleQuestions([...pool]);
  return shuffleQuestions(pool).slice(0, count);
}

export function pickQuizSession(count = QUIZ_SESSION_LENGTH): QuizQuestion[] {
  if (count === TEXTBOOK_CHAPTER_COUNT) {
    const byChapter = new Map<number, QuizQuestion[]>();
    for (const question of INSURANCE_QUIZ_BANK) {
      const ch = chapterForQuizQuestion(question.id);
      const list = byChapter.get(ch) ?? [];
      list.push(question);
      byChapter.set(ch, list);
    }
    const picked: QuizQuestion[] = [];
    for (let ch = 1; ch <= TEXTBOOK_CHAPTER_COUNT; ch++) {
      const pool = byChapter.get(ch);
      if (pool?.length) {
        picked.push(shuffleQuestions(pool)[0]);
      }
    }
    return shuffleQuestions(picked);
  }
  return shuffleQuestions(INSURANCE_QUIZ_BANK).slice(0, count);
}
