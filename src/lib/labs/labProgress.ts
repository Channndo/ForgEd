import type { UserProgress } from "@/lib/types";
import { readProgress, writeProgress } from "@/lib/progress";
import { saveLabProgress } from "@/lib/forged-account/authApi";
import { getAccessToken } from "@/lib/forged-account/session";

export function getLabState(progress: UserProgress, labId: string) {
  return (
    progress.labProgress?.[labId] ?? {
      completed: false,
      solutionViewed: false,
      retryRequired: false,
      xpEarned: 0,
    }
  );
}

export function canEarnLabXp(progress: UserProgress, labId: string): boolean {
  const state = getLabState(progress, labId);
  if (state.solutionViewed || state.retryRequired) return false;
  if (state.completed) return false;
  return true;
}

export function markLabSolutionViewed(labId: string): UserProgress {
  const data = readProgress();
  const prev = getLabState(data, labId);
  data.labProgress = {
    ...data.labProgress,
    [labId]: {
      ...prev,
      solutionViewed: true,
      retryRequired: true,
      completed: false,
      xpEarned: 0,
    },
  };
  const pp = data.pathProgress ?? {};
  for (const pathId of Object.keys(pp)) {
    const p = pp[pathId];
    if (p?.completedLabs?.includes(labId)) {
      p.completedLabs = p.completedLabs.filter((id) => id !== labId);
      pp[pathId] = p;
    }
  }
  data.pathProgress = pp;
  writeProgress(data);
  void persistLabRemote(labId, data.labProgress![labId]);
  return data;
}

export function completeLabWithXp(
  pathId: string,
  labId: string,
  xpReward: number
): UserProgress {
  const data = readProgress();
  if (!canEarnLabXp(data, labId)) {
    return data;
  }
  const prev = getLabState(data, labId);
  data.labProgress = {
    ...data.labProgress,
    [labId]: {
      ...prev,
      completed: true,
      xpEarned: xpReward,
      retryRequired: false,
      completedAt: new Date().toISOString(),
    },
  };
  const pp = data.pathProgress?.[pathId] ?? {
    completedCourseSlugs: [],
    completedLabs: [],
  };
  if (!pp.completedLabs.includes(labId)) {
    pp.completedLabs.push(labId);
    data.xp += xpReward;
  }
  data.pathProgress = { ...data.pathProgress, [pathId]: pp };
  writeProgress(data);
  void persistLabRemote(labId, data.labProgress![labId]);
  return data;
}

async function persistLabRemote(
  labId: string,
  state: NonNullable<UserProgress["labProgress"]>[string]
) {
  if (!getAccessToken()) return;
  try {
    await saveLabProgress({
      labName: labId,
      completed: state.completed,
      xpEarned: state.xpEarned,
      solutionViewed: state.solutionViewed,
      retryRequired: state.retryRequired,
      status: state.completed ? "completed" : "in_progress",
    });
  } catch {
    /* synced on next bulk save */
  }
}
