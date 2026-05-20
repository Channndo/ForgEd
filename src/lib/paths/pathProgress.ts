"use client";

import type { UserProgress } from "@/lib/types";
import {
  LEARNING_PATHS,
  getLearningPathById,
  resolveCatalogSlug,
  type LearningPath,
} from "./learningPaths";
import { readProgress, writeProgress } from "@/lib/progress";
import { levelFromXp } from "@/lib/xp";
import { getBadge } from "@/lib/badges";

export function getPathProgress(
  progress: UserProgress,
  pathId: string
): NonNullable<UserProgress["pathProgress"]>[string] {
  return (
    progress.pathProgress?.[pathId] ?? {
      completedCourseSlugs: [],
      completedLabs: [],
      masteryExamPassed: false,
      badgeEarned: false,
    }
  );
}

export function isPathUnlocked(progress: UserProgress, path: LearningPath): boolean {
  const req = path.unlockRequirement;
  if (!req) return true;
  if (req.type === "level") {
    return levelFromXp(progress.xp) >= req.level;
  }
  const parent = getPathProgress(progress, req.pathId);
  return Boolean(parent.masteryExamPassed && parent.badgeEarned);
}

export function isCourseCompleteInProgress(
  progress: UserProgress,
  catalogSlug: string
): boolean {
  const course = progress.completedCourses.find((id) => id === catalogSlug);
  if (course) return true;
  return progress.finalExamPassed?.includes(catalogSlug) ?? false;
}

export function isPathCourseUnlocked(
  progress: UserProgress,
  path: LearningPath,
  stepIndex: number
): boolean {
  if (!isPathUnlocked(progress, path)) return false;
  if (stepIndex === 0) return true;
  const prev = path.courses[stepIndex - 1];
  const prevSlug = resolveCatalogSlug(prev.slug);
  return isCourseCompleteInProgress(progress, prevSlug);
}

export function pathCompletionPercent(
  progress: UserProgress,
  path: LearningPath
): number {
  const total = path.courses.length + (path.masteryExamQuestions > 0 ? 1 : 0);
  if (total === 0) return 0;
  const pp = getPathProgress(progress, path.id);
  let done = pp.completedCourseSlugs.length;
  if (pp.masteryExamPassed) done += 1;
  return Math.round((done / total) * 100);
}

export function getContinuePathCourse(
  progress: UserProgress,
  path: LearningPath
): { slug: string; title: string; stepIndex: number } | null {
  if (!isPathUnlocked(progress, path)) return null;
  for (let i = 0; i < path.courses.length; i++) {
    const step = path.courses[i];
    const catalogSlug = resolveCatalogSlug(step.slug);
    if (!isCourseCompleteInProgress(progress, catalogSlug)) {
      if (isPathCourseUnlocked(progress, path, i)) {
        return { slug: catalogSlug, title: step.title, stepIndex: i };
      }
      return null;
    }
  }
  return null;
}

export function markPathCourseComplete(
  pathId: string,
  catalogSlug: string
): UserProgress {
  const data = readProgress();
  const pp = getPathProgress(data, pathId);
  if (!pp.completedCourseSlugs.includes(catalogSlug)) {
    pp.completedCourseSlugs.push(catalogSlug);
  }
  if (!pp.startedAt) pp.startedAt = new Date().toISOString();
  data.pathProgress = { ...data.pathProgress, [pathId]: pp };
  writeProgress(data);
  return data;
}

/** Call when final exam passed — syncs path course completion */
export function syncPathFromCourseComplete(
  progress: UserProgress,
  catalogSlug: string
): UserProgress {
  const data = { ...progress };
  for (const path of LEARNING_PATHS) {
    const step = path.courses.find(
      (c) => resolveCatalogSlug(c.slug) === catalogSlug
    );
    if (!step) continue;
    const pp = getPathProgress(data, path.id);
    if (!pp.completedCourseSlugs.includes(catalogSlug)) {
      pp.completedCourseSlugs.push(catalogSlug);
    }
    if (!pp.startedAt) pp.startedAt = new Date().toISOString();
    data.pathProgress = { ...data.pathProgress, [path.id]: pp };
  }
  return data;
}

export function markPathMasteryPassed(pathId: string): UserProgress {
  const data = readProgress();
  const path = getLearningPathById(pathId);
  const pp = getPathProgress(data, pathId);
  pp.masteryExamPassed = true;
  if (path && !pp.badgeEarned) {
    pp.badgeEarned = true;
    if (!data.earnedBadges.includes(path.badgeId)) {
      data.earnedBadges.push(path.badgeId);
      const badge = getBadge(path.badgeId);
      if (badge) data.xp += badge.xpBonus;
    }
  }
  data.pathProgress = { ...data.pathProgress, [pathId]: pp };
  writeProgress(data);
  return data;
}

export function completePathLab(
  pathId: string,
  labId: string,
  xpReward: number
): UserProgress {
  const data = readProgress();
  const pp = getPathProgress(data, pathId);
  if (!pp.completedLabs.includes(labId)) {
    pp.completedLabs.push(labId);
    data.xp += xpReward;
  }
  data.pathProgress = { ...data.pathProgress, [pathId]: pp };
  writeProgress(data);
  return data;
}

export function setActivePath(pathId: string | null): UserProgress {
  const data = readProgress();
  data.activePathId = pathId;
  writeProgress(data);
  return data;
}

export function getRecommendedPaths(progress: UserProgress): LearningPath[] {
  return LEARNING_PATHS.filter((p) => isPathUnlocked(progress, p)).slice(0, 3);
}
