/**
 * Generates quiz bank modules with 200 questions per course.
 * Run: node scripts/generate-quiz-banks-150.mjs
 */
import fs from "fs";
import path from "path";
import { buildBankFile } from "./lib/quiz-bank-builder.mjs";

const OUT_DIR = path.join(process.cwd(), "src/lib/courses/textbook/banks");

const COURSES = {
  "ai-fundamentals": {
    prefix: "ai",
    chapters: [
      "intelligence & computation",
      "AI history",
      "machine learning",
      "neural networks",
      "large language models",
      "prompting & tools",
      "vision & speech",
      "ethics & safety",
      "AI in the workplace",
      "future of AI",
    ],
  },
  "cybersecurity-basics": {
    prefix: "cyber",
    chapters: [
      "CIA triad & risk",
      "threat actors",
      "authentication",
      "network security",
      "endpoint security",
      "cryptography",
      "social engineering",
      "application security",
      "incident response",
      "compliance & careers",
    ],
  },
  "it-fundamentals": {
    prefix: "it",
    chapters: [
      "computing history",
      "hardware",
      "operating systems",
      "storage & files",
      "networking",
      "internet & cloud",
      "troubleshooting",
      "IT security",
      "productivity tools",
      "IT careers",
    ],
  },
  "automotive-basics": {
    prefix: "auto",
    chapters: [
      "vehicle systems",
      "powertrain",
      "chassis & brakes",
      "electronics",
      "maintenance",
      "safety",
      "buying & finance",
      "insurance & law",
      "EV & hybrid",
      "autonomy",
    ],
  },
  "financial-literacy": {
    prefix: "fin",
    chapters: [
      "money & inflation",
      "budgeting",
      "banking",
      "credit",
      "debt",
      "saving",
      "investing",
      "insurance & risk",
      "taxes",
      "fraud & planning",
    ],
  },
  "communication-skills": {
    prefix: "comm",
    chapters: [
      "communication theory",
      "active listening",
      "verbal & nonverbal",
      "written communication",
      "persuasion",
      "presentations",
      "meetings",
      "conflict",
      "cross-cultural comm",
      "digital professionalism",
    ],
  },
  "business-foundations": {
    prefix: "biz",
    chapters: [
      "value creation",
      "business structures",
      "strategy",
      "marketing",
      "sales",
      "operations",
      "financial statements",
      "HR & culture",
      "entrepreneurship",
      "governance & growth",
    ],
  },
  "technology-for-beginners": {
    prefix: "tech",
    chapters: [
      "devices",
      "operating systems",
      "apps & updates",
      "internet & browsers",
      "email & messaging",
      "cloud accounts",
      "privacy & security",
      "accessibility",
      "troubleshooting",
      "digital citizenship",
    ],
  },
};

fs.mkdirSync(OUT_DIR, { recursive: true });
for (const [slug, meta] of Object.entries(COURSES)) {
  const exportName = `${slug.replace(/-/g, "_").toUpperCase()}_BANK`;
  const { body, total } = buildBankFile({
    slug,
    exportName,
    prefix: meta.prefix,
    chapterTitles: meta.chapters,
  });
  fs.writeFileSync(path.join(OUT_DIR, `${slug}.ts`), body);
  console.log("wrote", slug, total);
}
console.log("done");
