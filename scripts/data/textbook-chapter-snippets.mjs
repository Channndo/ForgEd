/**
 * Chapter-specific hooks merged into generated textbook sections.
 * Keys are lowercase substrings matched against chapter titles.
 */

const LAW_HOOKS = {
  "tort": "Tort law compensates private wrongs—injury to persons or property—through civil lawsuits distinct from criminal prosecution. Goals include deterrence, compensation, and corrective justice.",
  "negligence": "Negligence is the workhorse of tort practice: duty, breach, causation, and damages must each be proved with evidence that survives motion practice.",
  "strict liability": "Strict liability removes fault from the equation for abnormally dangerous activities and many defective-product claims—focus shifts to causation and damages.",
  "intentional": "Intentional torts require volitional acts aimed at contact, confinement, property interference, or reputation harm—defenses include consent and privilege.",
  "damages": "Damages convert harm into a monetary award: economic losses, pain and suffering, and sometimes punitive sums when conduct is egregious.",
  "defamation": "Defamation balances reputation protection with free speech; public figures face higher burdens, and truth remains a powerful defense.",
  "privacy": "Privacy torts guard against unreasonable intrusion, publicity of private facts, false light, and appropriation of likeness for commercial gain.",
  "constitutional": "Constitutional law allocates power among branches, defines individual rights against government action, and supplies frameworks courts use daily.",
  "due process": "Due process guarantees fair procedures before liberty or property is taken—notice, hearing, and impartial decision-makers matter.",
  "equal protection": "Equal protection doctrine sorts government classifications by scrutiny level—rational basis, intermediate, or strict—depending on the right and group affected.",
  "first amendment": "First Amendment doctrine protects expression, press, assembly, and petition while allowing time-place-manner rules and narrow categories of unprotected speech.",
  "contract": "Contract law enforces voluntary exchanges with offer, acceptance, consideration, and definite terms—expectation damages put the injured party in the bargain position.",
  "ucc": "Article 2 of the UCC governs sales of goods with gap-filling rules, warranties, and remedies tuned to commercial speed.",
  "criminal": "Criminal law requires proof beyond a reasonable doubt, respects constitutional protections, and uses sanctions to condemn public wrongs.",
  "evidence": "Evidence rules filter what fact-finders may hear—relevance, hearsay exceptions, privileges, and impeachment shape trial narratives.",
  "property": "Property law defines bundles of rights in land and chattels—possession, use, exclusion, and transfer—with recording systems that protect buyers.",
  "business entity": "Entity choice—corporation, LLC, partnership—affects liability shields, taxation, governance, and capital-raising flexibility.",
  "employment": "Employment law blends contract, statute, and agency rules on wages, discrimination, safety, and collective bargaining rights.",
  "intellectual": "Intellectual property allocates exclusivity for patents, copyrights, trademarks, and trade secrets to reward innovation while limiting anti-competitive reach.",
  "scientific method": "The scientific method cycles observation, hypothesis, controlled experiment, analysis, and revision—claims stay provisional until evidence accumulates.",
  "cell": "Cell biology explains how structure and organelles enable metabolism, signaling, and inheritance from DNA to RNA to protein.",
  "atom": "Atomic theory and the periodic table predict bonding, reactivity, and stoichiometry—the math of balanced equations must match measured outcomes.",
  "force": "Newtonian mechanics links force, mass, and acceleration; free-body diagrams and conservation laws turn word problems into solvable models.",
  "earth": "Earth systems integrate geology, oceanography, and atmospheric processes—plate tectonics and climate data interpret change across deep time.",
  "free-body": "Engineering analysis starts with sketches, assumptions, and free-body diagrams before selecting materials and safety factors.",
  "thermodynamic": "Thermodynamics sets hard limits on efficiency; entropy explains why perfect engines and refrigerators are impossible.",
  "control": "Feedback control compares measured outputs to setpoints, adjusting inputs to reject disturbances in plants and products alike.",
};

const CYBER_HOOKS = {
  "phish": "Phishing succeeds on urgency and impersonation; technical controls help, but reporting channels and verification habits stop most losses.",
  "password": "Password policies should pair length with managers, breach checks, and phishing-resistant factors—not rotating trivial strings monthly.",
  "incident": "Incident response is a rehearsed playbook: prepare, detect, analyze, contain, eradicate, recover, and document lessons for the next event.",
  "network": "Network design trades convenience for segmentation—flat LANs let one stolen laptop become a company-wide event.",
};

function matchHook(pool, chapterTitle) {
  const lower = chapterTitle.toLowerCase();
  for (const [needle, hook] of Object.entries(pool)) {
    if (lower.includes(needle)) return hook;
  }
  return null;
}

export function chapterHook(domain, chapterTitle) {
  if (domain === "law") return matchHook(LAW_HOOKS, chapterTitle);
  if (domain === "science") return matchHook(LAW_HOOKS, chapterTitle);
  if (domain === "engineering") return matchHook(LAW_HOOKS, chapterTitle);
  if (domain === "cyber") return matchHook(CYBER_HOOKS, chapterTitle);
  return null;
}
