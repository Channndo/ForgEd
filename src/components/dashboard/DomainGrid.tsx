"use client";

import Link from "next/link";
import {
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
  GraduationCap,
  Rocket,
  Scale,
  Cog,
  type LucideIcon,
} from "lucide-react";
import { COURSES } from "@/lib/courses/catalog";
import {
  LEARNING_DOMAINS,
  countCoursesByDomain,
  type LearningDomainId,
} from "@/lib/ecosystem/domains";

const ICONS: Record<LearningDomainId, LucideIcon> = {
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
  education: GraduationCap,
  entrepreneurship: Rocket,
};

export function DomainGrid() {
  const counts = countCoursesByDomain(COURSES);

  return (
    <section>
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 className="font-serif text-xl font-semibold text-[var(--silver)]">
            Explore the ecosystem
          </h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Fourteen broad domains — built to host thousands of specialized courses.
          </p>
        </div>
        <Link href="/courses" className="text-sm text-[var(--gold)] hover:underline">
          Full library →
        </Link>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {LEARNING_DOMAINS.map((domain) => {
          const Icon = ICONS[domain.id];
          const count = counts[domain.id];
          const href =
            domain.status === "active"
              ? `/courses?domain=${domain.id}`
              : `/courses?domain=${domain.id}`;

          return (
            <Link
              key={domain.id}
              href={href}
              className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#0a0a0a] p-4 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--gold)]/25 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[var(--gold)]/5 opacity-0 blur-2xl transition group-hover:opacity-100" />
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--gold)]/15 bg-[var(--gold)]/5 transition group-hover:border-[var(--gold)]/30">
                  <Icon className="h-5 w-5 text-[var(--gold)]" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-[var(--silver)]">{domain.label}</p>
                  <p className="mt-0.5 line-clamp-2 text-xs text-[var(--muted)]">
                    {domain.description}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-[10px] uppercase tracking-wider text-[var(--muted)]">
                {domain.status === "active"
                  ? `${count} course${count === 1 ? "" : "s"} available`
                  : "Coming soon"}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
