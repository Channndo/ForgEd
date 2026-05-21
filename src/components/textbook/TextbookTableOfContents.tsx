"use client";

import Link from "next/link";
import type { TextbookChapter } from "@/lib/courses/textbook/types";
import { getChapterMeta } from "@/lib/courses/textbook/chapterMeta";
import {
  computeCourseProgressPercent,
  countCompletedLessons,
} from "@/lib/courseProgress";
import { isChapterUnlocked } from "@/lib/courses/textbook/gating";
import {
  countChapterQuickChecksPassed,
  isChapterQuickCheckPassed,
} from "@/lib/progress";
import { useProgress } from "@/components/providers/ProgressProvider";
import { Lock } from "lucide-react";

export function TextbookTableOfContents({
  chapters,
  activeChapterId,
  activeSectionId,
  slug,
  courseId,
}: {
  chapters: TextbookChapter[];
  activeChapterId: string;
  activeSectionId: string | null;
  slug: string;
  courseId: string;
}) {
  const { progress } = useProgress();
  const pct = computeCourseProgressPercent(progress, courseId);
  const { completed, total } = countCompletedLessons(progress, slug);
  const chapterQuizzes = countChapterQuickChecksPassed(courseId, chapters.length);

  return (
    <nav
      aria-label="Table of contents"
      className="lg:sticky lg:top-24 lg:flex lg:max-h-[calc(100vh-7rem)] lg:w-72 lg:shrink-0 lg:flex-col"
    >
      <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0a]/90 p-5 backdrop-blur-sm lg:flex lg:flex-col lg:overflow-hidden">
        <div className="mb-4 shrink-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
            Table of contents
          </p>
          <div className="mt-3">
            <div className="flex items-center justify-between gap-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">
                Your progress
              </p>
              <span className="rounded-md bg-white/10 px-1.5 py-0.5 font-mono text-xs font-semibold tabular-nums text-[var(--gold)]">
                {pct}%
              </span>
            </div>
            <div
              className="mt-2 h-2 overflow-hidden rounded-full bg-white/15"
              role="progressbar"
              aria-valuenow={pct}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="textbook-reading-bar"
                style={{ width: `${pct}%` }}
              />
            </div>
            <p className="mt-1.5 text-xs text-[var(--muted)]">
              Chapter quizzes{" "}
              <span className="font-semibold text-[var(--silver)]">
                {chapterQuizzes.passed}/{chapterQuizzes.total}
              </span>
              {" "}· {completed}/{total} sections read
            </p>
          </div>
        </div>

        <ol className="mt-2 min-h-0 space-y-1 overflow-y-auto overscroll-contain pr-1 lg:flex-1">
          {chapters.map((ch, chapterIndex) => {
            const isChapterActive = activeChapterId === ch.id;
            const meta = getChapterMeta(slug, ch.id);
            const chapterOpen = isChapterUnlocked(
              progress,
              courseId,
              chapters,
              chapterIndex
            );
            const chapterQuizDone = isChapterQuickCheckPassed(courseId, ch.number);

            return (
              <li key={ch.id}>
                {chapterOpen ? (
                  <a
                    href={`#${ch.sections[0]?.id ?? ch.id}`}
                    className={`block rounded-lg px-2.5 py-2 transition ${
                      isChapterActive
                        ? "textbook-toc-active -ml-px"
                        : "text-[var(--muted)] hover:bg-white/[0.04] hover:text-[var(--silver)]"
                    }`}
                  >
                    <span className="flex items-center gap-1.5 font-mono text-[10px] text-[var(--gold)]/70">
                      Ch. {ch.number}
                      {meta ? ` · ${meta.readMinutes}m` : ""}
                      {chapterQuizDone && (
                        <span className="text-[var(--success)]" title="Chapter quiz passed">
                          ✓
                        </span>
                      )}
                    </span>
                    <span className="mt-0.5 block text-sm leading-snug">{ch.title}</span>
                  </a>
                ) : (
                  <span className="flex items-start gap-2 rounded-lg px-2.5 py-2 text-[var(--muted)]/60">
                    <Lock className="mt-0.5 h-3 w-3 shrink-0" />
                    <span>
                      <span className="font-mono text-[10px]">Ch. {ch.number}</span>
                      <span className="mt-0.5 block text-sm leading-snug">{ch.title}</span>
                    </span>
                  </span>
                )}
                {isChapterActive && chapterOpen && (
                  <ul className="mb-2 ml-3 mt-0.5 space-y-0.5 border-l border-white/[0.06] pl-3">
                    {ch.sections.map((sec) => {
                      const sectionLabel = sec.title.replace(/^\d+\.\d+\s*/, "");
                      const isSectionActive = activeSectionId === sec.id;

                      return (
                        <li key={sec.id}>
                          <a
                            href={`#${sec.id}`}
                            className={`block rounded py-1 pl-1 text-xs leading-snug transition ${
                              isSectionActive
                                ? "font-medium text-[var(--gold)]"
                                : "text-[var(--muted)] hover:text-[var(--silver)]"
                            }`}
                          >
                            {sectionLabel}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ol>

        <div className="mt-5 shrink-0 border-t border-white/[0.06] pt-4 text-xs leading-relaxed text-[var(--muted)] lg:block">
          <p>
            Read all sections in a chapter, then pass the chapter quiz to unlock the next chapter.
          </p>
          <Link
            href={`/courses/${slug}/quiz`}
            className="mt-2 inline-block font-medium text-[var(--gold)] hover:underline"
          >
            Course review quiz →
          </Link>
        </div>
      </div>
    </nav>
  );
}
