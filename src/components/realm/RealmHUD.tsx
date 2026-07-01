"use client";

import { Swords, X } from "lucide-react";
import { getRealmMap } from "@/lib/realm/maps/registry";
import type { RealmNpc, RealmSave } from "@/lib/realm/types";

function questText(save: RealmSave): string {
  if (save.tutorialStage === "move") {
    return `Walk the lanterns (${save.lanternsVisited.length}/5)`;
  }
  if (save.tutorialStage === "food") {
    return "Fight dummy, then eat bread";
  }
  if (save.tutorialStage === "duel") {
    return "Talk to Duel Master Crisp";
  }

  const map = getRealmMap(save.currentArea);
  if (save.currentArea === "mindspire") {
    return `Study tomes (${save.tomesCollected.length}/3) · Portal south → Ashford`;
  }
  if (save.currentArea === "marches") {
    return "Wilderness — defeat goblins · Portal west → Ashford";
  }
  if (save.tomesCollected.length < 3) {
    return "Explore — north portal: Mindspire · east: The Marches";
  }
  return `Explore ${map.name} and beyond — more realms coming`;
}

export function RealmHUD({
  save,
  toast,
  onEat,
  onDuel,
  onReset,
}: {
  save: RealmSave;
  toast: string | null;
  onEat: () => void;
  onDuel: () => void;
  onReset: () => void;
}) {
  const hpPct = (save.playerHp / save.playerMaxHp) * 100;
  const map = getRealmMap(save.currentArea);
  const quest = questText(save);

  return (
    <>
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 flex flex-wrap items-start justify-between gap-2 p-2 sm:p-3">
        <div className="pointer-events-auto flex gap-2">
          <div className="rounded-lg border border-[var(--gold)]/30 bg-black/80 px-3 py-2">
            <p className="text-[9px] uppercase tracking-wider text-[var(--muted)]">Hitpoints</p>
            <div className="mt-1 h-2 w-20 overflow-hidden rounded-full bg-white/10 sm:w-28">
              <div
                className="h-full rounded-full bg-red-500/80"
                style={{ width: `${hpPct}%` }}
              />
            </div>
            <p className="mt-0.5 text-xs text-[var(--silver)]">
              {save.playerHp}/{save.playerMaxHp}
            </p>
          </div>
          <div className="hidden rounded-lg border border-white/10 bg-black/80 px-3 py-2 sm:block">
            <p className="text-[9px] uppercase tracking-wider text-[var(--muted)]">Combat</p>
            <p className="text-sm font-semibold text-[var(--gold)]">Lvl {save.combatLevel}</p>
          </div>
          <div className="hidden rounded-lg border border-white/10 bg-black/80 px-3 py-2 md:block">
            <p className="text-[9px] uppercase tracking-wider text-[var(--muted)]">World</p>
            <p className="text-xs font-medium text-[var(--silver)]">
              {map.name}
              {map.isWilderness ? " ☠" : ""}
            </p>
            <p className="text-[10px] text-[var(--muted)]">
              {save.areasDiscovered.length}/3 areas
            </p>
          </div>
        </div>
        <div className="pointer-events-auto rounded-lg border border-white/10 bg-black/80 px-3 py-2 text-right">
          <p className="text-[9px] uppercase tracking-wider text-[var(--muted)]">Quest</p>
          <p className="max-w-[160px] text-xs text-[var(--silver)] sm:max-w-none">{quest}</p>
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
          🍞 Eat
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
          onClick={onReset}
          className="flex min-h-[44px] items-center justify-center rounded-xl border border-white/10 px-3 text-[10px] text-[var(--muted)] sm:text-xs"
          title="Reset realm save"
        >
          Reset
        </button>
      </div>
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
