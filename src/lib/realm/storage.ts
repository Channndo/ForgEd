import { DEFAULT_REALM_SAVE, type RealmSave } from "./types";

const KEY = "forged_realm_v1";

export function readRealmSave(): RealmSave {
  if (typeof window === "undefined") return { ...DEFAULT_REALM_SAVE };
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...DEFAULT_REALM_SAVE };
    return { ...DEFAULT_REALM_SAVE, ...JSON.parse(raw) };
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
