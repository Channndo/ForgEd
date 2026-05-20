import type { TextbookChapter } from "@/lib/courses/textbook/types";
import {
  defaultChapterMeta,
  getChapterMeta,
  toRoman,
} from "@/lib/courses/textbook/chapterMeta";
import { TextbookSectionContent } from "./TextbookSectionContent";
import { TextbookSectionFooter } from "./TextbookSectionFooter";
import { ChapterQuickCheck } from "./ChapterQuickCheck";
import { getCourseBySlug } from "@/lib/courses/catalog";

export function TextbookChapterArticle({
  chapter,
  prev,
  next,
  courseSlug,
}: {
  chapter: TextbookChapter;
  prev?: TextbookChapter;
  next?: TextbookChapter;
  courseSlug: string;
}) {
  const course = getCourseBySlug(courseSlug);
  const meta = getChapterMeta(courseSlug, chapter.id) ?? defaultChapterMeta(chapter.title);
  const roman = toRoman(chapter.number);

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
          Estimated reading time · {meta.readMinutes} min
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
        {chapter.sections.map((section, i) => (
          <div key={section.id}>
            <TextbookSectionContent
              section={section}
              leadDropCap={i === 0}
            />
            <TextbookSectionFooter
              lessonId={`${chapter.id}-${section.id}`}
              courseSlug={courseSlug}
              moduleId={chapter.id}
            />
          </div>
        ))}
      </div>

      {course && (
        <ChapterQuickCheck
          courseId={course.id}
          courseSlug={courseSlug}
          chapterNumber={chapter.number}
          chapterTitle={chapter.title}
        />
      )}

      <footer className="mt-14 flex flex-col gap-4 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
        {prev ? (
          <a
            href={`#${prev.id}`}
            className="group max-w-[48%] rounded-lg border border-white/[0.06] bg-black/20 px-4 py-3 transition hover:border-[var(--gold)]/25 hover:bg-[var(--gold)]/5"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
              ← Previous
            </span>
            <span className="mt-1 block text-sm font-medium text-[var(--silver)] group-hover:text-[var(--gold)]">
              Ch. {prev.number}: {prev.title}
            </span>
          </a>
        ) : (
          <span />
        )}
        {next ? (
          <a
            href={`#${next.id}`}
            className="group max-w-[48%] rounded-lg border border-white/[0.06] bg-black/20 px-4 py-3 text-right transition hover:border-[var(--gold)]/25 hover:bg-[var(--gold)]/5 sm:ml-auto"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
              Next →
            </span>
            <span className="mt-1 block text-sm font-medium text-[var(--silver)] group-hover:text-[var(--gold)]">
              Ch. {next.number}: {next.title}
            </span>
          </a>
        ) : null}
      </footer>
    </article>
  );
}
