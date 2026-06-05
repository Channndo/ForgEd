"use client";

import { BookOpen, Lightbulb } from "lucide-react";
import type { ForgedPathPhaseReflection } from "@/lib/forged-path/phaseReflections";

export function ForgedPathPhaseReflection({
  reflection,
}: {
  reflection: ForgedPathPhaseReflection;
}) {
  return (
    <div className="rounded-xl border border-[var(--gold)]/20 bg-gradient-to-br from-[var(--gold)]/5 to-transparent p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--gold)]/25 bg-[var(--gold)]/10">
          <BookOpen className="h-4 w-4 text-[var(--gold)]" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            Phase Reflection Refresher
          </p>
          <h3 className="mt-1 font-serif text-lg font-semibold text-[var(--silver)]">
            {reflection.headline}
          </h3>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
        {reflection.synthesis}
      </p>

      <div className="mt-5">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
          Key connections
        </p>
        <ul className="mt-2 space-y-2">
          {reflection.keyConnections.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm leading-relaxed text-[var(--silver)]/90"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--gold)]" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
          Reflection prompts
        </p>
        <p className="mt-1 text-xs text-[var(--muted)]">
          For your own notes — no submission required.
        </p>
        <ul className="mt-2 space-y-2">
          {reflection.reflectionPrompts.map((prompt) => (
            <li
              key={prompt}
              className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 text-sm italic leading-relaxed text-[var(--silver)]/80"
            >
              {prompt}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex gap-3 rounded-lg border border-[var(--gold)]/15 bg-black/20 p-4">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--gold)]">
            Executive application
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-[var(--silver)]/90">
            {reflection.executiveApplication}
          </p>
        </div>
      </div>
    </div>
  );
}
