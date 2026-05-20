"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { Clock, Zap, ChevronDown } from "lucide-react";
import { COURSES } from "@/lib/courses/catalog";
import {
  LEARNING_DOMAINS,
  filterCoursesByDomain,
  getDomainById,
  type LearningDomainId,
} from "@/lib/ecosystem/domains";
import { Card } from "@/components/ui/Card";

function CoursesContent() {
  const params = useSearchParams();
  const domainId = params.get("domain") as LearningDomainId | null;
  const legacyGroup = params.get("group");
  const legacyCategory = params.get("category");

  const domain =
    domainId && getDomainById(domainId)
      ? getDomainById(domainId)
      : legacyGroup && getDomainById(legacyGroup)
        ? getDomainById(legacyGroup)
        : null;

  let filtered = COURSES;
  if (domain) {
    filtered = filterCoursesByDomain(COURSES, domain.id);
  } else if (legacyCategory) {
    filtered = COURSES.filter((c) => c.category === legacyCategory);
  }

  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-bold text-[var(--silver)]">Course library</h1>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          {domain
            ? `${domain.label} — ${domain.description}`
            : "Browse the full ecosystem. Every domain is weighted equally — specialized tracks roll out continuously."}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <Link
          href="/courses"
          className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
            !domain
              ? "border-[var(--gold)]/40 bg-[var(--gold)]/10 text-[var(--gold)]"
              : "border-white/10 text-[var(--muted)] hover:border-white/20"
          }`}
        >
          All domains
        </Link>
        {LEARNING_DOMAINS.filter((d) => d.status === "active").map((d) => (
          <Link
            key={d.id}
            href={`/courses?domain=${d.id}`}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
              domain?.id === d.id
                ? "border-[var(--gold)]/40 bg-[var(--gold)]/10 text-[var(--gold)]"
                : "border-white/10 text-[var(--muted)] hover:border-white/20"
            }`}
          >
            {d.label}
          </Link>
        ))}
      </div>

      {domain && (
        <div className="rounded-xl border border-white/[0.06] bg-[#0a0a0a] p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            Topics in {domain.label}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {domain.subtopics.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() =>
                  setExpandedTopic((t) => (t === topic ? null : topic))
                }
                className={`rounded-lg border px-3 py-1.5 text-xs transition ${
                  expandedTopic === topic
                    ? "border-[var(--gold)]/30 bg-[var(--gold)]/5 text-[var(--gold)]"
                    : "border-white/8 text-[var(--muted)] hover:border-white/15"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
          {expandedTopic && (
            <p className="mt-3 text-sm text-[var(--muted)]">
              Specialized courses for <strong className="text-[var(--silver)]">{expandedTopic}</strong>{" "}
              will appear here as the catalog scales. Browse available {domain.label} courses below.
            </p>
          )}
        </div>
      )}

      {filtered.length === 0 ? (
        <Card>
          <p className="text-sm text-[var(--muted)]">
            No courses in this domain yet — new tracks are added as the ecosystem grows. Try{" "}
            <Link href="/courses?domain=technology" className="text-[var(--gold)] hover:underline">
              Technology
            </Link>{" "}
            or{" "}
            <Link href="/courses?domain=finance" className="text-[var(--gold)] hover:underline">
              Finance
            </Link>{" "}
            (includes Insurance Fundamentals).
          </p>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course) => (
            <Link key={course.id} href={`/courses/${course.slug}`}>
              <Card className="group h-full transition duration-200 hover:-translate-y-0.5 hover:border-[var(--gold)]/30">
                <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--muted)]">
                  {domain?.label ?? "Course"}
                </span>
                <h2 className="mt-3 text-lg font-semibold text-[var(--silver)] group-hover:text-[var(--gold)]">
                  {course.title}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm text-[var(--muted)]">
                  {course.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs text-[var(--muted)]">
                  <span className="capitalize">{course.difficulty}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {course.estimatedHours}h
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap className="h-3.5 w-3.5 text-[var(--gold)]" /> {course.xpReward} XP
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}

      {!domain && (
        <details className="rounded-xl border border-white/[0.06] bg-[#0a0a0a] p-4">
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-[var(--silver)]">
            Future domains (preview)
            <ChevronDown className="h-4 w-4 text-[var(--muted)]" />
          </summary>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Sales, Marketing, Leadership, and Media Production — structured like the main
            domains. Cybersecurity and AI & Automation are courses under Technology, not
            separate top-level categories.
          </p>
        </details>
      )}
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-[var(--muted)]">Loading…</div>}>
      <CoursesContent />
    </Suspense>
  );
}
