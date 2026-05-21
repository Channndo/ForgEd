"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { completeLesson } from "@/lib/progress";
import { useAuth } from "@/components/providers/AuthProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { withBasePath } from "@/lib/basePath";

export function TextbookSectionFooter({
  lessonId,
  courseSlug,
  moduleId,
}: {
  lessonId: string;
  courseSlug: string;
  moduleId: string;
}) {
  const { user } = useAuth();
  const { progress, refresh } = useProgress();
  const done = progress.completedLessons.includes(lessonId);

  function markRead() {
    if (!user || done) return;
    completeLesson(lessonId, 15, { courseSlug, moduleId });
    refresh();
  }

  return (
    <div className="mt-8 flex flex-col items-end gap-2 border-t border-white/[0.04] pt-4">
      {!user && (
        <p className="text-xs text-[var(--muted)]">
          <Link href={withBasePath("/login")} className="text-[var(--gold)] hover:underline">
            Sign in
          </Link>{" "}
          to save section progress and earn XP.
        </p>
      )}
      <button
        type="button"
        onClick={markRead}
        disabled={done || !user}
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
          done
            ? "border-[var(--success)]/30 bg-[var(--success)]/10 text-[var(--success)]"
            : user
              ? "border-[var(--gold)]/30 bg-[var(--gold)]/10 text-[var(--gold)] hover:bg-[var(--gold)]/20"
              : "cursor-not-allowed border-white/10 bg-white/[0.02] text-[var(--muted)]"
        }`}
      >
        <Check className="h-3.5 w-3.5" />
        {done ? "Section complete" : "Mark section read"}
      </button>
    </div>
  );
}
