import type { Course } from "@/lib/types";
import {
  LEARNING_PATHS,
  resolveCatalogSlug,
  type PathCourseStep,
} from "@/lib/paths/learningPaths";
import { getTextbookChapterCount } from "@/lib/courses/textbook/registry";
import { textbookCourse } from "@/lib/courses/catalogCore";

function stepToCourse(step: PathCourseStep, pathId: string): Course {
  const slug = resolveCatalogSlug(step.slug);
  const chapters = getTextbookChapterCount(slug);
  return textbookCourse(slug, step.title, step.category, step.description, step.skills, {
    estimatedHours: step.estimatedHours,
    xpReward: step.xpReward,
    difficulty: "beginner",
    learningPathIds: [pathId],
    pathStepSlug: step.slug,
    instructorLed: step.instructorLed,
    pathOrder: step.order,
  });
}

/** All courses that belong to structured learning paths (deduped by catalog slug). */
export function buildPathCourses(): Course[] {
  const bySlug = new Map<string, Course>();
  for (const path of LEARNING_PATHS) {
    for (const step of path.courses) {
      const slug = resolveCatalogSlug(step.slug);
      if (!bySlug.has(slug)) {
        bySlug.set(slug, stepToCourse(step, path.id));
      } else {
        const existing = bySlug.get(slug)!;
        const pathIds = new Set([
          ...(existing.learningPathIds ?? []),
          path.id,
        ]);
        existing.learningPathIds = [...pathIds];
      }
    }
  }
  return [...bySlug.values()];
}

export function isPathCatalogCourse(slug: string): boolean {
  return buildPathCourses().some((c) => c.slug === slug);
}
