"use client";

import { forwardRef } from "react";

export const Select = forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> & { label?: string; error?: string }
>(function Select({ label, error, className = "", id, children, ...props }, ref) {
  const selectId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={selectId}
          className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]"
        >
          {label}
        </label>
      )}
      <select
        ref={ref}
        id={selectId}
        className={`w-full rounded-lg border bg-black/40 px-3 py-2.5 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--gold)]/50 focus:ring-1 focus:ring-[var(--gold)]/30 ${
          error ? "border-red-500/50" : "border-white/[0.1]"
        } ${className}`}
        {...props}
      >
        {children}
      </select>
      {error && <p className="text-xs text-red-400/90">{error}</p>}
    </div>
  );
});
