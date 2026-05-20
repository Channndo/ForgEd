"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { getCourseBySlug } from "@/lib/courses/catalog";
import { getTextbookBundle } from "@/lib/courses/textbook/registry";
import {
  computeCourseProgressPercent,
  countCompletedLessons,
} from "@/lib/courseProgress";
import { useProgress } from "@/components/providers/ProgressProvider";
import { TextbookHero } from "@/components/textbook/TextbookHero";
import { TextbookChapterArticle } from "@/components/textbook/TextbookChapterArticle";
import { TextbookStickyProgress } from "@/components/textbook/TextbookStickyProgress";
import { TextbookTableOfContents } from "@/components/textbook/TextbookTableOfContents";
import { TextbookMobileChapterSelect } from "@/components/textbook/TextbookMobileChapterSelect";
import { useTextbookScrollSpy } from "@/components/textbook/useTextbookScrollSpy";
import { Button } from "@/components/ui/Button";

export default function TextbookReadClient() {
  const params = useParams();
  const slug = params.slug as string;
  const { progress } = useProgress();
  const course = getCourseBySlug(slug);
  const bundle = getTextbookBundle(slug);

  const chapters = bundle?.chapters ?? [];
  const { activeChapterId, activeSectionId, readProgress } =
    useTextbookScrollSpy(chapters);

  const activeChapter = chapters.find((c) => c.id === activeChapterId);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, []);

  if (!course || !bundle) {
    return (
      <div className="py-20 text-center">
        <p>Textbook not found.</p>
        <Button href="/courses" className="mt-4">
          Back to courses
        </Button>
      </div>
    );
  }

  const coursePct = computeCourseProgressPercent(progress, course.id);
  const { completed, total } = countCompletedLessons(progress, slug);

  return (
    <div className="min-h-screen bg-[#050505] pb-24">
      <TextbookStickyProgress
        activeChapter={activeChapter}
        coursePercent={coursePct}
        scrollPercent={readProgress}
        detail={`${completed} of ${total} sections marked complete`}
      />

      <div className="textbook-section-padding relative mx-auto max-w-7xl">
        <Link
          href={`/courses/${slug}`}
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--gold)] transition hover:text-[var(--silver)]"
        >
          ← Back to {course.title}
        </Link>

        <div className="mt-8 max-w-4xl">
          <TextbookHero bundle={bundle} />
        </div>

        <div className="mt-14 flex flex-col gap-10 lg:flex-row lg:gap-12 xl:gap-16">
          <TextbookTableOfContents
            chapters={chapters}
            activeChapterId={activeChapterId}
            activeSectionId={activeSectionId}
            slug={slug}
            courseId={course.id}
          />

          <div className="min-w-0 flex-1 max-w-3xl">
            <TextbookMobileChapterSelect chapters={chapters} />
            {chapters.map((chapter, i) => (
              <TextbookChapterArticle
                key={chapter.id}
                chapter={chapter}
                prev={i > 0 ? chapters[i - 1] : undefined}
                next={i < chapters.length - 1 ? chapters[i + 1] : undefined}
                courseSlug={slug}
              />
            ))}

            <div className="mt-10 flex flex-wrap gap-3 rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-6">
              <Button href={`/courses/${slug}/quiz`} variant="forge">
                Take course quiz
              </Button>
              <Button href={`/courses/${slug}`} variant="secondary">
                Course overview
              </Button>
            </div>

            <p className="mt-8 text-xs leading-relaxed text-[var(--muted)]">
              ForgEd digital textbooks are general education — not legal, medical, licensing exam,
              or professional advice. Verify current laws, rates, and product terms with official
              sources before making decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
