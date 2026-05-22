/**
 * Upgrades placeholder textbooks to substantive depth content.
 * Run: node scripts/upgrade-all-textbooks.mjs
 */
import fs from "fs";
import path from "path";
import {
  inferDomain,
  buildSectionContent,
  buildChapterMeta,
  buildIntroParagraphs,
  buildSubtitle,
} from "./lib/textbook-depth.mjs";

const TEXTBOOKS_DIR = path.join(process.cwd(), "src/lib/courses/textbooks");
const PLACEHOLDER_RE = /core concepts \(1\)|stops being abstract|is a core topic in/;
const WEAK_TEMPLATE_RE =
  /ForgEd workforce textbook —|Learners who memorize titles without mechanisms/;

const SKIP_FILES = new Set([
  "healthcare-fundamentals.ts",
]);

const SKIP_DIRS = new Set(["healthcare"]);

/** Hand-authored deep textbooks — never overwrite via bulk upgrade */
const DEEP_SLUGS = new Set([
  "ai-fundamentals",
  "automotive-basics",
  "business-foundations",
  "communication-skills",
  "cybersecurity-basics",
  "financial-literacy",
  "it-fundamentals",
  "technology-for-beginners",
  "plumbing-fundamentals",
  "electrical-trades-fundamentals",
  "hvac-fundamentals",
]);

/** Tier C — force rebuild to current generator depth (even if not placeholder) */
const FORCE_UPGRADE_SLUGS = new Set([
  "legal-fundamentals",
  "ai-workflow-automation",
  "ai-productivity-systems",
  "ai-for-entrepreneurs",
  "ai-research-skills",
  "prompting-fundamentals",
  "ai-ethics-risks",
  "ai-assisted-sales",
  "ai-automotive-service",
  "phishing-defense",
  "password-security",
  "threat-awareness",
  "network-security",
  "incident-response-basics",
  "sales-school-101",
  "crm-fundamentals",
  "objection-handling",
  "negotiation-basics",
  "customer-psychology",
  "customer-acquisition",
  "follow-up-systems",
  "maintenance-selling",
  "warranty-basics",
  "repair-order-workflow",
  "service-advising-fundamentals",
  "customer-communication-service",
  "difficult-customer-scenarios",
  "digital-presence",
  "branding-fundamentals",
]);

function listTextbookFiles() {
  const out = [];
  for (const ent of fs.readdirSync(TEXTBOOKS_DIR, { withFileTypes: true })) {
    if (ent.isDirectory()) {
      if (SKIP_DIRS.has(ent.name)) continue;
      continue;
    }
    if (ent.name.endsWith(".ts") && !SKIP_FILES.has(ent.name)) {
      out.push(path.join(TEXTBOOKS_DIR, ent.name));
    }
  }
  return out;
}

function parseTextbookFile(content, filename) {
  const prefixMatch = content.match(/export const (\w+)_TEXTBOOK_INTRO/);
  if (!prefixMatch) return null;
  const prefix = prefixMatch[1];

  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  const title = titleMatch?.[1] ?? filename.replace(".ts", "").replace(/-/g, " ");

  const slug = filename.replace(".ts", "");
  const chapters = [];
  const chRe = /chapter\(\s*"([^"]+)",\s*(\d+),\s*"([^"]+)"/g;
  let m;
  while ((m = chRe.exec(content))) {
    chapters.push({ id: m[1], number: Number(m[2]), title: m[3] });
  }
  if (!chapters.length) return null;

  return { prefix, title, slug, chapters };
}

function emitSection(sectionId, chapterNum, sectionNum, chapterTitle, section) {
  const title = `${chapterNum}.${sectionNum} ${chapterTitle} — ${section.heading}`;
  const extras = [];
  if (section.bulletPoints?.length) {
    extras.push(`bulletPoints: ${JSON.stringify(section.bulletPoints)}`);
  }
  if (section.citations?.length) {
    extras.push(`citations: ${JSON.stringify(section.citations)}`);
  }
  const extrasBlock = extras.length
    ? `, {\n        ${extras.join(",\n        ")}\n      }`
    : "";
  return `    section(
      ${JSON.stringify(sectionId)},
      ${JSON.stringify(title)},
      ${JSON.stringify(section.paragraphs)}${extrasBlock}
    )`;
}

function emitChapter(ch, courseTitle, domain) {
  const sections = [];
  for (let s = 1; s <= 5; s++) {
    const data = buildSectionContent(ch.title, courseTitle, domain, s);
    sections.push({
      id: `${ch.id}-s${s}`,
      ...data,
    });
  }
  const meta = buildChapterMeta(ch.title, courseTitle, domain, sections);
  const sectionBlocks = sections
    .map((sec, i) => emitSection(sec.id, ch.number, i + 1, ch.title, sec))
    .join(",\n");

  return `  chapter(
    ${JSON.stringify(ch.id)},
    ${ch.number},
    ${JSON.stringify(ch.title)},
    [
${sectionBlocks}
    ],
    {
      learningObjectives: ${JSON.stringify(meta.learningObjectives)},
      chapterSummary: ${JSON.stringify(meta.chapterSummary)},
      keyConcepts: ${JSON.stringify(meta.keyConcepts)},
      realWorldRelevance: ${JSON.stringify(meta.realWorldRelevance)},
    }
  )`;
}

function buildFile(parsed) {
  const domain = inferDomain(parsed.slug, parsed.title);
  const intro = buildIntroParagraphs(parsed.title, domain, parsed.chapters.length);
  const chapters = parsed.chapters.map((ch) => emitChapter(ch, parsed.title, domain)).join(",\n");

  return `import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const ${parsed.prefix}_TEXTBOOK_INTRO: TextbookIntro = {
  title: ${JSON.stringify(parsed.title)},
  subtitle: ${JSON.stringify(buildSubtitle(parsed.title, domain))},
  paragraphs: [
    ${intro.map((p) => JSON.stringify(p)).join(",\n    ")},
  ],
};

export const ${parsed.prefix}_TEXTBOOK: TextbookChapter[] = [
${chapters}
];
`;
}

function needsUpgrade(content, slug) {
  if (DEEP_SLUGS.has(slug)) return false;
  if (FORCE_UPGRADE_SLUGS.has(slug)) return true;
  return PLACEHOLDER_RE.test(content) || WEAK_TEMPLATE_RE.test(content);
}

let upgraded = 0;
let skipped = 0;

for (const filePath of listTextbookFiles()) {
  const content = fs.readFileSync(filePath, "utf8");
  const slug = path.basename(filePath, ".ts");
  if (!needsUpgrade(content, slug)) {
    skipped++;
    continue;
  }
  const parsed = parseTextbookFile(content, path.basename(filePath));
  if (!parsed) {
    console.warn("skip (parse failed):", path.basename(filePath));
    skipped++;
    continue;
  }
  fs.writeFileSync(filePath, buildFile(parsed));
  upgraded++;
  console.log("upgraded", parsed.slug, `(${parsed.chapters.length} ch)`);
}

console.log(`done — upgraded ${upgraded}, skipped ${skipped}`);
