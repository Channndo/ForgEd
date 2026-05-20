"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flame, LayoutDashboard, BookOpen, Sparkles, Briefcase } from "lucide-react";
import { useProgress } from "@/components/providers/ProgressProvider";
import { ForgEdLogo, ForgEdWordmarkText } from "@/components/brand/ForgEdLogo";

const NAV = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/courses", label: "Courses", icon: BookOpen },
  { href: "/assistant", label: "KODA", icon: Sparkles },
  { href: "/career", label: "Career", icon: Briefcase },
];

export function Header() {
  const pathname = usePathname();
  const { progress, xpBar } = useProgress();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--gold)]/10 glass">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <ForgEdLogo variant="icon" priority />
          <ForgEdWordmarkText className="hidden sm:inline" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map(({ href, label, icon: Icon }) => {
            const active = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20"
                    : "text-[var(--muted)] hover:bg-white/5 hover:text-[var(--silver)]"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 sm:flex">
            <Flame className="h-4 w-4 text-[var(--gold)]" />
            <span className="text-sm font-medium text-[var(--silver)]">
              {progress.streak} day streak
            </span>
          </div>
          <div className="flex flex-col items-end gap-0.5">
            <span className="text-xs text-[var(--muted)]">Level {xpBar.level}</span>
            <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[var(--silver)] to-[var(--gold)] transition-all"
                style={{ width: `${xpBar.percent}%` }}
              />
            </div>
          </div>
          <Link
            href="/dashboard"
            className="rounded-lg border border-[var(--gold)]/30 bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold)] px-3 py-2 text-sm font-medium text-[#121212] hover:opacity-90 transition-opacity shadow-[0_0_20px_var(--accent-glow)]"
          >
            My Path
          </Link>
        </div>
      </div>
    </header>
  );
}
