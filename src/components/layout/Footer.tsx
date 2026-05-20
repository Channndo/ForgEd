import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-black/20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold">
              Forg<span className="text-[var(--forge)]">Ed</span>
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Education Reforged. Free AI-powered learning for the skills that matter.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-white">Platform</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <li><Link href="/courses" className="hover:text-white">Course Library</Link></li>
              <li><Link href="/dashboard" className="hover:text-white">Dashboard</Link></li>
              <li><Link href="/assistant" className="hover:text-white">AI Assistant</Link></li>
              <li><Link href="/career" className="hover:text-white">Career Path</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-white">Omnistrata Ecosystem</p>
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
