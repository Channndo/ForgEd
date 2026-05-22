export interface QuizQuestion {
  id: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
}

/** Questions drawn randomly from a 200-question subject bank */
export const QUIZ_BANK_SIZE = 200;
export const SECTION_QUIZ_LENGTH = 2;
export const CHAPTER_QUIZ_LENGTH = 5;
export const COURSE_REVIEW_QUIZ_LENGTH = 10;
export const FINAL_EXAM_LENGTH = 20;
export const PASS_RATIO = 0.7;

/** @deprecated Use CHAPTER_QUIZ_LENGTH */
export const CHAPTER_QUICK_CHECK_LENGTH = CHAPTER_QUIZ_LENGTH;
export const QUIZ_SESSION_LENGTH = COURSE_REVIEW_QUIZ_LENGTH;

import { getPassRatio } from "./quizCyber";

export function isPassingScore(
  score: number,
  total: number,
  slug?: string
): boolean {
  if (total <= 0) return false;
  return score >= Math.ceil(total * getPassRatio(slug));
}
