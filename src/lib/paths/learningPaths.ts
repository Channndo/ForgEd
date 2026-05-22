import type { CourseCategory } from "@/lib/types";

export type PathSkillLevel = "beginner" | "intermediate" | "advanced";
export type PathLabType =
  | "prompt-engineering"
  | "ai-workflow"
  | "ai-research"
  | "objection-roleplay"
  | "customer-simulation"
  | "negotiation-scenario"
  | "budget-planner"
  | "debt-payoff"
  | "credit-analysis"
  | "phishing-detection"
  | "password-audit"
  | "threat-recognition"
  | "service-interaction"
  | "repair-order"
  | "upsell-scenario";

export interface PathLab {
  id: string;
  title: string;
  description: string;
  type: PathLabType;
  xpReward: number;
  /** Unlock after completing this course slug in the path */
  unlockAfterCourseSlug: string;
}

export interface PathCourseStep {
  /** Catalog slug — may alias an existing textbook */
  slug: string;
  title: string;
  subtitle?: string;
  order: number;
  estimatedHours: number;
  xpReward: number;
  category: CourseCategory;
  instructorLed?: boolean;
  description: string;
  skills: { id: string; name: string }[];
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  tagline: string;
  skillLevel: PathSkillLevel;
  estimatedWeeks: number;
  totalXp: number;
  badgeId: string;
  badgeName: string;
  badgeDescription: string;
  /** Path locked until user completes another path or reaches level */
  unlockRequirement?: { type: "level"; level: number } | { type: "path"; pathId: string };
  courses: PathCourseStep[];
  labs: PathLab[];
  masteryExamQuestions: number;
}

/** Maps path step slug → existing catalog slug when content already exists */
export const PATH_COURSE_ALIASES: Record<string, string> = {
  "ai-literacy-101": "ai-fundamentals",
  "communication-fundamentals": "communication-skills",
  "financial-literacy": "financial-literacy",
  "computer-fundamentals": "technology-for-beginners",
  "cybersecurity-fundamentals": "cybersecurity-basics",
  "cybersecurity-basics": "cybersecurity-basics",
  "entrepreneurship-basics": "entrepreneurship-fundamentals",
  "business-operations": "business-foundations",
};

export function resolveCatalogSlug(pathSlug: string): string {
  return PATH_COURSE_ALIASES[pathSlug] ?? pathSlug;
}

/** Every mastery path must include at least this many sequential courses */
export const MIN_PATH_COURSES = 3;

export function getPathCourseCount(path: LearningPath): number {
  return path.courses.length;
}

