import { getAllLessonParams } from "@/lib/coursePaths";
import LessonClient from "./LessonClient";

export function generateStaticParams() {
  return getAllLessonParams().map(({ slug, moduleId, lessonId }) => ({
    slug,
    moduleId,
    lessonId,
  }));
}

export default function LessonPage() {
  return <LessonClient />;
}
