"use client";

import { useState } from "react";
import { Award, Download, Loader2, Lock, Sparkles } from "lucide-react";
import { ForgedPathCertificateTemplate } from "@/components/forged-path/certificates/ForgedPathCertificateTemplate";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { downloadForgedPathCertificate } from "@/lib/forged-path/certificateClient";
import { EXECUTIVE_MASTERY_PROGRAM } from "@/lib/forged-path/programs";
import { isForgedPathCertificateUnlocked } from "@/lib/forged-path/progress";
import type { UserProgress } from "@/lib/types";

interface ForgedPathCertificateSectionProps {
  progress: UserProgress;
  studentName: string;
}

export function ForgedPathCertificateSection({
  progress,
  studentName,
}: ForgedPathCertificateSectionProps) {
  const unlocked = isForgedPathCertificateUnlocked(progress);
  const [showPreview, setShowPreview] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);
  const unlockedAt =
    progress.forgedPathProgress?.certificateUnlockedAt ?? new Date().toISOString();

  async function handleDownload() {
    setDownloading(true);
    setDownloadError(null);
    try {
      await downloadForgedPathCertificate(EXECUTIVE_MASTERY_PROGRAM.id);
    } catch (e) {
      setDownloadError(e instanceof Error ? e.message : "Download failed.");
    } finally {
      setDownloading(false);
    }
  }

  return (
    <Card className="border-[var(--gold)]/20 bg-black/30" glow>
      <div className="flex items-start gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
            unlocked
              ? "border-[var(--gold)]/30 bg-[var(--gold)]/10"
              : "border-white/[0.08] bg-white/[0.03]"
          }`}
        >
          {unlocked ? (
            <Award className="h-5 w-5 text-[var(--gold)]" />
          ) : (
            <Lock className="h-5 w-5 text-[var(--muted)]" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            Certificate
          </p>
          {unlocked ? (
            <>
              <h3 className="mt-1 font-serif text-xl font-bold text-[var(--silver)]">
                ForgEd Path Executive Mastery Certificate Unlocked
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Awarded to <span className="text-[var(--silver)]">{studentName}</span> for
                completing all 14 courses in the Executive Mastery Program.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button
                  variant="secondary"
                  onClick={() => setShowPreview((open) => !open)}
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  {showPreview ? "Hide certificate" : "View certificate"}
                </Button>
                <Button variant="forge" disabled={downloading} onClick={handleDownload}>
                  {downloading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Download className="mr-2 h-4 w-4" />
                  )}
                  Download PDF
                </Button>
              </div>
              {downloadError && (
                <p className="mt-2 text-sm text-red-400/90">{downloadError}</p>
              )}
            </>
          ) : (
            <>
              <h3 className="mt-1 font-serif text-xl font-bold text-[var(--silver)]">
                Certificate Locked – Complete all 14 courses.
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Verify all 14 official edX, Coursera, or university platform
                certificates to unlock your Executive Mastery certificate.
              </p>
            </>
          )}
        </div>
      </div>
      {unlocked && showPreview && (
        <div className="mt-6 overflow-x-auto pb-2">
          <ForgedPathCertificateTemplate
            data={{
              studentName,
              completionDate: unlockedAt,
              programId: EXECUTIVE_MASTERY_PROGRAM.id,
            }}
          />
        </div>
      )}
    </Card>
  );
}
