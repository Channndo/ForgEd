import type { Course, CourseCategory } from "@/lib/types";
import { getTextbookChapterCount } from "@/lib/courses/textbook/registry";

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

function textbookCourse(
  id: string,
  title: string,
  category: CourseCategory,
  description: string,
  skills: { id: string; name: string }[],
  opts?: Partial<Course>
): Course {
  const chapters = getTextbookChapterCount(id);
  return {
    id,
    slug: id,
    title,
    description,
    category,
    difficulty: "beginner",
    estimatedHours: Math.max(10, chapters * 1.2),
    xpReward: chapters * 100,
    skills,
    modules: [],
    textbookCourse: true,
    ...opts,
  };
}

export const COURSES: Course[] = [
  textbookCourse(
    "insurance-fundamentals",
    "Insurance Fundamentals",
    "insurance",
    "A rigorous digital textbook on insurance history, regulation, life & health, claims, buying wisely, and agency operations — CoverIQ Facts depth, expanded for ForgEd.",
    [
      { id: "risk-transfer", name: "Risk Transfer" },
      { id: "regulation", name: "Insurance Regulation" },
      { id: "life-health", name: "Life & Health" },
      { id: "claims", name: "Claims Process" },
      { id: "agency-ops", name: "Agency Operations" },
    ],
    { featured: true, difficulty: "beginner" }
  ),
  textbookCourse(
    "ai-fundamentals",
    "AI Fundamentals",
    "ai",
    "Ten-chapter digital textbook: computation and intelligence, ML, neural networks, LLMs, ethics, and workplace AI — academic depth, not hype.",
    [
      { id: "ml-basics", name: "Machine Learning" },
      { id: "llms", name: "Large Language Models" },
      { id: "ai-ethics", name: "AI Ethics & Safety" },
      { id: "ai-work", name: "AI at Work" },
    ],
    { featured: true }
  ),
  textbookCourse(
    "cybersecurity-basics",
    "Cybersecurity Basics",
    "cybersecurity",
    "Ten-chapter textbook on the CIA triad, threats, authentication, networks, cryptography, social engineering, incident response, and compliance.",
    [
      { id: "cia", name: "CIA Triad" },
      { id: "mfa", name: "Authentication & MFA" },
      { id: "phishing", name: "Social Engineering" },
      { id: "ir", name: "Incident Response" },
    ],
    { featured: true }
  ),
  textbookCourse(
    "it-fundamentals",
    "IT Fundamentals",
    "it",
    "Ten-chapter textbook: hardware, operating systems, networking, cloud, troubleshooting, and IT careers — structured like a first-year IT survey course.",
    [
      { id: "hardware", name: "Hardware" },
      { id: "networking", name: "Networking" },
      { id: "cloud", name: "Cloud Basics" },
      { id: "troubleshoot", name: "Troubleshooting" },
    ]
  ),
  textbookCourse(
    "automotive-basics",
    "Automotive Basics",
    "automotive",
    "Ten-chapter textbook on vehicle systems, maintenance, safety, buying and financing, insurance, and electric/autonomous technology.",
    [
      { id: "powertrain", name: "Powertrain" },
      { id: "safety", name: "Vehicle Safety" },
      { id: "ev", name: "EV & Hybrid" },
      { id: "buying", name: "Buying & Finance" },
    ]
  ),
  textbookCourse(
    "financial-literacy",
    "Financial Literacy",
    "financial",
    "Ten-chapter textbook on money, budgeting, credit, debt, saving, investing, taxes, and fraud — household economics in academic prose.",
    [
      { id: "budgeting", name: "Budgeting" },
      { id: "credit", name: "Credit & Scores" },
      { id: "investing", name: "Investing Basics" },
      { id: "planning", name: "Financial Planning" },
    ]
  ),
  textbookCourse(
    "communication-skills",
    "Communication Skills",
    "communication",
    "Ten-chapter textbook on theory, listening, writing, persuasion, presentations, conflict, and digital professionalism.",
    [
      { id: "listening", name: "Active Listening" },
      { id: "writing", name: "Professional Writing" },
      { id: "presentations", name: "Presentations" },
      { id: "conflict", name: "Conflict Communication" },
    ]
  ),
  textbookCourse(
    "business-foundations",
    "Business Foundations",
    "business",
    "Ten-chapter textbook on value creation, strategy, marketing, operations, accounting, HR, entrepreneurship, and governance.",
    [
      { id: "strategy", name: "Strategy" },
      { id: "marketing", name: "Marketing" },
      { id: "finance", name: "Business Finance" },
      { id: "entrepreneurship", name: "Entrepreneurship" },
    ]
  ),
  textbookCourse(
    "technology-for-beginners",
    "Technology for Beginners",
    "technology",
    "Ten-chapter textbook on devices, apps, internet, privacy, accessibility, and digital citizenship for first-time learners.",
    [
      { id: "devices", name: "Devices & Apps" },
      { id: "privacy", name: "Privacy & Security" },
      { id: "cloud-user", name: "Cloud & Accounts" },
      { id: "citizenship", name: "Digital Citizenship" },
    ],
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
