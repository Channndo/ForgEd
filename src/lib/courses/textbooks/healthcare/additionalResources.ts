import type { TextbookResourceGroup } from "@/lib/courses/textbook/types";

/** Curated external links for Healthcare Fundamentals — not affiliated with ForgEd. */
export const HLTH_ADDITIONAL_RESOURCES: TextbookResourceGroup[] = [
  {
    title: "U.S. government & official policy",
    resources: [
      {
        source: "Centers for Medicare & Medicaid Services (CMS)",
        url: "https://www.cms.gov/",
        note: "Medicare, Medicaid, and federal payment policy",
      },
      {
        source: "Centers for Disease Control and Prevention (CDC)",
        url: "https://www.cdc.gov/",
        note: "Infection control, immunizations, and public health guidance",
      },
      {
        source: "HHS — HIPAA for professionals",
        url: "https://www.hhs.gov/hipaa/for-professionals/index.html",
        note: "Privacy, security, and breach notification rules",
      },
      {
        source: "HealthCare.gov",
        url: "https://www.healthcare.gov/",
        note: "ACA marketplace coverage and consumer insurance basics",
      },
      {
        source: "MedlinePlus (NIH)",
        url: "https://medlineplus.gov/",
        note: "Trusted patient-friendly explanations of conditions and drugs",
      },
      {
        source: "MedlinePlus en español",
        url: "https://medlineplus.gov/spanish/",
        note: "Spanish-language health information for patients and families",
      },
    ],
  },
  {
    title: "History, science & academic review",
    resources: [
      {
        source: "NLM — History of Medicine",
        url: "https://www.nlm.nih.gov/hmd/",
        note: "Timelines and collections aligned with Chapter 1",
      },
      {
        source: "Khan Academy — Health and medicine",
        url: "https://www.khanacademy.org/science/health-and-medicine",
        note: "Free video lessons on anatomy, physiology, and systems",
      },
      {
        source: "OpenStax — Anatomy and Physiology",
        url: "https://openstax.org/details/books/anatomy-and-physiology",
        note: "Free college-level textbook for body-system depth",
      },
      {
        source: "OpenStax — Biology 2e",
        url: "https://openstax.org/details/books/biology-2e",
        note: "Cell biology, genetics, and microbiology foundations",
      },
    ],
  },
  {
    title: "Careers, workforce & safety",
    resources: [
      {
        source: "BLS Occupational Outlook — Healthcare",
        url: "https://www.bls.gov/ooh/healthcare/home.htm",
        note: "Wages, growth, and entry paths by occupation",
      },
      {
        source: "O*NET OnLine — Healthcare occupations",
        url: "https://www.onetonline.org/find/all?z=0&t=0&c=29",
        note: "Skills, tasks, and training typical for healthcare roles",
      },
      {
        source: "HRSA — Health workforce",
        url: "https://www.hrsa.gov/health-workforce",
        note: "Shortage areas, training programs, and rural health",
      },
      {
        source: "AHRQ — Patient safety",
        url: "https://www.ahrq.gov/patient-safety/index.html",
        note: "Evidence-based safety culture and quality tools",
      },
      {
        source: "The Joint Commission",
        url: "https://www.jointcommission.org/",
        note: "Hospital accreditation and national patient safety goals",
      },
      {
        source: "OSHA — Healthcare worker safety",
        url: "https://www.osha.gov/healthcare",
        note: "Workplace hazards, bloodborne pathogens, and ergonomics",
      },
    ],
  },
  {
    title: "Crisis support & global health",
    resources: [
      {
        source: "988 Suicide & Crisis Lifeline",
        url: "https://988lifeline.org/",
        note: "U.S. call, text, or chat — aligns with mental health chapter",
      },
      {
        source: "SAMHSA — Treatment locator",
        url: "https://findtreatment.samhsa.gov/",
        note: "Substance use and mental health service search",
      },
      {
        source: "World Health Organization — Health topics",
        url: "https://www.who.int/health-topics",
        note: "Global disease burden, equity, and WHO guidance",
      },
      {
        source: "CDC TRAIN",
        url: "https://www.train.org/",
        note: "Free public health and preparedness courses for professionals",
      },
    ],
  },
];
