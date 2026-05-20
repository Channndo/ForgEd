export const TEXTBOOK_EDITION = "ForgEd Digital Textbook · 2026";

const ROMAN = [
  "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",
] as const;

export function toRoman(n: number): string {
  return ROMAN[n - 1] ?? String(n);
}

export interface ChapterMeta {
  readMinutes: number;
  objectives: string[];
}

const INSURANCE_CHAPTER_META: Record<string, ChapterMeta> = {
  "why-it-matters": {
    readMinutes: 6,
    objectives: [
      "Explain why societies pool risk through insurance",
      "Describe how coverage protects personal and household finances",
      "Name core principles: indemnity, insurable interest, and utmost good faith",
    ],
  },
  history: {
    readMinutes: 8,
    objectives: [
      "Trace insurance from ancient trade codes to Lloyd's and fire societies",
      "Identify milestones in U.S. insurance development",
      "Place major reforms on a historical timeline",
    ],
  },
  regulation: {
    readMinutes: 9,
    objectives: [
      "Describe the state-based U.S. regulatory structure",
      "Explain McCarran-Ferguson and federal–state boundaries",
      "Summarize licensing, solvency, and common state-level themes",
    ],
  },
  "federal-laws": {
    readMinutes: 9,
    objectives: [
      "Recognize major federal statutes that touch insurance markets",
      "Distinguish health, benefits, flood, and terrorism backstops",
      "Understand when federal law operates alongside state codes",
    ],
  },
  "insurer-rules": {
    readMinutes: 8,
    objectives: [
      "Outline fair claims handling and prompt payment expectations",
      "Identify producer conduct, privacy, and solvency obligations",
      "Distinguish fraud types and anti-fraud enforcement",
    ],
  },
  lines: {
    readMinutes: 7,
    objectives: [
      "Differentiate property-casualty and commercial lines at a high level",
      "Understand climate, catastrophe, and insurtech trends",
      "Know where to read the dedicated life and health chapter",
    ],
  },
  "life-and-health": {
    readMinutes: 28,
    objectives: [
      "Compare term, whole, universal life, and basic annuity concepts",
      "Understand health plan costs, networks, and employer vs. marketplace coverage",
      "Explain Medicare parts, Advantage, Medigap, Medicaid, and ACA marketplace basics",
      "Recognize HIPAA, disability income, and supplemental health products",
    ],
  },
  "claims-process": {
    readMinutes: 7,
    objectives: [
      "Walk through first notice of loss and documentation duties",
      "Explain the adjuster's role and settlement factors",
      "Outline appeals when coverage is disputed or denied",
    ],
  },
  reinsurance: {
    readMinutes: 5,
    objectives: [
      "Define reinsurance and why primary insurers cede risk",
      "Explain treaty vs. facultative arrangements",
      "Connect reinsurance to catastrophe capacity and availability",
    ],
  },
  "government-programs": {
    readMinutes: 7,
    objectives: [
      "Contrast Social Security with private insurance",
      "Summarize Medicare, Medicaid, and ACA marketplace roles",
      "Identify NFIP and other federal risk programs",
    ],
  },
  "policy-contract": {
    readMinutes: 8,
    objectives: [
      "Locate declarations, insuring agreement, exclusions, and conditions",
      "Spot clauses that commonly surprise policyholders",
      "Find authoritative resources and use this guide responsibly",
    ],
  },
  "buying-guide": {
    readMinutes: 6,
    objectives: [
      "Conduct a needs analysis before buying coverage",
      "Compare quotes and carriers on more than price alone",
      "Avoid common purchasing mistakes consumers make",
    ],
  },
  "agency-operations": {
    readMinutes: 6,
    objectives: [
      "Describe how insurance distribution and agencies work",
      "Outline client service workflows producers follow",
      "Identify career paths and credentials in the industry",
    ],
  },
};

