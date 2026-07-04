import { DEFAULT_REALM_SAVE, type RealmSave } from "./types";

const KEY = "forged_realm_v1";

export function readRealmSave(): RealmSave {
  if (typeof window === "undefined") return { ...DEFAULT_REALM_SAVE };
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...DEFAULT_REALM_SAVE };
    const parsed = JSON.parse(raw) as Partial<RealmSave>;
    // Deep-merge nested objects so old saves gain newly added skills/fields.
    return {
      ...DEFAULT_REALM_SAVE,
      ...parsed,
      skills: { ...DEFAULT_REALM_SAVE.skills, ...(parsed.skills ?? {}) },
      questProgress: { ...(parsed.questProgress ?? {}) },
      inventory: parsed.inventory ?? DEFAULT_REALM_SAVE.inventory.map((i) => ({ ...i })),
    };
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
}
