import type { Course, CourseCategory } from "@/lib/types";

export const CATEGORY_META: Record<
  CourseCategory,
  { label: string; description: string; color: string }
> = {
  insurance: {
    label: "Insurance",
    description: "Risk, coverage, and industry literacy",
    color: "from-[var(--gold)]/15 to-[var(--silver)]/5",
  },
  ai: {
    label: "AI Fundamentals",
    description: "Practical AI for everyday work",
    color: "from-[var(--silver)]/15 to-[var(--gold)]/10",
  },
  cybersecurity: {
    label: "Cybersecurity",
    description: "Protect yourself and your organization",
    color: "from-[var(--gold-dark)]/15 to-[var(--gold)]/5",
  },
  it: {
    label: "IT Fundamentals",
    description: "Devices, networks, and support basics",
    color: "from-[var(--silver)]/12 to-white/5",
  },
  automotive: {
    label: "Automotive",
    description: "Vehicles, safety, and modern mobility",
    color: "from-[var(--gold)]/12 to-[var(--gold-dark)]/8",
  },
  financial: {
    label: "Financial Literacy",
    description: "Budgets, credit, and smart money habits",
    color: "from-[var(--gold-dark)]/12 to-[var(--silver)]/8",
  },
  communication: {
    label: "Communication",
    description: "Professional speaking and writing",
    color: "from-[var(--silver)]/15 to-[var(--gold)]/8",
  },
  business: {
    label: "Business",
    description: "Operations, sales, and entrepreneurship",
    color: "from-[var(--gold)]/18 to-[var(--silver)]/6",
  },
  technology: {
    label: "Technology for Beginners",
    description: "Digital confidence from day one",
    color: "from-white/8 to-[var(--silver)]/10",
  },
};

function placeholderModules(
  prefix: string,
  topics: string[]
): Course["modules"] {
  return topics.map((title, i) => ({
    id: `${prefix}-m${i + 1}`,
    title,
    description: `Learn core concepts in ${title.toLowerCase()}.`,
    keyConcepts: ["Foundations", "Real-world application", "Next steps"],
    lessons: [
      {
        id: `${prefix}-m${i + 1}-l1`,
        title: "Introduction",
        content: `Welcome to ${title}. This module introduces essential ideas in plain language with practical examples you can use immediately.`,
        example: "Think of each lesson as a building block toward job-ready confidence.",
      },
      {
        id: `${prefix}-m${i + 1}-l2`,
        title: "Key concepts",
        content: "We break complex topics into simple steps: what it is, why it matters, and how to apply it in daily life or work.",
      },
      {
        id: `${prefix}-m${i + 1}-l3`,
        title: "Practice & recap",
        content: "Review what you learned, complete the module quiz, and earn XP toward your next level.",
      },
    ],
  }));
}

function buildCourse(
  id: string,
  title: string,
  category: CourseCategory,
  description: string,
  moduleTopics: string[],
  opts?: Partial<Course>
): Course {
  return {
    id,
    slug: id,
    title,
    description,
    category,
    difficulty: "beginner",
    estimatedHours: moduleTopics.length * 0.75,
    xpReward: moduleTopics.length * 80,
    skills: [{ id: `${id}-skill`, name: title }],
    modules: placeholderModules(id, moduleTopics),
    ...opts,
  };
}

export const COURSES: Course[] = [
  {
    id: "insurance-fundamentals",
    slug: "insurance-fundamentals",
    title: "Insurance Fundamentals",
    description:
      "An in-depth journey through insurance history, regulation, life & health, claims, buying wisely, and agency operations — expanded from industry-leading educational content.",
    category: "insurance",
    difficulty: "beginner",
    estimatedHours: 14,
    xpReward: 1200,
    featured: true,
    textbookCourse: true,
    skills: [
      { id: "risk-transfer", name: "Risk Transfer" },
      { id: "regulation", name: "Insurance Regulation" },
      { id: "life-health", name: "Life & Health" },
      { id: "claims", name: "Claims Process" },
      { id: "agency-ops", name: "Agency Operations" },
    ],
    modules: [],
  },
  buildCourse(
    "ai-fundamentals",
    "AI Fundamentals",
    "ai",
    "Understand what AI is, how models work, and how to use tools responsibly in work and life.",
    ["What is AI?", "Prompting basics", "Ethics & safety", "AI at work"],
    { featured: true, difficulty: "beginner", xpReward: 400 }
  ),
  buildCourse(
    "cybersecurity-basics",
    "Cybersecurity Basics",
    "cybersecurity",
    "Passwords, phishing, device security, and protecting personal data.",
    ["Threat landscape", "Passwords & MFA", "Phishing awareness", "Secure habits"],
    { featured: true }
  ),
  buildCourse(
    "it-fundamentals",
    "IT Fundamentals",
    "it",
    "Computers, networks, troubleshooting, and cloud basics for beginners.",
    ["Hardware & OS", "Networks", "Troubleshooting", "Cloud intro"]
  ),
  buildCourse(
    "automotive-basics",
    "Automotive Basics",
    "automotive",
    "Vehicle systems, maintenance, buying, and modern automotive technology.",
    ["Vehicle systems", "Maintenance", "Buying & financing", "EV & future tech"]
  ),
  buildCourse(
    "financial-literacy",
    "Financial Literacy",
    "financial",
    "Budgeting, credit, saving, and making informed financial decisions.",
    ["Budgeting", "Credit scores", "Saving & investing intro", "Avoiding scams"]
  ),
  buildCourse(
    "communication-skills",
    "Communication Skills",
    "communication",
    "Professional email, presentations, listening, and workplace communication.",
    ["Active listening", "Email & writing", "Presentations", "Difficult conversations"]
  ),
  buildCourse(
    "business-foundations",
    "Business Foundations",
    "business",
    "How businesses operate, basic finance, customers, and growth mindset.",
    ["Business models", "Customers & value", "Basic finance", "Growth basics"]
  ),
  buildCourse(
    "technology-for-beginners",
    "Technology for Beginners",
    "technology",
    "Digital literacy from smartphones to apps, privacy, and online safety.",
    ["Devices & apps", "Internet basics", "Privacy settings", "Staying current"],
    { featured: true }
  ),
];

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export function getFeaturedCourses(): Course[] {
  return COURSES.filter((c) => c.featured);
}

export function getCoursesByCategory(category: CourseCategory): Course[] {
  return COURSES.filter((c) => c.category === category);
}
