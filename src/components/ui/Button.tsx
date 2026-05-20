import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "forge";

const styles: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)] text-white hover:opacity-90 glow-accent",
  secondary:
    "bg-white/10 text-white hover:bg-white/15 border border-white/10",
  ghost: "text-[var(--muted)] hover:text-white hover:bg-white/5",
  forge:
    "bg-gradient-to-r from-[var(--forge)] to-[var(--accent)] text-white hover:opacity-90 glow-forge",
};

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}: {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}) {
  const base = `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
