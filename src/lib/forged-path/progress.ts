import type { UserProgress } from "@/lib/types";
import {
  FORGED_PATH_PHASES,
  FORGED_PATH_TOTAL_COURSES,
  type ForgedPathPhase,
} from "./curriculum";
import type { ForgedPathCourseVerification } from "./verification";

export interface ForgedPathProgressState {
  verifications: Record<string, ForgedPathCourseVerification>;
  certificateUnlockedAt?: string;
}

export function getForgedPathProgress(
  progress: UserProgress
): ForgedPathProgressState {
  const verifications = progress.forgedPathProgress?.verifications ?? {};
  return {
    verifications,
    certificateUnlockedAt: progress.forgedPathProgress?.certificateUnlockedAt,
  };
}

export function getVerifiedCourseIds(progress: UserProgress): string[] {
  return Object.keys(getForgedPathProgress(progress).verifications);
}

export function getCourseVerification(
  progress: UserProgress,
  courseId: string
): ForgedPathCourseVerification | undefined {
  return getForgedPathProgress(progress).verifications[courseId];
}

export function isForgedPathCourseComplete(
  progress: UserProgress,
  courseId: string
): boolean {
  return Boolean(getCourseVerification(progress, courseId));
}

export function forgedPathCompletedCount(progress: UserProgress): number {
  return getVerifiedCourseIds(progress).length;
}

export function forgedPathCoursePercent(progress: UserProgress): number {
  if (FORGED_PATH_TOTAL_COURSES === 0) return 0;
  return Math.round(
    (forgedPathCompletedCount(progress) / FORGED_PATH_TOTAL_COURSES) * 100
  );
}

export function isForgedPathPhaseComplete(
  progress: UserProgress,
  phase: ForgedPathPhase
): boolean {
  return phase.courses.every((course) =>
    isForgedPathCourseComplete(progress, course.id)
  );
}

export function forgedPathPhasePercent(
  progress: UserProgress,
  phase: ForgedPathPhase
): number {
  if (phase.courses.length === 0) return 0;
  const done = phase.courses.filter((course) =>
    isForgedPathCourseComplete(progress, course.id)
  ).length;
  return Math.round((done / phase.courses.length) * 100);
}

export function forgedPathCompletedPhaseCount(progress: UserProgress): number {
  return FORGED_PATH_PHASES.filter((phase) =>
    isForgedPathPhaseComplete(progress, phase)
  ).length;
}

export function isForgedPathCertificateUnlocked(progress: UserProgress): boolean {
  return forgedPathCompletedCount(progress) >= FORGED_PATH_TOTAL_COURSES;
}

export function submitForgedPathVerification(
  progress: UserProgress,
  verification: ForgedPathCourseVerification
): UserProgress {
  const current = getForgedPathProgress(progress);
  const verifications = {
    ...current.verifications,
    [verification.courseId]: verification,
  };
  const verifiedIds = Object.keys(verifications);
  const allComplete = verifiedIds.length >= FORGED_PATH_TOTAL_COURSES;

  return {
    ...progress,
    forgedPathProgress: {
      verifications,
      completedCourseIds: verifiedIds,
      certificateUnlockedAt:
        allComplete && !current.certificateUnlockedAt
          ? new Date().toISOString()
          : allComplete
            ? current.certificateUnlockedAt
            : undefined,
    },
  };
}

export function removeForgedPathVerification(
  progress: UserProgress,
  courseId: string
): UserProgress {
  const current = getForgedPathProgress(progress);
  const { [courseId]: _removed, ...verifications } = current.verifications;
  const verifiedIds = Object.keys(verifications);

  return {
    ...progress,
    forgedPathProgress: {
      verifications,
      completedCourseIds: verifiedIds,
      certificateUnlockedAt: undefined,
    },
  };
}
