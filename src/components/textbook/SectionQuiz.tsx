"use client";

import { useCallback, useState } from "react";
import type { QuizQuestion } from "@/lib/quizTypes";
import { isPassingScore } from "@/lib/quizTypes";
import { getSectionQuizLength } from "@/lib/quizCyber";
import { pickSectionQuiz } from "@/lib/courses/textbook/quizUtils";
import { QuizAnswerExplanation } from "@/components/quiz/QuizAnswerExplanation";
import {
  QuizStickyFooter,
  quizFooterPrimaryClass,
} from "@/components/quiz/QuizStickyFooter";
import { isSectionQuizPassed, markSectionQuizPassed } from "@/lib/progress";
import { useProgress } from "@/components/providers/ProgressProvider";
import {
  queueTextbookScrollRestore,
  scrollToTextbookAnchor,
} from "@/lib/textbookScrollRestore";

type Phase = "idle" | "quiz" | "results";

function gradeSession(
  questions: QuizQuestion[],
  answers: Record<string, number>
): { score: number; total: number } {
  const score = questions.filter((q) => answers[q.id] === q.correctIndex).length;
  return { score, total: questions.length };
}

export function SectionQuiz({
  courseId,
  courseSlug,
  chapterNumber,
  chapterId,
  lessonId,
  sectionTitle,
  scrollRestoreAnchor,
}: {
  courseId: string;
  courseSlug: string;
  chapterNumber: number;
  chapterId: string;
  lessonId: string;
  sectionTitle: string;
  scrollRestoreAnchor: string;
}) {
  const { refresh, progress } = useProgress();
  const alreadyPassed = (progress.sectionQuizzesPassed?.[courseId] ?? []).includes(
    lessonId
  );
  const sectionQuizLen = getSectionQuizLength(courseSlug);

  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [graded, setGraded] = useState<{ score: number; total: number } | null>(null);

  const current = questions[index];
  const currentRevealed = current ? Boolean(revealed[current.id]) : false;

  const start = useCallback(() => {
    setQuestions(pickSectionQuiz(courseSlug, chapterNumber));
    setIndex(0);
    setAnswers({});
    setRevealed({});
    setGraded(null);
    setPhase("quiz");
    setOpen(true);
  }, [courseSlug, chapterNumber]);

  const revealCurrent = () => {
    if (!current || answers[current.id] === undefined) return;
    setRevealed((prev) => ({ ...prev, [current.id]: true }));
  };

  const finishQuiz = () => {
    const result = gradeSession(questions, answers);
    setGraded(result);
    setPhase("results");
    queueTextbookScrollRestore(courseSlug, scrollRestoreAnchor);
    if (isPassingScore(result.score, result.total, courseSlug)) {
      markSectionQuizPassed(courseId, lessonId, {
        courseSlug,
        moduleId: chapterId,
        xpAmount: 12,
      });
      refresh();
    }
  };

  const goNext = () => {
    if (index < questions.length - 1) {
      setIndex((i) => i + 1);
      return;
    }
    finishQuiz();
  };

  const collapse = () => {
    queueTextbookScrollRestore(courseSlug, scrollRestoreAnchor);
    scrollToTextbookAnchor(scrollRestoreAnchor);
    setOpen(false);
    setPhase("idle");
    setQuestions([]);
    setIndex(0);
    setAnswers({});
    setRevealed({});
    setGraded(null);
  };

  return (
    <aside
      className="mt-8 border-t border-white/[0.06] pt-6"
      aria-labelledby={`section-quiz-${lessonId}`}
    >
      {!open ? (
        <button
          type="button"
          onClick={start}
          disabled={alreadyPassed}
          className={`flex w-full items-center justify-between gap-4 rounded-xl border px-4 py-3 text-left transition ${
            alreadyPassed
              ? "border-[var(--success)]/25 bg-[var(--success)]/5"
              : "border-[var(--gold)]/20 bg-[var(--gold)]/5 hover:border-[var(--gold)]/35"
          }`}
        >
          <div>
            <p
              id={`section-quiz-${lessonId}`}
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--gold)]/90"
            >
              Section quiz · required
            </p>
            <p className="mt-1 text-xs text-[var(--muted)]">
              {alreadyPassed
                ? "Passed — next section unlocked."
                : `${sectionQuizLen} questions · pass to continue`}
            </p>
          </div>
          <span
            className={`shrink-0 rounded-lg px-3 py-1 text-xs font-semibold ${
              alreadyPassed
                ? "bg-[var(--success)]/15 text-[var(--success)]"
                : "bg-[var(--gold)]/15 text-[var(--gold)]"
            }`}
          >
            {alreadyPassed ? "Passed ✓" : "Start"}
          </span>
        </button>
      ) : (
        <div className="rounded-xl border border-white/[0.08] bg-black/30 p-4">
          <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
            {sectionTitle}
          </p>

          {phase === "quiz" && current && (
            <div className="mt-4">
              <p className="text-xs text-[var(--muted)]">
                Question {index + 1} of {questions.length}
              </p>
              <p className="mt-2 text-sm font-medium text-[var(--silver)]">
                {current.question}
              </p>
              <fieldset className="mt-3 space-y-2">
                {current.options.map((opt, i) => {
                  const selected = answers[current.id] === i;
                  const showResult = currentRevealed;
                  const isCorrect = i === current.correctIndex;
                  return (
                    <label
                      key={opt}
                      className={`flex cursor-pointer items-start gap-2 rounded-lg border px-3 py-2 text-sm ${
                        showResult && isCorrect
                          ? "border-[var(--success)]/40 bg-[var(--success)]/10"
                          : showResult && selected && !isCorrect
                            ? "border-red-500/30 bg-red-500/5"
                            : selected
                              ? "border-[var(--gold)]/40 bg-[var(--gold)]/10"
                              : "border-white/10"
                      }`}
                    >
                      <input
                        type="radio"
                        name={current.id}
                        checked={selected}
                        disabled={currentRevealed}
                        onChange={() =>
                          setAnswers((prev) => ({ ...prev, [current.id]: i }))
                        }
                        className="mt-0.5"
                      />
                      <span>{opt}</span>
                    </label>
                  );
                })}
              </fieldset>
              {currentRevealed && answers[current.id] !== undefined && (
                <div className="mt-3 max-h-[min(200px,30vh)] overflow-y-auto overscroll-contain">
                  <QuizAnswerExplanation
                    question={current}
                    selectedIndex={answers[current.id]}
                    compact
                  />
                </div>
              )}
              {!currentRevealed ? (
                <div className="mt-4">
                  <button
                    type="button"
                    disabled={answers[current.id] === undefined}
                    onClick={revealCurrent}
                    className="rounded-lg bg-[var(--gold)] px-3 py-1.5 text-xs font-semibold text-[#050505] disabled:opacity-40"
                  >
                    Submit answer
                  </button>
                </div>
              ) : (
                <QuizStickyFooter inset="compact" className="justify-end">
                  <button type="button" onClick={goNext} className={quizFooterPrimaryClass}>
                    {index < questions.length - 1 ? "Next question" : "Finish"}
                  </button>
                </QuizStickyFooter>
              )}
            </div>
          )}

          {phase === "results" && graded && (
            <div className="mt-4">
              <p className="text-lg font-bold text-[var(--silver)]">
                {graded.score}/{graded.total}
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {isPassingScore(graded.score, graded.total, courseSlug)
                  ? "Section complete — you can move on."
                  : "Review this section and try again."}
              </p>
              <div className="mt-3 flex gap-2">
                {!isPassingScore(graded.score, graded.total, courseSlug) && (
                  <button
                    type="button"
                    onClick={start}
                    className="rounded-lg bg-[var(--gold)] px-3 py-1.5 text-xs font-semibold text-[#050505]"
                  >
                    Retry
                  </button>
                )}
                <button
                  type="button"
                  onClick={collapse}
                  className="rounded-lg border border-white/15 px-3 py-1.5 text-xs text-[var(--muted)]"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </aside>
  );
}
