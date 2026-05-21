"use client";

import Link from "next/link";
import { Award, BookOpen, Clock, Lock, Route, Zap } from "lucide-react";
import type { LearningPath } from "@/lib/paths/learningPaths";
import { getPathCourseCount } from "@/lib/paths/learningPaths";
import {
  isPathUnlocked,
  pathCompletionPercent,
} from "@/lib/paths/pathProgress";
import { useProgress } from "@/components/providers/ProgressProvider";

export function PathCard({ path }: { path: LearningPath }) {
  const { progress } = useProgress();
  const unlocked = isPathUnlocked(progress, path);
  const pct = pathCompletionPercent(progress, path);
  const pp = progress.pathProgress?.[path.id];
  const earned = pp?.badgeEarned;

  return (
    <Link
      href={unlocked ? `/paths/${path.id}` : "#"}
      className={`group relative block overflow-hidden rounded-2xl border transition-all duration-300 ${
        unlocked
          ? "border-white/[0.08] bg-white/[0.03] hover:border-[var(--gold)]/35 hover:shadow-[0_0_40px_rgba(212,175,55,0.08)]"
          : "cursor-not-allowed border-white/[0.04] bg-white/[0.01] opacity-70"
      }`}
      onClick={(e) => {
        if (!unlocked) e.preventDefault();
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="relative p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--gold)]/20 bg-[var(--gold)]/10">
            {unlocked ? (
              <Route className="h-5 w-5 text-[var(--gold)]" />
            ) : (
              <Lock className="h-5 w-5 text-[var(--muted)]" />
            )}
          </div>
          {earned && (
            <span className="flex items-center gap-1 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--gold)]">
              <Award className="h-3 w-3" />
              Certified
            </span>
          )}
        </div>
        <h3 className="mt-4 font-serif text-xl font-semibold text-[var(--silver)] group-hover:text-[var(--gold)]">
          {path.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--muted)]">
          {path.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs text-[var(--muted)]">
          <span className="capitalize">{path.skillLevel}</span>
          <span className="flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5" />
            {getPathCourseCount(path)} courses
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />~{path.estimatedWeeks} wks
          </span>
          <span className="flex items-center gap-1">
            <Zap className="h-3.5 w-3.5" />
            {path.totalXp.toLocaleString()} XP
          </span>
        </div>
        <div className="mt-4">
          <div className="mb-1 flex justify-between text-[10px] uppercase tracking-wider text-[var(--muted)]">
            <span>Progress</span>
            <span>{pct}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold)] transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
        <p className="mt-3 text-xs font-medium text-[var(--gold)]/90">
          {unlocked ? "View path →" : "Complete prerequisites to unlock"}
        </p>
      </div>
    </Link>
  );
}
