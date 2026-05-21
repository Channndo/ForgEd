import type { TextbookChapter, TextbookSection } from "./types";

type SectionInput = Omit<TextbookSection, "id" | "title"> & {
  id: string;
  title: string;
};

export function section(
  id: string,
  title: string,
  paragraphs: string[],
  extras?: Omit<SectionInput, "id" | "title" | "paragraphs">
): TextbookSection {
  return { id, title, paragraphs, ...extras };
}

type ChapterExtras = {
  subtitle?: string;
  learningObjectives?: string[];
  chapterSummary?: string;
  keyConcepts?: string[];
  realWorldRelevance?: string;
};

export function chapter(
  id: string,
  number: number,
  title: string,
  sections: TextbookSection[],
  subtitleOrExtras?: string | ChapterExtras
): TextbookChapter {
  const extras: ChapterExtras | undefined =
    typeof subtitleOrExtras === "string"
      ? { subtitle: subtitleOrExtras }
      : subtitleOrExtras;
  return {
    id,
    number,
    title,
    subtitle: extras?.subtitle,
    sections,
    learningObjectives: extras?.learningObjectives,
    chapterSummary: extras?.chapterSummary,
    keyConcepts: extras?.keyConcepts,
    realWorldRelevance: extras?.realWorldRelevance,
  };
}
