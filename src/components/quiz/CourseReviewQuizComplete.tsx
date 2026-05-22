"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Circle,
  GraduationCap,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  FINAL_EXAM_LENGTH,
  isPassingScore,
  PASS_RATIO,
} from "@/lib/quizTypes";

const EXAM_PASS_MIN = Math.ceil(FINAL_EXAM_LENGTH * PASS_RATIO);

export function CourseReviewQuizComplete({
  score,
  total,
  courseTitle,
  slug,
  onRetry,
}: {
  score: number;
  total: number;
  courseTitle: string;
  slug: string;
  onRetry: () => void;
}) {
  const passed = isPassingScore(score, total);
  const examHref = `/courses/${slug}/exam`;
  const courseHref = `/courses/${slug}`;

  if (!passed) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl p-8 text-center"
      >
        <p className="text-sm text-[var(--muted)]">Course review quiz</p>
        <p className="mt-2 text-4xl font-bold text-[var(--silver)]">
          {score}/{total}
        </p>
        <p className="mt-2 text-lg text-[var(--warning)]">
          Not quite — score 70% or higher to unlock the final exam.
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm text-[var(--muted)]">
          Review the textbook chapters you missed, then try another random set
          from the question bank.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button variant="secondary" onClick={onRetry}>
            <RotateCcw className="h-4 w-4" /> Try again
          </Button>
          <Button variant="ghost" href={`/courses/${slug}/read`}>
            Back to textbook
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass overflow-hidden rounded-2xl"
    >
      <div className="border-b border-[var(--success)]/25 bg-[var(--success)]/10 px-6 py-5 sm:px-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--success)]/20">
            <CheckCircle2 className="h-7 w-7 text-[var(--success)]" />
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--success)]">
              Review quiz passed
            </p>
            <p className="mt-1 font-serif text-2xl font-bold text-[var(--silver)]">
              {score}/{total}
            </p>
            <p className="mt-2 text-sm text-[var(--silver)]/90">
              Nice work on {courseTitle}. You have{" "}
              <strong className="font-semibold text-[var(--gold)]">
                one step left
              </strong>{" "}
              to finish the course.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6 px-6 py-6 sm:px-8">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
            Path to course completion
          </p>
          <ol className="mt-4 space-y-3">
            <li className="flex items-start gap-3 text-sm text-[var(--muted)]">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--success)]" />
              <span>
                <span className="font-medium text-[var(--silver)]">
                  Course review quiz
                </span>{" "}
                — passed (saved to your profile)
              </span>
            </li>
            <li className="flex items-start gap-3 rounded-xl border border-[var(--gold)]/35 bg-[var(--gold)]/10 px-4 py-3">
              <Circle className="mt-0.5 h-5 w-5 shrink-0 fill-[var(--gold)] text-[var(--gold)]" />
              <span className="text-sm">
                <span className="font-semibold text-[var(--gold)]">
                  Final exam — your last step
                </span>
                <span className="mt-1 block text-[var(--muted)]">
                  {FINAL_EXAM_LENGTH} questions from the bank · score shown after
                  you submit all · pass with {EXAM_PASS_MIN}/{FINAL_EXAM_LENGTH}{" "}
                  (70%) to complete {courseTitle} and earn full course XP.
                </span>
              </span>
            </li>
          </ol>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href={examHref} variant="forge" className="w-full sm:w-auto">
            <GraduationCap className="h-4 w-4" />
            Take final exam
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href={courseHref} variant="secondary" className="w-full sm:w-auto">
            Back to course
          </Button>
          <Button variant="ghost" onClick={onRetry} className="w-full sm:w-auto">
            <RotateCcw className="h-4 w-4" /> Practice again
          </Button>
        </div>

        <p className="text-center text-xs text-[var(--muted)]">
          The final exam unlocks because you passed this review. You can retake
          this quiz anytime for practice.
        </p>
      </div>
    </motion.div>
  );
}
