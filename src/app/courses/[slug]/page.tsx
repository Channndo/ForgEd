import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Zap, CheckCircle2 } from "lucide-react";
import { getCourseBySlug } from "@/lib/courses/catalog";
import { getModulesForSlug, getAllCourseSlugs } from "@/lib/coursePaths";
import { Card } from "@/components/ui/Card";
import { CourseProgressClient } from "./CourseProgressClient";
import { CourseAssessmentActions } from "./CourseAssessmentActions";
import { FORGED_EDUCATION_NOTICE } from "@/lib/educationDisclaimer";

export function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const modules = getModulesForSlug(slug);

  return (
    <div className="space-y-8">
      <div>
        <Link href="/courses" className="text-sm text-[var(--muted)] hover:text-[var(--gold)]">
          ← Course library
        </Link>
        <span className="mt-4 inline-block rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/10 px-3 py-0.5 text-xs capitalize text-[var(--gold)]">
          {course.difficulty} · {modules.length}{" "}
          {course.textbookCourse ? "chapters" : "modules"}
        </span>
        <h1 className="mt-3 font-serif text-3xl font-bold text-[var(--silver)]">
          {course.title}
        </h1>
        <p className="mt-3 max-w-3xl text-[var(--muted)]">{course.description}</p>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-[var(--muted)]">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" /> {course.estimatedHours} hours
          </span>
          <span className="flex items-center gap-1">
            <Zap className="h-4 w-4 text-[var(--gold)]" /> {course.xpReward} XP
          </span>
        </div>

        <CourseProgressClient courseId={course.id} slug={slug} />

        <div className="mt-4 flex flex-wrap gap-2">
          {course.skills.map((s) => (
            <span
              key={s.id}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[var(--muted)]"
            >
              {s.name}
            </span>
          ))}
        </div>

        {course.textbookCourse && (
          <>
            <CourseAssessmentActions slug={slug} courseId={course.id} />
            <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
              Complete each chapter&apos;s 5-question quiz (instant feedback), then
              pass the 10-question course review, then the 20-question final exam
              (score at the end) to earn course completion on your profile.
            </p>
            <p className="mt-2 max-w-2xl text-xs text-[var(--muted)]/90">
              {FORGED_EDUCATION_NOTICE}
            </p>
          </>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <h2 className="font-semibold text-[var(--silver)]">Skills you will gain</h2>
          <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
            {course.skills.map((s) => (
              <li key={s.id} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                {s.name}
              </li>
            ))}
          </ul>
        </Card>

        <div className="lg:col-span-2">
          <h2 className="mb-4 font-serif text-xl font-semibold text-[var(--silver)]">
            {course.textbookCourse ? "Chapters" : "Modules"}
          </h2>
          <ol className="space-y-2">
            {modules.map((mod, i) => {
              return (
                <li key={mod.id}>
                  <Link
                    href={`/courses/${slug}/read#${mod.id}`}
                    className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-[#0a0a0a] p-4 transition hover:border-[var(--gold)]/25 hover:bg-white/[0.02]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--gold)]/15 text-sm font-bold text-[var(--gold)]">
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium">{mod.title}</p>
                      <p className="mt-1 text-sm text-[var(--muted)]">
                        {mod.lessons.length} sections · scroll in textbook
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
