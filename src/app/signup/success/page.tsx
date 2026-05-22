"use client";

import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { withBasePath } from "@/lib/basePath";

export default function SignupSuccessPage() {
  return (
    <AuthShell
      title="Account created"
      subtitle="Your ForgEd account is ready. Sign in with the email and password you just chose to start learning."
    >
      <div className="space-y-6">
        <p className="rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200/90">
          Account creation successful. You can sign in now.
        </p>
        <Link
          href={withBasePath("/login")}
          className="inline-flex w-full items-center justify-center rounded-xl border border-[var(--gold)]/40 bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold)] px-5 py-2.5 text-sm font-medium text-[#121212]"
        >
          Return to sign in
        </Link>
      </div>
    </AuthShell>
  );
}
