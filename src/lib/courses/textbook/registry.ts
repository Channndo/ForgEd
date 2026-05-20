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
  CONTRACTS_TEXTBOOK,
  CONTRACTS_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/contracts-law";
import {
  CRIM_TEXTBOOK,
  CRIM_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/criminal-law-fundamentals";
import {
  TORTS_TEXTBOOK,
  TORTS_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/torts-law";
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
import {
  CHE_TEXTBOOK,
  CHE_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/chemical-engineering-basics";
import {
  IE_TEXTBOOK,
  IE_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/industrial-engineering-basics";
import {
  AERO_TEXTBOOK,
  AERO_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/aerospace-engineering-basics";
import {
  HVAC_TEXTBOOK,
  HVAC_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/hvac-fundamentals";
import {
  SCI_TEXTBOOK,
  SCI_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/science-fundamentals";
import {
  HLTH_TEXTBOOK,
  HLTH_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/healthcare-fundamentals";
import {
  CREA_TEXTBOOK,
  CREA_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/creative-media-fundamentals";
import {
  PDEV_TEXTBOOK,
  PDEV_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/personal-development-fundamentals";
import {
  TEACH_TEXTBOOK,
  TEACH_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/teaching-fundamentals";
import {
  ENTR_TEXTBOOK,
  ENTR_TEXTBOOK_INTRO,
} from "@/lib/courses/textbooks/entrepreneurship-fundamentals";

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
  "contracts-law": {
    slug: "contracts-law",
    intro: CONTRACTS_TEXTBOOK_INTRO,
    chapters: CONTRACTS_TEXTBOOK,
  },
  "criminal-law-fundamentals": {
    slug: "criminal-law-fundamentals",
    intro: CRIM_TEXTBOOK_INTRO,
    chapters: CRIM_TEXTBOOK,
  },
  "torts-law": {
    slug: "torts-law",
    intro: TORTS_TEXTBOOK_INTRO,
    chapters: TORTS_TEXTBOOK,
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
  "chemical-engineering-basics": {
    slug: "chemical-engineering-basics",
    intro: CHE_TEXTBOOK_INTRO,
    chapters: CHE_TEXTBOOK,
  },
  "industrial-engineering-basics": {
    slug: "industrial-engineering-basics",
    intro: IE_TEXTBOOK_INTRO,
    chapters: IE_TEXTBOOK,
  },
  "aerospace-engineering-basics": {
    slug: "aerospace-engineering-basics",
    intro: AERO_TEXTBOOK_INTRO,
    chapters: AERO_TEXTBOOK,
  },
  "hvac-fundamentals": {
    slug: "hvac-fundamentals",
    intro: HVAC_TEXTBOOK_INTRO,
    chapters: HVAC_TEXTBOOK,
  },
  "science-fundamentals": {
    slug: "science-fundamentals",
    intro: SCI_TEXTBOOK_INTRO,
    chapters: SCI_TEXTBOOK,
  },
  "healthcare-fundamentals": {
    slug: "healthcare-fundamentals",
    intro: HLTH_TEXTBOOK_INTRO,
    chapters: HLTH_TEXTBOOK,
  },
  "creative-media-fundamentals": {
    slug: "creative-media-fundamentals",
    intro: CREA_TEXTBOOK_INTRO,
    chapters: CREA_TEXTBOOK,
  },
  "personal-development-fundamentals": {
    slug: "personal-development-fundamentals",
    intro: PDEV_TEXTBOOK_INTRO,
    chapters: PDEV_TEXTBOOK,
  },
  "teaching-fundamentals": {
    slug: "teaching-fundamentals",
    intro: TEACH_TEXTBOOK_INTRO,
    chapters: TEACH_TEXTBOOK,
  },
  "entrepreneurship-fundamentals": {
    slug: "entrepreneurship-fundamentals",
    intro: ENTR_TEXTBOOK_INTRO,
    chapters: ENTR_TEXTBOOK,
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
