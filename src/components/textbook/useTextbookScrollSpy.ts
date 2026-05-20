"use client";

import { useEffect, useState } from "react";
import type { TextbookChapter } from "@/lib/courses/textbook/types";

export function useTextbookScrollSpy(chapters: TextbookChapter[]) {
  const [activeChapterId, setActiveChapterId] = useState(chapters[0]?.id ?? "");
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    if (chapters.length === 0) return;

    const chapterIds = chapters.map((c) => c.id);
    const sectionIds = chapters.flatMap((c) => c.sections.map((s) => s.id));

    const chapterObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveChapterId(visible[0].target.id);
        }
      },
      { rootMargin: "-12% 0px -55% 0px", threshold: [0, 0.15, 0.35] }
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
        if (visible[0]?.target.id) {
          setActiveSectionId(visible[0].target.id);
        }
      },
      { rootMargin: "-8% 0px -72% 0px", threshold: [0, 0.2] }
    );

    chapterIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) chapterObserver.observe(el);
    });
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      setReadProgress(
        scrollHeight > 0 ? Math.min(100, (scrollTop / scrollHeight) * 100) : 0
      );
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      chapterObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [chapters]);

  return { activeChapterId, activeSectionId, readProgress };
}
