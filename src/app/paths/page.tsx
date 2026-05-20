import Link from "next/link";
import { Route } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { LEARNING_DOMAINS } from "@/lib/ecosystem/domains";

export default function LearningPathsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--gold)]/20 bg-[var(--gold)]/5">
          <Route className="h-6 w-6 text-[var(--gold)]" />
        </span>
        <div>
          <h1 className="font-serif text-3xl font-bold text-[var(--silver)]">Learning paths</h1>
          <p className="mt-2 text-[var(--muted)]">
            Curated multi-course journeys across domains — built for professionals who need depth,
            not single lessons.
          </p>
        </div>
      </div>

      <Card>
        <p className="text-sm text-[var(--muted)]">
          Paths are rolling out with the expanded catalog. Start with any domain in the{" "}
          <Link href="/courses" className="text-[var(--gold)] hover:underline">
            course library
          </Link>{" "}
          — chapter quizzes, review assessments, and final exams are already live on textbooks.
        </p>
      </Card>

      <div className="space-y-3">
        {LEARNING_DOMAINS.filter((d) => d.status === "active").map((d) => (
          <Link
            key={d.id}
            href={`/courses?domain=${d.id}`}
            className="block rounded-xl border border-white/[0.06] bg-[#0a0a0a] px-4 py-3 transition hover:border-[var(--gold)]/25"
          >
            <p className="font-medium">{d.label} path</p>
            <p className="text-xs text-[var(--muted)]">{d.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
