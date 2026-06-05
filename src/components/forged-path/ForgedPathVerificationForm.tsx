"use client";

import { useState } from "react";
import { CheckCircle2, ExternalLink, Loader2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { ForgedPathCourse } from "@/lib/forged-path/curriculum";
import { getPlatformInfo } from "@/lib/forged-path/platforms";
import { submitForgedPathVerification } from "@/lib/forged-path/progress";
import type { ForgedPathCourseVerification } from "@/lib/forged-path/verification";
import { PLATFORM_CERTIFICATE_INSTRUCTIONS } from "@/lib/forged-path/verification";
import { verifyForgedPathCertificateClient } from "@/lib/forged-path/verificationClient";
import type { UserProgress } from "@/lib/types";

interface ForgedPathVerificationFormProps {
  course: ForgedPathCourse;
  progress: UserProgress;
  verification?: ForgedPathCourseVerification;
  onProgressChange: (data: UserProgress) => void;
  canVerify: boolean;
}

export function ForgedPathVerificationForm({
  course,
  progress,
  verification,
  onProgressChange,
  canVerify,
}: ForgedPathVerificationFormProps) {
  const [url, setUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const platform = getPlatformInfo(course.platform);
  const instructions = PLATFORM_CERTIFICATE_INSTRUCTIONS[course.platform];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canVerify) return;
    setSubmitting(true);
    setError(null);
    try {
      const result = await verifyForgedPathCertificateClient({
        courseId: course.id,
        verificationUrl: url,
      });
      if (!result.ok || !result.verification) {
        setError(result.error || "Could not verify certificate.");
        return;
      }
      onProgressChange(submitForgedPathVerification(progress, result.verification));
      setUrl("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Verification failed.");
    } finally {
      setSubmitting(false);
    }
  }

  if (verification) {
    return (
      <div className="mt-3 rounded-lg border border-[var(--gold)]/25 bg-[var(--gold)]/5 px-3 py-3">
        <div className="flex items-start gap-2">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--gold)]">
              Verified completion
            </p>
            <p className="mt-1 text-xs text-[var(--muted)]">
              {platform.name} certificate confirmed on{" "}
              {new Date(verification.verifiedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <a
              href={verification.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[var(--gold)] hover:underline"
            >
              View certificate
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--gold)]" />
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3 rounded-lg border border-white/[0.08] bg-black/20 px-3 py-3">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--gold)]">
        Certificate verification required
      </p>
      <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]">
        ForgEd only counts this course after you submit your official{" "}
        <span className="text-[var(--silver)]">{platform.name}</span> certificate
        verification link — not a self-reported checkbox.
      </p>
      <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
        {instructions.howToFind}
      </p>
      <label className="mt-3 block">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
          Certificate verification URL
        </span>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder={instructions.urlHint}
          disabled={!canVerify || submitting}
          className="mt-1.5 w-full rounded-lg border border-white/[0.1] bg-white/[0.03] px-3 py-2 text-sm text-[var(--silver)] placeholder:text-[var(--muted)]/50 focus:border-[var(--gold)]/40 focus:outline-none disabled:opacity-50"
        />
      </label>
      {error && <p className="mt-2 text-xs text-red-400/90">{error}</p>}
      <Button
        type="submit"
        variant="secondary"
        className="mt-3"
        disabled={!canVerify || submitting || !url.trim()}
      >
        {submitting ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <ShieldCheck className="mr-2 h-4 w-4" />
        )}
        Verify certificate
      </Button>
      {!canVerify && (
        <p className="mt-2 text-xs text-[var(--muted)]">Sign in to submit verification.</p>
      )}
    </form>
  );
}
