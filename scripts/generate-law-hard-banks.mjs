/**
 * Builds hard law quiz banks from scripts/data/law-hard/*.mjs
 * Run from repo root: node scripts/generate-law-hard-banks.mjs
 */
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "src/lib/courses/textbook/banks");
const QUESTIONS_PER_CHAPTER = 20;

/** @type {Record<string, { slug: string; exportName: string; prefix: string; module: string }>} */
const COURSES = {
  "legal-fundamentals": {
    slug: "legal-fundamentals",
    exportName: "LEGAL_FUNDAMENTALS_BANK",
    prefix: "lawf",
    module: "./data/law-hard/legal-fundamentals.mjs",
  },
};

function escapeTs(str) {
  return JSON.stringify(str);
}

function emitQuestion(id, item) {
  const opts = item.o;
  if (opts.length !== 4) {
    throw new Error(`Question ${id} must have exactly 4 options`);
  }
  const ci = item.c;
  if (ci < 0 || ci > 3) {
    throw new Error(`Question ${id} correct index must be 0-3`);
  }
  return `  q(${escapeTs(id)}, ${escapeTs(item.q)}, ${JSON.stringify(opts)}, ${ci}, ${escapeTs(item.e)}),`;
}

function buildBankFile({ exportName, prefix, chapters }) {
  const lines = [];
  let total = 0;

  for (let ch = 0; ch < chapters.length; ch++) {
    const chNum = ch + 1;
    const chs = String(chNum).padStart(2, "0");
    const { questions } = chapters[ch];
    for (let qi = 0; qi < questions.length; qi++) {
      total++;
      const qid = `${prefix}-ch${chs}-q${String(qi + 1).padStart(2, "0")}`;
      lines.push(emitQuestion(qid, questions[qi]));
    }
  }

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

/** ${total} hard questions — randomized section/chapter/course/final draws */
export const ${exportName}: QuizQuestion[] = [
${lines.join("\n")}
];
`;
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const cfg of Object.values(COURSES)) {
    const modPath = path.join(ROOT, "scripts", cfg.module.replace("./", ""));
    const { CHAPTERS } = await import(pathToFileURL(modPath).href);
    if (!Array.isArray(CHAPTERS) || CHAPTERS.length === 0) {
      throw new Error(`${cfg.module}: CHAPTERS missing or empty`);
    }
    for (let i = 0; i < CHAPTERS.length; i++) {
      const ch = CHAPTERS[i];
      if (!ch.questions || ch.questions.length !== QUESTIONS_PER_CHAPTER) {
        throw new Error(
          `${cfg.module} chapter ${i + 1} (${ch.title}): expected ${QUESTIONS_PER_CHAPTER} questions, got ${ch.questions?.length ?? 0}`
        );
      }
    }
    const body = buildBankFile({
      exportName: cfg.exportName,
      prefix: cfg.prefix,
      chapters: CHAPTERS,
    });
    const outPath = path.join(OUT_DIR, `${cfg.slug}.ts`);
    fs.writeFileSync(outPath, body, "utf8");
    const count = CHAPTERS.reduce((n, ch) => n + ch.questions.length, 0);
    console.log(`Wrote ${outPath} (${count} questions, ${CHAPTERS.length} chapters)`);
  }
}

function pathToFileURL(p) {
  return new URL(`file://${p}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
