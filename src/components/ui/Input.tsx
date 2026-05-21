"use client";

import { forwardRef } from "react";

export const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { label?: string; error?: string }
>(function Input({ label, error, className = "", id, ...props }, ref) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={inputId} className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        className={`w-full rounded-lg border bg-black/40 px-3 py-2.5 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--gold)]/50 focus:ring-1 focus:ring-[var(--gold)]/30 ${
          error ? "border-red-500/50" : "border-white/[0.1]"
        } ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-400/90">{error}</p>}
    </div>
  );
});
