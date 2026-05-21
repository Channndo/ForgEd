import { chapter, section } from "@/lib/courses/textbook/factory";

export const HLTH_CH06 = chapter(
  "public-health",
  6,
  "Public Health",
  [
    section(
      "public-health-s1",
      "6.1 Clinical medicine versus population health",
      [
        "Clinical care treats individuals who present for help. Public health protects and improves health for populations—communities, nations, and global cohorts—through prevention, surveillance, policy, and environmental action. John Snow’s cholera map (1854) and modern wastewater surveillance both illustrate population-level reasoning.",
        "When vaccination coverage drops, outbreaks return even if hospital ICUs are excellent. When housing instability rises, asthma admissions follow. Public health asks upstream questions clinical visits cannot answer alone.",
        "Agencies include federal CDC and FDA roles, state and local health departments, tribal health authorities, and global partners (WHO). Funding mixes grants, appropriations, and fees.",
      ],
      {
        bulletPoints: [
          "Population focus — rates, trends, disparities, prevention",
          "Upstream determinants — housing, water, food, employment, education",
          "Surveillance — detect outbreaks and chronic trends early",
          "Policy levers — mandates, taxes, zoning, licensing, education campaigns",
          "Clinical complement — hospitals treat; public health prevents",
        ],
        citations: [
          {
            source: "CDC — About Public Health",
            url: "https://www.cdc.gov/public-health-gateway/about/index.html",
            note: "Federal public health mission and core functions",
          },
        ],
      }
    ),
    section(
      "public-health-s2",
      "6.2 Epidemiology: incidence, prevalence, and study designs",
      [
        "Epidemiology quantifies disease in populations. Incidence counts new cases over time; prevalence counts existing cases at a point or period. Attack rates describe outbreaks; mortality and case-fatality rates describe severity.",
        "Descriptive studies map who, where, when. Analytic studies test hypotheses—cohort (follow exposed vs unexposed), case-control (compare past exposures in sick vs healthy), randomized trials (gold standard for interventions). Confounding and bias require careful design.",
        "During COVID-19, the public learned terms like R₀, test sensitivity/specificity, and excess mortality. Literacy means reading dashboards critically—not treating every graph as equally rigorous.",
      ],
      {
        bulletPoints: [
          "Incidence — new cases / population at risk / time",
          "Prevalence — existing cases / population",
          "Outbreak — more cases than expected baseline",
          "Confounding — third factor distorts exposure–outcome link",
          "Screening — benefits vs harms (false positives, overdiagnosis)",
        ],
      }
    ),
    section(
      "public-health-s3",
      "6.3 Social determinants of health (SDOH)",
      [
        "SDOH are conditions where people live, learn, work, and age—shaping access to care and outcomes. Income, education, racism and discrimination, transportation, food security, and social support influence diabetes control, maternal mortality, and life expectancy.",
        "Hospitals screen for housing instability, food insecurity, and transportation needs, referring to community partners. ICD-10 Z-codes document SDOH when clinically relevant.",
        "Equity is not equality: equal resources per person may leave disadvantaged groups behind. Equity targets resources to need. Population dashboards stratify metrics by race, ethnicity, language, and geography to expose gaps.",
      ],
      {
        bulletPoints: [
          "SDOH — non-medical drivers of health outcomes",
          "Health disparities — systematic differences by group or place",
          "Screening tools — PRAPARE, Hunger Vital Sign, etc. in clinics",
          "Z codes — document SDOH factors when appropriate",
          "Equity vs equality — tailor resources to close gaps",
        ],
        citations: [
          {
            source: "Healthy People 2030 — Social Determinants",
            url: "https://health.gov/healthypeople/objectives-and-data/social-determinants-health",
            note: "U.S. national objectives framing SDOH",
          },
        ],
      }
    ),
    section(
      "public-health-s4",
      "6.4 Immunization, screening, and preventive services",
      [
        "Vaccines train adaptive immunity without full disease. Herd immunity protects those who cannot vaccinate (infants, immunocompromised) when coverage is high. Schedules (ACIP) update with new evidence—COVID, RSV, HPV, shingles.",
        "Screening tests (mammography, colonoscopy, cervical cytology, lipid panels) find disease early when treatment works better. USPSTF grades recommendations A–D; clinicians discuss benefits and harms with patients.",
        "Primary prevention stops disease (flu shot); secondary finds early disease (colonoscopy); tertiary limits disability after diagnosis (stroke rehab).",
      ],
      {
        bulletPoints: [
          "ACIP schedule — childhood and adult immunization timing",
          "Herd immunity — community protection via coverage thresholds",
          "USPSTF — evidence grades for screening services",
          "False positive — follow-up harm; discuss before testing",
          "Workplace / school requirements — state law varies",
        ],
        citations: [
          {
            source: "CDC — Immunization Schedules",
            url: "https://www.cdc.gov/vaccines/schedules/",
            note: "Official U.S. vaccine timing for clinicians and public",
          },
        ],
      }
    ),
    section(
      "public-health-s5",
      "6.5 Health departments and emergency preparedness",
      [
        "Local health departments issue birth certificates, inspect restaurants, run WIC nutrition programs, track communicable disease, and lead vaccination clinics. During hurricanes, wildfires, and chemical spills, they coordinate with emergency management and hospitals.",
        "Preparedness includes stockpiles, volunteer medical corps, communication plans, and exercise drills. Legal authorities (isolation, quarantine) vary by state and require due process balances.",
        "Careers span epidemiologists, environmental health specialists, health educators, and policy analysts—often MPH-level training. Clinical staff partner during outbreaks but governance sits with public health leadership.",
      ],
      {
        bulletPoints: [
          "Mandated reporting — clinicians notify health dept of specific diseases",
          "Outbreak investigation — case interview, contact tracing, control measures",
          "Environmental health — water, food, vector control",
          "All-hazards preparedness — natural, biological, chemical, cyber",
          "MPH pathway — common graduate credential for leadership roles",
        ],
      }
    ),
  ],
  {
    subtitle: "Population health, epidemiology, SDOH, prevention, and governmental public health",
    learningObjectives: [
      "Contrast individual clinical care with population-level prevention.",
      "Define incidence, prevalence, and basic study designs.",
      "Explain how social determinants shape outcomes and documentation.",
      "Describe immunization and screening evidence frameworks.",
    ],
    keyConcepts: ["SDOH", "Incidence vs prevalence", "Herd immunity", "USPSTF", "Outbreak investigation"],
    realWorldRelevance:
      "Pandemics, maternal mortality debates, and community clinic partnerships all require public-health framing—not only hospital care.",
  }
);
