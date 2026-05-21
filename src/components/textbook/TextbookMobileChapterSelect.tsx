"use client";

import type { TextbookChapter } from "@/lib/courses/textbook/types";
import {
  firstLockedSectionAnchor,
  isChapterUnlocked,
} from "@/lib/courses/textbook/gating";
import { useProgress } from "@/components/providers/ProgressProvider";

export function TextbookMobileChapterSelect({
  chapters,
  courseId,
}: {
  chapters: TextbookChapter[];
  courseId: string;
}) {
  const { progress } = useProgress();

  return (
    <div className="mb-8 lg:hidden">
      <label
        htmlFor="textbook-chapter-jump"
        className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]"
      >
        Jump to section
      </label>
      <select
        id="textbook-chapter-jump"
        className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 font-textbook text-sm text-[var(--foreground)] outline-none focus:border-[var(--gold)]/40"
        defaultValue=""
        onChange={(e) => {
          const id = e.target.value;
          if (!id) return;
          const chapterIndex = chapters.findIndex((c) =>
            c.sections.some((s) => s.id === id)
          );
          if (chapterIndex >= 0 && !isChapterUnlocked(progress, courseId, chapters, chapterIndex)) {
            const locked = firstLockedSectionAnchor(progress, courseId, chapters);
            if (locked) window.location.hash = locked.sectionId;
            return;
          }
          window.location.hash = id;
        }}
      >
        <option value="" disabled>
          Select a section…
        </option>
        {chapters.map((ch, chapterIndex) =>
          isChapterUnlocked(progress, courseId, chapters, chapterIndex)
            ? ch.sections.map((sec) => (
                <option key={sec.id} value={sec.id}>
                  Ch. {ch.number} · {sec.title.replace(/^\d+\.\d+\s*/, "")}
                </option>
              ))
            : null
        )}
      </select>
    </div>
  );
}
