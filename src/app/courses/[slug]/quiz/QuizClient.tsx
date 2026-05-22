"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { useQuizAttempt } from "@/hooks/useQuizAttempt";
import { getCourseBySlug } from "@/lib/courses/catalog";
import {
  getQuizBankSize,
  pickQuizSessionForCourse,
} from "@/lib/courses/textbook/quizUtils";
import { QuizEngine } from "@/components/quiz/QuizEngine";
import {
  isCourseReviewQuizPassed,
  isFinalExamPassed,
  markCourseReviewQuizPassed,
  recordQuiz,
} from "@/lib/progress";
import { FINAL_EXAM_LENGTH, PASS_RATIO } from "@/lib/quizTypes";
import { Button } from "@/components/ui/Button";
import { ArrowRight, GraduationCap } from "lucide-react";
import { COURSE_REVIEW_QUIZ_LENGTH } from "@/lib/quizTypes";
import { useProgress } from "@/components/providers/ProgressProvider";
import { isPassingScore } from "@/lib/quizTypes";

export default function QuizClient() {
  const params = useParams();
  const slug = params.slug as string;
  const { refresh, progress, xpBar } = useProgress();
  const course = getCourseBySlug(slug);

  const kodaContext = useMemo(
    () => ({
      courseSlug: slug,
      courseTitle: course?.title,
      skillLevel: "beginner" as const,
      streak: progress.streak,
      xp: progress.xp,
      level: xpBar.level,
      completedCourses: progress.completedCourses,
    }),
    [slug, course, progress, xpBar]
  );

  const pick = useCallback(() => {
    const c = getCourseBySlug(slug);
    if (!c?.textbookCourse) return [];
    return pickQuizSessionForCourse(slug);
  }, [slug]);

  const { questions, attemptKey, newAttempt } = useQuizAttempt(pick);

  const bankSize = getQuizBankSize(slug);
  const reviewPassed = course ? isCourseReviewQuizPassed(course.id) : false;
  const examPassed = course ? isFinalExamPassed(course.id) : false;
  const examPassMin = Math.ceil(FINAL_EXAM_LENGTH * PASS_RATIO);

  if (!course) {
    return (
      <div className="py-20 text-center">
        <p>Course not found.</p>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="py-20 text-center">
        <p>Quiz not available for this course yet.</p>
        <Link href={`/courses/${slug}`} className="mt-4 text-[var(--gold)]">
          ← Back to course
        </Link>
      </div>
    );
  }

  function handleComplete(score: number, total: number) {
    if (!course) return;
    recordQuiz(`${course.id}-quiz`, score, total, course.xpReward / 4);
    if (isPassingScore(score, total)) {
      markCourseReviewQuizPassed(course.id, course.xpReward / 4);
    }
    refresh();
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <Link
          href={`/courses/${slug}`}
          className="text-sm text-[var(--muted)] hover:text-[var(--gold)]"
        >
          ← {course.title}
        </Link>
        <h1 className="mt-4 font-serif text-2xl font-bold text-[var(--silver)]">
          Course review quiz
        </h1>
        <p className="mt-2 text-sm text-[var(--muted)]">
          {COURSE_REVIEW_QUIZ_LENGTH} random questions from {bankSize} in the bank.
          Immediate feedback after each answer. Pass with 70% to unlock the final
          exam.
        </p>
      </div>

      {reviewPassed && !examPassed && (
        <div
          className="rounded-xl border border-[var(--gold)]/35 bg-[var(--gold)]/10 px-5 py-4"
          role="status"
        >
          <p className="flex items-center gap-2 font-semibold text-[var(--gold)]">
            <GraduationCap className="h-4 w-4" />
            Review quiz already passed
          </p>
          <p className="mt-2 text-sm text-[var(--muted)]">
            You only need the final exam ({examPassMin}/{FINAL_EXAM_LENGTH}, 70%) to
            complete {course.title}. You can practice below or go straight to the exam.
          </p>
          <Button href={`/courses/${slug}/exam`} variant="forge" className="mt-4">
            Take final exam
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      <QuizEngine
        key={attemptKey}
        questions={questions}
        title={`${course.title} Quiz`}
        onComplete={handleComplete}
        onNewAttempt={newAttempt}
        kodaContext={kodaContext}
        courseReviewComplete={{
          courseTitle: course.title,
          courseSlug: slug,
        }}
      />
    </div>
  );
}
