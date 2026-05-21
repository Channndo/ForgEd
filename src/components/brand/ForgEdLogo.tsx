import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/basePath";

type LogoVariant = "icon" | "wordmark" | "full";

const SOURCES: Record<LogoVariant, { src: string; width: number; height: number }> = {
  icon: { src: "/forged-icon.png", width: 512, height: 512 },
  wordmark: { src: "/forged-wordmark.png", width: 800, height: 800 },
  full: { src: "/forged-wordmark.png", width: 800, height: 800 },
};

export function ForgEdLogo({
  variant = "icon",
  href,
  className = "",
  priority = false,
}: {
  variant?: LogoVariant;
  href?: string;
  className?: string;
  priority?: boolean;
}) {
  const { src, width, height } = SOURCES[variant];
  const imageSrc = withBasePath(src);

  const img = (
    <Image
      src={imageSrc}
      alt="ForgEd"
      width={width}
      height={height}
      className={`shrink-0 object-contain object-center ${
        variant === "icon"
          ? className
            ? "max-h-none"
            : "h-9 w-9 max-h-none"
          : "h-auto w-auto max-h-24 sm:max-h-32"
      } ${className}`}
      priority={priority}
    />
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex shrink-0 items-center">
        {img}
      </Link>
    );
  }

  return img;
}

/** Text wordmark when image is too small — matches brand silver/gold split */
export function ForgEdWordmarkText({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const sizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-2xl sm:text-3xl",
    xl: "text-3xl sm:text-4xl md:text-[2.75rem] md:leading-tight",
  };
  return (
    <span
      className={`font-serif font-semibold tracking-tight ${sizes[size]} ${className}`}
    >
      <span className="text-[var(--silver)]">Forg</span>
      <span className="text-[var(--gold)]">Ed</span>
    </span>
  );
}

export function ForgEdTagline({ className = "" }: { className?: string }) {
  return (
    <p
      className={`text-center text-[10px] font-sans uppercase tracking-[0.35em] text-[var(--foreground)]/90 sm:text-xs ${className}`}
    >
      <span className="inline-block h-px w-6 align-middle bg-[var(--gold)]/60 sm:w-10" />
      <span className="mx-3 align-middle">Learn Skills That Matter.</span>
      <span className="inline-block h-px w-6 align-middle bg-[var(--gold)]/60 sm:w-10" />
    </p>
  );
}

/** Icon + wordmark + tagline stacked on one center axis (avoids misaligned composite PNG). */
export function ForgEdBrandStack({
  size = "md",
  className = "",
  priority = false,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
}) {
  const iconClass = {
    sm: "h-9 w-9",
    md: "h-12 w-12 sm:h-14 sm:w-14",
    lg: "h-16 w-16 sm:h-20 sm:w-20 md:h-[5.25rem] md:w-[5.25rem]",
  }[size];
  const wordmarkSize = { sm: "md" as const, md: "lg" as const, lg: "xl" as const }[size];
  const stackGap = { sm: "gap-2", md: "gap-2.5 sm:gap-3", lg: "gap-3 sm:gap-4" }[size];

  return (
    <div className={`inline-flex flex-col items-center ${stackGap} ${className}`}>
      <ForgEdLogo variant="icon" className={iconClass} priority={priority} />
      <ForgEdWordmarkText size={wordmarkSize} className="leading-none" />
      <ForgEdTagline />
    </div>
  );
}
