import type { TextbookChapter } from "./types";
import type { UserProgress } from "@/lib/types";
import { isChapterQuickCheckPassed } from "@/lib/progress";

export function sectionLessonId(chapterId: string, sectionId: string): string {
  return `${chapterId}-${sectionId}`;
}

/** Flat ordered list of section lesson ids for a textbook */
export function orderedSectionLessonIds(chapters: TextbookChapter[]): string[] {
  return chapters.flatMap((ch) =>
    ch.sections.map((sec) => sectionLessonId(ch.id, sec.id))
  );
}

export function findSectionBySectionId(
  chapters: TextbookChapter[],
  sectionId: string
): { chapterIndex: number; sectionIndex: number; chapterId: string } | null {
  for (let ci = 0; ci < chapters.length; ci++) {
    const si = chapters[ci].sections.findIndex((s) => s.id === sectionId);
    if (si >= 0) {
      return { chapterIndex: ci, sectionIndex: si, chapterId: chapters[ci].id };
    }
  }
  return null;
}

export function findSectionIndex(
  chapters: TextbookChapter[],
  chapterId: string,
  sectionId: string
): { chapterIndex: number; sectionIndex: number } | null {
  const chapterIndex = chapters.findIndex((c) => c.id === chapterId);
  if (chapterIndex < 0) return null;
  const sectionIndex = chapters[chapterIndex].sections.findIndex(
    (s) => s.id === sectionId
  );
  if (sectionIndex < 0) return null;
  return { chapterIndex, sectionIndex };
}

/** Chapter 1 is open; later chapters unlock after passing the previous chapter quiz */
export function isChapterUnlocked(
  progress: UserProgress,
  courseId: string,
  chapters: TextbookChapter[],
  chapterIndex: number
): boolean {
  if (chapterIndex === 0) return true;
  const prevChapter = chapters[chapterIndex - 1];
  if (!prevChapter) return true;
  return isChapterQuickCheckPassed(courseId, prevChapter.number);
}

/** All sections in an unlocked chapter are readable — progression is per chapter quiz */
export function isSectionUnlocked(
  progress: UserProgress,
  courseId: string,
  chapters: TextbookChapter[],
  chapterIndex: number,
  _sectionIndex: number
): boolean {
  return isChapterUnlocked(progress, courseId, chapters, chapterIndex);
}

export function firstLockedSectionLessonId(
  progress: UserProgress,
  courseId: string,
  chapters: TextbookChapter[]
): string | null {
  const anchor = firstLockedSectionAnchor(progress, courseId, chapters);
  return anchor ? sectionLessonId(anchor.chapterId, anchor.sectionId) : null;
}

/** First chapter or section the learner must reach (chapter-gated) */
export function firstLockedSectionAnchor(
  progress: UserProgress,
  courseId: string,
  chapters: TextbookChapter[]
): { chapterId: string; sectionId: string } | null {
  for (let ci = 0; ci < chapters.length; ci++) {
    if (!isChapterUnlocked(progress, courseId, chapters, ci)) {
      const ch = chapters[ci];
      const first = ch.sections[0];
      return first ? { chapterId: ch.id, sectionId: first.id } : { chapterId: ch.id, sectionId: ch.id };
    }
  }
  return null;
}
