"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AuthShell } from "@/components/auth/AuthShell";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/components/providers/AuthProvider";
import { withBasePath } from "@/lib/basePath";

function ForgotPasswordForm() {
  const { resetPasswordRequest, resetPasswordWithToken } = useAuth();
  const searchParams = useSearchParams();
  const tokenFromUrl = searchParams.get("token") ?? "";

  const [email, setEmail] = useState("");
  const [token, setToken] = useState(tokenFromUrl);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const resetMode = Boolean(tokenFromUrl || token);

  async function handleRequest(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);
    const res = await resetPasswordRequest(email);
    setLoading(false);
    if (res.error) {
      setError(res.error);
      return;
    }
    setMessage(
      res.message ||
        "If that email exists, we sent reset instructions. Use the token from your email below."
    );
  }

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);
    const res = await resetPasswordWithToken(token, password);
    setLoading(false);
    if (res.error) {
      setError(res.error);
      return;
    }
    setMessage(res.message || "Password updated. You can sign in now.");
  }

  return (
    <AuthShell
      title={resetMode ? "Set a new password" : "Reset password"}
      subtitle={
        resetMode
          ? "Enter the reset token and your new password."
          : "We will send reset instructions if your email is registered."
      }
    >
      {resetMode ? (
        <form onSubmit={handleReset} className="space-y-4">
          <Input
            label="Reset token"
            required
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
          <Input
            label="New password"
            type="password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-sm text-red-400/90">{error}</p>}
          {message && <p className="text-sm text-[var(--gold)]">{message}</p>}
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center rounded-xl border border-[var(--gold)]/40 bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold)] px-5 py-2.5 text-sm font-medium text-[#121212] disabled:opacity-50"
          >
            {loading ? "Updating…" : "Update password"}
          </button>
        </form>
      ) : (
        <form onSubmit={handleRequest} className="space-y-4">
          <Input
            label="Email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <p className="text-sm text-red-400/90">{error}</p>}
          {message && <p className="text-sm text-[var(--gold)]">{message}</p>}
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center rounded-xl border border-[var(--gold)]/40 bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold)] px-5 py-2.5 text-sm font-medium text-[#121212] disabled:opacity-50"
          >
            {loading ? "Sending…" : "Send reset link"}
          </button>
          <p className="text-xs text-[var(--muted)]">
            After requesting, open the reset form with your token:{" "}
            <Link
              href={withBasePath("/forgot-password?token=YOUR_TOKEN")}
              className="text-[var(--gold)] hover:underline"
            >
              enter token manually
            </Link>
          </p>
        </form>
      )}
      <p className="mt-6 text-center text-sm text-[var(--muted)]">
        <Link href={withBasePath("/login")} className="text-[var(--gold)] hover:underline">
          Back to sign in
        </Link>
      </p>
    </AuthShell>
  );
}

export default function ForgotPasswordPage() {
  return (
    <Suspense
      fallback={
        <AuthShell title="Reset password" subtitle="Loading…">
          <p className="text-sm text-[var(--muted)]">Please wait.</p>
        </AuthShell>
      }
    >
      <ForgotPasswordForm />
    </Suspense>
  );
}