const AI_CHAPTER_META: Record<string, ChapterMeta> = {
  "intelligence-computation": {
    readMinutes: 10,
    objectives: [
      "Define intelligence operationally for machines and humans",
      "Explain computation, algorithms, and complexity basics",
      "Describe representation, inference, and learning as AI pillars",
    ],
  },
  history: {
    readMinutes: 11,
    objectives: [
      "Trace AI from symbolic systems to deep learning eras",
      "Identify AI winters and what caused funding cycles",
      "Place landmark models (AlexNet, Transformer) in context",
    ],
  },
  "ml-foundations": {
    readMinutes: 12,
    objectives: [
      "Contrast supervised, unsupervised, and reinforcement learning",
      "Explain bias-variance and generalization",
      "Recognize fairness and dataset issues in ML",
    ],
  },
  "neural-networks": {
    readMinutes: 11,
    objectives: [
      "Describe neurons, layers, and activation functions",
      "Explain backpropagation and gradient descent intuitively",
      "Identify CNN and RNN use cases",
    ],
  },
  llms: {
    readMinutes: 12,
    objectives: [
      "Explain transformers and attention at a high level",
      "Describe pre-training and fine-tuning for language models",
      "Recognize hallucination, context limits, and cost drivers",
    ],
  },
  "prompting-tools": {
    readMinutes: 10,
    objectives: [
      "Apply zero-shot, few-shot, and role prompting",
      "Use tool calling and retrieval responsibly",
      "Evaluate outputs before acting on them",
    ],
  },
  "vision-speech": {
    readMinutes: 9,
    objectives: [
      "Summarize computer vision pipeline concepts",
      "Explain speech recognition and synthesis basics",
      "Connect multimodal systems to real products",
    ],
  },
  "ethics-safety": {
    readMinutes: 11,
    objectives: [
      "Analyze bias, privacy, and surveillance risks",
      "Reference NIST AI RMF and OECD principles",
      "Describe human oversight for high-stakes use",
    ],
  },
  "workplace-ai": {
    readMinutes: 10,
    objectives: [
      "Identify productive vs. risky workplace AI uses",
      "Draft acceptable-use and disclosure norms",
      "Protect confidential data when using cloud models",
    ],
  },
  "future-human-ai": {
    readMinutes: 9,
    objectives: [
      "Evaluate automation and labor market scenarios",
      "Discuss governance, literacy, and public investment",
      "Maintain realistic expectations about AGI timelines",
    ],
  },
};

const CYBER_CHAPTER_META: Record<string, ChapterMeta> = {
  "security-mindset-cia": {
    readMinutes: 10,
    objectives: [
      "Define confidentiality, integrity, and availability",
      "Explain defense-in-depth and least privilege",
      "Connect risk management to business outcomes",
    ],
  },
  "threat-landscape": {
    readMinutes: 11,
    objectives: [
      "Classify threat actors and motivations",
      "Describe malware, ransomware, and supply chain attacks",
      "Use MITRE ATT&CK as a study framework",
    ],
  },
  "auth-identity": {
    readMinutes: 10,
    objectives: [
      "Implement MFA and password managers",
      "Explain SSO, OAuth, and federation basics",
      "Recognize credential theft and session hijacking",
    ],
  },
  "network-security": {
    readMinutes: 11,
    objectives: [
      "Describe firewalls, segmentation, and VPNs",
      "Explain TLS and secure remote access",
      "Identify common network misconfigurations",
    ],
  },
  "endpoint-security": {
    readMinutes: 10,
    objectives: [
      "Harden workstations and mobile devices",
      "Explain EDR/XDR and patch management",
      "Apply least privilege on endpoints",
    ],
  },
  cryptography: {
    readMinutes: 11,
    objectives: [
      "Contrast symmetric and asymmetric encryption",
      "Explain hashing, salts, and password storage",
      "Recognize when crypto is used in HTTPS and disks",
    ],
  },
  "social-engineering": {
    readMinutes: 10,
    objectives: [
      "Identify phishing, vishing, and pretexting",
      "Design user awareness programs",
      "Report and contain social engineering incidents",
    ],
  },
  "app-web-security": {
    readMinutes: 12,
    objectives: [
      "Explain OWASP Top 10 categories",
      "Describe secure SDLC practices",
      "Understand API and cloud shared responsibility",
    ],
  },
  "incident-response": {
    readMinutes: 11,
    objectives: [
      "Follow NIST incident response phases",
      "Preserve evidence and communicate during breaches",
      "Conduct post-incident reviews",
    ],
  },
  "compliance-privacy-careers": {
    readMinutes: 10,
    objectives: [
      "Summarize GDPR, HIPAA, and SOC 2 roles",
      "Map compliance to control frameworks",
      "Explore cybersecurity career paths and certs",
    ],
  },
};

