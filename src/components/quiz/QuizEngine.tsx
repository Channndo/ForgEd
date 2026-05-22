"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { QuizQuestion } from "@/lib/quizTypes";
import { isPassingScore } from "@/lib/quizTypes";
import { getPassPercent } from "@/lib/quizCyber";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { KodaQuizHelp } from "@/components/koda/KodaQuizHelp";
import { QuizAnswerExplanation } from "@/components/quiz/QuizAnswerExplanation";
import {
  QuizStickyFooter,
  quizFooterPrimaryClass,
} from "@/components/quiz/QuizStickyFooter";
import { CourseReviewQuizComplete } from "@/components/quiz/CourseReviewQuizComplete";
import type { KodaLearningContext } from "@/lib/koda/types";

interface QuizEngineProps {
  questions: QuizQuestion[];
  title?: string;
  onComplete?: (score: number, total: number) => void;
  /** Draw a new random set from the course bank (parent bumps attempt key). */
  onNewAttempt?: () => void;
  kodaContext?: KodaLearningContext;
  /** Rich completion UI for course review quiz → final exam handoff */
  courseReviewComplete?: {
    courseTitle: string;
    courseSlug: string;
  };
}

export function QuizEngine({
  questions,
  title = "Quiz",
  onComplete,
  onNewAttempt,
  kodaContext,
  courseReviewComplete,
}: QuizEngineProps) {
  const shuffled = useMemo(() => {
    const arr = [...questions];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [questions]);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = shuffled[index];
  const total = shuffled.length;

  function handleSelect(optionIndex: number) {
    if (revealed) return;
    setSelected(optionIndex);
    setRevealed(true);
    if (optionIndex === q.correctIndex) setScore((s) => s + 1);
  }

  function handleNext() {
    if (index + 1 >= total) {
      setFinished(true);
      onComplete?.(score, total);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setRevealed(false);
  }

  function retry() {
    if (onNewAttempt) {
      onNewAttempt();
      return;
    }
    setIndex(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    if (courseReviewComplete) {
      return (
        <CourseReviewQuizComplete
          score={score}
          total={total}
          courseTitle={courseReviewComplete.courseTitle}
          slug={courseReviewComplete.courseSlug}
          onRetry={retry}
        />
      );
    }

    const passed = isPassingScore(score, total);
    const passPct = getPassPercent();
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl p-8 text-center"
      >
        <p className="text-sm text-[var(--muted)]">{title} complete</p>
        <p className="mt-2 text-4xl font-bold">
          {score}/{total}
        </p>
        <p className={`mt-2 text-lg ${passed ? "text-[var(--success)]" : "text-[var(--warning)]"}`}>
          {passed ? "Passed! Great work." : `Keep learning — ${passPct}% needed to pass.`}
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button variant="secondary" onClick={retry}>
            <RotateCcw className="h-4 w-4" /> Retry
          </Button>
        </div>
      </motion.div>
    );
  }

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
          style={{ width: `${((index + (revealed ? 1 : 0)) / total) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
        >
          <h3 className="text-lg font-medium leading-relaxed sm:text-xl">
            {q.question}
          </h3>
          <ul className="mt-6 space-y-3">
            {q.options.map((opt, i) => {
              let style = "border-white/10 hover:border-[var(--accent)]/40 hover:bg-white/5";
              if (revealed && i === q.correctIndex) {
                style = "border-[var(--success)]/50 bg-[var(--success)]/10";
              } else if (revealed && selected === i && i !== q.correctIndex) {
                style = "border-red-500/50 bg-red-500/10";
              } else if (selected === i) {
                style = "border-[var(--accent)]/50 bg-[var(--accent)]/10";
              }
              return (
                <li key={i}>
                  <button
                    type="button"
                    disabled={revealed}
                    onClick={() => handleSelect(i)}
                    className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all ${style}`}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-xs font-medium">
                      {String.fromCharCode(65 + i)}
                    </span>
                    {opt}
                    {revealed && i === q.correctIndex && (
                      <CheckCircle2 className="ml-auto h-5 w-5 text-[var(--success)]" />
                    )}
                    {revealed && selected === i && i !== q.correctIndex && (
                      <XCircle className="ml-auto h-5 w-5 text-red-400" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {revealed && selected !== null && (
            <>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-4 max-h-[min(280px,38vh)] overflow-y-auto overscroll-contain pr-1"
              >
                <QuizAnswerExplanation question={q} selectedIndex={selected} />
                {kodaContext && (
                  <div className="mt-4">
                    <KodaQuizHelp
                      context={{
                        ...kodaContext,
                        quizQuestion: q.question,
                        quizOptions: [...q.options],
                        userAnswer:
                          selected !== null ? q.options[selected] : undefined,
                        correctAnswer: q.options[q.correctIndex],
                        quizExplanation: q.explanation,
                      }}
                    />
                  </div>
                )}
              </motion.div>
              <QuizStickyFooter className="justify-end">
                <button type="button" onClick={handleNext} className={quizFooterPrimaryClass}>
                  {index + 1 >= total ? "See results" : "Next question"}
                </button>
              </QuizStickyFooter>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
