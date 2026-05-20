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

export function chapter(
  id: string,
  number: number,
  title: string,
  sections: TextbookSection[],
  subtitle?: string
): TextbookChapter {
  return { id, number, title, subtitle, sections };
}
