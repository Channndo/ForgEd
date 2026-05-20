/**
 * Generates textbook + quiz bank for remaining learning domains.
 * Run: node scripts/generate-domain-courses.mjs
 */
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const TEXTBOOKS_DIR = path.join(ROOT, "src/lib/courses/textbooks");
const BANKS_DIR = path.join(ROOT, "src/lib/courses/textbook/banks");

const COURSES = [
  {
    slug: "hvac-fundamentals",
    exportPrefix: "HVAC",
    file: "hvac-fundamentals",
    title: "HVAC Fundamentals",
    category: "skilled-trades",
    chapters: [
      ["hvac-intro", "Introduction to HVAC"],
      ["heating-basics", "Heating Systems"],
      ["cooling-basics", "Cooling and Refrigeration"],
      ["airflow", "Airflow and Distribution"],
      ["controls", "Controls and Thermostats"],
      ["installation", "Installation Practices"],
      ["maintenance", "Maintenance and Service"],
      ["efficiency", "Energy Efficiency"],
      ["codes", "Codes and Safety"],
      ["hvac-careers", "HVAC Careers"],
    ],
  },
  {
    slug: "science-fundamentals",
    exportPrefix: "SCI",
    file: "science-fundamentals",
    title: "Science Fundamentals",
    category: "science",
    chapters: [
      ["scientific-method", "The Scientific Method"],
      ["biology-basics", "Biology Essentials"],
      ["chemistry-basics", "Chemistry Essentials"],
      ["physics-basics", "Physics Essentials"],
      ["earth-science", "Earth and Space Science"],
      ["lab-skills", "Laboratory Skills"],
      ["data-analysis", "Data and Graphs"],
      ["research-ethics", "Research and Ethics"],
      ["applied-science", "Applied Science"],
      ["science-careers", "Science Careers"],
    ],
  },
  {
    slug: "healthcare-fundamentals",
    exportPrefix: "HLTH",
    file: "healthcare-fundamentals",
    title: "Healthcare Fundamentals",
    category: "healthcare",
    chapters: [
      ["health-systems", "Healthcare Systems"],
      ["patient-care", "Patient Care Basics"],
      ["medical-terminology", "Medical Terminology"],
      ["billing-coding", "Billing and Coding Intro"],
      ["pharmacy-basics", "Pharmacy Basics"],
      ["public-health", "Public Health"],
      ["ethics-hipaa", "Ethics and HIPAA"],
      ["emergency-basics", "Emergency Response Basics"],
      ["careers-health", "Healthcare Careers"],
      ["future-health", "Future of Healthcare"],
    ],
  },
  {
    slug: "creative-media-fundamentals",
    exportPrefix: "CREA",
    file: "creative-media-fundamentals",
    title: "Creative Media Fundamentals",
    category: "creative",
    chapters: [
      ["design-principles", "Design Principles"],
      ["visual-tools", "Visual Tools and Workflow"],
      ["photography", "Photography Basics"],
      ["video-editing", "Video Editing Intro"],
      ["audio-basics", "Audio and Music Basics"],
      ["writing-creative", "Creative Writing"],
      ["branding", "Branding and Portfolios"],
      ["collaboration", "Creative Collaboration"],
      ["freelance", "Freelance and Client Work"],
      ["creative-careers", "Creative Careers"],
    ],
  },
  {
    slug: "personal-development-fundamentals",
    exportPrefix: "PDEV",
    file: "personal-development-fundamentals",
    title: "Personal Development Fundamentals",
    category: "personal-development",
    chapters: [
      ["growth-mindset", "Growth Mindset"],
      ["goal-setting", "Goal Setting"],
      ["habits", "Habits and Routines"],
      ["time-management", "Time Management"],
      ["communication-self", "Self and Social Skills"],
      ["stress-resilience", "Stress and Resilience"],
      ["financial-wellness", "Financial Wellness"],
      ["career-growth", "Career Growth"],
      ["learning-how", "Learning How to Learn"],
      ["life-design", "Life Design"],
    ],
  },
  {
    slug: "teaching-fundamentals",
    exportPrefix: "TEACH",
    file: "teaching-fundamentals",
    title: "Teaching Fundamentals",
    category: "education",
    chapters: [
      ["learning-theory", "Learning Theory"],
      ["lesson-planning", "Lesson Planning"],
      ["classroom-management", "Classroom Management"],
      ["assessment", "Assessment and Feedback"],
      ["differentiation", "Differentiation"],
      ["edtech", "Educational Technology"],
      ["tutoring", "Tutoring Skills"],
      ["special-needs", "Inclusive Education"],
      ["professionalism", "Professionalism in Education"],
      ["teaching-careers", "Teaching Careers"],
    ],
  },
  {
    slug: "entrepreneurship-fundamentals",
    exportPrefix: "ENTR",
    file: "entrepreneurship-fundamentals",
    title: "Entrepreneurship Fundamentals",
    category: "entrepreneurship",
    chapters: [
      ["entrepreneur-mindset", "Entrepreneurial Mindset"],
      ["ideation", "Ideation and Validation"],
      ["business-models", "Business Models"],
      ["marketing-sales", "Marketing and Sales"],
      ["operations", "Operations and Delivery"],
      ["finance-startup", "Startup Finance"],
      ["legal-basics", "Legal Basics for Founders"],
      ["fundraising", "Fundraising Intro"],
      ["scaling", "Scaling and Teams"],
      ["entrepreneur-careers", "Entrepreneurship Paths"],
    ],
  },
];

