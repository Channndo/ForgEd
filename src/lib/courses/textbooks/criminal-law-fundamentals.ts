import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const CRIM_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Criminal Law Fundamentals",
  subtitle: "ForgEd deep-dive — criminal law fundamentals",
  paragraphs: [
    "This ForgEd digital textbook presents Criminal Law Fundamentals at academic survey depth — cited frameworks, rigorous prose, and chapter learning objectives. 20 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Material is general legal education, not legal advice. Consult a licensed attorney for specific matters.",
  ],
};

export const CRIM_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "crime-elements",
    1,
    "Elements of a Crime",
    [
    section(
      "crime-elements-s1",
      "1.1 Elements of a Crime — Foundations and vocabulary",
      ["Elements of a Crime is a foundation in Criminal Law Fundamentals because rules are announced in advance and applied by independent institutions rather than private retaliation. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain elements of a crime aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat elements of a crime as a shared model for decisions. Torts compensate harm caused by negligence, strict liability, or intentional acts. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "crime-elements-s2",
      "1.2 Elements of a Crime — How professionals apply this in practice",
      ["Professionals rarely dispute whether elements of a crime exists—they dispute how civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Torts compensate harm caused by negligence, strict liability, or intentional acts.","When stakes rise, pause for a second opinion or formal review. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Alternative dispute resolution can resolve conflicts faster than full trials. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."]
      }
    ),
    section(
      "crime-elements-s3",
      "1.3 Elements of a Crime — Workplace scenarios and documentation",
      ["Scenario: a teammate cites elements of a crime in a meeting, but details in the packet do not match the textbook example. Torts compensate harm caused by negligence, strict liability, or intentional acts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Good documentation states facts, cites the framework, and records the decision. Alternative dispute resolution can resolve conflicts faster than full trials. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Federalism splits authority between national and state governments in the U.S. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."],
        caseStudies: [
          { name: "In re Winship", year: "1970", summary: "Proof beyond a reasonable doubt required for criminal convictions—defines the government's burden on each element." },
        ]
      }
    ),
    section(
      "crime-elements-s4",
      "1.4 Elements of a Crime — Common mistakes and how to avoid them",
      ["Common mistakes around elements of a crime include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Alternative dispute resolution can resolve conflicts faster than full trials. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Federalism splits authority between national and state governments in the U.S. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Burden of proof and standards of review change outcomes even when facts are similar. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."]
      }
    ),
    section(
      "crime-elements-s5",
      "1.5 Elements of a Crime — Putting the chapter together",
      ["This chapter’s through-line is simple: Elements of a Crime connects principles to accountable action. Alternative dispute resolution can resolve conflicts faster than full trials.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Federalism splits authority between national and state governments in the U.S. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits elements of a crime in your field. Burden of proof and standards of review change outcomes even when facts are similar. Contracts allocate risk with offer, acceptance, consideration, and definite terms."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."]
      }
    )
    ],
    {
      learningObjectives: ["Define elements of a crime and explain why it matters in Criminal Law Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Elements of a Crime connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."],
      realWorldRelevance: "Strong grasp of elements of a crime reduces rework, supports defensible records, and speeds collaboration across Criminal Law Fundamentals.",
    }
  ),
  chapter(
    "mens-rea",
    2,
    "Mens Rea and Actus Reus",
    [
    section(
      "mens-rea-s1",
      "2.1 Mens Rea and Actus Reus — Foundations and vocabulary",
      ["Mens Rea and Actus Reus is a foundation in Criminal Law Fundamentals because burden of proof and standards of review change outcomes even when facts are similar. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Contracts allocate risk with offer, acceptance, consideration, and definite terms. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain mens rea and actus reus aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat mens rea and actus reus as a shared model for decisions. Constitutional limits constrain what governments and sometimes private actors may do. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "mens-rea-s2",
      "2.2 Mens Rea and Actus Reus — How professionals apply this in practice",
      ["Professionals rarely dispute whether mens rea and actus reus exists—they dispute how federalism splits authority between national and state governments in the U.S. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Burden of proof and standards of review change outcomes even when facts are similar.","When stakes rise, pause for a second opinion or formal review. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Constitutional limits constrain what governments and sometimes private actors may do. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    ),
    section(
      "mens-rea-s3",
      "2.3 Mens Rea and Actus Reus — Workplace scenarios and documentation",
      ["Scenario: a teammate cites mens rea and actus reus in a meeting, but details in the packet do not match the textbook example. Alternative dispute resolution can resolve conflicts faster than full trials. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Federalism splits authority between national and state governments in the U.S.","Good documentation states facts, cites the framework, and records the decision. Burden of proof and standards of review change outcomes even when facts are similar. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Contracts allocate risk with offer, acceptance, consideration, and definite terms. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."],
        caseStudies: [
          { name: "Morissette v. United States", year: "1952", summary: "Mens rea is presumed in federal crimes unless Congress clearly eliminates it—intent matters for punishment." },
        ]
      }
    ),
    section(
      "mens-rea-s4",
      "2.4 Mens Rea and Actus Reus — Common mistakes and how to avoid them",
      ["Common mistakes around mens rea and actus reus include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Alternative dispute resolution can resolve conflicts faster than full trials. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Federalism splits authority between national and state governments in the U.S. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Burden of proof and standards of review change outcomes even when facts are similar. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    ),
    section(
      "mens-rea-s5",
      "2.5 Mens Rea and Actus Reus — Putting the chapter together",
      ["This chapter’s through-line is simple: Mens Rea and Actus Reus connects principles to accountable action. Torts compensate harm caused by negligence, strict liability, or intentional acts.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits mens rea and actus reus in your field. Alternative dispute resolution can resolve conflicts faster than full trials. Federalism splits authority between national and state governments in the U.S."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    )
    ],
    {
      learningObjectives: ["Define mens rea and actus reus and explain why it matters in Criminal Law Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Mens Rea and Actus Reus connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Statutes come from legislatures while case law develops through published judicial decisions.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Statutes come from legislatures while case law develops through published judicial decisions."],
      realWorldRelevance: "Strong grasp of mens rea and actus reus reduces rework, supports defensible records, and speeds collaboration across Criminal Law Fundamentals.",
    }
  ),
  chapter(
    "homicide",
    3,
    "Homicide Offenses",
    [
    section(
      "homicide-s1",
      "3.1 Homicide Offenses — Foundations and vocabulary",
      ["Homicide Offenses is a foundation in Criminal Law Fundamentals because rules are announced in advance and applied by independent institutions rather than private retaliation. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain homicide offenses aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat homicide offenses as a shared model for decisions. Torts compensate harm caused by negligence, strict liability, or intentional acts. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "homicide-s2",
      "3.2 Homicide Offenses — How professionals apply this in practice",
      ["Professionals rarely dispute whether homicide offenses exists—they dispute how civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Torts compensate harm caused by negligence, strict liability, or intentional acts.","When stakes rise, pause for a second opinion or formal review. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Alternative dispute resolution can resolve conflicts faster than full trials. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    ),
    section(
      "homicide-s3",
      "3.3 Homicide Offenses — Workplace scenarios and documentation",
      ["Scenario: a teammate cites homicide offenses in a meeting, but details in the packet do not match the textbook example. Torts compensate harm caused by negligence, strict liability, or intentional acts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Good documentation states facts, cites the framework, and records the decision. Alternative dispute resolution can resolve conflicts faster than full trials. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Federalism splits authority between national and state governments in the U.S. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."],
        caseStudies: [
          { name: "People v. Goetz", year: "1986", summary: "Self-defense and subjective belief in imminent harm—homicide grading turns on reasonableness and provocation." },
        ]
      }
    ),
    section(
      "homicide-s4",
      "3.4 Homicide Offenses — Common mistakes and how to avoid them",
      ["Common mistakes around homicide offenses include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Alternative dispute resolution can resolve conflicts faster than full trials. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Federalism splits authority between national and state governments in the U.S. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Burden of proof and standards of review change outcomes even when facts are similar. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    ),
    section(
      "homicide-s5",
      "3.5 Homicide Offenses — Putting the chapter together",
      ["This chapter’s through-line is simple: Homicide Offenses connects principles to accountable action. Alternative dispute resolution can resolve conflicts faster than full trials.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Federalism splits authority between national and state governments in the U.S. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits homicide offenses in your field. Burden of proof and standards of review change outcomes even when facts are similar. Contracts allocate risk with offer, acceptance, consideration, and definite terms."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    )
    ],
    {
      learningObjectives: ["Define homicide offenses and explain why it matters in Criminal Law Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Homicide Offenses connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Statutes come from legislatures while case law develops through published judicial decisions.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Statutes come from legislatures while case law develops through published judicial decisions."],
      realWorldRelevance: "Strong grasp of homicide offenses reduces rework, supports defensible records, and speeds collaboration across Criminal Law Fundamentals.",
    }
  ),
  chapter(
    "assault-battery",
    4,
    "Assault, Battery, and Violent Crimes",
    [
    section(
      "assault-battery-s1",
      "4.1 Assault, Battery, and Violent Crimes — Foundations and vocabulary",
      ["Assault, Battery, and Violent Crimes is a foundation in Criminal Law Fundamentals because torts compensate harm caused by negligence, strict liability, or intentional acts. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Legal research starts with primary sources—constitutions, statutes, regulations, cases. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain assault, battery, and violent crimes aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat assault, battery, and violent crimes as a shared model for decisions. Alternative dispute resolution can resolve conflicts faster than full trials. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "assault-battery-s2",
      "4.2 Assault, Battery, and Violent Crimes — How professionals apply this in practice",
      ["Professionals rarely dispute whether assault, battery, and violent crimes exists—they dispute how civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Torts compensate harm caused by negligence, strict liability, or intentional acts.","When stakes rise, pause for a second opinion or formal review. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Alternative dispute resolution can resolve conflicts faster than full trials. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."]
      }
    ),
    section(
      "assault-battery-s3",
      "4.3 Assault, Battery, and Violent Crimes — Workplace scenarios and documentation",
      ["Scenario: a teammate cites assault, battery, and violent crimes in a meeting, but details in the packet do not match the textbook example. Rules are announced in advance and applied by independent institutions rather than private retaliation. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Good documentation states facts, cites the framework, and records the decision. Torts compensate harm caused by negligence, strict liability, or intentional acts. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Legal research starts with primary sources—constitutions, statutes, regulations, cases. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."],
        caseStudies: [
          { name: "People v. Humphrey", year: "1996", summary: "Battered-spouse context in homicide—shows how assault history informs defense and charging decisions." },
        ]
      }
    ),
    section(
      "assault-battery-s4",
      "4.4 Assault, Battery, and Violent Crimes — Common mistakes and how to avoid them",
      ["Common mistakes around assault, battery, and violent crimes include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Statutes come from legislatures while case law develops through published judicial decisions.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Rules are announced in advance and applied by independent institutions rather than private retaliation. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Torts compensate harm caused by negligence, strict liability, or intentional acts. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."]
      }
    ),
    section(
      "assault-battery-s5",
      "4.5 Assault, Battery, and Violent Crimes — Putting the chapter together",
      ["This chapter’s through-line is simple: Assault, Battery, and Violent Crimes connects principles to accountable action. Criminal law uses government prosecution and protections like presumption of innocence.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Statutes come from legislatures while case law develops through published judicial decisions. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits assault, battery, and violent crimes in your field. Rules are announced in advance and applied by independent institutions rather than private retaliation. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."]
      }
    )
    ],
    {
      learningObjectives: ["Define assault, battery, and violent crimes and explain why it matters in Criminal Law Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Assault, Battery, and Violent Crimes connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."],
      realWorldRelevance: "Strong grasp of assault, battery, and violent crimes reduces rework, supports defensible records, and speeds collaboration across Criminal Law Fundamentals.",
    }
  ),
  chapter(
    "property-crimes",
    5,
    "Property and Theft Crimes",
    [
    section(
      "property-crimes-s1",
      "5.1 Property and Theft Crimes — Foundations and vocabulary",
      ["Property law defines bundles of rights in land and chattels—possession, use, exclusion, and transfer—with recording systems that protect buyers. Property and Theft Crimes is a foundation in Criminal Law Fundamentals because ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Criminal law uses government prosecution and protections like presumption of innocence. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain property and theft crimes aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat property and theft crimes as a shared model for decisions. Statutes come from legislatures while case law develops through published judicial decisions. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "property-crimes-s2",
      "5.2 Property and Theft Crimes — How professionals apply this in practice",
      ["Professionals rarely dispute whether property and theft crimes exists—they dispute how constitutional limits constrain what governments and sometimes private actors may do. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","When stakes rise, pause for a second opinion or formal review. Criminal law uses government prosecution and protections like presumption of innocence. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Statutes come from legislatures while case law develops through published judicial decisions. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."]
      }
    ),
    section(
      "property-crimes-s3",
      "5.3 Property and Theft Crimes — Workplace scenarios and documentation",
      ["Scenario: a teammate cites property and theft crimes in a meeting, but details in the packet do not match the textbook example. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Constitutional limits constrain what governments and sometimes private actors may do.","Good documentation states facts, cites the framework, and records the decision. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Criminal law uses government prosecution and protections like presumption of innocence. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."],
        caseStudies: [
          { name: "Larceny by trick vs. embezzlement (classic)", year: "—", summary: "Taking vs. lawful possession later converted—property crime labels depend on initial authorization." },
        ]
      }
    ),
    section(
      "property-crimes-s4",
      "5.4 Property and Theft Crimes — Common mistakes and how to avoid them",
      ["Common mistakes around property and theft crimes include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Burden of proof and standards of review change outcomes even when facts are similar.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Constitutional limits constrain what governments and sometimes private actors may do. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."]
      }
    ),
    section(
      "property-crimes-s5",
      "5.5 Property and Theft Crimes — Putting the chapter together",
      ["This chapter’s through-line is simple: Property and Theft Crimes connects principles to accountable action. Federalism splits authority between national and state governments in the U.S.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Burden of proof and standards of review change outcomes even when facts are similar. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits property and theft crimes in your field. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Constitutional limits constrain what governments and sometimes private actors may do."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."]
      }
    )
    ],
    {
      learningObjectives: ["Define property and theft crimes and explain why it matters in Criminal Law Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Property and Theft Crimes: Property law defines bundles of rights in land and chattels—possession, use, exclusion, and transfer—with recording systems that protect buyers. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Constitutional limits constrain what governments and sometimes private actors may do.","Criminal law uses government prosecution and protections like presumption of innocence.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Constitutional limits constrain what governments and sometimes private actors may do."],
      realWorldRelevance: "Strong grasp of property and theft crimes reduces rework, supports defensible records, and speeds collaboration across Criminal Law Fundamentals.",
    }
  ),
  chapter(
    "inchoate-crimes",
    6,
    "Inchoate Crimes: Attempt and Conspiracy",
    [
    section(
      "inchoate-crimes-s1",
      "6.1 Inchoate Crimes: Attempt and Conspiracy — Foundations and vocabulary",
      ["Inchoate Crimes: Attempt and Conspiracy is a foundation in Criminal Law Fundamentals because burden of proof and standards of review change outcomes even when facts are similar. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Contracts allocate risk with offer, acceptance, consideration, and definite terms. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain inchoate crimes: attempt and conspiracy aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat inchoate crimes: attempt and conspiracy as a shared model for decisions. Constitutional limits constrain what governments and sometimes private actors may do. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "inchoate-crimes-s2",
      "6.2 Inchoate Crimes: Attempt and Conspiracy — How professionals apply this in practice",
      ["Professionals rarely dispute whether inchoate crimes: attempt and conspiracy exists—they dispute how contracts allocate risk with offer, acceptance, consideration, and definite terms. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Constitutional limits constrain what governments and sometimes private actors may do.","When stakes rise, pause for a second opinion or formal review. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Criminal law uses government prosecution and protections like presumption of innocence. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    ),
    section(
      "inchoate-crimes-s3",
      "6.3 Inchoate Crimes: Attempt and Conspiracy — Workplace scenarios and documentation",
      ["Scenario: a teammate cites inchoate crimes: attempt and conspiracy in a meeting, but details in the packet do not match the textbook example. Constitutional limits constrain what governments and sometimes private actors may do. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Good documentation states facts, cites the framework, and records the decision. Criminal law uses government prosecution and protections like presumption of innocence. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Statutes come from legislatures while case law develops through published judicial decisions. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."],
        caseStudies: [
          { name: "United States v. Valle", year: "2017", summary: "Conspiracy and kidnapping plot over internet—inchoate liability requires agreement plus overt act in federal schemes." },
        ]
      }
    ),
    section(
      "inchoate-crimes-s4",
      "6.4 Inchoate Crimes: Attempt and Conspiracy — Common mistakes and how to avoid them",
      ["Common mistakes around inchoate crimes: attempt and conspiracy include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Criminal law uses government prosecution and protections like presumption of innocence. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Statutes come from legislatures while case law develops through published judicial decisions. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Rules are announced in advance and applied by independent institutions rather than private retaliation. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    ),
    section(
      "inchoate-crimes-s5",
      "6.5 Inchoate Crimes: Attempt and Conspiracy — Putting the chapter together",
      ["This chapter’s through-line is simple: Inchoate Crimes: Attempt and Conspiracy connects principles to accountable action. Criminal law uses government prosecution and protections like presumption of innocence.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Statutes come from legislatures while case law develops through published judicial decisions. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits inchoate crimes: attempt and conspiracy in your field. Rules are announced in advance and applied by independent institutions rather than private retaliation. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    )
    ],
    {
      learningObjectives: ["Define inchoate crimes: attempt and conspiracy and explain why it matters in Criminal Law Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Inchoate Crimes: Attempt and Conspiracy connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
      realWorldRelevance: "Strong grasp of inchoate crimes: attempt and conspiracy reduces rework, supports defensible records, and speeds collaboration across Criminal Law Fundamentals.",
    }
  ),
  chapter(
    "defenses-justification",
    7,
    "Justification Defenses",
    [
    section(
      "defenses-justification-s1",
      "7.1 Justification Defenses — Foundations and vocabulary",
      ["Justification Defenses is a foundation in Criminal Law Fundamentals because burden of proof and standards of review change outcomes even when facts are similar. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Contracts allocate risk with offer, acceptance, consideration, and definite terms. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain justification defenses aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat justification defenses as a shared model for decisions. Constitutional limits constrain what governments and sometimes private actors may do. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "defenses-justification-s2",
      "7.2 Justification Defenses — How professionals apply this in practice",
      ["Professionals rarely dispute whether justification defenses exists—they dispute how contracts allocate risk with offer, acceptance, consideration, and definite terms. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Constitutional limits constrain what governments and sometimes private actors may do.","When stakes rise, pause for a second opinion or formal review. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Criminal law uses government prosecution and protections like presumption of innocence. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    ),
    section(
      "defenses-justification-s3",
      "7.3 Justification Defenses — Workplace scenarios and documentation",
      ["Scenario: a teammate cites justification defenses in a meeting, but details in the packet do not match the textbook example. Constitutional limits constrain what governments and sometimes private actors may do. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Good documentation states facts, cites the framework, and records the decision. Criminal law uses government prosecution and protections like presumption of innocence. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Statutes come from legislatures while case law develops through published judicial decisions. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."],
        caseStudies: [
          { name: "State v. Wanrow", year: "1977", summary: "Imperfect self-defense and gendered violence context—justification defenses are fact-intensive." },
        ]
      }
    ),
    section(
      "defenses-justification-s4",
      "7.4 Justification Defenses — Common mistakes and how to avoid them",
      ["Common mistakes around justification defenses include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Criminal law uses government prosecution and protections like presumption of innocence. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Statutes come from legislatures while case law develops through published judicial decisions. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Rules are announced in advance and applied by independent institutions rather than private retaliation. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."]
      }
    ),
    section(
      "defenses-justification-s5",
      "7.5 Justification Defenses — Putting the chapter together",
      ["This chapter’s through-line is simple: Justification Defenses connects principles to accountable action. Criminal law uses government prosecution and protections like presumption of innocence.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Statutes come from legislatures while case law develops through published judicial decisions. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits justification defenses in your field. Rules are announced in advance and applied by independent institutions rather than private retaliation. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    )
    ],
    {
      learningObjectives: ["Define justification defenses and explain why it matters in Criminal Law Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Justification Defenses connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
      realWorldRelevance: "Strong grasp of justification defenses reduces rework, supports defensible records, and speeds collaboration across Criminal Law Fundamentals.",
    }
  ),
  chapter(
    "defenses-excuse",
    8,
    "Excuse Defenses",
    [
    section(
      "defenses-excuse-s1",
      "8.1 Excuse Defenses — Foundations and vocabulary",
      ["Excuse Defenses is a foundation in Criminal Law Fundamentals because statutes come from legislatures while case law develops through published judicial decisions. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Rules are announced in advance and applied by independent institutions rather than private retaliation. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain excuse defenses aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat excuse defenses as a shared model for decisions. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "defenses-excuse-s2",
      "8.2 Excuse Defenses — How professionals apply this in practice",
      ["Professionals rarely dispute whether excuse defenses exists—they dispute how rules are announced in advance and applied by independent institutions rather than private retaliation. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","When stakes rise, pause for a second opinion or formal review. Torts compensate harm caused by negligence, strict liability, or intentional acts. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Legal research starts with primary sources—constitutions, statutes, regulations, cases. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."]
      }
    ),
    section(
      "defenses-excuse-s3",
      "8.3 Excuse Defenses — Workplace scenarios and documentation",
      ["Scenario: a teammate cites excuse defenses in a meeting, but details in the packet do not match the textbook example. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Torts compensate harm caused by negligence, strict liability, or intentional acts.","Good documentation states facts, cites the framework, and records the decision. Legal research starts with primary sources—constitutions, statutes, regulations, cases. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Alternative dispute resolution can resolve conflicts faster than full trials. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."],
        caseStudies: [
          { name: "Durham v. United States", year: "1954", summary: "Insanity reform era—excuse defenses ask whether mental disease prevented knowing wrongfulness (jurisdiction-specific)." },
        ]
      }
    ),
    section(
      "defenses-excuse-s4",
      "8.4 Excuse Defenses — Common mistakes and how to avoid them",
      ["Common mistakes around excuse defenses include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Torts compensate harm caused by negligence, strict liability, or intentional acts.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Alternative dispute resolution can resolve conflicts faster than full trials. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Federalism splits authority between national and state governments in the U.S. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."]
      }
    ),
    section(
      "defenses-excuse-s5",
      "8.5 Excuse Defenses — Putting the chapter together",
      ["This chapter’s through-line is simple: Excuse Defenses connects principles to accountable action. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Alternative dispute resolution can resolve conflicts faster than full trials. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits excuse defenses in your field. Federalism splits authority between national and state governments in the U.S. Burden of proof and standards of review change outcomes even when facts are similar."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."]
      }
    )
    ],
    {
      learningObjectives: ["Define excuse defenses and explain why it matters in Criminal Law Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Excuse Defenses connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Alternative dispute resolution can resolve conflicts faster than full trials.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Torts compensate harm caused by negligence, strict liability, or intentional acts."],
      realWorldRelevance: "Strong grasp of excuse defenses reduces rework, supports defensible records, and speeds collaboration across Criminal Law Fundamentals.",
    }
  ),
  chapter(
    "accomplice-liability",
    9,
    "Accomplice and Vicarious Liability",
    [
    section(
      "accomplice-liability-s1",
      "9.1 Accomplice and Vicarious Liability — Foundations and vocabulary",
      ["Accomplice and Vicarious Liability is a foundation in Criminal Law Fundamentals because contracts allocate risk with offer, acceptance, consideration, and definite terms. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Constitutional limits constrain what governments and sometimes private actors may do. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain accomplice and vicarious liability aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat accomplice and vicarious liability as a shared model for decisions. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "accomplice-liability-s2",
      "9.2 Accomplice and Vicarious Liability — How professionals apply this in practice",
      ["Professionals rarely dispute whether accomplice and vicarious liability exists—they dispute how burden of proof and standards of review change outcomes even when facts are similar. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","When stakes rise, pause for a second opinion or formal review. Constitutional limits constrain what governments and sometimes private actors may do. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."]
      }
    ),
    section(
      "accomplice-liability-s3",
      "9.3 Accomplice and Vicarious Liability — Workplace scenarios and documentation",
      ["Scenario: a teammate cites accomplice and vicarious liability in a meeting, but details in the packet do not match the textbook example. Federalism splits authority between national and state governments in the U.S. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Burden of proof and standards of review change outcomes even when facts are similar.","Good documentation states facts, cites the framework, and records the decision. Contracts allocate risk with offer, acceptance, consideration, and definite terms. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Constitutional limits constrain what governments and sometimes private actors may do. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."],
        caseStudies: [
          { name: "Pinkerton v. United States", year: "1946", summary: "Conspiracy can make co-conspirators liable for foreseeable substantive crimes of others in the agreement." },
        ]
      }
    ),
    section(
      "accomplice-liability-s4",
      "9.4 Accomplice and Vicarious Liability — Common mistakes and how to avoid them",
      ["Common mistakes around accomplice and vicarious liability include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Alternative dispute resolution can resolve conflicts faster than full trials.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Federalism splits authority between national and state governments in the U.S. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Burden of proof and standards of review change outcomes even when facts are similar. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."]
      }
    ),
    section(
      "accomplice-liability-s5",
      "9.5 Accomplice and Vicarious Liability — Putting the chapter together",
      ["This chapter’s through-line is simple: Accomplice and Vicarious Liability connects principles to accountable action. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Alternative dispute resolution can resolve conflicts faster than full trials. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits accomplice and vicarious liability in your field. Federalism splits authority between national and state governments in the U.S. Burden of proof and standards of review change outcomes even when facts are similar."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."]
      }
    )
    ],
    {
      learningObjectives: ["Define accomplice and vicarious liability and explain why it matters in Criminal Law Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Accomplice and Vicarious Liability connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Federalism splits authority between national and state governments in the U.S.","Alternative dispute resolution can resolve conflicts faster than full trials.","Burden of proof and standards of review change outcomes even when facts are similar.","Federalism splits authority between national and state governments in the U.S.","Alternative dispute resolution can resolve conflicts faster than full trials."],
      realWorldRelevance: "Strong grasp of accomplice and vicarious liability reduces rework, supports defensible records, and speeds collaboration across Criminal Law Fundamentals.",
    }
  ),
  chapter(
    "sentencing",
    10,
    "Sentencing and Punishment",
    [
    section(
      "sentencing-s1",
      "10.1 Sentencing and Punishment — Foundations and vocabulary",
      ["Sentencing and Punishment is a foundation in Criminal Law Fundamentals because statutes come from legislatures while case law develops through published judicial decisions. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Rules are announced in advance and applied by independent institutions rather than private retaliation. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain sentencing and punishment aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat sentencing and punishment as a shared model for decisions. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "sentencing-s2",
      "10.2 Sentencing and Punishment — How professionals apply this in practice",
      ["Professionals rarely dispute whether sentencing and punishment exists—they dispute how criminal law uses government prosecution and protections like presumption of innocence. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Statutes come from legislatures while case law develops through published judicial decisions.","When stakes rise, pause for a second opinion or formal review. Rules are announced in advance and applied by independent institutions rather than private retaliation. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."]
      }
    ),
    section(
      "sentencing-s3",
      "10.3 Sentencing and Punishment — Workplace scenarios and documentation",
      ["Scenario: a teammate cites sentencing and punishment in a meeting, but details in the packet do not match the textbook example. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Criminal law uses government prosecution and protections like presumption of innocence.","Good documentation states facts, cites the framework, and records the decision. Statutes come from legislatures while case law develops through published judicial decisions. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Rules are announced in advance and applied by independent institutions rather than private retaliation. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."],
        caseStudies: [
          { name: "United States v. Booker", year: "2005", summary: "Federal sentencing guidelines advisory after Sixth Amendment jury findings—structured discretion returns to judges." },
        ]
      }
    ),
    section(
      "sentencing-s4",
      "10.4 Sentencing and Punishment — Common mistakes and how to avoid them",
      ["Common mistakes around sentencing and punishment include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Constitutional limits constrain what governments and sometimes private actors may do.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Criminal law uses government prosecution and protections like presumption of innocence. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Statutes come from legislatures while case law develops through published judicial decisions. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."]
      }
    ),
    section(
      "sentencing-s5",
      "10.5 Sentencing and Punishment — Putting the chapter together",
      ["This chapter’s through-line is simple: Sentencing and Punishment connects principles to accountable action. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Constitutional limits constrain what governments and sometimes private actors may do. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits sentencing and punishment in your field. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Criminal law uses government prosecution and protections like presumption of innocence."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."]
      }
    )
    ],
    {
      learningObjectives: ["Define sentencing and punishment and explain why it matters in Criminal Law Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Sentencing and Punishment connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Alternative dispute resolution can resolve conflicts faster than full trials.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Torts compensate harm caused by negligence, strict liability, or intentional acts."],
      realWorldRelevance: "Strong grasp of sentencing and punishment reduces rework, supports defensible records, and speeds collaboration across Criminal Law Fundamentals.",
    }
  ),
  chapter(
    "juvenile-justice",
    11,
    "Juvenile Justice",
    [
    section(
      "juvenile-justice-s1",
      "11.1 Juvenile Justice — Foundations and vocabulary",
      ["Juvenile Justice is a foundation in Criminal Law Fundamentals because constitutional limits constrain what governments and sometimes private actors may do. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain juvenile justice aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat juvenile justice as a shared model for decisions. Criminal law uses government prosecution and protections like presumption of innocence. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "juvenile-justice-s2",
      "11.2 Juvenile Justice — How professionals apply this in practice",
      ["Professionals rarely dispute whether juvenile justice exists—they dispute how contracts allocate risk with offer, acceptance, consideration, and definite terms. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Constitutional limits constrain what governments and sometimes private actors may do.","When stakes rise, pause for a second opinion or formal review. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Criminal law uses government prosecution and protections like presumption of innocence. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    ),
    section(
      "juvenile-justice-s3",
      "11.3 Juvenile Justice — Workplace scenarios and documentation",
      ["Scenario: a teammate cites juvenile justice in a meeting, but details in the packet do not match the textbook example. Burden of proof and standards of review change outcomes even when facts are similar. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Good documentation states facts, cites the framework, and records the decision. Constitutional limits constrain what governments and sometimes private actors may do. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."],
        caseStudies: [
          { name: "In re Gault", year: "1967", summary: "Juveniles accused of delinquency deserve notice, counsel, and confrontation—adult-like process in juvenile court." },
        ]
      }
    ),
    section(
      "juvenile-justice-s4",
      "11.4 Juvenile Justice — Common mistakes and how to avoid them",
      ["Common mistakes around juvenile justice include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Federalism splits authority between national and state governments in the U.S.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Burden of proof and standards of review change outcomes even when facts are similar. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Constitutional limits constrain what governments and sometimes private actors may do. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    ),
    section(
      "juvenile-justice-s5",
      "11.5 Juvenile Justice — Putting the chapter together",
      ["This chapter’s through-line is simple: Juvenile Justice connects principles to accountable action. Alternative dispute resolution can resolve conflicts faster than full trials.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Federalism splits authority between national and state governments in the U.S. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits juvenile justice in your field. Burden of proof and standards of review change outcomes even when facts are similar. Contracts allocate risk with offer, acceptance, consideration, and definite terms."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    )
    ],
    {
      learningObjectives: ["Define juvenile justice and explain why it matters in Criminal Law Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Juvenile Justice connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
      realWorldRelevance: "Strong grasp of juvenile justice reduces rework, supports defensible records, and speeds collaboration across Criminal Law Fundamentals.",
    }
  ),
  chapter(
    "white-collar",
    12,
    "White-Collar Crime",
    [
    section(
      "white-collar-s1",
      "12.1 White-Collar Crime — Foundations and vocabulary",
      ["White-Collar Crime is a foundation in Criminal Law Fundamentals because torts compensate harm caused by negligence, strict liability, or intentional acts. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Legal research starts with primary sources—constitutions, statutes, regulations, cases. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain white-collar crime aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat white-collar crime as a shared model for decisions. Alternative dispute resolution can resolve conflicts faster than full trials. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "white-collar-s2",
      "12.2 White-Collar Crime — How professionals apply this in practice",
      ["Professionals rarely dispute whether white-collar crime exists—they dispute how civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Torts compensate harm caused by negligence, strict liability, or intentional acts.","When stakes rise, pause for a second opinion or formal review. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Alternative dispute resolution can resolve conflicts faster than full trials. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    ),
    section(
      "white-collar-s3",
      "12.3 White-Collar Crime — Workplace scenarios and documentation",
      ["Scenario: a teammate cites white-collar crime in a meeting, but details in the packet do not match the textbook example. Rules are announced in advance and applied by independent institutions rather than private retaliation. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Good documentation states facts, cites the framework, and records the decision. Torts compensate harm caused by negligence, strict liability, or intentional acts. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Legal research starts with primary sources—constitutions, statutes, regulations, cases. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."],
        caseStudies: [
          { name: "United States v. Skilling", year: "2010", summary: "Enron fraud convictions—mail/wire fraud and honest-services theories in corporate prosecutions." },
        ]
      }
    ),
    section(
      "white-collar-s4",
      "12.4 White-Collar Crime — Common mistakes and how to avoid them",
      ["Common mistakes around white-collar crime include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Statutes come from legislatures while case law develops through published judicial decisions.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Rules are announced in advance and applied by independent institutions rather than private retaliation. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Torts compensate harm caused by negligence, strict liability, or intentional acts. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    ),
    section(
      "white-collar-s5",
      "12.5 White-Collar Crime — Putting the chapter together",
      ["This chapter’s through-line is simple: White-Collar Crime connects principles to accountable action. Criminal law uses government prosecution and protections like presumption of innocence.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Statutes come from legislatures while case law develops through published judicial decisions. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits white-collar crime in your field. Rules are announced in advance and applied by independent institutions rather than private retaliation. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    )
    ],
    {
      learningObjectives: ["Define white-collar crime and explain why it matters in Criminal Law Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "White-Collar Crime connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Statutes come from legislatures while case law develops through published judicial decisions.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Statutes come from legislatures while case law develops through published judicial decisions."],
      realWorldRelevance: "Strong grasp of white-collar crime reduces rework, supports defensible records, and speeds collaboration across Criminal Law Fundamentals.",
    }
  ),
  chapter(
    "drug-offenses",
    13,
    "Drug and Controlled Substance Offenses",
    [
    section(
      "drug-offenses-s1",
      "13.1 Drug and Controlled Substance Offenses — Foundations and vocabulary",
      ["Feedback control compares measured outputs to setpoints, adjusting inputs to reject disturbances in plants and products alike. Drug and Controlled Substance Offenses is a foundation in Criminal Law Fundamentals because federalism splits authority between national and state governments in the U.S.. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Burden of proof and standards of review change outcomes even when facts are similar. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain drug and controlled substance offenses aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat drug and controlled substance offenses as a shared model for decisions. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "drug-offenses-s2",
      "13.2 Drug and Controlled Substance Offenses — How professionals apply this in practice",
      ["Professionals rarely dispute whether drug and controlled substance offenses exists—they dispute how alternative dispute resolution can resolve conflicts faster than full trials. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Federalism splits authority between national and state governments in the U.S.","When stakes rise, pause for a second opinion or formal review. Burden of proof and standards of review change outcomes even when facts are similar. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Contracts allocate risk with offer, acceptance, consideration, and definite terms. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    ),
    section(
      "drug-offenses-s3",
      "13.3 Drug and Controlled Substance Offenses — Workplace scenarios and documentation",
      ["Scenario: a teammate cites drug and controlled substance offenses in a meeting, but details in the packet do not match the textbook example. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Alternative dispute resolution can resolve conflicts faster than full trials.","Good documentation states facts, cites the framework, and records the decision. Federalism splits authority between national and state governments in the U.S. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Burden of proof and standards of review change outcomes even when facts are similar. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."],
        caseStudies: [
          { name: "Apprendi v. New Jersey", year: "2000", summary: "Any fact increasing statutory maximum must be found by a jury beyond a reasonable doubt—limits judicial drug sentencing enhancements." },
        ]
      }
    ),
    section(
      "drug-offenses-s4",
      "13.4 Drug and Controlled Substance Offenses — Common mistakes and how to avoid them",
      ["Common mistakes around drug and controlled substance offenses include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Torts compensate harm caused by negligence, strict liability, or intentional acts.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Alternative dispute resolution can resolve conflicts faster than full trials. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Federalism splits authority between national and state governments in the U.S. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S."]
      }
    ),
    section(
      "drug-offenses-s5",
      "13.5 Drug and Controlled Substance Offenses — Putting the chapter together",
      ["This chapter’s through-line is simple: Drug and Controlled Substance Offenses connects principles to accountable action. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Torts compensate harm caused by negligence, strict liability, or intentional acts. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits drug and controlled substance offenses in your field. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Alternative dispute resolution can resolve conflicts faster than full trials."], {
        bulletPoints: ["Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."]
      }
    )
    ],
    {
      learningObjectives: ["Define drug and controlled substance offenses and explain why it matters in Criminal Law Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Drug and Controlled Substance Offenses: Feedback control compares measured outputs to setpoints, adjusting inputs to reject disturbances in plants and products alike. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Rules are announced in advance and applied by independent institutions rather than private retaliation."],
      realWorldRelevance: "Strong grasp of drug and controlled substance offenses reduces rework, supports defensible records, and speeds collaboration across Criminal Law Fundamentals.",
    }
  ),
  chapter(
    "cybercrime",
    14,
    "Cybercrime and Digital Evidence",
    [
    section(
      "cybercrime-s1",
      "14.1 Cybercrime and Digital Evidence — Foundations and vocabulary",
      ["Evidence rules filter what fact-finders may hear—relevance, hearsay exceptions, privileges, and impeachment shape trial narratives. Cybercrime and Digital Evidence is a foundation in Criminal Law Fundamentals because torts compensate harm caused by negligence, strict liability, or intentional acts. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Legal research starts with primary sources—constitutions, statutes, regulations, cases. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain cybercrime and digital evidence aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat cybercrime and digital evidence as a shared model for decisions. Alternative dispute resolution can resolve conflicts faster than full trials. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "cybercrime-s2",
      "14.2 Cybercrime and Digital Evidence — How professionals apply this in practice",
      ["Professionals rarely dispute whether cybercrime and digital evidence exists—they dispute how civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Torts compensate harm caused by negligence, strict liability, or intentional acts.","When stakes rise, pause for a second opinion or formal review. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Alternative dispute resolution can resolve conflicts faster than full trials. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    ),
    section(
      "cybercrime-s3",
      "14.3 Cybercrime and Digital Evidence — Workplace scenarios and documentation",
      ["Scenario: a teammate cites cybercrime and digital evidence in a meeting, but details in the packet do not match the textbook example. Rules are announced in advance and applied by independent institutions rather than private retaliation. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Good documentation states facts, cites the framework, and records the decision. Torts compensate harm caused by negligence, strict liability, or intentional acts. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Legal research starts with primary sources—constitutions, statutes, regulations, cases. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
        caseStudies: [
          { name: "United States v. Morris", year: "1991", summary: "First major CFAA prosecution for releasing the Morris Worm—computer trespass statutes meet novel harms." },
        ]
      }
    ),
    section(
      "cybercrime-s4",
      "14.4 Cybercrime and Digital Evidence — Common mistakes and how to avoid them",
      ["Common mistakes around cybercrime and digital evidence include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Statutes come from legislatures while case law develops through published judicial decisions.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Rules are announced in advance and applied by independent institutions rather than private retaliation. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Torts compensate harm caused by negligence, strict liability, or intentional acts. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."]
      }
    ),
    section(
      "cybercrime-s5",
      "14.5 Cybercrime and Digital Evidence — Putting the chapter together",
      ["This chapter’s through-line is simple: Cybercrime and Digital Evidence connects principles to accountable action. Criminal law uses government prosecution and protections like presumption of innocence.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Statutes come from legislatures while case law develops through published judicial decisions. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits cybercrime and digital evidence in your field. Rules are announced in advance and applied by independent institutions rather than private retaliation. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."], {
        bulletPoints: ["Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases."]
      }
    )
    ],
    {
      learningObjectives: ["Define cybercrime and digital evidence and explain why it matters in Criminal Law Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Cybercrime and Digital Evidence: Evidence rules filter what fact-finders may hear—relevance, hearsay exceptions, privileges, and impeachment shape trial narratives. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."],
      realWorldRelevance: "Strong grasp of cybercrime and digital evidence reduces rework, supports defensible records, and speeds collaboration across Criminal Law Fundamentals.",
    }
  ),
  chapter(
    "victim-rights",
    15,
    "Victims' Rights and Restitution",
    [
    section(
      "victim-rights-s1",
      "15.1 Victims' Rights and Restitution — Foundations and vocabulary",
      ["Victims' Rights and Restitution is a foundation in Criminal Law Fundamentals because legal research starts with primary sources—constitutions, statutes, regulations, cases. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Alternative dispute resolution can resolve conflicts faster than full trials. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain victims' rights and restitution aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat victims' rights and restitution as a shared model for decisions. Federalism splits authority between national and state governments in the U.S. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "victim-rights-s2",
      "15.2 Victims' Rights and Restitution — How professionals apply this in practice",
      ["Professionals rarely dispute whether victims' rights and restitution exists—they dispute how alternative dispute resolution can resolve conflicts faster than full trials. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Federalism splits authority between national and state governments in the U.S.","When stakes rise, pause for a second opinion or formal review. Burden of proof and standards of review change outcomes even when facts are similar. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Contracts allocate risk with offer, acceptance, consideration, and definite terms. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."]
      }
    ),
    section(
      "victim-rights-s3",
      "15.3 Victims' Rights and Restitution — Workplace scenarios and documentation",
      ["Scenario: a teammate cites victims' rights and restitution in a meeting, but details in the packet do not match the textbook example. Federalism splits authority between national and state governments in the U.S. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Burden of proof and standards of review change outcomes even when facts are similar.","Good documentation states facts, cites the framework, and records the decision. Contracts allocate risk with offer, acceptance, consideration, and definite terms. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Constitutional limits constrain what governments and sometimes private actors may do. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."],
        caseStudies: [
          { name: "Payne v. Tennessee", year: "1991", summary: "Victim impact evidence at sentencing—balances defendant rights with harm testimony in capital and serious cases." },
        ]
      }
    ),
    section(
      "victim-rights-s4",
      "15.4 Victims' Rights and Restitution — Common mistakes and how to avoid them",
      ["Common mistakes around victims' rights and restitution include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Burden of proof and standards of review change outcomes even when facts are similar.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Constitutional limits constrain what governments and sometimes private actors may do. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence.","Statutes come from legislatures while case law develops through published judicial decisions."]
      }
    ),
    section(
      "victim-rights-s5",
      "15.5 Victims' Rights and Restitution — Putting the chapter together",
      ["This chapter’s through-line is simple: Victims' Rights and Restitution connects principles to accountable action. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Constitutional limits constrain what governments and sometimes private actors may do. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits victims' rights and restitution in your field. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Criminal law uses government prosecution and protections like presumption of innocence."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."]
      }
    )
    ],
    {
      learningObjectives: ["Define victims' rights and restitution and explain why it matters in Criminal Law Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Victims' Rights and Restitution connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Burden of proof and standards of review change outcomes even when facts are similar.","Constitutional limits constrain what governments and sometimes private actors may do.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Burden of proof and standards of review change outcomes even when facts are similar."],
      realWorldRelevance: "Strong grasp of victims' rights and restitution reduces rework, supports defensible records, and speeds collaboration across Criminal Law Fundamentals.",
    }
  ),
  chapter(
    "police-powers",
    16,
    "Police Powers and Limits",
    [
    section(
      "police-powers-s1",
      "16.1 Police Powers and Limits — Foundations and vocabulary",
      ["Police Powers and Limits is a foundation in Criminal Law Fundamentals because federalism splits authority between national and state governments in the U.S.. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Burden of proof and standards of review change outcomes even when facts are similar. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain police powers and limits aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat police powers and limits as a shared model for decisions. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "police-powers-s2",
      "16.2 Police Powers and Limits — How professionals apply this in practice",
      ["Professionals rarely dispute whether police powers and limits exists—they dispute how burden of proof and standards of review change outcomes even when facts are similar. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Contracts allocate risk with offer, acceptance, consideration, and definite terms.","When stakes rise, pause for a second opinion or formal review. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Criminal law uses government prosecution and protections like presumption of innocence. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."]
      }
    ),
    section(
      "police-powers-s3",
      "16.3 Police Powers and Limits — Workplace scenarios and documentation",
      ["Scenario: a teammate cites police powers and limits in a meeting, but details in the packet do not match the textbook example. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Good documentation states facts, cites the framework, and records the decision. Criminal law uses government prosecution and protections like presumption of innocence. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Statutes come from legislatures while case law develops through published judicial decisions. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."],
        caseStudies: [
          { name: "Terry v. Ohio", year: "1968", summary: "Stop-and-frisk on reasonable suspicion—Fourth Amendment allows brief detentions short of probable cause." },
        ]
      }
    ),
    section(
      "police-powers-s4",
      "16.4 Police Powers and Limits — Common mistakes and how to avoid them",
      ["Common mistakes around police powers and limits include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Criminal law uses government prosecution and protections like presumption of innocence. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Statutes come from legislatures while case law develops through published judicial decisions. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Rules are announced in advance and applied by independent institutions rather than private retaliation. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."]
      }
    ),
    section(
      "police-powers-s5",
      "16.5 Police Powers and Limits — Putting the chapter together",
      ["This chapter’s through-line is simple: Police Powers and Limits connects principles to accountable action. Criminal law uses government prosecution and protections like presumption of innocence.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Statutes come from legislatures while case law develops through published judicial decisions. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits police powers and limits in your field. Rules are announced in advance and applied by independent institutions rather than private retaliation. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."]
      }
    )
    ],
    {
      learningObjectives: ["Define police powers and limits and explain why it matters in Criminal Law Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Police Powers and Limits connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Constitutional limits constrain what governments and sometimes private actors may do.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials."],
      realWorldRelevance: "Strong grasp of police powers and limits reduces rework, supports defensible records, and speeds collaboration across Criminal Law Fundamentals.",
    }
  ),
  chapter(
    "prosecution",
    17,
    "Prosecution and Plea Bargaining",
    [
    section(
      "prosecution-s1",
      "17.1 Prosecution and Plea Bargaining — Foundations and vocabulary",
      ["Prosecution and Plea Bargaining is a foundation in Criminal Law Fundamentals because criminal law uses government prosecution and protections like presumption of innocence. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain prosecution and plea bargaining aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat prosecution and plea bargaining as a shared model for decisions. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "prosecution-s2",
      "17.2 Prosecution and Plea Bargaining — How professionals apply this in practice",
      ["Professionals rarely dispute whether prosecution and plea bargaining exists—they dispute how civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","When stakes rise, pause for a second opinion or formal review. Alternative dispute resolution can resolve conflicts faster than full trials. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Federalism splits authority between national and state governments in the U.S. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Statutes come from legislatures while case law develops through published judicial decisions."]
      }
    ),
    section(
      "prosecution-s3",
      "17.3 Prosecution and Plea Bargaining — Workplace scenarios and documentation",
      ["Scenario: a teammate cites prosecution and plea bargaining in a meeting, but details in the packet do not match the textbook example. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Alternative dispute resolution can resolve conflicts faster than full trials.","Good documentation states facts, cites the framework, and records the decision. Federalism splits authority between national and state governments in the U.S. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Burden of proof and standards of review change outcomes even when facts are similar. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."],
        caseStudies: [
          { name: "Brady v. Maryland", year: "1963", summary: "Prosecutors must disclose exculpatory evidence—failure can overturn convictions and discipline lawyers." },
        ]
      }
    ),
    section(
      "prosecution-s4",
      "17.4 Prosecution and Plea Bargaining — Common mistakes and how to avoid them",
      ["Common mistakes around prosecution and plea bargaining include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Alternative dispute resolution can resolve conflicts faster than full trials.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Federalism splits authority between national and state governments in the U.S. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Burden of proof and standards of review change outcomes even when facts are similar. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."]
      }
    ),
    section(
      "prosecution-s5",
      "17.5 Prosecution and Plea Bargaining — Putting the chapter together",
      ["This chapter’s through-line is simple: Prosecution and Plea Bargaining connects principles to accountable action. Federalism splits authority between national and state governments in the U.S.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Burden of proof and standards of review change outcomes even when facts are similar. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits prosecution and plea bargaining in your field. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Constitutional limits constrain what governments and sometimes private actors may do."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Statutes come from legislatures while case law develops through published judicial decisions."]
      }
    )
    ],
    {
      learningObjectives: ["Define prosecution and plea bargaining and explain why it matters in Criminal Law Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Prosecution and Plea Bargaining connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."],
      realWorldRelevance: "Strong grasp of prosecution and plea bargaining reduces rework, supports defensible records, and speeds collaboration across Criminal Law Fundamentals.",
    }
  ),
  chapter(
    "trial-rights",
    18,
    "Trial Rights and Procedures",
    [
    section(
      "trial-rights-s1",
      "18.1 Trial Rights and Procedures — Foundations and vocabulary",
      ["Trial Rights and Procedures is a foundation in Criminal Law Fundamentals because alternative dispute resolution can resolve conflicts faster than full trials. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Legal research starts with primary sources—constitutions, statutes, regulations, cases. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain trial rights and procedures aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat trial rights and procedures as a shared model for decisions. Federalism splits authority between national and state governments in the U.S. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "trial-rights-s2",
      "18.2 Trial Rights and Procedures — How professionals apply this in practice",
      ["Professionals rarely dispute whether trial rights and procedures exists—they dispute how torts compensate harm caused by negligence, strict liability, or intentional acts. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Alternative dispute resolution can resolve conflicts faster than full trials.","When stakes rise, pause for a second opinion or formal review. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Federalism splits authority between national and state governments in the U.S. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Alternative dispute resolution can resolve conflicts faster than full trials.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."]
      }
    ),
    section(
      "trial-rights-s3",
      "18.3 Trial Rights and Procedures — Workplace scenarios and documentation",
      ["Scenario: a teammate cites trial rights and procedures in a meeting, but details in the packet do not match the textbook example. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Torts compensate harm caused by negligence, strict liability, or intentional acts.","Good documentation states facts, cites the framework, and records the decision. Alternative dispute resolution can resolve conflicts faster than full trials. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Legal research starts with primary sources—constitutions, statutes, regulations, cases. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."],
        caseStudies: [
          { name: "Batson v. Kentucky", year: "1986", summary: "Racial discrimination in jury selection is unconstitutional—prosecutors and defense face scrutiny on peremptory strikes." },
        ]
      }
    ),
    section(
      "trial-rights-s4",
      "18.4 Trial Rights and Procedures — Common mistakes and how to avoid them",
      ["Common mistakes around trial rights and procedures include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Rules are announced in advance and applied by independent institutions rather than private retaliation.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Torts compensate harm caused by negligence, strict liability, or intentional acts. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Alternative dispute resolution can resolve conflicts faster than full trials. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms."]
      }
    ),
    section(
      "trial-rights-s5",
      "18.5 Trial Rights and Procedures — Putting the chapter together",
      ["This chapter’s through-line is simple: Trial Rights and Procedures connects principles to accountable action. Statutes come from legislatures while case law develops through published judicial decisions.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Rules are announced in advance and applied by independent institutions rather than private retaliation. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits trial rights and procedures in your field. Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Torts compensate harm caused by negligence, strict liability, or intentional acts."], {
        bulletPoints: ["Torts compensate harm caused by negligence, strict liability, or intentional acts.","Alternative dispute resolution can resolve conflicts faster than full trials.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."]
      }
    )
    ],
    {
      learningObjectives: ["Define trial rights and procedures and explain why it matters in Criminal Law Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Trial Rights and Procedures connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Torts compensate harm caused by negligence, strict liability, or intentional acts.","Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Alternative dispute resolution can resolve conflicts faster than full trials.","Torts compensate harm caused by negligence, strict liability, or intentional acts."],
      realWorldRelevance: "Strong grasp of trial rights and procedures reduces rework, supports defensible records, and speeds collaboration across Criminal Law Fundamentals.",
    }
  ),
  chapter(
    "appeals-habeas",
    19,
    "Appeals and Post-Conviction Relief",
    [
    section(
      "appeals-habeas-s1",
      "19.1 Appeals and Post-Conviction Relief — Foundations and vocabulary",
      ["Appeals and Post-Conviction Relief is a foundation in Criminal Law Fundamentals because ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Criminal law uses government prosecution and protections like presumption of innocence. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain appeals and post-conviction relief aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat appeals and post-conviction relief as a shared model for decisions. Statutes come from legislatures while case law develops through published judicial decisions. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."],
        citations: [{"source":"American Bar Association","url":"https://www.americanbar.org/groups/public_education/","note":"Public legal education resources"}]
      }
    ),
    section(
      "appeals-habeas-s2",
      "19.2 Appeals and Post-Conviction Relief — How professionals apply this in practice",
      ["Professionals rarely dispute whether appeals and post-conviction relief exists—they dispute how constitutional limits constrain what governments and sometimes private actors may do. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","When stakes rise, pause for a second opinion or formal review. Criminal law uses government prosecution and protections like presumption of innocence. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Statutes come from legislatures while case law develops through published judicial decisions. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."]
      }
    ),
    section(
      "appeals-habeas-s3",
      "19.3 Appeals and Post-Conviction Relief — Workplace scenarios and documentation",
      ["Scenario: a teammate cites appeals and post-conviction relief in a meeting, but details in the packet do not match the textbook example. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Constitutional limits constrain what governments and sometimes private actors may do.","Good documentation states facts, cites the framework, and records the decision. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Criminal law uses government prosecution and protections like presumption of innocence. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do."],
        caseStudies: [
          { name: "Strickland v. Washington", year: "1984", summary: "Ineffective assistance of counsel standard—prejudice plus deficient performance gates post-conviction relief." },
        ]
      }
    ),
    section(
      "appeals-habeas-s4",
      "19.4 Appeals and Post-Conviction Relief — Common mistakes and how to avoid them",
      ["Common mistakes around appeals and post-conviction relief include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Burden of proof and standards of review change outcomes even when facts are similar.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Constitutional limits constrain what governments and sometimes private actors may do. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."]
      }
    ),
    section(
      "appeals-habeas-s5",
      "19.5 Appeals and Post-Conviction Relief — Putting the chapter together",
      ["This chapter’s through-line is simple: Appeals and Post-Conviction Relief connects principles to accountable action. Federalism splits authority between national and state governments in the U.S.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Burden of proof and standards of review change outcomes even when facts are similar. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits appeals and post-conviction relief in your field. Contracts allocate risk with offer, acceptance, consideration, and definite terms. Constitutional limits constrain what governments and sometimes private actors may do."], {
        bulletPoints: ["Burden of proof and standards of review change outcomes even when facts are similar.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Criminal law uses government prosecution and protections like presumption of innocence."]
      }
    )
    ],
    {
      learningObjectives: ["Define appeals and post-conviction relief and explain why it matters in Criminal Law Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Appeals and Post-Conviction Relief connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar.","Alternative dispute resolution can resolve conflicts faster than full trials.","Federalism splits authority between national and state governments in the U.S.","Burden of proof and standards of review change outcomes even when facts are similar."],
      realWorldRelevance: "Strong grasp of appeals and post-conviction relief reduces rework, supports defensible records, and speeds collaboration across Criminal Law Fundamentals.",
    }
  ),
  chapter(
    "criminal-justice-system",
    20,
    "The Criminal Justice System",
    [
    section(
      "criminal-justice-system-s1",
      "20.1 The Criminal Justice System — Foundations and vocabulary",
      ["Criminal law requires proof beyond a reasonable doubt, respects constitutional protections, and uses sanctions to condemn public wrongs. The Criminal Justice System is a foundation in Criminal Law Fundamentals because civil procedure governs pleadings, discovery, motions, and appeals in lawsuits. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Torts compensate harm caused by negligence, strict liability, or intentional acts. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain the criminal justice system aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat the criminal justice system as a shared model for decisions. Criminal law uses government prosecution and protections like presumption of innocence. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."],
        citations: [{"source":"Cornell LII — Wex Legal Encyclopedia","url":"https://www.law.cornell.edu/wex","note":"Plain-language legal definitions and overviews"}]
      }
    ),
    section(
      "criminal-justice-system-s2",
      "20.2 The Criminal Justice System — How professionals apply this in practice",
      ["Professionals rarely dispute whether the criminal justice system exists—they dispute how torts compensate harm caused by negligence, strict liability, or intentional acts. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Criminal law uses government prosecution and protections like presumption of innocence.","When stakes rise, pause for a second opinion or formal review. Legal research starts with primary sources—constitutions, statutes, regulations, cases. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Alternative dispute resolution can resolve conflicts faster than full trials. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."]
      }
    ),
    section(
      "criminal-justice-system-s3",
      "20.3 The Criminal Justice System — Workplace scenarios and documentation",
      ["Scenario: a teammate cites the criminal justice system in a meeting, but details in the packet do not match the textbook example. Criminal law uses government prosecution and protections like presumption of innocence. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Good documentation states facts, cites the framework, and records the decision. Alternative dispute resolution can resolve conflicts faster than full trials. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Federalism splits authority between national and state governments in the U.S. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation."],
        caseStudies: [
          { name: "Gideon v. Wainwright", year: "1963", summary: "Right to counsel in felony cases—structural reform case for how indigent defense systems are funded." },
        ]
      }
    ),
    section(
      "criminal-justice-system-s4",
      "20.4 The Criminal Justice System — Common mistakes and how to avoid them",
      ["Common mistakes around the criminal justice system include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Legal research starts with primary sources—constitutions, statutes, regulations, cases.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Alternative dispute resolution can resolve conflicts faster than full trials. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Federalism splits authority between national and state governments in the U.S. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Burden of proof and standards of review change outcomes even when facts are similar. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits."]
      }
    ),
    section(
      "criminal-justice-system-s5",
      "20.5 The Criminal Justice System — Putting the chapter together",
      ["This chapter’s through-line is simple: The Criminal Justice System connects principles to accountable action. Alternative dispute resolution can resolve conflicts faster than full trials.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Federalism splits authority between national and state governments in the U.S. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits the criminal justice system in your field. Burden of proof and standards of review change outcomes even when facts are similar. Contracts allocate risk with offer, acceptance, consideration, and definite terms."], {
        bulletPoints: ["Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Statutes come from legislatures while case law develops through published judicial decisions.","Rules are announced in advance and applied by independent institutions rather than private retaliation.","Civil procedure governs pleadings, discovery, motions, and appeals in lawsuits.","Torts compensate harm caused by negligence, strict liability, or intentional acts."]
      }
    )
    ],
    {
      learningObjectives: ["Define the criminal justice system and explain why it matters in Criminal Law Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "The Criminal Justice System: Criminal law requires proof beyond a reasonable doubt, respects constitutional protections, and uses sanctions to condemn public wrongs. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals.","Contracts allocate risk with offer, acceptance, consideration, and definite terms.","Constitutional limits constrain what governments and sometimes private actors may do.","Ethics rules for lawyers address conflicts, confidentiality, and candor to tribunals."],
      realWorldRelevance: "Strong grasp of the criminal justice system reduces rework, supports defensible records, and speeds collaboration across Criminal Law Fundamentals.",
    }
  )
];
