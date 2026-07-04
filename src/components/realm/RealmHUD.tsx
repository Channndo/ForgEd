"use client";

import { useState } from "react";
import { Backpack, Swords, Volume2, VolumeX, X } from "lucide-react";
import type { RealmAttackStyle, RealmNpc, RealmSave } from "@/lib/realm/types";
import { combatLevel, levelForXp, levelProgress } from "@/lib/realm/skills";
import { itemDef } from "@/lib/realm/combat";
import { RealmSound } from "@/lib/realm/sound";

const SKILL_META: { id: keyof RealmSave["skills"]; label: string; color: string }[] = [
  { id: "attack", label: "Attack", color: "#ef4444" },
  { id: "strength", label: "Strength", color: "#22c55e" },
  { id: "defence", label: "Defence", color: "#3b82f6" },
  { id: "hitpoints", label: "Hitpoints", color: "#f97316" },
];

const STYLES: { id: RealmAttackStyle; label: string; trains: string }[] = [
  { id: "accurate", label: "Accurate", trains: "Attack" },
  { id: "aggressive", label: "Aggressive", trains: "Strength" },
  { id: "defensive", label: "Defensive", trains: "Defence" },
];

export function RealmHUD({
  save,
  toast,
  onEat,
  onDuel,
  onReset,
  onUpdate,
}: {
  save: RealmSave;
  toast: string | null;
  onEat: () => void;
  onDuel: () => void;
  onReset: () => void;
  onUpdate: (patch: Partial<RealmSave>) => void;
}) {
  const [statsOpen, setStatsOpen] = useState(false);
  const [muted, setMuted] = useState(false);
  const hpPct = (save.playerHp / Math.max(1, save.playerMaxHp)) * 100;
  const breadCount = save.inventory.find((i) => i.id === "bread")?.qty ?? 0;
  const coins = save.inventory.find((i) => i.id === "coins")?.qty ?? 0;

  const questText =
    save.tutorialStage === "move"
      ? `Walk the lanterns (${save.lanternsVisited.length}/5)`
      : save.tutorialStage === "food"
        ? "Fight enemies in the south field, then eat bread"
        : save.tutorialStage === "duel"
          ? "Talk to Duel Master Crisp"
          : save.tutorialStage === "play"
            ? "Train your skills — hunt rats & goblins"
            : "Tutorial";

  return (
    <>
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 flex flex-wrap items-start justify-between gap-2 p-2 sm:p-3">
        <div className="pointer-events-auto flex gap-2">
          <div className="rounded-lg border border-[var(--gold)]/30 bg-black/80 px-3 py-2">
            <p className="text-[9px] uppercase tracking-wider text-[var(--muted)]">Hitpoints</p>
            <div className="mt-1 h-2 w-20 overflow-hidden rounded-full bg-white/10 sm:w-28">
              <div className="h-full rounded-full bg-red-500/80" style={{ width: `${hpPct}%` }} />
            </div>
            <p className="mt-0.5 text-xs text-[var(--silver)]">
              {save.playerHp}/{save.playerMaxHp}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setStatsOpen(true)}
            className="pointer-events-auto rounded-lg border border-white/10 bg-black/80 px-3 py-2 text-left"
          >
            <p className="text-[9px] uppercase tracking-wider text-[var(--muted)]">Combat</p>
            <p className="text-sm font-semibold text-[var(--gold)]">Lvl {combatLevel(save.skills)}</p>
          </button>
          <div className="hidden rounded-lg border border-white/10 bg-black/80 px-3 py-2 sm:block">
            <p className="text-[9px] uppercase tracking-wider text-[var(--muted)]">Coins</p>
            <p className="text-sm font-semibold text-[var(--gold)]">{coins}</p>
          </div>
        </div>
        <div className="pointer-events-auto rounded-lg border border-white/10 bg-black/80 px-3 py-2 text-right">
          <p className="text-[9px] uppercase tracking-wider text-[var(--muted)]">Quest</p>
          <p className="max-w-[140px] text-xs text-[var(--silver)] sm:max-w-none">{questText}</p>
        </div>
      </div>

      {toast && (
        <div className="pointer-events-none absolute bottom-24 left-1/2 z-20 max-w-[90%] -translate-x-1/2 rounded-lg border border-[var(--gold)]/30 bg-black/90 px-4 py-2 text-center text-xs text-[var(--silver)] sm:bottom-20 sm:text-sm">
          {toast}
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-around gap-1 border-t border-white/10 bg-black/90 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:justify-end sm:gap-2 sm:px-4">
        <button
          type="button"
          onClick={onEat}
          className="flex min-h-[44px] min-w-[44px] flex-1 flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-2 py-2 text-[10px] text-[var(--silver)] sm:flex-none sm:px-4 sm:text-xs"
        >
          🍞 Eat ({breadCount})
        </button>
        <button
          type="button"
          onClick={() => setStatsOpen(true)}
          className="flex min-h-[44px] min-w-[44px] flex-1 flex-col items-center justify-center gap-0.5 rounded-xl border border-white/10 bg-white/5 px-2 py-2 text-[10px] text-[var(--silver)] sm:flex-none sm:px-4 sm:text-xs"
        >
          <Backpack className="h-4 w-4" />
          Stats
        </button>
        <button
          type="button"
          onClick={onDuel}
          disabled={save.tutorialStage !== "duel" && !save.duelDone}
          className="flex min-h-[44px] min-w-[44px] flex-1 flex-col items-center justify-center gap-0.5 rounded-xl border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-2 py-2 text-[10px] text-[var(--gold)] disabled:opacity-40 sm:flex-none sm:px-4 sm:text-xs"
        >
          <Swords className="h-4 w-4" />
          Duel
        </button>
        <button
          type="button"
          onClick={() => {
            const next = !muted;
            setMuted(next);
            RealmSound.setMuted(next);
          }}
          className="flex min-h-[44px] items-center justify-center rounded-xl border border-white/10 px-3 text-[var(--muted)]"
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
        <button
          type="button"
          onClick={onReset}
          className="flex min-h-[44px] items-center justify-center rounded-xl border border-white/10 px-3 text-[10px] text-[var(--muted)] sm:text-xs"
          title="Reset prototype save"
        >
          Reset
        </button>
      </div>

      {statsOpen && (
        <div className="absolute inset-0 z-30 flex items-end justify-center bg-black/50 p-2 sm:items-center sm:p-4">
          <div className="max-h-[80vh] w-full max-w-md overflow-y-auto rounded-xl border border-[var(--gold)]/25 bg-[#121214] p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <p className="font-serif text-lg font-semibold text-[var(--gold)]">
                {save.character?.name ?? "Adventurer"} · Combat {combatLevel(save.skills)}
              </p>
              <button type="button" onClick={() => setStatsOpen(false)} aria-label="Close">
                <X className="h-5 w-5 text-[var(--muted)]" />
              </button>
            </div>

            <p className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">Skills</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {SKILL_META.map((sk) => {
                const xp = save.skills[sk.id];
                const lvl = levelForXp(xp);
                const prog = levelProgress(xp);
                return (
                  <div key={sk.id} className="rounded-lg border border-white/10 bg-black/30 p-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[var(--silver)]">{sk.label}</span>
                      <span className="text-sm font-semibold" style={{ color: sk.color }}>
                        {lvl}
                      </span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full" style={{ width: `${prog * 100}%`, backgroundColor: sk.color }} />
                    </div>
                    <p className="mt-0.5 text-[9px] text-[var(--muted)]">{xp.toLocaleString()} xp</p>
                  </div>
                );
              })}
            </div>

            <p className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">Attack style</p>
            <div className="mt-2 flex gap-2">
              {STYLES.map((st) => (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => onUpdate({ attackStyle: st.id })}
                  className={`flex-1 rounded-lg border px-2 py-2 text-center ${
                    save.attackStyle === st.id
                      ? "border-[var(--gold)]/50 bg-[var(--gold)]/15 text-[var(--gold)]"
                      : "border-white/10 bg-white/5 text-[var(--muted)]"
                  }`}
                >
                  <span className="block text-xs font-semibold">{st.label}</span>
                  <span className="block text-[9px]">Trains {st.trains}</span>
                </button>
              ))}
            </div>

            <p className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
              Inventory ({save.inventory.reduce((n, i) => n + (i.id === "coins" ? 0 : i.qty), 0)} items)
            </p>
            <div className="mt-2 grid grid-cols-6 gap-1.5">
              {save.inventory.map((it) => {
                const def = itemDef(it.id);
                return (
                  <div
                    key={it.id}
                    title={def.name}
                    className="flex aspect-square flex-col items-center justify-center rounded border border-white/10 bg-black/30 text-center"
                  >
                    <span className="text-base leading-none">{def.glyph}</span>
                    <span className="text-[9px] text-[var(--muted)]">{it.qty}</span>
                  </div>
                );
              })}
            </div>
            <p className="mt-3 text-[10px] text-[var(--muted)]">
              Best weapon equips automatically. Kills: {save.kills.toLocaleString()}.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export function RealmDialogue({
  npc,
  onClose,
  onDuel,
  showDuel,
}: {
  npc: RealmNpc;
  onClose: () => void;
  onDuel?: () => void;
  showDuel?: boolean;
}) {
  return (
    <div className="absolute inset-0 z-30 flex items-end justify-center bg-black/50 p-2 sm:items-center sm:p-4">
      <div className="max-h-[70vh] w-full max-w-lg overflow-y-auto rounded-xl border border-[var(--gold)]/25 bg-[#121214] p-4 sm:p-6">
        <div className="flex items-start justify-between gap-2">
          <p className="font-serif text-lg font-semibold text-[var(--gold)]">{npc.name}</p>
          <button type="button" onClick={onClose} aria-label="Close">
            <X className="h-5 w-5 text-[var(--muted)]" />
          </button>
        </div>
        <div className="mt-3 space-y-2">
          {npc.lines.map((line) => (
            <p key={line} className="text-sm leading-relaxed text-[var(--silver)]">
              {line}
            </p>
          ))}
        </div>
        {showDuel && onDuel && (
          <button
            type="button"
            onClick={() => {
              onDuel();
              onClose();
            }}
            className="mt-4 w-full rounded-lg border border-[var(--gold)]/40 bg-[var(--gold)]/10 py-2.5 text-sm font-semibold text-[var(--gold)]"
          >
            Accept duel (no loot lost)
          </button>
        )}
        <button
          type="button"
          onClick={onClose}
          className="mt-3 w-full rounded-lg border border-white/10 py-2 text-sm text-[var(--muted)]"
        >
          Goodbye
        </button>
      </div>
    </div>
  );
}
