import { chapter, section } from "@/lib/courses/textbook/factory";

export const HLTH_CH07 = chapter(
  "ethics-hipaa",
  7,
  "Ethics and HIPAA",
  [
    section(
      "ethics-hipaa-s1",
      "7.1 Professional ethics: beneficence, autonomy, justice, nonmaleficence",
      [
        "Bioethics frameworks guide dilemmas technology cannot solve alone. Beneficence promotes patient welfare; nonmaleficence avoids harm; autonomy respects competent decision-making; justice demands fair allocation of scarce resources.",
        "Conflicts arise: adolescent privacy vs parental notification, ICU beds during surges, experimental therapy access. Ethics committees consult on withdrawal of life support, organ donation, and research participation.",
        "Codes of ethics from nursing, medical, and health administration associations set expectations. Employers add compliance policies; law sets floors, not ceilings.",
      ],
      {
        bulletPoints: [
          "Beneficence — act in the patient’s best interest",
          "Autonomy — valid consent and refusal when competent",
          "Nonmaleficence — primum non nocere; risk–benefit balance",
          "Justice — fair distribution of resources and access",
          "Ethics consult — hospital committee for complex cases",
        ],
      }
    ),
    section(
      "ethics-hipaa-s2",
      "7.2 HIPAA Privacy Rule: PHI, minimum necessary, patient rights",
      [
        "The Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule regulates protected health information (PHI)—identifiers linked to health data. Covered entities (most providers, plans, clearinghouses) and many business associates must safeguard PHI.",
        "Uses and disclosures require permission or a permitted purpose (treatment, payment, health care operations). Minimum necessary limits what staff access. Patients may request records, amend certain entries, and receive accounting of disclosures.",
        "Casual violations—discussing a celebrity in the elevator, posting patient photos on social media—bring discipline and OCR investigations. Workforce training is annual in most organizations.",
      ],
      {
        bulletPoints: [
          "PHI — names, dates, IDs, photos, locations, account numbers + health data",
          "Treatment / payment / operations — core permitted uses without extra authorization",
          "Minimum necessary — limit access to job role",
          "Patient rights — access, amendment, restriction requests (some limits)",
          "Business associate agreements — vendors handling PHI must contract safeguards",
        ],
        citations: [
          {
            source: "HHS — HIPAA for Professionals",
            url: "https://www.hhs.gov/hipaa/for-professionals/index.html",
            note: "Official Privacy and Security Rule summaries",
          },
        ],
      }
    ),
    section(
      "ethics-hipaa-s3",
      "7.3 Security Rule, breaches, and cyber hygiene",
      [
        "The HIPAA Security Rule requires administrative, physical, and technical safeguards for electronic PHI (ePHI). Risk analysis, access controls, encryption where appropriate, audit logs, and workforce sanctions are expected.",
        "A breach is impermissible use or disclosure compromising security or privacy. Breach notification to individuals, HHS, and sometimes media depends on scale and risk assessment. Ransomware attacks on hospitals demonstrate operational and ethical stakes.",
        "Staff use strong authentication, avoid shared passwords, report phishing, and lock workstations. Mobile devices and texting patient info require approved platforms—not personal SMS.",
      ],
      {
        bulletPoints: [
          "ePHI — electronic protected health information",
          "Risk analysis — identify threats; implement mitigations",
          "Breach notification — timelines and OCR reporting thresholds",
          "Phishing — leading cause of healthcare data incidents",
          "Approved messaging — secure apps for patient communication",
        ],
      }
    ),
    section(
      "ethics-hipaa-s4",
      "7.4 Informed consent, assent, and surrogate decision-making",
      [
        "Informed consent requires disclosure of purpose, risks, benefits, and alternatives in language the patient understands. Capacity is decision-specific—a delirious patient may still choose food. Documentation captures the conversation, not only the form signature.",
        "Minors generally need parental permission with exceptions (emancipation, reproductive care statutes vary by state). Assent involves children in developmentally appropriate ways.",
        "Advance directives (living will, durable power of attorney for health care) guide surrogates when patients lose capacity. POLST/MOLST forms translate goals into medical orders in some states.",
      ],
      {
        bulletPoints: [
          "Capacity — understand, appreciate, reason, communicate choice",
          "Surrogate — default hierarchy when patient lacks capacity (state law)",
          "Advance directive — written wishes before incapacity",
          "POLST/MOLST — portable medical orders for seriously ill patients",
          "Refusal — competent adults may refuse even life-saving treatment",
        ],
      }
    ),
    section(
      "ethics-hipaa-s5",
      "7.5 Bias, equity, and vulnerable populations",
      [
        "Structural racism and bias affect triage, pain treatment, and maternal outcomes. Implicit bias training is insufficient without system fixes—diverse hiring, community partnerships, and stratified quality metrics.",
        "Vulnerable groups include incarcerated patients, homeless individuals, immigrants fearful of deportation, and people with disabilities. Privacy, interpreter access, and reasonable accommodations are legal and ethical duties under ADA and Section 1557.",
        "Research ethics (IRB, Belmont Report principles) protect participants in trials. General education learners should recognize exploitation history (Tuskegee) as context for modern oversight.",
      ],
      {
        bulletPoints: [
          "Disparate outcomes — measure and address by race, language, disability",
          "Language access — qualified interpreters; vital document translation",
          "ADA — facility and communication accommodations",
          "Belmont Report — respect for persons, beneficence, justice in research",
          "Trauma-informed care — recognizes ACEs and behavioral health links",
        ],
        citations: [
          {
            source: "HHS Office for Civil Rights — Section 1557",
            url: "https://www.hhs.gov/civil-rights/for-individuals/section-1557/index.html",
            note: "Nondiscrimination in health programs and activities",
          },
        ],
      }
    ),
  ],
  {
    subtitle: "Bioethics, HIPAA privacy and security, consent, and equity obligations",
    learningObjectives: [
      "Apply four-principle bioethics to common clinical dilemmas.",
      "Explain PHI, permitted uses, and patient rights under HIPAA.",
      "Describe breach notification and basic security safeguards.",
      "Differentiate consent, capacity, and advance planning documents.",
    ],
    keyConcepts: ["PHI", "Minimum necessary", "Breach notification", "Advance directive", "Health disparities"],
    realWorldRelevance:
      "Every role touches PHI—registration, billing, IT, transport. Ethics and law are operational, not abstract.",
  }
);
