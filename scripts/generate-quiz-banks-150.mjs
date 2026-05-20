/**
 * Generates quiz bank modules with 150 questions per course (15 per chapter × 10 chapters).
 * Run: node scripts/generate-quiz-banks-150.mjs
 */
import fs from "fs";
import path from "path";

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

const TEMPLATES = [
  (topic, n) => ({
    q: `Regarding ${topic}, which statement is most accurate according to this textbook?`,
    correct: `The textbook emphasizes evidence-based understanding of ${topic}, not slogans or oversimplified myths.`,
    wrong: [
      `${topic} is unrelated to any learning objective in this course`,
      `${topic} should be ignored until the final exam only`,
      `${topic} has no connection to real-world decisions`,
    ],
  }),
  (topic, n) => ({
    q: `A learner studying ${topic} should prioritize:`,
    correct: `Connecting definitions to examples and applying concepts in realistic scenarios`,
    wrong: [
      `Memorizing jargon without reading chapter sections`,
      `Skipping chapter quizzes and only reading headings`,
      `Avoiding the 150-question practice bank entirely`,
    ],
  }),
  (topic, n) => ({
    q: `Which misconception about ${topic} does the course material explicitly challenge?`,
    correct: `That a single slogan or anecdote replaces careful reading and practice`,
    wrong: [
      `That textbooks never cite authoritative sources`,
      `That all professionals reject ${topic} entirely`,
      `That ${topic} cannot appear on any certification exam`,
    ],
  }),
];

function buildCourse(slug, { prefix, chapters }) {
  const lines = [];
  let global = 0;
  for (let ch = 1; ch <= 10; ch++) {
    const topic = chapters[ch - 1];
    const chs = String(ch).padStart(2, "0");
    for (let v = 0; v < 15; v++) {
      global++;
      const t = TEMPLATES[v % TEMPLATES.length](topic, v);
      const id = `${prefix}-ch${chs}-q${String(v + 1).padStart(2, "0")}`;
      const opts = [...t.wrong];
      const ci = v % 4;
      opts[ci] = t.correct;
      while (opts.length < 4) opts.push("None of the above");
      const options = opts.slice(0, 4);
      lines.push(
        `  q(${JSON.stringify(id)}, ${JSON.stringify(t.q)}, ${JSON.stringify(options)}, ${ci}, ${JSON.stringify(`Chapter ${ch} covers ${topic}. Review that section if you missed this question.`)}),`
      );
    }
  }
  const constName = slug.replace(/-/g, "_").toUpperCase();
  return `import type { QuizQuestion } from "@/lib/quizTypes";

function q(
  id: string,
  question: string,
  options: [string, string, string, string],
  correctIndex: 0 | 1 | 2 | 3,
  explanation: string
): QuizQuestion {
  return { id, question, options, correctIndex, explanation };
}

export const ${constName}_BANK: QuizQuestion[] = [
${lines.join("\n")}
];
`;
}

fs.mkdirSync(OUT_DIR, { recursive: true });
for (const [slug, meta] of Object.entries(COURSES)) {
  const file = path.join(OUT_DIR, `${slug}.ts`);
  fs.writeFileSync(file, buildCourse(slug, meta));
  console.log("wrote", slug, 150);
}

// insurance handled separately in merge
console.log("done");
