import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const CONTRACTS_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Contracts Law",
  subtitle: "ForgEd deep-dive — contracts law",
  paragraphs: [
    "This ForgEd digital textbook presents Contracts Law at academic survey depth — cited frameworks, rigorous prose, and chapter learning objectives. 20 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Material is general legal education, not legal advice. Consult a licensed attorney for specific matters.",
  ],
};

export const CONTRACTS_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "contract-nature",
    1,
    "Nature and Function of Contracts",
    [
    section(
      "contract-nature-s1",
      "1.1 Nature and Function of Contracts — Foundations and vocabulary",
      ["Contract law enforces voluntary exchanges with offer, acceptance, consideration, and definite terms—expectation damages put the injured party in the bargain position. Nature and Function of Contracts is a foundation in Contracts Law because civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Torts compensate harm caused by negligence, strict liability, or intentional acts. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain nature and function of contracts aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat nature and function of contracts as a shared model for decisions. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "contract-nature-s2",
      "1.2 Nature and Function of Contracts — How professionals apply this in practice",
      ["Professionals rarely dispute whether nature and function of contracts exists—they dispute how rules are announced in advance and applied by independent institutions rather than private retaliation. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","When stakes rise, pause for a second opinion or formal review. Torts compensate harm caused by negligence, strict liability, or intentional acts. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Contracts allocate risk with offer, acceptance, consideration, and definite terms. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do."]
      }
    ),
    section(
      "contract-nature-s3",
      "1.3 Nature and Function of Contracts — Workplace scenarios and documentation",
      ["Scenario: a teammate cites nature and function of contracts in a meeting, but details in the packet do not match the textbook example. Statutes come from legislatures while case law develops through published judicial decisions. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Rules are announced in advance and applied by independent institutions rather than private retaliation.","Good documentation states facts, cites the framework, and records the decision. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Torts compensate harm caused by negligence, strict liability, or intentional acts. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."],
        caseStudies: [
          { name: "Hawkins v. McGee", year: "1929", summary: "The “hairy hand” case—expectation damages put the injured party in the position promised, not merely out-of-pocket costs." },
        ]
      }
    ),
    section(
      "contract-nature-s4",
      "1.4 Nature and Function of Contracts — Common mistakes and how to avoid them",
      ["Common mistakes around nature and function of contracts include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Criminal law uses government prosecution and protections like presumption of innocence.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Statutes come from legislatures while case law develops through published judicial decisions. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Rules are announced in advance and applied by independent institutions rather than private retaliation. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."]
      }
    ),
    section(
      "contract-nature-s5",
      "1.5 Nature and Function of Contracts — Putting the chapter together",
      ["This chapter’s through-line is simple: Nature and Function of Contracts connects principles to accountable action. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Criminal law uses government prosecution and protections like presumption of innocence. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits nature and function of contracts in your field. Statutes come from legislatures while case law develops through published judicial decisions. Rules are announced in advance and applied by independent institutions rather than private retaliation."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do."]
      }
    )
    ],
    {
      learningObjectives: ["Define nature and function of contracts and explain why it matters in Contracts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Nature and Function of Contracts: Contract law enforces voluntary exchanges with offer, acceptance, consideration, and definite terms—expectation damages put the injured party in the bargain position. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Federalism splits authority between national and state governments in the U.S.","Alternative dispute resolution can resolve conflicts faster than full trials.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."],
      realWorldRelevance: "Strong grasp of nature and function of contracts reduces rework, supports defensible records, and speeds collaboration across Contracts Law.",
    }
  ),
  chapter(
    "mutual-assent",
    2,
    "Mutual Assent: Offer and Acceptance",
    [
    section(
      "mutual-assent-s1",
      "2.1 Mutual Assent: Offer and Acceptance — Foundations and vocabulary",
      ["Mutual Assent: Offer and Acceptance is a foundation in Contracts Law because burden of proof and standards of review change outcomes even when facts are similar. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Constitutional limits constrain what governments and sometimes private actors may do. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain mutual assent: offer and acceptance aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat mutual assent: offer and acceptance as a shared model for decisions. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "mutual-assent-s2",
      "2.2 Mutual Assent: Offer and Acceptance — How professionals apply this in practice",
      ["Professionals rarely dispute whether mutual assent: offer and acceptance exists—they dispute how constitutional limits constrain what governments and sometimes private actors may do. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","When stakes rise, pause for a second opinion or formal review. Criminal law uses government prosecution and protections like presumption of innocence. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Statutes come from legislatures while case law develops through published judicial decisions. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."]
      }
    ),
    section(
      "mutual-assent-s3",
      "2.3 Mutual Assent: Offer and Acceptance — Workplace scenarios and documentation",
      ["Scenario: a teammate cites mutual assent: offer and acceptance in a meeting, but details in the packet do not match the textbook example. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Criminal law uses government prosecution and protections like presumption of innocence.","Good documentation states facts, cites the framework, and records the decision. Statutes come from legislatures while case law develops through published judicial decisions. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Rules are announced in advance and applied by independent institutions rather than private retaliation. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."],
        caseStudies: [
          { name: "Lucy v. Zehmer", year: "1954", summary: "Outward manifestations of assent control—drunken scribbles on a bar napkin could still form a contract." },
          { name: "Leonard v. Pepsico", year: "1999", summary: "Advertisements are usually invitations, not offers—Harrier jet commercial was puffery, not a binding deal." },
        ]
      }
    ),
    section(
      "mutual-assent-s4",
      "2.4 Mutual Assent: Offer and Acceptance — Common mistakes and how to avoid them",
      ["Common mistakes around mutual assent: offer and acceptance include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Criminal law uses government prosecution and protections like presumption of innocence.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Statutes come from legislatures while case law develops through published judicial decisions. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Rules are announced in advance and applied by independent institutions rather than private retaliation. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."]
      }
    ),
    section(
      "mutual-assent-s5",
      "2.5 Mutual Assent: Offer and Acceptance — Putting the chapter together",
      ["This chapter’s through-line is simple: Mutual Assent: Offer and Acceptance connects principles to accountable action. Statutes come from legislatures while case law develops through published judicial decisions.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Rules are announced in advance and applied by independent institutions rather than private retaliation. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits mutual assent: offer and acceptance in your field. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Torts compensate harm caused by negligence, strict liability, or intentional acts."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."]
      }
    )
    ],
    {
      learningObjectives: ["Define mutual assent: offer and acceptance and explain why it matters in Contracts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Mutual Assent: Offer and Acceptance connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Burden of proof and standards of review change outcomes even when facts are similar.","Federalism splits authority between national and state governments in the U.S.","Constitutional limits constrain what governments and sometimes private actors may do.","Burden of proof and standards of review change outcomes even when facts are similar.","Federalism splits authority between national and state governments in the U.S."],
      realWorldRelevance: "Strong grasp of mutual assent: offer and acceptance reduces rework, supports defensible records, and speeds collaboration across Contracts Law.",
    }
  ),
  chapter(
    "consideration",
    3,
    "Consideration and Promissory Estoppel",
    [
    section(
      "consideration-s1",
      "3.1 Consideration and Promissory Estoppel — Foundations and vocabulary",
      ["Consideration and Promissory Estoppel is a foundation in Contracts Law because alternative dispute resolution can resolve conflicts faster than full trials. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Federalism splits authority between national and state governments in the U.S. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain consideration and promissory estoppel aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat consideration and promissory estoppel as a shared model for decisions. Burden of proof and standards of review change outcomes even when facts are similar. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "consideration-s2",
      "3.2 Consideration and Promissory Estoppel — How professionals apply this in practice",
      ["Professionals rarely dispute whether consideration and promissory estoppel exists—they dispute how legal research starts with primary sources—constitutions, statutes, regulations, cases. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Alternative dispute resolution can resolve conflicts faster than full trials.","When stakes rise, pause for a second opinion or formal review. Federalism splits authority between national and state governments in the U.S. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Burden of proof and standards of review change outcomes even when facts are similar. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."]
      }
    ),
    section(
      "consideration-s3",
      "3.3 Consideration and Promissory Estoppel — Workplace scenarios and documentation",
      ["Scenario: a teammate cites consideration and promissory estoppel in a meeting, but details in the packet do not match the textbook example. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Good documentation states facts, cites the framework, and records the decision. Alternative dispute resolution can resolve conflicts faster than full trials. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Federalism splits authority between national and state governments in the U.S. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."],
        caseStudies: [
          { name: "Hamer v. Sidway", year: "1891", summary: "Forbearance from legal rights can be valid consideration—a nephew’s abstinence from drinking supported uncle’s promise." },
        ]
      }
    ),
    section(
      "consideration-s4",
      "3.4 Consideration and Promissory Estoppel — Common mistakes and how to avoid them",
      ["Common mistakes around consideration and promissory estoppel include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Torts compensate harm caused by negligence, strict liability, or intentional acts.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Alternative dispute resolution can resolve conflicts faster than full trials. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."]
      }
    ),
    section(
      "consideration-s5",
      "3.5 Consideration and Promissory Estoppel — Putting the chapter together",
      ["This chapter’s through-line is simple: Consideration and Promissory Estoppel connects principles to accountable action. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Torts compensate harm caused by negligence, strict liability, or intentional acts. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits consideration and promissory estoppel in your field. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Legal research starts with primary sources—constitutions, statutes, regulations, cases."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."]
      }
    )
    ],
    {
      learningObjectives: ["Define consideration and promissory estoppel and explain why it matters in Contracts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Consideration and Promissory Estoppel connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."],
      realWorldRelevance: "Strong grasp of consideration and promissory estoppel reduces rework, supports defensible records, and speeds collaboration across Contracts Law.",
    }
  ),
  chapter(
    "capacity",
    4,
    "Capacity and Defenses to Formation",
    [
    section(
      "capacity-s1",
      "4.1 Capacity and Defenses to Formation — Foundations and vocabulary",
      ["Capacity and Defenses to Formation is a foundation in Contracts Law because ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Criminal law uses government prosecution and protections like presumption of innocence. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain capacity and defenses to formation aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat capacity and defenses to formation as a shared model for decisions. Statutes come from legislatures while case law develops through published judicial decisions. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "capacity-s2",
      "4.2 Capacity and Defenses to Formation — How professionals apply this in practice",
      ["Professionals rarely dispute whether capacity and defenses to formation exists—they dispute how constitutional limits constrain what governments and sometimes private actors may do. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","When stakes rise, pause for a second opinion or formal review. Criminal law uses government prosecution and protections like presumption of innocence. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Statutes come from legislatures while case law develops through published judicial decisions. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."]
      }
    ),
    section(
      "capacity-s3",
      "4.3 Capacity and Defenses to Formation — Workplace scenarios and documentation",
      ["Scenario: a teammate cites capacity and defenses to formation in a meeting, but details in the packet do not match the textbook example. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Constitutional limits constrain what governments and sometimes private actors may do.","Good documentation states facts, cites the framework, and records the decision. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Criminal law uses government prosecution and protections like presumption of innocence. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."],
        caseStudies: [
          { name: "Ortelere v. Teachers' Retirement Board", year: "1967", summary: "Mental incapacity can void contracts when a party cannot understand the nature and consequences of the transaction." },
        ]
      }
    ),
    section(
      "capacity-s4",
      "4.4 Capacity and Defenses to Formation — Common mistakes and how to avoid them",
      ["Common mistakes around capacity and defenses to formation include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Burden of proof and standards of review change outcomes even when facts are similar.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Constitutional limits constrain what governments and sometimes private actors may do. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."]
      }
    ),
    section(
      "capacity-s5",
      "4.5 Capacity and Defenses to Formation — Putting the chapter together",
      ["This chapter’s through-line is simple: Capacity and Defenses to Formation connects principles to accountable action. Federalism splits authority between national and state governments in the U.S.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Burden of proof and standards of review change outcomes even when facts are similar. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits capacity and defenses to formation in your field. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Constitutional limits constrain what governments and sometimes private actors may do."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."]
      }
    )
    ],
    {
      learningObjectives: ["Define capacity and defenses to formation and explain why it matters in Contracts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Capacity and Defenses to Formation connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Federalism splits authority between national and state governments in the U.S.","Alternative dispute resolution can resolve conflicts faster than full trials.","Burden of proof and standards of review change outcomes even when facts are similar.","Federalism splits authority between national and state governments in the U.S.","Alternative dispute resolution can resolve conflicts faster than full trials."],
      realWorldRelevance: "Strong grasp of capacity and defenses to formation reduces rework, supports defensible records, and speeds collaboration across Contracts Law.",
    }
  ),
  chapter(
    "legality",
    5,
    "Legality and Public Policy",
    [
    section(
      "legality-s1",
      "5.1 Legality and Public Policy — Foundations and vocabulary",
      ["Legality and Public Policy is a foundation in Contracts Law because torts compensate harm caused by negligence, strict liability, or intentional acts. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Legal research starts with primary sources—constitutions, statutes, regulations, cases. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain legality and public policy aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat legality and public policy as a shared model for decisions. Alternative dispute resolution can resolve conflicts faster than full trials. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "legality-s2",
      "5.2 Legality and Public Policy — How professionals apply this in practice",
      ["Professionals rarely dispute whether legality and public policy exists—they dispute how legal research starts with primary sources—constitutions, statutes, regulations, cases. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Alternative dispute resolution can resolve conflicts faster than full trials.","When stakes rise, pause for a second opinion or formal review. Federalism splits authority between national and state governments in the U.S. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Burden of proof and standards of review change outcomes even when facts are similar. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    ),
    section(
      "legality-s3",
      "5.3 Legality and Public Policy — Workplace scenarios and documentation",
      ["Scenario: a teammate cites legality and public policy in a meeting, but details in the packet do not match the textbook example. Alternative dispute resolution can resolve conflicts faster than full trials. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Federalism splits authority between national and state governments in the U.S.","Good documentation states facts, cites the framework, and records the decision. Burden of proof and standards of review change outcomes even when facts are similar. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Contracts allocate risk with offer, acceptance, consideration, and definite terms. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."],
        caseStudies: [
          { name: "In re Marriage of Graham", year: "1979", summary: "Illegal or against-public-policy bargains are void—courts refuse to enforce contracts that undermine regulatory schemes." },
        ]
      }
    ),
    section(
      "legality-s4",
      "5.4 Legality and Public Policy — Common mistakes and how to avoid them",
      ["Common mistakes around legality and public policy include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Federalism splits authority between national and state governments in the U.S.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Burden of proof and standards of review change outcomes even when facts are similar. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Constitutional limits constrain what governments and sometimes private actors may do. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."]
      }
    ),
    section(
      "legality-s5",
      "5.5 Legality and Public Policy — Putting the chapter together",
      ["This chapter’s through-line is simple: Legality and Public Policy connects principles to accountable action. Burden of proof and standards of review change outcomes even when facts are similar.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits legality and public policy in your field. Constitutional limits constrain what governments and sometimes private actors may do. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    )
    ],
    {
      learningObjectives: ["Define legality and public policy and explain why it matters in Contracts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Legality and Public Policy connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
      realWorldRelevance: "Strong grasp of legality and public policy reduces rework, supports defensible records, and speeds collaboration across Contracts Law.",
    }
  ),
  chapter(
    "statute-frauds",
    6,
    "Statute of Frauds",
    [
    section(
      "statute-frauds-s1",
      "6.1 Statute of Frauds — Foundations and vocabulary",
      ["Statute of Frauds is a foundation in Contracts Law because alternative dispute resolution can resolve conflicts faster than full trials. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Federalism splits authority between national and state governments in the U.S. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain statute of frauds aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat statute of frauds as a shared model for decisions. Burden of proof and standards of review change outcomes even when facts are similar. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "statute-frauds-s2",
      "6.2 Statute of Frauds — How professionals apply this in practice",
      ["Professionals rarely dispute whether statute of frauds exists—they dispute how statutes come from legislatures while case law develops through published judicial decisions. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Alternative dispute resolution can resolve conflicts faster than full trials.","When stakes rise, pause for a second opinion or formal review. Federalism splits authority between national and state governments in the U.S. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Burden of proof and standards of review change outcomes even when facts are similar. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Rules are announced in advance and applied by independent institutions rather than private retaliation."]
      }
    ),
    section(
      "statute-frauds-s3",
      "6.3 Statute of Frauds — Workplace scenarios and documentation",
      ["Scenario: a teammate cites statute of frauds in a meeting, but details in the packet do not match the textbook example. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Statutes come from legislatures while case law develops through published judicial decisions.","Good documentation states facts, cites the framework, and records the decision. Alternative dispute resolution can resolve conflicts faster than full trials. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Federalism splits authority between national and state governments in the U.S. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."],
        caseStudies: [
          { name: "Statute of Frauds (UCC § 2-201)", year: "—", summary: "Sale of goods $500+ generally needs a signed writing—illustrated in countless merchant disputes over confirmatory memos." },
        ]
      }
    ),
    section(
      "statute-frauds-s4",
      "6.4 Statute of Frauds — Common mistakes and how to avoid them",
      ["Common mistakes around statute of frauds include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Torts compensate harm caused by negligence, strict liability, or intentional acts.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Statutes come from legislatures while case law develops through published judicial decisions. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Alternative dispute resolution can resolve conflicts faster than full trials. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."]
      }
    ),
    section(
      "statute-frauds-s5",
      "6.5 Statute of Frauds — Putting the chapter together",
      ["This chapter’s through-line is simple: Statute of Frauds connects principles to accountable action. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Torts compensate harm caused by negligence, strict liability, or intentional acts. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits statute of frauds in your field. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Statutes come from legislatures while case law develops through published judicial decisions."], {
        bulletPoints: ["Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Rules are announced in advance and applied by independent institutions rather than private retaliation."]
      }
    )
    ],
    {
      learningObjectives: ["Define statute of frauds and explain why it matters in Contracts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Statute of Frauds connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Constitutional limits constrain what governments and sometimes private actors may do.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Constitutional limits constrain what governments and sometimes private actors may do.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."],
      realWorldRelevance: "Strong grasp of statute of frauds reduces rework, supports defensible records, and speeds collaboration across Contracts Law.",
    }
  ),
  chapter(
    "parol-evidence",
    7,
    "Parol Evidence and Integration",
    [
    section(
      "parol-evidence-s1",
      "7.1 Parol Evidence and Integration — Foundations and vocabulary",
      ["Evidence rules filter what fact-finders may hear—relevance, hearsay exceptions, privileges, and impeachment shape trial narratives. Parol Evidence and Integration is a foundation in Contracts Law because statutes come from legislatures while case law develops through published judicial decisions. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Rules are announced in advance and applied by independent institutions rather than private retaliation. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain parol evidence and integration aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat parol evidence and integration as a shared model for decisions. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "parol-evidence-s2",
      "7.2 Parol Evidence and Integration — How professionals apply this in practice",
      ["Professionals rarely dispute whether parol evidence and integration exists—they dispute how rules are announced in advance and applied by independent institutions rather than private retaliation. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","When stakes rise, pause for a second opinion or formal review. Torts compensate harm caused by negligence, strict liability, or intentional acts. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Legal research starts with primary sources—constitutions, statutes, regulations, cases. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."]
      }
    ),
    section(
      "parol-evidence-s3",
      "7.3 Parol Evidence and Integration — Workplace scenarios and documentation",
      ["Scenario: a teammate cites parol evidence and integration in a meeting, but details in the packet do not match the textbook example. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Torts compensate harm caused by negligence, strict liability, or intentional acts.","Good documentation states facts, cites the framework, and records the decision. Legal research starts with primary sources—constitutions, statutes, regulations, cases. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Alternative dispute resolution can resolve conflicts faster than full trials. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."],
        caseStudies: [
          { name: "Pacific Gas & Electric Co. v. G.W. Thomas Drayage", year: "1968", summary: "Ambiguous integrated contracts may admit parol evidence to explain terms—interpretation fights follow deal paper." },
        ]
      }
    ),
    section(
      "parol-evidence-s4",
      "7.4 Parol Evidence and Integration — Common mistakes and how to avoid them",
      ["Common mistakes around parol evidence and integration include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Torts compensate harm caused by negligence, strict liability, or intentional acts.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Alternative dispute resolution can resolve conflicts faster than full trials. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Federalism splits authority between national and state governments in the U.S. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."]
      }
    ),
    section(
      "parol-evidence-s5",
      "7.5 Parol Evidence and Integration — Putting the chapter together",
      ["This chapter’s through-line is simple: Parol Evidence and Integration connects principles to accountable action. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Alternative dispute resolution can resolve conflicts faster than full trials. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits parol evidence and integration in your field. Federalism splits authority between national and state governments in the U.S. Burden of proof and standards of review change outcomes even when facts are similar."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."]
      }
    )
    ],
    {
      learningObjectives: ["Define parol evidence and integration and explain why it matters in Contracts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Parol Evidence and Integration: Evidence rules filter what fact-finders may hear—relevance, hearsay exceptions, privileges, and impeachment shape trial narratives. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."],
      realWorldRelevance: "Strong grasp of parol evidence and integration reduces rework, supports defensible records, and speeds collaboration across Contracts Law.",
    }
  ),
  chapter(
    "interpretation",
    8,
    "Contract Interpretation",
    [
    section(
      "interpretation-s1",
      "8.1 Contract Interpretation — Foundations and vocabulary",
      ["Contract law enforces voluntary exchanges with offer, acceptance, consideration, and definite terms—expectation damages put the injured party in the bargain position. Contract Interpretation is a foundation in Contracts Law because civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Torts compensate harm caused by negligence, strict liability, or intentional acts. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain contract interpretation aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat contract interpretation as a shared model for decisions. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "interpretation-s2",
      "8.2 Contract Interpretation — How professionals apply this in practice",
      ["Professionals rarely dispute whether contract interpretation exists—they dispute how rules are announced in advance and applied by independent institutions rather than private retaliation. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","When stakes rise, pause for a second opinion or formal review. Torts compensate harm caused by negligence, strict liability, or intentional acts. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Contracts allocate risk with offer, acceptance, consideration, and definite terms. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."]
      }
    ),
    section(
      "interpretation-s3",
      "8.3 Contract Interpretation — Workplace scenarios and documentation",
      ["Scenario: a teammate cites contract interpretation in a meeting, but details in the packet do not match the textbook example. Statutes come from legislatures while case law develops through published judicial decisions. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Rules are announced in advance and applied by independent institutions rather than private retaliation.","Good documentation states facts, cites the framework, and records the decision. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Torts compensate harm caused by negligence, strict liability, or intentional acts. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do."],
        caseStudies: [
          { name: "Frigaliment Importing Co. v. B.N.S. International Sales Corp.", year: "1969", summary: "“Chicken” meant broilers or stewing hens—courts construe words against the drafter when meaning is unclear." },
        ]
      }
    ),
    section(
      "interpretation-s4",
      "8.4 Contract Interpretation — Common mistakes and how to avoid them",
      ["Common mistakes around contract interpretation include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Criminal law uses government prosecution and protections like presumption of innocence.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Statutes come from legislatures while case law develops through published judicial decisions. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Rules are announced in advance and applied by independent institutions rather than private retaliation. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."]
      }
    ),
    section(
      "interpretation-s5",
      "8.5 Contract Interpretation — Putting the chapter together",
      ["This chapter’s through-line is simple: Contract Interpretation connects principles to accountable action. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Criminal law uses government prosecution and protections like presumption of innocence. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits contract interpretation in your field. Statutes come from legislatures while case law develops through published judicial decisions. Rules are announced in advance and applied by independent institutions rather than private retaliation."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."]
      }
    )
    ],
    {
      learningObjectives: ["Define contract interpretation and explain why it matters in Contracts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Contract Interpretation: Contract law enforces voluntary exchanges with offer, acceptance, consideration, and definite terms—expectation damages put the injured party in the bargain position. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."],
      realWorldRelevance: "Strong grasp of contract interpretation reduces rework, supports defensible records, and speeds collaboration across Contracts Law.",
    }
  ),
  chapter(
    "conditions",
    9,
    "Conditions and Performance",
    [
    section(
      "conditions-s1",
      "9.1 Conditions and Performance — Foundations and vocabulary",
      ["Conditions and Performance is a foundation in Contracts Law because criminal law uses government prosecution and protections like presumption of innocence. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Statutes come from legislatures while case law develops through published judicial decisions. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain conditions and performance aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat conditions and performance as a shared model for decisions. Rules are announced in advance and applied by independent institutions rather than private retaliation. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "conditions-s2",
      "9.2 Conditions and Performance — How professionals apply this in practice",
      ["Professionals rarely dispute whether conditions and performance exists—they dispute how ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Criminal law uses government prosecution and protections like presumption of innocence.","When stakes rise, pause for a second opinion or formal review. Statutes come from legislatures while case law develops through published judicial decisions. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Rules are announced in advance and applied by independent institutions rather than private retaliation. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    ),
    section(
      "conditions-s3",
      "9.3 Conditions and Performance — Workplace scenarios and documentation",
      ["Scenario: a teammate cites conditions and performance in a meeting, but details in the packet do not match the textbook example. Constitutional limits constrain what governments and sometimes private actors may do. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Good documentation states facts, cites the framework, and records the decision. Criminal law uses government prosecution and protections like presumption of innocence. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Statutes come from legislatures while case law develops through published judicial decisions. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
        caseStudies: [
          { name: "Jacob & Youngs v. Kent", year: "1921", summary: "Substantial performance with minor breach—homeowner could not withhold full price for wrong-brand pipe if value unchanged." },
        ]
      }
    ),
    section(
      "conditions-s4",
      "9.4 Conditions and Performance — Common mistakes and how to avoid them",
      ["Common mistakes around conditions and performance include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Constitutional limits constrain what governments and sometimes private actors may do. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Criminal law uses government prosecution and protections like presumption of innocence. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."]
      }
    ),
    section(
      "conditions-s5",
      "9.5 Conditions and Performance — Putting the chapter together",
      ["This chapter’s through-line is simple: Conditions and Performance connects principles to accountable action. Burden of proof and standards of review change outcomes even when facts are similar.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits conditions and performance in your field. Constitutional limits constrain what governments and sometimes private actors may do. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    )
    ],
    {
      learningObjectives: ["Define conditions and performance and explain why it matters in Contracts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Conditions and Performance connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."],
      realWorldRelevance: "Strong grasp of conditions and performance reduces rework, supports defensible records, and speeds collaboration across Contracts Law.",
    }
  ),
  chapter(
    "breach-types",
    10,
    "Types of Breach",
    [
    section(
      "breach-types-s1",
      "10.1 Types of Breach — Foundations and vocabulary",
      ["Types of Breach is a foundation in Contracts Law because constitutional limits constrain what governments and sometimes private actors may do. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain types of breach aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat types of breach as a shared model for decisions. Criminal law uses government prosecution and protections like presumption of innocence. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "breach-types-s2",
      "10.2 Types of Breach — How professionals apply this in practice",
      ["Professionals rarely dispute whether types of breach exists—they dispute how ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Criminal law uses government prosecution and protections like presumption of innocence.","When stakes rise, pause for a second opinion or formal review. Statutes come from legislatures while case law develops through published judicial decisions. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Rules are announced in advance and applied by independent institutions rather than private retaliation. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."]
      }
    ),
    section(
      "breach-types-s3",
      "10.3 Types of Breach — Workplace scenarios and documentation",
      ["Scenario: a teammate cites types of breach in a meeting, but details in the packet do not match the textbook example. Criminal law uses government prosecution and protections like presumption of innocence. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Statutes come from legislatures while case law develops through published judicial decisions.","Good documentation states facts, cites the framework, and records the decision. Rules are announced in advance and applied by independent institutions rather than private retaliation. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."],
        caseStudies: [
          { name: "Hochster v. De la Tour", year: "1853", summary: "Anticipatory repudiation lets the non-breaching party sue before performance date when future breach is clear." },
        ]
      }
    ),
    section(
      "breach-types-s4",
      "10.4 Types of Breach — Common mistakes and how to avoid them",
      ["Common mistakes around types of breach include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Statutes come from legislatures while case law develops through published judicial decisions.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Rules are announced in advance and applied by independent institutions rather than private retaliation. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Torts compensate harm caused by negligence, strict liability, or intentional acts. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."]
      }
    ),
    section(
      "breach-types-s5",
      "10.5 Types of Breach — Putting the chapter together",
      ["This chapter’s through-line is simple: Types of Breach connects principles to accountable action. Rules are announced in advance and applied by independent institutions rather than private retaliation.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits types of breach in your field. Torts compensate harm caused by negligence, strict liability, or intentional acts. Legal research starts with primary sources—constitutions, statutes, regulations, cases."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."]
      }
    )
    ],
    {
      learningObjectives: ["Define types of breach and explain why it matters in Contracts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Types of Breach connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."],
      realWorldRelevance: "Strong grasp of types of breach reduces rework, supports defensible records, and speeds collaboration across Contracts Law.",
    }
  ),
  chapter(
    "remedies-damages",
    11,
    "Damages and Remedies",
    [
    section(
      "remedies-damages-s1",
      "11.1 Damages and Remedies — Foundations and vocabulary",
      ["Damages convert harm into a monetary award: economic losses, pain and suffering, and sometimes punitive sums when conduct is egregious. Damages and Remedies is a foundation in Contracts Law because rules are announced in advance and applied by independent institutions rather than private retaliation. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain damages and remedies aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat damages and remedies as a shared model for decisions. Torts compensate harm caused by negligence, strict liability, or intentional acts. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "remedies-damages-s2",
      "11.2 Damages and Remedies — How professionals apply this in practice",
      ["Professionals rarely dispute whether damages and remedies exists—they dispute how civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Torts compensate harm caused by negligence, strict liability, or intentional acts.","When stakes rise, pause for a second opinion or formal review. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Alternative dispute resolution can resolve conflicts faster than full trials. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    ),
    section(
      "remedies-damages-s3",
      "11.3 Damages and Remedies — Workplace scenarios and documentation",
      ["Scenario: a teammate cites damages and remedies in a meeting, but details in the packet do not match the textbook example. Torts compensate harm caused by negligence, strict liability, or intentional acts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Good documentation states facts, cites the framework, and records the decision. Alternative dispute resolution can resolve conflicts faster than full trials. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Federalism splits authority between national and state governments in the U.S. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."],
        caseStudies: [
          { name: "Hadley v. Baxendale", year: "1854", summary: "Consequential damages must be foreseeable at contracting—broken mill shaft delayed profits were too remote." },
        ]
      }
    ),
    section(
      "remedies-damages-s4",
      "11.4 Damages and Remedies — Common mistakes and how to avoid them",
      ["Common mistakes around damages and remedies include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Alternative dispute resolution can resolve conflicts faster than full trials. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Federalism splits authority between national and state governments in the U.S. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Burden of proof and standards of review change outcomes even when facts are similar. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    ),
    section(
      "remedies-damages-s5",
      "11.5 Damages and Remedies — Putting the chapter together",
      ["This chapter’s through-line is simple: Damages and Remedies connects principles to accountable action. Alternative dispute resolution can resolve conflicts faster than full trials.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Federalism splits authority between national and state governments in the U.S. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits damages and remedies in your field. Burden of proof and standards of review change outcomes even when facts are similar. Contracts allocate risk with offer, acceptance, consideration, and definite terms."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    )
    ],
    {
      learningObjectives: ["Define damages and remedies and explain why it matters in Contracts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Damages and Remedies: Damages convert harm into a monetary award: economic losses, pain and suffering, and sometimes punitive sums when conduct is egregious. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Statutes come from legislatures while case law develops through published judicial decisions.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Statutes come from legislatures while case law develops through published judicial decisions."],
      realWorldRelevance: "Strong grasp of damages and remedies reduces rework, supports defensible records, and speeds collaboration across Contracts Law.",
    }
  ),
  chapter(
    "specific-performance",
    12,
    "Specific Performance and Equitable Relief",
    [
    section(
      "specific-performance-s1",
      "12.1 Specific Performance and Equitable Relief — Foundations and vocabulary",
      ["Specific Performance and Equitable Relief is a foundation in Contracts Law because federalism splits authority between national and state governments in the U.S.. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Burden of proof and standards of review change outcomes even when facts are similar. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain specific performance and equitable relief aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat specific performance and equitable relief as a shared model for decisions. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "specific-performance-s2",
      "12.2 Specific Performance and Equitable Relief — How professionals apply this in practice",
      ["Professionals rarely dispute whether specific performance and equitable relief exists—they dispute how burden of proof and standards of review change outcomes even when facts are similar. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","When stakes rise, pause for a second opinion or formal review. Constitutional limits constrain what governments and sometimes private actors may do. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    ),
    section(
      "specific-performance-s3",
      "12.3 Specific Performance and Equitable Relief — Workplace scenarios and documentation",
      ["Scenario: a teammate cites specific performance and equitable relief in a meeting, but details in the packet do not match the textbook example. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Constitutional limits constrain what governments and sometimes private actors may do.","Good documentation states facts, cites the framework, and records the decision. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Criminal law uses government prosecution and protections like presumption of innocence. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."],
        caseStudies: [
          { name: "Walters v. Marathon Oil Co.", year: "1981", summary: "Specific performance is discretionary—courts weigh adequacy of money damages and hardship to defendants." },
        ]
      }
    ),
    section(
      "specific-performance-s4",
      "12.4 Specific Performance and Equitable Relief — Common mistakes and how to avoid them",
      ["Common mistakes around specific performance and equitable relief include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Constitutional limits constrain what governments and sometimes private actors may do.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Criminal law uses government prosecution and protections like presumption of innocence. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Statutes come from legislatures while case law develops through published judicial decisions. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    ),
    section(
      "specific-performance-s5",
      "12.5 Specific Performance and Equitable Relief — Putting the chapter together",
      ["This chapter’s through-line is simple: Specific Performance and Equitable Relief connects principles to accountable action. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Criminal law uses government prosecution and protections like presumption of innocence. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits specific performance and equitable relief in your field. Statutes come from legislatures while case law develops through published judicial decisions. Rules are announced in advance and applied by independent institutions rather than private retaliation."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    )
    ],
    {
      learningObjectives: ["Define specific performance and equitable relief and explain why it matters in Contracts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Specific Performance and Equitable Relief connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Rules are announced in advance and applied by independent institutions rather than private retaliation."],
      realWorldRelevance: "Strong grasp of specific performance and equitable relief reduces rework, supports defensible records, and speeds collaboration across Contracts Law.",
    }
  ),
  chapter(
    "assignment-delegation",
    13,
    "Assignment and Delegation",
    [
    section(
      "assignment-delegation-s1",
      "13.1 Assignment and Delegation — Foundations and vocabulary",
      ["Assignment and Delegation is a foundation in Contracts Law because statutes come from legislatures while case law develops through published judicial decisions. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Rules are announced in advance and applied by independent institutions rather than private retaliation. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain assignment and delegation aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat assignment and delegation as a shared model for decisions. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "assignment-delegation-s2",
      "13.2 Assignment and Delegation — How professionals apply this in practice",
      ["Professionals rarely dispute whether assignment and delegation exists—they dispute how criminal law uses government prosecution and protections like presumption of innocence. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Statutes come from legislatures while case law develops through published judicial decisions.","When stakes rise, pause for a second opinion or formal review. Rules are announced in advance and applied by independent institutions rather than private retaliation. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."]
      }
    ),
    section(
      "assignment-delegation-s3",
      "13.3 Assignment and Delegation — Workplace scenarios and documentation",
      ["Scenario: a teammate cites assignment and delegation in a meeting, but details in the packet do not match the textbook example. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Criminal law uses government prosecution and protections like presumption of innocence.","Good documentation states facts, cites the framework, and records the decision. Statutes come from legislatures while case law develops through published judicial decisions. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Rules are announced in advance and applied by independent institutions rather than private retaliation. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."],
        caseStudies: [
          { name: "Restatement (Second) of Contracts § 317", year: "—", summary: "Rights can be assigned unless contract or law forbids; delegating duties does not release the original obligor without novation." },
        ]
      }
    ),
    section(
      "assignment-delegation-s4",
      "13.4 Assignment and Delegation — Common mistakes and how to avoid them",
      ["Common mistakes around assignment and delegation include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Constitutional limits constrain what governments and sometimes private actors may do.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Criminal law uses government prosecution and protections like presumption of innocence. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Statutes come from legislatures while case law develops through published judicial decisions. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    ),
    section(
      "assignment-delegation-s5",
      "13.5 Assignment and Delegation — Putting the chapter together",
      ["This chapter’s through-line is simple: Assignment and Delegation connects principles to accountable action. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Constitutional limits constrain what governments and sometimes private actors may do. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits assignment and delegation in your field. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Criminal law uses government prosecution and protections like presumption of innocence."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."]
      }
    )
    ],
    {
      learningObjectives: ["Define assignment and delegation and explain why it matters in Contracts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Assignment and Delegation connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Statutes come from legislatures while case law develops through published judicial decisions.","Criminal law uses government prosecution and protections like presumption of innocence.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Statutes come from legislatures while case law develops through published judicial decisions.","Criminal law uses government prosecution and protections like presumption of innocence."],
      realWorldRelevance: "Strong grasp of assignment and delegation reduces rework, supports defensible records, and speeds collaboration across Contracts Law.",
    }
  ),
  chapter(
    "third-party",
    14,
    "Third-Party Beneficiaries",
    [
    section(
      "third-party-s1",
      "14.1 Third-Party Beneficiaries — Foundations and vocabulary",
      ["Third-Party Beneficiaries is a foundation in Contracts Law because alternative dispute resolution can resolve conflicts faster than full trials. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Federalism splits authority between national and state governments in the U.S. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain third-party beneficiaries aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat third-party beneficiaries as a shared model for decisions. Burden of proof and standards of review change outcomes even when facts are similar. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "third-party-s2",
      "14.2 Third-Party Beneficiaries — How professionals apply this in practice",
      ["Professionals rarely dispute whether third-party beneficiaries exists—they dispute how federalism splits authority between national and state governments in the U.S. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Burden of proof and standards of review change outcomes even when facts are similar.","When stakes rise, pause for a second opinion or formal review. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Constitutional limits constrain what governments and sometimes private actors may do. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    ),
    section(
      "third-party-s3",
      "14.3 Third-Party Beneficiaries — Workplace scenarios and documentation",
      ["Scenario: a teammate cites third-party beneficiaries in a meeting, but details in the packet do not match the textbook example. Burden of proof and standards of review change outcomes even when facts are similar. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Good documentation states facts, cites the framework, and records the decision. Constitutional limits constrain what governments and sometimes private actors may do. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
        caseStudies: [
          { name: "Lawrence v. Fox", year: "1859", summary: "Third-party beneficiary may enforce a contract made for their benefit—creditor–debtor–promisee triangle classic." },
        ]
      }
    ),
    section(
      "third-party-s4",
      "14.4 Third-Party Beneficiaries — Common mistakes and how to avoid them",
      ["Common mistakes around third-party beneficiaries include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Constitutional limits constrain what governments and sometimes private actors may do. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Criminal law uses government prosecution and protections like presumption of innocence. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."]
      }
    ),
    section(
      "third-party-s5",
      "14.5 Third-Party Beneficiaries — Putting the chapter together",
      ["This chapter’s through-line is simple: Third-Party Beneficiaries connects principles to accountable action. Constitutional limits constrain what governments and sometimes private actors may do.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits third-party beneficiaries in your field. Criminal law uses government prosecution and protections like presumption of innocence. Statutes come from legislatures while case law develops through published judicial decisions."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    )
    ],
    {
      learningObjectives: ["Define third-party beneficiaries and explain why it matters in Contracts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Third-Party Beneficiaries connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."],
      realWorldRelevance: "Strong grasp of third-party beneficiaries reduces rework, supports defensible records, and speeds collaboration across Contracts Law.",
    }
  ),
  chapter(
    "discharge",
    15,
    "Discharge and Impossibility",
    [
    section(
      "discharge-s1",
      "15.1 Discharge and Impossibility — Foundations and vocabulary",
      ["Discharge and Impossibility is a foundation in Contracts Law because contracts allocate risk with offer, acceptance, consideration, and definite terms. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Constitutional limits constrain what governments and sometimes private actors may do. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain discharge and impossibility aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat discharge and impossibility as a shared model for decisions. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "discharge-s2",
      "15.2 Discharge and Impossibility — How professionals apply this in practice",
      ["Professionals rarely dispute whether discharge and impossibility exists—they dispute how burden of proof and standards of review change outcomes even when facts are similar. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","When stakes rise, pause for a second opinion or formal review. Constitutional limits constrain what governments and sometimes private actors may do. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."]
      }
    ),
    section(
      "discharge-s3",
      "15.3 Discharge and Impossibility — Workplace scenarios and documentation",
      ["Scenario: a teammate cites discharge and impossibility in a meeting, but details in the packet do not match the textbook example. Federalism splits authority between national and state governments in the U.S. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Burden of proof and standards of review change outcomes even when facts are similar.","Good documentation states facts, cites the framework, and records the decision. Contracts allocate risk with offer, acceptance, consideration, and definite terms. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Constitutional limits constrain what governments and sometimes private actors may do. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."],
        caseStudies: [
          { name: "Clark v. West", year: "1917", summary: "Modified duties after partial performance—illustrates accord and satisfaction when parties later adjust obligations." },
        ]
      }
    ),
    section(
      "discharge-s4",
      "15.4 Discharge and Impossibility — Common mistakes and how to avoid them",
      ["Common mistakes around discharge and impossibility include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Alternative dispute resolution can resolve conflicts faster than full trials.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Federalism splits authority between national and state governments in the U.S. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Burden of proof and standards of review change outcomes even when facts are similar. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    ),
    section(
      "discharge-s5",
      "15.5 Discharge and Impossibility — Putting the chapter together",
      ["This chapter’s through-line is simple: Discharge and Impossibility connects principles to accountable action. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Alternative dispute resolution can resolve conflicts faster than full trials. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits discharge and impossibility in your field. Federalism splits authority between national and state governments in the U.S. Burden of proof and standards of review change outcomes even when facts are similar."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."]
      }
    )
    ],
    {
      learningObjectives: ["Define discharge and impossibility and explain why it matters in Contracts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Discharge and Impossibility connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Statutes come from legislatures while case law develops through published judicial decisions.","Criminal law uses government prosecution and protections like presumption of innocence.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Statutes come from legislatures while case law develops through published judicial decisions.","Criminal law uses government prosecution and protections like presumption of innocence."],
      realWorldRelevance: "Strong grasp of discharge and impossibility reduces rework, supports defensible records, and speeds collaboration across Contracts Law.",
    }
  ),
  chapter(
    "warranties",
    16,
    "Warranties and Representations",
    [
    section(
      "warranties-s1",
      "16.1 Warranties and Representations — Foundations and vocabulary",
      ["Warranties and Representations is a foundation in Contracts Law because rules are announced in advance and applied by independent institutions rather than private retaliation. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain warranties and representations aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat warranties and representations as a shared model for decisions. Torts compensate harm caused by negligence, strict liability, or intentional acts. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "warranties-s2",
      "16.2 Warranties and Representations — How professionals apply this in practice",
      ["Professionals rarely dispute whether warranties and representations exists—they dispute how civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Torts compensate harm caused by negligence, strict liability, or intentional acts.","When stakes rise, pause for a second opinion or formal review. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Alternative dispute resolution can resolve conflicts faster than full trials. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."]
      }
    ),
    section(
      "warranties-s3",
      "16.3 Warranties and Representations — Workplace scenarios and documentation",
      ["Scenario: a teammate cites warranties and representations in a meeting, but details in the packet do not match the textbook example. Torts compensate harm caused by negligence, strict liability, or intentional acts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Good documentation states facts, cites the framework, and records the decision. Alternative dispute resolution can resolve conflicts faster than full trials. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Federalism splits authority between national and state governments in the U.S. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."],
        caseStudies: [
          { name: "Henningsen v. Bloomfield Motors", year: "1960", summary: "Consumer auto warranties and disclaimers—courts police unconscionable boilerplate in adhesion contracts." },
        ]
      }
    ),
    section(
      "warranties-s4",
      "16.4 Warranties and Representations — Common mistakes and how to avoid them",
      ["Common mistakes around warranties and representations include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Alternative dispute resolution can resolve conflicts faster than full trials. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Federalism splits authority between national and state governments in the U.S. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Burden of proof and standards of review change outcomes even when facts are similar. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."]
      }
    ),
    section(
      "warranties-s5",
      "16.5 Warranties and Representations — Putting the chapter together",
      ["This chapter’s through-line is simple: Warranties and Representations connects principles to accountable action. Alternative dispute resolution can resolve conflicts faster than full trials.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Federalism splits authority between national and state governments in the U.S. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits warranties and representations in your field. Burden of proof and standards of review change outcomes even when facts are similar. Contracts allocate risk with offer, acceptance, consideration, and definite terms."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."]
      }
    )
    ],
    {
      learningObjectives: ["Define warranties and representations and explain why it matters in Contracts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Warranties and Representations connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."],
      realWorldRelevance: "Strong grasp of warranties and representations reduces rework, supports defensible records, and speeds collaboration across Contracts Law.",
    }
  ),
  chapter(
    "sales-contracts",
    17,
    "Sales Contracts under Article 2",
    [
    section(
      "sales-contracts-s1",
      "17.1 Sales Contracts under Article 2 — Foundations and vocabulary",
      ["Contract law enforces voluntary exchanges with offer, acceptance, consideration, and definite terms—expectation damages put the injured party in the bargain position. Sales Contracts under Article 2 is a foundation in Contracts Law because federalism splits authority between national and state governments in the U.S.. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Burden of proof and standards of review change outcomes even when facts are similar. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain sales contracts under article 2 aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat sales contracts under article 2 as a shared model for decisions. Constitutional limits constrain what governments and sometimes private actors may do. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "sales-contracts-s2",
      "17.2 Sales Contracts under Article 2 — How professionals apply this in practice",
      ["Professionals rarely dispute whether sales contracts under article 2 exists—they dispute how burden of proof and standards of review change outcomes even when facts are similar. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Constitutional limits constrain what governments and sometimes private actors may do.","When stakes rise, pause for a second opinion or formal review. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Criminal law uses government prosecution and protections like presumption of innocence. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    ),
    section(
      "sales-contracts-s3",
      "17.3 Sales Contracts under Article 2 — Workplace scenarios and documentation",
      ["Scenario: a teammate cites sales contracts under article 2 in a meeting, but details in the packet do not match the textbook example. Constitutional limits constrain what governments and sometimes private actors may do. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Good documentation states facts, cites the framework, and records the decision. Criminal law uses government prosecution and protections like presumption of innocence. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Statutes come from legislatures while case law develops through published judicial decisions. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."],
        caseStudies: [
          { name: "ProCD, Inc. v. Zeidenberg", year: "1996", summary: "Shrink-wrap / click-wrap licenses can be enforceable if buyer has opportunity to reject terms—UCC meets software." },
        ]
      }
    ),
    section(
      "sales-contracts-s4",
      "17.4 Sales Contracts under Article 2 — Common mistakes and how to avoid them",
      ["Common mistakes around sales contracts under article 2 include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Criminal law uses government prosecution and protections like presumption of innocence. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Statutes come from legislatures while case law develops through published judicial decisions. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Rules are announced in advance and applied by independent institutions rather than private retaliation. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    ),
    section(
      "sales-contracts-s5",
      "17.5 Sales Contracts under Article 2 — Putting the chapter together",
      ["This chapter’s through-line is simple: Sales Contracts under Article 2 connects principles to accountable action. Criminal law uses government prosecution and protections like presumption of innocence.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Statutes come from legislatures while case law develops through published judicial decisions. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits sales contracts under article 2 in your field. Rules are announced in advance and applied by independent institutions rather than private retaliation. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    )
    ],
    {
      learningObjectives: ["Define sales contracts under article 2 and explain why it matters in Contracts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Sales Contracts under Article 2: Contract law enforces voluntary exchanges with offer, acceptance, consideration, and definite terms—expectation damages put the injured party in the bargain position. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
      realWorldRelevance: "Strong grasp of sales contracts under article 2 reduces rework, supports defensible records, and speeds collaboration across Contracts Law.",
    }
  ),
  chapter(
    "online-contracts",
    18,
    "Electronic and Clickwrap Contracts",
    [
    section(
      "online-contracts-s1",
      "18.1 Electronic and Clickwrap Contracts — Foundations and vocabulary",
      ["Contract law enforces voluntary exchanges with offer, acceptance, consideration, and definite terms—expectation damages put the injured party in the bargain position. Electronic and Clickwrap Contracts is a foundation in Contracts Law because alternative dispute resolution can resolve conflicts faster than full trials. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Federalism splits authority between national and state governments in the U.S. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain electronic and clickwrap contracts aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat electronic and clickwrap contracts as a shared model for decisions. Burden of proof and standards of review change outcomes even when facts are similar. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "online-contracts-s2",
      "18.2 Electronic and Clickwrap Contracts — How professionals apply this in practice",
      ["Professionals rarely dispute whether electronic and clickwrap contracts exists—they dispute how legal research starts with primary sources—constitutions, statutes, regulations, cases. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Alternative dispute resolution can resolve conflicts faster than full trials.","When stakes rise, pause for a second opinion or formal review. Federalism splits authority between national and state governments in the U.S. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Burden of proof and standards of review change outcomes even when facts are similar. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    ),
    section(
      "online-contracts-s3",
      "18.3 Electronic and Clickwrap Contracts — Workplace scenarios and documentation",
      ["Scenario: a teammate cites electronic and clickwrap contracts in a meeting, but details in the packet do not match the textbook example. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Good documentation states facts, cites the framework, and records the decision. Alternative dispute resolution can resolve conflicts faster than full trials. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Federalism splits authority between national and state governments in the U.S. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."],
        caseStudies: [
          { name: "Specht v. Netscape Communications Corp.", year: "2002", summary: "Browse-wrap terms failed without reasonable notice—UI design affects whether users assent online." },
        ]
      }
    ),
    section(
      "online-contracts-s4",
      "18.4 Electronic and Clickwrap Contracts — Common mistakes and how to avoid them",
      ["Common mistakes around electronic and clickwrap contracts include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Torts compensate harm caused by negligence, strict liability, or intentional acts.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Alternative dispute resolution can resolve conflicts faster than full trials. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    ),
    section(
      "online-contracts-s5",
      "18.5 Electronic and Clickwrap Contracts — Putting the chapter together",
      ["This chapter’s through-line is simple: Electronic and Clickwrap Contracts connects principles to accountable action. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Torts compensate harm caused by negligence, strict liability, or intentional acts. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits electronic and clickwrap contracts in your field. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Legal research starts with primary sources—constitutions, statutes, regulations, cases."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    )
    ],
    {
      learningObjectives: ["Define electronic and clickwrap contracts and explain why it matters in Contracts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Electronic and Clickwrap Contracts: Contract law enforces voluntary exchanges with offer, acceptance, consideration, and definite terms—expectation damages put the injured party in the bargain position. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."],
      realWorldRelevance: "Strong grasp of electronic and clickwrap contracts reduces rework, supports defensible records, and speeds collaboration across Contracts Law.",
    }
  ),
  chapter(
    "international-contracts",
    19,
    "International Contract Law",
    [
    section(
      "international-contracts-s1",
      "19.1 International Contract Law — Foundations and vocabulary",
      ["Contract law enforces voluntary exchanges with offer, acceptance, consideration, and definite terms—expectation damages put the injured party in the bargain position. International Contract Law is a foundation in Contracts Law because ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Criminal law uses government prosecution and protections like presumption of innocence. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain international contract law aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat international contract law as a shared model for decisions. Statutes come from legislatures while case law develops through published judicial decisions. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "international-contracts-s2",
      "19.2 International Contract Law — How professionals apply this in practice",
      ["Professionals rarely dispute whether international contract law exists—they dispute how constitutional limits constrain what governments and sometimes private actors may do. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","When stakes rise, pause for a second opinion or formal review. Criminal law uses government prosecution and protections like presumption of innocence. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Statutes come from legislatures while case law develops through published judicial decisions. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."]
      }
    ),
    section(
      "international-contracts-s3",
      "19.3 International Contract Law — Workplace scenarios and documentation",
      ["Scenario: a teammate cites international contract law in a meeting, but details in the packet do not match the textbook example. Burden of proof and standards of review change outcomes even when facts are similar. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Constitutional limits constrain what governments and sometimes private actors may do.","Good documentation states facts, cites the framework, and records the decision. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Criminal law uses government prosecution and protections like presumption of innocence. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."],
        caseStudies: [
          { name: "Filanto, S.p.A. v. Chilewich International Corp.", year: "1992", summary: "Arbitration clauses in international sales—CISG and forum selection shape cross-border enforcement." },
        ]
      }
    ),
    section(
      "international-contracts-s4",
      "19.4 International Contract Law — Common mistakes and how to avoid them",
      ["Common mistakes around international contract law include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Federalism splits authority between national and state governments in the U.S.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Burden of proof and standards of review change outcomes even when facts are similar. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Constitutional limits constrain what governments and sometimes private actors may do. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."]
      }
    ),
    section(
      "international-contracts-s5",
      "19.5 International Contract Law — Putting the chapter together",
      ["This chapter’s through-line is simple: International Contract Law connects principles to accountable action. Alternative dispute resolution can resolve conflicts faster than full trials.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Federalism splits authority between national and state governments in the U.S. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits international contract law in your field. Burden of proof and standards of review change outcomes even when facts are similar. Constitutional limits constrain what governments and sometimes private actors may do."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."]
      }
    )
    ],
    {
      learningObjectives: ["Define international contract law and explain why it matters in Contracts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "International Contract Law: Contract law enforces voluntary exchanges with offer, acceptance, consideration, and definite terms—expectation damages put the injured party in the bargain position. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."],
      realWorldRelevance: "Strong grasp of international contract law reduces rework, supports defensible records, and speeds collaboration across Contracts Law.",
    }
  ),
  chapter(
    "contract-drafting",
    20,
    "Drafting and Negotiating Contracts",
    [
    section(
      "contract-drafting-s1",
      "20.1 Drafting and Negotiating Contracts — Foundations and vocabulary",
      ["Contract law enforces voluntary exchanges with offer, acceptance, consideration, and definite terms—expectation damages put the injured party in the bargain position. Drafting and Negotiating Contracts is a foundation in Contracts Law because contracts allocate risk with offer, acceptance, consideration, and definite terms. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Legal research starts with primary sources—constitutions, statutes, regulations, cases. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain drafting and negotiating contracts aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat drafting and negotiating contracts as a shared model for decisions. Alternative dispute resolution can resolve conflicts faster than full trials. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "contract-drafting-s2",
      "20.2 Drafting and Negotiating Contracts — How professionals apply this in practice",
      ["Professionals rarely dispute whether drafting and negotiating contracts exists—they dispute how legal research starts with primary sources—constitutions, statutes, regulations, cases. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Alternative dispute resolution can resolve conflicts faster than full trials.","When stakes rise, pause for a second opinion or formal review. Federalism splits authority between national and state governments in the U.S. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Burden of proof and standards of review change outcomes even when facts are similar. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    ),
    section(
      "contract-drafting-s3",
      "20.3 Drafting and Negotiating Contracts — Workplace scenarios and documentation",
      ["Scenario: a teammate cites drafting and negotiating contracts in a meeting, but details in the packet do not match the textbook example. Alternative dispute resolution can resolve conflicts faster than full trials. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Federalism splits authority between national and state governments in the U.S.","Good documentation states facts, cites the framework, and records the decision. Burden of proof and standards of review change outcomes even when facts are similar. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Constitutional limits constrain what governments and sometimes private actors may do. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do."],
        caseStudies: [
          { name: "Raffles v. Wichelhaus", year: "1864", summary: "Mutual mistake on which ship “Peerless” meant—drafting ambiguity voided the bargain (the “two ships Peerless” case)." },
        ]
      }
    ),
    section(
      "contract-drafting-s4",
      "20.4 Drafting and Negotiating Contracts — Common mistakes and how to avoid them",
      ["Common mistakes around drafting and negotiating contracts include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Federalism splits authority between national and state governments in the U.S.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Burden of proof and standards of review change outcomes even when facts are similar. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Constitutional limits constrain what governments and sometimes private actors may do. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."]
      }
    ),
    section(
      "contract-drafting-s5",
      "20.5 Drafting and Negotiating Contracts — Putting the chapter together",
      ["This chapter’s through-line is simple: Drafting and Negotiating Contracts connects principles to accountable action. Burden of proof and standards of review change outcomes even when facts are similar.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Constitutional limits constrain what governments and sometimes private actors may do. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits drafting and negotiating contracts in your field. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Criminal law uses government prosecution and protections like presumption of innocence."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    )
    ],
    {
      learningObjectives: ["Define drafting and negotiating contracts and explain why it matters in Contracts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Drafting and Negotiating Contracts: Contract law enforces voluntary exchanges with offer, acceptance, consideration, and definite terms—expectation damages put the injured party in the bargain position. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Torts compensate harm caused by negligence, strict liability, or intentional acts."],
      realWorldRelevance: "Strong grasp of drafting and negotiating contracts reduces rework, supports defensible records, and speeds collaboration across Contracts Law.",
    }
  )
];
