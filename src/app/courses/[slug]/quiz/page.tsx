"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { getCourseBySlug } from "@/lib/courses/catalog";
import { pickQuizSession } from "@/lib/courses/insurance/quizUtils";
import { INSURANCE_QUIZ_BANK } from "@/lib/courses/insurance/quizBank";
import { TEXTBOOK_CHAPTER_COUNT } from "@/lib/courses/insurance/textbook";
import { QuizEngine } from "@/components/quiz/QuizEngine";
import { Button } from "@/components/ui/Button";
import {
  completeCourse,
  recordQuiz,
} from "@/lib/progress";
import { useProgress } from "@/components/providers/ProgressProvider";
import { isPassingScore } from "@/lib/quizTypes";
import type { QuizQuestion } from "@/lib/quizTypes";

function shuffleGeneric<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const PLACEHOLDER_QUESTIONS: QuizQuestion[] = [
  {
    id: "p1",
    question: "What is the best first step when learning a new skill on ForgEd?",
    options: [
      "Skip all lessons and only take quizzes",
      "Work through modules in order and apply key concepts",
      "Memorize definitions without examples",
      "Avoid practice until the final exam",
    ],
    correctIndex: 1,
    explanation: "Structured modules with real-world examples build durable skills.",
  },
  {
    id: "p2",
    question: "ForgEd uses XP and levels primarily to:",
    options: [
      "Replace formal certification",
      "Motivate consistent learning and track progress",
      "Charge users per level",
      "Hide course content behind paywalls",
    ],
    correctIndex: 1,
    explanation: "Gamification supports habit-building while keeping content free.",
  },
  {
    id: "p3",
    question: "To pass a ForgEd quiz you generally need:",
    options: ["100% on every attempt", "70% or higher", "50% or higher", "No minimum score"],
    correctIndex: 1,
    explanation: "A 70% pass threshold balances rigor with encouragement to retry.",
  },
];

export default function QuizPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { refresh, progress, xpBar } = useProgress();
  const course = getCourseBySlug(slug);

  const kodaContext = useMemo(
    () => ({
      courseSlug: slug,
      courseTitle: course?.title,
      skillLevel: "beginner" as const,
      streak: progress.streak,
      xp: progress.xp,
      level: xpBar.level,
      completedCourses: progress.completedCourses,
    }),
    [slug, course, progress, xpBar]
  );

  const questions = useMemo(() => {
    if (!course) return [];
    if (course.slug === "insurance-fundamentals") {
      return pickQuizSession(TEXTBOOK_CHAPTER_COUNT);
    }
    return shuffleGeneric(PLACEHOLDER_QUESTIONS);
  }, [course]);

  if (!course) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <p>Course not found.</p>
      </div>
    );
  }

  function handleComplete(score: number, total: number) {
    if (!course) return;
    recordQuiz(`${course.id}-quiz`, score, total, course.xpReward / 4);
    if (isPassingScore(score, total)) {
      completeCourse(course.id, course.xpReward);
    }
    refresh();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link
        href={`/courses/${slug}`}
        className="text-sm text-[var(--muted)] hover:text-white"
      >
        ← {course.title}
      </Link>
      <h1 className="mt-6 text-2xl font-bold">Course quiz</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        {course.slug === "insurance-fundamentals"
          ? `${questions.length} questions — one per chapter, randomized order, instant feedback.`
          : `${questions.length} questions — randomized with retry support.`}
      </p>

      <div className="mt-8">
        <QuizEngine
          questions={questions}
          title={`${course.title} Quiz`}
          onComplete={handleComplete}
          kodaContext={kodaContext}
        />
      </div>

      {course.slug === "insurance-fundamentals" && (
        <p className="mt-6 text-center text-xs text-[var(--muted)]">
          Question bank: {INSURANCE_QUIZ_BANK.length} items from expanded Insurance Fundamentals curriculum.
        </p>
      )}
    </div>
  );
}
