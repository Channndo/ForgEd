/**
 * Generates rigorous, chapter-specific healthcare quiz bank from curated items.
 * Run: node scripts/generate-healthcare-quiz-bank.mjs
 */
import fs from "fs";
import path from "path";

const OUT = path.join(
  process.cwd(),
  "src/lib/courses/textbook/banks/healthcare-fundamentals.ts"
);

/** @type {Record<number, Array<{q:string,opts:[string,string,string,string],c:0|1|2|3,exp:string}>>} */
const BY_CHAPTER = {
  1: [
    { q: "Ignaz Semmelweis is remembered in medical history primarily for promoting:", opts: ["Hand hygiene to reduce childbirth fever deaths", "Antibiotic prescribing for viral colds", "Open-heart surgery without anesthesia", "Elimination of all hospitals"], c: 0, exp: "Semmelweis linked handwashing to infection control decades before germ theory was accepted." },
    { q: "The Hippocratic tradition (~400 BCE) emphasized that physicians should:", opts: ["Study illness through natural observation, not only supernatural blame", "Avoid all documentation of patient care", "Prescribe antibiotics for every fever", "Replace nursing with family members only"], c: 0, exp: "Hippocratic medicine urged rational observation and ethical duty." },
    { q: "Germ theory and antisepsis in the 19th century most directly enabled:", opts: ["Prevention of many surgical and childbirth infections", "Universal MRI imaging", "Electronic health records", "Medicare Advantage plans"], c: 0, exp: "Lister, Pasteur, Koch, and others transformed infection control." },
    { q: "Evidence-based medicine today prioritizes:", opts: ["Randomized trials, systematic reviews, and clinical guidelines", "Tradition alone without measurement", "Social media consensus", "Chargemaster list prices as treatment plans"], c: 0, exp: "EBM uses research synthesis—not habit alone." },
    { q: "Ethical failures such as the Tuskegee syphilis study led to modern protections including:", opts: ["Informed consent and institutional review boards (IRBs)", "Elimination of all research", "Mandatory placebo-only care", "Public posting of full medical records on social media"], c: 0, exp: "Belmont principles and IRBs protect research participants." },
    { q: "Which description best captures U.S. healthcare as taught in Chapter 1?", opts: ["Only what happens between a physician and patient in an exam room", "Clinical services plus financing, regulation, facilities, workforce, and information systems", "A single government program that pays all medical bills", "Pharmacy dispensing without hospitals or insurers"], c: 1, exp: "Healthcare is an organized system—not just bedside medicine." },
    { q: "Medicare Part A primarily covers which type of service?", opts: ["Outpatient prescription drugs only", "Inpatient hospital and skilled nursing facility stays (subject to benefits)", "Dental and vision for all seniors", "Employer wellness stipends"], c: 1, exp: "Part A is hospital insurance; Parts B/D cover other services." },
    { q: "A working adult receives insurance through their employer plan. This is an example of:", opts: ["Medicaid expansion", "Commercial / employer-sponsored coverage", "Tricare only", "Uncompensated charity care"], c: 1, exp: "Employer-sponsored insurance remains common for working adults." },
    { q: "A patient pays $30 at the clinic visit after insurance processes the claim. That patient cost is best termed:", opts: ["Capitation", "Copayment (cost sharing)", "Global period bundling", "Chargemaster list price"], c: 1, exp: "Copays are fixed patient payments at time of service." },
    { q: "After a hip fracture repair, the patient needs daily therapy and 24-hour nursing for two weeks. The most appropriate post-acute setting is often:", opts: ["Retail clinic", "Skilled nursing facility (SNF) rehab", "Pharmacy-only follow-up", "Employer occupational health"], c: 1, exp: "SNF provides nursing plus therapy after hospitalization." },
    { q: "Which role is legally authorized to diagnose disease and prescribe medications in all U.S. states (subject to licensure)?", opts: ["Medical assistant", "Registered nurse without advanced practice authority", "Physician (MD/DO)", "Health information management clerk"], c: 2, exp: "Physicians hold medical diagnosis and prescribing authority." },
    { q: "A certified nursing assistant (CNA) asks to adjust a patient’s IV pump rate independently. The best response is:", opts: ["Allow it if the CNA is experienced", "Refuse—this is outside CNA scope; notify licensed nursing", "Document and proceed if the physician is busy", "Ask the patient to consent"], c: 1, exp: "Scope of practice is defined by license and policy." },
    { q: "SBAR handoffs are emphasized in patient safety because they primarily reduce:", opts: ["Medication manufacturing defects", "Communication failures during transitions of care", "Hospital parking congestion", "Insurance prior authorization delays"], c: 1, exp: "Structured handoffs target communication-related harm." },
    { q: "A hospital’s publicly reported 30-day readmission rate is an example of:", opts: ["A clinical trial primary endpoint only", "A quality/outcomes metric tied to value-based payment", "Pharmacy inventory turnover", "Medical student grading"], c: 1, exp: "Readmissions are common value-based quality measures." },
    { q: "Fee-for-service payment differs from capitation because fee-for-service:", opts: ["Pays a fixed amount per member per month regardless of visits", "Rewards volume of services delivered", "Eliminates all patient cost sharing", "Requires no documentation"], c: 1, exp: "FFS incentivizes service volume; capitation pays per enrolled member." },
    { q: "A rural hospital’s payer mix is mostly Medicaid and uninsured patients. Financial pressure is likely driven by:", opts: ["Lower reimbursement relative to commercial insurance", "Excess Medicare Advantage profits", "Mandatory concierge membership fees", "Elimination of all quality reporting"], c: 0, exp: "Safety-net hospitals often rely on lower government reimbursement." },
    { q: "Telehealth for a rash photo may be appropriate; crushing chest pain should go to the ED because:", opts: ["Telehealth replaces all emergency care", "Acuity must match setting—high-acuity symptoms need emergency capability", "Rashes always require inpatient admission", "Insurance forbids video visits"], c: 1, exp: "System design matches acuity to appropriate site of care." },
    { q: "The Joint Commission and WHO surgical checklists are examples of:", opts: ["Optional social media trends", "High-reliability safety interventions adopted in healthcare", "Pharmacy compounding formulas", "Patient entertainment programs"], c: 1, exp: "Checklists are evidence-based safety tools." },
    { q: "Present on admission (POA) indicators in hospitals matter because they:", opts: ["Determine hair color coding", "Affect quality reporting for certain hospital-acquired conditions", "Replace ICD-10 codes entirely", "Eliminate need for nursing notes"], c: 1, exp: "POA flags whether conditions were present at admission." },
    { q: "A patient asks why the hospital ‘chargemaster’ price is not what Medicare paid. The best explanation is:", opts: ["Medicare always pays chargemaster in full", "Negotiated payer contracts determine actual reimbursement, not list price", "Hospitals never bill insurers", "Chargemaster is the patient’s copay"], c: 1, exp: "List prices rarely equal contracted payment." },
  ],
  2: [
    { q: "Person-centered care prioritizes:", opts: ["What matters to the patient, not only the disease label", "Physician convenience exclusively", "Avoiding all family input", "Maximum tests regardless of goals"], c: 0, exp: "Person-centered care respects goals and preferences." },
    { q: "Teach-back method is used to:", opts: ["Confirm the patient understands instructions in their own words", "Speed discharge without questions", "Replace licensed assessment", "Document insurance eligibility"], c: 0, exp: "Teach-back verifies understanding." },
    { q: "In SBAR, the 'A' stands for:", opts: ["Assessment", "Authorization billing code", "Allergies only", "Admission hour"], c: 0, exp: "SBAR: Situation, Background, Assessment, Recommendation." },
    { q: "A child is used to interpret a parent’s surgical consent discussion. Best action:", opts: ["Continue if the child speaks English", "Stop and obtain a qualified interpreter for consent", "Use gestures only", "Defer consent to registration"], c: 1, exp: "Children should not interpret clinical consent." },
    { q: "Rising heart rate with falling blood pressure in a post-op patient suggests:", opts: ["Improving perfusion", "Possible shock until proven otherwise—escalate", "Normal sleep", "Allergic rhinitis only"], c: 1, exp: "Trends in vitals matter more than a single reading." },
    { q: "Contact precautions are added for MRSA colonization primarily to prevent:", opts: ["Spread via touch/contact transmission", "Airborne spread only", "Food-borne illness", "Radiation exposure"], c: 0, exp: "MRSA commonly uses contact precautions." },
    { q: "Standard precautions apply to:", opts: ["Only patients with known HIV", "All patients—treat blood/body fluids as potentially infectious", "Visitors only", "Billing staff never"], c: 1, exp: "Standard precautions are universal." },
    { q: "A nurse documents 'patient difficult.' Better documentation is:", opts: ["Objective behavior: 'patient refused meds at 1400, stated nausea'", "Leave blank", "Use only emojis", "Copy prior shift without reading"], c: 0, exp: "Objective, factual notes are legally defensible." },
    { q: "Medication reconciliation at discharge prevents:", opts: ["Readmissions from medication errors and omissions", "All pain", "Need for follow-up", "Insurance verification"], c: 0, exp: "Reconciliation compares home vs hospital med lists." },
    { q: "Pain is called the 'fifth vital sign' because:", opts: ["It affects function and must be assessed regularly", "It replaces blood pressure", "It is always zero", "It requires MRI"], c: 0, exp: "Pain assessment guides treatment." },
    { q: "Verbal orders, where permitted, require:", opts: ["No documentation", "Read-back and timely authentication per policy", "Texting only on personal phones", "Patient signature"], c: 1, exp: "Verbal orders need verification loops." },
    { q: "Antibiotic stewardship aims to:", opts: ["Use antibiotics whenever patients request them for colds", "Ensure antibiotics are necessary, targeted, and stopped when inappropriate", "Eliminate all infections instantly", "Replace hand hygiene"], c: 1, exp: "Stewardship fights resistance." },
    { q: "A patient reports suspected abuse at home. Mandatory reporter should:", opts: ["Ignore unless physician agrees", "Follow facility protocol and state reporting requirements", "Post details on social media", "Discharge without note"], c: 1, exp: "Abuse reporting follows law and policy." },
    { q: "Droplet precautions (e.g., influenza) require:", opts: ["Negative pressure room always", "Mask within ~6 feet; patient mask when transported", "No PPE", "Sterile surgical gown for all visitors always"], c: 1, exp: "Droplet precautions use surgical masks." },
    { q: "Professional boundaries prohibit:", opts: ["Dual relationships that undermine therapeutic trust", "Explaining diagnoses", "Using interpreters", "Escalating safety concerns"], c: 0, exp: "Boundaries protect patients and staff." },
    { q: "Early warning scores aggregate vitals to:", opts: ["Trigger rapid response before arrest", "Replace physician exams", "Bill extra codes only", "Eliminate nursing assessment"], c: 0, exp: "EWSS support escalation." },
    { q: "Health literacy strategies include:", opts: ["Jargon-heavy handouts", "Plain language and teach-back", "Assuming college education", "Refusing questions"], c: 1, exp: "Plain language improves adherence." },
    { q: "Closed-loop communication means:", opts: ["Sender confirms the receiver heard the order correctly", "Email only", "Patient self-diagnosis", "Ignoring alarms"], c: 0, exp: "Closed-loop reduces order errors." },
    { q: "Goals-of-care conversations should occur:", opts: ["Only in the ICU hallway without privacy", "With preparation, private space, and empathy", "Never—only legal should talk", "Only by text message"], c: 1, exp: "Serious conversations need privacy and skill." },
    { q: "A nursing assistant notices new confusion and fever. Best action:", opts: ["Wait until end of shift", "Report promptly to licensed nurse—change in condition", "Give unprescribed antibiotics", "Discharge patient"], c: 1, exp: "Unlicensed roles report changes; RNs assess." },
  ],
  3: [
    { q: "The suffix '-ectomy' means:", opts: ["Inflammation", "Removal", "Visual examination", "Blood condition"], c: 1, exp: "-ectomy = surgical removal." },
    { q: "Hyper- versus hypo- prefixes:", opts: ["Both mean excessive", "Hyper = excessive; hypo = deficient", "Neither changes root meaning", "Only used in pharmacy"], c: 1, exp: "Hyper/hypo are opposite prefixes." },
    { q: "Proximal vs distal on the arm:", opts: ["Proximal is closer to the trunk; distal is farther", "Proximal is always lateral", "Distal means superior only", "They are interchangeable"], c: 0, exp: "Proximal/distal describe limb position." },
    { q: "A sagittal plane divides the body into:", opts: ["Left and right portions", "Front and back only", "Upper and lower only", "Quadrants"], c: 0, exp: "Sagittal = left/right split." },
    { q: "RUQ pain localization uses:", opts: ["Abdominal quadrants", "Cranial nerves only", "Dental numbering", "EKG leads"], c: 0, exp: "Quadrants abbreviate abdominal exams." },
    { q: "Cardi/o as a root relates to:", opts: ["Heart", "Skin", "Kidney", "Lung only"], c: 0, exp: "Cardi = heart." },
    { q: "Neur/o commonly refers to:", opts: ["Nerve", "Bone marrow only", "Stomach", "Liver"], c: 0, exp: "Neur = nerve." },
    { q: "The Joint Commission 'Do Not Use' abbreviation list exists because:", opts: ["Abbreviations can cause fatal misreads", "Hospitals prefer longer charts", "Patients demand Latin only", "Insurance requires it for dental"], c: 0, exp: "Banned abbreviations reduce medication errors." },
    { q: "µg vs mg confusion is dangerous because:", opts: ["Units are identical", "1000-fold dosing errors can occur", "Only affects billing", "Applies to imaging only"], c: 1, exp: "Micrograms vs milligrams are easily confused." },
    { q: "A chart lists 'MI.' Most likely expansion:", opts: ["Myocardial infarction", "Mitral insufficiency only always", "Migraine always", "Motor injury only"], c: 0, exp: "MI usually means heart attack context." },
    { q: "Gastroenterology breaks down to roots meaning roughly:", opts: ["Study of stomach/intestine", "Bone disease", "Ear surgery", "Skin cancer"], c: 0, exp: "Gastr/o + enter/o + -logy." },
    { q: "An order says 'q.d.' Many institutions discourage it because:", opts: ["It can be misread as q.i.d. or q.o.d.", "It means every hour always", "It is required by HIPAA", "It replaces ICD-10"], c: 0, exp: "q.d. is on many Do Not Use lists." },
    { q: "Laterality in ICD-10 coding requires documentation of:", opts: ["Left vs right when applicable", "Patient favorite color", "Insurance brand", "Nurse shift"], c: 0, exp: "Specificity includes side when relevant." },
    { q: "Adenocarcinoma combines roots suggesting:", opts: ["Gland-type cancer", "Bone infection", "Nerve inflammation only", "Skin rash"], c: 0, exp: "Adeno- (gland) + carcinoma." },
    { q: "Ileum vs ilium confusion risks:", opts: ["Wrong-site or wrong interpretation errors", "Only billing delays", "No clinical impact", "Improved pronunciation only"], c: 0, exp: "Similar sounds cause errors—verify." },
    { q: "Transverse (horizontal) plane divides:", opts: ["Superior and inferior portions", "Only eyes", "Medial/lateral only", "Insurance tiers"], c: 0, exp: "Transverse = upper/lower." },
    { q: "Hemat/o relates to:", opts: ["Blood", "Urine", "Breathing", "Vision"], c: 0, exp: "Hemat = blood." },
    { q: "When an abbreviation is unclear on a prescription, staff should:", opts: ["Guess based on habit", "Clarify with prescriber or pharmacist before acting", "Ask the patient to decide dose", "Skip the medication"], c: 1, exp: "Never guess unclear medication orders." },
    { q: "Coronal (frontal) plane divides:", opts: ["Anterior and posterior", "Left and right only", "Superior/inferior only", "Dental arches"], c: 0, exp: "Coronal = front/back." },
    { q: "Decoding unknown terms should start by:", opts: ["Memorizing entire dictionary first", "Splitting into prefix, root, suffix", "Ignoring suffixes", "Using only lay terms in orders"], c: 1, exp: "Word parts reveal meaning." },
  ],
};

