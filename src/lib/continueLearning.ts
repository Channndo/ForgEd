import { COURSES } from "@/lib/courses/catalog";
import { getTextbookBundle } from "@/lib/courses/textbook/registry";
import {
  isChapterUnlocked,
  sectionLessonId,
} from "@/lib/courses/textbook/gating";
import { getModulesForSlug } from "@/lib/coursePaths";
import { computeCourseProgressPercent } from "@/lib/courseProgress";
import { getContinuePathCourse } from "@/lib/paths/pathProgress";
import { getLearningPathById } from "@/lib/paths/learningPaths";
import type { UserProgress } from "@/lib/types";

export type ContinueLearningTarget = {
  courseSlug: string;
  courseTitle: string;
  /** Section or lesson title for display */
  resumeLabel: string;
  href: string;
  progressPercent: number;
};

function firstIncompleteInCourse(
  progress: UserProgress,
  slug: string
): ContinueLearningTarget | null {
  const course = COURSES.find((c) => c.slug === slug);
  if (!course || progress.completedCourses.includes(course.id)) {
    return null;
  }

  const pct = computeCourseProgressPercent(progress, course.id);
  if (pct <= 0) return null;

  const bundle = getTextbookBundle(slug);
  if (bundle?.chapters.length) {
    for (let ci = 0; ci < bundle.chapters.length; ci++) {
      if (!isChapterUnlocked(progress, course.id, bundle.chapters, ci)) {
        continue;
      }
      const chapter = bundle.chapters[ci];
      for (const section of chapter.sections) {
        const lessonId = sectionLessonId(chapter.id, section.id);
        if (!progress.completedLessons.includes(lessonId)) {
          return {
            courseSlug: slug,
            courseTitle: course.title,
            resumeLabel: section.title.replace(/^\d+\.\d+\s+/, ""),
            href: `/courses/${slug}/read#${section.id}`,
            progressPercent: pct,
          };
        }
      }
    }
    return {
      courseSlug: slug,
      courseTitle: course.title,
      resumeLabel: "Course review or final exam",
      href: `/courses/${slug}`,
      progressPercent: pct,
    };
  }

  const modules = getModulesForSlug(slug);
  for (const mod of modules) {
    for (const lesson of mod.lessons) {
      if (!progress.completedLessons.includes(lesson.id)) {
        return {
          courseSlug: slug,
          courseTitle: course.title,
          resumeLabel: lesson.title,
          href: `/courses/${slug}`,
          progressPercent: pct,
        };
      }
    }
  }

  return {
    courseSlug: slug,
    courseTitle: course.title,
    resumeLabel: "Continue this course",
    href: `/courses/${slug}`,
    progressPercent: pct,
  };
}

/** Best resume point for a signed-in learner with started-but-incomplete work. */
export function getContinueLearningTarget(
  progress: UserProgress
): ContinueLearningTarget | null {
  if (progress.activePathId) {
    const path = getLearningPathById(progress.activePathId);
    const step = path ? getContinuePathCourse(progress, path) : null;
    if (step) {
      const target = firstIncompleteInCourse(progress, step.slug);
      if (target) return target;
    }
  }

  const inProgress = COURSES.filter((c) => {
    const pct = computeCourseProgressPercent(progress, c.id);
    return pct > 0 && !progress.completedCourses.includes(c.id);
  }).sort(
    (a, b) =>
      computeCourseProgressPercent(progress, b.id) -
      computeCourseProgressPercent(progress, a.id)
  );

  for (const course of inProgress) {
    const target = firstIncompleteInCourse(progress, course.slug);
    if (target) return target;
  }

  return null;
}
