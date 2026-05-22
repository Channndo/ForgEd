import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const PLUMB_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Plumbing Fundamentals",
  subtitle: "ForgEd skilled-trades survey — supply, DWV, fixtures, codes, service, and careers",
  paragraphs: [
    "Plumbing protects public health: safe drinking water in, waste out. This textbook is workforce training for apprentices, career changers, and facility staff—not a master plumber license exam replacement.",
    "Ten chapters move from trade basics through rough-in and service, codes and safety, and business literacy. Complete section quizzes, then chapter and course reviews from a 200-question bank.",
    "Always follow your state license rules, adopted IPC/UPC amendments, and employer SOPs. Verify permits and inspections with your local authority having jurisdiction.",
  ],
};

export const PLUMB_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "plumb-intro",
    1,
    "Introduction to the Plumbing Trade",
    [
    section(
      "plumb-intro-s1",
      "1.1 Introduction to the Plumbing Trade — Trade scope and public health role",
      ["Plumbing is one of the oldest regulated building trades because it directly protects drinking water and removes waste that would otherwise spread disease. In the United States, plumbers install, repair, and maintain potable water distribution, sanitary drainage, storm drainage, fuel gas piping (where licensed), and related fixtures on residential, commercial, and industrial projects.","Most plumbers work for mechanical contractors, service companies, facility maintenance departments, or as self-employed operators. Day-to-day work spans reading prints, laying out pipe, soldering or pressing copper, solvent-welding PVC, crimping PEX, setting fixtures, and coordinating inspections with the authority having jurisdiction (AHJ).","Unlike a single DIY repair, professional plumbing is systems thinking: pressure, flow, venting, corrosion, expansion, and code minimums must work together. Apprentices start on material handling and rough-in support; journeymen lead installs and troubleshooting; master plumbers (in states that use the designation) often pull permits and run jobs."], {
        bulletPoints: ["Potable supply — delivers safe drinking water under pressure","DWV — gravity drainage with traps and venting to protect trap seals","Mechanical contractor — employer on new construction and tenant improvement","Service plumber — diagnostics, repairs, water heaters, drain cleaning","AHJ — local building department or inspector enforcing adopted codes"],
        citations: [{"source":"International Plumbing Code (IPC)","url":"https://www.iccsafe.org/products-and-services/codes/","note":"Model code adopted (with amendments) by many U.S. jurisdictions"}]
      }
    ),
    section(
      "plumb-intro-s2",
      "1.2 Introduction to the Plumbing Trade — Apprenticeship pathways and journeyman progression",
      ["Entering the trade usually means a registered apprenticeship (union UA locals, merit-shop ABC chapters, or employer-sponsored programs) combining paid OJT with classroom instruction. Typical ratios are roughly 8,000–10,000 hours of field work plus 144+ hours of related training per year over four to five years before journeyman status.","Strong apprentices track pipe sizes, fitting names, and tool use before they are asked to lay out a bathroom group. They learn to ask for clarification on prints, label their cuts, and keep work areas broom-clean because inspectors and foremen notice habits early.","Licensing is state-specific: some states license at the journeyman level, others at master, and reciprocity is limited. Even where a license is not required for every task, employers and insurers expect documented training because errors can flood buildings or contaminate water supplies."], {
        bulletPoints: ["OJT — paid field hours under supervision","Related instruction — code, math, safety, theory nights or trade school","Journeyman — competent to lay out and install without constant oversight","Master — business ownership, permitting, or supervisory credential (where used)","Credential stack — OSHA 10, backflow tester, medical gas (specialty paths)"]
      }
    ),
    section(
      "plumb-intro-s3",
      "1.3 Introduction to the Plumbing Trade — Service versus new construction work",
      ["New construction rough-in happens before drywall: plumbers drill studs, set carriers, run DWV with proper slope, and stub supplies. Trim-out follows finishes—setting faucets, tying in appliances, and testing. Schedules are driven by general contractor milestones and inspection windows.","Service work is reactive and customer-facing: leaking angle stops, failed water heaters, sewer backups, and remodeling retrofits. Technicians diagnose with gauges, cameras, and experience, then quote repair options. Van stock, clear communication, and respect for occupied homes separate reputable service shops from churn-and-burn operators.","Many plumbers cross-train both sides early, then specialize. Construction builds layout and code fluency; service builds troubleshooting speed. Wages vary by region and segment, but demand remains strong where housing stock ages and commercial retrofits accelerate."], {
        bulletPoints: ["Rough-in — concealed piping before wall close-in","Trim-out — visible fixtures and final connections","Punch list — small items before substantial completion","Service van stock — common stems, flappers, P-traps, supply lines","Customer scope — explain options, price, and warranty in plain language"]
      }
    ),
    section(
      "plumb-intro-s4",
      "1.4 Introduction to the Plumbing Trade — Misconceptions about plumber earnings and work",
      ["Television clips rarely show the crawlspace work, permit paperwork, or 6 a.m. material runs. Physical demands include lifting water heaters, working in trenches, and sustained kneeling. Weather and unfinished sites affect comfort; service calls may run evenings when emergencies hit.","Income can be strong, especially with licenses, specialties (medical gas, backflow), or ownership—but early apprenticeship wages are entry-level. Benefits differ: union packages often include pension and health; small shops may offer leaner packages with overtime opportunity.","Failure modes for new entrants include underestimating math and code study, skipping tool maintenance, and poor communication with other trades. Reliable plumbers show up on time, protect finished surfaces, and document changes instead of hiding shortcuts."], {
        bulletPoints: ["Physical load — lifting, kneeling, ladder work, heat/cold exposure","Wage curve — apprentice < journeyman < licensed/owner","Union vs open shop — different training pipelines and benefits","Callbacks — repeat visits for leaks cost margin and reputation","Documentation — photos, as-builts, and permit cards reduce disputes"]
      }
    ),
    section(
      "plumb-intro-s5",
      "1.5 Introduction to the Plumbing Trade — Your first week on a commercial jobsite",
      ["Expect orientations: hazard communication, PPE rules, lockout/tagout awareness, and site logistics. You will carry material, cut pipe to length, deburr, and practice joints under watch. Foremen assign tasks in small, verifiable steps—support a lift, firestop a penetration, label a line—not unsupervised critical connections.","Learn the jobsite chain: superintendent schedules, mechanical foreman sequences work, inspector holds cover approvals. Ask where SDS sheets live, where trench shields are staged, and which prints are the current revision.","By day five you should name common fittings (90, 45, coupling, wye, cleanout), identify copper Type L vs M, and know never to cut a structural beam without engineering approval. Professionalism—ID badge, hard hat, respectful radio traffic—earns the next teaching moment."], {
        bulletPoints: ["Site orientation — hazards, muster points, substance policies","Print revision — date and sheet discipline prevent wrong installs","Tool accountability — personal hand tools vs company power tools","Trade coordination — core drills and firestopping are shared risks","Daily cleanup — trip hazards and scrap pile management"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why introduction to the plumbing trade matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in introduction to the plumbing trade","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["Potable supply — delivers safe drinking water under pressure","DWV — gravity drainage with traps and venting to protect trap seals","OJT — paid field hours under supervision","Related instruction — code, math, safety, theory nights or trade school","Rough-in — concealed piping before wall close-in","Trim-out — visible fixtures and final connections"],
      realWorldRelevance: "Journeymen and service techs use introduction to the plumbing trade daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "plumb-tools",
    2,
    "Tools, Materials, and Pipe Systems",
    [
    section(
      "plumb-tools-s1",
      "2.1 Tools, Materials, and Pipe Systems — Pipe materials and joining methods",
      ["U.S. plumbing uses several pressure and drainage materials chosen for application, cost, and code approval. Copper remains common for supply (soldered, brazed, or press); PEX dominates residential supply with crimp or expansion fittings; CPVC serves supply in some regions; PVC and ABS serve DWV with solvent cement.","Cast iron and hubless cast iron still appear in commercial DWV and fire-rated assemblies. Galvanized steel is largely legacy supply—often replaced during remodels. Gas piping may be black steel, CSST (with manufacturer training), or copper tube per local fuel gas code.","Joining method must match material and listing: overtightening PVC primer/cement schedules causes weak joints; underheated solder leaves voids; PEX rings require calibration and gauge checks. Material literacy prevents the classic apprentice mistake—grabbing the wrong adapter and hiding it with tape."], {
        bulletPoints: ["Type L / M copper — wall thickness; L is typical for water supply","PEX-A vs PEX-B — expansion vs crimp systems; do not mix fittings","Schedule 40/80 PVC — DWV and some pressure applications per listing","ABS — DWV in many jurisdictions; check local amendments","Press fittings — mechanical joints with proprietary jaws and gauges"]
      }
    ),
    section(
      "plumb-tools-s2",
      "2.2 Tools, Materials, and Pipe Systems — Hand tools every apprentice carries",
      ["A working plumber’s bag includes pipe wrenches, adjustable wrenches, tongue-and-groove pliers, tubing cutter, reamer, hacksaw or reciprocating blade, basin wrench, torpedo level, and tape measure. Channel locks supplement but should not chew finished chrome.","Specialty tools arrive with experience: flaring tools for soft copper, grooving tools where permitted, soil pipe cutters, internal pipe wrenches, and inspection mirrors. Power tools—threading machines, portaband, press tools—usually belong to the employer with maintenance logs.","Calibration matters for press tools and PEX gauges. Dull cutters oval copper tube; dirty jaws slip on fittings. Tool care is safety: a seized adjustables can slip and strike knuckles in tight cabinets."], {
        bulletPoints: ["Pipe wrench — directional bite; two wrenches for opposing force","Tubing cutter — square wheel, deburr inside and out","Basin wrench — tightens faucet nuts behind bowls","Soil pipe cutter — cast iron scoring and snapping","Torpedo level — short runs and fixture alignment"]
      }
    ),
    section(
      "plumb-tools-s3",
      "2.3 Tools, Materials, and Pipe Systems — Reading a material takeoff list",
      ["Takeoffs translate prints into purchasable quantities: pipe lengths by size, fitting counts by type, valves, hangers, and specialties. Apprentices learn to read abbreviations—1/2 COP TYPE L, 3 PVC DWV, CO for cleanout—and to add waste factors for cuts and damaged pieces.","Wholesale houses and job accounts expect accurate lists to stage deliveries. Foreman sign-off prevents duplicate orders when revisions shift fixture locations. Labeling bundles by area (Unit 204 bath group) saves hours on multi-family decks.","Digital BIM projects export counts, but field still verifies against walkdowns. Conflicts between structure and routed pipe appear only when someone looks up from the tablet."], {
        bulletPoints: ["Takeoff — quantity survey from plans","Waste factor — extra length for cuts and mistakes","BOM — bill of materials tied to job phase","Staging — deliver rough materials before lift constraints","Revision cloud — changed areas on updated sheets"]
      }
    ),
    section(
      "plumb-tools-s4",
      "2.4 Tools, Materials, and Pipe Systems — Wrong fittings and damaged threads",
      ["Mixing DWV fittings on supply, using non-listed transitions, or forcing mismatched threads causes immediate leaks or delayed failures. Cross-threading galvanized or brass adapters ruins ports; overtightening chrome compression nuts cracks ferrules.","Damaged copper from dull cutters may not seal in press jaws; oval tube shows as weeping hours later. PVC joints assembled dry or without primer fail pressure tests. Training emphasizes fit-up inspection before glue sets or solder flows.","When a joint fails inspection, cut it out cleanly, deburr, and remake—patch adapters in concealed spaces are red flags to inspectors and owners."], {
        bulletPoints: ["Dry fit — verify alignment before permanent joint","Deburr — prevents gasket cuts and turbulent pockets","Thread sealant — tape or pipe dope per manufacturer; not on compression","Transition fittings — listed coupling between dissimilar materials","Rework — cut out failed joint; no hidden rubber wraps"]
      }
    ),
    section(
      "plumb-tools-s5",
      "2.5 Tools, Materials, and Pipe Systems — Building a starter tool bag",
      ["Buy durable basics before boutique gadgets: two pipe wrenches (14\" and 18\"), 12\" tongue-and-groove, 6-in-1 screwdriver, flashlight, gloves, knee pads, and sharp cutters. Add a small notebook for fitting sketches and code snippets.","Employer-provided press tools and threading machines come later. Mark personal tools; respect loaner policies. On service trucks, organizers speed calls—labeled bins for 3/8 supply lines, fill valves, and common flappers.","Your bag signals professionalism: organized, no leaking thread oil bottles, batteries charged. Foremen assign better tasks to techs who return borrowed tools intact."], {
        bulletPoints: ["Core wrenches — stagger sizes for pair work","PPE — safety glasses, gloves, steel toe per site rules","Lighting — headlamp for cabinets and crawlspaces","Notebook — field sketches beat phone photos in wet hands","Maintenance — oil wrenches, replace cutter wheels"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why tools, materials, and pipe systems matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in tools, materials, and pipe systems","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["Type L / M copper — wall thickness; L is typical for water supply","PEX-A vs PEX-B — expansion vs crimp systems; do not mix fittings","Pipe wrench — directional bite; two wrenches for opposing force","Tubing cutter — square wheel, deburr inside and out","Takeoff — quantity survey from plans","Waste factor — extra length for cuts and mistakes"],
      realWorldRelevance: "Journeymen and service techs use tools, materials, and pipe systems daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "plumb-supply",
    3,
    "Water Supply and Distribution",
    [
    section(
      "plumb-supply-s1",
      "3.1 Water Supply and Distribution — Potable pressure and pipe sizing basics",
      ["Municipal water enters buildings through a meter and main shutoff, then branches to fixtures at pressures typically between 40 and 80 psi. Excessive pressure damages fixtures and causes water hammer; regulators and expansion tanks manage stability. Pipe sizing uses fixture unit counts from code tables—not guesswork—to keep adequate flow at peak demand.","Velocity limits reduce noise and erosion in copper; PEX installations follow manufacturer bend radii and support spacing. Hot water may be generated centrally or at point-of-use; recirculation lines save water in large buildings but require insulation and balancing.","Apprentices learn to read pressure gauges, calculate simple fixture unit totals, and identify when upsizing a run is cheaper than callback complaints about weak showers."], {
        bulletPoints: ["Fixture units — code-based demand values per appliance","Static vs dynamic pressure — flow changes readings","PRV — pressure-reducing valve at meter or branch","Expansion tank — absorbs heated water volume change","Velocity — oversized pipe reduces noise; undersized causes weak flow"]
      }
    ),
    section(
      "plumb-supply-s2",
      "3.2 Water Supply and Distribution — Copper, PEX, and CPVC in modern supply",
      ["Copper Type L is common above slab; Type M appears where allowed for interior supply. Soldered joints need clean, fluxed, fully heated cups; press joints need calibrated tools and no gouges. PEX manifolds homerun each fixture, reducing hidden joints but requiring labeled homeruns and protection from UV where exposed.","CPVC uses one-step or two-step cement systems per manufacturer; it is rigid and sensitive to support spacing. Mixing systems requires listed transition fittings—never a threaded adapter buried in a wall.","Material choice follows spec, local habit, and freeze-risk: PEX tolerates some expansion; copper is traditional on commercial; CPVC competes on cost in warm climates."], {
        bulletPoints: ["Homerun PEX — manifold to fixture with fewer couplings","Press copper — no flame in occupied spaces","Solder — MAP gas or acetylene per site policy","CPVC support — hangers at listed intervals","Freeze mitigation — insulate, heat tape, or relocate in cold zones"]
      }
    ),
    section(
      "plumb-supply-s3",
      "3.3 Water Supply and Distribution — Installing a residential manifold",
      ["Lay out the manifold near the water heater or mechanical room with shutoffs for each branch and a main isolation valve. Drill plates with listed clamps; protect PEX from abrasion through studs with sleeves. Label each port (KITCHEN HOT, MASTER BATH COLD) for future service.","Pressure-test before concealment: cap branches, attach gauge, raise pressure to inspector-required levels (often 100+ psi on supply for a duration), and document. Drywall cannot hide failed tests.","Coordinate with electricians and HVAC—manifold walls become crowded chases. Maintain access panels for maintenance."], {
        bulletPoints: ["Manifold — central distribution with individual valves","Ball valve — quarter-turn isolation per branch","Gauge test — verify no leaks before cover","Sleeves — protect tubing through framing","Access panel — maintainable valve locations"]
      }
    ),
    section(
      "plumb-supply-s4",
      "3.4 Water Supply and Distribution — Low pressure and hammering pipes",
      ["Low pressure at a single fixture often traces to clogged aerators, partially closed stops, or undersized branch runs. Whole-house weak pressure may indicate PRV failure, utility issue, or main line obstruction. Systematic diagnosis starts at the meter, then moves inward.","Water hammer follows fast-closing valves (dishwashers, solenoids). Hammer arrestors or air chambers absorb shock; loose pipe straps amplify noise. High pressure without a regulator accelerates wear.","Do not mask symptoms with bigger pumps without engineering—fix the root restriction or failed valve."], {
        bulletPoints: ["Angle stops — verify fully open at fixture","PRV adjustment — within manufacturer range","Hammer arrestor — listed device near quick-closing valve","Pipe strap — reduce movement in walls","Flow test — bucket test for GPM at fixture"]
      }
    ),
    section(
      "plumb-supply-s5",
      "3.5 Water Supply and Distribution — Pressure testing before drywall",
      ["Isolate the system, remove aerators and PRVs that could be damaged, install test plugs and gauge. Raise pressure gradually; walk the line listening and watching fittings. Hold for code-required time; record on inspection card.","If pressure drops, soap-bubble joints (where safe) or listen for hiss. Mark failing joints, cut out, remake. Retest before calling inspection—failed rough tests delay entire floors.","Document with photos for GC records; protects you if other trades damage piping later."], {
        bulletPoints: ["Test cap — rated for test pressure","Soap test — bubbles show weeps at joints","Hold time — per IPC/local amendment","Inspection card — signed rough supply approval","Protection — cap open ends until trim"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why water supply and distribution matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in water supply and distribution","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["Fixture units — code-based demand values per appliance","Static vs dynamic pressure — flow changes readings","Homerun PEX — manifold to fixture with fewer couplings","Press copper — no flame in occupied spaces","Manifold — central distribution with individual valves","Ball valve — quarter-turn isolation per branch"],
      realWorldRelevance: "Journeymen and service techs use water supply and distribution daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "plumb-dwv",
    4,
    "Drain, Waste, and Vent (DWV)",
    [
    section(
      "plumb-dwv-s1",
      "4.1 Drain, Waste, and Vent (DWV) — Gravity drainage and fixture traps",
      ["DWV systems move wastewater by gravity with minimum slopes—typically 1/4 inch per foot on 3-inch and smaller pipe in many codes—toward building drains and municipal sewers. Each fixture trap holds a water seal blocking sewer gas; trap seal loss causes odor complaints and health concerns.","Branch lines collect fixture groups; building drains connect to building sewers outside. Cleanouts provide access for maintenance at changes of direction and long runs. Studor vents (AAVs) are allowed only where code and manufacturer listings permit.","Apprentices mark invert elevations on prints to avoid sagging horizontal runs that collect solids and clog."], {
        bulletPoints: ["P-trap — standard fixture trap shape","Invert — inside bottom of pipe; elevation language","Cleanout — plugged access for snaking","Building drain — last interior segment before exterior","Trap seal — water barrier against sewer gas"]
      }
    ),
    section(
      "plumb-dwv-s2",
      "4.2 Drain, Waste, and Vent (DWV) — Venting patterns and stack offsets",
      ["Vents carry no flow under normal conditions; they equalize pressure so traps do not siphon. Wet vents, circuit vents, and island fixture vents are code-specific layouts plumbers must recognize on plans. Main stacks penetrate roofs with flashing; offsets use fittings to maintain grade.","Horizontal vent runs need slope back toward drainage or level per code edition. Undersized vents cause gurgling and slow drainage. Stud walls hide vent lines that still need slope and support.","Reading riser diagrams links every trap to a vent path—missing vent on a laundry box is a common plan-check fix."], {
        bulletPoints: ["Stack vent — vertical extension through roof","Wet vent — dual-purpose drainage and vent (where allowed)","AAV — air admittance valve; local rules vary","Circuit vent — multi-fixture venting pattern","Roof flashing — weatherproof penetration"]
      }
    ),
    section(
      "plumb-dwv-s3",
      "4.3 Drain, Waste, and Vent (DWV) — Roughing a bathroom group",
      ["Lay out water closet, lavatory, tub/shower, and shower drains per print dimensions from framing. Core drill or saw waste openings with firestopping requirements. Set closet flange height for finished floor; allow for tile thickness.","Run 3-inch waste for WC, 2-inch for tub/shower, 1-1/2 or 2-inch for lavatory per spec. Vent the group before closing walls. Support pipe per code spacing; no stress on flanges from misaligned studs.","Coordinate with HVAC supply registers and electrical boxes—conflicts get resolved in the field with documented RFI if needed."], {
        bulletPoints: ["Closet flange — anchored to subfloor; wax ring at trim","Shower pan — preslope and liner before tile (trade overlap)","Fire caulk — rated penetration seal","Backing — blocking for tub valves and shower rails","RFI — request for information on print conflicts"]
      }
    ),
    section(
      "plumb-dwv-s4",
      "4.4 Drain, Waste, and Vent (DWV) — Clogs, sags, and missing vent connections",
      ["Bellied horizontal pipe holds water and grease; grade must be verified with level or laser. Double-trapping (trap under trap) breaks seals. Vents tied downstream of heavy flow can pull trap water.","Job-site shortcuts—using sanitary tees on their back, unglued joints, or forgotten test caps—show up at final inspection or first owner use. Camera inspection confirms offset joints in slab.","Repair often requires opening walls or jacking slab; prevention is correct rough-in and test before cover."], {
        bulletPoints: ["Belly — sagging pipe holding stagnant water","Double trap — prohibited in most codes","Siphonage — vacuum pulling trap seal","Camera — verifies blockage location","Jackhammer — slab repair access"]
      }
    ),
    section(
      "plumb-dwv-s5",
      "4.5 Drain, Waste, and Vent (DWV) — Reading a DWV isometric sketch",
      ["Isometrics show pipe in 3D oblique: fittings, sizes, and vent connections without full floor plans. Learn arrow direction of flow, vent takeoffs, and cleanout symbols.","Trace each fixture to the stack, note fitting types (wye vs sanitary tee orientation), and compare to architectural wall locations. Discrepancies get flagged before order.","Sketching your own isometric for a small bath group is a journeyman skill that prevents wrong fittings on the truck order."], {
        bulletPoints: ["Wye — branch at flow direction; not for vertical to horizontal misuse","San tee — vertical stack to horizontal branch","Isometric — simplified 3D routing view","Cleanout symbol — maintenance access point","Flow arrow — drainage direction indicator"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why drain, waste, and vent (dwv) matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in drain, waste, and vent (dwv)","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["P-trap — standard fixture trap shape","Invert — inside bottom of pipe; elevation language","Stack vent — vertical extension through roof","Wet vent — dual-purpose drainage and vent (where allowed)","Closet flange — anchored to subfloor; wax ring at trim","Shower pan — preslope and liner before tile (trade overlap)"],
      realWorldRelevance: "Journeymen and service techs use drain, waste, and vent (dwv) daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "plumb-fixtures",
    5,
    "Fixtures, Faucets, and Appliances",
    [
    section(
      "plumb-fixtures-s1",
      "5.1 Fixtures, Faucets, and Appliances — Rough versus trim fixture phases",
      ["Rough-in sets valves, carriers, tub drains, and shower arms before finishes. Trim installs faucets, trim kits, and connection hoses after tile and paint. Mixing the sequence damages finishes and voids warranties.","Fixture schedules on architectural sheets list manufacturers and models; substitutions need approval. ADA heights and knee clearance affect lavatory and faucet placement.","Apprentices verify rough locations against tile layout—an offset shower arm becomes a visible mistake after glass goes in."], {
        bulletPoints: ["Rough-in — concealed valves and drains","Trim-out — visible fixtures and escutcheons","Fixture schedule — model list on plans","Carrier — wall-hung lavatory or urinal support frame","Stop valve — angle or straight shutoff at fixture"]
      }
    ),
    section(
      "plumb-fixtures-s2",
      "5.2 Fixtures, Faucets, and Appliances — Carriers, valves, and supply stops",
      ["Wall-hung lavatories and urinals mount on steel carriers anchored to structure. Level and height set the fixture plane; drywall slips over spuds. Thermostatic mixing valves protect users from scalding at gang showers.","Stops allow isolation without shutting the whole building. Use listed supply connectors; overtightening flexible lines strips threads.","Gas appliances (where plumbed) need sediment traps and shutoffs per fuel gas code—coordinate license scope with HVAC/gas fitters."], {
        bulletPoints: ["Lav carrier — adjustable legs and mounting","TMV — thermostatic mixing valve at multi-head showers","Supply connector — braided or corrugated listed line","Escutcheon — covers wall penetration","Gas shutoff — appliance isolation"]
      }
    ),
    section(
      "plumb-fixtures-s3",
      "5.3 Fixtures, Faucets, and Appliances — Setting a wall-hung lavatory",
      ["Confirm carrier rating and backup blocking. Set drain and supply heights per manufacturer template. After wall finish, hang basin, connect trap and supplies, test for leaks with tissue under joints.","Silicone at basin-to-wall is cosmetic, not structural. Hand-tighten then quarter-turn with wrench per fitting guidance.","Document trim completion on punch list; owner manuals go in closeout binder."], {
        bulletPoints: ["Template — manufacturer rough dimensions","Trap arm — alignment to prevent siphon or leak","P-trap — removable for hair clogs","Leak check — dry joint inspection before closeout","Punch — trim defects list"]
      }
    ),
    section(
      "plumb-fixtures-s4",
      "5.4 Fixtures, Faucets, and Appliances — Leaks at trim and loose carriers",
      ["Weeping at supply nuts often means cracked ferrule or crossed threads. Dripping at spouts may be cartridge or seat wear. Carrier movement cracks porcelain and breaks seals—re-anchor if studs were missed.","Running toilets waste water through flappers, fill valves, or flush valve seals. Gauge tank parts before replacing entire fixtures.","Do not use non-listed tape or epoxy on potable trim—replace the failed component."], {
        bulletPoints: ["Ferrule — compression seal; one-time crush","Cartridge — replaceable control in single-handle faucets","Flapper — tank seal on gravity toilets","Carrier bolt — torque per spec","Flood — shut main if leak threatens occupancy"]
      }
    ),
    section(
      "plumb-fixtures-s5",
      "5.5 Fixtures, Faucets, and Appliances — Trim-out punch list workflow",
      ["Walk each bath with superintendent: flow, temperature, drain speed, and hardware tight. Reset aerators removed for debris flush. Label shutoffs for facilities staff.","Photograph completed rooms for warranty baseline. Stage owner training on water heater setpoint and shutoff locations.","Close permits only after final plumbing inspection and meter release."], {
        bulletPoints: ["Flow test — hot/cold at each fixture","Temperature — TMV output within code limit","Drain test — tub/shower drains without backup","Closeout photo — warranty baseline","Final inspection — AHJ sign-off"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why fixtures, faucets, and appliances matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in fixtures, faucets, and appliances","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["Rough-in — concealed valves and drains","Trim-out — visible fixtures and escutcheons","Lav carrier — adjustable legs and mounting","TMV — thermostatic mixing valve at multi-head showers","Template — manufacturer rough dimensions","Trap arm — alignment to prevent siphon or leak"],
      realWorldRelevance: "Journeymen and service techs use fixtures, faucets, and appliances daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "plumb-codes",
    6,
    "Reading Plans, Codes, and Permits",
    [
    section(
      "plumb-codes-s1",
      "6.1 Reading Plans, Codes, and Permits — IPC adoption and local amendments",
      ["Most U.S. cities adopt the International Plumbing Code (IPC) with state or local amendments—pipe materials, AAV rules, and water heater seismic straps vary. The adopted code year (2021, 2024) matters; do not cite outdated editions on permit sets.","Code books define minimum safety, not best practice. Engineers may specify above-minimum slopes, pipe sizes, or backflow devices on commercial work.","Keep a jobsite copy or PDF of the local amendment sheet; inspectors enforce local differences, not national summaries."], {
        bulletPoints: ["IPC — model plumbing code from ICC","Amendment — local legal overrides","Adopted edition — year enforced at permit","Above minimum — engineer spec can exceed code","Code book — field reference, not memorization only"],
        citations: [{"source":"International Plumbing Code (IPC)","url":"https://www.iccsafe.org/products-and-services/codes/","note":"Check your AHJ for adopted edition and amendments"}]
      }
    ),
    section(
      "plumb-codes-s2",
      "6.2 Reading Plans, Codes, and Permits — Plan symbols and riser diagrams",
      ["Plumbing plans use standard symbols for fixtures, valves, cleanouts, and pipe sizes. Riser diagrams show stack continuity from basement to roof. Compare reflected ceiling plans for conflicts with diffusers and lights.","Revision clouds and addenda supersede older sheets—always build from latest issue. Dimension strings to structure, not guess from architectural centerlines.","Highlight questions before rough: missing vent, unclear indirect waste, or unspecified backflow."], {
        bulletPoints: ["Riser diagram — vertical system map","Reflected ceiling — overhead MEP coordination","Indirect waste — discharge to receptor","Addendum — post-bid changes","Dimension — rough location tolerance"]
      }
    ),
    section(
      "plumb-codes-s3",
      "6.3 Reading Plans, Codes, and Permits — Submitting a permit packet",
      ["Contractor license, job address, scope description, plan sets, and sometimes fixture unit calculations or energy forms go to the building department portal or counter. Fees scale with valuation; schedule inspections at rough and final milestones.","Separate plumbing permit may link to building permit number. HOA or historical districts add layers but do not replace code.","Track expiration—permits lapse if work stalls; renew before restart."], {
        bulletPoints: ["Permit card — posted on site with inspection history","Valuation — drives fee; must be honest","Plan check — corrections before approval","Inspection request — 24-hour notice typical","Lapsed permit — renewal or new application"]
      }
    ),
    section(
      "plumb-codes-s4",
      "6.4 Reading Plans, Codes, and Permits — Code violations that fail inspection",
      ["Missing test plugs, inadequate cleanouts, wrong fitting on drainage, unvented fixtures, and unsupported pipe on horizontal runs fail rough inspections. Final failures include missing dielectric unions, no expansion tank on closed-loop heaters, and cross-connections.","Backflow devices without annual test tags fail commercial finals. Inspectors document with photos; rework and re-inspect.","Arguing on site rarely helps—fix, learn, update crew briefing."], {
        bulletPoints: ["Cross-connection — potable tied to non-potable","Dielectric union — dissimilar metal isolation","Support spacing — hangers per tables","Backflow — RPZ/DCVA testing records","Re-inspection fee — motivates first-time quality"]
      }
    ),
    section(
      "plumb-codes-s5",
      "6.5 Reading Plans, Codes, and Permits — Navigating AHJ inspection schedule",
      ["Book rough supply, rough DWV, and gas (if applicable) before cover. Some jurisdictions allow one combined rough; others split. Keep paths clear—inspector will not move stockpiled drywall.","Be present to open walls if questioned; have code book and approved prints. Record inspector name and comments on permit card.","Failed inspection stops downstream trades—treat schedule impact seriously."], {
        bulletPoints: ["Rough inspection — before concealment","Final inspection — fixtures operating","Inspector access — ladders, lights, clear path","Correction list — itemized fixes","As-built — update if field routing changed"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why reading plans, codes, and permits matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in reading plans, codes, and permits","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["IPC — model plumbing code from ICC","Amendment — local legal overrides","Riser diagram — vertical system map","Reflected ceiling — overhead MEP coordination","Permit card — posted on site with inspection history","Valuation — drives fee; must be honest"],
      realWorldRelevance: "Journeymen and service techs use reading plans, codes, and permits daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "plumb-rough",
    7,
    "Rough-In and Installation Practices",
    [
    section(
      "plumb-rough-s1",
      "7.1 Rough-In and Installation Practices — Stud drilling and firestopping basics",
      ["Pipe penetrations through framing require sized holes—not oversized cavities that weaken walls. Fire-rated assemblies need listed firestop systems matching tested assemblies; orange foam without UL listing fails.","Protect plates on nail surfaces prevent screw punctures of tubing. Maintain edge distances on engineered joists per manufacturer.","Coordinate core drills for clustered penetrations with structural approval."], {
        bulletPoints: ["Bore shield — metal plate protecting pipe","Firestop — rated caulk/wrap system","Engineered joist — drill zone per manufacturer","Core drill — slab/wall clustered holes","Penetration log — firestop documentation"]
      }
    ),
    section(
      "plumb-rough-s2",
      "7.2 Rough-In and Installation Practices — Slope, support, and penetration sealing",
      ["DWV horizontal runs hold grade with hangers before adjacent trades disturb pipe. Support copper and PEX per spacing tables; heavy cast iron needs robust hangers.","Seal annular spaces against air, smoke, and pests. Waterproof exterior penetrations with flashing.","Winter rough requires draining test water in freezing climates."], {
        bulletPoints: ["Grade stake — laser or string line for slope","Hanger spacing — per material tables","Annular seal — elastomeric or mortar per spec","Freeze — blow out test water if heat off","Vibration isolation — pumps and equipment"]
      }
    ),
    section(
      "plumb-rough-s3",
      "7.3 Rough-In and Installation Practices — Coordinating with other trades in a chase",
      ["Mechanical chases stack plumbing, HVAC ducts, electrical, and fire sprinkler. Weekly coordination meetings resolve elevation conflicts before install. Maintain access to valves and dampers.","If duct wins elevation, reroute pipe early—not after drywall. BIM clash detection helps on large jobs; small jobs need walkdowns.","Document agreed elevations on sketch posted in chase."], {
        bulletPoints: ["Coordination drawing — overlay trades","Offset fitting — reroute without breaking slope","Access — valve reach after close-in","BIM clash — model conflict resolution","Walkdown — physical verification"]
      }
    ),
    section(
      "plumb-rough-s4",
      "7.4 Rough-In and Installation Practices — Covering pipes before inspection",
      ["Covering prior to approval risks tear-out. GC pressure to close walls is common—hold line until signed rough card. Exception: temporary protection with removable panels where allowed.","If another trade damages pipe, stop work, notify foreman, photo damage, repair and retest.","Pressure gauges left on test help prove system integrity at inspection."], {
        bulletPoints: ["Premature cover — rework cost multiplier","Removable panel — temporary access strategy","Damage report — GC and insurance trail","Test gauge — left on for inspector","Hold point — no cover without sign-off"]
      }
    ),
    section(
      "plumb-rough-s5",
      "7.5 Rough-In and Installation Practices — Pre-cover inspection readiness",
      ["Walk your rough like an inspector: supports, cleanouts, vent terminations, firestop, test attached. Have prints, permit, and toolbox for minor fixes on the spot.","Crew briefing the night before reduces failed calls. Stock extra fittings for quick swaps.","Passing rough keeps electricians and insulators on schedule—professional courtesy across trades."], {
        bulletPoints: ["Checklist — supports, vents, tests, firestop","Print set — current revision on site","Toolbox — common fittings for field fix","Crew brief — roles during inspection","Sign-off — permit card before cover"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why rough-in and installation practices matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in rough-in and installation practices","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["Bore shield — metal plate protecting pipe","Firestop — rated caulk/wrap system","Grade stake — laser or string line for slope","Hanger spacing — per material tables","Coordination drawing — overlay trades","Offset fitting — reroute without breaking slope"],
      realWorldRelevance: "Journeymen and service techs use rough-in and installation practices daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "plumb-service",
    8,
    "Troubleshooting Leaks and Blockages",
    [
    section(
      "plumb-service-s1",
      "8.1 Troubleshooting Leaks and Blockages — Diagnostic order for supply leaks",
      ["Start at visible source: supply line, stop, stem, or spout. Shut isolation valves to segment the system. If meter spins with all stops closed, suspect hidden leak—listen, thermal camera, or pressure hold test.","Document findings before opening walls; customers approve access. Moisture meters help map extent in cabinets and slabs.","Escalate slab or main line leaks to specialists with locators and permits."], {
        bulletPoints: ["Segmentation — close stops to isolate","Meter test — dials moving with all off","Thermal — warm spot on slab leak","Moisture meter — extent in cabinets","Locator — acoustic/electronic for buried pipe"]
      }
    ),
    section(
      "plumb-service-s2",
      "8.2 Troubleshooting Leaks and Blockages — Snaking, jetting, and camera inspection",
      ["Hand snakes clear nearby lavatory clogs; drum machines reach further with correct auger size—scratching chrome traps is unacceptable. Jetting cuts grease in commercial lines with trained operators and PPE.","Cameras confirm breaks, roots, and bellies; footage supports repair quotes. Cleanouts must be accessible—cutting access in slab is last resort.","Never snake without knowing pipe material—PVC fittings can crack with aggressive cutters."], {
        bulletPoints: ["Auger size — match pipe diameter","Jetter — high-pressure grease cutting","Camera head — documents condition","Root intrusion — exterior repair or lining","Cleanout access — required maintenance point"]
      }
    ),
    section(
      "plumb-service-s3",
      "8.3 Troubleshooting Leaks and Blockages — After-hours service truck mindset",
      ["Emergencies—burst lines, sewer backups—need calm triage: stop water, protect contents, communicate ETA. Truck stock covers 80% of common repairs; know wholesale night counter hours.","Flat-rate vs T&M pricing must be explained upfront. Document pre-existing conditions in photos.","Wear boot covers in homes; leave work area cleaner than found."], {
        bulletPoints: ["Main shutoff — show customer location","Truck stock — stems, fill valves, supply lines","Night wholesale — restock for morning crew","Boot covers — residential professionalism","Photo log — before/after for disputes"]
      }
    ),
    section(
      "plumb-service-s4",
      "8.4 Troubleshooting Leaks and Blockages — Misdiagnosed slab leaks",
      ["Warm spots and high bills suggest hot line slab leaks; random wet carpet may be drain line. Jumping to jackhammer without isolation wastes money.","Perform pressure isolation, use locators, correlate with copper corrosion patterns in acidic water regions.","Offer repair options: reroute overhead, epoxy lining where listed, or spot repair."], {
        bulletPoints: ["Hot vs cold slab leak — temperature clue","Reroute — abandon buried section","Epoxy lining — listed system for pinholes","Acidic water — accelerates copper pitting","Jackhammer — last confirmation step"]
      }
    ),
    section(
      "plumb-service-s5",
      "8.5 Troubleshooting Leaks and Blockages — Customer communication on service calls",
      ["Explain what you found, what you will do, and what it costs before major work. Plain language beats jargon; show camera footage when helpful.","Warranty callbacks get priority scheduling. Leave tags on water heater setpoints and filter changes.","Upsell ethically—whole-house PRV after multiple fixture failures is education, not pressure."], {
        bulletPoints: ["Scope approval — verbal and written for big jobs","Camera share — build trust on drain calls","Warranty — document parts and labor period","Tag — heater setpoint and shutoff map","Follow-up — call after major repair"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why troubleshooting leaks and blockages matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in troubleshooting leaks and blockages","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["Segmentation — close stops to isolate","Meter test — dials moving with all off","Auger size — match pipe diameter","Jetter — high-pressure grease cutting","Main shutoff — show customer location","Truck stock — stems, fill valves, supply lines"],
      realWorldRelevance: "Journeymen and service techs use troubleshooting leaks and blockages daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "plumb-safety",
    9,
    "Safety, Licensing, and Inspections",
    [
    section(
      "plumb-safety-s1",
      "9.1 Safety, Licensing, and Inspections — Trenching, confined space, and ergonomics",
      ["Excavations deeper than 5 feet generally require protective systems—sloping, benching, shoring, or trench boxes per OSHA 1926 Subpart P. Competent person daily inspection is mandatory.","Confined spaces (sewers, tanks) need entry permits, monitoring, and rescue plans—not solo heroics. Lift water heaters with team lifts or mechanical aids.","Rotate kneeling tasks; use pads. Hearing protection on jackhammers and threaders."], {
        bulletPoints: ["Competent person — trench inspection authority","Trench box — shield system in unstable soil","Confined space — permit-required entry rules","Team lift — water heater and boiler handling","Knee pads — reduce chronic injury"],
        citations: [{"source":"OSHA — Trenching and Excavation","url":"https://www.osha.gov/trenching-excavation","note":"Subpart P protective systems and competent person requirements"}]
      }
    ),
    section(
      "plumb-safety-s2",
      "9.2 Safety, Licensing, and Inspections — State licensing tiers and reciprocity",
      ["States differ: some license apprentices, journeymen, and masters separately; others license contractors only. Continuing education renews licenses; violations can suspend credentials.","Reciprocity agreements are limited—moving states often requires exams or supplemental hours. Verify before bidding work across borders.","Unlicensed work risks fines, voided insurance, and denied permits."], {
        bulletPoints: ["Journeyman card — personal competency credential","Contractor license — business entity permit","CEU — continuing education units","Reciprocity — state-to-state recognition rules","Permit denial — unlicensed contractor cannot pull"]
      }
    ),
    section(
      "plumb-safety-s3",
      "9.3 Safety, Licensing, and Inspections — PPE for soldering and chemicals",
      ["Safety glasses, gloves, and respirators where flux fumes concentrate. Fire extinguisher within reach when soldering near combustibles. Hot work permits on commercial sites.","Drain cleaners and solvents need SDS review—never mix products. Eye wash awareness on industrial accounts.","Steel toe and hi-vis per GC rules; cut-resistant gloves for sheet metal and cast iron."], {
        bulletPoints: ["Flux fumes — ventilation in tight spaces","Hot work permit — fire watch on commercial","SDS — chemical hazard sheet","Fire extinguisher — within 10 feet typical policy","Hi-vis — site-specific PPE policy"]
      }
    ),
    section(
      "plumb-safety-s4",
      "9.4 Safety, Licensing, and Inspections — OSHA citations on plumbing jobs",
      ["Common citations: missing trench protection, ladder misuse, lack of fall protection on low-slope roofs during vent work, and inadequate eye protection during cutting.","Housekeeping—slips on wet floors after test blowouts—counts too. Subcontractors are liable on multi-employer sites.","Safety meetings (toolbox talks) document training defense."], {
        bulletPoints: ["1926 Subpart P — excavation","Fall protection — roof and lift work","Housekeeping — wet slab and scrap","Multi-employer — GC safety coordination","Toolbox talk — weekly documented briefing"]
      }
    ),
    section(
      "plumb-safety-s5",
      "9.5 Safety, Licensing, and Inspections — Preparing for your licensing exam",
      ["Exams blend code, sizing, isometrics, and business law. Study adopted code edition, take practice tests, and learn calculator skills for fixture units and vent sizing.","Field experience maps to questions on inspections, materials, and safety. Schedule exam after completing required hours.","Passing opens higher wage tiers and permit-pulling authority where applicable."], {
        bulletPoints: ["Code tabbing — speed on open-book tests","Isometric — sketch vented bath groups","Fixture units — table practice","Business law — lien and contract basics","Hour log — apprenticeship documentation"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why safety, licensing, and inspections matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in safety, licensing, and inspections","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["Competent person — trench inspection authority","Trench box — shield system in unstable soil","Journeyman card — personal competency credential","Contractor license — business entity permit","Flux fumes — ventilation in tight spaces","Hot work permit — fire watch on commercial"],
      realWorldRelevance: "Journeymen and service techs use safety, licensing, and inspections daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "plumb-careers",
    10,
    "Plumbing Careers and Business Basics",
    [
    section(
      "plumb-careers-s1",
      "10.1 Plumbing Careers and Business Basics — Union, open shop, and residential routes",
      ["Union UA paths offer structured apprenticeship, pension, and dispatch hall work—strong on commercial and industrial. Open-shop contractors may train in-house with ABC or merit programs, often flexible on residential service.","Specialties—medical gas, fire sprinkler (cross-license), pipefitting on industrial—extend earnings. Know which path fits your mobility and learning style.","Geography matters: high-cost cities pay more but demand commutes; rural areas need generalists."], {
        bulletPoints: ["UA — United Association union locals","Merit shop — non-union contractor training","Service vs new construction — career flavor","Medical gas — additional certification","Geographic wage — BLS and local surveys"]
      }
    ),
    section(
      "plumb-careers-s2",
      "10.2 Plumbing Careers and Business Basics — Estimating labor and material markup",
      ["Estimators count fixtures, pipe, fittings, equipment, and labor hours from historical production rates. Add burden (taxes, insurance, truck), overhead, and profit. Small jobs need minimum charges to cover mobilization.","Change orders document extras—hidden conditions in remodels eat margin without written approval.","Wholesale pricing fluctuates; update quotes when copper spikes."], {
        bulletPoints: ["Takeoff — quantity from plans","Burden — payroll taxes and benefits","Change order — written scope and price","Mobilization — trip and setup minimum","Markup — overhead and profit layers"]
      }
    ),
    section(
      "plumb-careers-s3",
      "10.3 Plumbing Careers and Business Basics — Starting a small plumbing LLC",
      ["Register entity, obtain contractor license, insurance (GL, workers comp), and bonded status where required. Separate business banking; track permits per job.","Van, tools, and initial marketing cost cash—maintain reserve for payroll between draws on commercial work.","Lawyer review on contract templates—payment terms and lien rights vary by state."], {
        bulletPoints: ["LLC — liability separation","GL insurance — general liability certificate","Workers comp — required with employees","Mechanic's lien — unpaid work remedy (state rules)","Business bank — no mixing personal funds"]
      }
    ),
    section(
      "plumb-careers-s4",
      "10.4 Plumbing Careers and Business Basics — Cash flow and callback costs",
      ["Net-30 commercial pay slows cash—line of credit bridges payroll. Residential cards improve flow. Callbacks for free rework destroy margin—track cause (bad part, install error, customer abuse).","Warranty reserves on water heaters and fixtures should be budgeted.","Review P&L monthly, not yearly surprise."], {
        bulletPoints: ["Draw schedule — commercial payment milestones","Callback rate — quality KPI","Warranty reserve — expected return visits","AR aging — collect overdue invoices","P&L — profit and loss review"]
      }
    ),
    section(
      "plumb-careers-s5",
      "10.5 Plumbing Careers and Business Basics — Five-year career planning in trades",
      ["Year 1–2: tools, code basics, reliable attendance. Year 3–4: license prep, lead small rough crews. Year 5+: journeyman license, specialize or start business.","Mentors accelerate growth—ask foremen for feedback. Continuing education on backflow, green systems, or inspection expands options.","Trades reward reputation; your name follows you on permit records."], {
        bulletPoints: ["License milestone — journeyman then contractor","Mentor — monthly skill feedback","Specialty — backflow, medical gas, inspection","Reputation — AHJ and GC relationships","Continuing ed — code updates each cycle"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why plumbing careers and business basics matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in plumbing careers and business basics","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["UA — United Association union locals","Merit shop — non-union contractor training","Takeoff — quantity from plans","Burden — payroll taxes and benefits","LLC — liability separation","GL insurance — general liability certificate"],
      realWorldRelevance: "Journeymen and service techs use plumbing careers and business basics daily—this chapter connects code, tools, and customer-facing work.",
    }
  )
];
