"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Share2, X } from "lucide-react";
import Link from "next/link";
import { CertificateTemplate } from "@/components/certificates/CertificateTemplate";
import { CertificateUnlockEffects } from "@/components/certificates/CertificateUnlockEffects";
import { DownloadButton } from "@/components/certificates/DownloadButton";
import {
  buildLinkedInShareUrl,
  FOUNDER_NAME,
} from "@/lib/certificates/constants";
import type { CertificateRecord } from "@/lib/certificates/types";
import { withBasePath } from "@/lib/basePath";

export function CertificateModal({
  open,
  onClose,
  certificate,
  courseComplete,
  error,
  issuing,
}: {
  open: boolean;
  onClose: () => void;
  certificate: CertificateRecord | null;
  /** Shown when final exam passed and course marked 100% */
  courseComplete?: boolean;
  error?: string | null;
  issuing?: boolean;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const renderData = certificate
    ? {
    certificateId: certificate.certificateId,
    studentName: certificate.studentName,
    courseTitle: certificate.courseTitle,
    completionDate: certificate.completionDate,
    hoursCompleted: certificate.hoursCompleted,
    verificationUrl: certificate.verificationUrl,
    instructorSignature: certificate.instructorSignature || FOUNDER_NAME,
      }
    : null;

  async function handleShare() {
    if (!certificate) return;
    const text = `I completed ${certificate.courseTitle} on ForgEd. Verify: ${certificate.verificationUrl}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "ForgEd Certificate",
          text,
          url: certificate.verificationUrl,
        });
        return;
      } catch {
        /* fallback */
      }
    }
    await navigator.clipboard.writeText(text);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close"
          />
          <motion.div
            ref={dialogRef}
            className="relative max-h-[96vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-[var(--gold)]/25 bg-[#0a0a0a] shadow-[0_0_80px_rgba(201,169,98,0.15)] sm:rounded-2xl"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
          >
            <CertificateUnlockEffects />

            <div className="relative border-b border-[var(--gold)]/20 px-5 py-5 sm:px-8">
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 rounded-lg p-2 text-[var(--muted)] hover:bg-white/5 hover:text-[var(--silver)]"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="flex items-start gap-3 pr-10">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--gold)]/15">
                  <Award className="h-6 w-6 text-[var(--gold)]" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]">
                    Congratulations
                  </p>
                  <h2
                    id="certificate-modal-title"
                    className="mt-1 font-serif text-xl font-bold text-[var(--silver)] sm:text-2xl"
                  >
                    {courseComplete
                      ? "Course complete — your certificate is ready"
                      : "Your certificate is ready"}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    {error ? (
                      error
                    ) : courseComplete && certificate ? (
                      <>
                        You passed the final exam for{" "}
                        <strong className="text-[var(--silver)]">
                          {certificate.courseTitle}
                        </strong>
                        . Download your official ForgEd certificate or share your
                        verification link.
                      </>
                    ) : (
                      <>Download or share your ForgEd certificate of completion.</>
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative px-4 py-6 sm:px-8">
              {issuing && (
                <p className="mb-4 text-center text-sm text-[var(--muted)]">
                  Generating your certificate…
                </p>
              )}

              {renderData && (
                <div className="overflow-x-auto pb-2">
                  <CertificateTemplate data={renderData} scale={0.92} />
                </div>
              )}

              {certificate && (
              <div className="mt-6 flex flex-wrap gap-3">
                <DownloadButton certificateId={certificate.certificateId} />
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-[var(--silver)] transition hover:bg-white/10"
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
                <a
                  href={buildLinkedInShareUrl({
                    courseTitle: certificate.courseTitle,
                    verificationUrl: certificate.verificationUrl,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#0a66c2]/40 bg-[#0a66c2]/10 px-5 py-2.5 text-sm font-medium text-[#70b5f9] transition hover:bg-[#0a66c2]/20"
                >
                  LinkedIn
                </a>
              </div>
              )}

              {certificate && (
              <p className="mt-4 text-center text-xs text-[var(--muted)]">
                Verification ID:{" "}
                <Link
                  href={withBasePath(`/verify/${certificate.certificateId}`)}
                  className="font-mono text-[var(--gold)] hover:underline"
                >
                  {certificate.certificateId}
                </Link>
              </p>
              )}

              {error && !certificate && (
                <div className="mt-4 flex justify-center">
                  <Link
                    href={withBasePath("/login")}
                    className="rounded-xl bg-[var(--gold)] px-5 py-2.5 text-sm font-semibold text-[#050505]"
                  >
                    Sign in to save certificate
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
