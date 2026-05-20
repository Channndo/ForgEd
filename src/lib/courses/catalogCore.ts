import type { Course, CourseCategory } from "@/lib/types";
import { getTextbookChapterCount } from "@/lib/courses/textbook/registry";

export function textbookCourse(
  id: string,
  title: string,
  category: CourseCategory,
  description: string,
  skills: { id: string; name: string }[],
  opts?: Partial<Course>
): Course {
  const chapters = getTextbookChapterCount(id);
  return {
    id,
    slug: id,
    title,
    description,
    category,
    difficulty: "beginner",
    estimatedHours: Math.max(8, chapters * 1.2),
    xpReward: opts?.xpReward ?? chapters * 100,
    skills,
    modules: [],
    textbookCourse: true,
    ...opts,
  };
}