// Chapters 4-15 continue in part 2 - file too large, append via second write

function emitTs(byChapter) {
  const lines = [
    `import type { QuizQuestion } from "@/lib/quizTypes";`,
    ``,
    `function q(`,
    `  id: string,`,
    `  question: string,`,
    `  options: [string, string, string, string],`,
    `  correctIndex: 0 | 1 | 2 | 3,`,
    `  explanation: string`,
    `): QuizQuestion {`,
    `  return { id, question, options, correctIndex, explanation };`,
    `}`,
    ``,
    `/** ${Object.values(byChapter).flat().length} rigorous, chapter-specific questions */`,
    `export const HEALTHCARE_FUNDAMENTALS_BANK: QuizQuestion[] = [`,
  ];
  for (const [ch, items] of Object.entries(byChapter).sort((a, b) => Number(a[0]) - Number(b[0]))) {
    const pad = String(ch).padStart(2, "0");
    items.forEach((item, i) => {
      const n = String(i + 1).padStart(2, "0");
      const opts = item.opts.map((o) => JSON.stringify(o)).join(",");
      lines.push(
        `  q("heal-ch${pad}-q${n}", ${JSON.stringify(item.q)}, [${opts}], ${item.c}, ${JSON.stringify(item.exp)}),`
      );
    });
  }
  lines.push(`];`, ``);
  return lines.join("\n");
}

// Load part 2 if exists
const part2Path = path.join(process.cwd(), "scripts/healthcare-quiz-ch4-15.mjs");
let merged = { ...BY_CHAPTER };
if (fs.existsSync(part2Path)) {
  const mod = await import(`file://${part2Path}`);
  merged = { ...merged, ...mod.BY_CHAPTER_4_15 };
}

const count = Object.values(merged).flat().length;
if (count < 300) {
  console.error(`Expected 300 questions, got ${count}. Add remaining chapters.`);
  process.exit(1);
}

fs.writeFileSync(OUT, emitTs(merged));
console.log(`Wrote ${count} questions to ${OUT}`);
