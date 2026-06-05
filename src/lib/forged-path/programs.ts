import { FOUNDER_NAME } from "@/lib/certificates/constants";

/** Executive Board signatory for ForgEd Path program certificates */
export const FORGED_PATH_EXECUTIVE_BOARD_NAME = "Jered Hudnall";

export interface ForgedPathSignatory {
  name: string;
  title: string;
  motto: string;
}

export interface ForgedPathInstitutionEntry {
  name: string;
  courses: string[];
}

export interface ForgedPathProgramCertificate {
  programTitle: string;
  curriculumLine: string;
  description: string;
  courseCount: number;
  subjects: string[];
  institutions: ForgedPathInstitutionEntry[];
  programDirector: ForgedPathSignatory;
  executiveBoard: ForgedPathSignatory;
  bannerValues: string[];
  sealRing: string;
  sealFooter: string;
  footerLine: string;
}

export interface ForgedPathProgramDefinition {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  certificate: ForgedPathProgramCertificate;
}

export const EXECUTIVE_MASTERY_PROGRAM: ForgedPathProgramDefinition = {
  id: "executive-mastery",
  title: "ForgEd Path",
  subtitle: "Executive Mastery Program",
  description:
    "A self-directed executive education curriculum designed to develop high-level decision-making, leadership, transactional execution, corporate strategy, finance, governance, and risk management capabilities.",
  certificate: {
    programTitle: "EXECUTIVE MASTERY PROGRAM",
    curriculumLine:
      "A SELF-DIRECTED, EXECUTIVE-LEVEL CURRICULUM IN FINANCE | ECONOMICS | STRATEGY | LAW | NEGOTIATION | LEADERSHIP | RISK MANAGEMENT | ETHICS | GOVERNANCE | NEUROSCIENCE | TRANSACTIONAL EXECUTION",
    description:
      "This certificate recognizes the successful completion of 14 rigorous courses from world-class institutions, demonstrating mastery across multiple disciplines critical to high-level decision-making, leadership, and value creation.",
    courseCount: 14,
    subjects: [
      "Finance",
      "Economics",
      "Strategy",
      "Law",
      "Negotiation",
      "Leadership",
      "Risk Management",
      "Ethics",
      "Governance",
      "Neuroscience",
      "Transactional Execution",
    ],
    institutions: [
      {
        name: "Harvard University",
        courses: [
          "Neuroscience",
          "Contract Law: From Trust to Promise to Contract",
        ],
      },
      { name: "Yale University", courses: ["Negotiation Strategies"] },
      {
        name: "Cornell University",
        courses: ["Structuring Business Agreements for Success"],
      },
      {
        name: "University of Pennsylvania",
        courses: ["Intellectual Property Law and Policy"],
      },
      {
        name: "Columbia University",
        courses: ["Risk Management in the Global Economy"],
      },
      {
        name: "Dartmouth College",
        courses: ["Strategic Leadership: Power and Influence"],
      },
      {
        name: "Princeton University",
        courses: ["Constitutional Interpretation"],
      },
      { name: "Brown University", courses: ["The Ethics of Memory"] },
      {
        name: "University of Cambridge",
        courses: [
          "Foundations of Finance (Accounting Mechanics, Statements, Cash Flow)",
          "Foundations of Corporate Finance (Capital Allocation, Valuation, Cost of Capital)",
        ],
      },
      {
        name: "Stanford University",
        courses: ["Principles of Economics", "Organizational Analysis"],
      },
      {
        name: "University of Notre Dame",
        courses: ["Ethics (Ethical Decision-Making in Business and Leadership)"],
      },
    ],
    programDirector: {
      name: FOUNDER_NAME,
      title: "Program Director",
      motto: "Forged by Choice.",
    },
    executiveBoard: {
      name: FORGED_PATH_EXECUTIVE_BOARD_NAME,
      title: "Executive Board",
      motto: "Lead with Impact.",
    },
    bannerValues: ["DISCIPLINE", "INTEGRITY", "STRATEGY", "LEADERSHIP", "IMPACT"],
    sealRing: "KNOWLEDGE · CHARACTER · IMPACT",
    sealFooter: "FORGED PATH",
    footerLine:
      "BUILT ON KNOWLEDGE. | FORGED BY | DRIVEN BY PURPOSE. | LEAD WITH IMPACT.",
  },
};

/** Registry — add future ForgEd Path programs here */
export const FORGED_PATH_PROGRAMS: Record<string, ForgedPathProgramDefinition> = {
  [EXECUTIVE_MASTERY_PROGRAM.id]: EXECUTIVE_MASTERY_PROGRAM,
};

export function getForgedPathProgram(
  programId: string
): ForgedPathProgramDefinition | undefined {
  return FORGED_PATH_PROGRAMS[programId];
}
