import { chapter, section } from "@/lib/courses/textbook/factory";

export const HLTH_CH15 = chapter(
  "rehab-longterm-care",
  15,
  "Rehabilitation, Long-Term Care, and Aging Services",
  [
    section(
      "rehab-longterm-s1",
      "15.1 The post-acute continuum: where patients go after the hospital",
      [
        "Hospital discharge is a handoff, not an ending. Patients with stroke, joint replacement, major trauma, or deconditioning often need inpatient rehabilitation (IRF), skilled nursing facility (SNF) rehab, home health, or outpatient physical/occupational/speech therapy. The wrong level wastes Medicare days or sends frail patients home without support.",
        "Inpatient rehabilitation facilities require three hours of therapy daily and physician oversight—appropriate for motivated patients who can tolerate intensity. SNFs offer lower daily therapy minutes but 24-hour nursing for wound care and complex medication regimens.",
        "Home health brings nurses and therapists to the residence when the patient is homebound and needs intermittent skilled care. Outpatient clinics handle maintenance therapy after acute episodes. Documentation must justify medical necessity—vague orders get denied.",
      ],
      {
        bulletPoints: [
          "IRF — intensive daily therapy; physician-led interdisciplinary team",
          "SNF — subacute rehab + nursing; Medicare benefit limits apply",
          "Home health — skilled nursing/therapy; homebound criteria",
          "Outpatient rehab — PT/OT/SLP after hospital/SNF episode",
          "Level-of-care decision — function, cognition, caregiver availability",
        ],
      }
    ),
    section(
      "rehab-longterm-s2",
      "15.2 Therapy disciplines and functional goals",
      [
        "Physical therapy restores mobility, strength, balance, and gait—preventing falls that fracture hips and end independence. Occupational therapy focuses on activities of daily living: dressing, bathing, cooking, returning to work with adaptive equipment.",
        "Speech-language pathology treats swallowing dysfunction (dysphagia) after stroke—aspiration pneumonia kills silently—and cognitive-communication deficits from brain injury or dementia. Diet texture modifications (pureed, thickened liquids) follow formal swallow studies, not guesswork.",
        "Goals must be measurable: \"Patient will walk 150 feet with rolling walker and standby assist on level surfaces\" beats \"improve mobility.\" Insurance authorizations track functional progress; stalls trigger continued-stay reviews.",
      ],
      {
        bulletPoints: [
          "PT — gait, strength, balance, pain modalities within scope",
          "OT — ADLs, cognition, splinting, workplace ergonomics",
          "SLP — dysphagia, aphasia, cognitive rehab",
          "Dysphagia diet — IDDSI texture levels after instrumental assessment",
          "SMART goals — specific, measurable functional outcomes",
        ],
      }
    ),
    section(
      "rehab-longterm-s3",
      "15.3 Long-term care, assisted living, and nursing facilities",
      [
        "Nursing facilities (nursing homes) provide 24-hour licensed nursing for chronic custodial and skilled needs—ventilator weaning, wound vacs, tube feeds, advanced dementia care. Surveys and star ratings reflect staffing, inspections, and quality measures—families should tour and ask about RN coverage nights and weekends.",
        "Assisted living offers housing plus help with medications and bathing—not 24-hour skilled nursing. Memory care units add secured environments for wandering risk. Costs are largely private pay unless Medicaid waiver programs exist.",
        "Hospice serves patients with life expectancy of six months or less (if disease runs usual course) who choose comfort over curative treatment—at home, in facilities, or inpatient hospice units. Palliative care can run alongside curative therapy for serious illness symptom relief.",
      ],
      {
        bulletPoints: [
          "Skilled nursing facility — 24-hour nursing; Medicare SNF benefit limits",
          "Assisted living — supportive housing; variable licensing by state",
          "Memory care — secured dementia units; behavioral programming",
          "Hospice — comfort-focused; interdisciplinary team; bereavement support",
          "Palliative care — symptom management with or without curative intent",
        ],
      }
    ),
    section(
      "rehab-longterm-s4",
      "15.4 Aging in place, caregivers, and adult protective services",
      [
        "Most older adults prefer to remain home. Area Agencies on Aging coordinate meals, transportation, respite, and home modifications (grab bars, ramps). Family caregivers provide billions of unpaid hours—burnout is a patient-safety issue when missed doses and falls follow.",
        "Advance care planning documents wishes before crisis: health care proxy (durable power of attorney for health), living will or POLST/MOLST forms where states recognize them. Encourage conversations at routine visits, not only in the ICU hallway.",
        "Adult protective services investigates elder abuse, neglect, and financial exploitation—mandated reporters in many roles must call when suspicion arises. Capacity assessments balance autonomy with safety; guardianship is a last resort with court oversight.",
      ],
      {
        bulletPoints: [
          "Aging in place — home and community-based services (HCBS)",
          "Caregiver strain — respite, education, support groups",
          "Advance directives — proxy, goals-of-care forms",
          "POLST/MOLST — physician orders for life-sustaining treatment",
          "APS — elder abuse reporting hotlines by county",
        ],
      }
    ),
    section(
      "rehab-longterm-s5",
      "15.5 Quality, staffing, and the workforce caring for older adults",
      [
        "Minimum staffing ratios and turnover drive outcomes in long-term care—COVID-19 exposed fragility of the sector. CNAs perform most hands-on care; fair wages and career ladders affect retention more than slogans.",
        "Antipsychotic reduction programs target inappropriate sedation for dementia behaviors—nonpharmacologic interventions first (music, routine, pain treatment). Falls and pressure injuries are publicly reported quality indicators.",
        "Careers span therapy aides, activity directors, social workers, DONs (directors of nursing), and geriatricians. Students exploring healthcare should shadow rehab and long-term settings to see teamwork invisible in emergency television dramas.",
      ],
      {
        bulletPoints: [
          "CNA — certified nursing assistant; core bedside workforce",
          "Staffing metrics — RN hours per resident day; turnover rates",
          "Antipsychotic stewardship — behavior management without default sedation",
          "Pressure injury prevention — turning schedules, nutrition, surfaces",
          "Geriatric workforce — growing demand with aging population",
        ],
        citations: [
          {
            source: "CMS — Nursing Home Care Compare",
            url: "https://www.medicare.gov/care-compare/",
            note: "Public quality and staffing data for nursing facilities",
          },
        ],
      }
    ),
  ],
  {
    subtitle: "Post-acute rehab, facility types, aging services, and caregiver support",
    learningObjectives: [
      "Differentiate IRF, SNF, home health, and outpatient rehabilitation levels.",
      "Describe PT, OT, and SLP roles and measurable functional goal setting.",
      "Compare nursing facility, assisted living, hospice, and palliative care purposes.",
      "Explain advance care planning and elder safety reporting basics.",
    ],
    keyConcepts: [
      "IRF vs SNF",
      "Dysphagia management",
      "Hospice vs palliative",
      "Advance directives",
      "Caregiver burnout",
    ],
    realWorldRelevance:
      "Discharge planners, social workers, and therapy students coordinate daily—knowing the continuum prevents patients from bouncing back to the ER unsupported.",
  }
);
