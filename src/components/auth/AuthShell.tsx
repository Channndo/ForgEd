import Link from "next/link";
import { ForgEdBrandStack } from "@/components/brand/ForgEdLogo";

export function AuthShell({
  title,
  subtitle,
  children,
  maxWidthClass = "max-w-md",
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  maxWidthClass?: string;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#050505] px-4 py-12">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_55%)]" />
      <div className={`relative w-full ${maxWidthClass}`}>
        <Link href="/dashboard" className="mb-8 flex justify-center">
          <ForgEdBrandStack size="md" priority />
        </Link>
        <div className="glass rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 sm:p-8">
          <h1 className="font-serif text-2xl font-bold text-[var(--silver)]">{title}</h1>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{subtitle}</p>
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
