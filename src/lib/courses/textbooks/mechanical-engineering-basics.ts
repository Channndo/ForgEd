import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const MECH_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Mechanical Engineering Basics",
  subtitle:
    "ForgEd survey textbook — forces, materials, energy, design, and the practice of building machines",
  paragraphs: [
    "Mechanical engineering is the discipline that turns physics into durable products: pumps that move water, turbines that spin generators, vehicles that survive potholes, and HVAC systems that keep hospitals breathable. Long before the degree existed, millwrights and instrument makers solved the same problems with rules of thumb, full-scale models, and hard-won shop experience. This course gives you the vocabulary and mental models those professionals use today—expressed in SI units, free-body diagrams, and material data sheets rather than in blacksmith lore.",
    "The fifteen chapters move from statics and dynamics through thermodynamics, fluids, heat transfer, machine elements, manufacturing, and modern CAD/FEA workflows. You will not derive every equation from first principles; you will learn what each relation means physically, when it applies, and what can go wrong if you ignore units or safety margins. Think of it as a guided map for further study (university courses, trade apprenticeships, or on-the-job mentoring), not as preparation for a Professional Engineer licensing exam.",
    "Content builds engineering literacy: how to read a drawing note, interpret a stress-strain curve, and ask better questions in a design review. It is not design approval, code compliance sign-off, or permission to stamp construction documents. Always follow applicable codes, employer procedures, and licensed professional judgment on safety-critical work.",
  ],
  additionalResources: [
    {
      title: "Reference standards and open coursework",
      resources: [
        {
          source: "ASME — codes, standards, and mechanical engineering practice",
          url: "https://www.asme.org/",
          note: "Y14 drawings, B31 piping context, and professional society resources",
        },
        {
          source: "NIST — SI units and reference data",
          url: "https://www.nist.gov/pml",
          note: "Traceable units and material property databases",
        },
        {
          source: "MIT OpenCourseWare — mechanical engineering",
          url: "https://ocw.mit.edu/search/?d=Mechanical%20Engineering",
          note: "Free lecture notes for deeper study after this survey",
        },
      ],
    },
  ],
};

