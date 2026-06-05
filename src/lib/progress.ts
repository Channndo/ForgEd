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
import { syncPathFromCourseComplete } from "./paths/pathProgress";

import { hasActiveSession } from "@/lib/forged-account/session";
import {
  readLocalProgress,
  writeLocalProgress,
} from "@/lib/progress/persistence";

let progressSyncHandler: ((data: UserProgress) => void) | null = null;

/** ProgressProvider registers debounced cloud sync */
export function registerProgressSync(handler: ((data: UserProgress) => void) | null) {
  progressSyncHandler = handler;
}

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
  sectionQuizzesPassed: {},
  courseReviewQuizPassed: [],
  finalExamPassed: [],
  pathProgress: {},
  labProgress: {},
  activePathId: null,
  dailyXpGoal: 150,
  dailyXpEarnedToday: 0,
  dailyXpDate: null,
  forgedPathProgress: { completedCourseIds: [] },
};

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayKey(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

function emptyProgress(): UserProgress {
  return { ...DEFAULT_PROGRESS };
}

export function readProgress(): UserProgress {
  if (!hasActiveSession()) return emptyProgress();
  return readLocalProgress();
}

export function writeProgress(data: UserProgress): void {
  if (!hasActiveSession()) return;
  data.level = levelFromXp(data.xp);
  const synced = syncCourseProgressFromLessons(data);
  writeLocalProgress(synced);
  progressSyncHandler?.(synced);
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

function trackDailyXp(data: UserProgress, amount: number): UserProgress {
  const today = todayKey();
  if (data.dailyXpDate !== today) {
    data.dailyXpDate = today;
    data.dailyXpEarnedToday = 0;
  }
  data.dailyXpEarnedToday = (data.dailyXpEarnedToday ?? 0) + amount;
  return data;
}

export function addXp(amount: number): UserProgress {
  let data = updateStreak(readProgress());
  data.xp += amount;
  data = trackDailyXp(data, amount);
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
  xpAmount = 100,
  courseSlug?: string
): UserProgress {
  let data = updateStreak(readProgress());
  data.quizScores[quizKey] = {
    score,
    total,
    at: new Date().toISOString(),
  };
  if (isPassingScore(score, total, courseSlug)) {
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
  xpAmount = 25,
  opts?: { sectionLessonIds?: string[]; courseSlug?: string; moduleId?: string }
): UserProgress {
  let data = updateStreak(readProgress());
  if (!data.chapterQuickChecks) data.chapterQuickChecks = {};
  const list = data.chapterQuickChecks[courseId] ?? [];
  if (!list.includes(chapterNum)) {
    data.chapterQuickChecks[courseId] = [...list, chapterNum].sort((a, b) => a - b);
    data.xp += xpAmount;
    for (const lessonId of opts?.sectionLessonIds ?? []) {
      if (!data.completedLessons.includes(lessonId)) {
        data.completedLessons.push(lessonId);
      }
    }
    if (opts?.courseSlug && opts?.moduleId) {
      data = maybeCompleteModule(data, opts.courseSlug, opts.moduleId);
    }
    if (opts?.courseSlug) {
      data = syncCourseProgressFromLessons(data);
    }
  }
  writeProgress(data);
  return data;
}

export function isSectionQuizPassed(
  courseId: string,
  lessonId: string
): boolean {
  const data = readProgress();
  return (data.sectionQuizzesPassed?.[courseId] ?? []).includes(lessonId);
}

export function markSectionQuizPassed(
  courseId: string,
  lessonId: string,
  opts?: { courseSlug?: string; moduleId?: string; xpAmount?: number }
): UserProgress {
  let data = updateStreak(readProgress());
  if (!data.sectionQuizzesPassed) data.sectionQuizzesPassed = {};
  const list = data.sectionQuizzesPassed[courseId] ?? [];
  if (!list.includes(lessonId)) {
    data.sectionQuizzesPassed[courseId] = [...list, lessonId];
    data.xp += opts?.xpAmount ?? 10;
    if (!data.completedLessons.includes(lessonId)) {
      data.completedLessons.push(lessonId);
    }
    if (opts?.courseSlug && opts?.moduleId) {
      data = maybeCompleteModule(data, opts.courseSlug, opts.moduleId);
    }
    if (opts?.courseSlug) {
      data = syncCourseProgressFromLessons(data);
    }
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

export function isCourseReviewQuizPassed(courseId: string): boolean {
  const data = readProgress();
  return (data.courseReviewQuizPassed ?? []).includes(courseId);
}

export function markCourseReviewQuizPassed(
  courseId: string,
  xpAmount = 75
): UserProgress {
  let data = updateStreak(readProgress());
  const list = data.courseReviewQuizPassed ?? [];
  if (!list.includes(courseId)) {
    data.courseReviewQuizPassed = [...list, courseId];
    data.xp += xpAmount;
  }
  writeProgress(data);
  return data;
}

export function isFinalExamPassed(courseId: string): boolean {
  const data = readProgress();
  return (data.finalExamPassed ?? []).includes(courseId);
}

export function markFinalExamPassed(
  courseId: string,
  xpAmount: number
): UserProgress {
  let data = updateStreak(readProgress());
  const list = data.finalExamPassed ?? [];
  if (!list.includes(courseId)) {
    data.finalExamPassed = [...list, courseId];
    data.xp += Math.round(xpAmount / 2);
  }
  writeProgress(data);
  return data;
}

/** Course completion requires passing the final exam */
export function passFinalExamAndCompleteCourse(
  courseId: string,
  score: number,
  total: number,
  xpAmount: number,
  courseSlug?: string
): UserProgress {
  let data = updateStreak(readProgress());
  data.quizScores[`${courseId}-exam`] = {
    score,
    total,
    at: new Date().toISOString(),
  };
  if (isPassingScore(score, total, courseSlug)) {
    const exams = data.finalExamPassed ?? [];
    if (!exams.includes(courseId)) {
      data.finalExamPassed = [...exams, courseId];
      data.xp += Math.round(xpAmount / 2);
    }
    if (!data.completedCourses.includes(courseId)) {
      data.completedCourses.push(courseId);
      data.xp += xpAmount;
      data.courseProgress[courseId] = 100;
      if (courseId === "insurance-fundamentals") {
        data = awardBadge(data, "insurance-complete");
      }
    }
    data = syncPathFromCourseComplete(data, courseId);
    data = awardBadge(data, "quiz-pass");
  }
  writeProgress(data);
  return data;
}

export function categoriesStarted(courseCategories: string[]): boolean {
  const unique = new Set(courseCategories);
  return unique.size >= 3;
}
