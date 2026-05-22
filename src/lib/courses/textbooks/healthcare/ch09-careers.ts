import { chapter, section } from "@/lib/courses/textbook/factory";

export const HLTH_CH14 = chapter(
  "careers-health",
  14,
  "Healthcare Careers",
  [
    section(
      "careers-health-s1",
      "14.1 Clinical pathways: nursing, medicine, and allied health",
      [
        "Registered nurses (RN) complete associate or baccalaureate programs and NCLEX-RN licensure; BSN pathways are preferred in many hospitals. Licensed practical nurses (LPN/LVN) work under RN direction in long-term and clinic settings. Nursing assistants provide direct care with state certification.",
        "Physicians complete four-year medical school (MD or DO) plus residency (3–7+ years) and board certification. Doctor of Osteopathic Medicine (DO) training includes osteopathic manipulative medicine; practice rights parallel MD in U.S. licensure.",
        "Allied health includes respiratory therapy, radiography, surgical technology, laboratory science, physical and occupational therapy, speech-language pathology, and perfusion. Each has accredited programs, clinical hours, and national exams.",
      ],
      {
        bulletPoints: [
          "RN — ADN/BSN → NCLEX-RN; charge nurse, case manager, APRN with graduate degree",
          "APRN — NP, CNM, CRNA, CNS; state practice authority varies",
          "MD/DO — undergraduate prerequisites, MCAT, residency match",
          "Allied health — accredited program + certification exam + state license",
          "Residency — supervised practice; fellowship for subspecialty",
        ],
      }
    ),
    section(
      "careers-health-s2",
      "14.2 Non-clinical pathways: operations, IT, revenue cycle, quality",
      [
        "Hospitals employ analysts, project managers, supply chain specialists, and patient experience leaders. Health information management (HIM) professionals manage records, coding, release of information, and privacy. Revenue cycle hires registrars, coders, billers, and denials specialists.",
        "Health IT roles implement EHRs, interfaces, cybersecurity, and clinical decision support. Informatics blends clinical knowledge with data science. Supply chain negotiated PPE during COVID—operations is lifesaving.",
        "Community health workers and patient navigators bridge clinical teams and social services, often bilingual and trusted in neighborhoods hospitals struggle to reach.",
      ],
      {
        bulletPoints: [
          "HIM / coding — RHIT, RHIA, CPC credentials; CDI specialists query docs",
          "Revenue cycle — front, middle, back end careers; denials growing",
          "Health IT — EHR analyst, interface engineer, CMIO clinical informatics",
          "Quality / risk — accreditation, incident review, population metrics",
          "Patient navigation — SDOH referrals, appointment adherence",
        ],
      }
    ),
    section(
      "careers-health-s3",
      "14.3 Education timelines, costs, and credentialing",
      [
        "Short certificates (medical assistant, phlebotomy, EMT) take months. Associate degrees (RN, radiography) take two years. Bachelor’s degrees open management and graduate school. Graduate programs (MPH, MHA, MSN, PA, MD) compound tuition and opportunity cost.",
        "Federal student aid, NHSC loan repayment, military Health Professions Scholarship Program, and employer tuition benefits offset costs. Research accreditation—unaccredited programs may not qualify for licensure exams.",
        "Background checks, immunizations, drug screens, and BLS certification are standard clinical placement requirements. Failure to disclose criminal history can end careers before they start.",
      ],
      {
        bulletPoints: [
          "Accreditation — CAAHEP, CCNE, LCME, etc. by profession",
          "Licensure exam — NCLEX, USMLE/COMLEX, ARRT, NBRC, etc.",
          "Clinical rotations — unpaid student labor; professionalism graded",
          "Loan forgiveness — service in underserved areas may qualify",
          "Continuing education — renew licenses; CEUs for coders and RTs",
        ],
        citations: [
          {
            source: "Bureau of Labor Statistics — Healthcare Occupations",
            url: "https://www.bls.gov/ooh/healthcare/home.htm",
            note: "Employment outlook and entry requirements by occupation",
          },
        ],
      }
    ),
    section(
      "careers-health-s4",
      "14.4 Workplace culture, burnout, and moral injury",
      [
        "Healthcare workers face shift work, emotional labor, violence, and moral distress when resources limit ideal care. Burnout triad: exhaustion, cynicism, reduced efficacy. Turnover raises costs and harms continuity.",
        "Healthy workplaces invest in staffing ratios (where mandated), break coverage, peer support, and leader rounding. Unionization debates center on wages and safe staffing in nursing.",
        "Students should build coping skills early: sleep hygiene, boundaries, debriefing, professional counseling. Leaving the field is valid when harm outweighs mission—plan finances accordingly.",
      ],
      {
        bulletPoints: [
          "Burnout — organizational and personal factors; not individual weakness",
          "Moral injury — actions violate values due to constraints",
          "Second victim — clinicians harmed after adverse events",
          "Safe staffing — nurse-patient ratios legislated in some states",
          "Support — EAP, peer programs, trauma-informed leadership",
        ],
      }
    ),
    section(
      "careers-health-s5",
      "14.5 Job search: résumés, networking, and clinical placements",
      [
        "Healthcare hiring uses applicant tracking systems—keywords from posting should appear in résumés. Quantify impact: patients per shift, denial reduction percentage, project go-lives.",
        "Networking includes preceptors, professional associations (AHIMA, AAPC, specialty societies), and LinkedIn with HIPAA-safe descriptions (no patient identifiers). Job fairs and hospital residency-style new grad programs matter for nurses.",
        "Interview preparation: scenario questions on safety, teamwork, and ethical boundaries. Ask about orientation length, preceptor assignment, and float policies. Compare benefits: retirement match, tuition, malpractice tail coverage for physicians.",
      ],
      {
        bulletPoints: [
          "ATS keywords — mirror posting language honestly",
          "New grad RN — residency programs vs direct hire ICU risk",
          "References — managers, instructors; permission before listing",
          "Behavioral interviews — STAR stories with safety emphasis",
          "Benefits compare — health insurance, PTO, retirement, shift differential",
        ],
      }
    ),
  ],
  {
    subtitle: "Clinical and non-clinical roles, training paths, culture, and hiring",
    learningObjectives: [
      "Map major clinical and allied health training pathways.",
      "Identify non-clinical healthcare careers and credentials.",
      "Compare education timelines and accreditation importance.",
      "Recognize burnout factors and practical job-search tactics.",
    ],
    keyConcepts: ["Licensure vs certification", "Residency", "Revenue cycle careers", "Burnout", "Accreditation"],
    realWorldRelevance:
      "Learners use this chapter to choose next steps—certificate, degree, or pivot—without confusing TV drama with actual training years.",
  }
);
