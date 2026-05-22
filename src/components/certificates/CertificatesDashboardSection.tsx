"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Award, ExternalLink, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { useAuth } from "@/components/providers/AuthProvider";
import { listCertificatesClient } from "@/lib/certificates/client";
import { DownloadButton } from "@/components/certificates/DownloadButton";
import { MOCK_CERTIFICATES } from "@/lib/certificates/mockData";
import type { CertificateRecord } from "@/lib/certificates/types";
import { withBasePath } from "@/lib/basePath";
import { hasActiveSession } from "@/lib/forged-account/session";

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export function CertificatesDashboardSection() {
  const { user } = useAuth();
  const [certs, setCerts] = useState<CertificateRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!hasActiveSession()) return;
    setLoading(true);
    setError(null);
    try {
      const { certificates } = await listCertificatesClient();
      setCerts(certificates);
    } catch (e) {
      if (process.env.NODE_ENV === "development") {
        setCerts(MOCK_CERTIFICATES);
      } else {
        setError(e instanceof Error ? e.message : "Could not load certificates.");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (user) load();
  }, [user, load]);

  if (!user) {
    return (
      <Card>
        <h2 className="flex items-center gap-2 font-semibold text-[var(--silver)]">
          <Award className="h-5 w-5 text-[var(--gold)]" />
          Certificates
        </h2>
        <p className="mt-3 text-sm text-[var(--muted)]">
          <Link href={withBasePath("/login")} className="text-[var(--gold)] hover:underline">
            Sign in
          </Link>{" "}
          to earn downloadable certificates when you complete courses.
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 font-semibold text-[var(--silver)]">
          <Award className="h-5 w-5 text-[var(--gold)]" />
          Certificates
        </h2>
        {certs.length > 0 && (
          <span className="rounded-full bg-[var(--gold)]/10 px-3 py-0.5 text-xs text-[var(--gold)]">
            {certs.length} earned
          </span>
        )}
      </div>

      {loading && (
        <p className="mt-4 flex items-center gap-2 text-sm text-[var(--muted)]">
          <Loader2 className="h-4 w-4 animate-spin" /> Loading…
        </p>
      )}

      {error && (
        <p className="mt-4 text-sm text-red-300">{error}</p>
      )}

      {!loading && !error && certs.length === 0 && (
        <p className="mt-3 text-sm text-[var(--muted)]">
          Complete a course final exam to unlock your first certificate. Each includes a
          unique verification ID and PDF download.
        </p>
      )}

      <ul className="mt-4 space-y-3">
        {certs.map((c) => (
          <li
            key={c.certificateId}
            className="flex flex-col gap-3 rounded-xl border border-white/[0.08] bg-black/30 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="min-w-0">
              <p className="font-medium text-[var(--silver)]">{c.courseTitle}</p>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Completed {formatDate(c.completionDate)} · {c.hoursCompleted}h ·{" "}
                <span className="font-mono text-[var(--gold)]/80">
                  {c.certificateId.slice(0, 18)}…
                </span>
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              <DownloadButton
                certificateId={c.certificateId}
                label="PDF"
                variant="secondary"
              />
              <Link
                href={withBasePath(`/verify/${c.certificateId}`)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 px-4 py-2.5 text-xs text-[var(--muted)] hover:text-[var(--gold)]"
              >
                Verify <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
