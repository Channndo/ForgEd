"use client";

import { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";
import { useKoda } from "@/hooks/useKoda";
import { useKodaPanel } from "./KodaProvider";
import type { KodaLearningContext } from "@/lib/koda/types";

export function KodaHelpCard({
  context,
  title = "Need a simpler explanation?",
}: {
  context: KodaLearningContext;
  title?: string;
}) {
  const { available, loading, summarize } = useKoda(context);
  const { openWithPrompt } = useKodaPanel();
  const [summary, setSummary] = useState<string | null>(null);

  async function handleSummarize() {
    const text = await summarize();
    if (text) setSummary(text);
  }

  return (
    <div className="rounded-lg border border-[var(--koda-gold)]/15 bg-[var(--koda-gold)]/[0.04] px-3 py-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-[var(--koda-gold)]" />
          <p className="truncate text-xs text-[var(--muted)]">
            <span className="font-medium text-[var(--koda-gold)]">KODA</span>
            {" · "}
            {title}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            onClick={() =>
              openWithPrompt(
                "Explain this lesson in simpler terms with a real-world example."
              )
            }
            className="rounded-full border border-[var(--koda-gold)]/30 bg-[var(--koda-gold)]/10 px-2.5 py-1 text-[11px] font-medium text-[var(--koda-gold)] hover:bg-[var(--koda-gold)]/20"
          >
            Ask KODA
          </button>
          {available && (
            <button
              type="button"
              onClick={() => void handleSummarize()}
              disabled={loading}
              className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-[var(--muted)] hover:text-white disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="h-3 w-3 animate-spin" />
              ) : (
                "Summary"
              )}
            </button>
          )}
        </div>
      </div>
      {summary && (
        <p className="mt-2 line-clamp-4 text-xs leading-relaxed text-[var(--foreground)] whitespace-pre-wrap">
          {summary}
        </p>
      )}
    </div>
  );
}
