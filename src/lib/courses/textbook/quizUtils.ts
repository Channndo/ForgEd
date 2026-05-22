import type { QuizQuestion } from "@/lib/quizTypes";
import {
  CHAPTER_QUIZ_LENGTH,
  COURSE_REVIEW_QUIZ_LENGTH,
  FINAL_EXAM_LENGTH,
  SECTION_QUIZ_LENGTH,
} from "@/lib/quizTypes";
import {
  getQuizBankSize,
  pickRandomQuestions,
  prepareQuestionsForAttempt,
  questionsForChapter,
  shuffleQuestions,
} from "./quizRegistry";

export { shuffleQuestions, getQuizBankSize, questionsForChapter };

export function pickSectionQuiz(slug: string, chapterNumber: number): QuizQuestion[] {
  const pool = questionsForChapter(slug, chapterNumber);
  if (pool.length >= SECTION_QUIZ_LENGTH) {
    return prepareQuestionsForAttempt(
      shuffleQuestions(pool).slice(0, SECTION_QUIZ_LENGTH)
    );
  }
  return pickRandomQuestions(slug, SECTION_QUIZ_LENGTH, { chapterNumber });
}

export function pickChapterQuiz(slug: string, chapterNumber: number): QuizQuestion[] {
  const pool = questionsForChapter(slug, chapterNumber);
  if (pool.length >= CHAPTER_QUIZ_LENGTH) {
    return prepareQuestionsForAttempt(
      shuffleQuestions(pool).slice(0, CHAPTER_QUIZ_LENGTH)
    );
  }
  return pickRandomQuestions(slug, CHAPTER_QUIZ_LENGTH, { chapterNumber });
}

export function pickCourseReviewQuiz(slug: string): QuizQuestion[] {
  return pickRandomQuestions(slug, COURSE_REVIEW_QUIZ_LENGTH);
}

export function pickFinalExam(slug: string): QuizQuestion[] {
  return pickRandomQuestions(slug, FINAL_EXAM_LENGTH);
}

/** @deprecated */
export function pickChapterQuickCheck(
  slug: string,
  chapterNumber: number,
  count = CHAPTER_QUIZ_LENGTH
): QuizQuestion[] {
  return pickChapterQuiz(slug, chapterNumber).slice(0, count);
}

export function pickQuizSessionForCourse(slug: string): QuizQuestion[] {
  return pickCourseReviewQuiz(slug);
}
