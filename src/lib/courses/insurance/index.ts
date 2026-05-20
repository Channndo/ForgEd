import {
  INSURANCE_TEXTBOOK,
  TEXTBOOK_INTRO,
  TEXTBOOK_CHAPTER_COUNT,
  type TextbookChapter,
  type TextbookSection,
} from "./textbook";
import type { CourseModule, LessonCard } from "@/lib/types";

export { INSURANCE_TEXTBOOK, TEXTBOOK_INTRO, TEXTBOOK_CHAPTER_COUNT };
export type { TextbookChapter, TextbookSection };

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
    description: chapter.subtitle ?? `Module ${chapter.number} of Insurance Fundamentals`,
    lessons,
    keyConcepts: chapter.sections
      .slice(0, 3)
      .map((s) => s.title.replace(/^\d+\.\d+\s*/, "")),
  };
}

export function getInsuranceModules(): CourseModule[] {
  return INSURANCE_TEXTBOOK.map(chapterToModule);
}

export function getChapterById(id: string): TextbookChapter | undefined {
  return INSURANCE_TEXTBOOK.find((c) => c.id === id);
}
