"use client";

import { CheckCircle2 } from "lucide-react";
import type { ForgedPathPhase } from "@/lib/forged-path/curriculum";
import { getPhaseReflection } from "@/lib/forged-path/phaseReflections";
import {
  forgedPathPhasePercent,
  isForgedPathCourseComplete,
  isForgedPathPhaseComplete,
  toggleForgedPathCourse,
} from "@/lib/forged-path/progress";
import type { UserProgress } from "@/lib/types";
import { ForgedPathCourseCard } from "./ForgedPathCourseCard";
import { ForgedPathPhaseReflection } from "./ForgedPathPhaseReflection";

interface ForgedPathPhaseSectionProps {
  phase: ForgedPathPhase;
  progress: UserProgress;
  onProgressChange: (data: UserProgress) => void;
  canTrack: boolean;
}

export function ForgedPathPhaseSection({
  phase,
  progress,
  onProgressChange,
  canTrack,
}: ForgedPathPhaseSectionProps) {
  const phaseComplete = isForgedPathPhaseComplete(progress, phase);
  const phasePct = forgedPathPhasePercent(progress, phase);
  const reflection = getPhaseReflection(phase.id);

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            Phase {phase.number}
          </p>
          <h2 className="mt-1 font-serif text-xl font-bold text-[var(--silver)] sm:text-2xl">
            {phase.title}
          </h2>
        </div>
        <div className="flex items-center gap-3">
          {phaseComplete && (
            <span className="flex items-center gap-1.5 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-3 py-1 text-xs font-semibold text-[var(--gold)]">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Phase complete
            </span>
          )}
          <span className="text-xs text-[var(--muted)]">{phasePct}%</span>
        </div>
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold)] transition-all"
          style={{ width: `${phasePct}%` }}
        />
      </div>
      <div className="space-y-3">
        {phase.courses.map((course) => (
          <ForgedPathCourseCard
            key={course.id}
            course={course}
            completed={isForgedPathCourseComplete(progress, course.id)}
            disabled={!canTrack}
            onToggle={() => {
              if (!canTrack) return;
              onProgressChange(toggleForgedPathCourse(progress, course.id));
            }}
          />
        ))}
      </div>

      {phaseComplete && reflection && (
        <ForgedPathPhaseReflection reflection={reflection} />
      )}
    </section>
  );
}
