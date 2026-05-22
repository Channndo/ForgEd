/**
 * LLM-assisted quiz banks (200 questions / course) via local Ollama.
 *
 * Usage:
 *   node scripts/generate-quiz-banks-llm.mjs --slug healthcare-fundamentals
 *   node scripts/generate-quiz-banks-llm.mjs --all
 *   node scripts/generate-quiz-banks-llm.mjs --all --model qwen2.5:7b --force
 *
 * Env: OLLAMA_BASE_URL (default http://127.0.0.1:11434)
 */
import fs from "fs";
import path from "path";
import { questionsPerChapter, TARGET_BANK_SIZE } from "./lib/quiz-bank-builder.mjs";
import { ollamaChat, parseJsonFromLlm } from "./lib/llm-ollama.mjs";

const ROOT = process.cwd();
const TEXTBOOKS = path.join(ROOT, "src/lib/courses/textbooks");
const BANKS = path.join(ROOT, "src/lib/courses/textbook/banks");
const CACHE = path.join(ROOT, "scripts/.cache/quiz-llm");

const SKIP_SLUGS = new Set(["insurance-fundamentals"]);

const args = process.argv.slice(2);
const slugArg = args.find((a) => a.startsWith("--slug="))?.split("=")[1];
const all = args.includes("--all");
const force = args.includes("--force");
const model =
  args.find((a) => a.startsWith("--model="))?.split("=")[1] ||
  process.env.QUIZ_LLM_MODEL ||
  "qwen2.5:7b";

function slugPrefix(slug) {
  const base = slug.split("-")[0];
  return base.length >= 3 ? base.slice(0, 6) : slug.slice(0, 4);
}

function extractChapters(slug) {
  const file = path.join(TEXTBOOKS, `${slug}.ts`);
  if (!fs.existsSync(file)) return null;
  const content = fs.readFileSync(file, "utf8");
  const chapters = [];
  const re = /chapter\(\s*[^,]+,\s*(\d+),\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(content))) {
    chapters.push({ num: Number(m[1]), title: m[2] });
  }
  return chapters.length ? chapters : null;
}

