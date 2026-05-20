import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const AUTO_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Automotive Basics",
  subtitle:
    "ForgEd deep-dive — vehicle systems, ownership, safety, finance, and the evolving mobility industry",
  paragraphs: [
    "The automobile reshaped cities, labor markets, and personal freedom in the twentieth century — and it is transforming again through electrification, connectivity, and automated driving assistance. Whether you drive daily, shop for a first car, or work adjacent to transportation, literacy in how vehicles work, how they are regulated, and how they are financed prevents costly mistakes and unsafe assumptions.",
    "This course explains integrated vehicle systems from powertrain to chassis, electrical architecture, maintenance, crash safety, purchasing and insurance, and the rise of hybrids and electric vehicles. Later chapters address legal obligations, industry trends, and autonomy at a survey level suitable for consumers and students — not professional technician certification, though the concepts align with introductory automotive service curricula.",
    "Use the table of contents to study sequentially or jump to chapters before buying a vehicle, renewing insurance, or comparing an EV lease to a gasoline sedan. Specifications and laws change by model year and state; verify current owner manuals, window stickers, and state DMV guidance when making decisions.",
  ],
};

export const AUTO_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "vehicle-systems",
    1,
    "Vehicle systems overview: How a car is organized",
    [
      section(
        "integrated-vehicle",
        "1.1 The automobile as an integrated system",
        [
          "A modern vehicle is not a single machine but a coordinated system of systems — structure, power, control, comfort, and information — designed to move occupants safely under diverse weather, road, and regulatory conditions. Engineers optimize tradeoffs among mass, stiffness, aerodynamic drag, noise-vibration-harshness (NVH), and cost because improving one attribute often compromises another.",
          "Unibody construction integrates body panels and frame into a stressed shell, saving weight versus body-on-frame trucks that separate ladder frames for towing durability. Crash energy management paths route impact forces around passenger cells while controlled crumple zones sacrificially deform.",
          "Serviceability matters for total cost of ownership: filter locations, drain plug access, and modular subassemblies reduce labor hours. Owner manuals and service information specify torque values, fluid types, and reset procedures — deviations cause warranty disputes and safety recalls when widespread.",
        ],
        {
          bulletPoints: [
            "GVWR / GAWR: gross vehicle and axle weight ratings (loading limits)",
            "Unibody vs. body-on-frame: passenger car vs. heavy truck architectures",
            "NVH: noise, vibration, harshness — comfort engineering targets",
            "OEM: original equipment manufacturer; aftermarket: non-factory parts",
          ],
        }
      ),
      section(
        "body-structure",
        "1.2 Body structure, materials, and aerodynamics",
        [
          "High-strength steel, aluminum, magnesium, and composites appear in hoods, doors, and subframes to shave kilograms improving fuel economy and handling. Joining methods — spot welds, structural adhesives, rivets — affect repair procedures after collisions; adhesively bonded panels may require factory-specified replacement rather than traditional pull straightening.",
          "Aerodynamic drag rises with the square of speed; designers smooth underbodies, add diffusers, and tune mirror shapes to cut highway fuel use. Active grille shutters close at speed to reduce drag while opening for cooling at low speed or high engine load.",
          "Corrosion protection (galvanizing, e-coat primer, cavity wax) extends life in salt-belt states. Paint systems (basecoat/clearcoat) resist UV but benefit from garaging and periodic washing to remove road salt film.",
        ],
        {
          citations: [
            {
              source: "SAE International — automotive engineering standards",
              url: "https://www.sae.org/",
              note: "Technical papers and standards for design and testing",
            },
          ],
        }
      ),
      section(
        "hvac-comfort",
        "1.3 Climate control, seating, and occupant comfort",
        [
          "HVAC systems heat and cool cabins using refrigerant cycles (R-1234yf in newer vehicles per environmental rules) and heater cores tapping engine coolant — EVs use heat pumps and resistive heaters instead when no engine waste heat exists. Cabin air filters trap pollen and particulates; neglected filters reduce airflow and foster odors.",
          "Seats combine foam, springs, and bolsters for crash support; power adjustments and memory presets add motors and failure points. Heated and ventilated seats draw significant electrical load — relevant when planning EV range in winter.",
          "Acoustic glass and insulation mats manage road noise; active noise cancellation appears in premium trims. Ergonomic reach to pedals and steering reduces fatigue; adjustable lumbar support mitigates back pain on long commutes.",
        ],
        {
          bulletPoints: [
            "A/C recharge: requires correct refrigerant type — mixing illegal and damages systems",
            "Cabin filter: typically behind glove box — annual replacement common",
            "Heat pump: efficient heating/cooling loop in many modern EVs",
            "Defrost: uses A/C to dehumidify while heating (physics of condensation)",
          ],
        }
      ),
      section(
        "wheels-tires-intro",
        "1.4 Wheels, tires, and basic dynamics",
        [
          "Tires are the only components touching the road — their compound, tread pattern, inflation pressure, and temperature dominate grip, braking distance, and hydroplaning resistance. DOT codes on sidewalls encode manufacture week/year for age recalls independent of tread depth.",
          "Wheel offset and bolt patterns must match hubs; incorrect torque on lug nuts causes rotor distortion and vibration. TPMS (tire pressure monitoring systems) alerts low pressure — federally mandated on light vehicles — but drivers should still verify with a gauge monthly.",
          "Weight distribution (front/rear bias) influences understeer and oversteer tendencies. Sport suspensions lower center of gravity; tall SUVs trade cornering for ground clearance and visibility.",
        ],
        {
          laws: [
            {
              name: "TREAD Act (2000) — TPMS requirement",
              summary: "U.S. law leading to tire pressure monitoring on light vehicles to reduce underinflation crashes.",
            },
          ],
        }
      ),
      section(
        "regulatory-overview",
        "1.5 Regulatory framework and vehicle classification",
        [
          "In the United States, the National Highway Traffic Safety Administration (NHTSA) sets Federal Motor Vehicle Safety Standards (FMVSS) for crashworthiness, lighting, and controls. The EPA regulates fuel economy labeling and emissions compliance; California Air Resources Board (CARB) standards influence national fleets via California market scale.",
          "Vehicles classify as passenger cars, light trucks, or medium/heavy duty — affecting CAFE targets and exemption rules. VIN structure (ISO 3779) encodes manufacturer, plant, and serial — decoders reveal options for used-car buyers.",
          "Recall campaigns remedy safety defects; owners register with manufacturers for mail notices. NHTSA's SaferCar.gov database lists open recalls by VIN — a due-diligence step before any purchase.",
        ],
        {
          bulletPoints: [
            "FMVSS: federal minimum safety performance standards",
            "CAFE: Corporate Average Fuel Economy — manufacturer fleet targets",
            "VIN check: NHTSA, NMVTIS title brands (salvage, flood)",
            "DOT compliance: lighting color/brightness rules for aftermarket mods",
          ],
          citations: [
            {
              source: "NHTSA — Vehicle Safety",
              url: "https://www.nhtsa.gov/vehicle-safety",
            },
          ],
        }
      ),
    ],
    "The whole car as engineering, regulation, and consumer product"
  ),

  chapter(
    "powertrain-fuels",
    2,
    "Powertrain, fuels, and energy conversion",
    [
      section(
        "engine-basics",
        "2.1 Internal combustion engine fundamentals",
        [
          "Gasoline engines convert chemical energy in fuel into mechanical rotation through four-stroke cycles: intake, compression, power, exhaust. Spark plugs ignite stoichiometric air-fuel mixtures in cylinders; expanding gases push pistons connected to crankshafts via connecting rods.",
          "Displacement (liters) and cylinder count describe engine size; turbocharging forces extra air for more power without enlarging displacement. Variable valve timing adjusts breathing across RPM for efficiency and torque.",
          "Cooling systems circulate coolant through jackets and radiators; thermostats regulate temperature. Lubrication oil films prevent metal contact — neglected oil changes cause bearing failure and catastrophic seizure.",
        ],
        {
          bulletPoints: [
            "RPM: revolutions per minute — tachometer redline is max safe speed",
            "Timing belt/chain: synchronizes camshaft to crank — belt service intervals critical",
            "Knock/ping: detonation from low octane or carbon — damages pistons",
            "OBD-II codes: P0xxx powertrain diagnostics standardized",
          ],
        }
      ),
      section(
        "transmissions",
        "2.2 Transmissions, differentials, and drivetrain layouts",
        [
          "Manual transmissions use clutch friction discs to engage gears selected by the driver — fewer moving parasitic losses but learning curve in traffic. Automatic transmissions use planetary gearsets and torque converters (or dual-clutch packs) to shift without driver clutch work.",
          "Continuously variable transmissions (CVTs) use belt/pulley ratios for seamless acceleration favored in economy cars; some drivers dislike rubber-band sensation. All-wheel drive (AWD) systems split torque front/rear via center differentials or clutches — helpful in snow, not a substitute for winter tires.",
          "Differentials allow outer wheels to rotate faster in turns. Limited-slip and locking differentials improve traction off-road or on ice at the cost of complexity and tire wear on dry pavement.",
        ],
        {
          bulletPoints: [
            "FWD: compact packaging, torque steer under hard acceleration",
            "RWD: balanced handling, common in trucks and sports cars",
            "4WD low range: geared reduction for crawling off-road",
            "Transfer case: routes power in truck 4x4 systems",
          ],
        }
      ),
      section(
        "fuels-octane",
        "2.3 Gasoline, octane, and alternative fuels",
        [
          "Gasoline grades (87, 89, 91+ AKI) indicate knock resistance (octane rating). High-compression or turbo engines often require premium to avoid pre-ignition; using regular in engines specified for premium can trigger knock sensors to retard timing, reducing power and efficiency.",
          "Ethanol blends (E10 common, E85 flex-fuel in some markets) alter energy density and fuel system compatibility. Diesel engines compress air until it ignites injected fuel — higher torque, different emissions aftertreatment (DPF, SCR with DEF fluid).",
          "Propane (LPG) and compressed natural gas (CNG) fleets exist for commercial vehicles with dedicated tanks and safety valves. Hydrogen fuel-cell vehicles generate electricity onboard, emitting water vapor — infrastructure remains sparse outside pilot regions.",
        ],
        {
          bulletPoints: [
            "AKI: Anti-Knock Index posted at U.S. pumps",
            "Energy content: diesel ~15% more per gallon than gasoline volumetrically",
            "E85: lower MPG but higher octane — flex-fuel sensors adjust injection",
            "Fuel stabilizer: for seasonal storage of small engines and classics",
          ],
        }
      ),
      section(
        "emissions",
        "2.4 Emissions controls and environmental impact",
        [
          "Catalytic converters oxidize CO and hydrocarbons and reduce NOx using precious metals (platinum, palladium, rhodium) — theft targets due to scrap value. Oxygen sensors feedback air-fuel ratios to engine computers for stoichiometric control.",
          "Gasoline particulate filters and gasoline direct injection (GDI) improve efficiency but can increase particulate emissions without proper calibration. Diesel particulate filters regenerate by burning soot at high exhaust temperatures — interrupted regen cycles cause dashboard warnings.",
          "Lifecycle emissions include manufacturing and electricity for EVs — well-to-wheel analyses compare regions' grid carbon intensity. Maintenance (tire wear particles, brake dust) contributes non-tailpipe pollution increasingly studied in urban air quality.",
        ],
        {
          laws: [
            {
              name: "Clean Air Act (U.S.) — mobile source authority",
              summary: "EPA sets tailpipe standards; states may adopt CARB rules stricter than federal minimums.",
            },
          ],
        }
      ),
      section(
        "hybrid-intro",
        "2.5 Hybrid architectures preview",
        [
          "Parallel hybrids (Toyota-style) combine engine and motor torque at the wheels; series hybrids use the engine primarily as a generator; plug-in hybrids (PHEVs) add larger batteries chargeable from the grid for short electric-only trips before gasoline operation.",
          "Regenerative braking recovers kinetic energy into the battery instead of heating brake pads — improving city efficiency. High-voltage orange cables require insulated tools and training — DIY service limits differ from 12V systems.",
          "Hybrid battery longevity improved over decades; many carry 8–10 year warranties. Capacity fade reduces electric range but vehicles often remain drivable on engine power — resale pricing reflects state of health diagnostics where available.",
        ],
        {
          bulletPoints: [
            "Mild hybrid: small motor assists engine, limited electric-only",
            "Full hybrid: can drive short distances electrically at low speed",
            "PHEV: USB/charge port + fuel cap — two energy inputs",
            "kWh capacity: determines electric range more than motor kilowatts alone",
          ],
        }
      ),
    ],
    "Turning fuel into motion through mechanical and electronic control"
  ),

  chapter(
    "chassis-steering-brakes",
    3,
    "Chassis, steering, suspension, and brakes",
    [
      section(
        "steering",
        "3.1 Steering systems and geometry",
        [
          "Rack-and-pinion steering converts steering wheel rotation into lateral wheel movement. Power assist (hydraulic historically, electric EPS today) reduces driver effort; EPS enables lane-keeping torque overlay in ADAS-equipped cars.",
          "Alignment angles — camber, caster, toe — affect tire wear and straight-line stability. Pothole impacts bend suspension components; post-alignment road tests verify pull is gone.",
          "Steering ratio determines how many turns lock-to-lock; quicker ratios aid agility but increase highway sensitivity. Four-wheel steering (rare) tightens low-speed turning and stabilizes lane changes at speed.",
        ],
        {
          bulletPoints: [
            "Toe-in/out: tire parallelism — misalignment feathers tread edges",
            "Camber: wheel tilt — aggressive negative camber aids cornering, wears tires",
            "Steering wheel off-center: symptom of alignment or worn parts",
            "EPS warning light: sensor or motor faults — professional diagnosis advised",
          ],
        }
      ),
      section(
        "suspension",
        "3.2 Suspension components and ride quality",
        [
          "Springs (coil, leaf on trucks) support vehicle mass; shock absorbers and struts damp oscillations after bumps. MacPherson struts combine spring and damper in one corner assembly common on front FWD cars.",
          "Multi-link rear suspensions tune camber change through travel for better handling. Air suspensions adjust ride height for luxury SUVs and load-leveling trucks — compressor and bag leaks are expensive repairs.",
          "Bushings isolate vibration between metal links; cracked bushings cause clunks and vague steering. Aftermarket lowering springs alter geometry — may require alignment kits and skid plate clearance checks.",
        ],
        {
          bulletPoints: [
            "Strut vs. shock: strut is structural; shock pairs with separate spring",
            "Sway bar (anti-roll): reduces body roll, can increase harshness over bumps",
            "Bilstein/Monroe etc.: quality tiers in replacement dampers",
            "Curb weight: heavier vehicles need higher damping rates",
          ],
        }
      ),
      section(
        "brakes",
        "3.3 Brake systems, friction, and hydraulics",
        [
          "Disc brakes use calipers squeezing pads against rotors; drums persist on some rear axles for cost. Brake fluid (DOT 3/4/5.1 — not silicone DOT 5 in most cars) transfers pedal force hydraulically; moisture absorption lowers boiling point causing fade.",
          "ABS modulates pressure during panic stops to prevent wheel lockup, preserving steerability. Rotors warp from heat or uneven lug torque; pulsation felt through pedal signals machining or replacement needs.",
          "Parking brakes may be cable-actuated rear shoes or electronic caliper motors — electronic types require service mode for pad changes.",
        ],
        {
          bulletPoints: [
            "Pad thickness: inspect at tire rotations — metal-on-metal damages rotors",
            "Brake fade: overheated fluid or pads on long downhill grades",
            "Bed-in procedure: transfer layer after new pads/rotors installed",
            "Mushy pedal: air in lines or master cylinder failure",
          ],
        }
      ),
      section(
        "abs-esc",
        "3.4 ABS, traction control, and stability systems",
        [
          "Wheel speed sensors feed ABS modules detecting impending lockup. Traction control reduces wheel spin on acceleration by cutting engine torque or braking a spinning wheel. Electronic stability control (ESC) yaws the vehicle toward intended path by selective braking — mandated on U.S. light vehicles since model year 2012.",
          "Hill-start assist holds brakes briefly on inclines; automatic emergency braking (AEB) uses radar/camera fusion — part of ADAS, not a substitute for attentive driving. Trailer sway control applies truck brakes selectively when sensors detect oscillation.",
          "Track modes on performance cars relax ESC thresholds — misuse on public roads increases crash risk. Winter modes remaps throttle for snow starts.",
        ],
        {
          laws: [
            {
              name: "FMVSS No. 126 — Electronic Stability Control Systems",
              summary: "Federal requirement for ESC on light vehicles to reduce loss-of-control crashes.",
            },
          ],
        }
      ),
      section(
        "tires-traction",
        "3.5 Tires, traction, and winter preparedness",
        [
          "Tread depth below 2/32 inch (wear bars) fails legal minimums in many states — replace before hydroplaning risk rises. All-season tires compromise snow performance; dedicated winter tires use softer compounds and siping for cold grip.",
          "Tire rotation patterns (front-to-back, cross) even wear on symmetric tread designs. Directional and staggered setups prohibit some patterns — follow manufacturer charts.",
          "Load index and speed rating on sidewalls must meet or exceed placard on driver's door jamb. Oversized aftermarket wheels change effective gearing and strain bearings.",
        ],
        {
          bulletPoints: [
            "3-peak mountain snowflake: severe snow rating symbol",
            "PSI cold: inflate to door placard when tires are cold",
            "Nitrogen fill: reduces moisture variation — marginal benefit for most drivers",
            "Chains: legal requirements on mountain passes — check state chain laws",
          ],
        }
      ),
    ],
    "Control, comfort, and stopping — the chassis mission"
  ),

  chapter(
    "electrical-electronics",
    4,
    "Electrical systems, electronics, and diagnostics",
    [
      section(
        "battery-charging",
        "4.1 12-volt systems, batteries, and charging",
        [
          "Lead-acid batteries (flooded, AGM) supply cranking amps (CCA) to starters and buffer alternator spikes. Parasitic drains from modules that fail to sleep drain overnight — technicians measure milliamp draw with doors latched after shutdown timers expire.",
          "Alternators generate AC converted to DC, regulated to ~13.8–14.4V while running. Loose belts squeal; failing diodes cause ripple noise in audio systems. Jump-starting requires correct polarity — reverse polarity fries modules instantly.",
          "Battery management on hybrids/EVs is separate high-voltage architecture with contactors and isolation monitoring — distinct training and PPE required.",
        ],
        {
          bulletPoints: [
            "CCA rating: cold cranking amps — match climate minimums",
            "Corrosion on terminals: clean and torque for low resistance",
            "Trickle charger: maintain classics and seasonal vehicles",
            "Battery date code: rotate stock before sale/install",
          ],
        }
      ),
      section(
        "sensors-ecu",
        "4.2 Sensors, ECUs, and network buses",
        [
          "Engine control units (ECUs) close feedback loops on airflow, fuel, spark, and emissions using MAP/MAF sensors, crank/cam position, and knock sensors. Transmission control modules coordinate shifts; body control modules manage lights, locks, and windows.",
          "Controller Area Network (CAN) buses multiplex messages reducing wire harness weight. Diagnostics read standardized OBD-II PID codes on the J1962 connector under the dash — generic vs. manufacturer-enhanced codes differ in depth.",
          "Aftermarket accessories tapping CAN without proper gateways cause bizarre faults — professional installation with harness adapters beats splicing unknown wires.",
        ],
        {
          citations: [
            {
              source: "SAE J1979 — OBD-II diagnostic standards",
              note: "Defines modes and PID data for emissions-related systems",
            },
          ],
        }
      ),
      section(
        "infotainment",
        "4.3 Infotainment, connectivity, and cybersecurity",
        [
          "Head units integrate audio, navigation, and smartphone projection (Apple CarPlay, Android Auto) mirroring apps with driver-distraction guidelines. Over-the-air (OTA) updates patch map data and occasionally powertrain calibrations — owners should install on Wi-Fi when prompted.",
          "Telematics (OnStar, connected app) enable remote unlock, stolen vehicle tracking, and crash notification. Privacy policies disclose location retention; resale requires account unlinking so buyers do not inherit remote control.",
          "Researchers demonstrate remote exploits via vulnerable modems — manufacturers issue cybersecurity bulletins. USB ports should not receive untrusted devices on fleet vehicles carrying sensitive routes.",
        ],
        {
          bulletPoints: [
            "CarPlay/Android Auto: reduces duplicate phone mounting, not hands-free magic",
            "Bluetooth pairing: limit discoverable mode in public areas",
            "Factory nav vs. phone maps: update cadence and subscription costs",
            "Amplifier draw: aftermarket audio loads alternator — upgrade wiring",
          ],
        }
      ),
      section(
        "lighting",
        "4.4 Lighting technology and regulation",
        [
          "Halogen bulbs yield to HID and LED assemblies with distinct beam patterns regulated to prevent glare. Automatic high-beam assist toggles when oncoming traffic detected; adaptive headlights swivel with steering where permitted by law.",
          "Daytime running lights improve conspicuity; turn signals must meet flash rate and color rules. Aftermarket underglow may violate state equipment statutes even if popular aesthetically.",
          "Fog lights supplement low beams in mist — misuse in clear weather blinds others without improving driver sight distance.",
        ],
        {
          laws: [
            {
              name: "FMVSS No. 108 — Lamps, Reflective Devices, and Associated Equipment",
              summary: "Federal photometric and installation standards for vehicle lighting.",
            },
          ],
        }
      ),
      section(
        "obd-diagnostics",
        "4.5 OBD-II diagnostics and repair information",
        [
          "Check engine lights indicate emissions-related faults storing DTCs — some are benign (loose gas cap), others catalyst-damaging misfires needing prompt service. Freeze frame data captures sensor snapshots at fault time for technicians.",
          "Mode $06 and manufacturer-specific data guide advanced diagnosis beyond generic scanners. Right-to-repair debates ensure independent shops access security-protected modules — evolving with wireless telematics.",
          "Service manuals (Alldata, OEM subscriptions) specify test procedures and torque sequences — guessing wastes parts on sensors that were fine.",
        ],
        {
          bulletPoints: [
            "P codes: powertrain; B: body; C: chassis; U: network",
            "Pending vs. stored vs. permanent codes — readiness monitors for emissions tests",
            "Clearing codes without fix: light returns; may hide ongoing damage",
            "Live data: fuel trims reveal vacuum leaks or MAF issues",
          ],
        }
      ),
    ],
    "Wires, computers, and data that coordinate modern vehicles"
  ),

  chapter(
    "maintenance-ownership",
    5,
    "Maintenance, ownership, and total cost of care",
    [
      section(
        "scheduled-service",
        "5.1 Scheduled maintenance and owner responsibilities",
        [
          "Maintenance schedules in owner manuals group items by time and mileage — oil changes, tire rotations, fluid exchanges, belt replacements. Severe-duty schedules (taxi, towing, dusty roads) shorten intervals.",
          "Dealer service departments stamp books for warranty compliance on some brands; independent shops can perform work if records document OEM-spec fluids and parts. Neglected timing belt intervals risk interference engines bending valves on failure.",
          "Pre-trip inspections (tires, lights, fluids) catch issues before highway speeds. Fleet operators use telematics to predict failures from vibration and temperature trends.",
        ],
        {
          bulletPoints: [
            "Oil life monitors: algorithmic — still verify level dipstick monthly",
            "Coolant flush: chemistry degrades inhibitors — follow interval, not color alone",
            "Spark plugs: iridium long-life — gap not adjustable on some designs",
            "Cabin/engine air filters: low cost, high comfort and efficiency impact",
          ],
        }
      ),
      section(
        "fluids-filters",
        "5.2 Fluids, filters, and consumables",
        [
          "Engine oil viscosity (5W-30, 0W-20) follows manufacturer spec — wrong viscosity affects bearing protection at temperature extremes. Synthetic oils resist oxidation longer; still obey change intervals due to fuel dilution in short trips.",
          "Transmission fluid types differ (Dexron, Mercon, CVT-specific) — cross-contamination destroys clutches. Brake fluid attracts water — periodic flush maintains boiling point. Power steering and coolant formulas are equally brand-sensitive.",
          "Filters trap contaminants; starving fuel pumps with clogged filters causes lean misfires. Grease fittings on trucks require chassis lubrication where still equipped.",
        ],
        {
          bulletPoints: [
            "Dexos / API SP: GM and industry oil licensing marks",
            "ATF color smell: burnt fluid signals overheated transmission",
            "DEF (diesel): urea solution for SCR — contamination ruins systems",
            "Washer fluid: winter blend prevents reservoir ice cracks",
          ],
        }
      ),
      section(
        "diy-vs-pro",
        "5.3 DIY boundaries and professional service",
        [
          "Owners safely handle wiper blades, bulbs (where legal), cabin filters, and tire pressure checks. Brake jobs, suspension disassembly, and airbag work belong to trained techs with torque wrenches and spring compressors — injury and liability risks are real.",
          "Lift points on unibody rails prevent floor pan damage; jack stands mandatory — never rely on jacks alone. Torque wrenches prevent snapped studs; thread lockers specified where vibration loosens fasteners.",
          "Diagnostic fees are labor buying expertise, not just scanner rental. Second opinions on major repairs (transmission, head gasket) save thousands when first shop recommends unnecessary overhauls.",
        ],
        {
          bulletPoints: [
            "Jack stand rated capacity > vehicle weight",
            "Wheel chocks: park on level ground, engage parking brake",
            "PPE: gloves, eye protection when undercarriage work",
            "Recall repairs: free at dealers — not DIY",
          ],
        }
      ),
      section(
        "warranties",
        "5.4 Warranties, recalls, and service contracts",
        [
          "Bumper-to-bumper warranties cover most components for 3 years/36,000 miles typical; powertrain extends longer. Wear items (brakes, tires) excluded. EV batteries often carry 8-year/100,000-mile capacity warranties with minimum state-of-health thresholds.",
          "Extended service contracts (third-party or manufacturer) vary in covered components and deductibles — read exclusion lists for ABS, electronics, and rental car benefits. Self-insuring via emergency fund may beat high-margin contracts on reliable models.",
          "Recalls are manufacturer-paid safety fixes; technical service bulletins (TSBs) guide dealers on known issues not rising to recall level — useful research when symptomatic.",
        ],
        {
          laws: [
            {
              name: "Magnuson-Moss Warranty Act",
              year: "1975",
              summary: "U.S. law governing written warranties; prohibits tying repairs to dealer-only service unless free parts/labor provided.",
            },
          ],
        }
      ),
      section(
        "records-resale",
        "5.5 Records, resale value, and depreciation",
        [
          "Service history documented in Carfax/AutoCheck and maintenance logs raises buyer confidence. Consistent oil changes matter more than single-owner vanity on pragmatic purchases.",
          "Depreciation curves steepen first three years — leasing captures this cost for drivers who want new safety tech frequently. Classics and limited trucks buck trends; EV depreciation volatility reflects incentive changes and battery reports.",
          "Detailing and minor dent repair before sale improve impressions; disclose accidents ethically — VIN history reveals them anyway, destroying trust if hidden.",
        ],
        {
          bulletPoints: [
            "KBB / Edmunds / NADA: pricing guides — starting points, not gospel",
            "Reconditioning budget: tires + brakes common dealer prep items",
            "Salvage title: major value hit — insurance total loss threshold varies by state",
            "Odometer fraud: federal odometer law criminalizes rollback",
          ],
          laws: [
            {
              name: "Federal Odometer Act (49 U.S.C. Chapter 327)",
              summary: "Prohibits tampering and requires disclosure of inaccurate mileage on transfers.",
            },
          ],
        }
      ),
    ],
    "Keeping vehicles reliable and preserving economic value"
  ),

  chapter(
    "safety-crash",
    6,
    "Safety engineering, crash dynamics, and occupant protection",
    [
      section(
        "crashworthiness",
        "6.1 Crashworthiness and structural energy management",
        [
          "Crashworthiness measures how well a vehicle protects occupants in impacts — not the same as crash avoidance. Frontal crumple zones extend crush distance, lowering peak deceleration on occupants restrained by seatbelts and airbags.",
          "Side impacts threaten narrower survival space — door beams and curtain airbags mitigate intrusion. Roof strength resists rollover crush; IIHS ratings publish measurable intrusion limits.",
          "Compatibility between mismatched vehicles (SUV vs. sedan height) influences crash outcomes — standards evolve to align bumper energies across classes.",
        ],
        {
          citations: [
            {
              source: "IIHS — Vehicle ratings and research",
              url: "https://www.iihs.org/ratings",
            },
          ],
        }
      ),
      section(
        "restraints",
        "6.2 Seatbelts, airbags, and child passenger safety",
        [
          "Three-point seatbelts route loads across pelvis and shoulder — pretensioners reel slack on impact, load limiters allow controlled stretch to reduce rib fractures. Airbags deploy in milliseconds via pyrotechnic inflators; supplemental bags protect knees, center passengers, and far-side impacts in newer designs.",
          "Children must use rear-facing, forward-facing, booster, and adult belt stages per height/weight — not age alone. LATCH anchors simplify installation but weight limits still apply; chest clips at armpit level on harnesses.",
          "Airbags can injure out-of-position occupants — infants never in front with active passenger bags. Aftermarket seat covers can block seat-mounted side airbags.",
        ],
        {
          bulletPoints: [
            "NHTSA car seat finder: fit by child measurements",
            "Booster until adult belt crosses collarbone, not neck",
            "Tether strap: reduces head excursion forward-facing",
            "Never leave children/pets in hot cars — greenhouse effect kills quickly",
          ],
        }
      ),
      section(
        "adas-overview",
        "6.3 Advanced driver assistance systems (ADAS)",
        [
          "ADAS bundles cameras, radar, and ultrasonic sensors for lane departure warning, blind-spot monitoring, adaptive cruise control, and lane centering. Calibration after windshield replacement or collision repair is mandatory — misaligned radar causes false braking or silence when needed.",
          "Drivers must supervise partial automation — marketing names do not mean full self-driving. Hands-on-wheel detectors and driver monitoring cameras combat distraction.",
          "Insurance discounts for ADAS vary; repair costs for sensors raise premiums on some models — total cost picture includes insurance and body shop radar recalibration fees.",
        ],
        {
          bulletPoints: [
            "AEB: automatic emergency braking — NHTSA encourages standard fitment",
            "LKA vs. lane centering: warning vs. active steering assist",
            "BSM: blind-spot monitor — check over shoulder anyway",
            "Recalibration: static and dynamic targets post-windshield swap",
          ],
        }
      ),
      section(
        "crash-testing",
        "6.4 Crash testing and rating programs",
        [
          "NHTSA's NCAP stars summarize frontal, side, and rollover resistance plus optional recommended technologies. IIHS Top Safety Pick adds tougher small overlap frontal and updated side tests reflecting taller striking barriers.",
          "Euro NCAP includes pedestrian protection and AEB performance in scoring — global OEMs engineer once, tune for regional regulations. Rating year matters — a 2015 five-star may trail 2024 test severity.",
          "Consumers should compare class peers, not assume luxury price guarantees top scores — some expensive models underperform in specific tests.",
        ],
        {
          bulletPoints: [
            "Small overlap frontal: strikes corner — challenging structure paths",
            "Roof strength: strength-to-weight ratio in IIHS rollover metric",
            "Head restraints: whiplash mitigation in rear impacts",
            "Recall vs. rating: defective inflators recalled despite prior good scores",
          ],
        }
      ),
      section(
        "post-crash",
        "6.5 Post-crash response and repair ethics",
        [
          "Event data recorders (EDRs) store pre-crash speed, brake, and throttle — subject to legal discovery. Good Samaritan laws vary; moving injured persons only when fire risk demands.",
          "Insurance totals vehicles when repair exceeds threshold percentage of value — state formulas differ. Salvage titles reduce resale; structural repairs require measuring benches to factory dimensions.",
          "OEM repair procedures specify weld vs. bolt replacements on high-strength steel — shortcuts jeopardize future crash performance. Aftermarket parts debate (CAPA certified) balances cost and fit.",
        ],
        {
          laws: [
            {
              name: "49 CFR Part 563 — Event Data Recorder standardization",
              summary: "Federal requirements for EDR data elements retrievable after crashes in equipped vehicles.",
            },
          ],
        }
      ),
    ],
    "Designing for inevitable human error and physics"
  ),

  chapter(
    "buying-finance",
    7,
    "Buying, leasing, financing, and ownership economics",
    [
      section(
        "new-vs-used",
        "7.1 New vs. used purchase decisions",
        [
          "New vehicles carry latest safety tech, full warranties, and known history — at MSRP minus incentives, plus immediate depreciation hit driving off the lot. Used vehicles avoid steepest depreciation if prior owner absorbed it — but unknown maintenance and accident history demand inspection.",
          "Certified pre-owned (CPO) programs add inspection checklists and extended warranties at premium prices over generic used lots. Private party sales reduce fees but offer no arbitration if defects surface days later.",
          "Model year transitions (fall clearance) and end-of-quarter sales targets create negotiation windows — research invoice vs. sticker and regional incentive stacks online before visiting dealers.",
        ],
        {
          bulletPoints: [
            "Out-the-door price: inclusive of tax, fees — compare apples to apples",
            "Demo vehicles: low miles, warranty start date may vary",
            "Flood/branded titles: deep discounts hide uninsurable risks",
            "Pre-purchase inspection (PPI): independent mechanic ~$150–$200 well spent",
          ],
        }
      ),
      section(
        "leasing",
        "7.2 Leasing structure and end-of-lease options",
        [
          "Leases pay for depreciation plus rent charge (interest) over term (often 36 months, 10k–15k miles/year). Capitalized cost reduction (down payment) lowers monthly payment but does not build equity — you return the car unless residual buyout makes sense.",
          "Excess wear charges and mileage penalties punish high use — estimate miles honestly. Gap insurance may be included; understand disposition fees and early termination costs if job relocation likely.",
          "Business lessees may deduct payments differently than purchased asset depreciation — consult tax professionals; personal leases lose equity building of ownership.",
        ],
        {
          bulletPoints: [
            "Money factor × 2400 ≈ APR equivalent for comparison",
            "Residual value: predicted end price — higher residual lowers payment",
            "Wear items: tire tread minimums, dent size limits in contract",
            "Lease buyout: compare residual to market value at end",
          ],
        }
      ),
      section(
        "financing",
        "7.3 Auto loans, APR, and total interest",
        [
          "Installment loans amortize principal with interest — longer terms (72–84 months) lower payments but increase total interest and upside-down risk if value drops below balance. APR includes finance charges; compare APR, not headline payment alone.",
          "Credit scores tier rates — pre-approval from credit unions strengthens negotiation without dealer markup on rate (dealer reserve). Subprime loans exist but carry punitive APR and repossession risk if budgets stretch.",
          "Refinancing when rates fall or credit improves saves interest if no prepayment penalties. GAP insurance covers loan balance vs. insurance payout after total loss — valuable with low down payments.",
        ],
        {
          bulletPoints: [
            "LTV: loan-to-value — >100% underwater on early depreciation",
            "Prepayment: extra principal payments reduce interest if allowed",
            "Hard inquiry: rate shopping auto loans within 14–45 days often counts once",
            "Title lien: lender holds title until payoff — release delays tag updates",
          ],
        }
      ),
      section(
        "negotiation-tco",
        "7.4 Negotiation, fees, and total cost of ownership",
        [
          "Documentary fees, dealer prep, nitrogen tires, and paint protection packages pad profit — negotiate base price first, then trade-in separately to avoid mental accounting traps bundling numbers opaquely.",
          "Total cost of ownership (TCO) sums depreciation, fuel, insurance, maintenance, taxes, and registration over hold period. Edmunds TCO and EPA fueleconomy.gov inform comparisons between SUV and sedan choices.",
          "EV TCO shifts fuel to electricity and may reduce maintenance (no oil) but insurance and tire costs can rise — local utility rates and home charging installation matter.",
        ],
        {
          bulletPoints: [
            "Trade-in vs. private sale: convenience vs. maximum proceeds",
            "Doc fee caps: some states limit documentation charges",
            "Add-ons in F&I office: often cancellable within cooling-off rules — read contracts",
            "Registration: sales tax on trade difference varies by state",
          ],
        }
      ),
      section(
        "scams-protection",
        "7.5 Fraud, title issues, and consumer protections",
        [
          "Curbstoning is unlicensed dealers posing as private sellers flipping problem cars. VIN cloning matches stolen vehicle identities to clean titles — verify VIN on dash, door jamb, and paperwork match.",
          "Yo-yo financing pulls buyers back after spot delivery claiming financing fell through — know rights under conditional delivery laws in some states. Odometer rollback is federal crime; inspect wear vs. miles.",
          "Lemon laws provide repurchase/remedy for new vehicles with repeated unfixable defects — thresholds vary by state days out of service and repair attempt counts.",
        ],
        {
          laws: [
            {
              name: "State lemon law statutes (varies)",
              summary: "Remedies for chronic defects in new (and sometimes used) vehicles when manufacturers fail to repair after reasonable attempts.",
            },
            {
              name: "Truth in Lending Act (TILA)",
              summary: "Requires APR and finance charge disclosures on consumer auto loans.",
            },
          ],
        }
      ),
    ],
    "Economic decisions beyond the monthly payment"
  ),

  chapter(
    "insurance-legal",
    8,
    "Insurance, registration, and legal obligations",
    [
      section(
        "auto-insurance",
        "8.1 Auto insurance coverages and pricing factors",
        [
          "Liability insurance pays others for bodily injury and property damage you cause — state minimum limits often inadequate for asset protection; higher limits and umbrella policies shield savings. Collision covers your car in impacts; comprehensive covers theft, weather, animal strikes.",
          "Uninsured/underinsured motorist coverage protects you when the at-fault party lacks coverage — valuable in states with high uninsured rates. Medical payments or PIP cover occupant treatment depending on state no-fault rules.",
          "Premiums reflect driving record, credit (where allowed), garaging ZIP crime rates, vehicle repair costs, and annual mileage. Telematics programs discount safe driving while monitoring harsh braking — privacy tradeoff.",
        ],
        {
          bulletPoints: [
            "Deductible: out-of-pocket per claim before insurer pays",
            "Subrogation: insurer recovers from at-fault party after paying you",
            "Rental reimbursement: optional rider during repairs",
            "Gap coverage: loan balance vs. ACV after total loss",
          ],
        }
      ),
      section(
        "registration-title",
        "8.2 Registration, title, and plates",
        [
          "States register vehicles to fund roads and enforce compliance — annual or biennial renewal with emissions tests in air-quality counties. Titles prove ownership; liens noted until loans satisfied.",
          "Temporary tags allow transit after purchase while DMV processes paperwork. Sales tax paid at registration; some states tax trade-in value differences.",
          "International registration and military PCS moves have reciprocity rules — update within state deadlines to avoid penalties.",
        ],
        {
          bulletPoints: [
            "Bill of sale + title signed: minimum private sale paperwork",
            "Smog check: required transfer blocker in CA and similar states",
            "Personal property tax: VA and other states tax vehicle value annually",
            "Custom plates: fees to specialty programs and charities",
          ],
        }
      ),
      section(
        "traffic-law",
        "8.3 Traffic law, DUI, and points systems",
        [
          "Speed limits, right-of-way, and distracted driving statutes reduce conflict points. Hands-free laws increasingly ban handheld phone use — Bluetooth alone does not eliminate cognitive distraction.",
          "DUI/DWI thresholds (0.08% BAC common) trigger license suspension, ignition interlocks, and insurance SR-22 filings. Impairment includes cannabis and prescriptions — legal possession does not legalize impaired driving.",
          "Points on motor vehicle records raise insurance; defensive driving courses sometimes remove points. Serious violations (reckless, hit-run) carry criminal penalties beyond civil fines.",
        ],
        {
          laws: [
            {
              name: "Uniform Vehicle Code (model — adopted by states)",
              summary: "Influential model traffic laws; actual enforcement codes are state statutes.",
            },
          ],
        }
      ),
      section(
        "liability-negligence",
        "8.4 Liability, negligence, and vehicle defects",
        [
          "Negligence law assigns fault percentages in multi-car crashes — comparative negligence bars recovery if plaintiff exceeds threshold in some states. Police reports and witness statements feed insurer liability decisions.",
          "Product liability targets manufacturers for design or manufacturing defects (unintended acceleration claims, airbag inflators). Strict liability may apply without proving negligence for defective products.",
          "Owners liability for permissive use — lending car to impaired driver — creates civil exposure. Commercial auto policies differ for gig delivery and trucking MC numbers.",
        ],
        {
          bulletPoints: [
            "Dashcams: admissible evidence varies — inform passengers where required",
            "Police report: file for injuries/property over state thresholds",
            "Subrogation waivers: repair shops may ask — understand insurance rights",
            "Statute of limitations: sue windows for injury/property claims",
          ],
        }
      ),
      section(
        "environmental-compliance",
        "8.5 Environmental compliance and inspections",
        [
          "Emissions inspections verify catalyst function and OBD readiness monitors — tampering with emissions equipment is federal crime with fines. Deleted diesel tuners risk enforcement and registration denial.",
          "EVs may be exempt from tailpipe tests but still safety-inspected. Noise ordinances target modified exhausts in residential areas.",
          "End-of-life vehicle recycling rules require mercury switch removal and fluid drainage at authorized scrappers — cash-for-clunkers style programs occasionally stimulate replacement demand.",
        ],
        {
          laws: [
            {
              name: "Clean Air Act — tampering prohibition (42 U.S.C. § 7522)",
              summary: "Bars removing or rendering inoperative emissions control devices; EPA enforces against sellers and installers.",
            },
          ],
        }
      ),
    ],
    "Operating legally and transferring risk through insurance"
  ),

  chapter(
    "ev-hybrid",
    9,
    "Electric vehicles, hybrids, and alternative powertrains",
    [
      section(
        "battery-tech",
        "9.1 Traction batteries, chemistries, and thermal management",
        [
          "Lithium-ion cells (NMC, NCA, LFP) dominate EV traction packs for energy density and cycle life. Battery management systems balance cells, limit charge rates when hot, and isolate packs on fault detection.",
          "Thermal management uses liquid loops and heat pumps to keep packs in optimal temperature windows — fast charging in cold weather slows without preconditioning. Degradation manifests as reduced range, not sudden failure — state-of-health reports emerging in used EV markets.",
          "Second-life applications repurpose packs for grid storage after automotive retirement — recycling recovers lithium, nickel, cobalt where economically viable.",
        ],
        {
          bulletPoints: [
            "kWh: energy capacity — larger packs, longer range, higher cost/weight",
            "SOC: state of charge — 20–80% daily charging gentler on some chemistries",
            "DC fast charge: 50–350 kW stations — taper after 80% SOC typical",
            "LFP: cobalt-free chemistry — durable, slightly lower energy density",
          ],
        }
      ),
      section(
        "charging",
        "9.2 Charging levels, connectors, and home installation",
        [
          "Level 1 (120V household) adds few miles per hour — adequate for low-mileage commuters. Level 2 (240V) uses J1772 or NACS connectors for overnight full charges on typical EVs. DC fast charging uses CCS1 or NACS for road trips with station reliability apps (PlugShare, etc.).",
          "Home installs may require panel upgrades, permit, and utility time-of-use rates lowering overnight cost. Landlords and HOAs increasingly must allow reasonable charging access under state laws.",
          "Public charging etiquette — move when session completes; idle fees at some networks. Payment roaming consolidates accounts across operators slowly.",
        ],
        {
          bulletPoints: [
            "NACS (Tesla plug): industry shift toward unified North American connector",
            "Load management: share circuit capacity among multiple EVSEs",
            "GFCI protection: NEC Article 625 requirements for EV supply equipment",
            "Portable EVSE: travel backup — verify amperage dial setting",
          ],
          citations: [
            {
              source: "NFPA 70 (NEC) — Article 625 Electric Vehicle Power Transfer System",
              note: "Electrical code for safe EV charging equipment installation",
            },
          ],
        }
      ),
      section(
        "range-efficiency",
        "9.3 Range, efficiency, and real-world performance",
        [
          "EPA range labels test standardized cycles — cold weather, high speed, and HVAC use reduce real-world results. Regenerative braking strength settings affect one-pedal driving familiarity.",
          "kWh per 100 miles or miles per kWh express efficiency — compare to gasoline MPG equivalent on Monroney stickers. Towing and roof racks devastate EV range more than ICE due to battery mass already consuming payload.",
          "Route planners with elevation and charger stop optimization reduce anxiety — buffer 10–15% SOC on long trips for station outages.",
        ],
        {
          bulletPoints: [
            "Preconditioning: cabin/battery while plugged in before departure",
            "Heat pump vs. resistive heat: winter range impact",
            "Tire rolling resistance: EV-specific low rolling resistance tires",
            "Phantom drain: sentry mode and apps consume parked energy",
          ],
        }
      ),
      section(
        "incentives-cost",
        "9.4 Incentives, taxation, and total cost",
        [
          "Federal and state EV tax credits (income caps, assembly location, MSRP caps) shift frequently — verify IRS guidance at purchase, not rumor. Some credits transfer to dealer discount at point of sale under recent rules.",
          "Registration fees some states levy on EVs replace lost gas tax road funding — advocacy continues for mileage-based fees. HOV lane stickers encourage adoption where offered.",
          "Insurance and tire costs can exceed ICE peers; maintenance skips oil changes but requires brake fluid and coolant service per schedule — still mandatory.",
        ],
        {
          laws: [
            {
              name: "Inflation Reduction Act — clean vehicle tax credits (26 U.S.C. § 30D)",
              summary: "Federal EV/PHEV credit rules with North American assembly and critical mineral sourcing requirements.",
            },
          ],
        }
      ),
      section(
        "ev-maintenance-safety",
        "9.5 EV maintenance and high-voltage safety",
        [
          "Orange high-voltage cables stay dangerous even when vehicles appear off — rescue guides specify cut zones. Only qualified technicians open packs; DIY focus on 12V accessories, filters, and tires.",
          "Brake service intervals extend due to regen; fluid still ages with time. Cabin filters and wiper blades remain owner-serviceable. Software updates address range and charging curves — stay current.",
          "Emergency responders train on battery isolation and thermal runaway mitigation — rare but serious in severe crashes. Parking damaged EVs outdoors pending inspection is protocol in some departments.",
        ],
        {
          bulletPoints: [
            "FRP emergency response guides: per-model high-voltage disable steps",
            "12V battery: still needed for contactors and accessories — can strand EV if dead",
            "Tire rotation critical: instant torque wears rubber quickly",
            "Flood-damaged EVs: high risk — do not attempt to start",
          ],
        }
      ),
    ],
    "Electrification changes energy, service, and infrastructure"
  ),

  chapter(
    "autonomy-trends",
    10,
    "Autonomy, connectivity, and industry trends",
    [
      section(
        "sae-levels",
        "10.1 SAE automation levels and human responsibility",
        [
          "SAE J3016 defines levels 0–5 from no automation to full automation in all conditions. Level 2 systems (hands-on supervised) combine lane centering and adaptive cruise — driver must monitor environment continuously. Level 3 (conditional automation) permits eyes-off only in defined operational design domains — rare and legally complex.",
          "Marketing terms (Autopilot, ProPILOT, Super Cruise) map imperfectly to levels — read owner manuals for operational limits (geofencing, weather, construction zones).",
          "Liability and insurance models evolve — who pays when Level 3 fails transitions from driver to OEM in some jurisdictions experimentally.",
        ],
        {
          bulletPoints: [
            "Level 0: warnings only (lane departure chime)",
            "Level 2: simultaneous longitudinal/lateral control with driver supervision",
            "ODD: operational design domain — where automation may legally/ safely engage",
            "Driver monitoring: eye tracking combats distraction on L2+",
          ],
          citations: [
            {
              source: "SAE J3016 — Taxonomy and Definitions for Driving Automation",
              url: "https://www.sae.org/standards/content/j3016_202104/",
            },
          ],
        }
      ),
      section(
        "sensors-fusion",
        "10.2 Sensors, perception, and sensor fusion",
        [
          "Cameras classify signs, lanes, and objects cheaply but struggle in glare and darkness. Radar measures velocity robustly in weather. LiDAR maps 3D point clouds — costly, common in robotaxi prototypes. Ultrasonics handle parking proximity.",
          "Sensor fusion probabilistically combines inputs — redundancy mitigates single-sensor failure. Dirty windshields or misaligned bumpers degrade performance silently until warnings illuminate.",
          "HD maps and GNSS RTK augment localization in geofenced pilots; crowd-sourced map updates compete with OEM proprietary data.",
        ],
        {
          bulletPoints: [
            "Mono vs. stereo camera: depth estimation tradeoffs",
            "Thermal cameras: pedestrian detection research fleets",
            "V2X: vehicle-to-everything radio — sparse deployment, safety potential",
            "Simulation: billions of virtual miles train perception models",
          ],
        }
      ),
      section(
        "mobility-services",
        "10.3 Mobility services, fleets, and workforce impacts",
        [
          "Ride-hail and car-sharing reduce ownership for urban dwellers while increasing vehicle miles traveled and curb congestion. Fleet maintenance cycles intensify — EV fleets target lower fuel/labor if charging infra aligns.",
          "Dealership models face online sales, fixed pricing experiments, and direct-to-consumer OEM attempts (where law permits). Technicians upskill for high-voltage and ADAS calibration — shortages raise labor rates.",
          "Micromobility (e-bikes, scooters) integrates with transit for last mile — zoning and helmet laws vary.",
        ],
        {
          bulletPoints: [
            "Total fleet utilization: shared cars vs. parked personal vehicles 95% time",
            "Subscription models: bundle insurance/maintenance — convenience premium",
            "Right to repair: independent shop access to scans and parts",
            "Technician shortage: ASE certification pathways for career entrants",
          ],
        }
      ),
      section(
        "connectivity-data",
        "10.4 Connectivity, data monetization, and privacy",
        [
          "Connected vehicles stream telemetry to OEM clouds for diagnostics, usage-based insurance, and feature subscriptions (heated seats on monthly plan controversies). GDPR-like rights appear in EU; U.S. patchwork emphasizes notice and opt-out where available.",
          "V2G (vehicle-to-grid) envisions EVs as distributed batteries stabilizing grids — pilot programs test bidirectional chargers and utility tariffs.",
          "Cybersecurity regulations (UN R155/R156) influence global OEM processes; U.S. NHTSA guidance expects coordinated vulnerability disclosure.",
        ],
        {
          laws: [
            {
              name: "California SB 994 / privacy initiatives (evolving)",
              summary: "Example of state efforts to govern automotive consumer data sharing and deletion rights.",
            },
          ],
        }
      ),
      section(
        "future-outlook",
        "10.5 Future outlook: sustainability, policy, and informed citizenship",
        [
          "Net-zero targets push electrification timelines — ICE sales bans announced in EU and several states with practical infrastructure gaps still closing. Hydrogen may niche in heavy duty where battery weight bites.",
          "Urban design may prioritize transit and bike lanes, but automobiles remain essential in rural America for decades. Informed citizens weigh personal mobility needs against environmental goals and budgets — no single vehicle suits all.",
          "Continuous learning through owner communities, NHTSA recalls, and reputable journalism beats panic over headline-grabbing single crashes. The automotive century taught societies to regulate and insure complex machines; the next chapter adds software, data, and shared responsibility between humans and systems.",
        ],
        {
          bulletPoints: [
            "Lifecycle analysis: compare ICE vs. EV on your grid mix and miles driven",
            "Policy literacy: comment on local zoning for charging at apartments",
            "Safety culture: belts, sober driving, and ADAS supervision save lives measurably",
            "Career pathways: engineering, service, insurance, policy, and urban planning intersect mobility",
          ],
          citations: [
            {
              source: "International Energy Agency — Global EV Outlook",
              url: "https://www.iea.org/reports/global-ev-outlook-2024",
              note: "Annual market and infrastructure trend data",
            },
          ],
        }
      ),
    ],
    "Where the industry is heading and how to navigate change"
  ),
];
