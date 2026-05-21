import { chapter, section } from "@/lib/courses/textbook/factory";

export const HLTH_CH10 = chapter(
  "future-health",
  10,
  "Future of Healthcare",
  [
    section(
      "future-health-s1",
      "10.1 Digital health records and interoperability",
      [
        "Electronic health records (EHRs) replaced paper charts but introduced click fatigue, copy-forward errors, and alert fatigue. Major vendors dominate hospital markets; ambulatory practices may use different systems. Interoperability—sharing data across organizations—relies on standards (HL7 FHIR APIs), health information exchanges, and patient access rules (21st Century Cures Act).",
        "Clinical documentation improvement (CDI) and computer-assisted physician documentation aim to align notes with coding and quality metrics without drowning clinicians in boilerplate. Nurses and MAs increasingly room patients and draft histories for provider attestation.",
        "Patients download apps tied to portals for results, messaging, and scheduling. Data liquidity empowers consumers when privacy is preserved.",
      ],
      {
        bulletPoints: [
          "EHR — orders, results, notes, billing integration",
          "FHIR — modern API standard for app and payer data exchange",
          "HIE — regional networks sharing admissions and labs",
          "Patient portal — results, messaging, OpenNotes full note access",
          "Alert fatigue — override culture risks missed true warnings",
        ],
      }
    ),
    section(
      "future-health-s2",
      "10.2 Telehealth, remote monitoring, and hospital-at-home",
      [
        "Telehealth surged during COVID-19: synchronous video visits, store-and-forward dermatology images, and remote patient monitoring (RPM) for blood pressure, glucose, and weight. Reimbursement rules evolved; some flexibilities made permanent, others state-dependent.",
        "Hospital-at-home programs deliver acute-level care in the home with daily visits, monitoring, and infusion—lower cost for selected diagnoses when logistics support it.",
        "Digital divide remains: broadband, devices, and digital literacy limit equity. Hybrid models will persist—not full replacement of in-person exams requiring palpation or procedures.",
      ],
      {
        bulletPoints: [
          "Synchronous telehealth — live video/audio clinical encounter",
          "RPM — devices transmit vitals to care teams",
          "Licensure — interstate compacts expanding for telemedicine",
          "Hospital-at-home — acute care outside traditional walls",
          "Equity — access gaps for rural and low-income patients",
        ],
      }
    ),
    section(
      "future-health-s3",
      "10.3 Artificial intelligence: documentation, imaging, and limits",
      [
        "AI in healthcare includes imaging triage (flagging hemorrhage on CT), sepsis prediction scores, ambient documentation scribes, and chatbots for scheduling—not autonomous diagnosis for consumers. FDA regulates some software as medical devices; others are administrative tools.",
        "Risks: biased training data, hallucinated citations, privacy leaks if staff paste PHI into public models, and liability ambiguity when suggestions are wrong. Human oversight remains mandatory.",
        "Workforce impact may shift tasks (prior authorization bots, coding assistance) rather than eliminate licensed roles overnight. Literacy means evaluating vendor claims critically.",
      ],
      {
        bulletPoints: [
          "SaMD — software as a medical device; FDA pathways",
          "Bias — training data must represent diverse populations",
          "Ambient AI — visit audio → draft note; provider must verify",
          "PHI — never enter patient data into unapproved public AI tools",
          "Augmentation — decision support, not replacement of clinicians",
        ],
        citations: [
          {
            source: "FDA — Artificial Intelligence and Machine Learning in Software",
            url: "https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-software-medical-device",
            note: "Regulatory framing for AI/ML-based medical software",
          },
        ],
      }
    ),
    section(
      "future-health-s4",
      "10.4 Payment reform: value, risk, and transparency",
      [
        "Fee-for-service pays per visit or procedure—volume incentive. Value-based models (ACO, bundled payments, capitation) reward outcomes and cost control. Medicare Advantage growth shifts seniors into managed plans with prior authorization scrutiny.",
        "Price transparency rules require machine-readable hospital prices and good-faith estimates. Real shopping remains hard—quality and network matter alongside sticker price.",
        "Pharmacy benefit managers (PBMs) and 340B drug pricing debates show how opaque intermediaries shape access. Policy will continue shifting after elections and court rulings.",
      ],
      {
        bulletPoints: [
          "ACO — accountable care organization; shared savings/risk",
          "Bundled payment — single price for episode (e.g., joint replacement)",
          "Capitation — per-member per-month payment regardless of visits",
          "Medicare Advantage — Part C plans; utilization management common",
          "Transparency — chargemaster vs negotiated rates vs patient estimate",
        ],
      }
    ),
    section(
      "future-health-s5",
      "10.5 Demography, workforce, and global health trends",
      [
        "Aging populations raise demand for geriatrics, home care, and memory services. Nursing and primary care shortages persist; immigration policy and education pipeline affect supply. Burnout recovery is a decade-long project.",
        "Climate change shifts disease patterns—heat illness, wildfire smoke respiratory surges, vector-borne disease range expansion. Hospitals decarbonize operations slowly.",
        "Global health security (pandemic treaties, vaccine equity) and low-income country workforce migration shape U.S. staffing. Ethical recruitment avoids draining nations of scarce nurses without compensation.",
      ],
      {
        bulletPoints: [
          "Silver tsunami — more Medicare beneficiaries; complex comorbidity",
          "Primary care desert — rural and urban underserved areas",
          "Climate health — heat, air quality, disaster displacement",
          "Global recruitment — ethical international nurse hiring practices",
          "Prevention investment — cheaper than late-stage rescue care",
        ],
        citations: [
          {
            source: "WHO — Health workforce",
            url: "https://www.who.int/health-topics/health-workforce",
            note: "Global perspective on staffing shortages and training",
          },
        ],
      }
    ),
  ],
  {
    subtitle: "Technology, payment models, AI guardrails, and demographic pressures",
    learningObjectives: [
      "Explain EHR interoperability and patient-access trends.",
      "Compare telehealth models and equity constraints.",
      "Critically assess AI claims and PHI risks in documentation tools.",
      "Describe value-based payment versus fee-for-service incentives.",
    ],
    keyConcepts: ["FHIR", "RPM", "Value-based care", "SaMD", "Workforce shortage"],
    realWorldRelevance:
      "Tomorrow’s hires will document in AI-assisted EHRs while payers demand outcomes—this chapter frames the headlines.",
  }
);
