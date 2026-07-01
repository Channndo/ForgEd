"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { RealmCharter } from "./RealmCharter";
import { RealmCharacterCreator } from "./RealmCharacterCreator";
import { RealmDialogue, RealmHUD } from "./RealmHUD";
import { RealmWorld, useRealmCombat } from "./RealmWorld";
import { readRealmSave, resetRealmSave, writeRealmSave } from "@/lib/realm/storage";
import { ASHFORD_MAP } from "@/lib/realm/maps/ashford";
import type { RealmCharacter, RealmNpc, RealmSave } from "@/lib/realm/types";

export default function RealmGame() {
  const [save, setSave] = useState<RealmSave | null>(null);
  const [dialogueNpc, setDialogueNpc] = useState<RealmNpc | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const { eatBread, doDuel } = useRealmCombat(save ?? readRealmSave(), setSave);

  useEffect(() => {
    setSave(readRealmSave());
  }, []);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  }, []);

  const persist = useCallback((next: RealmSave) => {
    writeRealmSave(next);
    setSave(next);
  }, []);

  if (!save) {
    return (
      <div className="flex h-[100dvh] items-center justify-center bg-[#0a0a0a] text-[var(--muted)]">
        Loading realm…
      </div>
    );
  }

  if (!save.charterAccepted) {
    return (
      <div className="h-[100dvh]">
        <RealmCharter
          onAccept={() => {
            persist({ ...save, charterAccepted: true, tutorialStage: "creator" });
          }}
        />
      </div>
    );
  }

  if (!save.character || save.tutorialStage === "creator") {
    return (
      <div className="h-[100dvh]">
        <RealmCharacterCreator
          onComplete={(character: RealmCharacter) => {
            persist({
              ...save,
              character,
              tutorialStage: "move",
              currentArea: "ashford",
              playerPosition: { ...ASHFORD_MAP.playerSpawn },
              areasDiscovered: ["ashford"],
            });
            showToast("Walk to the five lanterns. Sir Reginald is in the square.");
          }}
        />
      </div>
    );
  }

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-[#0a0a0a]">
      <Link
        href="/community"
        className="absolute right-2 top-2 z-20 flex items-center gap-1 rounded-lg border border-white/10 bg-black/70 px-2 py-1.5 text-[10px] text-[var(--muted)] sm:right-auto sm:left-2 sm:text-xs"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Exit
      </Link>

      <RealmWorld
        save={save}
        onSave={persist}
        onDialogue={setDialogueNpc}
        onToast={showToast}
      />

      <RealmHUD
        save={save}
        toast={toast}
        onEat={() => {
          if (eatBread()) showToast("You eat bread. Betty would be proud. Maybe.");
          else showToast("You're full, or not hurt enough to bother.");
        }}
        onDuel={() => {
          if (save.tutorialStage === "duel") {
            setDialogueNpc({
              id: "crisp",
              name: "Duel Master Crisp",
              x: 19,
              y: 4,
              color: "#c9a962",
              lines: ["Rules: no loot, much shame."],
            });
          } else if (doDuel()) {
            showToast("Duel complete. You're still alive. Embarrassing.");
          }
        }}
        onReset={() => {
          resetRealmSave();
          setSave(readRealmSave());
          showToast("Realm save reset.");
        }}
      />

      {dialogueNpc && (
        <RealmDialogue
          npc={dialogueNpc}
          onClose={() => setDialogueNpc(null)}
          showDuel={dialogueNpc.id === "crisp" && save.tutorialStage === "duel"}
          onDuel={() => {
            doDuel();
            showToast("You duel Crisp. Nobody dies. Everyone judges you.");
          }}
        />
      )}
    </div>
  );
}
