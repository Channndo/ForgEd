/** Cybersecurity courses use harder assessments than the global defaults. */

export const CYBER_COURSE_SLUGS = new Set([
  "cybersecurity-basics",
  "threat-awareness",
  "password-security",
  "phishing-defense",
  "network-security",
  "incident-response-basics",
]);

export const CYBER_PASS_RATIO = 0.8;
export const CYBER_FINAL_EXAM_LENGTH = 25;
export const CYBER_CHAPTER_QUIZ_LENGTH = 7;
export const CYBER_SECTION_QUIZ_LENGTH = 3;

export function isCyberCourse(slug: string): boolean {
  return CYBER_COURSE_SLUGS.has(slug);
}

export function getPassRatio(slug?: string): number {
  return slug && isCyberCourse(slug) ? CYBER_PASS_RATIO : 0.7;
}

export function getFinalExamLength(slug?: string): number {
  return slug && isCyberCourse(slug) ? CYBER_FINAL_EXAM_LENGTH : 20;
}

export function getChapterQuizLength(slug?: string): number {
  return slug && isCyberCourse(slug) ? CYBER_CHAPTER_QUIZ_LENGTH : 5;
}

export function getSectionQuizLength(slug?: string): number {
  return slug && isCyberCourse(slug) ? CYBER_SECTION_QUIZ_LENGTH : 2;
}

export function getExamPassMinimum(slug?: string): number {
  return Math.ceil(getFinalExamLength(slug) * getPassRatio(slug));
}

export function getPassPercent(slug?: string): number {
  return Math.round(getPassRatio(slug) * 100);
}

/** Path mastery exams that draw only from cybersecurity courses */
export function isCybersecurityPath(pathId: string): boolean {
  return pathId === "cybersecurity";
}
