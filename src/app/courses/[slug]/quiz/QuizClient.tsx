"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { getCourseBySlug } from "@/lib/courses/catalog";
import {
  getQuizBankSize,
  pickQuizSessionForCourse,
} from "@/lib/courses/textbook/quizUtils";
import { QuizEngine } from "@/components/quiz/QuizEngine";
import { completeCourse, recordQuiz } from "@/lib/progress";
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

  const questions = useMemo(() => {
    if (!course?.textbookCourse) return [];
    return pickQuizSessionForCourse(slug);
  }, [course, slug]);

  const bankSize = getQuizBankSize(slug);

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
      completeCourse(course.id, course.xpReward);
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
          Course quiz
        </h1>
        <p className="mt-2 text-sm text-[var(--muted)]">
          {questions.length} questions — one per chapter, drawn from {bankSize} in the
          question bank.
        </p>
      </div>

      <QuizEngine
        questions={questions}
        title={`${course.title} Quiz`}
        onComplete={handleComplete}
        kodaContext={kodaContext}
      />
    </div>
  );
}
