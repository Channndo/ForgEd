import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const TORTS_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Torts Law",
  subtitle: "ForgEd deep-dive — torts law",
  paragraphs: [
    "This ForgEd digital textbook presents Torts Law at academic survey depth — cited frameworks, rigorous prose, and chapter learning objectives. 20 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Material is general legal education, not legal advice. Consult a licensed attorney for specific matters.",
  ],
};

export const TORTS_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "tort-theory",
    1,
    "Theory and Goals of Tort Law",
    [
    section(
      "tort-theory-s1",
      "1.1 Theory and Goals of Tort Law — Foundations and vocabulary",
      ["Tort law compensates private wrongs—injury to persons or property—through civil lawsuits distinct from criminal prosecution. Goals include deterrence, compensation, and corrective justice. Theory and Goals of Tort Law is a foundation in Torts Law because burden of proof and standards of review change outcomes even when facts are similar. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Contracts allocate risk with offer, acceptance, consideration, and definite terms. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain theory and goals of tort law aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat theory and goals of tort law as a shared model for decisions. Constitutional limits constrain what governments and sometimes private actors may do. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "tort-theory-s2",
      "1.2 Theory and Goals of Tort Law — How professionals apply this in practice",
      ["Professionals rarely dispute whether theory and goals of tort law exists—they dispute how federalism splits authority between national and state governments in the U.S. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Burden of proof and standards of review change outcomes even when facts are similar.","When stakes rise, pause for a second opinion or formal review. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Constitutional limits constrain what governments and sometimes private actors may do. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    ),
    section(
      "tort-theory-s3",
      "1.3 Theory and Goals of Tort Law — Workplace scenarios and documentation",
      ["Scenario: a teammate cites theory and goals of tort law in a meeting, but details in the packet do not match the textbook example. Alternative dispute resolution can resolve conflicts faster than full trials. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Federalism splits authority between national and state governments in the U.S.","Good documentation states facts, cites the framework, and records the decision. Burden of proof and standards of review change outcomes even when facts are similar. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Contracts allocate risk with offer, acceptance, consideration, and definite terms. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
        caseStudies: [
          { name: "Donoghue v. Stevenson", year: "1932", summary: "Neighbor principle in negligence—duty extends to foreseeable victims, foundational for modern tort theory." },
        ]
      }
    ),
    section(
      "tort-theory-s4",
      "1.4 Theory and Goals of Tort Law — Common mistakes and how to avoid them",
      ["Common mistakes around theory and goals of tort law include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Alternative dispute resolution can resolve conflicts faster than full trials. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Federalism splits authority between national and state governments in the U.S. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Burden of proof and standards of review change outcomes even when facts are similar. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."]
      }
    ),
    section(
      "tort-theory-s5",
      "1.5 Theory and Goals of Tort Law — Putting the chapter together",
      ["This chapter’s through-line is simple: Theory and Goals of Tort Law connects principles to accountable action. Torts compensate harm caused by negligence, strict liability, or intentional acts.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits theory and goals of tort law in your field. Alternative dispute resolution can resolve conflicts faster than full trials. Federalism splits authority between national and state governments in the U.S."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    )
    ],
    {
      learningObjectives: ["Define theory and goals of tort law and explain why it matters in Torts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Theory and Goals of Tort Law: Tort law compensates private wrongs—injury to persons or property—through civil lawsuits distinct from criminal prosecution. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."],
      realWorldRelevance: "Strong grasp of theory and goals of tort law reduces rework, supports defensible records, and speeds collaboration across Torts Law.",
    }
  ),
  chapter(
    "intentional-torts",
    2,
    "Intentional Torts to Persons",
    [
    section(
      "intentional-torts-s1",
      "2.1 Intentional Torts to Persons — Foundations and vocabulary",
      ["Tort law compensates private wrongs—injury to persons or property—through civil lawsuits distinct from criminal prosecution. Goals include deterrence, compensation, and corrective justice. Intentional Torts to Persons is a foundation in Torts Law because torts compensate harm caused by negligence, strict liability, or intentional acts. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Legal research starts with primary sources—constitutions, statutes, regulations, cases. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain intentional torts to persons aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat intentional torts to persons as a shared model for decisions. Alternative dispute resolution can resolve conflicts faster than full trials. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "intentional-torts-s2",
      "2.2 Intentional Torts to Persons — How professionals apply this in practice",
      ["Professionals rarely dispute whether intentional torts to persons exists—they dispute how legal research starts with primary sources—constitutions, statutes, regulations, cases. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Alternative dispute resolution can resolve conflicts faster than full trials.","When stakes rise, pause for a second opinion or formal review. Federalism splits authority between national and state governments in the U.S. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Burden of proof and standards of review change outcomes even when facts are similar. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    ),
    section(
      "intentional-torts-s3",
      "2.3 Intentional Torts to Persons — Workplace scenarios and documentation",
      ["Scenario: a teammate cites intentional torts to persons in a meeting, but details in the packet do not match the textbook example. Alternative dispute resolution can resolve conflicts faster than full trials. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Federalism splits authority between national and state governments in the U.S.","Good documentation states facts, cites the framework, and records the decision. Burden of proof and standards of review change outcomes even when facts are similar. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Contracts allocate risk with offer, acceptance, consideration, and definite terms. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."],
        caseStudies: [
          { name: "Vosburg v. Putney", year: "1891", summary: "Battery includes harmful or offensive contact—even a playful kick in class can be tortious if intent to touch exists." },
        ]
      }
    ),
    section(
      "intentional-torts-s4",
      "2.4 Intentional Torts to Persons — Common mistakes and how to avoid them",
      ["Common mistakes around intentional torts to persons include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Federalism splits authority between national and state governments in the U.S.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Burden of proof and standards of review change outcomes even when facts are similar. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Constitutional limits constrain what governments and sometimes private actors may do. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."]
      }
    ),
    section(
      "intentional-torts-s5",
      "2.5 Intentional Torts to Persons — Putting the chapter together",
      ["This chapter’s through-line is simple: Intentional Torts to Persons connects principles to accountable action. Burden of proof and standards of review change outcomes even when facts are similar.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits intentional torts to persons in your field. Constitutional limits constrain what governments and sometimes private actors may do. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    )
    ],
    {
      learningObjectives: ["Define intentional torts to persons and explain why it matters in Torts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Intentional Torts to Persons: Tort law compensates private wrongs—injury to persons or property—through civil lawsuits distinct from criminal prosecution. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
      realWorldRelevance: "Strong grasp of intentional torts to persons reduces rework, supports defensible records, and speeds collaboration across Torts Law.",
    }
  ),
  chapter(
    "intentional-property",
    3,
    "Intentional Torts to Property",
    [
    section(
      "intentional-property-s1",
      "3.1 Intentional Torts to Property — Foundations and vocabulary",
      ["Tort law compensates private wrongs—injury to persons or property—through civil lawsuits distinct from criminal prosecution. Goals include deterrence, compensation, and corrective justice. Intentional Torts to Property is a foundation in Torts Law because civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Torts compensate harm caused by negligence, strict liability, or intentional acts. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain intentional torts to property aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat intentional torts to property as a shared model for decisions. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "intentional-property-s2",
      "3.2 Intentional Torts to Property — How professionals apply this in practice",
      ["Professionals rarely dispute whether intentional torts to property exists—they dispute how rules are announced in advance and applied by independent institutions rather than private retaliation. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","When stakes rise, pause for a second opinion or formal review. Torts compensate harm caused by negligence, strict liability, or intentional acts. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Legal research starts with primary sources—constitutions, statutes, regulations, cases. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."]
      }
    ),
    section(
      "intentional-property-s3",
      "3.3 Intentional Torts to Property — Workplace scenarios and documentation",
      ["Scenario: a teammate cites intentional torts to property in a meeting, but details in the packet do not match the textbook example. Statutes come from legislatures while case law develops through published judicial decisions. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Rules are announced in advance and applied by independent institutions rather than private retaliation.","Good documentation states facts, cites the framework, and records the decision. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Torts compensate harm caused by negligence, strict liability, or intentional acts. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."],
        caseStudies: [
          { name: "Katko v. Briney", year: "1971", summary: "Spring-gun booby trap injured trespasser—deadly force to protect unoccupied property is generally unreasonable." },
        ]
      }
    ),
    section(
      "intentional-property-s4",
      "3.4 Intentional Torts to Property — Common mistakes and how to avoid them",
      ["Common mistakes around intentional torts to property include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Criminal law uses government prosecution and protections like presumption of innocence.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Statutes come from legislatures while case law develops through published judicial decisions. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Rules are announced in advance and applied by independent institutions rather than private retaliation. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."]
      }
    ),
    section(
      "intentional-property-s5",
      "3.5 Intentional Torts to Property — Putting the chapter together",
      ["This chapter’s through-line is simple: Intentional Torts to Property connects principles to accountable action. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Criminal law uses government prosecution and protections like presumption of innocence. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits intentional torts to property in your field. Statutes come from legislatures while case law develops through published judicial decisions. Rules are announced in advance and applied by independent institutions rather than private retaliation."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."]
      }
    )
    ],
    {
      learningObjectives: ["Define intentional torts to property and explain why it matters in Torts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Intentional Torts to Property: Tort law compensates private wrongs—injury to persons or property—through civil lawsuits distinct from criminal prosecution. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Alternative dispute resolution can resolve conflicts faster than full trials.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Torts compensate harm caused by negligence, strict liability, or intentional acts."],
      realWorldRelevance: "Strong grasp of intentional torts to property reduces rework, supports defensible records, and speeds collaboration across Torts Law.",
    }
  ),
  chapter(
    "negligence-duty",
    4,
    "Negligence: Duty and Breach",
    [
    section(
      "negligence-duty-s1",
      "4.1 Negligence: Duty and Breach — Foundations and vocabulary",
      ["Negligence is the workhorse of tort practice: duty, breach, causation, and damages must each be proved with evidence that survives motion practice. Negligence: Duty and Breach is a foundation in Torts Law because federalism splits authority between national and state governments in the U.S.. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Burden of proof and standards of review change outcomes even when facts are similar. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain negligence: duty and breach aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat negligence: duty and breach as a shared model for decisions. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "negligence-duty-s2",
      "4.2 Negligence: Duty and Breach — How professionals apply this in practice",
      ["Professionals rarely dispute whether negligence: duty and breach exists—they dispute how burden of proof and standards of review change outcomes even when facts are similar. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","When stakes rise, pause for a second opinion or formal review. Constitutional limits constrain what governments and sometimes private actors may do. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."]
      }
    ),
    section(
      "negligence-duty-s3",
      "4.3 Negligence: Duty and Breach — Workplace scenarios and documentation",
      ["Scenario: a teammate cites negligence: duty and breach in a meeting, but details in the packet do not match the textbook example. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Constitutional limits constrain what governments and sometimes private actors may do.","Good documentation states facts, cites the framework, and records the decision. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Criminal law uses government prosecution and protections like presumption of innocence. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."],
        caseStudies: [
          { name: "Palsgraf v. Long Island R.R.", year: "1928", summary: "Duty is to foreseeable plaintiffs—exploding package on a platform created a famous limits-of-duty dispute." },
        ]
      }
    ),
    section(
      "negligence-duty-s4",
      "4.4 Negligence: Duty and Breach — Common mistakes and how to avoid them",
      ["Common mistakes around negligence: duty and breach include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Constitutional limits constrain what governments and sometimes private actors may do.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Criminal law uses government prosecution and protections like presumption of innocence. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Statutes come from legislatures while case law develops through published judicial decisions. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."]
      }
    ),
    section(
      "negligence-duty-s5",
      "4.5 Negligence: Duty and Breach — Putting the chapter together",
      ["This chapter’s through-line is simple: Negligence: Duty and Breach connects principles to accountable action. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Criminal law uses government prosecution and protections like presumption of innocence. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits negligence: duty and breach in your field. Statutes come from legislatures while case law develops through published judicial decisions. Rules are announced in advance and applied by independent institutions rather than private retaliation."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."]
      }
    )
    ],
    {
      learningObjectives: ["Define negligence: duty and breach and explain why it matters in Torts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Negligence: Duty and Breach: Negligence is the workhorse of tort practice: duty, breach, causation, and damages must each be proved with evidence that survives motion practice. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."],
      realWorldRelevance: "Strong grasp of negligence: duty and breach reduces rework, supports defensible records, and speeds collaboration across Torts Law.",
    }
  ),
  chapter(
    "causation",
    5,
    "Causation in Fact and Proximate Cause",
    [
    section(
      "causation-s1",
      "5.1 Causation in Fact and Proximate Cause — Foundations and vocabulary",
      ["Causation in Fact and Proximate Cause is a foundation in Torts Law because contracts allocate risk with offer, acceptance, consideration, and definite terms. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Constitutional limits constrain what governments and sometimes private actors may do. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain causation in fact and proximate cause aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat causation in fact and proximate cause as a shared model for decisions. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "causation-s2",
      "5.2 Causation in Fact and Proximate Cause — How professionals apply this in practice",
      ["Professionals rarely dispute whether causation in fact and proximate cause exists—they dispute how constitutional limits constrain what governments and sometimes private actors may do. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","When stakes rise, pause for a second opinion or formal review. Criminal law uses government prosecution and protections like presumption of innocence. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Statutes come from legislatures while case law develops through published judicial decisions. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    ),
    section(
      "causation-s3",
      "5.3 Causation in Fact and Proximate Cause — Workplace scenarios and documentation",
      ["Scenario: a teammate cites causation in fact and proximate cause in a meeting, but details in the packet do not match the textbook example. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Criminal law uses government prosecution and protections like presumption of innocence.","Good documentation states facts, cites the framework, and records the decision. Statutes come from legislatures while case law develops through published judicial decisions. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Rules are announced in advance and applied by independent institutions rather than private retaliation. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."],
        caseStudies: [
          { name: "Summers v. Tice", year: "1948", summary: "Substantial factor and alternative liability when two hunters shoot one victim—causation doctrines shift burdens." },
        ]
      }
    ),
    section(
      "causation-s4",
      "5.4 Causation in Fact and Proximate Cause — Common mistakes and how to avoid them",
      ["Common mistakes around causation in fact and proximate cause include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Criminal law uses government prosecution and protections like presumption of innocence.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Statutes come from legislatures while case law develops through published judicial decisions. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Rules are announced in advance and applied by independent institutions rather than private retaliation. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."]
      }
    ),
    section(
      "causation-s5",
      "5.5 Causation in Fact and Proximate Cause — Putting the chapter together",
      ["This chapter’s through-line is simple: Causation in Fact and Proximate Cause connects principles to accountable action. Statutes come from legislatures while case law develops through published judicial decisions.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Rules are announced in advance and applied by independent institutions rather than private retaliation. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits causation in fact and proximate cause in your field. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Burden of proof and standards of review change outcomes even when facts are similar."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    )
    ],
    {
      learningObjectives: ["Define causation in fact and proximate cause and explain why it matters in Torts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Causation in Fact and Proximate Cause connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Burden of proof and standards of review change outcomes even when facts are similar.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Burden of proof and standards of review change outcomes even when facts are similar."],
      realWorldRelevance: "Strong grasp of causation in fact and proximate cause reduces rework, supports defensible records, and speeds collaboration across Torts Law.",
    }
  ),
  chapter(
    "damages-negligence",
    6,
    "Damages in Negligence Cases",
    [
    section(
      "damages-negligence-s1",
      "6.1 Damages in Negligence Cases — Foundations and vocabulary",
      ["Negligence is the workhorse of tort practice: duty, breach, causation, and damages must each be proved with evidence that survives motion practice. Damages in Negligence Cases is a foundation in Torts Law because statutes come from legislatures while case law develops through published judicial decisions. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Rules are announced in advance and applied by independent institutions rather than private retaliation. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain damages in negligence cases aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat damages in negligence cases as a shared model for decisions. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "damages-negligence-s2",
      "6.2 Damages in Negligence Cases — How professionals apply this in practice",
      ["Professionals rarely dispute whether damages in negligence cases exists—they dispute how rules are announced in advance and applied by independent institutions rather than private retaliation. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","When stakes rise, pause for a second opinion or formal review. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Torts compensate harm caused by negligence, strict liability, or intentional acts. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."]
      }
    ),
    section(
      "damages-negligence-s3",
      "6.3 Damages in Negligence Cases — Workplace scenarios and documentation",
      ["Scenario: a teammate cites damages in negligence cases in a meeting, but details in the packet do not match the textbook example. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Good documentation states facts, cites the framework, and records the decision. Torts compensate harm caused by negligence, strict liability, or intentional acts. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Alternative dispute resolution can resolve conflicts faster than full trials. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Alternative dispute resolution can resolve conflicts faster than full trials."],
        caseStudies: [
          { name: "United States v. Carroll Towing Co.", year: "1947", summary: "Hand formula (B<PL) for reasonable care—economics of risk inform negligence standards." },
        ]
      }
    ),
    section(
      "damages-negligence-s4",
      "6.4 Damages in Negligence Cases — Common mistakes and how to avoid them",
      ["Common mistakes around damages in negligence cases include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Torts compensate harm caused by negligence, strict liability, or intentional acts. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Alternative dispute resolution can resolve conflicts faster than full trials. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Federalism splits authority between national and state governments in the U.S. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    ),
    section(
      "damages-negligence-s5",
      "6.5 Damages in Negligence Cases — Putting the chapter together",
      ["This chapter’s through-line is simple: Damages in Negligence Cases connects principles to accountable action. Torts compensate harm caused by negligence, strict liability, or intentional acts.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Alternative dispute resolution can resolve conflicts faster than full trials. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits damages in negligence cases in your field. Federalism splits authority between national and state governments in the U.S. Burden of proof and standards of review change outcomes even when facts are similar."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."]
      }
    )
    ],
    {
      learningObjectives: ["Define damages in negligence cases and explain why it matters in Torts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Damages in Negligence Cases: Negligence is the workhorse of tort practice: duty, breach, causation, and damages must each be proved with evidence that survives motion practice. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."],
      realWorldRelevance: "Strong grasp of damages in negligence cases reduces rework, supports defensible records, and speeds collaboration across Torts Law.",
    }
  ),
  chapter(
    "defenses-negligence",
    7,
    "Defenses to Negligence",
    [
    section(
      "defenses-negligence-s1",
      "7.1 Defenses to Negligence — Foundations and vocabulary",
      ["Negligence is the workhorse of tort practice: duty, breach, causation, and damages must each be proved with evidence that survives motion practice. Defenses to Negligence is a foundation in Torts Law because federalism splits authority between national and state governments in the U.S.. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Burden of proof and standards of review change outcomes even when facts are similar. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain defenses to negligence aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat defenses to negligence as a shared model for decisions. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "defenses-negligence-s2",
      "7.2 Defenses to Negligence — How professionals apply this in practice",
      ["Professionals rarely dispute whether defenses to negligence exists—they dispute how burden of proof and standards of review change outcomes even when facts are similar. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","When stakes rise, pause for a second opinion or formal review. Constitutional limits constrain what governments and sometimes private actors may do. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."]
      }
    ),
    section(
      "defenses-negligence-s3",
      "7.3 Defenses to Negligence — Workplace scenarios and documentation",
      ["Scenario: a teammate cites defenses to negligence in a meeting, but details in the packet do not match the textbook example. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Constitutional limits constrain what governments and sometimes private actors may do.","Good documentation states facts, cites the framework, and records the decision. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Criminal law uses government prosecution and protections like presumption of innocence. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."],
        caseStudies: [
          { name: "Li v. Yellow Cab Co. of California", year: "1975", summary: "Comparative negligence replaced contributory bar in many states—allocation of fault reduces but rarely eliminates recovery." },
        ]
      }
    ),
    section(
      "defenses-negligence-s4",
      "7.4 Defenses to Negligence — Common mistakes and how to avoid them",
      ["Common mistakes around defenses to negligence include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Constitutional limits constrain what governments and sometimes private actors may do.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Criminal law uses government prosecution and protections like presumption of innocence. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Statutes come from legislatures while case law develops through published judicial decisions. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."]
      }
    ),
    section(
      "defenses-negligence-s5",
      "7.5 Defenses to Negligence — Putting the chapter together",
      ["This chapter’s through-line is simple: Defenses to Negligence connects principles to accountable action. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Criminal law uses government prosecution and protections like presumption of innocence. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits defenses to negligence in your field. Statutes come from legislatures while case law develops through published judicial decisions. Rules are announced in advance and applied by independent institutions rather than private retaliation."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."]
      }
    )
    ],
    {
      learningObjectives: ["Define defenses to negligence and explain why it matters in Torts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Defenses to Negligence: Negligence is the workhorse of tort practice: duty, breach, causation, and damages must each be proved with evidence that survives motion practice. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Constitutional limits constrain what governments and sometimes private actors may do.","Criminal law uses government prosecution and protections like presumption of innocence.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Constitutional limits constrain what governments and sometimes private actors may do."],
      realWorldRelevance: "Strong grasp of defenses to negligence reduces rework, supports defensible records, and speeds collaboration across Torts Law.",
    }
  ),
  chapter(
    "strict-liability",
    8,
    "Strict Liability",
    [
    section(
      "strict-liability-s1",
      "8.1 Strict Liability — Foundations and vocabulary",
      ["Strict liability removes fault from the equation for abnormally dangerous activities and many defective-product claims—focus shifts to causation and damages. Strict Liability is a foundation in Torts Law because alternative dispute resolution can resolve conflicts faster than full trials. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Federalism splits authority between national and state governments in the U.S. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain strict liability aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat strict liability as a shared model for decisions. Burden of proof and standards of review change outcomes even when facts are similar. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "strict-liability-s2",
      "8.2 Strict Liability — How professionals apply this in practice",
      ["Professionals rarely dispute whether strict liability exists—they dispute how federalism splits authority between national and state governments in the U.S. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Burden of proof and standards of review change outcomes even when facts are similar.","When stakes rise, pause for a second opinion or formal review. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Constitutional limits constrain what governments and sometimes private actors may do. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."]
      }
    ),
    section(
      "strict-liability-s3",
      "8.3 Strict Liability — Workplace scenarios and documentation",
      ["Scenario: a teammate cites strict liability in a meeting, but details in the packet do not match the textbook example. Burden of proof and standards of review change outcomes even when facts are similar. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Good documentation states facts, cites the framework, and records the decision. Constitutional limits constrain what governments and sometimes private actors may do. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."],
        caseStudies: [
          { name: "Rylands v. Fletcher", year: "1868", summary: "Non-natural use of land and escape of harm—early strict liability for abnormally dangerous activities." },
        ]
      }
    ),
    section(
      "strict-liability-s4",
      "8.4 Strict Liability — Common mistakes and how to avoid them",
      ["Common mistakes around strict liability include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Constitutional limits constrain what governments and sometimes private actors may do. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Criminal law uses government prosecution and protections like presumption of innocence. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."]
      }
    ),
    section(
      "strict-liability-s5",
      "8.5 Strict Liability — Putting the chapter together",
      ["This chapter’s through-line is simple: Strict Liability connects principles to accountable action. Constitutional limits constrain what governments and sometimes private actors may do.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits strict liability in your field. Criminal law uses government prosecution and protections like presumption of innocence. Statutes come from legislatures while case law develops through published judicial decisions."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."]
      }
    )
    ],
    {
      learningObjectives: ["Define strict liability and explain why it matters in Torts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Strict Liability: Strict liability removes fault from the equation for abnormally dangerous activities and many defective-product claims—focus shifts to causation and damages. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."],
      realWorldRelevance: "Strong grasp of strict liability reduces rework, supports defensible records, and speeds collaboration across Torts Law.",
    }
  ),
  chapter(
    "products-liability",
    9,
    "Products Liability",
    [
    section(
      "products-liability-s1",
      "9.1 Products Liability — Foundations and vocabulary",
      ["Products Liability is a foundation in Torts Law because federalism splits authority between national and state governments in the U.S.. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Burden of proof and standards of review change outcomes even when facts are similar. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain products liability aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat products liability as a shared model for decisions. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "products-liability-s2",
      "9.2 Products Liability — How professionals apply this in practice",
      ["Professionals rarely dispute whether products liability exists—they dispute how burden of proof and standards of review change outcomes even when facts are similar. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","When stakes rise, pause for a second opinion or formal review. Constitutional limits constrain what governments and sometimes private actors may do. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    ),
    section(
      "products-liability-s3",
      "9.3 Products Liability — Workplace scenarios and documentation",
      ["Scenario: a teammate cites products liability in a meeting, but details in the packet do not match the textbook example. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Constitutional limits constrain what governments and sometimes private actors may do.","Good documentation states facts, cites the framework, and records the decision. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Criminal law uses government prosecution and protections like presumption of innocence. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."],
        caseStudies: [
          { name: "Greenman v. Yuba Power Products, Inc.", year: "1963", summary: "Strict liability in tort for defective products—manufacturers answer for injuries without proving negligence." },
        ]
      }
    ),
    section(
      "products-liability-s4",
      "9.4 Products Liability — Common mistakes and how to avoid them",
      ["Common mistakes around products liability include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Constitutional limits constrain what governments and sometimes private actors may do.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Criminal law uses government prosecution and protections like presumption of innocence. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Statutes come from legislatures while case law develops through published judicial decisions. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    ),
    section(
      "products-liability-s5",
      "9.5 Products Liability — Putting the chapter together",
      ["This chapter’s through-line is simple: Products Liability connects principles to accountable action. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Criminal law uses government prosecution and protections like presumption of innocence. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits products liability in your field. Statutes come from legislatures while case law develops through published judicial decisions. Rules are announced in advance and applied by independent institutions rather than private retaliation."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    )
    ],
    {
      learningObjectives: ["Define products liability and explain why it matters in Torts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Products Liability connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."],
      realWorldRelevance: "Strong grasp of products liability reduces rework, supports defensible records, and speeds collaboration across Torts Law.",
    }
  ),
  chapter(
    "nuisance",
    10,
    "Nuisance and Land Use",
    [
    section(
      "nuisance-s1",
      "10.1 Nuisance and Land Use — Foundations and vocabulary",
      ["Nuisance and Land Use is a foundation in Torts Law because alternative dispute resolution can resolve conflicts faster than full trials. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Federalism splits authority between national and state governments in the U.S. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain nuisance and land use aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat nuisance and land use as a shared model for decisions. Burden of proof and standards of review change outcomes even when facts are similar. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "nuisance-s2",
      "10.2 Nuisance and Land Use — How professionals apply this in practice",
      ["Professionals rarely dispute whether nuisance and land use exists—they dispute how federalism splits authority between national and state governments in the U.S. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Burden of proof and standards of review change outcomes even when facts are similar.","When stakes rise, pause for a second opinion or formal review. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Constitutional limits constrain what governments and sometimes private actors may do. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    ),
    section(
      "nuisance-s3",
      "10.3 Nuisance and Land Use — Workplace scenarios and documentation",
      ["Scenario: a teammate cites nuisance and land use in a meeting, but details in the packet do not match the textbook example. Burden of proof and standards of review change outcomes even when facts are similar. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Good documentation states facts, cites the framework, and records the decision. Constitutional limits constrain what governments and sometimes private actors may do. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."],
        caseStudies: [
          { name: "Boomer v. Atlantic Cement Co.", year: "1970", summary: "Permanent nuisance with injunction vs. damages—courts balance economic harm and pollution control." },
        ]
      }
    ),
    section(
      "nuisance-s4",
      "10.4 Nuisance and Land Use — Common mistakes and how to avoid them",
      ["Common mistakes around nuisance and land use include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Constitutional limits constrain what governments and sometimes private actors may do. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Criminal law uses government prosecution and protections like presumption of innocence. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    ),
    section(
      "nuisance-s5",
      "10.5 Nuisance and Land Use — Putting the chapter together",
      ["This chapter’s through-line is simple: Nuisance and Land Use connects principles to accountable action. Constitutional limits constrain what governments and sometimes private actors may do.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits nuisance and land use in your field. Criminal law uses government prosecution and protections like presumption of innocence. Statutes come from legislatures while case law develops through published judicial decisions."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    )
    ],
    {
      learningObjectives: ["Define nuisance and land use and explain why it matters in Torts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Nuisance and Land Use connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Statutes come from legislatures while case law develops through published judicial decisions.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Statutes come from legislatures while case law develops through published judicial decisions."],
      realWorldRelevance: "Strong grasp of nuisance and land use reduces rework, supports defensible records, and speeds collaboration across Torts Law.",
    }
  ),
  chapter(
    "defamation",
    11,
    "Defamation and Privacy Torts",
    [
    section(
      "defamation-s1",
      "11.1 Defamation and Privacy Torts — Foundations and vocabulary",
      ["Tort law compensates private wrongs—injury to persons or property—through civil lawsuits distinct from criminal prosecution. Goals include deterrence, compensation, and corrective justice. Defamation and Privacy Torts is a foundation in Torts Law because legal research starts with primary sources—constitutions, statutes, regulations, cases. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Alternative dispute resolution can resolve conflicts faster than full trials. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain defamation and privacy torts aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat defamation and privacy torts as a shared model for decisions. Federalism splits authority between national and state governments in the U.S. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "defamation-s2",
      "11.2 Defamation and Privacy Torts — How professionals apply this in practice",
      ["Professionals rarely dispute whether defamation and privacy torts exists—they dispute how torts compensate harm caused by negligence, strict liability, or intentional acts. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","When stakes rise, pause for a second opinion or formal review. Alternative dispute resolution can resolve conflicts faster than full trials. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Federalism splits authority between national and state governments in the U.S. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."]
      }
    ),
    section(
      "defamation-s3",
      "11.3 Defamation and Privacy Torts — Workplace scenarios and documentation",
      ["Scenario: a teammate cites defamation and privacy torts in a meeting, but details in the packet do not match the textbook example. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Torts compensate harm caused by negligence, strict liability, or intentional acts.","Good documentation states facts, cites the framework, and records the decision. Legal research starts with primary sources—constitutions, statutes, regulations, cases. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Alternative dispute resolution can resolve conflicts faster than full trials. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."],
        caseStudies: [
          { name: "New York Times Co. v. Sullivan", year: "1964", summary: "Actual malice standard for public officials—First Amendment reshapes defamation liability." },
        ]
      }
    ),
    section(
      "defamation-s4",
      "11.4 Defamation and Privacy Torts — Common mistakes and how to avoid them",
      ["Common mistakes around defamation and privacy torts include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Rules are announced in advance and applied by independent institutions rather than private retaliation.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Torts compensate harm caused by negligence, strict liability, or intentional acts. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."]
      }
    ),
    section(
      "defamation-s5",
      "11.5 Defamation and Privacy Torts — Putting the chapter together",
      ["This chapter’s through-line is simple: Defamation and Privacy Torts connects principles to accountable action. Statutes come from legislatures while case law develops through published judicial decisions.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Rules are announced in advance and applied by independent institutions rather than private retaliation. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits defamation and privacy torts in your field. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Torts compensate harm caused by negligence, strict liability, or intentional acts."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."]
      }
    )
    ],
    {
      learningObjectives: ["Define defamation and privacy torts and explain why it matters in Torts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Defamation and Privacy Torts: Tort law compensates private wrongs—injury to persons or property—through civil lawsuits distinct from criminal prosecution. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Federalism splits authority between national and state governments in the U.S.","Alternative dispute resolution can resolve conflicts faster than full trials.","Burden of proof and standards of review change outcomes even when facts are similar.","Federalism splits authority between national and state governments in the U.S.","Alternative dispute resolution can resolve conflicts faster than full trials."],
      realWorldRelevance: "Strong grasp of defamation and privacy torts reduces rework, supports defensible records, and speeds collaboration across Torts Law.",
    }
  ),
  chapter(
    "misrepresentation",
    12,
    "Misrepresentation and Economic Torts",
    [
    section(
      "misrepresentation-s1",
      "12.1 Misrepresentation and Economic Torts — Foundations and vocabulary",
      ["Tort law compensates private wrongs—injury to persons or property—through civil lawsuits distinct from criminal prosecution. Goals include deterrence, compensation, and corrective justice. Misrepresentation and Economic Torts is a foundation in Torts Law because torts compensate harm caused by negligence, strict liability, or intentional acts. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Legal research starts with primary sources—constitutions, statutes, regulations, cases. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain misrepresentation and economic torts aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat misrepresentation and economic torts as a shared model for decisions. Alternative dispute resolution can resolve conflicts faster than full trials. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "misrepresentation-s2",
      "12.2 Misrepresentation and Economic Torts — How professionals apply this in practice",
      ["Professionals rarely dispute whether misrepresentation and economic torts exists—they dispute how legal research starts with primary sources—constitutions, statutes, regulations, cases. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Alternative dispute resolution can resolve conflicts faster than full trials.","When stakes rise, pause for a second opinion or formal review. Federalism splits authority between national and state governments in the U.S. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Burden of proof and standards of review change outcomes even when facts are similar. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    ),
    section(
      "misrepresentation-s3",
      "12.3 Misrepresentation and Economic Torts — Workplace scenarios and documentation",
      ["Scenario: a teammate cites misrepresentation and economic torts in a meeting, but details in the packet do not match the textbook example. Alternative dispute resolution can resolve conflicts faster than full trials. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Federalism splits authority between national and state governments in the U.S.","Good documentation states facts, cites the framework, and records the decision. Burden of proof and standards of review change outcomes even when facts are similar. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Contracts allocate risk with offer, acceptance, consideration, and definite terms. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
        caseStudies: [
          { name: "Ultramares Corp. v. Touche", year: "1931", summary: "Auditor liability to third parties limited—fraud and negligent misrepresentation require privity or near relationships." },
        ]
      }
    ),
    section(
      "misrepresentation-s4",
      "12.4 Misrepresentation and Economic Torts — Common mistakes and how to avoid them",
      ["Common mistakes around misrepresentation and economic torts include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Federalism splits authority between national and state governments in the U.S.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Burden of proof and standards of review change outcomes even when facts are similar. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Constitutional limits constrain what governments and sometimes private actors may do. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."]
      }
    ),
    section(
      "misrepresentation-s5",
      "12.5 Misrepresentation and Economic Torts — Putting the chapter together",
      ["This chapter’s through-line is simple: Misrepresentation and Economic Torts connects principles to accountable action. Burden of proof and standards of review change outcomes even when facts are similar.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits misrepresentation and economic torts in your field. Constitutional limits constrain what governments and sometimes private actors may do. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    )
    ],
    {
      learningObjectives: ["Define misrepresentation and economic torts and explain why it matters in Torts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Misrepresentation and Economic Torts: Tort law compensates private wrongs—injury to persons or property—through civil lawsuits distinct from criminal prosecution. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."],
      realWorldRelevance: "Strong grasp of misrepresentation and economic torts reduces rework, supports defensible records, and speeds collaboration across Torts Law.",
    }
  ),
  chapter(
    "vicarious-liability",
    13,
    "Vicarious and Enterprise Liability",
    [
    section(
      "vicarious-liability-s1",
      "13.1 Vicarious and Enterprise Liability — Foundations and vocabulary",
      ["Vicarious and Enterprise Liability is a foundation in Torts Law because constitutional limits constrain what governments and sometimes private actors may do. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain vicarious and enterprise liability aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat vicarious and enterprise liability as a shared model for decisions. Criminal law uses government prosecution and protections like presumption of innocence. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "vicarious-liability-s2",
      "13.2 Vicarious and Enterprise Liability — How professionals apply this in practice",
      ["Professionals rarely dispute whether vicarious and enterprise liability exists—they dispute how ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Criminal law uses government prosecution and protections like presumption of innocence.","When stakes rise, pause for a second opinion or formal review. Statutes come from legislatures while case law develops through published judicial decisions. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Rules are announced in advance and applied by independent institutions rather than private retaliation. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    ),
    section(
      "vicarious-liability-s3",
      "13.3 Vicarious and Enterprise Liability — Workplace scenarios and documentation",
      ["Scenario: a teammate cites vicarious and enterprise liability in a meeting, but details in the packet do not match the textbook example. Criminal law uses government prosecution and protections like presumption of innocence. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Statutes come from legislatures while case law develops through published judicial decisions.","Good documentation states facts, cites the framework, and records the decision. Rules are announced in advance and applied by independent institutions rather than private retaliation. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."],
        caseStudies: [
          { name: "Christensen v. Swenson", year: "1999", summary: "Scope of employment for respondeat superior—frolic vs. detour determines employer liability for employee torts." },
        ]
      }
    ),
    section(
      "vicarious-liability-s4",
      "13.4 Vicarious and Enterprise Liability — Common mistakes and how to avoid them",
      ["Common mistakes around vicarious and enterprise liability include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Statutes come from legislatures while case law develops through published judicial decisions.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Rules are announced in advance and applied by independent institutions rather than private retaliation. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Torts compensate harm caused by negligence, strict liability, or intentional acts. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    ),
    section(
      "vicarious-liability-s5",
      "13.5 Vicarious and Enterprise Liability — Putting the chapter together",
      ["This chapter’s through-line is simple: Vicarious and Enterprise Liability connects principles to accountable action. Rules are announced in advance and applied by independent institutions rather than private retaliation.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits vicarious and enterprise liability in your field. Torts compensate harm caused by negligence, strict liability, or intentional acts. Legal research starts with primary sources—constitutions, statutes, regulations, cases."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    )
    ],
    {
      learningObjectives: ["Define vicarious and enterprise liability and explain why it matters in Torts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Vicarious and Enterprise Liability connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
      realWorldRelevance: "Strong grasp of vicarious and enterprise liability reduces rework, supports defensible records, and speeds collaboration across Torts Law.",
    }
  ),
  chapter(
    "joint-tortfeasors",
    14,
    "Joint and Several Liability",
    [
    section(
      "joint-tortfeasors-s1",
      "14.1 Joint and Several Liability — Foundations and vocabulary",
      ["Joint and Several Liability is a foundation in Torts Law because alternative dispute resolution can resolve conflicts faster than full trials. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Federalism splits authority between national and state governments in the U.S. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain joint and several liability aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat joint and several liability as a shared model for decisions. Burden of proof and standards of review change outcomes even when facts are similar. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "joint-tortfeasors-s2",
      "14.2 Joint and Several Liability — How professionals apply this in practice",
      ["Professionals rarely dispute whether joint and several liability exists—they dispute how legal research starts with primary sources—constitutions, statutes, regulations, cases. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Alternative dispute resolution can resolve conflicts faster than full trials.","When stakes rise, pause for a second opinion or formal review. Federalism splits authority between national and state governments in the U.S. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Burden of proof and standards of review change outcomes even when facts are similar. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."]
      }
    ),
    section(
      "joint-tortfeasors-s3",
      "14.3 Joint and Several Liability — Workplace scenarios and documentation",
      ["Scenario: a teammate cites joint and several liability in a meeting, but details in the packet do not match the textbook example. Torts compensate harm caused by negligence, strict liability, or intentional acts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Good documentation states facts, cites the framework, and records the decision. Alternative dispute resolution can resolve conflicts faster than full trials. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Federalism splits authority between national and state governments in the U.S. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."],
        caseStudies: [
          { name: "Dunkin v. Boskey", year: "2000", summary: "Joint and several liability reforms vary by state—how multiple defendants share judgment collection." },
        ]
      }
    ),
    section(
      "joint-tortfeasors-s4",
      "14.4 Joint and Several Liability — Common mistakes and how to avoid them",
      ["Common mistakes around joint and several liability include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Torts compensate harm caused by negligence, strict liability, or intentional acts. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Alternative dispute resolution can resolve conflicts faster than full trials. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."]
      }
    ),
    section(
      "joint-tortfeasors-s5",
      "14.5 Joint and Several Liability — Putting the chapter together",
      ["This chapter’s through-line is simple: Joint and Several Liability connects principles to accountable action. Rules are announced in advance and applied by independent institutions rather than private retaliation.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits joint and several liability in your field. Torts compensate harm caused by negligence, strict liability, or intentional acts. Legal research starts with primary sources—constitutions, statutes, regulations, cases."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."]
      }
    )
    ],
    {
      learningObjectives: ["Define joint and several liability and explain why it matters in Torts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Joint and Several Liability connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Federalism splits authority between national and state governments in the U.S.","Alternative dispute resolution can resolve conflicts faster than full trials.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."],
      realWorldRelevance: "Strong grasp of joint and several liability reduces rework, supports defensible records, and speeds collaboration across Torts Law.",
    }
  ),
  chapter(
    "immunities",
    15,
    "Immunities and Government Liability",
    [
    section(
      "immunities-s1",
      "15.1 Immunities and Government Liability — Foundations and vocabulary",
      ["Immunities and Government Liability is a foundation in Torts Law because constitutional limits constrain what governments and sometimes private actors may do. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Criminal law uses government prosecution and protections like presumption of innocence. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain immunities and government liability aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat immunities and government liability as a shared model for decisions. Torts compensate harm caused by negligence, strict liability, or intentional acts. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Statutes come from legislatures while case law develops through published judicial decisions."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "immunities-s2",
      "15.2 Immunities and Government Liability — How professionals apply this in practice",
      ["Professionals rarely dispute whether immunities and government liability exists—they dispute how federalism splits authority between national and state governments in the U.S. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Constitutional limits constrain what governments and sometimes private actors may do.","When stakes rise, pause for a second opinion or formal review. Criminal law uses government prosecution and protections like presumption of innocence. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Torts compensate harm caused by negligence, strict liability, or intentional acts. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."]
      }
    ),
    section(
      "immunities-s3",
      "15.3 Immunities and Government Liability — Workplace scenarios and documentation",
      ["Scenario: a teammate cites immunities and government liability in a meeting, but details in the packet do not match the textbook example. Torts compensate harm caused by negligence, strict liability, or intentional acts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Federalism splits authority between national and state governments in the U.S.","Good documentation states facts, cites the framework, and records the decision. Constitutional limits constrain what governments and sometimes private actors may do. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Criminal law uses government prosecution and protections like presumption of innocence. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."],
        caseStudies: [
          { name: "Pierson v. Post", year: "1805", summary: "Wild-animal capture dispute—illustrates how property-based rules intersect recreational injury immunities." },
        ]
      }
    ),
    section(
      "immunities-s4",
      "15.4 Immunities and Government Liability — Common mistakes and how to avoid them",
      ["Common mistakes around immunities and government liability include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Criminal law uses government prosecution and protections like presumption of innocence.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Torts compensate harm caused by negligence, strict liability, or intentional acts. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Federalism splits authority between national and state governments in the U.S. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Constitutional limits constrain what governments and sometimes private actors may do. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Statutes come from legislatures while case law develops through published judicial decisions."]
      }
    ),
    section(
      "immunities-s5",
      "15.5 Immunities and Government Liability — Putting the chapter together",
      ["This chapter’s through-line is simple: Immunities and Government Liability connects principles to accountable action. Constitutional limits constrain what governments and sometimes private actors may do.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Criminal law uses government prosecution and protections like presumption of innocence. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits immunities and government liability in your field. Torts compensate harm caused by negligence, strict liability, or intentional acts. Federalism splits authority between national and state governments in the U.S."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."]
      }
    )
    ],
    {
      learningObjectives: ["Define immunities and government liability and explain why it matters in Torts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Immunities and Government Liability connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Burden of proof and standards of review change outcomes even when facts are similar.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Burden of proof and standards of review change outcomes even when facts are similar."],
      realWorldRelevance: "Strong grasp of immunities and government liability reduces rework, supports defensible records, and speeds collaboration across Torts Law.",
    }
  ),
  chapter(
    "workers-comp",
    16,
    "Workers' Compensation Overview",
    [
    section(
      "workers-comp-s1",
      "16.1 Workers' Compensation Overview — Foundations and vocabulary",
      ["Workers' Compensation Overview is a foundation in Torts Law because constitutional limits constrain what governments and sometimes private actors may do. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain workers' compensation overview aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat workers' compensation overview as a shared model for decisions. Criminal law uses government prosecution and protections like presumption of innocence. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "workers-comp-s2",
      "16.2 Workers' Compensation Overview — How professionals apply this in practice",
      ["Professionals rarely dispute whether workers' compensation overview exists—they dispute how contracts allocate risk with offer, acceptance, consideration, and definite terms. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Constitutional limits constrain what governments and sometimes private actors may do.","When stakes rise, pause for a second opinion or formal review. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Criminal law uses government prosecution and protections like presumption of innocence. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."]
      }
    ),
    section(
      "workers-comp-s3",
      "16.3 Workers' Compensation Overview — Workplace scenarios and documentation",
      ["Scenario: a teammate cites workers' compensation overview in a meeting, but details in the packet do not match the textbook example. Burden of proof and standards of review change outcomes even when facts are similar. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Good documentation states facts, cites the framework, and records the decision. Constitutional limits constrain what governments and sometimes private actors may do. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."],
        caseStudies: [
          { name: "Larson's Workers' Compensation Law (treatise)", year: "—", summary: "Exclusive remedy system trades tort suits for no-fault benefits—statutory scheme replaces negligence litigation for workplace injuries." },
        ]
      }
    ),
    section(
      "workers-comp-s4",
      "16.4 Workers' Compensation Overview — Common mistakes and how to avoid them",
      ["Common mistakes around workers' compensation overview include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Federalism splits authority between national and state governments in the U.S.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Burden of proof and standards of review change outcomes even when facts are similar. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Constitutional limits constrain what governments and sometimes private actors may do. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."]
      }
    ),
    section(
      "workers-comp-s5",
      "16.5 Workers' Compensation Overview — Putting the chapter together",
      ["This chapter’s through-line is simple: Workers' Compensation Overview connects principles to accountable action. Alternative dispute resolution can resolve conflicts faster than full trials.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Federalism splits authority between national and state governments in the U.S. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits workers' compensation overview in your field. Burden of proof and standards of review change outcomes even when facts are similar. Contracts allocate risk with offer, acceptance, consideration, and definite terms."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."]
      }
    )
    ],
    {
      learningObjectives: ["Define workers' compensation overview and explain why it matters in Torts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Workers' Compensation Overview connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Burden of proof and standards of review change outcomes even when facts are similar.","Federalism splits authority between national and state governments in the U.S.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Burden of proof and standards of review change outcomes even when facts are similar.","Federalism splits authority between national and state governments in the U.S."],
      realWorldRelevance: "Strong grasp of workers' compensation overview reduces rework, supports defensible records, and speeds collaboration across Torts Law.",
    }
  ),
  chapter(
    "medical-malpractice",
    17,
    "Medical Malpractice",
    [
    section(
      "medical-malpractice-s1",
      "17.1 Medical Malpractice — Foundations and vocabulary",
      ["Medical Malpractice is a foundation in Torts Law because statutes come from legislatures while case law develops through published judicial decisions. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Rules are announced in advance and applied by independent institutions rather than private retaliation. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain medical malpractice aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat medical malpractice as a shared model for decisions. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "medical-malpractice-s2",
      "17.2 Medical Malpractice — How professionals apply this in practice",
      ["Professionals rarely dispute whether medical malpractice exists—they dispute how criminal law uses government prosecution and protections like presumption of innocence. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Statutes come from legislatures while case law develops through published judicial decisions.","When stakes rise, pause for a second opinion or formal review. Rules are announced in advance and applied by independent institutions rather than private retaliation. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."]
      }
    ),
    section(
      "medical-malpractice-s3",
      "17.3 Medical Malpractice — Workplace scenarios and documentation",
      ["Scenario: a teammate cites medical malpractice in a meeting, but details in the packet do not match the textbook example. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Criminal law uses government prosecution and protections like presumption of innocence.","Good documentation states facts, cites the framework, and records the decision. Statutes come from legislatures while case law develops through published judicial decisions. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Rules are announced in advance and applied by independent institutions rather than private retaliation. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."],
        caseStudies: [
          { name: "Helling v. Carey", year: "1974", summary: "Custom is not the ceiling of care—reasonable prudence may require inexpensive tests even if specialty practice lagged." },
        ]
      }
    ),
    section(
      "medical-malpractice-s4",
      "17.4 Medical Malpractice — Common mistakes and how to avoid them",
      ["Common mistakes around medical malpractice include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Constitutional limits constrain what governments and sometimes private actors may do.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Criminal law uses government prosecution and protections like presumption of innocence. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Statutes come from legislatures while case law develops through published judicial decisions. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    ),
    section(
      "medical-malpractice-s5",
      "17.5 Medical Malpractice — Putting the chapter together",
      ["This chapter’s through-line is simple: Medical Malpractice connects principles to accountable action. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Constitutional limits constrain what governments and sometimes private actors may do. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits medical malpractice in your field. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Criminal law uses government prosecution and protections like presumption of innocence."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."]
      }
    )
    ],
    {
      learningObjectives: ["Define medical malpractice and explain why it matters in Torts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Medical Malpractice connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Statutes come from legislatures while case law develops through published judicial decisions.","Criminal law uses government prosecution and protections like presumption of innocence.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Statutes come from legislatures while case law develops through published judicial decisions.","Criminal law uses government prosecution and protections like presumption of innocence."],
      realWorldRelevance: "Strong grasp of medical malpractice reduces rework, supports defensible records, and speeds collaboration across Torts Law.",
    }
  ),
  chapter(
    "mass-torts",
    18,
    "Mass Torts and Class Actions",
    [
    section(
      "mass-torts-s1",
      "18.1 Mass Torts and Class Actions — Foundations and vocabulary",
      ["Tort law compensates private wrongs—injury to persons or property—through civil lawsuits distinct from criminal prosecution. Goals include deterrence, compensation, and corrective justice. Mass Torts and Class Actions is a foundation in Torts Law because constitutional limits constrain what governments and sometimes private actors may do. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain mass torts and class actions aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat mass torts and class actions as a shared model for decisions. Criminal law uses government prosecution and protections like presumption of innocence. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "mass-torts-s2",
      "18.2 Mass Torts and Class Actions — How professionals apply this in practice",
      ["Professionals rarely dispute whether mass torts and class actions exists—they dispute how contracts allocate risk with offer, acceptance, consideration, and definite terms. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Constitutional limits constrain what governments and sometimes private actors may do.","When stakes rise, pause for a second opinion or formal review. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Criminal law uses government prosecution and protections like presumption of innocence. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."]
      }
    ),
    section(
      "mass-torts-s3",
      "18.3 Mass Torts and Class Actions — Workplace scenarios and documentation",
      ["Scenario: a teammate cites mass torts and class actions in a meeting, but details in the packet do not match the textbook example. Burden of proof and standards of review change outcomes even when facts are similar. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Good documentation states facts, cites the framework, and records the decision. Constitutional limits constrain what governments and sometimes private actors may do. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
        caseStudies: [
          { name: "In re Agent Orange Product Liability Litigation", year: "1984", summary: "Class actions and MDL consolidate mass tort claims—settlement and science battles scale tort law." },
        ]
      }
    ),
    section(
      "mass-torts-s4",
      "18.4 Mass Torts and Class Actions — Common mistakes and how to avoid them",
      ["Common mistakes around mass torts and class actions include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Federalism splits authority between national and state governments in the U.S.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Burden of proof and standards of review change outcomes even when facts are similar. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Constitutional limits constrain what governments and sometimes private actors may do. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."]
      }
    ),
    section(
      "mass-torts-s5",
      "18.5 Mass Torts and Class Actions — Putting the chapter together",
      ["This chapter’s through-line is simple: Mass Torts and Class Actions connects principles to accountable action. Alternative dispute resolution can resolve conflicts faster than full trials.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Federalism splits authority between national and state governments in the U.S. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits mass torts and class actions in your field. Burden of proof and standards of review change outcomes even when facts are similar. Contracts allocate risk with offer, acceptance, consideration, and definite terms."], {
        bulletPoints: ["Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."]
      }
    )
    ],
    {
      learningObjectives: ["Define mass torts and class actions and explain why it matters in Torts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Mass Torts and Class Actions: Tort law compensates private wrongs—injury to persons or property—through civil lawsuits distinct from criminal prosecution. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Constitutional limits constrain what governments and sometimes private actors may do.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Constitutional limits constrain what governments and sometimes private actors may do.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."],
      realWorldRelevance: "Strong grasp of mass torts and class actions reduces rework, supports defensible records, and speeds collaboration across Torts Law.",
    }
  ),
  chapter(
    "insurance-torts",
    19,
    "Insurance and Tort Claims",
    [
    section(
      "insurance-torts-s1",
      "19.1 Insurance and Tort Claims — Foundations and vocabulary",
      ["Tort law compensates private wrongs—injury to persons or property—through civil lawsuits distinct from criminal prosecution. Goals include deterrence, compensation, and corrective justice. Insurance and Tort Claims is a foundation in Torts Law because legal research starts with primary sources—constitutions, statutes, regulations, cases. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Alternative dispute resolution can resolve conflicts faster than full trials. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain insurance and tort claims aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat insurance and tort claims as a shared model for decisions. Federalism splits authority between national and state governments in the U.S. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "insurance-torts-s2",
      "19.2 Insurance and Tort Claims — How professionals apply this in practice",
      ["Professionals rarely dispute whether insurance and tort claims exists—they dispute how alternative dispute resolution can resolve conflicts faster than full trials. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Federalism splits authority between national and state governments in the U.S.","When stakes rise, pause for a second opinion or formal review. Burden of proof and standards of review change outcomes even when facts are similar. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Contracts allocate risk with offer, acceptance, consideration, and definite terms. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."]
      }
    ),
    section(
      "insurance-torts-s3",
      "19.3 Insurance and Tort Claims — Workplace scenarios and documentation",
      ["Scenario: a teammate cites insurance and tort claims in a meeting, but details in the packet do not match the textbook example. Federalism splits authority between national and state governments in the U.S. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Burden of proof and standards of review change outcomes even when facts are similar.","Good documentation states facts, cites the framework, and records the decision. Contracts allocate risk with offer, acceptance, consideration, and definite terms. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Constitutional limits constrain what governments and sometimes private actors may do. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."],
        caseStudies: [
          { name: "Crisci v. Security Insurance Co.", year: "1967", summary: "Bad-faith failure to settle within policy limits—insurers owe duties that shape tort litigation strategy." },
        ]
      }
    ),
    section(
      "insurance-torts-s4",
      "19.4 Insurance and Tort Claims — Common mistakes and how to avoid them",
      ["Common mistakes around insurance and tort claims include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Burden of proof and standards of review change outcomes even when facts are similar.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Constitutional limits constrain what governments and sometimes private actors may do. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."]
      }
    ),
    section(
      "insurance-torts-s5",
      "19.5 Insurance and Tort Claims — Putting the chapter together",
      ["This chapter’s through-line is simple: Insurance and Tort Claims connects principles to accountable action. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Constitutional limits constrain what governments and sometimes private actors may do. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits insurance and tort claims in your field. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Criminal law uses government prosecution and protections like presumption of innocence."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."]
      }
    )
    ],
    {
      learningObjectives: ["Define insurance and tort claims and explain why it matters in Torts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Insurance and Tort Claims: Tort law compensates private wrongs—injury to persons or property—through civil lawsuits distinct from criminal prosecution. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."],
      realWorldRelevance: "Strong grasp of insurance and tort claims reduces rework, supports defensible records, and speeds collaboration across Torts Law.",
    }
  ),
  chapter(
    "tort-reform",
    20,
    "Tort Reform and Policy Debates",
    [
    section(
      "tort-reform-s1",
      "20.1 Tort Reform and Policy Debates — Foundations and vocabulary",
      ["Tort law compensates private wrongs—injury to persons or property—through civil lawsuits distinct from criminal prosecution. Goals include deterrence, compensation, and corrective justice. Tort Reform and Policy Debates is a foundation in Torts Law because civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Torts compensate harm caused by negligence, strict liability, or intentional acts. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain tort reform and policy debates aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat tort reform and policy debates as a shared model for decisions. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "tort-reform-s2",
      "20.2 Tort Reform and Policy Debates — How professionals apply this in practice",
      ["Professionals rarely dispute whether tort reform and policy debates exists—they dispute how rules are announced in advance and applied by independent institutions rather than private retaliation. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","When stakes rise, pause for a second opinion or formal review. Torts compensate harm caused by negligence, strict liability, or intentional acts. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Legal research starts with primary sources—constitutions, statutes, regulations, cases. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."]
      }
    ),
    section(
      "tort-reform-s3",
      "20.3 Tort Reform and Policy Debates — Workplace scenarios and documentation",
      ["Scenario: a teammate cites tort reform and policy debates in a meeting, but details in the packet do not match the textbook example. Statutes come from legislatures while case law develops through published judicial decisions. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Rules are announced in advance and applied by independent institutions rather than private retaliation.","Good documentation states facts, cites the framework, and records the decision. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Torts compensate harm caused by negligence, strict liability, or intentional acts. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."],
        caseStudies: [
          { name: "Liebeck v. McDonald's Restaurants", year: "1994", summary: "Caps and punitive-damages debates often cite this case—reformers argue juries need statutory limits; critics cite access to justice." },
        ]
      }
    ),
    section(
      "tort-reform-s4",
      "20.4 Tort Reform and Policy Debates — Common mistakes and how to avoid them",
      ["Common mistakes around tort reform and policy debates include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Criminal law uses government prosecution and protections like presumption of innocence.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Statutes come from legislatures while case law develops through published judicial decisions. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Rules are announced in advance and applied by independent institutions rather than private retaliation. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    ),
    section(
      "tort-reform-s5",
      "20.5 Tort Reform and Policy Debates — Putting the chapter together",
      ["This chapter’s through-line is simple: Tort Reform and Policy Debates connects principles to accountable action. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Criminal law uses government prosecution and protections like presumption of innocence. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits tort reform and policy debates in your field. Statutes come from legislatures while case law develops through published judicial decisions. Rules are announced in advance and applied by independent institutions rather than private retaliation."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."]
      }
    )
    ],
    {
      learningObjectives: ["Define tort reform and policy debates and explain why it matters in Torts Law","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Tort Reform and Policy Debates: Tort law compensates private wrongs—injury to persons or property—through civil lawsuits distinct from criminal prosecution. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Statutes come from legislatures while case law develops through published judicial decisions.","Criminal law uses government prosecution and protections like presumption of innocence.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Statutes come from legislatures while case law develops through published judicial decisions.","Criminal law uses government prosecution and protections like presumption of innocence."],
      realWorldRelevance: "Strong grasp of tort reform and policy debates reduces rework, supports defensible records, and speeds collaboration across Torts Law.",
    }
  )
];
