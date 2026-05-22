"use client";

import Link from "next/link";
import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import type { LearningPath } from "@/lib/paths/learningPaths";
import { resolveCatalogSlug } from "@/lib/paths/learningPaths";
import { ExamEngine } from "@/components/quiz/ExamEngine";
import { pickRandomQuestions } from "@/lib/courses/textbook/quizRegistry";
import { markPathMasteryPassed } from "@/lib/paths/pathProgress";
import { useProgress } from "@/components/providers/ProgressProvider";
import { isPassingScore } from "@/lib/quizTypes";
import { useQuizAttempt } from "@/hooks/useQuizAttempt";

export default function PathExamClient({ path }: { path: LearningPath }) {
  const router = useRouter();
  const { refresh } = useProgress();

  const pick = useCallback(() => {
    const pool = path.courses.flatMap((c) =>
      pickRandomQuestions(resolveCatalogSlug(c.slug), 4)
    );
    return pool.slice(0, path.masteryExamQuestions);
  }, [path]);

  const { questions, attemptKey, newAttempt } = useQuizAttempt(pick);

  const pathKey = useMemo(
    () => path.courses.map((c) => c.slug).join(","),
    [path.courses]
  );

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <Link href={`/paths/${path.id}`} className="text-sm text-[var(--gold)] hover:underline">
          ← Back to {path.title}
        </Link>
        <h1 className="mt-2 font-serif text-2xl font-bold text-[var(--silver)]">
          {path.title} — Mastery Exam
        </h1>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Pass to earn the {path.badgeName}. General path knowledge — not legal or financial advice.
        </p>
      </div>
      <ExamEngine
        key={`${pathKey}-${attemptKey}`}
        title={`${path.title} Mastery`}
        questions={questions}
        onNewAttempt={newAttempt}
        onComplete={(score, total) => {
          if (isPassingScore(score, total)) {
            markPathMasteryPassed(path.id);
            refresh();
          }
          router.push(`/paths/${path.id}`);
        }}
      />
    </div>
  );
}
