import { chapter, section } from "@/lib/courses/textbook/factory";

export const HLTH_CH04 = chapter(
  "billing-coding",
  4,
  "Billing and Coding Intro",
  [
    section(
      "billing-coding-s1",
      "4.1 The revenue cycle: from registration to payment",
      [
        "Revenue cycle management (RCM) is the financial nervous system of healthcare. It begins at scheduling and registration—accurate demographics and insurance verification prevent denials. Clinical documentation supports medical necessity; coding translates services into billable language; claims transmit to payers; remittances and patient statements close the loop.",
        "Each break costs time: wrong subscriber ID, missing authorization, incomplete operative note, or mismatched diagnosis/procedure pairing. Hospitals employ certified coders, billing specialists, and denials teams; small practices may outsource RCM entirely.",
        "Patients experience RCM as explanations of benefits (EOBs), copays, and balance bills. Transparency rules increasingly require good-faith estimates for scheduled services.",
      ],
      {
        bulletPoints: [
          "Front end — eligibility, authorization, registration accuracy",
          "Mid cycle — charge capture, coding, claim scrubbing",
          "Back end — payment posting, denials, appeals, patient collections",
          "Denial — payer rejection; often fixable with documentation or coding correction",
          "EOB — payer explanation; not the same as a physician bill",
        ],
      }
    ),
    section(
      "billing-coding-s2",
      "4.2 Diagnosis coding with ICD-10-CM",
      [
        "ICD-10-CM (International Classification of Diseases, 10th Revision, Clinical Modification) codes describe diagnoses, symptoms, and social determinants entries where documented. U.S. claims require specific codes—often to the highest supported specificity (e.g., laterality, encounter type).",
        "Clinical documentation drives coding. A chart saying “diabetes” is insufficient if complications exist; coders assign E11.9 only when supported. Present on admission (POA) indicators affect hospital quality programs for certain conditions.",
        "General education learners should know coders do not invent diagnoses—they query providers when documentation is vague. Improved notes reduce revenue leakage and audit risk.",
      ],
      {
        bulletPoints: [
          "ICD-10-CM — diagnosis and reason-for-visit coding",
          "Specificity — laterality, acuity, complication codes when documented",
          "POA — hospital quality reporting for hospital-acquired conditions",
          "Query process — coder asks provider to clarify incomplete notes",
          "Z codes — factors influencing health status (screening, history, SDOH)",
        ],
        citations: [
          {
            source: "CMS — ICD-10 overview",
            url: "https://www.cms.gov/medicare/coding-billing/icd-10-codes",
            note: "Official U.S. diagnosis coding resources and updates",
          },
        ],
      }
    ),
    section(
      "billing-coding-s3",
      "4.3 Procedure coding: CPT, HCPCS, and modifiers",
      [
        "Physicians and outpatient facilities report procedures with CPT (Current Procedural Terminology) codes maintained by the AMA. Medicare and Medicaid also use HCPCS Level II for supplies, drugs, and ambulance services. Modifiers explain circumstances (-25 significant E/M with procedure, -59 distinct service, telehealth modifiers).",
        "Evaluation and management (E/M) codes level office visits by complexity or time—history, exam, medical decision-making, or total time on date of service per current guidelines. Surgical codes include global periods bundling follow-up care.",
        "Facility fees (hospital outpatient) differ from professional fees (physician). Patients may receive two bills for one encounter.",
      ],
      {
        bulletPoints: [
          "CPT — procedure and E/M codes for professional services",
          "HCPCS Level II — drugs, supplies, ambulance, some preventive services",
          "Modifiers — adjust payment without changing core procedure code",
          "E/M leveling — office visit complexity or time-based selection",
          "Global surgical package — follow-up days included in surgical code",
        ],
      }
    ),
    section(
      "billing-coding-s4",
      "4.4 Claims, remittances, denials, and patient responsibility",
      [
        "Professional claims (CMS-1500) and institutional claims (UB-04) transmit electronically via clearinghouses. Payers adjudicate against contract rates, not chargemaster prices. Remittance advice (835) explains allowed amount, patient responsibility, and denial codes.",
        "Common denials: eligibility, authorization, duplicate claim, bundling edits, medical necessity, coding mismatch. Appeals require timely submission and supporting documentation. No Surprises Act protections limit certain out-of-network balance bills in emergency and facility settings.",
        "High-deductible plans shift more cost to patients. Financial counseling and charity policies are part of ethical access—not only billing tactics.",
      ],
      {
        bulletPoints: [
          "837/835 — electronic claim and remittance standards",
          "Allowed amount — contracted rate; write-off of difference from charge",
          "CO, PR, OA — adjustment group codes on remittances",
          "Prior authorization — payer approval before service for many plans",
          "Appeals — deadlines and medical-necessity letters matter",
        ],
        citations: [
          {
            source: "HHS — No Surprises Act",
            url: "https://www.cms.gov/nosurprises",
            note: "Federal consumer protections on surprise medical bills",
          },
        ],
      }
    ),
    section(
      "billing-coding-s5",
      "4.5 Compliance: fraud, waste, abuse, and audits",
      [
        "Federal False Claims Act liability attaches to knowingly billing for services not rendered, upcoding, unbundling, or kickback arrangements. Stark Law and Anti-Kickback Statute regulate physician–facility financial relationships. HIPAA privacy violations are separate but equally serious.",
        "Routine compliance programs train staff on documentation integrity, gift policies, and whistleblower protections. Audits (RAC, MAC, commercial payer) recoup overpayments when records do not support codes billed.",
        "Ethical coding matches documentation—never maximize revenue by stretching codes. Career coders pursue AAPC (CPC) or AHIMA (CCS) credentials after dedicated coursework; this chapter is orientation only.",
      ],
      {
        bulletPoints: [
          "Upcoding — billing higher level than supported; illegal if intentional",
          "Unbundling — splitting procedures improperly to increase payment",
          "Kickbacks — inducements for referrals; Anti-Kickback Statute",
          "Documentation integrity — if it was not documented, it was not done",
          "Certifications — CPC/CCS require formal training beyond this survey",
        ],
      }
    ),
  ],
  {
    subtitle: "Revenue cycle, ICD-10-CM, CPT/HCPCS, claims, and compliance literacy",
    learningObjectives: [
      "Trace the revenue cycle from registration through payment.",
      "Explain how clinical documentation drives ICD-10-CM and CPT coding.",
      "Interpret basic denial and patient-responsibility concepts.",
      "Recognize fraud, waste, and abuse risks in billing practices.",
    ],
    keyConcepts: ["RCM", "Medical necessity", "ICD-10-CM", "CPT modifiers", "False Claims Act"],
    realWorldRelevance:
      "Clinical and administrative careers intersect at the charge master—accurate charts protect patients and payroll.",
  }
);
