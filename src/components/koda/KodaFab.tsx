"use client";

import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { useKodaPanel } from "./KodaProvider";
import { KodaLogo } from "./KodaLogo";

/** Sole entry point for KODA chat — fixed bottom-right (hidden while panel is open; use header X) */
export function KodaFloatingButton() {
  const pathname = usePathname();
  const path = pathname?.replace(/\/$/, "") ?? "";
  const { toggle, open } = useKodaPanel();

  if (path === "/realm" || path.startsWith("/realm/")) return null;
  if (open) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      className="group fixed bottom-6 right-6 z-[80] flex flex-col items-center gap-1"
      aria-label={open ? "Close KODA" : "Open KODA learning assistant"}
      aria-expanded={open}
    >
      <span
        className={`flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-2xl border bg-[#050505] shadow-[0_4px_24px_rgba(0,0,0,0.5)] transition duration-200 group-hover:scale-105 ${
          open
            ? "border-[var(--koda-gold)]/60 shadow-[0_0_32px_rgba(212,175,55,0.25)]"
            : "border-[var(--koda-gold)]/45 shadow-[0_0_32px_rgba(212,175,55,0.2)] group-hover:border-[var(--koda-gold)]/70"
        }`}
      >
        {open ? (
          <X className="h-7 w-7 text-[var(--koda-gold)]" strokeWidth={2} />
        ) : (
          <KodaLogo size={44} imageClassName="p-[2%]" />
        )}
      </span>
      <span className="rounded-full border border-[var(--koda-gold)]/30 bg-[#050505]/95 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--koda-gold)]">
        {open ? "Close" : "KODA"}
      </span>
    </button>
  );
}
