import type { TextbookBundle } from "@/lib/courses/textbook/types";
import { TEXTBOOK_EDITION, totalReadMinutes } from "@/lib/courses/textbook/chapterMeta";

export function TextbookHero({ bundle }: { bundle: TextbookBundle }) {
  const chapters = bundle.chapters.length;
  const minutes = totalReadMinutes(
    bundle.slug,
    bundle.chapters.map((c) => c.id)
  );

  return (
    <header className="textbook-page px-8 py-10 sm:px-12 sm:py-14">
      <div className="relative">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]/50">
          {TEXTBOOK_EDITION}
        </p>
        <div className="mt-6 border-b border-white/10 pb-8">
          <p className="font-mono text-xs text-[var(--gold)]/80">ForgEd · Digital Textbook</p>
          <h1 className="font-serif mt-2 max-w-2xl text-3xl font-bold leading-[1.15] text-[var(--silver)] sm:text-4xl lg:text-[2.75rem]">
            {bundle.intro.title}
          </h1>
          <p className="font-textbook mt-4 text-lg italic text-[var(--muted)]">
            {bundle.intro.subtitle}
          </p>
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          <div className="rounded-lg border border-white/[0.06] bg-black/20 px-4 py-3">
            <dt className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
              Chapters
            </dt>
            <dd className="font-serif mt-1 text-2xl font-semibold text-[var(--gold)]/90">
              {chapters}
            </dd>
          </div>
          <div className="rounded-lg border border-white/[0.06] bg-black/20 px-4 py-3">
            <dt className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
              Read time
            </dt>
            <dd className="font-serif mt-1 text-2xl font-semibold text-[var(--gold)]/90">
              ~{minutes} min
            </dd>
          </div>
          <div className="rounded-lg border border-white/[0.06] bg-black/20 px-4 py-3">
            <dt className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
              Format
            </dt>
            <dd className="mt-1 text-sm font-medium text-[var(--silver)]">Textbook</dd>
          </div>
          <div className="rounded-lg border border-white/[0.06] bg-black/20 px-4 py-3">
            <dt className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
              Depth
            </dt>
            <dd className="mt-1 text-sm font-medium text-[var(--silver)]">Academic</dd>
          </div>
        </dl>

        <div className="mt-10 space-y-5 border-t border-white/[0.06] pt-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
            Preface
          </p>
          {bundle.intro.paragraphs.map((p, i) => (
            <p
              key={p.slice(0, 48)}
              className={`textbook-prose-muted max-w-none ${i === 0 ? "textbook-dropcap text-[17px] text-[var(--foreground)]" : ""}`}
            >
              {p}
            </p>
          ))}
        </div>

        <p className="mt-8 font-mono text-xs text-[var(--muted)]">
          How to use this guide: scroll through all chapters in order, or jump via the table of
          contents. Each chapter includes learning objectives, cited sources, and section
          navigation—like a reference textbook, not a slideshow of bullet summaries.
        </p>
      </div>
    </header>
  );
}
