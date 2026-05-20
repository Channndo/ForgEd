import Image from "next/image";
import { withBasePath } from "@/lib/basePath";

type KodaLogoProps = {
  size?: number;
  className?: string;
  showLabel?: boolean;
  priority?: boolean;
};

/** KODA hex mark — Omnistrata learning companion */
export function KodaLogo({
  size = 40,
  className = "",
  showLabel = false,
  priority = false,
}: KodaLogoProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-2 ${className}`}
      aria-hidden={!showLabel}
    >
      <span
        className="relative flex items-center justify-center rounded-xl bg-black/80 ring-1 ring-[var(--koda-gold)]/35 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
        style={{ width: size, height: size }}
      >
        <Image
          src={withBasePath("/koda-logo.png")}
          alt=""
          width={size}
          height={size}
          className="object-contain p-[18%]"
          priority={priority}
          unoptimized
        />
      </span>
      {showLabel && (
        <span className="font-semibold tracking-wide text-[var(--koda-gold)]">
          KODA
        </span>
      )}
    </span>
  );
}

export function KodaLogoMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-semibold tracking-wide text-[var(--koda-gold)] ${className}`}
    >
      <KodaLogo size={32} priority />
      <span>KODA</span>
      <span className="rounded bg-[var(--koda-gold)]/15 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--koda-silver)]">
        AI
      </span>
    </span>
  );
}
