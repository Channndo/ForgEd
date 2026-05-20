/**
 * Generates path-only textbook courses (8 chapters) + quiz banks.
 * Skips slugs in PATH_COURSE_ALIASES (use existing catalog content).
 * Run: node scripts/generate-path-courses.mjs
 */
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const TEXTBOOKS = path.join(ROOT, "src/lib/courses/textbooks");
const BANKS = path.join(ROOT, "src/lib/courses/textbook/banks");
const CHAPTERS = 8;
const Q_PER_CH = 10;

/** slug → { title, category, exportPrefix, chapters: [id, title][] } */
const COURSES = {
  "prompting-fundamentals": {
    title: "Prompting Fundamentals",
    category: "ai",
    prefix: "PROMPT",
    bank: "prompt",
    chapters: [
      ["prompt-basics", "Prompt Structure and Clarity"],
      ["context-control", "Context Windows and Control"],
      ["role-prompts", "Role and Persona Prompts"],
      ["few-shot", "Few-Shot Examples"],
      ["chain-prompts", "Chained Instructions"],
      ["evaluation", "Evaluating Model Outputs"],
      ["safety-prompts", "Safety and Refusal Handling"],
      ["prompt-workflows", "Prompts in Daily Work"],
    ],
  },
  "ai-productivity-systems": {
    title: "AI Productivity Systems",
    category: "ai",
    prefix: "AIPROD",
    bank: "aipd",
    chapters: [
      ["inbox-triage", "Inbox and Message Triage"],
      ["meeting-prep", "Meeting Preparation"],
      ["doc-drafting", "Document Drafting"],
      ["summarization", "Summarization Patterns"],
      ["task-delegation", "Task Delegation to AI"],
      ["templates", "Reusable Templates"],
      ["review-loops", "Human Review Loops"],
      ["productivity-metrics", "Measuring Productivity Gains"],
    ],
  },
  "ai-research-skills": {
    title: "AI Research Skills",
    category: "ai",
    prefix: "AIRES",
    bank: "airs",
    chapters: [
      ["research-plan", "Planning a Research Sprint"],
      ["source-quality", "Source Quality Criteria"],
      ["synthesis", "Synthesizing Findings"],
      ["fact-check", "Fact-Checking Outputs"],
      ["citations", "Citations and Attribution"],
      ["comparisons", "Comparative Analysis"],
      ["bias-research", "Bias in Research Assistants"],
      ["deliverables", "Research Deliverables"],
    ],
  },
  "ai-ethics-risks": {
    title: "AI Ethics & Risks",
    category: "ai",
    prefix: "AIETH",
    bank: "aeth",
    chapters: [
      ["ethics-framework", "Ethics Frameworks"],
      ["bias-fairness", "Bias and Fairness"],
      ["privacy-ai", "Privacy and Data Use"],
      ["ip-ai", "Intellectual Property"],
      ["workplace-policy", "Workplace AI Policy"],
      ["transparency", "Transparency and Disclosure"],
      ["incident-ai", "When AI Fails"],
      ["governance", "Lightweight AI Governance"],
    ],
  },
  "ai-workflow-automation": {
    title: "AI Workflow Automation",
    category: "ai",
    prefix: "AIAUTO",
    bank: "aaut",
    chapters: [
      ["automation-map", "Mapping Workflows"],
      ["triggers", "Triggers and Inputs"],
      ["steps-human", "Human-in-the-Loop Steps"],
      ["approvals", "Approval Gates"],
      ["integrations", "Tool Integrations"],
      ["monitoring", "Monitoring Outputs"],
      ["rollback", "Rollback and Overrides"],
      ["scale-automation", "Scaling Automation Safely"],
    ],
  },
  "sales-school-101": {
    title: "Sales School 101",
    category: "business",
    prefix: "SALES",
    bank: "sls1",
    chapters: [
      ["sales-cycle", "The Modern Sales Cycle"],
      ["icp", "Ideal Customer Profile"],
      ["discovery", "Discovery Conversations"],
      ["value-prop", "Value Propositions"],
      ["demo-basics", "Demonstrations That Convert"],
      ["pipeline", "Pipeline Management"],
      ["ethics-sales", "Ethical Selling"],
      ["sales-careers", "Sales Career Paths"],
    ],
  },
  "customer-psychology": {
    title: "Customer Psychology",
    category: "business",
    prefix: "CUSTPSY",
    bank: "cpsy",
    chapters: [
      ["buyer-journey", "Buyer Journey Stages"],
      ["motivation", "Motivation and Trust"],
      ["friction", "Decision Friction"],
      ["social-proof", "Social Proof"],
      ["pricing-psych", "Pricing Psychology"],
      ["objections-psych", "Psychology of Objections"],
      ["loyalty", "Loyalty and Retention"],
      ["personas", "Buyer Personas"],
    ],
  },
  "objection-handling": {
    title: "Objection Handling",
    category: "business",
    prefix: "OBJ",
    bank: "obj",
    chapters: [
      ["objection-types", "Types of Objections"],
      ["listen-first", "Listen-First Technique"],
      ["price-objections", "Price Objections"],
      ["timing-objections", "Timing Objections"],
      ["competitor-objections", "Competitor Objections"],
      ["reframes", "Reframing Value"],
      ["trial-closes", "Trial Closes"],
      ["follow-through", "Follow-Through After Objections"],
    ],
  },
  "negotiation-basics": {
    title: "Negotiation Basics",
    category: "business",
    prefix: "NEG",
    bank: "neg",
    chapters: [
      ["negotiation-prep", "Negotiation Preparation"],
      ["batna", "BATNA and Limits"],
      ["anchoring", "Anchoring and Framing"],
      ["concessions", "Trading Concessions"],
      ["win-win", "Win-Win Outcomes"],
      ["difficult-negotiation", "Difficult Negotiations"],
      ["contracts-negotiation", "Contract Basics in Deals"],
      ["negotiation-ethics", "Negotiation Ethics"],
    ],
  },
  "follow-up-systems": {
    title: "Follow-Up Systems",
    category: "business",
    prefix: "FUP",
    bank: "fup",
    chapters: [
      ["cadence-design", "Designing Cadences"],
      ["email-followup", "Email Follow-Up"],
      ["call-followup", "Call Follow-Up"],
      ["nurture", "Nurture Sequences"],
      ["re-engagement", "Re-Engagement"],
      ["metrics-followup", "Follow-Up Metrics"],
      ["tools-followup", "Tools and Templates"],
      ["accountability", "Personal Accountability"],
    ],
  },
  "crm-fundamentals": {
    title: "CRM Fundamentals",
    category: "business",
    prefix: "CRM",
    bank: "crm",
    chapters: [
      ["crm-purpose", "Why CRMs Matter"],
      ["data-model", "CRM Data Model"],
      ["stages", "Pipeline Stages"],
      ["activities", "Logging Activities"],
      ["reports-crm", "CRM Reporting"],
      ["hygiene", "Data Hygiene"],
      ["automation-crm", "CRM Automation"],
      ["crm-adoption", "Team Adoption"],
    ],
  },
  "ai-assisted-sales": {
    title: "AI-Assisted Sales",
    category: "ai",
    prefix: "AISLS",
    bank: "asls",
    chapters: [
      ["ai-prospecting", "AI for Prospecting"],
      ["ai-prep-calls", "AI Call Preparation"],
      ["ai-email", "AI Email Drafts"],
      ["ai-research-account", "Account Research"],
      ["ai-proposals", "Proposal Support"],
      ["compliance-sales", "Compliance in AI Sales"],
      ["quality-control", "Quality Control"],
      ["ai-sales-future", "Future of AI in Sales"],
    ],
  },
  "budgeting-systems": {
    title: "Budgeting Systems",
    category: "financial",
    prefix: "BUD",
    bank: "bud",
    chapters: [
      ["budget-why", "Why Budgets Work"],
      ["zero-based", "Zero-Based Budgeting"],
      ["envelope", "Envelope Method"],
      ["irregular-income", "Irregular Income"],
      ["categories", "Expense Categories"],
      ["tracking-tools", "Tracking Tools"],
      ["review-monthly", "Monthly Reviews"],
      ["budget-goals", "Goal-Based Budgets"],
    ],
  },
  "credit-and-debt": {
    title: "Credit & Debt",
    category: "financial",
    prefix: "CRED",
    bank: "cred",
    chapters: [
      ["credit-scores", "Credit Scores Explained"],
      ["reports", "Credit Reports"],
      ["utilization", "Utilization"],
      ["debt-types", "Types of Debt"],
      ["payoff-strategies", "Payoff Strategies"],
      ["consolidation", "Consolidation Options"],
      ["collections", "Collections and Recovery"],
      ["credit-rebuild", "Rebuilding Credit"],
    ],
  },
  "banking-basics": {
    title: "Banking Basics",
    category: "financial",
    prefix: "BANK",
    bank: "bank",
    chapters: [
      ["account-types", "Account Types"],
      ["fees-banking", "Fees and Features"],
      ["digital-banking", "Digital Banking"],
      ["fraud-banking", "Fraud Protection"],
      ["savings", "Savings Strategies"],
      ["joint-accounts", "Joint and Shared Accounts"],
      ["business-banking", "Business Banking Intro"],
      ["choosing-bank", "Choosing a Bank"],
    ],
  },
  "taxes-explained": {
    title: "Taxes Explained",
    category: "financial",
    prefix: "TAX",
    bank: "tax",
    chapters: [
      ["tax-system", "How Taxes Work"],
      ["w2-1099", "W-2 vs 1099"],
      ["withholding", "Withholding"],
      ["deductions", "Deductions Overview"],
      ["credits", "Tax Credits"],
      ["filing", "Filing Basics"],
      ["self-employed-tax", "Self-Employed Taxes"],
      ["records", "Record Keeping"],
    ],
  },
  "investing-fundamentals": {
    title: "Investing Fundamentals",
    category: "financial",
    prefix: "INV",
    bank: "inv",
    chapters: [
      ["risk-return", "Risk and Return"],
      ["stocks-bonds", "Stocks and Bonds"],
      ["index-funds", "Index Funds"],
      ["diversification", "Diversification"],
      ["time-horizon", "Time Horizon"],
      ["brokerages", "Brokerage Accounts"],
      ["dca", "Dollar-Cost Averaging"],
      ["investing-mistakes", "Common Mistakes"],
    ],
  },
  "retirement-planning": {
    title: "Retirement Planning",
    category: "financial",
    prefix: "RET",
    bank: "ret",
    chapters: [
      ["retirement-why", "Why Start Early"],
      ["401k", "401(k) Basics"],
      ["ira", "IRA Options"],
      ["employer-match", "Employer Match"],
      ["social-security", "Social Security Overview"],
      ["withdrawal", "Withdrawal Strategies"],
      ["healthcare-retire", "Healthcare in Retirement"],
      ["retirement-goals", "Setting Retirement Goals"],
    ],
  },
  "operating-systems-basics": {
    title: "Operating Systems",
    category: "it",
    prefix: "OS",
    bank: "os",
    chapters: [
      ["os-overview", "OS Overview"],
      ["windows-basics", "Windows Essentials"],
      ["macos-basics", "macOS Essentials"],
      ["linux-intro", "Linux Introduction"],
      ["users-perms", "Users and Permissions"],
      ["updates-os", "Updates and Patches"],
      ["filesystems", "Files and Folders"],
      ["backup-os", "Backups"],
    ],
  },
  "networking-basics": {
    title: "Networking Basics",
    category: "it",
    prefix: "NET",
    bank: "net",
    chapters: [
      ["network-models", "Network Models"],
      ["ip-addressing", "IP Addressing"],
      ["dns-basics", "DNS"],
      ["wifi-basics", "Wi-Fi"],
      ["ethernet", "Ethernet and Switches"],
      ["vpn-basics", "VPN Basics"],
      ["troubleshoot-net", "Network Troubleshooting"],
      ["home-office-net", "Home and Office Networks"],
    ],
  },
  "internet-infrastructure": {
    title: "Internet Infrastructure",
    category: "it",
    prefix: "INET",
    bank: "inet",
    chapters: [
      ["how-internet", "How the Internet Works"],
      ["isps", "ISPs and Peering"],
      ["cdn", "CDNs"],
      ["cloud-edge", "Cloud and Edge"],
      ["latency", "Latency and Throughput"],
      ["routing", "Routing Basics"],
      ["ipv6", "IPv6 Intro"],
      ["outages", "Understanding Outages"],
    ],
  },
  "troubleshooting-basics": {
    title: "Troubleshooting Basics",
    category: "it",
    prefix: "TROUB",
    bank: "trb",
    chapters: [
      ["trouble-method", "Troubleshooting Method"],
      ["reproduce", "Reproducing Issues"],
      ["logs", "Reading Logs"],
      ["hardware-trouble", "Hardware Checks"],
      ["software-trouble", "Software Checks"],
      ["network-trouble", "Network Checks"],
      ["escalation", "Escalation"],
      ["documentation", "Documenting Fixes"],
    ],
  },
  "threat-awareness": {
    title: "Threat Awareness",
    category: "cybersecurity",
    prefix: "THREAT",
    bank: "thr",
    chapters: [
      ["threat-landscape", "Threat Landscape"],
      ["malware-types", "Malware Types"],
      ["ransomware", "Ransomware"],
      ["insider-threats", "Insider Threats"],
      ["supply-chain", "Supply Chain Risk"],
      ["attack-vectors", "Attack Vectors"],
      ["threat-intel", "Threat Intelligence Intro"],
      ["reporting-threats", "Reporting Threats"],
    ],
  },
  "password-security": {
    title: "Password Security",
    category: "cybersecurity",
    prefix: "PASS",
    bank: "pass",
    chapters: [
      ["password-strength", "Password Strength"],
      ["mfa-types", "MFA Types"],
      ["passkeys", "Passkeys"],
      ["managers", "Password Managers"],
      ["rotation-myths", "Rotation Myths"],
      ["breach-response", "Credential Breach Response"],
      ["team-passwords", "Team Password Policy"],
      ["sso", "SSO Basics"],
    ],
  },
  "phishing-defense": {
    title: "Phishing Defense",
    category: "cybersecurity",
    prefix: "PHISH",
    bank: "phsh",
    chapters: [
      ["phishing-types", "Phishing Types"],
      ["email-signals", "Email Red Flags"],
      ["smishing", "Smishing and Vishing"],
      ["bec", "Business Email Compromise"],
      ["report-phish", "Reporting Phishing"],
      ["simulations", "Phishing Simulations"],
      ["user-training", "Security Awareness"],
      ["recovery-phish", "After a Click"],
    ],
  },
  "network-security": {
    title: "Network Security",
    category: "cybersecurity",
    prefix: "NETSEC",
    bank: "nsec",
    chapters: [
      ["firewalls", "Firewalls"],
      ["segmentation", "Network Segmentation"],
      ["zt-intro", "Zero Trust Intro"],
      ["remote-access", "Secure Remote Access"],
      ["wifi-security", "Wi-Fi Security"],
      ["ids-ips", "IDS/IPS Overview"],
      ["vpn-security", "VPN Security"],
      ["monitoring-net", "Network Monitoring"],
    ],
  },
  "incident-response-basics": {
    title: "Incident Response Basics",
    category: "cybersecurity",
    prefix: "IR",
    bank: "ir",
    chapters: [
      ["ir-lifecycle", "IR Lifecycle"],
      ["detection", "Detection"],
      ["containment", "Containment"],
      ["eradication", "Eradication"],
      ["recovery", "Recovery"],
      ["evidence", "Evidence Handling"],
      ["comms-ir", "Incident Communications"],
      ["post-incident", "Post-Incident Review"],
    ],
  },
  "branding-fundamentals": {
    title: "Branding Fundamentals",
    category: "business",
    prefix: "BRAND",
    bank: "brnd",
    chapters: [
      ["brand-why", "Why Brand Matters"],
      ["positioning", "Positioning"],
      ["voice-tone", "Voice and Tone"],
      ["visual-id", "Visual Identity"],
      ["consistency", "Brand Consistency"],
      ["story", "Brand Story"],
      ["competitors-brand", "Competitive Differentiation"],
      ["brand-metrics", "Brand Metrics"],
    ],
  },
  "customer-acquisition": {
    title: "Customer Acquisition",
    category: "business",
    prefix: "CAC",
    bank: "cac",
    chapters: [
      ["channels-acq", "Acquisition Channels"],
      ["cac-ltv", "CAC and LTV"],
      ["experiments-growth", "Growth Experiments"],
      ["content-acq", "Content Marketing"],
      ["paid-acq", "Paid Acquisition Intro"],
      ["referrals", "Referral Programs"],
      ["partnerships", "Partnerships"],
      ["measure-acq", "Measuring Acquisition"],
    ],
  },
  "digital-presence": {
    title: "Digital Presence",
    category: "business",
    prefix: "DIG",
    bank: "dig",
    chapters: [
      ["website-basics", "Website Essentials"],
      ["seo-intro", "SEO Introduction"],
      ["social-proof", "Social Proof Online"],
      ["content-calendar", "Content Calendar"],
      ["reviews", "Reviews and Reputation"],
      ["analytics-web", "Web Analytics Intro"],
      ["local-presence", "Local Presence"],
      ["brand-digital", "Digital Brand Safety"],
    ],
  },
  "startup-finance": {
    title: "Startup Finance",
    category: "financial",
    prefix: "STFIN",
    bank: "stfn",
    chapters: [
      ["runway", "Runway"],
      ["burn-rate", "Burn Rate"],
      ["unit-economics", "Unit Economics"],
      ["forecasting", "Simple Forecasting"],
      ["fundraising-intro", "Fundraising Intro"],
      ["cap-table", "Cap Table Basics"],
      ["financial-model", "Lightweight Models"],
      ["finance-ops", "Finance Operations"],
    ],
  },
  "ai-for-entrepreneurs": {
    title: "AI For Entrepreneurs",
    category: "ai",
    prefix: "AIENT",
    bank: "aent",
    chapters: [
      ["ai-market-research", "AI Market Research"],
      ["ai-copy", "AI Copy and Content"],
      ["ai-support", "AI Customer Support"],
      ["ai-ops-startup", "AI in Operations"],
      ["ai-product", "AI in Product"],
      ["cost-ai", "Cost Control"],
      ["policy-startup", "Startup AI Policy"],
      ["scale-ai", "Scaling AI Use"],
    ],
  },
  "service-advising-fundamentals": {
    title: "Service Advising Fundamentals",
    category: "automotive",
    prefix: "SVC",
    bank: "svc",
    chapters: [
      ["advisor-role", "The Service Advisor Role"],
      ["shop-flow", "Shop Flow"],
      ["customer-expectations", "Customer Expectations"],
      ["multipoint", "Multi-Point Inspections"],
      ["scheduling", "Scheduling"],
      ["parts-basics", "Parts Coordination"],
      ["technician-handoff", "Technician Handoff"],
      ["advisor-metrics", "Advisor Metrics"],
    ],
  },
  "repair-order-workflow": {
    title: "Repair Order Workflow",
    category: "automotive",
    prefix: "RO",
    bank: "ro",
    chapters: [
      ["ro-basics", "Repair Order Basics"],
      ["write-up", "Customer Write-Up"],
      ["approvals-ro", "Approvals"],
      ["labor-parts", "Labor and Parts"],
      ["status-updates", "Status Updates"],
      ["comebacks-ro", "Comebacks"],
      ["warranty-ro", "Warranty on RO"],
      ["closing-ro", "Closing the RO"],
    ],
  },
  "customer-communication-service": {
    title: "Customer Communication",
    category: "communication",
    prefix: "SVCCOM",
    bank: "svcm",
    chapters: [
      ["greeting", "Professional Greeting"],
      ["explain-repairs", "Explaining Repairs"],
      ["time-estimates", "Time Estimates"],
      ["cost-transparency", "Cost Transparency"],
      ["phone-service", "Phone Skills"],
      ["text-updates", "Text Updates"],
      ["difficult-news", "Delivering Difficult News"],
      ["csi", "Customer Satisfaction"],
    ],
  },
  "maintenance-selling": {
    title: "Maintenance Selling",
    category: "automotive",
    prefix: "MAINT",
    bank: "mnt",
    chapters: [
      ["factory-schedule", "Factory Maintenance"],
      ["menus", "Maintenance Menus"],
      ["ethical-upsell", "Ethical Recommendations"],
      ["declined-work", "Declined Work"],
      ["seasonal", "Seasonal Services"],
      ["fluids-filters", "Fluids and Filters"],
      ["ev-maintenance", "EV Maintenance"],
      ["tracking-maintenance", "Tracking History"],
    ],
  },
  "warranty-basics": {
    title: "Warranty Basics",
    category: "automotive",
    prefix: "WARR",
    bank: "war",
    chapters: [
      ["factory-warranty", "Factory Warranty"],
      ["extended-warranty", "Extended Coverage"],
      ["claims-warranty", "Warranty Claims"],
      ["documentation-warranty", "Documentation"],
      ["denials", "Denials and Appeals"],
      ["goodwill", "Goodwill Repairs"],
      ["parts-warranty", "Parts Warranty"],
      ["customer-warranty", "Explaining Coverage"],
    ],
  },
  "difficult-customer-scenarios": {
    title: "Difficult Customer Scenarios",
    category: "communication",
    prefix: "DIFF",
    bank: "diff",
    chapters: [
      ["de-escalation", "De-escalation"],
      ["delays", "Handling Delays"],
      ["price-disputes", "Price Disputes"],
      ["comebacks-diff", "Comeback Conversations"],
      ["angry-customers", "Angry Customers"],
      ["apologies", "Effective Apologies"],
      ["manager-escalation", "Manager Escalation"],
      ["learning-scenarios", "Learning from Scenarios"],
    ],
  },
  "ai-automotive-service": {
    title: "AI in Automotive Service",
    category: "ai",
    prefix: "AASVC",
    bank: "asvc",
    chapters: [
      ["ai-scheduling-svc", "AI Scheduling"],
      ["ai-status", "AI Status Updates"],
      ["ai-notes", "AI Service Notes"],
      ["ai-parts", "AI Parts Lookup"],
      ["ai-training", "Training Staff on AI"],
      ["privacy-svc", "Customer Privacy"],
      ["quality-ai-svc", "Quality Control"],
      ["future-svc-ai", "Future of AI in Service"],
    ],
  },
};

