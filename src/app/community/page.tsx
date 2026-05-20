import Link from "next/link";
import { Users } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--gold)]/20 bg-[var(--gold)]/5">
          <Users className="h-6 w-6 text-[var(--gold)]" />
        </span>
        <div>
          <h1 className="font-serif text-3xl font-bold text-[var(--silver)]">Community</h1>
          <p className="mt-2 text-[var(--muted)]">
            Study groups, cohorts, and peer accountability — launching as the platform scales.
          </p>
        </div>
      </div>

      <Card>
        <p className="text-sm text-[var(--muted)]">
          For now, use your dashboard streak and course progress to stay accountable. Community
          features will connect learners across all twelve domains without favoring any single
          industry.
        </p>
        <Link href="/dashboard" className="mt-4 inline-block text-sm text-[var(--gold)] hover:underline">
          Back to dashboard →
        </Link>
      </Card>
    </div>
  );
}