function assertPathCourseMinimums() {
  for (const path of LEARNING_PATHS) {
    if (path.courses.length < MIN_PATH_COURSES) {
      throw new Error(
        `Path "${path.id}" has ${path.courses.length} courses; minimum is ${MIN_PATH_COURSES}`
      );
    }
  }
}

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: "ai-literacy",
    title: "AI Literacy Path",
    description:
      "Learn how to understand and use AI tools in the modern workforce — from prompting to automation without hype or jargon.",
    tagline: "Workforce-ready AI fluency",
    skillLevel: "beginner",
    estimatedWeeks: 4,
    totalXp: 2100,
    badgeId: "path-ai-practitioner",
    badgeName: "AI Practitioner Badge",
    badgeDescription: "Completed the AI Literacy mastery path",
    courses: [
      {
        slug: "ai-literacy-101",
        title: "AI Literacy 101",
        subtitle: "Instructor-led foundation",
        order: 1,
        estimatedHours: 12,
        xpReward: 800,
        category: "ai",
        instructorLed: true,
        description:
          "Understand what modern AI systems are, how they help knowledge work, and where they fail — built for professionals adopting tools at work.",
        skills: [
          { id: "ai-concepts", name: "AI Concepts" },
          { id: "tool-landscape", name: "Tool Landscape" },
          { id: "safe-use", name: "Responsible Use" },
        ],
      },
      {
        slug: "prompting-fundamentals",
        title: "Prompting Fundamentals",
        order: 2,
        estimatedHours: 8,
        xpReward: 650,
        category: "ai",
        description:
          "Write clear prompts, chain instructions, and evaluate outputs for accuracy — the core skill behind every AI assistant.",
        skills: [
          { id: "prompt-structure", name: "Prompt Structure" },
          { id: "iteration", name: "Iterative Refinement" },
        ],
      },
      {
        slug: "ai-workflow-automation",
        title: "AI Workflow Automation",
        order: 3,
        estimatedHours: 9,
        xpReward: 700,
        category: "ai",
        description:
          "Connect triggers, approvals, and handoffs between AI steps and human review for lightweight automation in operations.",
        skills: [
          { id: "automation", name: "Light Automation" },
          { id: "handoffs", name: "Human Handoffs" },
        ],
      },
    ],
    labs: [
      {
        id: "ai-lab-prompt",
        title: "Prompt Engineering Lab",
        description: "Practice structured prompts for real workplace scenarios.",
        type: "prompt-engineering",
        xpReward: 120,
        unlockAfterCourseSlug: "prompting-fundamentals",
      },
      {
        id: "ai-lab-workflow",
        title: "AI Workflow Lab",
        description: "Design a three-step AI-assisted workflow with review gates.",
        type: "ai-workflow",
        xpReward: 120,
        unlockAfterCourseSlug: "prompting-fundamentals",
      },
    ],
    masteryExamQuestions: 20,
  },
  {
    id: "sales",
    title: "Sales Path",
    description:
      "Universal sales, communication, and persuasion skills for modern careers — from discovery to follow-up and CRM discipline.",
    tagline: "Revenue skills for any role",
    skillLevel: "beginner",
    estimatedWeeks: 4,
    totalXp: 1950,
    badgeId: "path-sales-operator",
    badgeName: "Sales Operator Badge",
    badgeDescription: "Completed the Sales mastery path",
    courses: [
      {
        slug: "sales-school-101",
        title: "Sales School 101",
        subtitle: "Instructor-led foundation",
        order: 1,
        estimatedHours: 10,
        xpReward: 750,
        category: "business",
        instructorLed: true,
        description:
          "Learn the sales cycle, pipeline thinking, and ethical persuasion — applicable to SaaS, services, retail, and B2B roles.",
        skills: [
          { id: "pipeline", name: "Pipeline Basics" },
          { id: "discovery", name: "Discovery Calls" },
        ],
      },
      {
        slug: "communication-fundamentals",
        title: "Communication Fundamentals",
        order: 2,
        estimatedHours: 8,
        xpReward: 650,
        category: "communication",
        description:
          "Professional listening, clarity, and tone — the foundation for every customer conversation and internal alignment.",
        skills: [
          { id: "listening", name: "Active Listening" },
          { id: "clarity", name: "Clear Messaging" },
        ],
      },
      {
        slug: "objection-handling",
        title: "Objection Handling",
        order: 3,
        estimatedHours: 7,
        xpReward: 600,
        category: "business",
        description:
          "Respond to price, timing, and fit objections with frameworks that preserve relationships and momentum.",
        skills: [
          { id: "objections", name: "Objection Frameworks" },
          { id: "reframes", name: "Value Reframes" },
        ],
      },

    ],
    labs: [
      {
        id: "sales-lab-objection",
        title: "Objection Handling Roleplay",
        description: "Practice responses to common buyer objections.",
        type: "objection-roleplay",
        xpReward: 120,
        unlockAfterCourseSlug: "objection-handling",
      },
      {
        id: "sales-lab-customer",
        title: "Customer Communication Simulation",
        description: "Navigate a multi-touch customer scenario.",
        type: "customer-simulation",
        xpReward: 120,
        unlockAfterCourseSlug: "communication-fundamentals",
      },
    ],
    masteryExamQuestions: 20,
  },
  {
    id: "financial-literacy",
    title: "Financial Literacy Path",
    description:
      "Practical real-world money management — budgets, credit, banking, taxes, investing, and retirement without Wall Street jargon.",
    tagline: "Money skills that compound",
    skillLevel: "beginner",
    estimatedWeeks: 4,
    totalXp: 1900,
    badgeId: "path-financial-foundations",
    badgeName: "Financial Foundations Badge",
    badgeDescription: "Completed the Financial Literacy mastery path",
    courses: [
      {
        slug: "financial-literacy",
        title: "Financial Literacy",
        order: 1,
        estimatedHours: 10,
        xpReward: 700,
        category: "financial",
        description:
          "Household economics, cash flow, and financial goals — the anchor course for every other module in this path.",
        skills: [
          { id: "cash-flow", name: "Cash Flow" },
          { id: "goals", name: "Financial Goals" },
        ],
      },
      {
        slug: "budgeting-systems",
        title: "Budgeting Systems",
        order: 2,
        estimatedHours: 7,
        xpReward: 600,
        category: "financial",
        description:
          "Zero-based, envelope, and pay-yourself-first systems that survive irregular income and real life.",
        skills: [
          { id: "budget-methods", name: "Budget Methods" },
          { id: "tracking", name: "Expense Tracking" },
        ],
      },
      {
        slug: "credit-and-debt",
        title: "Credit & Debt",
        order: 3,
        estimatedHours: 7,
        xpReward: 600,
        category: "financial",
        description:
          "Credit scores, utilization, and payoff strategies — avoid traps and rebuild after setbacks.",
        skills: [
          { id: "credit", name: "Credit Scores" },
          { id: "debt", name: "Debt Payoff" },
        ],
      },
    ],
    labs: [
      {
        id: "fin-lab-budget",
        title: "Budget Planning Lab",
        description: "Build a monthly budget from a realistic income scenario.",
        type: "budget-planner",
        xpReward: 120,
        unlockAfterCourseSlug: "budgeting-systems",
      },
      {
        id: "fin-lab-debt",
        title: "Debt Payoff Simulation",
        description: "Compare avalanche vs snowball payoff strategies.",
        type: "debt-payoff",
        xpReward: 120,
        unlockAfterCourseSlug: "credit-and-debt",
      },
      {
        id: "fin-lab-credit",
        title: "Credit Utilization Analysis",
        description: "Diagnose utilization and score impact.",
        type: "credit-analysis",
        xpReward: 120,
        unlockAfterCourseSlug: "credit-and-debt",
      },
    ],
    masteryExamQuestions: 20,
  },
  {
    id: "it-foundations",
    title: "IT Foundations Path",
    description:
      "Foundational computer and technology knowledge for support, operations, and modern office roles.",
    tagline: "Tech confidence from zero",
    skillLevel: "beginner",
    estimatedWeeks: 4,
    totalXp: 1950,
    badgeId: "path-it-foundations",
    badgeName: "IT Foundations Badge",
    badgeDescription: "Completed the IT Foundations mastery path",
    courses: [
      {
        slug: "computer-fundamentals",
        title: "Computer Fundamentals",
        order: 1,
        estimatedHours: 8,
        xpReward: 650,
        category: "technology",
        description:
          "Hardware, software, files, and cloud accounts — how computers work for everyday professionals.",
        skills: [
          { id: "hardware", name: "Hardware Basics" },
          { id: "software", name: "Software & Apps" },
        ],
      },
      {
        slug: "operating-systems-basics",
        title: "Operating Systems",
        order: 2,
        estimatedHours: 8,
        xpReward: 650,
        category: "it",
        description:
          "Windows, macOS, and Linux concepts — users, permissions, updates, and system settings.",
        skills: [
          { id: "os-users", name: "Users & Permissions" },
          { id: "updates", name: "Updates & Patches" },
        ],
      },
      {
        slug: "networking-basics",
        title: "Networking Basics",
        order: 3,
        estimatedHours: 8,
        xpReward: 650,
        category: "it",
        description:
          "IP, DNS, Wi‑Fi, VPN, and troubleshooting connectivity issues at home and work.",
        skills: [
          { id: "ip-dns", name: "IP & DNS" },
          { id: "wifi", name: "Wi‑Fi & VPN" },
        ],
      },
    ],
    labs: [],
    masteryExamQuestions: 20,
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Path",
    description:
      "Introductory cybersecurity concepts and digital safety for every employee — not just SOC analysts.",
    tagline: "Defend your digital perimeter",
    skillLevel: "beginner",
    estimatedWeeks: 4,
    totalXp: 1850,
    badgeId: "path-cyber-defense",
    badgeName: "Cyber Defense Badge",
    badgeDescription: "Completed the Cybersecurity mastery path",
    unlockRequirement: { type: "path", pathId: "it-foundations" },
    courses: [
      {
        slug: "cybersecurity-basics",
        title: "Cybersecurity Basics",
        order: 1,
        estimatedHours: 10,
        xpReward: 700,
        category: "cybersecurity",
        description:
          "Core security principles, threat models, and organizational policies — start here before specialization.",
        skills: [
          { id: "security-mindset", name: "Security Mindset" },
          { id: "policies", name: "Security Policies" },
        ],
      },
      {
        slug: "threat-awareness",
        title: "Threat Awareness",
        order: 2,
        estimatedHours: 7,
        xpReward: 600,
        category: "cybersecurity",
        description:
          "Malware, ransomware, insiders, and supply-chain risk — recognize signals before damage spreads.",
        skills: [
          { id: "malware", name: "Malware Types" },
          { id: "insider", name: "Insider Risk" },
        ],
      },
      {
        slug: "password-security",
        title: "Password Security",
        order: 3,
        estimatedHours: 6,
        xpReward: 550,
        category: "cybersecurity",
        description:
          "Managers, MFA, passkeys, and rotation myths — practical credential hygiene for teams.",
        skills: [
          { id: "mfa", name: "MFA & Passkeys" },
          { id: "managers", name: "Password Managers" },
        ],
      },
    ],
    labs: [
      {
        id: "cyber-lab-phishing",
        title: "Phishing Detection Lab",
        description: "Identify red flags in realistic message samples.",
        type: "phishing-detection",
        xpReward: 120,
        unlockAfterCourseSlug: "password-security",
      },
      {
        id: "cyber-lab-password",
        title: "Password Auditing Lab",
        description: "Evaluate password habits against best practices.",
        type: "password-audit",
        xpReward: 120,
        unlockAfterCourseSlug: "password-security",
      },
      {
        id: "cyber-lab-threat",
        title: "Threat Recognition Lab",
        description: "Classify threats and choose responses.",
        type: "threat-recognition",
        xpReward: 120,
        unlockAfterCourseSlug: "threat-awareness",
      },
    ],
    masteryExamQuestions: 20,
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship Path",
    description:
      "Learn the fundamentals of building and operating businesses — from brand to finance and AI leverage.",
    tagline: "Build with clarity",
    skillLevel: "intermediate",
    estimatedWeeks: 4,
    totalXp: 1950,
    badgeId: "path-founder",
    badgeName: "Founder Badge",
    badgeDescription: "Completed the Entrepreneurship mastery path",
    unlockRequirement: { type: "level", level: 3 },
    courses: [
      {
        slug: "entrepreneurship-basics",
        title: "Entrepreneurship Basics",
        order: 1,
        estimatedHours: 10,
        xpReward: 700,
        category: "entrepreneurship",
        description:
          "Mindset, validation, and business models — decide if an idea deserves your time and capital.",
        skills: [
          { id: "validation", name: "Idea Validation" },
          { id: "models", name: "Business Models" },
        ],
      },
      {
        slug: "branding-fundamentals",
        title: "Branding Fundamentals",
        order: 2,
        estimatedHours: 7,
        xpReward: 600,
        category: "business",
        description:
          "Positioning, voice, and visual identity that customers remember — without agency price tags.",
        skills: [
          { id: "positioning", name: "Positioning" },
          { id: "voice", name: "Brand Voice" },
        ],
      },
      {
        slug: "customer-acquisition",
        title: "Customer Acquisition",
        order: 3,
        estimatedHours: 8,
        xpReward: 650,
        category: "business",
        description:
          "Channels, CAC, and experiments — find first customers before scaling spend.",
        skills: [
          { id: "channels", name: "Acquisition Channels" },
          { id: "experiments", name: "Growth Experiments" },
        ],
      },
    ],
    labs: [],
    masteryExamQuestions: 20,
  },
  {
    id: "service-advisor",
    title: "Service Advisor Path",
    description:
      "Modern dealership and service communication mastery — repair orders, warranties, and difficult customers.",
    tagline: "Front-line service excellence",
    skillLevel: "intermediate",
    estimatedWeeks: 4,
    totalXp: 1950,
    badgeId: "path-service-advisor",
    badgeName: "Service Advisor Path Badge",
    badgeDescription: "Completed the Service Advisor mastery path",
    courses: [
      {
        slug: "service-advising-fundamentals",
        title: "Service Advising Fundamentals",
        order: 1,
        estimatedHours: 9,
        xpReward: 700,
        category: "automotive",
        description:
          "Advisor role, shop flow, and customer expectations in modern service departments.",
        skills: [
          { id: "advisor-role", name: "Advisor Role" },
          { id: "shop-flow", name: "Shop Flow" },
        ],
      },
      {
        slug: "repair-order-workflow",
        title: "Repair Order Workflow",
        order: 2,
        estimatedHours: 8,
        xpReward: 650,
        category: "automotive",
        description:
          "Write-ups, approvals, parts, and technician handoffs — accurate ROs that protect margin.",
        skills: [
          { id: "ro", name: "Repair Orders" },
          { id: "approvals", name: "Customer Approvals" },
        ],
      },
      {
        slug: "customer-communication-service",
        title: "Customer Communication",
        order: 3,
        estimatedHours: 7,
        xpReward: 600,
        category: "communication",
        description:
          "Explain repairs clearly, set time expectations, and build trust under shop pressure.",
        skills: [
          { id: "explain", name: "Explain Repairs" },
          { id: "expectations", name: "Set Expectations" },
        ],
      },
    ],
    labs: [
      {
        id: "svc-lab-interaction",
        title: "Customer Interaction Simulation",
        description: "Handle a check-in with time and cost objections.",
        type: "service-interaction",
        xpReward: 120,
        unlockAfterCourseSlug: "customer-communication-service",
      },
      {
        id: "svc-lab-ro",
        title: "Repair Order Creation Lab",
        description: "Build a complete RO from a customer complaint.",
        type: "repair-order",
        xpReward: 120,
        unlockAfterCourseSlug: "repair-order-workflow",
      },
      {
        id: "svc-lab-upsell",
        title: "Upselling Scenarios Lab",
        description: "Recommend maintenance with transparent value.",
        type: "upsell-scenario",
        xpReward: 120,
        unlockAfterCourseSlug: "customer-communication-service",
      },
    ],
    masteryExamQuestions: 20,
  },
];

assertPathCourseMinimums();

export function getLearningPathById(id: string): LearningPath | undefined {
  return LEARNING_PATHS.find((p) => p.id === id);
}

export function getAllPathCourseSlugs(): string[] {
  const slugs = new Set<string>();
  for (const path of LEARNING_PATHS) {
    for (const c of path.courses) {
      slugs.add(resolveCatalogSlug(c.slug));
    }
  }
  return [...slugs];
}

export function getPathForCourseSlug(slug: string): LearningPath | undefined {
  const catalogSlug = resolveCatalogSlug(slug);
  return LEARNING_PATHS.find((p) =>
    p.courses.some((c) => resolveCatalogSlug(c.slug) === catalogSlug)
  );
}
