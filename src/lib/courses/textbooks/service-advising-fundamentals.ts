import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const SVC_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Service Advising Fundamentals",
  subtitle:
    "ForgEd workforce textbook — history, shop flow, inspections, and customer trust at the service desk",
  paragraphs: [
    "The service advisor is the hinge between the customer who owns the vehicle and the technicians who repair it. Long before the job title existed, dealerships still needed someone to translate symptoms into work orders, explain costs, and defend the shop’s reputation when repairs went wrong. Today that role sits at a computer screen—but the core work is unchanged: listen carefully, document accurately, and earn permission before spending someone else’s money.",
    "This course opens with a historical timeline so you see how the advisor role grew out of post-war dealership service departments, factory training programs, and later dealership management systems (DMS) and multi-point inspections. Later chapters cover shop flow, expectations, MPI presentation, scheduling, parts coordination, technician handoffs, and the metrics managers use to coach advisors without destroying trust.",
    "Content is practical workforce education—not ASE certification, OEM certification, or your employer’s policy manual. Always follow shop standard operating procedures, warranty rules, and high-voltage safety requirements for hybrid and electric vehicles.",
  ],
  additionalResources: [
    {
      title: "Industry reference",
      resources: [
        {
          source: "NADA — dealership operations education",
          url: "https://www.nada.org/",
          note: "Dealership workforce and fixed-operations context",
        },
        {
          source: "NHTSA — recalls and vehicle safety",
          url: "https://www.nhtsa.gov/recalls",
          note: "Look up open recalls by VIN before every write-up",
        },
      ],
    },
  ],
};