function chapterSnippet(slug, chapterNum) {
  const file = path.join(TEXTBOOKS, `${slug}.ts`);
  const content = fs.readFileSync(file, "utf8");
  const blockRe = new RegExp(
    `chapter\\([^,]+,\\s*${chapterNum},\\s*"[^"]+",\\s*\\[([\\s\\S]*?)\\]\\s*\\)`,
    "m"
  );
  const block = content.match(blockRe)?.[1] || "";
  const paras = [...block.matchAll(/section\([^,]+,[^,]+,\s*(\[[\s\S]*?\])\s*\)/g)];
  const first = paras[0]?.[1];
  if (!first) return "";
  try {
    const arr = JSON.parse(first.replace(/'/g, '"'));
    return Array.isArray(arr) ? arr.join(" ").slice(0, 1200) : "";
  } catch {
    return block.replace(/\s+/g, " ").slice(0, 800);
  }
}

function validateQuestion(item) {
  if (!item?.question || !Array.isArray(item.options) || item.options.length !== 4) {
    return null;
  }
  const ci = Number(item.correctIndex);
  if (!Number.isInteger(ci) || ci < 0 || ci > 3) return null;
  const options = item.options.map((o) => String(o).trim().slice(0, 220));
  if (options.some((o) => !o)) return null;
  return {
    question: String(item.question).trim().slice(0, 500),
    options,
    correctIndex: ci,
    explanation: String(item.explanation || "Review the chapter and retry a new randomized attempt.").slice(
      0,
      400
    ),
  };
}

const LLM_BATCH = 8;

async function generateChapterBatch({
  courseTitle,
  slug,
  chapter,
  count,
  prefix,
}) {
  const snippet = chapterSnippet(slug, chapter.num);
  const system = `You write rigorous multiple-choice practice questions for general education (not professional certification exams). Output ONLY valid JSON. No markdown outside JSON.`;
  const user = `Course: ${courseTitle} (${slug})
Chapter ${chapter.num}: ${chapter.title}
${snippet ? `Chapter context:\n${snippet}\n` : ""}
Write exactly ${count} rigorous multiple-choice questions for this chapter.
Rules:
- Professional exam tone (scenario-based, application, definitions, ethics, common errors)
- Four distinct options per question; exactly one correct
- No trick questions; no "all of the above"
- Explanations cite why the correct answer fits and what learners should review
- Do NOT mention AI, LLMs, or quiz generation

JSON shape:
{"questions":[{"question":"...","options":["A","B","C","D"],"correctIndex":0,"explanation":"..."}]}`;

  const text = await ollamaChat({ model, system, user, temperature: 0.35 });
  const parsed = parseJsonFromLlm(text);
  const list = Array.isArray(parsed) ? parsed : parsed.questions;
  if (!Array.isArray(list)) throw new Error("Expected questions array");

  const out = [];
  for (const item of list) {
    const v = validateQuestion(item);
    if (v) out.push(v);
    if (out.length >= count) break;
  }
  return out.slice(0, count);
}

async function generateChapterQuestions({
  courseTitle,
  slug,
  chapter,
  need,
  prefix,
  startIndex,
}) {
  const collected = [];
  let offset = startIndex;
  while (collected.length < need) {
    const batchSize = Math.min(LLM_BATCH, need - collected.length);
    let attempts = 0;
    let batch = [];
    while (attempts < 3 && batch.length < batchSize) {
      try {
        batch = await generateChapterBatch({
          courseTitle,
          slug,
          chapter,
          count: batchSize,
          prefix,
        });
      } catch (err) {
        attempts++;
        console.warn(
          `  ${slug} ch${chapter.num} batch retry ${attempts}:`,
          err.message
        );
      }
    }
    if (!batch.length) break;
    for (const q of batch) {
      const chs = String(chapter.num).padStart(2, "0");
      offset++;
      collected.push({
        ...q,
        id: `${prefix}-ch${chs}-q${String(offset).padStart(2, "0")}`,
      });
      if (collected.length >= need) break;
    }
  }
  if (collected.length < need) {
    throw new Error(`Got ${collected.length}/${need} for ch ${chapter.num}`);
  }
  return collected;
}

function writeBankFile(slug, questions) {
  const exportName = `${slug.replace(/-/g, "_").toUpperCase()}_BANK`;
  const lines = questions.map(
    (q) =>
      `  q(${JSON.stringify(q.id)}, ${JSON.stringify(q.question)}, ${JSON.stringify(q.options)}, ${q.correctIndex}, ${JSON.stringify(q.explanation)}),`
  );
  const body = `import type { QuizQuestion } from "@/lib/quizTypes";

function q(
  id: string,
  question: string,
  options: [string, string, string, string],
  correctIndex: 0 | 1 | 2 | 3,
  explanation: string
): QuizQuestion {
  return { id, question, options, correctIndex, explanation };
}

/** ${questions.length} LLM-generated questions — randomized draws */
export const ${exportName}: QuizQuestion[] = [
${lines.join("\n")}
];
`;
  fs.writeFileSync(path.join(BANKS, `${slug}.ts`), body);
}

function courseTitle(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

async function generateCourse(slug) {
  const chapters = extractChapters(slug);
  if (!chapters) {
    console.warn("skip (no textbook)", slug);
    return;
  }
  const cacheFile = path.join(CACHE, `${slug}.json`);
  if (!force && fs.existsSync(cacheFile)) {
    const cached = JSON.parse(fs.readFileSync(cacheFile, "utf8"));
    writeBankFile(slug, cached);
    console.log("cache", slug, cached.length);
    return;
  }

  const counts = questionsPerChapter(chapters.length, TARGET_BANK_SIZE);
  const prefix = slugPrefix(slug);
  const title = courseTitle(slug);
  const all = [];

  for (let i = 0; i < chapters.length; i++) {
    const ch = chapters[i];
    const need = counts[i];
    const startIndex = all.filter((q) => q.id?.includes(`-ch${String(ch.num).padStart(2, "0")}-`)).length;
    const batch = await generateChapterQuestions({
      courseTitle: title,
      slug,
      chapter: ch,
      need,
      prefix,
      startIndex,
    });
    all.push(...batch);
    console.log(`  ${slug} ch${ch.num}: ${batch.length} ok`);
  }

  if (all.length !== TARGET_BANK_SIZE) {
    console.warn(slug, `expected ${TARGET_BANK_SIZE}, got ${all.length}`);
  }

  fs.mkdirSync(CACHE, { recursive: true });
  fs.writeFileSync(cacheFile, JSON.stringify(all, null, 2));
  writeBankFile(slug, all);
  console.log("wrote", slug, all.length);
}

function listSlugs() {
  return fs
    .readdirSync(BANKS)
    .filter((f) => f.endsWith(".ts") && f !== "insurance-supplement.ts")
    .map((f) => f.replace(/\.ts$/, ""))
    .filter((s) => !SKIP_SLUGS.has(s))
    .sort();
}

async function main() {
  fs.mkdirSync(CACHE, { recursive: true });
  const slugs = slugArg ? [slugArg] : all ? listSlugs() : [];
  if (!slugs.length) {
    console.error("Provide --slug=name or --all");
    process.exit(1);
  }
  console.log("model", model, "courses", slugs.length);
  for (const slug of slugs) {
    await generateCourse(slug);
  }
  console.log("done");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