function paragraphs(topic, sectionTitle, courseTitle) {
  return [
    `${sectionTitle} connects ${topic} to real workforce outcomes in ${courseTitle}. Learners apply concepts through scenarios, not theory alone.`,
    `Progression is sequential: read each section, pass the section quiz, then advance. Assessment items draw from this chapter's question pool.`,
    `Use this material to build confidence, employability, and modern skills — verify policies and regulations in your organization before acting.`,
  ];
}

function buildTextbook(slug, cfg) {
  const blocks = cfg.chapters
    .map(([id, title], idx) => {
      const num = idx + 1;
      const sections = [1, 2, 3, 4, 5]
        .map((s) => {
          const sid = `${id}-s${s}`;
          const st = `${num}.${s} ${title} — applied practice (${s})`;
          return `      section(${JSON.stringify(sid)}, ${JSON.stringify(st)}, ${JSON.stringify(paragraphs(title, st, cfg.title))}),`;
        })
        .join("\n");
      return `  chapter(${JSON.stringify(id)}, ${num}, ${JSON.stringify(title)}, [\n${sections}\n  ])`;
    })
    .join(",\n");
  return `import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const ${cfg.prefix}_TEXTBOOK_INTRO: TextbookIntro = {
  title: ${JSON.stringify(cfg.title)},
  subtitle: ${JSON.stringify(`ForgEd path course — ${cfg.title}`)},
  paragraphs: [
    ${JSON.stringify(`${cfg.title} is part of a structured ForgEd Learning Path. Complete courses in order to unlock the next step and earn path certifications.`)},
    ${JSON.stringify("Each chapter includes five sections and section quizzes. Pass chapter quizzes, the course review, and final exam to mark the course complete.")},
    ${JSON.stringify("Content is practical workforce education — not licensure, legal, or financial advice.")},
  ],
};

export const ${cfg.prefix}_TEXTBOOK: TextbookChapter[] = [
${blocks}
];
`;
}

