"use client";

import Link from "next/link";
import {
  Award,
  BookOpen,
  Calendar,
  Flame,
  FlaskConical,
  Route,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useAuth } from "@/components/providers/AuthProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { Card } from "@/components/ui/Card";
import { BADGES } from "@/lib/badges";
import { COURSES } from "@/lib/courses/catalog";
import { LEARNING_PATHS } from "@/lib/paths/learningPaths";
import {
  getContinuePathCourse,
  pathCompletionPercent,
} from "@/lib/paths/pathProgress";
import { computeCourseProgressPercent } from "@/lib/courseProgress";
import { withBasePath } from "@/lib/basePath";

function formatDate(iso?: string) {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "—";
  }
}

export default function ProfilePage() {
  const { profile } = useAuth();
  const { progress, xpBar } = useProgress();

  const earned = BADGES.filter((b) => progress.earnedBadges.includes(b.id));
  const activePath = LEARNING_PATHS.find((p) => p.id === progress.activePathId);
  const continuePath = activePath
    ? getContinuePathCourse(progress, activePath)
    : null;

  const inProgress = COURSES.filter((c) => {
    const pct = computeCourseProgressPercent(progress, c.id);
    return pct > 0 && !progress.completedCourses.includes(c.id);
  }).slice(0, 4);

  const pathRows = LEARNING_PATHS.map((p) => ({
    path: p,
    pct: pathCompletionPercent(progress, p),
    labs: progress.pathProgress?.[p.id]?.completedLabs?.length ?? 0,
  })).filter((r) => r.pct > 0 || r.labs > 0);

  const labCount = Object.values(progress.labProgress ?? {}).filter(
    (l) => l.completed
  ).length;
  const quizEntries = Object.entries(progress.quizScores).sort(
    (a, b) => new Date(b[1].at).getTime() - new Date(a[1].at).getTime()
  );
  const certs =
    profile?.certifications?.split(",").map((c) => c.trim()).filter(Boolean) ??
    [];

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <section className="glass rounded-2xl border border-[var(--gold)]/15 p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-[var(--gold)]/30 bg-gradient-to-br from-[var(--gold-dark)] to-[var(--gold)] font-serif text-3xl font-bold uppercase text-[#050505]">
            {profile?.displayName?.[0] ?? "F"}
          </div>
          <div className="flex-1">
            <h1 className="font-serif text-2xl font-bold text-[var(--silver)]">
              {profile?.displayName ?? "ForgEd Learner"}
            </h1>
            <p className="text-sm text-[var(--muted)]">
              @{profile?.username}
              {profile?.isAdmin && (
                <span className="ml-2 rounded-md border border-[var(--gold)]/35 bg-[var(--gold)]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--gold)]">
                  Admin
                </span>
              )}
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">{profile?.email}</p>
            <div className="mt-2 flex flex-wrap gap-3 text-xs text-[var(--muted)]">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3 w-3 text-[var(--gold)]" />
                Member since {formatDate(profile?.createdDate)}
              </span>
              <span>Last login {formatDate(profile?.lastLogin)}</span>
            </div>
            <Link
              href={withBasePath("/profile/settings")}
              className="mt-3 inline-block text-sm text-[var(--gold)] hover:underline"
            >
              Edit profile settings →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat label="XP" value={String(profile?.xp ?? progress.xp)} icon={Zap} />
            <Stat
              label="Level"
              value={String(profile?.level ?? xpBar.level)}
              icon={Target}
            />
            <Stat
              label="Streak"
              value={`${profile?.streak ?? progress.streak}d`}
              icon={Flame}
            />
            <Stat
              label="Courses"
              value={String(progress.completedCourses.length)}
              icon={BookOpen}
            />
          </div>
        </div>
      </section>

      {activePath && (
        <Card glow>
          <div className="flex items-center gap-2 text-[var(--gold)]">
            <Route className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Active path
            </span>
          </div>
          <h2 className="mt-2 font-serif text-lg font-semibold text-[var(--silver)]">
            {activePath.title}
          </h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            {pathCompletionPercent(progress, activePath)}% complete
          </p>
          {continuePath && (
            <Link
              href={withBasePath(`/courses/${continuePath.slug}/read`)}
              className="mt-4 inline-block text-sm font-medium text-[var(--gold)] hover:underline"
            >
              Continue — {continuePath.title} →
            </Link>
          )}
        </Card>
      )}

      {pathRows.length > 0 && (
        <section>
          <h2 className="mb-4 font-serif text-lg font-semibold text-[var(--silver)]">
            Learning paths
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {pathRows.map(({ path, pct, labs }) => (
              <Link
                key={path.id}
                href={withBasePath(`/paths/${path.id}`)}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition hover:border-[var(--gold)]/25"
              >
                <p className="font-medium text-[var(--silver)]">{path.title}</p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  {pct}% · {labs} lab{labs === 1 ? "" : "s"} done
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="mb-4 font-serif text-lg font-semibold text-[var(--silver)]">
          Continue learning
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {inProgress.length === 0 ? (
            <p className="text-sm text-[var(--muted)]">
              Start a course from the library to see it here.
            </p>
          ) : (
            inProgress.map((c) => (
              <Link
                key={c.id}
                href={withBasePath(`/courses/${c.slug}/read`)}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition hover:border-[var(--gold)]/25"
              >
                <p className="font-medium text-[var(--silver)]">{c.title}</p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  {computeCourseProgressPercent(progress, c.id)}% complete
                </p>
              </Link>
            ))
          )}
        </div>
      </section>

      <section>
        <h2 className="mb-4 flex items-center gap-2 font-serif text-lg font-semibold text-[var(--silver)]">
          <Award className="h-5 w-5 text-[var(--gold)]" />
          Badges & certifications
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {earned.length === 0 && certs.length === 0 ? (
            <p className="text-sm text-[var(--muted)]">
              Complete lessons and paths to earn credentials.
            </p>
          ) : (
            <>
              {earned.map((b) => (
                <div
                  key={b.id}
                  className="rounded-xl border border-[var(--gold)]/20 bg-[var(--gold)]/5 p-4"
                >
                  <p className="font-medium text-[var(--silver)]">{b.name}</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">{b.description}</p>
                </div>
              ))}
              {certs.map((c) => (
                <div
                  key={c}
                  className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4"
                >
                  <p className="font-medium text-[var(--silver)]">{c}</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">Certification</p>
                </div>
              ))}
            </>
          )}
        </div>
      </section>

      <section>
        <h2 className="mb-4 flex items-center gap-2 font-serif text-lg font-semibold text-[var(--silver)]">
          <TrendingUp className="h-5 w-5 text-[var(--gold)]" />
          Quiz performance & activity
        </h2>
        <Card>
          <ul className="space-y-3 text-sm text-[var(--muted)]">
            <li>
              {progress.completedLessons.length} sections completed across the catalog
            </li>
            <li>
              {Object.keys(progress.quizScores).length} quizzes attempted ·{" "}
              <span className="inline-flex items-center gap-1">
                <FlaskConical className="h-3.5 w-3.5 text-[var(--gold)]" />
                {labCount} labs completed
              </span>
            </li>
            <li>
              Daily XP today: {progress.dailyXpEarnedToday ?? 0} /{" "}
              {progress.dailyXpGoal ?? 150}
            </li>
          </ul>
          {quizEntries.length > 0 && (
            <div className="mt-4 border-t border-white/[0.06] pt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--gold)]">
                Recent quizzes
              </p>
              <ul className="space-y-2">
                {quizEntries.slice(0, 5).map(([id, q]) => (
                  <li key={id} className="flex justify-between text-xs">
                    <span className="truncate text-[var(--silver)]">{id}</span>
                    <span>
                      {q.score}/{q.total} · {formatDate(q.at)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card>
      </section>
    </div>
  );
}

function Stat({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: typeof Zap;
}) {
  return (
    <div className="rounded-lg border border-white/[0.06] bg-black/30 px-3 py-2 text-center">
      <Icon className="mx-auto h-3.5 w-3.5 text-[var(--gold)]" />
      <p className="mt-1 text-lg font-bold text-[var(--silver)]">{value}</p>
      <p className="text-[10px] uppercase tracking-wider text-[var(--muted)]">{label}</p>
    </div>
  );
}
