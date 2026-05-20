"use client";

import Link from "next/link";
import { Award, BookOpen, Flame, Target, Zap } from "lucide-react";
import { useProgress } from "@/components/providers/ProgressProvider";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BADGES } from "@/lib/badges";
import { COURSES } from "@/lib/courses/catalog";

export default function DashboardPage() {
  const { progress, xpBar, refresh } = useProgress();

  const inProgress = COURSES.filter(
    (c) =>
      (progress.courseProgress[c.id] ?? 0) > 0 &&
      !progress.completedCourses.includes(c.id)
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold text-[var(--silver)]">Your dashboard</h1>
          <p className="mt-1 text-[var(--muted)]">Track XP, streaks, and learning momentum.</p>
        </div>
        <Button href="/courses" variant="forge">Continue learning</Button>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <Zap className="h-6 w-6 text-[var(--forge)]" />
          <p className="mt-3 text-2xl font-bold">{progress.xp}</p>
          <p className="text-sm text-[var(--muted)]">Total XP</p>
        </Card>
        <Card>
          <Target className="h-6 w-6 text-[var(--accent)]" />
          <p className="mt-3 text-2xl font-bold">Level {xpBar.level}</p>
          <p className="text-sm text-[var(--muted)]">
            {xpBar.current}/{xpBar.needed} to next level
          </p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-[var(--accent)]"
              style={{ width: `${xpBar.percent}%` }}
            />
          </div>
        </Card>
        <Card>
          <Flame className="h-6 w-6 text-[var(--forge)]" />
          <p className="mt-3 text-2xl font-bold">{progress.streak}</p>
          <p className="text-sm text-[var(--muted)]">Day streak</p>
        </Card>
        <Card>
          <BookOpen className="h-6 w-6 text-[var(--accent)]" />
          <p className="mt-3 text-2xl font-bold">
            {progress.completedCourses.length}
          </p>
          <p className="text-sm text-[var(--muted)]">Courses completed</p>
        </Card>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">In progress</h2>
        {inProgress.length === 0 ? (
          <Card className="mt-4">
            <p className="text-[var(--muted)]">
              No active courses yet.{" "}
              <Link href="/courses/insurance-fundamentals" className="text-[var(--accent)] hover:underline">
                Start Insurance Fundamentals
              </Link>{" "}
              — our deepest course.
            </p>
          </Card>
        ) : (
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {inProgress.map((c) => (
              <Link key={c.id} href={`/courses/${c.slug}`}>
                <Card>
                  <h3 className="font-medium">{c.title}</h3>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--forge)]"
                      style={{ width: `${progress.courseProgress[c.id] ?? 0}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-[var(--muted)]">
                    {progress.courseProgress[c.id] ?? 0}% complete
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="mt-12">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <Award className="h-5 w-5 text-[var(--forge)]" /> Achievements
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {BADGES.map((badge) => {
            const earned = progress.earnedBadges.includes(badge.id);
            return (
              <Card
                key={badge.id}
                className={earned ? "" : "opacity-50"}
              >
                <p className="font-medium">{badge.name}</p>
                <p className="text-sm text-[var(--muted)]">{badge.description}</p>
                {earned && (
                  <span className="mt-2 inline-block text-xs text-[var(--success)]">
                    +{badge.xpBonus} XP earned
                  </span>
                )}
              </Card>
            );
          })}
        </div>
      </section>

      <button
        type="button"
        className="sr-only"
        onClick={refresh}
        aria-hidden
      />
    </div>
  );
}
