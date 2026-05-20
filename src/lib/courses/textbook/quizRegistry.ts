import type { QuizQuestion } from "@/lib/quizTypes";
import { INSURANCE_QUIZ_BANK } from "@/lib/courses/insurance/quizBank";
import { INSURANCE_SUPPLEMENT } from "./banks/insurance-supplement";
import { chapterForQuizQuestion as insuranceChapterForId } from "@/lib/courses/insurance/quizUtils";
import { AI_FUNDAMENTALS_BANK } from "./banks/ai-fundamentals";
import { CYBERSECURITY_BASICS_BANK } from "./banks/cybersecurity-basics";
import { IT_FUNDAMENTALS_BANK } from "./banks/it-fundamentals";
import { AUTOMOTIVE_BASICS_BANK } from "./banks/automotive-basics";
import { FINANCIAL_LITERACY_BANK } from "./banks/financial-literacy";
import { COMMUNICATION_SKILLS_BANK } from "./banks/communication-skills";
import { BUSINESS_FOUNDATIONS_BANK } from "./banks/business-foundations";
import { TECHNOLOGY_FOR_BEGINNERS_BANK } from "./banks/technology-for-beginners";
import { LEGAL_FUNDAMENTALS_BANK } from "./banks/legal-fundamentals";
import { BUSINESS_LAW_BANK } from "./banks/business-law";
import { CONSTITUTIONAL_LAW_BANK } from "./banks/constitutional-law";
import { MECHANICAL_ENGINEERING_BASICS_BANK } from "./banks/mechanical-engineering-basics";
import { ELECTRICAL_ENGINEERING_BASICS_BANK } from "./banks/electrical-engineering-basics";
import { CIVIL_ENGINEERING_BASICS_BANK } from "./banks/civil-engineering-basics";

function buildInsuranceBank(): QuizQuestion[] {
  const merged = [...INSURANCE_QUIZ_BANK, ...INSURANCE_SUPPLEMENT];
  return merged.slice(0, 150);
}

const BANKS: Record<string, QuizQuestion[]> = {
  "insurance-fundamentals": buildInsuranceBank(),
  "ai-fundamentals": AI_FUNDAMENTALS_BANK,
  "cybersecurity-basics": CYBERSECURITY_BASICS_BANK,
  "it-fundamentals": IT_FUNDAMENTALS_BANK,
  "automotive-basics": AUTOMOTIVE_BASICS_BANK,
  "financial-literacy": FINANCIAL_LITERACY_BANK,
  "communication-skills": COMMUNICATION_SKILLS_BANK,
  "business-foundations": BUSINESS_FOUNDATIONS_BANK,
  "technology-for-beginners": TECHNOLOGY_FOR_BEGINNERS_BANK,
  "legal-fundamentals": LEGAL_FUNDAMENTALS_BANK,
  "business-law": BUSINESS_LAW_BANK,
  "constitutional-law": CONSTITUTIONAL_LAW_BANK,
  "mechanical-engineering-basics": MECHANICAL_ENGINEERING_BASICS_BANK,
  "electrical-engineering-basics": ELECTRICAL_ENGINEERING_BASICS_BANK,
  "civil-engineering-basics": CIVIL_ENGINEERING_BASICS_BANK,
};

export function getQuizBank(slug: string): QuizQuestion[] {
  return BANKS[slug] ?? [];
}

export function getQuizBankSize(slug: string): number {
  return getQuizBank(slug).length;
}

/** Parse chapter number from standard bank id: prefix-ch03-q07 */
export function chapterFromQuestionId(slug: string, id: string): number {
  if (slug === "insurance-fundamentals") {
    return insuranceChapterForId(id);
  }
  const m = id.match(/-ch(\d{2})-/i) ?? id.match(/ch(\d{2})/i);
  if (m) return parseInt(m[1], 10);
  return 1;
}

export function shuffleQuestions<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function questionsForChapter(
  slug: string,
  chapterNumber: number
): QuizQuestion[] {
  return getQuizBank(slug).filter(
    (q) => chapterFromQuestionId(slug, q.id) === chapterNumber
  );
}

export function pickRandomQuestions(
  slug: string,
  count: number,
  opts?: { chapterNumber?: number }
): QuizQuestion[] {
  let pool = getQuizBank(slug);
  if (opts?.chapterNumber != null) {
    pool = questionsForChapter(slug, opts.chapterNumber);
  }
  if (pool.length <= count) return shuffleQuestions([...pool]);
  return shuffleQuestions(pool).slice(0, count);
}
