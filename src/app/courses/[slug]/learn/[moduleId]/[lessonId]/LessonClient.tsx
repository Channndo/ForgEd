"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { getCourseBySlug } from "@/lib/courses/catalog";
import { getModulesForSlug } from "@/lib/coursePaths";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  completeLesson,
  markInsuranceChapter,
  setCourseProgress,
} from "@/lib/progress";
import { useProgress } from "@/components/providers/ProgressProvider";
import { TEXTBOOK_CHAPTER_COUNT } from "@/lib/courses/insurance/textbook";
import { KodaHelpCard } from "@/components/koda/KodaHelpCard";
import { KodaFab } from "@/components/koda/KodaFab";
import { useKodaPanel } from "@/components/koda/KodaProvider";

export default function LessonClient() {
  const params = useParams();
  const router = useRouter();
  const { refresh, progress, xpBar } = useProgress();
  const { setLearningContext } = useKodaPanel();
  const slug = params.slug as string;
  const moduleId = params.moduleId as string;
  const lessonId = params.lessonId as string;

  const course = getCourseBySlug(slug);
  const modules = useMemo(() => getModulesForSlug(slug), [slug]);

  const mod = modules.find((m) => m.id === moduleId);
  const lessonIndex = mod?.lessons.findIndex((l) => l.id === lessonId) ?? -1;
  const lesson = mod?.lessons[lessonIndex];

  if (!course || !mod || !lesson) {
    return (
      <div className="py-20 text-center">
        <p>Lesson not found.</p>
        <Button href="/courses" className="mt-4">
          Back to courses
        </Button>
      </div>
    );
  }

  const nextLesson = mod.lessons[lessonIndex + 1];
  const moduleIndex = modules.findIndex((m) => m.id === moduleId);
  const nextModule = modules[moduleIndex + 1];
  const chapterNum = moduleIndex + 1;

  const kodaContext = useMemo(
    () => ({
      courseSlug: slug,
      courseTitle: course.title,
      moduleId,
      moduleTitle: mod.title,
      lessonId,
      lessonTitle: lesson.title,
      lessonExcerpt: lesson.content?.slice(0, 3000),
      skillLevel: "beginner" as const,
      streak: progress.streak,
      xp: progress.xp,
      level: xpBar.level,
    }),
    [slug, course, moduleId, mod, lessonId, lesson, progress, xpBar]
  );

  useEffect(() => {
    setLearningContext(kodaContext);
  }, [kodaContext, setLearningContext]);

  function handleComplete() {
    if (!course || !mod) return;
    completeLesson(lessonId, 20);
    if (course.textbookCourse) {
      markInsuranceChapter(chapterNum);
      const pct = Math.min(
        99,
        Math.round(
          ((moduleIndex * 3 + lessonIndex + 1) / (TEXTBOOK_CHAPTER_COUNT * 3)) * 100
        )
      );
      setCourseProgress(course.id, pct);
    } else {
      const pct = Math.round(
        ((moduleIndex + (lessonIndex + 1) / mod.lessons.length) / modules.length) * 100
      );
      setCourseProgress(course.id, Math.min(99, pct));
    }
    refresh();

    if (nextLesson) {
      router.push(`/courses/${slug}/learn/${moduleId}/${nextLesson.id}`);
    } else if (nextModule?.lessons[0]) {
      router.push(
        `/courses/${slug}/learn/${nextModule.id}/${nextModule.lessons[0].id}`
      );
    } else {
      router.push(`/courses/${slug}/quiz`);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <Link
          href={`/courses/${slug}`}
          className="text-sm text-[var(--muted)] hover:text-[var(--gold)]"
        >
          ← {course.title}
        </Link>
        <p className="mt-4 text-xs text-[var(--muted)]">{mod.title}</p>
        <h1 className="mt-2 font-serif text-2xl font-bold text-[var(--silver)]">
          {lesson.title}
        </h1>
      </div>

      <KodaHelpCard context={kodaContext} />

      <Card>
        <div className="prose prose-invert max-w-none text-sm leading-relaxed whitespace-pre-wrap text-[var(--foreground)]">
          {lesson.content}
        </div>
        {lesson.example && (
          <div className="mt-6 rounded-xl border border-[var(--gold)]/20 bg-[var(--gold)]/5 p-4 text-sm text-[var(--muted)]">
            <p className="font-medium text-[var(--silver)]">Real-world example</p>
            <p className="mt-2">{lesson.example}</p>
          </div>
        )}
      </Card>

      {mod.keyConcepts.length > 0 && (
        <div>
          <p className="text-sm font-medium text-[var(--silver)]">Key concepts</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {mod.keyConcepts.map((k) => (
              <li
                key={k}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-[var(--muted)]"
              >
                {k}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06] pt-6">
        <Button href={`/courses/${slug}`} variant="ghost">
          Save & exit
        </Button>
        <div className="flex flex-wrap items-center gap-3">
          <KodaFab />
          <Button onClick={handleComplete} variant="forge">
            {nextLesson || nextModule ? "Complete & continue" : "Finish → Quiz"}
          </Button>
        </div>
      </div>
    </div>
  );
}
