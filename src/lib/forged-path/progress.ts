import type { UserProgress } from "@/lib/types";
import {
  FORGED_PATH_PHASES,
  FORGED_PATH_TOTAL_COURSES,
  type ForgedPathPhase,
} from "./curriculum";

export interface ForgedPathProgressState {
  completedCourseIds: string[];
  certificateUnlockedAt?: string;
}

export function getForgedPathProgress(
  progress: UserProgress
): ForgedPathProgressState {
  return {
    completedCourseIds: progress.forgedPathProgress?.completedCourseIds ?? [],
    certificateUnlockedAt: progress.forgedPathProgress?.certificateUnlockedAt,
  };
}

export function isForgedPathCourseComplete(
  progress: UserProgress,
  courseId: string
): boolean {
  return getForgedPathProgress(progress).completedCourseIds.includes(courseId);
}

export function forgedPathCompletedCount(progress: UserProgress): number {
  return getForgedPathProgress(progress).completedCourseIds.length;
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

export function toggleForgedPathCourse(
  progress: UserProgress,
  courseId: string
): UserProgress {
  const current = getForgedPathProgress(progress);
  const completed = new Set(current.completedCourseIds);
  if (completed.has(courseId)) {
    completed.delete(courseId);
  } else {
    completed.add(courseId);
  }

  const completedCourseIds = [...completed];
  const allComplete = completedCourseIds.length >= FORGED_PATH_TOTAL_COURSES;

  return {
    ...progress,
    forgedPathProgress: {
      completedCourseIds,
      certificateUnlockedAt:
        allComplete && !current.certificateUnlockedAt
          ? new Date().toISOString()
          : allComplete
            ? current.certificateUnlockedAt
            : undefined,
    },
  };
}
