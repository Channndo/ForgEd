"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useCallback } from "react";
import { useQuizAttempt } from "@/hooks/useQuizAttempt";
import { getCourseBySlug } from "@/lib/courses/catalog";
import {
  getQuizBankSize,
  pickFinalExam,
} from "@/lib/courses/textbook/quizUtils";
import { ExamEngine } from "@/components/quiz/ExamEngine";
import {
  isCourseReviewQuizPassed,
  isFinalExamPassed,
  passFinalExamAndCompleteCourse,
} from "@/lib/progress";
import { useProgress } from "@/components/providers/ProgressProvider";
import { FINAL_EXAM_LENGTH } from "@/lib/quizTypes";

export default function ExamClient() {
  const params = useParams();
  const slug = params.slug as string;
  const { refresh, progress } = useProgress();
  const course = getCourseBySlug(slug);

  const pick = useCallback(() => {
    const c = getCourseBySlug(slug);
    if (!c?.textbookCourse) return [];
    return pickFinalExam(slug);
  }, [slug]);

  const { questions, attemptKey, newAttempt } = useQuizAttempt(pick);

  const bankSize = getQuizBankSize(slug);
  const reviewPassed = course
    ? isCourseReviewQuizPassed(course.id)
    : false;
  const examPassed = course ? isFinalExamPassed(course.id) : false;

  if (!course) {
    return (
      <div className="py-20 text-center">
        <p>Course not found.</p>
      </div>
    );
  }

  if (!reviewPassed && !examPassed) {
    return (
      <div className="mx-auto max-w-xl py-20 text-center">
        <p className="text-[var(--muted)]">
          Pass the 10-question course review quiz before taking the final exam.
        </p>
        <Link
          href={`/courses/${slug}/quiz`}
          className="mt-4 inline-block text-[var(--gold)] hover:underline"
        >
          Go to course quiz →
        </Link>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="py-20 text-center">
        <p>Exam not available for this course yet.</p>
        <Link href={`/courses/${slug}`} className="mt-4 text-[var(--gold)]">
          ← Back to course
        </Link>
      </div>
    );
  }

  function handleComplete(score: number, total: number) {
    if (!course) return;
    passFinalExamAndCompleteCourse(course.id, score, total, course.xpReward);
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
          Final exam
        </h1>
        <p className="mt-2 text-sm text-[var(--muted)]">
          {FINAL_EXAM_LENGTH} questions drawn randomly from {bankSize} in the
          bank. Score is shown only after you submit the full exam. Pass with
          70% (14/20) to complete the course.
        </p>
        {examPassed && (
          <p className="mt-2 text-sm text-[var(--success)]">
            You already passed this exam. Retaking will update your best score
            in history but will not duplicate completion XP.
          </p>
        )}
      </div>

      <ExamEngine
        key={attemptKey}
        questions={questions}
        title={`${course.title} Final Exam`}
        onComplete={handleComplete}
        onNewAttempt={newAttempt}
      />
    </div>
  );
}
