import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const IE_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Industrial Engineering Basics",
  subtitle: "ForgEd deep-dive — industrial engineering basics",
  paragraphs: [
    "This ForgEd digital textbook presents Industrial Engineering Basics at academic survey depth — cited frameworks, rigorous prose, and chapter learning objectives. 15 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Material is engineering literacy, not a PE stamp or design approval.",
  ],
};

export const IE_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "ie-intro",
    1,
    "Introduction to Industrial Engineering",
    [
    section(
      "ie-intro-s1",
      "1.1 Introduction to Industrial Engineering — Foundations and vocabulary",
      ["Introduction to Industrial Engineering is a foundation in Industrial Engineering Basics because drawings communicate dimensions, materials, and finishes unambiguously. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Control systems use feedback to keep outputs stable despite disturbances. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain introduction to industrial engineering aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat introduction to industrial engineering as a shared model for decisions. Root-cause analysis distinguishes symptoms from failure mechanisms. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously."],
        citations: [{"source":"NIST Reference Materials","url":"https://www.nist.gov/","note":"Standards, units, and measurement traceability"}]
      }
    ),
    section(
      "ie-intro-s2",
      "1.2 Introduction to Industrial Engineering — How professionals apply this in practice",
      ["Professionals rarely dispute whether introduction to industrial engineering exists—they dispute how safety factors account for unknown loads, defects, and human error. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Drawings communicate dimensions, materials, and finishes unambiguously.","When stakes rise, pause for a second opinion or formal review. Control systems use feedback to keep outputs stable despite disturbances. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Root-cause analysis distinguishes symptoms from failure mechanisms. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances."]
      }
    ),
    section(
      "ie-intro-s3",
      "1.3 Introduction to Industrial Engineering — Workplace scenarios and documentation",
      ["Scenario: a teammate cites introduction to industrial engineering in a meeting, but details in the packet do not match the textbook example. Project management integrates scope, schedule, cost, and risk. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Safety factors account for unknown loads, defects, and human error.","Good documentation states facts, cites the framework, and records the decision. Drawings communicate dimensions, materials, and finishes unambiguously. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Control systems use feedback to keep outputs stable despite disturbances. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error."]
      }
    ),
    section(
      "ie-intro-s4",
      "1.4 Introduction to Industrial Engineering — Common mistakes and how to avoid them",
      ["Common mistakes around introduction to industrial engineering include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Tolerances and fits determine whether assemblies function or bind.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Project management integrates scope, schedule, cost, and risk. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Safety factors account for unknown loads, defects, and human error. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Drawings communicate dimensions, materials, and finishes unambiguously. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously."]
      }
    ),
    section(
      "ie-intro-s5",
      "1.5 Introduction to Industrial Engineering — Putting the chapter together",
      ["This chapter’s through-line is simple: Introduction to Industrial Engineering connects principles to accountable action. Material properties like yield strength and fatigue limit drive design margins.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Tolerances and fits determine whether assemblies function or bind. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits introduction to industrial engineering in your field. Project management integrates scope, schedule, cost, and risk. Safety factors account for unknown loads, defects, and human error."], {
        bulletPoints: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances."]
      }
    )
    ],
    {
      learningObjectives: ["Define introduction to industrial engineering and explain why it matters in Industrial Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Introduction to Industrial Engineering connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind."],
      realWorldRelevance: "Strong grasp of introduction to industrial engineering reduces rework, supports defensible records, and speeds collaboration across Industrial Engineering Basics.",
    }
  ),
  chapter(
    "operations-research",
    2,
    "Operations Research Basics",
    [
    section(
      "operations-research-s1",
      "2.1 Operations Research Basics — Foundations and vocabulary",
      ["Operations Research Basics is a foundation in Industrial Engineering Basics because energy conversion always pays thermodynamic efficiency limits. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Material properties like yield strength and fatigue limit drive design margins. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain operations research basics aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat operations research basics as a shared model for decisions. Tolerances and fits determine whether assemblies function or bind. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "operations-research-s2",
      "2.2 Operations Research Basics — How professionals apply this in practice",
      ["Professionals rarely dispute whether operations research basics exists—they dispute how material properties like yield strength and fatigue limit drive design margins. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Tolerances and fits determine whether assemblies function or bind.","When stakes rise, pause for a second opinion or formal review. Project management integrates scope, schedule, cost, and risk. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Safety factors account for unknown loads, defects, and human error. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."]
      }
    ),
    section(
      "operations-research-s3",
      "2.3 Operations Research Basics — Workplace scenarios and documentation",
      ["Scenario: a teammate cites operations research basics in a meeting, but details in the packet do not match the textbook example. Tolerances and fits determine whether assemblies function or bind. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Project management integrates scope, schedule, cost, and risk.","Good documentation states facts, cites the framework, and records the decision. Safety factors account for unknown loads, defects, and human error. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Drawings communicate dimensions, materials, and finishes unambiguously. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins."]
      }
    ),
    section(
      "operations-research-s4",
      "2.4 Operations Research Basics — Common mistakes and how to avoid them",
      ["Common mistakes around operations research basics include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Project management integrates scope, schedule, cost, and risk.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Safety factors account for unknown loads, defects, and human error. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Drawings communicate dimensions, materials, and finishes unambiguously. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Control systems use feedback to keep outputs stable despite disturbances. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."]
      }
    ),
    section(
      "operations-research-s5",
      "2.5 Operations Research Basics — Putting the chapter together",
      ["This chapter’s through-line is simple: Operations Research Basics connects principles to accountable action. Safety factors account for unknown loads, defects, and human error.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Drawings communicate dimensions, materials, and finishes unambiguously. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits operations research basics in your field. Control systems use feedback to keep outputs stable despite disturbances. Root-cause analysis distinguishes symptoms from failure mechanisms."], {
        bulletPoints: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."]
      }
    )
    ],
    {
      learningObjectives: ["Define operations research basics and explain why it matters in Industrial Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Operations Research Basics connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Standards bodies publish test methods so measurements compare across labs.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Free-body diagrams translate physical situations into solvable force balances.","Standards bodies publish test methods so measurements compare across labs.","Root-cause analysis distinguishes symptoms from failure mechanisms."],
      realWorldRelevance: "Strong grasp of operations research basics reduces rework, supports defensible records, and speeds collaboration across Industrial Engineering Basics.",
    }
  ),
  chapter(
    "optimization",
    3,
    "Optimization and Linear Programming",
    [
    section(
      "optimization-s1",
      "3.1 Optimization and Linear Programming — Foundations and vocabulary",
      ["Optimization and Linear Programming is a foundation in Industrial Engineering Basics because safety factors account for unknown loads, defects, and human error. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Drawings communicate dimensions, materials, and finishes unambiguously. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain optimization and linear programming aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat optimization and linear programming as a shared model for decisions. Control systems use feedback to keep outputs stable despite disturbances. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "optimization-s2",
      "3.2 Optimization and Linear Programming — How professionals apply this in practice",
      ["Professionals rarely dispute whether optimization and linear programming exists—they dispute how drawings communicate dimensions, materials, and finishes unambiguously. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Control systems use feedback to keep outputs stable despite disturbances.","When stakes rise, pause for a second opinion or formal review. Root-cause analysis distinguishes symptoms from failure mechanisms. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Standards bodies publish test methods so measurements compare across labs. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins."]
      }
    ),
    section(
      "optimization-s3",
      "3.3 Optimization and Linear Programming — Workplace scenarios and documentation",
      ["Scenario: a teammate cites optimization and linear programming in a meeting, but details in the packet do not match the textbook example. Control systems use feedback to keep outputs stable despite disturbances. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Root-cause analysis distinguishes symptoms from failure mechanisms.","Good documentation states facts, cites the framework, and records the decision. Standards bodies publish test methods so measurements compare across labs. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Free-body diagrams translate physical situations into solvable force balances. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."]
      }
    ),
    section(
      "optimization-s4",
      "3.4 Optimization and Linear Programming — Common mistakes and how to avoid them",
      ["Common mistakes around optimization and linear programming include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Root-cause analysis distinguishes symptoms from failure mechanisms.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Standards bodies publish test methods so measurements compare across labs. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Free-body diagrams translate physical situations into solvable force balances. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Professional engineers stamp work they are willing to defend publicly. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."]
      }
    ),
    section(
      "optimization-s5",
      "3.5 Optimization and Linear Programming — Putting the chapter together",
      ["This chapter’s through-line is simple: Optimization and Linear Programming connects principles to accountable action. Standards bodies publish test methods so measurements compare across labs.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Free-body diagrams translate physical situations into solvable force balances. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits optimization and linear programming in your field. Professional engineers stamp work they are willing to defend publicly. Sustainability metrics increasingly constrain material and energy choices."], {
        bulletPoints: ["Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins."]
      }
    )
    ],
    {
      learningObjectives: ["Define optimization and linear programming and explain why it matters in Industrial Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Optimization and Linear Programming connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances."],
      realWorldRelevance: "Strong grasp of optimization and linear programming reduces rework, supports defensible records, and speeds collaboration across Industrial Engineering Basics.",
    }
  ),
  chapter(
    "simulation",
    4,
    "Simulation and Modeling",
    [
    section(
      "simulation-s1",
      "4.1 Simulation and Modeling — Foundations and vocabulary",
      ["Simulation and Modeling is a foundation in Industrial Engineering Basics because drawings communicate dimensions, materials, and finishes unambiguously. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Control systems use feedback to keep outputs stable despite disturbances. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain simulation and modeling aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat simulation and modeling as a shared model for decisions. Root-cause analysis distinguishes symptoms from failure mechanisms. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."],
        citations: [{"source":"NIST Reference Materials","url":"https://www.nist.gov/","note":"Standards, units, and measurement traceability"}]
      }
    ),
    section(
      "simulation-s2",
      "4.2 Simulation and Modeling — How professionals apply this in practice",
      ["Professionals rarely dispute whether simulation and modeling exists—they dispute how safety factors account for unknown loads, defects, and human error. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Drawings communicate dimensions, materials, and finishes unambiguously.","When stakes rise, pause for a second opinion or formal review. Control systems use feedback to keep outputs stable despite disturbances. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Root-cause analysis distinguishes symptoms from failure mechanisms. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly."]
      }
    ),
    section(
      "simulation-s3",
      "4.3 Simulation and Modeling — Workplace scenarios and documentation",
      ["Scenario: a teammate cites simulation and modeling in a meeting, but details in the packet do not match the textbook example. Project management integrates scope, schedule, cost, and risk. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Safety factors account for unknown loads, defects, and human error.","Good documentation states facts, cites the framework, and records the decision. Drawings communicate dimensions, materials, and finishes unambiguously. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Control systems use feedback to keep outputs stable despite disturbances. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."]
      }
    ),
    section(
      "simulation-s4",
      "4.4 Simulation and Modeling — Common mistakes and how to avoid them",
      ["Common mistakes around simulation and modeling include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Tolerances and fits determine whether assemblies function or bind.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Project management integrates scope, schedule, cost, and risk. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Safety factors account for unknown loads, defects, and human error. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Drawings communicate dimensions, materials, and finishes unambiguously. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."]
      }
    ),
    section(
      "simulation-s5",
      "4.5 Simulation and Modeling — Putting the chapter together",
      ["This chapter’s through-line is simple: Simulation and Modeling connects principles to accountable action. Material properties like yield strength and fatigue limit drive design margins.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Tolerances and fits determine whether assemblies function or bind. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits simulation and modeling in your field. Project management integrates scope, schedule, cost, and risk. Safety factors account for unknown loads, defects, and human error."], {
        bulletPoints: ["Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly."]
      }
    )
    ],
    {
      learningObjectives: ["Define simulation and modeling and explain why it matters in Industrial Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Simulation and Modeling connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Control systems use feedback to keep outputs stable despite disturbances.","Standards bodies publish test methods so measurements compare across labs.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Control systems use feedback to keep outputs stable despite disturbances."],
      realWorldRelevance: "Strong grasp of simulation and modeling reduces rework, supports defensible records, and speeds collaboration across Industrial Engineering Basics.",
    }
  ),
  chapter(
    "quality-systems",
    5,
    "Quality Systems and Six Sigma",
    [
    section(
      "quality-systems-s1",
      "5.1 Quality Systems and Six Sigma — Foundations and vocabulary",
      ["Quality Systems and Six Sigma is a foundation in Industrial Engineering Basics because sustainability metrics increasingly constrain material and energy choices. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Energy conversion always pays thermodynamic efficiency limits. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain quality systems and six sigma aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat quality systems and six sigma as a shared model for decisions. Material properties like yield strength and fatigue limit drive design margins. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Material properties like yield strength and fatigue limit drive design margins.","Control systems use feedback to keep outputs stable despite disturbances.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error."],
        citations: [{"source":"NIST Reference Materials","url":"https://www.nist.gov/","note":"Standards, units, and measurement traceability"}]
      }
    ),
    section(
      "quality-systems-s2",
      "5.2 Quality Systems and Six Sigma — How professionals apply this in practice",
      ["Professionals rarely dispute whether quality systems and six sigma exists—they dispute how professional engineers stamp work they are willing to defend publicly. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Sustainability metrics increasingly constrain material and energy choices.","When stakes rise, pause for a second opinion or formal review. Energy conversion always pays thermodynamic efficiency limits. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Material properties like yield strength and fatigue limit drive design margins. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Control systems use feedback to keep outputs stable despite disturbances.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk."]
      }
    ),
    section(
      "quality-systems-s3",
      "5.3 Quality Systems and Six Sigma — Workplace scenarios and documentation",
      ["Scenario: a teammate cites quality systems and six sigma in a meeting, but details in the packet do not match the textbook example. Free-body diagrams translate physical situations into solvable force balances. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Professional engineers stamp work they are willing to defend publicly.","Good documentation states facts, cites the framework, and records the decision. Sustainability metrics increasingly constrain material and energy choices. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Energy conversion always pays thermodynamic efficiency limits. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Control systems use feedback to keep outputs stable despite disturbances.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously."]
      }
    ),
    section(
      "quality-systems-s4",
      "5.4 Quality Systems and Six Sigma — Common mistakes and how to avoid them",
      ["Common mistakes around quality systems and six sigma include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Standards bodies publish test methods so measurements compare across labs.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Free-body diagrams translate physical situations into solvable force balances. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Professional engineers stamp work they are willing to defend publicly. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Sustainability metrics increasingly constrain material and energy choices. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Material properties like yield strength and fatigue limit drive design margins.","Control systems use feedback to keep outputs stable despite disturbances.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error."]
      }
    ),
    section(
      "quality-systems-s5",
      "5.5 Quality Systems and Six Sigma — Putting the chapter together",
      ["This chapter’s through-line is simple: Quality Systems and Six Sigma connects principles to accountable action. Root-cause analysis distinguishes symptoms from failure mechanisms.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Standards bodies publish test methods so measurements compare across labs. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits quality systems and six sigma in your field. Free-body diagrams translate physical situations into solvable force balances. Professional engineers stamp work they are willing to defend publicly."], {
        bulletPoints: ["Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Control systems use feedback to keep outputs stable despite disturbances.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk."]
      }
    )
    ],
    {
      learningObjectives: ["Define quality systems and six sigma and explain why it matters in Industrial Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Quality Systems and Six Sigma connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Material properties like yield strength and fatigue limit drive design margins.","Energy conversion always pays thermodynamic efficiency limits.","Control systems use feedback to keep outputs stable despite disturbances.","Material properties like yield strength and fatigue limit drive design margins.","Energy conversion always pays thermodynamic efficiency limits."],
      realWorldRelevance: "Strong grasp of quality systems and six sigma reduces rework, supports defensible records, and speeds collaboration across Industrial Engineering Basics.",
    }
  ),
  chapter(
    "lean-manufacturing",
    6,
    "Lean Manufacturing",
    [
    section(
      "lean-manufacturing-s1",
      "6.1 Lean Manufacturing — Foundations and vocabulary",
      ["Lean Manufacturing is a foundation in Industrial Engineering Basics because professional engineers stamp work they are willing to defend publicly. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Sustainability metrics increasingly constrain material and energy choices. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain lean manufacturing aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat lean manufacturing as a shared model for decisions. Energy conversion always pays thermodynamic efficiency limits. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "lean-manufacturing-s2",
      "6.2 Lean Manufacturing — How professionals apply this in practice",
      ["Professionals rarely dispute whether lean manufacturing exists—they dispute how sustainability metrics increasingly constrain material and energy choices. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Energy conversion always pays thermodynamic efficiency limits.","When stakes rise, pause for a second opinion or formal review. Material properties like yield strength and fatigue limit drive design margins. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Tolerances and fits determine whether assemblies function or bind. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances."]
      }
    ),
    section(
      "lean-manufacturing-s3",
      "6.3 Lean Manufacturing — Workplace scenarios and documentation",
      ["Scenario: a teammate cites lean manufacturing in a meeting, but details in the packet do not match the textbook example. Energy conversion always pays thermodynamic efficiency limits. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Material properties like yield strength and fatigue limit drive design margins.","Good documentation states facts, cites the framework, and records the decision. Tolerances and fits determine whether assemblies function or bind. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Project management integrates scope, schedule, cost, and risk. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."]
      }
    ),
    section(
      "lean-manufacturing-s4",
      "6.4 Lean Manufacturing — Common mistakes and how to avoid them",
      ["Common mistakes around lean manufacturing include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Material properties like yield strength and fatigue limit drive design margins.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Tolerances and fits determine whether assemblies function or bind. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Project management integrates scope, schedule, cost, and risk. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Safety factors account for unknown loads, defects, and human error. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly."]
      }
    ),
    section(
      "lean-manufacturing-s5",
      "6.5 Lean Manufacturing — Putting the chapter together",
      ["This chapter’s through-line is simple: Lean Manufacturing connects principles to accountable action. Tolerances and fits determine whether assemblies function or bind.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Project management integrates scope, schedule, cost, and risk. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits lean manufacturing in your field. Safety factors account for unknown loads, defects, and human error. Drawings communicate dimensions, materials, and finishes unambiguously."], {
        bulletPoints: ["Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances."]
      }
    )
    ],
    {
      learningObjectives: ["Define lean manufacturing and explain why it matters in Industrial Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Lean Manufacturing connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Control systems use feedback to keep outputs stable despite disturbances.","Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Control systems use feedback to keep outputs stable despite disturbances.","Drawings communicate dimensions, materials, and finishes unambiguously."],
      realWorldRelevance: "Strong grasp of lean manufacturing reduces rework, supports defensible records, and speeds collaboration across Industrial Engineering Basics.",
    }
  ),
  chapter(
    "supply-chain",
    7,
    "Supply Chain Engineering",
    [
    section(
      "supply-chain-s1",
      "7.1 Supply Chain Engineering — Foundations and vocabulary",
      ["Supply Chain Engineering is a foundation in Industrial Engineering Basics because project management integrates scope, schedule, cost, and risk. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Safety factors account for unknown loads, defects, and human error. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain supply chain engineering aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat supply chain engineering as a shared model for decisions. Drawings communicate dimensions, materials, and finishes unambiguously. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms."],
        citations: [{"source":"NIST Reference Materials","url":"https://www.nist.gov/","note":"Standards, units, and measurement traceability"}]
      }
    ),
    section(
      "supply-chain-s2",
      "7.2 Supply Chain Engineering — How professionals apply this in practice",
      ["Professionals rarely dispute whether supply chain engineering exists—they dispute how safety factors account for unknown loads, defects, and human error. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Drawings communicate dimensions, materials, and finishes unambiguously.","When stakes rise, pause for a second opinion or formal review. Control systems use feedback to keep outputs stable despite disturbances. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Root-cause analysis distinguishes symptoms from failure mechanisms. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances."]
      }
    ),
    section(
      "supply-chain-s3",
      "7.3 Supply Chain Engineering — Workplace scenarios and documentation",
      ["Scenario: a teammate cites supply chain engineering in a meeting, but details in the packet do not match the textbook example. Drawings communicate dimensions, materials, and finishes unambiguously. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Control systems use feedback to keep outputs stable despite disturbances.","Good documentation states facts, cites the framework, and records the decision. Root-cause analysis distinguishes symptoms from failure mechanisms. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Standards bodies publish test methods so measurements compare across labs. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs."]
      }
    ),
    section(
      "supply-chain-s4",
      "7.4 Supply Chain Engineering — Common mistakes and how to avoid them",
      ["Common mistakes around supply chain engineering include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Control systems use feedback to keep outputs stable despite disturbances.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Root-cause analysis distinguishes symptoms from failure mechanisms. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Standards bodies publish test methods so measurements compare across labs. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Free-body diagrams translate physical situations into solvable force balances. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms."]
      }
    ),
    section(
      "supply-chain-s5",
      "7.5 Supply Chain Engineering — Putting the chapter together",
      ["This chapter’s through-line is simple: Supply Chain Engineering connects principles to accountable action. Root-cause analysis distinguishes symptoms from failure mechanisms.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Standards bodies publish test methods so measurements compare across labs. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits supply chain engineering in your field. Free-body diagrams translate physical situations into solvable force balances. Professional engineers stamp work they are willing to defend publicly."], {
        bulletPoints: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances."]
      }
    )
    ],
    {
      learningObjectives: ["Define supply chain engineering and explain why it matters in Industrial Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Supply Chain Engineering connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Project management integrates scope, schedule, cost, and risk.","Tolerances and fits determine whether assemblies function or bind.","Safety factors account for unknown loads, defects, and human error.","Project management integrates scope, schedule, cost, and risk.","Tolerances and fits determine whether assemblies function or bind."],
      realWorldRelevance: "Strong grasp of supply chain engineering reduces rework, supports defensible records, and speeds collaboration across Industrial Engineering Basics.",
    }
  ),
  chapter(
    "facilities-layout",
    8,
    "Facilities Layout and Design",
    [
    section(
      "facilities-layout-s1",
      "8.1 Facilities Layout and Design — Foundations and vocabulary",
      ["Facilities Layout and Design is a foundation in Industrial Engineering Basics because root-cause analysis distinguishes symptoms from failure mechanisms. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Standards bodies publish test methods so measurements compare across labs. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain facilities layout and design aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat facilities layout and design as a shared model for decisions. Free-body diagrams translate physical situations into solvable force balances. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "facilities-layout-s2",
      "8.2 Facilities Layout and Design — How professionals apply this in practice",
      ["Professionals rarely dispute whether facilities layout and design exists—they dispute how standards bodies publish test methods so measurements compare across labs. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Free-body diagrams translate physical situations into solvable force balances.","When stakes rise, pause for a second opinion or formal review. Professional engineers stamp work they are willing to defend publicly. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Sustainability metrics increasingly constrain material and energy choices. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error."]
      }
    ),
    section(
      "facilities-layout-s3",
      "8.3 Facilities Layout and Design — Workplace scenarios and documentation",
      ["Scenario: a teammate cites facilities layout and design in a meeting, but details in the packet do not match the textbook example. Free-body diagrams translate physical situations into solvable force balances. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Professional engineers stamp work they are willing to defend publicly.","Good documentation states facts, cites the framework, and records the decision. Sustainability metrics increasingly constrain material and energy choices. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Energy conversion always pays thermodynamic efficiency limits. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind."]
      }
    ),
    section(
      "facilities-layout-s4",
      "8.4 Facilities Layout and Design — Common mistakes and how to avoid them",
      ["Common mistakes around facilities layout and design include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Professional engineers stamp work they are willing to defend publicly.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Sustainability metrics increasingly constrain material and energy choices. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Energy conversion always pays thermodynamic efficiency limits. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Material properties like yield strength and fatigue limit drive design margins. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk."]
      }
    ),
    section(
      "facilities-layout-s5",
      "8.5 Facilities Layout and Design — Putting the chapter together",
      ["This chapter’s through-line is simple: Facilities Layout and Design connects principles to accountable action. Sustainability metrics increasingly constrain material and energy choices.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Energy conversion always pays thermodynamic efficiency limits. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits facilities layout and design in your field. Material properties like yield strength and fatigue limit drive design margins. Tolerances and fits determine whether assemblies function or bind."], {
        bulletPoints: ["Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error."]
      }
    )
    ],
    {
      learningObjectives: ["Define facilities layout and design and explain why it matters in Industrial Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Facilities Layout and Design connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."],
      realWorldRelevance: "Strong grasp of facilities layout and design reduces rework, supports defensible records, and speeds collaboration across Industrial Engineering Basics.",
    }
  ),
  chapter(
    "ergonomics",
    9,
    "Ergonomics and Human Factors",
    [
    section(
      "ergonomics-s1",
      "9.1 Ergonomics and Human Factors — Foundations and vocabulary",
      ["Ergonomics and Human Factors is a foundation in Industrial Engineering Basics because energy conversion always pays thermodynamic efficiency limits. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Material properties like yield strength and fatigue limit drive design margins. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ergonomics and human factors aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ergonomics and human factors as a shared model for decisions. Safety factors account for unknown loads, defects, and human error. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "ergonomics-s2",
      "9.2 Ergonomics and Human Factors — How professionals apply this in practice",
      ["Professionals rarely dispute whether ergonomics and human factors exists—they dispute how sustainability metrics increasingly constrain material and energy choices. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Energy conversion always pays thermodynamic efficiency limits.","When stakes rise, pause for a second opinion or formal review. Material properties like yield strength and fatigue limit drive design margins. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Safety factors account for unknown loads, defects, and human error. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms."]
      }
    ),
    section(
      "ergonomics-s3",
      "9.3 Ergonomics and Human Factors — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ergonomics and human factors in a meeting, but details in the packet do not match the textbook example. Professional engineers stamp work they are willing to defend publicly. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Sustainability metrics increasingly constrain material and energy choices.","Good documentation states facts, cites the framework, and records the decision. Energy conversion always pays thermodynamic efficiency limits. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Material properties like yield strength and fatigue limit drive design margins. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances."]
      }
    ),
    section(
      "ergonomics-s4",
      "9.4 Ergonomics and Human Factors — Common mistakes and how to avoid them",
      ["Common mistakes around ergonomics and human factors include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Free-body diagrams translate physical situations into solvable force balances.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Professional engineers stamp work they are willing to defend publicly. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Sustainability metrics increasingly constrain material and energy choices. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Energy conversion always pays thermodynamic efficiency limits. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs."]
      }
    ),
    section(
      "ergonomics-s5",
      "9.5 Ergonomics and Human Factors — Putting the chapter together",
      ["This chapter’s through-line is simple: Ergonomics and Human Factors connects principles to accountable action. Standards bodies publish test methods so measurements compare across labs.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Free-body diagrams translate physical situations into solvable force balances. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ergonomics and human factors in your field. Professional engineers stamp work they are willing to defend publicly. Sustainability metrics increasingly constrain material and energy choices."], {
        bulletPoints: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms."]
      }
    )
    ],
    {
      learningObjectives: ["Define ergonomics and human factors and explain why it matters in Industrial Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Ergonomics and Human Factors connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Project management integrates scope, schedule, cost, and risk.","Tolerances and fits determine whether assemblies function or bind.","Drawings communicate dimensions, materials, and finishes unambiguously.","Project management integrates scope, schedule, cost, and risk.","Tolerances and fits determine whether assemblies function or bind."],
      realWorldRelevance: "Strong grasp of ergonomics and human factors reduces rework, supports defensible records, and speeds collaboration across Industrial Engineering Basics.",
    }
  ),
  chapter(
    "production-planning",
    10,
    "Production Planning and Scheduling",
    [
    section(
      "production-planning-s1",
      "10.1 Production Planning and Scheduling — Foundations and vocabulary",
      ["Production Planning and Scheduling is a foundation in Industrial Engineering Basics because project management integrates scope, schedule, cost, and risk. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Safety factors account for unknown loads, defects, and human error. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain production planning and scheduling aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat production planning and scheduling as a shared model for decisions. Drawings communicate dimensions, materials, and finishes unambiguously. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances."],
        citations: [{"source":"NIST Reference Materials","url":"https://www.nist.gov/","note":"Standards, units, and measurement traceability"}]
      }
    ),
    section(
      "production-planning-s2",
      "10.2 Production Planning and Scheduling — How professionals apply this in practice",
      ["Professionals rarely dispute whether production planning and scheduling exists—they dispute how tolerances and fits determine whether assemblies function or bind. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Project management integrates scope, schedule, cost, and risk.","When stakes rise, pause for a second opinion or formal review. Safety factors account for unknown loads, defects, and human error. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Drawings communicate dimensions, materials, and finishes unambiguously. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs."]
      }
    ),
    section(
      "production-planning-s3",
      "10.3 Production Planning and Scheduling — Workplace scenarios and documentation",
      ["Scenario: a teammate cites production planning and scheduling in a meeting, but details in the packet do not match the textbook example. Material properties like yield strength and fatigue limit drive design margins. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Tolerances and fits determine whether assemblies function or bind.","Good documentation states facts, cites the framework, and records the decision. Project management integrates scope, schedule, cost, and risk. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Safety factors account for unknown loads, defects, and human error. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly."]
      }
    ),
    section(
      "production-planning-s4",
      "10.4 Production Planning and Scheduling — Common mistakes and how to avoid them",
      ["Common mistakes around production planning and scheduling include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Energy conversion always pays thermodynamic efficiency limits.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Material properties like yield strength and fatigue limit drive design margins. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Tolerances and fits determine whether assemblies function or bind. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Project management integrates scope, schedule, cost, and risk. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances."]
      }
    ),
    section(
      "production-planning-s5",
      "10.5 Production Planning and Scheduling — Putting the chapter together",
      ["This chapter’s through-line is simple: Production Planning and Scheduling connects principles to accountable action. Sustainability metrics increasingly constrain material and energy choices.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Energy conversion always pays thermodynamic efficiency limits. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits production planning and scheduling in your field. Material properties like yield strength and fatigue limit drive design margins. Tolerances and fits determine whether assemblies function or bind."], {
        bulletPoints: ["Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs."]
      }
    )
    ],
    {
      learningObjectives: ["Define production planning and scheduling and explain why it matters in Industrial Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Production Planning and Scheduling connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Drawings communicate dimensions, materials, and finishes unambiguously.","Safety factors account for unknown loads, defects, and human error.","Control systems use feedback to keep outputs stable despite disturbances.","Drawings communicate dimensions, materials, and finishes unambiguously.","Safety factors account for unknown loads, defects, and human error."],
      realWorldRelevance: "Strong grasp of production planning and scheduling reduces rework, supports defensible records, and speeds collaboration across Industrial Engineering Basics.",
    }
  ),
  chapter(
    "inventory-management",
    11,
    "Inventory and Warehouse Systems",
    [
    section(
      "inventory-management-s1",
      "11.1 Inventory and Warehouse Systems — Foundations and vocabulary",
      ["Inventory and Warehouse Systems is a foundation in Industrial Engineering Basics because energy conversion always pays thermodynamic efficiency limits. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Material properties like yield strength and fatigue limit drive design margins. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain inventory and warehouse systems aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat inventory and warehouse systems as a shared model for decisions. Control systems use feedback to keep outputs stable despite disturbances. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "inventory-management-s2",
      "11.2 Inventory and Warehouse Systems — How professionals apply this in practice",
      ["Professionals rarely dispute whether inventory and warehouse systems exists—they dispute how sustainability metrics increasingly constrain material and energy choices. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Energy conversion always pays thermodynamic efficiency limits.","When stakes rise, pause for a second opinion or formal review. Material properties like yield strength and fatigue limit drive design margins. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Control systems use feedback to keep outputs stable despite disturbances. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms."]
      }
    ),
    section(
      "inventory-management-s3",
      "11.3 Inventory and Warehouse Systems — Workplace scenarios and documentation",
      ["Scenario: a teammate cites inventory and warehouse systems in a meeting, but details in the packet do not match the textbook example. Professional engineers stamp work they are willing to defend publicly. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Sustainability metrics increasingly constrain material and energy choices.","Good documentation states facts, cites the framework, and records the decision. Energy conversion always pays thermodynamic efficiency limits. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Material properties like yield strength and fatigue limit drive design margins. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances."]
      }
    ),
    section(
      "inventory-management-s4",
      "11.4 Inventory and Warehouse Systems — Common mistakes and how to avoid them",
      ["Common mistakes around inventory and warehouse systems include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Free-body diagrams translate physical situations into solvable force balances.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Professional engineers stamp work they are willing to defend publicly. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Sustainability metrics increasingly constrain material and energy choices. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Energy conversion always pays thermodynamic efficiency limits. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs."]
      }
    ),
    section(
      "inventory-management-s5",
      "11.5 Inventory and Warehouse Systems — Putting the chapter together",
      ["This chapter’s through-line is simple: Inventory and Warehouse Systems connects principles to accountable action. Standards bodies publish test methods so measurements compare across labs.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Free-body diagrams translate physical situations into solvable force balances. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits inventory and warehouse systems in your field. Professional engineers stamp work they are willing to defend publicly. Sustainability metrics increasingly constrain material and energy choices."], {
        bulletPoints: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms."]
      }
    )
    ],
    {
      learningObjectives: ["Define inventory and warehouse systems and explain why it matters in Industrial Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Inventory and Warehouse Systems connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Project management integrates scope, schedule, cost, and risk.","Tolerances and fits determine whether assemblies function or bind.","Safety factors account for unknown loads, defects, and human error.","Project management integrates scope, schedule, cost, and risk.","Tolerances and fits determine whether assemblies function or bind."],
      realWorldRelevance: "Strong grasp of inventory and warehouse systems reduces rework, supports defensible records, and speeds collaboration across Industrial Engineering Basics.",
    }
  ),
  chapter(
    "project-management-ie",
    12,
    "Engineering Project Management",
    [
    section(
      "project-management-ie-s1",
      "12.1 Engineering Project Management — Foundations and vocabulary",
      ["Engineering Project Management is a foundation in Industrial Engineering Basics because sustainability metrics increasingly constrain material and energy choices. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Energy conversion always pays thermodynamic efficiency limits. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain engineering project management aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat engineering project management as a shared model for decisions. Material properties like yield strength and fatigue limit drive design margins. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Material properties like yield strength and fatigue limit drive design margins.","Project management integrates scope, schedule, cost, and risk.","Tolerances and fits determine whether assemblies function or bind.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously."],
        citations: [{"source":"NIST Reference Materials","url":"https://www.nist.gov/","note":"Standards, units, and measurement traceability"}]
      }
    ),
    section(
      "project-management-ie-s2",
      "12.2 Engineering Project Management — How professionals apply this in practice",
      ["Professionals rarely dispute whether engineering project management exists—they dispute how energy conversion always pays thermodynamic efficiency limits. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Material properties like yield strength and fatigue limit drive design margins.","When stakes rise, pause for a second opinion or formal review. Project management integrates scope, schedule, cost, and risk. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Tolerances and fits determine whether assemblies function or bind. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Tolerances and fits determine whether assemblies function or bind.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances."]
      }
    ),
    section(
      "project-management-ie-s3",
      "12.3 Engineering Project Management — Workplace scenarios and documentation",
      ["Scenario: a teammate cites engineering project management in a meeting, but details in the packet do not match the textbook example. Material properties like yield strength and fatigue limit drive design margins. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Project management integrates scope, schedule, cost, and risk.","Good documentation states facts, cites the framework, and records the decision. Tolerances and fits determine whether assemblies function or bind. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Safety factors account for unknown loads, defects, and human error. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Project management integrates scope, schedule, cost, and risk.","Tolerances and fits determine whether assemblies function or bind.","Safety factors account for unknown loads, defects, and human error."]
      }
    ),
    section(
      "project-management-ie-s4",
      "12.4 Engineering Project Management — Common mistakes and how to avoid them",
      ["Common mistakes around engineering project management include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Project management integrates scope, schedule, cost, and risk.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Tolerances and fits determine whether assemblies function or bind. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Safety factors account for unknown loads, defects, and human error. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Drawings communicate dimensions, materials, and finishes unambiguously. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Material properties like yield strength and fatigue limit drive design margins.","Project management integrates scope, schedule, cost, and risk.","Tolerances and fits determine whether assemblies function or bind.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously."]
      }
    ),
    section(
      "project-management-ie-s5",
      "12.5 Engineering Project Management — Putting the chapter together",
      ["This chapter’s through-line is simple: Engineering Project Management connects principles to accountable action. Tolerances and fits determine whether assemblies function or bind.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Safety factors account for unknown loads, defects, and human error. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits engineering project management in your field. Drawings communicate dimensions, materials, and finishes unambiguously. Control systems use feedback to keep outputs stable despite disturbances."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Tolerances and fits determine whether assemblies function or bind.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances."]
      }
    )
    ],
    {
      learningObjectives: ["Define engineering project management and explain why it matters in Industrial Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Engineering Project Management connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Material properties like yield strength and fatigue limit drive design margins.","Project management integrates scope, schedule, cost, and risk.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Project management integrates scope, schedule, cost, and risk."],
      realWorldRelevance: "Strong grasp of engineering project management reduces rework, supports defensible records, and speeds collaboration across Industrial Engineering Basics.",
    }
  ),
  chapter(
    "data-analytics-ie",
    13,
    "Data Analytics for Operations",
    [
    section(
      "data-analytics-ie-s1",
      "13.1 Data Analytics for Operations — Foundations and vocabulary",
      ["Data Analytics for Operations is a foundation in Industrial Engineering Basics because project management integrates scope, schedule, cost, and risk. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Safety factors account for unknown loads, defects, and human error. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain data analytics for operations aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat data analytics for operations as a shared model for decisions. Drawings communicate dimensions, materials, and finishes unambiguously. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously."],
        citations: [{"source":"NIST Reference Materials","url":"https://www.nist.gov/","note":"Standards, units, and measurement traceability"}]
      }
    ),
    section(
      "data-analytics-ie-s2",
      "13.2 Data Analytics for Operations — How professionals apply this in practice",
      ["Professionals rarely dispute whether data analytics for operations exists—they dispute how safety factors account for unknown loads, defects, and human error. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Drawings communicate dimensions, materials, and finishes unambiguously.","When stakes rise, pause for a second opinion or formal review. Control systems use feedback to keep outputs stable despite disturbances. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Root-cause analysis distinguishes symptoms from failure mechanisms. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances."]
      }
    ),
    section(
      "data-analytics-ie-s3",
      "13.3 Data Analytics for Operations — Workplace scenarios and documentation",
      ["Scenario: a teammate cites data analytics for operations in a meeting, but details in the packet do not match the textbook example. Drawings communicate dimensions, materials, and finishes unambiguously. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Control systems use feedback to keep outputs stable despite disturbances.","Good documentation states facts, cites the framework, and records the decision. Root-cause analysis distinguishes symptoms from failure mechanisms. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Standards bodies publish test methods so measurements compare across labs. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error."]
      }
    ),
    section(
      "data-analytics-ie-s4",
      "13.4 Data Analytics for Operations — Common mistakes and how to avoid them",
      ["Common mistakes around data analytics for operations include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Control systems use feedback to keep outputs stable despite disturbances.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Root-cause analysis distinguishes symptoms from failure mechanisms. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Standards bodies publish test methods so measurements compare across labs. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Free-body diagrams translate physical situations into solvable force balances. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously."]
      }
    ),
    section(
      "data-analytics-ie-s5",
      "13.5 Data Analytics for Operations — Putting the chapter together",
      ["This chapter’s through-line is simple: Data Analytics for Operations connects principles to accountable action. Root-cause analysis distinguishes symptoms from failure mechanisms.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Standards bodies publish test methods so measurements compare across labs. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits data analytics for operations in your field. Free-body diagrams translate physical situations into solvable force balances. Professional engineers stamp work they are willing to defend publicly."], {
        bulletPoints: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances."]
      }
    )
    ],
    {
      learningObjectives: ["Define data analytics for operations and explain why it matters in Industrial Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Data Analytics for Operations connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind."],
      realWorldRelevance: "Strong grasp of data analytics for operations reduces rework, supports defensible records, and speeds collaboration across Industrial Engineering Basics.",
    }
  ),
  chapter(
    "automation-ie",
    14,
    "Automation and Industry 4.0",
    [
    section(
      "automation-ie-s1",
      "14.1 Automation and Industry 4.0 — Foundations and vocabulary",
      ["Automation and Industry 4.0 is a foundation in Industrial Engineering Basics because standards bodies publish test methods so measurements compare across labs. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Free-body diagrams translate physical situations into solvable force balances. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain automation and industry 4.0 aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat automation and industry 4.0 as a shared model for decisions. Professional engineers stamp work they are willing to defend publicly. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "automation-ie-s2",
      "14.2 Automation and Industry 4.0 — How professionals apply this in practice",
      ["Professionals rarely dispute whether automation and industry 4.0 exists—they dispute how free-body diagrams translate physical situations into solvable force balances. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Professional engineers stamp work they are willing to defend publicly.","When stakes rise, pause for a second opinion or formal review. Sustainability metrics increasingly constrain material and energy choices. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Energy conversion always pays thermodynamic efficiency limits. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."]
      }
    ),
    section(
      "automation-ie-s3",
      "14.3 Automation and Industry 4.0 — Workplace scenarios and documentation",
      ["Scenario: a teammate cites automation and industry 4.0 in a meeting, but details in the packet do not match the textbook example. Professional engineers stamp work they are willing to defend publicly. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Sustainability metrics increasingly constrain material and energy choices.","Good documentation states facts, cites the framework, and records the decision. Energy conversion always pays thermodynamic efficiency limits. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Material properties like yield strength and fatigue limit drive design margins. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins."]
      }
    ),
    section(
      "automation-ie-s4",
      "14.4 Automation and Industry 4.0 — Common mistakes and how to avoid them",
      ["Common mistakes around automation and industry 4.0 include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Sustainability metrics increasingly constrain material and energy choices.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Energy conversion always pays thermodynamic efficiency limits. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Material properties like yield strength and fatigue limit drive design margins. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Tolerances and fits determine whether assemblies function or bind. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."]
      }
    ),
    section(
      "automation-ie-s5",
      "14.5 Automation and Industry 4.0 — Putting the chapter together",
      ["This chapter’s through-line is simple: Automation and Industry 4.0 connects principles to accountable action. Energy conversion always pays thermodynamic efficiency limits.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Material properties like yield strength and fatigue limit drive design margins. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits automation and industry 4.0 in your field. Tolerances and fits determine whether assemblies function or bind. Project management integrates scope, schedule, cost, and risk."], {
        bulletPoints: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."]
      }
    )
    ],
    {
      learningObjectives: ["Define automation and industry 4.0 and explain why it matters in Industrial Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Automation and Industry 4.0 connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Standards bodies publish test methods so measurements compare across labs.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Free-body diagrams translate physical situations into solvable force balances.","Standards bodies publish test methods so measurements compare across labs.","Root-cause analysis distinguishes symptoms from failure mechanisms."],
      realWorldRelevance: "Strong grasp of automation and industry 4.0 reduces rework, supports defensible records, and speeds collaboration across Industrial Engineering Basics.",
    }
  ),
  chapter(
    "ie-careers",
    15,
    "Industrial Engineering Careers",
    [
    section(
      "ie-careers-s1",
      "15.1 Industrial Engineering Careers — Foundations and vocabulary",
      ["Industrial Engineering Careers is a foundation in Industrial Engineering Basics because sustainability metrics increasingly constrain material and energy choices. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Energy conversion always pays thermodynamic efficiency limits. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain industrial engineering careers aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat industrial engineering careers as a shared model for decisions. Material properties like yield strength and fatigue limit drive design margins. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."],
        citations: [{"source":"NIST Reference Materials","url":"https://www.nist.gov/","note":"Standards, units, and measurement traceability"}]
      }
    ),
    section(
      "ie-careers-s2",
      "15.2 Industrial Engineering Careers — How professionals apply this in practice",
      ["Professionals rarely dispute whether industrial engineering careers exists—they dispute how professional engineers stamp work they are willing to defend publicly. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Sustainability metrics increasingly constrain material and energy choices.","When stakes rise, pause for a second opinion or formal review. Energy conversion always pays thermodynamic efficiency limits. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Material properties like yield strength and fatigue limit drive design margins. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."]
      }
    ),
    section(
      "ie-careers-s3",
      "15.3 Industrial Engineering Careers — Workplace scenarios and documentation",
      ["Scenario: a teammate cites industrial engineering careers in a meeting, but details in the packet do not match the textbook example. Free-body diagrams translate physical situations into solvable force balances. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Professional engineers stamp work they are willing to defend publicly.","Good documentation states facts, cites the framework, and records the decision. Sustainability metrics increasingly constrain material and energy choices. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Energy conversion always pays thermodynamic efficiency limits. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly."]
      }
    ),
    section(
      "ie-careers-s4",
      "15.4 Industrial Engineering Careers — Common mistakes and how to avoid them",
      ["Common mistakes around industrial engineering careers include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Standards bodies publish test methods so measurements compare across labs.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Free-body diagrams translate physical situations into solvable force balances. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Professional engineers stamp work they are willing to defend publicly. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Sustainability metrics increasingly constrain material and energy choices. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."]
      }
    ),
    section(
      "ie-careers-s5",
      "15.5 Industrial Engineering Careers — Putting the chapter together",
      ["This chapter’s through-line is simple: Industrial Engineering Careers connects principles to accountable action. Root-cause analysis distinguishes symptoms from failure mechanisms.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Standards bodies publish test methods so measurements compare across labs. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits industrial engineering careers in your field. Free-body diagrams translate physical situations into solvable force balances. Professional engineers stamp work they are willing to defend publicly."], {
        bulletPoints: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."]
      }
    )
    ],
    {
      learningObjectives: ["Define industrial engineering careers and explain why it matters in Industrial Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Industrial Engineering Careers connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs."],
      realWorldRelevance: "Strong grasp of industrial engineering careers reduces rework, supports defensible records, and speeds collaboration across Industrial Engineering Basics.",
    }
  )
];
