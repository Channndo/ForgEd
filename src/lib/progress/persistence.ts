import type { UserProgress } from "@/lib/types";
import { DEFAULT_PROGRESS } from "@/lib/progress";
import { levelFromXp } from "@/lib/xp";
import { syncCourseProgressFromLessons } from "@/lib/courseProgress";
import { getAccessToken, hasActiveSession } from "@/lib/forged-account/session";
import {
  loadUserDashboard,
  saveUserProgress as saveProgressToAccount,
} from "@/lib/forged-account/authApi";

const STORAGE_KEY = "forged_progress_v1";
const GUEST_MIGRATED_KEY = "forged_guest_migrated";

function hasMeaningfulProgress(data: UserProgress): boolean {
  return (
    data.xp > 0 ||
    data.completedLessons.length > 0 ||
    data.completedCourses.length > 0 ||
    data.completedModules.length > 0 ||
    Object.keys(data.quizScores ?? {}).length > 0 ||
    Object.keys(data.courseProgress ?? {}).length > 0
  );
}

function normalizeProgress(raw: Partial<UserProgress> | null): UserProgress {
  const data = { ...DEFAULT_PROGRESS, ...(raw ?? {}) };
  data.level = levelFromXp(data.xp);
  return syncCourseProgressFromLessons(data);
}

export function readLocalProgress(): UserProgress {
  if (typeof window === "undefined") return DEFAULT_PROGRESS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    return normalizeProgress(JSON.parse(raw) as UserProgress);
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function writeLocalProgress(data: UserProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizeProgress(data)));
}

export function clearLocalProgress(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

/** Progress is only stored locally and in the cloud for signed-in users. */
export function isProgressPersistenceEnabled(): boolean {
  return hasActiveSession();
}

export async function fetchRemoteProgress(): Promise<UserProgress | null> {
  if (!getAccessToken()) return null;
  try {
    const { progress } = await loadUserDashboard();
    return progress ? normalizeProgress(progress) : null;
  } catch {
    return null;
  }
}

export async function saveRemoteProgress(progress: UserProgress): Promise<void> {
  if (!getAccessToken()) return;
  const normalized = normalizeProgress(progress);
  try {
    await saveProgressToAccount(normalized);
  } catch {
    /* local cache remains until next sync */
  }
}

function mergeProgressRecords(remote: UserProgress, guest: UserProgress): UserProgress {
  const uniq = (a: string[], b: string[]) => [...new Set([...a, ...b])];
  return normalizeProgress({
    ...remote,
    xp: Math.max(remote.xp, guest.xp),
    streak: Math.max(remote.streak, guest.streak),
    completedLessons: uniq(remote.completedLessons, guest.completedLessons),
    completedModules: uniq(remote.completedModules, guest.completedModules),
    completedCourses: uniq(remote.completedCourses, guest.completedCourses),
    earnedBadges: uniq(remote.earnedBadges, guest.earnedBadges),
    courseReviewQuizPassed: uniq(
      remote.courseReviewQuizPassed ?? [],
      guest.courseReviewQuizPassed ?? []
    ),
    finalExamPassed: uniq(remote.finalExamPassed ?? [], guest.finalExamPassed ?? []),
    quizScores: { ...guest.quizScores, ...remote.quizScores },
    courseProgress: { ...guest.courseProgress, ...remote.courseProgress },
    chapterQuickChecks: { ...guest.chapterQuickChecks, ...remote.chapterQuickChecks },
    pathProgress: { ...guest.pathProgress, ...remote.pathProgress },
    activePathId: remote.activePathId ?? guest.activePathId,
  });
}

export async function migrateGuestProgress(userId: string): Promise<UserProgress> {
  const flag = `${GUEST_MIGRATED_KEY}:${userId}`;
  if (typeof window !== "undefined" && localStorage.getItem(flag)) {
    const remote = await fetchRemoteProgress();
    const local = readLocalProgress();
    if (remote && hasMeaningfulProgress(remote)) return remote;
    if (hasMeaningfulProgress(local)) {
      await saveRemoteProgress(local);
      return local;
    }
    return remote ?? local;
  }

  const guest = readLocalProgress();
  const remote = await fetchRemoteProgress();
  let merged: UserProgress;
  if (remote && hasMeaningfulProgress(remote)) {
    merged = mergeProgressRecords(remote, guest);
  } else if (hasMeaningfulProgress(guest)) {
    merged = guest;
  } else if (remote) {
    merged = remote;
  } else {
    merged = DEFAULT_PROGRESS;
  }

  writeLocalProgress(merged);
  if (hasMeaningfulProgress(merged)) {
    await saveRemoteProgress(merged);
  }
  if (typeof window !== "undefined") localStorage.setItem(flag, "1");
  return merged;
}

export function isProgressSyncConfigured(): boolean {
  return Boolean(
    typeof window !== "undefined" ||
      process.env.FORGED_WEB_APP_URL ||
      process.env.FORGED_SERVER_SECRET
  );
}
