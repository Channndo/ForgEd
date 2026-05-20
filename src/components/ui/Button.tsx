import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "forge";

const styles: Record<Variant, string> = {
  primary:
    "border border-[var(--gold)]/40 bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold)] text-[#121212] hover:opacity-90 glow-gold",
  secondary:
    "bg-white/5 text-[var(--silver)] hover:bg-white/10 border border-[var(--silver)]/20",
  ghost: "text-[var(--muted)] hover:text-[var(--silver)] hover:bg-white/5",
  forge:
    "border border-[var(--gold)]/50 bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[#e8c96a] text-[#121212] font-semibold hover:opacity-95 glow-gold",
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
