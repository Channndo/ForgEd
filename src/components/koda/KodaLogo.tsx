import Image from "next/image";

/** Placeholder logo container — swap `src` when final KODA asset is imported. */
export function KodaLogo({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--koda-silver)]/20 bg-black/40 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <Image
        src="/koda-logo.png"
        alt=""
        width={size}
        height={size}
        className="object-contain p-1.5"
        priority
      />
    </div>
  );
}

export function KodaLogoMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-semibold tracking-wide text-[var(--koda-gold)] ${className}`}
    >
      <KodaLogo size={28} />
      KODA
    </span>
  );
}
