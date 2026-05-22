/**
 * Emits plumbing, electrical-trades, and HVAC textbooks from curated chapter data.
 * Run: node scripts/generate-skilled-trades-textbooks.mjs
 */
import fs from "fs";
import path from "path";
import {
  PLUMBING_CHAPTERS,
  ELECTRICAL_TRADES_CHAPTERS,
  HVAC_CHAPTERS,
} from "./data/skilled-trades-chapters.mjs";
import { buildBankFile } from "./lib/quiz-bank-builder.mjs";

const TEXTBOOKS = path.join(process.cwd(), "src/lib/courses/textbooks");
const BANKS = path.join(process.cwd(), "src/lib/courses/textbook/banks");

const SECTION_SUFFIXES = [
  "foundations and vocabulary",
  "how technicians think",
  "workplace application",
  "common failures and fixes",
  "putting it together",
];

function escapeTs(str) {
  return JSON.stringify(str);
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
  const extrasBlock = extras.length ? `, {\n        ${extras.join(",\n        ")}\n      }` : "";
  return `    section(
      ${escapeTs(sectionId)},
      ${escapeTs(title)},
      ${JSON.stringify(section.paragraphs)}${extrasBlock}
    )`;
}

function emitChapter(ch, num) {
  const sections = ch.sections.map((sec, i) => {
    const sid = `${ch.id}-s${i + 1}`;
    return emitSection(sid, num, i + 1, ch.title, sec);
  });
  const sectionTitles = ch.sections.map(
    (_, i) => `${num}.${i + 1} ${ch.title} — ${SECTION_SUFFIXES[i]}`
  );
  const meta = {
    learningObjectives: [
      `Explain why ${ch.title.toLowerCase()} matters on real plumbing, electrical, or HVAC jobs`,
      `Apply concepts from this chapter using correct trade terminology and safety habits`,
      `Identify common mistakes apprentices make in ${ch.title.toLowerCase()}`,
      `Use section quizzes to verify understanding before advancing`,
    ],
    keyConcepts: ch.sections.flatMap((s) => s.bulletPoints.slice(0, 2)).slice(0, 6),
    realWorldRelevance: `Journeymen and service techs use ${ch.title.toLowerCase()} daily—this chapter connects code, tools, and customer-facing work.`,
  };
  return `  chapter(
    ${escapeTs(ch.id)},
    ${num},
    ${escapeTs(ch.title)},
    [
${sections.join(",\n")}
    ],
    {
      learningObjectives: ${JSON.stringify(meta.learningObjectives)},
      keyConcepts: ${JSON.stringify(meta.keyConcepts)},
      realWorldRelevance: ${JSON.stringify(meta.realWorldRelevance)},
    }
  )`;
}

function buildIntro(course) {
  return `export const ${course.prefix}_TEXTBOOK_INTRO: TextbookIntro = {
  title: ${escapeTs(course.title)},
  subtitle: ${escapeTs(course.subtitle)},
  paragraphs: [
    ${course.intro.map((p) => escapeTs(p)).join(",\n    ")},
  ],
};`;
}

function buildTextbookFile(course, chapters) {
  const blocks = chapters.map((ch, i) => emitChapter(ch, i + 1)).join(",\n");
  return `import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

${buildIntro(course)}

export const ${course.prefix}_TEXTBOOK: TextbookChapter[] = [
${blocks}
];
`;
}

const COURSES = [
  {
    slug: "plumbing-fundamentals",
    file: "plumbing-fundamentals",
    prefix: "PLUMB",
    bankPrefix: "plmb",
    title: "Plumbing Fundamentals",
    subtitle:
      "ForgEd skilled-trades survey — supply, DWV, fixtures, codes, service, and careers",
    intro: [
      "Plumbing protects public health: safe drinking water in, waste out. This textbook is workforce training for apprentices, career changers, and facility staff—not a master plumber license exam replacement.",
      "Ten chapters move from trade basics through rough-in and service, codes and safety, and business literacy. Complete section quizzes, then chapter and course reviews from a 200-question bank.",
      "Always follow your state license rules, adopted IPC/UPC amendments, and employer SOPs. Verify permits and inspections with your local authority having jurisdiction.",
    ],
    chapters: PLUMBING_CHAPTERS,
  },
  {
    slug: "electrical-trades-fundamentals",
    file: "electrical-trades-fundamentals",
    prefix: "ELEC",
    bankPrefix: "eltr",
    title: "Electrical Trades Fundamentals",
    subtitle:
      "ForgEd skilled-trades survey — safety, wiring, panels, NEC literacy, and apprenticeship",
    intro: [
      "Electrical trade work powers modern life—but incorrect installations kill and burn. This course teaches residential and light commercial literacy for apprentices and helpers, not electrical engineering design.",
      "Ten chapters cover safety, circuits, conductors, residential and commercial basics, NEC overview, troubleshooting, and careers. Assessments draw from a 200-question randomized bank.",
      "Only qualified, licensed electricians should perform energized work in the field. Treat this material as education; obey OSHA, NFPA 70E, and your state board rules on site.",
    ],
    chapters: ELECTRICAL_TRADES_CHAPTERS,
  },
  {
    slug: "hvac-fundamentals",
    file: "hvac-fundamentals",
    prefix: "HVAC",
    bankPrefix: "hvac",
    title: "HVAC Fundamentals",
    subtitle:
      "ForgEd skilled-trades survey — heating, cooling, airflow, controls, service, and efficiency",
    intro: [
      "HVAC technicians balance comfort, energy use, and refrigerant stewardship. This textbook explains how heating, cooling, and ventilation systems work in U.S. homes and small commercial buildings.",
      "Ten chapters cover equipment types, distribution, controls, installation and maintenance, efficiency, codes, and careers. Section quizzes gate progress; course exams use a 200-question bank.",
      "EPA Section 608 certification is required to handle refrigerants—this course does not replace EPA testing or manufacturer cert classes. Follow lockout/tagout and gas safety rules on every call.",
    ],
    chapters: HVAC_CHAPTERS,
  },
];

for (const course of COURSES) {
  fs.writeFileSync(
    path.join(TEXTBOOKS, `${course.file}.ts`),
    buildTextbookFile(course, course.chapters)
  );
  const bankName = `${course.slug.replace(/-/g, "_").toUpperCase()}_BANK`;
  const { body } = buildBankFile({
    slug: course.slug,
    exportName: bankName,
    prefix: course.bankPrefix,
    chapterTitles: course.chapters.map((c) => c.title),
  });
  fs.writeFileSync(path.join(BANKS, `${course.slug}.ts`), body);
  console.log("wrote", course.slug, `(${course.chapters.length} chapters)`);
}

console.log("done — update catalog.ts, registry.ts, quizRegistry.ts");
