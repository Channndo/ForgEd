import type { QuizQuestion } from "@/lib/quizTypes";
import { CHAPTER_QUICK_CHECK_LENGTH, QUIZ_SESSION_LENGTH } from "@/lib/quizTypes";
import {
  pickQuizSession as pickInsuranceQuiz,
  questionsForChapter as insuranceQuestionsForChapter,
} from "@/lib/courses/insurance/quizUtils";
import { getTextbookChapterCount } from "./registry";
import { TEXTBOOK_QUIZ_BANKS } from "./quizBanks";

export function shuffleQuestions<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Pick one question per chapter when IDs encode chapter (e.g. ai-ch03-01). */
export function pickQuizSessionForCourse(slug: string): QuizQuestion[] {
  if (slug === "insurance-fundamentals") {
    return pickInsuranceQuiz(getTextbookChapterCount(slug));
  }

  const bank = TEXTBOOK_QUIZ_BANKS[slug];
  const chapterCount = getTextbookChapterCount(slug);
  if (!bank?.length || chapterCount < 1) return [];

  const byChapter = new Map<number, QuizQuestion[]>();
  for (const question of bank) {
    const match = question.id.match(/-ch(\d{2})-/);
    const ch = match ? parseInt(match[1], 10) : 1;
    const list = byChapter.get(ch) ?? [];
    list.push(question);
    byChapter.set(ch, list);
  }

  const picked: QuizQuestion[] = [];
  for (let ch = 1; ch <= chapterCount; ch++) {
    const pool = byChapter.get(ch);
    if (pool?.length) picked.push(shuffleQuestions(pool)[0]);
  }

  if (picked.length >= chapterCount) return shuffleQuestions(picked);

  return shuffleQuestions(bank).slice(
    0,
    Math.min(QUIZ_SESSION_LENGTH, bank.length, chapterCount)
  );
}

export function questionsForChapter(
  slug: string,
  chapterNumber: number
): QuizQuestion[] {
  if (slug === "insurance-fundamentals") {
    return insuranceQuestionsForChapter(chapterNumber);
  }
  const bank = TEXTBOOK_QUIZ_BANKS[slug] ?? [];
  const chKey = String(chapterNumber).padStart(2, "0");
  return bank.filter((q) => q.id.includes(`-ch${chKey}-`));
}

export function pickChapterQuickCheck(
  slug: string,
  chapterNumber: number,
  count = CHAPTER_QUICK_CHECK_LENGTH
): QuizQuestion[] {
  const pool = questionsForChapter(slug, chapterNumber);
  if (pool.length <= count) return shuffleQuestions([...pool]);
  return shuffleQuestions(pool).slice(0, count);
}

export function getQuizBankSize(slug: string): number {
  if (slug === "insurance-fundamentals") {
    return 110;
  }
  return TEXTBOOK_QUIZ_BANKS[slug]?.length ?? 0;
}
