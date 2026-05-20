import { COURSES } from "@/lib/courses/catalog";
import { getInsuranceModules } from "@/lib/courses/insurance";
import type { CourseModule } from "@/lib/types";

export function getModulesForSlug(slug: string): CourseModule[] {
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) return [];
  if (course.textbookCourse) return getInsuranceModules();
  return course.modules;
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
    const modules = course.textbookCourse
      ? getInsuranceModules()
      : course.modules;
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
