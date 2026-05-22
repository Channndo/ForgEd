"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useAuth } from "@/components/providers/AuthProvider";
import { useProgress } from "@/components/providers/ProgressProvider";
import { restoreProgressFromArchive } from "@/lib/forged-account/authApi";
import { writeLocalProgress } from "@/lib/progress/persistence";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { withBasePath } from "@/lib/basePath";

export default function ProfileSettingsPage() {
  const { profile, updateProfile } = useAuth();
  const { refresh: refreshProgress } = useProgress();
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [restoring, setRestoring] = useState(false);

  useEffect(() => {
    if (profile) {
      setDisplayName(profile.displayName ?? "");
      setUsername(profile.username ?? "");
    }
  }, [profile]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");
    const res = await updateProfile({
      displayName: displayName.trim(),
      username: username.trim().toLowerCase(),
    });
    setSaving(false);
    if (res.error) {
      setError(res.error);
      return;
    }
    setMessage("Profile saved to your ForgEd account.");
  }

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <Link
        href={withBasePath("/profile")}
        className="inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--gold)]"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to profile
      </Link>
      <h1 className="font-serif text-2xl font-bold text-[var(--silver)]">Profile settings</h1>
      <Card>
        <form onSubmit={handleSave} className="space-y-4">
          <Input
            label="Display name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <Input
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input label="Email" value={profile?.email ?? ""} disabled />
          {error && <p className="text-sm text-red-400/90">{error}</p>}
          {message && <p className="text-sm text-[var(--gold)]">{message}</p>}
          <button
            type="submit"
            disabled={saving}
            className="rounded-xl border border-[var(--gold)]/40 bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold)] px-5 py-2.5 text-sm font-medium text-[#121212] disabled:opacity-50"
          >
            {saving ? "Saving…" : "Save changes"}
          </button>
        </form>
      </Card>
      <Card>
        <h2 className="text-sm font-semibold text-[var(--silver)]">Progress backup</h2>
        <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
          ForgEd keeps append-only snapshots in the{" "}
          <code className="text-[var(--gold)]/90">USER_ACCOUNT_ARCHIVE</code> tab whenever you
          register, save progress, or update your profile. If progress looks empty, restore the
          latest snapshot.
        </p>
        <button
          type="button"
          disabled={restoring}
          onClick={async () => {
            setRestoring(true);
            setError("");
            setMessage("");
            try {
              const res = await restoreProgressFromArchive();
              if (res.progress) {
                writeLocalProgress(res.progress);
                refreshProgress();
              }
              setMessage(res.message);
            } catch (e) {
              setError(e instanceof Error ? e.message : "Could not restore from archive.");
            } finally {
              setRestoring(false);
            }
          }}
          className="mt-4 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm text-[var(--silver)] hover:border-[var(--gold)]/35 disabled:opacity-50"
        >
          {restoring ? "Restoring…" : "Restore progress from latest backup"}
        </button>
      </Card>
      <p className="text-xs text-[var(--muted)]">
        Your profile and learning progress sync to your ForgEd account in Google Sheets.
      </p>
    </div>
  );
}
