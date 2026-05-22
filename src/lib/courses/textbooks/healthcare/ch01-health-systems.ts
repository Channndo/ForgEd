import { chapter, section } from "@/lib/courses/textbook/factory";

export const HLTH_CH01 = chapter(
  "health-systems",
  1,
  "Healthcare Systems",
  [
    section(
      "health-systems-s0",
      "1.1 History of medicine: from ancient practice to modern science",
      [
        "Medicine did not begin in a hospital tower—it began wherever people tried to explain suffering and stop it. Ancient healers in Egypt, Greece, India, and China mixed observation, ritual, and early surgery. The Hippocratic tradition (~400 BCE) urged physicians to study illness naturally rather than blame gods alone, and the oath still symbolizes ethical duty today.",
        "For centuries, progress was uneven. Islamic scholars preserved and extended Greek texts; medieval monasteries housed infirmaries; barber-surgeons performed amputations without anesthesia. The 19th century transformed everything: anesthesia (1846), antisepsis and germ theory (Semmelweis, Lister, Pasteur, Koch), and the rise of scientific laboratories. Infections that once killed mothers in childbirth or soldiers on battlefields became preventable.",
        "The 20th century added antibiotics, vaccines, imaging (X-ray, CT, MRI), organ transplantation, and genetics. Public health campaigns beat smallpox and polio in many regions. Yet harm persisted—thalidomide tragedies, Tuskegee syphilis study ethics failures, and unequal access by race and class remind us that science without justice is incomplete.",
        "Today’s medicine is evidence-based: randomized trials, systematic reviews, clinical guidelines, and quality measurement. You are entering healthcare at a moment when AI, genomics, and global connectivity accelerate discovery—and when trust, equity, and cost still determine who benefits. Knowing this arc helps you see today’s system not as fixed fate, but as the latest chapter in a long human project.",
      ],
      {
        bulletPoints: [
          "Hippocratic ethic — natural causes, confidentiality, do no harm",
          "Germ theory — hand hygiene, sterilization, public sanitation",
          "Antibiotics & vaccines — transformed infection and childhood mortality",
          "Evidence-based medicine — trials and guidelines over tradition alone",
          "Ethics milestones — research protections (Belmont, IRB, informed consent)",
        ],
        citations: [
          {
            source: "NLM — History of Medicine",
            url: "https://www.nlm.nih.gov/hmd/",
            note: "National Library of Medicine historical collections and timelines",
          },
        ],
      }
    ),
    section(
      "health-systems-s1",
      "1.2 What “healthcare” means in a modern economy",
      [
        "Healthcare is the organized delivery of services that prevent, diagnose, treat, and rehabilitate illness and injury. It is not synonymous with “medicine” alone: financing, regulation, facilities, workforce licensure, supply chains, and information systems determine whether a patient can access care at all.",
        "In the United States, healthcare is simultaneously a clinical profession, a regulated industry, and one of the largest sectors of GDP. Spending flows through employers, government programs, insurers, and out-of-pocket payments. Outcomes depend on biology, behavior, social conditions, and how well teams coordinate across settings.",
        "Survey-level literacy starts with vocabulary: primary care versus specialty care, acute versus chronic disease, fee-for-service versus value-based payment. You do not need to memorize every acronym on day one, but you must recognize that every clinic visit sits inside a larger system.",
      ],
      {
        bulletPoints: [
          "Clinical care — prevention, diagnosis, treatment, rehabilitation",
          "Financing — who pays (patient, insurer, government, employer)",
          "Delivery settings — hospital, clinic, pharmacy, home, telehealth",
          "Regulation — licensure, privacy, billing rules, facility standards",
          "Outcomes — mortality, morbidity, function, patient experience, cost",
        ],
      }
    ),
    section(
      "health-systems-s2",
      "1.3 How care is financed: payers and populations",
      [
        "Most Americans receive coverage through a mix of sources. Employer-sponsored insurance remains common for working adults and dependents. Medicare covers seniors and many people with disabilities; Medicaid and CHIP cover low-income adults, children, and long-term services in partnership with states. The Affordable Care Act (ACA) marketplace and off-exchange individual plans serve self-employed and uninsured populations with standardized benefits and subsidies based on income.",
        "Payers negotiate rates with networks of providers. A hospital’s “chargemaster” price rarely equals what Medicare, Medicaid, or a commercial insurer actually pays. Understanding healthcare therefore requires understanding covered benefits, cost sharing (deductible, copay, coinsurance), prior authorization, and medical necessity rules—not just what happens in an exam room.",
        "Uninsured and underinsured patients may rely on community health centers, hospital charity programs, or cash pricing. Rural and safety-net hospitals face distinct financial pressures when payer mix skews toward government programs with lower reimbursement.",
      ],
      {
        bulletPoints: [
          "Commercial insurance — employer and individual markets; network contracts",
          "Medicare — federal program; Parts A/B/C/D cover different services",
          "Medicaid — federal–state program; eligibility and benefits vary by state",
          "Uninsured / underinsured — access gaps; safety-net providers",
          "Cost sharing — deductible, copayment, coinsurance, out-of-pocket maximum",
        ],
        citations: [
          {
            source: "CMS — Medicare & Medicaid overview",
            url: "https://www.cms.gov/",
            note: "Official U.S. payer program descriptions and policy updates",
          },
          {
            source: "HealthCare.gov — ACA marketplace",
            url: "https://www.healthcare.gov/",
            note: "Consumer-facing explanation of marketplace coverage and subsidies",
          },
        ],
      }
    ),
    section(
      "health-systems-s3",
      "1.4 Where care happens: the continuum of settings",
      [
        "Acute hospitals provide emergency, surgical, and inpatient medical care. Many health systems also operate ambulatory surgery centers, physician groups, imaging centers, and post-acute facilities. Primary care offices manage prevention and chronic disease; urgent care bridges evenings and weekends; specialty clinics concentrate expertise (cardiology, oncology, orthopedics).",
        "After hospital discharge, patients may need skilled nursing, inpatient rehabilitation, home health, hospice, or long-term care. Each transition is a handoff risk: medication lists, follow-up appointments, and wound-care instructions must transfer cleanly or readmissions rise.",
        "Retail clinics and telehealth expanded access for low-acuity complaints and chronic follow-up, but they do not replace emergency departments for chest pain, stroke symptoms, or major trauma. System design is about matching acuity to the right site at the right cost and safety level.",
      ],
      {
        bulletPoints: [
          "Emergency / inpatient — high acuity, 24/7 capability, capital intensive",
          "Ambulatory — primary, specialty, procedural; majority of visits",
          "Post-acute — SNF, rehab, home health, hospice after hospitalization",
          "Pharmacy — dispensing, counseling, immunizations, medication therapy management",
          "Care transitions — discharge planning reduces readmissions and errors",
        ],
      }
    ),
    section(
      "health-systems-s4",
      "1.5 Workforce: who does what (and under which license)",
      [
        "Healthcare is delivered by interprofessional teams. Physicians (MD/DO) diagnose and prescribe; advanced practice clinicians (NP, PA) provide primary and specialty care in many states; registered nurses coordinate bedside care, education, and surveillance; licensed practical/vocational nurses and nursing assistants support daily needs; pharmacists manage medication safety; therapists restore function; technologists perform imaging and lab work.",
        "Administrative roles—patient access, health information management, revenue cycle, quality, compliance—are not “support” in a weak sense; they determine whether care is schedulable, billable, legal, and measurable. Medical assistants and patient care technicians often bridge clinical and operational workflows in clinics.",
        "Scope of practice is defined by state law and employer policy. A foundational course cannot license you to perform procedures, but it can teach you to recognize role boundaries, escalation paths, and why handoff communication is a safety intervention.",
      ],
      {
        bulletPoints: [
          "Physicians (MD/DO) — medical diagnosis and treatment authority",
          "Nursing (RN, LPN/LVN, CNA) — assessment, care delivery, surveillance",
          "Allied health — PT/OT/SLP, RT, radiology, lab, pharmacy",
          "Administrative / HIM / revenue cycle — access, records, claims, quality",
          "Scope of practice — state law + employer policy; never practice outside it",
        ],
      }
    ),
    section(
      "health-systems-s5",
      "1.6 Quality, safety, and how systems learn from harm",
      [
        "High-reliability industries study near-misses. Healthcare adopted frameworks such as the Institute of Medicine’s patient safety movement, WHO surgical checklists, and hospital accreditation standards (e.g., The Joint Commission). Common harm themes include medication errors, health care–associated infections, falls, diagnostic delay, and communication failures during handoffs.",
        "Quality metrics include mortality ratios, readmission rates, hospital-acquired infection rates, patient experience scores (HCAHPS), and timeliness of care (e.g., sepsis bundles, stroke door-to-needle). Public reporting and value-based payment programs increasingly tie dollars to outcomes, not only volume of services.",
        "Patients participate through shared decision-making, advance care planning, and reporting concerns. A literate learner can read a hospital’s quality profile, understand why checklists exist, and see quality improvement as everyday discipline—not a poster in the hallway.",
      ],
      {
        bulletPoints: [
          "Patient safety — prevent harm; learn from events and near-misses",
          "HAI — infection prevention, hand hygiene, device bundles",
          "Handoffs — SBAR and structured communication reduce errors",
          "Value-based care — payment linked to outcomes and cost, not volume alone",
          "Transparency — CMS Hospital Compare and state reporting tools",
        ],
        citations: [
          {
            source: "AHRQ — Patient Safety Network",
            url: "https://psnet.ahrq.gov/",
            note: "Evidence summaries and tools for safety culture and analysis",
          },
          {
            source: "CMS — Care Compare",
            url: "https://www.medicare.gov/care-compare/",
            note: "Public quality and experience data for hospitals and other providers",
          },
        ],
      }
    ),
  ],
  {
    subtitle: "Medical history, financing, settings, workforce, and system-level quality",
    learningObjectives: [
      "Describe major milestones from ancient medicine through evidence-based care.",
      "Explain how U.S. healthcare financing mixes public and private payers.",
      "Map common care settings from primary care through post-acute services.",
      "Describe core clinical and administrative roles and scope-of-practice limits.",
      "Identify basic patient-safety and quality measurement concepts.",
    ],
    keyConcepts: [
      "History of medicine",
      "Germ theory",
      "Payer mix",
      "Continuum of care",
      "Interprofessional teams",
      "Medical necessity",
      "Value-based payment",
    ],
    realWorldRelevance:
      "Every clinic job—front desk, billing, nursing, or IT—interfaces with how care is paid for, where it is delivered, and how safety is measured.",
  }
);
