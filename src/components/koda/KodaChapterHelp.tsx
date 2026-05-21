"use client";

import { Sparkles, MessageCircle, ListChecks, HelpCircle } from "lucide-react";
import { useKodaPanel } from "./KodaProvider";
import { useKoda } from "@/hooks/useKoda";
import type { KodaLearningContext } from "@/lib/koda/types";

export function KodaChapterHelp({
  context,
  chapterTitle,
}: {
  context: KodaLearningContext;
  chapterTitle: string;
}) {
  const { setOpen, setLearningContext, openWithPrompt } = useKodaPanel();
  const { available } = useKoda(context);

  function ask(prompt: string) {
    setLearningContext(context);
    openWithPrompt(prompt);
    setOpen(true);
  }

  if (!available) {
    return (
      <p className="text-xs text-[var(--muted)]">
        Sign in to ask KODA about this chapter.
      </p>
    );
  }

  return (
    <div className="rounded-xl border border-[var(--koda-gold)]/20 bg-[var(--koda-gold)]/[0.04] p-4">
      <div className="flex items-center gap-2 text-[var(--koda-gold)]">
        <Sparkles className="h-4 w-4" />
        <span className="text-xs font-semibold uppercase tracking-wider">
          Ask KODA about this chapter
        </span>
      </div>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Explanations, summaries, and practice for{" "}
        <span className="text-[var(--silver)]">{chapterTitle}</span>.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <KodaChip
          icon={ListChecks}
          label="Summarize chapter"
          onClick={() =>
            ask(
              `Summarize "${chapterTitle}" in five bullet points for a working professional. Focus on what to do differently on Monday.`
            )
          }
        />
        <KodaChip
          icon={MessageCircle}
          label="Explain key ideas"
          onClick={() =>
            ask(
              `Explain the core ideas of "${chapterTitle}" clearly, with one realistic workplace example and one common mistake to avoid.`
            )
          }
        />
        <KodaChip
          icon={HelpCircle}
          label="Practice questions"
          onClick={() =>
            ask(
              `Create three application-style practice questions for "${chapterTitle}" with brief model answers. No trick questions.`
            )
          }
        />
        <KodaChip
          icon={Sparkles}
          label="What to study next"
          onClick={() =>
            ask(
              "Given my course context, what should I study next and why? Keep it to two concrete recommendations."
            )
          }
        />
      </div>
    </div>
  );
}

function KodaChip({
  icon: Icon,
  label,
  onClick,
}: {
  icon: typeof Sparkles;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-black/40 px-3 py-1.5 text-xs text-[var(--silver)] transition hover:border-[var(--koda-gold)]/35 hover:text-[var(--koda-gold)]"
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
    </button>
  );
}
