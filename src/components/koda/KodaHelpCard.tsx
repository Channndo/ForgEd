"use client";

import { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";
import { KodaFab } from "./KodaFab";
import { useKoda } from "@/hooks/useKoda";
import type { KodaLearningContext } from "@/lib/koda/types";

export function KodaHelpCard({
  context,
  title = "Need a simpler explanation?",
}: {
  context: KodaLearningContext;
  title?: string;
}) {
  const { available, loading, summarize } = useKoda(context);
  const [summary, setSummary] = useState<string | null>(null);

  async function handleSummarize() {
    const text = await summarize();
    if (text) setSummary(text);
  }

  return (
    <div className="rounded-2xl border border-[var(--koda-gold)]/20 bg-gradient-to-br from-[var(--koda-gold)]/5 to-transparent p-5">
      <div className="flex items-start gap-3">
        <Sparkles className="h-5 w-5 shrink-0 text-[var(--koda-gold)]" />
        <div className="flex-1 min-w-0">
          <p className="font-medium text-[var(--koda-gold)]">KODA can help</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{title}</p>
          {summary && (
            <div className="mt-3 rounded-xl bg-black/30 p-3 text-sm text-[var(--foreground)] whitespace-pre-wrap">
              {summary}
            </div>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            <KodaFab prompt="Explain this lesson in simpler terms with a real-world example." />
            {available && (
              <button
                type="button"
                onClick={() => void handleSummarize()}
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs text-[var(--muted)] hover:text-white disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="h-3 w-3 animate-spin" />
                ) : null}
                Quick summary
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
