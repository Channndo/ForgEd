"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { COURSES } from "@/lib/courses/catalog";
import { buildBalancedCourseRotation } from "@/lib/ecosystem/domains";
import { getDomainById, domainForCourse } from "@/lib/ecosystem/domains";
import { getContinueLearningTarget } from "@/lib/continueLearning";
import { useAuth } from "@/components/providers/AuthProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { Button } from "@/components/ui/Button";

const ROTATE_MS = 6000;

export function CourseSpotlight() {
  const { user } = useAuth();
  const { progress } = useProgress();
  const continueTarget = useMemo(
    () => (user ? getContinueLearningTarget(progress) : null),
    [user, progress]
  );

  const courses = useMemo(() => buildBalancedCourseRotation(COURSES), []);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const resumeCourse = continueTarget
    ? COURSES.find((c) => c.slug === continueTarget.courseSlug)
    : undefined;
  const displayCourse = resumeCourse ?? courses[index];
  const domain = displayCourse
    ? getDomainById(domainForCourse(displayCourse.category))
    : null;

  useEffect(() => {
    if (!resumeCourse || !courses.length) return;
    const i = courses.findIndex((c) => c.id === resumeCourse.id);
    if (i >= 0) setIndex(i);
  }, [resumeCourse, courses]);

  const next = useCallback(() => {
    if (continueTarget) return;
    setIndex((i) => (i + 1) % courses.length);
  }, [continueTarget, courses.length]);

  const prev = useCallback(() => {
    if (continueTarget) return;
    setIndex((i) => (i - 1 + courses.length) % courses.length);
  }, [continueTarget, courses.length]);

  useEffect(() => {
    if (paused || courses.length <= 1 || continueTarget) return;
    const id = setInterval(next, ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, next, courses.length, continueTarget]);

  if (!displayCourse) return null;

  const primaryHref = continueTarget?.href ?? `/courses/${displayCourse.slug}/read`;
  const primaryLabel = continueTarget ? "Jump back in" : "Start learning";
  const headerLabel = continueTarget
    ? "Continue where you left off"
    : "Suggested for you · rotates across all domains";

  return (
    <div
      className="mt-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
        {headerLabel}
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <div className="relative min-h-[96px] flex-1 overflow-hidden rounded-xl border border-[var(--gold)]/20 bg-black/40 p-4 transition hover:border-[var(--gold)]/35">
          <AnimatePresence mode="wait">
            <motion.div
              key={continueTarget ? continueTarget.courseSlug : displayCourse.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
            >
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--gold)]">
                {domain?.label ?? "Learning"}
                {continueTarget ? (
                  <span className="text-[var(--muted)]">
                    {" "}
                    · {continueTarget.progressPercent}% complete
                  </span>
                ) : null}
              </span>
              <p className="mt-1 font-serif text-lg font-semibold text-[var(--silver)]">
                {displayCourse.title}
              </p>
              {continueTarget ? (
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Next up:{" "}
                  <span className="text-[var(--silver)]">
                    {continueTarget.resumeLabel}
                  </span>
                </p>
              ) : (
                <p className="mt-1 line-clamp-2 text-sm text-[var(--muted)]">
                  {displayCourse.description}
                </p>
              )}
              <p className="mt-2 text-xs text-[var(--gold)]">
                {displayCourse.estimatedHours}h · {displayCourse.xpReward} XP
              </p>
            </motion.div>
          </AnimatePresence>

          {!continueTarget && courses.length > 1 && (
            <div className="absolute bottom-3 right-3 flex items-center gap-1">
              <button
                type="button"
                onClick={prev}
                className="rounded-lg border border-white/10 bg-black/60 p-1.5 text-[var(--muted)] transition hover:border-[var(--gold)]/25 hover:text-white"
                aria-label="Previous suggestion"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                className="rounded-lg border border-white/10 bg-black/60 p-1.5 text-[var(--muted)] transition hover:border-[var(--gold)]/25 hover:text-white"
                aria-label="Next suggestion"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 sm:w-48">
          <Button href={primaryHref} variant="forge" className="h-full min-h-[44px]">
            {primaryLabel} <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            href={
              continueTarget
                ? `/courses/${displayCourse.slug}`
                : `/courses?domain=${domain?.id ?? "technology"}`
            }
            variant="secondary"
          >
            {continueTarget ? "Course overview" : `Browse ${domain?.label ?? "courses"}`}
          </Button>
        </div>
      </div>

      {!continueTarget && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {courses.map((c, i) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setIndex(i)}
              title={c.title}
              className={`rounded-full transition-all duration-200 ${
                i === index
                  ? "h-2 w-6 bg-[var(--gold)]"
                  : "h-2 w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Show ${c.title}`}
              aria-current={i === index ? "true" : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}
