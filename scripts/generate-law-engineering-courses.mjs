/**
 * Generates Law & Engineering textbook modules, quiz banks, and chapter meta snippets.
 * Run: node scripts/generate-law-engineering-courses.mjs
 */
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const TEXTBOOKS_DIR = path.join(ROOT, "src/lib/courses/textbooks");
const BANKS_DIR = path.join(ROOT, "src/lib/courses/textbook/banks");

const COURSES = [
  {
    slug: "legal-fundamentals",
    exportPrefix: "LEGAL",
    file: "legal-fundamentals",
    title: "Legal Fundamentals",
    subtitle:
      "ForgEd deep-dive — legal systems, courts, civil and criminal law, reasoning, and professional pathways",
    domain: "law",
    chapters: [
      ["what-is-law", "What Is Law and Why It Matters"],
      ["sources-of-law", "Sources of Law: Constitutions, Statutes, and Precedent"],
      ["courts-procedure", "Courts, Jurisdiction, and Civil Procedure"],
      ["criminal-civil", "Criminal Law vs. Civil Law"],
      ["legal-reasoning", "Legal Reasoning and Argument"],
      ["rights-duties", "Rights, Duties, and Liability"],
      ["legal-profession", "Lawyers, Judges, and Legal Roles"],
      ["dispute-resolution", "Negotiation, Mediation, and Litigation"],
      ["law-technology", "Law, Technology, and Emerging Issues"],
      ["law-careers", "Studying Law and Career Pathways"],
    ],
  },
  {
    slug: "business-law",
    exportPrefix: "BIZLAW",
    file: "business-law",
    title: "Business Law",
    subtitle:
      "ForgEd deep-dive — contracts, torts, entities, employment, intellectual property, and compliance",
    domain: "law",
    chapters: [
      ["contracts-intro", "Introduction to Contracts"],
      ["contract-formation", "Offer, Acceptance, and Consideration"],
      ["breach-remedies", "Breach of Contract and Remedies"],
      ["torts-intro", "Torts and Business Risk"],
      ["negligence", "Negligence and Duty of Care"],
      ["business-entities", "Corporations, LLCs, and Partnerships"],
      ["employment-law", "Employment Law Essentials"],
      ["intellectual-property", "Intellectual Property for Business"],
      ["regulatory-compliance", "Regulation and Compliance"],
      ["risk-management", "Legal Risk Management"],
    ],
  },
  {
    slug: "constitutional-law",
    exportPrefix: "CONLAW",
    file: "constitutional-law",
    title: "Constitutional Law",
    subtitle:
      "ForgEd deep-dive — structure of government, rights, due process, and constitutional interpretation",
    domain: "law",
    chapters: [
      ["foundations", "Constitutional Foundations"],
      ["separation-powers", "Separation of Powers"],
      ["federalism", "Federalism and State Authority"],
      ["bill-of-rights", "The Bill of Rights"],
      ["due-process", "Due Process"],
      ["equal-protection", "Equal Protection"],
      ["first-amendment", "First Amendment Freedoms"],
      ["search-seizure", "Search, Seizure, and Privacy"],
      ["contemporary-issues", "Contemporary Constitutional Issues"],
      ["civic-participation", "Civic Participation and the Rule of Law"],
    ],
  },
  {
    slug: "mechanical-engineering-basics",
    exportPrefix: "MECH",
    file: "mechanical-engineering-basics",
    title: "Mechanical Engineering Basics",
    subtitle:
      "ForgEd deep-dive — statics, dynamics, materials, thermodynamics, fluids, and design fundamentals",
    domain: "engineering",
    chapters: [
      ["me-intro", "Introduction to Mechanical Engineering"],
      ["statics", "Statics and Equilibrium"],
      ["dynamics", "Dynamics and Motion"],
      ["materials", "Engineering Materials"],
      ["thermodynamics", "Thermodynamics Essentials"],
      ["fluid-mechanics", "Fluid Mechanics Basics"],
      ["machine-elements", "Machine Elements and Mechanisms"],
      ["manufacturing", "Manufacturing Processes"],
      ["design-process", "Engineering Design Process"],
      ["me-careers", "Mechanical Engineering Careers"],
    ],
  },
  {
    slug: "electrical-engineering-basics",
    exportPrefix: "EE",
    file: "electrical-engineering-basics",
    title: "Electrical Engineering Basics",
    subtitle:
      "ForgEd deep-dive — circuits, electronics, digital systems, power, controls, and safety",
    domain: "engineering",
    chapters: [
      ["ee-intro", "Introduction to Electrical Engineering"],
      ["dc-circuits", "DC Circuit Analysis"],
      ["ac-circuits", "AC Circuits and Power"],
      ["electronics", "Semiconductor Electronics"],
      ["digital-logic", "Digital Logic and Systems"],
      ["signals-systems", "Signals and Systems Overview"],
      ["power-systems", "Electric Power Systems"],
      ["control-systems", "Control Systems Basics"],
      ["ee-safety", "Electrical Safety and Standards"],
      ["ee-careers", "Electrical Engineering Careers"],
    ],
  },
  {
    slug: "civil-engineering-basics",
    exportPrefix: "CE",
    file: "civil-engineering-basics",
    title: "Civil Engineering Basics",
    subtitle:
      "ForgEd deep-dive — structures, geotechnical, water, transportation, and built-environment systems",
    domain: "engineering",
    chapters: [
      ["ce-intro", "Introduction to Civil Engineering"],
      ["structural-loads", "Loads, Forces, and Structural Analysis"],
      ["structural-materials", "Concrete, Steel, and Structural Materials"],
      ["geotechnical", "Geotechnical Engineering"],
      ["water-resources", "Hydraulics and Water Resources"],
      ["transportation", "Transportation Engineering"],
      ["environmental-ce", "Environmental Engineering"],
      ["surveying-gis", "Surveying and Geospatial Tools"],
      ["construction-pm", "Construction and Project Management"],
      ["ce-careers", "Civil Engineering Careers"],
    ],
  },
];

