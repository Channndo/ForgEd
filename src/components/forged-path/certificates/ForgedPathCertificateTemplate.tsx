"use client";

import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import type { ForgedPathCertificateRenderData } from "@/lib/forged-path/certificateTypes";
import { getForgedPathProgram } from "@/lib/forged-path/programs";

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
 * ForgEd Path program certificate — matches the Executive Mastery design.
 * Recipient name is injected from user credentials at render time.
 */
export function ForgedPathCertificateTemplate({
  data,
  scale = 1,
}: {
  data: ForgedPathCertificateRenderData;
  scale?: number;
}) {
  const program = getForgedPathProgram(data.programId);
  if (!program) return null;

  const cert = program.certificate;

  return (
    <div
      className="forged-path-certificate-root relative mx-auto overflow-hidden rounded-sm shadow-2xl"
      style={{
        transform: scale !== 1 ? `scale(${scale})` : undefined,
        transformOrigin: "top center",
        width: "100%",
        maxWidth: 960,
        aspectRatio: "11 / 8.5",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 20%, rgba(212,175,55,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(212,175,55,0.05) 0%, transparent 45%)",
        }}
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgNDBoNDBWNHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-40" />

      {/* Double border */}
      <div className="pointer-events-none absolute inset-3 rounded-sm border border-[#c9a962]/70" />
      <div className="pointer-events-none absolute inset-5 rounded-sm border border-[#e8d5a3]/25" />

      {/* Corner flourishes */}
      <div className="pointer-events-none absolute left-5 top-5 h-4 w-4 border-l border-t border-[#c9a962]" />
      <div className="pointer-events-none absolute right-5 top-5 h-4 w-4 border-r border-t border-[#c9a962]" />
      <div className="pointer-events-none absolute bottom-5 left-5 h-4 w-4 border-b border-l border-[#c9a962]" />
      <div className="pointer-events-none absolute bottom-5 right-5 h-4 w-4 border-b border-r border-[#c9a962]" />

      {/* Right banner */}
      <div className="absolute right-4 top-4 z-10 hidden w-[72px] border border-[#c9a962]/50 bg-[#0d0d0d]/90 sm:block">
        <div className="border-b border-[#c9a962]/30 px-1.5 py-2 text-center">
          <p className="text-[5px] font-semibold uppercase leading-tight tracking-wide text-[#c9a962]">
            Built on Knowledge.
          </p>
          <p className="mt-0.5 text-[5px] font-semibold uppercase leading-tight tracking-wide text-[#c9a962]">
            Driven by Purpose.
          </p>
          <p className="mt-0.5 text-[5px] font-semibold uppercase leading-tight tracking-wide text-[#c9a962]">
            Forged for Impact.
          </p>
        </div>
        <div className="flex flex-col gap-1.5 px-2 py-3">
          {cert.bannerValues.map((value) => (
            <p
              key={value}
              className="text-center text-[6px] font-bold uppercase tracking-[0.15em] text-[#c9a962]"
            >
              {value}
            </p>
          ))}
        </div>
      </div>

      {/* Watermark */}
      <div className="pointer-events-none absolute right-16 top-8 opacity-[0.04]">
        <Image
          src={withBasePath("/forged-icon.png")}
          alt=""
          width={200}
          height={200}
          className="h-40 w-40 object-contain"
          aria-hidden
        />
      </div>

      <div className="relative flex h-full flex-col px-5 py-4 sm:px-8 sm:py-5">
        {/* Header branding */}
        <div className="flex items-start gap-3">
          <Image
            src={withBasePath("/forged-icon.png")}
            alt="ForgEd"
            width={48}
            height={48}
            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
          />
          <div>
            <p className="font-serif text-sm font-bold text-[#c9a962] sm:text-base">
              ForgEd Path
            </p>
            <p className="mt-0.5 text-[7px] uppercase tracking-[0.25em] text-[var(--muted)] sm:text-[8px]">
              — Learn Skills That Matter. —
            </p>
          </div>
        </div>

        {/* Main certificate body */}
        <div className="mt-3 flex flex-1 flex-col text-center sm:mt-4">
          <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#c9a962] sm:text-[9px]">
            This Certifies That
          </p>

          <h1
            className="mt-2 font-serif text-xl font-bold uppercase tracking-wide text-[#c9a962] sm:text-2xl md:text-3xl"
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            {data.studentName}
          </h1>

          <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-[var(--silver)] sm:text-[9px]">
            Has Successfully Completed The
          </p>

          <h2 className="mt-1.5 font-serif text-base font-bold uppercase tracking-wide text-white sm:text-lg md:text-xl">
            {cert.programTitle}
          </h2>

          <p className="mx-auto mt-2 max-w-[90%] text-[6px] font-semibold uppercase leading-relaxed tracking-wide text-[#c9a962] sm:text-[7px]">
            {cert.curriculumLine}
          </p>

          <p className="mx-auto mt-2 max-w-[85%] font-serif text-[8px] italic leading-relaxed text-[var(--silver)]/90 sm:text-[9px]">
            {cert.description}
          </p>

          {/* Institution grid */}
          <div className="mx-auto mt-3 grid max-w-[95%] grid-cols-2 gap-x-3 gap-y-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {cert.institutions.slice(0, 6).map((inst) => (
              <InstitutionBlock key={inst.name} institution={inst} />
            ))}
          </div>
          <div className="mx-auto mt-2 grid max-w-[80%] grid-cols-2 gap-x-3 gap-y-2 sm:grid-cols-3 md:grid-cols-5">
            {cert.institutions.slice(6).map((inst) => (
              <InstitutionBlock key={inst.name} institution={inst} />
            ))}
          </div>
        </div>

        {/* Signatures & seal */}
        <div className="mt-auto grid grid-cols-3 items-end gap-2 pt-3 sm:gap-4">
          <div className="text-left">
            <p className="font-serif text-[10px] italic text-[#c9a962] sm:text-xs">
              {cert.programDirector.motto}
            </p>
            <div className="mt-1 h-px w-full max-w-[120px] bg-[#c9a962]/60" />
            <p className="mt-1 text-[8px] font-bold uppercase tracking-wide text-[#c9a962] sm:text-[9px]">
              {cert.programDirector.name}
            </p>
            <p className="text-[6px] font-semibold uppercase tracking-wider text-[var(--muted)] sm:text-[7px]">
              {cert.programDirector.title}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#c9a962] bg-[#0a0a0a] sm:h-16 sm:w-16">
              <div className="absolute inset-1 rounded-full border border-[#c9a962]/40" />
              <Image
                src={withBasePath("/forged-icon.png")}
                alt=""
                width={28}
                height={28}
                className="h-6 w-6 object-contain sm:h-7 sm:w-7"
                aria-hidden
              />
              <p className="absolute -top-2 left-1/2 w-[110%] -translate-x-1/2 text-center text-[4px] font-bold uppercase tracking-wider text-[#c9a962] sm:text-[5px]">
                {cert.sealRing}
              </p>
              <p className="absolute -bottom-2 left-1/2 w-[110%] -translate-x-1/2 text-center text-[4px] font-bold uppercase tracking-wider text-[#c9a962] sm:text-[5px]">
                {cert.sealFooter}
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="font-serif text-[10px] italic text-[#c9a962] sm:text-xs">
              {cert.executiveBoard.motto}
            </p>
            <div className="ml-auto mt-1 h-px w-full max-w-[120px] bg-[#c9a962]/60" />
            <p className="mt-1 text-[8px] font-bold uppercase tracking-wide text-[#c9a962] sm:text-[9px]">
              {cert.executiveBoard.name}
            </p>
            <p className="text-[6px] font-semibold uppercase tracking-wider text-[var(--muted)] sm:text-[7px]">
              {cert.executiveBoard.title}
            </p>
          </div>
        </div>

        <p className="mt-2 text-center text-[5px] font-semibold uppercase tracking-[0.2em] text-[#c9a962]/80 sm:text-[6px]">
          {cert.footerLine}
        </p>
        <p className="mt-1 text-center text-[5px] text-[var(--muted)]/60">
          {formatDate(data.completionDate)}
        </p>
      </div>
    </div>
  );
}

function InstitutionBlock({
  institution,
}: {
  institution: { name: string; courses: string[] };
}) {
  return (
    <div className="text-left">
      <p className="text-[6px] font-bold uppercase leading-tight text-[#c9a962] sm:text-[7px]">
        {institution.name}
      </p>
      {institution.courses.map((course) => (
        <p
          key={course}
          className="mt-0.5 text-[5px] leading-tight text-[var(--silver)]/80 sm:text-[6px]"
        >
          {course}
        </p>
      ))}
    </div>
  );
}
