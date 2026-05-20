import {
  INSURANCE_TEXTBOOK,
  TEXTBOOK_INTRO,
  TEXTBOOK_CHAPTER_COUNT,
} from "./textbook";
import { chaptersToModules } from "@/lib/courses/textbook/convert";
import type { TextbookChapter, TextbookSection } from "@/lib/courses/textbook/types";
import type { CourseModule } from "@/lib/types";

export { INSURANCE_TEXTBOOK, TEXTBOOK_INTRO, TEXTBOOK_CHAPTER_COUNT };
export type { TextbookChapter, TextbookSection };

export function getInsuranceModules(): CourseModule[] {
  return chaptersToModules(INSURANCE_TEXTBOOK);
}

export function getChapterById(id: string): TextbookChapter | undefined {
  return INSURANCE_TEXTBOOK.find((c) => c.id === id);
}
