import type { QuizQuestion } from "@/lib/quizTypes";

export interface QuizAnswerFeedback {
  correct: boolean;
  headline: string;
  paragraphs: string[];
}

/** Builds right/wrong-specific explanation copy from a question and the learner's choice. */
export function buildQuizAnswerFeedback(
  question: QuizQuestion,
  selectedIndex: number
): QuizAnswerFeedback {
  const correct = selectedIndex === question.correctIndex;
  const chosen = question.options[selectedIndex];
  const correctAnswer = question.options[question.correctIndex];
  const chosenLetter = String.fromCharCode(65 + selectedIndex);
  const correctLetter = String.fromCharCode(65 + question.correctIndex);

  if (correct) {
    return {
      correct: true,
      headline: "Correct",
      paragraphs: [
        `You chose ${chosenLetter} (${chosen}). That is the best answer because it aligns with the ideas and criteria in this chapter.`,
        question.explanation,
      ],
    };
  }

  return {
    correct: false,
    headline: "Incorrect",
    paragraphs: [
      `You chose ${chosenLetter} (${chosen}). That option is weaker here because it does not best match the chapter material or the reasoning the question is testing.`,
      `The correct answer is ${correctLetter} (${correctAnswer}). ${question.explanation}`,
    ],
  };
}
