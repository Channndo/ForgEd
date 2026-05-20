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

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: "ai-literacy",
    title: "AI Literacy Path",
    description:
      "Learn how to understand and use AI tools in the modern workforce — from prompting to automation without hype or jargon.",
    tagline: "Workforce-ready AI fluency",
    skillLevel: "beginner",
    estimatedWeeks: 6,
    totalXp: 4200,
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
        slug: "ai-productivity-systems",
        title: "AI Productivity Systems",
        order: 3,
        estimatedHours: 8,
        xpReward: 650,
        category: "ai",
        description:
          "Build repeatable workflows for email, meetings, documentation, and task triage using AI as a copilot, not a crutch.",
        skills: [
          { id: "workflows", name: "Workflow Design" },
          { id: "templates", name: "Reusable Templates" },
        ],
      },
      {
        slug: "ai-research-skills",
        title: "AI Research Skills",
        order: 4,
        estimatedHours: 8,
        xpReward: 650,
        category: "ai",
        description:
          "Synthesize sources, compare claims, and fact-check model outputs for market research, policy briefs, and decision support.",
        skills: [
          { id: "source-triage", name: "Source Triage" },
          { id: "verification", name: "Verification" },
        ],
      },
      {
        slug: "ai-ethics-risks",
        title: "AI Ethics & Risks",
        order: 5,
        estimatedHours: 7,
        xpReward: 600,
        category: "ai",
        description:
          "Navigate bias, privacy, IP, and workplace policies — know when AI is appropriate and when human judgment must lead.",
        skills: [
          { id: "risk-framework", name: "Risk Framework" },
          { id: "policy", name: "Workplace Policy" },
        ],
      },
      {
        slug: "ai-workflow-automation",
        title: "AI Workflow Automation",
        order: 6,
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
        unlockAfterCourseSlug: "ai-productivity-systems",
      },
      {
        id: "ai-lab-research",
        title: "AI Research Lab",
        description: "Run a guided research sprint with citation checks.",
        type: "ai-research",
        xpReward: 120,
        unlockAfterCourseSlug: "ai-research-skills",
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
    estimatedWeeks: 8,
    totalXp: 5200,
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
        slug: "customer-psychology",
        title: "Customer Psychology",
        order: 3,
        estimatedHours: 7,
        xpReward: 600,
        category: "business",
        description:
          "Understand buyer motivation, trust signals, and decision friction without manipulative tactics.",
        skills: [
          { id: "motivation", name: "Buyer Motivation" },
          { id: "trust", name: "Trust Building" },
        ],
      },
      {
        slug: "objection-handling",
        title: "Objection Handling",
        order: 4,
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
      {
        slug: "negotiation-basics",
        title: "Negotiation Basics",
        order: 5,
        estimatedHours: 8,
        xpReward: 650,
        category: "business",
        description:
          "Prepare BATNA, trade concessions, and close win-win agreements in sales and everyday professional deals.",
        skills: [
          { id: "prep", name: "Negotiation Prep" },
          { id: "closing", name: "Closing Techniques" },
        ],
      },
      {
        slug: "follow-up-systems",
        title: "Follow-Up Systems",
        order: 6,
        estimatedHours: 6,
        xpReward: 550,
        category: "business",
        description:
          "Cadences, templates, and accountability that prevent deals from dying in silence after a good first call.",
        skills: [
          { id: "cadence", name: "Follow-Up Cadence" },
          { id: "crm-hygiene", name: "CRM Hygiene" },
        ],
      },
      {
        slug: "crm-fundamentals",
        title: "CRM Fundamentals",
        order: 7,
        estimatedHours: 7,
        xpReward: 600,
        category: "business",
        description:
          "Stages, fields, and reporting in modern CRMs — keep pipeline data trustworthy for you and your team.",
        skills: [
          { id: "crm-stages", name: "Pipeline Stages" },
          { id: "reporting", name: "Sales Reporting" },
        ],
      },
      {
        slug: "ai-assisted-sales",
        title: "AI-Assisted Sales",
        order: 8,
        estimatedHours: 8,
        xpReward: 650,
        category: "ai",
        description:
          "Use AI for research, call prep, and follow-up drafts while keeping authenticity and compliance front and center.",
        skills: [
          { id: "ai-prep", name: "AI Call Prep" },
          { id: "ai-followup", name: "AI Follow-Up Drafts" },
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
      {
        id: "sales-lab-negotiation",
        title: "Negotiation Scenario Lab",
        description: "Close a deal with structured trade-offs.",
        type: "negotiation-scenario",
        xpReward: 120,
        unlockAfterCourseSlug: "negotiation-basics",
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
    estimatedWeeks: 7,
    totalXp: 4500,
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
      {
        slug: "banking-basics",
        title: "Banking Basics",
        order: 4,
        estimatedHours: 6,
        xpReward: 550,
        category: "financial",
        description:
          "Checking, savings, fees, and digital banking safety — choose products that match how you actually live.",
        skills: [
          { id: "accounts", name: "Account Types" },
          { id: "fees", name: "Fee Avoidance" },
        ],
      },
      {
        slug: "taxes-explained",
        title: "Taxes Explained",
        order: 5,
        estimatedHours: 8,
        xpReward: 650,
        category: "financial",
        description:
          "W-2 vs 1099, withholdings, deductions, and filing basics — general education, not tax advice.",
        skills: [
          { id: "tax-forms", name: "Tax Forms" },
          { id: "withholding", name: "Withholding" },
        ],
      },
      {
        slug: "investing-fundamentals",
        title: "Investing Fundamentals",
        order: 6,
        estimatedHours: 8,
        xpReward: 650,
        category: "financial",
        description:
          "Risk, diversification, index funds, and time horizon — build long-term habits without speculation hype.",
        skills: [
          { id: "risk", name: "Risk & Return" },
          { id: "diversification", name: "Diversification" },
        ],
      },
      {
        slug: "retirement-planning",
        title: "Retirement Planning",
        order: 7,
        estimatedHours: 8,
        xpReward: 650,
        category: "financial",
        description:
          "401(k), IRA, employer match, and compound growth scenarios — start early, adjust often.",
        skills: [
          { id: "accounts-retire", name: "Retirement Accounts" },
          { id: "compound", name: "Compound Growth" },
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
    estimatedWeeks: 6,
    totalXp: 4000,
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
      {
        slug: "internet-infrastructure",
        title: "Internet Infrastructure",
        order: 4,
        estimatedHours: 7,
        xpReward: 600,
        category: "it",
        description:
          "How data moves across ISPs, CDNs, and cloud regions — enough context to debug slow apps.",
        skills: [
          { id: "isp", name: "ISPs & Routing" },
          { id: "cdn", name: "CDN Basics" },
        ],
      },
      {
        slug: "troubleshooting-basics",
        title: "Troubleshooting Basics",
        order: 5,
        estimatedHours: 8,
        xpReward: 650,
        category: "it",
        description:
          "Structured diagnosis, logs, and escalation — fix common issues before opening a ticket.",
        skills: [
          { id: "diagnosis", name: "Structured Diagnosis" },
          { id: "tickets", name: "Support Tickets" },
        ],
      },
      {
        slug: "cybersecurity-fundamentals",
        title: "Cybersecurity Fundamentals",
        order: 6,
        estimatedHours: 10,
        xpReward: 700,
        category: "cybersecurity",
        description:
          "CIA triad, threats, and safe habits — bridge into dedicated security paths.",
        skills: [
          { id: "cia", name: "CIA Triad" },
          { id: "threats", name: "Threat Awareness" },
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
    estimatedWeeks: 6,
    totalXp: 4000,
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
      {
        slug: "phishing-defense",
        title: "Phishing Defense",
        order: 4,
        estimatedHours: 7,
        xpReward: 600,
        category: "cybersecurity",
        description:
          "Spot spear phishing, smishing, and BEC — report and contain without panic.",
        skills: [
          { id: "phishing", name: "Phishing Signals" },
          { id: "reporting", name: "Incident Reporting" },
        ],
      },
      {
        slug: "network-security",
        title: "Network Security",
        order: 5,
        estimatedHours: 8,
        xpReward: 650,
        category: "cybersecurity",
        description:
          "Firewalls, segmentation, zero trust basics, and secure remote access patterns.",
        skills: [
          { id: "firewall", name: "Firewalls" },
          { id: "zt", name: "Zero Trust Intro" },
        ],
      },
      {
        slug: "incident-response-basics",
        title: "Incident Response Basics",
        order: 6,
        estimatedHours: 8,
        xpReward: 650,
        category: "cybersecurity",
        description:
          "Containment, evidence preservation, and communication during a security incident.",
        skills: [
          { id: "ir-plan", name: "IR Playbooks" },
          { id: "comms", name: "Stakeholder Comms" },
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
        unlockAfterCourseSlug: "phishing-defense",
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
    estimatedWeeks: 8,
    totalXp: 4800,
    badgeId: "path-founder",
    badgeName: "Founder Badge",
    badgeDescription: "Completed the Entrepreneurship mastery path",
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
      {
        slug: "business-operations",
        title: "Business Operations",
        order: 4,
        estimatedHours: 9,
        xpReward: 700,
        category: "business",
        description:
          "Delivery, vendors, and internal processes that keep promises to customers at scale.",
        skills: [
          { id: "ops", name: "Operations" },
          { id: "vendors", name: "Vendor Management" },
        ],
      },
      {
        slug: "digital-presence",
        title: "Digital Presence",
        order: 5,
        estimatedHours: 7,
        xpReward: 600,
        category: "business",
        description:
          "Websites, social proof, and content cadence — show up credibly where buyers already look.",
        skills: [
          { id: "web", name: "Web Presence" },
          { id: "content", name: "Content Cadence" },
        ],
      },
      {
        slug: "startup-finance",
        title: "Startup Finance",
        order: 6,
        estimatedHours: 8,
        xpReward: 650,
        category: "financial",
        description:
          "Runway, unit economics, and basic cap table literacy — general education for founders.",
        skills: [
          { id: "runway", name: "Runway" },
          { id: "unit-econ", name: "Unit Economics" },
        ],
      },
      {
        slug: "ai-for-entrepreneurs",
        title: "AI For Entrepreneurs",
        order: 7,
        estimatedHours: 8,
        xpReward: 650,
        category: "ai",
        description:
          "Use AI for market research, copy, ops, and support — stay lean without losing quality control.",
        skills: [
          { id: "ai-ops", name: "AI in Operations" },
          { id: "ai-gtm", name: "AI in GTM" },
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
    estimatedWeeks: 7,
    totalXp: 4500,
    badgeId: "path-service-advisor",
    badgeName: "Service Advisor Certification",
    badgeDescription: "Completed the Service Advisor mastery path",
    unlockRequirement: { type: "level", level: 2 },
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
      {
        slug: "maintenance-selling",
        title: "Maintenance Selling",
        order: 4,
        estimatedHours: 7,
        xpReward: 600,
        category: "automotive",
        description:
          "Recommend maintenance ethically — tie factory schedules to customer outcomes, not pressure.",
        skills: [
          { id: "maintenance", name: "Maintenance Menus" },
          { id: "ethics", name: "Ethical Recommendations" },
        ],
      },
      {
        slug: "warranty-basics",
        title: "Warranty Basics",
        order: 5,
        estimatedHours: 7,
        xpReward: 600,
        category: "automotive",
        description:
          "Factory vs extended coverage, claims, and documentation — reduce chargebacks and disputes.",
        skills: [
          { id: "warranty", name: "Warranty Types" },
          { id: "claims", name: "Claims Process" },
        ],
      },
      {
        slug: "difficult-customer-scenarios",
        title: "Difficult Customer Scenarios",
        order: 6,
        estimatedHours: 7,
        xpReward: 600,
        category: "communication",
        description:
          "De-escalation, delays, and comeback conversations — protect reputation and CSI scores.",
        skills: [
          { id: "deescalate", name: "De-escalation" },
          { id: "comebacks", name: "Comeback Handling" },
        ],
      },
      {
        slug: "ai-automotive-service",
        title: "AI in Automotive Service",
        order: 7,
        estimatedHours: 8,
        xpReward: 650,
        category: "ai",
        description:
          "AI for appointment prep, status updates, and internal notes — efficiency without losing the human touch.",
        skills: [
          { id: "ai-scheduling", name: "AI Scheduling" },
          { id: "ai-updates", name: "Status Updates" },
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
        unlockAfterCourseSlug: "maintenance-selling",
      },
    ],
    masteryExamQuestions: 20,
  },
];

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
