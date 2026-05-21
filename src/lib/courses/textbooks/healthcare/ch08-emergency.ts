import { chapter, section } from "@/lib/courses/textbook/factory";

export const HLTH_CH08 = chapter(
  "emergency-basics",
  8,
  "Emergency Response Basics",
  [
    section(
      "emergency-basics-s1",
      "8.1 EMS systems and the chain of survival",
      [
        "Emergency medical services (EMS) integrate 911 dispatch, first responders, ambulances, air medical transport, and receiving hospitals. Response intervals (call to dispatch, dispatch to scene, scene to hospital) are measured publicly in many communities.",
        "Cardiac arrest survival depends on the chain of survival: immediate recognition, CPR, rapid defibrillation, advanced care, and post-arrest treatment. Bystander CPR doubles or triples survival before professionals arrive.",
        "This textbook provides general education only—not CPR certification. Hands-on courses (American Heart Association, Red Cross) are required to perform resuscitation legally and competently in most workplaces.",
      ],
      {
        bulletPoints: [
          "911 — universal access; location accuracy (Phase II/III) matters",
          "Bystander CPR — compressions 100–120/min; minimize interruptions",
          "AED — automated external defibrillator for shockable rhythms",
          "ALS vs BLS — paramedic advanced skills vs EMT basic life support",
          "Destination protocols — stroke, STEMI, trauma center criteria",
        ],
        citations: [
          {
            source: "American Heart Association — CPR & ECC Guidelines",
            url: "https://cpr.heart.org/",
            note: "Authoritative resuscitation science and training pathways",
          },
        ],
      }
    ),
    section(
      "emergency-basics-s2",
      "8.2 First aid priorities (survey-level, not certification)",
      [
        "Scene safety first—traffic, fire, violence, downed power lines. Protect yourself; you cannot help if you become a second victim. Activate EMS for life threats: unresponsive patient, major bleeding, chest pain, stroke signs, severe allergic reaction, difficulty breathing.",
        "Direct pressure controls most external bleeding. Tourniquets are appropriate for life-threatening extremity hemorrhage when direct pressure fails. Do not remove impaled objects—stabilize and transport.",
        "Stroke assessment uses FAST (Face droop, Arm weakness, Speech difficulty, Time to call 911). Anaphylaxis may need epinephrine auto-injector if available and prescribed—follow device instructions and call 911.",
      ],
      {
        bulletPoints: [
          "Scene safety — assess before approaching",
          "Major bleeding — direct pressure; tourniquet if trained and indicated",
          "Chest pain — suspect heart attack; EMS activation",
          "FAST stroke screen — time-sensitive thrombolysis and thrombectomy",
          "Anaphylaxis — airway swelling, hives, hypotension; epinephrine if available",
        ],
      }
    ),
    section(
      "emergency-basics-s3",
      "8.3 Triage: sorting patients when demand exceeds capacity",
      [
        "Triage sorts patients by urgency. Simple triage and rapid treatment (START) uses respiration, perfusion, and mental status tags in mass casualty events. Emergency departments use the Emergency Severity Index (ESI) levels 1–5.",
        "Level 1 needs immediate life-saving intervention; level 5 is non-urgent. Crowding and boarding (patients held in ED awaiting inpatient beds) are system problems affecting wait times—not only clinical staffing.",
        "Disaster triage may shift to greatest good for greatest number—expectant category when resources are exhausted. Ethical frameworks are rehearsed in exercises.",
      ],
      {
        bulletPoints: [
          "ESI 1–5 — acuity tool in U.S. emergency departments",
          "Mass casualty — START tags: immediate, delayed, minimal, expectant",
          "Door-to-balloon / door-to-needle — time metrics for heart attack and stroke",
          "Boarding — ED holds due to inpatient capacity; safety risk",
          "Rationing — rare; explicit policies in catastrophic incidents",
        ],
      }
    ),
    section(
      "emergency-basics-s4",
      "8.4 Inside the emergency department: flow and roles",
      [
        "Typical flow: triage nurse → registration → primary nursing assessment → physician or advanced practitioner evaluation → diagnostics (labs, imaging) → treatment → disposition (admit, observe, discharge). Trauma activations bypass routine queue.",
        "Team roles include attending emergency physician, residents, PAs/NPs, nurses, techs, pharmacists, social work, and case management. Consultants join for specialty issues (orthopedics, psychiatry).",
        "Violence toward staff is rising; de-escalation training and security partnerships are standard. Patients in behavioral crisis need medical clearance and psychiatric placement—often a bottleneck.",
      ],
      {
        bulletPoints: [
          "Triage — first sort by acuity; vital signs and chief complaint",
          "Diagnostic workup — labs, X-ray, CT, ultrasound at bedside (POCUS)",
          "Observation units — short stays for rule-out protocols",
          "Admission — inpatient bed assignment; handoff to hospitalist",
          "Behavioral emergency — capacity, suicide risk, involuntary hold laws vary",
        ],
      }
    ),
    section(
      "emergency-basics-s5",
      "8.5 Disaster preparedness and hospital incident command",
      [
        "Hospitals use Incident Command System (ICS) structures during surges—hurricane, pandemic, mass shooting. Supply chain, staffing, and alternate care sites (field hospitals, canceled electives) free capacity.",
        "Employers train staff on fire drills, active threat response (Run, Hide, Fight frameworks), and hazardous materials exposure routes. Community partners include EMS, fire, police, and public health.",
        "Personal preparedness—medication list, medical ID, family communication plan—reduces ED burden during regional disasters.",
      ],
      {
        bulletPoints: [
          "Hospital ICS — unified command during large incidents",
          "Surge capacity — cancel electives, expand ICU, bring travelers",
          "Crisis standards of care — altered practice when resources exhausted",
          "Hazardous materials — decontamination zones before ED entry",
          "Personal readiness — go-bag, meds, documents, power-dependent devices",
        ],
        citations: [
          {
            source: "FEMA — Incident Command System",
            url: "https://training.fema.gov/emiweb/is/icsresource/",
            note: "Standardized command structure used in healthcare disasters",
          },
        ],
      }
    ),
  ],
  {
    subtitle: "EMS, first-aid literacy, triage, ED operations, and disaster response",
    learningObjectives: [
      "Describe the chain of survival and EMS system components.",
      "Recognize life-threatening presentations requiring EMS activation.",
      "Explain ED triage levels and patient flow at survey depth.",
      "Outline hospital and personal disaster preparedness concepts.",
    ],
    keyConcepts: ["Chain of survival", "ESI triage", "FAST stroke", "Incident Command", "Boarding"],
    realWorldRelevance:
      "Non-clinical staff and students encounter emergencies—knowing when and how to activate the system saves minutes.",
  }
);
