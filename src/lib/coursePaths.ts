import { COURSES } from "@/lib/courses/catalog";
import {
  getTextbookModules,
  isTextbookCourse,
} from "@/lib/courses/textbook/registry";
import type { CourseModule } from "@/lib/types";

export function getModulesForSlug(slug: string): CourseModule[] {
  if (isTextbookCourse(slug)) return getTextbookModules(slug);
  const course = COURSES.find((c) => c.slug === slug);
  return course?.modules ?? [];
}

export function getAllCourseSlugs(): string[] {
  return COURSES.map((c) => c.slug);
}

export function getAllLessonParams(): {
  slug: string;
  moduleId: string;
  lessonId: string;
}[] {
  const paths: { slug: string; moduleId: string; lessonId: string }[] = [];
  for (const course of COURSES) {
    const modules = getModulesForSlug(course.slug);
    for (const mod of modules) {
      for (const lesson of mod.lessons) {
        paths.push({
          slug: course.slug,
          moduleId: mod.id,
          lessonId: lesson.id,
        });
      }
    }
  }
  return paths;
}
