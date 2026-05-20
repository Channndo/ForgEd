"use client";

import { Check } from "lucide-react";
import { completeLesson } from "@/lib/progress";
import { useProgress } from "@/components/providers/ProgressProvider";

export function TextbookSectionFooter({
  lessonId,
  courseSlug,
  moduleId,
}: {
  lessonId: string;
  courseSlug: string;
  moduleId: string;
}) {
  const { progress, refresh } = useProgress();
  const done = progress.completedLessons.includes(lessonId);

  function markRead() {
    if (!done) {
      completeLesson(lessonId, 15, { courseSlug, moduleId });
      refresh();
    }
  }

  return (
    <div className="mt-8 flex justify-end border-t border-white/[0.04] pt-4">
      <button
        type="button"
        onClick={markRead}
        disabled={done}
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
          done
            ? "border-[var(--success)]/30 bg-[var(--success)]/10 text-[var(--success)]"
            : "border-[var(--gold)]/30 bg-[var(--gold)]/10 text-[var(--gold)] hover:bg-[var(--gold)]/20"
        }`}
      >
        <Check className="h-3.5 w-3.5" />
        {done ? "Section complete" : "Mark section read"}
      </button>
    </div>
  );
}
