"use client";

import { useProgress } from "@/components/providers/ProgressProvider";
import { getCourseBySlug } from "@/lib/courses/catalog";
import {
  computeCourseProgressPercent,
  countCompletedLessons,
} from "@/lib/courseProgress";

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

  if (pct === 0 && !passed && !quiz) return null;

  return (
    <div className="mt-6">
      <div className="flex flex-wrap justify-between gap-2 text-sm">
        <span className="text-[var(--muted)]">Your progress</span>
        <span className="text-[var(--silver)]">
          {completed}/{total} sections · {pct}%
          {passed ? " · Course complete" : null}
          {quiz && !passed
            ? ` · Quiz ${quiz.score}/${quiz.total}`
            : null}
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
            Read full textbook
          </a>
          {" "}with scroll progress and table of contents.
        </p>
      )}
    </div>
  );
}