const IT_CHAPTER_META: Record<string, ChapterMeta> = {
  "computing-history": {
    readMinutes: 9,
    objectives: [
      "Trace computing from mechanical devices to cloud",
      "Explain stored-program architecture",
      "Place Moore's law and the internet in context",
    ],
  },
  hardware: {
    readMinutes: 11,
    objectives: [
      "Identify CPU, RAM, storage, and bus roles",
      "Compare form factors and upgrade paths",
      "Diagnose basic hardware failures",
    ],
  },
  "operating-systems": {
    readMinutes: 11,
    objectives: [
      "Explain processes, memory, and file systems",
      "Contrast Windows, macOS, and Linux use cases",
      "Apply updates and user account controls",
    ],
  },
  "files-storage": {
    readMinutes: 10,
    objectives: [
      "Describe file systems and backup strategies",
      "Explain RAID and cloud storage tradeoffs",
      "Recover from common data loss scenarios",
    ],
  },
  networking: {
    readMinutes: 12,
    objectives: [
      "Use IP, DNS, DHCP, and subnetting vocabulary",
      "Troubleshoot connectivity with layered thinking",
      "Secure Wi‑Fi and home networks",
    ],
  },
  "internet-cloud": {
    readMinutes: 11,
    objectives: [
      "Explain IaaS, PaaS, and SaaS",
      "Describe how the internet routes packets",
      "Identify shared responsibility in cloud",
    ],
  },
  troubleshooting: {
    readMinutes: 10,
    objectives: [
      "Apply structured troubleshooting methodology",
      "Document tickets and reproduce issues",
      "Know when to escalate to specialists",
    ],
  },
  "it-security": {
    readMinutes: 10,
    objectives: [
      "Implement baseline security hygiene for support staff",
      "Recognize malware symptoms and removal steps",
      "Follow acceptable-use policies",
    ],
  },
  "productivity-collaboration": {
    readMinutes: 9,
    objectives: [
      "Use office suites, email, and calendars effectively",
      "Collaborate with version control and shared drives",
      "Automate repetitive tasks safely",
    ],
  },
  "it-careers": {
    readMinutes: 8,
    objectives: [
      "Compare help desk, sysadmin, and security roles",
      "Map CompTIA and vendor cert paths",
      "Build a homelab learning plan",
    ],
  },
};

