"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, ShieldAlert, ShieldCheck, Loader2 } from "lucide-react";
import { verifyCertificateClient } from "@/lib/certificates/client";
import type { CertificateVerificationResult } from "@/lib/certificates/types";
import { withBasePath } from "@/lib/basePath";
import { isCertificateIdFormat } from "@/lib/certificates/id";

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export function VerifyCertificateClient({
  certificateId,
}: {
  certificateId: string;
}) {
  const [result, setResult] = useState<CertificateVerificationResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const data = await verifyCertificateClient(certificateId);
        if (!cancelled) setResult(data);
      } catch {
        if (!cancelled) {
          setResult({ valid: false, error: "Verification service unavailable." });
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [certificateId]);

  const valid = result?.valid && result.certificate;
  const invalid = result && !result.valid;

  return (
    <div className="mx-auto max-w-xl space-y-8 py-12">
      <div className="text-center">
        <Link
          href={withBasePath("/")}
          className="text-sm text-[var(--muted)] hover:text-[var(--gold)]"
        >
          ← ForgEd
        </Link>
        <h1 className="mt-6 font-serif text-2xl font-bold text-[var(--silver)]">
          Certificate verification
        </h1>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Confirm authenticity of a ForgEd completion certificate.
        </p>
      </div>

      <div className="glass rounded-2xl border border-white/[0.08] p-8">
        {loading && (
          <p className="flex items-center justify-center gap-2 text-[var(--muted)]">
            <Loader2 className="h-5 w-5 animate-spin" />
            Verifying…
          </p>
        )}

        {!loading && !isCertificateIdFormat(certificateId) && (
          <div className="text-center">
            <ShieldAlert className="mx-auto h-12 w-12 text-red-400" />
            <p className="mt-4 text-lg font-semibold text-red-300">Invalid Certificate</p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              The ID format is not recognized.
            </p>
          </div>
        )}

        {!loading && isCertificateIdFormat(certificateId) && invalid && (
          <div className="text-center">
            <ShieldAlert className="mx-auto h-12 w-12 text-red-400" />
            <p className="mt-4 text-lg font-semibold text-red-300">Invalid Certificate</p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {result?.error ||
                "No matching certificate was found in the ForgEd registry."}
            </p>
            <p className="mt-4 font-mono text-xs text-[var(--muted)]">{certificateId}</p>
          </div>
        )}

        {!loading && valid && result.certificate && (
          <div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--success)]/15">
                <ShieldCheck className="h-8 w-8 text-[var(--success)]" />
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--success)]">
                Verified authentic
              </p>
              <CheckCircle2 className="mt-2 h-5 w-5 text-[var(--success)]" />
            </div>

            <dl className="mt-8 space-y-4 border-t border-white/[0.08] pt-6">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                  Student
                </dt>
                <dd className="mt-1 font-serif text-xl text-[var(--silver)]">
                  {result.certificate.studentName}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                  Course completed
                </dt>
                <dd className="mt-1 text-[var(--gold)]">{result.certificate.courseTitle}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                  Completion date
                </dt>
                <dd className="mt-1 text-[var(--silver)]">
                  {formatDate(result.certificate.completionDate)}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                  Hours completed
                </dt>
                <dd className="mt-1 text-[var(--silver)]">
                  {result.certificate.hoursCompleted} hours
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                  Certificate ID
                </dt>
                <dd className="mt-1 break-all font-mono text-xs text-[var(--muted)]">
                  {result.certificate.certificateId}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                  Status
                </dt>
                <dd className="mt-1 capitalize text-[var(--success)]">
                  {result.certificate.status}
                </dd>
              </div>
            </dl>
          </div>
        )}
      </div>
    </div>
  );
}
