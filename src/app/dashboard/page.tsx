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
  Medal,
  Calendar,
} from "lucide-react";
import { useProgress } from "@/components/providers/ProgressProvider";
import { useAuth } from "@/components/providers/AuthProvider";
import { Card } from "@/components/ui/Card";
import { BADGES } from "@/lib/badges";
import { COURSES } from "@/lib/courses/catalog";
import {
  countCompletedLessons,
  computeCourseProgressPercent,
} from "@/lib/courseProgress";
import { withBasePath } from "@/lib/basePath";
import { CourseSpotlight } from "@/components/dashboard/CourseSpotlight";
import { DomainGrid } from "@/components/dashboard/DomainGrid";
import { PathDashboardSection } from "@/components/dashboard/PathWidgets";

export default function DashboardPage() {
  const { profile, user } = useAuth();
  const { progress, xpBar } = useProgress();
  const firstName =
    profile?.displayName?.split(" ")[0] ?? profile?.username ?? "Learner";

  const totalLessons = COURSES.reduce(
    (n, c) => n + countCompletedLessons(progress, c.slug).total,
    0
  );
  const completedLessons = progress.completedLessons.length;
  const completedCourses = progress.completedCourses.length;

  const inProgress = COURSES.filter((c) => {
    const pct = computeCourseProgressPercent(progress, c.id);
    return pct > 0 && !progress.completedCourses.includes(c.id);
  });

  const weeklyGoal = Math.min(100, Math.round((completedLessons / Math.max(totalLessons, 1)) * 100));

  return (
    <div className="space-y-10">
      {/* Command center hero */}
      <section className="relative rounded-2xl border border-[var(--gold)]/12 bg-gradient-to-br from-[#0a0a0a] via-[#101010] to-[#0a0a0a] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 overflow-hidden rounded-full bg-[var(--gold)]/8 blur-[100px]" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Image
              src={withBasePath("/forged-wordmark.png")}
              alt="ForgEd — Learn Skills That Matter"
              width={800}
              height={800}
              className="h-auto w-[15.5rem] object-contain object-left sm:w-[17.5rem] md:w-[19.5rem]"
              priority
            />
            <p className="mt-4 font-serif text-lg text-[var(--silver)]">
              {user ? `Welcome back, ${firstName}.` : "Welcome to ForgEd."}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              {user ? (
                <>
                  Your progress saves to your account — pick up paths, courses, and XP exactly where
                  you left off. KODA is available on every chapter for explanations and practice.
                </>
              ) : (
                <>
                  <Link href={withBasePath("/login")} className="text-[var(--gold)] hover:underline">
                    Sign in
                  </Link>{" "}
                  to save XP, streaks, and course progress. Browse courses freely as a guest.
                </>
              )}
            </p>
            <CourseSpotlight />
          </div>
          {user && (
            <div className="grid w-full max-w-[17rem] grid-cols-2 gap-3 sm:max-w-none sm:grid-cols-4 lg:max-w-[17rem] lg:grid-cols-2 [&>*]:min-w-0">
              <StatChip icon={Zap} label="XP" value={String(progress.xp)} />
              <StatChip icon={Target} label="Level" value={String(xpBar.level)} />
              <StatChip icon={Flame} label="Streak" value={`${progress.streak}d`} />
              <StatChip
                icon={BookOpen}
                label="Sections"
                value={formatSectionsProgress(completedLessons, totalLessons)}
                compactValue
              />
            </div>
          )}
        </div>
      </section>

      {/* Adult gamification — not childish */}
      <section className="grid gap-4 sm:grid-cols-3">
        <Card className="transition hover:border-[var(--gold)]/20">
          <div className="flex items-center gap-2 text-[var(--gold)]">
            <Medal className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Mastery</span>
          </div>
          <p className="mt-2 text-2xl font-bold text-[var(--silver)]">{completedCourses}</p>
          <p className="text-sm text-[var(--muted)]">
            {completedCourses === 1 ? "course" : "courses"} completed · certificates on pass
          </p>
        </Card>
        <Card className="transition hover:border-[var(--gold)]/20">
          <div className="flex items-center gap-2 text-[var(--gold)]">
            <Calendar className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Weekly focus</span>
          </div>
          <p className="mt-2 text-2xl font-bold text-[var(--silver)]">{weeklyGoal}%</p>
          <p className="text-sm text-[var(--muted)]">of catalog sections touched this path</p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold)] transition-all"
              style={{ width: `${weeklyGoal}%` }}
            />
          </div>
        </Card>
        <Card className="transition hover:border-[var(--gold)]/20">
          <div className="flex items-center gap-2 text-[var(--gold)]">
            <TrendingUp className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Rank</span>
          </div>
          <p className="mt-2 text-2xl font-bold text-[var(--silver)]">Lv {xpBar.level}</p>
          <p className="text-sm text-[var(--muted)]">
            {xpBar.current}/{xpBar.needed} XP to next tier
          </p>
        </Card>
      </section>

      <PathDashboardSection />

      <DomainGrid />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-serif text-xl font-semibold text-[var(--silver)]">
                Continue learning
              </h2>
              <Link href="/courses" className="text-sm text-[var(--gold)] hover:underline">
                Course library
              </Link>
            </div>
            {inProgress.length === 0 ? (
              <Card>
                <p className="text-sm text-[var(--muted)]">
                  Pick any domain above — every subject is weighted equally. Insurance lives under{" "}
                  <Link href="/courses?domain=finance" className="text-[var(--gold)] hover:underline">
                    Finance
                  </Link>
                  , alongside literacy and investing paths.
                </p>
              </Card>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                {inProgress.map((c) => (
                  <Link key={c.id} href={`/courses/${c.slug}`}>
                    <Card className="h-full transition duration-200 hover:-translate-y-0.5 hover:border-[var(--gold)]/30">
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
              Available courses
            </h2>
            <p className="mb-4 text-sm text-[var(--muted)]">
              Equal placement across domains — no featured or prioritized tracks.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {COURSES.map((c) => (
                <Link key={c.id} href={`/courses/${c.slug}`}>
                  <Card className="h-full transition duration-200 hover:border-[var(--gold)]/25 hover:bg-white/[0.02]">
                    <h3 className="font-medium">{c.title}</h3>
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

          <Card>
            <h2 className="font-semibold text-[var(--silver)]">Quick links</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/paths" className="text-[var(--gold)] hover:underline">
                  Learning paths
                </Link>
              </li>
              <li>
                <Link href="/progress" className="text-[var(--gold)] hover:underline">
                  Progress analytics
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-[var(--gold)] hover:underline">
                  Career hub
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-[var(--gold)] hover:underline">
                  Community
                </Link>
              </li>
            </ul>
          </Card>

          <section>
            <h2 className="mb-3 flex items-center gap-2 font-semibold text-[var(--silver)]">
              <Award className="h-4 w-4 text-[var(--gold)]" /> Credentials
            </h2>
            <div className="max-h-64 space-y-2 overflow-y-auto">
              {BADGES.slice(0, 6).map((badge) => {
                const earned = progress.earnedBadges.includes(badge.id);
                return (
                  <div
                    key={badge.id}
                    className={`rounded-lg border px-3 py-2 text-sm transition ${
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

function formatSectionsProgress(completed: number, total: number): string {
  if (total >= 1000) {
    const compact =
      total >= 10000
        ? `${Math.round(total / 1000)}k`
        : `${(total / 1000).toFixed(1).replace(/\.0$/, "")}k`;
    return `${completed}/${compact}`;
  }
  return `${completed}/${total}`;
}

function StatChip({
  icon: Icon,
  label,
  value,
  compactValue = false,
}: {
  icon: typeof Zap;
  label: string;
  value: string;
  compactValue?: boolean;
}) {
  return (
    <div className="min-w-0 rounded-xl border border-white/[0.06] bg-black/40 px-2.5 py-3 text-center transition hover:border-[var(--gold)]/15 sm:px-3">
      <Icon className="mx-auto h-4 w-4 shrink-0 text-[var(--gold)]" />
      <p
        className={`mt-1 truncate font-bold tabular-nums leading-tight text-[var(--silver)] ${
          compactValue ? "text-xs sm:text-sm" : "text-lg"
        }`}
      >
        {value}
      </p>
      <p className="truncate text-[10px] uppercase tracking-wider text-[var(--muted)]">
        {label}
      </p>
    </div>
  );
}
