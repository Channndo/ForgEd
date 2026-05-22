/** Skilled-trades chapter content for plumbing, electrical, and HVAC textbooks. */

const PLUMBING_CHAPTERS = [
{
    id: "plumb-intro",
    title: "Introduction to the Plumbing Trade",
    sections: [
{
        heading: "Trade scope and public health role",
        paragraphs: [
"Plumbing is one of the oldest regulated building trades because it directly protects drinking water and removes waste that would otherwise spread disease. In the United States, plumbers install, repair, and maintain potable water distribution, sanitary drainage, storm drainage, fuel gas piping (where licensed), and related fixtures on residential, commercial, and industrial projects.",
"Most plumbers work for mechanical contractors, service companies, facility maintenance departments, or as self-employed operators. Day-to-day work spans reading prints, laying out pipe, soldering or pressing copper, solvent-welding PVC, crimping PEX, setting fixtures, and coordinating inspections with the authority having jurisdiction (AHJ).",
"Unlike a single DIY repair, professional plumbing is systems thinking: pressure, flow, venting, corrosion, expansion, and code minimums must work together. Apprentices start on material handling and rough-in support; journeymen lead installs and troubleshooting; master plumbers (in states that use the designation) often pull permits and run jobs.",
        ],
        bulletPoints: [
"Potable supply — delivers safe drinking water under pressure",
"DWV — gravity drainage with traps and venting to protect trap seals",
"Mechanical contractor — employer on new construction and tenant improvement",
"Service plumber — diagnostics, repairs, water heaters, drain cleaning",
"AHJ — local building department or inspector enforcing adopted codes",
        ],
        citations: [
{
            source: "International Plumbing Code (IPC)",
            url: "https://www.iccsafe.org/products-and-services/codes/",
            note: "Model code adopted (with amendments) by many U.S. jurisdictions"
          },
        ]
      },
{
        heading: "Apprenticeship pathways and journeyman progression",
        paragraphs: [
"Entering the trade usually means a registered apprenticeship (union UA locals, merit-shop ABC chapters, or employer-sponsored programs) combining paid OJT with classroom instruction. Typical ratios are roughly 8,000–10,000 hours of field work plus 144+ hours of related training per year over four to five years before journeyman status.",
"Strong apprentices track pipe sizes, fitting names, and tool use before they are asked to lay out a bathroom group. They learn to ask for clarification on prints, label their cuts, and keep work areas broom-clean because inspectors and foremen notice habits early.",
"Licensing is state-specific: some states license at the journeyman level, others at master, and reciprocity is limited. Even where a license is not required for every task, employers and insurers expect documented training because errors can flood buildings or contaminate water supplies.",
        ],
        bulletPoints: [
"OJT — paid field hours under supervision",
"Related instruction — code, math, safety, theory nights or trade school",
"Journeyman — competent to lay out and install without constant oversight",
"Master — business ownership, permitting, or supervisory credential (where used)",
"Credential stack — OSHA 10, backflow tester, medical gas (specialty paths)",
        ]
      },
{
        heading: "Service versus new construction work",
        paragraphs: [
"New construction rough-in happens before drywall: plumbers drill studs, set carriers, run DWV with proper slope, and stub supplies. Trim-out follows finishes—setting faucets, tying in appliances, and testing. Schedules are driven by general contractor milestones and inspection windows.",
"Service work is reactive and customer-facing: leaking angle stops, failed water heaters, sewer backups, and remodeling retrofits. Technicians diagnose with gauges, cameras, and experience, then quote repair options. Van stock, clear communication, and respect for occupied homes separate reputable service shops from churn-and-burn operators.",
"Many plumbers cross-train both sides early, then specialize. Construction builds layout and code fluency; service builds troubleshooting speed. Wages vary by region and segment, but demand remains strong where housing stock ages and commercial retrofits accelerate.",
        ],
        bulletPoints: [
"Rough-in — concealed piping before wall close-in",
"Trim-out — visible fixtures and final connections",
"Punch list — small items before substantial completion",
"Service van stock — common stems, flappers, P-traps, supply lines",
"Customer scope — explain options, price, and warranty in plain language",
        ]
      },
{
        heading: "Misconceptions about plumber earnings and work",
        paragraphs: [
"Television clips rarely show the crawlspace work, permit paperwork, or 6 a.m. material runs. Physical demands include lifting water heaters, working in trenches, and sustained kneeling. Weather and unfinished sites affect comfort; service calls may run evenings when emergencies hit.",
"Income can be strong, especially with licenses, specialties (medical gas, backflow), or ownership—but early apprenticeship wages are entry-level. Benefits differ: union packages often include pension and health; small shops may offer leaner packages with overtime opportunity.",
"Failure modes for new entrants include underestimating math and code study, skipping tool maintenance, and poor communication with other trades. Reliable plumbers show up on time, protect finished surfaces, and document changes instead of hiding shortcuts.",
        ],
        bulletPoints: [
"Physical load — lifting, kneeling, ladder work, heat/cold exposure",
"Wage curve — apprentice < journeyman < licensed/owner",
"Union vs open shop — different training pipelines and benefits",
"Callbacks — repeat visits for leaks cost margin and reputation",
"Documentation — photos, as-builts, and permit cards reduce disputes",
        ]
      },
{
        heading: "Your first week on a commercial jobsite",
        paragraphs: [
"Expect orientations: hazard communication, PPE rules, lockout/tagout awareness, and site logistics. You will carry material, cut pipe to length, deburr, and practice joints under watch. Foremen assign tasks in small, verifiable steps—support a lift, firestop a penetration, label a line—not unsupervised critical connections.",
"Learn the jobsite chain: superintendent schedules, mechanical foreman sequences work, inspector holds cover approvals. Ask where SDS sheets live, where trench shields are staged, and which prints are the current revision.",
"By day five you should name common fittings (90, 45, coupling, wye, cleanout), identify copper Type L vs M, and know never to cut a structural beam without engineering approval. Professionalism—ID badge, hard hat, respectful radio traffic—earns the next teaching moment.",
        ],
        bulletPoints: [
"Site orientation — hazards, muster points, substance policies",
"Print revision — date and sheet discipline prevent wrong installs",
"Tool accountability — personal hand tools vs company power tools",
"Trade coordination — core drills and firestopping are shared risks",
"Daily cleanup — trip hazards and scrap pile management",
        ]
      },
    ]
  },
{
    id: "plumb-tools",
    title: "Tools, Materials, and Pipe Systems",
    sections: [
{
        heading: "Pipe materials and joining methods",
        paragraphs: [
"U.S. plumbing uses several pressure and drainage materials chosen for application, cost, and code approval. Copper remains common for supply (soldered, brazed, or press); PEX dominates residential supply with crimp or expansion fittings; CPVC serves supply in some regions; PVC and ABS serve DWV with solvent cement.",
"Cast iron and hubless cast iron still appear in commercial DWV and fire-rated assemblies. Galvanized steel is largely legacy supply—often replaced during remodels. Gas piping may be black steel, CSST (with manufacturer training), or copper tube per local fuel gas code.",
"Joining method must match material and listing: overtightening PVC primer/cement schedules causes weak joints; underheated solder leaves voids; PEX rings require calibration and gauge checks. Material literacy prevents the classic apprentice mistake—grabbing the wrong adapter and hiding it with tape.",
        ],
        bulletPoints: [
"Type L / M copper — wall thickness; L is typical for water supply",
"PEX-A vs PEX-B — expansion vs crimp systems; do not mix fittings",
"Schedule 40/80 PVC — DWV and some pressure applications per listing",
"ABS — DWV in many jurisdictions; check local amendments",
"Press fittings — mechanical joints with proprietary jaws and gauges",
        ]
      },
{
        heading: "Hand tools every apprentice carries",
        paragraphs: [
"A working plumber’s bag includes pipe wrenches, adjustable wrenches, tongue-and-groove pliers, tubing cutter, reamer, hacksaw or reciprocating blade, basin wrench, torpedo level, and tape measure. Channel locks supplement but should not chew finished chrome.",
"Specialty tools arrive with experience: flaring tools for soft copper, grooving tools where permitted, soil pipe cutters, internal pipe wrenches, and inspection mirrors. Power tools—threading machines, portaband, press tools—usually belong to the employer with maintenance logs.",
"Calibration matters for press tools and PEX gauges. Dull cutters oval copper tube; dirty jaws slip on fittings. Tool care is safety: a seized adjustables can slip and strike knuckles in tight cabinets.",
        ],
        bulletPoints: [
"Pipe wrench — directional bite; two wrenches for opposing force",
"Tubing cutter — square wheel, deburr inside and out",
"Basin wrench — tightens faucet nuts behind bowls",
"Soil pipe cutter — cast iron scoring and snapping",
"Torpedo level — short runs and fixture alignment",
        ]
      },
{
        heading: "Reading a material takeoff list",
        paragraphs: [
"Takeoffs translate prints into purchasable quantities: pipe lengths by size, fitting counts by type, valves, hangers, and specialties. Apprentices learn to read abbreviations—1/2 COP TYPE L, 3 PVC DWV, CO for cleanout—and to add waste factors for cuts and damaged pieces.",
"Wholesale houses and job accounts expect accurate lists to stage deliveries. Foreman sign-off prevents duplicate orders when revisions shift fixture locations. Labeling bundles by area (Unit 204 bath group) saves hours on multi-family decks.",
"Digital BIM projects export counts, but field still verifies against walkdowns. Conflicts between structure and routed pipe appear only when someone looks up from the tablet.",
        ],
        bulletPoints: [
"Takeoff — quantity survey from plans",
"Waste factor — extra length for cuts and mistakes",
"BOM — bill of materials tied to job phase",
"Staging — deliver rough materials before lift constraints",
"Revision cloud — changed areas on updated sheets",
        ]
      },
{
        heading: "Wrong fittings and damaged threads",
        paragraphs: [
"Mixing DWV fittings on supply, using non-listed transitions, or forcing mismatched threads causes immediate leaks or delayed failures. Cross-threading galvanized or brass adapters ruins ports; overtightening chrome compression nuts cracks ferrules.",
"Damaged copper from dull cutters may not seal in press jaws; oval tube shows as weeping hours later. PVC joints assembled dry or without primer fail pressure tests. Training emphasizes fit-up inspection before glue sets or solder flows.",
"When a joint fails inspection, cut it out cleanly, deburr, and remake—patch adapters in concealed spaces are red flags to inspectors and owners.",
        ],
        bulletPoints: [
"Dry fit — verify alignment before permanent joint",
"Deburr — prevents gasket cuts and turbulent pockets",
"Thread sealant — tape or pipe dope per manufacturer; not on compression",
"Transition fittings — listed coupling between dissimilar materials",
"Rework — cut out failed joint; no hidden rubber wraps",
        ]
      },
{
        heading: "Building a starter tool bag",
        paragraphs: [
"Buy durable basics before boutique gadgets: two pipe wrenches (14\" and 18\"), 12\" tongue-and-groove, 6-in-1 screwdriver, flashlight, gloves, knee pads, and sharp cutters. Add a small notebook for fitting sketches and code snippets.",
"Employer-provided press tools and threading machines come later. Mark personal tools; respect loaner policies. On service trucks, organizers speed calls—labeled bins for 3/8 supply lines, fill valves, and common flappers.",
"Your bag signals professionalism: organized, no leaking thread oil bottles, batteries charged. Foremen assign better tasks to techs who return borrowed tools intact.",
        ],
        bulletPoints: [
"Core wrenches — stagger sizes for pair work",
"PPE — safety glasses, gloves, steel toe per site rules",
"Lighting — headlamp for cabinets and crawlspaces",
"Notebook — field sketches beat phone photos in wet hands",
"Maintenance — oil wrenches, replace cutter wheels",
        ]
      },
    ]
  },
{
    id: "plumb-supply",
    title: "Water Supply and Distribution",
    sections: [
{
        heading: "Potable pressure and pipe sizing basics",
        paragraphs: [
"Municipal water enters buildings through a meter and main shutoff, then branches to fixtures at pressures typically between 40 and 80 psi. Excessive pressure damages fixtures and causes water hammer; regulators and expansion tanks manage stability. Pipe sizing uses fixture unit counts from code tables—not guesswork—to keep adequate flow at peak demand.",
"Velocity limits reduce noise and erosion in copper; PEX installations follow manufacturer bend radii and support spacing. Hot water may be generated centrally or at point-of-use; recirculation lines save water in large buildings but require insulation and balancing.",
"Apprentices learn to read pressure gauges, calculate simple fixture unit totals, and identify when upsizing a run is cheaper than callback complaints about weak showers.",
        ],
        bulletPoints: [
"Fixture units — code-based demand values per appliance",
"Static vs dynamic pressure — flow changes readings",
"PRV — pressure-reducing valve at meter or branch",
"Expansion tank — absorbs heated water volume change",
"Velocity — oversized pipe reduces noise; undersized causes weak flow",
        ]
      },
{
        heading: "Copper, PEX, and CPVC in modern supply",
        paragraphs: [
"Copper Type L is common above slab; Type M appears where allowed for interior supply. Soldered joints need clean, fluxed, fully heated cups; press joints need calibrated tools and no gouges. PEX manifolds homerun each fixture, reducing hidden joints but requiring labeled homeruns and protection from UV where exposed.",
"CPVC uses one-step or two-step cement systems per manufacturer; it is rigid and sensitive to support spacing. Mixing systems requires listed transition fittings—never a threaded adapter buried in a wall.",
"Material choice follows spec, local habit, and freeze-risk: PEX tolerates some expansion; copper is traditional on commercial; CPVC competes on cost in warm climates.",
        ],
        bulletPoints: [
"Homerun PEX — manifold to fixture with fewer couplings",
"Press copper — no flame in occupied spaces",
"Solder — MAP gas or acetylene per site policy",
"CPVC support — hangers at listed intervals",
"Freeze mitigation — insulate, heat tape, or relocate in cold zones",
        ]
      },
{
        heading: "Installing a residential manifold",
        paragraphs: [
"Lay out the manifold near the water heater or mechanical room with shutoffs for each branch and a main isolation valve. Drill plates with listed clamps; protect PEX from abrasion through studs with sleeves. Label each port (KITCHEN HOT, MASTER BATH COLD) for future service.",
"Pressure-test before concealment: cap branches, attach gauge, raise pressure to inspector-required levels (often 100+ psi on supply for a duration), and document. Drywall cannot hide failed tests.",
"Coordinate with electricians and HVAC—manifold walls become crowded chases. Maintain access panels for maintenance.",
        ],
        bulletPoints: [
"Manifold — central distribution with individual valves",
"Ball valve — quarter-turn isolation per branch",
"Gauge test — verify no leaks before cover",
"Sleeves — protect tubing through framing",
"Access panel — maintainable valve locations",
        ]
      },
{
        heading: "Low pressure and hammering pipes",
        paragraphs: [
"Low pressure at a single fixture often traces to clogged aerators, partially closed stops, or undersized branch runs. Whole-house weak pressure may indicate PRV failure, utility issue, or main line obstruction. Systematic diagnosis starts at the meter, then moves inward.",
"Water hammer follows fast-closing valves (dishwashers, solenoids). Hammer arrestors or air chambers absorb shock; loose pipe straps amplify noise. High pressure without a regulator accelerates wear.",
"Do not mask symptoms with bigger pumps without engineering—fix the root restriction or failed valve.",
        ],
        bulletPoints: [
"Angle stops — verify fully open at fixture",
"PRV adjustment — within manufacturer range",
"Hammer arrestor — listed device near quick-closing valve",
"Pipe strap — reduce movement in walls",
"Flow test — bucket test for GPM at fixture",
        ]
      },
{
        heading: "Pressure testing before drywall",
        paragraphs: [
"Isolate the system, remove aerators and PRVs that could be damaged, install test plugs and gauge. Raise pressure gradually; walk the line listening and watching fittings. Hold for code-required time; record on inspection card.",
"If pressure drops, soap-bubble joints (where safe) or listen for hiss. Mark failing joints, cut out, remake. Retest before calling inspection—failed rough tests delay entire floors.",
"Document with photos for GC records; protects you if other trades damage piping later.",
        ],
        bulletPoints: [
"Test cap — rated for test pressure",
"Soap test — bubbles show weeps at joints",
"Hold time — per IPC/local amendment",
"Inspection card — signed rough supply approval",
"Protection — cap open ends until trim",
        ]
      },
    ]
  },
{
    id: "plumb-dwv",
    title: "Drain, Waste, and Vent (DWV)",
    sections: [
{
        heading: "Gravity drainage and fixture traps",
        paragraphs: [
"DWV systems move wastewater by gravity with minimum slopes—typically 1/4 inch per foot on 3-inch and smaller pipe in many codes—toward building drains and municipal sewers. Each fixture trap holds a water seal blocking sewer gas; trap seal loss causes odor complaints and health concerns.",
"Branch lines collect fixture groups; building drains connect to building sewers outside. Cleanouts provide access for maintenance at changes of direction and long runs. Studor vents (AAVs) are allowed only where code and manufacturer listings permit.",
"Apprentices mark invert elevations on prints to avoid sagging horizontal runs that collect solids and clog.",
        ],
        bulletPoints: [
"P-trap — standard fixture trap shape",
"Invert — inside bottom of pipe; elevation language",
"Cleanout — plugged access for snaking",
"Building drain — last interior segment before exterior",
"Trap seal — water barrier against sewer gas",
        ]
      },
{
        heading: "Venting patterns and stack offsets",
        paragraphs: [
"Vents carry no flow under normal conditions; they equalize pressure so traps do not siphon. Wet vents, circuit vents, and island fixture vents are code-specific layouts plumbers must recognize on plans. Main stacks penetrate roofs with flashing; offsets use fittings to maintain grade.",
"Horizontal vent runs need slope back toward drainage or level per code edition. Undersized vents cause gurgling and slow drainage. Stud walls hide vent lines that still need slope and support.",
"Reading riser diagrams links every trap to a vent path—missing vent on a laundry box is a common plan-check fix.",
        ],
        bulletPoints: [
"Stack vent — vertical extension through roof",
"Wet vent — dual-purpose drainage and vent (where allowed)",
"AAV — air admittance valve; local rules vary",
"Circuit vent — multi-fixture venting pattern",
"Roof flashing — weatherproof penetration",
        ]
      },
{
        heading: "Roughing a bathroom group",
        paragraphs: [
"Lay out water closet, lavatory, tub/shower, and shower drains per print dimensions from framing. Core drill or saw waste openings with firestopping requirements. Set closet flange height for finished floor; allow for tile thickness.",
"Run 3-inch waste for WC, 2-inch for tub/shower, 1-1/2 or 2-inch for lavatory per spec. Vent the group before closing walls. Support pipe per code spacing; no stress on flanges from misaligned studs.",
"Coordinate with HVAC supply registers and electrical boxes—conflicts get resolved in the field with documented RFI if needed.",
        ],
        bulletPoints: [
"Closet flange — anchored to subfloor; wax ring at trim",
"Shower pan — preslope and liner before tile (trade overlap)",
"Fire caulk — rated penetration seal",
"Backing — blocking for tub valves and shower rails",
"RFI — request for information on print conflicts",
        ]
      },
{
        heading: "Clogs, sags, and missing vent connections",
        paragraphs: [
"Bellied horizontal pipe holds water and grease; grade must be verified with level or laser. Double-trapping (trap under trap) breaks seals. Vents tied downstream of heavy flow can pull trap water.",
"Job-site shortcuts—using sanitary tees on their back, unglued joints, or forgotten test caps—show up at final inspection or first owner use. Camera inspection confirms offset joints in slab.",
"Repair often requires opening walls or jacking slab; prevention is correct rough-in and test before cover.",
        ],
        bulletPoints: [
"Belly — sagging pipe holding stagnant water",
"Double trap — prohibited in most codes",
"Siphonage — vacuum pulling trap seal",
"Camera — verifies blockage location",
"Jackhammer — slab repair access",
        ]
      },
{
        heading: "Reading a DWV isometric sketch",
        paragraphs: [
"Isometrics show pipe in 3D oblique: fittings, sizes, and vent connections without full floor plans. Learn arrow direction of flow, vent takeoffs, and cleanout symbols.",
"Trace each fixture to the stack, note fitting types (wye vs sanitary tee orientation), and compare to architectural wall locations. Discrepancies get flagged before order.",
"Sketching your own isometric for a small bath group is a journeyman skill that prevents wrong fittings on the truck order.",
        ],
        bulletPoints: [
"Wye — branch at flow direction; not for vertical to horizontal misuse",
"San tee — vertical stack to horizontal branch",
"Isometric — simplified 3D routing view",
"Cleanout symbol — maintenance access point",
"Flow arrow — drainage direction indicator",
        ]
      },
    ]
  },
{
    id: "plumb-fixtures",
    title: "Fixtures, Faucets, and Appliances",
    sections: [
{
        heading: "Rough versus trim fixture phases",
        paragraphs: [
"Rough-in sets valves, carriers, tub drains, and shower arms before finishes. Trim installs faucets, trim kits, and connection hoses after tile and paint. Mixing the sequence damages finishes and voids warranties.",
"Fixture schedules on architectural sheets list manufacturers and models; substitutions need approval. ADA heights and knee clearance affect lavatory and faucet placement.",
"Apprentices verify rough locations against tile layout—an offset shower arm becomes a visible mistake after glass goes in.",
        ],
        bulletPoints: [
"Rough-in — concealed valves and drains",
"Trim-out — visible fixtures and escutcheons",
"Fixture schedule — model list on plans",
"Carrier — wall-hung lavatory or urinal support frame",
"Stop valve — angle or straight shutoff at fixture",
        ]
      },
{
        heading: "Carriers, valves, and supply stops",
        paragraphs: [
"Wall-hung lavatories and urinals mount on steel carriers anchored to structure. Level and height set the fixture plane; drywall slips over spuds. Thermostatic mixing valves protect users from scalding at gang showers.",
"Stops allow isolation without shutting the whole building. Use listed supply connectors; overtightening flexible lines strips threads.",
"Gas appliances (where plumbed) need sediment traps and shutoffs per fuel gas code—coordinate license scope with HVAC/gas fitters.",
        ],
        bulletPoints: [
"Lav carrier — adjustable legs and mounting",
"TMV — thermostatic mixing valve at multi-head showers",
"Supply connector — braided or corrugated listed line",
"Escutcheon — covers wall penetration",
"Gas shutoff — appliance isolation",
        ]
      },
{
        heading: "Setting a wall-hung lavatory",
        paragraphs: [
"Confirm carrier rating and backup blocking. Set drain and supply heights per manufacturer template. After wall finish, hang basin, connect trap and supplies, test for leaks with tissue under joints.",
"Silicone at basin-to-wall is cosmetic, not structural. Hand-tighten then quarter-turn with wrench per fitting guidance.",
"Document trim completion on punch list; owner manuals go in closeout binder.",
        ],
        bulletPoints: [
"Template — manufacturer rough dimensions",
"Trap arm — alignment to prevent siphon or leak",
"P-trap — removable for hair clogs",
"Leak check — dry joint inspection before closeout",
"Punch — trim defects list",
        ]
      },
{
        heading: "Leaks at trim and loose carriers",
        paragraphs: [
"Weeping at supply nuts often means cracked ferrule or crossed threads. Dripping at spouts may be cartridge or seat wear. Carrier movement cracks porcelain and breaks seals—re-anchor if studs were missed.",
"Running toilets waste water through flappers, fill valves, or flush valve seals. Gauge tank parts before replacing entire fixtures.",
"Do not use non-listed tape or epoxy on potable trim—replace the failed component.",
        ],
        bulletPoints: [
"Ferrule — compression seal; one-time crush",
"Cartridge — replaceable control in single-handle faucets",
"Flapper — tank seal on gravity toilets",
"Carrier bolt — torque per spec",
"Flood — shut main if leak threatens occupancy",
        ]
      },
{
        heading: "Trim-out punch list workflow",
        paragraphs: [
"Walk each bath with superintendent: flow, temperature, drain speed, and hardware tight. Reset aerators removed for debris flush. Label shutoffs for facilities staff.",
"Photograph completed rooms for warranty baseline. Stage owner training on water heater setpoint and shutoff locations.",
"Close permits only after final plumbing inspection and meter release.",
        ],
        bulletPoints: [
"Flow test — hot/cold at each fixture",
"Temperature — TMV output within code limit",
"Drain test — tub/shower drains without backup",
"Closeout photo — warranty baseline",
"Final inspection — AHJ sign-off",
        ]
      },
    ]
  },
{
    id: "plumb-codes",
    title: "Reading Plans, Codes, and Permits",
    sections: [
{
        heading: "IPC adoption and local amendments",
        paragraphs: [
"Most U.S. cities adopt the International Plumbing Code (IPC) with state or local amendments—pipe materials, AAV rules, and water heater seismic straps vary. The adopted code year (2021, 2024) matters; do not cite outdated editions on permit sets.",
"Code books define minimum safety, not best practice. Engineers may specify above-minimum slopes, pipe sizes, or backflow devices on commercial work.",
"Keep a jobsite copy or PDF of the local amendment sheet; inspectors enforce local differences, not national summaries.",
        ],
        bulletPoints: [
"IPC — model plumbing code from ICC",
"Amendment — local legal overrides",
"Adopted edition — year enforced at permit",
"Above minimum — engineer spec can exceed code",
"Code book — field reference, not memorization only",
        ],
        citations: [
{
            source: "International Plumbing Code (IPC)",
            url: "https://www.iccsafe.org/products-and-services/codes/",
            note: "Check your AHJ for adopted edition and amendments"
          },
        ]
      },
{
        heading: "Plan symbols and riser diagrams",
        paragraphs: [
"Plumbing plans use standard symbols for fixtures, valves, cleanouts, and pipe sizes. Riser diagrams show stack continuity from basement to roof. Compare reflected ceiling plans for conflicts with diffusers and lights.",
"Revision clouds and addenda supersede older sheets—always build from latest issue. Dimension strings to structure, not guess from architectural centerlines.",
"Highlight questions before rough: missing vent, unclear indirect waste, or unspecified backflow.",
        ],
        bulletPoints: [
"Riser diagram — vertical system map",
"Reflected ceiling — overhead MEP coordination",
"Indirect waste — discharge to receptor",
"Addendum — post-bid changes",
"Dimension — rough location tolerance",
        ]
      },
{
        heading: "Submitting a permit packet",
        paragraphs: [
"Contractor license, job address, scope description, plan sets, and sometimes fixture unit calculations or energy forms go to the building department portal or counter. Fees scale with valuation; schedule inspections at rough and final milestones.",
"Separate plumbing permit may link to building permit number. HOA or historical districts add layers but do not replace code.",
"Track expiration—permits lapse if work stalls; renew before restart.",
        ],
        bulletPoints: [
"Permit card — posted on site with inspection history",
"Valuation — drives fee; must be honest",
"Plan check — corrections before approval",
"Inspection request — 24-hour notice typical",
"Lapsed permit — renewal or new application",
        ]
      },
{
        heading: "Code violations that fail inspection",
        paragraphs: [
"Missing test plugs, inadequate cleanouts, wrong fitting on drainage, unvented fixtures, and unsupported pipe on horizontal runs fail rough inspections. Final failures include missing dielectric unions, no expansion tank on closed-loop heaters, and cross-connections.",
"Backflow devices without annual test tags fail commercial finals. Inspectors document with photos; rework and re-inspect.",
"Arguing on site rarely helps—fix, learn, update crew briefing.",
        ],
        bulletPoints: [
"Cross-connection — potable tied to non-potable",
"Dielectric union — dissimilar metal isolation",
"Support spacing — hangers per tables",
"Backflow — RPZ/DCVA testing records",
"Re-inspection fee — motivates first-time quality",
        ]
      },
{
        heading: "Navigating AHJ inspection schedule",
        paragraphs: [
"Book rough supply, rough DWV, and gas (if applicable) before cover. Some jurisdictions allow one combined rough; others split. Keep paths clear—inspector will not move stockpiled drywall.",
"Be present to open walls if questioned; have code book and approved prints. Record inspector name and comments on permit card.",
"Failed inspection stops downstream trades—treat schedule impact seriously.",
        ],
        bulletPoints: [
"Rough inspection — before concealment",
"Final inspection — fixtures operating",
"Inspector access — ladders, lights, clear path",
"Correction list — itemized fixes",
"As-built — update if field routing changed",
        ]
      },
    ]
  },
{
    id: "plumb-rough",
    title: "Rough-In and Installation Practices",
    sections: [
{
        heading: "Stud drilling and firestopping basics",
        paragraphs: [
"Pipe penetrations through framing require sized holes—not oversized cavities that weaken walls. Fire-rated assemblies need listed firestop systems matching tested assemblies; orange foam without UL listing fails.",
"Protect plates on nail surfaces prevent screw punctures of tubing. Maintain edge distances on engineered joists per manufacturer.",
"Coordinate core drills for clustered penetrations with structural approval.",
        ],
        bulletPoints: [
"Bore shield — metal plate protecting pipe",
"Firestop — rated caulk/wrap system",
"Engineered joist — drill zone per manufacturer",
"Core drill — slab/wall clustered holes",
"Penetration log — firestop documentation",
        ]
      },
{
        heading: "Slope, support, and penetration sealing",
        paragraphs: [
"DWV horizontal runs hold grade with hangers before adjacent trades disturb pipe. Support copper and PEX per spacing tables; heavy cast iron needs robust hangers.",
"Seal annular spaces against air, smoke, and pests. Waterproof exterior penetrations with flashing.",
"Winter rough requires draining test water in freezing climates.",
        ],
        bulletPoints: [
"Grade stake — laser or string line for slope",
"Hanger spacing — per material tables",
"Annular seal — elastomeric or mortar per spec",
"Freeze — blow out test water if heat off",
"Vibration isolation — pumps and equipment",
        ]
      },
{
        heading: "Coordinating with other trades in a chase",
        paragraphs: [
"Mechanical chases stack plumbing, HVAC ducts, electrical, and fire sprinkler. Weekly coordination meetings resolve elevation conflicts before install. Maintain access to valves and dampers.",
"If duct wins elevation, reroute pipe early—not after drywall. BIM clash detection helps on large jobs; small jobs need walkdowns.",
"Document agreed elevations on sketch posted in chase.",
        ],
        bulletPoints: [
"Coordination drawing — overlay trades",
"Offset fitting — reroute without breaking slope",
"Access — valve reach after close-in",
"BIM clash — model conflict resolution",
"Walkdown — physical verification",
        ]
      },
{
        heading: "Covering pipes before inspection",
        paragraphs: [
"Covering prior to approval risks tear-out. GC pressure to close walls is common—hold line until signed rough card. Exception: temporary protection with removable panels where allowed.",
"If another trade damages pipe, stop work, notify foreman, photo damage, repair and retest.",
"Pressure gauges left on test help prove system integrity at inspection.",
        ],
        bulletPoints: [
"Premature cover — rework cost multiplier",
"Removable panel — temporary access strategy",
"Damage report — GC and insurance trail",
"Test gauge — left on for inspector",
"Hold point — no cover without sign-off",
        ]
      },
{
        heading: "Pre-cover inspection readiness",
        paragraphs: [
"Walk your rough like an inspector: supports, cleanouts, vent terminations, firestop, test attached. Have prints, permit, and toolbox for minor fixes on the spot.",
"Crew briefing the night before reduces failed calls. Stock extra fittings for quick swaps.",
"Passing rough keeps electricians and insulators on schedule—professional courtesy across trades.",
        ],
        bulletPoints: [
"Checklist — supports, vents, tests, firestop",
"Print set — current revision on site",
"Toolbox — common fittings for field fix",
"Crew brief — roles during inspection",
"Sign-off — permit card before cover",
        ]
      },
    ]
  },
{
    id: "plumb-service",
    title: "Troubleshooting Leaks and Blockages",
    sections: [
{
        heading: "Diagnostic order for supply leaks",
        paragraphs: [
"Start at visible source: supply line, stop, stem, or spout. Shut isolation valves to segment the system. If meter spins with all stops closed, suspect hidden leak—listen, thermal camera, or pressure hold test.",
"Document findings before opening walls; customers approve access. Moisture meters help map extent in cabinets and slabs.",
"Escalate slab or main line leaks to specialists with locators and permits.",
        ],
        bulletPoints: [
"Segmentation — close stops to isolate",
"Meter test — dials moving with all off",
"Thermal — warm spot on slab leak",
"Moisture meter — extent in cabinets",
"Locator — acoustic/electronic for buried pipe",
        ]
      },
{
        heading: "Snaking, jetting, and camera inspection",
        paragraphs: [
"Hand snakes clear nearby lavatory clogs; drum machines reach further with correct auger size—scratching chrome traps is unacceptable. Jetting cuts grease in commercial lines with trained operators and PPE.",
"Cameras confirm breaks, roots, and bellies; footage supports repair quotes. Cleanouts must be accessible—cutting access in slab is last resort.",
"Never snake without knowing pipe material—PVC fittings can crack with aggressive cutters.",
        ],
        bulletPoints: [
"Auger size — match pipe diameter",
"Jetter — high-pressure grease cutting",
"Camera head — documents condition",
"Root intrusion — exterior repair or lining",
"Cleanout access — required maintenance point",
        ]
      },
{
        heading: "After-hours service truck mindset",
        paragraphs: [
"Emergencies—burst lines, sewer backups—need calm triage: stop water, protect contents, communicate ETA. Truck stock covers 80% of common repairs; know wholesale night counter hours.",
"Flat-rate vs T&M pricing must be explained upfront. Document pre-existing conditions in photos.",
"Wear boot covers in homes; leave work area cleaner than found.",
        ],
        bulletPoints: [
"Main shutoff — show customer location",
"Truck stock — stems, fill valves, supply lines",
"Night wholesale — restock for morning crew",
"Boot covers — residential professionalism",
"Photo log — before/after for disputes",
        ]
      },
{
        heading: "Misdiagnosed slab leaks",
        paragraphs: [
"Warm spots and high bills suggest hot line slab leaks; random wet carpet may be drain line. Jumping to jackhammer without isolation wastes money.",
"Perform pressure isolation, use locators, correlate with copper corrosion patterns in acidic water regions.",
"Offer repair options: reroute overhead, epoxy lining where listed, or spot repair.",
        ],
        bulletPoints: [
"Hot vs cold slab leak — temperature clue",
"Reroute — abandon buried section",
"Epoxy lining — listed system for pinholes",
"Acidic water — accelerates copper pitting",
"Jackhammer — last confirmation step",
        ]
      },
{
        heading: "Customer communication on service calls",
        paragraphs: [
"Explain what you found, what you will do, and what it costs before major work. Plain language beats jargon; show camera footage when helpful.",
"Warranty callbacks get priority scheduling. Leave tags on water heater setpoints and filter changes.",
"Upsell ethically—whole-house PRV after multiple fixture failures is education, not pressure.",
        ],
        bulletPoints: [
"Scope approval — verbal and written for big jobs",
"Camera share — build trust on drain calls",
"Warranty — document parts and labor period",
"Tag — heater setpoint and shutoff map",
"Follow-up — call after major repair",
        ]
      },
    ]
  },
{
    id: "plumb-safety",
    title: "Safety, Licensing, and Inspections",
    sections: [
{
        heading: "Trenching, confined space, and ergonomics",
        paragraphs: [
"Excavations deeper than 5 feet generally require protective systems—sloping, benching, shoring, or trench boxes per OSHA 1926 Subpart P. Competent person daily inspection is mandatory.",
"Confined spaces (sewers, tanks) need entry permits, monitoring, and rescue plans—not solo heroics. Lift water heaters with team lifts or mechanical aids.",
"Rotate kneeling tasks; use pads. Hearing protection on jackhammers and threaders.",
        ],
        bulletPoints: [
"Competent person — trench inspection authority",
"Trench box — shield system in unstable soil",
"Confined space — permit-required entry rules",
"Team lift — water heater and boiler handling",
"Knee pads — reduce chronic injury",
        ],
        citations: [
{
            source: "OSHA — Trenching and Excavation",
            url: "https://www.osha.gov/trenching-excavation",
            note: "Subpart P protective systems and competent person requirements"
          },
        ]
      },
{
        heading: "State licensing tiers and reciprocity",
        paragraphs: [
"States differ: some license apprentices, journeymen, and masters separately; others license contractors only. Continuing education renews licenses; violations can suspend credentials.",
"Reciprocity agreements are limited—moving states often requires exams or supplemental hours. Verify before bidding work across borders.",
"Unlicensed work risks fines, voided insurance, and denied permits.",
        ],
        bulletPoints: [
"Journeyman card — personal competency credential",
"Contractor license — business entity permit",
"CEU — continuing education units",
"Reciprocity — state-to-state recognition rules",
"Permit denial — unlicensed contractor cannot pull",
        ]
      },
{
        heading: "PPE for soldering and chemicals",
        paragraphs: [
"Safety glasses, gloves, and respirators where flux fumes concentrate. Fire extinguisher within reach when soldering near combustibles. Hot work permits on commercial sites.",
"Drain cleaners and solvents need SDS review—never mix products. Eye wash awareness on industrial accounts.",
"Steel toe and hi-vis per GC rules; cut-resistant gloves for sheet metal and cast iron.",
        ],
        bulletPoints: [
"Flux fumes — ventilation in tight spaces",
"Hot work permit — fire watch on commercial",
"SDS — chemical hazard sheet",
"Fire extinguisher — within 10 feet typical policy",
"Hi-vis — site-specific PPE policy",
        ]
      },
{
        heading: "OSHA citations on plumbing jobs",
        paragraphs: [
"Common citations: missing trench protection, ladder misuse, lack of fall protection on low-slope roofs during vent work, and inadequate eye protection during cutting.",
"Housekeeping—slips on wet floors after test blowouts—counts too. Subcontractors are liable on multi-employer sites.",
"Safety meetings (toolbox talks) document training defense.",
        ],
        bulletPoints: [
"1926 Subpart P — excavation",
"Fall protection — roof and lift work",
"Housekeeping — wet slab and scrap",
"Multi-employer — GC safety coordination",
"Toolbox talk — weekly documented briefing",
        ]
      },
{
        heading: "Preparing for your licensing exam",
        paragraphs: [
"Exams blend code, sizing, isometrics, and business law. Study adopted code edition, take practice tests, and learn calculator skills for fixture units and vent sizing.",
"Field experience maps to questions on inspections, materials, and safety. Schedule exam after completing required hours.",
"Passing opens higher wage tiers and permit-pulling authority where applicable.",
        ],
        bulletPoints: [
"Code tabbing — speed on open-book tests",
"Isometric — sketch vented bath groups",
"Fixture units — table practice",
"Business law — lien and contract basics",
"Hour log — apprenticeship documentation",
        ]
      },
    ]
  },
{
    id: "plumb-careers",
    title: "Plumbing Careers and Business Basics",
    sections: [
{
        heading: "Union, open shop, and residential routes",
        paragraphs: [
"Union UA paths offer structured apprenticeship, pension, and dispatch hall work—strong on commercial and industrial. Open-shop contractors may train in-house with ABC or merit programs, often flexible on residential service.",
"Specialties—medical gas, fire sprinkler (cross-license), pipefitting on industrial—extend earnings. Know which path fits your mobility and learning style.",
"Geography matters: high-cost cities pay more but demand commutes; rural areas need generalists.",
        ],
        bulletPoints: [
"UA — United Association union locals",
"Merit shop — non-union contractor training",
"Service vs new construction — career flavor",
"Medical gas — additional certification",
"Geographic wage — BLS and local surveys",
        ]
      },
{
        heading: "Estimating labor and material markup",
        paragraphs: [
"Estimators count fixtures, pipe, fittings, equipment, and labor hours from historical production rates. Add burden (taxes, insurance, truck), overhead, and profit. Small jobs need minimum charges to cover mobilization.",
"Change orders document extras—hidden conditions in remodels eat margin without written approval.",
"Wholesale pricing fluctuates; update quotes when copper spikes.",
        ],
        bulletPoints: [
"Takeoff — quantity from plans",
"Burden — payroll taxes and benefits",
"Change order — written scope and price",
"Mobilization — trip and setup minimum",
"Markup — overhead and profit layers",
        ]
      },
{
        heading: "Starting a small plumbing LLC",
        paragraphs: [
"Register entity, obtain contractor license, insurance (GL, workers comp), and bonded status where required. Separate business banking; track permits per job.",
"Van, tools, and initial marketing cost cash—maintain reserve for payroll between draws on commercial work.",
"Lawyer review on contract templates—payment terms and lien rights vary by state.",
        ],
        bulletPoints: [
"LLC — liability separation",
"GL insurance — general liability certificate",
"Workers comp — required with employees",
"Mechanic's lien — unpaid work remedy (state rules)",
"Business bank — no mixing personal funds",
        ]
      },
{
        heading: "Cash flow and callback costs",
        paragraphs: [
"Net-30 commercial pay slows cash—line of credit bridges payroll. Residential cards improve flow. Callbacks for free rework destroy margin—track cause (bad part, install error, customer abuse).",
"Warranty reserves on water heaters and fixtures should be budgeted.",
"Review P&L monthly, not yearly surprise.",
        ],
        bulletPoints: [
"Draw schedule — commercial payment milestones",
"Callback rate — quality KPI",
"Warranty reserve — expected return visits",
"AR aging — collect overdue invoices",
"P&L — profit and loss review",
        ]
      },
{
        heading: "Five-year career planning in trades",
        paragraphs: [
"Year 1–2: tools, code basics, reliable attendance. Year 3–4: license prep, lead small rough crews. Year 5+: journeyman license, specialize or start business.",
"Mentors accelerate growth—ask foremen for feedback. Continuing education on backflow, green systems, or inspection expands options.",
"Trades reward reputation; your name follows you on permit records.",
        ],
        bulletPoints: [
"License milestone — journeyman then contractor",
"Mentor — monthly skill feedback",
"Specialty — backflow, medical gas, inspection",
"Reputation — AHJ and GC relationships",
"Continuing ed — code updates each cycle",
        ]
      },
    ]
  },
];

