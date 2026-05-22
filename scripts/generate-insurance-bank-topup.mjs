/**
 * Appends rigorous supplement questions so insurance-fundamentals reaches 200 in the merged bank.
 * Run: node scripts/generate-insurance-bank-topup.mjs
 */
import fs from "fs";
import path from "path";
import { buildBankFile } from "./lib/quiz-bank-builder.mjs";

const SUPPLEMENT_PATH = path.join(
  process.cwd(),
  "src/lib/courses/textbook/banks/insurance-supplement.ts"
);

const CHAPTERS = [
  "why insurance matters",
  "insurance history",
  "regulation",
  "federal laws",
  "insurer rules",
  "P&C lines",
  "life & health",
  "claims",
  "underwriting",
  "risk management",
  "agency operations",
  "buying insurance",
  "ethics & professionalism",
];

const { body, total } = buildBankFile({
  slug: "insurance-fundamentals",
  exportName: "INSURANCE_TOPUP",
  prefix: "ins-top",
  chapterTitles: CHAPTERS,
});

// Take last 38 questions (110 main + 52 old supplement + 38 = 200)
const topupOnly = body.replace(
  /export const INSURANCE_TOPUP: QuizQuestion\[\] = \[\n/,
  ""
);
const lines = topupOnly
  .split("\n")
  .filter((l) => l.trim().startsWith("q("));
const topupLines = lines.slice(-38);

const header = `import type { QuizQuestion } from "@/lib/quizTypes";
function q(id: string, question: string, options: [string, string, string, string], correctIndex: 0 | 1 | 2 | 3, explanation: string): QuizQuestion {return {id, question, options, correctIndex, explanation};}
export const INSURANCE_SUPPLEMENT: QuizQuestion[] = [
`;

const existing = fs.readFileSync(SUPPLEMENT_PATH, "utf8");
const existingLines = existing
  .split("\n")
  .filter((l) => l.trim().startsWith("q("));

const merged = [...existingLines, ...topupLines].join("\n");
fs.writeFileSync(
  SUPPLEMENT_PATH,
  `${header}${merged}\n];\n`
);
console.log("insurance supplement:", existingLines.length + topupLines.length, "questions (topup +38 →", total, "generated)");
