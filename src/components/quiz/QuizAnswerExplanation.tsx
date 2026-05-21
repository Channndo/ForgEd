import type { QuizQuestion } from "@/lib/quizTypes";
import { buildQuizAnswerFeedback } from "@/lib/quizFeedback";

export function QuizAnswerExplanation({
  question,
  selectedIndex,
  compact = false,
}: {
  question: QuizQuestion;
  selectedIndex: number;
  compact?: boolean;
}) {
  const feedback = buildQuizAnswerFeedback(question, selectedIndex);

  return (
    <div
      className={`rounded-xl border p-4 ${
        feedback.correct
          ? "border-[var(--success)]/35 bg-[var(--success)]/10"
          : "border-red-500/30 bg-red-500/5"
      } ${compact ? "mt-3" : "mt-6"}`}
      role="status"
    >
      <p
        className={`font-semibold ${
          feedback.correct ? "text-[var(--success)]" : "text-red-300"
        } ${compact ? "text-xs" : "text-sm"}`}
      >
        {feedback.headline}
      </p>
      <div className={`mt-2 space-y-2 ${compact ? "text-xs" : "text-sm"} text-[var(--muted)]`}>
        {feedback.paragraphs.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