const ELECTRICAL_TRADES_CHAPTERS = [
{
    id: "elec-intro",
    title: "Introduction to the Electrical Trade",
    sections: [
{
        heading: "Residential and commercial electrician scope",
        paragraphs: [
"Electricians install, maintain, and repair power distribution, lighting, controls, and equipment connections in buildings and industrial sites. This textbook targets the electrical construction and maintenance trade path—apprenticeship, journeyman licensure, and field supervision—not electrical engineering degree work.",
"Daily tasks include pulling wire in raceway, terminating devices, setting panels, bending conduit, reading NEC-based plans, and testing circuits. Work spans new construction, tenant improvements, service upgrades, and maintenance calls.",
"Employers include electrical contractors, facility departments, data-center specialists, and maintenance firms. Safety culture and code compliance define competent crews.",
        ],
        bulletPoints: [
"Branch circuit — from breaker to loads",
"Feeder — larger conductors between panels",
"Service — utility to main disconnect",
"Maintenance — existing building troubleshooting",
"Contractor — licensed firm pulling permits",
        ]
      },
{
        heading: "Apprenticeship ratios and classroom hours",
        paragraphs: [
"Registered programs combine 4–5 years of OJT with related instruction on NEC, theory, motors, and safety. Ratio rules limit how many apprentices per journeyman on a crew.",
"Apprentices tag along on material prep, wire pulls, and cleanup before graduating to terminations under direct supervision. Math skills—algebra for conduit bends, ohms law—matter on exams.",
"State licensing boards set hour logs; keep accurate records.",
        ],
        bulletPoints: [
"OJT hours — typically 8,000 for journeyman",
"Related instruction — code and theory classes",
"Ratio — apprentice count per supervisor",
"Hour log — state-approved documentation",
"Classroom — union hall or community college",
        ]
      },
{
        heading: "Construction versus maintenance career flavor",
        paragraphs: [
"Construction crews chase schedules, work exposed decks, and install rough-in before drywall. Maintenance electricians know building histories, odd retrofits, and overnight shutdown windows.",
"Both need lockout/tagout discipline. Construction emphasizes installation methods; maintenance emphasizes diagnosis speed and customer communication.",
"Many electricians cross-train early, then specialize for wage and lifestyle fit.",
        ],
        bulletPoints: [
"Rough-in — boxes and conduit before finish",
"Trim-out — devices and panels energized last",
"Shutdown — planned power-off for tie-in",
"LOTO — lockout/tagout before work",
"On-call — maintenance rotation",
        ]
      },
{
        heading: "Myths about shock risk and \"just tie it in\"",
        paragraphs: [
"Voltage does not \"go away\" when breakers look off—verify absence of voltage. Cutting corners on grounding and GFCI protection kills and burns. PPE is backup, not primary protection.",
"Social media shortcuts skip listing requirements and torque specs. Inspectors and insurers reject untrained work.",
"Respect apprenticeship pace—speed comes after safe habit formation.",
        ],
        bulletPoints: [
"De-energized work — preferred whenever feasible",
"Verify — test before touch",
"GFCI/AFCI — life-safety devices per NEC",
"Listed parts — UL/ETL marked equipment",
"Torque — manufacturer specs on lugs",
        ]
      },
{
        heading: "First month on a commercial electrical crew",
        paragraphs: [
"Orientation covers site hazards, arc-flash boundaries (awareness), PPE, and gang box etiquette. You will measure, pull wire, sort material, and label circuits under supervision.",
"Learn names: foreman, general foreman, superintendent. Ask which prints are current. Never energize work you did not test.",
"End each day with tool count and cleanup—lost Klein linemans slow everyone.",
        ],
        bulletPoints: [
"Gang box — crew tool storage",
"Print revision — date on electrical sheets",
"Circuit labeling — panel directory accuracy",
"Material staging — wire reels and conduit",
"Tool mark — initials on personal gear",
        ]
      },
    ]
  },
{
    id: "elec-safety",
    title: "Electrical Safety and PPE",
    sections: [
{
        heading: "Shock, arc flash, and approach boundaries",
        paragraphs: [
"Shock injury depends on path through body, duration, and current. Arc flash releases thermal energy and pressure from faults—PPE categories come from incident energy analysis on larger gear.",
"Approach boundaries on energized equipment are labeled; unqualified persons stay back. Qualified workers use written procedures and PPE matched to risk.",
"De-energize, verify, apply LOTO before touch work whenever possible.",
        ],
        bulletPoints: [
"Qualified person — training and demonstrated skill",
"Incident energy — cal/cm² on arc flash label",
"Approach boundary — limited/restricted/prohibited",
"Arc-rated clothing — CAT level matched to hazard",
"LOTO — personal lock on disconnect",
        ]
      },
{
        heading: "Insulated tools and meter habits",
        paragraphs: [
"Use rated meters and leads; check CAT rating against service voltage. One-hand test technique reduces cross-body shock path. Inspect gloves and mats per ASTM schedules.",
"Insulated hand tools protect slips onto live parts during trim. Do not modify bits or cheater bars on live gear.",
"Replace cracked leads immediately.",
        ],
        bulletPoints: [
"DMM — digital multimeter usage",
"CAT III/IV — meter category for location",
"One-hand rule — other hand in pocket",
"Rubber gloves — dated testing for HV work",
"Insulated drivers — rated for exposure",
        ]
      },
{
        heading: "Job-site safety meetings and JSAs",
        paragraphs: [
"Daily toolbox talks cover tasks, hazards, and controls. Job safety analyses break down steps for lifts, trenching near utilities, and panel energization.",
"Stop work authority is real—report untagged energization or missing covers.",
"Document near-misses; they predict serious events.",
        ],
        bulletPoints: [
"Toolbox talk — 5–10 minute crew briefing",
"JSA — job safety analysis steps",
"Stop work — halt until hazard controlled",
"Near-miss — report without blame to learn",
"Cover plates — install before leaving panel",
        ]
      },
{
        heading: "Common safety failures in the field",
        paragraphs: [
"Missing panel covers, abandoned live tails in ceilings, ungrounded metal boxes, and reversed neutral/ground bonds cause shocks and fires. Overloaded temporary power strips on construction heat are frequent fires.",
"Rushing trim without testing GFCI function fails inspection and endangers users.",
"Trainees must speak up when asked to work hot without justification.",
        ],
        bulletPoints: [
"Energized coverless panel — shock hazard",
"Temporary power — GFCI protection on cords",
"Bonding error — neutral-ground mix-up",
"Backstab — spring connections; screw term preferred",
"Hot work policy — energized only when necessary",
        ]
      },
{
        heading: "Building a personal safety checklist",
        paragraphs: [
"Before work: permits, prints, LOTO devices, meter batteries, PPE fit. During: verify zero energy, torque terminations, label circuits. After: restore covers, update panel directory, remove locks only when safe.",
"Annual NFPA 70E awareness training complements OSHA 10/30 cards employers require. OSHA 1926 Subpart K and 1910 Subpart S govern construction and maintenance electrical work—GFCI on temp power and training records are frequent audit items.",
"Safety professionalism advances you to lead roles.",
        ],
        bulletPoints: [
"Pre-job — hazard scan",
"Verify dead — three-point test where policy requires",
"Torque log — large feeder terminations",
"Panel schedule — update after changes",
"70E training — arc-flash awareness",
        ],
        citations: [
{
            source: "OSHA — Electrical Safety",
            url: "https://www.osha.gov/electrical",
            note: "Construction and general industry electrical standards overview"
          },
        ]
      },
    ]
  },
{
    id: "elec-circuits",
    title: "Circuits, Ohm's Law, and Test Equipment",
    sections: [
{
        heading: "Voltage, current, and resistance relationships",
        paragraphs: [
"Ohm's law (V = I × R) explains how voltage pushes current through resistance. Series circuits share current; parallel branches split current by conductance. Power (watts) equals voltage times current—critical for heat in conductors and loads.",
"Apprentices use the law to predict voltage drop on long branch circuits and to understand why a dim bulb can mean high resistance connection, not just a bad lamp.",
"AC systems add reactance; trade math focuses on practical approximations and code tables before deep phasor analysis.",
        ],
        bulletPoints: [
"Volt — electrical pressure",
"Ampere — current flow",
"Ohm — resistance unit",
"Series — single current path",
"Parallel — multiple branches",
        ]
      },
{
        heading: "Series, parallel, and combination loads",
        paragraphs: [
"Receptacles on a branch are in parallel; switches in series with loads control current. Multi-wire branch circuits share neutral—handle with care to avoid overload when breakers are mishandled.",
"Motor loads draw inrush current; HVAC compressors need correct overcurrent protection.",
"Identify loads before swapping breakers—upsizing without wire evaluation is a fire risk.",
        ],
        bulletPoints: [
"Branch circuit — protected by one OCPD",
"Inrush — motor starting current spike",
"Multi-wire — shared neutral; tied breakers",
"Load calc — NEC Article 220 basics",
"OCPD — overcurrent protective device/breaker",
        ]
      },
{
        heading: "Using a DMM on de-energized circuits",
        paragraphs: [
"Select volts, ohms, or continuity; verify lead placement. Continuity proves a complete path; resistance finds loose neutrals. Never ohms on live circuits.",
"Document readings in troubleshooting notes. Compare to expected: heater element ohms, ballast signatures.",
"Calibrate habits: probe on known live source before and after (when policy allows) to catch dead batteries.",
        ],
        bulletPoints: [
"Continuity beep — path complete",
"Resistance — ohms for elements and coils",
"Voltage — line-to-line, line-to-neutral",
"Lead placement — correct jacks for amps",
"Battery check — meter self-test",
        ]
      },
{
        heading: "Misread meters and ghost voltage",
        paragraphs: [
"High-impedance ghost voltage from adjacent energized conductors can fool a naive reading—load the circuit or use low-Z meter mode where appropriate.",
"Confusing AC/DC settings on controls leads to wrong conclusions.",
"Assuming zero because breaker is off without LOTO verification causes shock.",
        ],
        bulletPoints: [
"Ghost voltage — capacitive coupling indication",
"Low-Z mode — reduces false positives",
"AC/DC — match system type",
"LOTO — verify absence of voltage",
"Record readings — avoid guesswork",
        ]
      },
{
        heading: "From theory problem to panel schedule",
        paragraphs: [
"Translate classroom problems to panel directories: which breaker feeds which room, continuous vs noncontinuous loads, and dedicated appliance circuits.",
"Practice load calc worksheets for small dwelling units—kitchen, laundry, HVAC circuits.",
"Understanding theory speeds trim troubleshooting when a tripping breaker maps to a real load list.",
        ],
        bulletPoints: [
"Panel schedule — breaker to circuit map",
"Continuous load — 125% factor where required",
"Dedicated circuit — single appliance",
"Worksheet — NEC 220 simplified dwelling",
"Trip mapping — label-driven diagnosis",
        ]
      },
    ]
  },
{
    id: "elec-conductors",
    title: "Conductors, Boxes, and Raceway",
    sections: [
{
        heading: "Wire types and insulation ratings",
        paragraphs: [
"THHN/THWN-2 copper is common in conduit; NM-B (Romex) in dwelling wood framing where permitted; MC cable in commercial; UF for direct burial. Temperature ratings (90°C dry) interact with ampacity tables and bundling adjustments.",
"Aluminum feeders need listed lugs and anti-oxidant compound where specified; torque matters.",
"Strip length and termination method follow device listing—too much bare copper is a fault.",
        ],
        bulletPoints: [
"THHN — thermoplastic high heat nylon",
"NM-B — nonmetallic sheathed cable",
"MC — metal-clad armored cable",
"Ampacity — Table 310.16 baseline",
"Aluminum — CO/ALR devices or listed lugs",
        ]
      },
{
        heading: "Box fill and conductor bundling",
        paragraphs: [
"Box fill calculations count conductors, clamps, and devices—overfill causes heat and damage. Use box extensions or larger boxes when adding smart switches.",
"Bundling many current-carrying conductors reduces ampacity—adjust derating factors.",
"Pull boxes sized for bending radius ease wire pulls.",
        ],
        bulletPoints: [
"Box fill — NEC 314.16 calculation",
"Extension ring — depth for added devices",
"Derating — ampacity adjustment for bundles",
"Pull box — junction with access",
"Device yoke — mounting ears",
        ]
      },
{
        heading: "Installing EMT and pulling wire",
        paragraphs: [
"Cut EMT square, ream burrs, set connectors tight. Support spacing per code; straps within distance of boxes. Lubricate pulls on long runs; stagger splices in pulls.",
"Green wire is equipment grounding; bond metal raceway. Identify conductors with phase tape beyond required reidentification.",
"Bend 90s with consistent radius to avoid jacket damage on THHN.",
        ],
        bulletPoints: [
"EMT — electrical metallic tubing",
"Connector — set screw or compression",
"Fish tape — pull path through conduit",
"Grounding — EGC with raceway bond",
"Support — straps per NEC",
        ]
      },
{
        heading: "Overfilled boxes and damaged insulation",
        paragraphs: [
"Forced devices into shallow boxes nick insulation. Pull replacements require access—document if concealed splices are allowed (generally not in walls without access).",
"Conduit lips without bushings slice jackets. Fix before energizing.",
"Heat from loose connections darkens wires—replace damaged segment.",
        ],
        bulletPoints: [
"Shallow box — upgrade depth",
"Bushing — conduit end protection",
"Accessible splice — junction box required",
"Darkened wire — heat damage replacement",
"Inspection — reject damaged conductors",
        ]
      },
{
        heading: "Raceway layout on a small commercial room",
        paragraphs: [
"Route home runs from panel to boxes with minimal bends—each 90 adds pull friction. Coordinate ceiling height with HVAC.",
"Stub-ups from slab need sleeves; firestop after inspection where rated.",
"Label conduits at both ends for future troubleshooting.",
        ],
        bulletPoints: [
"Home run — direct path from panel",
"Stub-up — vertical conduit from slab",
"Bend count — fewer 90s easier pull",
"Sleeve — slab penetration protection",
"Conduit label — circuit ID both ends",
        ]
      },
    ]
  },
{
    id: "elec-residential",
    title: "Residential Wiring and Panels",
    sections: [
{
        heading: "Dwelling service and panel basics",
        paragraphs: [
"Single-family services commonly 100–200A, with main breaker or main lug panel and separate disconnect where required. Service entrance cable or conduit from meter base to panel; grounding electrode system (rod, Ufer, water bond where allowed).",
"Keep working clearance in front of panel—36 inches deep typical. Bond neutral and ground only at service point.",
"Solar and battery interconnection add new rules—coordinate with utility.",
        ],
        bulletPoints: [
"Service rating — amps from utility",
"Main breaker — service disconnect in panel",
"EGC — equipment grounding conductor",
"Electrode — ground rod/Ufer to earth",
"Working space — NEC 110.26",
        ]
      },
{
        heading: "NM-B routing and protection plates",
        paragraphs: [
"Run NM through bored studs with plates where closer than 1-1/4 inch to face. Support within intervals; staple without damaging sheath.",
"Separate low-voltage from line voltage; crossing at 90 degrees if needed.",
"Outdoor-rated wiring methods where wet locations prohibit NM.",
        ],
        bulletPoints: [
"Bore shield — nail plate",
"Staple — NM support intervals",
"Wet location — UF or conduit methods",
"Low voltage — separation from power",
"Sheath damage — replace segment",
        ]
      },
{
        heading: "Kitchen, laundry, and bathroom circuits",
        paragraphs: [
"Small appliance branch circuits, GFCI/AFCI protection, dedicated laundry, bathroom receptacle rules change by NEC edition—use local adopted code.",
"Counter receptacles spaced per code; island and peninsula outlets where required.",
"Dedicated microwave or refrigerator circuits reduce nuisance trips.",
        ],
        bulletPoints: [
"SABC — small appliance branch circuits",
"GFCI — personnel protection device",
"AFCI — arc-fault protection",
"Dedicated — single appliance circuit",
"Island outlet — countertop rules",
        ]
      },
{
        heading: "Tripped AFCI and shared neutral errors",
        paragraphs: [
"AFCI nuisance trips from shared neutrals on MWBC mishandled, bad arcs on damaged cords, or incompatible dimmers. Neutral-to-ground faults trip GFCI.",
"Identify load by switching off branches; megohm test insulation when persistent.",
"Do not defeat protection—fix cause.",
        ],
        bulletPoints: [
"MWBC — handle tied breakers",
"Nuisance trip — diagnose load type",
"Insulation test — find damaged NM",
"Neutral-ground — bond only at service",
"Defeat — illegal and dangerous",
        ]
      },
{
        heading: "Rough-in walkthrough for a ranch home",
        paragraphs: [
"Walk plan with foreman: panel location, smoke CO locations, exterior wet receptacles, HVAC disconnect. Drill top plates with firestop.",
"Box heights consistent; nail plates before insulators.",
"Pre-wire inspection before insulation.",
        ],
        bulletPoints: [
"Panel location — 30-inch width clearance",
"Smoke/CO — interconnected where required",
"Exterior GFCI — weather-resistant cover",
"Firestop — top plate penetrations",
"Pre-wire — inspection before insulation",
        ]
      },
    ]
  },
{
    id: "elec-devices",
    title: "Lighting, Devices, and Load Calculations",
    sections: [
{
        heading: "Switches, receptacles, and dimming controls",
        paragraphs: [
"Single-pole, three-way, and four-way switching patterns control loads from multiple locations. Listed dimmers match LED loads; neutral-required dimmers need neutral in box.",
"Tamper-resistant receptacles in dwelling spaces; weather-resistant covers outdoors.",
"Smart devices need neutral and often 2.4 GHz hub—verify box volume.",
        ],
        bulletPoints: [
"Three-way — traveler conductors between switches",
"Four-way — between two three-ways",
"TR receptacle — tamper resistant",
"WR cover — in-use weather cover",
"Neutral-required dimmer — spare neutral in box",
        ]
      },
{
        heading: "Lighting types and branch design",
        paragraphs: [
"LED retrofits reduce load but inrush matters on commercial controls. Emergency lighting on branch or unit equipment with test buttons.",
"Calculate lighting load for commercial using VA per fixture and demand factors.",
"Title 24 and IECC add energy controls in many states—coordinate with GC.",
        ],
        bulletPoints: [
"LED — electronic driver in fixture",
"Emergency — egress illumination path",
"Demand factor — reduces counted load",
"Occupancy sensor — energy code device",
"Foot-candle — lighting level goal",
        ]
      },
{
        heading: "Load calculation for a dwelling unit",
        paragraphs: [
"NEC Article 220 optional and standard methods count general lighting at 3 VA/sq ft, small appliance circuits, laundry, appliances, HVAC at nameplate or calculation.",
"Service size emerges from computed load vs available utility.",
"Apprentices practice worksheets; masters sign load calcs on plans.",
        ],
        bulletPoints: [
"General lighting — 3 VA per square foot typical",
"Largest motor — special calculation",
"HVAC — heating vs cooling selection",
"Service upgrade — when calc exceeds panel",
"Worksheet — step-by-step NEC 220",
        ]
      },
{
        heading: "Overloaded circuits and wrong breakers",
        paragraphs: [
"Adding outlets without calc invites trips and heat. Wrong breaker on wire gauge—#14 on 20A—overheats wire before breaker opens.",
"Backstab failures heat devices—use screw terminations on critical circuits.",
"Continuous loads need 125% conductor sizing where applicable.",
        ],
        bulletPoints: [
"Upsizing wire — match breaker to conductor",
"Continuous — 3+ hour loads factor",
"Backstab — spring slot; screw preferred",
"Heat at device — loose or overload",
"Breaker curve — B vs C for inrush",
        ]
      },
{
        heading: "Device trim on a tenant finish",
        paragraphs: [
"Align devices plumb; tighten straps without cracking plates. Torque spec on spec-grade receptacles.",
"Test GFCI/AFCI buttons; label HVAC disconnect.",
"Punch minor drywall chips before paint.",
        ],
        bulletPoints: [
"Device level — cosmetic standard",
"Torque screwdriver — spec-grade terminations",
"Test button — GFCI/AFCI function",
"Plate gap — uniform reveal",
"Punch — touch-up list",
        ]
      },
    ]
  },
{
    id: "elec-commercial",
    title: "Commercial Basics and Motor Circuits",
    sections: [
{
        heading: "Three-phase power in buildings",
        paragraphs: [
"Commercial services often 208Y/120V or 480Y/277V three-phase wye. Motors use three poles; phase rotation matters for pump direction.",
"Identify lines with rotation meter before closing motor.",
"Transformers step voltages inside building—know primary/secondary.",
        ],
        bulletPoints: [
"Wye — line-to-neutral and line-to-line",
"Delta — no neutral on some services",
"Phase rotation — ABC order for motors",
"208/120 — common light commercial",
"480/277 — large lighting loads",
        ]
      },
{
        heading: "Motor starters and disconnects",
        paragraphs: [
"Motors need disconnect within sight, overcurrent protection, and starter/contactor for large units. Overload heaters sized to FLA.",
"VFDs add harmonics and EMC concerns—follow manufacturer install manual.",
"Lockout at disconnect before maintenance.",
        ],
        bulletPoints: [
"FLA — full load amps on nameplate",
"Starter — contactor plus overload",
"Disconnect — visible lockable device",
"VFD — variable frequency drive",
"Overload — thermal protection",
        ]
      },
{
        heading: "Installing a motor disconnect and whip",
        paragraphs: [
"Mount disconnect within sight of motor; run MC or conduit whip with ground. Torque lugs; test rotation under supervision.",
"Bond motor frame; ground raceway.",
"Record nameplate data on panel schedule.",
        ],
        bulletPoints: [
"Sight line — disconnect visibility rule",
"Whip — short flex to motor",
"Rotation test — bump motor briefly",
"Ground lug — frame bond",
"Nameplate — voltage, phase, FLA",
        ]
      },
{
        heading: "Phase loss and overloaded starters",
        paragraphs: [
"Single-phasing heats windings; overloads should trip. Chattering contactors indicate coil voltage issues.",
"Undersized wire causes voltage drop and heat.",
"Do not bypass overloads.",
        ],
        bulletPoints: [
"Single-phase — one leg missing",
"Voltage drop — long undersized feeder",
"Chatter — low coil voltage",
"Bypass — illegal overload defeat",
"Megger — insulation test motor",
        ]
      },
{
        heading: "Commercial panelboard coordination",
        paragraphs: [
"Panel schedules list feeders, breaker sizes, and loads. Multi-pole breakers for three-phase; handle ties for MWBC where used.",
"Working space and panel labeling per NEC.",
"Future spare breakers planned for tenant growth.",
        ],
        bulletPoints: [
"Panel schedule — directory accuracy",
"Multi-pole — three-pole breaker for 3φ",
"Spare — planned capacity",
"Label — permanent circuit ID",
"110.26 — working clearance",
        ]
      },
    ]
  },
{
    id: "elec-codes",
    title: "NEC Overview, Codes, and Inspections",
    sections: [
{
        heading: "NEC structure and local adoption",
        paragraphs: [
"The National Electrical Code (NFPA 70) organizes requirements by article: grounding, wiring methods, special occupancies. States and cities adopt editions (2020, 2023) with amendments.",
"Code minimum ensures safety; specs may exceed. Always cite adopted edition on permit.",
"NFPA handbooks explain intent; field uses enforced legal code.",
        ],
        bulletPoints: [
"Article 210 — branch circuits",
"Article 250 — grounding and bonding",
"Article 300 — wiring methods",
"Adopted edition — year on permit",
"AHJ — local inspector authority",
        ],
        citations: [
{
            source: "NFPA 70 — National Electrical Code",
            url: "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70",
            note: "Verify adopted NEC edition with your jurisdiction"
          },
        ]
      },
{
        heading: "How inspectors read your work",
        paragraphs: [
"Inspectors check bonding, box fill, conductor support, GFCI/AFCI placement, working space, and torque on large lugs. Rough inspection before cover; final with devices and labels.",
"Be professional—fix items without argument; re-inspect quickly.",
"Failed items delay energization and occupancy.",
        ],
        bulletPoints: [
"Rough — boxes, grounding, support",
"Final — operation and labeling",
"Torque — large terminations",
"Re-inspect — after corrections",
"Red tag — failed until fixed",
        ]
      },
{
        heading: "Permit and inspection sequencing",
        paragraphs: [
"Pull electrical permit linked to building permit. Schedule temp power inspection separately on large sites.",
"Utility release after final—meter set.",
"Keep as-builts for additions.",
        ],
        bulletPoints: [
"Temp power — construction service",
"Utility — meter after final",
"As-built — field changes documented",
"Inspection log — permit card",
"Energize — only after approval",
        ]
      },
{
        heading: "Common NEC failures on rough",
        paragraphs: [
"Unsupported NM, missing nail plates, wrong box type for damp locations, missing ground pigtails, illegal splices outside box.",
"Commercial: missing bushings, improper EMT support.",
"Education prevents repeat failures.",
        ],
        bulletPoints: [
"Ground pigtail — bond box and device",
"Unsupported cable — staple intervals",
"Damp-rated box — wet location",
"Illegal splice — must be in box",
"Bushing — EMT terminations",
        ]
      },
{
        heading: "Code book navigation practice",
        paragraphs: [
"Tab Articles 210, 250, 300, 310, 406, 408 for daily work. Practice lookup drills: GFCI location, box fill, conduit fill.",
"Exam open-book speed matters for licensure.",
"Digital NEC apps speed field questions—confirm edition.",
        ],
        bulletPoints: [
"Tabs — exam and field speed",
"310.16 — ampacity table",
"314.16 — box fill",
"Chapter 9 — conduit fill tables",
"Edition match — app vs adopted code",
        ]
      },
    ]
  },
{
    id: "elec-troubleshoot",
    title: "Troubleshooting and Maintenance",
    sections: [
{
        heading: "Systematic fault isolation",
        paragraphs: [
"Start with symptom: no power, partial outage, tripping breaker, flicker. Map affected area to panel schedule. Verify reported outage—sometimes utility issue.",
"Segment by switching off branches; use meter on de-energized parts after LOTO.",
"Document steps—helps warranty and training.",
        ],
        bulletPoints: [
"Symptom map — area to circuit",
"Segment — divide and conquer",
"Utility check — meter base power",
"Documentation — steps and readings",
"LOTO — before contact",
        ]
      },
{
        heading: "Neutral and ground troubleshooting",
        paragraphs: [
"Open neutral causes voltage swing on MWBC; shared neutral loose screw heats devices. Ground faults trip GFCI.",
"Measure voltage line-to-neutral vs line-to-ground; compare under load.",
"Bond only at service—subpanel neutrals separated from grounds where required.",
        ],
        bulletPoints: [
"Open neutral — dim/brights on MWBC",
"Loose neutral — heat at device",
"Ground fault — leakage to ground",
"Subpanel — separate neutral and ground bars",
"Voltage rise — open neutral hazard",
        ]
      },
{
        heading: "Maintenance shutdown planning",
        paragraphs: [
"Coordinate with owner for overnight or weekend shutdown. Notify fire alarm and IT; battery backups on critical loads.",
"Test backup generators after transfer switch exercise.",
"Restore in reverse order; verify all loads.",
        ],
        bulletPoints: [
"Shutdown plan — written steps",
"IT coordination — servers on UPS",
"Transfer switch — test sequence",
"Lock schedule — minimize downtime",
"Restore — verify each panel",
        ]
      },
{
        heading: "Chronic trips and hidden damage",
        paragraphs: [
"Intermittent trips from nail through wire, damaged cord, or failing compressor. Thermal scan finds hot connections.",
"Replace damaged NM sections; do not bury splices.",
"AFCI detects parallel arcs—find damaged insulation.",
        ],
        bulletPoints: [
"Nail plate miss — cable puncture",
"Thermal — hot spot at connection",
"Intermittent — hardest to find",
"Cord damage — replace appliance whip",
"Arc trace — insulation failure",
        ]
      },
{
        heading: "Closing a maintenance work order",
        paragraphs: [
"Record root cause, parts replaced, readings, photos. Update panel label if circuit changed.",
"Customer sign-off and warranty note.",
"Schedule follow-up if marginal insulation.",
        ],
        bulletPoints: [
"Work order — CMMS entry",
"Root cause — not just symptom fix",
"Panel label — update directory",
"Photos — before/after",
"Follow-up — retest in 30 days",
        ]
      },
    ]
  },
{
    id: "elec-careers",
    title: "Electrical Careers and Apprenticeship",
    sections: [
{
        heading: "IBEW, merit shop, and industrial paths",
        paragraphs: [
"IBEW/NECA apprenticeships offer structured training and scale wages on commercial work. Merit contractors train through ABC or in-house programs with flexibility.",
"Industrial millwright-electrician blends, data centers, and controls specialties pay premiums with travel.",
"Choose based on mobility, benefits, and project types you enjoy.",
        ],
        bulletPoints: [
"IBEW — union apprenticeship",
"ABC — merit shop training",
"Industrial — plant maintenance",
"Data center — critical power specialty",
"Controls — PLC and automation path",
        ]
      },
{
        heading: "License exams and continuing education",
        paragraphs: [
"Journeyman exams test NEC, calculations, and theory; master adds business law. Hours logged with state board.",
"CEUs keep license active; code updates every three years require study.",
"Reciprocity limited—plan moves early.",
        ],
        bulletPoints: [
"Journeyman exam — NEC heavy",
"Master exam — business and management",
"CEU — continuing education",
"Hour log — apprenticeship proof",
"Reciprocity — state agreements",
        ]
      },
{
        heading: "Wage progression and specialization",
        paragraphs: [
"Apprentice wage steps rise with hours; journeyman bumps at license. Foreman premiums for crew leadership.",
"Specialize in fire alarm (NICET), solar (NABCEP), or medium voltage for differentiation.",
"Overtime and per diem on travel jobs boost annual income.",
        ],
        bulletPoints: [
"Wage scale — union steps",
"Foreman — crew leadership premium",
"Fire alarm — low voltage license paths",
"Solar — PV installer credential",
"Per diem — travel job compensation",
        ]
      },
{
        heading: "Failed businesses and underbidding",
        paragraphs: [
"Underbidding jobs loses money on labor overruns; know production rates. Cash flow kills contractors who finance payroll on one slow payer.",
"Insurance lapses void contracts.",
"Callbacks on free work erode profit—quality first.",
        ],
        bulletPoints: [
"Production rate — hours per outlet",
"Cash flow — AR and line of credit",
"Insurance — GL and workers comp active",
"Callback — track by cause",
"Estimate buffer — contingency percent",
        ]
      },
{
        heading: "Five-year plan to journeyman and beyond",
        paragraphs: [
"Years 1–2: tools, safety, material prep. Years 3–4: terminations, motor basics, code study. Year 5: sit for journeyman, lead small crews.",
"Consider master, inspector, or estimator tracks.",
"Reputation with AHJ and GCs follows your name.",
        ],
        bulletPoints: [
"Tool investment — quality strippers and meter",
"Code study — weekly NEC article",
"Crew lead — small task ownership",
"Master path — business ownership",
"Inspector — former field to AHJ",
        ]
      },
    ]
  },
];

