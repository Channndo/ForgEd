import type { ForgedAccountUser } from "./types";

const TOKEN_KEY = "forged_access_token_v1";
const USER_KEY = "forged_profile_v1";

export function getAccessToken(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const t = localStorage.getItem(TOKEN_KEY);
    return t && t.length > 10 ? t : null;
  } catch {
    return null;
  }
}

export function readSession(): ForgedAccountUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? (JSON.parse(raw) as ForgedAccountUser) : null;
  } catch {
    return null;
  }
}

export function writeSession(accessToken: string, user: ForgedAccountUser): void {
  localStorage.setItem(TOKEN_KEY, accessToken);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function clearSession(): void {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function updateLocalProfile(
  patch: Partial<Pick<ForgedAccountUser, "displayName" | "username">>
): ForgedAccountUser | null {
  const current = readSession();
  const token = getAccessToken();
  if (!current || !token) return null;
  const next = {
    ...current,
    displayName: patch.displayName?.trim() ?? current.displayName,
    username: patch.username?.trim().toLowerCase() ?? current.username,
  };
  writeSession(token, next);
  return next;
}
