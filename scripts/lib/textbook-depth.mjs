/**
 * Substantive textbook section content (workforce depth, not placeholder filler).
 */

import { chapterHook } from "../data/textbook-chapter-snippets.mjs";

export const SECTION_HEADINGS = [
  "foundations and vocabulary",
  "how professionals apply this in practice",
  "workplace scenarios and documentation",
  "common mistakes and how to avoid them",
  "putting the chapter together",
];

const DOMAIN_CITATIONS = {
  law: [
    { source: "Cornell LII — Wex Legal Encyclopedia", url: "https://www.law.cornell.edu/wex", note: "Plain-language legal definitions and overviews" },
    { source: "American Bar Association", url: "https://www.americanbar.org/groups/public_education/", note: "Public legal education resources" },
  ],
  science: [
    { source: "National Science Foundation", url: "https://www.nsf.gov/", note: "U.S. science education and research context" },
    { source: "NIH — Science Education", url: "https://www.nih.gov/health-information", note: "Evidence and health-science literacy links" },
  ],
  engineering: [
    { source: "National Society of Professional Engineers", url: "https://www.nspe.org/", note: "Professional engineering ethics and practice" },
    { source: "NIST Reference Materials", url: "https://www.nist.gov/", note: "Standards, units, and measurement traceability" },
  ],
  cyber: [
    { source: "CISA — Cybersecurity Guidance", url: "https://www.cisa.gov/topics/cybersecurity-best-practices", note: "Federal best-practice resources" },
    { source: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework", note: "Risk-based security outcomes" },
  ],
  finance: [
    { source: "CFPB — Consumer Finance", url: "https://www.consumerfinance.gov/", note: "Consumer protection and plain-language guides" },
    { source: "Federal Reserve Education", url: "https://www.federalreserveeducation.org/", note: "Money, banking, and policy basics" },
  ],
  sales: [
    { source: "HubSpot Sales Blog (reference)", url: "https://blog.hubspot.com/sales", note: "Mainstream sales operations vocabulary" },
  ],
  ai: [
    { source: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework", note: "Governance vocabulary for workplace AI" },
  ],
  automotive: [
    { source: "NHTSA", url: "https://www.nhtsa.gov/", note: "Vehicle safety and consumer information" },
  ],
  creative: [
    { source: "AIGA — Design", url: "https://www.aiga.org/", note: "Professional design community standards" },
  ],
  education: [
    { source: "U.S. Department of Education", url: "https://www.ed.gov/", note: "Policy and teaching context in U.S. schools" },
  ],
  business: [
    { source: "SBA Learning Center", url: "https://www.sba.gov/business-guide", note: "Small-business operations reference" },
  ],
  general: [],
};

const FACT_POOLS = {
  law: [
    "rules are announced in advance and applied by independent institutions rather than private retaliation",
    "statutes come from legislatures while case law develops through published judicial decisions",
    "burden of proof and standards of review change outcomes even when facts are similar",
    "constitutional limits constrain what governments and sometimes private actors may do",
    "contracts allocate risk with offer, acceptance, consideration, and definite terms",
    "torts compensate harm caused by negligence, strict liability, or intentional acts",
    "criminal law uses government prosecution and protections like presumption of innocence",
    "civil procedure governs pleadings, discovery, motions, and appeals in lawsuits",
    "legal research starts with primary sources—constitutions, statutes, regulations, cases",
    "ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals",
    "alternative dispute resolution can resolve conflicts faster than full trials",
    "federalism splits authority between national and state governments in the U.S.",
  ],
  science: [
    "hypotheses must be testable and falsifiable to count as scientific claims",
    "controlled variables help isolate cause from coincidence in experiments",
    "peer review slows publication but filters obvious methodological flaws",
    "measurement uncertainty should be reported, not hidden, in honest science",
    "models simplify reality and fail when their assumptions stop holding",
    "cells are the basic unit of life; DNA stores hereditary information",
    "atoms combine in fixed ratios in compounds described by chemical equations",
    "forces, energy, and motion follow conservation laws in classical physics",
    "plate tectonics, weather, and oceans interact in earth systems",
    "lab notebooks create an audit trail for replication and safety",
    "graphs require labeled axes, units, and honest scales",
    "research ethics require consent, privacy, and humane treatment of subjects",
  ],
  engineering: [
    "free-body diagrams translate physical situations into solvable force balances",
    "material properties like yield strength and fatigue limit drive design margins",
    "tolerances and fits determine whether assemblies function or bind",
    "safety factors account for unknown loads, defects, and human error",
    "control systems use feedback to keep outputs stable despite disturbances",
    "energy conversion always pays thermodynamic efficiency limits",
    "standards bodies publish test methods so measurements compare across labs",
    "drawings communicate dimensions, materials, and finishes unambiguously",
    "root-cause analysis distinguishes symptoms from failure mechanisms",
    "project management integrates scope, schedule, cost, and risk",
    "professional engineers stamp work they are willing to defend publicly",
    "sustainability metrics increasingly constrain material and energy choices",
  ],
  cyber: [
    "confidentiality, integrity, and availability frame nearly every security decision",
    "phishing exploits urgency and authority—not only technical vulnerabilities",
    "least privilege limits blast radius when credentials are stolen",
    "patching closes known doors but cannot fix social engineering",
    "logging and monitoring turn attacks into detectable patterns",
    "incident response phases include preparation, detection, containment, recovery, lessons learned",
    "backups are worthless if restores are never tested before ransomware strikes",
    "multi-factor authentication blocks many credential-stuffing attempts",
    "segmentation keeps flat networks from becoming easy lateral movement paths",
    "vendor risk matters because your data lives on their systems too",
    "security awareness training must be short, frequent, and role-specific",
    "compliance frameworks map controls to risks but do not replace thinking",
  ],
  finance: [
    "cash flow timing can bankrupt profitable businesses on paper",
    "compound interest helps savers and hurts undisciplined borrowers",
    "credit scores summarize repayment history but not full financial health",
    "budgets assign dollars to priorities before month-end surprises",
    "emergency funds reduce forced high-interest debt during shocks",
    "tax rules change; documentation beats memory at filing time",
    "diversification reduces idiosyncratic risk but not all market risk",
    "fees compound silently in retirement and brokerage accounts",
    "identity theft remediation requires fast institution notification",
    "inflation erodes purchasing power of cash held too long",
    "insurance transfers catastrophic risk for predictable premiums",
    "fraud controls separate duties so one person cannot steal end-to-end",
  ],
  sales: [
    "discovery questions diagnose pain before pitching features",
    "CRM hygiene makes forecasts trustworthy for managers and reps",
    "objections often mask timing, budget, or trust—not product flaws",
    "follow-up cadences respect buyer attention without harassment",
    "negotiation trades concessions with documented give-and-get",
    "pipeline stages should mean observable buyer behaviors",
    "social proof reduces perceived risk for new buyers",
    "proposals align scope, price, timeline, and success criteria",
    "onboarding handoffs prevent churn right after the signature",
    "ethical selling refuses to misrepresent capabilities or pricing",
    "metrics like win rate and cycle length guide coaching",
    "active listening beats scripted monologues in complex deals",
  ],
  ai: [
    "large language models predict text—they do not inherently know truth",
    "prompt clarity reduces ambiguous outputs and rework",
    "human review remains responsible for regulated or customer-facing text",
    "retrieval augments models with organization-specific documents",
    "tool use can call APIs but expands attack surface if unchecked",
    "bias in training data appears in recommendations and classifications",
    "data minimization limits what you paste into third-party tools",
    "evaluation sets measure quality before wide rollout",
    "versioning prompts is as important as versioning code",
    "automation should fail safe when models refuse or hallucinate",
    "cost scales with tokens; batching and caching affect unit economics",
    "disclosure builds trust when customers interact with AI-assisted content",
  ],
  automotive: [
    "repair orders document customer concern, inspection, authorization, and parts",
    "torque specs and sequence matter on brakes, wheels, and heads",
    "fluid types are not interchangeable—transmission, coolant, and brake specs differ",
    "diagnostic trouble codes point to systems, not always root parts",
    "warranty rules affect what shops can charge and how claims are filed",
    "service advisors translate technical findings into buyer decisions",
    "maintenance menus schedule by time and mileage, not only failure",
    "safety recalls must be tracked even when unrelated to current visit",
    "upsells fail when trust is low; education-based recommendations perform better",
    "comebacks destroy gross profit and reputation simultaneously",
    "EV service requires high-voltage training and insulated tooling",
    "parts markup and labor guides interact with customer approvals",
  ],
  creative: [
    "visual hierarchy guides the eye before readers process every word",
    "color contrast affects accessibility and brand recognition",
    "grids align elements so layouts feel intentional, not accidental",
    "typography choices signal tone—playful, corporate, urgent, or calm",
    "file formats and resolution rules differ for print, web, and video",
    "contracts should define revisions, deliverables, and usage rights",
    "feedback rounds need deadlines or projects drift without shipping",
    "brand guidelines protect consistency across channels and freelancers",
    "audio levels and room tone matter as much as camera framing",
    "storyboards reduce wasted shoot days for video teams",
    "portfolios demonstrate range but should emphasize target client work",
    "licensing stock assets prevents costly infringement surprises",
  ],
  education: [
    "objectives written with measurable verbs clarify what students will demonstrate",
    "formative assessment guides teaching mid-unit; summative certifies learning",
    "classroom routines reduce transition chaos and maximize instructional minutes",
    "differentiation adjusts process, product, or content—not only lowering expectations",
    "feedback should be timely, specific, and actionable—not only letter grades",
    "MTSS tiers align interventions to student need with progress monitoring",
    "IEP and 504 plans are legal documents requiring team collaboration",
    "digital tools should serve pedagogy, not replace lesson design",
    "classroom management is relationship plus predictable consequences",
    "tutoring diagnoses gaps with short cycles of teach, practice, check",
    "professional boundaries protect students and educators in one-to-one settings",
    "educator burnout signals need for sustainable systems, not heroics alone",
  ],
  business: [
    "value propositions explain who benefits and why alternatives lose",
    "unit economics connect price, cost, and volume before scaling spend",
    "customer acquisition cost must stay below lifetime value over time",
    "operations deliver what marketing promises or churn follows",
    "cash runway determines how long startups can iterate before revenue",
    "brand is the sum of repeated experiences, not only logos",
    "OKRs align teams when metrics are few and owned",
    "contracts with vendors need SLAs, termination, and data handling terms",
    "hiring mistakes are expensive; structured interviews reduce variance",
    "inventory and fulfillment dominate economics in physical goods",
    "customer support tickets are product signal, not only cost centers",
    "governance becomes critical as ownership and decision rights multiply",
  ],
  general: [
    "definitions agreed upfront prevent expensive misunderstandings later",
    "documentation creates accountability when teams or shifts change",
    "checklists reduce skipped steps in high-stress environments",
    "metrics should tie to decisions, not vanity dashboards",
    "stakeholder maps clarify who must approve versus who must be informed",
    "training without practice decays quickly without spaced reinforcement",
    "escalation paths should be known before emergencies, not invented during them",
    "standard operating procedures balance consistency with local judgment",
    "quality systems focus on preventing defects, not only inspecting them out",
    "professional tone in writing protects relationships and records",
    "continuous improvement uses small experiments rather than giant untested rewrites",
    "ethical shortcuts often create legal, safety, or reputational debt",
  ],
};

function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function scoreFactForChapter(fact, chapterTitle) {
  const words = chapterTitle
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length > 3);
  let score = 0;
  const lower = fact.toLowerCase();
  for (const w of words) {
    if (lower.includes(w)) score += 3;
  }
  return score;
}

function pickFacts(domain, chapterTitle, sectionIndex, count = 4) {
  const pool = [...(FACT_POOLS[domain] ?? FACT_POOLS.general)];
  const ranked = pool
    .map((fact) => ({ fact, score: scoreFactForChapter(fact, chapterTitle) }))
    .sort((a, b) => b.score - a.score || hash(a.fact) - hash(b.fact));
  const relevant = ranked.filter((r) => r.score > 0).map((r) => r.fact);
  const ordered = relevant.length >= count ? relevant : ranked.map((r) => r.fact);
  const start = hash(`${chapterTitle}:s${sectionIndex}`) % Math.max(1, ordered.length);
  const slice = [];
  for (let i = 0; i < ordered.length && slice.length < count; i++) {
    const f = ordered[(start + i) % ordered.length];
    if (!slice.includes(f)) slice.push(f);
  }
  while (slice.length < count) {
    slice.push(ordered[slice.length % ordered.length]);
  }
  return slice;
}

function capitalizeFact(fact) {
  const text = fact.charAt(0).toUpperCase() + fact.slice(1);
  return text.endsWith(".") ? text : `${text}.`;
}

/** Fact phrase embedded inside a longer sentence (no trailing period). */
function factPhrase(fact) {
  const text = fact.charAt(0).toLowerCase() + fact.slice(1);
  return text.endsWith(".") ? text.slice(0, -1) : text;
}

export function inferDomain(slug, courseTitle) {
  const s = `${slug} ${courseTitle}`.toLowerCase();
  if (s.includes("law") || s.includes("tort") || s.includes("contract") || s.includes("constitution") || s.includes("criminal")) return "law";
  if (s.includes("engineering") || s.includes("aero") || s.includes("mechanical") || s.includes("civil") || s.includes("chemical") || s.includes("industrial") || s.includes("electrical-engineering")) return "engineering";
  if (s.includes("science")) return "science";
  if (s.includes("cyber") || s.includes("phish") || s.includes("threat") || s.includes("password") || s.includes("incident") || s.includes("netsec")) return "cyber";
  if (s.includes("financial") || s.includes("budget") || s.includes("credit") || s.includes("bank") || s.includes("tax") || s.includes("invest") || s.includes("retire") || s.includes("debt") || s.includes("startup-finance")) return "finance";
  if (s.includes("sales") || s.includes("crm") || s.includes("objection") || s.includes("negotiation") || s.includes("follow-up") || s.includes("customer")) return "sales";
  if (s.includes("ai") || s.includes("prompt")) return "ai";
  if (s.includes("automotive") || s.includes("service") || s.includes("repair") || s.includes("warranty") || s.includes("maintenance-selling")) return "automotive";
  if (s.includes("creative") || s.includes("brand") || s.includes("digital-presence")) return "creative";
  if (s.includes("teach") || s.includes("education") || s.includes("personal-development") || s.includes("entrepreneur")) return "education";
  if (s.includes("business") || s.includes("acquisition") || s.includes("operations")) return "business";
  if (s.includes("hvac") || s.includes("plumb") || s.includes("electrical-trades")) return "general";
  if (s.includes("network") || s.includes("operating-system") || s.includes("internet") || s.includes("troubleshoot") || s.includes("it-")) return "cyber";
  return "general";
}

function sectionHeading(sectionIndex) {
  const parts = SECTION_HEADINGS[sectionIndex - 1].split(" ");
  return parts.map((w, i) => (i === 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w)).join(" ");
}

export function buildSectionContent(chapterTitle, courseTitle, domain, sectionIndex) {
  const facts = pickFacts(domain, chapterTitle, sectionIndex);
  const hook = chapterHook(domain, chapterTitle);
  const topic = chapterTitle;
  const course = courseTitle;
  const angle = SECTION_HEADINGS[sectionIndex - 1];
  const f0 = capitalizeFact(facts[0]);
  const f1 = capitalizeFact(facts[1]);
  const f2 = capitalizeFact(facts[2]);
  const f3 = capitalizeFact(facts[3]);

  const hookLead = hook ? `${hook} ` : "";

  const bySection = {
    1: [
      `${hookLead}${topic} is a foundation in ${course} because ${facts[0]}. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.`,
      `Start with vocabulary that professionals actually use: ${f1} When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.`,
      `A practical study method is to explain ${topic.toLowerCase()} aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.`,
      `Workplace teams treat ${topic.toLowerCase()} as a shared model for decisions. ${f2} Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan.`,
    ],
    2: [
      `Professionals rarely dispute whether ${topic.toLowerCase()} exists—they dispute how ${factPhrase(facts[0])}. This section focuses on application: what you measure, who approves, and what record you keep.`,
      `Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. ${f1}`,
      `When stakes rise, pause for a second opinion or formal review. ${f2} Escalation is not failure; it protects licenses, safety, and customer trust.`,
      `If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. ${f3} That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms.`,
    ],
    3: [
      `Scenario: a teammate cites ${topic.toLowerCase()} in a meeting, but details in the packet do not match the textbook example. ${capitalizeFact(facts[0])} Your job is to reconcile the story with the rule—not to win the argument.`,
      `Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. ${f1}`,
      `Good documentation states facts, cites the framework, and records the decision. ${f2} One paragraph in a ticket, incident log, or memo often prevents expensive rework.`,
      `After action reviews should link outcomes back to concepts, not only blame individuals. ${f3} That habit is how teams improve without repeating the same failure mode.`,
    ],
    4: [
      `Common mistakes around ${topic.toLowerCase()} include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. ${capitalizeFact(facts[0])}`,
      `Another failure mode is “checkbox compliance”—filing the form without changing behavior. ${f1} Auditors, inspectors, and senior engineers notice when records and reality diverge.`,
      `Avoid copying answers from unrelated chapters. ${f2} Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.`,
      `When you are wrong, correct the record quickly and notify affected parties. ${f3} Delayed fixes cost more than prompt ones in regulated and customer-facing work.`,
    ],
    5: [
      `This chapter’s through-line is simple: ${topic} connects principles to accountable action. ${capitalizeFact(facts[0])}`,
      `You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.`,
      `Synthesis questions on chapter checks often combine two ideas from different sections. ${f1} Review bullets from §1–§4 before attempting the chapter quiz.`,
      `Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ${topic.toLowerCase()} in your field. ${f2} ${f3}`,
    ],
  };

  const paragraphs = bySection[sectionIndex] ?? bySection[1];

  const bulletSeeds = pickFacts(domain, chapterTitle, sectionIndex + 17, 5);
  const bulletPoints = bulletSeeds.map(capitalizeFact);

  const citations =
    sectionIndex === 1 && (DOMAIN_CITATIONS[domain]?.length ?? 0) > 0
      ? [DOMAIN_CITATIONS[domain][hash(chapterTitle) % DOMAIN_CITATIONS[domain].length]]
      : undefined;

  return { heading: sectionHeading(sectionIndex), paragraphs, bulletPoints, citations, angle };
}

export function buildChapterMeta(chapterTitle, courseTitle, domain, sections) {
  const hook = chapterHook(domain, chapterTitle);
  return {
    learningObjectives: [
      `Define ${chapterTitle.toLowerCase()} and explain why it matters in ${courseTitle}`,
      `Apply chapter ideas to realistic workplace or classroom scenarios`,
      `Spot common errors and choose safer documentation or escalation paths`,
      `Use section quizzes and the chapter check to verify understanding before advancing`,
    ],
    chapterSummary: hook
      ? `${chapterTitle}: ${hook.split(".")[0]}. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.`
      : `${chapterTitle} connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.`,
    keyConcepts: sections.flatMap((s) => s.bulletPoints.slice(0, 1)).slice(0, 6),
    realWorldRelevance: `Strong grasp of ${chapterTitle.toLowerCase()} reduces rework, supports defensible records, and speeds collaboration across ${courseTitle}.`,
  };
}

export function buildIntroParagraphs(courseTitle, domain, chapterCount) {
  const domainNote =
    domain === "law"
      ? "Material is general legal education, not legal advice. Consult a licensed attorney for specific matters."
      : domain === "engineering"
        ? "Material is engineering literacy, not a PE stamp or design approval."
        : domain === "cyber"
          ? "Follow organizational security policy; this course does not replace SOC procedures or certifications alone."
          : "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.";

  const depth =
    domain === "law" || domain === "engineering" || domain === "science"
      ? "academic survey depth — cited frameworks, rigorous prose, and chapter learning objectives"
      : "workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank";

  return [
    `This ForgEd digital textbook presents ${courseTitle} at ${depth}. ${chapterCount} chapters build logically; each includes five sections you should read before attempting quizzes.`,
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    domainNote,
  ];
}

export function buildSubtitle(courseTitle, domain) {
  if (domain === "law" || domain === "engineering" || domain === "science") {
    return `ForgEd deep-dive — ${courseTitle.toLowerCase()}`;
  }
  return `ForgEd workforce textbook — ${courseTitle}`;
}
