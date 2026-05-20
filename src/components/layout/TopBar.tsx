"use client";

import { usePathname } from "next/navigation";
import { Menu, Flame, Zap, Bell, Search } from "lucide-react";
import { useProgress } from "@/components/providers/ProgressProvider";
import { titleForPath } from "@/lib/navigation";
import { useKodaPanel } from "@/components/koda/KodaProvider";
import { Sparkles } from "lucide-react";

export function TopBar({ onMenuClick }: { onMenuClick: () => void }) {
  const pathname = usePathname();
  const { progress, xpBar } = useProgress();
  const { setOpen } = useKodaPanel();
  const title = titleForPath(pathname);

  return (
    <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center gap-4 border-b border-white/[0.06] bg-[#050505] px-4 lg:px-6">
      <button
        type="button"
        onClick={onMenuClick}
        className="rounded-lg p-2 text-[var(--muted)] hover:bg-white/5 hover:text-white lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="flex min-w-0 flex-1 items-center gap-3">
        <span className="hidden text-sm text-[var(--muted)] sm:inline">ForgEd</span>
        <span className="hidden text-[var(--muted)] sm:inline">/</span>
        <h1 className="truncate font-serif text-lg font-semibold text-[var(--silver)]">
          {title}
        </h1>
      </div>

      <div className="hidden max-w-xs flex-1 items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 md:flex lg:max-w-sm">
        <Search className="h-4 w-4 shrink-0 text-[var(--muted)]" />
        <input
          type="search"
          placeholder="Search courses…"
          className="w-full bg-transparent text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]"
        />
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="hidden items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 sm:flex">
          <span className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
            <Flame className="h-3.5 w-3.5 text-[var(--gold)]" />
            {progress.streak}
          </span>
          <span className="h-3 w-px bg-white/10" />
          <span className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
            <Zap className="h-3.5 w-3.5 text-[var(--gold)]" />
            {progress.xp} XP
          </span>
          <span className="h-3 w-px bg-white/10" />
          <span className="text-xs font-medium text-[var(--silver)]">Lv {xpBar.level}</span>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-[var(--muted)] hover:bg-white/5 hover:text-white"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="hidden items-center gap-2 rounded-lg border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-3 py-1.5 text-xs font-medium text-[var(--gold)] hover:bg-[var(--gold)]/20 sm:flex"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Ask KODA
        </button>

        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--gold)]/30 bg-gradient-to-br from-[var(--gold-dark)] to-[var(--gold)] text-xs font-bold text-[#050505]">
          {xpBar.level}
        </div>
      </div>
    </header>
  );
}
