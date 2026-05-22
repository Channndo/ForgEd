/** Law survey courses use harder assessments than the global defaults. */

export const LAW_COURSE_SLUGS = new Set(["legal-fundamentals"]);

export const LAW_PASS_RATIO = 0.8;
export const LAW_FINAL_EXAM_LENGTH = 25;
export const LAW_CHAPTER_QUIZ_LENGTH = 7;
export const LAW_SECTION_QUIZ_LENGTH = 3;

export function isLawCourse(slug: string): boolean {
  return LAW_COURSE_SLUGS.has(slug);
}

export function getLawPassRatio(slug?: string): number {
  return slug && isLawCourse(slug) ? LAW_PASS_RATIO : 0.7;
}

export function getLawFinalExamLength(slug?: string): number {
  return slug && isLawCourse(slug) ? LAW_FINAL_EXAM_LENGTH : 20;
}

export function getLawChapterQuizLength(slug?: string): number {
  return slug && isLawCourse(slug) ? LAW_CHAPTER_QUIZ_LENGTH : 5;
}

export function getLawSectionQuizLength(slug?: string): number {
  return slug && isLawCourse(slug) ? LAW_SECTION_QUIZ_LENGTH : 2;
}

export function getLawExamPassMinimum(slug?: string): number {
  return Math.ceil(getLawFinalExamLength(slug) * getLawPassRatio(slug));
}

export function getLawPassPercent(slug?: string): number {
  return Math.round(getLawPassRatio(slug) * 100);
}
