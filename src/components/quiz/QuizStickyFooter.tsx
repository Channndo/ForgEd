"use client";

/**
 * Pins quiz navigation to the bottom of the viewport so learners are not
 * forced to scroll past long answer explanations.
 */
export function QuizStickyFooter({
  children,
  inset = "default",
  className = "",
}: {
  children: React.ReactNode;
  /** default = course review quiz page (max-w-3xl); compact = full-width textbook column */
  inset?: "default" | "compact";
  className?: string;
}) {
  const maxWidthClass = inset === "compact" ? "" : "max-w-3xl";

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[var(--background)]/95 py-4 shadow-[0_-16px_48px_rgba(0,0,0,0.55)] backdrop-blur-md">
        <div
          className={`mx-auto flex flex-wrap items-center gap-3 px-4 sm:px-6 ${maxWidthClass} ${className}`}
        >
          {children}
        </div>
      </div>
      <div className="h-[5.5rem]" aria-hidden />
    </>
  );
}
