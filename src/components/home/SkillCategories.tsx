import Link from "next/link";
import { CATEGORY_META } from "@/lib/courses/catalog";
import type { CourseCategory } from "@/lib/types";

const ORDER: CourseCategory[] = [
  "insurance",
  "ai",
  "cybersecurity",
  "it",
  "automotive",
  "financial",
  "communication",
  "business",
  "technology",
];

export function SkillCategories() {
  return (
    <section className="px-4 py-16 sm:px-6 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-2xl font-bold sm:text-3xl text-[var(--silver)]">Skill categories</h2>
        <p className="mt-2 text-[var(--muted)]">
          Nine learning paths — expandable into a full education ecosystem.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ORDER.map((cat) => {
            const meta = CATEGORY_META[cat];
            return (
              <Link
                key={cat}
                href={`/courses?category=${cat}`}
                className={`glass rounded-2xl p-5 bg-gradient-to-br ${meta.color} transition hover:border-[var(--gold)]/30 border border-transparent`}
              >
                <h3 className="font-semibold">{meta.label}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{meta.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
