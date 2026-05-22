import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const LEGAL_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Legal Fundamentals",
  subtitle: "ForgEd survey textbook — how U.S. law is made, argued, and applied from first principles to practice",
  paragraphs: [
    "Law is not a single book of rules sitting on a shelf. It is a layered system—constitutions, statutes, regulations, and published judicial decisions—that channels power, allocates risk, and gives strangers a peaceful way to resolve conflict. Whether you are heading toward paralegal work, business, public service, or law school, you need a map of that system before you can read a contract, understand a headline about a Supreme Court case, or ask a licensed attorney the right questions.",
    "These twenty chapters move from the nature and history of law through sources, courts, criminal and civil distinction, reasoning, rights, the legal profession, dispute resolution, and survey introductions to property, contracts, torts, administrative law, evidence, research, ethics, international law, business regulation, family law, technology, and careers. Each chapter has five sections with citations to open resources (Cornell LII, the American Bar Association, Oyez, and similar)—read them before section quizzes and chapter checks.",
    "This material is general legal education for literacy and critical thinking. It is not legal advice, does not create an attorney-client relationship, and cannot replace counsel on a specific matter in your jurisdiction. When stakes are high—criminal charges, custody, immigration, employment termination, or major transactions—consult a licensed attorney in the relevant state or specialty.",
    "Study actively: brief cases in IRAC, outline each chapter's learning objectives, and use section quizzes to find gaps before chapter checks and the course final. The goal is transferable skill—reading authority carefully, separating issues, and arguing with evidence—not memorizing slogans.",
  ],
  additionalResources: [
      {
        title: "Primary references for deeper study",
        resources: [
          { source: "Cornell LII — Wex Legal Encyclopedia", url: "https://www.law.cornell.edu/wex", note: "Plain-language definitions and topic overviews" },
          { source: "American Bar Association — public education", url: "https://www.americanbar.org/groups/public_education/", note: "How the legal profession explains law to the public" },
          { source: "Oyez — Supreme Court case archive", url: "https://www.oyez.org/", note: "Audio summaries and opinions for landmark cases cited in this course" },
        ],
      }
  ],
};

