"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthShell } from "@/components/auth/AuthShell";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/components/providers/AuthProvider";
import { normalizeLoginId } from "@/lib/forged-account/authApi";
import { withBasePath } from "@/lib/basePath";

export default function LoginPage() {
  const { signIn } = useAuth();
  const router = useRouter();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await signIn(normalizeLoginId(loginId), password);
    setLoading(false);
    if (res.error) {
      setError(res.error);
      return;
    }
    router.replace(withBasePath("/dashboard"));
  }

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to resume your courses, paths, and XP — synced to your ForgEd account."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email or username"
          type="text"
          autoComplete="username"
          required
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <p className="text-sm text-red-400/90">
            {error}
            {/no account exists/i.test(error) ? (
              <span className="mt-2 block text-[var(--muted)]">
                <Link href={withBasePath("/signup")} className="text-[var(--gold)] hover:underline">
                  Create an account
                </Link>{" "}
                or try a different email or username.
              </span>
            ) : /incorrect password/i.test(error) ? (
              <span className="mt-2 block text-[var(--muted)]">
                <Link href={withBasePath("/forgot-password")} className="text-[var(--gold)] hover:underline">
                  Reset your password
                </Link>{" "}
                if you forgot it.
              </span>
            ) : null}
          </p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center rounded-xl border border-[var(--gold)]/40 bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold)] px-5 py-2.5 text-sm font-medium text-[#121212] disabled:opacity-50"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-[var(--muted)]">
        <Link href={withBasePath("/forgot-password")} className="text-[var(--gold)] hover:underline">
          Forgot password?
        </Link>
      </p>
      <p className="mt-6 text-center text-sm text-[var(--muted)]">
        New to ForgEd?{" "}
        <Link href={withBasePath("/signup")} className="font-medium text-[var(--gold)] hover:underline">
          Create account
        </Link>
      </p>
    </AuthShell>
  );
}
