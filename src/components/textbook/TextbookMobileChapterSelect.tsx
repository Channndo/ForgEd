"use client";

import type { TextbookChapter } from "@/lib/courses/textbook/types";
import {
  findSectionBySectionId,
  firstLockedSectionAnchor,
  isSectionUnlocked,
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
        Jump to section (unlocked only)
      </label>
      <select
        id="textbook-chapter-jump"
        className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 font-textbook text-sm text-[var(--foreground)] outline-none focus:border-[var(--gold)]/40"
        defaultValue=""
        onChange={(e) => {
          const id = e.target.value;
          if (!id) return;
          const located = findSectionBySectionId(chapters, id);
          if (!located) {
            window.location.hash = id;
            return;
          }
          const allowed = isSectionUnlocked(
            progress,
            courseId,
            chapters,
            located.chapterIndex,
            located.sectionIndex
          );
          if (!allowed) {
            const locked = firstLockedSectionAnchor(progress, courseId, chapters);
            if (locked) window.location.hash = locked.sectionId;
            return;
          }
          window.location.hash = id;
        }}
      >
        <option value="" disabled>
          Select an unlocked section…
        </option>
        {chapters.map((ch, chapterIndex) =>
          ch.sections.map((sec, sectionIndex) => {
            const unlocked = isSectionUnlocked(
              progress,
              courseId,
              chapters,
              chapterIndex,
              sectionIndex
            );
            if (!unlocked) return null;
            return (
              <option key={sec.id} value={sec.id}>
                Ch. {ch.number} · {sec.title.replace(/^\d+\.\d+\s*/, "")}
              </option>
            );
          })
        )}
      </select>
    </div>
  );
}
