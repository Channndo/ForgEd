import type { ForgedPathPlatform } from "./platforms";

export interface ForgedPathCourse {
  id: string;
  number: number;
  institution: string;
  title: string;
  link: string;
  purposes: string[];
  /** Hosting platform — used for cost and financial-aid guidance */
  platform: ForgedPathPlatform;
}

export interface ForgedPathPhase {
  id: string;
  number: number;
  title: string;
  courses: ForgedPathCourse[];
}

export const FORGED_PATH_TITLE = "ForgEd Path";
export const FORGED_PATH_SUBTITLE = "Executive Mastery Program";
export const FORGED_PATH_DESCRIPTION =
  "A self-directed executive education curriculum designed to develop high-level decision-making, leadership, transactional execution, corporate strategy, finance, governance, and risk management capabilities.";

export const FORGED_PATH_CERTIFICATE_TITLE =
  "ForgEd Path Executive Mastery Certificate";

export const FORGED_PATH_PHASES: ForgedPathPhase[] = [
  {
    id: "phase-1",
    number: 1,
    title: "Foundations of Thinking",
    courses: [
      {
        id: "fp-01",
        number: 1,
        institution: "Harvard University",
        title: "Fundamentals of Neuroscience",
        link: "https://www.edx.org/learn/neuroscience/harvard-university-fundamentals-of-neuroscience-part-1-the-electrical-properties-of-the-neuron",
        purposes: ["Human behavior", "Decision making", "Cognitive systems"],
        platform: "edx",
      },
      {
        id: "fp-02",
        number: 2,
        institution: "Stanford University",
        title: "Principles of Economics",
        link: "https://online.stanford.edu/courses",
        purposes: ["Microeconomics", "Market incentives", "Competition", "Market structure"],
        platform: "stanford-online",
      },
      {
        id: "fp-03",
        number: 3,
        institution: "University of Cambridge",
        title: "Foundations of Finance",
        link: "https://www.coursera.org",
        purposes: ["Accounting mechanics", "Financial statements", "Cash flow"],
        platform: "coursera",
      },
    ],
  },
  {
    id: "phase-2",
    number: 2,
    title: "Capital Allocation",
    courses: [
      {
        id: "fp-04",
        number: 4,
        institution: "University of Cambridge",
        title: "Foundations of Corporate Finance",
        link: "https://www.coursera.org",
        purposes: ["Valuation", "Cost of capital", "Investment analysis", "Capital allocation"],
        platform: "coursera",
      },
    ],
  },
  {
    id: "phase-3",
    number: 3,
    title: "Strategy & Leadership",
    courses: [
      {
        id: "fp-05",
        number: 5,
        institution: "Stanford University",
        title: "Organizational Analysis",
        link: "https://online.stanford.edu/courses",
        purposes: ["Competitive advantage", "Positioning", "Organizational structure"],
        platform: "stanford-online",
      },
      {
        id: "fp-06",
        number: 6,
        institution: "Dartmouth College",
        title: "Strategic Leadership: Power and Influence",
        link: "https://www.edx.org",
        purposes: ["Leadership", "Influence", "Execution"],
        platform: "edx",
      },
      {
        id: "fp-07",
        number: 7,
        institution: "University of Notre Dame",
        title: "Ethics",
        link: "https://www.coursera.org",
        purposes: ["Ethical decision-making", "Stakeholder analysis", "Leadership ethics"],
        platform: "coursera",
      },
    ],
  },
  {
    id: "phase-4",
    number: 4,
    title: "Negotiation & Transactions",
    courses: [
      {
        id: "fp-08",
        number: 8,
        institution: "Yale University",
        title: "Negotiation Strategies",
        link: "https://www.coursera.org/learn/negotiation",
        purposes: ["Negotiation", "Leverage", "Deal execution"],
        platform: "coursera",
      },
      {
        id: "fp-09",
        number: 9,
        institution: "Cornell University",
        title: "Structuring Business Agreements for Success",
        link: "https://www.coursera.org/learn/structuring-business-agreements",
        purposes: ["Transaction structure", "Partnerships", "Commercial agreements"],
        platform: "coursera",
      },
    ],
  },
  {
    id: "phase-5",
    number: 5,
    title: "Legal Frameworks",
    courses: [
      {
        id: "fp-10",
        number: 10,
        institution: "Harvard University",
        title: "Contract Law: From Trust to Promise to Contract",
        link: "https://www.edx.org/learn/law/harvard-university-contract-law-from-trust-to-promise-to-contract",
        purposes: ["Contract analysis", "Liability", "Enforcement"],
        platform: "edx",
      },
      {
        id: "fp-11",
        number: 11,
        institution: "University of Pennsylvania",
        title: "Intellectual Property Law and Policy",
        link: "https://www.coursera.org/learn/intellectual-property",
        purposes: ["Patents", "Trademarks", "Licensing", "IP strategy"],
        platform: "coursera",
      },
    ],
  },
  {
    id: "phase-6",
    number: 6,
    title: "Risk & Governance",
    courses: [
      {
        id: "fp-12",
        number: 12,
        institution: "Columbia University",
        title: "Risk Management in the Global Economy",
        link: "https://www.edx.org",
        purposes: ["Enterprise risk", "Financial risk", "Operational risk"],
        platform: "edx",
      },
      {
        id: "fp-13",
        number: 13,
        institution: "Princeton University",
        title: "Constitutional Interpretation",
        link: "https://online.princeton.edu",
        purposes: ["Governance", "Institutional reasoning", "Interpretation frameworks"],
        platform: "princeton-online",
      },
    ],
  },
  {
    id: "phase-7",
    number: 7,
    title: "Analytical Judgment",
    courses: [
      {
        id: "fp-14",
        number: 14,
        institution: "Brown University",
        title: "The Ethics of Memory",
        link: "https://www.coursera.org",
        purposes: ["Historical reasoning", "Ethical analysis", "Institutional memory"],
        platform: "coursera",
      },
    ],
  },
];

export const FORGED_PATH_COURSES = FORGED_PATH_PHASES.flatMap((phase) => phase.courses);

export const FORGED_PATH_TOTAL_COURSES = FORGED_PATH_COURSES.length;
