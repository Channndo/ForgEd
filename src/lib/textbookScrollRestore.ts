const RESTORE_PREFIX = "forged-textbook-restore:";

export function textbookRestoreKey(courseSlug: string): string {
  return `${RESTORE_PREFIX}${courseSlug}`;
}

/** Queue scroll restoration after progress updates (e.g. chapter quiz pass). */
export function queueTextbookScrollRestore(
  courseSlug: string,
  anchorId: string
): void {
  if (typeof window === "undefined" || !anchorId) return;
  sessionStorage.setItem(textbookRestoreKey(courseSlug), anchorId);
}

export function consumeTextbookScrollRestore(courseSlug: string): string | null {
  if (typeof window === "undefined") return null;
  const key = textbookRestoreKey(courseSlug);
  const anchor = sessionStorage.getItem(key);
  if (anchor) sessionStorage.removeItem(key);
  return anchor;
}

export function scrollToTextbookAnchor(anchorId: string): void {
  if (typeof window === "undefined" || !anchorId) return;
  history.replaceState(null, "", `#${anchorId}`);
  requestAnimationFrame(() => {
    document.getElementById(anchorId)?.scrollIntoView({
      behavior: "instant",
      block: "start",
    });
  });
}
