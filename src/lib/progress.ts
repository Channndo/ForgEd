"use client";

import type { UserProgress } from "./types";
import { getBadge } from "./badges";
import { levelFromXp } from "./xp";
import { isPassingScore } from "./quizTypes";
import {
  courseIdForLesson,
  maybeCompleteModule,
  syncCourseProgressFromLessons,
} from "./courseProgress";
import { COURSES } from "./courses/catalog";

const STORAGE_KEY = "forged_progress_v1";

export const DEFAULT_PROGRESS: UserProgress = {
  xp: 0,
  level: 1,
  streak: 0,
  lastActiveDate: null,
  completedLessons: [],
  completedModules: [],
  completedCourses: [],
  quizScores: {},
  earnedBadges: [],
  courseProgress: {},
  chapterQuickChecks: {},
};

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayKey(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

export function readProgress(): UserProgress {
  if (typeof window === "undefined") return DEFAULT_PROGRESS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw) as UserProgress;
    const data = { ...DEFAULT_PROGRESS, ...parsed };
    data.level = levelFromXp(data.xp);
    return syncCourseProgressFromLessons(data);
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function writeProgress(data: UserProgress): void {
  if (typeof window === "undefined") return;
  data.level = levelFromXp(data.xp);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function updateStreak(data: UserProgress): UserProgress {
  const today = todayKey();
  const yesterday = yesterdayKey();
  if (data.lastActiveDate === today) return data;
  if (data.lastActiveDate === yesterday) {
    data.streak += 1;
  } else {
    data.streak = 1;
  }
  data.lastActiveDate = today;
  return data;
}

function awardBadge(data: UserProgress, badgeId: string): UserProgress {
  if (data.earnedBadges.includes(badgeId)) return data;
  const badge = getBadge(badgeId);
  data.earnedBadges.push(badgeId);
  if (badge) data.xp += badge.xpBonus;
  return data;
}

export function addXp(amount: number): UserProgress {
  const data = updateStreak(readProgress());
  data.xp += amount;
  writeProgress(data);
  return data;
}

export function completeLesson(
  lessonId: string,
  xpAmount = 15,
  opts?: { courseSlug?: string; moduleId?: string }
): UserProgress {
  let data = updateStreak(readProgress());
  if (!data.completedLessons.includes(lessonId)) {
    data.completedLessons.push(lessonId);
    data.xp += xpAmount;
    if (data.completedLessons.length === 1) {
      data = awardBadge(data, "first-lesson");
    }
  }
  const courseId = courseIdForLesson(lessonId);
  const course = courseId
    ? COURSES.find((c) => c.id === courseId)
    : undefined;
  const slug = opts?.courseSlug ?? course?.slug;
  const moduleId = opts?.moduleId;
  if (slug && moduleId) {
    data = maybeCompleteModule(data, slug, moduleId);
  }
  data = syncCourseProgressFromLessons(data);
  writeProgress(data);
  return data;
}

export function completeModule(moduleId: string, xpAmount = 50): UserProgress {
  let data = updateStreak(readProgress());
  if (!data.completedModules.includes(moduleId)) {
    data.completedModules.push(moduleId);
    data.xp += xpAmount;
  }
  writeProgress(data);
  return data;
}

export function recordQuiz(
  quizKey: string,
  score: number,
  total: number,
  xpAmount = 100
): UserProgress {
  let data = updateStreak(readProgress());
  data.quizScores[quizKey] = {
    score,
    total,
    at: new Date().toISOString(),
  };
  if (isPassingScore(score, total)) {
    data.xp += xpAmount;
    data = awardBadge(data, "quiz-pass");
  }
  if (data.streak >= 3) data = awardBadge(data, "streak-3");
  if (data.streak >= 7) data = awardBadge(data, "streak-7");
  writeProgress(data);
  return data;
}

export function completeCourse(
  courseId: string,
  xpAmount: number
): UserProgress {
  let data = updateStreak(readProgress());
  if (!data.completedCourses.includes(courseId)) {
    data.completedCourses.push(courseId);
    data.xp += xpAmount;
    data.courseProgress[courseId] = 100;
    if (courseId === "insurance-fundamentals") {
      data = awardBadge(data, "insurance-complete");
    }
  }
  writeProgress(data);
  return data;
}

export function markTextbookChapter(
  courseId: string,
  chapterNum: number
): UserProgress {
  let data = updateStreak(readProgress());
  if (courseId === "insurance-fundamentals" && chapterNum === 1) {
    data = awardBadge(data, "insurance-ch1");
  }
  writeProgress(data);
  return data;
}

export function isChapterQuickCheckPassed(
  courseId: string,
  chapterNum: number
): boolean {
  const data = readProgress();
  return (data.chapterQuickChecks?.[courseId] ?? []).includes(chapterNum);
}

export function markChapterQuickCheckPassed(
  courseId: string,
  chapterNum: number,
  xpAmount = 25
): UserProgress {
  let data = updateStreak(readProgress());
  if (!data.chapterQuickChecks) data.chapterQuickChecks = {};
  const list = data.chapterQuickChecks[courseId] ?? [];
  if (!list.includes(chapterNum)) {
    data.chapterQuickChecks[courseId] = [...list, chapterNum].sort((a, b) => a - b);
    data.xp += xpAmount;
  }
  writeProgress(data);
  return data;
}

export function countChapterQuickChecksPassed(
  courseId: string,
  totalChapters: number
): { passed: number; total: number } {
  const data = readProgress();
  const passed = (data.chapterQuickChecks?.[courseId] ?? []).filter(
    (n) => n >= 1 && n <= totalChapters
  ).length;
  return { passed, total: totalChapters };
}

export function categoriesStarted(courseCategories: string[]): boolean {
  const unique = new Set(courseCategories);
  return unique.size >= 3;
}
