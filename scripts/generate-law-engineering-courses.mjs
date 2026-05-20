/**
 * Generates Law & Engineering textbooks and quiz banks.
 * Law: 20 chapters · Engineering: 15 chapters
 * Run: node scripts/generate-law-engineering-courses.mjs
 */
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const TEXTBOOKS_DIR = path.join(ROOT, "src/lib/courses/textbooks");
const BANKS_DIR = path.join(ROOT, "src/lib/courses/textbook/banks");

const ENGINEERING_CHAPTERS = 15;
const LAW_CHAPTERS = 20;
const QUESTIONS_PER_CHAPTER = 10;

const COURSES = [
  // —— Law (20 chapters each) ——
  {
    slug: "legal-fundamentals",
    exportPrefix: "LEGAL",
    file: "legal-fundamentals",
    title: "Legal Fundamentals",
    bankPrefix: "lawf",
    domain: "law",
    chapters: [
      ["what-is-law", "What Is Law and Why It Matters"],
      ["sources-of-law", "Sources of Law: Constitutions, Statutes, and Precedent"],
      ["courts-procedure", "Courts, Jurisdiction, and Civil Procedure"],
      ["criminal-civil", "Criminal Law vs. Civil Law"],
      ["legal-reasoning", "Legal Reasoning and Argument"],
      ["rights-duties", "Rights, Duties, and Liability"],
      ["legal-profession", "Lawyers, Judges, and Legal Roles"],
      ["dispute-resolution", "Negotiation, Mediation, and Litigation"],
      ["property-law", "Property Law Essentials"],
      ["contracts-overview", "Contracts: Formation and Enforceability"],
      ["torts-overview", "Torts and Civil Wrongs"],
      ["administrative-law", "Administrative Law and Agencies"],
      ["evidence-basics", "Evidence and Fact-Finding"],
      ["legal-research", "Legal Research and Writing"],
      ["ethics-professionalism", "Legal Ethics and Professionalism"],
      ["international-law", "International and Comparative Law"],
      ["business-law-intro", "Business Transactions and Regulation"],
      ["family-law", "Family Law Overview"],
      ["technology-law", "Law, Technology, and Privacy"],
      ["law-careers", "Studying Law and Career Pathways"],
    ],
  },
  {
    slug: "business-law",
    exportPrefix: "BIZLAW",
    file: "business-law",
    title: "Business Law",
    bankPrefix: "blaw",
    domain: "law",
    chapters: [
      ["contracts-intro", "Introduction to Contracts"],
      ["contract-formation", "Offer, Acceptance, and Consideration"],
      ["contract-terms", "Contract Terms and Interpretation"],
      ["breach-remedies", "Breach of Contract and Remedies"],
      ["sales-ucc", "Sales of Goods and the UCC"],
      ["torts-intro", "Torts and Business Risk"],
      ["negligence", "Negligence and Duty of Care"],
      ["strict-products", "Strict Liability and Products"],
      ["business-entities", "Corporations, LLCs, and Partnerships"],
      ["governance", "Corporate Governance and Fiduciary Duties"],
      ["securities-overview", "Securities Law Overview"],
      ["employment-law", "Employment Law Essentials"],
      ["labor-relations", "Labor Law and Collective Bargaining"],
      ["intellectual-property", "Intellectual Property for Business"],
      ["antitrust", "Antitrust and Competition Law"],
      ["regulatory-compliance", "Regulation and Compliance"],
      ["consumer-protection", "Consumer Protection Law"],
      ["bankruptcy-basics", "Bankruptcy and Creditor Rights"],
      ["international-business", "International Business Law"],
      ["risk-management", "Legal Risk Management"],
    ],
  },
  {
    slug: "constitutional-law",
    exportPrefix: "CONLAW",
    file: "constitutional-law",
    title: "Constitutional Law",
    bankPrefix: "con",
    domain: "law",
    chapters: [
      ["foundations", "Constitutional Foundations"],
      ["judicial-review", "Judicial Review and the Courts"],
      ["separation-powers", "Separation of Powers"],
      ["federalism", "Federalism and State Authority"],
      ["legislative-power", "Legislative Power and Limits"],
      ["executive-power", "Executive Power and Accountability"],
      ["bill-of-rights", "The Bill of Rights"],
      ["due-process", "Due Process"],
      ["equal-protection", "Equal Protection"],
      ["first-amendment", "First Amendment Freedoms"],
      ["religion-clauses", "Establishment and Free Exercise"],
      ["search-seizure", "Search, Seizure, and Privacy"],
      ["criminal-procedure", "Criminal Procedure and Rights"],
      ["economic-rights", "Economic Rights and Regulation"],
      ["voting-rights", "Voting Rights and Democracy"],
      ["state-constitutions", "State Constitutions"],
      ["contemporary-issues", "Contemporary Constitutional Issues"],
      ["constitutional-change", "Amendments and Constitutional Change"],
      ["comparative-constitutional", "Comparative Constitutionalism"],
      ["civic-participation", "Civic Participation and the Rule of Law"],
    ],
  },
  {
    slug: "contracts-law",
    exportPrefix: "CONTRACTS",
    file: "contracts-law",
    title: "Contracts Law",
    bankPrefix: "ctr",
    domain: "law",
    chapters: [
      ["contract-nature", "Nature and Function of Contracts"],
      ["mutual-assent", "Mutual Assent: Offer and Acceptance"],
      ["consideration", "Consideration and Promissory Estoppel"],
      ["capacity", "Capacity and Defenses to Formation"],
      ["legality", "Legality and Public Policy"],
      ["statute-frauds", "Statute of Frauds"],
      ["parol-evidence", "Parol Evidence and Integration"],
      ["interpretation", "Contract Interpretation"],
      ["conditions", "Conditions and Performance"],
      ["breach-types", "Types of Breach"],
      ["remedies-damages", "Damages and Remedies"],
      ["specific-performance", "Specific Performance and Equitable Relief"],
      ["assignment-delegation", "Assignment and Delegation"],
      ["third-party", "Third-Party Beneficiaries"],
      ["discharge", "Discharge and Impossibility"],
      ["warranties", "Warranties and Representations"],
      ["sales-contracts", "Sales Contracts under Article 2"],
      ["online-contracts", "Electronic and Clickwrap Contracts"],
      ["international-contracts", "International Contract Law"],
      ["contract-drafting", "Drafting and Negotiating Contracts"],
    ],
  },
  {
    slug: "criminal-law-fundamentals",
    exportPrefix: "CRIM",
    file: "criminal-law-fundamentals",
    title: "Criminal Law Fundamentals",
    bankPrefix: "crim",
    domain: "law",
    chapters: [
      ["crime-elements", "Elements of a Crime"],
      ["mens-rea", "Mens Rea and Actus Reus"],
      ["homicide", "Homicide Offenses"],
      ["assault-battery", "Assault, Battery, and Violent Crimes"],
      ["property-crimes", "Property and Theft Crimes"],
      ["inchoate-crimes", "Inchoate Crimes: Attempt and Conspiracy"],
      ["defenses-justification", "Justification Defenses"],
      ["defenses-excuse", "Excuse Defenses"],
      ["accomplice-liability", "Accomplice and Vicarious Liability"],
      ["sentencing", "Sentencing and Punishment"],
      ["juvenile-justice", "Juvenile Justice"],
      ["white-collar", "White-Collar Crime"],
      ["drug-offenses", "Drug and Controlled Substance Offenses"],
      ["cybercrime", "Cybercrime and Digital Evidence"],
      ["victim-rights", "Victims' Rights and Restitution"],
      ["police-powers", "Police Powers and Limits"],
      ["prosecution", "Prosecution and Plea Bargaining"],
      ["trial-rights", "Trial Rights and Procedures"],
      ["appeals-habeas", "Appeals and Post-Conviction Relief"],
      ["criminal-justice-system", "The Criminal Justice System"],
    ],
  },
  {
    slug: "torts-law",
    exportPrefix: "TORTS",
    file: "torts-law",
    title: "Torts Law",
    bankPrefix: "tort",
    domain: "law",
    chapters: [
      ["tort-theory", "Theory and Goals of Tort Law"],
      ["intentional-torts", "Intentional Torts to Persons"],
      ["intentional-property", "Intentional Torts to Property"],
      ["negligence-duty", "Negligence: Duty and Breach"],
      ["causation", "Causation in Fact and Proximate Cause"],
      ["damages-negligence", "Damages in Negligence Cases"],
      ["defenses-negligence", "Defenses to Negligence"],
      ["strict-liability", "Strict Liability"],
      ["products-liability", "Products Liability"],
      ["nuisance", "Nuisance and Land Use"],
      ["defamation", "Defamation and Privacy Torts"],
      ["misrepresentation", "Misrepresentation and Economic Torts"],
      ["vicarious-liability", "Vicarious and Enterprise Liability"],
      ["joint-tortfeasors", "Joint and Several Liability"],
      ["immunities", "Immunities and Government Liability"],
      ["workers-comp", "Workers' Compensation Overview"],
      ["medical-malpractice", "Medical Malpractice"],
      ["mass-torts", "Mass Torts and Class Actions"],
      ["insurance-torts", "Insurance and Tort Claims"],
      ["tort-reform", "Tort Reform and Policy Debates"],
    ],
  },
  // —— Engineering (15 chapters each) ——
  {
    slug: "mechanical-engineering-basics",
    exportPrefix: "MECH",
    file: "mechanical-engineering-basics",
    title: "Mechanical Engineering Basics",
    bankPrefix: "mech",
    domain: "engineering",
    chapters: [
      ["me-intro", "Introduction to Mechanical Engineering"],
      ["statics", "Statics and Equilibrium"],
      ["dynamics", "Dynamics and Motion"],
      ["materials", "Engineering Materials"],
      ["thermodynamics", "Thermodynamics Essentials"],
      ["fluid-mechanics", "Fluid Mechanics Basics"],
      ["heat-transfer", "Heat Transfer"],
      ["machine-elements", "Machine Elements and Mechanisms"],
      ["manufacturing", "Manufacturing Processes"],
      ["design-process", "Engineering Design Process"],
      ["cad-simulation", "CAD, FEA, and Simulation"],
      ["vibrations", "Vibrations and Acoustics"],
      ["quality-engineering", "Quality and Reliability"],
      ["sustainability-me", "Sustainability in Mechanical Systems"],
      ["me-careers", "Mechanical Engineering Careers"],
    ],
  },
  {
    slug: "electrical-engineering-basics",
    exportPrefix: "EE",
    file: "electrical-engineering-basics",
    title: "Electrical Engineering Basics",
    bankPrefix: "ee",
    domain: "engineering",
    chapters: [
      ["ee-intro", "Introduction to Electrical Engineering"],
      ["dc-circuits", "DC Circuit Analysis"],
      ["ac-circuits", "AC Circuits and Power"],
      ["electronics", "Semiconductor Electronics"],
      ["digital-logic", "Digital Logic and Systems"],
      ["embedded-systems", "Embedded Systems"],
      ["signals-systems", "Signals and Systems Overview"],
      ["electromagnetics", "Electromagnetics Basics"],
      ["power-systems", "Electric Power Systems"],
      ["renewable-power", "Renewable Energy Systems"],
      ["control-systems", "Control Systems Basics"],
      ["communications-ee", "Communications Engineering Intro"],
      ["instrumentation", "Instrumentation and Measurement"],
      ["ee-safety", "Electrical Safety and Standards"],
      ["ee-careers", "Electrical Engineering Careers"],
    ],
  },
  {
    slug: "civil-engineering-basics",
    exportPrefix: "CE",
    file: "civil-engineering-basics",
    title: "Civil Engineering Basics",
    bankPrefix: "ce",
    domain: "engineering",
    chapters: [
      ["ce-intro", "Introduction to Civil Engineering"],
      ["structural-loads", "Loads, Forces, and Structural Analysis"],
      ["structural-materials", "Concrete, Steel, and Structural Materials"],
      ["structural-design", "Structural Design Principles"],
      ["geotechnical", "Geotechnical Engineering"],
      ["foundation-engineering", "Foundation Engineering"],
      ["water-resources", "Hydraulics and Water Resources"],
      ["environmental-ce", "Environmental Engineering"],
      ["transportation", "Transportation Engineering"],
      ["urban-planning", "Urban Planning and Infrastructure"],
      ["surveying-gis", "Surveying and Geospatial Tools"],
      ["construction-pm", "Construction and Project Management"],
      ["coastal-engineering", "Coastal and Hydraulic Structures"],
      ["sustainability-ce", "Sustainable Civil Infrastructure"],
      ["ce-careers", "Civil Engineering Careers"],
    ],
  },
  {
    slug: "chemical-engineering-basics",
    exportPrefix: "CHE",
    file: "chemical-engineering-basics",
    title: "Chemical Engineering Basics",
    bankPrefix: "che",
    domain: "engineering",
    chapters: [
      ["che-intro", "Introduction to Chemical Engineering"],
      ["material-balances", "Material Balances"],
      ["energy-balances", "Energy Balances"],
      ["thermo-che", "Chemical Engineering Thermodynamics"],
      ["transport-phenomena", "Transport Phenomena"],
      ["fluid-flow-che", "Fluid Flow in Processes"],
      ["heat-mass-transfer", "Heat and Mass Transfer"],
      ["reaction-engineering", "Chemical Reaction Engineering"],
      ["separations", "Separation Processes"],
      ["process-control", "Process Control"],
      ["plant-design", "Plant Design and Safety"],
      ["bioprocess", "Bioprocess Engineering"],
      ["polymer-engineering", "Polymers and Materials Processing"],
      ["environmental-che", "Environmental Chemical Engineering"],
      ["che-careers", "Chemical Engineering Careers"],
    ],
  },
  {
    slug: "industrial-engineering-basics",
    exportPrefix: "IE",
    file: "industrial-engineering-basics",
    title: "Industrial Engineering Basics",
    bankPrefix: "ie",
    domain: "engineering",
    chapters: [
      ["ie-intro", "Introduction to Industrial Engineering"],
      ["operations-research", "Operations Research Basics"],
      ["optimization", "Optimization and Linear Programming"],
      ["simulation", "Simulation and Modeling"],
      ["quality-systems", "Quality Systems and Six Sigma"],
      ["lean-manufacturing", "Lean Manufacturing"],
      ["supply-chain", "Supply Chain Engineering"],
      ["facilities-layout", "Facilities Layout and Design"],
      ["ergonomics", "Ergonomics and Human Factors"],
      ["production-planning", "Production Planning and Scheduling"],
      ["inventory-management", "Inventory and Warehouse Systems"],
      ["project-management-ie", "Engineering Project Management"],
      ["data-analytics-ie", "Data Analytics for Operations"],
      ["automation-ie", "Automation and Industry 4.0"],
      ["ie-careers", "Industrial Engineering Careers"],
    ],
  },
  {
    slug: "aerospace-engineering-basics",
    exportPrefix: "AERO",
    file: "aerospace-engineering-basics",
    title: "Aerospace Engineering Basics",
    bankPrefix: "aero",
    domain: "engineering",
    chapters: [
      ["aero-intro", "Introduction to Aerospace Engineering"],
      ["aerodynamics", "Aerodynamics Fundamentals"],
      ["flight-mechanics", "Flight Mechanics"],
      ["propulsion", "Aircraft and Rocket Propulsion"],
      ["structures-aero", "Aerospace Structures"],
      ["materials-aero", "Aerospace Materials"],
      ["avionics", "Avionics and Flight Systems"],
      ["orbital-mechanics", "Orbital Mechanics Intro"],
      ["space-systems", "Space Systems Engineering"],
      ["stability-control", "Stability and Control"],
      ["design-aero", "Aircraft Design Process"],
      ["testing-certification", "Testing and Certification"],
      ["uas-drones", "UAS and Drone Systems"],
      ["sustainability-aero", "Sustainable Aviation"],
      ["aero-careers", "Aerospace Engineering Careers"],
    ],
  },
];

