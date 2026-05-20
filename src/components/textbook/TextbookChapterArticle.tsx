"use client";

import type { TextbookChapter } from "@/lib/courses/textbook/types";
import {
  defaultChapterMeta,
  getChapterMeta,
  toRoman,
} from "@/lib/courses/textbook/chapterMeta";
import {
  isChapterUnlocked,
  isSectionUnlocked,
  sectionLessonId,
} from "@/lib/courses/textbook/gating";
import { isSectionQuizPassed } from "@/lib/progress";
import { useProgress } from "@/components/providers/ProgressProvider";
import { TextbookSectionContent } from "./TextbookSectionContent";
import { SectionQuiz } from "./SectionQuiz";
import { ChapterQuickCheck } from "./ChapterQuickCheck";
import { LockedSection } from "./LockedSection";
import { getCourseBySlug } from "@/lib/courses/catalog";

export function TextbookChapterArticle({
  chapter,
  chapterIndex,
  chapters,
  prev,
  next,
  courseSlug,
  courseId,
}: {
  chapter: TextbookChapter;
  chapterIndex: number;
  chapters: TextbookChapter[];
  prev?: TextbookChapter;
  next?: TextbookChapter;
  courseSlug: string;
  courseId: string;
}) {
  const { progress } = useProgress();
  const course = getCourseBySlug(courseSlug);
  const meta = getChapterMeta(courseSlug, chapter.id) ?? defaultChapterMeta(chapter.title);
  const roman = toRoman(chapter.number);
  const chapterUnlocked = isChapterUnlocked(progress, courseId, chapters, chapterIndex);

  const allSectionQuizzesPassed = chapter.sections.every((sec) =>
    isSectionQuizPassed(courseId, sectionLessonId(chapter.id, sec.id))
  );

  if (!chapterUnlocked) {
    const prevChapter = chapters[chapterIndex - 1];
    const lastSec = prevChapter?.sections[prevChapter.sections.length - 1];
    const anchor = lastSec ? `#${lastSec.id}` : prevChapter ? `#${prevChapter.id}` : "#";
    return (
      <article
        id={chapter.id}
        className="textbook-page mb-16 scroll-mt-28 px-8 py-10 sm:px-10 sm:py-12 last:mb-0"
      >
        <LockedSection
          title={`Chapter ${chapter.number}: ${chapter.title}`}
          message="Pass the section quiz at the end of the previous chapter before opening this chapter."
          ctaLabel="Go to previous chapter"
          ctaHref={anchor}
        />
      </article>
    );
  }

  return (
    <article
      id={chapter.id}
      className="textbook-page mb-16 scroll-mt-28 px-8 py-10 sm:px-10 sm:py-12 last:mb-0"
    >
      <header className="relative border-b border-white/[0.08] pb-10">
        <p
          className="textbook-chapter-num pointer-events-none absolute -right-2 -top-4 select-none sm:-right-4"
          aria-hidden
        >
          {roman}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--gold)]/90">
          Chapter {chapter.number}
        </p>
        <h2 className="font-serif mt-2 max-w-xl text-2xl font-bold leading-tight text-[var(--silver)] sm:text-3xl">
          {chapter.title}
        </h2>
        {chapter.subtitle && (
          <p className="font-textbook mt-3 text-base italic text-[var(--muted)]">
            {chapter.subtitle}
          </p>
        )}
        <p className="mt-4 font-mono text-xs text-[var(--muted)]">
          Estimated reading time · {meta.readMinutes} min · Complete each section quiz to advance
        </p>
      </header>

      {meta.objectives.length > 0 && (
        <aside className="mt-8 textbook-callout">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--gold)]/90">
            Learning objectives
          </p>
          <p className="mt-1 text-xs text-[var(--muted)]">
            After this chapter, you should be able to:
          </p>
          <ul className="textbook-objectives mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[var(--muted)]">
            {meta.objectives.map((obj) => (
              <li key={obj}>{obj}</li>
            ))}
          </ul>
        </aside>
      )}

      <div className="mt-12 space-y-14">
        {chapter.sections.map((section, sectionIndex) => {
          const lessonId = sectionLessonId(chapter.id, section.id);
          const sectionUnlocked = isSectionUnlocked(
            progress,
            courseId,
            chapters,
            chapterIndex,
            sectionIndex
          );

          if (!sectionUnlocked) {
            const prevSec = chapter.sections[sectionIndex - 1];
            return (
              <LockedSection
                key={section.id}
                title={section.title}
                message="Pass the section quiz on the previous section before continuing."
                ctaLabel="Go to previous section"
                ctaHref={prevSec ? `#${prevSec.id}` : `#${chapter.id}`}
              />
            );
          }

          return (
            <div key={section.id}>
              <TextbookSectionContent section={section} leadDropCap={sectionIndex === 0} />
              {course && (
                <SectionQuiz
                  courseId={courseId}
                  courseSlug={courseSlug}
                  chapterNumber={chapter.number}
                  chapterId={chapter.id}
                  lessonId={lessonId}
                  sectionTitle={section.title}
                />
              )}
            </div>
          );
        })}
      </div>

      {course && allSectionQuizzesPassed && (
        <ChapterQuickCheck
          courseId={course.id}
          courseSlug={courseSlug}
          chapterNumber={chapter.number}
          chapterTitle={chapter.title}
        />
      )}

      <footer className="mt-14 flex flex-col gap-4 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
        {prev ? (
          <ChapterNavLink
            chapter={prev}
            courseId={courseId}
            chapters={chapters}
            progress={progress}
            direction="prev"
          />
        ) : (
          <span />
        )}
        {next ? (
          <ChapterNavLink
            chapter={next}
            courseId={courseId}
            chapters={chapters}
            progress={progress}
            direction="next"
          />
        ) : null}
      </footer>
    </article>
  );
}

function ChapterNavLink({
  chapter,
  courseId,
  chapters,
  progress,
  direction,
}: {
  chapter: TextbookChapter;
  courseId: string;
  chapters: TextbookChapter[];
  progress: ReturnType<typeof useProgress>["progress"];
  direction: "prev" | "next";
}) {
  const chapterIndex = chapters.findIndex((c) => c.id === chapter.id);
  const unlocked =
    direction === "prev" ||
    (chapterIndex >= 0 && isChapterUnlocked(progress, courseId, chapters, chapterIndex));

  const label = direction === "prev" ? "← Previous" : "Next →";
  const align = direction === "next" ? "text-right sm:ml-auto" : "";

  if (!unlocked) {
    return (
      <span
        className={`max-w-[48%] rounded-lg border border-white/[0.04] bg-black/10 px-4 py-3 opacity-50 ${align}`}
        title="Pass this chapter's final section quiz to unlock the next chapter"
      >
        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
          {label} (locked)
        </span>
        <span className="mt-1 block text-sm text-[var(--muted)]">
          Ch. {chapter.number}: {chapter.title}
        </span>
      </span>
    );
  }

  const firstSection = chapter.sections[0];
  const href = firstSection ? `#${firstSection.id}` : `#${chapter.id}`;

  return (
    <a
      href={href}
      className={`group max-w-[48%] rounded-lg border border-white/[0.06] bg-black/20 px-4 py-3 transition hover:border-[var(--gold)]/25 hover:bg-[var(--gold)]/5 ${align}`}
    >
      <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
        {label}
      </span>
      <span className="mt-1 block text-sm font-medium text-[var(--silver)] group-hover:text-[var(--gold)]">
        Ch. {chapter.number}: {chapter.title}
      </span>
    </a>
  );
}
