"use client";

import Image from "next/image";
import { institutionLogoUrl, getInstitution } from "@/lib/forged-path/institutions";

export function InstitutionLogo({
  institutionId,
  institutionName,
  size = 44,
}: {
  institutionId: string;
  institutionName: string;
  size?: number;
}) {
  const src = institutionLogoUrl(institutionId);
  const inst = getInstitution(institutionId);

  if (!src || !inst) {
    return (
      <div
        className="flex shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] font-serif text-xs font-bold text-[var(--gold)]"
        style={{ width: size, height: size }}
        aria-hidden
      >
        {institutionName.slice(0, 1)}
      </div>
    );
  }

  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.04]"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={`${institutionName} logo`}
        width={size}
        height={size}
        className="h-full w-full object-contain p-1"
      />
    </div>
  );
}
