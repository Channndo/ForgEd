import { chapter, section } from "@/lib/courses/textbook/factory";

export const HLTH_CH02 = chapter(
  "patient-care",
  2,
  "Patient Care Basics",
  [
    section(
      "patient-care-s1",
      "2.1 Person-centered care and professional boundaries",
      [
        "Patient care begins with respect for autonomy, dignity, and cultural context. Person-centered care asks what matters to the patient—not only what is the matter with the patient. Preferences on language, family involvement, spiritual needs, and goals of care shape acceptable plans.",
        "Professional boundaries protect both parties. Clinicians avoid dual relationships, inappropriate self-disclosure, and financial conflicts that undermine trust. Students and new hires learn to escalate concerns about abuse, neglect, or trafficking through facility protocols and mandatory reporting laws.",
        "General education cannot teach bedside procedures, but it can teach you to recognize that every interaction—greeting, rooming, discharge instructions—is part of therapeutic outcomes.",
      ],
      {
        bulletPoints: [
          "Autonomy — informed choices within clinical limits",
          "Dignity — privacy, modesty, preferred names and pronouns",
          "Cultural humility — ask; do not assume literacy or beliefs",
          "Boundaries — maintain professionalism; report abuse per policy",
          "Goals of care — align treatment with patient priorities",
        ],
      }
    ),
    section(
      "patient-care-s2",
      "2.2 Communication skills that reduce harm",
      [
        "Miscommunication causes preventable harm. Teach-back asks patients to explain instructions in their own words—critical for medication changes and wound care. Closed-loop communication confirms orders heard correctly. SBAR (Situation, Background, Assessment, Recommendation) structures handoffs between nurses, physicians, and EMS.",
        "Health literacy is not intelligence. Plain language, teach-back, and translated materials improve adherence. Document interpreter use when family members should not be the sole interpreter for clinical consent.",
        "Difficult conversations—serious news, goals-of-care shifts, complaints—benefit from preparation, private space, and empathy without false reassurance. Escalate to supervisors when safety or legal issues arise.",
      ],
      {
        bulletPoints: [
          "Teach-back — confirm understanding of instructions",
          "SBAR — structured handoff format",
          "Plain language — avoid jargon with patients",
          "Qualified interpreters — not children for consent discussions",
          "Escalation — chain of command for safety or ethics concerns",
        ],
      }
    ),
    section(
      "patient-care-s3",
      "2.3 Vital signs and the nursing process (survey level)",
      [
        "Vital signs—temperature, pulse, respiration, blood pressure, pain score, oxygen saturation—are objective surveillance data. Trends matter more than a single reading: rising heart rate with falling blood pressure suggests shock until proven otherwise.",
        "The nursing process (assess, diagnose, plan, implement, evaluate) is a systematic way to translate observations into action. Licensed clinicians assign nursing diagnoses and interventions; unlicensed roles support monitoring and reporting changes promptly.",
        "Early warning scores in hospitals aggregate vitals to trigger rapid response teams. As a learner, your job is to notice change, clarify uncertainty, and communicate without delay—not to interpret every arrhythmia independently.",
      ],
      {
        bulletPoints: [
          "Temperature — fever patterns suggest infection or inflammation",
          "Pulse / BP — perfusion and cardiovascular status",
          "Respirations / SpO₂ — oxygenation and respiratory distress",
          "Pain — fifth vital sign; assess location, intensity, effect on function",
          "Trends — compare to baseline; report abnormal trajectories",
        ],
      }
    ),
    section(
      "patient-care-s4",
      "2.4 Infection prevention: standard and transmission-based precautions",
      [
        "Health care–associated infections (HAIs) lengthen stays, raise cost, and kill vulnerable patients. Standard precautions treat all blood and body fluids as potentially infectious: hand hygiene, gloves when contact is expected, safe injection practices, and environmental cleaning.",
        "Transmission-based precautions add barriers for known or suspected pathogens—contact (MRSA, C. difficile), droplet (influenza, pertussis), airborne (tuberculosis, measles). Isolation signage and PPE compliance protect staff, visitors, and other patients.",
        "Antibiotic stewardship fights resistance by ensuring antibiotics are necessary, narrow-spectrum when possible, and stopped when inappropriate. Patients and families should complete prescribed courses and not demand antibiotics for viral illnesses.",
      ],
      {
        bulletPoints: [
          "Hand hygiene — before/after patient contact; alcohol gel vs soap per policy",
          "Standard precautions — gloves, gowns, eye protection as indicated",
          "Contact / droplet / airborne — additional PPE and room requirements",
          "Injection safety — single-dose vials; sharps disposal",
          "Stewardship — appropriate antibiotic use slows resistance",
        ],
        citations: [
          {
            source: "CDC — Infection Control in Healthcare",
            url: "https://www.cdc.gov/healthcare-associated-infections/",
            note: "Core guidance on HAIs and precaution categories",
          },
        ],
      }
    ),
    section(
      "patient-care-s5",
      "2.5 Care plans, orders, and documentation fundamentals",
      [
        "A care plan links problems, goals, and interventions. Orders—medications, labs, diets, activity levels—must be clear, timely, and within prescriber authority. Verbal orders, where permitted, require read-back documentation and timely signature per policy.",
        "Electronic health records (EHRs) create audit trails. Nursing notes, flow sheets, and interdisciplinary entries should be contemporaneous, factual, and free of judgmental language. Late or copied-forward documentation weakens legal defensibility and continuity.",
        "Discharge planning starts at admission: home support, equipment, follow-up appointments, and medication reconciliation reduce readmissions. Patients should leave with written instructions and a contact for questions.",
      ],
      {
        bulletPoints: [
          "Care plan — problems, goals, interventions, evaluation",
          "Orders — legible, complete, within scope; read-back for verbal orders",
          "EHR — contemporaneous, objective, attributable entries",
          "Medication reconciliation — compare home vs hospital list at transitions",
          "Discharge — appointments, meds, red-flag symptoms, follow-up contact",
        ],
      }
    ),
  ],
  {
    subtitle: "Communication, surveillance, infection control, and safe documentation",
    learningObjectives: [
      "Apply teach-back and structured handoff concepts to patient interactions.",
      "Interpret vital signs as trends requiring escalation when abnormal.",
      "Differentiate standard versus transmission-based infection precautions.",
      "Explain how care plans and orders translate into documented actions.",
    ],
    keyConcepts: [
      "Person-centered care",
      "SBAR",
      "Health literacy",
      "Standard precautions",
      "Medication reconciliation",
    ],
    realWorldRelevance:
      "Front-line roles succeed when communication and observation are disciplined—before any advanced certification.",
  }
);
