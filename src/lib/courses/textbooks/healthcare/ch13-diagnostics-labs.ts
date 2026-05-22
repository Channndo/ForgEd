import { chapter, section } from "@/lib/courses/textbook/factory";

export const HLTH_CH10 = chapter(
  "diagnostics-labs",
  10,
  "Diagnostic Testing and Laboratory Literacy",
  [
    section(
      "diagnostics-labs-s1",
      "10.1 How clinicians think about tests: rule in, rule out, monitor",
      [
        "Diagnostic tests are not truth machines—they change probability. A sensitive test misses few cases (good screen); a specific test has few false positives (good confirmation). Pretest probability matters: a troponin in a healthy 22-year-old with chest wall tenderness means something different than the same value in a diabetic smoker with crushing pain.",
        "Screening applies tests to asymptomatic people (mammography, colonoscopy, lipid panels) under evidence-based rules. Diagnostic testing answers a clinical question in a symptomatic patient. Monitoring tracks known disease (A1c, INR on warfarin). Mixing these purposes causes harm—treating incidental findings that would never have hurt the patient.",
        "Overuse drives cost, anxiety, and cascades: a mild CT finding leads to biopsy, infection, and debt. Choosing Wisely campaigns urge clinicians to question low-value orders; patients can ask, \"How will this result change my treatment?\"",
      ],
      {
        bulletPoints: [
          "Sensitivity — catches disease; few false negatives",
          "Specificity — rules out disease; few false positives",
          "Pretest probability — context before interpreting results",
          "Screen vs diagnose vs monitor — different ethical and statistical frames",
          "Cascade harm — incidental findings prompting unnecessary procedures",
        ],
      }
    ),
    section(
      "diagnostics-labs-s2",
      "10.2 Laboratory basics: specimens, reference ranges, and critical values",
      [
        "Labs analyze blood, urine, body fluids, and tissue. Specimen collection errors—wrong tube, hemolyzed sample, delayed transport—produce bad data. Fasting glucose and lipid panels require patient preparation; label mismatches are a serious patient-safety event.",
        "Reference intervals reflect population norms, not individual baselines. A creatinine \"within normal limits\" may still signal kidney injury in a muscular athlete or frail elder. Trending the same test over time often beats a single snapshot.",
        "Critical (panic) values—extreme potassium, glucose, INR—trigger immediate clinician notification protocols. Never assume the doctor already knows; closed-loop communication documents who was called and when.",
      ],
      {
        bulletPoints: [
          "Specimen integrity — correct tube, volume, timing, labeling",
          "Reference range — population-based; compare to patient baseline",
          "Critical value — life-threatening result requiring immediate action",
          "Closed-loop call — read-back notification documented",
          "Point-of-care testing — bedside glucose, INR; CLIA-waived rules",
        ],
      }
    ),
    section(
      "diagnostics-labs-s3",
      "10.3 Common panels learners should decode for patients",
      [
        "Complete blood count (CBC) reports white cells (infection, immune suppression), hemoglobin/hematocrit (anemia), and platelets (clotting risk). Basic metabolic panel (BMP) covers electrolytes, kidney function (creatinine, BUN), and glucose. Liver enzymes (AST, ALT, bilirubin) flag hepatocellular injury or cholestasis.",
        "Lipid panel components—LDL, HDL, triglycerides—feed cardiovascular risk discussions. HbA1c and fasting glucose diagnose and monitor diabetes. Thyroid-stimulating hormone (TSH) screens hypo- and hyperthyroidism with reflex free T4 when abnormal.",
        "When patients ask what a result \"means,\" translate in plain language, avoid catastrophizing borderline values, and schedule follow-up for the ordering clinician to interpret in full context.",
      ],
      {
        bulletPoints: [
          "CBC — WBC, Hgb/Hct, platelets",
          "BMP/CMP — electrolytes, kidney, glucose, liver (CMP adds liver)",
          "Lipid panel — LDL primary target in many guidelines",
          "A1c — 3-month glucose average",
          "TSH — thyroid screen; reflex testing per lab protocol",
        ],
      }
    ),
    section(
      "diagnostics-labs-s4",
      "10.4 Imaging literacy: X-ray, ultrasound, CT, MRI",
      [
        "Plain radiographs excel at bones, chest congestion, and foreign bodies—fast, lower radiation than CT. Ultrasound uses sound waves—no ionizing radiation—ideal for pregnancy, gallstones, DVT protocols, and bedside procedures.",
        "CT provides cross-sectional detail quickly—trauma, pulmonary embolism, appendicitis—but delivers higher radiation dose; repeat scans accumulate risk, especially in children. MRI uses magnetic fields—superior soft tissue contrast for brain, spine, joints—yet contraindicated with some implants and claustrophobia limits tolerance.",
        "Contrast agents (iodinated for CT, gadolinium for MRI) require allergy and kidney function screening. Patients deserve clear prep instructions (fasting, metal removal, arrival time) to avoid cancelled slots that delay diagnosis.",
      ],
      {
        bulletPoints: [
          "X-ray — quick structural survey; radiation dose lower than CT",
          "Ultrasound — real-time; pregnancy and vascular uses",
          "CT — rapid emergency diagnosis; radiation exposure",
          "MRI — soft tissue detail; implant safety screening",
          "Contrast — allergy history; eGFR for iodinated contrast kidney risk",
        ],
      }
    ),
    section(
      "diagnostics-labs-s5",
      "10.5 Explaining results, prior authorization, and patient-facing logistics",
      [
        "Patients receive portal results before clinicians call—good for engagement, risky for misinterpretation. Scripts help: \"Your doctor ordered this to follow up on X; abnormal does not always mean serious; we will contact you if you need action before your visit.\"",
        "Prior authorization and outpatient imaging scheduling create delays. Document medical necessity in orders; staff track authorization numbers to prevent surprise bills when insurance denies coverage.",
        "Laboratory developed tests and direct-to-consumer kits blur marketing and science. Teach patients to bring outside results into the medical record rather than treating social-media biomarkers as definitive.",
      ],
      {
        bulletPoints: [
          "Open results — proactive messaging reduces panic",
          "Prior auth — payer approval before high-cost imaging",
          "Medical necessity — diagnosis-linked indication in order",
          "Surprise billing — verify network and authorization status",
          "DTC testing — clinician integration beats isolated consumer data",
        ],
        citations: [
          {
            source: "Choosing Wisely — Tests and Treatments to Question",
            url: "https://www.choosingwisely.org/",
            note: "Evidence-based list of low-value care to reduce overuse",
          },
        ],
      }
    ),
  ],
  {
    subtitle: "Test reasoning, lab panels, imaging choices, and patient communication",
    learningObjectives: [
      "Explain sensitivity, specificity, and pretest probability in plain language.",
      "Describe specimen handling, reference ranges, and critical-value workflows.",
      "Summarize common CBC, metabolic, lipid, and thyroid tests for patient education.",
      "Compare major imaging modalities and contrast-safety considerations.",
    ],
    keyConcepts: [
      "Sensitivity vs specificity",
      "Critical lab value",
      "BMP/CBC",
      "CT vs MRI tradeoffs",
      "Choosing Wisely",
    ],
    realWorldRelevance:
      "Schedulers, MAs, and patient navigators field daily questions about fasting labs and imaging prep—accurate answers prevent wasted visits.",
  }
);
