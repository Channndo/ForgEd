/**
 * Generates src/lib/courses/textbooks/legal-fundamentals.ts
 * Run: node scripts/build-legal-fundamentals-textbook.mjs
 */
import fs from "fs";
import path from "path";
import { getLawCaseStudies } from "./data/law-case-studies.mjs";
import { LEGAL_FUNDAMENTALS_CONTENT } from "./data/legal-fundamentals-content.mjs";

const OUT = path.join(
  process.cwd(),
  "src/lib/courses/textbooks/legal-fundamentals.ts"
);

function tsString(s) {
  return JSON.stringify(s);
}

function formatCitation(c) {
  const parts = [`source: ${tsString(c.source)}`];
  if (c.url) parts.push(`url: ${tsString(c.url)}`);
  if (c.note) parts.push(`note: ${tsString(c.note)}`);
  return `{ ${parts.join(", ")} }`;
}

function formatExtras(extras, chapterId, sectionId) {
  if (!extras) return "";
  const lines = [];
  if (extras.bulletPoints?.length) {
    lines.push("        bulletPoints: [");
    for (const b of extras.bulletPoints) {
      lines.push(`          ${tsString(b)},`);
    }
    lines.push("        ],");
  }
  if (extras.citations?.length) {
    lines.push("        citations: [");
    for (const c of extras.citations) {
      lines.push(`          ${formatCitation(c)},`);
    }
    lines.push("        ],");
  }
  const isCaseStudySection = sectionId.endsWith("-s3");
  const cases = isCaseStudySection
    ? (extras.caseStudies ?? getLawCaseStudies("legal-fundamentals", chapterId))
    : extras.caseStudies;
  if (cases?.length) {
    lines.push("        caseStudies: [");
    for (const c of cases) {
      const year = c.year ? `, year: ${tsString(c.year)}` : "";
      lines.push(
        `          { name: ${tsString(c.name)}${year}, summary: ${tsString(c.summary)} },`
      );
    }
    lines.push("        ],");
  }
  if (!lines.length) return "";
  return `,
        {
${lines.join("\n")}
        }`;
}

function formatSection(sec, chapterId) {
  const paras = sec.paragraphs.map((p) => `          ${tsString(p)},`).join("\n");
  const extras = formatExtras(sec.extras, chapterId, sec.id);
  return `      section(
        ${tsString(sec.id)},
        ${tsString(sec.title)},
        [
${paras}
        ]${extras}
      )`;
}

function formatChapter(ch) {
  const sections = ch.sections.map((s) => formatSection(s, ch.id)).join(",\n");
  const extras = ch.extras;
  let extrasBlock = "";
  if (extras) {
    const lines = [];
    if (extras.subtitle) lines.push(`      subtitle: ${tsString(extras.subtitle)},`);
    if (extras.learningObjectives?.length) {
      lines.push("      learningObjectives: [");
      for (const o of extras.learningObjectives) lines.push(`        ${tsString(o)},`);
      lines.push("      ],");
    }
    if (extras.chapterSummary)
      lines.push(`      chapterSummary: ${tsString(extras.chapterSummary)},`);
    if (extras.keyConcepts?.length) {
      lines.push("      keyConcepts: [");
      for (const k of extras.keyConcepts) lines.push(`        ${tsString(k)},`);
      lines.push("      ],");
    }
    if (extras.realWorldRelevance)
      lines.push(`      realWorldRelevance: ${tsString(extras.realWorldRelevance)},`);
    extrasBlock = `,
    {
${lines.join("\n")}
    }`;
  }
  return `  chapter(
    ${tsString(ch.id)},
    ${ch.number},
    ${tsString(ch.title)},
    [
${sections}
    ]${extrasBlock}
  )`;
}

const intro = LEGAL_FUNDAMENTALS_CONTENT.intro;
let introExtras = "";
if (intro.additionalResources?.length) {
  const groups = intro.additionalResources
    .map((g) => {
      const res = g.resources.map((r) => `          ${formatCitation(r)},`).join("\n");
      return `      {
        title: ${tsString(g.title)},
        resources: [
${res}
        ],
      }`;
    })
    .join(",\n");
  introExtras = `,
  additionalResources: [
${groups}
  ]`;
}

const chapters = LEGAL_FUNDAMENTALS_CONTENT.chapters.map(formatChapter).join(",\n\n");

const file = `import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const LEGAL_TEXTBOOK_INTRO: TextbookIntro = {
  title: ${tsString(intro.title)},
  subtitle: ${tsString(intro.subtitle)},
  paragraphs: [
    ${intro.paragraphs.map((p) => tsString(p)).join(",\n    ")},
  ]${introExtras},
};

export const LEGAL_TEXTBOOK: TextbookChapter[] = [
${chapters}
];
`;

fs.writeFileSync(OUT, file);
const lines = file.split("\n").length;
console.log(`Wrote ${OUT} (${lines} lines)`);
