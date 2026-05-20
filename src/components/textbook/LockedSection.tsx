import { Lock } from "lucide-react";

export function LockedSection({
  title,
  message,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  message: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <div
      className="scroll-mt-32 rounded-xl border border-white/[0.08] bg-[#0a0a0a] px-6 py-10 text-center"
      aria-label={`Locked: ${title}`}
    >
      <Lock className="mx-auto h-8 w-8 text-[var(--gold)]/70" />
      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
        Locked
      </p>
      <h3 className="mt-2 font-serif text-lg font-semibold text-[var(--silver)]">{title}</h3>
      <p className="mx-auto mt-3 max-w-md text-sm text-[var(--muted)]">{message}</p>
      {ctaLabel && ctaHref && (
        <a
          href={ctaHref}
          className="mt-5 inline-flex rounded-lg border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-4 py-2 text-sm font-medium text-[var(--gold)] transition hover:bg-[var(--gold)]/20"
        >
          {ctaLabel}
        </a>
      )}
    </div>
  );
}
