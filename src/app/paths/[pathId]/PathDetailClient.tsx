"use client";

import Link from "next/link";
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Lock,
  Route,
  Sparkles,
  Target,
} from "lucide-react";
import type { LearningPath } from "@/lib/paths/learningPaths";
import { resolveCatalogSlug } from "@/lib/paths/learningPaths";
import {
  getContinuePathCourse,
  getPathProgress,
  isCourseCompleteInProgress,
  isPathCourseUnlocked,
  isPathUnlocked,
  pathCompletionPercent,
} from "@/lib/paths/pathProgress";
import { useProgress } from "@/components/providers/ProgressProvider";
import { PathLabSimulator } from "@/components/paths/PathLabSimulator";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { setActivePath } from "@/lib/paths/pathProgress";
import { computeCourseProgressPercent } from "@/lib/courseProgress";

export default function PathDetailClient({ path }: { path: LearningPath }) {
  const { progress, refresh } = useProgress();
  const unlocked = isPathUnlocked(progress, path);
  const pct = pathCompletionPercent(progress, path);
  const pp = getPathProgress(progress, path.id);
  const continueCourse = getContinuePathCourse(progress, path);
  const allCoursesDone = path.courses.every((c) =>
    isCourseCompleteInProgress(progress, resolveCatalogSlug(c.slug))
  );

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
        <Link href="/paths" className="hover:text-[var(--gold)]">
          Learning Paths
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-[var(--silver)]">{path.title}</span>
      </div>

      <section className="glass relative overflow-hidden rounded-2xl border border-[var(--gold)]/15 p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--gold)]/10 blur-[60px]" />
        <div className="relative">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-[var(--gold)]">
                <Route className="h-5 w-5" />
                <span className="text-xs uppercase tracking-[0.2em]">{path.tagline}</span>
              </div>
              <h1 className="mt-2 font-serif text-3xl font-bold text-[var(--silver)]">
                {path.title}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                {path.description}
              </p>
            </div>
            {pp.badgeEarned && (
              <div className="flex items-center gap-2 rounded-xl border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-4 py-2">
                <Award className="h-5 w-5 text-[var(--gold)]" />
                <div>
                  <p className="text-xs font-semibold text-[var(--gold)]">{path.badgeName}</p>
                  <p className="text-[10px] text-[var(--muted)]">Earned</p>
                </div>
              </div>
            )}
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-[var(--muted)]">
            <span className="capitalize">{path.skillLevel} path</span>
            <span>~{path.estimatedWeeks} weeks</span>
            <span>{path.totalXp.toLocaleString()} XP total</span>
            <span>{path.courses.length} courses</span>
          </div>
          <div className="mt-6">
            <div className="mb-1 flex justify-between text-xs uppercase tracking-wider text-[var(--muted)]">
              <span>Path progress</span>
              <span>{pct}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold)] transition-all"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
          {unlocked && continueCourse && (
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={`/courses/${continueCourse.slug}/read`}>
                <Button
                  onClick={() => {
                    setActivePath(path.id);
                    refresh();
                  }}
                >
                  Continue path — {continueCourse.title}
                </Button>
              </Link>
            </div>
          )}
          {!unlocked && (
            <p className="mt-4 flex items-center gap-2 text-sm text-amber-400/90">
              <Lock className="h-4 w-4" />
              Complete prerequisites to unlock this path.
            </p>
          )}
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-serif text-lg font-semibold text-[var(--silver)]">
          Course sequence
        </h2>
        <div className="space-y-2">
          {path.courses.map((step, i) => {
            const catalogSlug = resolveCatalogSlug(step.slug);
            const courseUnlocked = isPathCourseUnlocked(progress, path, i);
            const complete = isCourseCompleteInProgress(progress, catalogSlug);
            const inProgress =
              !complete &&
              computeCourseProgressPercent(progress, catalogSlug) > 0;
            return (
              <div
                key={step.slug}
                className={`flex items-center gap-4 rounded-xl border px-4 py-3 transition ${
                  courseUnlocked
                    ? "border-white/[0.08] bg-white/[0.02] hover:border-[var(--gold)]/25"
                    : "border-white/[0.04] bg-white/[0.01] opacity-60"
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                    complete
                      ? "bg-emerald-500/15 text-emerald-400"
                      : "bg-white/5 text-[var(--muted)]"
                  }`}
                >
                  {complete ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-[var(--silver)]">
                    {step.title}
                    {step.instructorLed && (
                      <span className="ml-2 text-[10px] uppercase tracking-wider text-[var(--gold)]">
                        Instructor-led
                      </span>
                    )}
                  </p>
                  <p className="truncate text-xs text-[var(--muted)]">
                    {step.estimatedHours}h · {step.xpReward} XP
                    {inProgress && " · In progress"}
                  </p>
                </div>
                {courseUnlocked ? (
                  <Link
                    href={`/courses/${catalogSlug}/read`}
                    className="shrink-0 text-sm font-medium text-[var(--gold)] hover:underline"
                  >
                    {complete ? "Review" : "Open"} →
                  </Link>
                ) : (
                  <Lock className="h-4 w-4 shrink-0 text-[var(--muted)]" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {path.labs.length > 0 && (
        <section>
          <h2 className="mb-4 flex items-center gap-2 font-serif text-lg font-semibold text-[var(--silver)]">
            <Sparkles className="h-5 w-5 text-[var(--gold)]" />
            Practice labs
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {path.labs.map((lab) => {
              const unlockSlug = resolveCatalogSlug(lab.unlockAfterCourseSlug);
              const labUnlocked = isCourseCompleteInProgress(progress, unlockSlug);
              if (!labUnlocked) return null;
              return (
                <PathLabSimulator
                  key={lab.id}
                  pathId={path.id}
                  lab={lab}
                  completed={pp.completedLabs.includes(lab.id)}
                />
              );
            })}
          </div>
        </section>
      )}

      <Card glow className="border-[var(--gold)]/20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-[var(--gold)]">
              <Target className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Mastery exam
              </span>
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {path.masteryExamQuestions} questions across the path · Pass to earn{" "}
              <strong className="text-[var(--silver)]">{path.badgeName}</strong>
            </p>
          </div>
          {allCoursesDone && !pp.masteryExamPassed ? (
            <Link href={`/paths/${path.id}/exam`}>
              <Button>Take mastery exam</Button>
            </Link>
          ) : pp.masteryExamPassed ? (
            <span className="flex items-center gap-2 text-sm text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              Mastery certified
            </span>
          ) : (
            <span className="text-sm text-[var(--muted)]">
              Complete all courses to unlock
            </span>
          )}
        </div>
      </Card>

      <p className="text-center text-xs text-[var(--muted)]">
        <BookOpen className="mr-1 inline h-3.5 w-3.5" />
        Each course includes sections, quizzes, chapter reviews, and a final exam.
      </p>
    </div>
  );
}
