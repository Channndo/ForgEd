import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const BIZLAW_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Business Law",
  subtitle: "ForgEd deep-dive — business law",
  paragraphs: [
    "This ForgEd digital textbook presents Business Law at academic survey depth — cited frameworks, rigorous prose, and chapter learning objectives. 20 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Material is general legal education, not legal advice. Consult a licensed attorney for specific matters.",
  ],
};

export const BIZLAW_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "contracts-intro",
    1,
    "Introduction to Contracts",
    [
    section(
      "contracts-intro-s1",
      "1.1 Introduction to Contracts — Foundations and vocabulary",
      ["Contract law enforces voluntary exchanges with offer, acceptance, consideration, and definite terms—expectation damages put the injured party in the bargain position. Introduction to Contracts is a foundation in Business Law because alternative dispute resolution can resolve conflicts faster than full trials. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Federalism splits authority between national and state governments in the U.S. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain introduction to contracts aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat introduction to contracts as a shared model for decisions. Burden of proof and standards of review change outcomes even when facts are similar. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "contracts-intro-s2",
      "1.2 Introduction to Contracts — How professionals apply this in practice",
      ["Professionals rarely dispute whether introduction to contracts exists—they dispute how federalism splits authority between national and state governments in the U.S. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Burden of proof and standards of review change outcomes even when facts are similar.","When stakes rise, pause for a second opinion or formal review. Constitutional limits constrain what governments and sometimes private actors may do. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do."]
      }
    ),
    section(
      "contracts-intro-s3",
      "1.3 Introduction to Contracts — Workplace scenarios and documentation",
      ["Scenario: a teammate cites introduction to contracts in a meeting, but details in the packet do not match the textbook example. Burden of proof and standards of review change outcomes even when facts are similar. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Constitutional limits constrain what governments and sometimes private actors may do.","Good documentation states facts, cites the framework, and records the decision. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Criminal law uses government prosecution and protections like presumption of innocence. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."],
        caseStudies: [
          { name: "Lucy v. Zehmer", year: "1954", summary: "Objective assent in business deals—outward signs of agreement bind even if a party claims jest." },
        ]
      }
    ),
    section(
      "contracts-intro-s4",
      "1.4 Introduction to Contracts — Common mistakes and how to avoid them",
      ["Common mistakes around introduction to contracts include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Constitutional limits constrain what governments and sometimes private actors may do.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Criminal law uses government prosecution and protections like presumption of innocence. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Statutes come from legislatures while case law develops through published judicial decisions. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."]
      }
    ),
    section(
      "contracts-intro-s5",
      "1.5 Introduction to Contracts — Putting the chapter together",
      ["This chapter’s through-line is simple: Introduction to Contracts connects principles to accountable action. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Criminal law uses government prosecution and protections like presumption of innocence. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits introduction to contracts in your field. Statutes come from legislatures while case law develops through published judicial decisions. Rules are announced in advance and applied by independent institutions rather than private retaliation."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do."]
      }
    )
    ],
    {
      learningObjectives: ["Define introduction to contracts and explain why it matters in Business Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Introduction to Contracts: Contract law enforces voluntary exchanges with offer, acceptance, consideration, and definite terms—expectation damages put the injured party in the bargain position. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Federalism splits authority between national and state governments in the U.S.","Alternative dispute resolution can resolve conflicts faster than full trials.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."],
      realWorldRelevance: "Strong grasp of introduction to contracts reduces rework, supports defensible records, and speeds collaboration across Business Law.",
    }
  ),
  chapter(
    "contract-formation",
    2,
    "Offer, Acceptance, and Consideration",
    [
    section(
      "contract-formation-s1",
      "2.1 Offer, Acceptance, and Consideration — Foundations and vocabulary",
      ["Offer, Acceptance, and Consideration is a foundation in Business Law because contracts allocate risk with offer, acceptance, consideration, and definite terms. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Legal research starts with primary sources—constitutions, statutes, regulations, cases. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain offer, acceptance, and consideration aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat offer, acceptance, and consideration as a shared model for decisions. Alternative dispute resolution can resolve conflicts faster than full trials. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "contract-formation-s2",
      "2.2 Offer, Acceptance, and Consideration — How professionals apply this in practice",
      ["Professionals rarely dispute whether offer, acceptance, and consideration exists—they dispute how torts compensate harm caused by negligence, strict liability, or intentional acts. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","When stakes rise, pause for a second opinion or formal review. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Alternative dispute resolution can resolve conflicts faster than full trials. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."]
      }
    ),
    section(
      "contract-formation-s3",
      "2.3 Offer, Acceptance, and Consideration — Workplace scenarios and documentation",
      ["Scenario: a teammate cites offer, acceptance, and consideration in a meeting, but details in the packet do not match the textbook example. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Torts compensate harm caused by negligence, strict liability, or intentional acts.","Good documentation states facts, cites the framework, and records the decision. Contracts allocate risk with offer, acceptance, consideration, and definite terms. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Legal research starts with primary sources—constitutions, statutes, regulations, cases. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."],
        caseStudies: [
          { name: "Leonard v. Pepsico", year: "1999", summary: "Promotional offers vs. binding contracts—marketing puffery rarely creates enforceable commercial terms." },
        ]
      }
    ),
    section(
      "contract-formation-s4",
      "2.4 Offer, Acceptance, and Consideration — Common mistakes and how to avoid them",
      ["Common mistakes around offer, acceptance, and consideration include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Rules are announced in advance and applied by independent institutions rather than private retaliation.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Torts compensate harm caused by negligence, strict liability, or intentional acts. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."]
      }
    ),
    section(
      "contract-formation-s5",
      "2.5 Offer, Acceptance, and Consideration — Putting the chapter together",
      ["This chapter’s through-line is simple: Offer, Acceptance, and Consideration connects principles to accountable action. Statutes come from legislatures while case law develops through published judicial decisions.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Rules are announced in advance and applied by independent institutions rather than private retaliation. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits offer, acceptance, and consideration in your field. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Torts compensate harm caused by negligence, strict liability, or intentional acts."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."]
      }
    )
    ],
    {
      learningObjectives: ["Define offer, acceptance, and consideration and explain why it matters in Business Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Offer, Acceptance, and Consideration connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Burden of proof and standards of review change outcomes even when facts are similar.","Federalism splits authority between national and state governments in the U.S.","Constitutional limits constrain what governments and sometimes private actors may do.","Burden of proof and standards of review change outcomes even when facts are similar.","Federalism splits authority between national and state governments in the U.S."],
      realWorldRelevance: "Strong grasp of offer, acceptance, and consideration reduces rework, supports defensible records, and speeds collaboration across Business Law.",
    }
  ),
  chapter(
    "contract-terms",
    3,
    "Contract Terms and Interpretation",
    [
    section(
      "contract-terms-s1",
      "3.1 Contract Terms and Interpretation — Foundations and vocabulary",
      ["Contract law enforces voluntary exchanges with offer, acceptance, consideration, and definite terms—expectation damages put the injured party in the bargain position. Contract Terms and Interpretation is a foundation in Business Law because burden of proof and standards of review change outcomes even when facts are similar. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Constitutional limits constrain what governments and sometimes private actors may do. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain contract terms and interpretation aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat contract terms and interpretation as a shared model for decisions. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "contract-terms-s2",
      "3.2 Contract Terms and Interpretation — How professionals apply this in practice",
      ["Professionals rarely dispute whether contract terms and interpretation exists—they dispute how constitutional limits constrain what governments and sometimes private actors may do. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","When stakes rise, pause for a second opinion or formal review. Criminal law uses government prosecution and protections like presumption of innocence. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Statutes come from legislatures while case law develops through published judicial decisions. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."]
      }
    ),
    section(
      "contract-terms-s3",
      "3.3 Contract Terms and Interpretation — Workplace scenarios and documentation",
      ["Scenario: a teammate cites contract terms and interpretation in a meeting, but details in the packet do not match the textbook example. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Criminal law uses government prosecution and protections like presumption of innocence.","Good documentation states facts, cites the framework, and records the decision. Statutes come from legislatures while case law develops through published judicial decisions. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Rules are announced in advance and applied by independent institutions rather than private retaliation. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."],
        caseStudies: [
          { name: "UCC § 2-207 (Battle of the Forms)", year: "—", summary: "Merchant confirmatory memos can form contracts despite conflicting boilerplate—practical formation in B2B sales." },
        ]
      }
    ),
    section(
      "contract-terms-s4",
      "3.4 Contract Terms and Interpretation — Common mistakes and how to avoid them",
      ["Common mistakes around contract terms and interpretation include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Criminal law uses government prosecution and protections like presumption of innocence.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Statutes come from legislatures while case law develops through published judicial decisions. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Rules are announced in advance and applied by independent institutions rather than private retaliation. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."]
      }
    ),
    section(
      "contract-terms-s5",
      "3.5 Contract Terms and Interpretation — Putting the chapter together",
      ["This chapter’s through-line is simple: Contract Terms and Interpretation connects principles to accountable action. Statutes come from legislatures while case law develops through published judicial decisions.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Rules are announced in advance and applied by independent institutions rather than private retaliation. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits contract terms and interpretation in your field. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Torts compensate harm caused by negligence, strict liability, or intentional acts."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."]
      }
    )
    ],
    {
      learningObjectives: ["Define contract terms and interpretation and explain why it matters in Business Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Contract Terms and Interpretation: Contract law enforces voluntary exchanges with offer, acceptance, consideration, and definite terms—expectation damages put the injured party in the bargain position. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do."],
      realWorldRelevance: "Strong grasp of contract terms and interpretation reduces rework, supports defensible records, and speeds collaboration across Business Law.",
    }
  ),
  chapter(
    "breach-remedies",
    4,
    "Breach of Contract and Remedies",
    [
    section(
      "breach-remedies-s1",
      "4.1 Breach of Contract and Remedies — Foundations and vocabulary",
      ["Contract law enforces voluntary exchanges with offer, acceptance, consideration, and definite terms—expectation damages put the injured party in the bargain position. Breach of Contract and Remedies is a foundation in Business Law because federalism splits authority between national and state governments in the U.S.. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Burden of proof and standards of review change outcomes even when facts are similar. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain breach of contract and remedies aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat breach of contract and remedies as a shared model for decisions. Constitutional limits constrain what governments and sometimes private actors may do. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "breach-remedies-s2",
      "4.2 Breach of Contract and Remedies — How professionals apply this in practice",
      ["Professionals rarely dispute whether breach of contract and remedies exists—they dispute how alternative dispute resolution can resolve conflicts faster than full trials. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Federalism splits authority between national and state governments in the U.S.","When stakes rise, pause for a second opinion or formal review. Burden of proof and standards of review change outcomes even when facts are similar. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Constitutional limits constrain what governments and sometimes private actors may do. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."]
      }
    ),
    section(
      "breach-remedies-s3",
      "4.3 Breach of Contract and Remedies — Workplace scenarios and documentation",
      ["Scenario: a teammate cites breach of contract and remedies in a meeting, but details in the packet do not match the textbook example. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Alternative dispute resolution can resolve conflicts faster than full trials.","Good documentation states facts, cites the framework, and records the decision. Federalism splits authority between national and state governments in the U.S. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Burden of proof and standards of review change outcomes even when facts are similar. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."],
        caseStudies: [
          { name: "Hadley v. Baxendale", year: "1854", summary: "Foreseeable consequential damages limit recovery—buyers must communicate special loss risks at formation." },
        ]
      }
    ),
    section(
      "breach-remedies-s4",
      "4.4 Breach of Contract and Remedies — Common mistakes and how to avoid them",
      ["Common mistakes around breach of contract and remedies include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Alternative dispute resolution can resolve conflicts faster than full trials. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Federalism splits authority between national and state governments in the U.S. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do."]
      }
    ),
    section(
      "breach-remedies-s5",
      "4.5 Breach of Contract and Remedies — Putting the chapter together",
      ["This chapter’s through-line is simple: Breach of Contract and Remedies connects principles to accountable action. Torts compensate harm caused by negligence, strict liability, or intentional acts.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits breach of contract and remedies in your field. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Alternative dispute resolution can resolve conflicts faster than full trials."], {
        bulletPoints: ["Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."]
      }
    )
    ],
    {
      learningObjectives: ["Define breach of contract and remedies and explain why it matters in Business Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Breach of Contract and Remedies: Contract law enforces voluntary exchanges with offer, acceptance, consideration, and definite terms—expectation damages put the injured party in the bargain position. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Alternative dispute resolution can resolve conflicts faster than full trials.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."],
      realWorldRelevance: "Strong grasp of breach of contract and remedies reduces rework, supports defensible records, and speeds collaboration across Business Law.",
    }
  ),
  chapter(
    "sales-ucc",
    5,
    "Sales of Goods and the UCC",
    [
    section(
      "sales-ucc-s1",
      "5.1 Sales of Goods and the UCC — Foundations and vocabulary",
      ["Article 2 of the UCC governs sales of goods with gap-filling rules, warranties, and remedies tuned to commercial speed. Sales of Goods and the UCC is a foundation in Business Law because ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Criminal law uses government prosecution and protections like presumption of innocence. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain sales of goods and the ucc aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat sales of goods and the ucc as a shared model for decisions. Statutes come from legislatures while case law develops through published judicial decisions. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "sales-ucc-s2",
      "5.2 Sales of Goods and the UCC — How professionals apply this in practice",
      ["Professionals rarely dispute whether sales of goods and the ucc exists—they dispute how criminal law uses government prosecution and protections like presumption of innocence. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Statutes come from legislatures while case law develops through published judicial decisions.","When stakes rise, pause for a second opinion or formal review. Rules are announced in advance and applied by independent institutions rather than private retaliation. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    ),
    section(
      "sales-ucc-s3",
      "5.3 Sales of Goods and the UCC — Workplace scenarios and documentation",
      ["Scenario: a teammate cites sales of goods and the ucc in a meeting, but details in the packet do not match the textbook example. Statutes come from legislatures while case law develops through published judicial decisions. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Rules are announced in advance and applied by independent institutions rather than private retaliation.","Good documentation states facts, cites the framework, and records the decision. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Torts compensate harm caused by negligence, strict liability, or intentional acts. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."],
        caseStudies: [
          { name: "Hadley v. Baxendale (UCC adoption)", year: "—", summary: "Article 2 remedies echo common-law foreseeability—perfect tender and cure rules govern merchant sales." },
        ]
      }
    ),
    section(
      "sales-ucc-s4",
      "5.4 Sales of Goods and the UCC — Common mistakes and how to avoid them",
      ["Common mistakes around sales of goods and the ucc include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Rules are announced in advance and applied by independent institutions rather than private retaliation.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Torts compensate harm caused by negligence, strict liability, or intentional acts. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    ),
    section(
      "sales-ucc-s5",
      "5.5 Sales of Goods and the UCC — Putting the chapter together",
      ["This chapter’s through-line is simple: Sales of Goods and the UCC connects principles to accountable action. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Torts compensate harm caused by negligence, strict liability, or intentional acts. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits sales of goods and the ucc in your field. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Alternative dispute resolution can resolve conflicts faster than full trials."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    )
    ],
    {
      learningObjectives: ["Define sales of goods and the ucc and explain why it matters in Business Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Sales of Goods and the UCC: Article 2 of the UCC governs sales of goods with gap-filling rules, warranties, and remedies tuned to commercial speed. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Rules are announced in advance and applied by independent institutions rather than private retaliation."],
      realWorldRelevance: "Strong grasp of sales of goods and the ucc reduces rework, supports defensible records, and speeds collaboration across Business Law.",
    }
  ),
  chapter(
    "torts-intro",
    6,
    "Torts and Business Risk",
    [
    section(
      "torts-intro-s1",
      "6.1 Torts and Business Risk — Foundations and vocabulary",
      ["Tort law compensates private wrongs—injury to persons or property—through civil lawsuits distinct from criminal prosecution. Goals include deterrence, compensation, and corrective justice. Torts and Business Risk is a foundation in Business Law because federalism splits authority between national and state governments in the U.S.. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Burden of proof and standards of review change outcomes even when facts are similar. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain torts and business risk aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat torts and business risk as a shared model for decisions. Constitutional limits constrain what governments and sometimes private actors may do. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "torts-intro-s2",
      "6.2 Torts and Business Risk — How professionals apply this in practice",
      ["Professionals rarely dispute whether torts and business risk exists—they dispute how burden of proof and standards of review change outcomes even when facts are similar. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Constitutional limits constrain what governments and sometimes private actors may do.","When stakes rise, pause for a second opinion or formal review. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Criminal law uses government prosecution and protections like presumption of innocence. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Torts compensate harm caused by negligence, strict liability, or intentional acts."]
      }
    ),
    section(
      "torts-intro-s3",
      "6.3 Torts and Business Risk — Workplace scenarios and documentation",
      ["Scenario: a teammate cites torts and business risk in a meeting, but details in the packet do not match the textbook example. Constitutional limits constrain what governments and sometimes private actors may do. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Good documentation states facts, cites the framework, and records the decision. Criminal law uses government prosecution and protections like presumption of innocence. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Statutes come from legislatures while case law develops through published judicial decisions. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
        caseStudies: [
          { name: "Palsgraf v. Long Island R.R.", year: "1928", summary: "Foreseeability limits duty—businesses face tort exposure when conduct risks harm to identifiable classes." },
        ]
      }
    ),
    section(
      "torts-intro-s4",
      "6.4 Torts and Business Risk — Common mistakes and how to avoid them",
      ["Common mistakes around torts and business risk include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Criminal law uses government prosecution and protections like presumption of innocence. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Statutes come from legislatures while case law develops through published judicial decisions. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Rules are announced in advance and applied by independent institutions rather than private retaliation. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."]
      }
    ),
    section(
      "torts-intro-s5",
      "6.5 Torts and Business Risk — Putting the chapter together",
      ["This chapter’s through-line is simple: Torts and Business Risk connects principles to accountable action. Criminal law uses government prosecution and protections like presumption of innocence.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Statutes come from legislatures while case law develops through published judicial decisions. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits torts and business risk in your field. Rules are announced in advance and applied by independent institutions rather than private retaliation. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Torts compensate harm caused by negligence, strict liability, or intentional acts."]
      }
    )
    ],
    {
      learningObjectives: ["Define torts and business risk and explain why it matters in Business Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Torts and Business Risk: Tort law compensates private wrongs—injury to persons or property—through civil lawsuits distinct from criminal prosecution. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."],
      realWorldRelevance: "Strong grasp of torts and business risk reduces rework, supports defensible records, and speeds collaboration across Business Law.",
    }
  ),
  chapter(
    "negligence",
    7,
    "Negligence and Duty of Care",
    [
    section(
      "negligence-s1",
      "7.1 Negligence and Duty of Care — Foundations and vocabulary",
      ["Negligence is the workhorse of tort practice: duty, breach, causation, and damages must each be proved with evidence that survives motion practice. Negligence and Duty of Care is a foundation in Business Law because criminal law uses government prosecution and protections like presumption of innocence. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Statutes come from legislatures while case law develops through published judicial decisions. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain negligence and duty of care aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat negligence and duty of care as a shared model for decisions. Rules are announced in advance and applied by independent institutions rather than private retaliation. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "negligence-s2",
      "7.2 Negligence and Duty of Care — How professionals apply this in practice",
      ["Professionals rarely dispute whether negligence and duty of care exists—they dispute how ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Criminal law uses government prosecution and protections like presumption of innocence.","When stakes rise, pause for a second opinion or formal review. Statutes come from legislatures while case law develops through published judicial decisions. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Rules are announced in advance and applied by independent institutions rather than private retaliation. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."]
      }
    ),
    section(
      "negligence-s3",
      "7.3 Negligence and Duty of Care — Workplace scenarios and documentation",
      ["Scenario: a teammate cites negligence and duty of care in a meeting, but details in the packet do not match the textbook example. Constitutional limits constrain what governments and sometimes private actors may do. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Good documentation states facts, cites the framework, and records the decision. Criminal law uses government prosecution and protections like presumption of innocence. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Statutes come from legislatures while case law develops through published judicial decisions. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."],
        caseStudies: [
          { name: "United States v. Carroll Towing Co.", year: "1947", summary: "Reasonable care balances burden, probability, and gravity—risk management parallels negligence law." },
        ]
      }
    ),
    section(
      "negligence-s4",
      "7.4 Negligence and Duty of Care — Common mistakes and how to avoid them",
      ["Common mistakes around negligence and duty of care include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Constitutional limits constrain what governments and sometimes private actors may do. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Criminal law uses government prosecution and protections like presumption of innocence. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."]
      }
    ),
    section(
      "negligence-s5",
      "7.5 Negligence and Duty of Care — Putting the chapter together",
      ["This chapter’s through-line is simple: Negligence and Duty of Care connects principles to accountable action. Burden of proof and standards of review change outcomes even when facts are similar.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits negligence and duty of care in your field. Constitutional limits constrain what governments and sometimes private actors may do. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."], {
        bulletPoints: ["Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."]
      }
    )
    ],
    {
      learningObjectives: ["Define negligence and duty of care and explain why it matters in Business Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Negligence and Duty of Care: Negligence is the workhorse of tort practice: duty, breach, causation, and damages must each be proved with evidence that survives motion practice. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."],
      realWorldRelevance: "Strong grasp of negligence and duty of care reduces rework, supports defensible records, and speeds collaboration across Business Law.",
    }
  ),
  chapter(
    "strict-products",
    8,
    "Strict Liability and Products",
    [
    section(
      "strict-products-s1",
      "8.1 Strict Liability and Products — Foundations and vocabulary",
      ["Strict liability removes fault from the equation for abnormally dangerous activities and many defective-product claims—focus shifts to causation and damages. Strict Liability and Products is a foundation in Business Law because contracts allocate risk with offer, acceptance, consideration, and definite terms. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Constitutional limits constrain what governments and sometimes private actors may do. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain strict liability and products aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat strict liability and products as a shared model for decisions. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "strict-products-s2",
      "8.2 Strict Liability and Products — How professionals apply this in practice",
      ["Professionals rarely dispute whether strict liability and products exists—they dispute how constitutional limits constrain what governments and sometimes private actors may do. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","When stakes rise, pause for a second opinion or formal review. Criminal law uses government prosecution and protections like presumption of innocence. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Statutes come from legislatures while case law develops through published judicial decisions. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."]
      }
    ),
    section(
      "strict-products-s3",
      "8.3 Strict Liability and Products — Workplace scenarios and documentation",
      ["Scenario: a teammate cites strict liability and products in a meeting, but details in the packet do not match the textbook example. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Criminal law uses government prosecution and protections like presumption of innocence.","Good documentation states facts, cites the framework, and records the decision. Statutes come from legislatures while case law develops through published judicial decisions. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Rules are announced in advance and applied by independent institutions rather than private retaliation. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."],
        caseStudies: [
          { name: "Greenman v. Yuba Power Products, Inc.", year: "1963", summary: "Strict products liability—manufacturers in supply chains answer for defective goods injuring consumers." },
        ]
      }
    ),
    section(
      "strict-products-s4",
      "8.4 Strict Liability and Products — Common mistakes and how to avoid them",
      ["Common mistakes around strict liability and products include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Criminal law uses government prosecution and protections like presumption of innocence.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Statutes come from legislatures while case law develops through published judicial decisions. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Rules are announced in advance and applied by independent institutions rather than private retaliation. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."]
      }
    ),
    section(
      "strict-products-s5",
      "8.5 Strict Liability and Products — Putting the chapter together",
      ["This chapter’s through-line is simple: Strict Liability and Products connects principles to accountable action. Statutes come from legislatures while case law develops through published judicial decisions.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Rules are announced in advance and applied by independent institutions rather than private retaliation. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits strict liability and products in your field. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Torts compensate harm caused by negligence, strict liability, or intentional acts."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."]
      }
    )
    ],
    {
      learningObjectives: ["Define strict liability and products and explain why it matters in Business Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Strict Liability and Products: Strict liability removes fault from the equation for abnormally dangerous activities and many defective-product claims—focus shifts to causation and damages. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."],
      realWorldRelevance: "Strong grasp of strict liability and products reduces rework, supports defensible records, and speeds collaboration across Business Law.",
    }
  ),
  chapter(
    "business-entities",
    9,
    "Corporations, LLCs, and Partnerships",
    [
    section(
      "business-entities-s1",
      "9.1 Corporations, LLCs, and Partnerships — Foundations and vocabulary",
      ["Corporations, LLCs, and Partnerships is a foundation in Business Law because rules are announced in advance and applied by independent institutions rather than private retaliation. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain corporations, llcs, and partnerships aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat corporations, llcs, and partnerships as a shared model for decisions. Torts compensate harm caused by negligence, strict liability, or intentional acts. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "business-entities-s2",
      "9.2 Corporations, LLCs, and Partnerships — How professionals apply this in practice",
      ["Professionals rarely dispute whether corporations, llcs, and partnerships exists—they dispute how civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Torts compensate harm caused by negligence, strict liability, or intentional acts.","When stakes rise, pause for a second opinion or formal review. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Alternative dispute resolution can resolve conflicts faster than full trials. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    ),
    section(
      "business-entities-s3",
      "9.3 Corporations, LLCs, and Partnerships — Workplace scenarios and documentation",
      ["Scenario: a teammate cites corporations, llcs, and partnerships in a meeting, but details in the packet do not match the textbook example. Torts compensate harm caused by negligence, strict liability, or intentional acts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Good documentation states facts, cites the framework, and records the decision. Alternative dispute resolution can resolve conflicts faster than full trials. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Federalism splits authority between national and state governments in the U.S. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."],
        caseStudies: [
          { name: "Salomon v. Salomon & Co.", year: "1897", summary: "Corporate veil separates shareholder liability in ordinary circumstances—foundational for LLC and corp planning." },
        ]
      }
    ),
    section(
      "business-entities-s4",
      "9.4 Corporations, LLCs, and Partnerships — Common mistakes and how to avoid them",
      ["Common mistakes around corporations, llcs, and partnerships include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Alternative dispute resolution can resolve conflicts faster than full trials. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Federalism splits authority between national and state governments in the U.S. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Burden of proof and standards of review change outcomes even when facts are similar. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    ),
    section(
      "business-entities-s5",
      "9.5 Corporations, LLCs, and Partnerships — Putting the chapter together",
      ["This chapter’s through-line is simple: Corporations, LLCs, and Partnerships connects principles to accountable action. Alternative dispute resolution can resolve conflicts faster than full trials.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Federalism splits authority between national and state governments in the U.S. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits corporations, llcs, and partnerships in your field. Burden of proof and standards of review change outcomes even when facts are similar. Contracts allocate risk with offer, acceptance, consideration, and definite terms."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    )
    ],
    {
      learningObjectives: ["Define corporations, llcs, and partnerships and explain why it matters in Business Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Corporations, LLCs, and Partnerships connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Statutes come from legislatures while case law develops through published judicial decisions.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Statutes come from legislatures while case law develops through published judicial decisions."],
      realWorldRelevance: "Strong grasp of corporations, llcs, and partnerships reduces rework, supports defensible records, and speeds collaboration across Business Law.",
    }
  ),
  chapter(
    "governance",
    10,
    "Corporate Governance and Fiduciary Duties",
    [
    section(
      "governance-s1",
      "10.1 Corporate Governance and Fiduciary Duties — Foundations and vocabulary",
      ["Corporate Governance and Fiduciary Duties is a foundation in Business Law because civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Torts compensate harm caused by negligence, strict liability, or intentional acts. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain corporate governance and fiduciary duties aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat corporate governance and fiduciary duties as a shared model for decisions. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "governance-s2",
      "10.2 Corporate Governance and Fiduciary Duties — How professionals apply this in practice",
      ["Professionals rarely dispute whether corporate governance and fiduciary duties exists—they dispute how rules are announced in advance and applied by independent institutions rather than private retaliation. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","When stakes rise, pause for a second opinion or formal review. Torts compensate harm caused by negligence, strict liability, or intentional acts. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Legal research starts with primary sources—constitutions, statutes, regulations, cases. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    ),
    section(
      "governance-s3",
      "10.3 Corporate Governance and Fiduciary Duties — Workplace scenarios and documentation",
      ["Scenario: a teammate cites corporate governance and fiduciary duties in a meeting, but details in the packet do not match the textbook example. Statutes come from legislatures while case law develops through published judicial decisions. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Rules are announced in advance and applied by independent institutions rather than private retaliation.","Good documentation states facts, cites the framework, and records the decision. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Torts compensate harm caused by negligence, strict liability, or intentional acts. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."],
        caseStudies: [
          { name: "Smith v. Van Gorkom", year: "1985", summary: "Board duty of care in sale of company—directors need informed process and reasonable investigation (Delaware)." },
        ]
      }
    ),
    section(
      "governance-s4",
      "10.4 Corporate Governance and Fiduciary Duties — Common mistakes and how to avoid them",
      ["Common mistakes around corporate governance and fiduciary duties include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Criminal law uses government prosecution and protections like presumption of innocence.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Statutes come from legislatures while case law develops through published judicial decisions. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Rules are announced in advance and applied by independent institutions rather than private retaliation. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    ),
    section(
      "governance-s5",
      "10.5 Corporate Governance and Fiduciary Duties — Putting the chapter together",
      ["This chapter’s through-line is simple: Corporate Governance and Fiduciary Duties connects principles to accountable action. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Criminal law uses government prosecution and protections like presumption of innocence. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits corporate governance and fiduciary duties in your field. Statutes come from legislatures while case law develops through published judicial decisions. Rules are announced in advance and applied by independent institutions rather than private retaliation."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    )
    ],
    {
      learningObjectives: ["Define corporate governance and fiduciary duties and explain why it matters in Business Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Corporate Governance and Fiduciary Duties connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Rules are announced in advance and applied by independent institutions rather than private retaliation."],
      realWorldRelevance: "Strong grasp of corporate governance and fiduciary duties reduces rework, supports defensible records, and speeds collaboration across Business Law.",
    }
  ),
  chapter(
    "securities-overview",
    11,
    "Securities Law Overview",
    [
    section(
      "securities-overview-s1",
      "11.1 Securities Law Overview — Foundations and vocabulary",
      ["Securities Law Overview is a foundation in Business Law because constitutional limits constrain what governments and sometimes private actors may do. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain securities law overview aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat securities law overview as a shared model for decisions. Criminal law uses government prosecution and protections like presumption of innocence. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "securities-overview-s2",
      "11.2 Securities Law Overview — How professionals apply this in practice",
      ["Professionals rarely dispute whether securities law overview exists—they dispute how contracts allocate risk with offer, acceptance, consideration, and definite terms. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Constitutional limits constrain what governments and sometimes private actors may do.","When stakes rise, pause for a second opinion or formal review. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Criminal law uses government prosecution and protections like presumption of innocence. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."]
      }
    ),
    section(
      "securities-overview-s3",
      "11.3 Securities Law Overview — Workplace scenarios and documentation",
      ["Scenario: a teammate cites securities law overview in a meeting, but details in the packet do not match the textbook example. Burden of proof and standards of review change outcomes even when facts are similar. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Good documentation states facts, cites the framework, and records the decision. Constitutional limits constrain what governments and sometimes private actors may do. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."],
        caseStudies: [
          { name: "SEC v. W.J. Howey Co.", year: "1946", summary: "Investment contract test—offerings may be securities even when labeled otherwise, triggering disclosure duties." },
        ]
      }
    ),
    section(
      "securities-overview-s4",
      "11.4 Securities Law Overview — Common mistakes and how to avoid them",
      ["Common mistakes around securities law overview include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Federalism splits authority between national and state governments in the U.S.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Burden of proof and standards of review change outcomes even when facts are similar. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Constitutional limits constrain what governments and sometimes private actors may do. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."]
      }
    ),
    section(
      "securities-overview-s5",
      "11.5 Securities Law Overview — Putting the chapter together",
      ["This chapter’s through-line is simple: Securities Law Overview connects principles to accountable action. Alternative dispute resolution can resolve conflicts faster than full trials.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Federalism splits authority between national and state governments in the U.S. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits securities law overview in your field. Burden of proof and standards of review change outcomes even when facts are similar. Contracts allocate risk with offer, acceptance, consideration, and definite terms."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."]
      }
    )
    ],
    {
      learningObjectives: ["Define securities law overview and explain why it matters in Business Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Securities Law Overview connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Burden of proof and standards of review change outcomes even when facts are similar.","Federalism splits authority between national and state governments in the U.S.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Burden of proof and standards of review change outcomes even when facts are similar.","Federalism splits authority between national and state governments in the U.S."],
      realWorldRelevance: "Strong grasp of securities law overview reduces rework, supports defensible records, and speeds collaboration across Business Law.",
    }
  ),
  chapter(
    "employment-law",
    12,
    "Employment Law Essentials",
    [
    section(
      "employment-law-s1",
      "12.1 Employment Law Essentials — Foundations and vocabulary",
      ["Employment law blends contract, statute, and agency rules on wages, discrimination, safety, and collective bargaining rights. Employment Law Essentials is a foundation in Business Law because constitutional limits constrain what governments and sometimes private actors may do. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain employment law essentials aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat employment law essentials as a shared model for decisions. Criminal law uses government prosecution and protections like presumption of innocence. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "employment-law-s2",
      "12.2 Employment Law Essentials — How professionals apply this in practice",
      ["Professionals rarely dispute whether employment law essentials exists—they dispute how ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Criminal law uses government prosecution and protections like presumption of innocence.","When stakes rise, pause for a second opinion or formal review. Statutes come from legislatures while case law develops through published judicial decisions. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Rules are announced in advance and applied by independent institutions rather than private retaliation. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."]
      }
    ),
    section(
      "employment-law-s3",
      "12.3 Employment Law Essentials — Workplace scenarios and documentation",
      ["Scenario: a teammate cites employment law essentials in a meeting, but details in the packet do not match the textbook example. Criminal law uses government prosecution and protections like presumption of innocence. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Statutes come from legislatures while case law develops through published judicial decisions.","Good documentation states facts, cites the framework, and records the decision. Rules are announced in advance and applied by independent institutions rather than private retaliation. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."],
        caseStudies: [
          { name: "McDonnell Douglas Corp. v. Green", year: "1973", summary: "Burden-shifting framework in Title VII discrimination claims—HR investigations mirror evidentiary stages." },
        ]
      }
    ),
    section(
      "employment-law-s4",
      "12.4 Employment Law Essentials — Common mistakes and how to avoid them",
      ["Common mistakes around employment law essentials include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Statutes come from legislatures while case law develops through published judicial decisions.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Rules are announced in advance and applied by independent institutions rather than private retaliation. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Torts compensate harm caused by negligence, strict liability, or intentional acts. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."]
      }
    ),
    section(
      "employment-law-s5",
      "12.5 Employment Law Essentials — Putting the chapter together",
      ["This chapter’s through-line is simple: Employment Law Essentials connects principles to accountable action. Rules are announced in advance and applied by independent institutions rather than private retaliation.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits employment law essentials in your field. Torts compensate harm caused by negligence, strict liability, or intentional acts. Legal research starts with primary sources—constitutions, statutes, regulations, cases."], {
        bulletPoints: ["Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."]
      }
    )
    ],
    {
      learningObjectives: ["Define employment law essentials and explain why it matters in Business Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Employment Law Essentials: Employment law blends contract, statute, and agency rules on wages, discrimination, safety, and collective bargaining rights. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."],
      realWorldRelevance: "Strong grasp of employment law essentials reduces rework, supports defensible records, and speeds collaboration across Business Law.",
    }
  ),
  chapter(
    "labor-relations",
    13,
    "Labor Law and Collective Bargaining",
    [
    section(
      "labor-relations-s1",
      "13.1 Labor Law and Collective Bargaining — Foundations and vocabulary",
      ["Labor Law and Collective Bargaining is a foundation in Business Law because burden of proof and standards of review change outcomes even when facts are similar. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Contracts allocate risk with offer, acceptance, consideration, and definite terms. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain labor law and collective bargaining aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat labor law and collective bargaining as a shared model for decisions. Constitutional limits constrain what governments and sometimes private actors may do. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "labor-relations-s2",
      "13.2 Labor Law and Collective Bargaining — How professionals apply this in practice",
      ["Professionals rarely dispute whether labor law and collective bargaining exists—they dispute how federalism splits authority between national and state governments in the U.S. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Burden of proof and standards of review change outcomes even when facts are similar.","When stakes rise, pause for a second opinion or formal review. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Constitutional limits constrain what governments and sometimes private actors may do. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."]
      }
    ),
    section(
      "labor-relations-s3",
      "13.3 Labor Law and Collective Bargaining — Workplace scenarios and documentation",
      ["Scenario: a teammate cites labor law and collective bargaining in a meeting, but details in the packet do not match the textbook example. Alternative dispute resolution can resolve conflicts faster than full trials. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Federalism splits authority between national and state governments in the U.S.","Good documentation states facts, cites the framework, and records the decision. Burden of proof and standards of review change outcomes even when facts are similar. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Contracts allocate risk with offer, acceptance, consideration, and definite terms. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."],
        caseStudies: [
          { name: "NLRB v. Jones & Laughlin Steel Corp.", year: "1937", summary: "Commerce power supports National Labor Relations Act—collective bargaining rights in interstate industry." },
        ]
      }
    ),
    section(
      "labor-relations-s4",
      "13.4 Labor Law and Collective Bargaining — Common mistakes and how to avoid them",
      ["Common mistakes around labor law and collective bargaining include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Alternative dispute resolution can resolve conflicts faster than full trials. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Federalism splits authority between national and state governments in the U.S. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Burden of proof and standards of review change outcomes even when facts are similar. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."]
      }
    ),
    section(
      "labor-relations-s5",
      "13.5 Labor Law and Collective Bargaining — Putting the chapter together",
      ["This chapter’s through-line is simple: Labor Law and Collective Bargaining connects principles to accountable action. Torts compensate harm caused by negligence, strict liability, or intentional acts.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits labor law and collective bargaining in your field. Alternative dispute resolution can resolve conflicts faster than full trials. Federalism splits authority between national and state governments in the U.S."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."]
      }
    )
    ],
    {
      learningObjectives: ["Define labor law and collective bargaining and explain why it matters in Business Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Labor Law and Collective Bargaining connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Federalism splits authority between national and state governments in the U.S.","Alternative dispute resolution can resolve conflicts faster than full trials.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."],
      realWorldRelevance: "Strong grasp of labor law and collective bargaining reduces rework, supports defensible records, and speeds collaboration across Business Law.",
    }
  ),
  chapter(
    "intellectual-property",
    14,
    "Intellectual Property for Business",
    [
    section(
      "intellectual-property-s1",
      "14.1 Intellectual Property for Business — Foundations and vocabulary",
      ["Property law defines bundles of rights in land and chattels—possession, use, exclusion, and transfer—with recording systems that protect buyers. Intellectual Property for Business is a foundation in Business Law because federalism splits authority between national and state governments in the U.S.. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Burden of proof and standards of review change outcomes even when facts are similar. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain intellectual property for business aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat intellectual property for business as a shared model for decisions. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "intellectual-property-s2",
      "14.2 Intellectual Property for Business — How professionals apply this in practice",
      ["Professionals rarely dispute whether intellectual property for business exists—they dispute how alternative dispute resolution can resolve conflicts faster than full trials. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Federalism splits authority between national and state governments in the U.S.","When stakes rise, pause for a second opinion or formal review. Burden of proof and standards of review change outcomes even when facts are similar. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Contracts allocate risk with offer, acceptance, consideration, and definite terms. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."]
      }
    ),
    section(
      "intellectual-property-s3",
      "14.3 Intellectual Property for Business — Workplace scenarios and documentation",
      ["Scenario: a teammate cites intellectual property for business in a meeting, but details in the packet do not match the textbook example. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Alternative dispute resolution can resolve conflicts faster than full trials.","Good documentation states facts, cites the framework, and records the decision. Federalism splits authority between national and state governments in the U.S. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Burden of proof and standards of review change outcomes even when facts are similar. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."],
        caseStudies: [
          { name: "Apple Computer, Inc. v. Microsoft Corp.", year: "1994", summary: "GUI look-and-feel copyright dispute—shows how IP battles shape product design and licensing." },
        ]
      }
    ),
    section(
      "intellectual-property-s4",
      "14.4 Intellectual Property for Business — Common mistakes and how to avoid them",
      ["Common mistakes around intellectual property for business include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Torts compensate harm caused by negligence, strict liability, or intentional acts.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Alternative dispute resolution can resolve conflicts faster than full trials. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Federalism splits authority between national and state governments in the U.S. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."]
      }
    ),
    section(
      "intellectual-property-s5",
      "14.5 Intellectual Property for Business — Putting the chapter together",
      ["This chapter’s through-line is simple: Intellectual Property for Business connects principles to accountable action. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Torts compensate harm caused by negligence, strict liability, or intentional acts. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits intellectual property for business in your field. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Alternative dispute resolution can resolve conflicts faster than full trials."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."]
      }
    )
    ],
    {
      learningObjectives: ["Define intellectual property for business and explain why it matters in Business Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Intellectual Property for Business: Property law defines bundles of rights in land and chattels—possession, use, exclusion, and transfer—with recording systems that protect buyers. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Constitutional limits constrain what governments and sometimes private actors may do.","Criminal law uses government prosecution and protections like presumption of innocence.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Constitutional limits constrain what governments and sometimes private actors may do."],
      realWorldRelevance: "Strong grasp of intellectual property for business reduces rework, supports defensible records, and speeds collaboration across Business Law.",
    }
  ),
  chapter(
    "antitrust",
    15,
    "Antitrust and Competition Law",
    [
    section(
      "antitrust-s1",
      "15.1 Antitrust and Competition Law — Foundations and vocabulary",
      ["Antitrust and Competition Law is a foundation in Business Law because ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Criminal law uses government prosecution and protections like presumption of innocence. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain antitrust and competition law aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat antitrust and competition law as a shared model for decisions. Statutes come from legislatures while case law develops through published judicial decisions. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "antitrust-s2",
      "15.2 Antitrust and Competition Law — How professionals apply this in practice",
      ["Professionals rarely dispute whether antitrust and competition law exists—they dispute how constitutional limits constrain what governments and sometimes private actors may do. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","When stakes rise, pause for a second opinion or formal review. Criminal law uses government prosecution and protections like presumption of innocence. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Statutes come from legislatures while case law develops through published judicial decisions. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."]
      }
    ),
    section(
      "antitrust-s3",
      "15.3 Antitrust and Competition Law — Workplace scenarios and documentation",
      ["Scenario: a teammate cites antitrust and competition law in a meeting, but details in the packet do not match the textbook example. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Constitutional limits constrain what governments and sometimes private actors may do.","Good documentation states facts, cites the framework, and records the decision. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Criminal law uses government prosecution and protections like presumption of innocence. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."],
        caseStudies: [
          { name: "United States v. Microsoft Corp.", year: "2001", summary: "Monopolization and tying in software markets—Sherman Act enforcement against dominant platforms." },
        ]
      }
    ),
    section(
      "antitrust-s4",
      "15.4 Antitrust and Competition Law — Common mistakes and how to avoid them",
      ["Common mistakes around antitrust and competition law include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Burden of proof and standards of review change outcomes even when facts are similar.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Constitutional limits constrain what governments and sometimes private actors may do. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."]
      }
    ),
    section(
      "antitrust-s5",
      "15.5 Antitrust and Competition Law — Putting the chapter together",
      ["This chapter’s through-line is simple: Antitrust and Competition Law connects principles to accountable action. Federalism splits authority between national and state governments in the U.S.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Burden of proof and standards of review change outcomes even when facts are similar. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits antitrust and competition law in your field. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Constitutional limits constrain what governments and sometimes private actors may do."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."]
      }
    )
    ],
    {
      learningObjectives: ["Define antitrust and competition law and explain why it matters in Business Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Antitrust and Competition Law connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Constitutional limits constrain what governments and sometimes private actors may do.","Criminal law uses government prosecution and protections like presumption of innocence.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Constitutional limits constrain what governments and sometimes private actors may do."],
      realWorldRelevance: "Strong grasp of antitrust and competition law reduces rework, supports defensible records, and speeds collaboration across Business Law.",
    }
  ),
  chapter(
    "regulatory-compliance",
    16,
    "Regulation and Compliance",
    [
    section(
      "regulatory-compliance-s1",
      "16.1 Regulation and Compliance — Foundations and vocabulary",
      ["Regulation and Compliance is a foundation in Business Law because civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Torts compensate harm caused by negligence, strict liability, or intentional acts. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain regulation and compliance aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat regulation and compliance as a shared model for decisions. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "regulatory-compliance-s2",
      "16.2 Regulation and Compliance — How professionals apply this in practice",
      ["Professionals rarely dispute whether regulation and compliance exists—they dispute how rules are announced in advance and applied by independent institutions rather than private retaliation. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","When stakes rise, pause for a second opinion or formal review. Torts compensate harm caused by negligence, strict liability, or intentional acts. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Legal research starts with primary sources—constitutions, statutes, regulations, cases. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."]
      }
    ),
    section(
      "regulatory-compliance-s3",
      "16.3 Regulation and Compliance — Workplace scenarios and documentation",
      ["Scenario: a teammate cites regulation and compliance in a meeting, but details in the packet do not match the textbook example. Statutes come from legislatures while case law develops through published judicial decisions. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Rules are announced in advance and applied by independent institutions rather than private retaliation.","Good documentation states facts, cites the framework, and records the decision. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Torts compensate harm caused by negligence, strict liability, or intentional acts. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."],
        caseStudies: [
          { name: "Chevron U.S.A. Inc. v. NRDC", year: "1984", summary: "Agency deference on ambiguous rules—compliance teams follow regulations agencies reasonably interpret." },
        ]
      }
    ),
    section(
      "regulatory-compliance-s4",
      "16.4 Regulation and Compliance — Common mistakes and how to avoid them",
      ["Common mistakes around regulation and compliance include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Criminal law uses government prosecution and protections like presumption of innocence.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Statutes come from legislatures while case law develops through published judicial decisions. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Rules are announced in advance and applied by independent institutions rather than private retaliation. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."]
      }
    ),
    section(
      "regulatory-compliance-s5",
      "16.5 Regulation and Compliance — Putting the chapter together",
      ["This chapter’s through-line is simple: Regulation and Compliance connects principles to accountable action. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Criminal law uses government prosecution and protections like presumption of innocence. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits regulation and compliance in your field. Statutes come from legislatures while case law develops through published judicial decisions. Rules are announced in advance and applied by independent institutions rather than private retaliation."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."]
      }
    )
    ],
    {
      learningObjectives: ["Define regulation and compliance and explain why it matters in Business Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Regulation and Compliance connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Constitutional limits constrain what governments and sometimes private actors may do.","Criminal law uses government prosecution and protections like presumption of innocence.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Constitutional limits constrain what governments and sometimes private actors may do."],
      realWorldRelevance: "Strong grasp of regulation and compliance reduces rework, supports defensible records, and speeds collaboration across Business Law.",
    }
  ),
  chapter(
    "consumer-protection",
    17,
    "Consumer Protection Law",
    [
    section(
      "consumer-protection-s1",
      "17.1 Consumer Protection Law — Foundations and vocabulary",
      ["Consumer Protection Law is a foundation in Business Law because contracts allocate risk with offer, acceptance, consideration, and definite terms. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Constitutional limits constrain what governments and sometimes private actors may do. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain consumer protection law aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat consumer protection law as a shared model for decisions. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Criminal law uses government prosecution and protections like presumption of innocence.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "consumer-protection-s2",
      "17.2 Consumer Protection Law — How professionals apply this in practice",
      ["Professionals rarely dispute whether consumer protection law exists—they dispute how burden of proof and standards of review change outcomes even when facts are similar. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","When stakes rise, pause for a second opinion or formal review. Constitutional limits constrain what governments and sometimes private actors may do. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Criminal law uses government prosecution and protections like presumption of innocence.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    ),
    section(
      "consumer-protection-s3",
      "17.3 Consumer Protection Law — Workplace scenarios and documentation",
      ["Scenario: a teammate cites consumer protection law in a meeting, but details in the packet do not match the textbook example. Federalism splits authority between national and state governments in the U.S. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Burden of proof and standards of review change outcomes even when facts are similar.","Good documentation states facts, cites the framework, and records the decision. Contracts allocate risk with offer, acceptance, consideration, and definite terms. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Constitutional limits constrain what governments and sometimes private actors may do. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."],
        caseStudies: [
          { name: "FTC v. Wyndham Worldwide Corp.", year: "2015", summary: "FTC Act covers unreasonable data security—consumer protection extends to cybersecurity practices." },
        ]
      }
    ),
    section(
      "consumer-protection-s4",
      "17.4 Consumer Protection Law — Common mistakes and how to avoid them",
      ["Common mistakes around consumer protection law include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Alternative dispute resolution can resolve conflicts faster than full trials.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Federalism splits authority between national and state governments in the U.S. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Burden of proof and standards of review change outcomes even when facts are similar. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Criminal law uses government prosecution and protections like presumption of innocence.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    ),
    section(
      "consumer-protection-s5",
      "17.5 Consumer Protection Law — Putting the chapter together",
      ["This chapter’s through-line is simple: Consumer Protection Law connects principles to accountable action. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Alternative dispute resolution can resolve conflicts faster than full trials. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits consumer protection law in your field. Federalism splits authority between national and state governments in the U.S. Burden of proof and standards of review change outcomes even when facts are similar."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Criminal law uses government prosecution and protections like presumption of innocence.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    )
    ],
    {
      learningObjectives: ["Define consumer protection law and explain why it matters in Business Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Consumer Protection Law connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Criminal law uses government prosecution and protections like presumption of innocence.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
      realWorldRelevance: "Strong grasp of consumer protection law reduces rework, supports defensible records, and speeds collaboration across Business Law.",
    }
  ),
  chapter(
    "bankruptcy-basics",
    18,
    "Bankruptcy and Creditor Rights",
    [
    section(
      "bankruptcy-basics-s1",
      "18.1 Bankruptcy and Creditor Rights — Foundations and vocabulary",
      ["Bankruptcy and Creditor Rights is a foundation in Business Law because alternative dispute resolution can resolve conflicts faster than full trials. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Federalism splits authority between national and state governments in the U.S. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain bankruptcy and creditor rights aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat bankruptcy and creditor rights as a shared model for decisions. Burden of proof and standards of review change outcomes even when facts are similar. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "bankruptcy-basics-s2",
      "18.2 Bankruptcy and Creditor Rights — How professionals apply this in practice",
      ["Professionals rarely dispute whether bankruptcy and creditor rights exists—they dispute how federalism splits authority between national and state governments in the U.S. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Burden of proof and standards of review change outcomes even when facts are similar.","When stakes rise, pause for a second opinion or formal review. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Constitutional limits constrain what governments and sometimes private actors may do. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."]
      }
    ),
    section(
      "bankruptcy-basics-s3",
      "18.3 Bankruptcy and Creditor Rights — Workplace scenarios and documentation",
      ["Scenario: a teammate cites bankruptcy and creditor rights in a meeting, but details in the packet do not match the textbook example. Burden of proof and standards of review change outcomes even when facts are similar. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Good documentation states facts, cites the framework, and records the decision. Constitutional limits constrain what governments and sometimes private actors may do. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."],
        caseStudies: [
          { name: "Mission Product Holdings, Inc. v. Tempnology, LLC", year: "2019", summary: "Trademark licenses in bankruptcy—debtor-in-possession cannot always void executory contracts without consequences." },
        ]
      }
    ),
    section(
      "bankruptcy-basics-s4",
      "18.4 Bankruptcy and Creditor Rights — Common mistakes and how to avoid them",
      ["Common mistakes around bankruptcy and creditor rights include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Constitutional limits constrain what governments and sometimes private actors may do. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Criminal law uses government prosecution and protections like presumption of innocence. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."]
      }
    ),
    section(
      "bankruptcy-basics-s5",
      "18.5 Bankruptcy and Creditor Rights — Putting the chapter together",
      ["This chapter’s through-line is simple: Bankruptcy and Creditor Rights connects principles to accountable action. Constitutional limits constrain what governments and sometimes private actors may do.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits bankruptcy and creditor rights in your field. Criminal law uses government prosecution and protections like presumption of innocence. Statutes come from legislatures while case law develops through published judicial decisions."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."]
      }
    )
    ],
    {
      learningObjectives: ["Define bankruptcy and creditor rights and explain why it matters in Business Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Bankruptcy and Creditor Rights connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Federalism splits authority between national and state governments in the U.S.","Alternative dispute resolution can resolve conflicts faster than full trials.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."],
      realWorldRelevance: "Strong grasp of bankruptcy and creditor rights reduces rework, supports defensible records, and speeds collaboration across Business Law.",
    }
  ),
  chapter(
    "international-business",
    19,
    "International Business Law",
    [
    section(
      "international-business-s1",
      "19.1 International Business Law — Foundations and vocabulary",
      ["International Business Law is a foundation in Business Law because statutes come from legislatures while case law develops through published judicial decisions. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Rules are announced in advance and applied by independent institutions rather than private retaliation. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain international business law aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat international business law as a shared model for decisions. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "international-business-s2",
      "19.2 International Business Law — How professionals apply this in practice",
      ["Professionals rarely dispute whether international business law exists—they dispute how rules are announced in advance and applied by independent institutions rather than private retaliation. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","When stakes rise, pause for a second opinion or formal review. Torts compensate harm caused by negligence, strict liability, or intentional acts. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Legal research starts with primary sources—constitutions, statutes, regulations, cases. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."]
      }
    ),
    section(
      "international-business-s3",
      "19.3 International Business Law — Workplace scenarios and documentation",
      ["Scenario: a teammate cites international business law in a meeting, but details in the packet do not match the textbook example. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Torts compensate harm caused by negligence, strict liability, or intentional acts.","Good documentation states facts, cites the framework, and records the decision. Legal research starts with primary sources—constitutions, statutes, regulations, cases. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Alternative dispute resolution can resolve conflicts faster than full trials. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."],
        caseStudies: [
          { name: "Filanto, S.p.A. v. Chilewich International Corp.", year: "1992", summary: "CISG and arbitration in cross-border sales—choice of law clauses steer dispute forums." },
        ]
      }
    ),
    section(
      "international-business-s4",
      "19.4 International Business Law — Common mistakes and how to avoid them",
      ["Common mistakes around international business law include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Torts compensate harm caused by negligence, strict liability, or intentional acts.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Alternative dispute resolution can resolve conflicts faster than full trials. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Federalism splits authority between national and state governments in the U.S. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."]
      }
    ),
    section(
      "international-business-s5",
      "19.5 International Business Law — Putting the chapter together",
      ["This chapter’s through-line is simple: International Business Law connects principles to accountable action. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Alternative dispute resolution can resolve conflicts faster than full trials. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits international business law in your field. Federalism splits authority between national and state governments in the U.S. Burden of proof and standards of review change outcomes even when facts are similar."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."]
      }
    )
    ],
    {
      learningObjectives: ["Define international business law and explain why it matters in Business Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "International Business Law connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Alternative dispute resolution can resolve conflicts faster than full trials.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Torts compensate harm caused by negligence, strict liability, or intentional acts."],
      realWorldRelevance: "Strong grasp of international business law reduces rework, supports defensible records, and speeds collaboration across Business Law.",
    }
  ),
  chapter(
    "risk-management",
    20,
    "Legal Risk Management",
    [
    section(
      "risk-management-s1",
      "20.1 Legal Risk Management — Foundations and vocabulary",
      ["Legal Risk Management is a foundation in Business Law because contracts allocate risk with offer, acceptance, consideration, and definite terms. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Alternative dispute resolution can resolve conflicts faster than full trials. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain legal risk management aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat legal risk management as a shared model for decisions. Federalism splits authority between national and state governments in the U.S. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "risk-management-s2",
      "20.2 Legal Risk Management — How professionals apply this in practice",
      ["Professionals rarely dispute whether legal risk management exists—they dispute how legal research starts with primary sources—constitutions, statutes, regulations, cases. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","When stakes rise, pause for a second opinion or formal review. Alternative dispute resolution can resolve conflicts faster than full trials. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Federalism splits authority between national and state governments in the U.S. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."]
      }
    ),
    section(
      "risk-management-s3",
      "20.3 Legal Risk Management — Workplace scenarios and documentation",
      ["Scenario: a teammate cites legal risk management in a meeting, but details in the packet do not match the textbook example. Torts compensate harm caused by negligence, strict liability, or intentional acts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Good documentation states facts, cites the framework, and records the decision. Contracts allocate risk with offer, acceptance, consideration, and definite terms. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Alternative dispute resolution can resolve conflicts faster than full trials. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."],
        caseStudies: [
          { name: "Ultramares Corp. v. Touche", year: "1931", summary: "Auditor liability limits—risk managers scope insurance and contracts knowing third-party suits face barriers." },
        ]
      }
    ),
    section(
      "risk-management-s4",
      "20.4 Legal Risk Management — Common mistakes and how to avoid them",
      ["Common mistakes around legal risk management include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Torts compensate harm caused by negligence, strict liability, or intentional acts. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."]
      }
    ),
    section(
      "risk-management-s5",
      "20.5 Legal Risk Management — Putting the chapter together",
      ["This chapter’s through-line is simple: Legal Risk Management connects principles to accountable action. Rules are announced in advance and applied by independent institutions rather than private retaliation.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits legal risk management in your field. Torts compensate harm caused by negligence, strict liability, or intentional acts. Legal research starts with primary sources—constitutions, statutes, regulations, cases."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."]
      }
    )
    ],
    {
      learningObjectives: ["Define legal risk management and explain why it matters in Business Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Legal Risk Management connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Federalism splits authority between national and state governments in the U.S.","Alternative dispute resolution can resolve conflicts faster than full trials.","Burden of proof and standards of review change outcomes even when facts are similar.","Federalism splits authority between national and state governments in the U.S.","Alternative dispute resolution can resolve conflicts faster than full trials."],
      realWorldRelevance: "Strong grasp of legal risk management reduces rework, supports defensible records, and speeds collaboration across Business Law.",
    }
  )
];
