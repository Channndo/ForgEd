"use client";

import { MessageCircle } from "lucide-react";
import { useKodaPanel } from "./KodaProvider";
import { KodaLogo } from "./KodaLogo";

export function KodaFab({
  prompt,
  label = "Ask KODA",
  className = "",
}: {
  prompt?: string;
  label?: string;
  className?: string;
}) {
  const { openWithPrompt } = useKodaPanel();

  return (
    <button
      type="button"
      onClick={() => openWithPrompt(prompt)}
      className={`inline-flex items-center gap-2 rounded-full border border-[var(--koda-gold)]/35 bg-gradient-to-r from-[var(--koda-gold)]/12 to-black/40 px-4 py-2 text-sm font-medium text-[var(--koda-gold)] transition hover:border-[var(--koda-gold)]/55 hover:shadow-[0_0_24px_rgba(212,175,55,0.2)] ${className}`}
    >
      <KodaLogo size={24} />
      {label}
      <MessageCircle className="h-4 w-4 opacity-60" />
    </button>
  );
}

export function KodaFloatingButton() {
  const { toggle, open } = useKodaPanel();

  if (open) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      className="group fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1"
      aria-label="Open KODA learning assistant"
    >
      <span className="flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-2xl border border-[var(--koda-gold)]/45 bg-[#050505] shadow-[0_4px_24px_rgba(0,0,0,0.5),0_0_32px_rgba(212,175,55,0.2)] transition group-hover:scale-105 group-hover:border-[var(--koda-gold)]/70 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.35)]">
        <KodaLogo size={44} />
      </span>
      <span className="rounded-full border border-[var(--koda-gold)]/30 bg-[#050505]/95 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--koda-gold)] opacity-0 transition group-hover:opacity-100">
        KODA
      </span>
    </button>
  );
}