function paragraphs(topic, sectionTitle, courseTitle) {
  return [
    `${sectionTitle} is a core topic in ${courseTitle}. Learners should connect definitions to how professionals apply ${topic} with evidence-based practice.`,
    `The textbook emphasizes chapter objectives and section quizzes before advancing. Assessment questions draw from a randomized bank tied to this chapter.`,
    `Use this section as a foundation for certifications, workplace decisions, and further specialization in ${topic}.`,
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
          return `      section(${JSON.stringify(sid)}, ${JSON.stringify(stitle)}, ${JSON.stringify(paragraphs(title.toLowerCase(), stitle, course.title))}),`;
        })
        .join("\n");
      return `  chapter(${JSON.stringify(id)}, ${num}, ${JSON.stringify(title)}, [\n${sections}\n  ])`;
    })
    .join(",\n");

  return `import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const ${constName}_TEXTBOOK_INTRO: TextbookIntro = {
  title: ${JSON.stringify(course.title)},
  subtitle: ${JSON.stringify(`ForgEd deep-dive — ${course.title.toLowerCase()}`)},
  paragraphs: [
    "This ForgEd digital textbook presents ${course.title} at academic survey depth for self-paced study.",
    "Complete each section quiz before advancing. Chapter and course assessments draw from a 150-question bank.",
    "Material is general education, not professional licensure or certification prep by itself.",
  ],
};

export const ${constName}_TEXTBOOK: TextbookChapter[] = [
${chapterBlocks}
];
`;
}

function buildQuizBank(course) {
  const prefix = course.slug.split("-")[0].slice(0, 4);
  const lines = [];
  for (let ch = 1; ch <= 10; ch++) {
    const topic = course.chapters[ch - 1][1];
    const chs = String(ch).padStart(2, "0");
    for (let v = 0; v < 15; v++) {
      const id = `${prefix}-ch${chs}-q${String(v + 1).padStart(2, "0")}`;
      const templates = [
        {
          q: `Regarding ${topic}, which statement best matches this textbook?`,
          c: `Ground ${topic} in cited sources and chapter objectives`,
          w: ["Skip reading", "Unrelated to practice", "Anecdotes only"],
        },
        {
          q: `When studying ${topic}, a learner should:`,
          c: `Connect ideas to realistic scenarios and pass section quizzes`,
          w: ["Ignore citations", "Skip assessments", "Memorize without context"],
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

for (const course of COURSES) {
  fs.writeFileSync(path.join(TEXTBOOKS_DIR, `${course.file}.ts`), buildTextbook(course));
  fs.writeFileSync(path.join(BANKS_DIR, `${course.slug}.ts`), buildQuizBank(course));
  console.log("wrote", course.slug);
}
console.log("done");
