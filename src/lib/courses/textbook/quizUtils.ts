import type { QuizQuestion } from "@/lib/quizTypes";
import { COURSE_REVIEW_QUIZ_LENGTH } from "@/lib/quizTypes";
import {
  getChapterQuizLength,
  getFinalExamLength,
  getSectionQuizLength,
} from "@/lib/quizCyber";
import {
  getQuizBankSize,
  pickRandomQuestions,
  prepareQuestionsForAttempt,
  questionsForChapter,
  shuffleQuestions,
} from "./quizRegistry";

export { shuffleQuestions, getQuizBankSize, questionsForChapter };

export function pickSectionQuiz(slug: string, chapterNumber: number): QuizQuestion[] {
  const len = getSectionQuizLength(slug);
  const pool = questionsForChapter(slug, chapterNumber);
  if (pool.length >= len) {
    return prepareQuestionsForAttempt(shuffleQuestions(pool).slice(0, len));
  }
  return pickRandomQuestions(slug, len, { chapterNumber });
}

export function pickChapterQuiz(slug: string, chapterNumber: number): QuizQuestion[] {
  const len = getChapterQuizLength(slug);
  const pool = questionsForChapter(slug, chapterNumber);
  if (pool.length >= len) {
    return prepareQuestionsForAttempt(shuffleQuestions(pool).slice(0, len));
  }
  return pickRandomQuestions(slug, len, { chapterNumber });
}

export function pickCourseReviewQuiz(slug: string): QuizQuestion[] {
  return pickRandomQuestions(slug, COURSE_REVIEW_QUIZ_LENGTH);
}

export function pickFinalExam(slug: string): QuizQuestion[] {
  return pickRandomQuestions(slug, getFinalExamLength(slug));
}

/** @deprecated */
export function pickChapterQuickCheck(
  slug: string,
  chapterNumber: number,
  count?: number
): QuizQuestion[] {
  const len = count ?? getChapterQuizLength(slug);
  return pickChapterQuiz(slug, chapterNumber).slice(0, len);
}

export function pickQuizSessionForCourse(slug: string): QuizQuestion[] {
  return pickCourseReviewQuiz(slug);
}
