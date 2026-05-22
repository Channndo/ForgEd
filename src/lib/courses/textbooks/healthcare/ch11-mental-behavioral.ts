import { chapter, section } from "@/lib/courses/textbook/factory";

export const HLTH_CH10 = chapter(
  "mental-behavioral-health",
  10,
  "Mental and Behavioral Health Essentials",
  [
    section(
      "mental-behavioral-s1",
      "10.1 Why mental health belongs in every care setting",
      [
        "A patient who whispers that they have not slept in weeks is telling you something as clinically important as a fever. Mental and behavioral health conditions—depression, anxiety, substance use disorders, psychosis, trauma responses—are not separate from \"real\" medicine. They shape adherence, pain perception, recovery time, and safety for staff and families.",
        "Stigma still blocks honest conversation. Your language matters: say \"person with schizophrenia,\" not \"schizophrenic\"; ask about safety without sounding accusatory. Many patients have been dismissed when they raised mood or substance concerns. One calm, nonjudgmental question can reopen a door that was shut for years.",
        "Primary care, emergency departments, pediatrics, and home health all screen for behavioral risk. You are not expected to diagnose or treat independently in this survey course—but you are expected to notice, document objectively, and route to licensed behavioral clinicians or crisis services when red flags appear.",
      ],
      {
        bulletPoints: [
          "Behavioral health — conditions affecting mood, thought, behavior, and substance use",
          "Stigma reduction — respectful language; separate the person from the diagnosis",
          "Universal relevance — mental health affects every specialty and care setting",
          "Scope limits — recognize; refer; do not practice outside licensure",
          "Trauma-informed care — assume many patients carry adverse experiences",
        ],
      }
    ),
    section(
      "mental-behavioral-s2",
      "10.2 Common conditions learners actually encounter",
      [
        "Major depression is more than sadness—it is persistent low mood or loss of interest, often with sleep change, fatigue, poor concentration, guilt, and sometimes suicidal thoughts. Anxiety disorders include generalized worry, panic attacks (sudden palpitations, chest tightness, fear of dying), and phobias that avoid necessary care.",
        "Bipolar disorder alternates depressive episodes with manic or hypomanic highs: decreased sleep need, racing speech, risky spending, or grandiosity. ADHD in adults may present as disorganization and impulsivity mistaken for poor character.",
        "Substance use exists on a spectrum from risky use to severe disorder. Alcohol, opioids, stimulants, and cannabis each have distinct withdrawal risks—opioid and alcohol withdrawal can be life-threatening and require medical supervision, not willpower alone.",
      ],
      {
        bulletPoints: [
          "Major depression — SIGECAPS screen (sleep, interest, guilt, energy, concentration, appetite, psychomotor, suicidal ideation)",
          "Anxiety / panic — physical symptoms mimic cardiac events; rule out medical causes",
          "Bipolar — screen for manic history before starting antidepressants alone",
          "Substance use disorder — impairment + continued use despite harm",
          "Withdrawal — alcohol/benzodiazepines/opioids may need monitored detox",
        ],
      }
    ),
    section(
      "mental-behavioral-s3",
      "10.3 Screening tools and what a positive screen means",
      [
        "Validated screens are short on purpose. PHQ-9 (depression) and GAD-7 (anxiety) are common in primary care; AUDIT-C flags unhealthy alcohol use; Columbia Suicide Severity Rating Scale structures lethal-means and intent questions for youth and adults.",
        "A positive screen is not a diagnosis—it is a signal to pause the checkout rush and involve a clinician. Document the score, patient statements in quotes when possible, and the referral or safety plan initiated the same day when risk is elevated.",
        "Cultural context changes presentation. Some communities express distress somatically (headaches, stomach pain). Interpreters and family involvement require consent—do not assume a relative should translate sensitive mental-health content.",
      ],
      {
        bulletPoints: [
          "PHQ-9 / GAD-7 — scored questionnaires; trending scores track response",
          "Positive screen → clinical interview — not automatic medication",
          "Suicide inquiry — ask directly; asking does not plant the idea",
          "Lethal means counseling — reduce access to firearms, medications when at risk",
          "Cultural formulation — somatic complaints may mask depression",
        ],
        citations: [
          {
            source: "SAMHSA — National Helpline and Treatment Locator",
            url: "https://www.samhsa.gov/find-help",
            note: "Federal resource for substance use and mental health treatment referral",
          },
        ],
      }
    ),
    section(
      "mental-behavioral-s4",
      "10.4 Integrated care, peer support, and the 988 crisis line",
      [
        "Integrated behavioral health places psychologists or social workers inside primary care clinics—warm handoffs beat faxed referrals that patients never complete. Collaborative care models track symptoms with registry tools and adjust treatment by protocol with psychiatric consultation.",
        "Peer specialists are trained individuals with lived experience who coach recovery goals, appointment attendance, and community resources. Their role complements—not replaces—licensed therapy and medical management.",
        "988 is the three-digit Suicide & Crisis Lifeline in the United States (call or text). Mobile crisis teams in some regions respond in the community instead of defaulting to emergency departments. Know your facility policy for involuntary hold criteria—state law varies and due process matters.",
      ],
      {
        bulletPoints: [
          "Integrated BH — behavioral staff embedded in medical clinics",
          "Collaborative care — measurement-based treatment in primary care",
          "Peer support — lived-experience coaches; state certification varies",
          "988 — national crisis line; chat/text options",
          "Involuntary evaluation — imminent danger standards; legal time limits",
        ],
      }
    ),
    section(
      "mental-behavioral-s5",
      "10.5 Workplace boundaries, burnout, and supporting colleagues",
      [
        "Healthcare workers experience depression and substance use at rates comparable to or higher than the general public—often hidden because licensure fears punishment. Healthy teams normalize employee assistance programs (EAPs) and debriefing after traumatic events.",
        "Compassion fatigue is not weakness; it is the cost of sustained empathy without recovery. Micro-breaks, sleep protection, and limiting mandatory overtime where possible are operational safety issues, not perks.",
        "When a colleague seems withdrawn or makes concerning jokes about self-harm, respond with the same seriousness you would for a patient: private conversation, encourage professional help, notify leadership per policy if imminent risk. Documentation protects patients and staff when behavior affects safe practice.",
      ],
      {
        bulletPoints: [
          "Second victim phenomenon — clinicians traumatized by adverse events",
          "EAP — confidential counseling benefit; encourage use",
          "Compassion fatigue — monitor; schedule recovery; seek supervision",
          "Impairment policy — fair process for substance use or mental health in licensees",
          "Team psychological safety — speak up without retaliation",
        ],
      }
    ),
  ],
  {
    subtitle: "Recognition, screening, referral, crisis response, and workforce wellbeing",
    learningObjectives: [
      "Explain why behavioral health is integral to physical health outcomes.",
      "Describe common mood, anxiety, and substance-related presentations at a survey level.",
      "Interpret screening scores as triggers for clinician follow-up, not final diagnosis.",
      "Identify crisis resources and integrated-care models used in U.S. practice.",
    ],
    keyConcepts: [
      "PHQ-9",
      "Trauma-informed care",
      "Integrated behavioral health",
      "988 crisis line",
      "Withdrawal risk",
    ],
    realWorldRelevance:
      "Front-desk staff, medical assistants, and nurses are often the first to hear suicidal ideation or substance relapse—knowing the next step saves lives.",
  }
);
