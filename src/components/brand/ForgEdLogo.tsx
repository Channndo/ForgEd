import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/basePath";

type LogoVariant = "icon" | "wordmark" | "full";

const SOURCES: Record<LogoVariant, { src: string; width: number; height: number }> = {
  icon: { src: "/forged-icon.png", width: 48, height: 52 },
  wordmark: { src: "/forged-wordmark.png", width: 220, height: 120 },
  full: { src: "/forged-wordmark.png", width: 280, height: 150 },
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
      className={`object-contain object-center ${
        variant === "icon"
          ? "h-12 w-12 min-h-12 min-w-12 shrink-0"
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
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-2xl sm:text-3xl",
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
      className={`text-[10px] font-sans uppercase tracking-[0.35em] text-[var(--foreground)]/90 sm:text-xs ${className}`}
    >
      <span className="inline-block h-px w-6 align-middle bg-[var(--gold)]/60 sm:w-10" />
      <span className="mx-3 align-middle">Learn Skills That Matter.</span>
      <span className="inline-block h-px w-6 align-middle bg-[var(--gold)]/60 sm:w-10" />
    </p>
  );
}
