"use client";

import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import {
  CERTIFICATE_TAGLINE,
  FOUNDER_NAME,
  FOUNDER_SIGNATURE,
  FOUNDER_TITLE,
} from "@/lib/certificates/constants";
import type { CertificateRenderData } from "@/lib/certificates/types";
import { VerificationBadge } from "@/components/certificates/VerificationBadge";

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

/**
 * HTML preview of the certificate — matches PDF layout for modal preview.
 */
export function CertificateTemplate({
  data,
  scale = 1,
  showQr = true,
}: {
  data: CertificateRenderData;
  scale?: number;
  showQr?: boolean;
}) {
  return (
    <div
      className="certificate-preview-root relative mx-auto overflow-hidden rounded-lg shadow-2xl"
      style={{
        transform: scale !== 1 ? `scale(${scale})` : undefined,
        transformOrigin: "top center",
        width: "100%",
        maxWidth: 720,
        aspectRatio: "792 / 612",
      }}
    >
      <div className="absolute inset-0 bg-[#0c0c0d]" />
      <div className="absolute inset-3 rounded-sm bg-[#121214]" />
      <div className="pointer-events-none absolute inset-5 rounded-sm border border-[#c9a962]/60" />
      <div className="pointer-events-none absolute inset-7 rounded-sm border border-[#e8d5a3]/30" />

      <div className="relative flex h-full flex-col px-6 py-5 text-center sm:px-10 sm:py-7">
        <div className="flex flex-col items-center">
          <Image
            src={withBasePath("/forged-wordmark.png")}
            alt="ForgEd"
            width={200}
            height={80}
            className="h-12 w-auto object-contain sm:h-14"
            priority
          />
          <p className="mt-1 font-mono text-[8px] tracking-[0.28em] text-[var(--muted)] sm:text-[9px]">
            — {CERTIFICATE_TAGLINE.toUpperCase()} —
          </p>
        </div>

        <h2 className="mt-4 font-serif text-lg font-bold tracking-wide text-[var(--gold)] sm:text-xl">
          CERTIFICATE OF COMPLETION
        </h2>
        <p className="mt-3 font-mono text-[8px] tracking-[0.2em] text-[var(--muted)] sm:text-[9px]">
          THIS CERTIFIES THAT
        </p>

        <p
          className="mt-2 font-serif text-2xl italic text-[var(--silver)] sm:text-3xl md:text-4xl"
          style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
        >
          {data.studentName}
        </p>
        <div className="mx-auto mt-2 h-px w-48 max-w-[70%] bg-[var(--muted)]/40" />

        <p className="mt-4 font-mono text-[8px] tracking-[0.18em] text-[var(--muted)]">
          HAS SUCCESSFULLY COMPLETED THE
        </p>
        <p className="mt-2 font-serif text-base font-bold text-[var(--gold)] sm:text-lg">
          {data.courseTitle}
        </p>
        <p className="mt-2 text-[9px] text-[var(--muted)]">
          AND HAS DEMONSTRATED DEDICATION AND PROFICIENCY · {data.hoursCompleted}{" "}
          HOURS
        </p>

        <div className="mt-auto grid grid-cols-3 items-end gap-2 pt-6 text-left sm:gap-4">
          <div>
            <p className="font-serif text-sm italic text-[var(--gold)]">
              {data.instructorSignature || FOUNDER_SIGNATURE}
            </p>
            <div className="mt-1 h-px w-full bg-[var(--gold)]/50" />
            <p className="mt-1 text-xs font-semibold tracking-wide text-[var(--silver)]">
              {FOUNDER_NAME}
            </p>
            <p className="mt-0.5 font-mono text-[7px] uppercase tracking-wider text-[var(--muted)]">
              {FOUNDER_TITLE}
            </p>
          </div>

          <div className="flex flex-col items-center">
            {showQr && (
              <VerificationBadge
                certificateId={data.certificateId}
                verificationUrl={data.verificationUrl}
                size={64}
              />
            )}
          </div>

          <div className="text-right">
            <p className="text-xs text-[var(--silver)]">
              {formatDate(data.completionDate)}
            </p>
            <div className="mt-1 ml-auto h-px w-full bg-[var(--gold)]/50" />
            <p className="mt-1 font-mono text-[7px] uppercase tracking-wider text-[var(--muted)]">
              DATE OF COMPLETION
            </p>
          </div>
        </div>

        <p className="mt-3 font-mono text-[7px] text-[var(--muted)]/80">
          ID: {data.certificateId}
        </p>
      </div>
    </div>
  );
}