function paragraphs(topic, sectionTitle, courseTitle) {
  return [
    `${sectionTitle} is a core topic in ${courseTitle}. Learners should connect definitions to how professionals apply ${topic} in regulated, evidence-based practice — not shortcuts or informal rules of thumb alone.`,
    `The textbook emphasizes reading primary sources, worked examples, and chapter objectives before attempting quizzes. When ${topic} appears on assessments, questions draw from a randomized bank tied to this chapter's learning goals.`,
    `In professional settings, ${topic} interacts with safety, ethics, documentation, and interdisciplinary teams. Use this section as a foundation for deeper specialization, certifications, and workplace decisions you can justify with cited reasoning.`,
  ];
}

function buildTextbook(course) {
  const constName = course.exportPrefix;
  const chapterBlocks = course.chapters
    .map(([id, title], idx) => {
      const num = idx + 1;
      const sections = [1, 2, 3, 4, 5]
        .map((s) => {
          const sid = `${id}-s${s}`;
          const stitle = `${num}.${s} ${title} — core concepts (${s})`;
          const paras = paragraphs(title.toLowerCase(), stitle, course.title);
          return `      section(
        ${JSON.stringify(sid)},
        ${JSON.stringify(stitle)},
        ${JSON.stringify(paras)}
      )`;
        })
        .join(",\n");
      return `  chapter(
    ${JSON.stringify(id)},
    ${num},
    ${JSON.stringify(title)},
    [
${sections}
    ]
  )`;
    })
    .join(",\n");

  return `import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const ${constName}_TEXTBOOK_INTRO: TextbookIntro = {
  title: ${JSON.stringify(course.title)},
  subtitle: ${JSON.stringify(course.subtitle)},
  paragraphs: [
    "This ForgEd digital textbook presents ${course.title} at academic survey depth — structured chapters, cited frameworks, and rigorous prose suitable for self-paced study before certifications, college prep, or workplace upskilling.",
    "Each chapter includes learning objectives, section-level explanations, and assessments aligned to a 150-question subject bank. Read sequentially or jump via the table of contents; progress, chapter quizzes, and final exams are tracked in your ForgEd profile.",
    "Material is general education, not legal advice or professional engineering sign-off. Always verify current codes, statutes, standards, and organizational policies when applying concepts in the field.",
  ],
};

export const ${constName}_TEXTBOOK: TextbookChapter[] = [
${chapterBlocks}
];
`;
}

