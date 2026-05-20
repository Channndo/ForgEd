export interface QuizQuestion {
  id: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
}

export const QUIZ_SESSION_LENGTH = 10;
export const CHAPTER_QUICK_CHECK_LENGTH = 2;
export const PASS_RATIO = 0.7;

export function isPassingScore(score: number, total: number): boolean {
  if (total <= 0) return false;
  return score >= Math.ceil(total * PASS_RATIO);
}
