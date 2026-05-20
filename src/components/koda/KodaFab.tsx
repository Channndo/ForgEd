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
      className={`inline-flex items-center gap-2 rounded-full border border-[var(--koda-gold)]/30 bg-gradient-to-r from-[var(--koda-gold)]/10 to-[var(--koda-silver)]/5 px-4 py-2 text-sm font-medium text-[var(--koda-gold)] transition hover:border-[var(--koda-gold)]/50 hover:shadow-[0_0_24px_rgba(201,169,98,0.15)] ${className}`}
    >
      <KodaLogo size={22} />
      {label}
      <MessageCircle className="h-4 w-4 opacity-70" />
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
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--koda-gold)]/40 bg-[var(--background)]/95 shadow-lg backdrop-blur-md transition hover:scale-105 hover:shadow-[0_0_32px_rgba(212,175,55,0.25)]"
      aria-label="Open KODA"
    >
      <KodaLogo size={36} />
    </button>
  );
}
