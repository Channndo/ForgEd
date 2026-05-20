"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useKoda } from "@/hooks/useKoda";
import type { KodaLearningContext } from "@/lib/koda/types";

export function KodaQuizHelp({ context }: { context: KodaLearningContext }) {
  const { available, loading, explainQuiz } = useKoda(context);
  const [help, setHelp] = useState<string | null>(null);

  if (!available) return null;

  return (
    <div className="mt-4 rounded-xl border border-[var(--koda-silver)]/15 bg-white/[0.03] p-4">
      <p className="text-xs font-medium text-[var(--koda-gold)]">KODA · Quiz coach</p>
      {help ? (
        <p className="mt-2 text-sm text-[var(--muted)] whitespace-pre-wrap">{help}</p>
      ) : (
        <button
          type="button"
          disabled={loading}
          onClick={async () => {
            const text = await explainQuiz();
            if (text) setHelp(text);
          }}
          className="mt-2 text-sm text-[var(--koda-silver)] hover:text-white disabled:opacity-50"
        >
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="h-3.5 w-3.5 animate-spin" /> Getting a clearer explanation…
            </span>
          ) : (
            "Get a clearer explanation"
          )}
        </button>
      )}
    </div>
  );
}
