"use client";

import type { TextbookChapter } from "@/lib/courses/textbook/types";

export function TextbookMobileChapterSelect({
  chapters,
}: {
  chapters: TextbookChapter[];
}) {
  return (
    <div className="mb-8 lg:hidden">
      <label
        htmlFor="textbook-chapter-jump"
        className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]"
      >
        Jump to chapter
      </label>
      <select
        id="textbook-chapter-jump"
        className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 font-textbook text-sm text-[var(--foreground)] outline-none focus:border-[var(--gold)]/40"
        defaultValue=""
        onChange={(e) => {
          const id = e.target.value;
          if (id) window.location.hash = id;
        }}
      >
        <option value="" disabled>
          Select a chapter…
        </option>
        {chapters.map((ch) => (
          <option key={ch.id} value={ch.id}>
            Ch. {ch.number} — {ch.title}
          </option>
        ))}
      </select>
    </div>
  );
}
