import type { CourseModule, LessonCard } from "@/lib/types";
import type { TextbookChapter } from "./types";

export function chapterToModule(chapter: TextbookChapter): CourseModule {
  const lessons: LessonCard[] = chapter.sections.map((section) => {
    const body = [
      ...section.paragraphs,
      ...(section.bulletPoints?.map((b) => `• ${b}`) ?? []),
      ...(section.laws?.map(
        (l) => `**${l.name}**${l.year ? ` (${l.year})` : ""}: ${l.summary}`
      ) ?? []),
    ].join("\n\n");

    return {
      id: `${chapter.id}-${section.id}`,
      title: section.title,
      content: body,
      example: section.citations?.[0]
        ? `Source: ${section.citations[0].source}${section.citations[0].url ? ` — ${section.citations[0].url}` : ""}`
        : undefined,
    };
  });

  return {
    id: chapter.id,
    title: `Chapter ${chapter.number}: ${chapter.title}`,
    description: chapter.subtitle ?? `Chapter ${chapter.number}`,
    lessons,
    keyConcepts: chapter.sections
      .slice(0, 3)
      .map((s) => s.title.replace(/^\d+\.\d+\s*/, "")),
  };
}

export function chaptersToModules(chapters: TextbookChapter[]): CourseModule[] {
  return chapters.map(chapterToModule);
}
