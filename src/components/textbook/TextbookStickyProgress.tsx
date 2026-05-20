"use client";

import { useEffect, useState } from "react";
import type { TextbookChapter } from "@/lib/courses/textbook/types";

export function TextbookStickyProgress({
  activeChapter,
  coursePercent,
  scrollPercent,
  detail,
}: {
  activeChapter?: TextbookChapter;
  coursePercent: number;
  scrollPercent: number;
  detail?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed left-0 right-0 z-40 border-b border-white/10 bg-[#050505]/98 px-4 py-3 shadow-lg shadow-black/30 backdrop-blur-md"
      style={{ top: "3.5rem" }}
      role="region"
      aria-label="Reading progress"
    >
      <div className="mx-auto flex max-w-7xl items-start gap-4">
        {activeChapter && (
          <p className="hidden min-w-0 shrink truncate text-xs leading-snug text-[var(--muted)] sm:block sm:max-w-[38%] sm:pt-1">
            Ch. {activeChapter.number} — {activeChapter.title}
          </p>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3 pb-1">
            <span className="font-mono text-[10px] uppercase tracking-wide text-[var(--silver)]">
              Reading · {Math.round(scrollPercent)}% scrolled
            </span>
            <span className="shrink-0 rounded-md bg-white/10 px-2 py-0.5 font-mono text-xs font-semibold tabular-nums text-[var(--gold)]">
              Course {coursePercent}%
            </span>
          </div>
          <div
            className="h-2 overflow-hidden rounded-full bg-white/15"
            role="progressbar"
            aria-valuenow={scrollPercent}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="textbook-reading-bar"
              style={{ width: `${scrollPercent}%` }}
            />
          </div>
          {detail && (
            <p className="mt-1.5 text-xs leading-snug text-[var(--muted)]">{detail}</p>
          )}
        </div>
      </div>
    </div>
  );
}
