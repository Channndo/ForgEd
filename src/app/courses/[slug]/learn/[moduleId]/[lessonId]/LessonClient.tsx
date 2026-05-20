"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getCourseBySlug } from "@/lib/courses/catalog";
import { findTextbookSection } from "@/lib/courses/textbook/registry";

/** Textbook courses use the continuous scroll reader — redirect old lesson URLs. */
export default function LessonClient() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const moduleId = params.moduleId as string;
  const lessonId = params.lessonId as string;
  const course = getCourseBySlug(slug);

  useEffect(() => {
    if (!course?.textbookCourse) return;

    const match = findTextbookSection(slug, moduleId, lessonId);
    const hash = match?.section.id ?? moduleId;
    router.replace(`/courses/${slug}/read#${hash}`);
  }, [course, slug, moduleId, lessonId, router]);

  if (!course) {
    return <p className="py-20 text-center text-[var(--muted)]">Course not found.</p>;
  }

  if (course.textbookCourse) {
    return (
      <p className="py-20 text-center text-sm text-[var(--muted)]">
        Opening textbook…
      </p>
    );
  }

  return (
    <p className="py-20 text-center text-[var(--muted)]">
      This course uses the textbook reader.{" "}
      <a href={`/courses/${slug}/read`} className="text-[var(--gold)] hover:underline">
        Open textbook
      </a>
    </p>
  );
}
