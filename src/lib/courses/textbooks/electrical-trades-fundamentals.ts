import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const ELEC_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Electrical Trades Fundamentals",
  subtitle: "ForgEd skilled-trades survey — safety, wiring, panels, NEC literacy, and apprenticeship",
  paragraphs: [
    "Electrical trade work powers modern life—but incorrect installations kill and burn. This course teaches residential and light commercial literacy for apprentices and helpers, not electrical engineering design.",
    "Ten chapters cover safety, circuits, conductors, residential and commercial basics, NEC overview, troubleshooting, and careers. Assessments draw from a 200-question randomized bank.",
    "Only qualified, licensed electricians should perform energized work in the field. Treat this material as education; obey OSHA, NFPA 70E, and your state board rules on site.",
  ],
};

export const ELEC_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "elec-intro",
    1,
    "Introduction to the Electrical Trade",
    [
    section(
      "elec-intro-s1",
      "1.1 Introduction to the Electrical Trade — Residential and commercial electrician scope",
      ["Electricians install, maintain, and repair power distribution, lighting, controls, and equipment connections in buildings and industrial sites. This textbook targets the electrical construction and maintenance trade path—apprenticeship, journeyman licensure, and field supervision—not electrical engineering degree work.","Daily tasks include pulling wire in raceway, terminating devices, setting panels, bending conduit, reading NEC-based plans, and testing circuits. Work spans new construction, tenant improvements, service upgrades, and maintenance calls.","Employers include electrical contractors, facility departments, data-center specialists, and maintenance firms. Safety culture and code compliance define competent crews."], {
        bulletPoints: ["Branch circuit — from breaker to loads","Feeder — larger conductors between panels","Service — utility to main disconnect","Maintenance — existing building troubleshooting","Contractor — licensed firm pulling permits"]
      }
    ),
    section(
      "elec-intro-s2",
      "1.2 Introduction to the Electrical Trade — Apprenticeship ratios and classroom hours",
      ["Registered programs combine 4–5 years of OJT with related instruction on NEC, theory, motors, and safety. Ratio rules limit how many apprentices per journeyman on a crew.","Apprentices tag along on material prep, wire pulls, and cleanup before graduating to terminations under direct supervision. Math skills—algebra for conduit bends, ohms law—matter on exams.","State licensing boards set hour logs; keep accurate records."], {
        bulletPoints: ["OJT hours — typically 8,000 for journeyman","Related instruction — code and theory classes","Ratio — apprentice count per supervisor","Hour log — state-approved documentation","Classroom — union hall or community college"]
      }
    ),
    section(
      "elec-intro-s3",
      "1.3 Introduction to the Electrical Trade — Construction versus maintenance career flavor",
      ["Construction crews chase schedules, work exposed decks, and install rough-in before drywall. Maintenance electricians know building histories, odd retrofits, and overnight shutdown windows.","Both need lockout/tagout discipline. Construction emphasizes installation methods; maintenance emphasizes diagnosis speed and customer communication.","Many electricians cross-train early, then specialize for wage and lifestyle fit."], {
        bulletPoints: ["Rough-in — boxes and conduit before finish","Trim-out — devices and panels energized last","Shutdown — planned power-off for tie-in","LOTO — lockout/tagout before work","On-call — maintenance rotation"]
      }
    ),
    section(
      "elec-intro-s4",
      "1.4 Introduction to the Electrical Trade — Myths about shock risk and \"just tie it in\"",
      ["Voltage does not \"go away\" when breakers look off—verify absence of voltage. Cutting corners on grounding and GFCI protection kills and burns. PPE is backup, not primary protection.","Social media shortcuts skip listing requirements and torque specs. Inspectors and insurers reject untrained work.","Respect apprenticeship pace—speed comes after safe habit formation."], {
        bulletPoints: ["De-energized work — preferred whenever feasible","Verify — test before touch","GFCI/AFCI — life-safety devices per NEC","Listed parts — UL/ETL marked equipment","Torque — manufacturer specs on lugs"]
      }
    ),
    section(
      "elec-intro-s5",
      "1.5 Introduction to the Electrical Trade — First month on a commercial electrical crew",
      ["Orientation covers site hazards, arc-flash boundaries (awareness), PPE, and gang box etiquette. You will measure, pull wire, sort material, and label circuits under supervision.","Learn names: foreman, general foreman, superintendent. Ask which prints are current. Never energize work you did not test.","End each day with tool count and cleanup—lost Klein linemans slow everyone."], {
        bulletPoints: ["Gang box — crew tool storage","Print revision — date on electrical sheets","Circuit labeling — panel directory accuracy","Material staging — wire reels and conduit","Tool mark — initials on personal gear"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why introduction to the electrical trade matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in introduction to the electrical trade","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["Branch circuit — from breaker to loads","Feeder — larger conductors between panels","OJT hours — typically 8,000 for journeyman","Related instruction — code and theory classes","Rough-in — boxes and conduit before finish","Trim-out — devices and panels energized last"],
      realWorldRelevance: "Journeymen and service techs use introduction to the electrical trade daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "elec-safety",
    2,
    "Electrical Safety and PPE",
    [
    section(
      "elec-safety-s1",
      "2.1 Electrical Safety and PPE — Shock, arc flash, and approach boundaries",
      ["Shock injury depends on path through body, duration, and current. Arc flash releases thermal energy and pressure from faults—PPE categories come from incident energy analysis on larger gear.","Approach boundaries on energized equipment are labeled; unqualified persons stay back. Qualified workers use written procedures and PPE matched to risk.","De-energize, verify, apply LOTO before touch work whenever possible."], {
        bulletPoints: ["Qualified person — training and demonstrated skill","Incident energy — cal/cm² on arc flash label","Approach boundary — limited/restricted/prohibited","Arc-rated clothing — CAT level matched to hazard","LOTO — personal lock on disconnect"]
      }
    ),
    section(
      "elec-safety-s2",
      "2.2 Electrical Safety and PPE — Insulated tools and meter habits",
      ["Use rated meters and leads; check CAT rating against service voltage. One-hand test technique reduces cross-body shock path. Inspect gloves and mats per ASTM schedules.","Insulated hand tools protect slips onto live parts during trim. Do not modify bits or cheater bars on live gear.","Replace cracked leads immediately."], {
        bulletPoints: ["DMM — digital multimeter usage","CAT III/IV — meter category for location","One-hand rule — other hand in pocket","Rubber gloves — dated testing for HV work","Insulated drivers — rated for exposure"]
      }
    ),
    section(
      "elec-safety-s3",
      "2.3 Electrical Safety and PPE — Job-site safety meetings and JSAs",
      ["Daily toolbox talks cover tasks, hazards, and controls. Job safety analyses break down steps for lifts, trenching near utilities, and panel energization.","Stop work authority is real—report untagged energization or missing covers.","Document near-misses; they predict serious events."], {
        bulletPoints: ["Toolbox talk — 5–10 minute crew briefing","JSA — job safety analysis steps","Stop work — halt until hazard controlled","Near-miss — report without blame to learn","Cover plates — install before leaving panel"]
      }
    ),
    section(
      "elec-safety-s4",
      "2.4 Electrical Safety and PPE — Common safety failures in the field",
      ["Missing panel covers, abandoned live tails in ceilings, ungrounded metal boxes, and reversed neutral/ground bonds cause shocks and fires. Overloaded temporary power strips on construction heat are frequent fires.","Rushing trim without testing GFCI function fails inspection and endangers users.","Trainees must speak up when asked to work hot without justification."], {
        bulletPoints: ["Energized coverless panel — shock hazard","Temporary power — GFCI protection on cords","Bonding error — neutral-ground mix-up","Backstab — spring connections; screw term preferred","Hot work policy — energized only when necessary"]
      }
    ),
    section(
      "elec-safety-s5",
      "2.5 Electrical Safety and PPE — Building a personal safety checklist",
      ["Before work: permits, prints, LOTO devices, meter batteries, PPE fit. During: verify zero energy, torque terminations, label circuits. After: restore covers, update panel directory, remove locks only when safe.","Annual NFPA 70E awareness training complements OSHA 10/30 cards employers require. OSHA 1926 Subpart K and 1910 Subpart S govern construction and maintenance electrical work—GFCI on temp power and training records are frequent audit items.","Safety professionalism advances you to lead roles."], {
        bulletPoints: ["Pre-job — hazard scan","Verify dead — three-point test where policy requires","Torque log — large feeder terminations","Panel schedule — update after changes","70E training — arc-flash awareness"],
        citations: [{"source":"OSHA — Electrical Safety","url":"https://www.osha.gov/electrical","note":"Construction and general industry electrical standards overview"}]
      }
    )
    ],
    {
      learningObjectives: ["Explain why electrical safety and ppe matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in electrical safety and ppe","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["Qualified person — training and demonstrated skill","Incident energy — cal/cm² on arc flash label","DMM — digital multimeter usage","CAT III/IV — meter category for location","Toolbox talk — 5–10 minute crew briefing","JSA — job safety analysis steps"],
      realWorldRelevance: "Journeymen and service techs use electrical safety and ppe daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "elec-circuits",
    3,
    "Circuits, Ohm's Law, and Test Equipment",
    [
    section(
      "elec-circuits-s1",
      "3.1 Circuits, Ohm's Law, and Test Equipment — Voltage, current, and resistance relationships",
      ["Ohm's law (V = I × R) explains how voltage pushes current through resistance. Series circuits share current; parallel branches split current by conductance. Power (watts) equals voltage times current—critical for heat in conductors and loads.","Apprentices use the law to predict voltage drop on long branch circuits and to understand why a dim bulb can mean high resistance connection, not just a bad lamp.","AC systems add reactance; trade math focuses on practical approximations and code tables before deep phasor analysis."], {
        bulletPoints: ["Volt — electrical pressure","Ampere — current flow","Ohm — resistance unit","Series — single current path","Parallel — multiple branches"]
      }
    ),
    section(
      "elec-circuits-s2",
      "3.2 Circuits, Ohm's Law, and Test Equipment — Series, parallel, and combination loads",
      ["Receptacles on a branch are in parallel; switches in series with loads control current. Multi-wire branch circuits share neutral—handle with care to avoid overload when breakers are mishandled.","Motor loads draw inrush current; HVAC compressors need correct overcurrent protection.","Identify loads before swapping breakers—upsizing without wire evaluation is a fire risk."], {
        bulletPoints: ["Branch circuit — protected by one OCPD","Inrush — motor starting current spike","Multi-wire — shared neutral; tied breakers","Load calc — NEC Article 220 basics","OCPD — overcurrent protective device/breaker"]
      }
    ),
    section(
      "elec-circuits-s3",
      "3.3 Circuits, Ohm's Law, and Test Equipment — Using a DMM on de-energized circuits",
      ["Select volts, ohms, or continuity; verify lead placement. Continuity proves a complete path; resistance finds loose neutrals. Never ohms on live circuits.","Document readings in troubleshooting notes. Compare to expected: heater element ohms, ballast signatures.","Calibrate habits: probe on known live source before and after (when policy allows) to catch dead batteries."], {
        bulletPoints: ["Continuity beep — path complete","Resistance — ohms for elements and coils","Voltage — line-to-line, line-to-neutral","Lead placement — correct jacks for amps","Battery check — meter self-test"]
      }
    ),
    section(
      "elec-circuits-s4",
      "3.4 Circuits, Ohm's Law, and Test Equipment — Misread meters and ghost voltage",
      ["High-impedance ghost voltage from adjacent energized conductors can fool a naive reading—load the circuit or use low-Z meter mode where appropriate.","Confusing AC/DC settings on controls leads to wrong conclusions.","Assuming zero because breaker is off without LOTO verification causes shock."], {
        bulletPoints: ["Ghost voltage — capacitive coupling indication","Low-Z mode — reduces false positives","AC/DC — match system type","LOTO — verify absence of voltage","Record readings — avoid guesswork"]
      }
    ),
    section(
      "elec-circuits-s5",
      "3.5 Circuits, Ohm's Law, and Test Equipment — From theory problem to panel schedule",
      ["Translate classroom problems to panel directories: which breaker feeds which room, continuous vs noncontinuous loads, and dedicated appliance circuits.","Practice load calc worksheets for small dwelling units—kitchen, laundry, HVAC circuits.","Understanding theory speeds trim troubleshooting when a tripping breaker maps to a real load list."], {
        bulletPoints: ["Panel schedule — breaker to circuit map","Continuous load — 125% factor where required","Dedicated circuit — single appliance","Worksheet — NEC 220 simplified dwelling","Trip mapping — label-driven diagnosis"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why circuits, ohm's law, and test equipment matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in circuits, ohm's law, and test equipment","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["Volt — electrical pressure","Ampere — current flow","Branch circuit — protected by one OCPD","Inrush — motor starting current spike","Continuity beep — path complete","Resistance — ohms for elements and coils"],
      realWorldRelevance: "Journeymen and service techs use circuits, ohm's law, and test equipment daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "elec-conductors",
    4,
    "Conductors, Boxes, and Raceway",
    [
    section(
      "elec-conductors-s1",
      "4.1 Conductors, Boxes, and Raceway — Wire types and insulation ratings",
      ["THHN/THWN-2 copper is common in conduit; NM-B (Romex) in dwelling wood framing where permitted; MC cable in commercial; UF for direct burial. Temperature ratings (90°C dry) interact with ampacity tables and bundling adjustments.","Aluminum feeders need listed lugs and anti-oxidant compound where specified; torque matters.","Strip length and termination method follow device listing—too much bare copper is a fault."], {
        bulletPoints: ["THHN — thermoplastic high heat nylon","NM-B — nonmetallic sheathed cable","MC — metal-clad armored cable","Ampacity — Table 310.16 baseline","Aluminum — CO/ALR devices or listed lugs"]
      }
    ),
    section(
      "elec-conductors-s2",
      "4.2 Conductors, Boxes, and Raceway — Box fill and conductor bundling",
      ["Box fill calculations count conductors, clamps, and devices—overfill causes heat and damage. Use box extensions or larger boxes when adding smart switches.","Bundling many current-carrying conductors reduces ampacity—adjust derating factors.","Pull boxes sized for bending radius ease wire pulls."], {
        bulletPoints: ["Box fill — NEC 314.16 calculation","Extension ring — depth for added devices","Derating — ampacity adjustment for bundles","Pull box — junction with access","Device yoke — mounting ears"]
      }
    ),
    section(
      "elec-conductors-s3",
      "4.3 Conductors, Boxes, and Raceway — Installing EMT and pulling wire",
      ["Cut EMT square, ream burrs, set connectors tight. Support spacing per code; straps within distance of boxes. Lubricate pulls on long runs; stagger splices in pulls.","Green wire is equipment grounding; bond metal raceway. Identify conductors with phase tape beyond required reidentification.","Bend 90s with consistent radius to avoid jacket damage on THHN."], {
        bulletPoints: ["EMT — electrical metallic tubing","Connector — set screw or compression","Fish tape — pull path through conduit","Grounding — EGC with raceway bond","Support — straps per NEC"]
      }
    ),
    section(
      "elec-conductors-s4",
      "4.4 Conductors, Boxes, and Raceway — Overfilled boxes and damaged insulation",
      ["Forced devices into shallow boxes nick insulation. Pull replacements require access—document if concealed splices are allowed (generally not in walls without access).","Conduit lips without bushings slice jackets. Fix before energizing.","Heat from loose connections darkens wires—replace damaged segment."], {
        bulletPoints: ["Shallow box — upgrade depth","Bushing — conduit end protection","Accessible splice — junction box required","Darkened wire — heat damage replacement","Inspection — reject damaged conductors"]
      }
    ),
    section(
      "elec-conductors-s5",
      "4.5 Conductors, Boxes, and Raceway — Raceway layout on a small commercial room",
      ["Route home runs from panel to boxes with minimal bends—each 90 adds pull friction. Coordinate ceiling height with HVAC.","Stub-ups from slab need sleeves; firestop after inspection where rated.","Label conduits at both ends for future troubleshooting."], {
        bulletPoints: ["Home run — direct path from panel","Stub-up — vertical conduit from slab","Bend count — fewer 90s easier pull","Sleeve — slab penetration protection","Conduit label — circuit ID both ends"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why conductors, boxes, and raceway matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in conductors, boxes, and raceway","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["THHN — thermoplastic high heat nylon","NM-B — nonmetallic sheathed cable","Box fill — NEC 314.16 calculation","Extension ring — depth for added devices","EMT — electrical metallic tubing","Connector — set screw or compression"],
      realWorldRelevance: "Journeymen and service techs use conductors, boxes, and raceway daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "elec-residential",
    5,
    "Residential Wiring and Panels",
    [
    section(
      "elec-residential-s1",
      "5.1 Residential Wiring and Panels — Dwelling service and panel basics",
      ["Single-family services commonly 100–200A, with main breaker or main lug panel and separate disconnect where required. Service entrance cable or conduit from meter base to panel; grounding electrode system (rod, Ufer, water bond where allowed).","Keep working clearance in front of panel—36 inches deep typical. Bond neutral and ground only at service point.","Solar and battery interconnection add new rules—coordinate with utility."], {
        bulletPoints: ["Service rating — amps from utility","Main breaker — service disconnect in panel","EGC — equipment grounding conductor","Electrode — ground rod/Ufer to earth","Working space — NEC 110.26"]
      }
    ),
    section(
      "elec-residential-s2",
      "5.2 Residential Wiring and Panels — NM-B routing and protection plates",
      ["Run NM through bored studs with plates where closer than 1-1/4 inch to face. Support within intervals; staple without damaging sheath.","Separate low-voltage from line voltage; crossing at 90 degrees if needed.","Outdoor-rated wiring methods where wet locations prohibit NM."], {
        bulletPoints: ["Bore shield — nail plate","Staple — NM support intervals","Wet location — UF or conduit methods","Low voltage — separation from power","Sheath damage — replace segment"]
      }
    ),
    section(
      "elec-residential-s3",
      "5.3 Residential Wiring and Panels — Kitchen, laundry, and bathroom circuits",
      ["Small appliance branch circuits, GFCI/AFCI protection, dedicated laundry, bathroom receptacle rules change by NEC edition—use local adopted code.","Counter receptacles spaced per code; island and peninsula outlets where required.","Dedicated microwave or refrigerator circuits reduce nuisance trips."], {
        bulletPoints: ["SABC — small appliance branch circuits","GFCI — personnel protection device","AFCI — arc-fault protection","Dedicated — single appliance circuit","Island outlet — countertop rules"]
      }
    ),
    section(
      "elec-residential-s4",
      "5.4 Residential Wiring and Panels — Tripped AFCI and shared neutral errors",
      ["AFCI nuisance trips from shared neutrals on MWBC mishandled, bad arcs on damaged cords, or incompatible dimmers. Neutral-to-ground faults trip GFCI.","Identify load by switching off branches; megohm test insulation when persistent.","Do not defeat protection—fix cause."], {
        bulletPoints: ["MWBC — handle tied breakers","Nuisance trip — diagnose load type","Insulation test — find damaged NM","Neutral-ground — bond only at service","Defeat — illegal and dangerous"]
      }
    ),
    section(
      "elec-residential-s5",
      "5.5 Residential Wiring and Panels — Rough-in walkthrough for a ranch home",
      ["Walk plan with foreman: panel location, smoke CO locations, exterior wet receptacles, HVAC disconnect. Drill top plates with firestop.","Box heights consistent; nail plates before insulators.","Pre-wire inspection before insulation."], {
        bulletPoints: ["Panel location — 30-inch width clearance","Smoke/CO — interconnected where required","Exterior GFCI — weather-resistant cover","Firestop — top plate penetrations","Pre-wire — inspection before insulation"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why residential wiring and panels matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in residential wiring and panels","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["Service rating — amps from utility","Main breaker — service disconnect in panel","Bore shield — nail plate","Staple — NM support intervals","SABC — small appliance branch circuits","GFCI — personnel protection device"],
      realWorldRelevance: "Journeymen and service techs use residential wiring and panels daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "elec-devices",
    6,
    "Lighting, Devices, and Load Calculations",
    [
    section(
      "elec-devices-s1",
      "6.1 Lighting, Devices, and Load Calculations — Switches, receptacles, and dimming controls",
      ["Single-pole, three-way, and four-way switching patterns control loads from multiple locations. Listed dimmers match LED loads; neutral-required dimmers need neutral in box.","Tamper-resistant receptacles in dwelling spaces; weather-resistant covers outdoors.","Smart devices need neutral and often 2.4 GHz hub—verify box volume."], {
        bulletPoints: ["Three-way — traveler conductors between switches","Four-way — between two three-ways","TR receptacle — tamper resistant","WR cover — in-use weather cover","Neutral-required dimmer — spare neutral in box"]
      }
    ),
    section(
      "elec-devices-s2",
      "6.2 Lighting, Devices, and Load Calculations — Lighting types and branch design",
      ["LED retrofits reduce load but inrush matters on commercial controls. Emergency lighting on branch or unit equipment with test buttons.","Calculate lighting load for commercial using VA per fixture and demand factors.","Title 24 and IECC add energy controls in many states—coordinate with GC."], {
        bulletPoints: ["LED — electronic driver in fixture","Emergency — egress illumination path","Demand factor — reduces counted load","Occupancy sensor — energy code device","Foot-candle — lighting level goal"]
      }
    ),
    section(
      "elec-devices-s3",
      "6.3 Lighting, Devices, and Load Calculations — Load calculation for a dwelling unit",
      ["NEC Article 220 optional and standard methods count general lighting at 3 VA/sq ft, small appliance circuits, laundry, appliances, HVAC at nameplate or calculation.","Service size emerges from computed load vs available utility.","Apprentices practice worksheets; masters sign load calcs on plans."], {
        bulletPoints: ["General lighting — 3 VA per square foot typical","Largest motor — special calculation","HVAC — heating vs cooling selection","Service upgrade — when calc exceeds panel","Worksheet — step-by-step NEC 220"]
      }
    ),
    section(
      "elec-devices-s4",
      "6.4 Lighting, Devices, and Load Calculations — Overloaded circuits and wrong breakers",
      ["Adding outlets without calc invites trips and heat. Wrong breaker on wire gauge—#14 on 20A—overheats wire before breaker opens.","Backstab failures heat devices—use screw terminations on critical circuits.","Continuous loads need 125% conductor sizing where applicable."], {
        bulletPoints: ["Upsizing wire — match breaker to conductor","Continuous — 3+ hour loads factor","Backstab — spring slot; screw preferred","Heat at device — loose or overload","Breaker curve — B vs C for inrush"]
      }
    ),
    section(
      "elec-devices-s5",
      "6.5 Lighting, Devices, and Load Calculations — Device trim on a tenant finish",
      ["Align devices plumb; tighten straps without cracking plates. Torque spec on spec-grade receptacles.","Test GFCI/AFCI buttons; label HVAC disconnect.","Punch minor drywall chips before paint."], {
        bulletPoints: ["Device level — cosmetic standard","Torque screwdriver — spec-grade terminations","Test button — GFCI/AFCI function","Plate gap — uniform reveal","Punch — touch-up list"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why lighting, devices, and load calculations matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in lighting, devices, and load calculations","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["Three-way — traveler conductors between switches","Four-way — between two three-ways","LED — electronic driver in fixture","Emergency — egress illumination path","General lighting — 3 VA per square foot typical","Largest motor — special calculation"],
      realWorldRelevance: "Journeymen and service techs use lighting, devices, and load calculations daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "elec-commercial",
    7,
    "Commercial Basics and Motor Circuits",
    [
    section(
      "elec-commercial-s1",
      "7.1 Commercial Basics and Motor Circuits — Three-phase power in buildings",
      ["Commercial services often 208Y/120V or 480Y/277V three-phase wye. Motors use three poles; phase rotation matters for pump direction.","Identify lines with rotation meter before closing motor.","Transformers step voltages inside building—know primary/secondary."], {
        bulletPoints: ["Wye — line-to-neutral and line-to-line","Delta — no neutral on some services","Phase rotation — ABC order for motors","208/120 — common light commercial","480/277 — large lighting loads"]
      }
    ),
    section(
      "elec-commercial-s2",
      "7.2 Commercial Basics and Motor Circuits — Motor starters and disconnects",
      ["Motors need disconnect within sight, overcurrent protection, and starter/contactor for large units. Overload heaters sized to FLA.","VFDs add harmonics and EMC concerns—follow manufacturer install manual.","Lockout at disconnect before maintenance."], {
        bulletPoints: ["FLA — full load amps on nameplate","Starter — contactor plus overload","Disconnect — visible lockable device","VFD — variable frequency drive","Overload — thermal protection"]
      }
    ),
    section(
      "elec-commercial-s3",
      "7.3 Commercial Basics and Motor Circuits — Installing a motor disconnect and whip",
      ["Mount disconnect within sight of motor; run MC or conduit whip with ground. Torque lugs; test rotation under supervision.","Bond motor frame; ground raceway.","Record nameplate data on panel schedule."], {
        bulletPoints: ["Sight line — disconnect visibility rule","Whip — short flex to motor","Rotation test — bump motor briefly","Ground lug — frame bond","Nameplate — voltage, phase, FLA"]
      }
    ),
    section(
      "elec-commercial-s4",
      "7.4 Commercial Basics and Motor Circuits — Phase loss and overloaded starters",
      ["Single-phasing heats windings; overloads should trip. Chattering contactors indicate coil voltage issues.","Undersized wire causes voltage drop and heat.","Do not bypass overloads."], {
        bulletPoints: ["Single-phase — one leg missing","Voltage drop — long undersized feeder","Chatter — low coil voltage","Bypass — illegal overload defeat","Megger — insulation test motor"]
      }
    ),
    section(
      "elec-commercial-s5",
      "7.5 Commercial Basics and Motor Circuits — Commercial panelboard coordination",
      ["Panel schedules list feeders, breaker sizes, and loads. Multi-pole breakers for three-phase; handle ties for MWBC where used.","Working space and panel labeling per NEC.","Future spare breakers planned for tenant growth."], {
        bulletPoints: ["Panel schedule — directory accuracy","Multi-pole — three-pole breaker for 3φ","Spare — planned capacity","Label — permanent circuit ID","110.26 — working clearance"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why commercial basics and motor circuits matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in commercial basics and motor circuits","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["Wye — line-to-neutral and line-to-line","Delta — no neutral on some services","FLA — full load amps on nameplate","Starter — contactor plus overload","Sight line — disconnect visibility rule","Whip — short flex to motor"],
      realWorldRelevance: "Journeymen and service techs use commercial basics and motor circuits daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "elec-codes",
    8,
    "NEC Overview, Codes, and Inspections",
    [
    section(
      "elec-codes-s1",
      "8.1 NEC Overview, Codes, and Inspections — NEC structure and local adoption",
      ["The National Electrical Code (NFPA 70) organizes requirements by article: grounding, wiring methods, special occupancies. States and cities adopt editions (2020, 2023) with amendments.","Code minimum ensures safety; specs may exceed. Always cite adopted edition on permit.","NFPA handbooks explain intent; field uses enforced legal code."], {
        bulletPoints: ["Article 210 — branch circuits","Article 250 — grounding and bonding","Article 300 — wiring methods","Adopted edition — year on permit","AHJ — local inspector authority"],
        citations: [{"source":"NFPA 70 — National Electrical Code","url":"https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70","note":"Verify adopted NEC edition with your jurisdiction"}]
      }
    ),
    section(
      "elec-codes-s2",
      "8.2 NEC Overview, Codes, and Inspections — How inspectors read your work",
      ["Inspectors check bonding, box fill, conductor support, GFCI/AFCI placement, working space, and torque on large lugs. Rough inspection before cover; final with devices and labels.","Be professional—fix items without argument; re-inspect quickly.","Failed items delay energization and occupancy."], {
        bulletPoints: ["Rough — boxes, grounding, support","Final — operation and labeling","Torque — large terminations","Re-inspect — after corrections","Red tag — failed until fixed"]
      }
    ),
    section(
      "elec-codes-s3",
      "8.3 NEC Overview, Codes, and Inspections — Permit and inspection sequencing",
      ["Pull electrical permit linked to building permit. Schedule temp power inspection separately on large sites.","Utility release after final—meter set.","Keep as-builts for additions."], {
        bulletPoints: ["Temp power — construction service","Utility — meter after final","As-built — field changes documented","Inspection log — permit card","Energize — only after approval"]
      }
    ),
    section(
      "elec-codes-s4",
      "8.4 NEC Overview, Codes, and Inspections — Common NEC failures on rough",
      ["Unsupported NM, missing nail plates, wrong box type for damp locations, missing ground pigtails, illegal splices outside box.","Commercial: missing bushings, improper EMT support.","Education prevents repeat failures."], {
        bulletPoints: ["Ground pigtail — bond box and device","Unsupported cable — staple intervals","Damp-rated box — wet location","Illegal splice — must be in box","Bushing — EMT terminations"]
      }
    ),
    section(
      "elec-codes-s5",
      "8.5 NEC Overview, Codes, and Inspections — Code book navigation practice",
      ["Tab Articles 210, 250, 300, 310, 406, 408 for daily work. Practice lookup drills: GFCI location, box fill, conduit fill.","Exam open-book speed matters for licensure.","Digital NEC apps speed field questions—confirm edition."], {
        bulletPoints: ["Tabs — exam and field speed","310.16 — ampacity table","314.16 — box fill","Chapter 9 — conduit fill tables","Edition match — app vs adopted code"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why nec overview, codes, and inspections matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in nec overview, codes, and inspections","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["Article 210 — branch circuits","Article 250 — grounding and bonding","Rough — boxes, grounding, support","Final — operation and labeling","Temp power — construction service","Utility — meter after final"],
      realWorldRelevance: "Journeymen and service techs use nec overview, codes, and inspections daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "elec-troubleshoot",
    9,
    "Troubleshooting and Maintenance",
    [
    section(
      "elec-troubleshoot-s1",
      "9.1 Troubleshooting and Maintenance — Systematic fault isolation",
      ["Start with symptom: no power, partial outage, tripping breaker, flicker. Map affected area to panel schedule. Verify reported outage—sometimes utility issue.","Segment by switching off branches; use meter on de-energized parts after LOTO.","Document steps—helps warranty and training."], {
        bulletPoints: ["Symptom map — area to circuit","Segment — divide and conquer","Utility check — meter base power","Documentation — steps and readings","LOTO — before contact"]
      }
    ),
    section(
      "elec-troubleshoot-s2",
      "9.2 Troubleshooting and Maintenance — Neutral and ground troubleshooting",
      ["Open neutral causes voltage swing on MWBC; shared neutral loose screw heats devices. Ground faults trip GFCI.","Measure voltage line-to-neutral vs line-to-ground; compare under load.","Bond only at service—subpanel neutrals separated from grounds where required."], {
        bulletPoints: ["Open neutral — dim/brights on MWBC","Loose neutral — heat at device","Ground fault — leakage to ground","Subpanel — separate neutral and ground bars","Voltage rise — open neutral hazard"]
      }
    ),
    section(
      "elec-troubleshoot-s3",
      "9.3 Troubleshooting and Maintenance — Maintenance shutdown planning",
      ["Coordinate with owner for overnight or weekend shutdown. Notify fire alarm and IT; battery backups on critical loads.","Test backup generators after transfer switch exercise.","Restore in reverse order; verify all loads."], {
        bulletPoints: ["Shutdown plan — written steps","IT coordination — servers on UPS","Transfer switch — test sequence","Lock schedule — minimize downtime","Restore — verify each panel"]
      }
    ),
    section(
      "elec-troubleshoot-s4",
      "9.4 Troubleshooting and Maintenance — Chronic trips and hidden damage",
      ["Intermittent trips from nail through wire, damaged cord, or failing compressor. Thermal scan finds hot connections.","Replace damaged NM sections; do not bury splices.","AFCI detects parallel arcs—find damaged insulation."], {
        bulletPoints: ["Nail plate miss — cable puncture","Thermal — hot spot at connection","Intermittent — hardest to find","Cord damage — replace appliance whip","Arc trace — insulation failure"]
      }
    ),
    section(
      "elec-troubleshoot-s5",
      "9.5 Troubleshooting and Maintenance — Closing a maintenance work order",
      ["Record root cause, parts replaced, readings, photos. Update panel label if circuit changed.","Customer sign-off and warranty note.","Schedule follow-up if marginal insulation."], {
        bulletPoints: ["Work order — CMMS entry","Root cause — not just symptom fix","Panel label — update directory","Photos — before/after","Follow-up — retest in 30 days"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why troubleshooting and maintenance matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in troubleshooting and maintenance","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["Symptom map — area to circuit","Segment — divide and conquer","Open neutral — dim/brights on MWBC","Loose neutral — heat at device","Shutdown plan — written steps","IT coordination — servers on UPS"],
      realWorldRelevance: "Journeymen and service techs use troubleshooting and maintenance daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "elec-careers",
    10,
    "Electrical Careers and Apprenticeship",
    [
    section(
      "elec-careers-s1",
      "10.1 Electrical Careers and Apprenticeship — IBEW, merit shop, and industrial paths",
      ["IBEW/NECA apprenticeships offer structured training and scale wages on commercial work. Merit contractors train through ABC or in-house programs with flexibility.","Industrial millwright-electrician blends, data centers, and controls specialties pay premiums with travel.","Choose based on mobility, benefits, and project types you enjoy."], {
        bulletPoints: ["IBEW — union apprenticeship","ABC — merit shop training","Industrial — plant maintenance","Data center — critical power specialty","Controls — PLC and automation path"]
      }
    ),
    section(
      "elec-careers-s2",
      "10.2 Electrical Careers and Apprenticeship — License exams and continuing education",
      ["Journeyman exams test NEC, calculations, and theory; master adds business law. Hours logged with state board.","CEUs keep license active; code updates every three years require study.","Reciprocity limited—plan moves early."], {
        bulletPoints: ["Journeyman exam — NEC heavy","Master exam — business and management","CEU — continuing education","Hour log — apprenticeship proof","Reciprocity — state agreements"]
      }
    ),
    section(
      "elec-careers-s3",
      "10.3 Electrical Careers and Apprenticeship — Wage progression and specialization",
      ["Apprentice wage steps rise with hours; journeyman bumps at license. Foreman premiums for crew leadership.","Specialize in fire alarm (NICET), solar (NABCEP), or medium voltage for differentiation.","Overtime and per diem on travel jobs boost annual income."], {
        bulletPoints: ["Wage scale — union steps","Foreman — crew leadership premium","Fire alarm — low voltage license paths","Solar — PV installer credential","Per diem — travel job compensation"]
      }
    ),
    section(
      "elec-careers-s4",
      "10.4 Electrical Careers and Apprenticeship — Failed businesses and underbidding",
      ["Underbidding jobs loses money on labor overruns; know production rates. Cash flow kills contractors who finance payroll on one slow payer.","Insurance lapses void contracts.","Callbacks on free work erode profit—quality first."], {
        bulletPoints: ["Production rate — hours per outlet","Cash flow — AR and line of credit","Insurance — GL and workers comp active","Callback — track by cause","Estimate buffer — contingency percent"]
      }
    ),
    section(
      "elec-careers-s5",
      "10.5 Electrical Careers and Apprenticeship — Five-year plan to journeyman and beyond",
      ["Years 1–2: tools, safety, material prep. Years 3–4: terminations, motor basics, code study. Year 5: sit for journeyman, lead small crews.","Consider master, inspector, or estimator tracks.","Reputation with AHJ and GCs follows your name."], {
        bulletPoints: ["Tool investment — quality strippers and meter","Code study — weekly NEC article","Crew lead — small task ownership","Master path — business ownership","Inspector — former field to AHJ"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why electrical careers and apprenticeship matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in electrical careers and apprenticeship","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["IBEW — union apprenticeship","ABC — merit shop training","Journeyman exam — NEC heavy","Master exam — business and management","Wage scale — union steps","Foreman — crew leadership premium"],
      realWorldRelevance: "Journeymen and service techs use electrical careers and apprenticeship daily—this chapter connects code, tools, and customer-facing work.",
    }
  )
];