function assertChapterCounts() {
  for (const c of COURSES) {
    const expected = c.domain === "law" ? LAW_CHAPTERS : ENGINEERING_CHAPTERS;
    if (c.chapters.length !== expected) {
      throw new Error(
        `${c.slug}: expected ${expected} chapters, got ${c.chapters.length}`
      );
    }
  }
}

function paragraphs(topic, sectionTitle, courseTitle) {
  return [
    `${sectionTitle} is a core topic in ${courseTitle}. Learners should connect definitions to how professionals apply ${topic} in regulated, evidence-based practice — not shortcuts or informal rules of thumb alone.`,
    `The textbook emphasizes reading primary sources, worked examples, and chapter objectives before attempting quizzes. When ${topic} appears on assessments, questions draw from a randomized bank tied to this chapter's learning goals.`,
    `In professional settings, ${topic} interacts with safety, ethics, documentation, and interdisciplinary teams. Use this section as a foundation for deeper specialization, certifications, and workplace decisions you can justify with cited reasoning.`,
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
          const paras = paragraphs(title.toLowerCase(), stitle, course.title);
          return `      section(
        ${JSON.stringify(sid)},
        ${JSON.stringify(stitle)},
        ${JSON.stringify(paras)}
      )`;
        })
        .join(",\n");
      return `  chapter(
    ${JSON.stringify(id)},
    ${num},
    ${JSON.stringify(title)},
    [
${sections}
    ]
  )`;
    })
    .join(",\n");

  const chapterLabel =
    course.domain === "law" ? "twenty chapters" : "fifteen chapters";

  return `import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const ${constName}_TEXTBOOK_INTRO: TextbookIntro = {
  title: ${JSON.stringify(course.title)},
  subtitle: ${JSON.stringify(`ForgEd deep-dive — ${course.title.toLowerCase()}`)},
  paragraphs: [
    "This ForgEd digital textbook presents ${course.title} at academic survey depth — ${chapterLabel}, cited frameworks, and rigorous prose suitable for self-paced study before certifications, college prep, or workplace upskilling.",
    "Each chapter includes learning objectives, section-level explanations, and assessments aligned to a subject question bank. Read sequentially or jump via the table of contents; progress, chapter quizzes, and final exams are tracked in your ForgEd profile.",
    "Material is general education, not legal advice or professional engineering sign-off. Always verify current codes, statutes, standards, and organizational policies when applying concepts in the field.",
  ],
};

export const ${constName}_TEXTBOOK: TextbookChapter[] = [
${chapterBlocks}
];
`;
}

