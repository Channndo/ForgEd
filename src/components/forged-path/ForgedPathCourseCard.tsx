"use client";

import { CheckCircle2, Circle, ExternalLink } from "lucide-react";
import type { ForgedPathCourse } from "@/lib/forged-path/curriculum";

interface ForgedPathCourseCardProps {
  course: ForgedPathCourse;
  completed: boolean;
  onToggle: () => void;
  disabled?: boolean;
}

export function ForgedPathCourseCard({
  course,
  completed,
  onToggle,
  disabled,
}: ForgedPathCourseCardProps) {
  return (
    <article className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 sm:p-5">
      <div className="flex items-start gap-3">
        <button
          type="button"
          onClick={onToggle}
          disabled={disabled}
          aria-label={
            completed
              ? `Mark ${course.title} as incomplete`
              : `Mark ${course.title} as complete`
          }
          className={`mt-0.5 shrink-0 transition-colors ${
            disabled ? "cursor-not-allowed opacity-50" : "hover:text-[var(--gold)]"
          }`}
        >
          {completed ? (
            <CheckCircle2 className="h-5 w-5 text-[var(--gold)]" />
          ) : (
            <Circle className="h-5 w-5 text-[var(--muted)]" />
          )}
        </button>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--gold)]">
              {course.number}. {course.institution}
            </span>
          </div>
          <h3 className="mt-1 font-serif text-lg font-semibold text-[var(--silver)]">
            {course.title}
          </h3>
          <a
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-sm text-[var(--gold)]/90 transition hover:text-[var(--gold)]"
          >
            View course
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <div className="mt-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
              Purpose
            </p>
            <ul className="mt-1.5 flex flex-wrap gap-2">
              {course.purposes.map((purpose) => (
                <li
                  key={purpose}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-xs text-[var(--muted)]"
                >
                  {purpose}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
