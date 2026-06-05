"use client";

import { useState } from "react";

export function RealmCharter({ onAccept }: { onAccept: () => void }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex h-full flex-col justify-center overflow-y-auto bg-[#0a0a0a] p-4 sm:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
        ForgEd Realm Charter
      </p>
      <h1 className="mt-3 font-serif text-2xl font-bold text-[var(--silver)] sm:text-3xl">
        Welcome to ForgEd Realm
      </h1>
      <div className="mt-6 max-w-xl space-y-4 text-sm leading-relaxed text-[var(--muted)]">
        <p>
          This world is shared. You may <span className="text-[var(--silver)]">team up</span> —
          trade, quest, guild, mentor — or <span className="text-[var(--silver)]">go against</span>{" "}
          — duels, the Marches, and deeper wilds where players can take your stuff.
        </p>
        <p>
          ForgEd courses unlock what you can do. They do not stop someone from punching you in the
          Marches.
        </p>
        <p className="italic text-[var(--silver)]/80">
          Some folk will share their bread. Others will share their sword. Both are allowed.
        </p>
      </div>
      <label className="mt-6 flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="mt-1 h-4 w-4 accent-[var(--gold)]"
        />
        <span className="text-sm text-[var(--muted)]">
          I understand players can help or hinder me.
        </span>
      </label>
      <button
        type="button"
        disabled={!checked}
        onClick={onAccept}
        className="mt-6 rounded-xl border border-[var(--gold)]/40 bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold)] px-8 py-3 text-sm font-semibold text-[#121212] disabled:opacity-40 sm:self-start"
      >
        Enter Ashford
      </button>
      <p className="mt-4 text-xs text-[var(--muted)]">Prototype v0.1 — Ashford tutorial slice</p>
    </div>
  );
}
