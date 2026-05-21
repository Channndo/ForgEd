/** Post-signup welcome modal — storage keys and copy. */

export const WELCOME_SESSION_FLAG = "forged_show_welcome";
export const WELCOME_SEEN_KEY = "forged_welcome_seen_v1";

export const WELCOME_DISCLAIMER =
  "General education only — not legal, medical, or licensing advice.";

export function setWelcomePending(): void {
  if (typeof sessionStorage === "undefined") return;
  sessionStorage.setItem(WELCOME_SESSION_FLAG, "1");
}

export function shouldShowWelcomeModal(): boolean {
  if (typeof window === "undefined") return false;
  if (localStorage.getItem(WELCOME_SEEN_KEY)) return false;
  return sessionStorage.getItem(WELCOME_SESSION_FLAG) === "1";
}

export function markWelcomeSeen(): void {
  localStorage.setItem(WELCOME_SEEN_KEY, "1");
  sessionStorage.removeItem(WELCOME_SESSION_FLAG);
}