const AUTO_CHAPTER_META: Record<string, ChapterMeta> = {
  "vehicle-systems": {
    readMinutes: 10,
    objectives: [
      "Describe unibody vs. body-on-frame designs",
      "Identify major vehicle subsystems",
      "Read a basic window sticker and VIN",
    ],
  },
  "powertrain-fuels": {
    readMinutes: 11,
    objectives: [
      "Contrast ICE, hybrid, and electric powertrains",
      "Explain transmission and drivetrain layouts",
      "Understand emissions and fuel economy labels",
    ],
  },
  "chassis-steering-brakes": {
    readMinutes: 10,
    objectives: [
      "Explain suspension, steering, and brake types",
      "Describe ABS and stability control",
      "Recognize wear items and service intervals",
    ],
  },
  "electrical-electronics": {
    readMinutes: 10,
    objectives: [
      "Map 12V electrical systems and charging",
      "Summarize ECUs, sensors, and OBD-II",
      "Diagnose common electrical faults",
    ],
  },
  "maintenance-ownership": {
    readMinutes: 11,
    objectives: [
      "Follow OEM maintenance schedules",
      "Estimate total cost of ownership",
      "Keep service records for resale value",
    ],
  },
  "safety-crash": {
    readMinutes: 10,
    objectives: [
      "Explain crumple zones and restraint systems",
      "Read IIHS and NHTSA ratings",
      "Understand post-crash repair considerations",
    ],
  },
  "buying-finance": {
    readMinutes: 11,
    objectives: [
      "Compare buying, leasing, and loan structures",
      "Negotiate price vs. payment focus",
      "Avoid common dealer F&I traps",
    ],
  },
  "insurance-legal": {
    readMinutes: 9,
    objectives: [
      "Identify minimum liability requirements",
      "Explain collision, comprehensive, and UM/UIM",
      "Know title, registration, and lemon law basics",
    ],
  },
  "ev-hybrid": {
    readMinutes: 11,
    objectives: [
      "Describe battery types, range, and charging levels",
      "Explain regenerative braking and maintenance differences",
      "Evaluate incentives and home charging needs",
    ],
  },
  "autonomy-trends": {
    readMinutes: 10,
    objectives: [
      "Explain SAE automation levels",
      "Discuss liability and insurance implications",
      "Track industry trends affecting owners",
    ],
  },
};

const FIN_CHAPTER_META: Record<string, ChapterMeta> = {
  "money-inflation": {
    readMinutes: 9,
    objectives: [
      "Define money, inflation, and purchasing power",
      "Read CPI and real vs. nominal returns",
      "Connect inflation to wages and debt",
    ],
  },
  "budgeting-cash-flow": {
    readMinutes: 11,
    objectives: [
      "Build zero-based and envelope budgets",
      "Track cash flow and net worth",
      "Set SMART financial goals",
    ],
  },
  "banking-payments": {
    readMinutes: 10,
    objectives: [
      "Compare checking, savings, and CDs",
      "Understand Reg E and electronic transfers",
      "Use payment apps safely",
    ],
  },
  "credit-scores": {
    readMinutes: 11,
    objectives: [
      "Explain FICO factors and credit reports",
      "Dispute errors and build credit responsibly",
      "Compare APR and loan terms",
    ],
  },
  debt: {
    readMinutes: 11,
    objectives: [
      "Contrast good vs. bad debt",
      "Apply avalanche and snowball payoff methods",
      "Avoid predatory lending products",
    ],
  },
  "saving-emergency": {
    readMinutes: 10,
    objectives: [
      "Size emergency funds for your situation",
      "Choose high-yield savings and liquidity",
      "Automate saving habits",
    ],
  },
  "investing-intro": {
    readMinutes: 12,
    objectives: [
      "Explain stocks, bonds, and diversification",
      "Describe index funds and compound growth",
      "Recognize risk tolerance and time horizon",
    ],
  },
  "insurance-risk": {
    readMinutes: 9,
    objectives: [
      "Match insurance types to insurable risks",
      "Choose deductibles and limits consciously",
      "Coordinate auto, home, and umbrella coverage",
    ],
  },
  "taxes-basics": {
    readMinutes: 11,
    objectives: [
      "Navigate W-4, withholding, and filing status",
      "Identify common deductions and credits",
      "Avoid scams posing as the IRS",
    ],
  },
  "scams-planning": {
    readMinutes: 11,
    objectives: [
      "Recognize fraud and identity theft patterns",
      "Build a basic financial plan with milestones",
      "Use CFPB and FTC resources when victimized",
    ],
  },
};

