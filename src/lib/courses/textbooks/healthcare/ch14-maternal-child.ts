import { chapter, section } from "@/lib/courses/textbook/factory";

export const HLTH_CH13 = chapter(
  "maternal-child-health",
  13,
  "Maternal, Infant, and Child Health",
  [
    section(
      "maternal-child-s1",
      "13.1 Pregnancy as a continuum—not just delivery day",
      [
        "Maternal health spans preconception nutrition and folic acid, prenatal visits, labor and delivery, and the year after birth (the \"fourth trimester\"). Most U.S. pregnancies are healthy, yet maternal mortality remains higher than peer nations—especially among Black and Indigenous patients, where bias and access gaps compound medical risk.",
        "Prenatal care tracks blood pressure, glucose screening (gestational diabetes), fetal growth, infections (HIV, syphilis, hepatitis B), and vaccinations (Tdap, influenza, RSV where indicated). Each visit is a chance to screen for intimate partner violence, depression, and substance use without judgment.",
        "Birth settings range from hospital labor units to birth centers and planned home births with licensed midwives. Risk stratification determines appropriate site—breech presentation, prior cesarean, placenta previa belong in hospitals with surgical backup.",
      ],
      {
        bulletPoints: [
          "Prenatal cadence — first trimester intake; routine labs and anatomy ultrasound",
          "Fourth trimester — postpartum depression, hypertension, lactation support",
          "Gestational diabetes — oral glucose tolerance; nutrition and monitoring",
          "Maternal mortality disparity — quality and equity initiatives (AIM bundles)",
          "Scope of midwifery vs obstetrics — collaborative models by risk",
        ],
      }
    ),
    section(
      "maternal-child-s2",
      "13.2 Newborn care, screening, and safe sleep",
      [
        "APGAR scores at one and five minutes summarize newborn transition—they do not predict long-term IQ. Routine care includes vitamin K injection (prevents hemorrhagic disease), erythromycin eye prophylaxis where required, and hepatitis B vaccine series start per schedule.",
        "Newborn metabolic screening (heel stick) detects treatable conditions like phenylketonuria and congenital hypothyroidism before symptoms appear—missing the screen is a public health failure. Hearing screens and critical congenital heart disease pulse oximetry close other gaps.",
        "Safe sleep means alone, on the back, in a crib without soft bedding—reducing sudden unexpected infant death. Room-sharing without bed-sharing is recommended for the first months. Swaddling stops when rolling begins.",
      ],
      {
        bulletPoints: [
          "APGAR — appearance, pulse, grimace, activity, respiration at birth",
          "Newborn screen — state lab panel; timing within 24–48 hours",
          "Vitamin K / Hep B — standard prophylaxis and immunization start",
          "Safe sleep — ABC: Alone, Back, Crib",
          "Lactation support — IBCLC consultants; flange fit; supply concerns",
        ],
        citations: [
          {
            source: "AAP — Safe Sleep Recommendations",
            url: "https://www.aap.org/news-room/news-releases/aap-2022-safe-sleep-updates",
            note: "Pediatric guidance on infant sleep environment",
          },
        ],
      }
    ),
    section(
      "maternal-child-s3",
      "13.3 Early childhood development and preventive visits",
      [
        "Well-child visits map growth curves (weight, length, head circumference), developmental milestones, and caregiver concerns. Delayed speech, poor eye contact, or regression may trigger early intervention referrals—ages 0–3 programs vary by state but are federally supported through Part C IDEA.",
        "Immunization protects against measles, pertussis, pneumococcus, rotavirus, HPV, and more—community protection depends on high coverage. Vaccine hesitancy responds better to motivational interviewing than confrontation; document refusals and revisit each visit.",
        "Lead exposure, food insecurity, and unstable housing appear in pediatrics as asthma flares and attention problems. Social screening connects families to WIC, Medicaid renewal, and legal aid when indicated.",
      ],
      {
        bulletPoints: [
          "Well-child schedule — AAP periodicity; Bright Futures guidance",
          "Developmental surveillance — milestones; refer early if concern",
          "Early intervention — Part C services for qualifying delays",
          "Immunization schedule — ACIP-aligned; catch-up rules",
          "Social determinants — screen hunger, housing, utilities",
        ],
      }
    ),
    section(
      "maternal-child-s4",
      "13.4 Adolescent health: confidentiality, consent, and risk behavior",
      [
        "Adolescents need private time with clinicians—many states allow confidential reproductive and mental-health services for minors within limits. Explain upfront what must be disclosed (abuse, imminent harm) versus what stays private.",
        "STI screening, contraception counseling, and HPV vaccination prevent long-term morbidity. Nonjudgmental questions about vaping, cannabis, driving, and social media safety open honest dialogue parents may not hear at home.",
        "Eating disorders and self-harm peak in teen years; primary care is a front line. School nurses and counselors partner when releases are signed.",
      ],
      {
        bulletPoints: [
          "Confidentiality rules — state-dependent; document policies",
          "HEADSS interview — Home, Education, Activities, Drugs, Sexuality, Suicide",
          "HPV vaccine — cancer prevention; two-dose series if started young",
          "Minor consent — reproductive health statutes vary",
          "School-based health — clinics and SBHC models in some districts",
        ],
      }
    ),
    section(
      "maternal-child-s5",
      "13.5 NICU, pediatrics subspecialty, and family-centered care",
      [
        "Prematurity, congenital anomalies, and severe infection land infants in neonatal intensive care (NICU) levels I–IV by capability. Parents experience trauma watching monitors—family-centered rounds include caregivers in plan discussions when possible.",
        "Pediatric subspecialties—cardiology, oncology, neurology—coordinate through children's hospitals with child-life specialists who explain procedures developmentally. Transition programs prepare adolescents with chronic illness to adult clinics (sickle cell, cystic fibrosis, congenital heart disease).",
        "Medical interpreters and culturally appropriate education materials reduce errors in dosing and follow-up. Never use a child to interpret for a parent's serious diagnosis.",
      ],
      {
        bulletPoints: [
          "NICU levels — regional perinatal systems route high-risk births",
          "Family-centered care — parents at bedside; teach-back on equipment",
          "Child-life — procedural support; play therapy",
          "Transition to adult care — gap programs around age 18–21",
          "Qualified interpreter — required for informed consent",
        ],
      }
    ),
  ],
  {
    subtitle: "Prenatal through adolescent care, screening, safety, and family partnership",
    learningObjectives: [
      "Outline prenatal, postpartum, and newborn preventive care expectations.",
      "Explain newborn screening, immunization, and safe-sleep principles.",
      "Describe well-child developmental surveillance and early intervention pathways.",
      "Discuss adolescent confidentiality and risk screening in primary care.",
    ],
    keyConcepts: [
      "Fourth trimester",
      "Newborn metabolic screen",
      "Safe sleep ABCs",
      "Well-child visit",
      "Transition to adult care",
    ],
    realWorldRelevance:
      "Pediatric offices, labor units, and community health workers share families across programs—consistent messaging on sleep and vaccines prevents harm.",
  }
);