const HVAC_CHAPTERS = [
{
    id: "hvac-intro",
    title: "Introduction to HVAC",
    sections: [
{
        heading: "Heating, ventilation, and air conditioning scope",
        paragraphs: [
"HVAC technicians install and service systems that control temperature, humidity, and indoor air quality in homes, schools, offices, and industrial spaces. The trade blends mechanical aptitude, electrical controls, refrigeration theory, and customer communication—not desk-only engineering.",
"Work includes duct fabrication and hanging, refrigerant piping, gas furnaces, heat pumps, rooftop units, boilers (where licensed), controls, and preventive maintenance. Employers range from residential service companies to commercial mechanical contractors.",
"EPA Section 608 certification is required to handle refrigerants; additional gas licenses apply regionally.",
        ],
        bulletPoints: [
"HVAC — heating, ventilation, air conditioning",
"IAQ — indoor air quality",
"Split system — outdoor condenser plus indoor coil",
"Package unit — combined rooftop box",
"608 certification — refrigerant handling license",
        ]
      },
{
        heading: "Apprenticeship and EPA 608 pathways",
        paragraphs: [
"Apprentices learn brazing, charging, electrical metering, and airflow measurement under supervision. Classroom covers psychrometrics, refrigeration cycle, and NEC articles touching HVAC equipment.",
"608 Type I (small appliances), II (high-pressure), III (low-pressure), or Universal dictates job scope.",
"Tool investment: manifold gauges, multimeter, micron gauge, torque wrenches.",
        ],
        bulletPoints: [
"OJT — field hours with journeyman",
"608 Universal — broad refrigerant authority",
"Psychrometrics — air property math",
"Manifold — gauge set for refrigerant",
"Micron gauge — evacuation measurement",
        ]
      },
{
        heading: "Residential service versus commercial install",
        paragraphs: [
"Service techs diagnose no-cool calls, dirty filters, failed capacitors, and refrigerant leaks in occupied homes. Install crews set equipment, line sets, duct mains, and startup commissioning on new builds.",
"Commercial work adds larger tonnage, VAV boxes, building automation, and crane sets.",
"Pick a path by comfort with heights, travel, and on-call nights.",
        ],
        bulletPoints: [
"No-cool — AC service call staple",
"Commissioning — startup tests and paperwork",
"VAV — variable air volume terminal",
"Rooftop — curb-mounted package unit",
"On-call — rotating emergency duty",
        ]
      },
{
        heading: "Misconceptions about \"just adding Freon\"",
        paragraphs: [
"Low charge is a symptom—find leak, fix, evacuate, weigh charge. Overcharge hurts efficiency and compressor life. Mixing refrigerants is illegal and damages equipment.",
"Skipping evacuation leaves moisture and acids in system.",
"Customers need education on maintenance, not quick top-offs.",
        ],
        bulletPoints: [
"Leak search — nitrogen pressure, bubble, electronic sniffer",
"Recovery — mandatory before venting",
"Evacuation — deep vacuum below 500 microns target",
"Weigh-in — scale charging by line length",
"Blend ban — no substitute refrigerants",
        ]
      },
{
        heading: "First ride-along week expectations",
        paragraphs: [
"Ride along silently first—carry pads, flashlights, and trash bags. Learn to change filters, wash coils safely, and read nameplates.",
"Ask how to log refrigerant cylinders; EPA paper trail matters.",
"Dress for attics and crawls; hydration prevents heat illness.",
        ],
        bulletPoints: [
"Nameplate — model, refrigerant type, charge",
"Filter size — record on customer account",
"Cylinder log — EPA recovery documentation",
"Attic safety — joist walking, harness if required",
"Customer home — shoe covers and respect",
        ]
      },
    ]
  },
{
    id: "heating-basics",
    title: "Heating Systems",
    sections: [
{
        heading: "Furnace types and efficiency ratings",
        paragraphs: [
"Gas furnaces dominate U.S. residential heat: single-stage, two-stage, and modulating burners with AFUE ratings from 80% to 98%. Condensing units vent PVC; non-condensing use metal flue.",
"Heat pumps provide heat via refrigeration reverse cycle; auxiliary heat strips in cold climates.",
"Boilers and hydronic systems appear in Northeast and commercial—different skill set.",
        ],
        bulletPoints: [
"AFUE — annual fuel utilization efficiency",
"Condensing — extracts latent heat; PVC vent",
"Heat pump — reverse valve switches modes",
"Aux heat — electric strip backup",
"Boiler — hot water or steam heat",
        ]
      },
{
        heading: "Combustion air and venting basics",
        paragraphs: [
"Furnaces need adequate combustion air—direct vent pulls from outdoors; atmospheric relies on room volume or louvers. Flue blockages cause CO—test with analyzer.",
"Condensate drains must trap and route to plumbing.",
"Never operate with cracked heat exchanger—CO risk.",
        ],
        bulletPoints: [
"Combustion air — room volume or outdoor intake",
"Flue — exhaust path to outdoors",
"CO — carbon monoxide; analyzer test",
"Heat exchanger — separates flame from air stream",
"Condensate — acidic water from condensing furnace",
        ]
      },
{
        heading: "Installing a condensing gas furnace",
        paragraphs: [
"Set platform level, connect vent per manufacturer, gas pipe with sediment trap, low-voltage to thermostat. Pressure switch tubing routed without sags.",
"Checkout: rise, temperature split, combustion analysis, static pressure.",
"Permit and inspection per local mechanical code.",
        ],
        bulletPoints: [
"Platform — level pad",
"Sediment trap — drip leg on gas line",
"Pressure switch — proves vent flow",
"Temperature rise — supply minus return",
"Combustion analyzer — O2 and CO readings",
        ]
      },
{
        heading: "Cracked heat exchangers and flue issues",
        paragraphs: [
"Cracks leak combustion gases—red tag furnace. Blocked flues trip pressure switches; birds and ice are common.",
"Improper PVC slope collects condensate in vent.",
"Short cycling from oversized equipment or blocked filters.",
        ],
        bulletPoints: [
"Red tag — shut down unsafe unit",
"Pressure switch trip — vent or inducer fault",
"Filter — #1 cause of low airflow",
"Oversized — short cycle and comfort issues",
"Vent slope — condensate drainage",
        ]
      },
{
        heading: "Heating startup checklist",
        paragraphs: [
"Verify gas pressure, electrical polarity, thermostat type, filter clean, vents intact. Record combustion on invoice.",
"Customer education on filter schedule and CO detector.",
"Register warranty online.",
        ],
        bulletPoints: [
"Gas manifold pressure — per spec",
"Polarity — blower motor direction",
"Thermostat — heat anticipator or staging",
"CO detector — install where required",
"Warranty — online registration",
        ]
      },
    ]
  },
{
    id: "cooling-basics",
    title: "Cooling and Refrigeration",
    sections: [
{
        heading: "Vapor-compression refrigeration cycle",
        paragraphs: [
"Refrigerant evaporates in indoor coil absorbing heat; compressor pumps vapor; condenser rejects heat outdoors; metering device controls flow. Superheat and subcooling tune charge.",
"Pressure-temperature charts map refrigerant state.",
"Understand cycle before touching gauges.",
        ],
        bulletPoints: [
"Evaporator — indoor coil absorbs heat",
"Compressor — pumps refrigerant",
"Condenser — outdoor coil rejects heat",
"Metering device — TXV or piston",
"Superheat — vapor temperature above saturation",
        ]
      },
{
        heading: "Refrigerants and environmental rules",
        paragraphs: [
"HFCs like R-410A dominate residential; A2L lower-flammability refrigerants emerging with new equipment standards. CFC/HCFC phased out; recovery mandatory.",
"EPA 608 governs venting fines; label systems clearly.",
"Never mix oils and refrigerants across types.",
        ],
        bulletPoints: [
"R-410A — common residential high-pressure",
"A2L — newer mildly flammable class",
"Recovery — cylinder and scale log",
"Oil type — POE vs mineral per refrigerant",
"Venting — illegal release",
        ]
      },
{
        heading: "Evacuation and weighed charge procedure",
        paragraphs: [
"Replace line set or flush per spec. Evacuate to below 500 microns with standing test. Charge by weight plus line length adjustment.",
"Check superheat/subcooling at design conditions.",
"Record pressures and temps on startup sheet.",
        ],
        bulletPoints: [
"Micron — vacuum depth unit",
"Standing vacuum — test for leaks",
"Weigh charge — factory charge plus lines",
"Subcooling — liquid temp below saturation",
"Startup sheet — commissioning record",
        ]
      },
{
        heading: "Low charge and restricted metering",
        paragraphs: [
"Low charge shows low suction, warm vent air, ice on coil. Restricted TXV mimics low charge—measure superheat.",
"Non-condensables raise head pressure.",
"Compressor floodback from liquid slug damages valves.",
        ],
        bulletPoints: [
"Ice coil — low airflow or low charge",
"TXV — hunt or restriction diagnosis",
"Head pressure — high ambient or dirty condenser",
"Slugging — liquid to compressor",
"Sniffer — electronic leak detection",
        ]
      },
{
        heading: "Commissioning a residential split AC",
        paragraphs: [
"Verify breaker size, disconnect, whip, line set insulation, condensate drain. Run blower, check delta T, monitor amps.",
"Customer filter education; set programmable schedule.",
"Leave gauge ports capped.",
        ],
        bulletPoints: [
"Delta T — supply return temperature split",
"Amp draw — compare to nameplate RLA",
"Line insulation — suction line vapor barrier",
"Condensate — trap and slope",
"Caps — Schrader port covers",
        ]
      },
    ]
  },
{
    id: "airflow",
    title: "Airflow and Distribution",
    sections: [
{
        heading: "Duct systems and static pressure",
        paragraphs: [
"Supply trunks branch to rooms; return paths must balance—central return or jumper ducts. Static pressure measures duct restriction; high static reduces airflow and comfort.",
"Flex duct kinks kill performance; hard pipe preferred on critical runs.",
"Manual D sizing principles guide residential design.",
        ],
        bulletPoints: [
"Static pressure — inches of water column",
"Supply — conditioned air delivery",
"Return — path back to equipment",
"Flex duct — supported without sags",
"Manual D — ACCA duct design method",
        ]
      },
{
        heading: "CFM, fan laws, and blower performance",
        paragraphs: [
"Airflow in cubic feet per minute depends on fan speed and system resistance. Tap settings on blower wheels adjust speed; ECM motors modulate.",
"Measure at registers with hood or traverse where trained.",
"Insufficient CFM causes frozen coils and poor dehumidification.",
        ],
        bulletPoints: [
"CFM — cubic feet per minute",
"Blower tap — speed wiring on PSC motors",
"ECM — electronically commutated motor",
"Register hood — airflow measurement tool",
"Dehumidification — requires adequate runtime CFM",
        ]
      },
{
        heading: "Balancing a small residential system",
        paragraphs: [
"Set fan speed per design, open dampers on long runs, verify return grille sizing. Check temperature balance room to room.",
"Seal duct leaks with mastic—not duct tape alone.",
"Insulate ducts in unconditioned attics.",
        ],
        bulletPoints: [
"Damper — inline airflow adjustment",
"Mastic — sealed duct joints",
"Duct leakage — blower door duct blast optional",
"Return grille — sized for low noise",
"Balance report — room CFM notes",
        ]
      },
{
        heading: "Frozen coils and hot rooms",
        paragraphs: [
"Low airflow from filter or duct causes freeze-up. Hot upstairs rooms need return transfer or zoning.",
"Oversized AC short cycles—poor humidity removal.",
"Verify blower operation before blaming refrigerant.",
        ],
        bulletPoints: [
"Dirty filter — first check",
"Kinked flex — restriction",
"Zoning — bypass duct considerations",
"Short cycle — oversizing or oversized cooling",
"Transfer grille — high/low pressure path",
        ]
      },
{
        heading: "Duct retrofit planning",
        paragraphs: [
"Survey attic paths, structure conflicts, and equipment location. Fabricate offsets; hang with straps per code.",
"Coordinate with insulation crew after seal test.",
"Customer expectation on noise and register locations.",
        ],
        bulletPoints: [
"Offset — routed around structure",
"Strap — support intervals",
"Seal test — duct leakage standard",
"Register location — furniture conflict check",
"Noise — liner or sizing fixes",
        ]
      },
    ]
  },
{
    id: "controls",
    title: "Controls and Thermostats",
    sections: [
{
        heading: "Low-voltage control circuits",
        paragraphs: [
"24VAC from transformer powers thermostat, contactors, and valves. Common (C) wire needed for smart stats.",
"Color codes are convention not law—verify at equipment.",
"Fuse protects transformer from shorts.",
        ],
        bulletPoints: [
"R/Y/G/W/O/B — conventional terminal labels",
"Common wire — 24VAC return for smart tstats",
"Contactor — outdoor compressor switch",
"Transformer — 24V from line voltage",
"Control fuse — 3A typical protection",
        ]
      },
{
        heading: "Single-stage versus staging and heat pumps",
        paragraphs: [
"Staging improves comfort and efficiency—two-stage furnace with two-stage AC, or heat pump with aux lockout tables.",
"Heat pump balance point determines aux heat enable.",
"Setback strategies differ for heat pumps—avoid aggressive setbacks that trigger strip heat.",
        ],
        bulletPoints: [
"Staging — multiple capacity steps",
"Balance point — outdoor temp for aux heat",
"Lockout — disable aux above set outdoor temp",
"Setback — schedule temperature changes",
"Defrost — heat pump outdoor coil cycle",
        ]
      },
{
        heading: "Installing a smart thermostat",
        paragraphs: [
"Verify C wire or add power extender kit; configure heat pump reversing valve and aux heat.",
"Test all modes: heat, cool, fan, emergency heat.",
"Commission Wi-Fi for customer or leave offline per preference.",
        ],
        bulletPoints: [
"C wire — power for Wi-Fi stat",
"O/B — reversing valve energize",
"Emergency heat — forces strips",
"Configuration — equipment type in menu",
"Test modes — all stages before leaving",
        ]
      },
{
        heading: "Short cycles and blank thermostats",
        paragraphs: [
"Blank stat may be blown fuse, tripped float switch, or bad transformer. Short cycling from anticipator mis-set or oversized equipment.",
"Loose wire at stat causes intermittent.",
"Float switch on condensate pan safety.",
        ],
        bulletPoints: [
"Float switch — condensate overflow cutout",
"Blown fuse — control circuit short",
"Anticipator — heat anticipation on old stats",
"Loose terminal — intermittent operation",
"Oversized — rapid cycling",
        ]
      },
{
        heading: "Controls troubleshooting flow",
        paragraphs: [
"Power at transformer, fuse intact, 24V at stat terminals. Jump tests only with training—risk of damage.",
"Follow manufacturer wiring diagram for heat pump.",
"Document wire colors before disconnect.",
        ],
        bulletPoints: [
"Transformer test — 24VAC output",
"Jump test — supervised training only",
"Wiring diagram — unit door chart",
"Wire label — photo before change",
"Sequence — call for heat/cool path",
        ]
      },
    ]
  },
{
    id: "installation",
    title: "Installation Practices",
    sections: [
{
        heading: "Equipment selection and Manual S/J",
        paragraphs: [
"Cooling load calc (Manual J) sizes equipment; Manual S picks unit; Manual D sizes duct. Oversizing common mistake.",
"Match indoor coil to outdoor unit listing.",
"Gas furnace input matches ducted system design.",
        ],
        bulletPoints: [
"Manual J — residential load calculation",
"Manual S — equipment selection",
"Matched system — AHRI certified pairing",
"Ton — 12,000 BTU/hr cooling",
"Heat loss — heating load input",
        ]
      },
{
        heading: "Line sets, pads, and electrical disconnect",
        paragraphs: [
"Flare or braze lines; protect from abrasion; strap per spec. Pad level; vibration pads on compressors.",
"Disconnect within sight; MCA/MOP on nameplate guide breaker and wire.",
"UV-rated line insulation outdoors.",
        ],
        bulletPoints: [
"Line set — suction and liquid pair",
"Flare — torque with torque wrench",
"Disconnect — service maintenance switch",
"MCA — minimum circuit ampacity",
"MOP — maximum overcurrent protection",
        ]
      },
{
        heading: "Setting a heat pump system",
        paragraphs: [
"Mount air handler, level condenser, connect lines, evacuate, charge. Wire defrost and aux per diagram.",
"Static pressure test on duct; configure thermostat.",
"Inspection before cover close.",
        ],
        bulletPoints: [
"Air handler — indoor fan coil",
"Condenser — outdoor unit",
"Defrost board — outdoor coil ice control",
"Static test — duct design verification",
"Inspection — mechanical sign-off",
        ]
      },
{
        heading: "Leaks at flares and vibration noise",
        paragraphs: [
"Under-torqued flares leak; over-torque cracks. Vibration from loose pads transmits noise indoors.",
"Hard-start kits only when needed—manufacturer guidance.",
"Refrigerant oil stains indicate leak point.",
        ],
        bulletPoints: [
"Flare torque — spec chart",
"Pad level — rubber isolation",
"Hard start — capacitor assist",
"Oil stain — leak indicator",
"Noise — line set isolation",
        ]
      },
{
        heading: "New construction startup handoff",
        paragraphs: [
"Leave filter, thermostat manual, warranty card. Train customer on modes and filter.",
"Register with manufacturer; attach startup sheet to permit.",
"Schedule 30-day check optional for quality.",
        ],
        bulletPoints: [
"Homeowner packet — manuals and warranty",
"Startup sheet — pressures and temps",
"Filter — first one installed",
"30-day check — optional service visit",
"Permit close — final mechanical",
        ]
      },
    ]
  },
{
    id: "maintenance",
    title: "Maintenance and Service",
    sections: [
{
        heading: "PM schedules and seasonal tune-ups",
        paragraphs: [
"Spring AC PM: wash condenser, check charge, test capacitors, clean drain. Fall heat PM: inspect heat exchanger, combustion, inducer, and safeties.",
"Maintenance agreements stabilize company revenue and reduce emergency calls.",
"Checklist standardizes quality across techs.",
        ],
        bulletPoints: [
"PM — preventive maintenance visit",
"Capacitor — test microfarads",
"Contact cleaner — electrical connections",
"Drain flush — algae prevention",
"Agreement — recurring customer plan",
        ]
      },
{
        heading: "Coils, filters, and belts",
        paragraphs: [
"Evaporator coil cleaning improves airflow and heat transfer; condenser coil outdoor. Filters monthly consumer, quarterly minimum commercial light.",
"Belt tension and alignment on older blowers; ECM needs less.",
"Blower wheel dirt reduces CFM silently.",
        ],
        bulletPoints: [
"Coil cleaner — manufacturer approved",
"Filter MERV — pressure drop tradeoff",
"Belt gauge — deflection measurement",
"Blower wheel — vacuum and brush",
"MERV — minimum efficiency reporting value",
        ]
      },
{
        heading: "Capacitor and contactor replacement",
        paragraphs: [
"Dual capacitors fail open—compressor hums, fan won't spin. Contactor pits cause chatter.",
"Replace with exact microfarad rating; discharge before touch.",
"Verify amp draw after swap.",
        ],
        bulletPoints: [
"Dual cap — fan and compressor in one",
"Contactor — line voltage switching",
"Discharge — screwdriver across terminals safely",
"Microfarad — match ± tolerance",
"Amp clamp — verify running amps",
        ]
      },
{
        heading: "Ignoring float switches and drains",
        paragraphs: [
"Clogged drains flood ceilings; algae tablets help but not substitute cleaning. Wet switches prevent damage—test them.",
"Secondary pan switches on attic units save drywall.",
"Teach customers to change filters.",
        ],
        bulletPoints: [
"Primary drain — main condensate line",
"Secondary pan — backup protection",
"Wet switch — safety cutoff",
"Algae tablet — partial prevention",
"Ceiling stain — late drain failure",
        ]
      },
{
        heading: "Closing a service ticket professionally",
        paragraphs: [
"Explain findings, show worn parts, note measurements. Offer repair options tiered good/better/best.",
"Leave sticker on equipment with next PM date.",
"Follow EPA log for any refrigerant added.",
        ],
        bulletPoints: [
"Good/better/best — repair options",
"Equipment sticker — next service date",
"Invoice — readings and parts",
"EPA log — refrigerant tracking",
"Photo — failed part for customer",
        ]
      },
    ]
  },
{
    id: "efficiency",
    title: "Energy Efficiency",
    sections: [
{
        heading: "SEER2, HSPF2, and rating labels",
        paragraphs: [
"2023 DOE test procedures changed ratings to SEER2/EER2/HSPF2—compare like labels when quoting replacements.",
"Higher efficiency costs upfront; utility rebates may apply.",
"Proper install matters more than marginal SEER bump alone.",
        ],
        bulletPoints: [
"SEER2 — cooling efficiency metric",
"HSPF2 — heat pump heating efficiency",
"EER2 — peak efficiency point",
"Rebate — utility incentive program",
"Payback — energy savings vs cost",
        ]
      },
{
        heading: "Building envelope and HVAC interaction",
        paragraphs: [
"Insulation, windows, and infiltration drive load—HVAC cannot fix bad envelope. Blower door finds leaks.",
"Zoning and programmable stats save energy when configured correctly.",
"Duct sealing in attic high ROI.",
        ],
        bulletPoints: [
"Envelope — insulation and air seal",
"Infiltration — uncontrolled air leakage",
"Blower door — whole-house leakage test",
"Zoning — dampers per area",
"ROI — return on improvement dollars",
        ]
      },
{
        heading: "Retrofit high-efficiency equipment",
        paragraphs: [
"Replace furnace and AC together for matched efficiency; upgrade thermostat. Resize if prior unit oversized.",
"Verify duct can handle static of new blower.",
"Combustion and charge commissioning mandatory.",
        ],
        bulletPoints: [
"Matched pair — furnace and coil compatibility",
"Resize — load calc before swap",
"Static budget — duct can handle new fan",
"Rebate paperwork — utility forms",
"Commission — post-install verification",
        ]
      },
{
        heading: "Efficiency myths and quick fixes",
        paragraphs: [
"Closing vents does not save energy—it raises static. Thermostat setbacks on heat pumps need lockout.",
"Darker filters are not always better if they choke airflow.",
"Seal ducts before upsizing equipment.",
        ],
        bulletPoints: [
"Closed vent — increases duct pressure",
"Strip heat — expensive aux overuse",
"High MERV — airflow penalty",
"Duct seal — mastic before bigger unit",
"Myth — bigger AC always better",
        ]
      },
{
        heading: "Energy audit talking points for customers",
        paragraphs: [
"Explain payback, comfort, and humidity benefits. Show before/after static and temperature split.",
"Refer insulation partners ethically—no kickback without disclosure.",
"Document baseline for post-install comparison.",
        ],
        bulletPoints: [
"Payback years — simple calculation",
"Humidity — longer run times at lower CFM",
"Static before/after — duct improvement proof",
"Disclosure — referral relationships",
"Baseline — pre-retrofit readings",
        ]
      },
    ]
  },
{
    id: "codes",
    title: "Codes and Safety",
    sections: [
{
        heading: "Mechanical and fuel gas code adoption",
        paragraphs: [
"IMC and IFGC model codes adopted locally; electrical portions reference NEC. Refrigerant piping support, condensate disposal, and combustion air rules vary.",
"Permits required for replacements in many cities.",
"Keep code year on permit card.",
        ],
        bulletPoints: [
"IMC — International Mechanical Code",
"IFGC — fuel gas code",
"Combustion air — room or direct vent",
"Permit — replacement documentation",
"Local amendment — city-specific rules",
        ],
        citations: [
{
            source: "International Mechanical Code (IMC)",
            url: "https://www.iccsafe.org/products-and-services/codes/",
            note: "Mechanical code adoption varies; confirm local edition"
          },
        ]
      },
{
        heading: "Venting, clearances, and access",
        paragraphs: [
"Maintain manufacturer clearances around condensers; service access to filter doors.",
"Furnace in closet needs return air path.",
"Roof curb units need fall protection on service.",
        ],
        bulletPoints: [
"Clearance — outdoor unit shrub and wall space",
"Service access — panel reach",
"Closet return — louver or transfer",
"Roof safety — harness and parapet rules",
"Disconnect — within sight",
        ]
      },
{
        heading: "Gas leak response and CO safety",
        paragraphs: [
"If gas odor, do not operate switches—ventilate, evacuate, call utility from outside. CO detectors on each level.",
"Test combustion after any heat exchanger work.",
"Carbon monoxide poisoning is silent—analyzer on every heat startup.",
        ],
        bulletPoints: [
"Gas odor — no sparks, call utility",
"CO detector — UL listed, replace per age",
"Combustion test — CO and O2 readings",
"Evacuation — occupant safety first",
"Red tag — unsafe equipment off",
        ]
      },
{
        heading: "Improper flue and condensate violations",
        paragraphs: [
"PVC on non-condensing furnace fails inspection. Condensate tied to sewer without trap violates code.",
"Unsecured line sets vibrate and leak.",
"Electrical whip without disconnect fails.",
        ],
        bulletPoints: [
"PVC vent — condensing only",
"Condensate trap — prevents sewer gas",
"Line strap — support intervals",
"Disconnect — maintenance requirement",
"Inspection fail — rework before gas on",
        ]
      },
{
        heading: "Inspection readiness for mechanical",
        paragraphs: [
"Have startup sheet, gas pressure reading, vent slope photos, and electrical disconnect visible.",
"Inspector checks clearances and labeling.",
"Pass before occupancy certificate.",
        ],
        bulletPoints: [
"Startup data — pressures and temps",
"Gas pressure — manifold reading",
"Label — refrigerant type on unit",
"Clearance photo — condenser shrubs cut",
"CO test — printout attached",
        ]
      },
    ]
  },
{
    id: "hvac-careers",
    title: "HVAC Careers",
    sections: [
{
        heading: "Residential, commercial, and controls tracks",
        paragraphs: [
"Residential service offers high call volume and people skills. Commercial install pays for travel crews and crane days. Controls/BAS techs program buildings—more computer fluency.",
"Refrigeration supermarket work is niche with night calls.",
"Pick track by height tolerance and schedule preference.",
        ],
        bulletPoints: [
"BAS — building automation system",
"Supermarket rack — multiplex refrigeration",
"Install crew — new construction travel",
"Service — maintenance agreements",
"Controls — BACnet and trending",
        ]
      },
{
        heading: "NATE certification and employer training",
        paragraphs: [
"NATE exams validate installation and service knowledge by equipment type. Employers sponsor training; EPA 608 required baseline.",
"Manufacturer classes on new refrigerants and controls.",
"Tool allowance programs help apprentices.",
        ],
        bulletPoints: [
"NATE — North American Technician Excellence",
"Manufacturer training — product-specific",
"Tool allowance — payroll deduction or grant",
"EPA 608 — legal refrigerant handling",
"Ride-along — field mentoring",
        ]
      },
{
        heading: "Pay, on-call, and seasonal swings",
        paragraphs: [
"Summer AC season drives overtime in hot climates; heating peaks in North. On-call rotations compensate with stipends.",
"Commission on sales can help or pressure—know ethics.",
"Union mechanical shops exist in some metros.",
        ],
        bulletPoints: [
"Seasonal OT — summer peak example",
"On-call stipend — weekly rotation pay",
"Spiff — sales incentive on equipment",
"Union — UA pipefitter/HVAC locals",
"Per diem — travel install jobs",
        ]
      },
{
        heading: "Burnout and unsafe shortcuts",
        paragraphs: [
"Skipping PPE in attic heat causes injury. Venting refrigerant loses license and job.",
"Overbooking leads to rushed diagnoses and callbacks.",
"Manage workload with dispatcher support.",
        ],
        bulletPoints: [
"PPE — gloves, glasses, knee pads",
"Venting — EPA violation",
"Callback — rushed job returns",
"Dispatcher — realistic schedule",
"Hydration — heat illness prevention",
        ]
      },
{
        heading: "Career ladder to lead and ownership",
        paragraphs: [
"Years 1–3: PM excellence and 608. Years 4–5: lead install or senior service, NATE senior. Beyond: foreman, service manager, or shop owner.",
"Business owners need license, insurance, and marketing.",
"Quality reputation beats discount wars.",
        ],
        bulletPoints: [
"Lead tech — crew coach",
"Service manager — dispatch and QA",
"License — contractor credential",
"Marketing — reviews and referrals",
"QA — checklist audits",
        ]
      },
    ]
  },
];

export { PLUMBING_CHAPTERS, ELECTRICAL_TRADES_CHAPTERS, HVAC_CHAPTERS };
