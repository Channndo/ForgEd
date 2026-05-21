"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import {
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Cpu,
  Building2,
  Wallet,
  Car,
  Wrench,
  FlaskConical,
  HeartPulse,
  Palette,
  MessageSquare,
  Sparkles,
  GraduationCap as EduIcon,
  Rocket,
  Scale,
  Cog,
  type LucideIcon,
} from "lucide-react";
import { ForgEdLogo, ForgEdWordmarkText } from "@/components/brand/ForgEdLogo";
import { PLATFORM_NAV } from "@/lib/navigation";
import { COURSES } from "@/lib/courses/catalog";
import {
  FUTURE_DOMAINS,
  LEARNING_DOMAINS,
  filterCoursesByDomain,
  type LearningDomainId,
} from "@/lib/ecosystem/domains";

const DOMAIN_ICONS: Record<LearningDomainId, LucideIcon> = {
  technology: Cpu,
  business: Building2,
  finance: Wallet,
  law: Scale,
  engineering: Cog,
  automotive: Car,
  "skilled-trades": Wrench,
  science: FlaskConical,
  healthcare: HeartPulse,
  creative: Palette,
  communication: MessageSquare,
  "personal-development": Sparkles,
  education: EduIcon,
  entrepreneurship: Rocket,
};

function SidebarInner({
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
  const searchParams = useSearchParams();
  const activeDomain = searchParams.get("domain");
  const [expanded, setExpanded] = useState<Set<string>>(() => {
    if (activeDomain) return new Set([activeDomain]);
    return new Set<LearningDomainId>(["technology", "finance"]);
  });
  const [futureOpen, setFutureOpen] = useState(false);

  function isPlatformActive(href: string) {
    const base = href.split("?")[0];
    if (base === "/dashboard" && pathname === "/") return true;
    if (base === "/courses") {
      return pathname === "/courses" || pathname.startsWith("/courses/");
    }
    return pathname === base || pathname.startsWith(`${base}/`);
  }

  function toggleDomain(id: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const linkBase =
    "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all duration-200";
  const linkIdle =
    "text-[var(--muted)] hover:bg-white/[0.04] hover:text-[var(--silver)] border border-transparent";
  const linkActive =
    "bg-[var(--gold)]/12 text-[var(--gold)] border border-[var(--gold)]/20 shadow-[inset_0_1px_0_rgba(212,175,55,0.08)]";

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
        className={`fixed left-0 top-0 z-50 flex h-screen max-h-screen flex-col border-r border-white/[0.06] bg-[#050505] transition-all duration-300 ease-out lg:sticky lg:top-0 lg:z-30 lg:h-screen lg:max-h-screen ${
          collapsed ? "w-[72px]" : "w-[272px]"
        } ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex h-[3.75rem] shrink-0 items-center justify-between border-b border-white/[0.06] px-3 py-1">
          <Link
            href="/dashboard"
            className="flex min-w-0 items-center gap-2 overflow-visible"
            onClick={onMobileClose}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-visible">
              <ForgEdLogo variant="icon" />
            </span>
            {!collapsed && <ForgEdWordmarkText size="sm" />}
          </Link>
          <button
            type="button"
            onClick={onToggle}
            className="hidden rounded-lg p-1.5 text-[var(--muted)] transition hover:bg-white/5 hover:text-white lg:flex"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        </div>

        <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 py-4 scrollbar-thin">
          <p
            className={`mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)] ${collapsed ? "sr-only" : ""}`}
          >
            Platform
          </p>
          <div className="space-y-0.5">
            {PLATFORM_NAV.map((item) => {
              const Icon = item.icon;
              const active = isPlatformActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onMobileClose}
                  title={collapsed ? item.label : undefined}
                  className={`${linkBase} ${active ? linkActive : linkIdle}`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${active ? "text-[var(--gold)]" : ""}`} />
                  {!collapsed && <span className="flex-1 truncate">{item.label}</span>}
                </Link>
              );
            })}
          </div>

          <p
            className={`mb-2 mt-7 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)] ${collapsed ? "sr-only" : ""}`}
          >
            Course categories
          </p>

          {!collapsed ? (
            <div className="space-y-0.5">
              {LEARNING_DOMAINS.map((domain) => {
                const Icon = DOMAIN_ICONS[domain.id];
                const isOpen = expanded.has(domain.id);
                const isDomainActive = activeDomain === domain.id;
                const domainCourses = filterCoursesByDomain(COURSES, domain.id);

                return (
                  <div key={domain.id} className="rounded-lg">
                    <button
                      type="button"
                      onClick={() => toggleDomain(domain.id)}
                      className={`${linkBase} w-full ${isDomainActive ? linkActive : linkIdle}`}
                    >
                      <Icon className="h-4 w-4 shrink-0 text-[var(--gold)]/80" />
                      <span className="flex-1 truncate text-left font-medium">
                        {domain.label}
                      </span>
                      {!collapsed && domainCourses.length > 0 && (
                        <span className="rounded bg-white/5 px-1.5 py-0.5 text-[9px] tabular-nums text-[var(--muted)]">
                          {domainCourses.length}
                        </span>
                      )}
                      <ChevronDown
                        className={`h-3.5 w-3.5 shrink-0 text-[var(--muted)] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-200 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <ul className="mb-1 ml-3 max-h-[min(280px,40vh)] space-y-0.5 overflow-y-auto overscroll-contain border-l border-white/[0.06] pl-3 py-1 scrollbar-thin">
                          {domainCourses.map((course) => {
                            const coursePath = `/courses/${course.slug}`;
                            const courseActive =
                              pathname === coursePath ||
                              pathname.startsWith(`${coursePath}/`);
                            return (
                              <li key={course.slug}>
                                <Link
                                  href={coursePath}
                                  onClick={onMobileClose}
                                  className={`block py-1.5 text-xs leading-snug transition-colors ${
                                    courseActive
                                      ? "font-medium text-[var(--gold)]"
                                      : "text-[var(--muted)] hover:text-[var(--silver)]"
                                  }`}
                                >
                                  {course.title}
                                </Link>
                              </li>
                            );
                          })}
                          {domainCourses.length > 0 ? (
                            <li>
                              <Link
                                href={`/courses?domain=${domain.id}`}
                                onClick={onMobileClose}
                                className="mt-1 block py-1.5 text-xs font-medium text-[var(--gold)]/90 hover:text-[var(--gold)] hover:underline"
                              >
                                Browse {domain.label} →
                              </Link>
                            </li>
                          ) : (
                            <li className="py-1 text-[10px] text-[var(--muted)]/80">
                              Courses launching in this domain
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}

              <button
                type="button"
                onClick={() => setFutureOpen((o) => !o)}
                className={`${linkBase} mt-2 w-full ${linkIdle}`}
              >
                <span className="flex-1 truncate text-left text-xs uppercase tracking-wider">
                  Future domains
                </span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${futureOpen ? "rotate-180" : ""}`}
                />
              </button>
              {futureOpen && (
                <ul className="ml-3 space-y-0.5 border-l border-white/[0.04] pl-3 py-1">
                  {FUTURE_DOMAINS.map((f) => (
                    <li key={f.id} className="py-1 text-xs text-[var(--muted)]">
                      {f.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <div className="space-y-1 px-1">
              {LEARNING_DOMAINS.map((domain) => {
                const Icon = DOMAIN_ICONS[domain.id];
                return (
                  <Link
                    key={domain.id}
                    href={`/courses?domain=${domain.id}`}
                    title={domain.label}
                    onClick={onMobileClose}
                    className="flex justify-center rounded-lg p-2.5 text-[var(--muted)] hover:bg-white/5 hover:text-[var(--gold)]"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          )}
        </nav>

        <div className={`border-t border-white/[0.06] p-3 ${collapsed ? "hidden" : ""}`}>
          <div className="flex items-center gap-2 rounded-lg bg-white/[0.03] px-3 py-2">
            <GraduationCap className="h-4 w-4 text-[var(--gold)]" />
            <p className="text-xs text-[var(--muted)]">
              Built to scale · Thousands of courses ahead
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

export function Sidebar(props: Parameters<typeof SidebarInner>[0]) {
  return (
    <Suspense fallback={null}>
      <SidebarInner {...props} />
    </Suspense>
  );
}
