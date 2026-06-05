"use client";

import Link from "next/link";
import { GraduationCap, Route } from "lucide-react";
import { useAuth } from "@/components/providers/AuthProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { Card } from "@/components/ui/Card";
import {
  FORGED_PATH_DESCRIPTION,
  FORGED_PATH_PHASES,
  FORGED_PATH_SUBTITLE,
  FORGED_PATH_TITLE,
  FORGED_PATH_TOTAL_COURSES,
} from "@/lib/forged-path/curriculum";
import {
  forgedPathCompletedCount,
  forgedPathCompletedPhaseCount,
  forgedPathCoursePercent,
} from "@/lib/forged-path/progress";
import { resolveForgedPathStudentName } from "@/lib/forged-path/studentName";
import { ForgedPathCertificateSection } from "./ForgedPathCertificateSection";
import { ForgedPathExternalCostNotice } from "./ForgedPathExternalCostNotice";
import { ForgedPathPhaseSection } from "./ForgedPathPhaseSection";

export default function ForgedPathClient() {
  const { progress, setProgress, isSignedIn } = useProgress();
  const { profile, user } = useAuth();

  const completedCount = forgedPathCompletedCount(progress);
  const coursePct = forgedPathCoursePercent(progress);
  const completedPhases = forgedPathCompletedPhaseCount(progress);
  const totalPhases = FORGED_PATH_PHASES.length;

  const studentName = resolveForgedPathStudentName(profile, user?.username);

  return (
    <div className="mx-auto max-w-4xl space-y-10">
      <section className="relative overflow-hidden rounded-2xl border border-[var(--gold)]/15 bg-gradient-to-br from-[#0a0a0a] via-[#0d0d0d] to-[#050505] p-6 sm:p-10">
        <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-[var(--gold)]/10 blur-[80px]" />
        <div className="relative">
          <div className="flex items-center gap-2 text-[var(--gold)]">
            <GraduationCap className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em]">
              {FORGED_PATH_TITLE}
            </span>
          </div>
          <h1 className="mt-3 font-serif text-3xl font-bold text-[var(--silver)] sm:text-4xl">
            {FORGED_PATH_SUBTITLE}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            {FORGED_PATH_DESCRIPTION}
          </p>
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="border-white/[0.08] bg-white/[0.02]">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
            Completed Courses
          </p>
          <p className="mt-2 font-serif text-2xl font-bold text-[var(--silver)]">
            {completedCount} / {FORGED_PATH_TOTAL_COURSES}
          </p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold)] transition-all"
              style={{ width: `${coursePct}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-[var(--muted)]">{coursePct}% of courses</p>
        </Card>
        <Card className="border-white/[0.08] bg-white/[0.02]">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
            Phases Complete
          </p>
          <p className="mt-2 font-serif text-2xl font-bold text-[var(--silver)]">
            {completedPhases} / {totalPhases}
          </p>
          <p className="mt-2 text-xs text-[var(--muted)]">
            {totalPhases - completedPhases} phases remaining
          </p>
        </Card>
        <Card className="border-white/[0.08] bg-white/[0.02]">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
            Curriculum Progress
          </p>
          <p className="mt-2 font-serif text-2xl font-bold text-[var(--silver)]">
            {coursePct}%
          </p>
          <p className="mt-2 text-xs text-[var(--muted)]">Overall program completion</p>
        </Card>
      </div>

      <ForgedPathExternalCostNotice />

      {!isSignedIn && (
        <Card className="border-[var(--gold)]/20 bg-[var(--gold)]/5">
          <p className="text-sm text-[var(--muted)]">
            <Link href="/login" className="font-medium text-[var(--gold)] hover:underline">
              Sign in
            </Link>{" "}
            to verify and save your external certificate completions across devices.
          </p>
        </Card>
      )}

      <ForgedPathCertificateSection progress={progress} studentName={studentName} />

      <div className="space-y-10">
        {FORGED_PATH_PHASES.map((phase) => (
          <ForgedPathPhaseSection
            key={phase.id}
            phase={phase}
            progress={progress}
            onProgressChange={setProgress}
            canVerify={isSignedIn}
          />
        ))}
      </div>

      <Card className="border-white/[0.06] bg-white/[0.02]">
        <div className="flex items-center gap-2 text-[var(--muted)]">
          <Route className="h-4 w-4" />
          <p className="text-sm">
            Looking for structured ForgEd textbooks and mastery exams?{" "}
            <Link href="/paths" className="text-[var(--gold)] hover:underline">
              Browse Learning Paths
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
