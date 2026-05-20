import type { TextbookChapter } from "./types";
import type { UserProgress } from "@/lib/types";
import { isSectionQuizPassed } from "@/lib/progress";

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

/** First section is always open; each next section requires the previous section quiz passed */
export function isSectionUnlocked(
  progress: UserProgress,
  courseId: string,
  chapters: TextbookChapter[],
  chapterIndex: number,
  sectionIndex: number
): boolean {
  if (sectionIndex === 0) {
    if (chapterIndex === 0) return true;
    const prevChapter = chapters[chapterIndex - 1];
    const lastSection = prevChapter.sections[prevChapter.sections.length - 1];
    if (!lastSection) return true;
    const prevLessonId = sectionLessonId(prevChapter.id, lastSection.id);
    return isSectionQuizPassed(courseId, prevLessonId);
  }

  const chapter = chapters[chapterIndex];
  const prevSection = chapter.sections[sectionIndex - 1];
  if (!prevSection) return true;
  const prevLessonId = sectionLessonId(chapter.id, prevSection.id);
  return isSectionQuizPassed(courseId, prevLessonId);
}

export function isChapterUnlocked(
  progress: UserProgress,
  courseId: string,
  chapters: TextbookChapter[],
  chapterIndex: number
): boolean {
  if (chapterIndex === 0) return true;
  const prevChapter = chapters[chapterIndex - 1];
  const lastSection = prevChapter.sections[prevChapter.sections.length - 1];
  if (!lastSection) return true;
  return isSectionQuizPassed(
    courseId,
    sectionLessonId(prevChapter.id, lastSection.id)
  );
}

export function firstLockedSectionLessonId(
  progress: UserProgress,
  courseId: string,
  chapters: TextbookChapter[]
): string | null {
  const anchor = firstLockedSectionAnchor(progress, courseId, chapters);
  return anchor ? sectionLessonId(anchor.chapterId, anchor.sectionId) : null;
}

/** DOM hash target for the first section the learner must complete */
export function firstLockedSectionAnchor(
  progress: UserProgress,
  courseId: string,
  chapters: TextbookChapter[]
): { chapterId: string; sectionId: string } | null {
  for (let ci = 0; ci < chapters.length; ci++) {
    if (!isChapterUnlocked(progress, courseId, chapters, ci)) {
      const first = chapters[ci].sections[0];
      return first ? { chapterId: chapters[ci].id, sectionId: first.id } : null;
    }
    const ch = chapters[ci];
    for (let si = 0; si < ch.sections.length; si++) {
      if (!isSectionUnlocked(progress, courseId, chapters, ci, si)) {
        return { chapterId: ch.id, sectionId: ch.sections[si].id };
      }
    }
  }
  return null;
}

export function countSectionQuizzesPassed(
  progress: UserProgress,
  courseId: string,
  chapters: TextbookChapter[]
): { passed: number; total: number } {
  const ids = orderedSectionLessonIds(chapters);
  const passed = (progress.sectionQuizzesPassed?.[courseId] ?? []).filter((id) =>
    ids.includes(id)
  ).length;
  return { passed, total: ids.length };
}
