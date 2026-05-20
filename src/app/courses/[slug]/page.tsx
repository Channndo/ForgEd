import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Zap, CheckCircle2 } from "lucide-react";
import { getCourseBySlug } from "@/lib/courses/catalog";
import { getInsuranceModules } from "@/lib/courses/insurance";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CourseProgressClient } from "./CourseProgressClient";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const modules = course.textbookCourse
    ? getInsuranceModules()
    : course.modules;

  const firstModule = modules[0];
  const firstLesson = firstModule?.lessons[0];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Link href="/courses" className="text-sm text-[var(--muted)] hover:text-white">
        ← Course library
      </Link>

      <div className="mt-6">
        <span className="text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
          {course.difficulty} · {modules.length} modules
        </span>
        <h1 className="mt-2 text-3xl font-bold">{course.title}</h1>
        <p className="mt-4 text-[var(--muted)]">{course.description}</p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <span className="flex items-center gap-1 text-[var(--muted)]">
            <Clock className="h-4 w-4" /> {course.estimatedHours} hours
          </span>
          <span className="flex items-center gap-1 text-[var(--muted)]">
            <Zap className="h-4 w-4 text-[var(--forge)]" /> {course.xpReward} XP reward
          </span>
        </div>

        <CourseProgressClient courseId={course.id} />

        <div className="mt-6 flex flex-wrap gap-2">
          {course.skills.map((s) => (
            <span
              key={s.id}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"
            >
              {s.name}
            </span>
          ))}
        </div>

        {firstLesson && (
          <div className="mt-8">
            <Button
              href={`/courses/${slug}/learn/${firstModule.id}/${firstLesson.id}`}
              variant="forge"
            >
              Start course
            </Button>
            <Button
              href={`/courses/${slug}/quiz`}
              variant="secondary"
              className="ml-3"
            >
              Take quiz
            </Button>
          </div>
        )}
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Course overview</h2>
        <Card className="mt-4">
          <h3 className="font-medium">What you will learn</h3>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            {course.skills.map((s) => (
              <li key={s.id} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" />
                {s.name}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Modules</h2>
        <ol className="mt-4 space-y-3">
          {modules.map((mod, i) => {
            const lesson = mod.lessons[0];
            return (
              <li key={mod.id}>
                <Link
                  href={
                    lesson
                      ? `/courses/${slug}/learn/${mod.id}/${lesson.id}`
                      : "#"
                  }
                  className="glass block rounded-xl p-4 transition hover:border-[var(--accent)]/30"
                >
                  <span className="text-xs text-[var(--muted)]">Module {i + 1}</span>
                  <p className="font-medium">{mod.title}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {mod.lessons.length} lessons · {mod.keyConcepts.join(", ")}
                  </p>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
