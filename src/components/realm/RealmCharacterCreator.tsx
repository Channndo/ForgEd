"use client";

import { useState } from "react";
import type { RealmCharacter } from "@/lib/realm/types";
import { RealmAvatar } from "./RealmAvatar";

const HAIR = ["#1a1a1a", "#5c4033", "#d4af37", "#8b4513", "#4a5568", "#7c2d12"];
const TUNICS = ["#d4af37", "#6b7280", "#1e40af", "#166534", "#7f1d1d", "#c0c0c0"];
const SKIN = ["#f1c9a5", "#e8b88a", "#c68642", "#8d5524", "#5c3a21"];

export function RealmCharacterCreator({
  onComplete,
}: {
  onComplete: (character: RealmCharacter) => void;
}) {
  const [name, setName] = useState("");
  const [body, setBody] = useState<RealmCharacter["body"]>("standard");
  const [hair, setHair] = useState(HAIR[0]);
  const [tunic, setTunic] = useState(TUNICS[0]);
  const [skin, setSkin] = useState(SKIN[1]);

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#0a0a0a] p-4 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
        Character Creator
      </p>
      <h1 className="mt-2 font-serif text-2xl font-bold text-[var(--silver)]">
        Who walks into Ashford?
      </h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Customize your look. Stats come from training — not from this screen.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="flex items-center justify-center rounded-xl border border-[var(--gold)]/20 bg-gradient-to-b from-[#14110a] to-black/60 p-6">
          <RealmAvatar character={{ body, hair, tunic, skin }} size={150} />
        </div>
        <div className="space-y-4">
          <label className="block">
            <span className="text-xs uppercase tracking-wider text-[var(--muted)]">Name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value.slice(0, 12))}
              placeholder="Adventurer"
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-[var(--silver)]"
            />
          </label>
          <div>
            <span className="text-xs uppercase tracking-wider text-[var(--muted)]">Build</span>
            <div className="mt-2 flex gap-2">
              {(["slim", "standard", "broad"] as const).map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setBody(b)}
                  className={`rounded-lg px-3 py-2 text-xs capitalize ${
                    body === b
                      ? "bg-[var(--gold)]/20 text-[var(--gold)]"
                      : "bg-white/5 text-[var(--muted)]"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-[var(--muted)]">Skin</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {SKIN.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSkin(s)}
                  className={`h-8 w-8 rounded-full border-2 ${
                    skin === s ? "border-[var(--gold)]" : "border-transparent"
                  }`}
                  style={{ backgroundColor: s }}
                />
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-[var(--muted)]">Hair</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {HAIR.map((h) => (
                <button
                  key={h}
                  type="button"
                  onClick={() => setHair(h)}
                  className={`h-8 w-8 rounded-full border-2 ${
                    hair === h ? "border-[var(--gold)]" : "border-transparent"
                  }`}
                  style={{ backgroundColor: h }}
                />
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-[var(--muted)]">Tunic</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {TUNICS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTunic(t)}
                  className={`h-8 w-8 rounded border-2 ${
                    tunic === t ? "border-[var(--gold)]" : "border-transparent"
                  }`}
                  style={{ backgroundColor: t }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() =>
          onComplete({
            name: name.trim() || "Adventurer",
            body,
            hair,
            tunic,
            skin,
          })
        }
        className="mt-8 w-full rounded-xl border border-[var(--gold)]/40 bg-[var(--gold)]/10 py-3 text-sm font-semibold text-[var(--gold)] sm:w-auto sm:px-8"
      >
        Enter Ashford
      </button>
    </div>
  );
}
