import { COURSES } from "@/lib/courses/catalog";
import { getModulesForSlug } from "@/lib/coursePaths";
import type { UserProgress } from "@/lib/types";

export function getLessonIdsForCourse(slug: string): string[] {
  return getModulesForSlug(slug).flatMap((m) => m.lessons.map((l) => l.id));
}

export function getModuleIdsForCourse(slug: string): string[] {
  return getModulesForSlug(slug).map((m) => m.id);
}

export function courseIdForLesson(lessonId: string): string | undefined {
  for (const course of COURSES) {
    const modules = getModulesForSlug(course.slug);
    for (const mod of modules) {
      if (mod.lessons.some((l) => l.id === lessonId)) return course.id;
    }
  }
  return undefined;
}

export function countCompletedLessons(
  progress: UserProgress,
  slug: string
): { completed: number; total: number } {
  const ids = getLessonIdsForCourse(slug);
  const completed = ids.filter((id) =>
    progress.completedLessons.includes(id)
  ).length;
  return { completed, total: ids.length };
}

export function computeCourseProgressPercent(
  progress: UserProgress,
  courseId: string
): number {
  const course = COURSES.find((c) => c.id === courseId);
  if (!course) return 0;
  if (progress.completedCourses.includes(courseId)) return 100;
  const { completed, total } = countCompletedLessons(progress, course.slug);
  if (total === 0) return 0;
  return Math.min(99, Math.round((completed / total) * 100));
}

export function syncCourseProgressFromLessons(data: UserProgress): UserProgress {
  for (const course of COURSES) {
    data.courseProgress[course.id] = computeCourseProgressPercent(
      data,
      course.id
    );
  }
  return data;
}

export function maybeCompleteModule(
  data: UserProgress,
  courseSlug: string,
  moduleId: string
): UserProgress {
  const mod = getModulesForSlug(courseSlug).find((m) => m.id === moduleId);
  if (!mod) return data;
  const allDone = mod.lessons.every((l) =>
    data.completedLessons.includes(l.id)
  );
  if (allDone && !data.completedModules.includes(moduleId)) {
    data.completedModules.push(moduleId);
    data.xp += 50;
  }
  return data;
}
