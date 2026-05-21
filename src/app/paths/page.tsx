"use client";

import { Route, Sparkles } from "lucide-react";
import { PathCard } from "@/components/paths/PathCard";
import { LEARNING_PATHS } from "@/lib/paths/learningPaths";
import { Card } from "@/components/ui/Card";

export default function LearningPathsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10">
      <section className="relative overflow-hidden rounded-2xl border border-[var(--gold)]/15 bg-gradient-to-br from-[#0a0a0a] via-[#0d0d0d] to-[#050505] p-6 sm:p-10">
        <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-[var(--gold)]/10 blur-[80px]" />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[var(--gold)]">
              <Route className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                Learning Paths
              </span>
            </div>
            <h1 className="mt-3 font-serif text-3xl font-bold text-[var(--silver)] sm:text-4xl">
              Mastery paths for modern careers
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              Structured progressions — not random courses. Each path includes at least three
              sequential courses, with labs, XP milestones, and a final mastery exam.
            </p>
          </div>
          <Card className="shrink-0 border-[var(--gold)]/20 bg-black/40 sm:max-w-xs" glow>
            <div className="flex items-center gap-2 text-[var(--gold)]">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Platform focus
              </span>
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Workforce skills · AI literacy · Communication · Professional growth — practical,
              progression-oriented, employability-first.
            </p>
          </Card>
        </div>
      </section>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {LEARNING_PATHS.map((path) => (
          <PathCard key={path.id} path={path} />
        ))}
      </div>
    </div>
  );
}
