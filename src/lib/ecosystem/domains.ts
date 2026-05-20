import type { Course, CourseCategory } from "@/lib/types";

/** Broad parent categories — scalable to thousands of future courses */
export type LearningDomainId =
  | "technology"
  | "business"
  | "finance"
  | "automotive"
  | "law"
  | "engineering"
  | "skilled-trades"
  | "science"
  | "healthcare"
  | "creative"
  | "communication"
  | "personal-development"
  | "education"
  | "entrepreneurship";

export type FutureDomainId =
  | "sales"
  | "marketing"
  | "leadership"
  | "media-production";

export interface LearningDomain {
  id: LearningDomainId;
  label: string;
  description: string;
  subtopics: string[];
  /** Maps existing catalog tags to this umbrella */
  courseCategories: CourseCategory[];
  status: "active" | "coming-soon";
}

export interface FutureDomain {
  id: FutureDomainId;
  label: string;
  description: string;
}

export const LEARNING_DOMAINS: LearningDomain[] = [
  {
    id: "technology",
    label: "Technology",
    description: "IT, cloud, AI, cybersecurity, coding, and data",
    subtopics: [
      "IT",
      "Networking",
      "Cloud",
      "AI",
      "Cybersecurity",
      "Coding",
      "Data Science",
      "Hardware",
    ],
    courseCategories: ["ai", "cybersecurity", "it", "technology"],
    status: "active",
  },
  {
    id: "business",
    label: "Business",
    description: "Management, operations, HR, and customer experience",
    subtopics: [
      "Management",
      "Operations",
      "HR",
      "Customer Service",
      "Startups",
      "Logistics",
    ],
    courseCategories: ["business"],
    status: "active",
  },
  {
    id: "finance",
    label: "Finance",
    description: "Insurance, investing, taxes, accounting, and literacy",
    subtopics: [
      "Insurance",
      "Investing",
      "Taxes",
      "Accounting",
      "Banking",
      "Financial Literacy",
    ],
    courseCategories: ["insurance", "financial"],
    status: "active",
  },
  {
    id: "law",
    label: "Law",
    description: "Legal systems, business law, constitutional rights, and compliance",
    subtopics: [
      "Legal Fundamentals",
      "Business Law",
      "Constitutional Law",
      "Contracts",
      "Torts",
      "Compliance",
    ],
    courseCategories: ["law"],
    status: "active",
  },
  {
    id: "engineering",
    label: "Engineering",
    description: "Mechanical, electrical, civil, and applied engineering disciplines",
    subtopics: [
      "Mechanical",
      "Electrical",
      "Civil",
      "Structural",
      "Materials",
      "Design",
    ],
    courseCategories: ["engineering"],
    status: "active",
  },
  {
    id: "automotive",
    label: "Automotive",
    description: "Service, diagnostics, EV, sales, and shop operations",
    subtopics: [
      "Service Advising",
      "Diagnostics",
      "EV Systems",
      "Diesel",
      "Sales",
      "Shop Operations",
    ],
    courseCategories: ["automotive"],
    status: "active",
  },
  {
    id: "skilled-trades",
    label: "Skilled Trades",
    description: "HVAC, electrical, plumbing, welding, and carpentry",
    subtopics: ["HVAC", "Electrical", "Plumbing", "Welding", "Carpentry"],
    courseCategories: [],
    status: "coming-soon",
  },
  {
    id: "science",
    label: "Science",
    description: "Foundational and applied sciences for learners and pros",
    subtopics: ["Biology", "Chemistry", "Physics", "Lab Skills", "Research"],
    courseCategories: [],
    status: "coming-soon",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    description: "Clinical basics, billing, CNA, pharmacy, and EMT paths",
    subtopics: [
      "Medical Basics",
      "Billing",
      "CNA",
      "Pharmacy Tech",
      "EMT",
    ],
    courseCategories: [],
    status: "coming-soon",
  },
  {
    id: "creative",
    label: "Creative",
    description: "Design, video, music, writing, and game development",
    subtopics: [
      "Graphic Design",
      "Video Editing",
      "Music Production",
      "Writing",
      "Game Design",
    ],
    courseCategories: [],
    status: "coming-soon",
  },
  {
    id: "communication",
    label: "Communication",
    description: "Professional speaking, writing, and collaboration",
    subtopics: [
      "Public Speaking",
      "Business Writing",
      "Negotiation",
      "Team Communication",
      "Leadership Comms",
    ],
    courseCategories: ["communication"],
    status: "active",
  },
  {
    id: "personal-development",
    label: "Personal Development",
    description: "Productivity, habits, mindset, and career growth",
    subtopics: ["Productivity", "Habits", "Mindset", "Time Management", "Goals"],
    courseCategories: [],
    status: "coming-soon",
  },
  {
    id: "education",
    label: "Education",
    description: "Teaching, tutoring, curriculum, and learning science",
    subtopics: ["Pedagogy", "Tutoring", "Curriculum", "Assessment", "EdTech"],
    courseCategories: [],
    status: "coming-soon",
  },
  {
    id: "entrepreneurship",
    label: "Entrepreneurship",
    description: "Startups, fundraising, product, and go-to-market",
    subtopics: ["Ideation", "Fundraising", "Product", "GTM", "Operations"],
    courseCategories: [],
    status: "coming-soon",
  },
];

