import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const EE_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Electrical Engineering Basics",
  subtitle: "ForgEd deep-dive — electrical engineering basics",
  paragraphs: [
    "This ForgEd digital textbook presents Electrical Engineering Basics at academic survey depth — cited frameworks, rigorous prose, and chapter learning objectives. 15 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Material is engineering literacy, not a PE stamp or design approval.",
  ],
};

export const EE_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "ee-intro",
    1,
    "Introduction to Electrical Engineering",
    [
    section(
      "ee-intro-s1",
      "1.1 Introduction to Electrical Engineering — Foundations and vocabulary",
      ["Introduction to Electrical Engineering is a foundation in Electrical Engineering Basics because energy conversion always pays thermodynamic efficiency limits. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Material properties like yield strength and fatigue limit drive design margins. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain introduction to electrical engineering aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat introduction to electrical engineering as a shared model for decisions. Tolerances and fits determine whether assemblies function or bind. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "ee-intro-s2",
      "1.2 Introduction to Electrical Engineering — How professionals apply this in practice",
      ["Professionals rarely dispute whether introduction to electrical engineering exists—they dispute how sustainability metrics increasingly constrain material and energy choices. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Energy conversion always pays thermodynamic efficiency limits.","When stakes rise, pause for a second opinion or formal review. Material properties like yield strength and fatigue limit drive design margins. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Tolerances and fits determine whether assemblies function or bind. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously."]
      }
    ),
    section(
      "ee-intro-s3",
      "1.3 Introduction to Electrical Engineering — Workplace scenarios and documentation",
      ["Scenario: a teammate cites introduction to electrical engineering in a meeting, but details in the packet do not match the textbook example. Professional engineers stamp work they are willing to defend publicly. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Sustainability metrics increasingly constrain material and energy choices.","Good documentation states facts, cites the framework, and records the decision. Energy conversion always pays thermodynamic efficiency limits. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Material properties like yield strength and fatigue limit drive design margins. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk."]
      }
    ),
    section(
      "ee-intro-s4",
      "1.4 Introduction to Electrical Engineering — Common mistakes and how to avoid them",
      ["Common mistakes around introduction to electrical engineering include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Free-body diagrams translate physical situations into solvable force balances.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Professional engineers stamp work they are willing to defend publicly. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Sustainability metrics increasingly constrain material and energy choices. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Energy conversion always pays thermodynamic efficiency limits. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error."]
      }
    ),
    section(
      "ee-intro-s5",
      "1.5 Introduction to Electrical Engineering — Putting the chapter together",
      ["This chapter’s through-line is simple: Introduction to Electrical Engineering connects principles to accountable action. Standards bodies publish test methods so measurements compare across labs.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Free-body diagrams translate physical situations into solvable force balances. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits introduction to electrical engineering in your field. Professional engineers stamp work they are willing to defend publicly. Sustainability metrics increasingly constrain material and energy choices."], {
        bulletPoints: ["Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously."]
      }
    )
    ],
    {
      learningObjectives: ["Define introduction to electrical engineering and explain why it matters in Electrical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Introduction to Electrical Engineering connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins."],
      realWorldRelevance: "Strong grasp of introduction to electrical engineering reduces rework, supports defensible records, and speeds collaboration across Electrical Engineering Basics.",
    }
  ),
  chapter(
    "dc-circuits",
    2,
    "DC Circuit Analysis",
    [
    section(
      "dc-circuits-s1",
      "2.1 DC Circuit Analysis — Foundations and vocabulary",
      ["DC Circuit Analysis is a foundation in Electrical Engineering Basics because root-cause analysis distinguishes symptoms from failure mechanisms. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Tolerances and fits determine whether assemblies function or bind. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain dc circuit analysis aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat dc circuit analysis as a shared model for decisions. Project management integrates scope, schedule, cost, and risk. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "dc-circuits-s2",
      "2.2 DC Circuit Analysis — How professionals apply this in practice",
      ["Professionals rarely dispute whether dc circuit analysis exists—they dispute how material properties like yield strength and fatigue limit drive design margins. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Root-cause analysis distinguishes symptoms from failure mechanisms.","When stakes rise, pause for a second opinion or formal review. Tolerances and fits determine whether assemblies function or bind. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Project management integrates scope, schedule, cost, and risk. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances."]
      }
    ),
    section(
      "dc-circuits-s3",
      "2.3 DC Circuit Analysis — Workplace scenarios and documentation",
      ["Scenario: a teammate cites dc circuit analysis in a meeting, but details in the packet do not match the textbook example. Energy conversion always pays thermodynamic efficiency limits. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Material properties like yield strength and fatigue limit drive design margins.","Good documentation states facts, cites the framework, and records the decision. Root-cause analysis distinguishes symptoms from failure mechanisms. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Tolerances and fits determine whether assemblies function or bind. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Control systems use feedback to keep outputs stable despite disturbances.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."]
      }
    ),
    section(
      "dc-circuits-s4",
      "2.4 DC Circuit Analysis — Common mistakes and how to avoid them",
      ["Common mistakes around dc circuit analysis include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Sustainability metrics increasingly constrain material and energy choices.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Energy conversion always pays thermodynamic efficiency limits. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Material properties like yield strength and fatigue limit drive design margins. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Root-cause analysis distinguishes symptoms from failure mechanisms. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly."]
      }
    ),
    section(
      "dc-circuits-s5",
      "2.5 DC Circuit Analysis — Putting the chapter together",
      ["This chapter’s through-line is simple: DC Circuit Analysis connects principles to accountable action. Professional engineers stamp work they are willing to defend publicly.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Sustainability metrics increasingly constrain material and energy choices. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits dc circuit analysis in your field. Energy conversion always pays thermodynamic efficiency limits. Material properties like yield strength and fatigue limit drive design margins."], {
        bulletPoints: ["Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances."]
      }
    )
    ],
    {
      learningObjectives: ["Define dc circuit analysis and explain why it matters in Electrical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "DC Circuit Analysis connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Drawings communicate dimensions, materials, and finishes unambiguously.","Safety factors account for unknown loads, defects, and human error.","Control systems use feedback to keep outputs stable despite disturbances.","Drawings communicate dimensions, materials, and finishes unambiguously.","Safety factors account for unknown loads, defects, and human error."],
      realWorldRelevance: "Strong grasp of dc circuit analysis reduces rework, supports defensible records, and speeds collaboration across Electrical Engineering Basics.",
    }
  ),
  chapter(
    "ac-circuits",
    3,
    "AC Circuits and Power",
    [
    section(
      "ac-circuits-s1",
      "3.1 AC Circuits and Power — Foundations and vocabulary",
      ["AC Circuits and Power is a foundation in Electrical Engineering Basics because control systems use feedback to keep outputs stable despite disturbances. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Root-cause analysis distinguishes symptoms from failure mechanisms. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ac circuits and power aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ac circuits and power as a shared model for decisions. Standards bodies publish test methods so measurements compare across labs. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "ac-circuits-s2",
      "3.2 AC Circuits and Power — How professionals apply this in practice",
      ["Professionals rarely dispute whether ac circuits and power exists—they dispute how drawings communicate dimensions, materials, and finishes unambiguously. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Control systems use feedback to keep outputs stable despite disturbances.","When stakes rise, pause for a second opinion or formal review. Root-cause analysis distinguishes symptoms from failure mechanisms. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Standards bodies publish test methods so measurements compare across labs. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances."]
      }
    ),
    section(
      "ac-circuits-s3",
      "3.3 AC Circuits and Power — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ac circuits and power in a meeting, but details in the packet do not match the textbook example. Safety factors account for unknown loads, defects, and human error. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Drawings communicate dimensions, materials, and finishes unambiguously.","Good documentation states facts, cites the framework, and records the decision. Control systems use feedback to keep outputs stable despite disturbances. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Root-cause analysis distinguishes symptoms from failure mechanisms. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."]
      }
    ),
    section(
      "ac-circuits-s4",
      "3.4 AC Circuits and Power — Common mistakes and how to avoid them",
      ["Common mistakes around ac circuits and power include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Project management integrates scope, schedule, cost, and risk.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Safety factors account for unknown loads, defects, and human error. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Drawings communicate dimensions, materials, and finishes unambiguously. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Control systems use feedback to keep outputs stable despite disturbances. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly."]
      }
    ),
    section(
      "ac-circuits-s5",
      "3.5 AC Circuits and Power — Putting the chapter together",
      ["This chapter’s through-line is simple: AC Circuits and Power connects principles to accountable action. Tolerances and fits determine whether assemblies function or bind.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Project management integrates scope, schedule, cost, and risk. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ac circuits and power in your field. Safety factors account for unknown loads, defects, and human error. Drawings communicate dimensions, materials, and finishes unambiguously."], {
        bulletPoints: ["Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances."]
      }
    )
    ],
    {
      learningObjectives: ["Define ac circuits and power and explain why it matters in Electrical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "AC Circuits and Power connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Control systems use feedback to keep outputs stable despite disturbances.","Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Control systems use feedback to keep outputs stable despite disturbances.","Drawings communicate dimensions, materials, and finishes unambiguously."],
      realWorldRelevance: "Strong grasp of ac circuits and power reduces rework, supports defensible records, and speeds collaboration across Electrical Engineering Basics.",
    }
  ),
  chapter(
    "electronics",
    4,
    "Semiconductor Electronics",
    [
    section(
      "electronics-s1",
      "4.1 Semiconductor Electronics — Foundations and vocabulary",
      ["Semiconductor Electronics is a foundation in Electrical Engineering Basics because tolerances and fits determine whether assemblies function or bind. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Project management integrates scope, schedule, cost, and risk. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain semiconductor electronics aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat semiconductor electronics as a shared model for decisions. Safety factors account for unknown loads, defects, and human error. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "electronics-s2",
      "4.2 Semiconductor Electronics — How professionals apply this in practice",
      ["Professionals rarely dispute whether semiconductor electronics exists—they dispute how project management integrates scope, schedule, cost, and risk. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Safety factors account for unknown loads, defects, and human error.","When stakes rise, pause for a second opinion or formal review. Drawings communicate dimensions, materials, and finishes unambiguously. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Control systems use feedback to keep outputs stable despite disturbances. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk."]
      }
    ),
    section(
      "electronics-s3",
      "4.3 Semiconductor Electronics — Workplace scenarios and documentation",
      ["Scenario: a teammate cites semiconductor electronics in a meeting, but details in the packet do not match the textbook example. Safety factors account for unknown loads, defects, and human error. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Drawings communicate dimensions, materials, and finishes unambiguously.","Good documentation states facts, cites the framework, and records the decision. Control systems use feedback to keep outputs stable despite disturbances. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Root-cause analysis distinguishes symptoms from failure mechanisms. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins."]
      }
    ),
    section(
      "electronics-s4",
      "4.4 Semiconductor Electronics — Common mistakes and how to avoid them",
      ["Common mistakes around semiconductor electronics include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Drawings communicate dimensions, materials, and finishes unambiguously.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Control systems use feedback to keep outputs stable despite disturbances. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Root-cause analysis distinguishes symptoms from failure mechanisms. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Standards bodies publish test methods so measurements compare across labs. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind."]
      }
    ),
    section(
      "electronics-s5",
      "4.5 Semiconductor Electronics — Putting the chapter together",
      ["This chapter’s through-line is simple: Semiconductor Electronics connects principles to accountable action. Control systems use feedback to keep outputs stable despite disturbances.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Root-cause analysis distinguishes symptoms from failure mechanisms. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits semiconductor electronics in your field. Standards bodies publish test methods so measurements compare across labs. Free-body diagrams translate physical situations into solvable force balances."], {
        bulletPoints: ["Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk."]
      }
    )
    ],
    {
      learningObjectives: ["Define semiconductor electronics and explain why it matters in Electrical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Semiconductor Electronics connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."],
      realWorldRelevance: "Strong grasp of semiconductor electronics reduces rework, supports defensible records, and speeds collaboration across Electrical Engineering Basics.",
    }
  ),
  chapter(
    "digital-logic",
    5,
    "Digital Logic and Systems",
    [
    section(
      "digital-logic-s1",
      "5.1 Digital Logic and Systems — Foundations and vocabulary",
      ["Digital Logic and Systems is a foundation in Electrical Engineering Basics because tolerances and fits determine whether assemblies function or bind. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Project management integrates scope, schedule, cost, and risk. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain digital logic and systems aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat digital logic and systems as a shared model for decisions. Safety factors account for unknown loads, defects, and human error. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Control systems use feedback to keep outputs stable despite disturbances.","Tolerances and fits determine whether assemblies function or bind."],
        citations: [{"source":"NIST Reference Materials","url":"https://www.nist.gov/","note":"Standards, units, and measurement traceability"}]
      }
    ),
    section(
      "digital-logic-s2",
      "5.2 Digital Logic and Systems — How professionals apply this in practice",
      ["Professionals rarely dispute whether digital logic and systems exists—they dispute how control systems use feedback to keep outputs stable despite disturbances. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Tolerances and fits determine whether assemblies function or bind.","When stakes rise, pause for a second opinion or formal review. Project management integrates scope, schedule, cost, and risk. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Safety factors account for unknown loads, defects, and human error. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Control systems use feedback to keep outputs stable despite disturbances.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk."]
      }
    ),
    section(
      "digital-logic-s3",
      "5.3 Digital Logic and Systems — Workplace scenarios and documentation",
      ["Scenario: a teammate cites digital logic and systems in a meeting, but details in the packet do not match the textbook example. Material properties like yield strength and fatigue limit drive design margins. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Control systems use feedback to keep outputs stable despite disturbances.","Good documentation states facts, cites the framework, and records the decision. Tolerances and fits determine whether assemblies function or bind. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Project management integrates scope, schedule, cost, and risk. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Control systems use feedback to keep outputs stable despite disturbances."]
      }
    ),
    section(
      "digital-logic-s4",
      "5.4 Digital Logic and Systems — Common mistakes and how to avoid them",
      ["Common mistakes around digital logic and systems include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Energy conversion always pays thermodynamic efficiency limits.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Material properties like yield strength and fatigue limit drive design margins. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Control systems use feedback to keep outputs stable despite disturbances. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Tolerances and fits determine whether assemblies function or bind. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Control systems use feedback to keep outputs stable despite disturbances.","Tolerances and fits determine whether assemblies function or bind."]
      }
    ),
    section(
      "digital-logic-s5",
      "5.5 Digital Logic and Systems — Putting the chapter together",
      ["This chapter’s through-line is simple: Digital Logic and Systems connects principles to accountable action. Sustainability metrics increasingly constrain material and energy choices.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Energy conversion always pays thermodynamic efficiency limits. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits digital logic and systems in your field. Material properties like yield strength and fatigue limit drive design margins. Control systems use feedback to keep outputs stable despite disturbances."], {
        bulletPoints: ["Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Control systems use feedback to keep outputs stable despite disturbances.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk."]
      }
    )
    ],
    {
      learningObjectives: ["Define digital logic and systems and explain why it matters in Electrical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Digital Logic and Systems connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."],
      realWorldRelevance: "Strong grasp of digital logic and systems reduces rework, supports defensible records, and speeds collaboration across Electrical Engineering Basics.",
    }
  ),
  chapter(
    "embedded-systems",
    6,
    "Embedded Systems",
    [
    section(
      "embedded-systems-s1",
      "6.1 Embedded Systems — Foundations and vocabulary",
      ["Embedded Systems is a foundation in Electrical Engineering Basics because project management integrates scope, schedule, cost, and risk. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Safety factors account for unknown loads, defects, and human error. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain embedded systems aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat embedded systems as a shared model for decisions. Drawings communicate dimensions, materials, and finishes unambiguously. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "embedded-systems-s2",
      "6.2 Embedded Systems — How professionals apply this in practice",
      ["Professionals rarely dispute whether embedded systems exists—they dispute how tolerances and fits determine whether assemblies function or bind. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Project management integrates scope, schedule, cost, and risk.","When stakes rise, pause for a second opinion or formal review. Safety factors account for unknown loads, defects, and human error. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Drawings communicate dimensions, materials, and finishes unambiguously. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms."]
      }
    ),
    section(
      "embedded-systems-s3",
      "6.3 Embedded Systems — Workplace scenarios and documentation",
      ["Scenario: a teammate cites embedded systems in a meeting, but details in the packet do not match the textbook example. Control systems use feedback to keep outputs stable despite disturbances. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Tolerances and fits determine whether assemblies function or bind.","Good documentation states facts, cites the framework, and records the decision. Project management integrates scope, schedule, cost, and risk. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Safety factors account for unknown loads, defects, and human error. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances."]
      }
    ),
    section(
      "embedded-systems-s4",
      "6.4 Embedded Systems — Common mistakes and how to avoid them",
      ["Common mistakes around embedded systems include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Material properties like yield strength and fatigue limit drive design margins.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Control systems use feedback to keep outputs stable despite disturbances. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Tolerances and fits determine whether assemblies function or bind. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Project management integrates scope, schedule, cost, and risk. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs."]
      }
    ),
    section(
      "embedded-systems-s5",
      "6.5 Embedded Systems — Putting the chapter together",
      ["This chapter’s through-line is simple: Embedded Systems connects principles to accountable action. Energy conversion always pays thermodynamic efficiency limits.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Material properties like yield strength and fatigue limit drive design margins. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits embedded systems in your field. Control systems use feedback to keep outputs stable despite disturbances. Tolerances and fits determine whether assemblies function or bind."], {
        bulletPoints: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms."]
      }
    )
    ],
    {
      learningObjectives: ["Define embedded systems and explain why it matters in Electrical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Embedded Systems connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Project management integrates scope, schedule, cost, and risk.","Tolerances and fits determine whether assemblies function or bind.","Safety factors account for unknown loads, defects, and human error.","Project management integrates scope, schedule, cost, and risk.","Tolerances and fits determine whether assemblies function or bind."],
      realWorldRelevance: "Strong grasp of embedded systems reduces rework, supports defensible records, and speeds collaboration across Electrical Engineering Basics.",
    }
  ),
  chapter(
    "signals-systems",
    7,
    "Signals and Systems Overview",
    [
    section(
      "signals-systems-s1",
      "7.1 Signals and Systems Overview — Foundations and vocabulary",
      ["Signals and Systems Overview is a foundation in Electrical Engineering Basics because tolerances and fits determine whether assemblies function or bind. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Project management integrates scope, schedule, cost, and risk. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain signals and systems overview aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat signals and systems overview as a shared model for decisions. Safety factors account for unknown loads, defects, and human error. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances."],
        citations: [{"source":"NIST Reference Materials","url":"https://www.nist.gov/","note":"Standards, units, and measurement traceability"}]
      }
    ),
    section(
      "signals-systems-s2",
      "7.2 Signals and Systems Overview — How professionals apply this in practice",
      ["Professionals rarely dispute whether signals and systems overview exists—they dispute how project management integrates scope, schedule, cost, and risk. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Safety factors account for unknown loads, defects, and human error.","When stakes rise, pause for a second opinion or formal review. Drawings communicate dimensions, materials, and finishes unambiguously. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Root-cause analysis distinguishes symptoms from failure mechanisms. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly."]
      }
    ),
    section(
      "signals-systems-s3",
      "7.3 Signals and Systems Overview — Workplace scenarios and documentation",
      ["Scenario: a teammate cites signals and systems overview in a meeting, but details in the packet do not match the textbook example. Safety factors account for unknown loads, defects, and human error. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Drawings communicate dimensions, materials, and finishes unambiguously.","Good documentation states facts, cites the framework, and records the decision. Root-cause analysis distinguishes symptoms from failure mechanisms. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Standards bodies publish test methods so measurements compare across labs. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs."]
      }
    ),
    section(
      "signals-systems-s4",
      "7.4 Signals and Systems Overview — Common mistakes and how to avoid them",
      ["Common mistakes around signals and systems overview include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Drawings communicate dimensions, materials, and finishes unambiguously.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Root-cause analysis distinguishes symptoms from failure mechanisms. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Standards bodies publish test methods so measurements compare across labs. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Free-body diagrams translate physical situations into solvable force balances. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances."]
      }
    ),
    section(
      "signals-systems-s5",
      "7.5 Signals and Systems Overview — Putting the chapter together",
      ["This chapter’s through-line is simple: Signals and Systems Overview connects principles to accountable action. Root-cause analysis distinguishes symptoms from failure mechanisms.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Standards bodies publish test methods so measurements compare across labs. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits signals and systems overview in your field. Free-body diagrams translate physical situations into solvable force balances. Professional engineers stamp work they are willing to defend publicly."], {
        bulletPoints: ["Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly."]
      }
    )
    ],
    {
      learningObjectives: ["Define signals and systems overview and explain why it matters in Electrical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Signals and Systems Overview connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously."],
      realWorldRelevance: "Strong grasp of signals and systems overview reduces rework, supports defensible records, and speeds collaboration across Electrical Engineering Basics.",
    }
  ),
  chapter(
    "electromagnetics",
    8,
    "Electromagnetics Basics",
    [
    section(
      "electromagnetics-s1",
      "8.1 Electromagnetics Basics — Foundations and vocabulary",
      ["Electromagnetics Basics is a foundation in Electrical Engineering Basics because energy conversion always pays thermodynamic efficiency limits. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Material properties like yield strength and fatigue limit drive design margins. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain electromagnetics basics aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat electromagnetics basics as a shared model for decisions. Tolerances and fits determine whether assemblies function or bind. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "electromagnetics-s2",
      "8.2 Electromagnetics Basics — How professionals apply this in practice",
      ["Professionals rarely dispute whether electromagnetics basics exists—they dispute how sustainability metrics increasingly constrain material and energy choices. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Energy conversion always pays thermodynamic efficiency limits.","When stakes rise, pause for a second opinion or formal review. Material properties like yield strength and fatigue limit drive design margins. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Tolerances and fits determine whether assemblies function or bind. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms."]
      }
    ),
    section(
      "electromagnetics-s3",
      "8.3 Electromagnetics Basics — Workplace scenarios and documentation",
      ["Scenario: a teammate cites electromagnetics basics in a meeting, but details in the packet do not match the textbook example. Professional engineers stamp work they are willing to defend publicly. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Sustainability metrics increasingly constrain material and energy choices.","Good documentation states facts, cites the framework, and records the decision. Energy conversion always pays thermodynamic efficiency limits. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Material properties like yield strength and fatigue limit drive design margins. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances."]
      }
    ),
    section(
      "electromagnetics-s4",
      "8.4 Electromagnetics Basics — Common mistakes and how to avoid them",
      ["Common mistakes around electromagnetics basics include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Free-body diagrams translate physical situations into solvable force balances.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Professional engineers stamp work they are willing to defend publicly. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Sustainability metrics increasingly constrain material and energy choices. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Energy conversion always pays thermodynamic efficiency limits. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs."]
      }
    ),
    section(
      "electromagnetics-s5",
      "8.5 Electromagnetics Basics — Putting the chapter together",
      ["This chapter’s through-line is simple: Electromagnetics Basics connects principles to accountable action. Standards bodies publish test methods so measurements compare across labs.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Free-body diagrams translate physical situations into solvable force balances. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits electromagnetics basics in your field. Professional engineers stamp work they are willing to defend publicly. Sustainability metrics increasingly constrain material and energy choices."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms."]
      }
    )
    ],
    {
      learningObjectives: ["Define electromagnetics basics and explain why it matters in Electrical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Electromagnetics Basics connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Safety factors account for unknown loads, defects, and human error.","Project management integrates scope, schedule, cost, and risk.","Drawings communicate dimensions, materials, and finishes unambiguously.","Safety factors account for unknown loads, defects, and human error.","Project management integrates scope, schedule, cost, and risk."],
      realWorldRelevance: "Strong grasp of electromagnetics basics reduces rework, supports defensible records, and speeds collaboration across Electrical Engineering Basics.",
    }
  ),
  chapter(
    "power-systems",
    9,
    "Electric Power Systems",
    [
    section(
      "power-systems-s1",
      "9.1 Electric Power Systems — Foundations and vocabulary",
      ["Electric Power Systems is a foundation in Electrical Engineering Basics because project management integrates scope, schedule, cost, and risk. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Safety factors account for unknown loads, defects, and human error. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain electric power systems aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat electric power systems as a shared model for decisions. Drawings communicate dimensions, materials, and finishes unambiguously. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "power-systems-s2",
      "9.2 Electric Power Systems — How professionals apply this in practice",
      ["Professionals rarely dispute whether electric power systems exists—they dispute how tolerances and fits determine whether assemblies function or bind. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Project management integrates scope, schedule, cost, and risk.","When stakes rise, pause for a second opinion or formal review. Safety factors account for unknown loads, defects, and human error. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Drawings communicate dimensions, materials, and finishes unambiguously. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances."]
      }
    ),
    section(
      "power-systems-s3",
      "9.3 Electric Power Systems — Workplace scenarios and documentation",
      ["Scenario: a teammate cites electric power systems in a meeting, but details in the packet do not match the textbook example. Control systems use feedback to keep outputs stable despite disturbances. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Tolerances and fits determine whether assemblies function or bind.","Good documentation states facts, cites the framework, and records the decision. Project management integrates scope, schedule, cost, and risk. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Safety factors account for unknown loads, defects, and human error. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms."]
      }
    ),
    section(
      "power-systems-s4",
      "9.4 Electric Power Systems — Common mistakes and how to avoid them",
      ["Common mistakes around electric power systems include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Material properties like yield strength and fatigue limit drive design margins.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Control systems use feedback to keep outputs stable despite disturbances. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Tolerances and fits determine whether assemblies function or bind. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Project management integrates scope, schedule, cost, and risk. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs."]
      }
    ),
    section(
      "power-systems-s5",
      "9.5 Electric Power Systems — Putting the chapter together",
      ["This chapter’s through-line is simple: Electric Power Systems connects principles to accountable action. Energy conversion always pays thermodynamic efficiency limits.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Material properties like yield strength and fatigue limit drive design margins. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits electric power systems in your field. Control systems use feedback to keep outputs stable despite disturbances. Tolerances and fits determine whether assemblies function or bind."], {
        bulletPoints: ["Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances."]
      }
    )
    ],
    {
      learningObjectives: ["Define electric power systems and explain why it matters in Electrical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Electric Power Systems connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error."],
      realWorldRelevance: "Strong grasp of electric power systems reduces rework, supports defensible records, and speeds collaboration across Electrical Engineering Basics.",
    }
  ),
  chapter(
    "renewable-power",
    10,
    "Renewable Energy Systems",
    [
    section(
      "renewable-power-s1",
      "10.1 Renewable Energy Systems — Foundations and vocabulary",
      ["Renewable Energy Systems is a foundation in Electrical Engineering Basics because sustainability metrics increasingly constrain material and energy choices. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Energy conversion always pays thermodynamic efficiency limits. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain renewable energy systems aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat renewable energy systems as a shared model for decisions. Tolerances and fits determine whether assemblies function or bind. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Material properties like yield strength and fatigue limit drive design margins.","Control systems use feedback to keep outputs stable despite disturbances.","Sustainability metrics increasingly constrain material and energy choices."],
        citations: [{"source":"NIST Reference Materials","url":"https://www.nist.gov/","note":"Standards, units, and measurement traceability"}]
      }
    ),
    section(
      "renewable-power-s2",
      "10.2 Renewable Energy Systems — How professionals apply this in practice",
      ["Professionals rarely dispute whether renewable energy systems exists—they dispute how control systems use feedback to keep outputs stable despite disturbances. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Sustainability metrics increasingly constrain material and energy choices.","When stakes rise, pause for a second opinion or formal review. Energy conversion always pays thermodynamic efficiency limits. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Tolerances and fits determine whether assemblies function or bind. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Professional engineers stamp work they are willing to defend publicly.","Material properties like yield strength and fatigue limit drive design margins.","Control systems use feedback to keep outputs stable despite disturbances.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."]
      }
    ),
    section(
      "renewable-power-s3",
      "10.3 Renewable Energy Systems — Workplace scenarios and documentation",
      ["Scenario: a teammate cites renewable energy systems in a meeting, but details in the packet do not match the textbook example. Material properties like yield strength and fatigue limit drive design margins. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Control systems use feedback to keep outputs stable despite disturbances.","Good documentation states facts, cites the framework, and records the decision. Sustainability metrics increasingly constrain material and energy choices. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Energy conversion always pays thermodynamic efficiency limits. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Material properties like yield strength and fatigue limit drive design margins.","Control systems use feedback to keep outputs stable despite disturbances."]
      }
    ),
    section(
      "renewable-power-s4",
      "10.4 Renewable Energy Systems — Common mistakes and how to avoid them",
      ["Common mistakes around renewable energy systems include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Professional engineers stamp work they are willing to defend publicly.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Material properties like yield strength and fatigue limit drive design margins. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Control systems use feedback to keep outputs stable despite disturbances. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Sustainability metrics increasingly constrain material and energy choices. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Material properties like yield strength and fatigue limit drive design margins.","Control systems use feedback to keep outputs stable despite disturbances.","Sustainability metrics increasingly constrain material and energy choices."]
      }
    ),
    section(
      "renewable-power-s5",
      "10.5 Renewable Energy Systems — Putting the chapter together",
      ["This chapter’s through-line is simple: Renewable Energy Systems connects principles to accountable action. Free-body diagrams translate physical situations into solvable force balances.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Professional engineers stamp work they are willing to defend publicly. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits renewable energy systems in your field. Material properties like yield strength and fatigue limit drive design margins. Control systems use feedback to keep outputs stable despite disturbances."], {
        bulletPoints: ["Professional engineers stamp work they are willing to defend publicly.","Material properties like yield strength and fatigue limit drive design margins.","Control systems use feedback to keep outputs stable despite disturbances.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."]
      }
    )
    ],
    {
      learningObjectives: ["Define renewable energy systems and explain why it matters in Electrical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Renewable Energy Systems connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly."],
      realWorldRelevance: "Strong grasp of renewable energy systems reduces rework, supports defensible records, and speeds collaboration across Electrical Engineering Basics.",
    }
  ),
  chapter(
    "control-systems",
    11,
    "Control Systems Basics",
    [
    section(
      "control-systems-s1",
      "11.1 Control Systems Basics — Foundations and vocabulary",
      ["Feedback control compares measured outputs to setpoints, adjusting inputs to reject disturbances in plants and products alike. Control Systems Basics is a foundation in Electrical Engineering Basics because drawings communicate dimensions, materials, and finishes unambiguously. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Root-cause analysis distinguishes symptoms from failure mechanisms. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain control systems basics aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat control systems basics as a shared model for decisions. Standards bodies publish test methods so measurements compare across labs. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Control systems use feedback to keep outputs stable despite disturbances."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "control-systems-s2",
      "11.2 Control Systems Basics — How professionals apply this in practice",
      ["Professionals rarely dispute whether control systems basics exists—they dispute how root-cause analysis distinguishes symptoms from failure mechanisms. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Standards bodies publish test methods so measurements compare across labs.","When stakes rise, pause for a second opinion or formal review. Free-body diagrams translate physical situations into solvable force balances. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Professional engineers stamp work they are willing to defend publicly. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Control systems use feedback to keep outputs stable despite disturbances.","Tolerances and fits determine whether assemblies function or bind."]
      }
    ),
    section(
      "control-systems-s3",
      "11.3 Control Systems Basics — Workplace scenarios and documentation",
      ["Scenario: a teammate cites control systems basics in a meeting, but details in the packet do not match the textbook example. Standards bodies publish test methods so measurements compare across labs. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Free-body diagrams translate physical situations into solvable force balances.","Good documentation states facts, cites the framework, and records the decision. Professional engineers stamp work they are willing to defend publicly. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Sustainability metrics increasingly constrain material and energy choices. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins."]
      }
    ),
    section(
      "control-systems-s4",
      "11.4 Control Systems Basics — Common mistakes and how to avoid them",
      ["Common mistakes around control systems basics include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Free-body diagrams translate physical situations into solvable force balances.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Professional engineers stamp work they are willing to defend publicly. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Sustainability metrics increasingly constrain material and energy choices. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Energy conversion always pays thermodynamic efficiency limits. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Control systems use feedback to keep outputs stable despite disturbances."]
      }
    ),
    section(
      "control-systems-s5",
      "11.5 Control Systems Basics — Putting the chapter together",
      ["This chapter’s through-line is simple: Control Systems Basics connects principles to accountable action. Professional engineers stamp work they are willing to defend publicly.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Sustainability metrics increasingly constrain material and energy choices. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits control systems basics in your field. Energy conversion always pays thermodynamic efficiency limits. Material properties like yield strength and fatigue limit drive design margins."], {
        bulletPoints: ["Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Control systems use feedback to keep outputs stable despite disturbances.","Tolerances and fits determine whether assemblies function or bind."]
      }
    )
    ],
    {
      learningObjectives: ["Define control systems basics and explain why it matters in Electrical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Control Systems Basics: Feedback control compares measured outputs to setpoints, adjusting inputs to reject disturbances in plants and products alike. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."],
      realWorldRelevance: "Strong grasp of control systems basics reduces rework, supports defensible records, and speeds collaboration across Electrical Engineering Basics.",
    }
  ),
  chapter(
    "communications-ee",
    12,
    "Communications Engineering Intro",
    [
    section(
      "communications-ee-s1",
      "12.1 Communications Engineering Intro — Foundations and vocabulary",
      ["Communications Engineering Intro is a foundation in Electrical Engineering Basics because professional engineers stamp work they are willing to defend publicly. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Sustainability metrics increasingly constrain material and energy choices. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain communications engineering intro aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat communications engineering intro as a shared model for decisions. Energy conversion always pays thermodynamic efficiency limits. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "communications-ee-s2",
      "12.2 Communications Engineering Intro — How professionals apply this in practice",
      ["Professionals rarely dispute whether communications engineering intro exists—they dispute how free-body diagrams translate physical situations into solvable force balances. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Professional engineers stamp work they are willing to defend publicly.","When stakes rise, pause for a second opinion or formal review. Sustainability metrics increasingly constrain material and energy choices. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Energy conversion always pays thermodynamic efficiency limits. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms."]
      }
    ),
    section(
      "communications-ee-s3",
      "12.3 Communications Engineering Intro — Workplace scenarios and documentation",
      ["Scenario: a teammate cites communications engineering intro in a meeting, but details in the packet do not match the textbook example. Standards bodies publish test methods so measurements compare across labs. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Free-body diagrams translate physical situations into solvable force balances.","Good documentation states facts, cites the framework, and records the decision. Professional engineers stamp work they are willing to defend publicly. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Sustainability metrics increasingly constrain material and energy choices. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously."]
      }
    ),
    section(
      "communications-ee-s4",
      "12.4 Communications Engineering Intro — Common mistakes and how to avoid them",
      ["Common mistakes around communications engineering intro include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Root-cause analysis distinguishes symptoms from failure mechanisms.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Standards bodies publish test methods so measurements compare across labs. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Free-body diagrams translate physical situations into solvable force balances. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Professional engineers stamp work they are willing to defend publicly. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances."]
      }
    ),
    section(
      "communications-ee-s5",
      "12.5 Communications Engineering Intro — Putting the chapter together",
      ["This chapter’s through-line is simple: Communications Engineering Intro connects principles to accountable action. Control systems use feedback to keep outputs stable despite disturbances.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Root-cause analysis distinguishes symptoms from failure mechanisms. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits communications engineering intro in your field. Standards bodies publish test methods so measurements compare across labs. Free-body diagrams translate physical situations into solvable force balances."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms."]
      }
    )
    ],
    {
      learningObjectives: ["Define communications engineering intro and explain why it matters in Electrical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Communications Engineering Intro connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk."],
      realWorldRelevance: "Strong grasp of communications engineering intro reduces rework, supports defensible records, and speeds collaboration across Electrical Engineering Basics.",
    }
  ),
  chapter(
    "instrumentation",
    13,
    "Instrumentation and Measurement",
    [
    section(
      "instrumentation-s1",
      "13.1 Instrumentation and Measurement — Foundations and vocabulary",
      ["Instrumentation and Measurement is a foundation in Electrical Engineering Basics because material properties like yield strength and fatigue limit drive design margins. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Standards bodies publish test methods so measurements compare across labs. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain instrumentation and measurement aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat instrumentation and measurement as a shared model for decisions. Tolerances and fits determine whether assemblies function or bind. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."],
        citations: [{"source":"NIST Reference Materials","url":"https://www.nist.gov/","note":"Standards, units, and measurement traceability"}]
      }
    ),
    section(
      "instrumentation-s2",
      "13.2 Instrumentation and Measurement — How professionals apply this in practice",
      ["Professionals rarely dispute whether instrumentation and measurement exists—they dispute how standards bodies publish test methods so measurements compare across labs. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Tolerances and fits determine whether assemblies function or bind.","When stakes rise, pause for a second opinion or formal review. Project management integrates scope, schedule, cost, and risk. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Safety factors account for unknown loads, defects, and human error. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."]
      }
    ),
    section(
      "instrumentation-s3",
      "13.3 Instrumentation and Measurement — Workplace scenarios and documentation",
      ["Scenario: a teammate cites instrumentation and measurement in a meeting, but details in the packet do not match the textbook example. Tolerances and fits determine whether assemblies function or bind. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Project management integrates scope, schedule, cost, and risk.","Good documentation states facts, cites the framework, and records the decision. Safety factors account for unknown loads, defects, and human error. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Drawings communicate dimensions, materials, and finishes unambiguously. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly."]
      }
    ),
    section(
      "instrumentation-s4",
      "13.4 Instrumentation and Measurement — Common mistakes and how to avoid them",
      ["Common mistakes around instrumentation and measurement include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Project management integrates scope, schedule, cost, and risk.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Safety factors account for unknown loads, defects, and human error. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Drawings communicate dimensions, materials, and finishes unambiguously. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Control systems use feedback to keep outputs stable despite disturbances. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."]
      }
    ),
    section(
      "instrumentation-s5",
      "13.5 Instrumentation and Measurement — Putting the chapter together",
      ["This chapter’s through-line is simple: Instrumentation and Measurement connects principles to accountable action. Safety factors account for unknown loads, defects, and human error.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Drawings communicate dimensions, materials, and finishes unambiguously. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits instrumentation and measurement in your field. Control systems use feedback to keep outputs stable despite disturbances. Root-cause analysis distinguishes symptoms from failure mechanisms."], {
        bulletPoints: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."]
      }
    )
    ],
    {
      learningObjectives: ["Define instrumentation and measurement and explain why it matters in Electrical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Instrumentation and Measurement connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms."],
      realWorldRelevance: "Strong grasp of instrumentation and measurement reduces rework, supports defensible records, and speeds collaboration across Electrical Engineering Basics.",
    }
  ),
  chapter(
    "ee-safety",
    14,
    "Electrical Safety and Standards",
    [
    section(
      "ee-safety-s1",
      "14.1 Electrical Safety and Standards — Foundations and vocabulary",
      ["Electrical Safety and Standards is a foundation in Electrical Engineering Basics because sustainability metrics increasingly constrain material and energy choices. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Energy conversion always pays thermodynamic efficiency limits. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain electrical safety and standards aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat electrical safety and standards as a shared model for decisions. Material properties like yield strength and fatigue limit drive design margins. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Free-body diagrams translate physical situations into solvable force balances."],
        citations: [{"source":"NIST Reference Materials","url":"https://www.nist.gov/","note":"Standards, units, and measurement traceability"}]
      }
    ),
    section(
      "ee-safety-s2",
      "14.2 Electrical Safety and Standards — How professionals apply this in practice",
      ["Professionals rarely dispute whether electrical safety and standards exists—they dispute how energy conversion always pays thermodynamic efficiency limits. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Material properties like yield strength and fatigue limit drive design margins.","When stakes rise, pause for a second opinion or formal review. Safety factors account for unknown loads, defects, and human error. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Standards bodies publish test methods so measurements compare across labs. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly."]
      }
    ),
    section(
      "ee-safety-s3",
      "14.3 Electrical Safety and Standards — Workplace scenarios and documentation",
      ["Scenario: a teammate cites electrical safety and standards in a meeting, but details in the packet do not match the textbook example. Material properties like yield strength and fatigue limit drive design margins. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Safety factors account for unknown loads, defects, and human error.","Good documentation states facts, cites the framework, and records the decision. Standards bodies publish test methods so measurements compare across labs. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Tolerances and fits determine whether assemblies function or bind. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms."]
      }
    ),
    section(
      "ee-safety-s4",
      "14.4 Electrical Safety and Standards — Common mistakes and how to avoid them",
      ["Common mistakes around electrical safety and standards include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Safety factors account for unknown loads, defects, and human error.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Standards bodies publish test methods so measurements compare across labs. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Tolerances and fits determine whether assemblies function or bind. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Project management integrates scope, schedule, cost, and risk. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Free-body diagrams translate physical situations into solvable force balances."]
      }
    ),
    section(
      "ee-safety-s5",
      "14.5 Electrical Safety and Standards — Putting the chapter together",
      ["This chapter’s through-line is simple: Electrical Safety and Standards connects principles to accountable action. Standards bodies publish test methods so measurements compare across labs.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Tolerances and fits determine whether assemblies function or bind. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits electrical safety and standards in your field. Project management integrates scope, schedule, cost, and risk. Drawings communicate dimensions, materials, and finishes unambiguously."], {
        bulletPoints: ["Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly."]
      }
    )
    ],
    {
      learningObjectives: ["Define electrical safety and standards and explain why it matters in Electrical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Electrical Safety and Standards connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Project management integrates scope, schedule, cost, and risk.","Drawings communicate dimensions, materials, and finishes unambiguously.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Drawings communicate dimensions, materials, and finishes unambiguously."],
      realWorldRelevance: "Strong grasp of electrical safety and standards reduces rework, supports defensible records, and speeds collaboration across Electrical Engineering Basics.",
    }
  ),
  chapter(
    "ee-careers",
    15,
    "Electrical Engineering Careers",
    [
    section(
      "ee-careers-s1",
      "15.1 Electrical Engineering Careers — Foundations and vocabulary",
      ["Electrical Engineering Careers is a foundation in Electrical Engineering Basics because professional engineers stamp work they are willing to defend publicly. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Sustainability metrics increasingly constrain material and energy choices. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain electrical engineering careers aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat electrical engineering careers as a shared model for decisions. Energy conversion always pays thermodynamic efficiency limits. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "ee-careers-s2",
      "15.2 Electrical Engineering Careers — How professionals apply this in practice",
      ["Professionals rarely dispute whether electrical engineering careers exists—they dispute how sustainability metrics increasingly constrain material and energy choices. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Energy conversion always pays thermodynamic efficiency limits.","When stakes rise, pause for a second opinion or formal review. Material properties like yield strength and fatigue limit drive design margins. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Tolerances and fits determine whether assemblies function or bind. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms."]
      }
    ),
    section(
      "ee-careers-s3",
      "15.3 Electrical Engineering Careers — Workplace scenarios and documentation",
      ["Scenario: a teammate cites electrical engineering careers in a meeting, but details in the packet do not match the textbook example. Energy conversion always pays thermodynamic efficiency limits. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Material properties like yield strength and fatigue limit drive design margins.","Good documentation states facts, cites the framework, and records the decision. Tolerances and fits determine whether assemblies function or bind. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Project management integrates scope, schedule, cost, and risk. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously."]
      }
    ),
    section(
      "ee-careers-s4",
      "15.4 Electrical Engineering Careers — Common mistakes and how to avoid them",
      ["Common mistakes around electrical engineering careers include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Material properties like yield strength and fatigue limit drive design margins.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Tolerances and fits determine whether assemblies function or bind. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Project management integrates scope, schedule, cost, and risk. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Safety factors account for unknown loads, defects, and human error. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances."]
      }
    ),
    section(
      "ee-careers-s5",
      "15.5 Electrical Engineering Careers — Putting the chapter together",
      ["This chapter’s through-line is simple: Electrical Engineering Careers connects principles to accountable action. Tolerances and fits determine whether assemblies function or bind.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Project management integrates scope, schedule, cost, and risk. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits electrical engineering careers in your field. Safety factors account for unknown loads, defects, and human error. Drawings communicate dimensions, materials, and finishes unambiguously."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms."]
      }
    )
    ],
    {
      learningObjectives: ["Define electrical engineering careers and explain why it matters in Electrical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Electrical Engineering Careers connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk."],
      realWorldRelevance: "Strong grasp of electrical engineering careers reduces rework, supports defensible records, and speeds collaboration across Electrical Engineering Basics.",
    }
  )
];
