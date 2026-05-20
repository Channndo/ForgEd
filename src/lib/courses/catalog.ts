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
  law: {
    label: "Law",
    description: "Legal systems, business law, and constitutional literacy",
    color: "from-[var(--silver)]/12 to-[var(--gold)]/8",
  },
  engineering: {
    label: "Engineering",
    description: "Mechanical, electrical, and civil engineering foundations",
    color: "from-[var(--gold-dark)]/14 to-white/6",
  },
  "skilled-trades": {
    label: "Skilled Trades",
    description: "HVAC, electrical, plumbing, and trade fundamentals",
    color: "from-[var(--gold)]/12 to-[var(--silver)]/6",
  },
  science: {
    label: "Science",
    description: "Foundational biology, chemistry, physics, and lab skills",
    color: "from-white/8 to-[var(--silver)]/10",
  },
  healthcare: {
    label: "Healthcare",
    description: "Clinical basics, billing, and healthcare careers",
    color: "from-[var(--gold-dark)]/12 to-[var(--gold)]/6",
  },
  creative: {
    label: "Creative",
    description: "Design, video, audio, writing, and creative careers",
    color: "from-[var(--silver)]/14 to-[var(--gold)]/8",
  },
  "personal-development": {
    label: "Personal Development",
    description: "Habits, goals, mindset, and life skills",
    color: "from-[var(--gold)]/10 to-white/5",
  },
  education: {
    label: "Education",
    description: "Teaching, tutoring, and learning science",
    color: "from-[var(--silver)]/12 to-[var(--gold)]/6",
  },
  entrepreneurship: {
    label: "Entrepreneurship",
    description: "Startups, product, finance, and go-to-market",
    color: "from-[var(--gold-dark)]/14 to-[var(--silver)]/8",
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
    { difficulty: "beginner" }
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
    ]
  ),
  textbookCourse(
    "legal-fundamentals",
    "Legal Fundamentals",
    "law",
    "Twenty-chapter textbook on legal systems, courts, civil and criminal law, property, contracts, torts, evidence, ethics, and legal careers.",
    [
      { id: "legal-systems", name: "Legal Systems" },
      { id: "courts", name: "Courts & Procedure" },
      { id: "civil-criminal", name: "Civil vs. Criminal" },
      { id: "legal-careers", name: "Legal Careers" },
    ]
  ),
  textbookCourse(
    "business-law",
    "Business Law",
    "law",
    "Twenty-chapter textbook on contracts, torts, entities, employment, IP, antitrust, compliance, bankruptcy, and business risk.",
    [
      { id: "contracts", name: "Contracts" },
      { id: "torts", name: "Torts & Liability" },
      { id: "entities", name: "Business Entities" },
      { id: "compliance", name: "Compliance" },
    ]
  ),
  textbookCourse(
    "constitutional-law",
    "Constitutional Law",
    "law",
    "Twenty-chapter textbook on constitutional structure, separation of powers, rights, criminal procedure, voting, and civic participation.",
    [
      { id: "structure", name: "Government Structure" },
      { id: "rights", name: "Constitutional Rights" },
      { id: "due-process", name: "Due Process" },
      { id: "civic", name: "Civic Participation" },
    ]
  ),
  textbookCourse(
    "contracts-law",
    "Contracts Law",
    "law",
    "Twenty-chapter textbook on contract formation, interpretation, breach, remedies, sales law, electronic contracts, and drafting.",
    [
      { id: "formation", name: "Contract Formation" },
      { id: "breach", name: "Breach & Remedies" },
      { id: "sales-ucc", name: "Sales & UCC" },
      { id: "drafting", name: "Contract Drafting" },
    ]
  ),
  textbookCourse(
    "criminal-law-fundamentals",
    "Criminal Law Fundamentals",
    "law",
    "Twenty-chapter textbook on elements of crime, defenses, sentencing, procedure, cybercrime, and the criminal justice system.",
    [
      { id: "elements", name: "Elements of Crime" },
      { id: "defenses", name: "Criminal Defenses" },
      { id: "procedure", name: "Criminal Procedure" },
      { id: "justice-system", name: "Criminal Justice" },
    ]
  ),
  textbookCourse(
    "torts-law",
    "Torts Law",
    "law",
    "Twenty-chapter textbook on intentional torts, negligence, strict liability, products liability, defamation, and tort reform.",
    [
      { id: "negligence", name: "Negligence" },
      { id: "strict-liability", name: "Strict Liability" },
      { id: "defamation", name: "Defamation & Privacy" },
      { id: "products", name: "Products Liability" },
    ]
  ),
  textbookCourse(
    "mechanical-engineering-basics",
    "Mechanical Engineering Basics",
    "engineering",
    "Fifteen-chapter textbook on statics, dynamics, materials, thermodynamics, fluids, heat transfer, CAD, vibrations, and design.",
    [
      { id: "statics", name: "Statics" },
      { id: "materials", name: "Materials" },
      { id: "thermo", name: "Thermodynamics" },
      { id: "design", name: "Design Process" },
    ]
  ),
  textbookCourse(
    "electrical-engineering-basics",
    "Electrical Engineering Basics",
    "engineering",
    "Fifteen-chapter textbook on DC/AC circuits, electronics, embedded systems, power, renewables, controls, and electrical safety.",
    [
      { id: "circuits", name: "Circuit Analysis" },
      { id: "electronics", name: "Electronics" },
      { id: "power", name: "Power Systems" },
      { id: "safety", name: "Electrical Safety" },
    ]
  ),
  textbookCourse(
    "civil-engineering-basics",
    "Civil Engineering Basics",
    "engineering",
    "Fifteen-chapter textbook on structures, geotechnical, foundations, water, transportation, urban planning, and sustainable infrastructure.",
    [
      { id: "structures", name: "Structures" },
      { id: "geotech", name: "Geotechnical" },
      { id: "water", name: "Water Resources" },
      { id: "transport", name: "Transportation" },
    ]
  ),
  textbookCourse(
    "chemical-engineering-basics",
    "Chemical Engineering Basics",
    "engineering",
    "Fifteen-chapter textbook on material and energy balances, transport phenomena, reactions, separations, process control, and plant design.",
    [
      { id: "balances", name: "Material & Energy Balances" },
      { id: "transport", name: "Transport Phenomena" },
      { id: "reactions", name: "Reaction Engineering" },
      { id: "separations", name: "Separation Processes" },
    ]
  ),
  textbookCourse(
    "industrial-engineering-basics",
    "Industrial Engineering Basics",
    "engineering",
    "Fifteen-chapter textbook on operations research, lean, quality, supply chain, ergonomics, scheduling, and automation.",
    [
      { id: "or", name: "Operations Research" },
      { id: "lean", name: "Lean & Quality" },
      { id: "supply-chain", name: "Supply Chain" },
      { id: "ergonomics", name: "Ergonomics" },
    ]
  ),
  textbookCourse(
    "aerospace-engineering-basics",
    "Aerospace Engineering Basics",
    "engineering",
    "Fifteen-chapter textbook on aerodynamics, flight mechanics, propulsion, structures, avionics, orbital mechanics, and aircraft design.",
    [
      { id: "aerodynamics", name: "Aerodynamics" },
      { id: "propulsion", name: "Propulsion" },
      { id: "structures", name: "Aerospace Structures" },
      { id: "orbital", name: "Orbital Mechanics" },
    ]
  ),
  textbookCourse(
    "hvac-fundamentals",
    "HVAC Fundamentals",
    "skilled-trades",
    "Ten-chapter textbook on heating, cooling, airflow, controls, installation, maintenance, efficiency, codes, and HVAC careers.",
    [
      { id: "heating", name: "Heating Systems" },
      { id: "cooling", name: "Cooling & Refrigeration" },
      { id: "airflow", name: "Airflow" },
      { id: "hvac-service", name: "HVAC Service" },
    ]
  ),
  textbookCourse(
    "science-fundamentals",
    "Science Fundamentals",
    "science",
    "Ten-chapter textbook on the scientific method, biology, chemistry, physics, earth science, lab skills, and science careers.",
    [
      { id: "scientific-method", name: "Scientific Method" },
      { id: "biology", name: "Biology" },
      { id: "chemistry", name: "Chemistry" },
      { id: "physics", name: "Physics" },
    ]
  ),
  textbookCourse(
    "healthcare-fundamentals",
    "Healthcare Fundamentals",
    "healthcare",
    "Ten-chapter textbook on healthcare systems, patient care, terminology, billing, pharmacy, public health, and HIPAA.",
    [
      { id: "health-systems", name: "Healthcare Systems" },
      { id: "patient-care", name: "Patient Care" },
      { id: "billing", name: "Billing & Coding" },
      { id: "health-careers", name: "Healthcare Careers" },
    ]
  ),
  textbookCourse(
    "creative-media-fundamentals",
    "Creative Media Fundamentals",
    "creative",
    "Ten-chapter textbook on design, visual tools, photography, video, audio, writing, branding, and creative careers.",
    [
      { id: "design", name: "Design Principles" },
      { id: "video", name: "Video Editing" },
      { id: "audio", name: "Audio Basics" },
      { id: "portfolio", name: "Portfolios" },
    ]
  ),
  textbookCourse(
    "personal-development-fundamentals",
    "Personal Development Fundamentals",
    "personal-development",
    "Ten-chapter textbook on mindset, goals, habits, time management, resilience, career growth, and life design.",
    [
      { id: "mindset", name: "Growth Mindset" },
      { id: "goals", name: "Goal Setting" },
      { id: "habits", name: "Habits" },
      { id: "resilience", name: "Resilience" },
    ]
  ),
  textbookCourse(
    "teaching-fundamentals",
    "Teaching Fundamentals",
    "education",
    "Ten-chapter textbook on learning theory, lesson planning, classroom management, assessment, differentiation, and EdTech.",
    [
      { id: "pedagogy", name: "Learning Theory" },
      { id: "lessons", name: "Lesson Planning" },
      { id: "classroom", name: "Classroom Management" },
      { id: "assessment-ed", name: "Assessment" },
    ]
  ),
  textbookCourse(
    "entrepreneurship-fundamentals",
    "Entrepreneurship Fundamentals",
    "entrepreneurship",
    "Ten-chapter textbook on entrepreneurial mindset, validation, business models, marketing, finance, legal basics, and scaling.",
    [
      { id: "ideation", name: "Ideation" },
      { id: "models", name: "Business Models" },
      { id: "startup-finance", name: "Startup Finance" },
      { id: "scaling", name: "Scaling" },
    ]
  ),
];

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

/** All catalog courses — no featured priority */
export function getFeaturedCourses(): Course[] {
  return [...COURSES];
}

export function getCoursesByCategory(category: CourseCategory): Course[] {
  return COURSES.filter((c) => c.category === category);
}
