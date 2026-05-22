"use client";

import { ArrowRight, GraduationCap } from "lucide-react";
import { useProgress } from "@/components/providers/ProgressProvider";
import { Button } from "@/components/ui/Button";
import { getCourseBySlug } from "@/lib/courses/catalog";
import { getTextbookChapterCount } from "@/lib/courses/textbook/registry";
import {
  computeCourseProgressPercent,
  countCompletedLessons,
} from "@/lib/courseProgress";
import {
  countChapterQuickChecksPassed,
  isCourseReviewQuizPassed,
  isFinalExamPassed,
} from "@/lib/progress";
import {
  getExamPassMinimum,
  getFinalExamLength,
  getPassPercent,
} from "@/lib/quizCyber";

export function CourseProgressClient({
  courseId,
  slug,
}: {
  courseId: string;
  slug: string;
}) {
  const { progress } = useProgress();
  const pct = computeCourseProgressPercent(progress, courseId);
  const { completed, total } = countCompletedLessons(progress, slug);
  const course = getCourseBySlug(slug);
  const passed = progress.completedCourses.includes(courseId);
  const quiz = progress.quizScores[`${courseId}-quiz`];
  const exam = progress.quizScores[`${courseId}-exam`];
  const chapterQuizzes = course?.textbookCourse
    ? countChapterQuickChecksPassed(courseId, getTextbookChapterCount(slug))
    : null;
  const reviewPassed = isCourseReviewQuizPassed(courseId);
  const examPassed = isFinalExamPassed(courseId);

  if (pct === 0 && !passed && !quiz && !exam && !reviewPassed) return null;

  return (
    <div className="mt-6">
      <div className="flex flex-wrap justify-between gap-2 text-sm">
        <span className="text-[var(--muted)]">Your progress</span>
        <span className="text-[var(--silver)]">
          {completed}/{total} sections · {pct}%
          {passed ? " · Course complete" : null}
          {chapterQuizzes
            ? ` · Ch. quizzes ${chapterQuizzes.passed}/${chapterQuizzes.total}`
            : null}
          {reviewPassed ? " · Review passed" : quiz ? ` · Review ${quiz.score}/${quiz.total}` : null}
          {examPassed ? " · Exam passed" : exam ? ` · Exam ${exam.score}/${exam.total}` : null}
        </span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--forge)] transition-all"
          style={{ width: `${passed ? 100 : pct}%` }}
        />
      </div>
      {course?.textbookCourse && (
        <p className="mt-2 text-xs text-[var(--muted)]">
          <a href={`/courses/${slug}/read`} className="text-[var(--gold)] hover:underline">
            Textbook
          </a>
          {" · "}
          <a href={`/courses/${slug}/quiz`} className="text-[var(--gold)] hover:underline">
            Review quiz
          </a>
          {" · "}
          <a href={`/courses/${slug}/exam`} className="text-[var(--gold)] hover:underline">
            Final exam
          </a>
        </p>
      )}

      {course?.textbookCourse && reviewPassed && !examPassed && !passed && (
        <div
          className="mt-4 rounded-xl border border-[var(--gold)]/35 bg-gradient-to-br from-[var(--gold)]/15 to-transparent p-4 sm:p-5"
          role="status"
        >
          <div className="flex items-start gap-3">
            <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" />
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-[var(--gold)]">One step left to complete this course</p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                You passed the course review quiz. Pass the{" "}
                <strong className="font-medium text-[var(--silver)]">final exam</strong>{" "}
                ({getExamPassMinimum(slug)}/{getFinalExamLength(slug)} correct,{" "}
                {getPassPercent(slug)}%) to mark{" "}
                {course.title} complete on your profile and earn the remaining XP.
              </p>
              <Button
                href={`/courses/${slug}/exam`}
                variant="forge"
                className="mt-4"
              >
                Take final exam
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {course?.textbookCourse && reviewPassed && examPassed && !passed && (
        <p className="mt-3 text-sm text-[var(--success)]">
          Final exam passed — course completion should appear on your profile shortly.
        </p>
      )}
    </div>
  );
}