const COMM_CHAPTER_META: Record<string, ChapterMeta> = {
  "communication-theory": {
    readMinutes: 10,
    objectives: [
      "Apply process and transactional communication models",
      "Analyze noise, feedback, and context",
      "Choose media richness for the message",
    ],
  },
  "active-listening": {
    readMinutes: 11,
    objectives: [
      "Practice paraphrasing and reflective responses",
      "Reduce defensive listening habits",
      "Support others in high-stress conversations",
    ],
  },
  "verbal-nonverbal": {
    readMinutes: 10,
    objectives: [
      "Align words, tone, and body language",
      "Manage pace, pauses, and vocal variety",
      "Detect incongruent nonverbal signals",
    ],
  },
  "written-email": {
    readMinutes: 10,
    objectives: [
      "Structure emails for clarity and action",
      "Apply professional tone and etiquette",
      "Avoid common workplace writing failures",
    ],
  },
  "persuasion-rhetoric": {
    readMinutes: 11,
    objectives: [
      "Use ethos, pathos, and logos ethically",
      "Frame proposals for stakeholder buy-in",
      "Refute weak arguments without personal attacks",
    ],
  },
  presentations: {
    readMinutes: 11,
    objectives: [
      "Design slides that support—not replace—speech",
      "Manage nerves and audience attention",
      "Handle Q&A confidently",
    ],
  },
  "meetings-facilitation": {
    readMinutes: 10,
    objectives: [
      "Write agendas and time-box discussions",
      "Facilitate inclusive participation",
      "Document decisions and owners",
    ],
  },
  conflict: {
    readMinutes: 11,
    objectives: [
      "De-escalate tense exchanges",
      "Apply interest-based negotiation",
      "Set boundaries and follow up in writing",
    ],
  },
  "cross-cultural": {
    readMinutes: 10,
    objectives: [
      "Recognize high- and low-context norms",
      "Avoid stereotyping while adapting style",
      "Build inclusive team communication",
    ],
  },
  "digital-professionalism": {
    readMinutes: 10,
    objectives: [
      "Manage chat, video, and async norms",
      "Protect reputation on social platforms",
      "Respond to criticism and mistakes online",
    ],
  },
};

const BIZ_CHAPTER_META: Record<string, ChapterMeta> = {
  "value-creation": {
    readMinutes: 10,
    objectives: [
      "Define value propositions and customer jobs",
      "Map stakeholders beyond shareholders",
      "Connect mission to measurable outcomes",
    ],
  },
  "structures-ownership": {
    readMinutes: 10,
    objectives: [
      "Compare sole prop, LLC, corp, and nonprofit forms",
      "Understand liability and tax basics",
      "Choose structure for stage and risk",
    ],
  },
  strategy: {
    readMinutes: 11,
    objectives: [
      "Apply Porter's five forces and SWOT",
      "Set strategic priorities with tradeoffs",
      "Align strategy to capabilities",
    ],
  },
  marketing: {
    readMinutes: 11,
    objectives: [
      "Segment markets and position offerings",
      "Explain funnel metrics and branding",
      "Ethics in advertising and data use",
    ],
  },
  "sales-crm": {
    readMinutes: 10,
    objectives: [
      "Describe B2B vs. B2C sales cycles",
      "Use CRM pipelines and forecasting",
      "Maintain customer relationships post-sale",
    ],
  },
  "operations-supply-chain": {
    readMinutes: 11,
    objectives: [
      "Explain lean, inventory, and quality basics",
      "Map supply chain risk and resilience",
      "Improve processes with KPIs",
    ],
  },
  "accounting-statements": {
    readMinutes: 12,
    objectives: [
      "Read income statement, balance sheet, cash flow",
      "Explain accrual vs. cash accounting",
      "Use ratios for basic financial analysis",
    ],
  },
  "hr-org-behavior": {
    readMinutes: 10,
    objectives: [
      "Summarize hiring, onboarding, and performance management",
      "Explain motivation and team dynamics",
      "Know workplace compliance themes",
    ],
  },
  entrepreneurship: {
    readMinutes: 11,
    objectives: [
      "Validate ideas with customers",
      "Build MVPs and measure unit economics",
      "Pitch and fund early-stage ventures",
    ],
  },
  "ethics-governance-growth": {
    readMinutes: 10,
    objectives: [
      "Apply corporate governance basics",
      "Scale without breaking culture",
      "Navigate growth vs. profitability tensions",
    ],
  },
};