export const SVC_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "advisor-role",
    1,
    "The Service Advisor Role",
    [
      section(
        "advisor-role-s1",
        "1.1 History of the service advisor — timeline",
        [
          "For most of the automobile’s first decades, the person at the counter was often the owner, a foreman, or a mechanic who also sold the job. Customers described a noise; the shop guessed, repaired, and hoped for payment. As dealerships multiplied after World War II, service departments became profit centers separate from new-car sales—and someone had to own the customer conversation while technicians stayed on the floor.",
          "By the 1980s, computerized estimating and dealership management systems turned handwritten tickets into structured repair orders with labor codes and parts pricing. The “service writer” evolved into a service advisor: less grease, more consultative selling, factory maintenance menus, and warranty administration. The 2000s added digital multi-point inspections, photos, and text updates; the 2020s add EV high-voltage cautions, remote scheduling, and video walkarounds customers expect on their phones.",
          "Studying this timeline matters because modern pressure—hours per RO, CSI surveys, maintenance penetration—did not appear overnight. Advisors who understand the history explain repairs as stewardship of the vehicle, not as a script invented yesterday to inflate the ticket.",
        ],
        {
          bulletPoints: [
            "1908 — Model T era: rural garages and early dealers; the “advisor” is often the mechanic-owner",
            "1946 — Post-war boom: franchised dealers scale service bays; dedicated service counters become normal",
            "1960s — Factory training (Ford, GM, Chrysler programs) professionalize service department staff",
            "1977 — Clean Air Act phase-in: emissions diagnostics push advisors to explain new tests and repairs",
            "1980s — DMS and labor guide software (ADP-era systems) standardize estimates and time studies",
            "1990s — Multi-point inspections and menu selling spread; customer-pay maintenance packages grow",
            "2008 — Recession: retention and service absorption gain urgency as new-car sales collapse",
            "2014 — Smartphone service updates: photo MPIs and two-way texting become customer expectations",
            "2020s — EVs and ADAS: advisors coordinate high-voltage safety, scans, and calibration referrals",
          ],
          citations: [
            {
              source: "SAE International — automotive service history",
              url: "https://www.sae.org/",
              note: "Technical and workforce context for dealership service evolution",
            },
          ],
        }
      ),
      section(
        "advisor-role-s2",
        "1.2 What a service advisor does today",
        [
          "A service advisor is the customer’s primary contact for maintenance and repair. You capture the concern in the customer’s words, set realistic time and cost expectations, obtain authorization before additional work, and explain outcomes at pickup. Technicians diagnose and repair; parts sources components; the advisor keeps the story coherent on the repair order (RO) and in every conversation.",
          "Strong advisors are translators. A misfire code is not presented as “P0301” to most customers—it is explained as an engine cylinder that is not firing consistently, with a recommended test sequence and a price range before teardown. You also protect the shop: declined brakes are documented, not ignored, so liability and comeback risk are visible.",
          "The role blends hospitality, project management, and compliance. You schedule capacity, track loaner keys, flag open recalls, and ensure warranty claims include required documentation. Rude or evasive advisors lose customers to independents and national chains; clear advisors build repair-order count without relying on pressure tactics.",
        ],
        {
          bulletPoints: [
            "Primary duties — write-up, authorization, status updates, delivery, follow-up",
            "Translator — symptoms → inspection → recommendation → customer decision",
            "RO owner — concern, cause, correction (3 Cs) documented for each job",
            "Recall awareness — NHTSA campaigns checked by VIN, not from memory",
            "Scope — you recommend; the customer authorizes; the shop performs only approved work",
          ],
        }
      ),
      section(
        "advisor-role-s3",
        "1.3 The advisor in the shop ecosystem",
        [
          "Dealership fixed operations typically include service, parts, and body shop lanes tied to a common DMS. Advisors sit between the drive (customer arrival) and the shop floor (technician stalls). Morning huddles align promised delivery times with technician skill mix and open jobs from yesterday.",
          "Dispatch pairs the right job to the right tech—alignment specialists should not lose half a day on an intermittent electrical concern if a diagnostic tech is available. Advisors who hoard “their” technicians create bottlenecks; advisors who share dispatch data improve throughput and reduce comebacks from wrong-skill assignments.",
          "Parts delays are advisor problems even when parts staff order the components. Proactive communication—“your brake parts arrive at 2 p.m., we still expect same-day delivery unless the carrier slips”—beats silence until the customer calls angry. Loaner and rental policies, warranty time standards, and sublet repairs (glass, tires, body) all flow through the advisor’s calendar.",
        ],
        {
          bulletPoints: [
            "Drive workflow — greet, walkaround, write-up, key tag, stall assignment",
            "Dispatch board — promised time, tech flag hours, waiting parts, QC hold",
            "Parts interface — ETA updates, backorders, core charges, special-order deposits",
            "Sublet coordination — aligners, glass, body, calibration vendors",
            "Handoff to cashier — itemized bill, line-item authorization matches RO",
          ],
        }
      ),
      section(
        "advisor-role-s4",
        "1.4 Documentation that protects everyone",
        [
          "The repair order is a legal and financial record. Customer concern must quote what the driver reported (“grinding when stopping from 40 mph”), not what you assume. Technician cause and correction fields show what was found and what was done. Labor and parts lines match what was authorized; post-inspection additions need a new signature or digital approval.",
          "Multi-point inspection results belong on the RO or a linked inspection form—even declined items. “Customer declined rear pads at 3 mm” is defensible; silence is not. Time stamps matter for warranty audits and goodwill disputes: when the vehicle was checked in, when approval was received, when QC signed off.",
          "Photos and videos are increasingly standard. A 30-second clip of a torn bushing convinces faster than a paragraph of text, but never replace written authorization for the repair itself. Store media where your DMS or CRM policy requires; avoid personal phones without shop approval.",
        ],
        {
          bulletPoints: [
            "3 Cs — concern, cause, correction on every paid line",
            "Authorization trail — initial estimate, revisions, final approval",
            "Declined work — noted with mileage and measurement when applicable",
            "Warranty — op codes, failure codes, and attachments per OEM guide",
            "Pickup sheet — summary of work done, next service interval, reminders",
          ],
        }
      ),
      section(
        "advisor-role-s5",
        "1.5 Trust, ethics, and career growth",
        [
          "Customers forgive slow repairs more often than dishonest ones. Present menu-priced maintenance as optional schedules tied to severe driving conditions, not as scare tactics. If an item is safety-critical, say so plainly and document a decline; if it is preventive, label it that way.",
          "Internal ethics also matter: never punch time for another tech, never backdate authorization, never sell parts from inventory without a RO. CSI surveys and mystery shops reward genuine helpfulness, not scripts that dodge questions.",
          "Career paths run from advisor to lead advisor, service manager, fixed-operations director, or manufacturer field roles. Certifications (ASE Service Consultant, OEM advisor academies) signal commitment. The best advisors study one technical topic per month—brakes, tires, ADAS, HV systems—so explanations stay credible.",
        ],
        {
          bulletPoints: [
            "Educate-first selling — link inspection evidence to safety and cost of delay",
            "Transparency — separate warranty, internal, and customer-pay lines on invoices",
            "Comeback ownership — apologize, expedite, and root-cause with the tech team",
            "Continuous learning — ASE, OEM webinars, ride-alongs with master techs",
            "Reputation — your name follows you across rooftops in a connected market",
          ],
        }
      ),
    ],
    {
      subtitle: "From the service counter’s origins to the advisor you are training to become",
      learningObjectives: [
        "Place the service advisor role on a historical timeline from early dealerships to digital MPIs and EV service",
        "Describe modern advisor duties and how they differ from technician and parts roles",
        "Explain how accurate repair-order documentation reduces liability and comebacks",
        "Apply trust-based communication instead of pressure selling",
      ],
      chapterSummary:
        "Chapter 1 traces how the service advisor emerged as dealerships professionalized, then defines today’s translator-and-project-manager role, shop ecosystem handoffs, and the documentation habits that protect customers and the business.",
      keyConcepts: [
        "Service advisor as customer advocate and RO owner",
        "Historical shift from mechanic-counter to DMS-driven consultative role",
        "3 Cs documentation and declined-work notes",
        "Dispatch, parts ETA, and recall checks by VIN",
      ],
      realWorldRelevance:
        "Advisors who know why the role exists communicate with confidence—and avoid the hollow upsell language that erodes CSI scores.",
    }
  ),

  chapter(
    "shop-flow",
    2,
    "Shop Flow",
    [
      section(
        "shop-flow-s1",
        "2.1 How vehicles move through the service department",
        [
          "Shop flow is the choreography from arrival to keys-back. A typical lane includes: check-in and write-up, dispatch to a stall, diagnosis, parts fill, repair, quality control (QC), wash (if offered), cashier, and delivery. Each step has a clock; the advisor owns the customer-facing clock even when delay is technical.",
          "Visual management helps—color-coded keys, stall boards, or DMS status fields everyone agrees on (“waiting diagnosis,” “waiting parts,” “on lift,” “QC”). When statuses lie, customers hear conflicting stories. Pick one vocabulary for the store and use it.",
        ],
        {
          bulletPoints: [
            "Check-in — VIN scan, mileage, concern, walkaround, time promised",
            "Stall assignment — match skill, tools, and bay type to the job",
            "QC gate — no delivery without fluid leaks checked, torque verified, dash lights cleared",
            "Cashier — payments, warranties, and third-party payers reconciled to RO",
            "Delivery — explain work, reset maintenance minder, schedule next visit",
          ],
        }
      ),
      section(
        "shop-flow-s2",
        "2.2 Promised times and capacity planning",
        [
          "A promise time is a contract. Before you quote 5 p.m., look at open ROs, technician attendance, parts cutoffs, and sublet slots. Padding is honest; optimism that fails hurts CSI more than an extra day with updates.",
          "Express lanes handle quick jobs (oil, rotate, filters) with different throughput rules than heavy-line diagnostics. Mixing a no-start into a lube lane destroys both. Advisors should know daily capacity targets—how many hours the shop can sell versus how many are already committed.",
        ],
        {
          bulletPoints: [
            "Sold hours vs. available hours — do not overbook the dispatch board",
            "Parts cutoff — 2 p.m. freight means a 4 p.m. brake job may slip a day",
            "Walk-ins — triage by safety and severity, not arrival order alone",
            "Loaner pool — track keys; late returns cascade to broken promises",
            "End-of-day — carry forward status notes for the opening advisor",
          ],
        }
      ),
      section(
        "shop-flow-s3",
        "2.3 When flow breaks: bottlenecks and recovery",
        [
          "Bottlenecks cluster in diagnosis (complex jobs), parts (backorders), and QC (short-staffed). When you are late, call early with a fact and a plan—not “still working on it” for the fifth time. Offer shuttles, loaners, or pickup after cashier close if policy allows.",
          "Comebacks from yesterday steal today’s capacity. Shops that schedule comeback slots or a floater tech protect the main board. Advisors should flag repeat concerns on the RO header so dispatch does not treat them as fresh quick jobs.",
        ],
        {
          bulletPoints: [
            "Early warning — text at first miss, not at promised time",
            "Parts chase — advisor owns customer comms; parts owns vendor chase",
            "Tech idle time — often a paperwork or parts problem, not laziness",
            "Comeback lane — fast re-inspection with original tech when possible",
            "Manager escalation — use before promising impossible same-day engine work",
          ],
        }
      ),
      section(
        "shop-flow-s4",
        "2.4 Communication rhythm through the day",
        [
          "Set a cadence: update at diagnosis complete, at approval, at parts arrival, at QC, and at ready. Customers who never hear from you assume the worst. Two-minute calls beat perfect silence.",
          "Internal comms matter equally. A sticky note on a steering wheel is not a system. Use DMS notes, team chat, or flags your store actually reads. End-of-shift summaries prevent the morning advisor from re-asking the same questions.",
        ],
        {
          bulletPoints: [
            "Status templates — short, factual, no jargon",
            "Approval requests — itemized, with photos when helpful",
            "Waiting customers — lounge time expectations and shuttle offers",
            "Technician respect — do not sell work they have not verified",
            "Shift handoff — RO list with reds flagged",
          ],
        }
      ),
      section(
        "shop-flow-s5",
        "2.5 Measuring flow without gaming the numbers",
        [
          "Managers track cycle time (check-in to ready), throughput (ROs per day), and idle bay time. Advisors influence these by accurate write-ups—misdiagnosed jobs re-enter the shop twice. Gaming cycle time by closing ROs before QC shows up in comebacks within a week.",
          "Healthy shops review a daily exception report: jobs past promise, waiting parts over 24 hours, and declined safety items. Your goal is fewer surprises, not faster lies.",
        ],
        {
          bulletPoints: [
            "Cycle time — customer-visible; use honestly",
            "First-time fix — quality metric tied to write-up clarity",
            "Bay utilization — empty lifts often mean dispatch or parts issues",
            "Advisor load — too many active ROs guarantees missed callbacks",
            "Continuous improvement — one bottleneck fix per month",
          ],
        }
      ),
    ],
    {
      subtitle: "Moving cars and information from drive to delivery",
      learningObjectives: [
        "Map the standard service lane from check-in through QC and delivery",
        "Set promise times using capacity, parts, and technician skill constraints",
        "Recover late jobs with proactive customer updates",
      ],
      chapterSummary:
        "Shop flow is the operational backbone advisors manage—capacity, status honesty, and communication rhythm determine whether customers feel informed or abandoned.",
      keyConcepts: [
        "Promise time as a contract",
        "Dispatch and QC gates",
        "Bottleneck recovery communication",
      ],
      realWorldRelevance:
        "Shops that master flow sell more hours with fewer angry phone calls—advisors are the hub.",
    }
  ),

  chapter(
    "customer-expectations",
    3,
    "Customer Expectations",
    [
      section(
        "customer-expectations-s1",
        "3.1 What customers expect before they arrive",
        [
          "Most customers arrive with three silent questions: How long will it take? What will it cost? Can I trust you? Online scheduling, confirmation texts, and posted service menus set expectations before the drive. Broken digital promises—no loaner when the website said yes—start the visit underwater.",
          "Price anxiety is normal. Maintenance menus and “starting at” signage reduce shock, but advisors must still confirm findings after inspection. Never defend a surprise bill with “the website said starting at”—explain what changed on their vehicle.",
        ],
        {
          bulletPoints: [
            "Time — appointment honor, shuttle, loaner, or rental clarity",
            "Money — estimate ranges, diagnostics fees, shop supplies line",
            "Trust — reviews, OEM affiliation, cleanliness, and eye contact",
            "Convenience — night drop, key lockers, text approvals",
            "Safety — recalls and obvious hazards addressed first",
          ],
        }
      ),
      section(
        "customer-expectations-s2",
        "3.2 Transparency during the visit",
        [
          "Show the old air filter, measure pad thickness, display tire tread depth. Evidence lowers resistance more than adjectives. Pair every recommendation with consequence of delay: “You can drive roughly 2,000 more miles; below 3 mm we see noise and rotor damage risk.”",
          "Separate must-do from should-do. State inspection failures, leaking fuel lines, and inoperative brake lights are not equivalent to cabin filter upsells. Customers sense ranking; use it.",
        ],
        {
          bulletPoints: [
            "Evidence — photos, gauges, failed test printouts",
            "Priority tiers — safety, reliability, comfort, cosmetic",
            "No surprise additions — call before any unapproved line",
            "Language — avoid “gotcha” words; use plain English",
            "Cultural respect — adjust pace for stressed or elderly drivers",
          ],
        }
      ),
      section(
        "customer-expectations-s3",
        "3.3 Communication style that builds loyalty",
        [
          "Listen without interrupting the first 30 seconds. Repeat the concern back: “So the noise is only on cold starts, right front, and it went away last week—did I get that right?” Customers who feel heard accept more recommendations.",
          "Angry customers often want acknowledgment before solutions. Apologize for the experience, move to facts, and offer a path. Never argue with someone holding keys and a smartphone review app.",
        ],
        {
          bulletPoints: [
            "Active listening — repeat concern, ask clarifying questions",
            "Tone — calm beats clever under stress",
            "Updates — proactive texts reduce inbound calls",
            "Pickup — walk to the car, summarize value delivered",
            "Follow-up — thank-you message and next-service reminder",
          ],
        }
      ),
      section(
        "customer-expectations-s4",
        "3.4 Managing unrealistic expectations",
        [
          "Some customers expect same-day engine rebuilds at oil-change prices. Your job is to reset scope without condescension. Explain diagnostic time, parts lead times, and technician specialization. Offer alternatives: second opinion, rental, or phased repairs.",
          "Fleet and warranty customers bring their own rulebooks—know copays, maintenance intervals, and required op codes before promising coverage.",
        ],
        {
          bulletPoints: [
            "Diagnostic fee — explain before testing, credit when appropriate",
            "Parts lead time — OEM vs. aftermarket vs. used options",
            "Goodwill — manager involvement, not advisor promises alone",
            "Rental reimbursement — policy limits in writing",
            "Declined safety — document and offer re-inspection later",
          ],
        }
      ),
      section(
        "customer-expectations-s5",
        "3.5 Satisfaction surveys and long-term retention",
        [
          "Customer Satisfaction Index (CSI) surveys often arrive after pickup. The experience at write-up and delivery drives scores more than wrench work the customer never sees. Explain bills line by line; reset clock and radio settings; remove steering wheel covers.",
          "Retention beats conquest. A customer who returns for three oil services is cheaper than acquiring a new one. Advisors who remember vehicle history (“last year we noted seepage on the valve cover”) sound competent, not creepy.",
        ],
        {
          bulletPoints: [
            "CSI moments — greeting, explanation, clean car, accurate bill",
            "First visit — extra care; they are benchmarking you",
            "Complaints — same-day manager loop, written resolution",
            "Loyalty programs — use honestly, not as bait-and-switch",
            "Referrals — earned when trust is consistent",
          ],
        }
      ),
    ],
    {
      subtitle: "Time, money, and trust from the customer’s point of view",
      learningObjectives: [
        "Identify pre-arrival expectations set by digital tools and signage",
        "Present recommendations with evidence and priority tiers",
        "Handle difficult conversations without escalating conflict",
      ],
      chapterSummary:
        "Customer expectations are managed through transparency, listening, and realistic promises—CSI and retention follow when advisors treat communication as part of the repair.",
      keyConcepts: [
        "Time, cost, and trust triangle",
        "Evidence-based recommendations",
        "CSI-sensitive pickup habits",
      ],
      realWorldRelevance:
        "Independent shops and dealerships compete on experience as much as price—advisors are the brand.",
    }
  ),

  chapter(
    "multipoint",
    4,
    "Multi-Point Inspections",
    [
      section(
        "multipoint-s1",
        "4.1 Why multi-point inspections exist",
        [
          "A multi-point inspection (MPI) is a structured walkaround and under-hood/under-car checklist—typically 20–50 items—completed during routine visits. It protects the customer from unknown wear and protects the shop from “you never told me” disputes. It is not a license to invent work; it is a standardized look with measured results.",
          "OEM and aftermarket menus standardized green/yellow/red or pass/caution/fail language. Consistency lets any advisor present findings the same way, which helps teams and customers alike.",
        ],
        {
          bulletPoints: [
            "MPI purpose — document condition at this mileage",
            "Not a diagnosis — flags items for further testing",
            "Legal value — declined items noted with measurements",
            "Factory menus — align recommendations to severe/normal duty",
            "EV additions — HV cable inspection, battery health reports where applicable",
          ],
        }
      ),
      section(
        "multipoint-s2",
        "4.2 Performing and presenting the MPI",
        [
          "Technicians or lube techs often execute the MPI; advisors present it. If you present work you did not inspect, you will be caught. Ride along periodically to learn what “yellow” brakes actually look like.",
          "Presentation order: safety first (brakes, tires, lights), then fluids and filters, then alignment/suspension, then comfort items. Customers remember the first two categories; burying worn tires under cabin filters destroys credibility.",
        ],
        {
          bulletPoints: [
            "Measurements — pad mm, tread/32nds, battery CCA if tested",
            "Photos — tie to RO line numbers customers can reference",
            "Color codes — define once per store; do not mix metaphors",
            "Technician notes — translate into customer language",
            "Digital MPI — tablet signatures for approval where legal",
          ],
        }
      ),
      section(
        "multipoint-s3",
        "4.3 When customers decline recommendations",
        [
          "Declines are normal. Document “customer declined rear pads at 3 mm, understands noise risk, declines at this visit.” Some shops require initials; others use digital tap-decline. Never guilt-trip; offer future appointment or mileage reminder.",
          "If safety is borderline, involve a manager. You cannot force work, but you can refuse to release a vehicle in rare cases per shop counsel—know your policy.",
        ],
        {
          bulletPoints: [
            "Declined documentation — measurement + consequence noted",
            "Follow-up — schedule or reminder at 1,000 miles",
            "No bait-and-switch — MPI fee disclosed if charged",
            "Warranty — declined items may affect related claims later",
            "Respect — customer choice today does not mean enemy for life",
          ],
        }
      ),
      section(
        "multipoint-s4",
        "4.4 Ethical menu selling vs. pressure",
        [
          "Menu selling bundles maintenance items at a package price. Ethical use ties to OEM schedules and driving conditions. Unethical use pushes every bundle to every car. Advisors should explain what is due now versus what can wait until the next oil change.",
          "Penetration metrics (percent of ROs with MPI, percent with recommended work sold) guide coaching—they should not encourage false reds.",
        ],
        {
          bulletPoints: [
            "Maintenance menus — severe vs. normal duty intervals",
            "Line-item choice — unbundle when customer asks",
            "Factory rebates — disclose expiration and eligibility",
            "Third-party coupons — read exclusions before promising",
            "Coaching — sell to inspection evidence, not to a number",
          ],
        }
      ),
      section(
        "multipoint-s5",
        "4.5 MPI technology and continuous improvement",
        [
          "Video MPI tools let customers watch a tech narrate findings. Use them for transparency, not theatrics. Store videos per policy; obtain consent if required in your state.",
          "Review declined-item follow-up monthly: are brakes declining repeatedly on the same vehicle? That pattern suggests presentation problems, not customer stinginess.",
        ],
        {
          bulletPoints: [
            "Video walkarounds — short, labeled, stored on RO",
            "Integration — MPI lines flow to estimate without retyping",
            "Quality audits — random MPI reviews for honesty",
            "Training — advisors shadow techs quarterly",
            "Metrics — track decline reasons, not just sales",
          ],
        }
      ),
    ],
    {
      subtitle: "Structured inspections without losing customer trust",
      learningObjectives: [
        "Explain the purpose and limits of a multi-point inspection",
        "Present findings in safety-first order with measurements",
        "Document declines professionally and ethically",
      ],
      chapterSummary:
        "MPIs are the advisor’s evidence locker—used well they educate; used poorly they feel like a trap.",
      keyConcepts: [
        "MPI as documentation, not diagnosis",
        "Green/yellow/red presentation order",
        "Declined work notes",
      ],
      realWorldRelevance:
        "Shops with honest MPIs sell more maintenance over a customer’s lifetime than shops with inflated reds.",
    }
  ),

  chapter(
    "scheduling",
    5,
    "Scheduling",
    [
      section(
        "scheduling-s1",
        "5.1 Appointment types and shop capacity",
        [
          "Schedules mix maintenance appointments, recall campaigns, diagnostic blocks, and walk-in buffer. Blocking every slot to 100% guarantees overpromise. Best practice reserves capacity for comebacks, warranty jobs, and same-day failures.",
          "Online tools show open slots; advisors still validate skill and parts. A transmission job should not land in a 60-minute express slot.",
        ],
        {
          bulletPoints: [
            "Maintenance appt — predictable menu time + MPI",
            "Diagnostic block — 1–2 hour minimum for intermittent issues",
            "Recall — VIN list prep; parts pre-order when possible",
            "Walk-in buffer — 15–20% of bay hours unbooked",
            "Heavy line — alignment rack, frame rack, EV bay reservations",
          ],
        }
      ),
      section(
        "scheduling-s2",
        "5.2 Promising times customers can believe",
        [
          "Quote windows, not miracles: “between 3 and 5 p.m.” beats “definitely 3.” Factor cashier lines and wash queues. Same-day promises require a supervisor sign-off on parts on hand and tech time sold.",
          "Weather, holidays, and Monday backlogs are real. A shop that schedules honestly earns fewer angry calls than one that boasts same-day everything.",
        ],
        {
          bulletPoints: [
            "Time windows — under-promise, over-deliver",
            "Parts on hand — verify before same-day brake promise",
            "Tech PTO — adjust bookable slots when short-staffed",
            "Sublet — add transit days for glass or calibration",
            "EV jobs — HV bay and qualified tech on calendar",
          ],
        }
      ),
      section(
        "scheduling-s3",
        "5.3 Walk-ins, waiters, and loaners",
        [
          "Waiters expect visibility—offer lounge Wi-Fi realistically, not “30 minutes” for a timing belt. Loaner agreements need fuel, insurance, and mileage rules signed up front. Keys and contracts are advisor paperwork mistakes waiting to happen.",
          "Prioritize safety walk-ins (no brakes, overheating) without abandoning scheduled customers—manager triage helps.",
        ],
        {
          bulletPoints: [
            "Waiter expectations — update every 30–45 minutes minimum",
            "Loaner contract — fuel level, damage sketch, return time",
            "Shuttle routes — batch runs; set return pickup times",
            "Night drop — secure keys, theft prevention, concern form",
            "Priority triage — safety > no-start > maintenance",
          ],
        }
      ),
      section(
        "scheduling-s4",
        "5.4 Reminders and return visits",
        [
          "Service reminders by text, email, or mail work when tied to actual mileage and menu intervals—not spam. After a decline, schedule a future MPI or call at 3,000 miles. CRM notes should show who promised the follow-up.",
          "Missed appointments cost gross profit; confirm day-before with an easy reschedule link. Two no-shows may need a phone call instead of open slots.",
        ],
        {
          bulletPoints: [
            "Mileage-based reminders — not arbitrary 90-day blasts",
            "Declined work callbacks — advisor-owned",
            "Confirmation texts — reduce no-shows",
            "CRM hygiene — correct phone and email",
            "Opt-out respect — stop texts when asked",
          ],
        }
      ),
      section(
        "scheduling-s5",
        "5.5 Scheduling metrics that matter",
        [
          "Useful metrics: appointment show rate, scheduler accuracy (actual vs. promised), and average days to next visit. Vanity metrics that punish advisors for customers who cancel due to job loss are toxic.",
          "Coordinate with marketing on recall mailers—advisors should know campaign dates so bays are not double-booked blind.",
        ],
        {
          bulletPoints: [
            "Show rate — fix with confirmations, not threats",
            "Schedule adherence — coach on parts and diag realism",
            "Return interval — goal per brand retention target",
            "Advisor overbooking — cap active RO count",
            "Campaign alignment — recalls and seasonal tires",
          ],
        }
      ),
    ],
    {
      subtitle: "Booking work the shop can actually finish",
      learningObjectives: [
        "Match appointment types to bay and technician capacity",
        "Set believable promise windows with parts and sublet factored in",
        "Use reminders and callbacks without harassing customers",
      ],
      chapterSummary:
        "Scheduling is where promises are born—accurate books prevent advisor firefights all afternoon.",
      keyConcepts: [
        "Capacity buffer for walk-ins and comebacks",
        "Loaner and waiter expectations",
        "Mileage-based reminders",
      ],
      realWorldRelevance:
        "One overbooked Monday can poison CSI for the week—scheduling discipline is advisor work.",
    }
  ),

  chapter(
    "parts-basics",
    6,
    "Parts Coordination",
    [
      section(
        "parts-basics-s1",
        "6.1 How advisors depend on parts",
        [
          "Parts departments quote prices, check inventory, order OEM and aftermarket units, and manage cores and returns. Advisors who treat parts as adversaries get slow answers; advisors who share VIN, build codes, and trim level get faster picks.",
          "Wrong parts stall bays and break promise times. A ten-minute advisor investment at write-up—verify tire size, engine code, brake package—saves hours later.",
        ],
        {
          bulletPoints: [
            "VIN decode — build sheet, option codes, emissions package",
            "OEM vs. aftermarket — warranty and customer choice",
            "Special order — deposits and cancellation policy",
            "Core charges — return old alternator or pay fee",
            "Bin location — tech time wasted hunting is customer delay",
          ],
        }
      ),
      section(
        "parts-basics-s2",
        "6.2 Pricing and customer disclosure",
        [
          "Customers see parts markup on invoices. Explain value: OEM fit, warranty, availability, and shop markup policy. Quoting aftermarket without asking when they expected OEM breeds conflict.",
          "Shop supplies, environmental fees, and taxes should not appear first at pickup. Disclose fee structures when your state and shop policy require it.",
        ],
        {
          bulletPoints: [
            "Parts markup — shop policy; do not apologize for lawful disclosure",
            "List price vs. sell price — DMS controls; know where to look",
            "Customer-supplied parts — shop policy on warranty and liability",
            "Price match — only if store approves; document approval",
            "Estimate revision — call when parts price changes before install",
          ],
        }
      ),
      section(
        "parts-basics-s3",
        "6.3 Backorders and emergency sourcing",
        [
          "When the dealer stock is empty, parts may pull from regional depots or aftermarket vendors. Advisors communicate ETA and options: rent car, leave vehicle, or partial repair. Never install a substitute part without customer authorization unless policy covers safety recalls.",
          "High-voltage battery and ADAS parts often require OEM specificity—shortcuts cause comebacks and safety risk.",
        ],
        {
          bulletPoints: [
            "ETA updates — daily until parts land",
            "Partial repairs — secure vehicle if unsafe to drive",
            "Overnight freight — who pays when cause is shop delay",
            "Backorder cancellation — customer rights on deposits",
            "HV/ADAS parts — no unapproved substitutions",
          ],
        }
      ),
      section(
        "parts-basics-s4",
        "6.4 Returns, warranties, and cores",
        [
          "Defective parts get returned with RA numbers; advisors track credits so customers are not double-charged. Cores not returned bill the customer—explain at authorization. Warranty parts require original failure retained per OEM rules.",
          "Miscounted quantity or wrong line on RO is an advisor fix before cashier, not an argument at the window.",
        ],
        {
          bulletPoints: [
            "Core return — deadline and condition (no cracks)",
            "Parts warranty — labor to reinstall may differ from part warranty",
            "Return auth — RA before shipping box",
            "Restocking fee — disclose on special orders",
            "RO line accuracy — match physical parts installed",
          ],
        }
      ),
      section(
        "parts-basics-s5",
        "6.5 Building a parts partnership",
        [
          "Daily five-minute huddles between lead advisor and parts manager align on hot jobs, backorders, and recall parts arrivals. Share tomorrow’s heavy hits so bins can be staged.",
          "When customers praise fast repairs, thank parts publicly—culture reduces finger-pointing.",
        ],
        {
          bulletPoints: [
            "Staging — parts pulled to RO before car hits stall",
            "Pick ticket accuracy — advisor clarifies left vs. right",
            "Inventory counts — advisor alerts when bin shows zero repeatedly",
            "Recall bins — segregated; do not sell recall stock retail",
            "Respect — shared KPI on cycle time, not blame",
          ],
        }
      ),
    ],
    {
      subtitle: "Keeping bays moving when the right part is everything",
      learningObjectives: [
        "Provide parts staff complete vehicle data at write-up",
        "Disclose markup, cores, and customer-supplied part policies",
        "Communicate backorder ETAs and options clearly",
      ],
      chapterSummary:
        "Parts coordination is invisible when it works—and catastrophic when advisors treat it as someone else’s job.",
      keyConcepts: [
        "VIN-accurate ordering",
        "Core and warranty returns",
        "Advisor–parts huddle habit",
      ],
      realWorldRelevance:
        "Most ‘late car’ stories are parts stories told too late to the customer.",
    }
  ),

  chapter(
    "technician-handoff",
    7,
    "Technician Handoff",
    [
      section(
        "technician-handoff-s1",
        "7.1 Write-up quality technicians can execute",
        [
          "Technicians should not guess the customer’s story. Write symptoms, conditions (cold/hot, speed, load), and history (“noise started after tire rotation at another shop”). Attach prior RO notes for repeat concerns. Flag aftermarket modifications (lift kits, stereo draws) that affect diagnosis.",
          "A vague write-up produces vague bills and comebacks. Spend two extra minutes at the drive; save forty in the shop.",
        ],
        {
          bulletPoints: [
            "Symptom description — customer words + advisor clarifiers",
            "When — intermittent vs. constant; weather; load",
            "History — prior repairs on same system",
            "Modification disclosure — non-OEM wheels, tune, accessories",
            "Test drive offer — advisor notes if customer declines",
          ],
        }
      ),
      section(
        "technician-handoff-s2",
        "7.2 Dispatch conversation",
        [
          "Hand the RO to the tech with context: promised time, customer temperament, and approval limits (“do not exceed $400 without call”). Face-to-face beats sticky notes for complex jobs.",
          "Respect technician flat-rate time—unnecessary comebacks hurt their paycheck. When you sell a job, ensure parts and special tools are available before the clock starts.",
        ],
        {
          bulletPoints: [
            "Approval cap — dollar and line-item limits",
            "Customer profile — waiter, fleet, warranty, VIP",
            "Tech skill match — electrical vs. drivability vs. maintenance",
            "Parts staged — yes/no before flagging in stall",
            "Time clock — story hours align with book time realistically",
          ],
        }
      ),
      section(
        "technician-handoff-s3",
        "7.3 Mid-job changes and approvals",
        [
          "Additional work requires a new approval path—call, text link, or in-person signature. “While we were in there” without consent is a lawsuit pattern. Summarize findings in one sentence, price the delta, and note if the car is safe to drive if declined.",
          "If diagnosis disproves the original concern, tell the customer before charging full diagnostic on a ghost hunt—shop policy varies, transparency wins.",
        ],
        {
          bulletPoints: [
            "Supplemental estimate — itemized, time-stamped",
            "Declined additional — document safety implication",
            "Diagnostic path — show test results, not guesses",
            "Goodwill — manager approval documented",
            "Stop work order — customer request to pause",
          ],
        }
      ),
      section(
        "technician-handoff-s4",
        "7.4 QC before the advisor promises ready",
        [
          "QC verifies torque, fluid levels, test drives, and dash lights cleared. Advisors should not tell customers “ready” until QC signs off. Pulling cars early for CSI score hurts when the customer discovers a leak in the driveway.",
          "Wash and vacuum are not QC. Do not confuse cosmetic finish with mechanical completion.",
        ],
        {
          bulletPoints: [
            "QC checklist — leaks, lights, torque, road test",
            "Comeback prevention — verify original concern resolved",
            "Fluids — caps secured, no spills on exhaust",
            "ADAS — calibration completed if bumper R&I",
            "Ready status — only after QC, not when tech flags done",
          ],
        }
      ),
      section(
        "technician-handoff-s5",
        "7.5 Closing the loop with technicians",
        [
          "After pickup, share customer feedback—positive and negative—with the tech team. Comebacks get a blameless review: was it parts, diagnosis, or communication? Advisors who learn basic systems read RO causes faster and write better next time.",
          "Ride-alongs build credibility. One morning per quarter on the floor teaches more than ten sales seminars.",
        ],
        {
          bulletPoints: [
            "Feedback loop — CSI comments to tech board",
            "Comeback review — 3 Cs compared to first RO",
            "Ride-along — advisor learns inspection truth",
            "Respect — no selling repairs tech has not verified",
            "Team wins — share praise when customer mentions tech by name",
          ],
        }
      ),
    ],
    {
      subtitle: "Clear stories from drive to stall and back",
      learningObjectives: [
        "Write repair orders technicians can execute without guesswork",
        "Obtain supplemental approvals before extra work begins",
        "Coordinate QC status before telling customers the vehicle is ready",
      ],
      chapterSummary:
        "Handoffs are where information dies or thrives—advisor clarity is technician efficiency.",
      keyConcepts: [
        "Symptom-rich write-ups",
        "Supplemental authorization",
        "QC before ready call",
      ],
      realWorldRelevance:
        "Comebacks often trace to the write-up, not the wrench—advisors are the first quality gate.",
    }
  ),

  chapter(
    "advisor-metrics",
    8,
    "Advisor Metrics",
    [
      section(
        "advisor-metrics-s1",
        "8.1 Metrics managers actually watch",
        [
          "Fixed-operations leaders track labor gross, parts gross, hours per repair order (HPRO), effective labor rate (ELR), maintenance penetration, and customer satisfaction. Advisors influence all of them, but short-term gaming hurts long-term retention.",
          "Know your store’s dashboard. Ask which metrics drive bonuses and which protect customers—often they are not the same list.",
        ],
        {
          bulletPoints: [
            "HPRO — hours sold per RO; quality over stuffing",
            "ELR — labor revenue per flagged hour",
            "Parts-to-labor ratio — balance per job type",
            "MPI penetration — percent of visits with inspection",
            "CSI / NPS — experience scores post-visit",
          ],
        }
      ),
      section(
        "advisor-metrics-s2",
        "8.2 Maintenance penetration without poisoned trust",
        [
          "Maintenance penetration measures how much scheduled service you capture versus OEM menus. Ethical penetration comes from reminders, MPI evidence, and easy scheduling—not from declaring every fluid “due now.”",
          "Coaches should review declined safety items more than they celebrate oil filter add-on rates.",
        ],
        {
          bulletPoints: [
            "Menu due items — by mileage and severity schedule",
            "Declined follow-up — tracked callbacks, not guilt",
            "Recall completion — VIN scrub compliance",
            "Tire and brake — measurement-based conversations",
            "EV coolant/brake fluid — follow OEM intervals, not ICE habits",
          ],
        }
      ),
      section(
        "advisor-metrics-s3",
        "8.3 Comebacks and first-time fix",
        [
          "Comeback rate is the honesty tax on bad write-ups, wrong parts, and skipped QC. Advisors own the customer communication on comebacks—apologize, expedite, and document root cause. First-time fix rate rises when diagnosis time is sold honestly upfront.",
          "Never hide a comeback as a “new concern” without linking prior RO numbers.",
        ],
        {
          bulletPoints: [
            "Comeback — link original RO; no duplicate full charges",
            "Warranty vs. customer-pay — classify correctly",
            "Diagnostic time — bill transparently; credit if policy allows",
            "Tech cooperation — share findings, not blame",
            "Trend review — same VIN three times = process problem",
          ],
        }
      ),
      section(
        "advisor-metrics-s4",
        "8.4 Personal performance habits",
        [
          "Track your own rolling averages: ROs per day, callback success, average customer wait for approval, and survey mentions by name. Top advisors batch approval calls at mid-morning and mid-afternoon instead of playing phone tag all day.",
          "Avoid metric toxicity—if leadership only rewards gross without CSI, expect churned customers and burned staff.",
        ],
        {
          bulletPoints: [
            "Daily RO load — sustainable cap",
            "Approval response time — under 30 minutes when possible",
            "Survey mentions — read verbatim comments weekly",
            "Training hours — one technical topic monthly",
            "Peer shadowing — learn from highest-CSI advisor, not just highest gross",
          ],
        }
      ),
      section(
        "advisor-metrics-s5",
        "8.5 Building a career on sustainable numbers",
        [
          "The advisors who last decades balance gross with trust. They know ELR but also know every regular customer’s name. They use metrics as mirrors, not weapons.",
          "When you interview at a new store, ask how they measure success—if the answer is only “hours per RO,” listen carefully to how they treat declines and comebacks.",
        ],
        {
          bulletPoints: [
            "Long game — retention beats one big ticket",
            "ASE Service Consultant — study path for credibility",
            "OEM academies — brand-specific systems training",
            "Ethical ceiling — walk away from toxic pay plans",
            "Leadership path — lead advisor, assistant manager, service manager",
          ],
        }
      ),
    ],
    {
      subtitle: "Understanding the scoreboard without gaming customers",
      learningObjectives: [
        "Define common fixed-operations metrics (HPRO, ELR, CSI, penetration)",
        "Improve maintenance penetration through evidence and follow-up",
        "Reduce comebacks with better write-ups and QC discipline",
      ],
      chapterSummary:
        "Metrics tell the store’s story—advisors who read them honestly improve pay and customer loyalty together.",
      keyConcepts: [
        "HPRO and ELR basics",
        "Ethical maintenance penetration",
        "Comeback linkage to documentation",
      ],
      realWorldRelevance:
        "Managers promote advisors who hit numbers without burning the database—be that person on purpose.",
    }
  ),
];
