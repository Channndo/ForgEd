"use client";

import { useProgress } from "@/components/providers/ProgressProvider";
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
    </div>
  );
}
