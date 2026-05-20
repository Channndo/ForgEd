"use client";

import Link from "next/link";
import { Briefcase, FileText, TrendingUp } from "lucide-react";
import { useProgress } from "@/components/providers/ProgressProvider";
import { COURSES } from "@/lib/courses/catalog";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function CareerPage() {
  const { progress } = useProgress();

  const completedSkills = COURSES.filter((c) =>
    progress.completedCourses.includes(c.id)
  ).flatMap((c) => c.skills);

  const inProgressSkills = COURSES.filter(
    (c) =>
      (progress.courseProgress[c.id] ?? 0) > 0 &&
      !progress.completedCourses.includes(c.id)
  ).flatMap((c) => c.skills);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold">Career progression</h1>
      <p className="mt-2 text-[var(--muted)]">
        Track skills earned on ForgEd and build toward resume-ready milestones.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        <Card>
          <TrendingUp className="h-6 w-6 text-[var(--accent)]" />
          <p className="mt-3 text-2xl font-bold">{completedSkills.length}</p>
          <p className="text-sm text-[var(--muted)]">Skills completed</p>
        </Card>
        <Card>
          <Briefcase className="h-6 w-6 text-[var(--forge)]" />
          <p className="mt-3 text-2xl font-bold">{inProgressSkills.length}</p>
          <p className="text-sm text-[var(--muted)]">Skills in progress</p>
        </Card>
        <Card>
          <FileText className="h-6 w-6 text-[var(--accent)]" />
          <p className="mt-3 text-lg font-bold">Resume export</p>
          <p className="text-sm text-[var(--muted)]">Coming soon</p>
        </Card>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Your skill profile</h2>
        {completedSkills.length === 0 && inProgressSkills.length === 0 ? (
          <Card className="mt-4">
            <p className="text-[var(--muted)]">
              Complete courses to populate your career profile. We recommend starting with{" "}
              <Link
                href="/courses/insurance-fundamentals"
                className="text-[var(--accent)] hover:underline"
              >
                Insurance Fundamentals
              </Link>
              .
            </p>
            <Button href="/dashboard" variant="forge" className="mt-4">
              Go to dashboard
            </Button>
          </Card>
        ) : (
          <ul className="mt-4 space-y-2">
            {completedSkills.map((s) => (
              <li
                key={s.id}
                className="glass flex items-center justify-between rounded-xl px-4 py-3"
              >
                <span>{s.name}</span>
                <span className="text-xs text-[var(--success)]">Verified</span>
              </li>
            ))}
            {inProgressSkills.map((s) => (
              <li
                key={`ip-${s.id}`}
                className="glass flex items-center justify-between rounded-xl px-4 py-3 opacity-80"
              >
                <span>{s.name}</span>
                <span className="text-xs text-[var(--warning)]">In progress</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <Card className="mt-12">
        <h3 className="font-semibold">Suggested paths</h3>
        <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
          <li>
            <strong className="text-white">Insurance & financial services</strong> — Insurance Fundamentals → Financial Literacy
          </li>
          <li>
            <strong className="text-white">Technology career</strong> — Technology for Beginners → IT Fundamentals → Cybersecurity
          </li>
          <li>
            <strong className="text-white">Business & AI</strong> — Business Foundations → AI Fundamentals → Communication Skills
          </li>
        </ul>
      </Card>
    </div>
  );
}
