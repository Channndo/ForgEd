import { chapter, section } from "@/lib/courses/textbook/factory";

export const HLTH_CH09 = chapter(
  "chronic-disease",
  9,
  "Chronic Disease Management",
  [
    section(
      "chronic-disease-s1",
      "9.1 Chronic illness as a daily-life problem, not a one-time visit",
      [
        "Chronic disease is any condition lasting a year or more that requires ongoing medical attention or limits activities of daily living. Diabetes, heart failure, COPD, hypertension, chronic kidney disease, and autoimmune disorders account for most U.S. healthcare spending—and most of what patients actually live with between appointments.",
        "Acute care culture trains us to \"fix and discharge.\" Chronic care trains us to partner for years: medication titration, flare prevention, self-monitoring, and realistic goals when cure is not possible. A patient with heart failure may be medically stable yet still unable to climb stairs without rest—that functional outcome matters.",
        "Multimorbidity is the norm in older adults: three or more chronic conditions interact (diabetes worsens wound healing; steroids raise glucose). Care plans must prioritize what will help most this month, not every guideline simultaneously.",
      ],
      {
        bulletPoints: [
          "Chronic condition — persistent; needs longitudinal management",
          "Multimorbidity — overlapping diseases and medication interactions",
          "Functional status — what the patient can do, not only lab values",
          "Flare vs remission — predictable patterns; action plans for worsening",
          "Patient partnership — shared decisions on tradeoffs (side effects, cost)",
        ],
      }
    ),
    section(
      "chronic-disease-s2",
      "9.2 Diabetes and cardiometabolic risk: numbers patients can use",
      [
        "Type 2 diabetes reflects insulin resistance and declining beta-cell function—often linked to genetics, weight, inactivity, and diet. Hemoglobin A1c averages glucose over ~3 months; targets are individualized (tighter for young, healthy; looser for frail elderly with hypoglycemia risk).",
        "Hypoglycemia (shaking, sweating, confusion) from insulin or sulfonylureas is an emergency—patients need fast carbs and glucagon education for caregivers. Hyperglycemia builds slowly but drives infection risk and dehydration.",
        "Hypertension and lipid disorders are silent until they are not—stroke and myocardial infarction are downstream effects. Home blood pressure logs beat single office readings distorted by \"white-coat\" anxiety.",
      ],
      {
        bulletPoints: [
          "A1c — glycemic control marker; goal varies by patient context",
          "Hypoglycemia — <70 mg/dL; treat immediately; teach rule of 15",
          "Type 1 vs Type 2 — autoimmune insulin deficiency vs insulin resistance",
          "SMBG / CGM — self-monitoring and continuous glucose trends",
          "Cardiometabolic bundle — BP + lipids + glucose + lifestyle",
        ],
      }
    ),
    section(
      "chronic-disease-s3",
      "9.3 Heart failure and COPD: breath as the patient’s headline",
      [
        "Heart failure means the pump cannot meet perfusion needs—symptoms include short weight gain from fluid (edema), orthopnea (shortness of breath lying flat), and fatigue. Daily weights and sodium restriction are boring advice until they prevent a 3 a.m. ED visit.",
        "COPD from smoking or occupational exposure brings progressive dyspnea, cough, and exacerbations triggered by viruses or pollution. Inhaler technique errors are epidemic—watch a patient use a diskus or MDI before assuming nonadherence.",
        "Both conditions use action plans: green/yellow/red zones telling patients when to increase diuretics, start steroids/antibiotics, or call EMS. Color-coded plans on the refrigerator beat paragraphs in discharge packets no one reads.",
      ],
      {
        bulletPoints: [
          "Heart failure — fluid overload; daily weights; diuretics",
          "Ejection fraction — HFrEF vs HFpEF guides therapy classes",
          "COPD exacerbation — increased dyspnea, sputum, purulence",
          "Inhaler technique — teach-back with return demonstration",
          "Action plan zones — when to call clinic vs 911",
        ],
      }
    ),
    section(
      "chronic-disease-s4",
      "9.4 Care coordination, transitions, and the medical home",
      [
        "Care coordination closes gaps between primary care, specialists, hospitals, and home. Transitions of care—hospital to home—fail when medication lists disagree, follow-up appointments are missing, or durable equipment arrives late.",
        "Patient-centered medical home (PCMH) models emphasize access, comprehensive care, care management for high-risk patients, and quality reporting. Care managers call after discharge, reconcile meds, and surface social needs (food, transport) that block recovery.",
        "Specialists should not work in silos. A single problem list in the EHR, shared goals, and closed-loop referrals (confirmation that the patient was seen) reduce duplicate testing and conflicting advice.",
      ],
      {
        bulletPoints: [
          "Transition of care — admission, discharge, transfer handoffs",
          "Medication reconciliation — every transition; compare home vs new orders",
          "Care manager — outreach for complex patients; barrier removal",
          "Closed-loop referral — track completion; follow up on no-shows",
          "PCMH — primary care hub coordinating subspecialty and community services",
        ],
      }
    ),
    section(
      "chronic-disease-s5",
      "9.5 Self-management support and measuring what matters",
      [
        "Self-management is not dumping instructions—it is skills training: reading labels, using devices, problem-solving sick-day rules, and negotiating family roles. Diabetes self-management education (DSME) and cardiac rehab are evidence-based programs payers often cover when referred correctly.",
        "Quality metrics (HbA1c control, blood pressure control, hospital readmission rates) drive value-based contracts but can conflict with individual preferences. A hospice-eligible patient should not be penalized for choosing comfort over aggressive HbA1c lowering.",
        "Digital tools—apps, patient portals, RPM—help when literacy, language, and broadband support them. Otherwise, low-tech logs and teach-back still win.",
      ],
      {
        bulletPoints: [
          "DSME / cardiac rehab — structured education; referral timing matters",
          "Teach-back — patient explains the plan back to you",
          "Sick-day rules — when to hold meds, hydrate, seek care",
          "RPM — remote monitoring feeding nurse review queues",
          "Person-centered metrics — align measures with patient goals",
        ],
      }
    ),
  ],
  {
    subtitle: "Diabetes, heart failure, COPD, coordination, and sustained self-management",
    learningObjectives: [
      "Contrast acute episodic care with longitudinal chronic disease management.",
      "Interpret common cardiometabolic markers and symptom red flags at a survey level.",
      "Describe transition-of-care failures and care-management interventions.",
      "Explain self-management education and action-plan tools for patient empowerment.",
    ],
    keyConcepts: [
      "A1c",
      "Heart failure action plan",
      "COPD exacerbation",
      "Medication reconciliation",
      "Patient-centered medical home",
    ],
    realWorldRelevance:
      "Most healthcare jobs touch chronic patients daily—coherent coordination reduces readmissions and builds trust.",
  }
);
