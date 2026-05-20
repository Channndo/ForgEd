import Link from "next/link";
import { ForgEdLogo, ForgEdTagline, ForgEdWordmarkText } from "@/components/brand/ForgEdLogo";

export function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-[var(--gold)]/10 bg-[var(--background-elevated)]/80">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <ForgEdLogo variant="icon" />
              <ForgEdWordmarkText size="lg" />
            </div>
            <ForgEdTagline className="mt-4" />
            <p className="mt-3 text-sm text-[var(--muted)]">
              Education Reforged. Free AI-powered learning for the skills that matter.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-[var(--silver)]">Platform</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <li><Link href="/courses" className="hover:text-[var(--gold)]">Course Library</Link></li>
              <li><Link href="/dashboard" className="hover:text-[var(--gold)]">Dashboard</Link></li>
              <li><Link href="/assistant" className="hover:text-[var(--gold)]">KODA</Link></li>
              <li><Link href="/career" className="hover:text-[var(--gold)]">Career Path</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-[var(--silver)]">Omnistrata Ecosystem</p>
            <p className="mt-3 text-sm text-[var(--muted)]">
              ForgEd is part of the Omnistrata family — building tools that help people adapt to technology, business, and the future of work.
            </p>
            <p className="mt-4 text-xs text-[var(--muted)]">
              © {new Date().getFullYear()} Omnistrata · ForgEd
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
