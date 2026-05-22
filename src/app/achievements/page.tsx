"use client";

import Link from "next/link";
import { Lock, Trophy } from "lucide-react";
import { useProgress } from "@/components/providers/ProgressProvider";
import { BadgeIcon } from "@/components/achievements/BadgeIcon";
import { Card } from "@/components/ui/Card";
import { BADGES, getBadgeGroups } from "@/lib/badges";
import { useAuth } from "@/components/providers/AuthProvider";
import { withBasePath } from "@/lib/basePath";

export default function AchievementsPage() {
  const { progress } = useProgress();
  const { user } = useAuth();
  const earnedSet = new Set(progress.earnedBadges);
  const earnedCount = BADGES.filter((b) => earnedSet.has(b.id)).length;
  const bonusXp = BADGES.filter((b) => earnedSet.has(b.id)).reduce(
    (sum, b) => sum + b.xpBonus,
    0
  );
  const groups = getBadgeGroups();

  return (
    <div className="space-y-8">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--gold)]/20 bg-[var(--gold)]/5">
          <Trophy className="h-6 w-6 text-[var(--gold)]" />
        </span>
        <div>
          <h1 className="font-serif text-3xl font-bold text-[var(--silver)]">
            Achievements
          </h1>
          <p className="mt-2 max-w-2xl text-[var(--muted)]">
            Every badge you can earn on ForgEd — from first lessons and streaks to
            course completions and mastery paths. Sign in to sync unlocks across
            devices.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <p className="text-xs uppercase tracking-wider text-[var(--muted)]">
            Unlocked
          </p>
          <p className="mt-1 text-3xl font-bold tabular-nums text-[var(--gold)]">
            {earnedCount}
            <span className="text-lg font-normal text-[var(--muted)]">
              {" "}
              / {BADGES.length}
            </span>
          </p>
        </Card>
        <Card>
          <p className="text-xs uppercase tracking-wider text-[var(--muted)]">
            Badge XP earned
          </p>
          <p className="mt-1 text-3xl font-bold tabular-nums">+{bonusXp}</p>
        </Card>
        <Card>
          <p className="text-xs uppercase tracking-wider text-[var(--muted)]">
            Completion
          </p>
          <p className="mt-1 text-3xl font-bold tabular-nums">
            {BADGES.length > 0
              ? Math.round((earnedCount / BADGES.length) * 100)
              : 0}
            %
          </p>
        </Card>
      </div>

      {!user && (
        <p className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-[var(--muted)]">
          <Link
            href={withBasePath("/login")}
            className="font-medium text-[var(--gold)] hover:underline"
          >
            Sign in
          </Link>{" "}
          to save achievements to your profile. Guests can preview all badges below.
        </p>
      )}

      {groups.map((group) => (
        <section key={group.id}>
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--silver)]">
            {group.label}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.badges.map((badge) => {
              const earned = earnedSet.has(badge.id);
              return (
                <div
                  key={badge.id}
                  className={`relative rounded-xl border p-5 transition ${
                    earned
                      ? "border-[var(--gold)]/25 bg-[var(--gold)]/[0.06] shadow-[inset_0_1px_0_rgba(212,175,55,0.08)]"
                      : "border-white/[0.06] bg-white/[0.02] opacity-80"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border ${
                        earned
                          ? "border-[var(--gold)]/30 bg-[var(--gold)]/10 text-[var(--gold)]"
                          : "border-white/10 bg-white/[0.03] text-[var(--muted)]"
                      }`}
                    >
                      <BadgeIcon icon={badge.icon} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p
                          className={`font-medium ${earned ? "text-[var(--silver)]" : "text-[var(--muted)]"}`}
                        >
                          {badge.name}
                        </p>
                        {earned ? (
                          <span className="rounded-md border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[var(--gold)]">
                            Earned
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[var(--muted)]">
                            <Lock className="h-2.5 w-2.5" />
                            Locked
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm leading-snug text-[var(--muted)]">
                        {badge.description}
                      </p>
                      <p className="mt-2 font-mono text-xs text-[var(--gold)]/80">
                        +{badge.xpBonus} XP
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