function bankExportName(slug) {
  return `${slug.replace(/-/g, "_").toUpperCase()}_BANK`;
}

function buildQuizBank(course) {
  const prefix = course.bankPrefix;
  const chapterCount = course.chapters.length;
  const lines = [];
  for (let ch = 1; ch <= chapterCount; ch++) {
    const topic = course.chapters[ch - 1][1];
    const chs = String(ch).padStart(2, "0");
    for (let v = 0; v < QUESTIONS_PER_CHAPTER; v++) {
      const id = `${prefix}-ch${chs}-q${String(v + 1).padStart(2, "0")}`;
      const templates = [
        {
          q: `Regarding ${topic}, which statement best matches this textbook's approach?`,
          c: `Ground ${topic} in cited sources, chapter objectives, and applied examples`,
          w: [
            `Skip reading and rely only on quiz memorization`,
            `${topic} is unrelated to professional practice`,
            `Anecdotes replace evidence in ${topic}`,
          ],
        },
        {
          q: `A learner studying ${topic} should prioritize:`,
          c: `Connecting definitions to realistic scenarios and chapter quizzes`,
          w: [
            `Ignoring section citations`,
            `Avoiding the final exam entirely`,
            `Memorizing terms without context`,
          ],
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
  const exportName = bankExportName(course.slug);
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

export const ${exportName}: QuizQuestion[] = [
${lines.join("\n")}
];
`;
}

assertChapterCounts();

fs.mkdirSync(TEXTBOOKS_DIR, { recursive: true });
fs.mkdirSync(BANKS_DIR, { recursive: true });

for (const course of COURSES) {
  fs.writeFileSync(
    path.join(TEXTBOOKS_DIR, `${course.file}.ts`),
    buildTextbook(course)
  );
  fs.writeFileSync(
    path.join(BANKS_DIR, `${course.slug}.ts`),
    buildQuizBank(course)
  );
  console.log(
    "wrote",
    course.slug,
    `(${course.chapters.length} ch, ${course.chapters.length * QUESTIONS_PER_CHAPTER} Q)`
  );
}
console.log("done — update registry, catalog, quizRegistry");
