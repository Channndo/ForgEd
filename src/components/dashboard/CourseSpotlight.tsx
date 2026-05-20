"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { COURSES, CATEGORY_META } from "@/lib/courses/catalog";
import { Button } from "@/components/ui/Button";

const ROTATE_MS = 5500;

export function CourseSpotlight() {
  const courses = useMemo(() => COURSES, []);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const course = courses[index];

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % courses.length);
  }, [courses.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + courses.length) % courses.length);
  }, [courses.length]);

  useEffect(() => {
    if (paused || courses.length <= 1) return;
    const id = setInterval(next, ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, next, courses.length]);

  if (!course) return null;

  const categoryLabel = CATEGORY_META[course.category]?.label ?? course.category;

  return (
    <div
      className="mt-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
        Suggested course
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <div className="relative min-h-[88px] flex-1 overflow-hidden rounded-xl border border-[var(--gold)]/25 bg-black/40 p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--gold)]">
                {categoryLabel}
              </span>
              <p className="mt-1 font-serif text-lg font-semibold text-[var(--silver)]">
                {course.title}
              </p>
              <p className="mt-1 line-clamp-2 text-sm text-[var(--muted)]">
                {course.description}
              </p>
              <p className="mt-2 text-xs text-[var(--gold)]">
                {course.estimatedHours}h · {course.xpReward} XP
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-3 right-3 flex items-center gap-1">
            <button
              type="button"
              onClick={prev}
              className="rounded-lg border border-white/10 bg-black/60 p-1.5 text-[var(--muted)] hover:text-white"
              aria-label="Previous course"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              className="rounded-lg border border-white/10 bg-black/60 p-1.5 text-[var(--muted)] hover:text-white"
              aria-label="Next course"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:w-48">
          <Button href={`/courses/${course.slug}`} variant="forge" className="h-full min-h-[44px]">
            Start this course <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/courses" variant="secondary">
            Browse library
          </Button>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {courses.map((c, i) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setIndex(i)}
            title={c.title}
            className={`rounded-full transition-all ${
              i === index
                ? "h-2 w-6 bg-[var(--gold)]"
                : "h-2 w-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Show ${c.title}`}
            aria-current={i === index ? "true" : undefined}
          />
        ))}
        <Link
          href={`/courses/${course.slug}`}
          className="ml-auto text-xs text-[var(--gold)] hover:underline"
        >
          View {course.title} →
        </Link>
      </div>
    </div>
  );
}
