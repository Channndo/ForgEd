import { type ReactNode } from "react";

export function Card({
  children,
  className = "",
  glow = false,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div
      className={`glass rounded-2xl p-6 ${glow ? "glow-accent" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
