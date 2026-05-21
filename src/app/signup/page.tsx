"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthShell } from "@/components/auth/AuthShell";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { useAuth } from "@/components/providers/AuthProvider";
import { withBasePath } from "@/lib/basePath";
import {
  REFERRAL_SOURCES,
  SECURITY_QUESTIONS,
  US_STATES,
} from "@/lib/forged-account/signupConstants";
import type { SignUpInput } from "@/lib/forged-account/types";

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export default function SignupPage() {
  const { signUp } = useAuth();
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [securityQ1, setSecurityQ1] = useState("");
  const [securityA1, setSecurityA1] = useState("");
  const [securityQ2, setSecurityQ2] = useState("");
  const [securityA2, setSecurityA2] = useState("");
  const [referralSource, setReferralSource] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!firstName.trim() || !lastName.trim()) {
      setError("First and last name are required.");
      return;
    }
    if (!username.trim() || username.trim().length < 3) {
      setError("Username must be at least 3 characters.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (digitsOnly(phone).length < 10) {
      setError("Enter a valid phone number (at least 10 digits).");
      return;
    }
    if (!street.trim() || !city.trim() || !state || !zip.trim()) {
      setError("Complete your address (street, city, state, ZIP).");
      return;
    }
    if (!securityQ1 || !securityA1.trim() || !securityQ2 || !securityA2.trim()) {
      setError("Answer both security questions.");
      return;
    }
    if (securityQ1 === securityQ2) {
      setError("Choose two different security questions.");
      return;
    }
    if (!referralSource) {
      setError("Tell us how you heard about ForgEd.");
      return;
    }

    const payload: SignUpInput = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      username: username.trim().toLowerCase(),
      password,
      phone: digitsOnly(phone),
      street: street.trim(),
      city: city.trim(),
      state: state.toUpperCase(),
      zip: zip.trim(),
      securityQuestion1: securityQ1,
      securityAnswer1: securityA1.trim(),
      securityQuestion2: securityQ2,
      securityAnswer2: securityA2.trim(),
      referralSource,
    };

    setLoading(true);
    const res = await signUp(payload);
    setLoading(false);
    if (res.error) {
      setError(res.error);
      return;
    }
    router.replace(withBasePath("/dashboard"));
  }

  const q1Options = SECURITY_QUESTIONS.filter((q) => String(q.id) !== securityQ2);
  const q2Options = SECURITY_QUESTIONS.filter((q) => String(q.id) !== securityQ1);

  return (
    <AuthShell
      title="Create your ForgEd account"
      subtitle="Your progress, XP, paths, and certifications sync to your account — pick up exactly where you left off."
      maxWidthClass="max-w-xl"
    >
      <form onSubmit={handleSubmit} className="max-h-[70vh] space-y-6 overflow-y-auto pr-1">
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--gold)]/80">
            Account
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Input
              label="First name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              label="Last name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <Input
            label="Email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Username"
            required
            minLength={3}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <Input
              label="Password"
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              label="Confirm password"
              type="password"
              required
              minLength={8}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--gold)]/80">
            Contact
          </h2>
          <Input
            label="Phone number"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            label="Street address"
            required
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <div className="grid gap-3 sm:grid-cols-3">
            <Input label="City" required value={city} onChange={(e) => setCity(e.target.value)} />
            <Select label="State" required value={state} onChange={(e) => setState(e.target.value)}>
              <option value="">State</option>
              {US_STATES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Select>
            <Input label="ZIP" required value={zip} onChange={(e) => setZip(e.target.value)} />
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--gold)]/80">
            Security questions
          </h2>
          <Select
            label="Security question 1"
            required
            value={securityQ1}
            onChange={(e) => setSecurityQ1(e.target.value)}
          >
            <option value="">Select a question</option>
            {q1Options.map((q) => (
              <option key={q.id} value={`id:${q.id}`}>
                {q.text}
              </option>
            ))}
          </Select>
          <Input
            label="Answer 1"
            required
            value={securityA1}
            onChange={(e) => setSecurityA1(e.target.value)}
          />
          <Select
            label="Security question 2"
            required
            value={securityQ2}
            onChange={(e) => setSecurityQ2(e.target.value)}
          >
            <option value="">Select a question</option>
            {q2Options.map((q) => (
              <option key={q.id} value={`id:${q.id}`}>
                {q.text}
              </option>
            ))}
          </Select>
          <Input
            label="Answer 2"
            required
            value={securityA2}
            onChange={(e) => setSecurityA2(e.target.value)}
          />
        </section>

        <section className="space-y-3">
          <Select
            label="How did you hear about us?"
            required
            value={referralSource}
            onChange={(e) => setReferralSource(e.target.value)}
          >
            {REFERRAL_SOURCES.map((opt) => (
              <option key={opt.value || "placeholder"} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Select>
        </section>

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
