"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Clock, Zap } from "lucide-react";
import { COURSES, CATEGORY_META } from "@/lib/courses/catalog";
import type { CourseCategory } from "@/lib/types";
import { Card } from "@/components/ui/Card";

function CoursesContent() {
  const params = useSearchParams();
  const category = params.get("category") as CourseCategory | null;
  const filtered = category
    ? COURSES.filter((c) => c.category === category)
    : COURSES;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold">Course library</h1>
      <p className="mt-2 text-[var(--muted)]">
        {category
          ? CATEGORY_META[category]?.label ?? category
          : "All courses"}{" "}
        — free, self-paced, XP-enabled.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course) => (
          <Link key={course.id} href={`/courses/${course.slug}`}>
            <Card className="h-full hover:border-[var(--accent)]/30 transition-colors">
              <span className="rounded-md bg-white/5 px-2 py-0.5 text-xs capitalize text-[var(--muted)]">
                {CATEGORY_META[course.category].label}
              </span>
              <h2 className="mt-3 text-lg font-semibold">{course.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-[var(--muted)]">
                {course.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-[var(--muted)]">
                <span className="capitalize">{course.difficulty}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {course.estimatedHours}h
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="h-3.5 w-3.5 text-[var(--forge)]" /> {course.xpReward} XP
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
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
