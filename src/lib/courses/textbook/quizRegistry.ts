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
import { CONTRACTS_LAW_BANK } from "./banks/contracts-law";
import { CRIMINAL_LAW_FUNDAMENTALS_BANK } from "./banks/criminal-law-fundamentals";
import { TORTS_LAW_BANK } from "./banks/torts-law";
import { MECHANICAL_ENGINEERING_BASICS_BANK } from "./banks/mechanical-engineering-basics";
import { ELECTRICAL_ENGINEERING_BASICS_BANK } from "./banks/electrical-engineering-basics";
import { CIVIL_ENGINEERING_BASICS_BANK } from "./banks/civil-engineering-basics";
import { CHEMICAL_ENGINEERING_BASICS_BANK } from "./banks/chemical-engineering-basics";
import { INDUSTRIAL_ENGINEERING_BASICS_BANK } from "./banks/industrial-engineering-basics";
import { AEROSPACE_ENGINEERING_BASICS_BANK } from "./banks/aerospace-engineering-basics";
import { HVAC_FUNDAMENTALS_BANK } from "./banks/hvac-fundamentals";
import { PLUMBING_FUNDAMENTALS_BANK } from "./banks/plumbing-fundamentals";
import { ELECTRICAL_TRADES_FUNDAMENTALS_BANK } from "./banks/electrical-trades-fundamentals";
import { SCIENCE_FUNDAMENTALS_BANK } from "./banks/science-fundamentals";
import { HEALTHCARE_FUNDAMENTALS_BANK } from "./banks/healthcare-fundamentals";
import { CREATIVE_MEDIA_FUNDAMENTALS_BANK } from "./banks/creative-media-fundamentals";
import { PERSONAL_DEVELOPMENT_FUNDAMENTALS_BANK } from "./banks/personal-development-fundamentals";
import { TEACHING_FUNDAMENTALS_BANK } from "./banks/teaching-fundamentals";
import { ENTREPRENEURSHIP_FUNDAMENTALS_BANK } from "./banks/entrepreneurship-fundamentals";
import { PATH_BANKS } from "./pathBanks.generated";

function buildInsuranceBank(): QuizQuestion[] {
  const merged = [...INSURANCE_QUIZ_BANK, ...INSURANCE_SUPPLEMENT];
  return merged.length >= 200 ? merged.slice(0, 200) : merged;
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
  "contracts-law": CONTRACTS_LAW_BANK,
  "criminal-law-fundamentals": CRIMINAL_LAW_FUNDAMENTALS_BANK,
  "torts-law": TORTS_LAW_BANK,
  "mechanical-engineering-basics": MECHANICAL_ENGINEERING_BASICS_BANK,
  "electrical-engineering-basics": ELECTRICAL_ENGINEERING_BASICS_BANK,
  "civil-engineering-basics": CIVIL_ENGINEERING_BASICS_BANK,
  "chemical-engineering-basics": CHEMICAL_ENGINEERING_BASICS_BANK,
  "industrial-engineering-basics": INDUSTRIAL_ENGINEERING_BASICS_BANK,
  "aerospace-engineering-basics": AEROSPACE_ENGINEERING_BASICS_BANK,
  "hvac-fundamentals": HVAC_FUNDAMENTALS_BANK,
  "plumbing-fundamentals": PLUMBING_FUNDAMENTALS_BANK,
  "electrical-trades-fundamentals": ELECTRICAL_TRADES_FUNDAMENTALS_BANK,
  "science-fundamentals": SCIENCE_FUNDAMENTALS_BANK,
  "healthcare-fundamentals": HEALTHCARE_FUNDAMENTALS_BANK,
  "creative-media-fundamentals": CREATIVE_MEDIA_FUNDAMENTALS_BANK,
  "personal-development-fundamentals": PERSONAL_DEVELOPMENT_FUNDAMENTALS_BANK,
  "teaching-fundamentals": TEACHING_FUNDAMENTALS_BANK,
  "entrepreneurship-fundamentals": ENTREPRENEURSHIP_FUNDAMENTALS_BANK,
  ...PATH_BANKS,
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

/** Shuffle answer order so the same bank item feels different each attempt */
export function shuffleQuestionOptions(question: QuizQuestion): QuizQuestion {
  const order = [0, 1, 2, 3];
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  const options = order.map((i) => question.options[i]) as [
    string,
    string,
    string,
    string,
  ];
  const correctIndex = order.indexOf(question.correctIndex) as 0 | 1 | 2 | 3;
  return { ...question, options, correctIndex };
}

export function prepareQuestionsForAttempt(questions: QuizQuestion[]): QuizQuestion[] {
  return shuffleQuestions(questions.map(shuffleQuestionOptions));
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
  if (pool.length <= count) return prepareQuestionsForAttempt([...pool]);
  return prepareQuestionsForAttempt(shuffleQuestions(pool).slice(0, count));
}
