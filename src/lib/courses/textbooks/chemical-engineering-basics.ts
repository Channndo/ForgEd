import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const CHE_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Chemical Engineering Basics",
  subtitle: "ForgEd deep-dive — chemical engineering basics",
  paragraphs: [
    "This ForgEd digital textbook presents Chemical Engineering Basics at academic survey depth — cited frameworks, rigorous prose, and chapter learning objectives. 15 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Material is engineering literacy, not a PE stamp or design approval.",
  ],
};

export const CHE_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "che-intro",
    1,
    "Introduction to Chemical Engineering",
    [
    section(
      "che-intro-s1",
      "1.1 Introduction to Chemical Engineering — Foundations and vocabulary",
      ["Introduction to Chemical Engineering is a foundation in Chemical Engineering Basics because tolerances and fits determine whether assemblies function or bind. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Project management integrates scope, schedule, cost, and risk. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain introduction to chemical engineering aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat introduction to chemical engineering as a shared model for decisions. Safety factors account for unknown loads, defects, and human error. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "che-intro-s2",
      "1.2 Introduction to Chemical Engineering — How professionals apply this in practice",
      ["Professionals rarely dispute whether introduction to chemical engineering exists—they dispute how material properties like yield strength and fatigue limit drive design margins. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Tolerances and fits determine whether assemblies function or bind.","When stakes rise, pause for a second opinion or formal review. Project management integrates scope, schedule, cost, and risk. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Safety factors account for unknown loads, defects, and human error. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously."]
      }
    ),
    section(
      "che-intro-s3",
      "1.3 Introduction to Chemical Engineering — Workplace scenarios and documentation",
      ["Scenario: a teammate cites introduction to chemical engineering in a meeting, but details in the packet do not match the textbook example. Energy conversion always pays thermodynamic efficiency limits. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Material properties like yield strength and fatigue limit drive design margins.","Good documentation states facts, cites the framework, and records the decision. Tolerances and fits determine whether assemblies function or bind. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Project management integrates scope, schedule, cost, and risk. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms."]
      }
    ),
    section(
      "che-intro-s4",
      "1.4 Introduction to Chemical Engineering — Common mistakes and how to avoid them",
      ["Common mistakes around introduction to chemical engineering include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Sustainability metrics increasingly constrain material and energy choices.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Energy conversion always pays thermodynamic efficiency limits. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Material properties like yield strength and fatigue limit drive design margins. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Tolerances and fits determine whether assemblies function or bind. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances."]
      }
    ),
    section(
      "che-intro-s5",
      "1.5 Introduction to Chemical Engineering — Putting the chapter together",
      ["This chapter’s through-line is simple: Introduction to Chemical Engineering connects principles to accountable action. Professional engineers stamp work they are willing to defend publicly.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Sustainability metrics increasingly constrain material and energy choices. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits introduction to chemical engineering in your field. Energy conversion always pays thermodynamic efficiency limits. Material properties like yield strength and fatigue limit drive design margins."], {
        bulletPoints: ["Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously."]
      }
    )
    ],
    {
      learningObjectives: ["Define introduction to chemical engineering and explain why it matters in Chemical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Introduction to Chemical Engineering connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Tolerances and fits determine whether assemblies function or bind.","Material properties like yield strength and fatigue limit drive design margins.","Project management integrates scope, schedule, cost, and risk.","Tolerances and fits determine whether assemblies function or bind.","Material properties like yield strength and fatigue limit drive design margins."],
      realWorldRelevance: "Strong grasp of introduction to chemical engineering reduces rework, supports defensible records, and speeds collaboration across Chemical Engineering Basics.",
    }
  ),
  chapter(
    "material-balances",
    2,
    "Material Balances",
    [
    section(
      "material-balances-s1",
      "2.1 Material Balances — Foundations and vocabulary",
      ["Material Balances is a foundation in Chemical Engineering Basics because drawings communicate dimensions, materials, and finishes unambiguously. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Free-body diagrams translate physical situations into solvable force balances. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain material balances aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat material balances as a shared model for decisions. Sustainability metrics increasingly constrain material and energy choices. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Drawings communicate dimensions, materials, and finishes unambiguously.","Free-body diagrams translate physical situations into solvable force balances.","Sustainability metrics increasingly constrain material and energy choices.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "material-balances-s2",
      "2.2 Material Balances — How professionals apply this in practice",
      ["Professionals rarely dispute whether material balances exists—they dispute how free-body diagrams translate physical situations into solvable force balances. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Sustainability metrics increasingly constrain material and energy choices.","When stakes rise, pause for a second opinion or formal review. Material properties like yield strength and fatigue limit drive design margins. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Drawings communicate dimensions, materials, and finishes unambiguously. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Free-body diagrams translate physical situations into solvable force balances.","Sustainability metrics increasingly constrain material and energy choices.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk."]
      }
    ),
    section(
      "material-balances-s3",
      "2.3 Material Balances — Workplace scenarios and documentation",
      ["Scenario: a teammate cites material balances in a meeting, but details in the packet do not match the textbook example. Sustainability metrics increasingly constrain material and energy choices. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Material properties like yield strength and fatigue limit drive design margins.","Good documentation states facts, cites the framework, and records the decision. Drawings communicate dimensions, materials, and finishes unambiguously. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Free-body diagrams translate physical situations into solvable force balances. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Energy conversion always pays thermodynamic efficiency limits.","Drawings communicate dimensions, materials, and finishes unambiguously.","Free-body diagrams translate physical situations into solvable force balances.","Sustainability metrics increasingly constrain material and energy choices.","Material properties like yield strength and fatigue limit drive design margins."]
      }
    ),
    section(
      "material-balances-s4",
      "2.4 Material Balances — Common mistakes and how to avoid them",
      ["Common mistakes around material balances include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Material properties like yield strength and fatigue limit drive design margins.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Drawings communicate dimensions, materials, and finishes unambiguously. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Free-body diagrams translate physical situations into solvable force balances. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Sustainability metrics increasingly constrain material and energy choices. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Drawings communicate dimensions, materials, and finishes unambiguously.","Free-body diagrams translate physical situations into solvable force balances.","Sustainability metrics increasingly constrain material and energy choices.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind."]
      }
    ),
    section(
      "material-balances-s5",
      "2.5 Material Balances — Putting the chapter together",
      ["This chapter’s through-line is simple: Material Balances connects principles to accountable action. Drawings communicate dimensions, materials, and finishes unambiguously.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Free-body diagrams translate physical situations into solvable force balances. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits material balances in your field. Sustainability metrics increasingly constrain material and energy choices. Material properties like yield strength and fatigue limit drive design margins."], {
        bulletPoints: ["Free-body diagrams translate physical situations into solvable force balances.","Sustainability metrics increasingly constrain material and energy choices.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk."]
      }
    )
    ],
    {
      learningObjectives: ["Define material balances and explain why it matters in Chemical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Material Balances connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Drawings communicate dimensions, materials, and finishes unambiguously.","Free-body diagrams translate physical situations into solvable force balances.","Energy conversion always pays thermodynamic efficiency limits.","Drawings communicate dimensions, materials, and finishes unambiguously.","Free-body diagrams translate physical situations into solvable force balances."],
      realWorldRelevance: "Strong grasp of material balances reduces rework, supports defensible records, and speeds collaboration across Chemical Engineering Basics.",
    }
  ),
  chapter(
    "energy-balances",
    3,
    "Energy Balances",
    [
    section(
      "energy-balances-s1",
      "3.1 Energy Balances — Foundations and vocabulary",
      ["Energy Balances is a foundation in Chemical Engineering Basics because standards bodies publish test methods so measurements compare across labs. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Professional engineers stamp work they are willing to defend publicly. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain energy balances aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat energy balances as a shared model for decisions. Material properties like yield strength and fatigue limit drive design margins. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Material properties like yield strength and fatigue limit drive design margins.","Free-body diagrams translate physical situations into solvable force balances.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Tolerances and fits determine whether assemblies function or bind."],
        citations: [{"source":"NIST Reference Materials","url":"https://www.nist.gov/","note":"Standards, units, and measurement traceability"}]
      }
    ),
    section(
      "energy-balances-s2",
      "3.2 Energy Balances — How professionals apply this in practice",
      ["Professionals rarely dispute whether energy balances exists—they dispute how professional engineers stamp work they are willing to defend publicly. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Material properties like yield strength and fatigue limit drive design margins.","When stakes rise, pause for a second opinion or formal review. Free-body diagrams translate physical situations into solvable force balances. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Sustainability metrics increasingly constrain material and energy choices. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Free-body diagrams translate physical situations into solvable force balances.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk."]
      }
    ),
    section(
      "energy-balances-s3",
      "3.3 Energy Balances — Workplace scenarios and documentation",
      ["Scenario: a teammate cites energy balances in a meeting, but details in the packet do not match the textbook example. Material properties like yield strength and fatigue limit drive design margins. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Free-body diagrams translate physical situations into solvable force balances.","Good documentation states facts, cites the framework, and records the decision. Sustainability metrics increasingly constrain material and energy choices. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Energy conversion always pays thermodynamic efficiency limits. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Professional engineers stamp work they are willing to defend publicly.","Material properties like yield strength and fatigue limit drive design margins.","Free-body diagrams translate physical situations into solvable force balances.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."]
      }
    ),
    section(
      "energy-balances-s4",
      "3.4 Energy Balances — Common mistakes and how to avoid them",
      ["Common mistakes around energy balances include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Free-body diagrams translate physical situations into solvable force balances.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Sustainability metrics increasingly constrain material and energy choices. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Energy conversion always pays thermodynamic efficiency limits. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Tolerances and fits determine whether assemblies function or bind. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Material properties like yield strength and fatigue limit drive design margins.","Free-body diagrams translate physical situations into solvable force balances.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Tolerances and fits determine whether assemblies function or bind."]
      }
    ),
    section(
      "energy-balances-s5",
      "3.5 Energy Balances — Putting the chapter together",
      ["This chapter’s through-line is simple: Energy Balances connects principles to accountable action. Sustainability metrics increasingly constrain material and energy choices.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Energy conversion always pays thermodynamic efficiency limits. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits energy balances in your field. Tolerances and fits determine whether assemblies function or bind. Project management integrates scope, schedule, cost, and risk."], {
        bulletPoints: ["Free-body diagrams translate physical situations into solvable force balances.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk."]
      }
    )
    ],
    {
      learningObjectives: ["Define energy balances and explain why it matters in Chemical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Energy Balances connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Material properties like yield strength and fatigue limit drive design margins.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Material properties like yield strength and fatigue limit drive design margins.","Free-body diagrams translate physical situations into solvable force balances."],
      realWorldRelevance: "Strong grasp of energy balances reduces rework, supports defensible records, and speeds collaboration across Chemical Engineering Basics.",
    }
  ),
  chapter(
    "thermo-che",
    4,
    "Chemical Engineering Thermodynamics",
    [
    section(
      "thermo-che-s1",
      "4.1 Chemical Engineering Thermodynamics — Foundations and vocabulary",
      ["Thermodynamics sets hard limits on efficiency; entropy explains why perfect engines and refrigerators are impossible. Chemical Engineering Thermodynamics is a foundation in Chemical Engineering Basics because standards bodies publish test methods so measurements compare across labs. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Free-body diagrams translate physical situations into solvable force balances. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain chemical engineering thermodynamics aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat chemical engineering thermodynamics as a shared model for decisions. Professional engineers stamp work they are willing to defend publicly. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "thermo-che-s2",
      "4.2 Chemical Engineering Thermodynamics — How professionals apply this in practice",
      ["Professionals rarely dispute whether chemical engineering thermodynamics exists—they dispute how free-body diagrams translate physical situations into solvable force balances. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Professional engineers stamp work they are willing to defend publicly.","When stakes rise, pause for a second opinion or formal review. Sustainability metrics increasingly constrain material and energy choices. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Energy conversion always pays thermodynamic efficiency limits. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins."]
      }
    ),
    section(
      "thermo-che-s3",
      "4.3 Chemical Engineering Thermodynamics — Workplace scenarios and documentation",
      ["Scenario: a teammate cites chemical engineering thermodynamics in a meeting, but details in the packet do not match the textbook example. Professional engineers stamp work they are willing to defend publicly. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Sustainability metrics increasingly constrain material and energy choices.","Good documentation states facts, cites the framework, and records the decision. Energy conversion always pays thermodynamic efficiency limits. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Material properties like yield strength and fatigue limit drive design margins. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."]
      }
    ),
    section(
      "thermo-che-s4",
      "4.4 Chemical Engineering Thermodynamics — Common mistakes and how to avoid them",
      ["Common mistakes around chemical engineering thermodynamics include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Sustainability metrics increasingly constrain material and energy choices.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Energy conversion always pays thermodynamic efficiency limits. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Material properties like yield strength and fatigue limit drive design margins. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Tolerances and fits determine whether assemblies function or bind. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."]
      }
    ),
    section(
      "thermo-che-s5",
      "4.5 Chemical Engineering Thermodynamics — Putting the chapter together",
      ["This chapter’s through-line is simple: Chemical Engineering Thermodynamics connects principles to accountable action. Energy conversion always pays thermodynamic efficiency limits.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Material properties like yield strength and fatigue limit drive design margins. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits chemical engineering thermodynamics in your field. Tolerances and fits determine whether assemblies function or bind. Project management integrates scope, schedule, cost, and risk."], {
        bulletPoints: ["Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins."]
      }
    )
    ],
    {
      learningObjectives: ["Define chemical engineering thermodynamics and explain why it matters in Chemical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Chemical Engineering Thermodynamics: Thermodynamics sets hard limits on efficiency; entropy explains why perfect engines and refrigerators are impossible. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances."],
      realWorldRelevance: "Strong grasp of chemical engineering thermodynamics reduces rework, supports defensible records, and speeds collaboration across Chemical Engineering Basics.",
    }
  ),
  chapter(
    "transport-phenomena",
    5,
    "Transport Phenomena",
    [
    section(
      "transport-phenomena-s1",
      "5.1 Transport Phenomena — Foundations and vocabulary",
      ["Transport Phenomena is a foundation in Chemical Engineering Basics because safety factors account for unknown loads, defects, and human error. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Drawings communicate dimensions, materials, and finishes unambiguously. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain transport phenomena aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat transport phenomena as a shared model for decisions. Control systems use feedback to keep outputs stable despite disturbances. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "transport-phenomena-s2",
      "5.2 Transport Phenomena — How professionals apply this in practice",
      ["Professionals rarely dispute whether transport phenomena exists—they dispute how project management integrates scope, schedule, cost, and risk. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Safety factors account for unknown loads, defects, and human error.","When stakes rise, pause for a second opinion or formal review. Drawings communicate dimensions, materials, and finishes unambiguously. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Control systems use feedback to keep outputs stable despite disturbances. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."]
      }
    ),
    section(
      "transport-phenomena-s3",
      "5.3 Transport Phenomena — Workplace scenarios and documentation",
      ["Scenario: a teammate cites transport phenomena in a meeting, but details in the packet do not match the textbook example. Tolerances and fits determine whether assemblies function or bind. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Project management integrates scope, schedule, cost, and risk.","Good documentation states facts, cites the framework, and records the decision. Safety factors account for unknown loads, defects, and human error. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Drawings communicate dimensions, materials, and finishes unambiguously. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins."]
      }
    ),
    section(
      "transport-phenomena-s4",
      "5.4 Transport Phenomena — Common mistakes and how to avoid them",
      ["Common mistakes around transport phenomena include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Material properties like yield strength and fatigue limit drive design margins.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Tolerances and fits determine whether assemblies function or bind. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Project management integrates scope, schedule, cost, and risk. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Safety factors account for unknown loads, defects, and human error. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."]
      }
    ),
    section(
      "transport-phenomena-s5",
      "5.5 Transport Phenomena — Putting the chapter together",
      ["This chapter’s through-line is simple: Transport Phenomena connects principles to accountable action. Energy conversion always pays thermodynamic efficiency limits.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Material properties like yield strength and fatigue limit drive design margins. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits transport phenomena in your field. Tolerances and fits determine whether assemblies function or bind. Project management integrates scope, schedule, cost, and risk."], {
        bulletPoints: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."]
      }
    )
    ],
    {
      learningObjectives: ["Define transport phenomena and explain why it matters in Chemical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Transport Phenomena connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Standards bodies publish test methods so measurements compare across labs.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Free-body diagrams translate physical situations into solvable force balances.","Standards bodies publish test methods so measurements compare across labs.","Root-cause analysis distinguishes symptoms from failure mechanisms."],
      realWorldRelevance: "Strong grasp of transport phenomena reduces rework, supports defensible records, and speeds collaboration across Chemical Engineering Basics.",
    }
  ),
  chapter(
    "fluid-flow-che",
    6,
    "Fluid Flow in Processes",
    [
    section(
      "fluid-flow-che-s1",
      "6.1 Fluid Flow in Processes — Foundations and vocabulary",
      ["Fluid Flow in Processes is a foundation in Chemical Engineering Basics because safety factors account for unknown loads, defects, and human error. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Drawings communicate dimensions, materials, and finishes unambiguously. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain fluid flow in processes aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat fluid flow in processes as a shared model for decisions. Control systems use feedback to keep outputs stable despite disturbances. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "fluid-flow-che-s2",
      "6.2 Fluid Flow in Processes — How professionals apply this in practice",
      ["Professionals rarely dispute whether fluid flow in processes exists—they dispute how drawings communicate dimensions, materials, and finishes unambiguously. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Control systems use feedback to keep outputs stable despite disturbances.","When stakes rise, pause for a second opinion or formal review. Root-cause analysis distinguishes symptoms from failure mechanisms. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Standards bodies publish test methods so measurements compare across labs. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk."]
      }
    ),
    section(
      "fluid-flow-che-s3",
      "6.3 Fluid Flow in Processes — Workplace scenarios and documentation",
      ["Scenario: a teammate cites fluid flow in processes in a meeting, but details in the packet do not match the textbook example. Control systems use feedback to keep outputs stable despite disturbances. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Root-cause analysis distinguishes symptoms from failure mechanisms.","Good documentation states facts, cites the framework, and records the decision. Standards bodies publish test methods so measurements compare across labs. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Free-body diagrams translate physical situations into solvable force balances. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously."]
      }
    ),
    section(
      "fluid-flow-che-s4",
      "6.4 Fluid Flow in Processes — Common mistakes and how to avoid them",
      ["Common mistakes around fluid flow in processes include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Root-cause analysis distinguishes symptoms from failure mechanisms.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Standards bodies publish test methods so measurements compare across labs. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Free-body diagrams translate physical situations into solvable force balances. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Professional engineers stamp work they are willing to defend publicly. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error."]
      }
    ),
    section(
      "fluid-flow-che-s5",
      "6.5 Fluid Flow in Processes — Putting the chapter together",
      ["This chapter’s through-line is simple: Fluid Flow in Processes connects principles to accountable action. Standards bodies publish test methods so measurements compare across labs.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Free-body diagrams translate physical situations into solvable force balances. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits fluid flow in processes in your field. Professional engineers stamp work they are willing to defend publicly. Sustainability metrics increasingly constrain material and energy choices."], {
        bulletPoints: ["Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk."]
      }
    )
    ],
    {
      learningObjectives: ["Define fluid flow in processes and explain why it matters in Chemical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Fluid Flow in Processes connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Energy conversion always pays thermodynamic efficiency limits.","Sustainability metrics increasingly constrain material and energy choices.","Material properties like yield strength and fatigue limit drive design margins.","Energy conversion always pays thermodynamic efficiency limits.","Sustainability metrics increasingly constrain material and energy choices."],
      realWorldRelevance: "Strong grasp of fluid flow in processes reduces rework, supports defensible records, and speeds collaboration across Chemical Engineering Basics.",
    }
  ),
  chapter(
    "heat-mass-transfer",
    7,
    "Heat and Mass Transfer",
    [
    section(
      "heat-mass-transfer-s1",
      "7.1 Heat and Mass Transfer — Foundations and vocabulary",
      ["Heat and Mass Transfer is a foundation in Chemical Engineering Basics because energy conversion always pays thermodynamic efficiency limits. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Material properties like yield strength and fatigue limit drive design margins. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain heat and mass transfer aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat heat and mass transfer as a shared model for decisions. Tolerances and fits determine whether assemblies function or bind. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "heat-mass-transfer-s2",
      "7.2 Heat and Mass Transfer — How professionals apply this in practice",
      ["Professionals rarely dispute whether heat and mass transfer exists—they dispute how sustainability metrics increasingly constrain material and energy choices. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Energy conversion always pays thermodynamic efficiency limits.","When stakes rise, pause for a second opinion or formal review. Material properties like yield strength and fatigue limit drive design margins. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Tolerances and fits determine whether assemblies function or bind. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."]
      }
    ),
    section(
      "heat-mass-transfer-s3",
      "7.3 Heat and Mass Transfer — Workplace scenarios and documentation",
      ["Scenario: a teammate cites heat and mass transfer in a meeting, but details in the packet do not match the textbook example. Professional engineers stamp work they are willing to defend publicly. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Sustainability metrics increasingly constrain material and energy choices.","Good documentation states facts, cites the framework, and records the decision. Energy conversion always pays thermodynamic efficiency limits. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Material properties like yield strength and fatigue limit drive design margins. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins."]
      }
    ),
    section(
      "heat-mass-transfer-s4",
      "7.4 Heat and Mass Transfer — Common mistakes and how to avoid them",
      ["Common mistakes around heat and mass transfer include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Free-body diagrams translate physical situations into solvable force balances.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Professional engineers stamp work they are willing to defend publicly. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Sustainability metrics increasingly constrain material and energy choices. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Energy conversion always pays thermodynamic efficiency limits. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."]
      }
    ),
    section(
      "heat-mass-transfer-s5",
      "7.5 Heat and Mass Transfer — Putting the chapter together",
      ["This chapter’s through-line is simple: Heat and Mass Transfer connects principles to accountable action. Standards bodies publish test methods so measurements compare across labs.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Free-body diagrams translate physical situations into solvable force balances. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits heat and mass transfer in your field. Professional engineers stamp work they are willing to defend publicly. Sustainability metrics increasingly constrain material and energy choices."], {
        bulletPoints: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."]
      }
    )
    ],
    {
      learningObjectives: ["Define heat and mass transfer and explain why it matters in Chemical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Heat and Mass Transfer connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Standards bodies publish test methods so measurements compare across labs.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Free-body diagrams translate physical situations into solvable force balances.","Standards bodies publish test methods so measurements compare across labs.","Root-cause analysis distinguishes symptoms from failure mechanisms."],
      realWorldRelevance: "Strong grasp of heat and mass transfer reduces rework, supports defensible records, and speeds collaboration across Chemical Engineering Basics.",
    }
  ),
  chapter(
    "reaction-engineering",
    8,
    "Chemical Reaction Engineering",
    [
    section(
      "reaction-engineering-s1",
      "8.1 Chemical Reaction Engineering — Foundations and vocabulary",
      ["Chemical Reaction Engineering is a foundation in Chemical Engineering Basics because safety factors account for unknown loads, defects, and human error. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Drawings communicate dimensions, materials, and finishes unambiguously. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain chemical reaction engineering aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat chemical reaction engineering as a shared model for decisions. Control systems use feedback to keep outputs stable despite disturbances. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "reaction-engineering-s2",
      "8.2 Chemical Reaction Engineering — How professionals apply this in practice",
      ["Professionals rarely dispute whether chemical reaction engineering exists—they dispute how drawings communicate dimensions, materials, and finishes unambiguously. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Control systems use feedback to keep outputs stable despite disturbances.","When stakes rise, pause for a second opinion or formal review. Root-cause analysis distinguishes symptoms from failure mechanisms. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Standards bodies publish test methods so measurements compare across labs. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously."]
      }
    ),
    section(
      "reaction-engineering-s3",
      "8.3 Chemical Reaction Engineering — Workplace scenarios and documentation",
      ["Scenario: a teammate cites chemical reaction engineering in a meeting, but details in the packet do not match the textbook example. Control systems use feedback to keep outputs stable despite disturbances. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Root-cause analysis distinguishes symptoms from failure mechanisms.","Good documentation states facts, cites the framework, and records the decision. Standards bodies publish test methods so measurements compare across labs. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Free-body diagrams translate physical situations into solvable force balances. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk."]
      }
    ),
    section(
      "reaction-engineering-s4",
      "8.4 Chemical Reaction Engineering — Common mistakes and how to avoid them",
      ["Common mistakes around chemical reaction engineering include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Root-cause analysis distinguishes symptoms from failure mechanisms.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Standards bodies publish test methods so measurements compare across labs. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Free-body diagrams translate physical situations into solvable force balances. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Professional engineers stamp work they are willing to defend publicly. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error."]
      }
    ),
    section(
      "reaction-engineering-s5",
      "8.5 Chemical Reaction Engineering — Putting the chapter together",
      ["This chapter’s through-line is simple: Chemical Reaction Engineering connects principles to accountable action. Standards bodies publish test methods so measurements compare across labs.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Free-body diagrams translate physical situations into solvable force balances. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits chemical reaction engineering in your field. Professional engineers stamp work they are willing to defend publicly. Sustainability metrics increasingly constrain material and energy choices."], {
        bulletPoints: ["Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously."]
      }
    )
    ],
    {
      learningObjectives: ["Define chemical reaction engineering and explain why it matters in Chemical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Chemical Reaction Engineering connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins."],
      realWorldRelevance: "Strong grasp of chemical reaction engineering reduces rework, supports defensible records, and speeds collaboration across Chemical Engineering Basics.",
    }
  ),
  chapter(
    "separations",
    9,
    "Separation Processes",
    [
    section(
      "separations-s1",
      "9.1 Separation Processes — Foundations and vocabulary",
      ["Separation Processes is a foundation in Chemical Engineering Basics because material properties like yield strength and fatigue limit drive design margins. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Tolerances and fits determine whether assemblies function or bind. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain separation processes aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat separation processes as a shared model for decisions. Project management integrates scope, schedule, cost, and risk. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins."],
        citations: [{"source":"NIST Reference Materials","url":"https://www.nist.gov/","note":"Standards, units, and measurement traceability"}]
      }
    ),
    section(
      "separations-s2",
      "9.2 Separation Processes — How professionals apply this in practice",
      ["Professionals rarely dispute whether separation processes exists—they dispute how energy conversion always pays thermodynamic efficiency limits. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Material properties like yield strength and fatigue limit drive design margins.","When stakes rise, pause for a second opinion or formal review. Tolerances and fits determine whether assemblies function or bind. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Project management integrates scope, schedule, cost, and risk. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind."]
      }
    ),
    section(
      "separations-s3",
      "9.3 Separation Processes — Workplace scenarios and documentation",
      ["Scenario: a teammate cites separation processes in a meeting, but details in the packet do not match the textbook example. Sustainability metrics increasingly constrain material and energy choices. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Energy conversion always pays thermodynamic efficiency limits.","Good documentation states facts, cites the framework, and records the decision. Material properties like yield strength and fatigue limit drive design margins. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Tolerances and fits determine whether assemblies function or bind. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."]
      }
    ),
    section(
      "separations-s4",
      "9.4 Separation Processes — Common mistakes and how to avoid them",
      ["Common mistakes around separation processes include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Professional engineers stamp work they are willing to defend publicly.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Sustainability metrics increasingly constrain material and energy choices. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Energy conversion always pays thermodynamic efficiency limits. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Material properties like yield strength and fatigue limit drive design margins. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins."]
      }
    ),
    section(
      "separations-s5",
      "9.5 Separation Processes — Putting the chapter together",
      ["This chapter’s through-line is simple: Separation Processes connects principles to accountable action. Free-body diagrams translate physical situations into solvable force balances.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Professional engineers stamp work they are willing to defend publicly. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits separation processes in your field. Sustainability metrics increasingly constrain material and energy choices. Energy conversion always pays thermodynamic efficiency limits."], {
        bulletPoints: ["Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Tolerances and fits determine whether assemblies function or bind."]
      }
    )
    ],
    {
      learningObjectives: ["Define separation processes and explain why it matters in Chemical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Separation Processes connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly."],
      realWorldRelevance: "Strong grasp of separation processes reduces rework, supports defensible records, and speeds collaboration across Chemical Engineering Basics.",
    }
  ),
  chapter(
    "process-control",
    10,
    "Process Control",
    [
    section(
      "process-control-s1",
      "10.1 Process Control — Foundations and vocabulary",
      ["Feedback control compares measured outputs to setpoints, adjusting inputs to reject disturbances in plants and products alike. Process Control is a foundation in Chemical Engineering Basics because drawings communicate dimensions, materials, and finishes unambiguously. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Root-cause analysis distinguishes symptoms from failure mechanisms. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain process control aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat process control as a shared model for decisions. Standards bodies publish test methods so measurements compare across labs. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Control systems use feedback to keep outputs stable despite disturbances.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "process-control-s2",
      "10.2 Process Control — How professionals apply this in practice",
      ["Professionals rarely dispute whether process control exists—they dispute how safety factors account for unknown loads, defects, and human error. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Drawings communicate dimensions, materials, and finishes unambiguously.","When stakes rise, pause for a second opinion or formal review. Root-cause analysis distinguishes symptoms from failure mechanisms. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Standards bodies publish test methods so measurements compare across labs. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms."]
      }
    ),
    section(
      "process-control-s3",
      "10.3 Process Control — Workplace scenarios and documentation",
      ["Scenario: a teammate cites process control in a meeting, but details in the packet do not match the textbook example. Project management integrates scope, schedule, cost, and risk. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Safety factors account for unknown loads, defects, and human error.","Good documentation states facts, cites the framework, and records the decision. Drawings communicate dimensions, materials, and finishes unambiguously. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Root-cause analysis distinguishes symptoms from failure mechanisms. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Material properties like yield strength and fatigue limit drive design margins.","Control systems use feedback to keep outputs stable despite disturbances.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error."]
      }
    ),
    section(
      "process-control-s4",
      "10.4 Process Control — Common mistakes and how to avoid them",
      ["Common mistakes around process control include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Tolerances and fits determine whether assemblies function or bind.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Project management integrates scope, schedule, cost, and risk. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Safety factors account for unknown loads, defects, and human error. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Drawings communicate dimensions, materials, and finishes unambiguously. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Control systems use feedback to keep outputs stable despite disturbances.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously."]
      }
    ),
    section(
      "process-control-s5",
      "10.5 Process Control — Putting the chapter together",
      ["This chapter’s through-line is simple: Process Control connects principles to accountable action. Control systems use feedback to keep outputs stable despite disturbances.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Tolerances and fits determine whether assemblies function or bind. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits process control in your field. Project management integrates scope, schedule, cost, and risk. Safety factors account for unknown loads, defects, and human error."], {
        bulletPoints: ["Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Root-cause analysis distinguishes symptoms from failure mechanisms."]
      }
    )
    ],
    {
      learningObjectives: ["Define process control and explain why it matters in Chemical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Process Control: Feedback control compares measured outputs to setpoints, adjusting inputs to reject disturbances in plants and products alike. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Control systems use feedback to keep outputs stable despite disturbances.","Tolerances and fits determine whether assemblies function or bind.","Material properties like yield strength and fatigue limit drive design margins.","Control systems use feedback to keep outputs stable despite disturbances.","Tolerances and fits determine whether assemblies function or bind."],
      realWorldRelevance: "Strong grasp of process control reduces rework, supports defensible records, and speeds collaboration across Chemical Engineering Basics.",
    }
  ),
  chapter(
    "plant-design",
    11,
    "Plant Design and Safety",
    [
    section(
      "plant-design-s1",
      "11.1 Plant Design and Safety — Foundations and vocabulary",
      ["Plant Design and Safety is a foundation in Chemical Engineering Basics because free-body diagrams translate physical situations into solvable force balances. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Professional engineers stamp work they are willing to defend publicly. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain plant design and safety aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat plant design and safety as a shared model for decisions. Sustainability metrics increasingly constrain material and energy choices. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Safety factors account for unknown loads, defects, and human error."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "plant-design-s2",
      "11.2 Plant Design and Safety — How professionals apply this in practice",
      ["Professionals rarely dispute whether plant design and safety exists—they dispute how professional engineers stamp work they are willing to defend publicly. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Sustainability metrics increasingly constrain material and energy choices.","When stakes rise, pause for a second opinion or formal review. Energy conversion always pays thermodynamic efficiency limits. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Safety factors account for unknown loads, defects, and human error. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."]
      }
    ),
    section(
      "plant-design-s3",
      "11.3 Plant Design and Safety — Workplace scenarios and documentation",
      ["Scenario: a teammate cites plant design and safety in a meeting, but details in the packet do not match the textbook example. Sustainability metrics increasingly constrain material and energy choices. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Energy conversion always pays thermodynamic efficiency limits.","Good documentation states facts, cites the framework, and records the decision. Safety factors account for unknown loads, defects, and human error. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Material properties like yield strength and fatigue limit drive design margins. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Safety factors account for unknown loads, defects, and human error.","Material properties like yield strength and fatigue limit drive design margins."]
      }
    ),
    section(
      "plant-design-s4",
      "11.4 Plant Design and Safety — Common mistakes and how to avoid them",
      ["Common mistakes around plant design and safety include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Energy conversion always pays thermodynamic efficiency limits.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Safety factors account for unknown loads, defects, and human error. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Material properties like yield strength and fatigue limit drive design margins. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Tolerances and fits determine whether assemblies function or bind. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Safety factors account for unknown loads, defects, and human error."]
      }
    ),
    section(
      "plant-design-s5",
      "11.5 Plant Design and Safety — Putting the chapter together",
      ["This chapter’s through-line is simple: Plant Design and Safety connects principles to accountable action. Safety factors account for unknown loads, defects, and human error.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Material properties like yield strength and fatigue limit drive design margins. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits plant design and safety in your field. Tolerances and fits determine whether assemblies function or bind. Project management integrates scope, schedule, cost, and risk."], {
        bulletPoints: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."]
      }
    )
    ],
    {
      learningObjectives: ["Define plant design and safety and explain why it matters in Chemical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Plant Design and Safety connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Free-body diagrams translate physical situations into solvable force balances.","Standards bodies publish test methods so measurements compare across labs.","Professional engineers stamp work they are willing to defend publicly.","Free-body diagrams translate physical situations into solvable force balances.","Standards bodies publish test methods so measurements compare across labs."],
      realWorldRelevance: "Strong grasp of plant design and safety reduces rework, supports defensible records, and speeds collaboration across Chemical Engineering Basics.",
    }
  ),
  chapter(
    "bioprocess",
    12,
    "Bioprocess Engineering",
    [
    section(
      "bioprocess-s1",
      "12.1 Bioprocess Engineering — Foundations and vocabulary",
      ["Bioprocess Engineering is a foundation in Chemical Engineering Basics because energy conversion always pays thermodynamic efficiency limits. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Material properties like yield strength and fatigue limit drive design margins. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain bioprocess engineering aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat bioprocess engineering as a shared model for decisions. Tolerances and fits determine whether assemblies function or bind. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "bioprocess-s2",
      "12.2 Bioprocess Engineering — How professionals apply this in practice",
      ["Professionals rarely dispute whether bioprocess engineering exists—they dispute how sustainability metrics increasingly constrain material and energy choices. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Energy conversion always pays thermodynamic efficiency limits.","When stakes rise, pause for a second opinion or formal review. Material properties like yield strength and fatigue limit drive design margins. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Tolerances and fits determine whether assemblies function or bind. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins."]
      }
    ),
    section(
      "bioprocess-s3",
      "12.3 Bioprocess Engineering — Workplace scenarios and documentation",
      ["Scenario: a teammate cites bioprocess engineering in a meeting, but details in the packet do not match the textbook example. Professional engineers stamp work they are willing to defend publicly. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Sustainability metrics increasingly constrain material and energy choices.","Good documentation states facts, cites the framework, and records the decision. Energy conversion always pays thermodynamic efficiency limits. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Material properties like yield strength and fatigue limit drive design margins. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."]
      }
    ),
    section(
      "bioprocess-s4",
      "12.4 Bioprocess Engineering — Common mistakes and how to avoid them",
      ["Common mistakes around bioprocess engineering include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Free-body diagrams translate physical situations into solvable force balances.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Professional engineers stamp work they are willing to defend publicly. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Sustainability metrics increasingly constrain material and energy choices. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Energy conversion always pays thermodynamic efficiency limits. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."]
      }
    ),
    section(
      "bioprocess-s5",
      "12.5 Bioprocess Engineering — Putting the chapter together",
      ["This chapter’s through-line is simple: Bioprocess Engineering connects principles to accountable action. Standards bodies publish test methods so measurements compare across labs.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Free-body diagrams translate physical situations into solvable force balances. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits bioprocess engineering in your field. Professional engineers stamp work they are willing to defend publicly. Sustainability metrics increasingly constrain material and energy choices."], {
        bulletPoints: ["Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins."]
      }
    )
    ],
    {
      learningObjectives: ["Define bioprocess engineering and explain why it matters in Chemical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Bioprocess Engineering connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances."],
      realWorldRelevance: "Strong grasp of bioprocess engineering reduces rework, supports defensible records, and speeds collaboration across Chemical Engineering Basics.",
    }
  ),
  chapter(
    "polymer-engineering",
    13,
    "Polymers and Materials Processing",
    [
    section(
      "polymer-engineering-s1",
      "13.1 Polymers and Materials Processing — Foundations and vocabulary",
      ["Polymers and Materials Processing is a foundation in Chemical Engineering Basics because free-body diagrams translate physical situations into solvable force balances. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Professional engineers stamp work they are willing to defend publicly. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain polymers and materials processing aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat polymers and materials processing as a shared model for decisions. Sustainability metrics increasingly constrain material and energy choices. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Material properties like yield strength and fatigue limit drive design margins.","Drawings communicate dimensions, materials, and finishes unambiguously.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error."],
        citations: [{"source":"NIST Reference Materials","url":"https://www.nist.gov/","note":"Standards, units, and measurement traceability"}]
      }
    ),
    section(
      "polymer-engineering-s2",
      "13.2 Polymers and Materials Processing — How professionals apply this in practice",
      ["Professionals rarely dispute whether polymers and materials processing exists—they dispute how standards bodies publish test methods so measurements compare across labs. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Free-body diagrams translate physical situations into solvable force balances.","When stakes rise, pause for a second opinion or formal review. Professional engineers stamp work they are willing to defend publicly. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Sustainability metrics increasingly constrain material and energy choices. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Drawings communicate dimensions, materials, and finishes unambiguously.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Control systems use feedback to keep outputs stable despite disturbances."]
      }
    ),
    section(
      "polymer-engineering-s3",
      "13.3 Polymers and Materials Processing — Workplace scenarios and documentation",
      ["Scenario: a teammate cites polymers and materials processing in a meeting, but details in the packet do not match the textbook example. Root-cause analysis distinguishes symptoms from failure mechanisms. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Standards bodies publish test methods so measurements compare across labs.","Good documentation states facts, cites the framework, and records the decision. Free-body diagrams translate physical situations into solvable force balances. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Professional engineers stamp work they are willing to defend publicly. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Drawings communicate dimensions, materials, and finishes unambiguously.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk."]
      }
    ),
    section(
      "polymer-engineering-s4",
      "13.4 Polymers and Materials Processing — Common mistakes and how to avoid them",
      ["Common mistakes around polymers and materials processing include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Control systems use feedback to keep outputs stable despite disturbances.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Root-cause analysis distinguishes symptoms from failure mechanisms. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Standards bodies publish test methods so measurements compare across labs. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Free-body diagrams translate physical situations into solvable force balances. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Material properties like yield strength and fatigue limit drive design margins.","Drawings communicate dimensions, materials, and finishes unambiguously.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error."]
      }
    ),
    section(
      "polymer-engineering-s5",
      "13.5 Polymers and Materials Processing — Putting the chapter together",
      ["This chapter’s through-line is simple: Polymers and Materials Processing connects principles to accountable action. Safety factors account for unknown loads, defects, and human error.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Control systems use feedback to keep outputs stable despite disturbances. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits polymers and materials processing in your field. Root-cause analysis distinguishes symptoms from failure mechanisms. Standards bodies publish test methods so measurements compare across labs."], {
        bulletPoints: ["Drawings communicate dimensions, materials, and finishes unambiguously.","Tolerances and fits determine whether assemblies function or bind.","Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Control systems use feedback to keep outputs stable despite disturbances."]
      }
    )
    ],
    {
      learningObjectives: ["Define polymers and materials processing and explain why it matters in Chemical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Polymers and Materials Processing connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Material properties like yield strength and fatigue limit drive design margins.","Drawings communicate dimensions, materials, and finishes unambiguously.","Energy conversion always pays thermodynamic efficiency limits.","Material properties like yield strength and fatigue limit drive design margins.","Drawings communicate dimensions, materials, and finishes unambiguously."],
      realWorldRelevance: "Strong grasp of polymers and materials processing reduces rework, supports defensible records, and speeds collaboration across Chemical Engineering Basics.",
    }
  ),
  chapter(
    "environmental-che",
    14,
    "Environmental Chemical Engineering",
    [
    section(
      "environmental-che-s1",
      "14.1 Environmental Chemical Engineering — Foundations and vocabulary",
      ["Environmental Chemical Engineering is a foundation in Chemical Engineering Basics because project management integrates scope, schedule, cost, and risk. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Safety factors account for unknown loads, defects, and human error. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain environmental chemical engineering aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat environmental chemical engineering as a shared model for decisions. Drawings communicate dimensions, materials, and finishes unambiguously. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."],
        citations: [{"source":"NIST Reference Materials","url":"https://www.nist.gov/","note":"Standards, units, and measurement traceability"}]
      }
    ),
    section(
      "environmental-che-s2",
      "14.2 Environmental Chemical Engineering — How professionals apply this in practice",
      ["Professionals rarely dispute whether environmental chemical engineering exists—they dispute how safety factors account for unknown loads, defects, and human error. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Drawings communicate dimensions, materials, and finishes unambiguously.","When stakes rise, pause for a second opinion or formal review. Control systems use feedback to keep outputs stable despite disturbances. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Root-cause analysis distinguishes symptoms from failure mechanisms. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly."]
      }
    ),
    section(
      "environmental-che-s3",
      "14.3 Environmental Chemical Engineering — Workplace scenarios and documentation",
      ["Scenario: a teammate cites environmental chemical engineering in a meeting, but details in the packet do not match the textbook example. Drawings communicate dimensions, materials, and finishes unambiguously. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Control systems use feedback to keep outputs stable despite disturbances.","Good documentation states facts, cites the framework, and records the decision. Root-cause analysis distinguishes symptoms from failure mechanisms. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Standards bodies publish test methods so measurements compare across labs. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices.","Energy conversion always pays thermodynamic efficiency limits."]
      }
    ),
    section(
      "environmental-che-s4",
      "14.4 Environmental Chemical Engineering — Common mistakes and how to avoid them",
      ["Common mistakes around environmental chemical engineering include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Control systems use feedback to keep outputs stable despite disturbances.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Root-cause analysis distinguishes symptoms from failure mechanisms. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Standards bodies publish test methods so measurements compare across labs. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Free-body diagrams translate physical situations into solvable force balances. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly.","Sustainability metrics increasingly constrain material and energy choices."]
      }
    ),
    section(
      "environmental-che-s5",
      "14.5 Environmental Chemical Engineering — Putting the chapter together",
      ["This chapter’s through-line is simple: Environmental Chemical Engineering connects principles to accountable action. Root-cause analysis distinguishes symptoms from failure mechanisms.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Standards bodies publish test methods so measurements compare across labs. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits environmental chemical engineering in your field. Free-body diagrams translate physical situations into solvable force balances. Professional engineers stamp work they are willing to defend publicly."], {
        bulletPoints: ["Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances.","Professional engineers stamp work they are willing to defend publicly."]
      }
    )
    ],
    {
      learningObjectives: ["Define environmental chemical engineering and explain why it matters in Chemical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Environmental Chemical Engineering connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Root-cause analysis distinguishes symptoms from failure mechanisms.","Control systems use feedback to keep outputs stable despite disturbances.","Standards bodies publish test methods so measurements compare across labs.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Control systems use feedback to keep outputs stable despite disturbances."],
      realWorldRelevance: "Strong grasp of environmental chemical engineering reduces rework, supports defensible records, and speeds collaboration across Chemical Engineering Basics.",
    }
  ),
  chapter(
    "che-careers",
    15,
    "Chemical Engineering Careers",
    [
    section(
      "che-careers-s1",
      "15.1 Chemical Engineering Careers — Foundations and vocabulary",
      ["Chemical Engineering Careers is a foundation in Chemical Engineering Basics because safety factors account for unknown loads, defects, and human error. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Drawings communicate dimensions, materials, and finishes unambiguously. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain chemical engineering careers aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat chemical engineering careers as a shared model for decisions. Control systems use feedback to keep outputs stable despite disturbances. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs."],
        citations: [{"source":"National Society of Professional Engineers","url":"https://www.nspe.org/","note":"Professional engineering ethics and practice"}]
      }
    ),
    section(
      "che-careers-s2",
      "15.2 Chemical Engineering Careers — How professionals apply this in practice",
      ["Professionals rarely dispute whether chemical engineering careers exists—they dispute how project management integrates scope, schedule, cost, and risk. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Safety factors account for unknown loads, defects, and human error.","When stakes rise, pause for a second opinion or formal review. Drawings communicate dimensions, materials, and finishes unambiguously. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Control systems use feedback to keep outputs stable despite disturbances. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms."]
      }
    ),
    section(
      "che-careers-s3",
      "15.3 Chemical Engineering Careers — Workplace scenarios and documentation",
      ["Scenario: a teammate cites chemical engineering careers in a meeting, but details in the packet do not match the textbook example. Tolerances and fits determine whether assemblies function or bind. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Project management integrates scope, schedule, cost, and risk.","Good documentation states facts, cites the framework, and records the decision. Safety factors account for unknown loads, defects, and human error. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Drawings communicate dimensions, materials, and finishes unambiguously. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs.","Free-body diagrams translate physical situations into solvable force balances."]
      }
    ),
    section(
      "che-careers-s4",
      "15.4 Chemical Engineering Careers — Common mistakes and how to avoid them",
      ["Common mistakes around chemical engineering careers include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Material properties like yield strength and fatigue limit drive design margins.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Tolerances and fits determine whether assemblies function or bind. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Project management integrates scope, schedule, cost, and risk. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Safety factors account for unknown loads, defects, and human error. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms.","Standards bodies publish test methods so measurements compare across labs."]
      }
    ),
    section(
      "che-careers-s5",
      "15.5 Chemical Engineering Careers — Putting the chapter together",
      ["This chapter’s through-line is simple: Chemical Engineering Careers connects principles to accountable action. Energy conversion always pays thermodynamic efficiency limits.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Material properties like yield strength and fatigue limit drive design margins. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits chemical engineering careers in your field. Tolerances and fits determine whether assemblies function or bind. Project management integrates scope, schedule, cost, and risk."], {
        bulletPoints: ["Project management integrates scope, schedule, cost, and risk.","Safety factors account for unknown loads, defects, and human error.","Drawings communicate dimensions, materials, and finishes unambiguously.","Control systems use feedback to keep outputs stable despite disturbances.","Root-cause analysis distinguishes symptoms from failure mechanisms."]
      }
    )
    ],
    {
      learningObjectives: ["Define chemical engineering careers and explain why it matters in Chemical Engineering Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Chemical Engineering Careers connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Safety factors account for unknown loads, defects, and human error.","Project management integrates scope, schedule, cost, and risk.","Drawings communicate dimensions, materials, and finishes unambiguously.","Safety factors account for unknown loads, defects, and human error.","Project management integrates scope, schedule, cost, and risk."],
      realWorldRelevance: "Strong grasp of chemical engineering careers reduces rework, supports defensible records, and speeds collaboration across Chemical Engineering Basics.",
    }
  )
];
