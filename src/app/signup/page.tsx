"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthShell } from "@/components/auth/AuthShell";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/components/providers/AuthProvider";
import { withBasePath } from "@/lib/basePath";

export default function SignupPage() {
  const { signUp } = useAuth();
  const router = useRouter();
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!displayName.trim() || !username.trim()) {
      setError("Name and username are required.");
      return;
    }
    setLoading(true);
    const res = await signUp({
      displayName: displayName.trim(),
      username: username.trim().toLowerCase(),
      email: email.trim(),
      password,
    });
    setLoading(false);
    if (res.error) {
      setError(res.error);
      return;
    }
    router.replace(withBasePath("/dashboard"));
  }

  return (
    <AuthShell
      title="Create your ForgEd account"
      subtitle="Your progress, XP, paths, and certifications sync to your account — pick up exactly where you left off."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Display name"
          required
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <Input
          label="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label="Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-sm text-red-400/90">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center rounded-xl border border-[var(--gold)]/40 bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold)] px-5 py-2.5 text-sm font-medium text-[#121212] disabled:opacity-50"
        >
          {loading ? "Creating account…" : "Create account"}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-[var(--muted)]">
        Already have an account?{" "}
        <Link href={withBasePath("/login")} className="text-[var(--gold)] hover:underline">
          Sign in
        </Link>
      </p>
    </AuthShell>
  );
}
