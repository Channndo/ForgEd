import type { TextbookBundle } from "./types";
import { chaptersToModules } from "./convert";
import type { CourseModule } from "@/lib/types";
import {
  INSURANCE_TEXTBOOK,
  TEXTBOOK_INTRO as insuranceIntro,
} from "@/lib/courses/insurance/textbook";
import {
  AI_TEXTBOOK,
  AI_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/ai-fundamentals";
import {
  CYBER_TEXTBOOK,
  CYBER_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/cybersecurity-basics";
import {
  IT_TEXTBOOK,
  IT_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/it-fundamentals";
import {
  AUTO_TEXTBOOK,
  AUTO_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/automotive-basics";
import {
  FIN_TEXTBOOK,
  FIN_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/financial-literacy";
import {
  COMM_TEXTBOOK,
  COMM_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/communication-skills";
import {
  BIZ_TEXTBOOK,
  BIZ_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/business-foundations";
import {
  TECH_TEXTBOOK,
  TECH_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/technology-for-beginners";
import {
  LEGAL_TEXTBOOK,
  LEGAL_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/legal-fundamentals";
import {
  BIZLAW_TEXTBOOK,
  BIZLAW_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/business-law";
import {
  CONLAW_TEXTBOOK,
  CONLAW_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/constitutional-law";
import {
  MECH_TEXTBOOK,
  MECH_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/mechanical-engineering-basics";
import {
  EE_TEXTBOOK,
  EE_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/electrical-engineering-basics";
import {
  CE_TEXTBOOK,
  CE_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/civil-engineering-basics";

const BUNDLES: Record<string, TextbookBundle> = {
  "insurance-fundamentals": {
    slug: "insurance-fundamentals",
    intro: insuranceIntro,
    chapters: INSURANCE_TEXTBOOK,
  },
  "ai-fundamentals": {
    slug: "ai-fundamentals",
    intro: AI_TEXTBOOK_INTRO,
    chapters: AI_TEXTBOOK,
  },
  "cybersecurity-basics": {
    slug: "cybersecurity-basics",
    intro: CYBER_TEXTBOOK_INTRO,
    chapters: CYBER_TEXTBOOK,
  },
  "it-fundamentals": {
    slug: "it-fundamentals",
    intro: IT_TEXTBOOK_INTRO,
    chapters: IT_TEXTBOOK,
  },
  "automotive-basics": {
    slug: "automotive-basics",
    intro: AUTO_TEXTBOOK_INTRO,
    chapters: AUTO_TEXTBOOK,
  },
  "financial-literacy": {
    slug: "financial-literacy",
    intro: FIN_TEXTBOOK_INTRO,
    chapters: FIN_TEXTBOOK,
  },
  "communication-skills": {
    slug: "communication-skills",
    intro: COMM_TEXTBOOK_INTRO,
    chapters: COMM_TEXTBOOK,
  },
  "business-foundations": {
    slug: "business-foundations",
    intro: BIZ_TEXTBOOK_INTRO,
    chapters: BIZ_TEXTBOOK,
  },
  "technology-for-beginners": {
    slug: "technology-for-beginners",
    intro: TECH_TEXTBOOK_INTRO,
    chapters: TECH_TEXTBOOK,
  },
  "legal-fundamentals": {
    slug: "legal-fundamentals",
    intro: LEGAL_TEXTBOOK_INTRO,
    chapters: LEGAL_TEXTBOOK,
  },
  "business-law": {
    slug: "business-law",
    intro: BIZLAW_TEXTBOOK_INTRO,
    chapters: BIZLAW_TEXTBOOK,
  },
  "constitutional-law": {
    slug: "constitutional-law",
    intro: CONLAW_TEXTBOOK_INTRO,
    chapters: CONLAW_TEXTBOOK,
  },
  "mechanical-engineering-basics": {
    slug: "mechanical-engineering-basics",
    intro: MECH_TEXTBOOK_INTRO,
    chapters: MECH_TEXTBOOK,
  },
  "electrical-engineering-basics": {
    slug: "electrical-engineering-basics",
    intro: EE_TEXTBOOK_INTRO,
    chapters: EE_TEXTBOOK,
  },
  "civil-engineering-basics": {
    slug: "civil-engineering-basics",
    intro: CE_TEXTBOOK_INTRO,
    chapters: CE_TEXTBOOK,
  },
};

export function getTextbookBundle(slug: string): TextbookBundle | undefined {
  return BUNDLES[slug];
}

export function getTextbookModules(slug: string): CourseModule[] {
  const bundle = BUNDLES[slug];
  if (!bundle) return [];
  return chaptersToModules(bundle.chapters);
}

export function getTextbookChapterCount(slug: string): number {
  return BUNDLES[slug]?.chapters.length ?? 0;
}

export function findTextbookSection(
  slug: string,
  moduleId: string,
  lessonId: string
) {
  const bundle = BUNDLES[slug];
  if (!bundle) return null;
  const ch = bundle.chapters.find((c) => c.id === moduleId);
  if (!ch) return null;
  const prefix = `${moduleId}-`;
  const sectionId = lessonId.startsWith(prefix)
    ? lessonId.slice(prefix.length)
    : lessonId;
  const sec = ch.sections.find((s) => s.id === sectionId);
  if (!sec) return null;
  return { chapter: ch, section: sec, intro: bundle.intro };
}

export function isTextbookCourse(slug: string): boolean {
  return slug in BUNDLES;
}
