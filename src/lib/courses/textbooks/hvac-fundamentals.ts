import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const HVAC_TEXTBOOK_INTRO: TextbookIntro = {
  title: "HVAC Fundamentals",
  subtitle: "ForgEd skilled-trades survey — heating, cooling, airflow, controls, service, and efficiency",
  paragraphs: [
    "HVAC technicians balance comfort, energy use, and refrigerant stewardship. This textbook explains how heating, cooling, and ventilation systems work in U.S. homes and small commercial buildings.",
    "Ten chapters cover equipment types, distribution, controls, installation and maintenance, efficiency, codes, and careers. Section quizzes gate progress; course exams use a 200-question bank.",
    "EPA Section 608 certification is required to handle refrigerants—this course does not replace EPA testing or manufacturer cert classes. Follow lockout/tagout and gas safety rules on every call.",
  ],
};

export const HVAC_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "hvac-intro",
    1,
    "Introduction to HVAC",
    [
    section(
      "hvac-intro-s1",
      "1.1 Introduction to HVAC — Heating, ventilation, and air conditioning scope",
      ["HVAC technicians install and service systems that control temperature, humidity, and indoor air quality in homes, schools, offices, and industrial spaces. The trade blends mechanical aptitude, electrical controls, refrigeration theory, and customer communication—not desk-only engineering.","Work includes duct fabrication and hanging, refrigerant piping, gas furnaces, heat pumps, rooftop units, boilers (where licensed), controls, and preventive maintenance. Employers range from residential service companies to commercial mechanical contractors.","EPA Section 608 certification is required to handle refrigerants; additional gas licenses apply regionally."], {
        bulletPoints: ["HVAC — heating, ventilation, air conditioning","IAQ — indoor air quality","Split system — outdoor condenser plus indoor coil","Package unit — combined rooftop box","608 certification — refrigerant handling license"]
      }
    ),
    section(
      "hvac-intro-s2",
      "1.2 Introduction to HVAC — Apprenticeship and EPA 608 pathways",
      ["Apprentices learn brazing, charging, electrical metering, and airflow measurement under supervision. Classroom covers psychrometrics, refrigeration cycle, and NEC articles touching HVAC equipment.","608 Type I (small appliances), II (high-pressure), III (low-pressure), or Universal dictates job scope.","Tool investment: manifold gauges, multimeter, micron gauge, torque wrenches."], {
        bulletPoints: ["OJT — field hours with journeyman","608 Universal — broad refrigerant authority","Psychrometrics — air property math","Manifold — gauge set for refrigerant","Micron gauge — evacuation measurement"]
      }
    ),
    section(
      "hvac-intro-s3",
      "1.3 Introduction to HVAC — Residential service versus commercial install",
      ["Service techs diagnose no-cool calls, dirty filters, failed capacitors, and refrigerant leaks in occupied homes. Install crews set equipment, line sets, duct mains, and startup commissioning on new builds.","Commercial work adds larger tonnage, VAV boxes, building automation, and crane sets.","Pick a path by comfort with heights, travel, and on-call nights."], {
        bulletPoints: ["No-cool — AC service call staple","Commissioning — startup tests and paperwork","VAV — variable air volume terminal","Rooftop — curb-mounted package unit","On-call — rotating emergency duty"]
      }
    ),
    section(
      "hvac-intro-s4",
      "1.4 Introduction to HVAC — Misconceptions about \"just adding Freon\"",
      ["Low charge is a symptom—find leak, fix, evacuate, weigh charge. Overcharge hurts efficiency and compressor life. Mixing refrigerants is illegal and damages equipment.","Skipping evacuation leaves moisture and acids in system.","Customers need education on maintenance, not quick top-offs."], {
        bulletPoints: ["Leak search — nitrogen pressure, bubble, electronic sniffer","Recovery — mandatory before venting","Evacuation — deep vacuum below 500 microns target","Weigh-in — scale charging by line length","Blend ban — no substitute refrigerants"]
      }
    ),
    section(
      "hvac-intro-s5",
      "1.5 Introduction to HVAC — First ride-along week expectations",
      ["Ride along silently first—carry pads, flashlights, and trash bags. Learn to change filters, wash coils safely, and read nameplates.","Ask how to log refrigerant cylinders; EPA paper trail matters.","Dress for attics and crawls; hydration prevents heat illness."], {
        bulletPoints: ["Nameplate — model, refrigerant type, charge","Filter size — record on customer account","Cylinder log — EPA recovery documentation","Attic safety — joist walking, harness if required","Customer home — shoe covers and respect"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why introduction to hvac matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in introduction to hvac","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["HVAC — heating, ventilation, air conditioning","IAQ — indoor air quality","OJT — field hours with journeyman","608 Universal — broad refrigerant authority","No-cool — AC service call staple","Commissioning — startup tests and paperwork"],
      realWorldRelevance: "Journeymen and service techs use introduction to hvac daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "heating-basics",
    2,
    "Heating Systems",
    [
    section(
      "heating-basics-s1",
      "2.1 Heating Systems — Furnace types and efficiency ratings",
      ["Gas furnaces dominate U.S. residential heat: single-stage, two-stage, and modulating burners with AFUE ratings from 80% to 98%. Condensing units vent PVC; non-condensing use metal flue.","Heat pumps provide heat via refrigeration reverse cycle; auxiliary heat strips in cold climates.","Boilers and hydronic systems appear in Northeast and commercial—different skill set."], {
        bulletPoints: ["AFUE — annual fuel utilization efficiency","Condensing — extracts latent heat; PVC vent","Heat pump — reverse valve switches modes","Aux heat — electric strip backup","Boiler — hot water or steam heat"]
      }
    ),
    section(
      "heating-basics-s2",
      "2.2 Heating Systems — Combustion air and venting basics",
      ["Furnaces need adequate combustion air—direct vent pulls from outdoors; atmospheric relies on room volume or louvers. Flue blockages cause CO—test with analyzer.","Condensate drains must trap and route to plumbing.","Never operate with cracked heat exchanger—CO risk."], {
        bulletPoints: ["Combustion air — room volume or outdoor intake","Flue — exhaust path to outdoors","CO — carbon monoxide; analyzer test","Heat exchanger — separates flame from air stream","Condensate — acidic water from condensing furnace"]
      }
    ),
    section(
      "heating-basics-s3",
      "2.3 Heating Systems — Installing a condensing gas furnace",
      ["Set platform level, connect vent per manufacturer, gas pipe with sediment trap, low-voltage to thermostat. Pressure switch tubing routed without sags.","Checkout: rise, temperature split, combustion analysis, static pressure.","Permit and inspection per local mechanical code."], {
        bulletPoints: ["Platform — level pad","Sediment trap — drip leg on gas line","Pressure switch — proves vent flow","Temperature rise — supply minus return","Combustion analyzer — O2 and CO readings"]
      }
    ),
    section(
      "heating-basics-s4",
      "2.4 Heating Systems — Cracked heat exchangers and flue issues",
      ["Cracks leak combustion gases—red tag furnace. Blocked flues trip pressure switches; birds and ice are common.","Improper PVC slope collects condensate in vent.","Short cycling from oversized equipment or blocked filters."], {
        bulletPoints: ["Red tag — shut down unsafe unit","Pressure switch trip — vent or inducer fault","Filter — #1 cause of low airflow","Oversized — short cycle and comfort issues","Vent slope — condensate drainage"]
      }
    ),
    section(
      "heating-basics-s5",
      "2.5 Heating Systems — Heating startup checklist",
      ["Verify gas pressure, electrical polarity, thermostat type, filter clean, vents intact. Record combustion on invoice.","Customer education on filter schedule and CO detector.","Register warranty online."], {
        bulletPoints: ["Gas manifold pressure — per spec","Polarity — blower motor direction","Thermostat — heat anticipator or staging","CO detector — install where required","Warranty — online registration"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why heating systems matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in heating systems","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["AFUE — annual fuel utilization efficiency","Condensing — extracts latent heat; PVC vent","Combustion air — room volume or outdoor intake","Flue — exhaust path to outdoors","Platform — level pad","Sediment trap — drip leg on gas line"],
      realWorldRelevance: "Journeymen and service techs use heating systems daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "cooling-basics",
    3,
    "Cooling and Refrigeration",
    [
    section(
      "cooling-basics-s1",
      "3.1 Cooling and Refrigeration — Vapor-compression refrigeration cycle",
      ["Refrigerant evaporates in indoor coil absorbing heat; compressor pumps vapor; condenser rejects heat outdoors; metering device controls flow. Superheat and subcooling tune charge.","Pressure-temperature charts map refrigerant state.","Understand cycle before touching gauges."], {
        bulletPoints: ["Evaporator — indoor coil absorbs heat","Compressor — pumps refrigerant","Condenser — outdoor coil rejects heat","Metering device — TXV or piston","Superheat — vapor temperature above saturation"]
      }
    ),
    section(
      "cooling-basics-s2",
      "3.2 Cooling and Refrigeration — Refrigerants and environmental rules",
      ["HFCs like R-410A dominate residential; A2L lower-flammability refrigerants emerging with new equipment standards. CFC/HCFC phased out; recovery mandatory.","EPA 608 governs venting fines; label systems clearly.","Never mix oils and refrigerants across types."], {
        bulletPoints: ["R-410A — common residential high-pressure","A2L — newer mildly flammable class","Recovery — cylinder and scale log","Oil type — POE vs mineral per refrigerant","Venting — illegal release"]
      }
    ),
    section(
      "cooling-basics-s3",
      "3.3 Cooling and Refrigeration — Evacuation and weighed charge procedure",
      ["Replace line set or flush per spec. Evacuate to below 500 microns with standing test. Charge by weight plus line length adjustment.","Check superheat/subcooling at design conditions.","Record pressures and temps on startup sheet."], {
        bulletPoints: ["Micron — vacuum depth unit","Standing vacuum — test for leaks","Weigh charge — factory charge plus lines","Subcooling — liquid temp below saturation","Startup sheet — commissioning record"]
      }
    ),
    section(
      "cooling-basics-s4",
      "3.4 Cooling and Refrigeration — Low charge and restricted metering",
      ["Low charge shows low suction, warm vent air, ice on coil. Restricted TXV mimics low charge—measure superheat.","Non-condensables raise head pressure.","Compressor floodback from liquid slug damages valves."], {
        bulletPoints: ["Ice coil — low airflow or low charge","TXV — hunt or restriction diagnosis","Head pressure — high ambient or dirty condenser","Slugging — liquid to compressor","Sniffer — electronic leak detection"]
      }
    ),
    section(
      "cooling-basics-s5",
      "3.5 Cooling and Refrigeration — Commissioning a residential split AC",
      ["Verify breaker size, disconnect, whip, line set insulation, condensate drain. Run blower, check delta T, monitor amps.","Customer filter education; set programmable schedule.","Leave gauge ports capped."], {
        bulletPoints: ["Delta T — supply return temperature split","Amp draw — compare to nameplate RLA","Line insulation — suction line vapor barrier","Condensate — trap and slope","Caps — Schrader port covers"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why cooling and refrigeration matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in cooling and refrigeration","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["Evaporator — indoor coil absorbs heat","Compressor — pumps refrigerant","R-410A — common residential high-pressure","A2L — newer mildly flammable class","Micron — vacuum depth unit","Standing vacuum — test for leaks"],
      realWorldRelevance: "Journeymen and service techs use cooling and refrigeration daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "airflow",
    4,
    "Airflow and Distribution",
    [
    section(
      "airflow-s1",
      "4.1 Airflow and Distribution — Duct systems and static pressure",
      ["Supply trunks branch to rooms; return paths must balance—central return or jumper ducts. Static pressure measures duct restriction; high static reduces airflow and comfort.","Flex duct kinks kill performance; hard pipe preferred on critical runs.","Manual D sizing principles guide residential design."], {
        bulletPoints: ["Static pressure — inches of water column","Supply — conditioned air delivery","Return — path back to equipment","Flex duct — supported without sags","Manual D — ACCA duct design method"]
      }
    ),
    section(
      "airflow-s2",
      "4.2 Airflow and Distribution — CFM, fan laws, and blower performance",
      ["Airflow in cubic feet per minute depends on fan speed and system resistance. Tap settings on blower wheels adjust speed; ECM motors modulate.","Measure at registers with hood or traverse where trained.","Insufficient CFM causes frozen coils and poor dehumidification."], {
        bulletPoints: ["CFM — cubic feet per minute","Blower tap — speed wiring on PSC motors","ECM — electronically commutated motor","Register hood — airflow measurement tool","Dehumidification — requires adequate runtime CFM"]
      }
    ),
    section(
      "airflow-s3",
      "4.3 Airflow and Distribution — Balancing a small residential system",
      ["Set fan speed per design, open dampers on long runs, verify return grille sizing. Check temperature balance room to room.","Seal duct leaks with mastic—not duct tape alone.","Insulate ducts in unconditioned attics."], {
        bulletPoints: ["Damper — inline airflow adjustment","Mastic — sealed duct joints","Duct leakage — blower door duct blast optional","Return grille — sized for low noise","Balance report — room CFM notes"]
      }
    ),
    section(
      "airflow-s4",
      "4.4 Airflow and Distribution — Frozen coils and hot rooms",
      ["Low airflow from filter or duct causes freeze-up. Hot upstairs rooms need return transfer or zoning.","Oversized AC short cycles—poor humidity removal.","Verify blower operation before blaming refrigerant."], {
        bulletPoints: ["Dirty filter — first check","Kinked flex — restriction","Zoning — bypass duct considerations","Short cycle — oversizing or oversized cooling","Transfer grille — high/low pressure path"]
      }
    ),
    section(
      "airflow-s5",
      "4.5 Airflow and Distribution — Duct retrofit planning",
      ["Survey attic paths, structure conflicts, and equipment location. Fabricate offsets; hang with straps per code.","Coordinate with insulation crew after seal test.","Customer expectation on noise and register locations."], {
        bulletPoints: ["Offset — routed around structure","Strap — support intervals","Seal test — duct leakage standard","Register location — furniture conflict check","Noise — liner or sizing fixes"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why airflow and distribution matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in airflow and distribution","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["Static pressure — inches of water column","Supply — conditioned air delivery","CFM — cubic feet per minute","Blower tap — speed wiring on PSC motors","Damper — inline airflow adjustment","Mastic — sealed duct joints"],
      realWorldRelevance: "Journeymen and service techs use airflow and distribution daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "controls",
    5,
    "Controls and Thermostats",
    [
    section(
      "controls-s1",
      "5.1 Controls and Thermostats — Low-voltage control circuits",
      ["24VAC from transformer powers thermostat, contactors, and valves. Common (C) wire needed for smart stats.","Color codes are convention not law—verify at equipment.","Fuse protects transformer from shorts."], {
        bulletPoints: ["R/Y/G/W/O/B — conventional terminal labels","Common wire — 24VAC return for smart tstats","Contactor — outdoor compressor switch","Transformer — 24V from line voltage","Control fuse — 3A typical protection"]
      }
    ),
    section(
      "controls-s2",
      "5.2 Controls and Thermostats — Single-stage versus staging and heat pumps",
      ["Staging improves comfort and efficiency—two-stage furnace with two-stage AC, or heat pump with aux lockout tables.","Heat pump balance point determines aux heat enable.","Setback strategies differ for heat pumps—avoid aggressive setbacks that trigger strip heat."], {
        bulletPoints: ["Staging — multiple capacity steps","Balance point — outdoor temp for aux heat","Lockout — disable aux above set outdoor temp","Setback — schedule temperature changes","Defrost — heat pump outdoor coil cycle"]
      }
    ),
    section(
      "controls-s3",
      "5.3 Controls and Thermostats — Installing a smart thermostat",
      ["Verify C wire or add power extender kit; configure heat pump reversing valve and aux heat.","Test all modes: heat, cool, fan, emergency heat.","Commission Wi-Fi for customer or leave offline per preference."], {
        bulletPoints: ["C wire — power for Wi-Fi stat","O/B — reversing valve energize","Emergency heat — forces strips","Configuration — equipment type in menu","Test modes — all stages before leaving"]
      }
    ),
    section(
      "controls-s4",
      "5.4 Controls and Thermostats — Short cycles and blank thermostats",
      ["Blank stat may be blown fuse, tripped float switch, or bad transformer. Short cycling from anticipator mis-set or oversized equipment.","Loose wire at stat causes intermittent.","Float switch on condensate pan safety."], {
        bulletPoints: ["Float switch — condensate overflow cutout","Blown fuse — control circuit short","Anticipator — heat anticipation on old stats","Loose terminal — intermittent operation","Oversized — rapid cycling"]
      }
    ),
    section(
      "controls-s5",
      "5.5 Controls and Thermostats — Controls troubleshooting flow",
      ["Power at transformer, fuse intact, 24V at stat terminals. Jump tests only with training—risk of damage.","Follow manufacturer wiring diagram for heat pump.","Document wire colors before disconnect."], {
        bulletPoints: ["Transformer test — 24VAC output","Jump test — supervised training only","Wiring diagram — unit door chart","Wire label — photo before change","Sequence — call for heat/cool path"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why controls and thermostats matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in controls and thermostats","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["R/Y/G/W/O/B — conventional terminal labels","Common wire — 24VAC return for smart tstats","Staging — multiple capacity steps","Balance point — outdoor temp for aux heat","C wire — power for Wi-Fi stat","O/B — reversing valve energize"],
      realWorldRelevance: "Journeymen and service techs use controls and thermostats daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "installation",
    6,
    "Installation Practices",
    [
    section(
      "installation-s1",
      "6.1 Installation Practices — Equipment selection and Manual S/J",
      ["Cooling load calc (Manual J) sizes equipment; Manual S picks unit; Manual D sizes duct. Oversizing common mistake.","Match indoor coil to outdoor unit listing.","Gas furnace input matches ducted system design."], {
        bulletPoints: ["Manual J — residential load calculation","Manual S — equipment selection","Matched system — AHRI certified pairing","Ton — 12,000 BTU/hr cooling","Heat loss — heating load input"]
      }
    ),
    section(
      "installation-s2",
      "6.2 Installation Practices — Line sets, pads, and electrical disconnect",
      ["Flare or braze lines; protect from abrasion; strap per spec. Pad level; vibration pads on compressors.","Disconnect within sight; MCA/MOP on nameplate guide breaker and wire.","UV-rated line insulation outdoors."], {
        bulletPoints: ["Line set — suction and liquid pair","Flare — torque with torque wrench","Disconnect — service maintenance switch","MCA — minimum circuit ampacity","MOP — maximum overcurrent protection"]
      }
    ),
    section(
      "installation-s3",
      "6.3 Installation Practices — Setting a heat pump system",
      ["Mount air handler, level condenser, connect lines, evacuate, charge. Wire defrost and aux per diagram.","Static pressure test on duct; configure thermostat.","Inspection before cover close."], {
        bulletPoints: ["Air handler — indoor fan coil","Condenser — outdoor unit","Defrost board — outdoor coil ice control","Static test — duct design verification","Inspection — mechanical sign-off"]
      }
    ),
    section(
      "installation-s4",
      "6.4 Installation Practices — Leaks at flares and vibration noise",
      ["Under-torqued flares leak; over-torque cracks. Vibration from loose pads transmits noise indoors.","Hard-start kits only when needed—manufacturer guidance.","Refrigerant oil stains indicate leak point."], {
        bulletPoints: ["Flare torque — spec chart","Pad level — rubber isolation","Hard start — capacitor assist","Oil stain — leak indicator","Noise — line set isolation"]
      }
    ),
    section(
      "installation-s5",
      "6.5 Installation Practices — New construction startup handoff",
      ["Leave filter, thermostat manual, warranty card. Train customer on modes and filter.","Register with manufacturer; attach startup sheet to permit.","Schedule 30-day check optional for quality."], {
        bulletPoints: ["Homeowner packet — manuals and warranty","Startup sheet — pressures and temps","Filter — first one installed","30-day check — optional service visit","Permit close — final mechanical"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why installation practices matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in installation practices","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["Manual J — residential load calculation","Manual S — equipment selection","Line set — suction and liquid pair","Flare — torque with torque wrench","Air handler — indoor fan coil","Condenser — outdoor unit"],
      realWorldRelevance: "Journeymen and service techs use installation practices daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "maintenance",
    7,
    "Maintenance and Service",
    [
    section(
      "maintenance-s1",
      "7.1 Maintenance and Service — PM schedules and seasonal tune-ups",
      ["Spring AC PM: wash condenser, check charge, test capacitors, clean drain. Fall heat PM: inspect heat exchanger, combustion, inducer, and safeties.","Maintenance agreements stabilize company revenue and reduce emergency calls.","Checklist standardizes quality across techs."], {
        bulletPoints: ["PM — preventive maintenance visit","Capacitor — test microfarads","Contact cleaner — electrical connections","Drain flush — algae prevention","Agreement — recurring customer plan"]
      }
    ),
    section(
      "maintenance-s2",
      "7.2 Maintenance and Service — Coils, filters, and belts",
      ["Evaporator coil cleaning improves airflow and heat transfer; condenser coil outdoor. Filters monthly consumer, quarterly minimum commercial light.","Belt tension and alignment on older blowers; ECM needs less.","Blower wheel dirt reduces CFM silently."], {
        bulletPoints: ["Coil cleaner — manufacturer approved","Filter MERV — pressure drop tradeoff","Belt gauge — deflection measurement","Blower wheel — vacuum and brush","MERV — minimum efficiency reporting value"]
      }
    ),
    section(
      "maintenance-s3",
      "7.3 Maintenance and Service — Capacitor and contactor replacement",
      ["Dual capacitors fail open—compressor hums, fan won't spin. Contactor pits cause chatter.","Replace with exact microfarad rating; discharge before touch.","Verify amp draw after swap."], {
        bulletPoints: ["Dual cap — fan and compressor in one","Contactor — line voltage switching","Discharge — screwdriver across terminals safely","Microfarad — match ± tolerance","Amp clamp — verify running amps"]
      }
    ),
    section(
      "maintenance-s4",
      "7.4 Maintenance and Service — Ignoring float switches and drains",
      ["Clogged drains flood ceilings; algae tablets help but not substitute cleaning. Wet switches prevent damage—test them.","Secondary pan switches on attic units save drywall.","Teach customers to change filters."], {
        bulletPoints: ["Primary drain — main condensate line","Secondary pan — backup protection","Wet switch — safety cutoff","Algae tablet — partial prevention","Ceiling stain — late drain failure"]
      }
    ),
    section(
      "maintenance-s5",
      "7.5 Maintenance and Service — Closing a service ticket professionally",
      ["Explain findings, show worn parts, note measurements. Offer repair options tiered good/better/best.","Leave sticker on equipment with next PM date.","Follow EPA log for any refrigerant added."], {
        bulletPoints: ["Good/better/best — repair options","Equipment sticker — next service date","Invoice — readings and parts","EPA log — refrigerant tracking","Photo — failed part for customer"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why maintenance and service matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in maintenance and service","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["PM — preventive maintenance visit","Capacitor — test microfarads","Coil cleaner — manufacturer approved","Filter MERV — pressure drop tradeoff","Dual cap — fan and compressor in one","Contactor — line voltage switching"],
      realWorldRelevance: "Journeymen and service techs use maintenance and service daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "efficiency",
    8,
    "Energy Efficiency",
    [
    section(
      "efficiency-s1",
      "8.1 Energy Efficiency — SEER2, HSPF2, and rating labels",
      ["2023 DOE test procedures changed ratings to SEER2/EER2/HSPF2—compare like labels when quoting replacements.","Higher efficiency costs upfront; utility rebates may apply.","Proper install matters more than marginal SEER bump alone."], {
        bulletPoints: ["SEER2 — cooling efficiency metric","HSPF2 — heat pump heating efficiency","EER2 — peak efficiency point","Rebate — utility incentive program","Payback — energy savings vs cost"]
      }
    ),
    section(
      "efficiency-s2",
      "8.2 Energy Efficiency — Building envelope and HVAC interaction",
      ["Insulation, windows, and infiltration drive load—HVAC cannot fix bad envelope. Blower door finds leaks.","Zoning and programmable stats save energy when configured correctly.","Duct sealing in attic high ROI."], {
        bulletPoints: ["Envelope — insulation and air seal","Infiltration — uncontrolled air leakage","Blower door — whole-house leakage test","Zoning — dampers per area","ROI — return on improvement dollars"]
      }
    ),
    section(
      "efficiency-s3",
      "8.3 Energy Efficiency — Retrofit high-efficiency equipment",
      ["Replace furnace and AC together for matched efficiency; upgrade thermostat. Resize if prior unit oversized.","Verify duct can handle static of new blower.","Combustion and charge commissioning mandatory."], {
        bulletPoints: ["Matched pair — furnace and coil compatibility","Resize — load calc before swap","Static budget — duct can handle new fan","Rebate paperwork — utility forms","Commission — post-install verification"]
      }
    ),
    section(
      "efficiency-s4",
      "8.4 Energy Efficiency — Efficiency myths and quick fixes",
      ["Closing vents does not save energy—it raises static. Thermostat setbacks on heat pumps need lockout.","Darker filters are not always better if they choke airflow.","Seal ducts before upsizing equipment."], {
        bulletPoints: ["Closed vent — increases duct pressure","Strip heat — expensive aux overuse","High MERV — airflow penalty","Duct seal — mastic before bigger unit","Myth — bigger AC always better"]
      }
    ),
    section(
      "efficiency-s5",
      "8.5 Energy Efficiency — Energy audit talking points for customers",
      ["Explain payback, comfort, and humidity benefits. Show before/after static and temperature split.","Refer insulation partners ethically—no kickback without disclosure.","Document baseline for post-install comparison."], {
        bulletPoints: ["Payback years — simple calculation","Humidity — longer run times at lower CFM","Static before/after — duct improvement proof","Disclosure — referral relationships","Baseline — pre-retrofit readings"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why energy efficiency matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in energy efficiency","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["SEER2 — cooling efficiency metric","HSPF2 — heat pump heating efficiency","Envelope — insulation and air seal","Infiltration — uncontrolled air leakage","Matched pair — furnace and coil compatibility","Resize — load calc before swap"],
      realWorldRelevance: "Journeymen and service techs use energy efficiency daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "codes",
    9,
    "Codes and Safety",
    [
    section(
      "codes-s1",
      "9.1 Codes and Safety — Mechanical and fuel gas code adoption",
      ["IMC and IFGC model codes adopted locally; electrical portions reference NEC. Refrigerant piping support, condensate disposal, and combustion air rules vary.","Permits required for replacements in many cities.","Keep code year on permit card."], {
        bulletPoints: ["IMC — International Mechanical Code","IFGC — fuel gas code","Combustion air — room or direct vent","Permit — replacement documentation","Local amendment — city-specific rules"],
        citations: [{"source":"International Mechanical Code (IMC)","url":"https://www.iccsafe.org/products-and-services/codes/","note":"Mechanical code adoption varies; confirm local edition"}]
      }
    ),
    section(
      "codes-s2",
      "9.2 Codes and Safety — Venting, clearances, and access",
      ["Maintain manufacturer clearances around condensers; service access to filter doors.","Furnace in closet needs return air path.","Roof curb units need fall protection on service."], {
        bulletPoints: ["Clearance — outdoor unit shrub and wall space","Service access — panel reach","Closet return — louver or transfer","Roof safety — harness and parapet rules","Disconnect — within sight"]
      }
    ),
    section(
      "codes-s3",
      "9.3 Codes and Safety — Gas leak response and CO safety",
      ["If gas odor, do not operate switches—ventilate, evacuate, call utility from outside. CO detectors on each level.","Test combustion after any heat exchanger work.","Carbon monoxide poisoning is silent—analyzer on every heat startup."], {
        bulletPoints: ["Gas odor — no sparks, call utility","CO detector — UL listed, replace per age","Combustion test — CO and O2 readings","Evacuation — occupant safety first","Red tag — unsafe equipment off"]
      }
    ),
    section(
      "codes-s4",
      "9.4 Codes and Safety — Improper flue and condensate violations",
      ["PVC on non-condensing furnace fails inspection. Condensate tied to sewer without trap violates code.","Unsecured line sets vibrate and leak.","Electrical whip without disconnect fails."], {
        bulletPoints: ["PVC vent — condensing only","Condensate trap — prevents sewer gas","Line strap — support intervals","Disconnect — maintenance requirement","Inspection fail — rework before gas on"]
      }
    ),
    section(
      "codes-s5",
      "9.5 Codes and Safety — Inspection readiness for mechanical",
      ["Have startup sheet, gas pressure reading, vent slope photos, and electrical disconnect visible.","Inspector checks clearances and labeling.","Pass before occupancy certificate."], {
        bulletPoints: ["Startup data — pressures and temps","Gas pressure — manifold reading","Label — refrigerant type on unit","Clearance photo — condenser shrubs cut","CO test — printout attached"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why codes and safety matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in codes and safety","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["IMC — International Mechanical Code","IFGC — fuel gas code","Clearance — outdoor unit shrub and wall space","Service access — panel reach","Gas odor — no sparks, call utility","CO detector — UL listed, replace per age"],
      realWorldRelevance: "Journeymen and service techs use codes and safety daily—this chapter connects code, tools, and customer-facing work.",
    }
  ),
  chapter(
    "hvac-careers",
    10,
    "HVAC Careers",
    [
    section(
      "hvac-careers-s1",
      "10.1 HVAC Careers — Residential, commercial, and controls tracks",
      ["Residential service offers high call volume and people skills. Commercial install pays for travel crews and crane days. Controls/BAS techs program buildings—more computer fluency.","Refrigeration supermarket work is niche with night calls.","Pick track by height tolerance and schedule preference."], {
        bulletPoints: ["BAS — building automation system","Supermarket rack — multiplex refrigeration","Install crew — new construction travel","Service — maintenance agreements","Controls — BACnet and trending"]
      }
    ),
    section(
      "hvac-careers-s2",
      "10.2 HVAC Careers — NATE certification and employer training",
      ["NATE exams validate installation and service knowledge by equipment type. Employers sponsor training; EPA 608 required baseline.","Manufacturer classes on new refrigerants and controls.","Tool allowance programs help apprentices."], {
        bulletPoints: ["NATE — North American Technician Excellence","Manufacturer training — product-specific","Tool allowance — payroll deduction or grant","EPA 608 — legal refrigerant handling","Ride-along — field mentoring"]
      }
    ),
    section(
      "hvac-careers-s3",
      "10.3 HVAC Careers — Pay, on-call, and seasonal swings",
      ["Summer AC season drives overtime in hot climates; heating peaks in North. On-call rotations compensate with stipends.","Commission on sales can help or pressure—know ethics.","Union mechanical shops exist in some metros."], {
        bulletPoints: ["Seasonal OT — summer peak example","On-call stipend — weekly rotation pay","Spiff — sales incentive on equipment","Union — UA pipefitter/HVAC locals","Per diem — travel install jobs"]
      }
    ),
    section(
      "hvac-careers-s4",
      "10.4 HVAC Careers — Burnout and unsafe shortcuts",
      ["Skipping PPE in attic heat causes injury. Venting refrigerant loses license and job.","Overbooking leads to rushed diagnoses and callbacks.","Manage workload with dispatcher support."], {
        bulletPoints: ["PPE — gloves, glasses, knee pads","Venting — EPA violation","Callback — rushed job returns","Dispatcher — realistic schedule","Hydration — heat illness prevention"]
      }
    ),
    section(
      "hvac-careers-s5",
      "10.5 HVAC Careers — Career ladder to lead and ownership",
      ["Years 1–3: PM excellence and 608. Years 4–5: lead install or senior service, NATE senior. Beyond: foreman, service manager, or shop owner.","Business owners need license, insurance, and marketing.","Quality reputation beats discount wars."], {
        bulletPoints: ["Lead tech — crew coach","Service manager — dispatch and QA","License — contractor credential","Marketing — reviews and referrals","QA — checklist audits"]
      }
    )
    ],
    {
      learningObjectives: ["Explain why hvac careers matters on real plumbing, electrical, or HVAC jobs","Apply concepts from this chapter using correct trade terminology and safety habits","Identify common mistakes apprentices make in hvac careers","Use section quizzes to verify understanding before advancing"],
      keyConcepts: ["BAS — building automation system","Supermarket rack — multiplex refrigeration","NATE — North American Technician Excellence","Manufacturer training — product-specific","Seasonal OT — summer peak example","On-call stipend — weekly rotation pay"],
      realWorldRelevance: "Journeymen and service techs use hvac careers daily—this chapter connects code, tools, and customer-facing work.",
    }
  )
];
