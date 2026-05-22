import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const WARR_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Warranty Basics",
  subtitle: "ForgEd workforce textbook — Warranty Basics",
  paragraphs: [
    "This ForgEd digital textbook presents Warranty Basics at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const WARR_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "factory-warranty",
    1,
    "Factory Warranty",
    [
    section(
      "factory-warranty-s1",
      "1.1 Factory Warranty — Foundations and vocabulary",
      ["Factory Warranty is a foundation in Warranty Basics because service advisors translate technical findings into buyer decisions. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Torque specs and sequence matter on brakes, wheels, and heads. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain factory warranty aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat factory warranty as a shared model for decisions. Warranty rules affect what shops can charge and how claims are filed. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Maintenance menus schedule by time and mileage, not only failure.","Comebacks destroy gross profit and reputation simultaneously.","Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit."],
        citations: [{"source":"NHTSA","url":"https://www.nhtsa.gov/","note":"Vehicle safety and consumer information"}]
      }
    ),
    section(
      "factory-warranty-s2",
      "1.2 Factory Warranty — How professionals apply this in practice",
      ["Professionals rarely dispute whether factory warranty exists—they dispute how repair orders document customer concern, inspection, authorization, and parts. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Service advisors translate technical findings into buyer decisions.","When stakes rise, pause for a second opinion or formal review. Torque specs and sequence matter on brakes, wheels, and heads. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Warranty rules affect what shops can charge and how claims are filed. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["EV service requires high-voltage training and insulated tooling.","Maintenance menus schedule by time and mileage, not only failure.","Comebacks destroy gross profit and reputation simultaneously.","Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals."]
      }
    ),
    section(
      "factory-warranty-s3",
      "1.3 Factory Warranty — Workplace scenarios and documentation",
      ["Scenario: a teammate cites factory warranty in a meeting, but details in the packet do not match the textbook example. Fluid types are not interchangeable—transmission, coolant, and brake specs differ. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Repair orders document customer concern, inspection, authorization, and parts.","Good documentation states facts, cites the framework, and records the decision. Service advisors translate technical findings into buyer decisions. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Torque specs and sequence matter on brakes, wheels, and heads. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Comebacks destroy gross profit and reputation simultaneously.","Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better."]
      }
    ),
    section(
      "factory-warranty-s4",
      "1.4 Factory Warranty — Common mistakes and how to avoid them",
      ["Common mistakes around factory warranty include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Upsells fail when trust is low; education-based recommendations perform better.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Fluid types are not interchangeable—transmission, coolant, and brake specs differ. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Repair orders document customer concern, inspection, authorization, and parts. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Service advisors translate technical findings into buyer decisions. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Maintenance menus schedule by time and mileage, not only failure.","Comebacks destroy gross profit and reputation simultaneously.","Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit."]
      }
    ),
    section(
      "factory-warranty-s5",
      "1.5 Factory Warranty — Putting the chapter together",
      ["This chapter’s through-line is simple: Factory Warranty connects principles to accountable action. Safety recalls must be tracked even when unrelated to current visit.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Upsells fail when trust is low; education-based recommendations perform better. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits factory warranty in your field. Fluid types are not interchangeable—transmission, coolant, and brake specs differ. Repair orders document customer concern, inspection, authorization, and parts."], {
        bulletPoints: ["EV service requires high-voltage training and insulated tooling.","Maintenance menus schedule by time and mileage, not only failure.","Comebacks destroy gross profit and reputation simultaneously.","Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals."]
      }
    )
    ],
    {
      learningObjectives: ["Define factory warranty and explain why it matters in Warranty Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Factory Warranty connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Maintenance menus schedule by time and mileage, not only failure.","EV service requires high-voltage training and insulated tooling.","Comebacks destroy gross profit and reputation simultaneously.","Maintenance menus schedule by time and mileage, not only failure.","EV service requires high-voltage training and insulated tooling."],
      realWorldRelevance: "Strong grasp of factory warranty reduces rework, supports defensible records, and speeds collaboration across Warranty Basics.",
    }
  ),
  chapter(
    "extended-warranty",
    2,
    "Extended Coverage",
    [
    section(
      "extended-warranty-s1",
      "2.1 Extended Coverage — Foundations and vocabulary",
      ["Extended Coverage is a foundation in Warranty Basics because maintenance menus schedule by time and mileage, not only failure. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Comebacks destroy gross profit and reputation simultaneously. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain extended coverage aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat extended coverage as a shared model for decisions. Warranty rules affect what shops can charge and how claims are filed. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts."],
        citations: [{"source":"NHTSA","url":"https://www.nhtsa.gov/","note":"Vehicle safety and consumer information"}]
      }
    ),
    section(
      "extended-warranty-s2",
      "2.2 Extended Coverage — How professionals apply this in practice",
      ["Professionals rarely dispute whether extended coverage exists—they dispute how comebacks destroy gross profit and reputation simultaneously. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Warranty rules affect what shops can charge and how claims are filed.","When stakes rise, pause for a second opinion or formal review. Diagnostic trouble codes point to systems, not always root parts. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Parts markup and labor guides interact with customer approvals. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ."]
      }
    ),
    section(
      "extended-warranty-s3",
      "2.3 Extended Coverage — Workplace scenarios and documentation",
      ["Scenario: a teammate cites extended coverage in a meeting, but details in the packet do not match the textbook example. Warranty rules affect what shops can charge and how claims are filed. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Diagnostic trouble codes point to systems, not always root parts.","Good documentation states facts, cites the framework, and records the decision. Parts markup and labor guides interact with customer approvals. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Safety recalls must be tracked even when unrelated to current visit. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Service advisors translate technical findings into buyer decisions."]
      }
    ),
    section(
      "extended-warranty-s4",
      "2.4 Extended Coverage — Common mistakes and how to avoid them",
      ["Common mistakes around extended coverage include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Diagnostic trouble codes point to systems, not always root parts.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Parts markup and labor guides interact with customer approvals. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Safety recalls must be tracked even when unrelated to current visit. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Upsells fail when trust is low; education-based recommendations perform better. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts."]
      }
    ),
    section(
      "extended-warranty-s5",
      "2.5 Extended Coverage — Putting the chapter together",
      ["This chapter’s through-line is simple: Extended Coverage connects principles to accountable action. Parts markup and labor guides interact with customer approvals.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Safety recalls must be tracked even when unrelated to current visit. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits extended coverage in your field. Upsells fail when trust is low; education-based recommendations perform better. Fluid types are not interchangeable—transmission, coolant, and brake specs differ."], {
        bulletPoints: ["Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ."]
      }
    )
    ],
    {
      learningObjectives: ["Define extended coverage and explain why it matters in Warranty Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Extended Coverage connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Parts markup and labor guides interact with customer approvals.","Diagnostic trouble codes point to systems, not always root parts.","Safety recalls must be tracked even when unrelated to current visit.","Parts markup and labor guides interact with customer approvals.","Diagnostic trouble codes point to systems, not always root parts."],
      realWorldRelevance: "Strong grasp of extended coverage reduces rework, supports defensible records, and speeds collaboration across Warranty Basics.",
    }
  ),
  chapter(
    "claims-warranty",
    3,
    "Warranty Claims",
    [
    section(
      "claims-warranty-s1",
      "3.1 Warranty Claims — Foundations and vocabulary",
      ["Warranty Claims is a foundation in Warranty Basics because torque specs and sequence matter on brakes, wheels, and heads. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Warranty rules affect what shops can charge and how claims are filed. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain warranty claims aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat warranty claims as a shared model for decisions. EV service requires high-voltage training and insulated tooling. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Service advisors translate technical findings into buyer decisions.","Torque specs and sequence matter on brakes, wheels, and heads."],
        citations: [{"source":"NHTSA","url":"https://www.nhtsa.gov/","note":"Vehicle safety and consumer information"}]
      }
    ),
    section(
      "claims-warranty-s2",
      "3.2 Warranty Claims — How professionals apply this in practice",
      ["Professionals rarely dispute whether warranty claims exists—they dispute how service advisors translate technical findings into buyer decisions. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Torque specs and sequence matter on brakes, wheels, and heads.","When stakes rise, pause for a second opinion or formal review. Warranty rules affect what shops can charge and how claims are filed. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. EV service requires high-voltage training and insulated tooling. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Service advisors translate technical findings into buyer decisions.","Torque specs and sequence matter on brakes, wheels, and heads.","Warranty rules affect what shops can charge and how claims are filed."]
      }
    ),
    section(
      "claims-warranty-s3",
      "3.3 Warranty Claims — Workplace scenarios and documentation",
      ["Scenario: a teammate cites warranty claims in a meeting, but details in the packet do not match the textbook example. Repair orders document customer concern, inspection, authorization, and parts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Service advisors translate technical findings into buyer decisions.","Good documentation states facts, cites the framework, and records the decision. Torque specs and sequence matter on brakes, wheels, and heads. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Warranty rules affect what shops can charge and how claims are filed. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Service advisors translate technical findings into buyer decisions."]
      }
    ),
    section(
      "claims-warranty-s4",
      "3.4 Warranty Claims — Common mistakes and how to avoid them",
      ["Common mistakes around warranty claims include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Repair orders document customer concern, inspection, authorization, and parts. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Service advisors translate technical findings into buyer decisions. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Torque specs and sequence matter on brakes, wheels, and heads. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Service advisors translate technical findings into buyer decisions.","Torque specs and sequence matter on brakes, wheels, and heads."]
      }
    ),
    section(
      "claims-warranty-s5",
      "3.5 Warranty Claims — Putting the chapter together",
      ["This chapter’s through-line is simple: Warranty Claims connects principles to accountable action. Upsells fail when trust is low; education-based recommendations perform better.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Fluid types are not interchangeable—transmission, coolant, and brake specs differ. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits warranty claims in your field. Repair orders document customer concern, inspection, authorization, and parts. Service advisors translate technical findings into buyer decisions."], {
        bulletPoints: ["Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Service advisors translate technical findings into buyer decisions.","Torque specs and sequence matter on brakes, wheels, and heads.","Warranty rules affect what shops can charge and how claims are filed."]
      }
    )
    ],
    {
      learningObjectives: ["Define warranty claims and explain why it matters in Warranty Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Warranty Claims connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ."],
      realWorldRelevance: "Strong grasp of warranty claims reduces rework, supports defensible records, and speeds collaboration across Warranty Basics.",
    }
  ),
  chapter(
    "documentation-warranty",
    4,
    "Documentation",
    [
    section(
      "documentation-warranty-s1",
      "4.1 Documentation — Foundations and vocabulary",
      ["Documentation is a foundation in Warranty Basics because comebacks destroy gross profit and reputation simultaneously. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Warranty rules affect what shops can charge and how claims are filed. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain documentation aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat documentation as a shared model for decisions. Diagnostic trouble codes point to systems, not always root parts. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Comebacks destroy gross profit and reputation simultaneously.","Warranty rules affect what shops can charge and how claims are filed.","Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit."],
        citations: [{"source":"NHTSA","url":"https://www.nhtsa.gov/","note":"Vehicle safety and consumer information"}]
      }
    ),
    section(
      "documentation-warranty-s2",
      "4.2 Documentation — How professionals apply this in practice",
      ["Professionals rarely dispute whether documentation exists—they dispute how warranty rules affect what shops can charge and how claims are filed. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Diagnostic trouble codes point to systems, not always root parts.","When stakes rise, pause for a second opinion or formal review. Parts markup and labor guides interact with customer approvals. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Safety recalls must be tracked even when unrelated to current visit. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Warranty rules affect what shops can charge and how claims are filed.","Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better."]
      }
    ),
    section(
      "documentation-warranty-s3",
      "4.3 Documentation — Workplace scenarios and documentation",
      ["Scenario: a teammate cites documentation in a meeting, but details in the packet do not match the textbook example. Diagnostic trouble codes point to systems, not always root parts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Parts markup and labor guides interact with customer approvals.","Good documentation states facts, cites the framework, and records the decision. Safety recalls must be tracked even when unrelated to current visit. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Upsells fail when trust is low; education-based recommendations perform better. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Maintenance menus schedule by time and mileage, not only failure.","Comebacks destroy gross profit and reputation simultaneously.","Warranty rules affect what shops can charge and how claims are filed.","Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals."]
      }
    ),
    section(
      "documentation-warranty-s4",
      "4.4 Documentation — Common mistakes and how to avoid them",
      ["Common mistakes around documentation include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Parts markup and labor guides interact with customer approvals.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Safety recalls must be tracked even when unrelated to current visit. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Upsells fail when trust is low; education-based recommendations perform better. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Fluid types are not interchangeable—transmission, coolant, and brake specs differ. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Comebacks destroy gross profit and reputation simultaneously.","Warranty rules affect what shops can charge and how claims are filed.","Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit."]
      }
    ),
    section(
      "documentation-warranty-s5",
      "4.5 Documentation — Putting the chapter together",
      ["This chapter’s through-line is simple: Documentation connects principles to accountable action. Safety recalls must be tracked even when unrelated to current visit.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Upsells fail when trust is low; education-based recommendations perform better. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits documentation in your field. Fluid types are not interchangeable—transmission, coolant, and brake specs differ. Repair orders document customer concern, inspection, authorization, and parts."], {
        bulletPoints: ["Warranty rules affect what shops can charge and how claims are filed.","Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better."]
      }
    )
    ],
    {
      learningObjectives: ["Define documentation and explain why it matters in Warranty Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Documentation connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Comebacks destroy gross profit and reputation simultaneously.","Warranty rules affect what shops can charge and how claims are filed.","Maintenance menus schedule by time and mileage, not only failure.","Comebacks destroy gross profit and reputation simultaneously.","Warranty rules affect what shops can charge and how claims are filed."],
      realWorldRelevance: "Strong grasp of documentation reduces rework, supports defensible records, and speeds collaboration across Warranty Basics.",
    }
  ),
  chapter(
    "denials",
    5,
    "Denials and Appeals",
    [
    section(
      "denials-s1",
      "5.1 Denials and Appeals — Foundations and vocabulary",
      ["Denials and Appeals is a foundation in Warranty Basics because repair orders document customer concern, inspection, authorization, and parts. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Service advisors translate technical findings into buyer decisions. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain denials and appeals aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat denials and appeals as a shared model for decisions. Torque specs and sequence matter on brakes, wheels, and heads. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Service advisors translate technical findings into buyer decisions.","Torque specs and sequence matter on brakes, wheels, and heads."],
        citations: [{"source":"NHTSA","url":"https://www.nhtsa.gov/","note":"Vehicle safety and consumer information"}]
      }
    ),
    section(
      "denials-s2",
      "5.2 Denials and Appeals — How professionals apply this in practice",
      ["Professionals rarely dispute whether denials and appeals exists—they dispute how service advisors translate technical findings into buyer decisions. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Torque specs and sequence matter on brakes, wheels, and heads.","When stakes rise, pause for a second opinion or formal review. EV service requires high-voltage training and insulated tooling. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Maintenance menus schedule by time and mileage, not only failure. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Service advisors translate technical findings into buyer decisions.","Torque specs and sequence matter on brakes, wheels, and heads.","EV service requires high-voltage training and insulated tooling."]
      }
    ),
    section(
      "denials-s3",
      "5.3 Denials and Appeals — Workplace scenarios and documentation",
      ["Scenario: a teammate cites denials and appeals in a meeting, but details in the packet do not match the textbook example. Torque specs and sequence matter on brakes, wheels, and heads. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. EV service requires high-voltage training and insulated tooling.","Good documentation states facts, cites the framework, and records the decision. Maintenance menus schedule by time and mileage, not only failure. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Comebacks destroy gross profit and reputation simultaneously. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Service advisors translate technical findings into buyer decisions."]
      }
    ),
    section(
      "denials-s4",
      "5.4 Denials and Appeals — Common mistakes and how to avoid them",
      ["Common mistakes around denials and appeals include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. EV service requires high-voltage training and insulated tooling.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Maintenance menus schedule by time and mileage, not only failure. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Comebacks destroy gross profit and reputation simultaneously. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Warranty rules affect what shops can charge and how claims are filed. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Service advisors translate technical findings into buyer decisions.","Torque specs and sequence matter on brakes, wheels, and heads."]
      }
    ),
    section(
      "denials-s5",
      "5.5 Denials and Appeals — Putting the chapter together",
      ["This chapter’s through-line is simple: Denials and Appeals connects principles to accountable action. Maintenance menus schedule by time and mileage, not only failure.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Comebacks destroy gross profit and reputation simultaneously. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits denials and appeals in your field. Warranty rules affect what shops can charge and how claims are filed. Diagnostic trouble codes point to systems, not always root parts."], {
        bulletPoints: ["Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Service advisors translate technical findings into buyer decisions.","Torque specs and sequence matter on brakes, wheels, and heads.","EV service requires high-voltage training and insulated tooling."]
      }
    )
    ],
    {
      learningObjectives: ["Define denials and appeals and explain why it matters in Warranty Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Denials and Appeals connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ."],
      realWorldRelevance: "Strong grasp of denials and appeals reduces rework, supports defensible records, and speeds collaboration across Warranty Basics.",
    }
  ),
  chapter(
    "goodwill",
    6,
    "Goodwill Repairs",
    [
    section(
      "goodwill-s1",
      "6.1 Goodwill Repairs — Foundations and vocabulary",
      ["Goodwill Repairs is a foundation in Warranty Basics because torque specs and sequence matter on brakes, wheels, and heads. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: EV service requires high-voltage training and insulated tooling. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain goodwill repairs aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat goodwill repairs as a shared model for decisions. Maintenance menus schedule by time and mileage, not only failure. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Warranty rules affect what shops can charge and how claims are filed.","Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better."],
        citations: [{"source":"NHTSA","url":"https://www.nhtsa.gov/","note":"Vehicle safety and consumer information"}]
      }
    ),
    section(
      "goodwill-s2",
      "6.2 Goodwill Repairs — How professionals apply this in practice",
      ["Professionals rarely dispute whether goodwill repairs exists—they dispute how eV service requires high-voltage training and insulated tooling. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Maintenance menus schedule by time and mileage, not only failure.","When stakes rise, pause for a second opinion or formal review. Comebacks destroy gross profit and reputation simultaneously. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Warranty rules affect what shops can charge and how claims are filed. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Comebacks destroy gross profit and reputation simultaneously.","Warranty rules affect what shops can charge and how claims are filed.","Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit."]
      }
    ),
    section(
      "goodwill-s3",
      "6.3 Goodwill Repairs — Workplace scenarios and documentation",
      ["Scenario: a teammate cites goodwill repairs in a meeting, but details in the packet do not match the textbook example. Maintenance menus schedule by time and mileage, not only failure. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Comebacks destroy gross profit and reputation simultaneously.","Good documentation states facts, cites the framework, and records the decision. Warranty rules affect what shops can charge and how claims are filed. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Diagnostic trouble codes point to systems, not always root parts. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ."]
      }
    ),
    section(
      "goodwill-s4",
      "6.4 Goodwill Repairs — Common mistakes and how to avoid them",
      ["Common mistakes around goodwill repairs include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Comebacks destroy gross profit and reputation simultaneously.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Warranty rules affect what shops can charge and how claims are filed. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Diagnostic trouble codes point to systems, not always root parts. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Parts markup and labor guides interact with customer approvals. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Warranty rules affect what shops can charge and how claims are filed.","Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better."]
      }
    ),
    section(
      "goodwill-s5",
      "6.5 Goodwill Repairs — Putting the chapter together",
      ["This chapter’s through-line is simple: Goodwill Repairs connects principles to accountable action. Warranty rules affect what shops can charge and how claims are filed.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Diagnostic trouble codes point to systems, not always root parts. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits goodwill repairs in your field. Parts markup and labor guides interact with customer approvals. Safety recalls must be tracked even when unrelated to current visit."], {
        bulletPoints: ["Comebacks destroy gross profit and reputation simultaneously.","Warranty rules affect what shops can charge and how claims are filed.","Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit."]
      }
    )
    ],
    {
      learningObjectives: ["Define goodwill repairs and explain why it matters in Warranty Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Goodwill Repairs connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Warranty rules affect what shops can charge and how claims are filed.","Comebacks destroy gross profit and reputation simultaneously.","Diagnostic trouble codes point to systems, not always root parts.","Warranty rules affect what shops can charge and how claims are filed.","Comebacks destroy gross profit and reputation simultaneously."],
      realWorldRelevance: "Strong grasp of goodwill repairs reduces rework, supports defensible records, and speeds collaboration across Warranty Basics.",
    }
  ),
  chapter(
    "parts-warranty",
    7,
    "Parts Warranty",
    [
    section(
      "parts-warranty-s1",
      "7.1 Parts Warranty — Foundations and vocabulary",
      ["Parts Warranty is a foundation in Warranty Basics because warranty rules affect what shops can charge and how claims are filed. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Diagnostic trouble codes point to systems, not always root parts. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain parts warranty aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat parts warranty as a shared model for decisions. Parts markup and labor guides interact with customer approvals. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["EV service requires high-voltage training and insulated tooling.","Maintenance menus schedule by time and mileage, not only failure.","Comebacks destroy gross profit and reputation simultaneously.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better."],
        citations: [{"source":"NHTSA","url":"https://www.nhtsa.gov/","note":"Vehicle safety and consumer information"}]
      }
    ),
    section(
      "parts-warranty-s2",
      "7.2 Parts Warranty — How professionals apply this in practice",
      ["Professionals rarely dispute whether parts warranty exists—they dispute how diagnostic trouble codes point to systems, not always root parts. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Parts markup and labor guides interact with customer approvals.","When stakes rise, pause for a second opinion or formal review. Repair orders document customer concern, inspection, authorization, and parts. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Warranty rules affect what shops can charge and how claims are filed. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Maintenance menus schedule by time and mileage, not only failure.","Comebacks destroy gross profit and reputation simultaneously.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ."]
      }
    ),
    section(
      "parts-warranty-s3",
      "7.3 Parts Warranty — Workplace scenarios and documentation",
      ["Scenario: a teammate cites parts warranty in a meeting, but details in the packet do not match the textbook example. Parts markup and labor guides interact with customer approvals. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Repair orders document customer concern, inspection, authorization, and parts.","Good documentation states facts, cites the framework, and records the decision. Warranty rules affect what shops can charge and how claims are filed. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Diagnostic trouble codes point to systems, not always root parts. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Repair orders document customer concern, inspection, authorization, and parts.","EV service requires high-voltage training and insulated tooling.","Maintenance menus schedule by time and mileage, not only failure.","Comebacks destroy gross profit and reputation simultaneously.","Safety recalls must be tracked even when unrelated to current visit."]
      }
    ),
    section(
      "parts-warranty-s4",
      "7.4 Parts Warranty — Common mistakes and how to avoid them",
      ["Common mistakes around parts warranty include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Repair orders document customer concern, inspection, authorization, and parts.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Warranty rules affect what shops can charge and how claims are filed. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Diagnostic trouble codes point to systems, not always root parts. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Parts markup and labor guides interact with customer approvals. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["EV service requires high-voltage training and insulated tooling.","Maintenance menus schedule by time and mileage, not only failure.","Comebacks destroy gross profit and reputation simultaneously.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better."]
      }
    ),
    section(
      "parts-warranty-s5",
      "7.5 Parts Warranty — Putting the chapter together",
      ["This chapter’s through-line is simple: Parts Warranty connects principles to accountable action. Warranty rules affect what shops can charge and how claims are filed.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Diagnostic trouble codes point to systems, not always root parts. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits parts warranty in your field. Parts markup and labor guides interact with customer approvals. Repair orders document customer concern, inspection, authorization, and parts."], {
        bulletPoints: ["Maintenance menus schedule by time and mileage, not only failure.","Comebacks destroy gross profit and reputation simultaneously.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ."]
      }
    )
    ],
    {
      learningObjectives: ["Define parts warranty and explain why it matters in Warranty Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Parts Warranty connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["EV service requires high-voltage training and insulated tooling.","Maintenance menus schedule by time and mileage, not only failure.","Repair orders document customer concern, inspection, authorization, and parts.","EV service requires high-voltage training and insulated tooling.","Maintenance menus schedule by time and mileage, not only failure."],
      realWorldRelevance: "Strong grasp of parts warranty reduces rework, supports defensible records, and speeds collaboration across Warranty Basics.",
    }
  ),
  chapter(
    "customer-warranty",
    8,
    "Explaining Coverage",
    [
    section(
      "customer-warranty-s1",
      "8.1 Explaining Coverage — Foundations and vocabulary",
      ["Explaining Coverage is a foundation in Warranty Basics because torque specs and sequence matter on brakes, wheels, and heads. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: EV service requires high-voltage training and insulated tooling. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain explaining coverage aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat explaining coverage as a shared model for decisions. Maintenance menus schedule by time and mileage, not only failure. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Warranty rules affect what shops can charge and how claims are filed.","Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better."],
        citations: [{"source":"NHTSA","url":"https://www.nhtsa.gov/","note":"Vehicle safety and consumer information"}]
      }
    ),
    section(
      "customer-warranty-s2",
      "8.2 Explaining Coverage — How professionals apply this in practice",
      ["Professionals rarely dispute whether explaining coverage exists—they dispute how eV service requires high-voltage training and insulated tooling. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Maintenance menus schedule by time and mileage, not only failure.","When stakes rise, pause for a second opinion or formal review. Comebacks destroy gross profit and reputation simultaneously. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Warranty rules affect what shops can charge and how claims are filed. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Comebacks destroy gross profit and reputation simultaneously.","Warranty rules affect what shops can charge and how claims are filed.","Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit."]
      }
    ),
    section(
      "customer-warranty-s3",
      "8.3 Explaining Coverage — Workplace scenarios and documentation",
      ["Scenario: a teammate cites explaining coverage in a meeting, but details in the packet do not match the textbook example. Maintenance menus schedule by time and mileage, not only failure. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Comebacks destroy gross profit and reputation simultaneously.","Good documentation states facts, cites the framework, and records the decision. Warranty rules affect what shops can charge and how claims are filed. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Diagnostic trouble codes point to systems, not always root parts. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ."]
      }
    ),
    section(
      "customer-warranty-s4",
      "8.4 Explaining Coverage — Common mistakes and how to avoid them",
      ["Common mistakes around explaining coverage include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Comebacks destroy gross profit and reputation simultaneously.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Warranty rules affect what shops can charge and how claims are filed. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Diagnostic trouble codes point to systems, not always root parts. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Parts markup and labor guides interact with customer approvals. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Warranty rules affect what shops can charge and how claims are filed.","Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better."]
      }
    ),
    section(
      "customer-warranty-s5",
      "8.5 Explaining Coverage — Putting the chapter together",
      ["This chapter’s through-line is simple: Explaining Coverage connects principles to accountable action. Warranty rules affect what shops can charge and how claims are filed.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Diagnostic trouble codes point to systems, not always root parts. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits explaining coverage in your field. Parts markup and labor guides interact with customer approvals. Safety recalls must be tracked even when unrelated to current visit."], {
        bulletPoints: ["Comebacks destroy gross profit and reputation simultaneously.","Warranty rules affect what shops can charge and how claims are filed.","Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit."]
      }
    )
    ],
    {
      learningObjectives: ["Define explaining coverage and explain why it matters in Warranty Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Explaining Coverage connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Warranty rules affect what shops can charge and how claims are filed.","Comebacks destroy gross profit and reputation simultaneously.","Diagnostic trouble codes point to systems, not always root parts.","Warranty rules affect what shops can charge and how claims are filed.","Comebacks destroy gross profit and reputation simultaneously."],
      realWorldRelevance: "Strong grasp of explaining coverage reduces rework, supports defensible records, and speeds collaboration across Warranty Basics.",
    }
  )
];