function buildBank(slug, cfg) {
  const lines = [];
  for (let ch = 1; ch <= CHAPTERS; ch++) {
    const topic = cfg.chapters[ch - 1][1];
    const chs = String(ch).padStart(2, "0");
    for (let v = 0; v < Q_PER_CH; v++) {
      const id = `${cfg.bank}-ch${chs}-q${String(v + 1).padStart(2, "0")}`;
      const templates = [
        {
          q: `For ${topic}, which approach aligns with this path course?`,
          c: `Apply ${topic} to realistic workplace scenarios with cited reasoning`,
          w: ["Skip section quizzes", "Memorize without context", "Ignore sequential progression"],
        },
        {
          q: `When studying ${topic}, prioritize:`,
          c: `Section quizzes, chapter review, and path progression`,
          w: ["Random chapter jumping", "Avoiding the final exam", "Unverified anecdotes only"],
        },
      ];
      const t = templates[v % 2];
      const opts = [...t.w];
      const ci = v % 4;
      opts[ci] = t.c;
      while (opts.length < 4) opts.push("None of the above");
      lines.push(
        `  q(${JSON.stringify(id)}, ${JSON.stringify(t.q)}, ${JSON.stringify(opts.slice(0, 4))}, ${ci}, ${JSON.stringify(`Ch. ${ch}: ${topic}`)}),`
      );
    }
  }
  const bankName = `${slug.replace(/-/g, "_").toUpperCase()}_BANK`;
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

export const ${bankName}: QuizQuestion[] = [
${lines.join("\n")}
];
`;
}

const bundleEntries = [];
const bankEntries = [];
const catalogEntries = [];

for (const [slug, cfg] of Object.entries(COURSES)) {
  fs.writeFileSync(path.join(TEXTBOOKS, `${slug}.ts`), buildTextbook(slug, cfg));
  fs.writeFileSync(path.join(BANKS, `${slug}.ts`), buildBank(slug, cfg));
  const importPrefix = cfg.prefix;
  bundleEntries.push(
    `  "${slug}": { slug: "${slug}", intro: ${importPrefix}_TEXTBOOK_INTRO, chapters: ${importPrefix}_TEXTBOOK },`
  );
  bankEntries.push(`  "${slug}": ${slug.replace(/-/g, "_").toUpperCase()}_BANK,`);
  catalogEntries.push(`  { slug: "${slug}", title: ${JSON.stringify(cfg.title)}, category: "${cfg.category}", prefix: "${importPrefix}" },`);
  console.log("wrote", slug);
}

const bundleImports = Object.values(COURSES)
  .map(
    (c) =>
      `import { ${c.prefix}_TEXTBOOK, ${c.prefix}_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/${Object.entries(COURSES).find(([, v]) => v.prefix === c.prefix)[0]}";`
  )
  .join("\n");

// Fix imports - use slug from entries
const importLines = Object.entries(COURSES).map(
  ([slug, cfg]) =>
    `import { ${cfg.prefix}_TEXTBOOK, ${cfg.prefix}_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/${slug}";`
);
const bankImportLines = Object.entries(COURSES).map(
  ([slug]) =>
    `import { ${slug.replace(/-/g, "_").toUpperCase()}_BANK } from "./banks/${slug}";`
);

fs.writeFileSync(
  path.join(ROOT, "src/lib/courses/textbook/pathBundles.generated.ts"),
  `${importLines.join("\n")}
import type { TextbookBundle } from "./types";

export const PATH_BUNDLES: Record<string, TextbookBundle> = {
${bundleEntries.join("\n")}
};
`
);

fs.writeFileSync(
  path.join(ROOT, "src/lib/courses/textbook/pathBanks.generated.ts"),
  `${bankImportLines.join("\n")}
import type { QuizQuestion } from "@/lib/quizTypes";

export const PATH_BANKS: Record<string, QuizQuestion[]> = {
${bankEntries.join("\n")}
};
`
);

console.log("done", Object.keys(COURSES).length, "path courses");
