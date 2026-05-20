"use client";

import Link from "next/link";
import {
  Award,
  Flame,
  Route,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useProgress } from "@/components/providers/ProgressProvider";
import { PathCard } from "@/components/paths/PathCard";
import {
  LEARNING_PATHS,
  getLearningPathById,
} from "@/lib/paths/learningPaths";
import {
  getContinuePathCourse,
  getRecommendedPaths,
  isPathUnlocked,
} from "@/lib/paths/pathProgress";
import { getBadge } from "@/lib/badges";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function PathDashboardSection() {
  const { progress, xpBar } = useProgress();
  const activePath = progress.activePathId
    ? getLearningPathById(progress.activePathId)
    : undefined;
  const continueInPath = activePath
    ? getContinuePathCourse(progress, activePath)
    : null;
  const recommended = getRecommendedPaths(progress).slice(0, 2);
  const pathBadges = progress.earnedBadges.filter((id) => id.startsWith("path-"));
  const dailyGoal = progress.dailyXpGoal ?? 150;
  const earnedToday = progress.dailyXpEarnedToday ?? 0;
  const dailyPct = Math.min(100, Math.round((earnedToday / dailyGoal) * 100));

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-xl font-semibold text-[var(--silver)]">
          Learning paths
        </h2>
        <Link
          href="/paths"
          className="text-sm font-medium text-[var(--gold)] hover:underline"
        >
          View all paths →
        </Link>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-[var(--gold)]/15" glow>
          <div className="flex items-center gap-2 text-[var(--gold)]">
            <Route className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Continue path
            </span>
          </div>
          {activePath && continueInPath ? (
            <>
              <p className="mt-2 font-medium text-[var(--silver)]">{activePath.title}</p>
              <p className="text-sm text-[var(--muted)]">Up next: {continueInPath.title}</p>
              <Link href={`/courses/${continueInPath.slug}/read`} className="mt-4 inline-block">
                <Button>Continue learning →</Button>
              </Link>
            </>
          ) : (
            <>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Pick a structured mastery path to unlock sequential courses and certifications.
              </p>
              <Link href="/paths" className="mt-4 inline-block">
                <Button>Explore paths →</Button>
              </Link>
            </>
          )}
        </Card>

        <Card>
          <div className="flex items-center gap-2 text-[var(--gold)]">
            <Target className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Daily XP goal
            </span>
          </div>
          <p className="mt-2 text-2xl font-bold text-[var(--silver)]">
            {earnedToday}/{dailyGoal}
          </p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold)]"
              style={{ width: `${dailyPct}%` }}
            />
          </div>
          <p className="mt-2 flex items-center gap-1 text-xs text-[var(--muted)]">
            <Flame className="h-3.5 w-3.5 text-orange-400" />
            {progress.streak} day streak · Lv {xpBar.level}
          </p>
        </Card>
      </div>

      {pathBadges.length > 0 && (
        <Card>
          <div className="flex items-center gap-2 text-[var(--gold)]">
            <Award className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Active certifications
            </span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {pathBadges.map((id) => {
              const b = getBadge(id);
              return (
                <span
                  key={id}
                  className="rounded-lg border border-[var(--gold)]/25 bg-[var(--gold)]/8 px-3 py-1.5 text-sm text-[var(--silver)]"
                >
                  {b?.name ?? id}
                </span>
              );
            })}
          </div>
        </Card>
      )}

      <div>
        <div className="mb-3 flex items-center gap-2 text-[var(--muted)]">
          <TrendingUp className="h-4 w-4" />
          <span className="text-xs font-semibold uppercase tracking-wider">
            Recommended paths
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {(recommended.length > 0
            ? recommended
            : LEARNING_PATHS.filter((p) => isPathUnlocked(progress, p)).slice(0, 2)
          ).map((path) => (
            <PathCard key={path.id} path={path} />
          ))}
        </div>
      </div>
    </section>
  );
}
