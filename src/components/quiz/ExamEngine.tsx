"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { QuizQuestion } from "@/lib/quizTypes";
import { isPassingScore } from "@/lib/quizTypes";
import { Button } from "@/components/ui/Button";
import {
  QuizStickyFooter,
  quizFooterPrimaryClass,
  quizFooterSecondaryClass,
} from "@/components/quiz/QuizStickyFooter";
import { RotateCcw } from "lucide-react";

interface ExamEngineProps {
  questions: QuizQuestion[];
  title?: string;
  onComplete?: (score: number, total: number) => void;
  onNewAttempt?: () => void;
}

export function ExamEngine({
  questions,
  title = "Final exam",
  onComplete,
  onNewAttempt,
}: ExamEngineProps) {
  const shuffled = useMemo(() => {
    const arr = [...questions];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [questions]);

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const q = shuffled[index];
  const total = shuffled.length;
  const selected = answers[q?.id];
  const allAnswered = shuffled.every((item) => answers[item.id] !== undefined);

  const score = submitted
    ? shuffled.filter((item) => answers[item.id] === item.correctIndex).length
    : 0;

  function handleSelect(optionIndex: number) {
    if (submitted || !q) return;
    setAnswers((prev) => ({ ...prev, [q.id]: optionIndex }));
  }

  function handleNext() {
    if (index + 1 < total) setIndex((i) => i + 1);
  }

  function handlePrev() {
    if (index > 0) setIndex((i) => i - 1);
  }

  function submitExam() {
    if (!allAnswered) return;
    const finalScore = shuffled.filter(
      (item) => answers[item.id] === item.correctIndex
    ).length;
    setSubmitted(true);
    onComplete?.(finalScore, total);
  }

  function retry() {
    if (onNewAttempt) {
      onNewAttempt();
      return;
    }
    setIndex(0);
    setAnswers({});
    setSubmitted(false);
  }

  if (submitted) {
    const passed = isPassingScore(score, total);
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl p-8 text-center"
      >
        <p className="text-sm text-[var(--muted)]">{title} — results</p>
        <p className="mt-2 text-4xl font-bold">
          {score}/{total}
        </p>
        <p
          className={`mt-2 text-lg ${passed ? "text-[var(--success)]" : "text-[var(--warning)]"}`}
        >
          {passed
            ? "Passed! This course is now complete."
            : "Not yet — score 70% or higher to pass (14/20)."}
        </p>
        <p className="mt-3 text-sm text-[var(--muted)]">
          Answers are revealed only after you submit the full exam.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          {!passed && (
            <Button variant="secondary" onClick={retry}>
              <RotateCcw className="h-4 w-4" /> Retake exam
            </Button>
          )}
        </div>
      </motion.div>
    );
  }

  if (!q) return null;

  return (
    <div className="glass rounded-2xl p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between text-sm text-[var(--muted)]">
        <span>{title}</span>
        <span>
          Question {index + 1} of {total}
        </span>
      </div>
      <div className="mb-2 h-1 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full bg-[var(--accent)] transition-all"
          style={{
            width: `${(Object.keys(answers).length / total) * 100}%`,
          }}
        />
      </div>
      <p className="mb-4 text-xs text-[var(--muted)]">
        Select an answer for each question. You will see your score only after
        submitting all {total} questions.
      </p>

      <h3 className="text-lg font-medium leading-relaxed sm:text-xl">
        {q.question}
      </h3>
      <ul className="mt-6 space-y-3">
        {q.options.map((opt, i) => {
          const isSelected = selected === i;
          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => handleSelect(i)}
                className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                  isSelected
                    ? "border-[var(--accent)]/50 bg-[var(--accent)]/10"
                    : "border-white/10 hover:border-[var(--accent)]/40 hover:bg-white/5"
                }`}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-xs font-medium">
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
              </button>
            </li>
          );
        })}
      </ul>

      <QuizStickyFooter className="justify-between">
        <button
          type="button"
          disabled={index === 0}
          onClick={handlePrev}
          className={quizFooterSecondaryClass}
        >
          Previous
        </button>
        <div className="ml-auto flex flex-col items-end gap-2">
          {index + 1 < total ? (
            <button
              type="button"
              disabled={selected === undefined}
              onClick={handleNext}
              className={quizFooterPrimaryClass}
            >
              Next question
            </button>
          ) : (
            <button
              type="button"
              disabled={!allAnswered}
              onClick={submitExam}
              className={quizFooterPrimaryClass}
            >
              Submit exam
            </button>
          )}
          <p className="text-xs text-[var(--muted)]">
            {Object.keys(answers).length}/{total} answered
          </p>
        </div>
      </QuizStickyFooter>
    </div>
  );
}
