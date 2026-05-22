"use client";

import { useCallback, useState } from "react";
import type { QuizQuestion } from "@/lib/quizTypes";
import { CHAPTER_QUIZ_LENGTH, isPassingScore } from "@/lib/quizTypes";
import { pickChapterQuiz } from "@/lib/courses/textbook/quizUtils";
import { QuizAnswerExplanation } from "@/components/quiz/QuizAnswerExplanation";
import {
  QuizStickyFooter,
  quizFooterPrimaryClass,
  quizFooterSecondaryClass,
} from "@/components/quiz/QuizStickyFooter";
import {
  isChapterQuickCheckPassed,
  markChapterQuickCheckPassed,
} from "@/lib/progress";
import { useProgress } from "@/components/providers/ProgressProvider";
import {
  queueTextbookScrollRestore,
  scrollToTextbookAnchor,
} from "@/lib/textbookScrollRestore";

type Phase = "idle" | "quiz" | "results";

function gradeSession(
  questions: QuizQuestion[],
  answers: Record<string, number>
): { score: number; total: number; results: { id: string; correct: boolean }[] } {
  const results = questions.map((q) => ({
    id: q.id,
    correct: answers[q.id] === q.correctIndex,
  }));
  const score = results.filter((r) => r.correct).length;
  return { score, total: questions.length, results };
}

export function ChapterQuickCheck({
  courseId,
  courseSlug,
  chapterNumber,
  chapterTitle,
  chapterId,
  scrollRestoreAnchor,
  sectionLessonIds = [],
}: {
  courseId: string;
  courseSlug: string;
  chapterNumber: number;
  chapterTitle: string;
  chapterId: string;
  scrollRestoreAnchor: string;
  sectionLessonIds?: string[];
}) {
  const { refresh, progress } = useProgress();
  const alreadyPassed = (progress.chapterQuickChecks?.[courseId] ?? []).includes(
    chapterNumber
  );

  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [graded, setGraded] = useState<ReturnType<typeof gradeSession> | null>(null);

  const current = questions[index];
  const currentRevealed = current ? Boolean(revealed[current.id]) : false;

  const start = useCallback(() => {
    setQuestions(pickChapterQuiz(courseSlug, chapterNumber));
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
    if (isPassingScore(result.score, result.total)) {
      markChapterQuickCheckPassed(courseId, chapterNumber, 25, {
        sectionLessonIds,
        courseSlug,
        moduleId: chapterId,
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
      className="mt-14 border-t border-white/[0.08] pt-10"
      aria-labelledby={`quick-check-${chapterNumber}`}
    >
      {!open ? (
        <button
          type="button"
          onClick={start}
          className={`flex w-full items-center justify-between gap-4 rounded-xl border px-5 py-4 text-left transition ${
            alreadyPassed
              ? "border-[var(--success)]/25 bg-[var(--success)]/5 hover:border-[var(--success)]/40"
              : "border-[var(--gold)]/20 bg-[var(--gold)]/5 hover:border-[var(--gold)]/35 hover:bg-[var(--gold)]/10"
          }`}
        >
          <div>
            <p
              id={`quick-check-${chapterNumber}`}
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--gold)]/90"
            >
              Chapter quiz · ~5 min
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              {alreadyPassed
                ? "Passed — saved to your progress. Retake anytime."
                : `${CHAPTER_QUIZ_LENGTH} random questions — instant feedback after each answer`}
            </p>
          </div>
          <span
            className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold ${
              alreadyPassed
                ? "bg-[var(--success)]/15 text-[var(--success)]"
                : "bg-[var(--gold)]/15 text-[var(--gold)]"
            }`}
          >
            {alreadyPassed ? "Passed ✓" : "Start"}
          </span>
        </button>
      ) : (
        <div className="textbook-callout">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--gold)]/90">
                Chapter {chapterNumber} quiz
              </p>
              <p className="mt-1 text-xs text-[var(--muted)]">{chapterTitle}</p>
            </div>
            <button
              type="button"
              onClick={collapse}
              className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] hover:text-[var(--silver)]"
            >
              Close
            </button>
          </div>

          {phase === "quiz" && current && (
            <div className="mt-6">
              <p className="font-mono text-xs text-[var(--muted)]">
                Question {index + 1} of {questions.length}
              </p>
              <p className="mt-3 font-serif text-lg font-semibold leading-snug text-[var(--silver)]">
                {current.question}
              </p>
              <fieldset className="mt-5 space-y-2">
                {current.options.map((opt, i) => {
                  const selected = answers[current.id] === i;
                  const showResult = currentRevealed;
                  const isCorrect = i === current.correctIndex;
                  return (
                    <label
                      key={opt}
                      className={`flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 text-sm transition ${
                        showResult && isCorrect
                          ? "border-[var(--success)]/40 bg-[var(--success)]/10"
                          : showResult && selected && !isCorrect
                            ? "border-red-500/30 bg-red-500/5"
                            : selected
                              ? "border-[var(--gold)]/40 bg-[var(--gold)]/10"
                              : "border-white/10 hover:border-white/20"
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
                        className="mt-1"
                      />
                      <span>{opt}</span>
                    </label>
                  );
                })}
              </fieldset>
              {currentRevealed && answers[current.id] !== undefined && (
                <div className="mt-4 max-h-[min(240px,35vh)] overflow-y-auto overscroll-contain">
                  <QuizAnswerExplanation
                    question={current}
                    selectedIndex={answers[current.id]}
                  />
                </div>
              )}
              {!currentRevealed ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  <button
                    type="button"
                    disabled={answers[current.id] === undefined}
                    onClick={revealCurrent}
                    className="rounded-lg bg-[var(--gold)] px-4 py-2 text-xs font-semibold text-[#050505] hover:opacity-90 disabled:opacity-40"
                  >
                    Submit answer
                  </button>
                </div>
              ) : (
                <QuizStickyFooter inset="compact" className="justify-between">
                  <button
                    type="button"
                    disabled={index === 0}
                    onClick={() => setIndex((i) => i - 1)}
                    className={quizFooterSecondaryClass}
                  >
                    Previous
                  </button>
                  <button type="button" onClick={goNext} className={quizFooterPrimaryClass}>
                    {index < questions.length - 1 ? "Next question" : "See summary"}
                  </button>
                </QuizStickyFooter>
              )}
            </div>
          )}

          {phase === "results" && graded && (
            <div className="mt-6">
              <p className="font-serif text-2xl font-bold text-[var(--silver)]">
                {graded.score}
                <span className="text-lg font-normal text-[var(--muted)]">
                  {" "}
                  / {graded.total}
                </span>
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                {isPassingScore(graded.score, graded.total)
                  ? "Nice — you're ready for the next chapter."
                  : "Review the chapter, then try again."}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={start}
                  className="rounded-lg bg-[var(--gold)] px-4 py-2 text-xs font-semibold text-[#050505]"
                >
                  Try again
                </button>
                <button
                  type="button"
                  onClick={collapse}
                  className="rounded-lg border border-white/15 px-4 py-2 text-xs text-[var(--muted)]"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </aside>
  );
}
