import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const SVC_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Service Advising Fundamentals",
  subtitle: "ForgEd workforce textbook — Service Advising Fundamentals",
  paragraphs: [
    "This ForgEd digital textbook presents Service Advising Fundamentals at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const SVC_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "advisor-role",
    1,
    "The Service Advisor Role",
    [
    section(
      "advisor-role-s1",
      "1.1 The Service Advisor Role — Foundations and vocabulary",
      ["The Service Advisor Role is a foundation in Service Advising Fundamentals because warranty rules affect what shops can charge and how claims are filed. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Diagnostic trouble codes point to systems, not always root parts. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain the service advisor role aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat the service advisor role as a shared model for decisions. Parts markup and labor guides interact with customer approvals. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Torque specs and sequence matter on brakes, wheels, and heads.","Service advisors translate technical findings into buyer decisions."],
        citations: [{"source":"NHTSA","url":"https://www.nhtsa.gov/","note":"Vehicle safety and consumer information"}]
      }
    ),
    section(
      "advisor-role-s2",
      "1.2 The Service Advisor Role — How professionals apply this in practice",
      ["Professionals rarely dispute whether the service advisor role exists—they dispute how comebacks destroy gross profit and reputation simultaneously. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Warranty rules affect what shops can charge and how claims are filed.","When stakes rise, pause for a second opinion or formal review. Diagnostic trouble codes point to systems, not always root parts. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Parts markup and labor guides interact with customer approvals. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Torque specs and sequence matter on brakes, wheels, and heads.","Service advisors translate technical findings into buyer decisions.","EV service requires high-voltage training and insulated tooling."]
      }
    ),
    section(
      "advisor-role-s3",
      "1.3 The Service Advisor Role — Workplace scenarios and documentation",
      ["Scenario: a teammate cites the service advisor role in a meeting, but details in the packet do not match the textbook example. Maintenance menus schedule by time and mileage, not only failure. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Comebacks destroy gross profit and reputation simultaneously.","Good documentation states facts, cites the framework, and records the decision. Warranty rules affect what shops can charge and how claims are filed. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Diagnostic trouble codes point to systems, not always root parts. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Torque specs and sequence matter on brakes, wheels, and heads."]
      }
    ),
    section(
      "advisor-role-s4",
      "1.4 The Service Advisor Role — Common mistakes and how to avoid them",
      ["Common mistakes around the service advisor role include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. EV service requires high-voltage training and insulated tooling.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Maintenance menus schedule by time and mileage, not only failure. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Comebacks destroy gross profit and reputation simultaneously. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Warranty rules affect what shops can charge and how claims are filed. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Torque specs and sequence matter on brakes, wheels, and heads.","Service advisors translate technical findings into buyer decisions."]
      }
    ),
    section(
      "advisor-role-s5",
      "1.5 The Service Advisor Role — Putting the chapter together",
      ["This chapter’s through-line is simple: The Service Advisor Role connects principles to accountable action. Service advisors translate technical findings into buyer decisions.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. EV service requires high-voltage training and insulated tooling. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits the service advisor role in your field. Maintenance menus schedule by time and mileage, not only failure. Comebacks destroy gross profit and reputation simultaneously."], {
        bulletPoints: ["Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Torque specs and sequence matter on brakes, wheels, and heads.","Service advisors translate technical findings into buyer decisions.","EV service requires high-voltage training and insulated tooling."]
      }
    )
    ],
    {
      learningObjectives: ["Define the service advisor role and explain why it matters in Service Advising Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "The Service Advisor Role connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ."],
      realWorldRelevance: "Strong grasp of the service advisor role reduces rework, supports defensible records, and speeds collaboration across Service Advising Fundamentals.",
    }
  ),
  chapter(
    "shop-flow",
    2,
    "Shop Flow",
    [
    section(
      "shop-flow-s1",
      "2.1 Shop Flow — Foundations and vocabulary",
      ["Shop Flow is a foundation in Service Advising Fundamentals because diagnostic trouble codes point to systems, not always root parts. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Parts markup and labor guides interact with customer approvals. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain shop flow aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat shop flow as a shared model for decisions. Safety recalls must be tracked even when unrelated to current visit. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ."],
        citations: [{"source":"NHTSA","url":"https://www.nhtsa.gov/","note":"Vehicle safety and consumer information"}]
      }
    ),
    section(
      "shop-flow-s2",
      "2.2 Shop Flow — How professionals apply this in practice",
      ["Professionals rarely dispute whether shop flow exists—they dispute how comebacks destroy gross profit and reputation simultaneously. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Diagnostic trouble codes point to systems, not always root parts.","When stakes rise, pause for a second opinion or formal review. Parts markup and labor guides interact with customer approvals. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Safety recalls must be tracked even when unrelated to current visit. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Comebacks destroy gross profit and reputation simultaneously.","Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better."]
      }
    ),
    section(
      "shop-flow-s3",
      "2.3 Shop Flow — Workplace scenarios and documentation",
      ["Scenario: a teammate cites shop flow in a meeting, but details in the packet do not match the textbook example. Maintenance menus schedule by time and mileage, not only failure. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Comebacks destroy gross profit and reputation simultaneously.","Good documentation states facts, cites the framework, and records the decision. Diagnostic trouble codes point to systems, not always root parts. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Parts markup and labor guides interact with customer approvals. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts."]
      }
    ),
    section(
      "shop-flow-s4",
      "2.4 Shop Flow — Common mistakes and how to avoid them",
      ["Common mistakes around shop flow include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. EV service requires high-voltage training and insulated tooling.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Maintenance menus schedule by time and mileage, not only failure. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Comebacks destroy gross profit and reputation simultaneously. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Diagnostic trouble codes point to systems, not always root parts. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ."]
      }
    ),
    section(
      "shop-flow-s5",
      "2.5 Shop Flow — Putting the chapter together",
      ["This chapter’s through-line is simple: Shop Flow connects principles to accountable action. Warranty rules affect what shops can charge and how claims are filed.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. EV service requires high-voltage training and insulated tooling. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits shop flow in your field. Maintenance menus schedule by time and mileage, not only failure. Comebacks destroy gross profit and reputation simultaneously."], {
        bulletPoints: ["Comebacks destroy gross profit and reputation simultaneously.","Diagnostic trouble codes point to systems, not always root parts.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better."]
      }
    )
    ],
    {
      learningObjectives: ["Define shop flow and explain why it matters in Service Advising Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Shop Flow connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Diagnostic trouble codes point to systems, not always root parts.","Comebacks destroy gross profit and reputation simultaneously.","Parts markup and labor guides interact with customer approvals.","Diagnostic trouble codes point to systems, not always root parts.","Comebacks destroy gross profit and reputation simultaneously."],
      realWorldRelevance: "Strong grasp of shop flow reduces rework, supports defensible records, and speeds collaboration across Service Advising Fundamentals.",
    }
  ),
  chapter(
    "customer-expectations",
    3,
    "Customer Expectations",
    [
    section(
      "customer-expectations-s1",
      "3.1 Customer Expectations — Foundations and vocabulary",
      ["Customer Expectations is a foundation in Service Advising Fundamentals because torque specs and sequence matter on brakes, wheels, and heads. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Parts markup and labor guides interact with customer approvals. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain customer expectations aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat customer expectations as a shared model for decisions. Repair orders document customer concern, inspection, authorization, and parts. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Service advisors translate technical findings into buyer decisions.","Torque specs and sequence matter on brakes, wheels, and heads.","Parts markup and labor guides interact with customer approvals.","Repair orders document customer concern, inspection, authorization, and parts."],
        citations: [{"source":"NHTSA","url":"https://www.nhtsa.gov/","note":"Vehicle safety and consumer information"}]
      }
    ),
    section(
      "customer-expectations-s2",
      "3.2 Customer Expectations — How professionals apply this in practice",
      ["Professionals rarely dispute whether customer expectations exists—they dispute how parts markup and labor guides interact with customer approvals. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Repair orders document customer concern, inspection, authorization, and parts.","When stakes rise, pause for a second opinion or formal review. EV service requires high-voltage training and insulated tooling. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Maintenance menus schedule by time and mileage, not only failure. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Service advisors translate technical findings into buyer decisions.","Torque specs and sequence matter on brakes, wheels, and heads.","Parts markup and labor guides interact with customer approvals.","Repair orders document customer concern, inspection, authorization, and parts.","EV service requires high-voltage training and insulated tooling."]
      }
    ),
    section(
      "customer-expectations-s3",
      "3.3 Customer Expectations — Workplace scenarios and documentation",
      ["Scenario: a teammate cites customer expectations in a meeting, but details in the packet do not match the textbook example. Repair orders document customer concern, inspection, authorization, and parts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. EV service requires high-voltage training and insulated tooling.","Good documentation states facts, cites the framework, and records the decision. Maintenance menus schedule by time and mileage, not only failure. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Comebacks destroy gross profit and reputation simultaneously. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Service advisors translate technical findings into buyer decisions.","Torque specs and sequence matter on brakes, wheels, and heads.","Parts markup and labor guides interact with customer approvals."]
      }
    ),
    section(
      "customer-expectations-s4",
      "3.4 Customer Expectations — Common mistakes and how to avoid them",
      ["Common mistakes around customer expectations include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. EV service requires high-voltage training and insulated tooling.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Maintenance menus schedule by time and mileage, not only failure. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Comebacks destroy gross profit and reputation simultaneously. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Warranty rules affect what shops can charge and how claims are filed. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Service advisors translate technical findings into buyer decisions.","Torque specs and sequence matter on brakes, wheels, and heads.","Parts markup and labor guides interact with customer approvals.","Repair orders document customer concern, inspection, authorization, and parts."]
      }
    ),
    section(
      "customer-expectations-s5",
      "3.5 Customer Expectations — Putting the chapter together",
      ["This chapter’s through-line is simple: Customer Expectations connects principles to accountable action. Maintenance menus schedule by time and mileage, not only failure.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Comebacks destroy gross profit and reputation simultaneously. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits customer expectations in your field. Warranty rules affect what shops can charge and how claims are filed. Diagnostic trouble codes point to systems, not always root parts."], {
        bulletPoints: ["Service advisors translate technical findings into buyer decisions.","Torque specs and sequence matter on brakes, wheels, and heads.","Parts markup and labor guides interact with customer approvals.","Repair orders document customer concern, inspection, authorization, and parts.","EV service requires high-voltage training and insulated tooling."]
      }
    )
    ],
    {
      learningObjectives: ["Define customer expectations and explain why it matters in Service Advising Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Customer Expectations connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Service advisors translate technical findings into buyer decisions.","Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Service advisors translate technical findings into buyer decisions."],
      realWorldRelevance: "Strong grasp of customer expectations reduces rework, supports defensible records, and speeds collaboration across Service Advising Fundamentals.",
    }
  ),
  chapter(
    "multipoint",
    4,
    "Multi-Point Inspections",
    [
    section(
      "multipoint-s1",
      "4.1 Multi-Point Inspections — Foundations and vocabulary",
      ["Multi-Point Inspections is a foundation in Service Advising Fundamentals because EV service requires high-voltage training and insulated tooling. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Maintenance menus schedule by time and mileage, not only failure. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain multi-point inspections aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat multi-point inspections as a shared model for decisions. Comebacks destroy gross profit and reputation simultaneously. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["EV service requires high-voltage training and insulated tooling.","Maintenance menus schedule by time and mileage, not only failure.","Comebacks destroy gross profit and reputation simultaneously.","Warranty rules affect what shops can charge and how claims are filed.","Parts markup and labor guides interact with customer approvals."],
        citations: [{"source":"NHTSA","url":"https://www.nhtsa.gov/","note":"Vehicle safety and consumer information"}]
      }
    ),
    section(
      "multipoint-s2",
      "4.2 Multi-Point Inspections — How professionals apply this in practice",
      ["Professionals rarely dispute whether multi-point inspections exists—they dispute how maintenance menus schedule by time and mileage, not only failure. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Comebacks destroy gross profit and reputation simultaneously.","When stakes rise, pause for a second opinion or formal review. Warranty rules affect what shops can charge and how claims are filed. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Parts markup and labor guides interact with customer approvals. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Diagnostic trouble codes point to systems, not always root parts.","EV service requires high-voltage training and insulated tooling.","Maintenance menus schedule by time and mileage, not only failure.","Comebacks destroy gross profit and reputation simultaneously.","Warranty rules affect what shops can charge and how claims are filed."]
      }
    ),
    section(
      "multipoint-s3",
      "4.3 Multi-Point Inspections — Workplace scenarios and documentation",
      ["Scenario: a teammate cites multi-point inspections in a meeting, but details in the packet do not match the textbook example. Comebacks destroy gross profit and reputation simultaneously. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Warranty rules affect what shops can charge and how claims are filed.","Good documentation states facts, cites the framework, and records the decision. Parts markup and labor guides interact with customer approvals. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Safety recalls must be tracked even when unrelated to current visit. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Maintenance menus schedule by time and mileage, not only failure.","Comebacks destroy gross profit and reputation simultaneously.","Warranty rules affect what shops can charge and how claims are filed.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit."]
      }
    ),
    section(
      "multipoint-s4",
      "4.4 Multi-Point Inspections — Common mistakes and how to avoid them",
      ["Common mistakes around multi-point inspections include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Warranty rules affect what shops can charge and how claims are filed.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Parts markup and labor guides interact with customer approvals. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Safety recalls must be tracked even when unrelated to current visit. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Upsells fail when trust is low; education-based recommendations perform better. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["EV service requires high-voltage training and insulated tooling.","Maintenance menus schedule by time and mileage, not only failure.","Comebacks destroy gross profit and reputation simultaneously.","Warranty rules affect what shops can charge and how claims are filed.","Parts markup and labor guides interact with customer approvals."]
      }
    ),
    section(
      "multipoint-s5",
      "4.5 Multi-Point Inspections — Putting the chapter together",
      ["This chapter’s through-line is simple: Multi-Point Inspections connects principles to accountable action. Parts markup and labor guides interact with customer approvals.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Safety recalls must be tracked even when unrelated to current visit. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits multi-point inspections in your field. Upsells fail when trust is low; education-based recommendations perform better. Fluid types are not interchangeable—transmission, coolant, and brake specs differ."], {
        bulletPoints: ["Diagnostic trouble codes point to systems, not always root parts.","EV service requires high-voltage training and insulated tooling.","Maintenance menus schedule by time and mileage, not only failure.","Comebacks destroy gross profit and reputation simultaneously.","Warranty rules affect what shops can charge and how claims are filed."]
      }
    )
    ],
    {
      learningObjectives: ["Define multi-point inspections and explain why it matters in Service Advising Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Multi-Point Inspections connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["EV service requires high-voltage training and insulated tooling.","Diagnostic trouble codes point to systems, not always root parts.","Maintenance menus schedule by time and mileage, not only failure.","EV service requires high-voltage training and insulated tooling.","Diagnostic trouble codes point to systems, not always root parts."],
      realWorldRelevance: "Strong grasp of multi-point inspections reduces rework, supports defensible records, and speeds collaboration across Service Advising Fundamentals.",
    }
  ),
  chapter(
    "scheduling",
    5,
    "Scheduling",
    [
    section(
      "scheduling-s1",
      "5.1 Scheduling — Foundations and vocabulary",
      ["Scheduling is a foundation in Service Advising Fundamentals because diagnostic trouble codes point to systems, not always root parts. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Parts markup and labor guides interact with customer approvals. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain scheduling aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat scheduling as a shared model for decisions. Safety recalls must be tracked even when unrelated to current visit. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Service advisors translate technical findings into buyer decisions.","Torque specs and sequence matter on brakes, wheels, and heads.","EV service requires high-voltage training and insulated tooling."],
        citations: [{"source":"NHTSA","url":"https://www.nhtsa.gov/","note":"Vehicle safety and consumer information"}]
      }
    ),
    section(
      "scheduling-s2",
      "5.2 Scheduling — How professionals apply this in practice",
      ["Professionals rarely dispute whether scheduling exists—they dispute how warranty rules affect what shops can charge and how claims are filed. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Diagnostic trouble codes point to systems, not always root parts.","When stakes rise, pause for a second opinion or formal review. Parts markup and labor guides interact with customer approvals. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Safety recalls must be tracked even when unrelated to current visit. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Service advisors translate technical findings into buyer decisions.","Torque specs and sequence matter on brakes, wheels, and heads."]
      }
    ),
    section(
      "scheduling-s3",
      "5.3 Scheduling — Workplace scenarios and documentation",
      ["Scenario: a teammate cites scheduling in a meeting, but details in the packet do not match the textbook example. Comebacks destroy gross profit and reputation simultaneously. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Warranty rules affect what shops can charge and how claims are filed.","Good documentation states facts, cites the framework, and records the decision. Diagnostic trouble codes point to systems, not always root parts. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Parts markup and labor guides interact with customer approvals. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Repair orders document customer concern, inspection, authorization, and parts.","Service advisors translate technical findings into buyer decisions.","Torque specs and sequence matter on brakes, wheels, and heads.","EV service requires high-voltage training and insulated tooling.","Maintenance menus schedule by time and mileage, not only failure."]
      }
    ),
    section(
      "scheduling-s4",
      "5.4 Scheduling — Common mistakes and how to avoid them",
      ["Common mistakes around scheduling include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Maintenance menus schedule by time and mileage, not only failure.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Comebacks destroy gross profit and reputation simultaneously. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Warranty rules affect what shops can charge and how claims are filed. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Diagnostic trouble codes point to systems, not always root parts. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Service advisors translate technical findings into buyer decisions.","Torque specs and sequence matter on brakes, wheels, and heads.","EV service requires high-voltage training and insulated tooling."]
      }
    ),
    section(
      "scheduling-s5",
      "5.5 Scheduling — Putting the chapter together",
      ["This chapter’s through-line is simple: Scheduling connects principles to accountable action. EV service requires high-voltage training and insulated tooling.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Maintenance menus schedule by time and mileage, not only failure. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits scheduling in your field. Comebacks destroy gross profit and reputation simultaneously. Warranty rules affect what shops can charge and how claims are filed."], {
        bulletPoints: ["Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Service advisors translate technical findings into buyer decisions.","Torque specs and sequence matter on brakes, wheels, and heads."]
      }
    )
    ],
    {
      learningObjectives: ["Define scheduling and explain why it matters in Service Advising Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Scheduling connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Upsells fail when trust is low; education-based recommendations perform better.","Repair orders document customer concern, inspection, authorization, and parts.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Upsells fail when trust is low; education-based recommendations perform better."],
      realWorldRelevance: "Strong grasp of scheduling reduces rework, supports defensible records, and speeds collaboration across Service Advising Fundamentals.",
    }
  ),
  chapter(
    "parts-basics",
    6,
    "Parts Coordination",
    [
    section(
      "parts-basics-s1",
      "6.1 Parts Coordination — Foundations and vocabulary",
      ["Parts Coordination is a foundation in Service Advising Fundamentals because parts markup and labor guides interact with customer approvals. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Repair orders document customer concern, inspection, authorization, and parts. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain parts coordination aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat parts coordination as a shared model for decisions. EV service requires high-voltage training and insulated tooling. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["EV service requires high-voltage training and insulated tooling.","Maintenance menus schedule by time and mileage, not only failure.","Comebacks destroy gross profit and reputation simultaneously.","Warranty rules affect what shops can charge and how claims are filed.","Safety recalls must be tracked even when unrelated to current visit."],
        citations: [{"source":"NHTSA","url":"https://www.nhtsa.gov/","note":"Vehicle safety and consumer information"}]
      }
    ),
    section(
      "parts-basics-s2",
      "6.2 Parts Coordination — How professionals apply this in practice",
      ["Professionals rarely dispute whether parts coordination exists—they dispute how repair orders document customer concern, inspection, authorization, and parts. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. EV service requires high-voltage training and insulated tooling.","When stakes rise, pause for a second opinion or formal review. Maintenance menus schedule by time and mileage, not only failure. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Comebacks destroy gross profit and reputation simultaneously. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Maintenance menus schedule by time and mileage, not only failure.","Comebacks destroy gross profit and reputation simultaneously.","Warranty rules affect what shops can charge and how claims are filed.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better."]
      }
    ),
    section(
      "parts-basics-s3",
      "6.3 Parts Coordination — Workplace scenarios and documentation",
      ["Scenario: a teammate cites parts coordination in a meeting, but details in the packet do not match the textbook example. EV service requires high-voltage training and insulated tooling. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Maintenance menus schedule by time and mileage, not only failure.","Good documentation states facts, cites the framework, and records the decision. Comebacks destroy gross profit and reputation simultaneously. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Warranty rules affect what shops can charge and how claims are filed. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Repair orders document customer concern, inspection, authorization, and parts.","EV service requires high-voltage training and insulated tooling.","Maintenance menus schedule by time and mileage, not only failure.","Comebacks destroy gross profit and reputation simultaneously.","Warranty rules affect what shops can charge and how claims are filed."]
      }
    ),
    section(
      "parts-basics-s4",
      "6.4 Parts Coordination — Common mistakes and how to avoid them",
      ["Common mistakes around parts coordination include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Maintenance menus schedule by time and mileage, not only failure.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Comebacks destroy gross profit and reputation simultaneously. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Warranty rules affect what shops can charge and how claims are filed. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Safety recalls must be tracked even when unrelated to current visit. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["EV service requires high-voltage training and insulated tooling.","Maintenance menus schedule by time and mileage, not only failure.","Comebacks destroy gross profit and reputation simultaneously.","Warranty rules affect what shops can charge and how claims are filed.","Safety recalls must be tracked even when unrelated to current visit."]
      }
    ),
    section(
      "parts-basics-s5",
      "6.5 Parts Coordination — Putting the chapter together",
      ["This chapter’s through-line is simple: Parts Coordination connects principles to accountable action. Comebacks destroy gross profit and reputation simultaneously.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Warranty rules affect what shops can charge and how claims are filed. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits parts coordination in your field. Safety recalls must be tracked even when unrelated to current visit. Upsells fail when trust is low; education-based recommendations perform better."], {
        bulletPoints: ["Maintenance menus schedule by time and mileage, not only failure.","Comebacks destroy gross profit and reputation simultaneously.","Warranty rules affect what shops can charge and how claims are filed.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better."]
      }
    )
    ],
    {
      learningObjectives: ["Define parts coordination and explain why it matters in Service Advising Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Parts Coordination connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["EV service requires high-voltage training and insulated tooling.","Maintenance menus schedule by time and mileage, not only failure.","Repair orders document customer concern, inspection, authorization, and parts.","EV service requires high-voltage training and insulated tooling.","Maintenance menus schedule by time and mileage, not only failure."],
      realWorldRelevance: "Strong grasp of parts coordination reduces rework, supports defensible records, and speeds collaboration across Service Advising Fundamentals.",
    }
  ),
  chapter(
    "technician-handoff",
    7,
    "Technician Handoff",
    [
    section(
      "technician-handoff-s1",
      "7.1 Technician Handoff — Foundations and vocabulary",
      ["Technician Handoff is a foundation in Service Advising Fundamentals because EV service requires high-voltage training and insulated tooling. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Maintenance menus schedule by time and mileage, not only failure. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain technician handoff aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat technician handoff as a shared model for decisions. Comebacks destroy gross profit and reputation simultaneously. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Service advisors translate technical findings into buyer decisions.","Torque specs and sequence matter on brakes, wheels, and heads.","EV service requires high-voltage training and insulated tooling."],
        citations: [{"source":"NHTSA","url":"https://www.nhtsa.gov/","note":"Vehicle safety and consumer information"}]
      }
    ),
    section(
      "technician-handoff-s2",
      "7.2 Technician Handoff — How professionals apply this in practice",
      ["Professionals rarely dispute whether technician handoff exists—they dispute how torque specs and sequence matter on brakes, wheels, and heads. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. EV service requires high-voltage training and insulated tooling.","When stakes rise, pause for a second opinion or formal review. Maintenance menus schedule by time and mileage, not only failure. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Comebacks destroy gross profit and reputation simultaneously. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Repair orders document customer concern, inspection, authorization, and parts.","Service advisors translate technical findings into buyer decisions.","Torque specs and sequence matter on brakes, wheels, and heads.","EV service requires high-voltage training and insulated tooling.","Maintenance menus schedule by time and mileage, not only failure."]
      }
    ),
    section(
      "technician-handoff-s3",
      "7.3 Technician Handoff — Workplace scenarios and documentation",
      ["Scenario: a teammate cites technician handoff in a meeting, but details in the packet do not match the textbook example. Service advisors translate technical findings into buyer decisions. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Torque specs and sequence matter on brakes, wheels, and heads.","Good documentation states facts, cites the framework, and records the decision. EV service requires high-voltage training and insulated tooling. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Maintenance menus schedule by time and mileage, not only failure. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Service advisors translate technical findings into buyer decisions.","Torque specs and sequence matter on brakes, wheels, and heads."]
      }
    ),
    section(
      "technician-handoff-s4",
      "7.4 Technician Handoff — Common mistakes and how to avoid them",
      ["Common mistakes around technician handoff include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Repair orders document customer concern, inspection, authorization, and parts.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Service advisors translate technical findings into buyer decisions. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Torque specs and sequence matter on brakes, wheels, and heads. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. EV service requires high-voltage training and insulated tooling. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Service advisors translate technical findings into buyer decisions.","Torque specs and sequence matter on brakes, wheels, and heads.","EV service requires high-voltage training and insulated tooling."]
      }
    ),
    section(
      "technician-handoff-s5",
      "7.5 Technician Handoff — Putting the chapter together",
      ["This chapter’s through-line is simple: Technician Handoff connects principles to accountable action. Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Repair orders document customer concern, inspection, authorization, and parts. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits technician handoff in your field. Service advisors translate technical findings into buyer decisions. Torque specs and sequence matter on brakes, wheels, and heads."], {
        bulletPoints: ["Repair orders document customer concern, inspection, authorization, and parts.","Service advisors translate technical findings into buyer decisions.","Torque specs and sequence matter on brakes, wheels, and heads.","EV service requires high-voltage training and insulated tooling.","Maintenance menus schedule by time and mileage, not only failure."]
      }
    )
    ],
    {
      learningObjectives: ["Define technician handoff and explain why it matters in Service Advising Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Technician Handoff connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts."],
      realWorldRelevance: "Strong grasp of technician handoff reduces rework, supports defensible records, and speeds collaboration across Service Advising Fundamentals.",
    }
  ),
  chapter(
    "advisor-metrics",
    8,
    "Advisor Metrics",
    [
    section(
      "advisor-metrics-s1",
      "8.1 Advisor Metrics — Foundations and vocabulary",
      ["Advisor Metrics is a foundation in Service Advising Fundamentals because diagnostic trouble codes point to systems, not always root parts. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Parts markup and labor guides interact with customer approvals. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain advisor metrics aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat advisor metrics as a shared model for decisions. Safety recalls must be tracked even when unrelated to current visit. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Torque specs and sequence matter on brakes, wheels, and heads."],
        citations: [{"source":"NHTSA","url":"https://www.nhtsa.gov/","note":"Vehicle safety and consumer information"}]
      }
    ),
    section(
      "advisor-metrics-s2",
      "8.2 Advisor Metrics — How professionals apply this in practice",
      ["Professionals rarely dispute whether advisor metrics exists—they dispute how parts markup and labor guides interact with customer approvals. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Safety recalls must be tracked even when unrelated to current visit.","When stakes rise, pause for a second opinion or formal review. Upsells fail when trust is low; education-based recommendations perform better. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Fluid types are not interchangeable—transmission, coolant, and brake specs differ. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Torque specs and sequence matter on brakes, wheels, and heads.","Service advisors translate technical findings into buyer decisions."]
      }
    ),
    section(
      "advisor-metrics-s3",
      "8.3 Advisor Metrics — Workplace scenarios and documentation",
      ["Scenario: a teammate cites advisor metrics in a meeting, but details in the packet do not match the textbook example. Safety recalls must be tracked even when unrelated to current visit. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Upsells fail when trust is low; education-based recommendations perform better.","Good documentation states facts, cites the framework, and records the decision. Fluid types are not interchangeable—transmission, coolant, and brake specs differ. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Repair orders document customer concern, inspection, authorization, and parts. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts."]
      }
    ),
    section(
      "advisor-metrics-s4",
      "8.4 Advisor Metrics — Common mistakes and how to avoid them",
      ["Common mistakes around advisor metrics include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Upsells fail when trust is low; education-based recommendations perform better.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Fluid types are not interchangeable—transmission, coolant, and brake specs differ. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Repair orders document customer concern, inspection, authorization, and parts. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Torque specs and sequence matter on brakes, wheels, and heads. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Torque specs and sequence matter on brakes, wheels, and heads."]
      }
    ),
    section(
      "advisor-metrics-s5",
      "8.5 Advisor Metrics — Putting the chapter together",
      ["This chapter’s through-line is simple: Advisor Metrics connects principles to accountable action. Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Repair orders document customer concern, inspection, authorization, and parts. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits advisor metrics in your field. Torque specs and sequence matter on brakes, wheels, and heads. Service advisors translate technical findings into buyer decisions."], {
        bulletPoints: ["Upsells fail when trust is low; education-based recommendations perform better.","Fluid types are not interchangeable—transmission, coolant, and brake specs differ.","Repair orders document customer concern, inspection, authorization, and parts.","Torque specs and sequence matter on brakes, wheels, and heads.","Service advisors translate technical findings into buyer decisions."]
      }
    )
    ],
    {
      learningObjectives: ["Define advisor metrics and explain why it matters in Service Advising Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Advisor Metrics connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better.","Parts markup and labor guides interact with customer approvals.","Safety recalls must be tracked even when unrelated to current visit.","Upsells fail when trust is low; education-based recommendations perform better."],
      realWorldRelevance: "Strong grasp of advisor metrics reduces rework, supports defensible records, and speeds collaboration across Service Advising Fundamentals.",
    }
  )
];