const TECH_CHAPTER_META: Record<string, ChapterMeta> = {
  "devices-ecosystem": {
    readMinutes: 9,
    objectives: [
      "Compare phones, tablets, and computers",
      "Sync data across devices safely",
      "Choose hardware for your needs",
    ],
  },
  "os-interfaces": {
    readMinutes: 9,
    objectives: [
      "Navigate desktop and mobile GUIs",
      "Organize files and settings",
      "Use accessibility features",
    ],
  },
  "apps-updates": {
    readMinutes: 9,
    objectives: [
      "Install apps from trusted sources",
      "Apply security updates promptly",
      "Manage permissions and subscriptions",
    ],
  },
  "internet-browsers": {
    readMinutes: 10,
    objectives: [
      "Use browsers, search, and bookmarks effectively",
      "Recognize HTTPS and safe browsing",
      "Clear cookies and cache when needed",
    ],
  },
  "email-messaging": {
    readMinutes: 9,
    objectives: [
      "Organize inboxes and avoid phishing",
      "Choose appropriate channels for messages",
      "Archive and back up important mail",
    ],
  },
  "cloud-accounts": {
    readMinutes: 10,
    objectives: [
      "Use cloud storage and shared folders",
      "Protect accounts with MFA",
      "Understand sync vs. backup",
    ],
  },
  "privacy-security": {
    readMinutes: 11,
    objectives: [
      "Configure privacy settings on major platforms",
      "Create strong passwords and recovery plans",
      "Report scams and identity theft",
    ],
  },
  accessibility: {
    readMinutes: 8,
    objectives: [
      "Enable screen readers and magnification",
      "Use captions and assistive input",
      "Advocate for accessible design",
    ],
  },
  troubleshooting: {
    readMinutes: 9,
    objectives: [
      "Restart, update, and isolate problems",
      "Know when to seek professional help",
      "Document steps for support tickets",
    ],
  },
  "digital-citizenship": {
    readMinutes: 10,
    objectives: [
      "Practice respectful online participation",
      "Evaluate information sources critically",
      "Teach others basic digital safety",
    ],
  },
};

const META_BY_SLUG: Record<string, Record<string, ChapterMeta>> = {
  "insurance-fundamentals": INSURANCE_CHAPTER_META,
  "ai-fundamentals": AI_CHAPTER_META,
  "cybersecurity-basics": CYBER_CHAPTER_META,
  "it-fundamentals": IT_CHAPTER_META,
  "automotive-basics": AUTO_CHAPTER_META,
  "financial-literacy": FIN_CHAPTER_META,
  "communication-skills": COMM_CHAPTER_META,
  "business-foundations": BIZ_CHAPTER_META,
  "technology-for-beginners": TECH_CHAPTER_META,
};

export function getChapterMeta(
  slug: string,
  chapterId: string
): ChapterMeta | undefined {
  return META_BY_SLUG[slug]?.[chapterId];
}

export function totalReadMinutes(slug: string, chapterIds: string[]): number {
  return chapterIds.reduce((sum, id) => {
    const m = getChapterMeta(slug, id);
    return sum + (m?.readMinutes ?? 8);
  }, 0);
}

export function defaultChapterMeta(chapterTitle: string): ChapterMeta {
  return {
    readMinutes: 8,
    objectives: [
      `Explain core ideas in ${chapterTitle.toLowerCase()}`,
      "Apply concepts to real-world decisions and examples",
      "Connect this chapter to prior and following material",
    ],
  };
}