export const LEGAL_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "what-is-law",
    1,
    "What Is Law and Why It Matters",
    [
      section(
        "what-is-law-s1",
        "1.1 Law through history — timeline",
        [
          "Human societies have always needed predictable ways to settle land disputes, punish violence, and coordinate trade. Early codes announced rules in advance so retaliation did not depend on the victim's kinship network alone. The Code of Hammurabi (circa 1754 BCE) famously inscribed punishments on stone; Roman law later influenced continental Europe through codification, while English common law grew case-by-case through royal courts.",
          "Medieval and early-modern Europe blended church canon law, feudal custom, and royal prerogative. The Magna Carta (1215) is often taught as a constraint on arbitrary royal power—later generations reinterpreted it as a seed of constitutionalism. The Enlightenment pressed for rights written into constitutions; the U.S. Constitution (1787) and Bill of Rights (1791) allocated powers among branches and listed individual limits on government.",
          "The nineteenth and twentieth centuries added industrial regulation, labor protection, and administrative agencies that issue rules without passing every detail through Congress. New Deal and postwar programs expanded federal presence; civil rights movements turned to courts and statutes to reshape education, voting, and public accommodations. Today you navigate not only legislatures and courts but agency regulations, municipal codes, and international treaties—each with its own source hierarchy.",
          "Studying the timeline prevents a common mistake: treating current debates as if law appeared fully formed yesterday. Brown v. Board, Chevron deference, and smartphone search cases all sit on centuries of prior choices about who gets to say what the rule is.",
        ],
        {
        bulletPoints: [
          "circa 1754 BCE — Code of Hammurabi; written criminal and civil rules in Mesopotamia",
          "circa 450 BCE — Twelve Tables of Rome; early public display of citizen law",
          "1215 — Magna Carta; barons limit royal authority (later mythologized as rights charter)",
          "1787 — U.S. Constitution drafted in Philadelphia; federal structure and separation of powers",
          "1791 — Bill of Rights ratified; express limits on federal government",
          "1803 — Marbury v. Madison; judicial review articulated (see Chapter 2)",
          "1868 — Fourteenth Amendment; due process and equal protection against states",
          "1930s–1940s — Administrative state expands; agencies regulate economy and welfare",
          "1954 — Brown v. Board; school segregation held unconstitutional",
          "1960s–1970s — Civil rights and environmental statutes; Congress codifies new rights",
          "2001–present — Counterterrorism, digital surveillance, and technology law reshape procedure",
        ],
        citations: [
          { source: "Cornell LII — Wex: Rule of Law", url: "https://www.law.cornell.edu/wex/rule_of_law", note: "Institutional predictability and supremacy of law" },
        ],
        }
      ),
      section(
        "what-is-law-s2",
        "1.2 What law does — and what it is not",
        [
          "Law coordinates behavior at scale. It tells drivers which side of the road to use, requires employers to withhold taxes, and gives lenders remedies when borrowers default. Unlike etiquette or corporate culture, law carries institutional backup: courts can order payment, agencies can revoke licenses, and criminal systems can impose liberty restrictions after due process.",
          "Law overlaps morality but is not identical to it. Many unethical acts are lawful; some lawful acts disturb conscience. Democratic lawmaking can encode majority values while constitutions protect minorities from certain majoritarian choices. When you analyze a problem, separate the moral argument ('should they?') from the legal question ('may they, and what happens if they do not?').",
          "The rule of law (in an ideal sense) demands publicity, generality, stability, and impartial application. Real systems fall short—resource gaps, political pressure, and biased enforcement exist—but the ideal still guides reform. Professionals cite specific rules and procedures rather than vague appeals to fairness alone.",
          "In practice, organizations map legal duties onto checklists: export controls, privacy notices, workplace safety. The checklist is not the law; it operationalizes the law. If the rule changes, the checklist must change too.",
          "Federalism means multiple sovereigns coexist. A business might comply with federal OSHA, state workers' compensation, and city fire codes simultaneously. Conflicts are resolved through supremacy and preemption doctrines developed in Chapters 2 and 12—not by picking whichever rule you prefer.",
        ],
        {
        bulletPoints: [
          "Coordination — predictable standards reduce violence and transaction costs",
          "Enforcement — institutions, not private revenge, apply sanctions",
          "Law vs. morality — overlap without identity",
          "Constitutional floor — some choices removed from simple majority vote",
          "Operational compliance — policies must track authoritative sources",
        ],
        }
      ),
      section(
        "what-is-law-s3",
        "1.3 From principle to enforceable rule — case study",
        [
          "Constitutional principles sound abstract until a court applies them to concrete facts. Brown v. Board of Education (1954) consolidated challenges to racial segregation in public schools. The issue was whether segregated schools could ever be equal under the Fourteenth Amendment's equal protection clause.",
          "The rule layer pulled together sociology and prior precedent. Chief Justice Warren's unanimous opinion rejected the separate-but-equal doctrine from Plessy v. Ferguson (1896) in the context of public education, emphasizing that segregation generates a feeling of inferiority that affects hearts and minds in a way unlikely ever to be undone.",
          "Application linked that principle to Topeka, Kansas, and companion cases: physical facilities might be comparable, but the stigma of state-imposed separation violated equal protection. Conclusion: segregated public schools are unconstitutional; the Court later supervised remedies and timing of desegregation in additional orders.",
          "Brown did not end racism or private discrimination; it changed what states could do with public authority. Reading it teaches IRAC in a high-stakes setting: identify the constitutional issue, state the controlling principle, apply facts, and conclude. It also shows how social science entered legal reasoning—still debated when experts belong in constitutional cases.",
        ],
        {
        bulletPoints: [
          "Issue — Does state-mandated school segregation violate equal protection?",
          "Rule — Fourteenth Amendment; Plessy separate-but-equal under scrutiny",
          "Application — Stigma and unequal educational experience despite facilities",
          "Conclusion — Segregation in public schools unconstitutional",
          "Remedy politics — Implementation orders and resistance in later decades",
        ],
        citations: [
          { source: "Oyez — Brown v. Board of Education", url: "https://www.oyez.org/cases/1940-1955/347us483/", note: "Facts, procedural history, and opinion links" },
        ],
        caseStudies: [
          { name: "Brown v. Board of Education", year: "1954", summary: "Held that racial segregation in public schools violates equal protection; shows how courts translate constitutional principles into binding rules for society." },
        ],
        }
      ),
      section(
        "what-is-law-s4",
        "1.4 Misreading law in public life",
        [
          "Headlines compress complex holdings into winners and losers. A Supreme Court decision might rest on standing, statutory interpretation, or narrow remedy—not on the broad moral slogan Twitter assigns. Train yourself to read the syllabus or summary for the actual issue and holding before debating policy.",
          "Another mistake conflates acquittal with innocence in the scientific sense. Criminal acquittal means the government failed to prove guilt beyond a reasonable doubt to a jury (or the charge was dismissed). Civil liability may still attach on a preponderance standard, as the O.J. Simpson cases later illustrated in Chapter 4.",
          "People also treat the Constitution as only what they recall from school. Statutes and regulations govern daily business more often than marquee amendments. When someone says 'that's unconstitutional,' ask which government actor, which clause, and which remedy a court could order.",
          "Finally, informal agreements are not law unless they meet contract requirements or bind under specific doctrines. Handshakes matter socially; courts look for offer, acceptance, consideration, and definite terms—or statutory substitutes.",
        ],
        {
        bulletPoints: [
          "Read holdings narrowly — procedural bars vs. merits",
          "Burden of proof — criminal beyond reasonable doubt vs. civil preponderance",
          "Constitution vs. statutes — most daily rules are statutory or regulatory",
          "Unenforceable promises — missing contract elements or illegality",
          "Federalism — state law may differ from federal baseline",
        ],
        }
      ),
      section(
        "what-is-law-s5",
        "1.5 IRAC and chapter synthesis",
        [
          "Lawyers and law students organize analysis with IRAC: Issue (the legal question), Rule (the authoritative text and precedent), Application (fit facts to rule), Conclusion (answer the issue). Variations add Counterargument and Policy, but the spine stays the same. Exams and briefs reward clarity, not drama.",
          "Issue spotting is a skill. A parking-lot fender bender might raise negligence, comparative fault, insurance contract interpretation, and data privacy if a dashcam uploads video. One fact pattern can trigger multiple bodies of law; list them before diving deep on one.",
          "Synthesis for this chapter: law is historical, institutional, and reasoning-driven. You can narrate the timeline, separate law from morality, read Brown as IRAC, and avoid headline-level errors. Carry that structure into Chapter 2's sources hierarchy—constitution first, then statutes, then regulations, then cases interpreting them.",
          "Before the chapter quiz, rehearse explaining to a friend why independent courts matter and what equal protection changed in public education. If you cannot do both in plain English, revisit §§1.1–1.3.",
        ],
        {
        bulletPoints: [
          "IRAC — Issue, Rule, Application, Conclusion",
          "Multi-issue facts — tort + contract + regulatory overlays",
          "Primary sources first — constitution, statute, regulation, case",
          "Study habit — brief one case per chapter in IRAC format",
          "Next chapter — hierarchy of sources and judicial review",
        ],
        citations: [
          { source: "ABA — Separation of Powers and the Rule of Law", url: "https://www.americanbar.org/groups/public_education/resources/separation-of-powers/", note: "How branches interact in the U.S. system" },
        ],
        }
      )
    ],
    {
      subtitle: "From ancient codes to the modern administrative state",
      learningObjectives: [
        "Place major milestones in legal history on a timeline and explain what each shift changed about authority and dispute resolution",
        "Distinguish law from morality, politics, and private contract—and explain why independent institutions matter",
        "Apply IRAC-style thinking (Issue, Rule, Application, Conclusion) to a simple fact pattern",
        "Analyze how a constitutional holding translates principle into enforceable rules using Brown v. Board of Education",
      ],
      chapterSummary: "Chapter 1 defines law as a public system of rules enforced by institutions, traces its historical development, and introduces the reasoning habits—especially IRAC—that professionals use to connect facts to outcomes.",
      keyConcepts: [
        "Law vs. morality and politics",
        "Rule of law and institutional enforcement",
        "IRAC issue-rule-application-conclusion",
        "Federalism and the administrative state",
        "Precedent and equal protection",
      ],
      realWorldRelevance: "Citizens and professionals who understand what law is—and what it is not—read news about courts, agencies, and legislation without conflating popularity with legality.",
    }
  ),

  chapter(
    "sources-of-law",
    2,
    "Sources of Law: Constitutions, Statutes, and Precedent",
    [
      section(
        "sources-of-law-s1",
        "2.1 Hierarchy from constitution to local ordinance",
        [
          "The U.S. Constitution is the supreme law of the land; conflicting state constitutions, statutes, or ordinances yield under the Supremacy Clause. Below the federal constitution come federal statutes enacted by Congress, treaties (with complex incorporation rules), and regulations promulgated by agencies under delegated authority.",
          "States have their own constitutions, codes, and administrative rules. Municipalities exercise delegated home-rule powers—zoning, parking, local police powers—so long as they do not violate higher law. When sources conflict, courts apply preemption doctrines: express, field, or obstacle preemption can void state rules that interfere with federal objectives.",
          "Common law fills gaps where legislatures silent. Contract, tort, and property doctrines in many states still grow through published appellate opinions. Civil-law countries rely more on comprehensive codes; U.S. lawyers live in a hybrid—codes plus cases interpreting them.",
          "Researchers start with the highest controlling authority for their jurisdiction and problem. A Nevada contract dispute may turn on Nevada statutes and Nevada Supreme Court cases even if a federal constitutional issue appears later.",
          "Local ordinances and agency guidance letters fill the bottom of the stack but still govern daily conduct—parking meters, food inspections, and professional licensing. Never assume silence at one level means freedom to act; another level may regulate the same conduct.",
        ],
        {
        bulletPoints: [
          "Federal order — Constitution → statutes → valid regulations → cases",
          "State/local — State constitution and code; municipal ordinances",
          "Preemption — Federal law displaces conflicting state law",
          "Common law gaps — Judge-made rules where legislature silent",
          "Jurisdiction — Which system's sources control the dispute",
        ],
        citations: [
          { source: "Cornell LII — Wex: Sources of Law", url: "https://www.law.cornell.edu/wex/sources_of_law", note: "Survey of authoritative materials" },
        ],
        }
      ),
      section(
        "sources-of-law-s2",
        "2.2 Statutes, regulations, and the administrative state",
        [
          "Congress drafts statutes in broad terms; agencies fill detail through notice-and-comment rulemaking under the Administrative Procedure Act. A clean-air statute might authorize EPA to set particulate limits; the regulation numbers appear in the Code of Federal Regulations (CFR), not only in the United States Code (USC).",
          "Statutory interpretation tools include plain meaning, canons (ejusdem generis, expressio unius), legislative history, and agency deference frameworks—Chevron (Chapter 12) when statutes ambiguous. Courts say they interpret laws; in practice they also interpret who decides.",
          "The Federal Register publishes proposed and final rules; state equivalents exist for state agencies. Compliance teams monitor both. A product banned by a regulation may be lawful under the statute's text alone until the reg issues—timing matters for launch dates.",
          "Treaties and executive agreements add international layers; self-executing treaties may apply directly, while others require implementing legislation. Do not assume every international signature changes domestic law immediately.",
        ],
        {
        bulletPoints: [
          "APA — Notice, comment, judicial review of agency rules",
          "USC vs. CFR — Statute authorizes; regulation specifies",
          "Interpretation — Text, purpose, history, deference",
          "Federal Register — Rulemaking trail and effective dates",
          "Treaties — Domestic effect varies by type and implementation",
        ],
        }
      ),
      section(
        "sources-of-law-s3",
        "2.3 Judicial review and federal diversity — cases",
        [
          "Marbury v. Madison (1803) arose from a midnight judicial appointment dispute. Chief Justice Marshall held that the Constitution binds courts and that it is emphatically the province and duty of the judicial department to say what the law is. Section 13 of the Judiciary Act, as applied, unconstitutionally expanded original jurisdiction—so Marbury lost his writ but won the principle that courts review statutes against the Constitution.",
          "Judicial review is powerful and contested. Democracies reconcile unelected judges with popular will through appointment processes, jurisdiction limits, and political responses (statutes, amendments). Still, Marbury anchors U.S. constitutional law teaching.",
          "Erie Railroad Co. v. Tompkins (1938) changed federal diversity practice. Before Erie, federal courts in diversity sometimes applied a general federal common law. Erie held that except where federal law governs, a federal court must apply state substantive law as declared by the state's highest court—avoiding forum shopping and respecting federalism.",
          "Together, Marbury and Erie show courts shaping the source stack: Marbury elevates constitutional supremacy; Erie demotes freewheeling federal common law in favor of state rules in diversity cases.",
        ],
        {
        bulletPoints: [
          "Marbury — Judicial review; limited congressional power over jurisdiction",
          "Marshall — Courts interpret Constitution when cases arise",
          "Erie — Diversity applies state substantive law",
          "Federal common law — Narrow after Erie (federal interests only)",
          "Practical research — Start with binding authority in forum",
        ],
        citations: [
          { source: "Oyez — Marbury v. Madison", url: "https://www.oyez.org/cases/1789-1850/5us137/", note: "Background on judicial review origin" },
        ],
        caseStudies: [
          { name: "Marbury v. Madison", year: "1803", summary: "Established judicial review—federal courts may declare statutes unconstitutional when they conflict with the Constitution." },
          { name: "Erie Railroad Co. v. Tompkins", year: "1938", summary: "Held that federal courts sitting in diversity apply state substantive law, not a general federal common law—shaping how precedent and statutes interact." },
        ],
        }
      ),
      section(
        "sources-of-law-s4",
        "2.4 Stare decisis and when precedent shifts",
        [
          "Stare decisis means stand by things decided. Courts prefer stability so people can plan. Lower courts must follow higher courts in their chain; the U.S. Supreme Court can overrule its own precedents, but Justices debate when doing so damages institutional legitimacy—see Dobbs v. Jackson (2022) discussions on abortion precedent.",
          "Vertical precedent binds; horizontal precedent within the same court is usually strong but not absolute. Courts distinguish prior cases by different facts or narrow holdings. Lawyers brief why their case fits or breaks from prior opinions.",
          "Persuasive authority—other states' cases, law review articles, restatements—may convince but does not bind. Restatements (American Law Institute) summarize trends; some jurisdictions adopt them by citation.",
          "When researching, note whether a case is still good law. Shepardizing or KeyCiting (commercial tools) flags negative treatment. Free tools like CourtListener help track citations.",
        ],
        {
        bulletPoints: [
          "Vertical binding — Higher court controls lower in chain",
          "Distinguish — Different facts or narrower rule",
          "Overrule — Same court rejects earlier holding",
          "Persuasive — Sister states, scholarship, restatements",
          "Citation check — Negative treatment may undermine reliance",
        ],
        }
      ),
      section(
        "sources-of-law-s5",
        "2.5 Research discipline — primary sources first",
        [
          "Legal research begins with primary sources: the constitution, statutes, regulations, and binding cases. Secondary sources—treatises, encyclopedias, practice guides—orient you but do not govern courts. Cornell LII, Congress.gov, and eCFR are starting points; paid databases add citators and advanced search.",
          "Bluebook citation format signals which court decided, which reporter published the case, and which page holds the holding. Learn enough citation literacy to find the original opinion PDF.",
          "Synthesis: Chapter 2's hierarchy explains why a municipal parking ticket is not overturned by a law review article, and why Marbury matters when Congress purports to strip Supreme Court jurisdiction. Pair this with Chapter 14's deeper research methods.",
          "Before advancing, outline the sources you would consult for a hypothetical tenant eviction in your state—constitution (if due process raised), statute, regulation, local ordinance, and highest relevant cases.",
        ],
        {
        bulletPoints: [
          "Primary first — Binding text before commentary",
          "Government portals — USC, CFR, state codes online",
          "Citators — Validate precedents still good law",
          "Citation literacy — Locate exact opinion",
          "Next — Courts, jurisdiction, civil procedure",
        ],
        citations: [
          { source: "Law.gov / GPO — authenticated federal materials", url: "https://www.govinfo.gov/", note: "Official federal statutes and regulations" },
        ],
        }
      )
    ],
    {
      subtitle: "Hierarchy, federalism, and how courts read texts",
      learningObjectives: [
        "Rank U.S. sources from constitution through local ordinance and explain preemption",
        "Contrast common law precedent with codified civil-law traditions at survey level",
        "Explain judicial review after Marbury and Erie's effect on federal diversity cases",
        "Locate authoritative text using LII and government portals before secondary commentary",
      ],
      chapterSummary: "Chapter 2 maps where rules come from: founding documents, legislatures, agencies, courts, and treaties—plus how stare decisis and judicial review shape what lawyers cite.",
      keyConcepts: [
        "Source hierarchy and supremacy clause",
        "Stare decisis and overruling",
        "Judicial review (Marbury)",
        "Erie doctrine in diversity",
        "Primary vs. secondary sources",
      ],
      realWorldRelevance: "Compliance and litigation strategy start with finding the controlling source—not the blog post that summarized it incorrectly.",
    }
  ),

  chapter(
    "courts-procedure",
    3,
    "Courts, Jurisdiction, and Civil Procedure",
    [
      section(
        "courts-procedure-s1",
        "3.1 Court systems — federal and state",
        [
          "State courts are courts of general jurisdiction—they hear most criminal, family, probate, and local civil matters. Federal courts are courts of limited jurisdiction; they hear federal questions (28 U.S.C. § 1331) and diversity cases between citizens of different states above an amount in controversy (§ 1332), plus specialized areas like bankruptcy and patent.",
          "Within federal courts, U.S. district courts try cases; courts of appeals review errors of law; the Supreme Court mostly chooses cases by writ of certiorari. State systems mirror this with trial, intermediate appellate, and highest courts—names vary (Superior Court, Court of Appeals, Supreme Court).",
          "Article III judges have life tenure during good behavior; many state judges are elected or appointed for terms. Understanding which bench hears your dispute affects procedure, timelines, and precedent chain.",
          "Alternative forums—tribunals, agency boards, arbitration—may be mandatory first steps for some claims. Chapter 8 compares ADR; this chapter focuses on Article III-style civil courts.",
        ],
        {
        bulletPoints: [
          "State courts — General jurisdiction; most daily disputes",
          "Federal limited — Federal question and diversity gateways",
          "Trial → appellate → supreme — Error correction vs. policy",
          "Specialized federal — Bankruptcy, tax, immigration (varies)",
          "Parallel systems — Same facts may implicate both with abstention doctrines",
        ],
        citations: [
          { source: "Cornell LII — Wex: Jurisdiction", url: "https://www.law.cornell.edu/wex/jurisdiction", note: "Overview of court power" },
        ],
        }
      ),
      section(
        "courts-procedure-s2",
        "3.2 Subject-matter, personal jurisdiction, and venue",
        [
          "Subject-matter jurisdiction asks whether the court category may hear the claim. Federal courts require a statutory basis; state courts need authority under state constitution and code. Lack of subject-matter jurisdiction can be raised late and may void judgments.",
          "Personal jurisdiction asks whether suing this defendant in this forum is fair. After International Shoe (1945), specific jurisdiction ties to claims arising from contacts in the state; general jurisdiction exists where a corporation is essentially at home. Due Process under the Fourteenth Amendment sets outer bounds.",
          "Venue is the proper geographic district within a court system—statutes pick among permissible counties. Forum non conveniens may dismiss when another country's courts are far better suited.",
          "Contracts often include forum-selection and choice-of-law clauses; courts usually enforce them unless unfair or contrary to public policy.",
        ],
        {
        bulletPoints: [
          "SMJ — Power of the court type over the claim",
          "PJ — Fairness to defendant; minimum contacts",
          "Specific vs. general jurisdiction — Claim-related vs. at home",
          "Venue — Proper location within authorized court",
          "Forum selection clauses — Contractual waiver of convenience arguments",
        ],
        }
      ),
      section(
        "courts-procedure-s3",
        "3.3 Minimum contacts — International Shoe",
        [
          "International Shoe Co. v. Washington (1945) replaced rigid tag jurisdiction with a fairness test. Washington sought unemployment contributions from a shoe company whose salesmen worked in-state but headquarters sat elsewhere. The Court held jurisdiction proper when the defendant has minimum contacts with the forum such that maintenance of the suit does not offend traditional notions of fair play and substantial justice.",
          "The opinion separated general jurisdiction (continuous, systematic contacts) from specific jurisdiction (claim arises out of or relates to forum contacts). Later cases refine stream-of-commerce, internet sales, and corporate registration statutes.",
          "For practitioners, the case is a template: map contacts on a timeline, tie each contact to the claim, and argue fairness. Due process is the shield for defendants facing distant forums.",
          "Digital commerce revived Shoe debates—does a website aimed at a state create contacts? Courts apply sliding tests; facts dominate.",
        ],
        {
        bulletPoints: [
          "Facts — Salesmen in Washington; company incorporated elsewhere",
          "Rule — Due process requires minimum contacts + fairness",
          "Specific jurisdiction — Claim related to in-state activities",
          "Modern apps — Internet contacts and targeted advertising",
          "Defendant strategy — Challenge PJ before merits discovery",
        ],
        citations: [
          { source: "Oyez — International Shoe", url: "https://www.oyez.org/cases/1940-1955/326us310/", note: "Personal jurisdiction foundation" },
        ],
        caseStudies: [
          { name: "International Shoe Co. v. Washington", year: "1945", summary: "Defined minimum contacts for personal jurisdiction—courts need a fair link between the defendant and the forum before adjudicating a dispute." },
        ],
        }
      ),
      section(
        "courts-procedure-s4",
        "3.4 Civil procedure map — pleadings to judgment",
        [
          "Federal Rules of Civil Procedure (FRCP) organize civil cases: complaint states a plausible claim (Twombly/Iqbal pleading standard); defendant answers or moves to dismiss; parties conduct discovery (interrogatories, depositions, requests for production); dispositive motions (summary judgment) ask whether genuine disputes of material fact exist; trial resolves what remains; judgment follows; appeal reviews legal errors.",
          "Discovery is broad—relevance and proportionality limit fishing expeditions but encourage exchange of facts before trial. Sanctions punish spoliation and obstruction.",
          "Class actions and multidistrict litigation aggregate mass harms under Rule 23 and MDL statutes. Settlement often ends cases after discovery reveals strengths.",
          "State rules resemble FRCP but differ on deadlines and discovery scope. Always check local rules and standing orders of the assigned judge.",
        ],
        {
        bulletPoints: [
          "Complaint — Notice pleading plus plausibility",
          "Discovery — FRCP 26–37; proportionality",
          "Summary judgment — No genuine dispute of material fact",
          "Trial — Factfinder decides remaining disputes",
          "Appeal — Record plus standards of review",
        ],
        }
      ),
      section(
        "courts-procedure-s5",
        "3.5 Procedure as strategy",
        [
          "Litigation is scheduling and proof. Early motions weed out jurisdiction defects; later motions narrow issues. Settlement leverage peaks when both sides see trial risk.",
          "Synthesis: court system literacy prevents filing in the wrong place; Shoe teaches contacts analysis; FRCP map shows where your claim sits procedurally.",
          "Before Chapter 4, compare how criminal procedure protects defendants with liberty at stake—different rules, different burdens.",
        ],
        {
        bulletPoints: [
          "Early motions — 12(b)(1) SMJ, 12(b)(2) PJ",
          "Discovery plan — ESI preservation and clawbacks",
          "Settlement timing — Post-discovery risk assessment",
          "Local rules — Judge-specific requirements",
          "Next — Criminal vs. civil systems",
        ],
        }
      )
    ],
    {
      subtitle: "Who can hear what, and how civil lawsuits move",
      learningObjectives: [
        "Distinguish subject-matter, personal, and venue jurisdiction",
        "Outline major phases of civil litigation from complaint through appeal",
        "Explain minimum contacts after International Shoe",
        "Identify how federal and state court systems relate",
      ],
      chapterSummary: "Chapter 3 covers court structure, jurisdiction doctrines, and the Federal Rules of Civil Procedure framework that organizes most U.S. civil disputes.",
      keyConcepts: [
        "Subject-matter jurisdiction",
        "Personal jurisdiction",
        "Venue",
        "Pleadings and discovery",
        "Summary judgment and appeal",
      ],
      realWorldRelevance: "Forum selection clauses, service of process, and motion practice determine whether a dispute can proceed at all.",
    }
  ),

  chapter(
    "criminal-civil",
    4,
    "Criminal Law vs. Civil Law",
    [
      section(
        "criminal-civil-s1",
        "4.1 Purposes and parties",
        [
          "Criminal law declares conduct harmful to society; the government prosecutes and may impose incarceration, fines, or supervision. Civil law resolves private disputes—contracts, torts, property—with remedies like damages, injunctions, or specific performance.",
          "The state is party in criminal cases (People v. Defendant); civil cases pit plaintiff against defendant, which may include government suing civilly for money (not punishment in the criminal sense).",
          "Some conduct triggers both: fraud may yield SEC civil penalties and DOJ criminal charges. Regulatory enforcement (Chapter 12) adds a third flavor—administrative fines.",
          "Victims may have voice in criminal sentencing but do not control prosecution; civil suits let victims seek compensation directly.",
        ],
        {
        bulletPoints: [
          "Criminal — Public order; prosecution by government",
          "Civil — Private rights; victim/plaintiff drives case",
          "Remedies — Jail/fines vs. damages/injunction",
          "Overlap — Same facts, parallel proceedings (with limits)",
          "Regulatory — Agency civil enforcement",
        ],
        }
      ),
      section(
        "criminal-civil-s2",
        "4.2 Burdens, standards, and presumptions",
        [
          "Criminal guilt requires proof beyond a reasonable doubt—the highest common standard because liberty is at stake. Civil cases usually use preponderance of the evidence (more likely than not); some claims use clear and convincing evidence (fraudulent intent to revoke citizenship, e.g.).",
          "Presumption of innocence means the government bears the burden; defendants need not testify. Civil defendants may face adverse inference if they remain silent in some contexts, but Fifth Amendment privilege against self-incrimination blocks criminal use of civil testimony.",
          "Appellate standards of review differ: de novo for legal questions, abuse of discretion for evidentiary rulings, sufficiency of evidence for criminal convictions.",
          "Juries in criminal cases often must be unanimous for conviction (state reforms vary); civil juries may be less than twelve with non-unanimous verdicts in some jurisdictions.",
        ],
        {
        bulletPoints: [
          "Beyond reasonable doubt — Criminal conviction",
          "Preponderance — Typical civil fault",
          "Clear and convincing — Selected civil rights and fraud",
          "Fifth Amendment — Criminal silence protection",
          "Standards of review — Appellate deference layers",
        ],
        }
      ),
      section(
        "criminal-civil-s3",
        "4.3 Miranda and the Simpson illustration",
        [
          "Miranda v. Arizona (1966) requires warnings before custodial interrogation: right to remain silent, anything said may be used, right to attorney, appointed counsel if indigent. Purpose: protect Fifth Amendment privilege in coercive settings. Miranda does not apply to voluntary non-custodial chats or most civil depositions.",
          "Miranda violations suppress statements, not necessarily all evidence. Public safety exceptions (New York v. Quarles) are narrow.",
          "The O.J. Simpson saga illustrates dual tracks: acquittal on criminal murder charges (1995) followed by civil wrongful death liability (1997) with preponderance standard and different counsel strategies. Civil discovery had broader reach; criminal proof required unanimity beyond reasonable doubt on each element.",
          "The illustration is pedagogical—famous facts teach system design—not an endorsement of any verdict.",
        ],
        {
        bulletPoints: [
          "Miranda triggers — Custody + interrogation",
          "Remedy — Suppression of statements; not automatic dismissal",
          "Criminal Simpson — Acquittal on murder counts",
          "Civil Simpson — Liability for wrongful deaths",
          "Lesson — Different burdens, different outcomes possible",
        ],
        citations: [
          { source: "Oyez — Miranda v. Arizona", url: "https://www.oyez.org/cases/1960-1969/384us436/", note: "Criminal procedure rights" },
        ],
        caseStudies: [
          { name: "Miranda v. Arizona", year: "1966", summary: "Required warnings before custodial interrogation in criminal cases—illustrates how constitutional criminal procedure differs from civil liability rules." },
          { name: "O.J. Simpson civil trial (illustrative)", year: "1997", summary: "Acquittal in criminal court followed by civil liability for wrongful death—shows different burdens of proof and parties between criminal and civil systems." },
        ],
        }
      ),
      section(
        "criminal-civil-s4",
        "4.4 Double jeopardy and collateral civil suits",
        [
          "The Fifth Amendment bars twice in jeopardy of life or limb for the same offense. Attachment rules, separate sovereign doctrine (federal vs. state), and civil regulatory actions complicate analysis—one criminal trial does not always block all future government action.",
          "Civil suits by victims or regulators may proceed after criminal acquittal because they are not criminal punishments. Collateral estoppel sometimes precludes re-litigating issues actually decided with full and fair opportunity.",
          "Expungement and sealing statutes vary by state for criminal records; civil judgments appear in credit and background reports under different rules.",
          "Employers disciplining workers may use civil standard of proof internally while cooperating with criminal investigations under counsel guidance.",
        ],
        {
        bulletPoints: [
          "Same offense — Block duplicate criminal prosecutions",
          "Separate sovereign — Federal and state may both prosecute",
          "Civil follow-on — Not barred as criminal punishment",
          "Collateral estoppel — Issue preclusion when litigated",
          "Employment — Parallel HR and criminal processes",
        ],
        }
      ),
      section(
        "criminal-civil-s5",
        "4.5 Choosing the right frame",
        [
          "When analyzing news, label the proceeding: bail hearing, grand jury, plea, civil discovery, or regulatory fine. Each has distinct rules.",
          "Synthesis: criminal protects liberty with high burdens; civil compensates and deters with lower burdens. Miranda belongs only on the criminal track.",
          "Next chapter teaches how lawyers argue within either system—precedent, statutes, and policy.",
        ],
        {
        bulletPoints: [
          "Label the track — Criminal, civil, or administrative",
          "Match burden to remedy sought",
          "Rights map — Fifth and Sixth Amendment criminal focus",
          "Client interview — Ask which forums are open",
          "Next — Legal reasoning and argument",
        ],
        }
      )
    ],
    {
      subtitle: "Two systems, two burdens, two remedies",
      learningObjectives: [
        "Contrast purposes and parties in criminal versus civil cases",
        "Apply burdens of proof: beyond reasonable doubt vs. preponderance",
        "Explain double jeopardy limits and collateral civil suits",
        "Describe Miranda warnings and why they apply only in criminal custody",
      ],
      chapterSummary: "Chapter 4 separates criminal prosecution by the state from civil lawsuits between parties, emphasizing standards of proof, rights, and remedies.",
      keyConcepts: [
        "Burden of proof",
        "Presumption of innocence",
        "Miranda",
        "Double jeopardy",
        "Civil remedies vs. incarceration",
      ],
      realWorldRelevance: "Managers, journalists, and citizens routinely confuse acquittal with civil immunity—this chapter clarifies the overlap and separation.",
    }
  ),

  chapter(
    "legal-reasoning",
    5,
    "Legal Reasoning and Argument",
    [
      section(
        "legal-reasoning-s1",
        "5.1 Syllogisms, rules, and holdings",
        [
          "Classic legal syllogism: major premise (rule), minor premise (facts), conclusion. All contracts require consideration (rule); this promise lacked consideration (facts); therefore no contract (conclusion). Real cases add exceptions and conflicting rules.",
          "A holding is the court's resolution of the issues necessary to decide the case; dicta are observations not essential to the outcome—persuasive only. Headnotes in commercial reporters are not law; read the opinion.",
          "Courts distinguish prior cases by factual differences or by narrowing the earlier rule. Lawyers brief both sides: why Smith controls, why Jones distinguishes Smith.",
          "Statutory reasoning adds textualism (plain meaning), intentionalism (Congress's aim), and purposivism (statute's object). Methods fight in high-profile opinions.",
        ],
        {
        bulletPoints: [
          "Syllogism — Rule + facts → conclusion",
          "Holding — Binding on necessary issues",
          "Dicta — Non-binding commentary",
          "Distinguish — Factual or legal differentiation",
          "Statutory methods — Text, intent, purpose",
        ],
        }
      ),
      section(
        "legal-reasoning-s2",
        "5.2 Analogical reasoning",
        [
          "Common law grows by analogy: if horseback riding past a station platform created duty in Case A, does speeding a golf cart on a platform in Case B match? Lawyers argue degree of similarity on legally material facts, not surface color.",
          "Strong analogies identify the policy behind the old rule and show the new facts implicate the same policy. Weak analogies latch onto irrelevant similarities.",
          "Judges may list factors instead of bright lines—multi-factor balancing tests appear in undue burden, fair use, and duty analyses.",
          "Students should practice two-column charts: facts in precedent vs. facts in your problem, with notes on which differences matter legally.",
        ],
        {
        bulletPoints: [
          "Material facts — Legally significant similarities",
          "Policy bridge — Why the rule existed",
          "Factor tests — Balancing when rules blur",
          "Counter-analogy — Opponent's best distinguish",
          "Practice — Chart precedent vs. client facts",
        ],
        }
      ),
      section(
        "legal-reasoning-s3",
        "5.3 Palsgraf and judicial disagreement",
        [
          "Palsgraf v. Long Island R.R. (1928) is the classic duty dispute. Guards helped a passenger board, dislodging fireworks that exploded and injured Mrs. Palsgraf on the platform. Chief Judge Cardozo's majority held no negligence to her because the conduct's risk was not foreseeable to her as a class of person within the zone of danger.",
          "Judge Andrews dissented: negligence is a breach of duty to the world; proximate cause screens who may recover. The split previews formalist foreseeability limits versus broader duty plus causation filtering.",
          "Palsgraf teaches that reasoning styles produce different outcomes from the same facts. Exams reward articulating both views before choosing one with justification.",
          "Foreseeability still anchors duty in many U.S. tort jurisdictions; premises and products cases refine special duties.",
        ],
        {
        bulletPoints: [
          "Facts — Fireworks chain reaction on platform",
          "Cardozo — No duty to unforeseeable plaintiff",
          "Andrews — Negligence + proximate cause separate",
          "Lesson — Reasoning method drives result",
          "Modern tort — Foreseeability and zone of danger",
        ],
        citations: [
          { source: "Cornell LII — Palsgraf v. Long Island Railroad Co.", url: "https://www.law.cornell.edu/wex/palsgraf_v._long_island_railroad_co.", note: "Duty and foreseeability survey" },
        ],
        caseStudies: [
          { name: "Palsgraf v. Long Island R.R.", year: "1928", summary: "Classic duty-and-foreseeability dispute in torts—judges reason from facts to rules differently, previewing how precedent splits." },
        ],
        }
      ),
      section(
        "legal-reasoning-s4",
        "5.4 Policy, canons, and statutory fits",
        [
          "Policy arguments ask what rule best serves safety, innovation, or equality—used when precedent is open or statutes ambiguous. Courts caution that policy cannot trump clear text.",
          "Statutory canons are shortcuts: expressio unius (expressing one thing excludes others), in pari materia (statutes on same subject read together), rule of lenity (criminal ambiguities resolved for defendant).",
          "Legislative history—committee reports, floor statements—divides textualists and purposivists. Know your audience when writing to a judge steeped in textualism.",
          "Ethical advocacy omits adverse precedent at your peril; courts sanction concealment. Present distinctions honestly.",
        ],
        {
        bulletPoints: [
          "Policy — Gap-filling, not clear-text override",
          "Canons — Interpretive presumptions",
          "Lenity — Criminal ambiguity favor defendant",
          "Legislative history — Debated weight",
          "Candor — Address adverse authority",
        ],
        }
      ),
      section(
        "legal-reasoning-s5",
        "5.5 Building a persuasive memo",
        [
          "Professional memos state question presented, brief answer, facts, discussion, conclusion. Use headings mirroring IRAC for each issue. Footnote citations to primary sources.",
          "Synthesis: reasoning connects Chapter 2 sources to Chapter 3 forums and Chapter 4 burdens. Palsgraf shows internal judicial debate.",
          "Draft a one-page memo on whether a social media post defames a public figure—spot issues, rules, application, conclusion.",
        ],
        {
        bulletPoints: [
          "Memo skeleton — Question, answer, facts, discussion, conclusion",
          "Headings — One IRAC block per issue",
          "Citations — Pinpoint pages in opinions",
          "Tone — Neutral analysis, not advocacy brief",
          "Next — Rights, duties, liability",
        ],
        }
      )
    ],
    {
      subtitle: "Analogies, distinctions, and judicial disagreement",
      learningObjectives: [
        "Construct syllogisms and analogical arguments from precedent",
        "Distinguish holdings from dicta",
        "Explain why judges split using Palsgraf as example",
        "Integrate policy arguments without replacing legal rules",
      ],
      chapterSummary: "Chapter 5 develops the toolkit—rule-based logic, analogy, distinction, and policy—that turns sources into arguments.",
      keyConcepts: [
        "Holding vs. dicta",
        "Analogical reasoning",
        "Distinguishing precedent",
        "Formalism vs. realism",
        "Dissents and concurrences",
      ],
      realWorldRelevance: "Briefs, memos, and executive decisions all persuade by linking facts to authoritative rules.",
    }
  ),

  chapter(
    "rights-duties",
    6,
    "Rights, Duties, and Liability",
    [
      section(
        "rights-duties-s1",
        "6.1 Claims, duties, privileges, immunities",
        [
          "Wesley Hohfeld's analytic framework labels jural relations: if A has a claim against B, B owes a duty to A; a privilege lets A act without duty; an immunity blocks others from changing A's legal position. Lawyers translate messy facts into these relations to spot conflicts.",
          "Contract creates claim-rights to performance; tort imposes duties of reasonable care; property grants privileges to exclude others. Immunities include prosecutorial discretion and legislative speech clauses.",
          "Confusion arises when people say 'right' loosely—voting right (claim against state interference) vs. 'right to healthcare' debate (claim on others to pay vs. policy goal). Precision aids debate.",
          "Liability follows breached duties: compensatory damages put plaintiff in position had duty been performed, within limits of foreseeability and statutes.",
        ],
        {
        bulletPoints: [
          "Claim-duty correlatives — Two sides of one relation",
          "Privilege — No duty to refrain from acting",
          "Immunity — No ability to alter position",
          "Contract/tort/property — Different duty sources",
          "Damages — Remedy for breach",
        ],
        }
      ),
      section(
        "rights-duties-s2",
        "6.2 Constitutional rights and state action",
        [
          "Most U.S. constitutional rights restrict government, not private actors. The state action doctrine requires government involvement before Fourteenth Amendment limits apply—exceptions exist where government entangles with private discrimination.",
          "First Amendment speech limits Congress; incorporated against states via Fourteenth Amendment. Fourth Amendment governs searches by government actors; private searches may still violate statutes but not the Fourth Amendment alone.",
          "Positive rights—affirmative government provision—are limited in U.S. federal constitutional law compared to some foreign constitutions. Statutes may create entitlements (Social Security, Medicaid) enforceable under administrative law.",
          "Due process includes procedural fairness (notice, hearing) and substantive limits on certain fundamental rights.",
        ],
        {
        bulletPoints: [
          "State action — Government duty baseline",
          "Incorporation — Bill of Rights applied to states",
          "Private conduct — Usually statutory not constitutional",
          "Procedural due process — Fair procedures before deprivation",
          "Substantive due process — Fundamental rights protection",
        ],
        }
      ),
      section(
        "rights-duties-s3",
        "6.3 Privacy and penumbras — Griswold",
        [
          "Griswold v. Connecticut (1965) struck a law banning contraceptive use for married couples. Justice Douglas found constitutional privacy in penumbras formed by emanations from specific guarantees—First, Third, Fourth, Fifth, Ninth Amendments—creating a zone of privacy.",
          "Concurring Justices rooted privacy in due process traditions instead. Later cases extended privacy to abortion (Roe, later limited in Dobbs) and same-sex intimacy (Lawrence). The methodological split—where rights are found—still fuels debate.",
          "Modern surveillance and data sales reframe privacy as statutory (HIPAA, state consumer privacy acts) and as Fourth Amendment search doctrine (Riley, Chapter 19).",
          "Griswold shows rights can emerge from interpretive synthesis, not only single-clause text.",
        ],
        {
        bulletPoints: [
          "Statute — Connecticut anti-contraception law",
          "Majority — Privacy from intersecting amendments",
          "Concurrences — Due process tradition paths",
          "Legacy — Foundation for reproductive and intimacy cases",
          "Today — Statutory privacy plus Fourth Amendment tech cases",
        ],
        caseStudies: [
          { name: "Griswold v. Connecticut", year: "1965", summary: "Recognized constitutional privacy limits on government—rights often emerge from penumbras of explicit amendments, not a single clause." },
        ],
        }
      ),
      section(
        "rights-duties-s4",
        "6.4 Liability without fault and defenses",
        [
          "Tort duties usually require fault (negligence, intent), but strict liability attaches to abnormally dangerous activities and defective products in many jurisdictions. Workers' compensation trades fault for administrative benefits.",
          "Defenses include contributory/comparative negligence, assumption of risk, and statutory immunities for governments and charities (varies). Contract can allocate risk via indemnity clauses subject to public policy limits.",
          "Criminal liability requires actus reus and mens rea elements unless strict liability regulatory offenses—small crimes, big compliance exposure.",
          "Insurance spreads financial risk but does not erase duties; policies exclude intentional acts.",
        ],
        {
        bulletPoints: [
          "Negligence — Reasonable care breach",
          "Strict liability — Abnormally dangerous activities/products",
          "Comparative fault — Reduce recovery by plaintiff's share",
          "Indemnity — Contractual shift with limits",
          "Insurance — Compensation not immunity",
        ],
        }
      ),
      section(
        "rights-duties-s5",
        "6.5 Rights in organizational life",
        [
          "Employers owe duties under OSHA, wage-hour laws, and anti-discrimination statutes—mostly statutory claims, not constitutional. Customers have consumer protection claims; shareholders have fiduciary duties running through corporate law (Chapter 17).",
          "Synthesis: map who owes whom which duty, which right is claim-like, and what remedy attaches on breach.",
          "Prepare for Chapter 7's look at who argues these points in court.",
        ],
        {
        bulletPoints: [
          "Workplace — Statutory employee rights",
          "Consumer — FTC and state UDAP laws",
          "Corporate — Fiduciary duties to corporation",
          "Documentation — Policies evidencing duty standards",
          "Next — Lawyers, judges, roles",
        ],
        }
      )
    ],
    {
      subtitle: "Hohfeldian relations and constitutional baselines",
      learningObjectives: [
        "Map claims, duties, privileges, and immunities in simple scenarios",
        "Contrast negative and positive rights at survey level",
        "Explain how constitutional rights limit government action",
        "Apply Griswold privacy reasoning to modern surveillance debates",
      ],
      chapterSummary: "Chapter 6 introduces rights language—constitutional and private—and how duties generate liability when breached.",
      keyConcepts: [
        "Claims and duties",
        "Constitutional limits",
        "State action doctrine",
        "Privacy penumbras",
        "Strict vs. fault liability",
      ],
      realWorldRelevance: "Product warnings, housing codes, and privacy policies all express duties owed to others.",
    }
  ),

  chapter(
    "legal-profession",
    7,
    "Lawyers, Judges, and Legal Roles",
    [
      section(
        "legal-profession-s1",
        "7.1 Becoming a lawyer and judicial officer",
        [
          "U.S. lawyers typically earn a J.D., pass the bar exam in a state, and satisfy character and fitness review. Law school covers common first-year subjects—contracts, torts, civil procedure, criminal law, constitutional law, property—plus electives.",
          "Judges arrive via appointment or election depending on court. Federal Article III judges are nominated by the President and confirmed by the Senate. Magistrate and bankruptcy judges follow separate selection processes.",
          "Paralegals and legal assistants support research and drafting under attorney supervision; unauthorized practice of law statutes protect the public from non-lawyers giving legal advice.",
          "Continuing legal education keeps licenses active; specialization certificates vary by state.",
        ],
        {
        bulletPoints: [
          "J.D. + bar — Gatekeeping to licensed practice",
          "Character & fitness — Conduct review",
          "Judicial selection — Appointment vs. election",
          "Unauthorized practice — Non-lawyers barred from legal advice",
          "CLE — Ongoing professional education",
        ],
        citations: [
          { source: "ABA — Model Rules of Professional Conduct", url: "https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/", note: "Ethics baseline cited nationwide" },
        ],
        }
      ),
      section(
        "legal-profession-s2",
        "7.2 Adversarial roles — advocate, judge, jury",
        [
          "The adversarial system pits opposing advocates before a neutral decision-maker. Prosecutors represent the public interest in criminal cases; defense counsel tests the government's proof. Civil plaintiffs and defendants present competing narratives; judges apply law; juries find facts in many trials.",
          "Judges manage procedure, rule on evidence, instruct juries, and write opinions on appeal. Appellate judges rarely retry facts; they review legal error under standards of review.",
          "Alternative roles include mediators (facilitate settlement), arbitrators (private judges), and magistrate judges (pretrial management). Chapter 8 expands ADR.",
          "Corporate counsel inside companies manage risk, contracts, and compliance; outside firms handle litigation and specialized deals.",
        ],
        {
        bulletPoints: [
          "Prosecutor — Charging discretion and trial",
          "Defense — Test government case; protect rights",
          "Neutral judge — Procedure and legal rulings",
          "Jury — Factfinding in many trials",
          "In-house counsel — Business-embedded legal risk",
        ],
        }
      ),
      section(
        "legal-profession-s3",
        "7.3 Bates and access to legal services",
        [
          "Bates v. State Bar of Arizona (1977) held that truthful lawyer advertising is protected commercial speech under the First Amendment, striking blanket bans. Consumers gained price information; bars retained power to regulate misleading ads.",
          "Access gaps remain: rural deserts, immigration backlogs, and eviction dockets overwhelm legal aid. Limited-scope representation and technology tools (forms, portals) expand reach but cannot replace counsel in complex matters.",
          "Public defenders implement Gideon (Chapter 20) with uneven funding. Pro bono programs supplement but do not fill the gap.",
          "Ethics rules on advertising require honesty about results and fees; compare to medical advertising regulation debates.",
        ],
        {
        bulletPoints: [
          "Bates — Lawyer ads allowed if truthful",
          "Commercial speech — Intermediate scrutiny framework",
          "Legal deserts — Geography and income barriers",
          "Limited scope — Unbundled tasks for self-helpers",
          "Funding — Public defender resource debates",
        ],
        caseStudies: [
          { name: "Bates v. State Bar of Arizona", year: "1977", summary: "Struck down blanket bans on lawyer advertising—shows how professional regulation balances public access with ethics rules." },
        ],
        }
      ),
      section(
        "legal-profession-s4",
        "7.4 Ethics snapshots — conflicts and confidentiality",
        [
          "Model Rule 1.6 protects client confidences with exceptions for imminent harm, crime-fraud, and court orders. Conflicts rules (Rules 1.7–1.9) block adverse representation without informed consent when risks are manageable.",
          "Candor toward tribunals forbids false evidence; prosecutors must disclose exculpatory Brady material. Sanctions range from dismissal to disbarment.",
          "Corporate counsel face who-is-the-client questions when executives commit wrongdoing—Upjohn warnings clarify representation boundaries.",
          "Judges must recuse when impartiality might reasonably be questioned; failure erodes public trust.",
        ],
        {
        bulletPoints: [
          "Confidentiality — Default shield with exceptions",
          "Conflicts — Loyalty limits across clients",
          "Candor — No false facts to courts",
          "Brady — Prosecution disclosure duty",
          "Recusal — Judicial bias appearance standard",
        ],
        }
      ),
      section(
        "legal-profession-s5",
        "7.5 Working with lawyers effectively",
        [
          "Clients should bring chronologies, documents, and clear goals. Ask fee structures—hourly, flat, contingency—and scope letters. Understand litigation budgets include discovery and experts.",
          "Synthesis: licensure and ethics frame professional behavior; Bates opened information markets; roles clarify who decides law vs. facts.",
          "Next: resolving disputes before or instead of trial.",
        ],
        {
        bulletPoints: [
          "Engagement letter — Scope, fees, communication",
          "Document prep — Organized facts save fees",
          "Realistic outcomes — Risk ranges not guarantees",
          "Referrals — Specialty match (immigration, IP, tax)",
          "Next — Negotiation, mediation, litigation",
        ],
        }
      )
    ],
    {
      subtitle: "Who does what in the legal ecosystem",
      learningObjectives: [
        "Describe paths to licensure and core ethics duties",
        "Differentiate trial courts, appellate courts, and specialized tribunals",
        "Explain roles of prosecutors, public defenders, corporate counsel, and judges",
        "Analyze Bates advertising's impact on access to justice",
      ],
      chapterSummary: "Chapter 7 surveys professional roles, ethics baselines, and how courts are staffed and respected.",
      keyConcepts: [
        "Bar admission",
        "Model Rules of Professional Conduct",
        "Adversarial system",
        "Judicial independence",
        "Access to counsel",
      ],
      realWorldRelevance: "Knowing which lawyer to hire—and judges' constraints—speeds sound referrals in business and personal matters.",
    }
  ),

  chapter(
    "dispute-resolution",
    8,
    "Negotiation, Mediation, and Litigation",
    [
      section(
        "dispute-resolution-s1",
        "8.1 Negotiation fundamentals",
        [
          "Negotiation exchanges promises to resolve conflict without a judge. Parties identify interests (security, speed, reputation) behind positions (dollar demands). Best Alternative To a Negotiated Agreement (BATNA) measures walk-away power—if your BATNA is strong, you demand more.",
          "Preparation requires fact chronologies, legal merits assessment, and emotional awareness. Hard bargaining tactics backfire in ongoing business relationships; integrative bargaining seeks trades across issues (payment schedule vs. public apology).",
          "Settlement of pending litigation needs authority checks—insurers, boards, government agencies. Without authority, deals unravel.",
        ],
        {
        bulletPoints: [
          "BATNA — Walk-away benchmark",
          "Interests vs. positions — Underlying needs",
          "Authority — Who can bind the party",
          "Documentation — Term sheets before final releases",
          "Relationship — Repeat players value reputation",
        ],
        }
      ),
      section(
        "dispute-resolution-s2",
        "8.2 Mediation and collaborative processes",
        [
          "Mediators facilitate but do not impose outcomes unless evaluative styles blur lines. Confidentiality statutes encourage candor; statements in mediation often inadmissible if litigation resumes.",
          "Court-annexed mediation programs push settlement before trial dates. Private mediators specialize in family, commercial, and employment disputes.",
          "Collaborative law in family cases contracts lawyers out if process fails—strong incentive to settle. Multi-party disputes need sequencing (bellwether plaintiffs).",
        ],
        {
        bulletPoints: [
          "Facilitative mediation — Party-controlled outcome",
          "Confidentiality — Protects frank discussion",
          "Court programs — Docket pressure drives uptake",
          "Evaluative mediation — Risk analysis from former judges",
          "Multi-party — Coordination and contribution issues",
        ],
        }
      ),
      section(
        "dispute-resolution-s3",
        "8.3 Arbitration — Gilmer and enforceability",
        [
          "Arbitration submits disputes to private neutrals under contractual rules. Federal Arbitration Act favors enforcement of written agreements. Gilmer v. Interstate/Johnson Lane Corp. (1991) upheld mandatory securities arbitration in employment, extending FAA reach into workplace rights claims subject to later limits.",
          "Employees and consumers challenge adhesion contracts—take-it-or-leave-it forms. Courts police unconscionability and waivers of substantive rights. Post-#MeToo, some statutes limit sexual harassment arbitration mandates.",
          "Arbitration can be faster and confidential but limits discovery and appeal. Awards convert to judgments with narrow judicial review.",
        ],
        {
        bulletPoints: [
          "FAA — Strong federal favor for arbitration",
          "Gilmer — Employment arbitration upheld",
          "Adhesion — Unconscionability defenses",
          "Process — Limited discovery and appeal",
          "Confidentiality — Less public precedent",
        ],
        caseStudies: [
          { name: "Gilmer v. Interstate/Johnson Lane Corp.", year: "1991", summary: "Upheld enforceable arbitration agreements in many employment contexts—ADR can be mandatory when parties contract for it." },
        ],
        }
      ),
      section(
        "dispute-resolution-s4",
        "8.4 Litigation as last resort",
        [
          "Litigation publicizes facts, creates precedent, and consumes time. Discovery costs dominate many business disputes. Jury trials add unpredictability; bench trials hinge on legal sophistication.",
          "Injunctive relief can stop harm before final judgment—bonds may be required. Class actions aggregate small harms when common issues predominate.",
          "International disputes add forum non conveniens and enforcement of foreign judgments under treaties.",
        ],
        {
        bulletPoints: [
          "Public record — Reputation and precedent effects",
          "Injunction — Equitable early relief",
          "Class action — Rule 23 aggregation",
          "Cost-benefit — Fees vs. expected recovery",
          "Enforcement — Judgment collection separate from winning",
        ],
        }
      ),
      section(
        "dispute-resolution-s5",
        "8.5 Designing a resolution strategy",
        [
          "Start with client goals: money, behavior change, precedent, or speed. Map forums available by contract and law. Attempt negotiation early with structured demands (Rule 408 settlement letters in federal practice).",
          "Synthesis: ADR is not always softer—mandatory arbitration can foreclose public process. Read clauses before signing employment and consumer deals.",
          "Next: property rights that often trigger disputes.",
        ],
        {
        bulletPoints: [
          "Goal clarity — Money vs. injunction vs. principle",
          "Clause audit — Arbitration and forum selection",
          "Settlement letters — Without prejudice communications",
          "Escalation ladder — Negotiate → mediate → sue",
          "Next — Property law essentials",
        ],
        }
      )
    ],
    {
      subtitle: "Resolving conflict on a spectrum from private deal to public trial",
      learningObjectives: [
        "Compare negotiation, mediation, arbitration, and litigation costs and outcomes",
        "Explain enforceability of settlement agreements and arbitration clauses",
        "Apply Gilmer to mandatory employment arbitration debates",
        "Draft dispute resolution strategy considering BATNA and relationships",
      ],
      chapterSummary: "Chapter 8 walks the dispute resolution ladder—from bilateral negotiation through ADR to courthouse litigation.",
      keyConcepts: [
        "BATNA",
        "Mediation confidentiality",
        "Arbitration awards",
        "Forum selection",
        "Settlement releases",
      ],
      realWorldRelevance: "Contracts and employment packets often bury arbitration clauses that foreclose jury trials.",
    }
  ),

  chapter(
    "property-law",
    9,
    "Property Law Essentials",
    [
      section(
        "property-law-s1",
        "9.1 Bundle of rights and estates",
        [
          "Property is not only things—it is legally protected interests: possess, use, exclude, transfer, destroy (within law). Fee simple absolute is the broadest private estate; life estates split present and future interests.",
          "Personal property (chattels) follows different rules—UCC sales, bailments, secured transactions. Intellectual property (patents, copyrights, trademarks) is statutory federal—Chapter 19 touches tech overlap.",
          "Land sale contracts require writing under Statute of Frauds in many states; deeds pass title when validly delivered and recorded.",
        ],
        {
        bulletPoints: [
          "Fee simple — Full ownership estate",
          "Life estate — Limited duration possession",
          "Personal vs. real — Different default rules",
          "Statute of Frauds — Writing for land transfers",
          "Recording — Notice to subsequent buyers",
        ],
        }
      ),
      section(
        "property-law-s2",
        "9.2 Landlord-tenant and shared ownership",
        [
          "Leases create possessory estates; eviction requires notice and court process in most residential settings. Habitability warranties and anti-discrimination laws overlay contract.",
          "Concurrent ownership—tenancy in common, joint tenancy with right of survivorship—splits rights among co-owners. Partition actions divide or sell when co-owners disagree.",
          "Homeowners associations exercise covenants running with land; fines and architectural control spark litigation.",
        ],
        {
        bulletPoints: [
          "Residential lease — Habitability and notice",
          "Eviction — Court order typically required",
          "Joint tenancy — Survivorship feature",
          "HOA covenants — Private land-use rules",
          "Partition — Court-ordered division or sale",
        ],
        }
      ),
      section(
        "property-law-s3",
        "9.3 Johnson, Kelo, and government power",
        [
          "Johnson v. M'Intosh (1823) held that discovery doctrine gave European nations superior title to extinguish indigenous occupancy in favor of federal grants—a foundation critics tie to ongoing Native land claims. The case shows property rules encoding political choices.",
          "Kelo v. City of New London (2005) allowed taking private property for economic development under public use interpreted broadly; public backlash produced state statutes tightening blight and compensation requirements.",
          "Regulatory takings doctrine asks when zoning or environmental rules go so far they require just compensation under the Fifth Amendment—Penn Central balancing tests dominate.",
        ],
        {
        bulletPoints: [
          "Johnson — Federal title supremacy over indigenous occupancy",
          "Kelo — Economic development as public use (federal view)",
          "State reform — Post-Kelo legislative limits",
          "Regulatory taking — Diminution of value tests",
          "Just compensation — Fair market value baseline",
        ],
        caseStudies: [
          { name: "Johnson v. M'Intosh", year: "1823", summary: "Federal title doctrine in land transfers—historic example of how property rules encode political choices, still cited in Native land discussions." },
          { name: "Kelo v. City of New London", year: "2005", summary: "Allowed economic-development takings under eminent domain—sparked state reforms on public use and compensation." },
        ],
        }
      ),
      section(
        "property-law-s4",
        "9.4 Easements, licenses, and covenants",
        [
          "Easements grant non-possessory use—utility lines, shared driveways. Creation by express grant, implication, necessity, or prescription (varies by state).",
          "Licenses are revocable permissions; easements generally run with land. Negative covenants restrict use (no billboards); equitable servitudes and HOA rules enforce neighborhood character.",
          "Adverse possession allows title by long, open, hostile occupation—statutory periods differ.",
        ],
        {
        bulletPoints: [
          "Affirmative easement — Right to use another's land",
          "Negative easement — Block certain uses",
          "Prescription — Time-based acquisition",
          "License — Terminable permission",
          "Adverse possession — Statutory elements",
        ],
        }
      ),
      section(
        "property-law-s5",
        "9.5 Property in transactions",
        [
          "Buyers conduct title searches and buy insurance against defects. Mortgages and deeds of trust secure loans with foreclosure procedures governed by state law.",
          "Synthesis: property rights shape where you live and work; government can take or regulate with constitutional limits.",
          "Next: voluntary transfers by contract.",
        ],
        {
        bulletPoints: [
          "Title insurance — Risk allocation for defects",
          "Closing — Deed, funds, and recording",
          "Foreclosure — Judicial vs. power of sale states",
          "Due diligence — Surveys and encumbrance lists",
          "Next — Contracts overview",
        ],
        }
      )
    ],
    {
      subtitle: "Estates, land, and government power over things",
      learningObjectives: [
        "Distinguish real, personal, and intellectual property at survey level",
        "Explain fee simple, life estates, and future interests basics",
        "Analyze eminent domain and regulatory takings after Kelo",
        "Connect Johnson v. M'Intosh to indigenous land title discussions",
      ],
      chapterSummary: "Chapter 9 introduces property as bundles of rights enforceable against the world, plus government taking and zoning powers.",
      keyConcepts: [
        "Bundle of rights",
        "Recording acts",
        "Easements",
        "Eminent domain",
        "Zoning",
      ],
      realWorldRelevance: "Leases, HOAs, and construction easements appear in housing and business daily.",
    }
  ),

  chapter(
    "contracts-overview",
    10,
    "Contracts: Formation and Enforceability",
    [
      section(
        "contracts-overview-s1",
        "10.1 Formation elements",
        [
          "A contract needs mutual assent (offer plus acceptance), consideration (bargained-for exchange), capacity, and legality. Gifts lack consideration and are generally unenforceable as contracts.",
          "Offers must be definite and communicated; acceptances mirror terms under common law mirror image rule (UCC Article 2 modifies for goods). Revocation generally allowed until acceptance.",
          "Consideration can be a promise, forbearance, or performance—nominal consideration sometimes upheld, pre-existing duty rule blocks sham exchanges.",
        ],
        {
        bulletPoints: [
          "Offer — Definite terms + intent",
          "Acceptance — Mirror image / UCC battle of forms",
          "Consideration — Bargained exchange",
          "Capacity — Minors, mental incapacity defenses",
          "Legality — Illegal bargains void",
        ],
        }
      ),
      section(
        "contracts-overview-s2",
        "10.2 Objective theory and reliance",
        [
          "Lucy v. Zehmer (1954) enforced a land sale scribbled on a restaurant napkin because outward manifestations showed serious intent despite defendant's claim he was joking. Subjective secret intent does not control if reasonable observers would think a deal was made.",
          "Promissory estoppel protects reliance when promises foreseeably induce action even without full consideration—common in employment and charity pledges.",
          "Parol evidence rule limits oral contradictions of integrated writings—exceptions for fraud and ambiguity.",
        ],
        {
        bulletPoints: [
          "Objective theory — Outward signs govern",
          "Promissory estoppel — Reliance remedy",
          "Integration — Final writing presumption",
          "Parol evidence — Oral terms exclusion with exceptions",
          "UCC gap fillers — Open price, delivery terms for goods",
        ],
        }
      ),
      section(
        "contracts-overview-s3",
        "10.3 Lucy v. Zehmer in depth",
        [
          "Facts: Defendants signed 'Memorandum' selling farm for $50,000; plaintiffs sought specific performance. Defendants claimed drunken jest. Court looked at outward transaction: handwriting, discussion with wife, half-hour negotiation.",
          "Rule: Mutual assent measured objectively; mental assent alone insufficient when outward signs contradict.",
          "Application: Reasonable person would believe parties intended binding agreement; consideration present in promise to buy/sell.",
          "Conclusion: Contract enforceable; case teaches examiners to screen facts for objective intent markers—signatures, partial performance, witnesses.",
        ],
        {
        bulletPoints: [
          "Venue — Bar room negotiation still counts",
          "Specific performance — Land uniquely valued remedy",
          "Jest defense — Fails when outward seriousness",
          "Exam tip — List objective indicators before conclusion",
          "Modern parallel — Email chains and emoji tone disputes",
        ],
        caseStudies: [
          { name: "Lucy v. Zehmer", year: "1954", summary: "Objective theory of assent—a joking contract on a napkin was enforceable when outward signs showed serious intent." },
        ],
        }
      ),
      section(
        "contracts-overview-s4",
        "10.4 Defenses and unconscionability",
        [
          "Defenses include mistake, misrepresentation, duress, undue influence, illegality, and unconscionability (procedural and substantive). Fine print adhesion contracts face scrutiny.",
          "Statute of Frauds requires writing for land, year-long services, suretyship, and UCC goods over threshold—part performance may remove bars.",
          "Conditions precedent allocate risk—financing approvals, inspections—failure excuses performance if not waived.",
        ],
        {
        bulletPoints: [
          "Misrepresentation — Fraudulent or negligent",
          "Duress — Illegitimate pressure vitiates assent",
          "Statute of Frauds — Writing requirements",
          "Unconscionability — Oppressive terms + unfair surprise",
          "Conditions — If-then performance triggers",
        ],
        }
      ),
      section(
        "contracts-overview-s5",
        "10.5 Breach and remedies",
        [
          "Material breach excuses the other side's performance; minor breach may only yield damages while contract continues. Anticipatory repudiation lets sue before performance date.",
          "Expectation damages put plaintiff in position had contract been performed; reliance restores out-of-pocket; restitution prevents unjust enrichment.",
          "Synthesis: contract law allocates commercial risk—read terms before clicking accept.",
          "Next: involuntary obligations in tort.",
        ],
        {
        bulletPoints: [
          "Material vs. minor breach — Performance excuse threshold",
          "Expectation — Benefit of the bargain",
          "Mitigation — Reduce damages after breach",
          "Specific performance — Equitable rarity except unique goods/land",
          "Next — Torts overview",
        ],
        }
      )
    ],
    {
      subtitle: "Promises the law will back with remedies",
      learningObjectives: [
        "Identify offer, acceptance, consideration, and capacity",
        "Apply objective theory of assent per Lucy v. Zehmer",
        "Recognize Statute of Frauds and unconscionability defenses",
        "Match remedies—expectation, reliance, restitution",
      ],
      chapterSummary: "Chapter 10 surveys contract formation, defenses, and breach remedies—the private law backbone of commerce.",
      keyConcepts: [
        "Objective assent",
        "Consideration",
        "Statute of Frauds",
        "Material breach",
        "Expectation damages",
      ],
      realWorldRelevance: "Clickwrap terms, employment offers, and vendor POs all turn on contract basics.",
    }
  ),

  chapter(
    "torts-overview",
    11,
    "Torts and Civil Wrongs",
    [
      section(
        "torts-overview-s1",
        "11.1 Negligence elements",
        [
          "Negligence requires duty, breach, actual and proximate causation, and damages. Duty scope was limited in Palsgraf by foreseeability; landowners owe entrants different duties by status (invitees, licensees, trespassers) in many states.",
          "Reasonable person standard is objective—subjective inexperience generally not excused. Professional malpractice compares to peer standards.",
          "Breach is failure to meet the standard; res ipsa loquitur allows inference when exclusive control and accidents ordinarily do not occur without negligence.",
        ],
        {
        bulletPoints: [
          "Duty — Legal obligation to protect",
          "Breach — Falling below standard",
          "Causation — Cause-in-fact (but-for) and proximate",
          "Damages — Compensable harm",
          "Malpractice — Professional negligence subset",
        ],
        }
      ),
      section(
        "torts-overview-s2",
        "11.2 Intentional torts and defenses",
        [
          "Battery is harmful or offensive contact; assault is apprehension of imminent battery; false imprisonment is confinement without lawful privilege.",
          "Defamation requires false statement of fact harming reputation; public figures need actual malice for constitutional reasons. Privacy torts cover intrusion, false light, appropriation, disclosure.",
          "Defenses include consent, self-defense, defense of others, and privilege (courtroom statements).",
        ],
        {
        bulletPoints: [
          "Battery/assault — Contact and apprehension",
          "IIED — Outrageous conduct causing severe distress",
          "Defamation — Libel/slander distinctions",
          "Privacy torts — Four classic types",
          "Privileges — Context-specific immunity",
        ],
        }
      ),
      section(
        "torts-overview-s3",
        "11.3 Liebeck v. McDonald's — facts matter",
        [
          "Stella Liebeck (1994) suffered third-degree burns when McDonald's coffee spilled in her lap at a drive-through. Evidence showed coffee held near 190°F, far hotter than home brewing, with hundreds of prior burn reports.",
          "Defendant argued assumption of risk and comparative fault; jury found partial fault but awarded compensatory and punitive damages (later reduced). Case settled after appeal debates.",
          "Media caricatured the case as frivolous; accurate facts teach damages caps, corporate policy, and settlement dynamics—not all verdicts are lottery wins.",
          "Products liability may apply strict liability for defective products—unreasonably dangerous when sold.",
        ],
        {
        bulletPoints: [
          "Severe burns — Medical costs and pain",
          "Corporate knowledge — Prior burn incidents",
          "Comparative fault — Split responsibility possible",
          "Punitive damages — Punish reckless conduct",
          "Lesson — Read record before labeling 'frivolous'",
        ],
        caseStudies: [
          { name: "Liebeck v. McDonald's Restaurants", year: "1994", summary: "Hot-coffee negligence case—often misreported in media; illustrates damages, comparative fault debates, and settlement dynamics." },
        ],
        }
      ),
      section(
        "torts-overview-s4",
        "11.4 Causation and damages",
        [
          "But-for cause asks whether harm would occur without breach; proximate cause limits liability to foreseeable types of harm. Intervening criminal acts may or may not break the chain.",
          "Damages include medical bills, lost wages, pain and suffering, and punitive (where allowed). Collateral source rules and damage caps vary by state.",
          "Wrongful death and survival statutes let estates recover for decedents.",
        ],
        {
        bulletPoints: [
          "Actual cause — But-for test",
          "Proximate — Foreseeable type of harm",
          "Intervening causes — Superseding vs. not",
          "Non-economic — Pain and suffering",
          "Caps — Legislative limits in some states",
        ],
        }
      ),
      section(
        "torts-overview-s5",
        "11.5 Tort reform and insurance",
        [
          "Tort reform debates target caps, collateral sources, and attorney fees. Insurance indemnifies many defendants; adjusters negotiate within policy limits.",
          "Synthesis: torts backstop contracts where no privity exists—neighbor harms neighbor.",
          "Next: agencies making rules with force of law.",
        ],
        {
        bulletPoints: [
          "Joint and several liability — Reform in many states",
          "Insurance — Duty to defend and indemnify",
          "Subrogation — Insurer recovers from tortfeasor",
          "Risk management — Safety programs reduce exposure",
          "Next — Administrative law",
        ],
        }
      )
    ],
    {
      subtitle: "Duty, breach, causation, and damages outside contract",
      learningObjectives: [
        "State negligence elements and reasonable person standard",
        "Contrast intentional torts and strict liability",
        "Explain comparative fault and damages categories",
        "Deconstruct Liebeck v. McDonald's with accurate facts",
      ],
      chapterSummary: "Chapter 11 covers civil wrongs compensating harm—primarily negligence, intentional torts, and strict liability.",
      keyConcepts: [
        "Duty-breach-causation-harm",
        "Proximate cause",
        "Comparative negligence",
        "Punitive damages",
        "Strict products liability",
      ],
      realWorldRelevance: "Injury claims, insurance adjusters, and safety policies all speak tort language.",
    }
  ),

  chapter(
    "administrative-law",
    12,
    "Administrative Law and Agencies",
    [
      section(
        "administrative-law-s1",
        "12.1 Why agencies exist",
        [
          "Congress lacks bandwidth to set air quality parts-per-million or patent examination rules. Statutes delegate authority; agencies staff experts and notice-and-comment processes.",
          "Agencies both legislate (rules) and adjudicate (orders) and enforce (investigations)—raising separation of powers questions answered by oversight, judicial review, and political appointment.",
          "Independent agencies (FTC, SEC) have leadership insulation; executive agencies report to Cabinet secretaries.",
        ],
        {
        bulletPoints: [
          "Delegation — Congress sets goals; agencies fill details",
          "Expertise — Technical standards and updating",
          "APA — Administrative Procedure Act framework",
          "Enforcement — Inspections, fines, consent orders",
          "Oversight — Congress, GAO, IG, courts",
        ],
        }
      ),
      section(
        "administrative-law-s2",
        "12.2 Rulemaking and adjudication",
        [
          "Informal rulemaking requires notice, public comment, and reasoned explanation in the final rule. Adjudication uses ALJs in some programs (SSA, NLRB) with appeal to commissions and courts.",
          "Guidance documents interpret rules without full rulemaking—contested when they effectively bind without process.",
          "Licensing and permits are individualized adjudications affecting businesses.",
        ],
        {
        bulletPoints: [
          "Notice-and-comment — 5 U.S.C. § 553 pathway",
          "ALJ hearings — Record-based decisions",
          "Guidance — Non-legislative interpretation risk",
          "Hybrid — Rulemaking features in licenses",
          "Record review — Courts defer to agency facts if supported",
        ],
        }
      ),
      section(
        "administrative-law-s3",
        "12.3 Chevron deference",
        [
          "Chevron U.S.A. Inc. v. NRDC (1984) established two steps: if statute clear, follow text; if ambiguous, defer to reasonable agency interpretation if within delegated authority.",
          "Chevron shaped decades of regulatory law—environment, immigration, communications. Critics argued judges abdicated; supporters cited democratic accountability through executive branch.",
          "Loper Bright Enterprises v. Raimondo (2024) overruled Chevron, requiring courts to independently interpret statutes—agencies still inform via experience and expertise, but courts need not defer.",
          "Students should read current doctrine in their year: exams may test transition from Chevron to post-Chevron analysis.",
        ],
        {
        bulletPoints: [
          "Step 1 — Clear statutory text controls",
          "Step 2 (Chevron) — Reasonable agency fill",
          "Loper Bright — Courts interpret independently (2024)",
          "Skidmore — Persuasive respect remains",
          "Practical — Regulatory stability during doctrinal shift",
        ],
        caseStudies: [
          { name: "Chevron U.S.A. Inc. v. Natural Resources Defense Council", year: "1984", summary: "Courts defer to reasonable agency interpretations of ambiguous statutes—core framework for how regulations gain force." },
        ],
        }
      ),
      section(
        "administrative-law-s4",
        "12.4 Judicial review and standing",
        [
          "APA §706 directs courts to set aside arbitrary, capricious, abuse of discretion, or not in accordance with law actions. Hard look review still demands reasoned explanation.",
          "Standing requires injury in fact, causation, redressability; ripeness and exhaustion of remedies gate challenges.",
          "Congress can strip jurisdiction in limited ways—constitutional bounds apply.",
        ],
        {
        bulletPoints: [
          "Arbitrary and capricious — Reasoned decisionmaking",
          "Exhaustion — Agency first in many programs",
          "Standing — Article III injury requirements",
          "Ripeness — Fit for judicial decision now",
          "Record — Agency facts on administrative record",
        ],
        }
      ),
      section(
        "administrative-law-s5",
        "12.5 Compliance mindset",
        [
          "Regulated firms maintain compliance calendars—comment periods, reporting, inspections. Comments on proposed rules shape final text.",
          "Synthesis: modern law is often agency law—pair statutes with CFR sections.",
          "Next: how courts receive evidence.",
        ],
        {
        bulletPoints: [
          "Compliance calendar — Deadlines and filings",
          "Voluntary disclosures — Mitigate enforcement",
          "Consent decrees — Settle without admission",
          "Whistleblowers — False Claims Act and SEC programs",
          "Next — Evidence basics",
        ],
        }
      )
    ],
    {
      subtitle: "The fourth branch in practice",
      learningObjectives: [
        "Explain rulemaking and adjudication inside agencies",
        "Describe Chevron deference and Loper Bright shifts at survey level",
        "Map judicial review under APA standards",
        "Identify where regulated industries meet daily life",
      ],
      chapterSummary: "Chapter 12 covers how agencies promulgate regulations, enforce them, and interact with courts.",
      keyConcepts: [
        "Delegation",
        "Notice-and-comment",
        "Chevron deference",
        "APA review",
        "Enforcement discretion",
      ],
      realWorldRelevance: "EPA, FDA, SEC, OSHA, and immigration agencies shape compliance budgets.",
    }
  ),

  chapter(
    "evidence-basics",
    13,
    "Evidence and Fact-Finding",
    [
      section(
        "evidence-basics-s1",
        "13.1 Relevance and character evidence",
        [
          "Federal Rules of Evidence (FRE) govern federal courts; states adopt similar codes. Relevant evidence tends to make a fact more or less probable. FRE 403 excludes relevant proof if unfair prejudice, confusion, or waste substantially outweighs probative value.",
          "Character evidence usually cannot prove conduct in civil cases; criminal defendants may open door carefully. Habit evidence differs—specific detailed routine.",
          "Subsequent remedial measures and settlement offers are excluded for policy reasons.",
        ],
        {
        bulletPoints: [
          "FRE 401/402 — Relevance threshold",
          "FRE 403 — Probative vs. unfair prejudice",
          "Character — Propensity limits",
          "Habit — Regular response pattern",
          "Policy exclusions — Repairs, settlements",
        ],
        }
      ),
      section(
        "evidence-basics-s2",
        "13.2 Hearsay and exceptions",
        [
          "Hearsay is an out-of-court statement offered for truth of the matter asserted—generally excluded unless an exception applies. Present sense impression, excited utterance, business records, and former testimony are common exceptions.",
          "Hearsay within hearsay requires each layer qualified. Authentication precedes admission—foundational witnesses tie exhibits to events.",
          "Crawford (next section) limits criminal use of testimonial hearsay without cross-examination.",
        ],
        {
        bulletPoints: [
          "Hearsay definition — Out-of-court + truth offered",
          "FRE 803/804 — Exceptions and unavailability",
          "Business records — Regular activity logs",
          "Authentication — Chain and witness foundation",
          "Non-hearsay — Effect on listener, impeachment",
        ],
        }
      ),
      section(
        "evidence-basics-s3",
        "13.3 Crawford and confrontation",
        [
          "Crawford v. Washington (2004) held the Sixth Amendment confrontation clause bars admission of testimonial hearsay against criminal defendants unless the declarant is unavailable and defendant had prior opportunity to cross-examine.",
          "Testimonial statements include formalized police interviews aimed at prosecution; ongoing debates cover forensic lab reports and body-worn camera narratives.",
          "Giles v. California addresses forfeiture by wrongdoing—defendants cannot create unavailability to dodge confrontation.",
          "Civil cases lack confrontation clause but parallel hearsay rules apply.",
        ],
        {
        bulletPoints: [
          "Testimonial — Core confrontation trigger",
          "Cross-examination — Primary right",
          "Forensic reports — Melendez-Diaz line of cases",
          "Forfeiture — Wrongdoing creates unavailability",
          "Civil — Hearsay rules without Sixth Amendment",
        ],
        caseStudies: [
          { name: "Crawford v. Washington", year: "2004", summary: "Confrontation Clause limits on testimonial hearsay—criminal defendants generally may cross-examine accusers." },
        ],
        }
      ),
      section(
        "evidence-basics-s4",
        "13.4 Privileges and experts",
        [
          "Attorney-client privilege protects confidential communications for legal advice; work product protects materials prepared for litigation. Exceptions include crime-fraud and future harm.",
          "Doctor-patient, spousal, and clergy privileges vary by state. FRE 502 attempts to limit inadvertent waiver in federal cases.",
          "Expert witnesses must be qualified; Daubert requires reliable methodology for scientific testimony in federal courts.",
        ],
        {
        bulletPoints: [
          "Attorney-client — Confidential legal communications",
          "Work product — Litigation preparation shield",
          "Expert — Qualification + reliable methods",
          "Daubert — Scientific reliability gate",
          "Privilege waiver — Careless disclosure risks",
        ],
        }
      ),
      section(
        "evidence-basics-s5",
        "13.5 Trials as evidence contests",
        [
          "Motions in limine preclude prejudicial evidence; objections preserve appeal issues. Jury instructions translate law after evidence closes.",
          "Synthesis: evidence rules channel factfinding—without them, trials become storytelling free-for-alls.",
          "Next: finding the rules in libraries and databases.",
        ],
        {
        bulletPoints: [
          "Objections — Specific grounds + offer of proof",
          "Burden of proof — Evidence aligns with standard",
          "Jury instructions — Law applied to admitted facts",
          "Bench trial — Judge as factfinder",
          "Next — Legal research and writing",
        ],
        }
      )
    ],
    {
      subtitle: "What factfinders may hear and how they weigh it",
      learningObjectives: [
        "Apply relevance and prejudice balancing under FRE 403",
        "Explain hearsay and confrontation in criminal cases",
        "Distinguish lay and expert testimony standards",
        "Use Crawford for testimonial hearsay limits",
      ],
      chapterSummary: "Chapter 13 introduces evidence rules governing trials—relevance, hearsay, privileges, witnesses, and constitutional confrontation.",
      keyConcepts: [
        "Relevance",
        "Hearsay exceptions",
        "Confrontation Clause",
        "Attorney-client privilege",
        "Burden of production",
      ],
      realWorldRelevance: "Depositions, HR investigations, and trials all filter what stories may be told.",
    }
  ),

  chapter(
    "legal-research",
    14,
    "Legal Research and Writing",
    [
      section(
        "legal-research-s1",
        "14.1 Research planning",
        [
          "Start with jurisdiction and cause of action. Generate search terms from parties, injuries, statutes, and defenses. Use secondary sources (treatises, ALR) for orientation, then primary law.",
          "Boolean and natural language searches in Westlaw, Lexis, and free CourtListener differ—learn field searches (court, date, citation).",
          "Cost control: run targeted queries; avoid downloading every tangential PDF.",
        ],
        {
        bulletPoints: [
          "Jurisdiction first — Binding vs. persuasive",
          "Issue list — Claims and defenses drive queries",
          "Secondary → primary — Orientation then authority",
          "Citators — Validate good law",
          "Cost awareness — Billable research discipline",
        ],
        }
      ),
      section(
        "legal-research-s2",
        "14.2 Citations and platforms",
        [
          "Bluebook format cites volume, reporter, page, court, year (e.g., 347 U.S. 483 (1954)). Short forms and id. follow after first full cite.",
          "Federal and state portals provide slip opinions; commercial databases add headnotes (not citable as law).",
          "Statutory cites use title and section (42 U.S.C. § 1983); regulations cite CFR title/part.",
        ],
        {
        bulletPoints: [
          "Case cite — Volume reporter page (court year)",
          "Statute — Title code section",
          "Regulation — CFR title/part",
          "Pinpoint — Page for quoted proposition",
          "Parallel cites — Alternate reporters",
        ],
        }
      ),
      section(
        "legal-research-s3",
        "14.3 Roe, Dobbs, and living databases",
        [
          "Roe v. Wade (1973) recognized constitutional protection for abortion before viability, becoming a research anchor for reproductive rights, privacy, and substantive due process bibliographies.",
          "Dobbs v. Jackson Women's Health Organization (2022) overruled Roe, holding no constitutional right to abortion and returning regulation largely to states. The pair illustrates how KeyCite flags overturned precedent and how memos must update when law changes mid-project.",
          "Researchers track negative treatment, pending legislation, and state constitutional provisions post-Dobbs—static answers fail clients.",
          "Oyez and LII provide free opinion access; always confirm current holdings.",
        ],
        {
        bulletPoints: [
          "Roe — Viability framework (historical)",
          "Dobbs — Overrule; state regulation space",
          "Citator flags — Red stop signs for overruled",
          "Client update — Memos need revision after major cases",
          "Federal vs. state — Post-Dobbs patchwork",
        ],
        caseStudies: [
          { name: "Roe v. Wade", year: "1973", summary: "Example of how published opinions become research anchors—later limited in Dobbs v. Jackson (2022), showing precedent can change." },
        ],
        }
      ),
      section(
        "legal-research-s4",
        "14.4 Predictive and persuasive writing",
        [
          "Predictive memos analyze likely outcomes for internal clients—neutral tone, thorough counterarguments. Persuasive briefs advocate—still cite accurately.",
          "CRAC (Conclusion, Rule, Application, Conclusion) variants organize sections. Headings guide busy judges.",
          "Proofreading and citation checks prevent credibility loss—one wrong cite undermines the rest.",
        ],
        {
        bulletPoints: [
          "Predictive memo — Office evaluation",
          "Trial brief — Advocate with record cites",
          "Appellate brief — Standards of review sections",
          "CRAC/IRAC — Structural clarity",
          "Proofread — Citations and quotes exact",
        ],
        }
      ),
      section(
        "legal-research-s5",
        "14.5 Professional habits",
        [
          "Maintain research logs—queries run, databases, dates—for ethical billing and reproducibility.",
          "Synthesis: research and writing convert Chapter 2 sources into advice.",
          "Next: ethics governing how lawyers use that advice.",
        ],
        {
        bulletPoints: [
          "Research log — Reproducible trail",
          "Version control — Memos dated with law snapshot",
          "Collaboration — Clear attribution in teams",
          "Plagiarism — Cite borrowed analysis",
          "Next — Ethics and professionalism",
        ],
        }
      )
    ],
    {
      subtitle: "From question to memo with verifiable citations",
      learningObjectives: [
        "Plan research strategy before diving into databases",
        "Cite and Shepardize cases using Bluebook basics",
        "Draft predictive memos and persuasive briefs",
        "Track how Roe and Dobbs illustrate precedent change",
      ],
      chapterSummary: "Chapter 14 teaches research paths, citation, and professional writing forms.",
      keyConcepts: [
        "Research plan",
        "KeyCite/Shepard's",
        "Bluebook",
        "Predictive memo",
        "Persuasive brief",
      ],
      realWorldRelevance: "Paralegals and analysts who cite accurately save attorneys hours and reduce malpractice risk.",
    }
  ),

  chapter(
    "ethics-professionalism",
    15,
    "Legal Ethics and Professionalism",
    [
      section(
        "ethics-professionalism-s1",
        "15.1 Duties to clients",
        [
          "Model Rule 1.1 demands competent representation—knowledge, skill, preparation. Rule 1.3 requires reasonable diligence; 1.4 mandates communication about status and decisions needing client input.",
          "Fees must be reasonable; contingent fees need writing in many cases. Trust accounts segregate client funds—commingling is disciplinary gold.",
          "Scope limitations in engagement letters prevent drift into unauthorized practice areas.",
        ],
        {
        bulletPoints: [
          "Competence — Know or learn the law",
          "Communication — Prompt, clear updates",
          "Fees — Reasonable and transparent",
          "Trust accounts — Segregated client money",
          "Scope — Defined representation boundaries",
        ],
        }
      ),
      section(
        "ethics-professionalism-s2",
        "15.2 Duties to tribunals and third parties",
        [
          "Candor requires truthful factual statements to courts; lawyers must correct false evidence discovered later. Rule 3.8 special duties for prosecutors—disclose Brady material, avoid improper publicity.",
          "Fairness to opposing parties prohibits falsifying evidence or ex parte contacts with judges except as allowed.",
          "Third-party payers (insurers) create conflicts—disclose influences on client control.",
        ],
        {
        bulletPoints: [
          "Candor — No false facts; correct errors",
          "Prosecutor — Brady and fairness duties",
          "Ex parte — Judge contact limits",
          "Opposing counsel — No bullying or deception",
          "Third-party payers — Disclose and manage conflicts",
        ],
        }
      ),
      section(
        "ethics-professionalism-s3",
        "15.3 In re Gault — fairness for youth",
        [
          "In re Gault (1967) held juveniles facing delinquency charges that could lead to confinement deserve notice of charges, counsel, confrontation, and privilege against self-incrimination—Sixth and Fourteenth Amendment rights.",
          "Facts: 15-year-old Gerald Gault allegedly made lewd phone call; judge committed him six years without standard criminal procedure.",
          "Rule: Due process requires essentials of fair trial when liberty at stake, even in juvenile court labeled civil.",
          "Application changed juvenile justice nationwide—lawyers must treat youth proceedings as quasi-criminal, not benign counseling.",
          "Lesson: ethics includes knowing procedural rights attach whenever consequences resemble criminal punishment.",
        ],
        {
        bulletPoints: [
          "Notice — Charges specified",
          "Counsel — Right to lawyer",
          "Confrontation — Cross-examine accusers",
          "Privilege — Against self-incrimination",
          "Juvenile — Serious consequences trigger due process",
        ],
        caseStudies: [
          { name: "In re Gault", year: "1967", summary: "Extended due-process protections to juveniles—lawyers must know procedural rights attach in quasi-criminal settings too." },
        ],
        }
      ),
      section(
        "ethics-professionalism-s4",
        "15.4 Professionalism and bias",
        [
          "Professionalism is courtesy, punctuality, and respect beyond Rule minimums. Incivility slows dockets and draws sanctions.",
          "Bias and harassment violate Rules 8.4 and workplace laws; diversity programs aim to make courts trustworthy for all communities.",
          "Technology competence (Rule 1.1 comment) requires understanding e-discovery and AI limits—verify machine outputs.",
        ],
        {
        bulletPoints: [
          "Civility — Courtroom and correspondence tone",
          "Bias — Cultural competence and inclusion",
          "Tech competence — ESI and AI verification",
          "Sanctions — 28 U.S.C. § 1927 and inherent power",
          "Pro bono — Voluntary access contributions",
        ],
        }
      ),
      section(
        "ethics-professionalism-s5",
        "15.5 When to say no",
        [
          "Decline cases with unmanageable conflicts, lacking competence, or promoting crime. Withdraw properly if client persists in fraud.",
          "Synthesis: ethics guard the system's legitimacy—clients trust lawyers when rules enforced.",
          "Next: law beyond U.S. borders.",
        ],
        {
        bulletPoints: [
          "Decline — Conflicts, competence, illegality",
          "Withdraw — Court permission + client protection",
          "Reporting — Mandatory ethics reporting of misconduct",
          "Self-care — Impairment risks competence",
          "Next — International and comparative law",
        ],
        }
      )
    ],
    {
      subtitle: "Duties to clients, courts, and the public",
      learningObjectives: [
        "Apply confidentiality and conflict rules at survey depth",
        "Explain prosecutorial and defense ethics differences",
        "Describe professionalism beyond minimum compliance",
        "Connect In re Gault to juvenile justice rights",
      ],
      chapterSummary: "Chapter 15 covers Model Rules themes—competence, diligence, communication, fees, and integrity.",
      keyConcepts: [
        "Confidentiality",
        "Conflicts",
        "Competence",
        "Candor",
        "Access to justice",
      ],
      realWorldRelevance: "Ethics violations end careers; professionalism builds trust short of discipline.",
    }
  ),

  chapter(
    "international-law",
    16,
    "International and Comparative Law",
    [
      section(
        "international-law-s1",
        "16.1 Sources of international law",
        [
          "Article 38 of the ICJ Statute lists treaties, custom, general principles, and subsidiary materials. Treaties bind parties who ratify; custom emerges from widespread consistent practice plus opinio juris (sense of legal obligation).",
          "Soft law—declarations, guidelines—shapes politics without hard enforcement. Resolutions of UN General Assembly are usually not binding alone.",
          "International organizations coordinate—WTO trade, WHO health—but power varies.",
        ],
        {
        bulletPoints: [
          "Treaties — Ratified agreements between states",
          "Custom — Practice + legal obligation sense",
          "Soft law — Persuasive guidelines",
          "General principles — Shared legal ideas",
          "IOs — UN, WTO, regional bodies",
        ],
        }
      ),
      section(
        "international-law-s2",
        "16.2 Domestic incorporation",
        [
          "Dualist systems require implementing legislation; monist systems may apply treaties directly—U.S. is mixed: self-executing treaties rare; Congress implements.",
          "Charming Betsy canon interprets statutes to avoid international law conflicts when possible.",
          "Federal preemption affects state foreign policy attempts.",
        ],
        {
        bulletPoints: [
          "Self-executing treaties — Rare in U.S.",
          "Implementing statutes — Congress acts",
          "Last-in-time — Treaty vs. statute conflicts complex",
          "States — Cannot conduct foreign policy",
          "Charming Betsy — Statutory interpretation canon",
        ],
        }
      ),
      section(
        "international-law-s3",
        "16.3 Paquete Habana and customary law",
        [
          "The Paquete Habana (1900) held customary international law is part of U.S. law unless displaced by treaty or statute—coastal fishing vessels exempt from capture during war under longstanding custom.",
          "Facts involved Spanish-American War prize claims; court surveyed state practice and treatises.",
          "Modern applications include humanitarian law norms and human rights debates in federal courts.",
          "Shows domestic judges applying global rules without waiting for Congress.",
        ],
        {
        bulletPoints: [
          "Custom as federal law — Unless displaced",
          "War prizes — Historic context",
          "Humanitarian norms — Modern extensions",
          "Displacement — Later treaty or statute controls",
          "Judicial role — Courts recognize evolving custom",
        ],
        caseStudies: [
          { name: "The Paquete Habana", year: "1900", summary: "Customary international law binds U.S. courts unless displaced by treaty or statute—shows domestic courts applying global norms." },
        ],
        }
      ),
      section(
        "international-law-s4",
        "16.4 Comparative legal families",
        [
          "Common law (U.S., UK) emphasizes precedent; civil law (France, Germany) emphasizes codes and scholarly treatises; religious law systems influence family and commercial rules in several countries.",
          "Comparative lawyers study functional equivalents—does another system achieve same goal via different institution?",
          "Hague Conventions harmonize service of process, child abduction remedies.",
        ],
        {
        bulletPoints: [
          "Common law — Case-centric reasoning",
          "Civil law — Code-centric",
          "Mixed systems — Louisiana, Scotland hybrids",
          "Functional comparison — Problem-focused study",
          "Hague — Cross-border judicial cooperation",
        ],
        }
      ),
      section(
        "international-law-s5",
        "16.5 Business and human rights",
        [
          "Sanctions, export controls, and anti-bribery statutes (FCPA) reach across borders. Human rights litigation uses Alien Tort Statute with narrowing Supreme Court decisions.",
          "Synthesis: international law layers atop domestic—check both when advising multinationals.",
          "Next: business transactions chapter.",
        ],
        {
        bulletPoints: [
          "FCPA — Foreign bribery prohibition",
          "Sanctions — OFAC compliance programs",
          "ATS — Human rights suits (limited)",
          "Supply chain — Due diligence norms",
          "Next — Business law intro",
        ],
        }
      )
    ],
    {
      subtitle: "How nations make and break rules together",
      learningObjectives: [
        "Distinguish treaties, custom, and soft law",
        "Explain Paquete Habana and domestic application",
        "Compare civil law and common law traditions",
        "Identify international organizations' roles",
      ],
      chapterSummary: "Chapter 16 surveys public international law sources and comparative legal families.",
      keyConcepts: [
        "Treaties",
        "Customary international law",
        "Monism/dualism",
        "Civil vs. common law",
        "ICJ and UN frameworks",
      ],
      realWorldRelevance: "Trade, human rights, and conflict affect U.S. businesses and travelers through international rules.",
    }
  ),

  chapter(
    "business-law-intro",
    17,
    "Business Transactions and Regulation",
    [
      section(
        "business-law-intro-s1",
        "17.1 Choosing a business form",
        [
          "Sole proprietorships are simple but expose personal assets. Partnerships share profits and liability unless limited partnerships structure roles. LLCs combine contractual flexibility with limited liability; corporations split ownership (shares) and management (board/officers).",
          "Tax treatment differs—pass-through vs. C-corp double taxation vs. S-corp elections. Lawyers coordinate with accountants.",
          "Formation requires state filings, operating agreements or bylaws, and registered agents.",
        ],
        {
        bulletPoints: [
          "Sole prop — Unlimited personal liability",
          "Partnership — Shared management/liability variants",
          "LLC — Operating agreement flexibility",
          "Corporation — Shares, directors, officers",
          "Tax — Entity classification elections",
        ],
        }
      ),
      section(
        "business-law-intro-s2",
        "17.2 Securities and fundraising",
        [
          "Securities Act of 1933 regulates offerings; Securities Exchange Act of 1934 governs trading and disclosure for public companies. SEC requires registration or exempt offerings (Reg D, crowdfunding rules).",
          "Antifraud Rule 10b-5 prohibits material misstatements in connection with securities sales. Insider trading liability protects market integrity.",
          "Startups document SAFEs, preferred stock, and due diligence data rooms.",
        ],
        {
        bulletPoints: [
          "1933 Act — New issues disclosure",
          "1934 Act — Ongoing reporting and fraud",
          "Exemptions — Private placements",
          "10b-5 — Antifraud backbone",
          "Insider trading — Material nonpublic information bar",
        ],
        }
      ),
      section(
        "business-law-intro-s3",
        "17.3 Citizens United and corporate speech",
        [
          "Citizens United v. FEC (2010) held the government cannot ban independent political expenditures by corporations and unions under the First Amendment—corporate speech restrictions viewed as viewpoint censorship.",
          "Facts involved a film about Hillary Clinton; Bipartisan Campaign Reform Act limits struck for independent expenditures.",
          "Corporate political spending disclosure debates continue; shareholders push governance reforms.",
          "Distinction: direct contributions to candidates remain regulated differently from independent expenditures.",
        ],
        {
        bulletPoints: [
          "Independent expenditures — Protected speech",
          "Corporate personhood — First Amendment applies",
          "Disclosure — Fighting corruption interest debated",
          "Super PACs — Post-decision landscape",
          "Governance — Shareholder proposals on political spending",
        ],
        caseStudies: [
          { name: "Citizens United v. FEC", year: "2010", summary: "Corporate political speech limits—demonstrates how business entities intersect constitutional law and regulation." },
        ],
        }
      ),
      section(
        "business-law-intro-s4",
        "17.4 Fiduciary duties and governance",
        [
          "Directors owe duties of care (informed decisions) and loyalty (no self-dealing). Business judgment rule protects good-faith board choices absent conflicts.",
          "Shareholder derivative suits police management wrongdoing. Executive compensation disclosed in proxy statements.",
          "Employment law, IP assignment, and contracts overlap—holistic compliance programs help.",
        ],
        {
        bulletPoints: [
          "Duty of care — Informed, deliberate process",
          "Duty of loyalty — Conflicts disclosed or avoided",
          "Business judgment — Deference if process sound",
          "Derivative suit — Shareholders sue for corporation",
          "Compliance — Policies across HR, IP, privacy",
        ],
        }
      ),
      section(
        "business-law-intro-s5",
        "17.5 Regulatory patchwork",
        [
          "Antitrust prohibits monopolization and unreasonable restraints; FTC/DOJ enforce. Consumer protection bars deceptive practices. Employment law adds wage-hour and discrimination layers.",
          "Synthesis: business law is corporate form plus securities plus sector regulators.",
          "Next: family relationships regulated by law.",
        ],
        {
        bulletPoints: [
          "Sherman Act — Antitrust core",
          "FTC Act — Unfair/deceptive practices",
          "FLSA — Wages and hours",
          "Title VII — Employment discrimination",
          "Next — Family law overview",
        ],
        }
      )
    ],
    {
      subtitle: "Entities, markets, and constitutional intersections",
      learningObjectives: [
        "Compare sole proprietorship, partnership, LLC, and corporation",
        "Explain securities regulation basics and fiduciary duties",
        "Analyze Citizens United's speech framework for corporations",
        "Spot regulatory overlap—employment, consumer, antitrust",
      ],
      chapterSummary: "Chapter 17 introduces business forms, securities, and corporate constitutional intersections.",
      keyConcepts: [
        "Limited liability",
        "Fiduciary duty",
        "Securities Act disclosure",
        "Corporate personhood",
        "Antitrust",
      ],
      realWorldRelevance: "Founders choose entities; compliance touches every hiring and fundraising decision.",
    }
  ),

  chapter(
    "family-law",
    18,
    "Family Law Overview",
    [
      section(
        "family-law-s1",
        "18.1 Marriage and domestic partnerships",
        [
          "States license marriage meeting age, consent, and prohibited relationship rules. Obergefell v. Hodges (2015) required states to license and recognize same-sex marriages, grounding in liberty and equality.",
          "Prenuptial agreements allocate property on death or divorce if procedurally fair and not unconscionable at signing.",
          "Domestic partnership and civil union remnants vary; federal benefits tied to marriage definitions post-Obergefell.",
        ],
        {
        bulletPoints: [
          "License requirements — Age, consent, waiting periods",
          "Obergefell — Nationwide same-sex marriage recognition",
          "Prenups — Full disclosure + voluntary signing",
          "Common law marriage — Few states recognize",
          "Benefits — Tax, immigration, ERISA implications",
        ],
        }
      ),
      section(
        "family-law-s2",
        "18.2 Divorce and property",
        [
          "No-fault divorce allows dissolution without proving adultery—irreconcilable differences statutes dominate. Property division uses equitable distribution (fair, not necessarily equal) or community property in nine states.",
          "Spousal support considers length of marriage, earning capacity, and contributions as homemaker. Tax treatment of support changed after 2018 tax law.",
          "Attorneys negotiate parenting plans before trial; mediation common.",
        ],
        {
        bulletPoints: [
          "No-fault — Breakdown of marriage standard",
          "Equitable vs. community — Division frameworks",
          "Alimony — Need + ability to pay",
          "Marital vs. separate property — Classification fights",
          "Mediation — Parenting and property settlements",
        ],
        }
      ),
      section(
        "family-law-s3",
        "18.3 Obergefell and equal dignity",
        [
          "Obergefell consolidated cases where same-sex couples were denied marriage licenses or recognition. Majority held the Fourteenth Amendment requires states to license and recognize same-sex marriages, protecting intimate choices and children's dignity.",
          "Dissents argued democratic process should decide; majority viewed exclusion as stigmatic injury.",
          "Implementation was rapid—forms and benefits systems updated. Conflicts now shift to other LGBTQ+ policy areas beyond marriage.",
          "Students should read actual syllabus, not slogans, for holdings vs. reasoning.",
        ],
        {
        bulletPoints: [
          "Issue — Marriage recognition for same-sex couples",
          "Holding — Constitution requires license + recognition",
          "Policy — Child dignity and stability cited",
          "Implementation — statewide form updates",
          "Legacy — Foundation for further equality debates",
        ],
        caseStudies: [
          { name: "Obergefell v. Hodges", year: "2015", summary: "Recognized same-sex marriage nationwide—family law often tracks evolving equal-protection and due-process doctrine." },
        ],
        }
      ),
      section(
        "family-law-s4",
        "18.4 Custody and support",
        [
          "Child custody uses best interests of the child—factors include parental fitness, stability, and sometimes child's preference by age. Legal vs. physical custody split decision-making from residence.",
          "Child support guidelines use income shares models; modifications require changed circumstances.",
          "Domestic violence presumptions affect custody; supervised visitation protects safety.",
        ],
        {
        bulletPoints: [
          "Best interests — Multi-factor test",
          "Legal custody — Decisions about education/health",
          "Physical custody — Residence schedule",
          "Support guidelines — State formula tables",
          "Protection — DV impact on parenting orders",
        ],
        }
      ),
      section(
        "family-law-s5",
        "18.5 Adoption and dependency",
        [
          "Adoption permanently severs prior parental rights after home studies and waiting periods. Interstate cases use Interstate Compact on Adoption.",
          "Dependency courts address abuse and neglect—goal is reunification or alternative permanent placement. Gault rights apply if delinquency charges could confine.",
          "Synthesis: family law balances adult autonomy with child protection.",
          "Next: technology reshaping privacy and evidence.",
        ],
        {
        bulletPoints: [
          "Adoption — Consent and best interests",
          "Foster care — Temporary safety plan",
          "Dependency — CPS investigations and hearings",
          "ICWA — Federal limits on Native child removals",
          "Next — Technology law",
        ],
        }
      )
    ],
    {
      subtitle: "Marriage, dissolution, children, and dependency",
      learningObjectives: [
        "Explain marriage licensing and Obergefell's federal recognition",
        "Outline divorce grounds, property division, and support",
        "Describe custody standards—best interests of the child",
        "Recognize juvenile dependency vs. criminal delinquency",
      ],
      chapterSummary: "Chapter 18 surveys family law's mix of status, contract, and children's interests.",
      keyConcepts: [
        "Marriage equality",
        "Equitable distribution",
        "Child support guidelines",
        "Best interests standard",
        "Prenuptial agreements",
      ],
      realWorldRelevance: "HR and benefits teams encounter family status changes; personal life intersects court systems.",
    }
  ),

  chapter(
    "technology-law",
    19,
    "Law, Technology, and Privacy",
    [
      section(
        "technology-law-s1",
        "19.1 Fourth Amendment and digital searches",
        [
          "Fourth Amendment protects against unreasonable searches and seizures. Warrants need probable cause; exceptions include exigent circumstances, automobile (limited), and consent.",
          "Digital devices hold vast data—courts require warrants with particularity. Riley v. California (2014) rejected warrantless cell phone searches incident to arrest absent exigency.",
          "Carpenter (2018) limited warrantless historical cell-site location records—third-party doctrine narrowed for detailed location trails.",
        ],
        {
        bulletPoints: [
          "Warrant — Probable cause + particularity",
          "Riley — Cell phones generally need warrant",
          "Carpenter — CSLI warrant requirement",
          "Third-party doctrine — Shrinking for digital trails",
          "Workplace — Employer devices lower expectation",
        ],
        }
      ),
      section(
        "technology-law-s2",
        "19.2 Statutory privacy frameworks",
        [
          "HIPAA protects health information; GLBA covers financial institutions; state laws like California CPRA expand consumer rights to know, delete, and opt out of sale/sharing.",
          "GDPR in EU influences U.S. multinationals—lawful basis, data minimization, DPIAs.",
          "Breach notification statutes impose timelines and attorney general reporting.",
        ],
        {
        bulletPoints: [
          "HIPAA — PHI safeguards and notices",
          "CPRA/CCPA — Consumer rights + service provider contracts",
          "GDPR — EU standard with extraterritorial reach",
          "Breach notice — State timing and content rules",
          "Privacy policies — Disclose collection and sharing",
        ],
        }
      ),
      section(
        "technology-law-s3",
        "19.3 Riley in depth",
        [
          "Riley v. California (2014) combined cases where police searched arrestees' phones without warrants. Court held digital data quantity and quality differ from physical pockets—warrant generally required.",
          "Concurrences debated breadth; dissents warned law enforcement needs.",
          "Impact: police procedures, exigent circumstance arguments, and border/search policies updated nationwide.",
          "Workplaces: employer-owned devices policies should be clear; criminal parallels do not erase private employer searches on company phones (within limits).",
        ],
        {
        bulletPoints: [
          "Arrest context — Search incident narrowed",
          "Data volume — Justifies higher protection",
          "Passwords — Additional forensic issues post-Riley",
          "Cloud — Remote data may need separate warrants",
          "Policy — Written mobile device rules",
        ],
        caseStudies: [
          { name: "Riley v. California", year: "2014", summary: "Warrant generally required to search cell phones incident to arrest—digital evidence rules adapt Fourth Amendment to new tech." },
        ],
        }
      ),
      section(
        "technology-law-s4",
        "19.4 Platforms, speech, and AI",
        [
          "47 U.S.C. § 230 shields platforms from liability as publishers of third-party content with exceptions—reform debates ongoing.",
          "Computer Fraud and Abuse Act criminalizes unauthorized access—scope contested in scraping cases.",
          "AI governance emerging: transparency, bias audits, intellectual property of training data. Courts grapple with authorship and discovery of model outputs.",
        ],
        {
        bulletPoints: [
          "Section 230 — Platform liability shield (debated)",
          "CFAA — Unauthorized access",
          "Deepfakes — Fraud and election laws intersect",
          "AI contracts — Liability allocation between vendors and users",
          "E-discovery — Machine-generated evidence authentication",
        ],
        }
      ),
      section(
        "technology-law-s5",
        "19.5 Compliance program basics",
        [
          "Map data flows, classify sensitive data, implement access controls, train staff, and test incident response.",
          "Synthesis: tech law mixes constitutional criminal procedure with consumer statutes.",
          "Next: pathways into legal careers.",
        ],
        {
        bulletPoints: [
          "Data inventory — Know what you hold",
          "Minimization — Collect only needed fields",
          "Vendor DPAs — Flow-down obligations",
          "Incident response — Legal + IT joint runbooks",
          "Next — Law careers",
        ],
        }
      )
    ],
    {
      subtitle: "Digital evidence, data protection, and platform regulation",
      learningObjectives: [
        "Apply Fourth Amendment search doctrine to digital devices",
        "Survey consumer privacy statutes and GDPR influence",
        "Explain platform liability debates (Section 230 survey)",
        "Connect Riley to workplace and criminal investigations",
      ],
      chapterSummary: "Chapter 19 links constitutional search limits with statutory privacy and emerging tech regulation.",
      keyConcepts: [
        "Fourth Amendment digital searches",
        "Cell-site location",
        "Consumer privacy laws",
        "Section 230",
        "AI governance",
      ],
      realWorldRelevance: "Every organization stores personal data—breach notice and privacy policies are legal deliverables.",
    }
  ),

  chapter(
    "law-careers",
    20,
    "Studying Law and Career Pathways",
    [
      section(
        "law-careers-s1",
        "20.1 Path to a law license",
        [
          "Undergraduate education has no mandated major—skills in writing, research, and logic matter. LSAT (or GRE at some schools) gates admission; law school is three years full-time or four part-time.",
          "ABA-accredited schools required for bar in most states. Clinics, law review, and internships build resumes.",
          "Bar exam (UBE in many states) tests multistate subjects plus state components; character and fitness review continues.",
        ],
        {
        bulletPoints: [
          "Pre-law — Any major + strong GPA",
          "LSAT/GRE — Admission predictor",
          "JD — Core 1L curriculum + electives",
          "Bar exam — Licensure gate",
          "Character & fitness — Ongoing obligation",
        ],
        }
      ),
      section(
        "law-careers-s2",
        "20.2 Practice settings and specialties",
        [
          "Large firms hire associates on partnership tracks; boutiques specialize (IP, labor). Prosecutors and public defenders serve government; AG offices combine policy and litigation.",
          "Corporate counsel, legal aid, NGOs, and compliance roles grow. Judicial clerships offer one- to two-year apprenticeships with judges.",
          "Specialties include immigration, tax, environmental, health, entertainment—depth builds after general foundation.",
        ],
        {
        bulletPoints: [
          "BigLaw — Structured training + billable hours",
          "Public defense/prosecution — Courtroom-heavy",
          "In-house — Business-partner role",
          "Legal aid — Access gap service",
          "Compliance — Regulatory advisory without bar (varies)",
        ],
        }
      ),
      section(
        "law-careers-s3",
        "20.3 Gideon and defense careers",
        [
          "Gideon v. Wainwright (1963) held the Sixth Amendment requires states to provide counsel in felony cases for indigent defendants—constitutional right to lawyer.",
          "Clarence Gideon handwrote his petition; Court overruled Betts v. Brady. Public defender offices expanded but remain underfunded in many counties.",
          "Career lesson: defense lawyers protect liberty against state power—funding debates are policy, not optional nicety.",
          "Related: right to counsel in misdemeanors with jail time (Argersinger).",
        ],
        {
        bulletPoints: [
          "Gideon — Felony indigent counsel required",
          "Public defenders — High caseloads common",
          "Funding — State and local budget fights",
          "Argersinger — Misdemeanor jail triggers counsel",
          "Pro bono — Private bar supplements system",
        ],
        caseStudies: [
          { name: "Gideon v. Wainwright", year: "1963", summary: "Right to counsel in felony cases—shaped public-defender careers and indigent defense funding debates nationwide." },
        ],
        }
      ),
      section(
        "law-careers-s4",
        "20.4 Paralegal, court, and policy roles",
        [
          "Paralegals research, draft, and manage discovery under attorney supervision—certificates and degrees vary. Court clerks and mediators serve administration of justice.",
          "Policy analysts and legislative staff draft statutes without practicing law. Compliance analysts monitor regulations.",
          "Skills: clear writing, citation, emotional intelligence, and technology fluency translate across roles.",
        ],
        {
        bulletPoints: [
          "Paralegal — Supervised practice support",
          "Court staff — Docket and judicial support",
          "Legislative — Bill drafting and analysis",
          "Compliance — Agency rule tracking",
          "Skills — Writing + research + professionalism",
        ],
        }
      ),
      section(
        "law-careers-s5",
        "20.5 Course synthesis and next steps",
        [
          "You now have a map: sources, courts, criminal vs. civil, reasoning, rights, profession, ADR, property, contracts, torts, agencies, evidence, research, ethics, international, business, family, technology, careers.",
          "Continue with specialized ForgEd courses, undergraduate pre-law advising, or paralegal programs. Stay humble—law changes; citators and news must be habits.",
          "Remember disclaimer: this course educates; it does not make you a lawyer. Consult licensed counsel for specific problems.",
          "Carry forward one practice from each unit: timeline literacy (Ch.1), source hierarchy (Ch.2), jurisdiction checklist (Ch.3), burden labels (Ch.4), IRAC drafts (Ch.5), duty mapping (Ch.6), ethics awareness (Ch.7–8), property and contract snapshots (Ch.9–10), tort fact discipline (Ch.11), agency rule tracking (Ch.12), evidence objections vocabulary (Ch.13), research logs (Ch.14), and technology privacy reviews (Ch.19).",
          "Thank you for studying legal fundamentals with rigor and curiosity.",
        ],
        {
        bulletPoints: [
          "20-chapter map — Revisit weak sections before finals",
          "Specialize — Choose advanced courses by interest",
          "Habits — Primary sources + citators + ethics",
          "Network — Internships and professional associations",
          "Disclaimer — Education ≠ legal advice",
        ],
        }
      )
    ],
    {
      subtitle: "Education, practice settings, and public service",
      learningObjectives: [
        "Map pre-law, law school, and licensure pathways",
        "Compare practice settings—firm, government, corporate, nonprofit",
        "Explain Gideon's impact on defense careers",
        "Plan skill-building beyond the classroom",
      ],
      chapterSummary: "Chapter 20 closes the course with education routes, career options, and skills for legal-adjacent roles.",
      keyConcepts: [
        "LSAT/JD pathway",
        "Bar exam",
        "Practice areas",
        "Gideon",
        "Alternative legal careers",
      ],
      realWorldRelevance: "Informed career choices reduce debt mismatches and clarify paralegal vs. attorney paths.",
    }
  )
];
