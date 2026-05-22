import { Card } from "@/components/ui/Card";

export function Roadmap() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Card glow>
          <h2 className="text-2xl font-bold">Community & roadmap</h2>
          <p className="mt-4 text-[var(--muted)]">
            ForgEd launches with structured courses, quizzes, and progression systems. Coming next: live AI tutoring, peer study groups, employer pathways, and deeper Omnistrata integrations.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-[var(--muted)]">
            <li>· AI learning assistant (full integration)</li>
            <li>· Resume-linked skill credentials</li>
            <li>· Community forums & mentorship</li>
            <li>· Employer-aligned learning pathways (educational, not professional licensure)</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}
