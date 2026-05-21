"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { LogIn, LogOut, Settings, User } from "lucide-react";
import { useAuth } from "@/components/providers/AuthProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { withBasePath } from "@/lib/basePath";

export function UserMenu() {
  const { profile, user, signOut } = useAuth();
  const { xpBar } = useProgress();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  if (!user) {
    return (
      <Link
        href={withBasePath("/login")}
        className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--gold)]/35 bg-[var(--gold)]/10 px-3 py-1.5 text-xs font-medium text-[var(--gold)] hover:bg-[var(--gold)]/20"
      >
        <LogIn className="h-3.5 w-3.5" />
        Sign in
      </Link>
    );
  }

  const initial =
    profile?.displayName?.[0] ?? profile?.username?.[0] ?? "F";

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--gold)]/35 bg-gradient-to-br from-[var(--gold-dark)] to-[var(--gold)] text-xs font-bold uppercase text-[#050505]"
        aria-label="Account menu"
      >
        {initial}
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl border border-white/[0.08] bg-[#0a0a0a] py-2 shadow-xl">
          <div className="border-b border-white/[0.06] px-4 py-3">
            <p className="truncate text-sm font-medium text-[var(--silver)]">
              {profile?.displayName ?? profile?.username ?? "Learner"}
            </p>
            <p className="truncate text-xs text-[var(--muted)]">@{profile?.username}</p>
            <p className="mt-1 text-xs text-[var(--gold)]">Level {xpBar.level}</p>
          </div>
          <Link
            href={withBasePath("/profile")}
            className="flex items-center gap-2 px-4 py-2.5 text-sm text-[var(--muted)] hover:bg-white/5 hover:text-white"
            onClick={() => setOpen(false)}
          >
            <User className="h-4 w-4" />
            Profile
          </Link>
          <Link
            href={withBasePath("/profile/settings")}
            className="flex items-center gap-2 px-4 py-2.5 text-sm text-[var(--muted)] hover:bg-white/5 hover:text-white"
            onClick={() => setOpen(false)}
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
          <button
            type="button"
            className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-[var(--muted)] hover:bg-white/5 hover:text-red-300"
            onClick={() => {
              setOpen(false);
              signOut();
            }}
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
