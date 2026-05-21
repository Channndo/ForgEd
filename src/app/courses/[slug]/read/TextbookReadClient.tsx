"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
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
import {
  findSectionBySectionId,
  firstLockedSectionAnchor,
  isChapterUnlocked,
} from "@/lib/courses/textbook/gating";
import { Button } from "@/components/ui/Button";
import { TEXTBOOK_FOOTER_DISCLAIMER } from "@/lib/educationDisclaimer";
import { consumeTextbookScrollRestore } from "@/lib/textbookScrollRestore";

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

  const scrollToHash = useCallback(
    (hash: string, behavior: ScrollBehavior = "smooth") => {
      if (!hash) return;
      document.getElementById(hash)?.scrollIntoView({ behavior });
    },
    []
  );

  const progressRef = useRef(progress);
  const restoringScrollRef = useRef(false);
  const [hashReady, setHashReady] = useState(false);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  const canScrollToAnchor = useCallback(
    (anchorId: string): boolean => {
      if (!course || !anchorId) return false;
      const chapterOnlyIndex = chapters.findIndex((c) => c.id === anchorId);
      if (chapterOnlyIndex >= 0) {
        return isChapterUnlocked(
          progressRef.current,
          course.id,
          chapters,
          chapterOnlyIndex
        );
      }
      const located = findSectionBySectionId(chapters, anchorId);
      if (!located) return false;
      return isChapterUnlocked(
        progressRef.current,
        course.id,
        chapters,
        located.chapterIndex
      );
    },
    [course, chapters]
  );

  const enforceSequentialAccess = useCallback(() => {
    if (!course || chapters.length === 0) return;
    const p = progressRef.current;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const chapterOnlyIndex = chapters.findIndex((c) => c.id === hash);
    if (chapterOnlyIndex >= 0) {
      if (!isChapterUnlocked(p, course.id, chapters, chapterOnlyIndex)) {
        const locked = firstLockedSectionAnchor(p, course.id, chapters);
        if (locked) {
          history.replaceState(null, "", `#${locked.sectionId}`);
          scrollToHash(locked.sectionId);
        }
        return;
      }
      const firstSec = chapters[chapterOnlyIndex].sections[0]?.id;
      if (firstSec) scrollToHash(firstSec);
      return;
    }

    const located = findSectionBySectionId(chapters, hash);
    if (located) {
      const allowed = isChapterUnlocked(
        p,
        course.id,
        chapters,
        located.chapterIndex
      );
      if (!allowed) {
        const locked = firstLockedSectionAnchor(p, course.id, chapters);
        if (locked) {
          history.replaceState(null, "", `#${locked.sectionId}`);
          scrollToHash(locked.sectionId);
        }
        return;
      }
      scrollToHash(hash);
      return;
    }

    scrollToHash(hash);
  }, [course, chapters, scrollToHash]);

  useEffect(() => {
    const t = setTimeout(() => {
      enforceSequentialAccess();
      setHashReady(true);
    }, 80);
    return () => clearTimeout(t);
  }, [slug, enforceSequentialAccess]);

  useEffect(() => {
    const onHash = () => enforceSequentialAccess();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [enforceSequentialAccess]);

  useEffect(() => {
    if (!hashReady || !activeSectionId || restoringScrollRef.current) return;
    const hash = window.location.hash.replace("#", "");
    if (hash === activeSectionId) return;
    const t = window.setTimeout(() => {
      if (canScrollToAnchor(activeSectionId)) {
        history.replaceState(null, "", `#${activeSectionId}`);
      }
    }, 400);
    return () => window.clearTimeout(t);
  }, [activeSectionId, hashReady, canScrollToAnchor]);

  useEffect(() => {
    if (!course || chapters.length === 0) return;
    const pendingRestore = consumeTextbookScrollRestore(slug);
    if (!pendingRestore) return;

    const p = progressRef.current;
    const chapterOnlyIndex = chapters.findIndex((c) => c.id === pendingRestore);
    if (chapterOnlyIndex >= 0) {
      if (!isChapterUnlocked(p, course.id, chapters, chapterOnlyIndex)) {
        enforceSequentialAccess();
        return;
      }
    } else {
      const located = findSectionBySectionId(chapters, pendingRestore);
      if (
        located &&
        !isChapterUnlocked(p, course.id, chapters, located.chapterIndex)
      ) {
        enforceSequentialAccess();
        return;
      }
    }

    restoringScrollRef.current = true;
    history.replaceState(null, "", `#${pendingRestore}`);
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToHash(pendingRestore, "instant");
        restoringScrollRef.current = false;
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [progress, course, chapters, slug, enforceSequentialAccess, scrollToHash]);

  useEffect(() => {
    if (!course || chapters.length === 0) return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const p = progressRef.current;

    const chapterOnlyIndex = chapters.findIndex((c) => c.id === hash);
    if (chapterOnlyIndex >= 0) {
      if (!isChapterUnlocked(p, course.id, chapters, chapterOnlyIndex)) {
        enforceSequentialAccess();
      }
      return;
    }

    const located = findSectionBySectionId(chapters, hash);
    if (
      located &&
      !isChapterUnlocked(p, course.id, chapters, located.chapterIndex)
    ) {
      enforceSequentialAccess();
    }
  }, [progress, course, chapters, enforceSequentialAccess]);

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
            <TextbookMobileChapterSelect chapters={chapters} courseId={course.id} />
            {chapters.map((chapter, i) => (
              <TextbookChapterArticle
                key={chapter.id}
                chapter={chapter}
                chapterIndex={i}
                chapters={chapters}
                prev={i > 0 ? chapters[i - 1] : undefined}
                next={i < chapters.length - 1 ? chapters[i + 1] : undefined}
                courseSlug={slug}
                courseId={course.id}
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
              {TEXTBOOK_FOOTER_DISCLAIMER}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