/** Preview tracks — not separate top-level domains (AI/cyber live under Technology) */
export const FUTURE_DOMAINS: FutureDomain[] = [
  { id: "sales", label: "Sales", description: "Pipeline, discovery, and closing" },
  { id: "marketing", label: "Marketing", description: "Brand, growth, and analytics" },
  { id: "leadership", label: "Leadership", description: "Teams, strategy, and executive skills" },
  { id: "media-production", label: "Media Production", description: "Studio, broadcast, and content ops" },
];

const CATEGORY_TO_DOMAIN: Record<CourseCategory, LearningDomainId> = {
  insurance: "finance",
  financial: "finance",
  ai: "technology",
  cybersecurity: "technology",
  it: "technology",
  technology: "technology",
  business: "business",
  automotive: "automotive",
  communication: "communication",
  law: "law",
  engineering: "engineering",
};

export function domainForCourse(category: CourseCategory): LearningDomainId {
  return CATEGORY_TO_DOMAIN[category];
}

export function getDomainById(id: string): LearningDomain | undefined {
  return LEARNING_DOMAINS.find((d) => d.id === id);
}

export function getActiveDomains(): LearningDomain[] {
  return LEARNING_DOMAINS.filter((d) => d.status === "active");
}

export function filterCoursesByDomain(
  courses: Course[],
  domainId: LearningDomainId
): Course[] {
  const domain = getDomainById(domainId);
  if (!domain) return [];
  return courses.filter((c) => domain.courseCategories.includes(c.category));
}

export function countCoursesByDomain(courses: Course[]): Record<LearningDomainId, number> {
  const counts = {} as Record<LearningDomainId, number>;
  for (const d of LEARNING_DOMAINS) counts[d.id] = 0;
  for (const c of courses) {
    const id = domainForCourse(c.category);
    counts[id] = (counts[id] ?? 0) + 1;
  }
  return counts;
}

/** Round-robin across domains so suggestions rotate equally */
export function buildBalancedCourseRotation(courses: Course[]): Course[] {
  const buckets = new Map<LearningDomainId, Course[]>();
  for (const c of courses) {
    const d = domainForCourse(c.category);
    const list = buckets.get(d) ?? [];
    list.push(c);
    buckets.set(d, list);
  }
  const domainIds = [...buckets.keys()];
  const out: Course[] = [];
  let round = 0;
  while (out.length < courses.length) {
    let added = false;
    for (const id of domainIds) {
      const list = buckets.get(id)!;
      if (round < list.length) {
        out.push(list[round]);
        added = true;
      }
    }
    if (!added) break;
    round++;
  }
  return out;
}
