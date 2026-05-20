"use client";

import { useProgress } from "@/components/providers/ProgressProvider";

export function CourseProgressClient({ courseId }: { courseId: string }) {
  const { progress } = useProgress();
  const pct = progress.courseProgress[courseId] ?? 0;

  if (pct === 0) return null;

  return (
    <div className="mt-6">
      <div className="flex justify-between text-sm">
        <span className="text-[var(--muted)]">Your progress</span>
        <span>{pct}%</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--forge)]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
