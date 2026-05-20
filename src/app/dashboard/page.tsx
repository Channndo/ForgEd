"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Award,
  BookOpen,
  Flame,
  Target,
  Zap,
  TrendingUp,
} from "lucide-react";
import { useProgress } from "@/components/providers/ProgressProvider";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BADGES } from "@/lib/badges";
import { COURSES, getFeaturedCourses } from "@/lib/courses/catalog";
import {
  countCompletedLessons,
  computeCourseProgressPercent,
} from "@/lib/courseProgress";
import { withBasePath } from "@/lib/basePath";
import { ForgEdTagline } from "@/components/brand/ForgEdLogo";
import { CourseSpotlight } from "@/components/dashboard/CourseSpotlight";

export default function DashboardPage() {
  const { progress, xpBar } = useProgress();
  const featured = getFeaturedCourses();

  const totalLessons = COURSES.reduce(
    (n, c) => n + countCompletedLessons(progress, c.slug).total,
    0
  );
  const completedLessons = progress.completedLessons.length;

  const inProgress = COURSES.filter((c) => {
    const pct = computeCourseProgressPercent(progress, c.id);
    return pct > 0 && !progress.completedCourses.includes(c.id);
  });

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-2xl border border-[var(--gold)]/15 bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#0a0a0a] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--gold)]/10 blur-[80px]" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Image
              src={withBasePath("/forged-wordmark.png")}
              alt="ForgEd"
              width={240}
              height={120}
              className="h-auto w-48 sm:w-56 object-contain"
              priority
            />
            <ForgEdTagline className="mt-3 justify-start" />
            <p className="mt-4 max-w-xl text-sm text-[var(--muted)] sm:text-base">
              Your learning command center — track progress, launch courses, and get help from KODA.
            </p>
            <CourseSpotlight />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 lg:gap-4">
            <StatChip icon={Zap} label="XP" value={String(progress.xp)} />
            <StatChip icon={Target} label="Level" value={String(xpBar.level)} />
            <StatChip icon={Flame} label="Streak" value={`${progress.streak}d`} />
            <StatChip
              icon={BookOpen}
              label="Sections"
              value={`${completedLessons}/${totalLessons}`}
            />
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-serif text-xl font-semibold text-[var(--silver)]">
                Continue learning
              </h2>
              <Link href="/courses" className="text-sm text-[var(--gold)] hover:underline">
                View all
              </Link>
            </div>
            {inProgress.length === 0 ? (
              <Card>
                <p className="text-sm text-[var(--muted)]">
                  No active courses yet. Pick a suggested course above or{" "}
                  <Link href="/courses" className="text-[var(--gold)] hover:underline">
                    browse the library
                  </Link>
                  .
                </p>
              </Card>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                {inProgress.map((c) => (
                  <Link key={c.id} href={`/courses/${c.slug}`}>
                    <Card className="h-full transition hover:border-[var(--gold)]/30">
                      <h3 className="font-medium">{c.title}</h3>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full bg-gradient-to-r from-[var(--silver)] to-[var(--gold)]"
                          style={{
                            width: `${computeCourseProgressPercent(progress, c.id)}%`,
                          }}
                        />
                      </div>
                      <p className="mt-1 text-xs text-[var(--muted)]">
                        {countCompletedLessons(progress, c.slug).completed}/
                        {countCompletedLessons(progress, c.slug).total} sections ·{" "}
                        {computeCourseProgressPercent(progress, c.id)}%
                      </p>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </section>

          <section>
            <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--silver)]">
              Featured courses
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {featured.map((c) => (
                <Link key={c.id} href={`/courses/${c.slug}`}>
                  <Card className="h-full hover:border-[var(--gold)]/25">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--gold)]">
                      {c.category}
                    </span>
                    <h3 className="mt-1 font-medium">{c.title}</h3>
                    <p className="mt-1 line-clamp-2 text-xs text-[var(--muted)]">
                      {c.description}
                    </p>
                    <p className="mt-2 text-xs text-[var(--gold)]">{c.xpReward} XP</p>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <Card glow>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-[var(--gold)]" />
              <h2 className="font-semibold">Level progress</h2>
            </div>
            <p className="mt-2 text-3xl font-bold text-[var(--silver)]">Level {xpBar.level}</p>
            <p className="text-sm text-[var(--muted)]">
              {xpBar.current} / {xpBar.needed} XP to next level
            </p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold)]"
                style={{ width: `${xpBar.percent}%` }}
              />
            </div>
          </Card>

          <section>
            <h2 className="mb-3 flex items-center gap-2 font-semibold text-[var(--silver)]">
              <Award className="h-4 w-4 text-[var(--gold)]" /> Achievements
            </h2>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {BADGES.slice(0, 5).map((badge) => {
                const earned = progress.earnedBadges.includes(badge.id);
                return (
                  <div
                    key={badge.id}
                    className={`rounded-lg border px-3 py-2 text-sm ${
                      earned
                        ? "border-[var(--gold)]/20 bg-[var(--gold)]/5"
                        : "border-white/5 bg-white/[0.02] opacity-60"
                    }`}
                  >
                    <p className="font-medium">{badge.name}</p>
                    <p className="text-xs text-[var(--muted)]">{badge.description}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function StatChip({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Zap;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-black/40 px-3 py-3 text-center">
      <Icon className="mx-auto h-4 w-4 text-[var(--gold)]" />
      <p className="mt-1 text-lg font-bold text-[var(--silver)]">{value}</p>
      <p className="text-[10px] uppercase tracking-wider text-[var(--muted)]">{label}</p>
    </div>
  );
}
