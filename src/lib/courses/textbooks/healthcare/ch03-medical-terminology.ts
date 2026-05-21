import { chapter, section } from "@/lib/courses/textbook/factory";

export const HLTH_CH03 = chapter(
  "medical-terminology",
  3,
  "Medical Terminology",
  [
    section(
      "medical-terminology-s1",
      "3.1 Building words: prefixes, roots, and suffixes",
      [
        "Medical language is largely Greek and Latin in origin, built from combinable parts. A prefix modifies meaning (hyper- = excessive, hypo- = deficient). A root names structure or concept (cardi = heart, neur = nerve). A suffix often indicates procedure (-ectomy = removal, -scopy = visual exam) or condition (-itis = inflammation, -osis = condition).",
        "Example: gastroenterology — gastr/o (stomach) + enter/o (intestine) + -logy (study of). Breaking unknown terms into parts lets you guess meaning before memorizing every word.",
        "Pronunciation matters for safety. Similar-sounding drugs and terms (hypo vs hyper, ileum vs ilium) cause errors. Say unfamiliar words aloud when learning; verify with instructors or references.",
      ],
      {
        bulletPoints: [
          "Prefix — placed before root (pre-, post-, anti-, hyper-, hypo-)",
          "Root — core meaning (derm, oste, hemat, pulmon)",
          "Suffix — often procedure or pathology (-itis, -ectomy, -emia)",
          "Combining vowel — usually o (cardi/o + logy)",
          "Decoding — split terms before memorizing whole words",
        ],
      }
    ),
    section(
      "medical-terminology-s2",
      "3.2 Anatomical orientation and body planes",
      [
        "Clinicians describe location precisely. Anterior (ventral) is front; posterior (dorsal) is back. Medial is toward midline; lateral is away. Proximal is closer to trunk; distal is farther. Superior/inferior and cranial/caudal orient in space.",
        "Planes: sagittal divides left/right; coronal (frontal) divides front/back; transverse (horizontal) divides upper/lower. These terms appear in imaging reports, operative notes, and wound descriptions.",
        "Quadrants abbreviate abdominal exams: RUQ, LUQ, RLQ, LLQ. Consistent language prevents wrong-site procedures and misread orders.",
      ],
      {
        bulletPoints: [
          "Anterior / posterior — front and back of body",
          "Medial / lateral — toward or away from midline",
          "Proximal / distal — toward or away from point of attachment",
          "Sagittal / coronal / transverse — standard imaging and surgical planes",
          "Abdominal quadrants — localize pain and masses quickly",
        ],
      }
    ),
    section(
      "medical-terminology-s3",
      "3.3 Major body systems: roots you will see daily",
      [
        "Cardiovascular: cardi/o, vas/o, arteri/o, ven/o, thromb/o. Respiratory: pulmon/o, pneum/o, bronch/o, alveol/o. Gastrointestinal: gastr/o, hepat/o, enter/o, col/o. Musculoskeletal: oste/o, arthr/o, my/o. Nervous: neur/o, encephal/o. Endocrine: endocrin/o, thyroid/o, gluc/o. Genitourinary: ren/o, nephr/o, cyst/o. Integumentary: dermat/o. Immune/hematology: immun/o, lymph/o, hemat/o.",
        "Symptoms use suffixes: -algia (pain), -dynia (pain), -emia (blood condition), -uria (urine), -pnea (breathing). Pathology reports stack roots: adenocarcinoma — gland + cancer type.",
        "Flashcards help, but chart reading is the real test. Highlight roots in discharge summaries until pattern recognition becomes automatic.",
      ],
      {
        bulletPoints: [
          "Cardio / pulmon / GI — high-frequency inpatient and clinic terms",
          "Neuro / psych — CNS, cognition, mental health vocabulary",
          "MSK — fractures, arthritis, rehab documentation",
          "GU / reproductive — urology, OB terminology distinct",
          "Oncology — -carcinoma, -sarcoma, staging abbreviations in reports",
        ],
      }
    ),
    section(
      "medical-terminology-s4",
      "3.4 Abbreviations: efficiency versus the Joint Commission “Do Not Use” list",
      [
        "Abbreviations speed documentation but cause fatal confusion. The Joint Commission and many hospitals prohibit or discourage certain abbreviations (e.g., U for unit mistaken for 0, µg vs mg, q.d. misread). Institutions publish approved abbreviation lists.",
        "Latin apothecary abbreviations (po, prn, bid, tid) appear on prescriptions; e-prescribing reduces ambiguity but does not eliminate human entry errors. Never guess an unclear abbreviation—clarify with the prescriber or pharmacist.",
        "Diagnostic abbreviations (MI, CVA, CHF, COPD, DVT, PE) dominate charts. Learn standard expansions and avoid creating novel shorthand that others cannot decode.",
      ],
      {
        bulletPoints: [
          "Do Not Use list — institution-mandated banned abbreviations",
          "Medication units — never confuse mg, mcg, mL, units",
          "q.d. / q.o.d. — error-prone; write in plain language when allowed",
          "Diagnostic shorthands — MI, CVA, CHF—know full terms",
          "Clarify — when in doubt, ask before acting",
        ],
        citations: [
          {
            source: "The Joint Commission — Do Not Use List",
            url: "https://www.jointcommission.org/resources/for-health-care-professionals/patient-safety/national-patient-safety-goals/",
            note: "Patient safety goals include communication standards affecting abbreviations",
          },
        ],
      }
    ),
    section(
      "medical-terminology-s5",
      "3.5 Reading orders, labs, and imaging reports",
      [
        "A complete medication order includes drug, dose, route, frequency, indication when required, and duration. Route examples: PO (by mouth), IV (intravenous), IM (intramuscular), topical, inhaled. Lab reports list analyte, value, reference range, and flags (H/L).",
        "CBC measures blood cells; BMP/CMP assess electrolytes and kidney function; A1c reflects long-term glucose control; lipid panels assess cardiovascular risk. Imaging reports state modality (X-ray, CT, MRI, ultrasound), findings, and impression—often in dense terminology.",
        "Practice: take a de-identified discharge summary and underline every root. Translate the impression section into plain language a family member could understand. That skill transfers to patient education and billing documentation.",
      ],
      {
        bulletPoints: [
          "Medication order elements — drug, dose, route, frequency, duration",
          "Common labs — CBC, BMP, CMP, A1c, lipids, UA",
          "Imaging — modality, findings, impression; compare priors when relevant",
          "Reference ranges — vary by lab; trend patient values over time",
          "Plain-language translation — bridge clinical and patient understanding",
        ],
      }
    ),
  ],
  {
    subtitle: "Word parts, orientation, systems vocabulary, and safe abbreviation habits",
    learningObjectives: [
      "Decode unfamiliar terms using prefixes, roots, and suffixes.",
      "Use standard anatomical terms for location and planes.",
      "Recognize high-frequency system roots in charts and orders.",
      "Apply abbreviation safety rules and read basic lab/imaging reports.",
    ],
    keyConcepts: ["Combining forms", "Anatomical planes", "Do Not Use list", "Medication routes", "Lab panels"],
    realWorldRelevance:
      "Revenue cycle, scheduling, and clinical support staff all read the same charts—terminology errors propagate into claims and safety events.",
  }
);
