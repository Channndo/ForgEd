import { ASHFORD_MAP } from "./maps/ashford";
import { DEFAULT_REALM_SAVE, type RealmSave } from "./types";

const KEY = "forged_realm_v2";

function migrateSave(raw: Partial<RealmSave>): RealmSave {
  const base = { ...DEFAULT_REALM_SAVE, ...raw };

  if (!raw.currentArea) {
    base.currentArea = "ashford";
    base.playerPosition = ASHFORD_MAP.playerSpawn;
    base.areasDiscovered = ["ashford"];
  }
  if (!raw.tomesCollected) base.tomesCollected = [];
  if (!raw.interactableHp) base.interactableHp = {};
  if (!raw.areasDiscovered?.length) base.areasDiscovered = [base.currentArea];

  return base;
}

export function readRealmSave(): RealmSave {
  if (typeof window === "undefined") return { ...DEFAULT_REALM_SAVE };
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) {
      const legacy = localStorage.getItem("forged_realm_v1");
      if (legacy) {
        const migrated = migrateSave(JSON.parse(legacy));
        writeRealmSave(migrated);
        return migrated;
      }
      return { ...DEFAULT_REALM_SAVE };
    }
    return migrateSave(JSON.parse(raw));
  } catch {
    return { ...DEFAULT_REALM_SAVE };
  }
}

export function writeRealmSave(save: RealmSave): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(save));
}

export function resetRealmSave(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
  localStorage.removeItem("forged_realm_v1");
}
