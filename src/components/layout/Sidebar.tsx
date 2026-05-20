"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";
import { ForgEdLogo, ForgEdWordmarkText } from "@/components/brand/ForgEdLogo";
import { MAIN_NAV, LEARN_NAV } from "@/lib/navigation";

export function Sidebar({
  collapsed,
  onToggle,
  mobileOpen,
  onMobileClose,
}: {
  collapsed: boolean;
  onToggle: () => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
}) {
  const pathname = usePathname();

  function isActive(href: string) {
    const base = href.split("?")[0];
    if (base === "/dashboard" && pathname === "/") return true;
    return pathname === base || pathname.startsWith(`${base}/`);
  }

  const navLink = (item: (typeof MAIN_NAV)[0]) => {
    const active = isActive(item.href);
    const Icon = item.icon;
    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={onMobileClose}
        title={collapsed ? item.label : undefined}
        className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all ${
          active
            ? "bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/25"
            : "text-[var(--muted)] hover:bg-white/5 hover:text-[var(--silver)] border border-transparent"
        }`}
      >
        <Icon className={`h-4 w-4 shrink-0 ${active ? "text-[var(--gold)]" : ""}`} />
        {!collapsed && (
          <>
            <span className="flex-1 truncate">{item.label}</span>
            {item.badge && (
              <span className="rounded bg-[var(--gold)]/20 px-1.5 py-0.5 text-[10px] font-medium text-[var(--gold)]">
                {item.badge}
              </span>
            )}
          </>
        )}
      </Link>
    );
  };

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={onMobileClose}
          aria-label="Close menu"
        />
      )}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-full flex-col border-r border-white/[0.06] bg-[#050505] transition-all duration-200 lg:sticky lg:z-30 ${
          collapsed ? "w-[72px]" : "w-[260px]"
        } ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-white/[0.06] px-3">
          <Link href="/dashboard" className="flex min-w-0 items-center gap-2" onClick={onMobileClose}>
            <ForgEdLogo variant="icon" />
            {!collapsed && <ForgEdWordmarkText size="sm" />}
          </Link>
          <button
            type="button"
            onClick={onToggle}
            className="hidden rounded-lg p-1.5 text-[var(--muted)] hover:bg-white/5 hover:text-white lg:flex"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-4">
          <p className={`mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest text-[var(--muted)] ${collapsed ? "sr-only" : ""}`}>
            Platform
          </p>
          <div className="space-y-0.5">{MAIN_NAV.map(navLink)}</div>

          <p className={`mb-2 mt-6 px-3 text-[10px] font-semibold uppercase tracking-widest text-[var(--muted)] ${collapsed ? "sr-only" : ""}`}>
            Categories
          </p>
          <div className="space-y-0.5">{LEARN_NAV.map(navLink)}</div>
        </nav>

        <div className={`border-t border-white/[0.06] p-3 ${collapsed ? "hidden" : ""}`}>
          <div className="flex items-center gap-2 rounded-lg bg-white/[0.03] px-3 py-2">
            <GraduationCap className="h-4 w-4 text-[var(--gold)]" />
            <p className="text-xs text-[var(--muted)]">
              Free · Self-paced · XP rewards
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