export const MECH_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "me-intro",
    1,
    "Introduction to Mechanical Engineering",
    [
      section(
        "me-intro-s1",
        "1.1 A historical timeline of mechanical engineering",
        [
          "Mechanical engineering as a recognized profession crystallized during the Industrial Revolution, when steam power, precision machine tools, and interchangeable parts transformed craft workshops into factories. Earlier innovators—from Archimedes’ simple machines to Watt’s separate condenser—built the intellectual foundation, but the nineteenth century added systematic training, engineering societies, and textbooks that treated heat, fluids, and strength of materials as connected sciences rather than isolated tricks.",
          "The twentieth century layered mass production, aerospace, nuclear power, and digital control. World War II accelerated materials science and quality methods; post-war consumer markets demanded reliability at scale. Universities standardized curricula around statics, dynamics, thermodynamics, and design laboratories while industry split roles among research, manufacturing engineering, and field service.",
          "Late-century computing reshaped the field again. Parametric CAD replaced drawing boards; finite element analysis (FEA) and computational fluid dynamics (CFD) let teams explore designs before cutting metal. Today’s mechanical engineers work inside sustainability constraints—life-cycle energy, recyclability, and emissions—while robotics, additive manufacturing, and electrified powertrains redefine what a “machine” can be.",
          "Reading this timeline helps you place modern tools in context. Simulation does not replace judgment; it extends the same tradition of modeling reality, checking assumptions, and documenting decisions for the next person who maintains the system.",
        ],
        {
          bulletPoints: [
            "1769 — Watt’s improved steam engine; thermodynamic efficiency becomes an economic variable",
            "1800s — Machine tools (lathe, milling) enable interchangeable parts and factory scale",
            "1824 — Carnot’s heat-engine theory; foundation for thermodynamics and power-plant design",
            "1840s–1860s — Railroad expansion; boilers, bridges, and fatigue failures drive safety culture",
            "1870s — ASME founded (1880); professional standards for boilers and pressure equipment",
            "1903 — Wright Flyer; aerodynamics, structures, and propulsion integrated in one system",
            "1913 — Ford moving assembly line; manufacturing engineering as throughput science",
            "1940s — WWII R&D; jet engines, radar, and materials programs (titanium, synthetics)",
            "1960s — Finite element methods mature; NASA programs push lightweight structures",
            "1980s — PC CAD (AutoCAD era); drawings become digital databases",
            "1990s — Solid modeling and PLM; assemblies managed as revision-controlled models",
            "2000s — Simulation in the design loop; FEA/CFD common in automotive and aerospace",
            "2010s — Additive manufacturing production parts; topology optimization in industry",
            "2020s — Electrification, hydrogen, and circular design metrics in mainstream ME practice",
          ],
          citations: [
            {
              source: "ASME — history of mechanical engineering",
              url: "https://www.asme.org/about-asme/engineering-history",
              note: "Professional society timeline and standards context",
            },
            {
              source: "Smithsonian — industrial revolution collections",
              url: "https://www.si.edu/",
              note: "Historical machines and manufacturing artifacts",
            },
          ],
        }
      ),
      section(
        "me-intro-s2",
        "1.2 What mechanical engineers build and steward",
        [
          "Mechanical engineers touch anything that moves, carries load, exchanges heat, or converts energy. In automotive and aerospace, they design suspensions, cooling packages, and cabin HVAC. In energy, they specify turbines, heat exchangers, and piping layouts. In medical devices, they ensure sterilizable mechanisms and battery thermal safety. In buildings, they collaborate on elevators, fire protection pumps, and data-center cooling.",
          "The daily work is rarely “invent a new law of physics.” It is requirements analysis, concept sketches, calculation checks, prototype tests, drawing release, supplier coordination, and failure investigation. A junior engineer might size a bolted joint; a senior engineer arbitrates trade studies when weight, cost, and noise conflict.",
          "Cross-functional fluency separates effective mechanical engineers from narrow calculators. You read electrical schematics enough to respect wire harness clearance; you read software release notes enough to know when a sensor calibration changed; you read finance enough to understand why a one-cent washer at million-unit volume matters.",
          "Stewardship means the product still works in year seven—corrosion, wear, and forgotten maintenance are part of the design problem. Documentation (BOMs, torque specs, service manuals) is as much an engineering deliverable as the CAD model.",
        ],
        {
          bulletPoints: [
            "Product domains — mobility, energy, HVAC, industrial equipment, consumer hardware",
            "Deliverables — concepts, calculations, drawings, test reports, manufacturing packages",
            "Cross-discipline — ME + electrical + software + materials + industrial engineering",
            "Lifecycle — design, build, operate, maintain, retire/recycle",
            "Scale — millimeter mechanisms to meter-scale civil-mechanical interfaces",
          ],
        }
      ),
      section(
        "me-intro-s3",
        "1.3 Core subfields and the SI unit system",
        [
          "Undergraduate mechanical engineering traditionally groups statics and dynamics (mechanics), thermodynamics and fluid mechanics (thermal-fluid sciences), materials and manufacturing, and design/systems integration. Controls and mechatronics bridge into electrical engineering; biomechanics bridges into biology. You do not master all depths in one survey—but you must know which specialist to call.",
          "The International System of Units (SI) is the engineering lingua franca. Length in meters (m), mass in kilograms (kg), time in seconds (s), force in newtons (N), energy in joules (J), power in watts (W), pressure in pascals (Pa), and temperature in kelvin (K) for absolute thermodynamic calculations. Derived units combine cleanly: stress is Pa (N/m²); dynamic viscosity is Pa·s.",
          "Unit discipline prevents expensive errors. Mixing pound-force with kilograms, or gauge pressure with absolute pressure in gas laws, has caused lost spacecraft and ruptured vessels. Always write units in every intermediate step; treat unit cancellation as a proof that your algebra matches the physics.",
          "NIST maintains traceable standards and educational material on SI usage. In US industry you will still see inch-pound drawings on legacy products; conversion must be explicit, not mental approximation.",
        ],
        {
          bulletPoints: [
            "Mechanics — particles, rigid bodies, vibrations",
            "Thermal-fluid — energy, entropy, flow, heat transfer",
            "Materials/manufacturing — properties, processes, tolerances",
            "Design/systems — requirements, trade studies, reliability",
            "SI base units — m, kg, s, A, K, mol, cd",
            "Common derived — N, J, W, Pa, Hz",
          ],
          citations: [
            {
              source: "NIST Guide for the Use of the International System of Units (SI)",
              url: "https://www.nist.gov/pml/special-publication-811",
              note: "Authoritative SI usage and conversion factors",
            },
          ],
        }
      ),
      section(
        "me-intro-s4",
        "1.4 Drawings, models, and engineering communication",
        [
          "Engineering drawings are contracts. A machinist who never meets you should manufacture the part from the print alone. ASME Y14 standards define line types, views, dimensions, tolerances, and revision blocks. Model-based definition (MBD) embeds the same data in CAD annotations, but the obligation remains: unambiguous geometry and acceptable variation.",
          "Title blocks carry part number, material, scale, mass, and finish notes. General notes specify default edge breaks, plating, and inspection requirements. Reference dimensions are for information only; driving dimensions control fabrication.",
          "Three-dimensional CAD accelerates clash detection and mass roll-ups, yet teams still export PDF drawings for suppliers without your PLM login. Learn both paradigms. An assembly constraint error in software becomes a physical interference on the line.",
          "Written communication—emails, test reports, failure analyses—should state assumptions, data sources, and conclusions separately. Managers and regulators read for decision traceability, not literary style.",
        ],
        {
          bulletPoints: [
            "Orthographic views — front, top, section for internal features",
            "GD&T intro — datums, position, flatness (detailed in manufacturing chapter)",
            "Revision control — ECO/ECN process ties drawing to BOM",
            "MBD — PMI on CAD; STEP exports for supply chain",
            "Communication — assumptions, methods, results, recommendations",
          ],
          citations: [
            {
              source: "ASME Y14.5 — Dimensioning and Tolerancing",
              url: "https://www.asme.org/codes-standards/find-codes-standards/y14-5-dimensioning-tolerancing",
              note: "Geometric dimensioning and tolerancing reference",
            },
          ],
        }
      ),
      section(
        "me-intro-s5",
        "1.5 Ethics, safety, and professional responsibility",
        [
          "Licensed professional engineers in the United States hold public welfare duties defined by state boards and NSPE ethics codes: hold paramount the safety, health, and welfare of the public; perform services only in areas of competence; issue public statements only in an objective and truthful manner. Even if you are not licensed, employers expect the same care on safety-critical systems.",
          "Safety factors and codes exist because loads, materials, and humans vary. A catalog bolt rating assumes specific preload and environment. Your analysis must state load cases: operating, proof, ultimate, seismic, and misuse where relevant.",
          "Whistleblowing and stop-work authority protect teams when schedule pressure conflicts with evidence. Document concerns in writing, escalate along the quality system, and do not bypass calibration or test gates to ship.",
          "This textbook prepares informed participation in those cultures—not legal sign-off. When stakes rise, involve a licensed PE, certified welding inspector, or authorized test lab per jurisdiction and contract.",
        ],
        {
          bulletPoints: [
            "Public welfare — safety before schedule when evidence conflicts",
            "Competence — know limits; escalate specialty work",
            "Documentation — traceable calculations and test records",
            "Stop-work — formal paths when requirements cannot be met",
            "Licensure — FE/PE path for certain stamp roles (varies by state)",
          ],
          citations: [
            {
              source: "National Society of Professional Engineers — Code of Ethics",
              url: "https://www.nspe.org/ethics",
              note: "Professional engineering ethical obligations",
            },
          ],
        }
      ),
    ],
    {
      subtitle: "From steam power to simulation-driven design—and the responsibilities that persist",
      learningObjectives: [
        "Place mechanical engineering milestones on a timeline from the Industrial Revolution to modern CAD/FEA practice",
        "Describe typical mechanical engineering deliverables across industries",
        "Use SI units consistently and recognize common unit pitfalls",
        "Explain why drawings, revisions, and ethics frameworks matter before detailed analysis",
      ],
      chapterSummary:
        "Chapter 1 frames mechanical engineering as a historically grounded, SI-based profession that communicates through drawings and models while placing public safety ahead of schedule pressure.",
      keyConcepts: [
        "Industrial Revolution → digital design evolution",
        "SI units and derived engineering quantities",
        "Drawings and MBD as manufacturing contracts",
        "Ethics and safety culture",
      ],
      realWorldRelevance:
        "New hires who understand the timeline and communication norms contribute in design reviews instead of treating CAD as mere 3D artwork.",
    }
  ),

  chapter(
    "statics",
    2,
    "Statics and Equilibrium",
    [
      section(
        "statics-s1",
        "2.1 Forces, moments, and resultants",
        [
          "Statics studies bodies at rest or moving at constant velocity, where the net force and net moment on each body are zero. A force is a vector: magnitude in newtons, direction in space, and point of application that matters for rotation. Two forces equal in magnitude but opposite in direction do not cancel if their lines of action differ—they form a couple that can twist a shaft even when ΣF = 0.",
          "The moment (torque) of a force F about point O is M = r × F, where r runs from O to the force’s line of action. In two dimensions, M_z = F_x·d_y − F_y·d_x simplifies bookkeeping. Sign conventions must stay consistent through a problem; flipping signs mid-solution is a top student error.",
          "Resultants replace distributed loads or multiple forces with a single equivalent force and couple at a chosen point. For a uniform beam load w (N/m) over length L, the resultant force wL acts at midspan for reaction calculations, while internal diagrams still require integration along the span.",
          "Professional statics appears in crane rigging, bolt patterns, and machine feet reactions. If you cannot sketch the load path from payload to ground, your FEA boundary conditions will be wrong.",
        ],
        {
          bulletPoints: [
            "Vector force — magnitude, direction, line of action",
            "Moment — M = r × F; units N·m",
            "Couple — pure rotation without net force",
            "Resultant — equivalent force-couple system",
            "Distributed load — integrate to equivalent concentrated load",
          ],
          citations: [
            {
              source: "MIT OpenCourseWare — Engineering Mechanics I",
              url: "https://ocw.mit.edu/courses/2-001j-mechanics-materials-i-fall-2006/",
              note: "Statics and strength of materials foundation",
            },
          ],
        }
      ),
      section(
        "statics-s2",
        "2.2 Free-body diagrams and reaction forces",
        [
          "A free-body diagram (FBD) isolates one body, removes supports, and replaces them with unknown reactions. Draw every external force and moment before writing equilibrium equations. For a pin support in 2D, reactions are typically horizontal and vertical components; a fixed support adds a moment reaction.",
          "Three scalar equilibrium equations in 2D (ΣF_x = 0, ΣF_y = 0, ΣM = 0) solve three unknowns in determinate problems. A simply supported beam with vertical loads has two vertical reactions; if you forget the pin cannot carry moment in the ideal model, you will mis-size supports.",
          "Internal resultants—shear V and bending moment M—come from cutting the beam and drawing an FBD of one side. Sign conventions for V and M vary by textbook; stick to one and label on the diagram.",
          "In practice, FBD discipline prevents “magic” forces at interfaces. When a gearbox housing cracks, the first question is whether bolt preload and belt tension were included in the load case.",
        ],
        {
          bulletPoints: [
            "FBD steps — isolate, replace supports, label forces/moments",
            "2D equilibrium — three equations, three unknowns (determinate case)",
            "Support types — pin, roller, fixed (idealizations)",
            "Internal diagrams — V(x), M(x) from section cuts",
            "Load path — trace forces to foundations",
          ],
        }
      ),
      section(
        "statics-s3",
        "2.3 Equilibrium of particles and rigid bodies in 3D",
        [
          "A particle has negligible dimensions, so all forces meet at one point. ΣF = 0 yields up to three equations in 3D. Cables and pulleys often idealize as particles at junctions, with tension directed along the cable.",
          "Rigid bodies add ΣM = 0 about any point (or line). In 3D you have six equations and must choose moment axes to decouple unknowns. A table on casters might be modeled with vertical reactions at each leg until tilt introduces lateral load sharing.",
          "Statically indeterminate structures have more supports than equations—real frames redistribute load by stiffness. Introductory courses introduce compatibility ideas; advanced courses use flexibility and stiffness matrices. Knowing indeterminacy prevents false confidence from undergraduate idealizations.",
          "Warehouse rack designers and scaffold engineers live in indeterminate reality. Stiffness, not just equilibrium, decides who carries the overload when one leg sinks.",
        ],
        {
          bulletPoints: [
            "Particle equilibrium — ΣF = 0 in x, y, z",
            "Rigid body — ΣF = 0 and ΣM = 0 (6 eqs in 3D)",
            "Indeterminate — need compatibility or stiffness method",
            "Cables — tension only along centerline",
            "3D moment — vector components about chosen axes",
          ],
        }
      ),
      section(
        "statics-s4",
        "2.4 Trusses, frames, and distributed loads on beams",
        [
          "Truss members are two-force members—either pure tension or compression along the member axis. Method of joints solves one joint at a time; method of sections cuts through members to expose resultants in a single equation set. Zero-force members appear by geometry and loading symmetry; spotting them saves algebra.",
          "Frames and machines include multi-force members (bending inside the member). A backhoe linkage is a machine: input forces create output forces with mechanical advantage governed by geometry and friction.",
          "Distributed loads on beams integrate to resultants for reactions, then piecewise functions define V and M along x. Triangular hydrostatic loads on tanks and linear snow drifts on roofs are standard patterns.",
          "Bridge inspectors and crane designers still use truss intuition even when FEA provides numbers. Instability (buckling) can fail a compression member below material yield—statics alone is not enough for slender members.",
        ],
        {
          bulletPoints: [
            "Truss — two-force members; joints assumed pinned",
            "Method of joints / sections — systematic unknowns",
            "Frame — multi-force members; bending present",
            "Machine — kinematic links transfer force/motion",
            "Distributed load — w(x) integrated for reactions and internals",
          ],
        }
      ),
      section(
        "statics-s5",
        "2.5 Friction, centroids, and stability against tipping",
        [
          "Dry Coulomb friction models maximum tangential force F_max = μN, where μ depends on surface pair and N is normal force. Static friction adjusts up to that limit to prevent slip; kinetic friction applies when sliding. Belt drives and wedges exploit friction direction—sign errors flip self-locking into runaway.",
          "Centroids locate the geometric center of area or volume; composite bodies decompose into simple shapes. Center of gravity coincides with centroid when density is uniform. Finding centroid location sets where resultant weights act on foundations.",
          "Stability against tipping compares overturning moment to restoring moment about an edge. A forklift rated load at a given load center assumes you do not shift the combined center of mass outside the wheel polygon.",
          "OSHA and equipment manuals encode stability margins learned from statics plus testing. Never confuse friction holding a ladder with a certified tie-off when required by site rules.",
        ],
        {
          bulletPoints: [
            "Coulomb friction — F ≤ μN (static); F = μ_k N (kinetic)",
            "Centroid — ∫x dA / ∫dA for areas",
            "Composite bodies — sum areas and first moments",
            "Tipping — keep resultant weight inside support polygon",
            "Factor of safety — applied to overturning and slip checks",
          ],
        }
      ),
    ],
    {
      subtitle: "Forces in balance—and the diagrams that make structures trustworthy",
      learningObjectives: [
        "Compute moments and resultants for forces and distributed loads",
        "Draw free-body diagrams and solve 2D equilibrium for reactions",
        "Analyze basic trusses and distinguish frames from machines",
        "Apply friction and centroid concepts to stability problems",
      ],
      chapterSummary:
        "Statics translates physical structures into solvable force and moment balances, emphasizing FBD discipline, internal diagrams, and stability beyond bare ΣF = 0.",
      keyConcepts: [
        "Force vectors and moments",
        "Free-body diagrams and equilibrium equations",
        "Trusses vs. frames",
        "Friction and tipping stability",
      ],
      realWorldRelevance:
        "Rigging, machine mounting, and structural hand calculations still begin with statics—even when simulation finishes the numbers.",
    }
  ),

  chapter(
    "dynamics",
    3,
    "Dynamics and Motion",
    [
      section(
        "dynamics-s1",
        "3.1 Kinematics: describing motion without forces",
        [
          "Kinematics describes how position, velocity, and acceleration change with time—without asking why. In rectilinear motion along an axis, v = ds/dt and a = dv/dt. Constant acceleration yields the classic relations v = v₀ + at and s = s₀ + v₀t + ½at² when acceleration is piecewise constant.",
          "Curvilinear motion splits into tangential and normal components. Normal acceleration a_n = v²/ρ points toward the center of curvature with radius ρ. A vehicle cornering at constant speed still accelerates toward the center even if speed magnitude is steady.",
          "Angular kinematics parallels linear: ω = dθ/dt, α = dω/dt. Linkages in robots and engines combine translational and rotational constraints through geometry.",
          "Motion capture, encoders, and lidar give discrete data; engineers fit smooth kinematic curves and differentiate carefully—noise amplifies on differentiation, so filtering and sampling rates matter in test labs.",
        ],
        {
          bulletPoints: [
            "Rectilinear — s(t), v(t), a(t) linked by derivatives",
            "Constant a — v² = v₀² + 2aΔs useful for braking distance",
            "Normal/tangential — a_t = dv/dt, a_n = v²/ρ",
            "Angular — θ, ω, α for rotating shafts",
            "Data — differentiate measured position with care",
          ],
          citations: [
            {
              source: "MIT OpenCourseWare — Dynamics",
              url: "https://ocw.mit.edu/courses/2-003j-dynamics-and-control-i-spring-2009/",
              note: "Kinematics and kinetics foundation",
            },
          ],
        }
      ),
      section(
        "dynamics-s2",
        "3.2 Newton’s laws and equations of motion",
        [
          "Newton’s second law for a particle: ΣF = ma, with acceleration measured in an inertial frame. For rigid bodies, ΣF = m a_G and ΣM_G = I_G α for planar rotation about center of mass G.",
          "A free-body diagram in dynamics looks like statics but includes inertial effects explicitly. Some engineers use d’Alembert’s fictitious inertia forces in equivalent static diagrams; others keep dynamics on the left side of ΣF = ma.",
          "Worked problems specify coordinates and positive directions before algebra. A elevator cable tension differs for upward acceleration versus downward—same mass, different apparent weight.",
          "Crash testing, robotics, and packaging drop analysis rely on consistent mass properties. CAD mass properties are only as good as material density assignments and hollow features modeled correctly.",
        ],
        {
          bulletPoints: [
            "ΣF = ma — inertial reference frame",
            "Planar rigid body — translation + rotation about G",
            "Apparent weight — T = m(g + a) in vertical cable example",
            "Mass properties — from CAD or test measurement",
            "Units — kg for mass, N for force (not kgf in SI)",
          ],
        }
      ),
      section(
        "dynamics-s3",
        "3.3 Work-energy and impulse-momentum",
        [
          "Work-energy: T₁ + U₁₋₂ = T₂ for particles, where T is kinetic energy ½mv² and U is work by forces that have potential (gravity, springs). Convenient when forces are functions of position and you do not need time explicitly.",
          "Impulse-momentum: Σ∫F dt = Δ(mv) relates impulse to momentum change. Impact problems use coefficient of restitution e to relate relative speeds before and after contact—an empirical supplement to rigid-body theory.",
          "Power is the rate of work: P = F·v for translation. Engine power curves and motor sizing use power budgets across duty cycles, not peak force alone.",
          "Packaging engineers use impulse to size foam; automotive safety uses crush zones to extend impact duration and lower peak acceleration on occupants.",
        ],
        {
          bulletPoints: [
            "Kinetic energy — T = ½mv² (point mass)",
            "Work — U = ∫F·dr; gravity U = mgh",
            "Impulse — J = ∫F dt = Δp",
            "Coefficient of restitution — e for impacts",
            "Power — P = F·v (W = J/s)",
          ],
        }
      ),
      section(
        "dynamics-s4",
        "3.4 Rotation, inertia, and gear trains",
        [
          "Mass moment of inertia I_G depends on mass distribution. Thin rod about end: I = ⅓mL²; solid disk about center: I = ½mr². Parallel-axis theorem shifts inertia: I_O = I_G + md².",
          "Rotating machinery stores kinetic energy ½Iω². A large flywheel smooths torque ripple but adds startup time. Gear ratios n multiply torque and divide speed (ideal): T_out = n T_in, ω_out = ω_in / n.",
          "Cam profiles and Geneva mechanisms translate rotation into timed linear motion for indexing lines. Dynamic loads spike when acceleration is high—soft motion laws reduce impact.",
          "Servo sizing starts with reflected inertia through gearboxes to the motor shaft. Undersized motors overheat; oversized motors cost and add inertia themselves.",
        ],
        {
          bulletPoints: [
            "I_G — mass moment of inertia (kg·m²)",
            "Parallel-axis theorem — I_O = I_G + md²",
            "Gear ratio — speed/torque trade (ideal model)",
            "Reflected inertia — J_eq at motor shaft",
            "Motion profiles — limit peak acceleration",
          ],
        }
      ),
      section(
        "dynamics-s5",
        "3.5 Introduction to mechanical vibrations",
        [
          "Many failures begin as resonance: when forcing frequency nears natural frequency, amplitudes grow. A single-degree-of-freedom (SDOF) mass-spring-damper model introduces ω_n = √(k/m) and damping ratio ζ from viscous damping c.",
          "Forced harmonic response plots amplitude versus frequency—the resonance peak sharpens as damping drops. Isolation mounts target ω/ω_n > √2 to reduce transmitted force to foundations.",
          "Balancing rotating equipment reduces 1× vibration. Two-plane balancing on fans and turbochargers is routine maintenance, not black magic.",
          "This chapter previews vibration; Chapter 12 goes deeper. Still, every dynamics student should recognize that F = ma with harmonic forcing produces sustained large motions unless damping or detuning intervenes.",
        ],
        {
          bulletPoints: [
            "SDOF model — m, c, k",
            "Natural frequency — ω_n = √(k/m) rad/s",
            "Damping ratio — ζ = c/(2√(km))",
            "Resonance — forcing near ω_n",
            "Isolation — soft mounts for high-frequency disturbance",
          ],
        }
      ),
    ],
    {
      subtitle: "From motion description to forces that accelerate—and the vibrations that follow",
      learningObjectives: [
        "Relate position, velocity, and acceleration in linear and curved paths",
        "Apply ΣF = ma and rigid-body rotational equations",
        "Use work-energy and impulse-momentum for suitable problems",
        "Explain gear ratios, inertia, and basic resonance concepts",
      ],
      chapterSummary:
        "Dynamics connects forces to motion through Newton’s laws, energy and momentum methods, rotational inertia, and the first look at resonance.",
      keyConcepts: [
        "Kinematics vs. kinetics",
        "ΣF = ma and rigid-body extension",
        "Work-energy and impulse-momentum",
        "Inertia and gear trains",
        "SDOF vibration preview",
      ],
      realWorldRelevance:
        "Motor sizing, crash safety, and machinery diagnostics all assume you can trace acceleration back to forces and mass properties.",
    }
  ),

  chapter(
    "materials",
    4,
    "Engineering Materials",
    [
      section(
        "materials-s1",
        "4.1 Material classes and selection methodology",
        [
          "Engineers group materials by structure and processing: metals and alloys, polymers, ceramics, glasses, composites, and emerging hybrids (metal matrix, ceramic matrix). Selection begins with requirements—strength, stiffness, temperature limit, corrosion resistance, cost, availability, and recyclability—not with favorite grades from school.",
          "Ashby-style charts plot strength vs. density or price to narrow candidates. A aerospace bracket might prioritize specific strength (σ/ρ); a disposable clip prioritizes moldability and unit cost.",
          "Processing history matters as much as chemistry. The same alloy code behaves differently when cast versus forged; heat treatment can double yield strength if quench and temper are controlled.",
          "Suppliers provide mill test reports tying lot chemistry to properties. Substituting “equivalent” material without re-qualification has caused fleet groundings and pipeline failures.",
        ],
        {
          bulletPoints: [
            "Classes — metals, polymers, ceramics, composites",
            "Selection drivers — mechanical, thermal, environment, cost",
            "Ashby maps — compare properties across classes",
            "Processing — casting, forging, forming changes microstructure",
            "Traceability — MTR/CMTR for critical applications",
          ],
          citations: [
            {
              source: "NIST Materials Genome Initiative resources",
              url: "https://www.nist.gov/mgi",
              note: "Data-driven materials property databases",
            },
          ],
        }
      ),
      section(
        "materials-s2",
        "4.2 Stress, strain, and mechanical properties from tests",
        [
          "Normal stress σ = F/A (Pa) and normal strain ε = ΔL/L (dimensionless) describe axial loading. A tensile test on a dog-bone specimen produces an engineering stress-strain curve: elastic slope E (Young’s modulus), yield point, ultimate strength, and fracture strain.",
          "Elastic deformation recovers on unload; plastic deformation permanent. Hooke’s law σ = Eε applies in the linear elastic region. Shear follows τ = Gγ with shear modulus G related by E = 2G(1+ν) for isotropic materials.",
          "Hardness tests (Rockwell, Brinell) correlate empirically to strength for some alloys—useful for shop floor screening, not for final design sign-off alone.",
          "Safety-critical designs use statistically qualified minimum properties, not handbook averages. Temperature and strain rate shift curves; impact toughness at −40 °C can fail while room-temperature tensile looks fine.",
        ],
        {
          bulletPoints: [
            "Stress σ = F/A — tension positive by convention",
            "Strain ε = ΔL/L — small strain assumption in elasticity",
            "Young’s modulus E — slope of linear elastic region",
            "Yield, ultimate, elongation — key report values",
            "Shear — τ = Gγ; Poisson’s ratio ν",
          ],
        }
      ),
      section(
        "materials-s3",
        "4.3 Steels, aluminum, and heat treatment",
        [
          "Carbon and alloy steels dominate infrastructure and machinery. Low-carbon steels (<0.25% C) are ductile and weldable; high-carbon steels harden for wear surfaces. Alloy additions (Cr, Ni, Mo) improve hardenability, corrosion resistance, or high-temperature strength.",
          "Quench and temper increases strength through controlled martensite formation; tempering trades some strength for toughness. Case hardening (carburizing, nitriding) hardens surfaces while keeping a tough core.",
          "Aluminum alloys (2xxx, 6xxx, 7xxx series) lighten vehicles and aircraft. Precipitation hardening (T6 temper) boosts strength; welding heat-affected zones may require re-aging or redesign.",
          "Stainless steels (300-series austenitic, 400-series martensitic) resist oxidation; still vulnerable to chloride pitting and stress corrosion cracking in marine service.",
        ],
        {
          bulletPoints: [
            "Steel designations — AISI/SAE 4-digit examples (e.g., 4140)",
            "Heat treat — quench, temper, anneal, normalize",
            "Aluminum tempers — T4, T6 precipitation hardening",
            "Stainless — austenitic vs. martensitic behavior",
            "Weldability — HAZ property changes",
          ],
        }
      ),
      section(
        "materials-s4",
        "4.4 Polymers, ceramics, and fiber composites",
        [
          "Thermoplastics (nylon, ABS, PEEK) soften with heat and are recyclable by melting; thermosets (epoxy, phenolic) cross-link permanently and suit high-temperature electrical insulators. Creep—slow strain under constant stress—limits polymer gears at elevated temperature.",
          "Ceramics excel in compression and heat but are brittle in tension; flaw size controls strength. Cutting tools, turbine blades (thermal barrier coatings on superalloys), and bearings use ceramics selectively.",
          "Fiber-reinforced composites laminate plies at angles to tailor anisotropic stiffness. Tension along fibers is strong; transverse shear is weak. Manufacturing defects (voids, ply wrinkles) dominate fatigue life.",
          "Material data sheets quote fiber direction properties; FEA must use orthotropic models, not isotropic guesses.",
        ],
        {
          bulletPoints: [
            "Thermoplastic vs. thermoset — processing and reuse",
            "Creep and relaxation — time-dependent polymers",
            "Ceramic brittleness — flaw-sensitive tensile strength",
            "Composite ply angles — [0/±45/90] layups",
            "Anisotropy — direction-dependent moduli",
          ],
        }
      ),
      section(
        "materials-s5",
        "4.5 Failure modes, fatigue, and sustainable material choices",
        [
          "Ductile failure shows necking and large plastic strain; brittle failure is sudden with little warning. Stress concentrations from holes and fillets raise local stress above nominal.",
          "Fatigue cracks grow under cyclic stress below yield. S-N curves (stress vs. cycles to failure) and fracture mechanics (Paris law) guide life prediction. Shot peening and surface finish improve fatigue life.",
          "Corrosion couples electrochemistry with mechanical notch sensitivity. Galvanic pairs (steel bolt in aluminum) need isolation or coating.",
          "Sustainable selection weighs recycled content, energy to produce, and end-of-life separation. Lightweighting reduces use-phase energy but may increase embodied energy—life-cycle assessment resolves the trade.",
        ],
        {
          bulletPoints: [
            "Stress concentration — K_t amplifies local σ",
            "Fatigue — cyclic loading below yield still fails",
            "Fracture toughness — K_IC for crack growth resistance",
            "Corrosion — galvanic, pitting, SCC mechanisms",
            "LCA inputs — embodied vs. operational energy",
          ],
        }
      ),
    ],
    {
      subtitle: "Properties, processing, and failure mechanisms that govern every part on a BOM",
      learningObjectives: [
        "Compare material classes and apply a requirements-driven selection process",
        "Interpret stress-strain data and elastic constants",
        "Describe heat treatment and common alloy systems",
        "Recognize fatigue, corrosion, and sustainability trade-offs",
      ],
      chapterSummary:
        "Materials engineering links chemistry and processing to measurable properties, then to failure modes that appear only after thousands of cycles or years in service.",
      keyConcepts: [
        "Stress-strain and elastic moduli",
        "Steel and aluminum processing",
        "Polymers, ceramics, composites",
        "Fatigue and corrosion",
      ],
      realWorldRelevance:
        "Wrong material or temper has caused more field failures than arithmetic errors in freshman statics.",
    }
  ),

  chapter(
    "thermodynamics",
    5,
    "Thermodynamics Essentials",
    [
      section(
        "thermodynamics-s1",
        "5.1 Systems, properties, and the state postulate",
        [
          "Thermodynamics models energy transfer through systems: closed (fixed mass), open (control volume), isolated (no mass or energy crossing boundary). Intensive properties (T, P, ρ) do not depend on system size; extensive properties (U, H, m) scale with mass.",
          "The state postulate for simple compressible substances: two independent intensive properties fix the state. A steam table lookup needs any two of P, T, v, x (quality), etc., for water.",
          "Equations of state relate P, v, T; ideal gas Pv = RT works for many gases at low pressure. Real gases deviate near condensation and high pressure—use compressibility factor Z.",
          "HVAC, power plants, and engines all begin with control-volume bookkeeping. Confusing extensive totals with intensive averages ruins energy balances.",
        ],
        {
          bulletPoints: [
            "System types — closed, open, isolated",
            "Intensive vs. extensive — T,P vs. U,H,m",
            "State postulate — two properties fix state (simple substance)",
            "Ideal gas — Pv = RT, R specific to gas",
            "Phase change — quality x for liquid-vapor mix",
          ],
          citations: [
            {
              source: "NIST Chemistry WebBook — thermophysical properties",
              url: "https://webbook.nist.gov/chemistry/",
              note: "Fluid property data for calculations",
            },
          ],
        }
      ),
      section(
        "thermodynamics-s2",
        "5.2 First law and control-volume energy balances",
        [
          "The first law: energy is conserved. For a closed system ΔU = Q − W (sign conventions vary—always check your textbook’s heat-in, work-by-system convention). Internal energy U is a state function; heat Q and work W are path-dependent.",
          "Open-system steady-flow energy equation simplifies to ṁ[(h₂ − h₁) + ½(v₂² − v₁²) + g(z₂ − z₁)] = Q̇ − Ẇ_shaft for many devices (turbines, pumps, compressors) where changes in kinetic and potential energy are small compared to enthalpy difference.",
          "Enthalpy h = u + Pv convenient for flow work. Compressors consume work to raise pressure; turbines extract work as fluid expands.",
          "Boiler house engineers and chiller technicians live on enthalpy tables. A few kJ/kg error across a million kilograms per hour is real money.",
        ],
        {
          bulletPoints: [
            "Closed system — ΔU = Q − W",
            "Enthalpy h = u + Pv — flow processes",
            "Steady-flow — shaft work Ẇ_shaft and heat Q̇ rates",
            "Devices — compressor (+W), turbine (−W to fluid)",
            "Sign discipline — document convention on each problem",
          ],
        }
      ),
      section(
        "thermodynamics-s3",
        "5.3 Second law, entropy, and efficiency limits",
        [
          "The second law states spontaneous processes move toward thermodynamic equilibrium and that entropy of an isolated system never decreases. Clausius inequality for cycles: ∮ δQ/T ≤ 0. Carnot showed no heat engine can exceed η_Carnot = 1 − T_cold/T_hot using absolute temperatures.",
          "Entropy is a state property; irreversibilities (friction, mixing, unrestrained expansion) generate entropy and reduce available work. Isentropic idealizations (s = constant) bracket real turbine and compressor performance via isentropic efficiency.",
          "Exergy (availability) measures useful work potential relative to environment dead state. Waste heat recovery projects succeed when exergy destroyed is large enough to justify capital cost.",
          "Marketing claims of “100% efficient heaters” confuse energy forms; heat pumps move heat with COP > 1 because work input is small compared to delivered thermal energy—not a violation of thermodynamics.",
        ],
        {
          bulletPoints: [
            "Entropy S — state property; ds for reversible processes",
            "Carnot limit — η ≤ 1 − T_L/T_H (Kelvin)",
            "Irreversibility — friction, throttling, mixing increase s_gen",
            "Isentropic efficiency — real vs. ideal device comparison",
            "COP — heat pump Q_H / W_in",
          ],
        }
      ),
      section(
        "thermodynamics-s4",
        "5.4 Power cycles and refrigeration cycles",
        [
          "Rankine cycle: boiler → turbine → condenser → pump for steam power. Superheat and reheat improve efficiency and reduce moisture erosion in low-pressure turbine stages.",
          "Brayton cycle: compressor → combustor → turbine for gas turbines and jet engines. Regeneration and intercooling modify real plants.",
          "Otto and Diesel cycles model spark-ignition and compression-ignition engines with approximate closed cycles; real engines add valve timing, turbulence, and emissions controls.",
          "Vapor-compression refrigeration: compressor → condenser → expansion valve → evaporator. Refrigerant choice balances COP, pressure, toxicity, and global warming potential (GWP).",
        ],
        {
          bulletPoints: [
            "Rankine — steam electric generation backbone",
            "Brayton — gas turbines, aircraft propulsion",
            "Otto/Diesel — automotive IC engine approximations",
            "Refrigeration — COP_R = Q_L / W_in",
            "Refrigerants — phasedown of high-GWP species (regulatory context)",
          ],
        }
      ),
      section(
        "thermodynamics-s5",
        "5.5 Real gases, mixtures, and psychrometrics preview",
        [
          "Real gas departures matter near the critical point and in high-pressure pipelines. Compressibility charts and cubic equations (Peng-Robinson) support process design.",
          "Gas mixtures use partial pressures and Dalton’s law; air is ~21% O₂, 79% N₂ by mole for combustion estimates. Humid air adds water vapor partial pressure; relative humidity RH = P_v/P_sat(T).",
          "Psychrometric charts tie dry-bulb temperature, humidity ratio, enthalpy, and specific volume for HVAC calculations. Cooling coils condense moisture when surface temperature drops below dew point.",
          "Building mechanical engineers coordinate thermodynamics with fluid flow and heat transfer chapters—comfort is a coupled problem, not temperature alone.",
        ],
        {
          bulletPoints: [
            "Z factor — Pv = ZRT real gas correction",
            "Partial pressure — P_i = y_i P_total",
            "Psychrometrics — humidity ratio, enthalpy of moist air",
            "Dew point — condensation onset temperature",
            "HVAC coupling — air-side and water-side loops",
          ],
        }
      ),
    ],
    {
      subtitle: "Energy accounting, direction of processes, and the cycles behind power and cooling",
      learningObjectives: [
        "Define thermodynamic systems and properties with correct units",
        "Apply the first law to closed and steady-flow processes",
        "Explain entropy, Carnot limits, and isentropic efficiency",
        "Sketch Rankine, Brayton, and refrigeration cycles at a survey level",
      ],
      chapterSummary:
        "Thermodynamics sets non-negotiable limits on energy conversion and provides the language for power generation, engines, and refrigeration.",
      keyConcepts: [
        "State properties and equations of state",
        "First law balances",
        "Second law and entropy",
        "Power and refrigeration cycles",
      ],
      realWorldRelevance:
        "Plant efficiency debates, chiller plant commissioning, and EV thermal management all assume thermodynamic literacy.",
    }
  ),

  chapter(
    "fluid-mechanics",
    6,
    "Fluid Mechanics Basics",
    [
      section(
        "fluid-mechanics-s1",
        "6.1 Fluid properties, pressure, and hydrostatics",
        [
          "A fluid deforms continuously under shear stress—liquids and gases both qualify. Density ρ (kg/m³) and specific weight γ = ρg (N/m³) appear in buoyancy and manometer problems. Viscosity μ (Pa·s) resists relative motion; it drops with temperature in liquids and rises in gases.",
          "Pressure is normal force per area, scalar in a static fluid at a point. Hydrostatic law: dP/dy = −ρg in vertical column (y up). A tank gauge reads pressure above atmospheric; absolute pressure P_abs = P_gauge + P_atm.",
          "Manometers translate pressure difference to liquid column height Δh: ΔP = ρgΔh. Units matter: 1 kPa ≈ 10.2 cm water column at room temperature.",
          "Piping designers and divers both use hydrostatics. A submerged hatch sees net force from pressure increasing with depth—why submarines and dam gates are structural mechanics plus fluids.",
        ],
        {
          bulletPoints: [
            "Density ρ, specific weight γ = ρg",
            "Viscosity — dynamic μ, kinematic ν = μ/ρ",
            "Gauge vs. absolute pressure",
            "Hydrostatic — P₂ − P₁ = −ρg(y₂ − y₁)",
            "Buoyancy — F_b = ρ_fluid g V_displaced",
          ],
          citations: [
            {
              source: "MIT OpenCourseWare — Fluid Mechanics",
              url: "https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/",
              note: "Graduate fluid survey; introductory concepts align",
            },
          ],
        }
      ),
      section(
        "fluid-mechanics-s2",
        "6.2 Bernoulli equation and pipe continuity",
        [
          "For steady, incompressible, inviscid flow along a streamline, Bernoulli’s equation: P/ρ + ½v² + gz = constant. It is an energy per unit mass statement—pressure energy, kinetic energy, potential energy trade without viscous loss along that ideal streamline.",
          "Mass continuity for a duct: ṁ = ρAv = constant (incompressible: A₁v₁ = A₂v₂). Venturi meters use area change and pressure tap difference to infer velocity.",
          "Real pipes add major losses (fittings, valves) and minor losses (entrance, exit) via Darcy-Weisbach h_f = f (L/D)(v²/2g) with friction factor f from Reynolds number and roughness.",
          "Pump curves intersect system curves at operating point. Cavitation occurs when local pressure drops below vapor pressure—damaging impellers in hot water and hydraulics.",
        ],
        {
          bulletPoints: [
            "Bernoulli — along streamline; add losses between stations",
            "Continuity — A v = constant (incompressible duct)",
            "Reynolds number — Re = ρvD/μ",
            "Darcy-Weisbach — friction head loss",
            "Cavitation — P_local < P_vapor",
          ],
        }
      ),
      section(
        "fluid-mechanics-s3",
        "6.3 Viscous flow, boundary layers, and drag",
        [
          "No-slip boundary condition: fluid velocity at a solid wall equals wall velocity (usually zero). A boundary layer grows from the leading edge; laminar-turbulent transition depends on Re.",
          "Drag on bodies combines friction drag (shear on surface) and pressure drag (wake separation). Bluff bodies (spheres, cubes) separate early; streamlined shapes delay separation to reduce pressure drag.",
          "Lift on airfoils arises from pressure distribution and circulation—not from equal transit time myth. Angle of attack increases lift until stall, when separation destroys lift and raises drag.",
          "Wind tunnel and CFD teams report coefficients C_D, C_L referenced to area and dynamic pressure q = ½ρv². Scaling laws require matching Re between model and prototype when viscous effects dominate.",
        ],
        {
          bulletPoints: [
            "Boundary layer — thin region of velocity gradient",
            "Skin friction vs. pressure drag",
            "Lift — pressure difference; stall at high α",
            "Drag coefficient — D = ½ρv² C_D A_ref",
            "Similitude — Re matching for model tests",
          ],
        }
      ),
      section(
        "fluid-mechanics-s4",
        "6.4 Pumps, fans, and piping networks",
        [
          "Centrifugal pumps add head H (m of fluid) versus flow rate Q on a performance curve. Net positive suction head available (NPSHa) must exceed NPSH required (NPSHr) to avoid cavitation at the eye of the impeller.",
          "Fans move low-pressure air in HVAC; blowers handle higher pressure ratios. System curve sums static head, friction, and component losses; operating point is intersection with machine curve.",
          "Parallel pumps increase flow at shared head; series pumps increase head at shared flow—only if hydraulically compatible. Closed valves on a running pump cause dead-head damage.",
          "Facility engineers balance pipe diameter (capital cost, friction energy) against velocity limits (noise, erosion). ASME B31 codes govern pressure piping design in industry—beyond this survey, but the hook for specialists.",
        ],
        {
          bulletPoints: [
            "Pump head H — energy per unit weight (m)",
            "NPSH — cavitation margin at suction",
            "System curve — ΣK v²/2g + elevation",
            "Parallel/series — operating point shifts",
            "Pipe sizing — velocity 1–3 m/s water rule-of-thumb starting point",
          ],
        }
      ),
      section(
        "fluid-mechanics-s5",
        "6.5 Aerodynamics and HVAC fluid applications",
        [
          "External aerodynamics shapes vehicles and buildings: drag reduction, downforce on race cars, wind loads on structures. Internal flows dominate ducts—pressure drop budgets determine fan power.",
          "HVAC air handlers mix filtration, heating/cooling coils, and humidification. Air-side economizers save energy when outdoor air is cool and dry enough.",
          "Hydraulic actuators use incompressible oil for high force, slow motion. Pneumatics use compressible air for fast, compliant motion with lower force density.",
          "Multiphase flow (steam-water, oil-gas) appears in energy and process plants—require specialists. Survey-level fluency is knowing when single-phase Bernoulli is invalid.",
        ],
        {
          bulletPoints: [
            "Vehicle aero — drag, lift, cooling airflow",
            "Duct design — friction, fittings, balancing",
            "Hydraulics vs. pneumatics — oil vs. air",
            "Wind engineering — pressure coefficients on facades",
            "Multiphase caution — beyond ideal incompressible models",
          ],
        }
      ),
    ],
    {
      subtitle: "Pressure, flow, and the losses that determine pump and fan power",
      learningObjectives: [
        "Apply hydrostatics and manometer relationships",
        "Use Bernoulli and continuity with loss terms in pipes",
        "Explain boundary layers, drag, and basic lift",
        "Read pump/fan operating points against system curves",
      ],
      chapterSummary:
        "Fluid mechanics links pressure and velocity fields to practical piping, aerodynamic, and HVAC problems—with clear limits on ideal-flow assumptions.",
      keyConcepts: [
        "Hydrostatic pressure",
        "Bernoulli and continuity",
        "Viscous drag and lift",
        "Pumping and system curves",
      ],
      realWorldRelevance:
        "Undersized ducts and cavitating pumps are among the most common commissioning defects in buildings and plants.",
    }
  ),

  chapter(
    "heat-transfer",
    7,
    "Heat Transfer",
    [
      section(
        "heat-transfer-s1",
        "7.1 Conduction and Fourier’s law",
        [
          "Conduction transfers heat through solids (and stagnant fluids) via molecular interactions. Fourier’s law: q″ = −k ∇T, heat flux proportional to negative temperature gradient. For steady 1D plane wall: q = kA(T_hot − T_cold)/L.",
          "Thermal conductivity k (W/m·K) varies with material and temperature. Metals conduct well; foams and aerogels poorly. Thermal resistance R_th = L/(kA) stacks in series like electrical resistors.",
          "Transient conduction (Biot number Bi = hL/k) tells whether temperature inside a body is uniform. Small Bi means lumped-capacitance models suffice.",
          "Electronics cooling starts with conduction from die to spreader. A thin interface material fills air gaps; contact resistance can dominate if torque specs are ignored.",
        ],
        {
          bulletPoints: [
            "Fourier — q″ = −k dT/dx (1D)",
            "Thermal resistance — R = L/(kA)",
            "Composite wall — sum R_th layers",
            "Biot number — internal vs. surface resistance",
            "Contact resistance — interfaces and TIMs",
          ],
        }
      ),
      section(
        "heat-transfer-s2",
        "7.2 Convection: Newton’s law of cooling",
        [
          "Convection combines conduction in a fluid near a wall with bulk fluid motion. Newton’s law of cooling: q″ = h(T_surface − T_fluid), with h (W/m²·K) depending on flow regime and geometry.",
          "Forced convection (fans, pumps) raises h with velocity. Natural convection uses buoyancy from density differences; hot surfaces facing up lose heat faster than downward-facing in many cases.",
          "Dimensionless groups correlate data: Nusselt Nu = hL/k, Reynolds Re, Prandtl Pr = μc_p/k. Dittus-Boelter and similar correlations apply in turbulent pipe flow within stated ranges.",
          "HVAC coil sizing and heat sink fan selection are convection problems disguised as catalog shopping—underlying h must match airflow and geometry.",
        ],
        {
          bulletPoints: [
            "Newton’s law — q″ = h ΔT",
            "Forced vs. natural convection",
            "Nu, Re, Pr — correlation framework",
            "Boundary layer — thin thermal region",
            "Fin efficiency — extend surface area",
          ],
        }
      ),
      section(
        "heat-transfer-s3",
        "7.3 Thermal radiation fundamentals",
        [
          "Radiation transports energy by electromagnetic waves; it does not require a medium. Blackbody emissive power E_b = σT⁴ (Stefan-Boltzmann, T in kelvin). Real surfaces scale by emissivity ε < 1.",
          "View factors geometrically couple radiating surfaces in enclosures. Radiant heating in buildings and furnace design use radiation networks.",
          "Solar loads on structures combine direct, diffuse, and reflected radiation with changing sun angles. Windows and low-emissivity coatings manage radiative gains.",
          "Fire safety and human comfort near hot equipment require radiation awareness—not just air temperature readings.",
        ],
        {
          bulletPoints: [
            "Stefan-Boltzmann — E = εσT⁴",
            "Emissivity ε — surface property 0–1",
            "View factor — F₁₂ geometric coupling",
            "Solar gain — orientation and shading",
            "Combined mode — convection + radiation at surface",
          ],
        }
      ),
      section(
        "heat-transfer-s4",
        "7.4 Heat exchangers and LMTD",
        [
          "Heat exchangers transfer heat between fluids without mixing: shell-and-tube, plate, counterflow, parallel flow. Overall heat transfer coefficient U combines conduction and convection resistances: 1/U = 1/h_hot + R_wall + 1/h_cold.",
          "Log mean temperature difference ΔT_lm drives q = UA ΔT_lm for steady flow heat exchangers. Effectiveness-NTU method helps when outlet temperatures are unknown a priori.",
          "Fouling layers on tubes add resistance over time—maintenance schedules matter for plant capacity. Refrigeration evaporators and condensers are heat exchangers with phase change on one side.",
          "Process engineers size exchangers for pinch temperature approach; too small approach saves area but explodes required area nonlinearly as approach shrinks.",
        ],
        {
          bulletPoints: [
            "UA method — q = UA ΔT_lm",
            "Counterflow — higher average ΔT than parallel",
            "Fouling factor — degraded U over service",
            "Phase change — boiling/condensation high h",
            "NTU-effectiveness — alternative design chart",
          ],
        }
      ),
      section(
        "heat-transfer-s5",
        "7.5 Thermal management in products and systems",
        [
          "Battery packs, CPUs, and LED arrays need heat paths to ambient. Spreaders, heat pipes, liquid cold plates, and phase-change materials spread or store heat temporarily.",
          "Thermal interface materials (grease, pads) reduce contact resistance. Torque patterns on screws matter as much as material k.",
          "Human thermal comfort combines air temperature, radiant temperature, humidity, and air speed—ASHRAE comfort zone charts integrate heat transfer modes.",
          "Failure modes: thermal runaway in batteries, warped plastic housings from hot spots, and lubricant breakdown in bearings from overheated shafts.",
        ],
        {
          bulletPoints: [
            "Heat path — junction → spreader → fin → air",
            "Heat pipes — vapor-liquid loop high effective k",
            "Cold plates — liquid cooling for dense electronics",
            "Comfort — radiant asymmetry causes complaints",
            "Runaway — positive feedback temperature loops",
          ],
          citations: [
            {
              source: "ASHRAE — thermal comfort standards",
              url: "https://www.ashrae.org/",
              note: "HVAC human comfort and building energy context",
            },
          ],
        }
      ),
    ],
    {
      subtitle: "How heat moves by conduction, convection, and radiation—and how engineers move it on purpose",
      learningObjectives: [
        "Solve steady 1D conduction and thermal resistance networks",
        "Apply Newton’s law of cooling and recognize correlation limits",
        "Explain radiation scaling with temperature and emissivity",
        "Size heat exchangers conceptually with UA and ΔT_lm",
      ],
      chapterSummary:
        "Heat transfer unifies three modes into design tools for exchangers, electronics cooling, buildings, and safety limits on hot surfaces.",
      keyConcepts: [
        "Fourier conduction",
        "Convection coefficient h",
        "Radiation σT⁴ scaling",
        "Heat exchanger UA",
      ],
      realWorldRelevance:
        "Thermal failures are subtle—products die slowly until a summer day or fast charge pushes past the heat path margin.",
    }
  ),

  chapter(
    "machine-elements",
    8,
    "Machine Elements and Mechanisms",
    [
      section(
        "machine-elements-s1",
        "8.1 Shafts, keys, and fits",
        [
          "Shafts carry torque and bending moment. Diameter sizing combines stress (von Mises or separate bending/torsion formulas) with deflection limits to protect bearings and gears. Stress concentrations at shoulders need fillet radii documented on drawings.",
          "Keys and splines transmit torque between hub and shaft; set screws alone are poor for high torque. Interference fits (press, shrink) provide friction torque capacity but need assembly force calculations.",
          "ISO and ANSI fit systems (clearance, transition, interference) standardize hole/shaft tolerances. A H7/g6 running fit slides; an H7/p6 press may need arbor press or heat/shrink assembly.",
          "Maintenance manuals specify puller tools and heating limits—ignoring them gallies expensive hubs.",
        ],
        {
          bulletPoints: [
            "Combined loading — bending + torsion on shafts",
            "Fillet radius — reduces K_t at diameter change",
            "Keys/splines — torque transmission features",
            "Fit classes — clearance vs. interference",
            "Deflection limits — bearing alignment",
          ],
        }
      ),
      section(
        "machine-elements-s2",
        "8.2 Gears, belts, and chain drives",
        [
          "Spur gears mesh with involute profiles to maintain constant velocity ratio; center distance and backlash are controlled. Helical gears quiet operation and carry more load; bevel gears turn corners between intersecting shafts.",
          "Gear trains multiply torque: speed ω_out = ω_in / (N_total ratio). Efficiency losses heat oil baths—thermal design couples here.",
          "V-belts and timing belts slip or stretch differently; timing belts synchronize camshafts. Roller chain drives bicycles and conveyors with lubrication and tension maintenance.",
          "AGMA and ISO gear rating standards address pitting, bending fatigue, and scuffing—use vendor software or specialists for production sizing, not sketchpad guesses alone.",
        ],
        {
          bulletPoints: [
            "Involute profile — conjugate meshing",
            "Module/pitch — size teeth consistently",
            "Backlash — clearance for thermal expansion",
            "Belt types — V-belt, synchronous, flat",
            "Lubrication — oil viscosity grade matters",
          ],
        }
      ),
      section(
        "machine-elements-s3",
        "8.3 Bearings, fasteners, and bolted joints",
        [
          "Rolling-element bearings (ball, roller) catalog life L10 in millions of revolutions at rated load. Mounting fits control inner ring rotation on shaft. Plain bearings (bushings) suit oscillating or contaminated environments with proper lubrication.",
          "Bolts clamp joints in tension; preload prevents separation under external tensile load. Torque tables approximate preload from friction coefficients—calibration with load cells improves critical joints.",
          "Thread locking compounds, washers, and bolt grades (metric 8.8, 10.9) must match environment and corrosion. Gasketed flanges distribute pressure uniformly—bolt pattern tightening sequences star patterns to avoid leaks.",
          "NASA and bridge failures have traced to loose or corroded fasteners—torque audit trails matter.",
        ],
        {
          bulletPoints: [
            "L10 life — bearing selection metric",
            "Preload — tension, not torque alone",
            "Bolt grade — yield/tensile ratings",
            "Joint separation — external load vs. clamp",
            "Tightening sequence — flanges and wheels",
          ],
        }
      ),
      section(
        "machine-elements-s4",
        "8.4 Linkages, cams, and power screws",
        [
          "Four-bar linkages map input crank angle to output rocker motion; Grashof condition predicts rotatability. Dead positions occur when links align straight—need escape drivers.",
          "Cams convert rotary input to prescribed follower lift for valve timing or packaging motions. Pressure angle and curvature radius limit jamming and surface stress.",
          "Power screws (Acme, ball screw) convert rotation to linear motion with mechanical advantage η depending on friction angle. Ball screws recirculate balls for high efficiency positioning stages.",
          "Automation engineers pair servos with ball screws for CNC axes; self-locking Acme screws hold loads without power but are inefficient.",
        ],
        {
          bulletPoints: [
            "Four-bar — Grashof criterion",
            "Cam profile — displacement, velocity, acceleration laws",
            "Pressure angle — side thrust on follower",
            "Ball screw — high η linear actuation",
            "Backdriving — can screw fall under load?",
          ],
        }
      ),
      section(
        "machine-elements-s5",
        "8.5 Lubrication, wear, and surface engineering",
        [
          "Elastohydrodynamic and hydrodynamic films separate metal surfaces in bearings when relative motion builds pressure in oil wedges. Boundary lubrication remains when films are thin—additives reduce wear.",
          "Wear modes: adhesive, abrasive, corrosive, surface fatigue (pitting). Hardness matching and filtration extend life.",
          "Surface treatments—carburizing, nitriding, coatings (DLC, chrome)—tailor friction and corrosion. Texture and honing on cylinder bores control oil retention.",
          "Reliability engineers tie lubrication PM schedules to contamination control (ISO cleanliness codes for hydraulic oil).",
        ],
        {
          bulletPoints: [
            "Hydrodynamic film — speed builds pressure",
            "Boundary regime — additives (ZDDP context)",
            "Wear particles — filter sizing",
            "Surface hardness — case depth measurements",
            "Maintenance — oil analysis trending",
          ],
        }
      ),
    ],
    {
      subtitle: "The parts that connect power sources to useful motion—reliably and maintainably",
      learningObjectives: [
        "Describe shaft, key, and fit functions in power transmission",
        "Compare gear, belt, and chain drives at a design level",
        "Explain bearing life and bolted-joint preload concepts",
        "Recognize linkage, cam, and screw mechanisms in machines",
      ],
      chapterSummary:
        "Machine elements are the catalog of practical connections—how torque travels, how joints stay tight, and how surfaces survive millions of cycles.",
      keyConcepts: [
        "Shafts and fits",
        "Gears and flexible drives",
        "Bearings and bolted joints",
        "Linkages and cams",
        "Lubrication regimes",
      ],
      realWorldRelevance:
        "Most industrial downtime traces to bearings, seals, and fasteners—not exotic control theory.",
    }
  ),

  chapter(
    "manufacturing",
    9,
    "Manufacturing Processes",
    [
      section(
        "manufacturing-s1",
        "9.1 Casting, molding, and forming",
        [
          "Casting pours molten metal into molds—sand casting for large parts, die casting for aluminum high volume. Shrinkage, porosity, and draft angles drive DFM rules.",
          "Injection molding melts polymer into steel molds with cooling channels controlling cycle time. Warping comes from uneven shrinkage; gate location steers fill patterns.",
          "Forming processes—rolling, forging, extrusion, stamping—shape solid stock plastically. Work hardening raises strength but may require annealing between stages.",
          "Process choice locks cost structure early. A machined-from-solid bracket wastes material compared to a near-net forged blank if volumes justify tooling.",
        ],
        {
          bulletPoints: [
            "Sand casting — low tooling, rougher tolerance",
            "Die casting — high volume aluminum/zinc",
            "Injection molding — cycle time = cooling + fill",
            "Forging — grain flow improves fatigue",
            "DFM — draft, radii, uniform wall thickness",
          ],
        }
      ),
      section(
        "manufacturing-s2",
        "9.2 Machining and CNC programming",
        [
          "Machining removes material with cutting tools—turning (lathe), milling, drilling, grinding. Speeds and feeds depend on tool material, workpiece hardness, and coolant. Surface finish Ra (μm) links to feed and nose radius.",
          "CNC programs use G-code for machine motion; CAM software generates toolpaths from CAD. Five-axis machining tilts the tool to reach deep pockets without multiple setups.",
          "Tool wear and chatter limit metal removal rates. Titanium and nickel superalloys work-harden—rigid setups and correct toolpaths matter.",
          "Shop travelers list ops sequence, fixtures, and inspection points. Engineers who never visit the floor specify impossible tolerances.",
        ],
        {
          bulletPoints: [
            "Turning vs. milling — rotational vs. prismatic",
            "G-code — linear, arc, tool change blocks",
            "CAM — post-processor machine-specific output",
            "Ra surface finish — measurement along lay",
            "Setup reduction — fixtures and datums",
          ],
        }
      ),
      section(
        "manufacturing-s3",
        "9.3 Welding, brazing, and adhesive joining",
        [
          "Fusion welding (MIG, TIG, laser) melts base metal with filler; heat-affected zone properties change. Distortion control uses tack sequences, fixturing, and intermittent welds.",
          "Brazing and soldering melt filler below base metal melting point—good for dissimilar metals if flux and capillary gaps are controlled.",
          "Structural adhesives spread load over area; surface prep (abrasion, primer) defines bond strength. Peel stress still favors mechanical fasteners in many designs.",
          "Weld symbols on drawings (AWS A2.4) specify type, size, and finish. NDT (ultrasonic, radiographic) verifies critical joints.",
        ],
        {
          bulletPoints: [
            "MIG/TIG — arc processes for steel/aluminum",
            "HAZ — heat-affected zone property shift",
            "Weld symbol — fillet, groove, all-around",
            "NDT — UT, RT for defect detection",
            "Adhesive — lap shear vs. peel weakness",
          ],
        }
      ),
      section(
        "manufacturing-s4",
        "9.4 Additive manufacturing in mechanical design",
        [
          "Powder-bed fusion (SLM/DMLS) builds metal parts layer by layer with support structures for overhangs. Orientation sets anisotropic properties along build direction.",
          "FDM/FFF extrudes polymer filament for prototypes and tooling. SLA resin prints fine features for form studies.",
          "Design for additive manufacturing exploits lattice infill, internal cooling channels, and part consolidation impossible to machine as one piece.",
          "Post-processing—HIP for metals, stress relief, machining of bearing surfaces—often required for production acceptance.",
        ],
        {
          bulletPoints: [
            "PBF metal — powder, laser, inert atmosphere",
            "Anisotropy — build direction strength difference",
            "Supports — removed after build",
            "FDM — prototype, fixture, bracket low load",
            "Qualification — aerospace/medical need process control",
          ],
        }
      ),
      section(
        "manufacturing-s5",
        "9.5 Tolerances, GD&T, and inspection",
        [
          "Dimensional tolerances ± control linear size; geometric tolerances control form, orientation, and location relative to datums. Position tolerance on holes often uses datum reference frame A|B|C.",
          "MMC bonus tolerance allows more positional deviation when feature is at maximum material—functional gaging saves cost.",
          "CMMs (coordinate measuring machines) sample points to compare to CAD; SPC charts track drift before scrap piles grow.",
          "Metrology ties to NIST-traceable gage blocks and calibration intervals. A drawing without measurement method is incomplete.",
        ],
        {
          bulletPoints: [
            "GD&T — datums, position, flatness, profile",
            "MMC/LMC — material condition modifiers",
            "CMM — point cloud vs. CAD",
            "SPC — X-bar, R charts for processes",
            "Calibration — traceable standards",
          ],
          citations: [
            {
              source: "NIST — dimensional metrology",
              url: "https://www.nist.gov/pml/productsservices/physical-measurement-laboratory",
              note: "Traceable length standards",
            },
          ],
        }
      ),
    ],
    {
      subtitle: "How designs become physical parts—and how variation is controlled",
      learningObjectives: [
        "Compare casting, molding, forming, and machining for typical parts",
        "Describe CNC workflow from CAD to G-code",
        "Interpret basic weld symbols and joining trade-offs",
        "Explain additive processes and GD&T inspection roles",
      ],
      chapterSummary:
        "Manufacturing translates geometry into processes with tolerances, joints, and inspection that make or break cost and reliability.",
      keyConcepts: [
        "Process selection",
        "Machining and CNC",
        "Joining methods",
        "Additive manufacturing",
        "GD&T and metrology",
      ],
      realWorldRelevance:
        "Design engineers who understand manufacturing get fewer redlines from suppliers and faster prototype turns.",
    }
  ),

  chapter(
    "design-process",
    10,
    "Engineering Design Process",
    [
      section(
        "design-process-s1",
        "10.1 Requirements, constraints, and problem framing",
        [
          "Design begins before CAD: stakeholders list functions, environments, regulations, and metrics (mass, efficiency, noise, cost). A requirement without a verification method is a wish.",
          "Constraints bound the solution space—packaging envelope, voltage available, service interval, prohibited materials. Trade space documents record which constraints are negotiable with customer approval.",
          "House of Quality (QFD) links customer needs to engineering characteristics—helps teams avoid optimizing the wrong parameter.",
          "Problem framing prevents elegant answers to wrong questions. A “cooling problem” might be a airflow problem, a control problem, or a heat source reduction problem.",
        ],
        {
          bulletPoints: [
            "Functional requirements — measurable verbs",
            "Constraints — hard vs. soft",
            "Verification — test, analysis, inspection method",
            "Stakeholders — users, manufacturing, service, regulators",
            "Problem statement — single paragraph scope",
          ],
        }
      ),
      section(
        "design-process-s2",
        "10.2 Concept generation and selection",
        [
          "Brainstorming and morphological charts explore combinations—do not marry the first sketch. Concepts should be divergent before convergent scoring.",
          "Pugh matrices and weighted decision tables compare alternatives against a reference concept. Criteria weights should reflect requirements, not loudest voice in the room.",
          "Proof-of-principle tests cheaply kill bad ideas: cardboard layouts, FEA on one load case, breadboard circuits. Fail fast saves tooling dollars.",
          "Intellectual property scans avoid designing into blocked patents; freedom-to-operate reviews belong before major tooling spend.",
        ],
        {
          bulletPoints: [
            "Morphological chart — function vs. means",
            "Pugh matrix — better/same/worse vs. datum",
            "Weighted scoring — transparent criteria",
            "Prototype tiers — foam, 3D print, pilot tool",
            "IP awareness — patent landscape early",
          ],
        }
      ),
      section(
        "design-process-s3",
        "10.3 Detailed design, analysis, and verification plans",
        [
          "Detailed design freezes interfaces: bolt patterns, connector locations, cable lengths. Interface control documents (ICDs) prevent teams from drifting assumptions.",
          "Analysis plan lists which loads, which standards, which safety factors, and which software models. Independent calculation checks catch order-of-magnitude errors.",
          "Verification and validation (V&V): verification asks “did we build it right?” (requirements met); validation asks “did we build the right thing?” (customer need). Test plans include pass/fail, sample size, and environment.",
          "Design reviews gate funding—preliminary (PDR), critical (CDR). Bring data, risks, and open items, not slides without margins.",
        ],
        {
          bulletPoints: [
            "ICD — cross-team interface agreement",
            "Load cases — operating, environmental, misuse",
            "Safety factor — code, test, or company policy",
            "V&V — verification vs. validation definitions",
            "PDR/CDR — risk-ranked open issues",
          ],
        }
      ),
      section(
        "design-process-s4",
        "10.4 Design for manufacture and assembly (DFM/A)",
        [
          "DFM reduces part count, simplifies tooling, and avoids tight tolerances without function. Snap fits, self-locating features, and standard fasteners beat custom machined clips at scale.",
          "DFA minimizes assembly motions and orientations—symmetric parts prevent backwards installation; poke-yoke features block wrong assembly.",
          "Toler stack analyses sum variations statistically (RSS) or worst-case—choose based on risk. A shaft that fits only nominal CAD will bind in production.",
          "Supplier involvement early captures material lead times and MOQ (minimum order quantity) realities.",
        ],
        {
          bulletPoints: [
            "Part consolidation — fewer interfaces",
            "Poke-yoke — mistake-proof assembly",
            "Tolerance stack — 1D chain example first",
            "Standard parts — catalog hardware reduces cost",
            "Supplier DFM review — before tooling release",
          ],
        }
      ),
      section(
        "design-process-s5",
        "10.5 Risk, reliability, and lifecycle thinking",
        [
          "FMEA (Failure Mode and Effects Analysis) ranks severity, occurrence, and detection to prioritize mitigations. Design FMEA differs from process FMEA but shares the RPN mindset.",
          "Fault trees and reliability block diagrams model system availability. Redundancy trades cost and weight for uptime.",
          "Lifecycle cost includes energy, maintenance, and disposal—not only piece price. A cheap pump with high seal replacement labor loses on ten-year ownership.",
          "Configuration management tracks part revisions through field service—mixing old and new bracket holes causes line stops.",
        ],
        {
          bulletPoints: [
            "DFMEA — design failure modes",
            "Severity × occurrence × detection — risk priority",
            "MTBF/MTTR — reliability metrics context",
            "Lifecycle cost — capex + opex",
            "CM — revision control through service",
          ],
        }
      ),
    ],
    {
      subtitle: "Structured creativity—from voice of customer to verified, manufacturable products",
      learningObjectives: [
        "Write measurable requirements with verification methods",
        "Run concept selection with explicit criteria",
        "Plan V&V and design reviews with risk registers",
        "Apply DFM/A and tolerance thinking to detailed design",
      ],
      chapterSummary:
        "The design process turns ambiguous needs into validated, manufacturable products through requirements, concepts, analysis, and risk management.",
      keyConcepts: [
        "Requirements and constraints",
        "Concept selection",
        "V&V and design reviews",
        "DFM/A",
        "FMEA and lifecycle cost",
      ],
      realWorldRelevance:
        "Schedule slips usually trace to weak requirements and late manufacturing involvement—not slow CAD operators.",
    }
  ),

  chapter(
    "cad-simulation",
    11,
    "CAD, FEA, and Simulation",
    [
      section(
        "cad-simulation-s1",
        "11.1 Parametric CAD and assembly design",
        [
          "Parametric CAD (SolidWorks, Creo, NX, Fusion, Onshape) ties dimensions to sketches and features. Change hole diameter once; dependent patterns update. Design intent means future editors understand why constraints exist.",
          "Assemblies position parts with mates (coincident, concentric, distance) and manage degrees of freedom. Large assemblies use simplified configs and envelope parts for performance.",
          "Drawings and BOMs export from the same model—revision mismatch between PDF and model is a recall risk. PLM systems gate release states (work in progress, released, obsolete).",
          "Cloud CAD enables branch merges; intellectual property policies still restrict export of defense or medical data.",
        ],
        {
          bulletPoints: [
            "Parametric history — sketch → feature → pattern",
            "Design intent — stable under edits",
            "Mates — constrain rigid-body DOF",
            "BOM — quantity, part number, revision",
            "PLM — release workflow and ECO linkage",
          ],
        }
      ),
      section(
        "cad-simulation-s2",
        "11.2 Finite element analysis fundamentals",
        [
          "FEA discretizes CAD into elements (tetra, hex) with nodes solving approximate equilibrium. Linear static analysis assumes small deformation and linear material (Hooke’s law). Nonlinear adds contact, plasticity, large deflection.",
          "Mesh refinement studies compare peak stress or deflection as element size shrinks—convergence indicates mesh sufficiency. Stress singularities at sharp corners grow forever with refinement; engineers use fillets or submodeling.",
          "Boundary conditions must match reality: fixed vs. roller, symmetry planes, remote forces. Wrong constraints produce beautiful wrong answers.",
          "Results post-processing reports von Mises stress, factor of safety = σ_yield/σ_vm, and reaction forces for hand-check against statics.",
        ],
        {
          bulletPoints: [
            "Discretization — mesh quality (aspect ratio, Jacobian)",
            "Linear static — small strain, elastic material",
            "Boundary conditions — supports and loads",
            "von Mises — ductile yield comparison",
            "Convergence — refine until key result stable",
          ],
          citations: [
            {
              source: "NASA — Structures analysis and FEA guidance",
              url: "https://www.nasa.gov/",
              note: "High-reliability simulation culture reference",
            },
          ],
        }
      ),
      section(
        "cad-simulation-s3",
        "11.3 CFD, thermal simulation, and multiphysics",
        [
          "Computational fluid dynamics solves Navier-Stokes equations on volume meshes for velocity, pressure, and temperature fields. Turbulence models (k-ε, SST) approximate unresolved eddies—grid and model choice affect results.",
          "Conjugate heat transfer couples fluid and solid domains for electronics coolers and heat exchangers. Transient simulations capture startup and thermal cycling.",
          "Multiphysics links structural + thermal + electromagnetic solvers—motor heating and deformation, for example. Co-simulation exchanges data each time step or iteratively.",
          "High-performance computing clusters run overnight jobs; engineers still validate with hand calcs on simplified domains.",
        ],
        {
          bulletPoints: [
            "CFD — mesh, turbulence model, y+ wall resolution",
            "Steady vs. transient — time step selection",
            "CHT — fluid-solid interface coupling",
            "Multiphysics — field coupling strategies",
            "HPC — batch jobs and result archiving",
          ],
        }
      ),
      section(
        "cad-simulation-s4",
        "11.4 Validation, verification, and simulation governance",
        [
          "Verification asks if the simulation solves the equations correctly (mesh, solver settings). Validation asks if the model represents reality (compare to test). Both words are overloaded—use V&V definitions consistently.",
          "Correlation tests instrument strain gages, accelerometers, and pressure taps. Adjust material models and contact parameters within justified bounds—not until the curve looks pretty alone.",
          "Simulation plans document assumptions, margins, and reviewer sign-off. ASME V&V 20 and industry guides formalize credibility evidence for regulated sectors.",
          "A culture of “simulation said OK” without test is hazardous. Simulation extends judgment; it does not replace accountability.",
        ],
        {
          bulletPoints: [
            "Mesh convergence — verification step",
            "Test correlation — validation step",
            "Material cards — rate, temperature dependence",
            "Assumption log — contact, friction, supports",
            "Peer review — second analyst for critical jobs",
          ],
        }
      ),
      section(
        "cad-simulation-s5",
        "11.5 Digital twins, PLM, and model-based enterprise",
        [
          "Digital twins link operational sensor data to simulation models for predictive maintenance—turbine vibration trending, pump cavitation warnings. Updating models with field data closes the loop from Chapter 1’s timeline to IoT era.",
          "Model-based enterprise (MBE) uses 3D PMI as authority; drawings become derivatives. Suppliers need compatible STEP AP242 and contract clarity on datum precedence.",
          "Generative design algorithms explore topology within load envelopes; human engineers still judge manufacturability and inspectability.",
          "Cybersecurity for CAD vaults matters—stolen IP and tampered geometry threaten supply chains.",
        ],
        {
          bulletPoints: [
            "Digital twin — live data + model",
            "MBE — model as source of truth",
            "Generative design — algorithmic concepts",
            "STEP/JT — exchange formats",
            "IP security — access control on vaults",
          ],
        }
      ),
    ],
    {
      subtitle: "Digital models that predict behavior—and the discipline to trust them wisely",
      learningObjectives: [
        "Use parametric CAD assemblies with PLM-aware releases",
        "Set up linear FEA with appropriate mesh and boundary conditions",
        "Distinguish CFD/thermal/multiphysics use cases",
        "Apply verification and validation practices to simulation",
      ],
      chapterSummary:
        "CAD and simulation accelerate iteration when governed by mesh discipline, V&V, and manufacturing-aware interpretation.",
      keyConcepts: [
        "Parametric CAD/PLM",
        "FEA linear statics",
        "CFD and multiphysics overview",
        "Simulation V&V",
        "Digital twin concept",
      ],
      realWorldRelevance:
        "Teams that correlate simulation to test ship faster with fewer prototype spins than teams that treat color plots as truth.",
    }
  ),

  chapter(
    "vibrations",
    12,
    "Vibrations and Acoustics",
    [
      section(
        "vibrations-s1",
        "12.1 Single-degree-of-freedom models",
        [
          "Model a machine as mass m, spring k, damper c for one coordinate. Equation of motion: mẍ + cẋ + kx = F(t). Natural frequency f_n = (1/2π)√(k/m) in hertz.",
          "Undamped free vibration sinusoid at ω_n. Viscous damping ratio ζ = c/(2√(km)); underdamped response rings down exponentially.",
          "Stiffness can come from steel, air cushion, or rubber isolator—same math, different k. Mass includes fixtures and fluid added mass in tanks.",
          "Technicians measure f_n with bump tests and spectrum analyzers—quick health check on installed equipment.",
        ],
        {
          bulletPoints: [
            "SDOF EOM — mẍ + cẋ + kx = F",
            "f_n — natural frequency (Hz)",
            "ζ — damping ratio (dimensionless)",
            "Log decrement — estimate ζ from decay",
            "Effective mass/stiffness — include mounts",
          ],
        }
      ),
      section(
        "vibrations-s2",
        "12.2 Forced vibration and resonance",
        [
          "Harmonic forcing F sin(ωt) produces steady-state amplitude peak near ω ≈ ω_n. Magnification factor grows as ζ shrinks—why stiff mounts sometimes worsen tonal noise if they raise Q.",
          "Frequency response functions (FRF) plot amplitude vs. frequency for impact tests. Anti-resonance dips appear between modes in multi-DOF systems.",
          "Rotating unbalance force ∝ ω²; passing critical speed during startup requires controlled ramp rates.",
          "Isolation transmissibility T ≈ 1/√[(1−r²)² + (2ζr)²] with r = ω/ω_n; mount soft enough for r > √2 reduces force to foundation.",
        ],
        {
          bulletPoints: [
            "Resonance — forcing near natural frequency",
            "FRF — H(ω) from hammer impact test",
            "Critical speed — rotor dynamics crossover",
            "Transmissibility — mount design metric",
            "Damping adds — rubber, constrained layer",
          ],
        }
      ),
      section(
        "vibrations-s3",
        "12.3 Multi-DOF systems and modal analysis",
        [
          "Real structures have many modes—each with its own shape and frequency. Modal analysis diagonalizes coupled equations into uncoupled modal coordinates when proportional damping assumed.",
          "Mode shapes show where motion is large—design stiffeners there. Participation factors tell which modes respond to a given excitation direction.",
          "Experimental modal analysis (EMA) fits FRF data to identify modes on built hardware—gold standard when CAD differs from as-built.",
          "Avoid confusing FEA mesh modes with physical modes unless correlation proves alignment.",
        ],
        {
          bulletPoints: [
            "Mode shape — deformation pattern at f_n",
            "Orthogonality — mass/stiffness decoupling",
            "EMA — test-based modal parameters",
            "MAC — modal assurance criterion for correlation",
            "Superposition — response sum of modes",
          ],
        }
      ),
      section(
        "vibrations-s4",
        "12.4 Rotating machinery and balancing",
        [
          "Rotors bend under their own weight and unbalance; bearing stiffness anisotropy splits critical speeds. Oil whirl and whip are fluid-induced instabilities in journal bearings—specialist territory.",
          "Single-plane balancing for narrow disks; two-plane for long rotors. Trial weight method finds correction mass and angle.",
          "Torsional vibration twists shafts—couplings and flywheels tune torsional natural frequencies away from engine firing orders.",
          "Condition monitoring tracks overall vibration velocity (mm/s RMS) per ISO 10816 bands for alarm/trip.",
        ],
        {
          bulletPoints: [
            "Unbalance — centrifugal force ∝ m e ω²",
            "Balancing grades — G6.3 fans vs. precision grinders",
            "Critical speed — avoid sustained operation unless damped",
            "Torsional — firing frequency vs. torsional f_n",
            "ISO 10816 — severity charts",
          ],
        }
      ),
      section(
        "vibrations-s5",
        "12.5 Noise, acoustics, and NVH overview",
        [
          "Sound pressure level L_p = 20 log10(p/p_ref) dB with p_ref = 20 μPa in air. Human hearing is frequency dependent—A-weighting approximates perception.",
          "Structure-borne noise travels through solids; airborne noise radiates from vibrating panels. Damping treatments add loss η to reduce panel radiation.",
          "NVH (noise, vibration, harshness) teams in automotive tune engine mounts, intake resonators, and tire modes for customer perception targets.",
          "OSHA and local codes limit occupational noise exposure—engineering controls before PPE when feasible.",
        ],
        {
          bulletPoints: [
            "dB scale — logarithmic pressure",
            "A-weighting — perceived loudness metric",
            "Structure-borne vs. airborne paths",
            "Damping — η loss factor materials",
            "NVH targets — customer-driven specs",
          ],
        }
      ),
    ],
    {
      subtitle: "Oscillations you can model, measure, and quiet before customers hear them",
      learningObjectives: [
        "Build and interpret SDOF mass-spring-damper models",
        "Explain resonance and isolation transmissibility",
        "Describe modal analysis purpose and test correlation",
        "Recognize balancing and NVH practices in industry",
      ],
      chapterSummary:
        "Vibrations and acoustics connect structural dynamics to maintenance metrics and product perception—from resonance peaks to decibel limits.",
      keyConcepts: [
        "SDOF parameters",
        "Forced response and isolation",
        "Modal shapes",
        "Rotor balancing",
        "Sound levels and NVH",
      ],
      realWorldRelevance:
        "Unexplained hums and warranty vibration claims often need SDOF intuition before expensive multiphysics reruns.",
    }
  ),

  chapter(
    "quality-engineering",
    13,
    "Quality and Reliability",
    [
      section(
        "quality-engineering-s1",
        "13.1 Statistical process control (SPC)",
        [
          "Variation is inevitable; SPC distinguishes common-cause (process noise) from special-cause (tool break, wrong material). Control charts plot sample averages and ranges against limits derived from process capability.",
          "Cp and Cpk compare specification width to process spread—Cpk accounts for centering. A Cpk of 1.33 traditionally implies few ppm defects for stable processes.",
          "Gage R&R studies separate measurement error from part variation—blaming parts when the caliper is worn wastes scrapped inventory.",
          "Six Sigma methods reduce defect rates through DMAIC (Define, Measure, Analyze, Improve, Control)—statistics in service of process, not religion.",
        ],
        {
          bulletPoints: [
            "X-bar and R charts — monitor mean and spread",
            "Cp/Cpk — capability indices",
            "Special cause — investigate points outside limits",
            "Gage R&R — repeatability and reproducibility",
            "DMAIC — structured improvement cycle",
          ],
        }
      ),
      section(
        "quality-engineering-s2",
        "13.2 Reliability engineering and life data",
        [
          "Reliability R(t) is probability of survival to time t. Failure rate λ(t) in bathtub curve: early infant mortality, useful life random failures, wear-out increasing failures.",
          "Exponential distribution models constant λ; Weibull fits wear-out with shape parameter β. Accelerated life testing (ALT) stresses temperature or vibration to compress calendar time—with physics justification.",
          "Redundancy and derating improve system reliability—two pumps, each sized to 70% duty, survive single failure.",
          "Warranty cost ties directly to reliability math—finance and engineering should share the same failure database.",
        ],
        {
          bulletPoints: [
            "R(t), F(t) — reliability and CDF",
            "Weibull — β shape, η scale",
            "MTBF — mean time between failures (context-dependent)",
            "ALT — accelerated stress with model",
            "Derating — operate below max rating",
          ],
        }
      ),
      section(
        "quality-engineering-s3",
        "13.3 Root cause analysis and FMEA",
        [
          "5 Whys and fishbone (Ishikawa) diagrams trace symptoms to causes—ask why until process or design fix emerges. Blaming operators without system fix guarantees repeat.",
          "8D reports (discipline problem solving) document containment, root cause, corrective action, and prevention—common in automotive supply chains.",
          "FMEA tables list failure mode, effect, cause, controls, and recommended actions. Severity 9–10 on safety requires design change, not training alone.",
          "Field returns should feed DFMEA updates—closed-loop quality.",
        ],
        {
          bulletPoints: [
            "5 Whys — depth on causal chain",
            "Fishbone — man, machine, method, material, measurement, environment",
            "8D — supplier corrective action format",
            "DFMEA vs. PFMEA — design vs. process focus",
            "Containment — protect customers while investigating",
          ],
        }
      ),
      section(
        "quality-engineering-s4",
        "13.4 Metrology, calibration, and standards",
        [
          "Measurement systems need resolution finer than the tolerance they judge—often rule of thumb 10:1 between gage resolution and part tolerance band.",
          "Calibration traces instruments to national standards through an unbroken chain (NIST in US). Certificates list uncertainty and due dates.",
          "ISO 9001 defines quality management system requirements—document control, audits, corrective action—not product technical specs by themselves.",
          "ASME and ASTM test methods standardize tensile, hardness, and impact tests so labs compare apples to apples.",
        ],
        {
          bulletPoints: [
            "Traceability — NIST-linked calibration",
            "Uncertainty budget — combined errors",
            "ISO 9001 — QMS framework",
            "ASTM E8 — tensile test standard example",
            "Document control — approved procedures only",
          ],
          citations: [
            {
              source: "ISO 9001 — Quality management systems",
              url: "https://www.iso.org/standard/62085.html",
              note: "QMS requirements overview",
            },
          ],
        }
      ),
      section(
        "quality-engineering-s5",
        "13.5 Inspection planning and lot acceptance",
        [
          "Sampling plans (ANSI/ASQ Z1.4) accept or reject lots based on sample defect count—used when 100% inspection is costly. Risk shifts between producer and consumer via AQL levels.",
          "First article inspection (FAI) verifies new supplier tooling before mass release. CMM reports compared to drawing datums.",
          "Nonconforming material reports (NCR) quarantine suspect stock; disposition rework, scrap, or use-as-is requires authority.",
          "Quality is everyone's job, but roles: quality engineer owns systems, machinist owns in-process checks, design owns inherent capability.",
        ],
        {
          bulletPoints: [
            "AQL sampling — lot acceptance risk",
            "FAI — first-piece full dimension report",
            "NCR — quarantine and disposition",
            "In-process checks — SPC at station",
            "Stop-ship — authority when safety implicated",
          ],
        }
      ),
    ],
    {
      subtitle: "Variation, failure, and the systems that keep defects from reaching customers",
      learningObjectives: [
        "Interpret control charts and capability indices",
        "Explain reliability distributions and accelerated testing concepts",
        "Conduct structured root cause and FMEA thinking",
        "Relate calibration traceability to drawing compliance",
      ],
      chapterSummary:
        "Quality engineering quantifies variation, predicts failure, investigates causes, and inspects with traceable measurements.",
      keyConcepts: [
        "SPC and Cpk",
        "Reliability distributions",
        "RCA and FMEA",
        "Calibration traceability",
        "Sampling and FAI",
      ],
      realWorldRelevance:
        "Recalls and line stops cost more than upfront SPC—managers support quality when metrics tie to dollars.",
    }
  ),

  chapter(
    "sustainability-me",
    14,
    "Sustainability in Mechanical Systems",
    [
      section(
        "sustainability-me-s1",
        "14.1 Life-cycle assessment (LCA) for mechanical products",
        [
          "LCA inventories energy and emissions from raw material extraction through manufacturing, use phase, and end of life. Functional unit defines basis—per kilometer driven, per kWh delivered, per machine lifetime hour.",
          "Impact categories include global warming potential (CO₂e), acidification, and resource depletion. Allocation rules split impacts when one process makes multiple products.",
          "Cutoff criteria exclude negligible flows but must document assumptions. Comparative LCA requires equivalent function—electric vs. ICE vehicle needs matched duty cycle.",
          "Regulators and customers request LCA evidence for public procurement; greenwashing without data erodes trust.",
        ],
        {
          bulletPoints: [
            "Stages — cradle-to-grave gates",
            "Functional unit — fair comparison basis",
            "GWP — CO₂ equivalent emissions",
            "Allocation — mass, energy, economic split",
            "ISO 14040/14044 — LCA framework standards",
          ],
        }
      ),
      section(
        "sustainability-me-s2",
        "14.2 Energy efficiency in machines and thermal systems",
        [
          "Second-law efficiency compares actual work to reversible ideal—highlights exergy destruction in gearboxes, throttles, and heat exchangers with small approach temperatures.",
          "Variable-speed drives match motor speed to load, saving energy versus throttling valves or dampers. Right-sizing motors avoids low-load efficiency penalties.",
          "Waste heat recovery (ORC, recuperators) pays when hours run high and fuel cost matters. Data centers and steel mills lead implementations.",
          "Energy audits (ASHRAE Level I–III) prioritize retrofits with payback—engineering economics, not virtue alone.",
        ],
        {
          bulletPoints: [
            "Exergy — quality of energy",
            "VFD — variable frequency drive savings",
            "Right-sizing — avoid oversize motor chronic low load",
            "Heat recovery — recuperator, economizer",
            "Payback — years to return capital from savings",
          ],
        }
      ),
      section(
        "sustainability-me-s3",
        "14.3 Materials, circular economy, and design for disassembly",
        [
          "Recycled content lowers embodied carbon for aluminum and steel when melt energy is accounted. Design for disassembly uses snap features, common fasteners, and material labels for sortation.",
          "Repairability scores and spare-part availability extend product life—mechanical wear items (seals, bearings) should be field-replaceable when policy demands.",
          "Bioplastics and bio-composites trade land use and compostability against performance—environmental win is context specific.",
          "Extended producer responsibility laws shift end-of-life cost to manufacturers—changes BOM material choices.",
        ],
        {
          bulletPoints: [
            "Embodied energy — manufacturing phase impact",
            "Recyclability — mono-material vs. glued stacks",
            "Design for disassembly — tool access, standard bits",
            "Remanufacturing — cores returned, refurbished",
            "EPR — producer take-back regulations",
          ],
        }
      ),
      section(
        "sustainability-me-s4",
        "14.4 Emissions, refrigerants, and environmental compliance",
        [
          "Combustion emissions (NO_x, CO, particulates) face tiered regulations by engine class. Aftertreatment (catalysts, DPF) adds backpressure and packaging burden.",
          "Refrigerant GWP drives phase-down of HFCs toward HFOs and naturals (CO₂, ammonia, propane) with safety codes for toxicity and flammability.",
          "RoHS and REACH restrict hazardous substances in products sold internationally—mechanical BOMs still contain electronics subject to solder restrictions.",
          "Environmental permits for plants cap discharge—mechanical upgrades to cooling towers and scrubbers follow.",
        ],
        {
          bulletPoints: [
            "Tailpipe standards — EPA Tier, Euro stages context",
            "Refrigerant GWP — Kigali Amendment phase-down",
            "Natural refrigerants — safety codes (ASHRAE 15)",
            "RoHS/REACH — substance restrictions",
            "Permits — air/water discharge limits",
          ],
        }
      ),
      section(
        "sustainability-me-s5",
        "14.5 Sustainable design decisions in practice",
        [
          "Trade studies add carbon or water metrics beside cost and mass. A lighter part that needs exotic overseas shipping may lose on total GWP.",
          "Durability is sustainability—products that last reduce replacement cycles. Maintenance-friendly designs reduce throwaway culture.",
          "Renewable integration (solar thermal, geothermal loops) pairs mechanical HVAC skill with electrical interconnection knowledge.",
          "Report transparent assumptions when publishing sustainability claims—sensitivity analysis shows which inputs dominate uncertainty.",
        ],
        {
          bulletPoints: [
            "Multi-objective optimization — cost, mass, CO₂e",
            "Durability — longer life reduces annualized impact",
            "Local sourcing — transport emissions in LCA",
            "Transparency — publish functional unit and boundaries",
            "Continuous improvement — meter energy, set targets",
          ],
        }
      ),
    ],
    {
      subtitle: "Energy, materials, and compliance in an era of carbon accounting",
      learningObjectives: [
        "Outline LCA stages and functional units",
        "Identify energy-saving opportunities in machines and HVAC",
        "Apply circular design and disassembly concepts",
        "Recognize refrigerant and emissions regulatory drivers",
      ],
      chapterSummary:
        "Sustainability in mechanical engineering quantifies impacts across the lifecycle and embeds efficiency, materials, and compliance into design trades.",
      keyConcepts: [
        "LCA framework",
        "Second-law and drive efficiency",
        "Circular economy",
        "Environmental regulations",
        "Transparent trade studies",
      ],
      realWorldRelevance:
        "Procurement RFPs increasingly score embodied carbon—mechanical engineers supply the numbers or lose bids.",
    }
  ),

  chapter(
    "me-careers",
    15,
    "Mechanical Engineering Careers",
    [
      section(
        "me-careers-s1",
        "15.1 Industries and role types",
        [
          "Mechanical engineers work in aerospace, automotive, energy, HVAC, medical devices, consumer electronics, robotics, defense, and industrial machinery. Titles vary: design engineer, systems engineer, manufacturing engineer, test engineer, applications engineer, field service engineer.",
          "Aerospace emphasizes lightweight structures, certification, and configuration control. Automotive emphasizes NVH, powertrain integration, and high-volume DFM. Energy emphasizes thermodynamics, materials at temperature, and safety cases.",
          "Consulting and EPC firms rotate young engineers across site visits—exposure beats narrow cubicle work early career.",
          "Startups offer breadth; large OEMs offer depth and mentor networks—choose based on learning goals, not logo alone.",
        ],
        {
          bulletPoints: [
            "Aerospace — certification, light structures",
            "Automotive — volume, NVH, powertrain",
            "Energy — turbines, pipelines, renewables",
            "Medical — FDA context, biocompatibility interfaces",
            "Robotics — mechanisms + controls integration",
          ],
        }
      ),
      section(
        "me-careers-s2",
        "15.2 Education, FE/PE, and certifications",
        [
          "ABET-accredited BSME is the common entry; MS adds specialization (CFD, robotics, biomechanics). PhD routes to R&D and academia.",
          "Fundamentals of Engineering (FE) exam is first step toward PE license in US states; Professional Engineer stamp required for certain public infrastructure and signing authority—rules vary by state and project type.",
          "Industry certifications complement degrees: CRE (reliability), CQE (quality), GD&T professional, AWS welding inspector, PMP for project leads. Vendor training on CAD/PLM platforms is employability currency.",
          "Apprenticeships and technician paths (CNC machinist, metrology tech) pair with engineering degrees on shop floors—respect those careers.",
        ],
        {
          bulletPoints: [
            "ABET BSME — baseline credential",
            "FE → PE — licensure path (US)",
            "Graduate study — depth in subfields",
            "Certs — CRE, CQE, GD&T, AWS, PMP examples",
            "Technician partners — build-prototype-test loop",
          ],
          citations: [
            {
              source: "NCEES — FE and PE exams",
              url: "https://ncees.org/",
              note: "US engineering licensure examination information",
            },
          ],
        }
      ),
      section(
        "me-careers-s3",
        "15.3 Team skills, communication, and project management",
        [
          "Engineering is team sport: standups, design reviews, and supplier calls demand clear writing and listening. The best analyst who cannot explain trade-offs loses influence.",
          "Project management basics—Work Breakdown Structure, critical path, risk register—help you lead small teams without becoming a full-time PM immediately. Earned value and burndown charts appear in hardware programs too.",
          "Mentorship accelerates learning: find someone who will redline your drawings and attend your test readiness reviews.",
          "Conflict resolution around technical disagreements uses data, not rank—bring test results or simulation assumptions to the table.",
        ],
        {
          bulletPoints: [
            "Design reviews — data-driven decisions",
            "WBS — decompose deliverables",
            "Risk register — probability × impact mitigations",
            "Written records — emails, minutes, ECOs",
            "Mentorship — formal or informal",
          ],
        }
      ),
      section(
        "me-careers-s4",
        "15.4 Emerging fields and interdisciplinary paths",
        [
          "Robotics merges mechanisms, sensors, and embedded software—mechanical engineers who code ROS or read PLC logic collaborate faster.",
          "Battery and hydrogen systems need thermal, structural, and safety integration for packs and vessels.",
          "Space commercialization (launch, satellites) revives orbital mechanics interfaces and extreme environment materials.",
          "Human factors and medical biomechanics welcome mechanical backgrounds with anatomy study.",
          "AI-assisted design tools change workflow; fundamentals of stress and conservation laws remain non-negotiable checks.",
        ],
        {
          bulletPoints: [
            "Mechatronics — CAD + controls + firmware",
            "Energy storage — thermal runaway mitigation",
            "Commercial space — light structures, launch loads",
            "Biomechanics — implants, rehab devices",
            "AI tools — accelerate drafts, not replace physics",
          ],
        }
      ),
      section(
        "me-careers-s5",
        "15.5 Portfolio, job search, and lifelong learning",
        [
          "Portfolio pieces: senior capstone report, FSAE/robotics club, internship test summaries, GitHub CAD plugins, open-source contributions. Show problem, method, result, and your specific role.",
          "Interviews ask behavioral stories (STAR format) and technical sketches—estimate pump power, sketch free-body diagram, explain manufacturing change you drove.",
          "Networking through ASME local sections, alumni, and conference posters beats mass unsolicited resumes.",
          "Lifelong learning: read standards updates, take short courses on new refrigerants or additive qual, ride along with field service once a year to stay grounded.",
          "Ethics and safety reputation follow you—decline shortcuts that compromise either.",
        ],
        {
          bulletPoints: [
            "Portfolio — capstone, internships, club projects",
            "STAR stories — situation, task, action, result",
            "Technical interview — FBD, unit check, process choice",
            "ASME/networking — professional community",
            "Continuous learning — standards, tools, field exposure",
          ],
          citations: [
            {
              source: "ASME — career and professional development",
              url: "https://www.asme.org/career-education",
              note: "Society resources for mechanical engineers",
            },
            {
              source: "MIT OpenCourseWare — continue technical depth",
              url: "https://ocw.mit.edu/",
              note: "Free courses for post-graduation upskilling",
            },
          ],
        }
      ),
    ],
    {
      subtitle: "Where the degree leads—and how to grow a durable, ethical career",
      learningObjectives: [
        "Map mechanical engineering roles across major industries",
        "Describe FE/PE and common supplemental certifications",
        "Apply basic project communication and review skills",
        "Plan portfolio and networking for job search and growth",
      ],
      chapterSummary:
        "Careers chapter connects technical survey knowledge to industries, credentials, teamwork, emerging fields, and habits that sustain employability.",
      keyConcepts: [
        "Industry role map",
        "Licensure and certifications",
        "Project communication",
        "Emerging interdisciplinary areas",
        "Portfolio and ethics",
      ],
      realWorldRelevance:
        "Students who articulate trade-offs and show documented project work outperform those who list software names without outcomes.",
    }
  ),
];
