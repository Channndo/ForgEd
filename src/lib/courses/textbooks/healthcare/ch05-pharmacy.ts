import { chapter, section } from "@/lib/courses/textbook/factory";

export const HLTH_CH05 = chapter(
  "pharmacy-basics",
  5,
  "Pharmacy Basics",
  [
    section(
      "pharmacy-basics-s1",
      "5.1 Pharmacology survey: classes, routes, and mechanisms",
      [
        "Drugs are classified by therapeutic use (antihypertensives, antibiotics, analgesics) and mechanism (beta-blocker, ACE inhibitor, SSRI). Routes determine absorption speed and monitoring: oral, sublingual, topical, transdermal, inhaled, intramuscular, subcutaneous, intravenous.",
        "Generic names (e.g., acetaminophen) identify the molecule; brand names (e.g., Tylenol) are marketing labels. Biosimilars approximate biologic drugs under FDA rules. Formularies—payer lists of preferred drugs—steer prescribing toward cost-effective options with prior authorization for exceptions.",
        "Pharmacists are medication experts; physicians prescribe; nurses administer per order and policy. Technicians prepare labels and inventory under pharmacist supervision. Scope varies by state.",
      ],
      {
        bulletPoints: [
          "Therapeutic class — what condition the drug treats",
          "Mechanism — how the molecule acts (receptor, enzyme, channel)",
          "Routes — PO fastest for home use; IV for acute inpatient needs",
          "Formulary — payer-preferred list; prior auth for non-preferred",
          "Generic vs brand — same active ingredient; bioequivalence for generics",
        ],
      }
    ),
    section(
      "pharmacy-basics-s2",
      "5.2 Prescriptions, e-prescribing, and pharmacy workflow",
      [
        "A legal prescription includes patient, drug, strength, dose, route, frequency, quantity, refills, prescriber signature (electronic or wet), and date. Controlled substances follow DEA schedules with stricter limits and monitoring databases (state PDMP).",
        "E-prescribing reduces handwriting errors and routes orders to retail, mail, or specialty pharmacies. Specialty drugs (biologics, oncology) often require hub services, patient assistance, and documentation of clinical criteria.",
        "Workflow: intake → clinical review (interactions, allergies, duplications) → dispensing → patient counseling → documentation. Barcode scanning at bedside (in hospitals) adds another safety layer.",
      ],
      {
        bulletPoints: [
          "Prescription elements — patient, drug, dose, route, sig, quantity, refills",
          "DEA schedules — II–V controlled substances; stricter rules for II",
          "PDMP — prescription drug monitoring program queries in many states",
          "Specialty pharmacy — high-cost drugs; prior auth and REMS programs",
          "Barcode medication administration — hospital five rights at bedside",
        ],
        citations: [
          {
            source: "FDA — Medication guides and drug safety",
            url: "https://www.fda.gov/drugs",
            note: "Labeling, recalls, and patient medication information",
          },
        ],
      }
    ),
    section(
      "pharmacy-basics-s3",
      "5.3 Medication safety and reconciliation",
      [
        "The five rights: right patient, drug, dose, route, time. High-alert medications (insulin, heparin, chemotherapy, opioids) demand double checks. Look-alike/sound-alike pairs (hydroxyzine vs hydralazine) require tall-man lettering and storage separation.",
        "Medication reconciliation compares lists at admission, transfer, and discharge—home meds, inpatient orders, and new prescriptions must align. Unintended omissions (stopped beta-blocker) cause readmissions.",
        "Adverse drug reactions range from rash to anaphylaxis. Nurses and pharmacists report events; patients should know when to call versus when to go to the ED.",
      ],
      {
        bulletPoints: [
          "Five rights — foundation of administration safety",
          "High-alert meds — independent double-check per policy",
          "LASA drugs — look-alike/sound-alike; storage and labeling controls",
          "Med reconciliation — every transition of care",
          "Anaphylaxis — airway swelling, hypotension; emergency response",
        ],
      }
    ),
    section(
      "pharmacy-basics-s4",
      "5.4 Controlled substances and diversion prevention",
      [
        "Schedule II drugs (many opioids, stimulants) have high abuse potential and stricter prescribing limits. Schedule III–V have progressively fewer restrictions. Pharmacies and hospitals maintain perpetual inventory logs; discrepancies trigger investigations.",
        "Diversion—stealing medications for personal use or sale—is a felony and patient safety catastrophe. Witness wasting partial doses, secure automated dispensing cabinets, and report suspicious behavior through compliance hotlines.",
        "Opioid stewardship balances pain control with addiction risk. Multimodal analgesia, non-opioid options, and brief durations for acute pain are standard themes in modern guidelines—not blanket refusal of opioids where indicated.",
      ],
      {
        bulletPoints: [
          "Schedule II — written/electronic rules; no refills in classic model",
          "Inventory control — chain of custody in pharmacies and ADCs",
          "Diversion — theft or misuse; mandatory reporting cultures",
          "Stewardship — appropriate opioid duration and indication",
          "Naloxone — reversal agent for opioid overdose; community access programs",
        ],
        citations: [
          {
            source: "DEA — Drug Scheduling",
            url: "https://www.dea.gov/drug-information/drug-scheduling",
            note: "Federal controlled substance classification overview",
          },
        ],
      }
    ),
    section(
      "pharmacy-basics-s5",
      "5.5 OTC products, supplements, and interactions",
      [
        "Over-the-counter (OTC) drugs are available without prescription but are not risk-free. Acetaminophen overdose damages the liver; NSAIDs raise GI bleeding and kidney risk; decongestants affect blood pressure. Patients stack OTC products unknowingly.",
        "Dietary supplements are not FDA-approved for efficacy before marketing. Herb–drug interactions (St. John’s wort with antidepressants, garlic with anticoagulants) matter. Ask patients what they take—including gummies and teas.",
        "Community pharmacists counsel on interactions, storage, and adherence devices. Use them as accessible educators when physician visits are brief.",
      ],
      {
        bulletPoints: [
          "OTC labeling — active ingredient, warnings, maximum daily dose",
          "Duplicate therapy — multiple products with same ingredient",
          "Supplements — not held to drug approval standards; interaction risk",
          "Alcohol — interacts with sedatives, acetaminophen, metronidazole",
          "Adherence aids — blister packs, reminders, synchronization programs",
        ],
      }
    ),
  ],
  {
    subtitle: "Drug classes, prescribing workflow, safety, controlled substances, and OTC literacy",
    learningObjectives: [
      "Describe major drug classes, routes, and formulary concepts.",
      "Outline prescription requirements and pharmacy dispensing workflow.",
      "Apply medication safety principles including reconciliation.",
      "Recognize controlled-substance rules and OTC interaction risks.",
    ],
    keyConcepts: ["Five rights", "Med reconciliation", "DEA schedules", "High-alert medications", "Formulary"],
    realWorldRelevance:
      "Medical assistants, nurses, and billing staff all field medication questions—pharmacy basics prevent silent errors.",
  }
);
