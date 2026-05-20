"use client";

import Link from "next/link";
import { BarChart3 } from "lucide-react";
import { useProgress } from "@/components/providers/ProgressProvider";
import { Card } from "@/components/ui/Card";
import { COURSES } from "@/lib/courses/catalog";
import {
  computeCourseProgressPercent,
  countCompletedLessons,
} from "@/lib/courseProgress";
import { getDomainById, domainForCourse } from "@/lib/ecosystem/domains";

export default function ProgressPage() {
  const { progress, xpBar } = useProgress();

  return (
    <div className="space-y-8">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--gold)]/20 bg-[var(--gold)]/5">
          <BarChart3 className="h-6 w-6 text-[var(--gold)]" />
        </span>
        <div>
          <h1 className="font-serif text-3xl font-bold text-[var(--silver)]">Progress</h1>
          <p className="mt-2 text-[var(--muted)]">
            Mastery analytics across every domain — streaks, XP tiers, and course completion.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <p className="text-xs uppercase tracking-wider text-[var(--muted)]">Level</p>
          <p className="mt-1 text-3xl font-bold">{xpBar.level}</p>
        </Card>
        <Card>
          <p className="text-xs uppercase tracking-wider text-[var(--muted)]">Total XP</p>
          <p className="mt-1 text-3xl font-bold">{progress.xp}</p>
        </Card>
        <Card>
          <p className="text-xs uppercase tracking-wider text-[var(--muted)]">Streak</p>
          <p className="mt-1 text-3xl font-bold">{progress.streak}d</p>
        </Card>
      </div>

      <section>
        <h2 className="mb-4 font-serif text-xl font-semibold">By course</h2>
        <div className="space-y-3">
          {COURSES.map((c) => {
            const pct = computeCourseProgressPercent(progress, c.id);
            const { completed, total } = countCompletedLessons(progress, c.slug);
            const domain = getDomainById(domainForCourse(c.category));
            return (
              <Link key={c.id} href={`/courses/${c.slug}`}>
                <Card className="transition hover:border-[var(--gold)]/25">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[var(--muted)]">
                        {domain?.label}
                      </p>
                      <p className="font-medium">{c.title}</p>
                    </div>
                    <span className="font-mono text-sm text-[var(--gold)]">{pct}%</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold)]"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-[var(--muted)]">
                    {completed}/{total} sections
                    {progress.completedCourses.includes(c.id) ? " · Completed" : ""}
                  </p>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
