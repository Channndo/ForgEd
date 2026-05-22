/**
 * Illustrative U.S. case studies for law textbook section 3 (scenarios).
 * General education only — not legal advice.
 */

/** @typedef {{ name: string; year?: string; summary: string }} CaseStudy */

/** @type {Record<string, Record<string, CaseStudy[]>>} */
export const LAW_CASE_STUDIES = {
  "legal-fundamentals": {
    "what-is-law": [
      {
        name: "Brown v. Board of Education",
        year: "1954",
        summary:
          "Held that racial segregation in public schools violates equal protection; shows how courts translate constitutional principles into binding rules for society.",
      },
    ],
    "sources-of-law": [
      {
        name: "Marbury v. Madison",
        year: "1803",
        summary:
          "Established judicial review—federal courts may declare statutes unconstitutional when they conflict with the Constitution.",
      },
      {
        name: "Erie Railroad Co. v. Tompkins",
        year: "1938",
        summary:
          "Held that federal courts sitting in diversity apply state substantive law, not a general federal common law—shaping how precedent and statutes interact.",
      },
    ],
    "courts-procedure": [
      {
        name: "International Shoe Co. v. Washington",
        year: "1945",
        summary:
          "Defined minimum contacts for personal jurisdiction—courts need a fair link between the defendant and the forum before adjudicating a dispute.",
      },
    ],
    "criminal-civil": [
      {
        name: "Miranda v. Arizona",
        year: "1966",
        summary:
          "Required warnings before custodial interrogation in criminal cases—illustrates how constitutional criminal procedure differs from civil liability rules.",
      },
      {
        name: "O.J. Simpson civil trial (illustrative)",
        year: "1997",
        summary:
          "Acquittal in criminal court followed by civil liability for wrongful death—shows different burdens of proof and parties between criminal and civil systems.",
      },
    ],
    "legal-reasoning": [
      {
        name: "Palsgraf v. Long Island R.R.",
        year: "1928",
        summary:
          "Classic duty-and-foreseeability dispute in torts—judges reason from facts to rules differently, previewing how precedent splits.",
      },
    ],
    "rights-duties": [
      {
        name: "Griswold v. Connecticut",
        year: "1965",
        summary:
          "Recognized constitutional privacy limits on government—rights often emerge from penumbras of explicit amendments, not a single clause.",
      },
    ],
    "legal-profession": [
      {
        name: "Bates v. State Bar of Arizona",
        year: "1977",
        summary:
          "Struck down blanket bans on lawyer advertising—shows how professional regulation balances public access with ethics rules.",
      },
    ],
    "dispute-resolution": [
      {
        name: "Gilmer v. Interstate/Johnson Lane Corp.",
        year: "1991",
        summary:
          "Upheld enforceable arbitration agreements in many employment contexts—ADR can be mandatory when parties contract for it.",
      },
    ],
    "property-law": [
      {
        name: "Johnson v. M'Intosh",
        year: "1823",
        summary:
          "Federal title doctrine in land transfers—historic example of how property rules encode political choices, still cited in Native land discussions.",
      },
      {
        name: "Kelo v. City of New London",
        year: "2005",
        summary:
          "Allowed economic-development takings under eminent domain—sparked state reforms on public use and compensation.",
      },
    ],
    "contracts-overview": [
      {
        name: "Lucy v. Zehmer",
        year: "1954",
        summary:
          "Objective theory of assent—a joking contract on a napkin was enforceable when outward signs showed serious intent.",
      },
    ],
    "torts-overview": [
      {
        name: "Liebeck v. McDonald's Restaurants",
        year: "1994",
        summary:
          "Hot-coffee negligence case—often misreported in media; illustrates damages, comparative fault debates, and settlement dynamics.",
      },
    ],
    "administrative-law": [
      {
        name: "Chevron U.S.A. Inc. v. Natural Resources Defense Council",
        year: "1984",
        summary:
          "Courts defer to reasonable agency interpretations of ambiguous statutes—core framework for how regulations gain force.",
      },
    ],
    "evidence-basics": [
      {
        name: "Crawford v. Washington",
        year: "2004",
        summary:
          "Confrontation Clause limits on testimonial hearsay—criminal defendants generally may cross-examine accusers.",
      },
    ],
    "legal-research": [
      {
        name: "Roe v. Wade",
        year: "1973",
        summary:
          "Example of how published opinions become research anchors—later limited in Dobbs v. Jackson (2022), showing precedent can change.",
      },
    ],
    "ethics-professionalism": [
      {
        name: "In re Gault",
        year: "1967",
        summary:
          "Extended due-process protections to juveniles—lawyers must know procedural rights attach in quasi-criminal settings too.",
      },
    ],
    "international-law": [
      {
        name: "The Paquete Habana",
        year: "1900",
        summary:
          "Customary international law binds U.S. courts unless displaced by treaty or statute—shows domestic courts applying global norms.",
      },
    ],
    "business-law-intro": [
      {
        name: "Citizens United v. FEC",
        year: "2010",
        summary:
          "Corporate political speech limits—demonstrates how business entities intersect constitutional law and regulation.",
      },
    ],
    "family-law": [
      {
        name: "Obergefell v. Hodges",
        year: "2015",
        summary:
          "Recognized same-sex marriage nationwide—family law often tracks evolving equal-protection and due-process doctrine.",
      },
    ],
    "technology-law": [
      {
        name: "Riley v. California",
        year: "2014",
        summary:
          "Warrant generally required to search cell phones incident to arrest—digital evidence rules adapt Fourth Amendment to new tech.",
      },
    ],
    "law-careers": [
      {
        name: "Gideon v. Wainwright",
        year: "1963",
        summary:
          "Right to counsel in felony cases—shaped public-defender careers and indigent defense funding debates nationwide.",
      },
    ],
  },
  "contracts-law": {
    "contract-nature": [
      {
        name: "Hawkins v. McGee",
        year: "1929",
        summary:
          "The “hairy hand” case—expectation damages put the injured party in the position promised, not merely out-of-pocket costs.",
      },
    ],
    "mutual-assent": [
      { name: "Lucy v. Zehmer", year: "1954", summary: "Outward manifestations of assent control—drunken scribbles on a bar napkin could still form a contract." },
      { name: "Leonard v. Pepsico", year: "1999", summary: "Advertisements are usually invitations, not offers—Harrier jet commercial was puffery, not a binding deal." },
    ],
    "consideration": [
      { name: "Hamer v. Sidway", year: "1891", summary: "Forbearance from legal rights can be valid consideration—a nephew’s abstinence from drinking supported uncle’s promise." },
    ],
    "capacity": [
      { name: "Ortelere v. Teachers' Retirement Board", year: "1967", summary: "Mental incapacity can void contracts when a party cannot understand the nature and consequences of the transaction." },
    ],
    "legality": [
      { name: "In re Marriage of Graham", year: "1979", summary: "Illegal or against-public-policy bargains are void—courts refuse to enforce contracts that undermine regulatory schemes." },
    ],
    "statute-frauds": [
      { name: "Statute of Frauds (UCC § 2-201)", year: "—", summary: "Sale of goods $500+ generally needs a signed writing—illustrated in countless merchant disputes over confirmatory memos." },
    ],
    "parol-evidence": [
      { name: "Pacific Gas & Electric Co. v. G.W. Thomas Drayage", year: "1968", summary: "Ambiguous integrated contracts may admit parol evidence to explain terms—interpretation fights follow deal paper." },
    ],
    "interpretation": [
      { name: "Frigaliment Importing Co. v. B.N.S. International Sales Corp.", year: "1969", summary: "“Chicken” meant broilers or stewing hens—courts construe words against the drafter when meaning is unclear." },
    ],
    "conditions": [
      { name: "Jacob & Youngs v. Kent", year: "1921", summary: "Substantial performance with minor breach—homeowner could not withhold full price for wrong-brand pipe if value unchanged." },
    ],
    "breach-types": [
      { name: "Hochster v. De la Tour", year: "1853", summary: "Anticipatory repudiation lets the non-breaching party sue before performance date when future breach is clear." },
    ],
    "remedies-damages": [
      { name: "Hadley v. Baxendale", year: "1854", summary: "Consequential damages must be foreseeable at contracting—broken mill shaft delayed profits were too remote." },
    ],
    "specific-performance": [
      { name: "Walters v. Marathon Oil Co.", year: "1981", summary: "Specific performance is discretionary—courts weigh adequacy of money damages and hardship to defendants." },
    ],
    "assignment-delegation": [
      { name: "Restatement (Second) of Contracts § 317", year: "—", summary: "Rights can be assigned unless contract or law forbids; delegating duties does not release the original obligor without novation." },
    ],
    "third-party": [
      { name: "Lawrence v. Fox", year: "1859", summary: "Third-party beneficiary may enforce a contract made for their benefit—creditor–debtor–promisee triangle classic." },
    ],
    "discharge": [
      { name: "Clark v. West", year: "1917", summary: "Modified duties after partial performance—illustrates accord and satisfaction when parties later adjust obligations." },
    ],
    "warranties": [
      { name: "Henningsen v. Bloomfield Motors", year: "1960", summary: "Consumer auto warranties and disclaimers—courts police unconscionable boilerplate in adhesion contracts." },
    ],
    "sales-contracts": [
      { name: "ProCD, Inc. v. Zeidenberg", year: "1996", summary: "Shrink-wrap / click-wrap licenses can be enforceable if buyer has opportunity to reject terms—UCC meets software." },
    ],
    "online-contracts": [
      { name: "Specht v. Netscape Communications Corp.", year: "2002", summary: "Browse-wrap terms failed without reasonable notice—UI design affects whether users assent online." },
    ],
    "international-contracts": [
      { name: "Filanto, S.p.A. v. Chilewich International Corp.", year: "1992", summary: "Arbitration clauses in international sales—CISG and forum selection shape cross-border enforcement." },
    ],
    "contract-drafting": [
      { name: "Raffles v. Wichelhaus", year: "1864", summary: "Mutual mistake on which ship “Peerless” meant—drafting ambiguity voided the bargain (the “two ships Peerless” case)." },
    ],
  },
  "torts-law": {
    "tort-theory": [
      { name: "Donoghue v. Stevenson", year: "1932", summary: "Neighbor principle in negligence—duty extends to foreseeable victims, foundational for modern tort theory." },
    ],
    "intentional-torts": [
      { name: "Vosburg v. Putney", year: "1891", summary: "Battery includes harmful or offensive contact—even a playful kick in class can be tortious if intent to touch exists." },
    ],
    "intentional-property": [
      { name: "Katko v. Briney", year: "1971", summary: "Spring-gun booby trap injured trespasser—deadly force to protect unoccupied property is generally unreasonable." },
    ],
    "negligence-duty": [
      { name: "Palsgraf v. Long Island R.R.", year: "1928", summary: "Duty is to foreseeable plaintiffs—exploding package on a platform created a famous limits-of-duty dispute." },
    ],
    "causation": [
      { name: "Summers v. Tice", year: "1948", summary: "Substantial factor and alternative liability when two hunters shoot one victim—causation doctrines shift burdens." },
    ],
    "damages-negligence": [
      { name: "United States v. Carroll Towing Co.", year: "1947", summary: "Hand formula (B<PL) for reasonable care—economics of risk inform negligence standards." },
    ],
    "defenses-negligence": [
      { name: "Li v. Yellow Cab Co. of California", year: "1975", summary: "Comparative negligence replaced contributory bar in many states—allocation of fault reduces but rarely eliminates recovery." },
    ],
    "strict-liability": [
      { name: "Rylands v. Fletcher", year: "1868", summary: "Non-natural use of land and escape of harm—early strict liability for abnormally dangerous activities." },
    ],
    "products-liability": [
      { name: "Greenman v. Yuba Power Products, Inc.", year: "1963", summary: "Strict liability in tort for defective products—manufacturers answer for injuries without proving negligence." },
    ],
    "nuisance": [
      { name: "Boomer v. Atlantic Cement Co.", year: "1970", summary: "Permanent nuisance with injunction vs. damages—courts balance economic harm and pollution control." },
    ],
    "defamation": [
      { name: "New York Times Co. v. Sullivan", year: "1964", summary: "Actual malice standard for public officials—First Amendment reshapes defamation liability." },
    ],
    "misrepresentation": [
      { name: "Ultramares Corp. v. Touche", year: "1931", summary: "Auditor liability to third parties limited—fraud and negligent misrepresentation require privity or near relationships." },
    ],
    "vicarious-liability": [
      { name: "Christensen v. Swenson", year: "1999", summary: "Scope of employment for respondeat superior—frolic vs. detour determines employer liability for employee torts." },
    ],
    "joint-tortfeasors": [
      { name: "Dunkin v. Boskey", year: "2000", summary: "Joint and several liability reforms vary by state—how multiple defendants share judgment collection." },
    ],
    "immunities": [
      { name: "Pierson v. Post", year: "1805", summary: "Wild-animal capture dispute—illustrates how property-based rules intersect recreational injury immunities." },
    ],
    "workers-comp": [
      { name: "Larson's Workers' Compensation Law (treatise)", year: "—", summary: "Exclusive remedy system trades tort suits for no-fault benefits—statutory scheme replaces negligence litigation for workplace injuries." },
    ],
    "medical-malpractice": [
      { name: "Helling v. Carey", year: "1974", summary: "Custom is not the ceiling of care—reasonable prudence may require inexpensive tests even if specialty practice lagged." },
    ],
    "mass-torts": [
      { name: "In re Agent Orange Product Liability Litigation", year: "1984", summary: "Class actions and MDL consolidate mass tort claims—settlement and science battles scale tort law." },
    ],
    "insurance-torts": [
      { name: "Crisci v. Security Insurance Co.", year: "1967", summary: "Bad-faith failure to settle within policy limits—insurers owe duties that shape tort litigation strategy." },
    ],
    "tort-reform": [
      { name: "Liebeck v. McDonald's Restaurants", year: "1994", summary: "Caps and punitive-damages debates often cite this case—reformers argue juries need statutory limits; critics cite access to justice." },
    ],
  },
  "constitutional-law": {
    "foundations": [
      { name: "McCulloch v. Maryland", year: "1819", summary: "Necessary and Proper Clause lets Congress create a national bank—federal power is not limited to express lists only." },
    ],
    "judicial-review": [
      { name: "Marbury v. Madison", year: "1803", summary: "Judicial review born—courts interpret the Constitution and may void conflicting statutes." },
    ],
    "separation-powers": [
      { name: "Youngstown Sheet & Tube Co. v. Sawyer", year: "1952", summary: "President cannot seize steel mills without congressional authorization—executive power has hard limits." },
    ],
    "federalism": [
      { name: "National Federation of Independent Business v. Sebelius", year: "2012", summary: "ACA Medicaid expansion and taxing power—federalism limits how Congress pressures states." },
    ],
    "legislative-power": [
      { name: "INS v. Chadha", year: "1983", summary: "Legislative veto is unconstitutional—lawmaking must follow bicameralism and presentment." },
    ],
    "executive-power": [
      { name: "United States v. Nixon", year: "1974", summary: "Executive privilege is not absolute—subpoenaed tapes must be produced, showing judicial check on the presidency." },
    ],
    "bill-of-rights": [
      { name: "Barron v. Baltimore", year: "1833", summary: "Originally Bill of Rights bound only federal government—later incorporation applied many protections to states." },
    ],
    "due-process": [
      { name: "Mathews v. Eldridge", year: "1976", summary: "Balancing test for procedural due process before government deprives property or benefits." },
    ],
    "equal-protection": [
      { name: "Brown v. Board of Education", year: "1954", summary: "Separate educational facilities are inherently unequal—cornerstone of modern equal-protection doctrine." },
    ],
    "first-amendment": [
      { name: "Brandenburg v. Ohio", year: "1969", summary: "Speech inciting imminent lawless action is unprotected—sets a high bar for punishing political expression." },
    ],
    "religion-clauses": [
      { name: "Lemon v. Kurtzman", year: "1971", summary: "Establishment Clause test (later refined)—government aid to religious schools must not excessively entangle church and state." },
    ],
    "search-seizure": [
      { name: "Katz v. United States", year: "1967", summary: "Fourth Amendment protects reasonable expectations of privacy, not only physical trespass—phone booth wiretap case." },
    ],
    "criminal-procedure": [
      { name: "Miranda v. Arizona", year: "1966", summary: "Custodial interrogation requires warnings and waiver—Fifth and Sixth Amendments protect suspects." },
    ],
    "economic-rights": [
      { name: "Lochner v. New York", year: "1905", summary: "Struck maximum-hours law for bakers—later repudiated, but shows rise and fall of substantive due process in economic regulation." },
    ],
    "voting-rights": [
      { name: "Shelby County v. Holder", year: "2013", summary: "Invalidated preclearance formula in Voting Rights Act—federal oversight of state election laws remains contested." },
    ],
    "state-constitutions": [
      { name: "Pruneyard Shopping Center v. Robins", year: "1980", summary: "State constitutions may grant speech rights on private property beyond federal minimums—California example." },
    ],
    "contemporary-issues": [
      { name: "Dobbs v. Jackson Women's Health Organization", year: "2022", summary: "Overruled Roe—illustrates how constitutional meaning shifts with Court membership and stare decisis debates." },
    ],
    "constitutional-change": [
      { name: "District of Columbia v. Heller", year: "2008", summary: "Second Amendment protects individual handgun possession in the home—amendment process and interpretation both change rights." },
    ],
    "comparative-constitutional": [
      { name: "Roe v. Wade / Dobbs v. Jackson", year: "1973 / 2022", summary: "U.S. abortion doctrine compared globally—shows how different constitutions protect or defer on the same social issue." },
    ],
    "civic-participation": [
      { name: "Citizens United v. FEC", year: "2010", summary: "Independent corporate political spending—constitutional law shapes how citizens and organizations participate in elections." },
    ],
  },
  "criminal-law-fundamentals": {
    "crime-elements": [
      { name: "In re Winship", year: "1970", summary: "Proof beyond a reasonable doubt required for criminal convictions—defines the government's burden on each element." },
    ],
    "mens-rea": [
      { name: "Morissette v. United States", year: "1952", summary: "Mens rea is presumed in federal crimes unless Congress clearly eliminates it—intent matters for punishment." },
    ],
    "homicide": [
      { name: "People v. Goetz", year: "1986", summary: "Self-defense and subjective belief in imminent harm—homicide grading turns on reasonableness and provocation." },
    ],
    "assault-battery": [
      { name: "People v. Humphrey", year: "1996", summary: "Battered-spouse context in homicide—shows how assault history informs defense and charging decisions." },
    ],
    "property-crimes": [
      { name: "Larceny by trick vs. embezzlement (classic)", year: "—", summary: "Taking vs. lawful possession later converted—property crime labels depend on initial authorization." },
    ],
    "inchoate-crimes": [
      { name: "United States v. Valle", year: "2017", summary: "Conspiracy and kidnapping plot over internet—inchoate liability requires agreement plus overt act in federal schemes." },
    ],
    "defenses-justification": [
      { name: "State v. Wanrow", year: "1977", summary: "Imperfect self-defense and gendered violence context—justification defenses are fact-intensive." },
    ],
    "defenses-excuse": [
      { name: "Durham v. United States", year: "1954", summary: "Insanity reform era—excuse defenses ask whether mental disease prevented knowing wrongfulness (jurisdiction-specific)." },
    ],
    "accomplice-liability": [
      { name: "Pinkerton v. United States", year: "1946", summary: "Conspiracy can make co-conspirators liable for foreseeable substantive crimes of others in the agreement." },
    ],
    "sentencing": [
      { name: "United States v. Booker", year: "2005", summary: "Federal sentencing guidelines advisory after Sixth Amendment jury findings—structured discretion returns to judges." },
    ],
    "juvenile-justice": [
      { name: "In re Gault", year: "1967", summary: "Juveniles accused of delinquency deserve notice, counsel, and confrontation—adult-like process in juvenile court." },
    ],
    "white-collar": [
      { name: "United States v. Skilling", year: "2010", summary: "Enron fraud convictions—mail/wire fraud and honest-services theories in corporate prosecutions." },
    ],
    "drug-offenses": [
      { name: "Apprendi v. New Jersey", year: "2000", summary: "Any fact increasing statutory maximum must be found by a jury beyond a reasonable doubt—limits judicial drug sentencing enhancements." },
    ],
    "cybercrime": [
      { name: "United States v. Morris", year: "1991", summary: "First major CFAA prosecution for releasing the Morris Worm—computer trespass statutes meet novel harms." },
    ],
    "victim-rights": [
      { name: "Payne v. Tennessee", year: "1991", summary: "Victim impact evidence at sentencing—balances defendant rights with harm testimony in capital and serious cases." },
    ],
    "police-powers": [
      { name: "Terry v. Ohio", year: "1968", summary: "Stop-and-frisk on reasonable suspicion—Fourth Amendment allows brief detentions short of probable cause." },
    ],
    "prosecution": [
      { name: "Brady v. Maryland", year: "1963", summary: "Prosecutors must disclose exculpatory evidence—failure can overturn convictions and discipline lawyers." },
    ],
    "trial-rights": [
      { name: "Batson v. Kentucky", year: "1986", summary: "Racial discrimination in jury selection is unconstitutional—prosecutors and defense face scrutiny on peremptory strikes." },
    ],
    "appeals-habeas": [
      { name: "Strickland v. Washington", year: "1984", summary: "Ineffective assistance of counsel standard—prejudice plus deficient performance gates post-conviction relief." },
    ],
    "criminal-justice-system": [
      { name: "Gideon v. Wainwright", year: "1963", summary: "Right to counsel in felony cases—structural reform case for how indigent defense systems are funded." },
    ],
  },
  "business-law": {
    "contracts-intro": [
      { name: "Lucy v. Zehmer", year: "1954", summary: "Objective assent in business deals—outward signs of agreement bind even if a party claims jest." },
    ],
    "contract-formation": [
      { name: "Leonard v. Pepsico", year: "1999", summary: "Promotional offers vs. binding contracts—marketing puffery rarely creates enforceable commercial terms." },
    ],
    "contract-terms": [
      { name: "UCC § 2-207 (Battle of the Forms)", year: "—", summary: "Merchant confirmatory memos can form contracts despite conflicting boilerplate—practical formation in B2B sales." },
    ],
    "breach-remedies": [
      { name: "Hadley v. Baxendale", year: "1854", summary: "Foreseeable consequential damages limit recovery—buyers must communicate special loss risks at formation." },
    ],
    "sales-ucc": [
      { name: "Hadley v. Baxendale (UCC adoption)", year: "—", summary: "Article 2 remedies echo common-law foreseeability—perfect tender and cure rules govern merchant sales." },
    ],
    "torts-intro": [
      { name: "Palsgraf v. Long Island R.R.", year: "1928", summary: "Foreseeability limits duty—businesses face tort exposure when conduct risks harm to identifiable classes." },
    ],
    "negligence": [
      { name: "United States v. Carroll Towing Co.", year: "1947", summary: "Reasonable care balances burden, probability, and gravity—risk management parallels negligence law." },
    ],
    "strict-products": [
      { name: "Greenman v. Yuba Power Products, Inc.", year: "1963", summary: "Strict products liability—manufacturers in supply chains answer for defective goods injuring consumers." },
    ],
    "business-entities": [
      { name: "Salomon v. Salomon & Co.", year: "1897", summary: "Corporate veil separates shareholder liability in ordinary circumstances—foundational for LLC and corp planning." },
    ],
    "governance": [
      { name: "Smith v. Van Gorkom", year: "1985", summary: "Board duty of care in sale of company—directors need informed process and reasonable investigation (Delaware)." },
    ],
    "securities-overview": [
      { name: "SEC v. W.J. Howey Co.", year: "1946", summary: "Investment contract test—offerings may be securities even when labeled otherwise, triggering disclosure duties." },
    ],
    "employment-law": [
      { name: "McDonnell Douglas Corp. v. Green", year: "1973", summary: "Burden-shifting framework in Title VII discrimination claims—HR investigations mirror evidentiary stages." },
    ],
    "labor-relations": [
      { name: "NLRB v. Jones & Laughlin Steel Corp.", year: "1937", summary: "Commerce power supports National Labor Relations Act—collective bargaining rights in interstate industry." },
    ],
    "intellectual-property": [
      { name: "Apple Computer, Inc. v. Microsoft Corp.", year: "1994", summary: "GUI look-and-feel copyright dispute—shows how IP battles shape product design and licensing." },
    ],
    "antitrust": [
      { name: "United States v. Microsoft Corp.", year: "2001", summary: "Monopolization and tying in software markets—Sherman Act enforcement against dominant platforms." },
    ],
    "regulatory-compliance": [
      { name: "Chevron U.S.A. Inc. v. NRDC", year: "1984", summary: "Agency deference on ambiguous rules—compliance teams follow regulations agencies reasonably interpret." },
    ],
    "consumer-protection": [
      { name: "FTC v. Wyndham Worldwide Corp.", year: "2015", summary: "FTC Act covers unreasonable data security—consumer protection extends to cybersecurity practices." },
    ],
    "bankruptcy-basics": [
      { name: "Mission Product Holdings, Inc. v. Tempnology, LLC", year: "2019", summary: "Trademark licenses in bankruptcy—debtor-in-possession cannot always void executory contracts without consequences." },
    ],
    "international-business": [
      { name: "Filanto, S.p.A. v. Chilewich International Corp.", year: "1992", summary: "CISG and arbitration in cross-border sales—choice of law clauses steer dispute forums." },
    ],
    "risk-management": [
      { name: "Ultramares Corp. v. Touche", year: "1931", summary: "Auditor liability limits—risk managers scope insurance and contracts knowing third-party suits face barriers." },
    ],
  },
};

/** @param {string} slug @param {string} chapterId @returns {CaseStudy[] | undefined} */
export function getLawCaseStudies(slug, chapterId) {
  return LAW_CASE_STUDIES[slug]?.[chapterId];
}

export const LAW_COURSE_SLUGS = Object.keys(LAW_CASE_STUDIES);
