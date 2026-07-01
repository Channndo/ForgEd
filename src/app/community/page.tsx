"use client";

import Link from "next/link";
import { Swords, Users } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

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
            Enter ForgEd Realm — a medieval world to team up or go against other players.
          </p>
        </div>
      </div>

      <Card className="border-[var(--gold)]/20 bg-gradient-to-br from-[var(--gold)]/5 to-transparent" glow>
        <div className="flex items-center gap-2 text-[var(--gold)]">
          <Swords className="h-5 w-5" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">ForgEd Realm</span>
        </div>
        <h2 className="mt-3 font-serif text-xl font-bold text-[var(--silver)]">
          Ashford, Mindspire & The Marches
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
          Click or tap to walk RuneScape-style. Complete the Ashford tutorial, then travel via
          golden portals to Mindspire (academy tomes) or The Marches (wilderness goblins). Works on
          desktop and mobile.
        </p>
        <Link href="/realm" className="mt-5 inline-block">
          <Button variant="forge">Enter ForgEd Realm</Button>
        </Link>
      </Card>

      <Card>
        <p className="text-sm text-[var(--muted)]">
          Study and verify courses on{" "}
          <Link href="/forged-path" className="text-[var(--gold)] hover:underline">
            ForgEd Path
          </Link>{" "}
          — progress will link to the full realm in future updates.
        </p>
      </Card>
    </div>
  );
}
