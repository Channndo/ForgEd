"use client";

/** Shared styles for fixed quiz navigation (matches chapter quick-check). */
export const quizFooterPrimaryClass =
  "rounded-lg bg-[var(--gold)] px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-[#050505] hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40";

export const quizFooterSecondaryClass =
  "rounded-lg border border-white/15 px-4 py-2.5 text-sm text-[var(--muted)] hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40";

/**
 * Pins quiz navigation to the bottom of the viewport so learners are not
 * forced to scroll past long answer explanations.
 */
export function QuizStickyFooter({
  children,
  inset = "default",
  className = "",
  reserveKodaSpace = true,
}: {
  children: React.ReactNode;
  /** default = course review quiz page (max-w-3xl); compact = full-width textbook column */
  inset?: "default" | "compact";
  className?: string;
  /** Keep primary action clear of the KODA FAB (bottom-right). */
  reserveKodaSpace?: boolean;
}) {
  const maxWidthClass = inset === "compact" ? "" : "max-w-3xl";
  const kodaPad = reserveKodaSpace ? "pr-20 sm:pr-28" : "";

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-[70] border-t border-white/10 bg-[var(--background)]/95 py-4 shadow-[0_-16px_48px_rgba(0,0,0,0.55)] backdrop-blur-md">
        <div
          className={`mx-auto flex w-full flex-wrap items-center gap-3 px-4 sm:px-6 ${maxWidthClass} ${kodaPad} ${className}`}
        >
          {children}
        </div>
      </div>
      <div className="h-[5.5rem]" aria-hidden />
    </>
  );
}