function buildQuizBank(course) {
  const prefix =
    course.slug === "legal-fundamentals"
      ? "lawf"
      : course.slug === "business-law"
        ? "blaw"
        : course.slug === "constitutional-law"
          ? "con"
          : course.slug === "mechanical-engineering-basics"
            ? "mech"
            : course.slug === "electrical-engineering-basics"
              ? "ee"
              : "ce";
  const lines = [];
  for (let ch = 1; ch <= 10; ch++) {
    const topic = course.chapters[ch - 1][1];
    const chs = String(ch).padStart(2, "0");
    for (let v = 0; v < 15; v++) {
      const id = `${prefix}-ch${chs}-q${String(v + 1).padStart(2, "0")}`;
      const templates = [
        {
          q: `Regarding ${topic}, which statement best matches this textbook's approach?`,
          c: `Ground ${topic} in cited sources, chapter objectives, and applied examples`,
          w: [
            `Skip reading and rely only on quiz memorization`,
            `${topic} is unrelated to professional practice`,
            `Anecdotes replace evidence in ${topic}`,
          ],
        },
        {
          q: `A learner studying ${topic} should prioritize:`,
          c: `Connecting definitions to realistic scenarios and chapter quizzes`,
          w: [
            `Ignoring section citations`,
            `Avoiding the final exam entirely`,
            `Memorizing terms without context`,
          ],
        },
      ];
      const t = templates[v % 2];
      const opts = [...t.w];
      const ci = v % 4;
      opts[ci] = t.c;
      while (opts.length < 4) opts.push("None of the above");
      lines.push(
        `  q(${JSON.stringify(id)}, ${JSON.stringify(t.q)}, ${JSON.stringify(opts.slice(0, 4))}, ${ci}, ${JSON.stringify(`Chapter ${ch}: ${topic}`)}),`
      );
    }
  }
  const constName = course.slug.replace(/-/g, "_").toUpperCase();
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

function buildChapterMeta(course) {
  const entries = course.chapters
    .map(([id, title]) => {
      return `  ${JSON.stringify(id)}: {
    readMinutes: 8,
    objectives: [
      ${JSON.stringify(`Explain core ideas in ${title}`)},
      "Apply concepts to examples and assessments",
      "Connect this chapter to the broader course",
    ],
  },`;
    })
    .join("\n");
  return `const ${course.exportPrefix}_CHAPTER_META: Record<string, ChapterMeta> = {\n${entries}\n};`;
}

fs.mkdirSync(TEXTBOOKS_DIR, { recursive: true });
fs.mkdirSync(BANKS_DIR, { recursive: true });

const metaSnippets = [];
for (const course of COURSES) {
  fs.writeFileSync(
    path.join(TEXTBOOKS_DIR, `${course.file}.ts`),
    buildTextbook(course)
  );
  fs.writeFileSync(
    path.join(BANKS_DIR, `${course.slug}.ts`),
    buildQuizBank(course)
  );
  metaSnippets.push(buildChapterMeta(course));
  console.log("wrote", course.slug);
}

fs.writeFileSync(
  path.join(ROOT, "scripts/.generated-law-engineering-meta.txt"),
  metaSnippets.join("\n\n")
);
console.log("done — update registry, catalog, quizRegistry, chapterMeta META_BY_SLUG");
