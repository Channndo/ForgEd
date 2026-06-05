"use client";

import { DollarSign, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { FORGED_PATH_PLATFORMS } from "@/lib/forged-path/platforms";

export function ForgedPathExternalCostNotice() {
  const platforms = Object.values(FORGED_PATH_PLATFORMS);

  return (
    <Card className="border-[var(--gold)]/20 bg-[var(--gold)]/5">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--gold)]/25 bg-[var(--gold)]/10">
          <DollarSign className="h-5 w-5 text-[var(--gold)]" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            External course costs
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
            ForgEd Path is free to follow on ForgEd. The university courses below are hosted by
            third-party providers — <span className="text-[var(--silver)]">edX</span>,{" "}
            <span className="text-[var(--silver)]">Coursera</span>,{" "}
            <span className="text-[var(--silver)]">Stanford Online</span>, and{" "}
            <span className="text-[var(--silver)]">Princeton Online</span> — which may charge
            fees for certificates, credentials, or full access.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
            <span className="font-medium text-[var(--silver)]">Financial aid is available</span> on
            many edX and Coursera courses. Apply from the course enrollment page before paying —
            you can often audit for free while your aid application is reviewed.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
            <span className="font-medium text-[var(--silver)]">Verification required:</span> ForgEd
            only counts a course after you submit the official certificate verification link from
            edX, Coursera, or the hosting university platform — not a self-reported checkbox.
          </p>

          <div className="mt-4 space-y-3">
            {platforms.map((platform) => (
              <div
                key={platform.id}
                className="rounded-lg border border-white/[0.06] bg-black/20 px-3 py-2.5 sm:px-4"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--silver)]">
                  {platform.name}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">
                  {platform.costNote}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]">
                  {platform.financialAidNote}
                </p>
                <a
                  href={platform.financialAidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[var(--gold)] hover:underline"
                >
                  {platform.financialAidLabel}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
