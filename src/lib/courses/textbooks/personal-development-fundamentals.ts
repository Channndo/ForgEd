import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const PDEV_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Personal Development Fundamentals",
  subtitle: "ForgEd workforce textbook — Personal Development Fundamentals",
  paragraphs: [
    "This ForgEd digital textbook presents Personal Development Fundamentals at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 10 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const PDEV_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "growth-mindset",
    1,
    "Growth Mindset",
    [
    section(
      "growth-mindset-s1",
      "1.1 Growth Mindset — Foundations and vocabulary",
      ["Growth Mindset is a foundation in Personal Development Fundamentals because classroom routines reduce transition chaos and maximize instructional minutes. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Objectives written with measurable verbs clarify what students will demonstrate. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain growth mindset aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat growth mindset as a shared model for decisions. Tutoring diagnoses gaps with short cycles of teach, practice, check. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "growth-mindset-s2",
      "1.2 Growth Mindset — How professionals apply this in practice",
      ["Professionals rarely dispute whether growth mindset exists—they dispute how differentiation adjusts process, product, or content—not only lowering expectations. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Classroom routines reduce transition chaos and maximize instructional minutes.","When stakes rise, pause for a second opinion or formal review. Objectives written with measurable verbs clarify what students will demonstrate. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Tutoring diagnoses gaps with short cycles of teach, practice, check. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences."]
      }
    ),
    section(
      "growth-mindset-s3",
      "1.3 Growth Mindset — Workplace scenarios and documentation",
      ["Scenario: a teammate cites growth mindset in a meeting, but details in the packet do not match the textbook example. Professional boundaries protect students and educators in one-to-one settings. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Differentiation adjusts process, product, or content—not only lowering expectations.","Good documentation states facts, cites the framework, and records the decision. Classroom routines reduce transition chaos and maximize instructional minutes. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Objectives written with measurable verbs clarify what students will demonstrate. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations."]
      }
    ),
    section(
      "growth-mindset-s4",
      "1.4 Growth Mindset — Common mistakes and how to avoid them",
      ["Common mistakes around growth mindset include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Classroom management is relationship plus predictable consequences.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Professional boundaries protect students and educators in one-to-one settings. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Differentiation adjusts process, product, or content—not only lowering expectations. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Classroom routines reduce transition chaos and maximize instructional minutes. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings."]
      }
    ),
    section(
      "growth-mindset-s5",
      "1.5 Growth Mindset — Putting the chapter together",
      ["This chapter’s through-line is simple: Growth Mindset connects principles to accountable action. Formative assessment guides teaching mid-unit; summative certifies learning.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Classroom management is relationship plus predictable consequences. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits growth mindset in your field. Professional boundaries protect students and educators in one-to-one settings. Differentiation adjusts process, product, or content—not only lowering expectations."], {
        bulletPoints: ["Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences."]
      }
    )
    ],
    {
      learningObjectives: ["Define growth mindset and explain why it matters in Personal Development Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Growth Mindset connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["IEP and 504 plans are legal documents requiring team collaboration.","Digital tools should serve pedagogy, not replace lesson design.","Feedback should be timely, specific, and actionable—not only letter grades.","IEP and 504 plans are legal documents requiring team collaboration.","Digital tools should serve pedagogy, not replace lesson design."],
      realWorldRelevance: "Strong grasp of growth mindset reduces rework, supports defensible records, and speeds collaboration across Personal Development Fundamentals.",
    }
  ),
  chapter(
    "goal-setting",
    2,
    "Goal Setting",
    [
    section(
      "goal-setting-s1",
      "2.1 Goal Setting — Foundations and vocabulary",
      ["Goal Setting is a foundation in Personal Development Fundamentals because formative assessment guides teaching mid-unit; summative certifies learning. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Professional boundaries protect students and educators in one-to-one settings. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain goal setting aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat goal setting as a shared model for decisions. Classroom management is relationship plus predictable consequences. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Formative assessment guides teaching mid-unit; summative certifies learning.","Professional boundaries protect students and educators in one-to-one settings.","Classroom management is relationship plus predictable consequences.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "goal-setting-s2",
      "2.2 Goal Setting — How professionals apply this in practice",
      ["Professionals rarely dispute whether goal setting exists—they dispute how feedback should be timely, specific, and actionable—not only letter grades. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Formative assessment guides teaching mid-unit; summative certifies learning.","When stakes rise, pause for a second opinion or formal review. Professional boundaries protect students and educators in one-to-one settings. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Classroom management is relationship plus predictable consequences. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Professional boundaries protect students and educators in one-to-one settings.","Classroom management is relationship plus predictable consequences.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate."]
      }
    ),
    section(
      "goal-setting-s3",
      "2.3 Goal Setting — Workplace scenarios and documentation",
      ["Scenario: a teammate cites goal setting in a meeting, but details in the packet do not match the textbook example. IEP and 504 plans are legal documents requiring team collaboration. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Feedback should be timely, specific, and actionable—not only letter grades.","Good documentation states facts, cites the framework, and records the decision. Formative assessment guides teaching mid-unit; summative certifies learning. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Professional boundaries protect students and educators in one-to-one settings. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Professional boundaries protect students and educators in one-to-one settings.","Classroom management is relationship plus predictable consequences.","Differentiation adjusts process, product, or content—not only lowering expectations."]
      }
    ),
    section(
      "goal-setting-s4",
      "2.4 Goal Setting — Common mistakes and how to avoid them",
      ["Common mistakes around goal setting include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Digital tools should serve pedagogy, not replace lesson design.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. IEP and 504 plans are legal documents requiring team collaboration. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Feedback should be timely, specific, and actionable—not only letter grades. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Formative assessment guides teaching mid-unit; summative certifies learning. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Formative assessment guides teaching mid-unit; summative certifies learning.","Professional boundaries protect students and educators in one-to-one settings.","Classroom management is relationship plus predictable consequences.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes."]
      }
    ),
    section(
      "goal-setting-s5",
      "2.5 Goal Setting — Putting the chapter together",
      ["This chapter’s through-line is simple: Goal Setting connects principles to accountable action. Educator burnout signals need for sustainable systems, not heroics alone.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Digital tools should serve pedagogy, not replace lesson design. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits goal setting in your field. IEP and 504 plans are legal documents requiring team collaboration. Feedback should be timely, specific, and actionable—not only letter grades."], {
        bulletPoints: ["Professional boundaries protect students and educators in one-to-one settings.","Classroom management is relationship plus predictable consequences.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate."]
      }
    )
    ],
    {
      learningObjectives: ["Define goal setting and explain why it matters in Personal Development Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Goal Setting connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Formative assessment guides teaching mid-unit; summative certifies learning.","Professional boundaries protect students and educators in one-to-one settings.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Professional boundaries protect students and educators in one-to-one settings."],
      realWorldRelevance: "Strong grasp of goal setting reduces rework, supports defensible records, and speeds collaboration across Personal Development Fundamentals.",
    }
  ),
  chapter(
    "habits",
    3,
    "Habits and Routines",
    [
    section(
      "habits-s1",
      "3.1 Habits and Routines — Foundations and vocabulary",
      ["Habits and Routines is a foundation in Personal Development Fundamentals because formative assessment guides teaching mid-unit; summative certifies learning. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Classroom routines reduce transition chaos and maximize instructional minutes. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain habits and routines aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat habits and routines as a shared model for decisions. Classroom management is relationship plus predictable consequences. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "habits-s2",
      "3.2 Habits and Routines — How professionals apply this in practice",
      ["Professionals rarely dispute whether habits and routines exists—they dispute how classroom routines reduce transition chaos and maximize instructional minutes. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Classroom management is relationship plus predictable consequences.","When stakes rise, pause for a second opinion or formal review. Professional boundaries protect students and educators in one-to-one settings. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Differentiation adjusts process, product, or content—not only lowering expectations. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades."]
      }
    ),
    section(
      "habits-s3",
      "3.3 Habits and Routines — Workplace scenarios and documentation",
      ["Scenario: a teammate cites habits and routines in a meeting, but details in the packet do not match the textbook example. Classroom management is relationship plus predictable consequences. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Professional boundaries protect students and educators in one-to-one settings.","Good documentation states facts, cites the framework, and records the decision. Differentiation adjusts process, product, or content—not only lowering expectations. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Objectives written with measurable verbs clarify what students will demonstrate. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design."]
      }
    ),
    section(
      "habits-s4",
      "3.4 Habits and Routines — Common mistakes and how to avoid them",
      ["Common mistakes around habits and routines include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Professional boundaries protect students and educators in one-to-one settings.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Differentiation adjusts process, product, or content—not only lowering expectations. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Objectives written with measurable verbs clarify what students will demonstrate. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Tutoring diagnoses gaps with short cycles of teach, practice, check. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration."]
      }
    ),
    section(
      "habits-s5",
      "3.5 Habits and Routines — Putting the chapter together",
      ["This chapter’s through-line is simple: Habits and Routines connects principles to accountable action. Differentiation adjusts process, product, or content—not only lowering expectations.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Objectives written with measurable verbs clarify what students will demonstrate. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits habits and routines in your field. Tutoring diagnoses gaps with short cycles of teach, practice, check. MTSS tiers align interventions to student need with progress monitoring."], {
        bulletPoints: ["MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades."]
      }
    )
    ],
    {
      learningObjectives: ["Define habits and routines and explain why it matters in Personal Development Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Habits and Routines connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring."],
      realWorldRelevance: "Strong grasp of habits and routines reduces rework, supports defensible records, and speeds collaboration across Personal Development Fundamentals.",
    }
  ),
  chapter(
    "time-management",
    4,
    "Time Management",
    [
    section(
      "time-management-s1",
      "4.1 Time Management — Foundations and vocabulary",
      ["Time Management is a foundation in Personal Development Fundamentals because tutoring diagnoses gaps with short cycles of teach, practice, check. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: MTSS tiers align interventions to student need with progress monitoring. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain time management aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat time management as a shared model for decisions. Educator burnout signals need for sustainable systems, not heroics alone. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "time-management-s2",
      "4.2 Time Management — How professionals apply this in practice",
      ["Professionals rarely dispute whether time management exists—they dispute how mTSS tiers align interventions to student need with progress monitoring. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Educator burnout signals need for sustainable systems, not heroics alone.","When stakes rise, pause for a second opinion or formal review. Digital tools should serve pedagogy, not replace lesson design. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. IEP and 504 plans are legal documents requiring team collaboration. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Formative assessment guides teaching mid-unit; summative certifies learning."]
      }
    ),
    section(
      "time-management-s3",
      "4.3 Time Management — Workplace scenarios and documentation",
      ["Scenario: a teammate cites time management in a meeting, but details in the packet do not match the textbook example. Educator burnout signals need for sustainable systems, not heroics alone. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Digital tools should serve pedagogy, not replace lesson design.","Good documentation states facts, cites the framework, and records the decision. IEP and 504 plans are legal documents requiring team collaboration. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Formative assessment guides teaching mid-unit; summative certifies learning. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design."]
      }
    ),
    section(
      "time-management-s4",
      "4.4 Time Management — Common mistakes and how to avoid them",
      ["Common mistakes around time management include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Digital tools should serve pedagogy, not replace lesson design.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. IEP and 504 plans are legal documents requiring team collaboration. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Formative assessment guides teaching mid-unit; summative certifies learning. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Classroom management is relationship plus predictable consequences. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration."]
      }
    ),
    section(
      "time-management-s5",
      "4.5 Time Management — Putting the chapter together",
      ["This chapter’s through-line is simple: Time Management connects principles to accountable action. IEP and 504 plans are legal documents requiring team collaboration.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Formative assessment guides teaching mid-unit; summative certifies learning. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits time management in your field. Classroom management is relationship plus predictable consequences. Feedback should be timely, specific, and actionable—not only letter grades."], {
        bulletPoints: ["MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Formative assessment guides teaching mid-unit; summative certifies learning."]
      }
    )
    ],
    {
      learningObjectives: ["Define time management and explain why it matters in Personal Development Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Time Management connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring."],
      realWorldRelevance: "Strong grasp of time management reduces rework, supports defensible records, and speeds collaboration across Personal Development Fundamentals.",
    }
  ),
  chapter(
    "communication-self",
    5,
    "Self and Social Skills",
    [
    section(
      "communication-self-s1",
      "5.1 Self and Social Skills — Foundations and vocabulary",
      ["Self and Social Skills is a foundation in Personal Development Fundamentals because objectives written with measurable verbs clarify what students will demonstrate. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Tutoring diagnoses gaps with short cycles of teach, practice, check. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain self and social skills aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat self and social skills as a shared model for decisions. MTSS tiers align interventions to student need with progress monitoring. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "communication-self-s2",
      "5.2 Self and Social Skills — How professionals apply this in practice",
      ["Professionals rarely dispute whether self and social skills exists—they dispute how tutoring diagnoses gaps with short cycles of teach, practice, check. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. MTSS tiers align interventions to student need with progress monitoring.","When stakes rise, pause for a second opinion or formal review. Educator burnout signals need for sustainable systems, not heroics alone. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Digital tools should serve pedagogy, not replace lesson design. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings."]
      }
    ),
    section(
      "communication-self-s3",
      "5.3 Self and Social Skills — Workplace scenarios and documentation",
      ["Scenario: a teammate cites self and social skills in a meeting, but details in the packet do not match the textbook example. MTSS tiers align interventions to student need with progress monitoring. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Educator burnout signals need for sustainable systems, not heroics alone.","Good documentation states facts, cites the framework, and records the decision. Digital tools should serve pedagogy, not replace lesson design. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. IEP and 504 plans are legal documents requiring team collaboration. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning."]
      }
    ),
    section(
      "communication-self-s4",
      "5.4 Self and Social Skills — Common mistakes and how to avoid them",
      ["Common mistakes around self and social skills include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Educator burnout signals need for sustainable systems, not heroics alone.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Digital tools should serve pedagogy, not replace lesson design. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. IEP and 504 plans are legal documents requiring team collaboration. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Feedback should be timely, specific, and actionable—not only letter grades. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences."]
      }
    ),
    section(
      "communication-self-s5",
      "5.5 Self and Social Skills — Putting the chapter together",
      ["This chapter’s through-line is simple: Self and Social Skills connects principles to accountable action. Digital tools should serve pedagogy, not replace lesson design.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. IEP and 504 plans are legal documents requiring team collaboration. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits self and social skills in your field. Feedback should be timely, specific, and actionable—not only letter grades. Formative assessment guides teaching mid-unit; summative certifies learning."], {
        bulletPoints: ["IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings."]
      }
    )
    ],
    {
      learningObjectives: ["Define self and social skills and explain why it matters in Personal Development Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Self and Social Skills connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration."],
      realWorldRelevance: "Strong grasp of self and social skills reduces rework, supports defensible records, and speeds collaboration across Personal Development Fundamentals.",
    }
  ),
  chapter(
    "stress-resilience",
    6,
    "Stress and Resilience",
    [
    section(
      "stress-resilience-s1",
      "6.1 Stress and Resilience — Foundations and vocabulary",
      ["Stress and Resilience is a foundation in Personal Development Fundamentals because feedback should be timely, specific, and actionable—not only letter grades. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Formative assessment guides teaching mid-unit; summative certifies learning. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain stress and resilience aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat stress and resilience as a shared model for decisions. Classroom management is relationship plus predictable consequences. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "stress-resilience-s2",
      "6.2 Stress and Resilience — How professionals apply this in practice",
      ["Professionals rarely dispute whether stress and resilience exists—they dispute how formative assessment guides teaching mid-unit; summative certifies learning. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Classroom management is relationship plus predictable consequences.","When stakes rise, pause for a second opinion or formal review. Professional boundaries protect students and educators in one-to-one settings. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Differentiation adjusts process, product, or content—not only lowering expectations. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone."]
      }
    ),
    section(
      "stress-resilience-s3",
      "6.3 Stress and Resilience — Workplace scenarios and documentation",
      ["Scenario: a teammate cites stress and resilience in a meeting, but details in the packet do not match the textbook example. Classroom management is relationship plus predictable consequences. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Professional boundaries protect students and educators in one-to-one settings.","Good documentation states facts, cites the framework, and records the decision. Differentiation adjusts process, product, or content—not only lowering expectations. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Classroom routines reduce transition chaos and maximize instructional minutes. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check."]
      }
    ),
    section(
      "stress-resilience-s4",
      "6.4 Stress and Resilience — Common mistakes and how to avoid them",
      ["Common mistakes around stress and resilience include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Professional boundaries protect students and educators in one-to-one settings.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Differentiation adjusts process, product, or content—not only lowering expectations. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Classroom routines reduce transition chaos and maximize instructional minutes. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Objectives written with measurable verbs clarify what students will demonstrate. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring."]
      }
    ),
    section(
      "stress-resilience-s5",
      "6.5 Stress and Resilience — Putting the chapter together",
      ["This chapter’s through-line is simple: Stress and Resilience connects principles to accountable action. Differentiation adjusts process, product, or content—not only lowering expectations.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Classroom routines reduce transition chaos and maximize instructional minutes. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits stress and resilience in your field. Objectives written with measurable verbs clarify what students will demonstrate. Tutoring diagnoses gaps with short cycles of teach, practice, check."], {
        bulletPoints: ["Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone."]
      }
    )
    ],
    {
      learningObjectives: ["Define stress and resilience and explain why it matters in Personal Development Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Stress and Resilience connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes."],
      realWorldRelevance: "Strong grasp of stress and resilience reduces rework, supports defensible records, and speeds collaboration across Personal Development Fundamentals.",
    }
  ),
  chapter(
    "financial-wellness",
    7,
    "Financial Wellness",
    [
    section(
      "financial-wellness-s1",
      "7.1 Financial Wellness — Foundations and vocabulary",
      ["Financial Wellness is a foundation in Personal Development Fundamentals because classroom management is relationship plus predictable consequences. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Professional boundaries protect students and educators in one-to-one settings. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain financial wellness aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat financial wellness as a shared model for decisions. Differentiation adjusts process, product, or content—not only lowering expectations. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "financial-wellness-s2",
      "7.2 Financial Wellness — How professionals apply this in practice",
      ["Professionals rarely dispute whether financial wellness exists—they dispute how formative assessment guides teaching mid-unit; summative certifies learning. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Classroom management is relationship plus predictable consequences.","When stakes rise, pause for a second opinion or formal review. Professional boundaries protect students and educators in one-to-one settings. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Differentiation adjusts process, product, or content—not only lowering expectations. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone."]
      }
    ),
    section(
      "financial-wellness-s3",
      "7.3 Financial Wellness — Workplace scenarios and documentation",
      ["Scenario: a teammate cites financial wellness in a meeting, but details in the packet do not match the textbook example. Feedback should be timely, specific, and actionable—not only letter grades. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Formative assessment guides teaching mid-unit; summative certifies learning.","Good documentation states facts, cites the framework, and records the decision. Classroom management is relationship plus predictable consequences. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Professional boundaries protect students and educators in one-to-one settings. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration."]
      }
    ),
    section(
      "financial-wellness-s4",
      "7.4 Financial Wellness — Common mistakes and how to avoid them",
      ["Common mistakes around financial wellness include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. IEP and 504 plans are legal documents requiring team collaboration.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Feedback should be timely, specific, and actionable—not only letter grades. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Formative assessment guides teaching mid-unit; summative certifies learning. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Classroom management is relationship plus predictable consequences. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design."]
      }
    ),
    section(
      "financial-wellness-s5",
      "7.5 Financial Wellness — Putting the chapter together",
      ["This chapter’s through-line is simple: Financial Wellness connects principles to accountable action. Digital tools should serve pedagogy, not replace lesson design.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. IEP and 504 plans are legal documents requiring team collaboration. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits financial wellness in your field. Feedback should be timely, specific, and actionable—not only letter grades. Formative assessment guides teaching mid-unit; summative certifies learning."], {
        bulletPoints: ["Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone."]
      }
    )
    ],
    {
      learningObjectives: ["Define financial wellness and explain why it matters in Personal Development Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Financial Wellness connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Objectives written with measurable verbs clarify what students will demonstrate.","Classroom routines reduce transition chaos and maximize instructional minutes.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","Objectives written with measurable verbs clarify what students will demonstrate.","Classroom routines reduce transition chaos and maximize instructional minutes."],
      realWorldRelevance: "Strong grasp of financial wellness reduces rework, supports defensible records, and speeds collaboration across Personal Development Fundamentals.",
    }
  ),
  chapter(
    "career-growth",
    8,
    "Career Growth",
    [
    section(
      "career-growth-s1",
      "8.1 Career Growth — Foundations and vocabulary",
      ["Career Growth is a foundation in Personal Development Fundamentals because professional boundaries protect students and educators in one-to-one settings. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Differentiation adjusts process, product, or content—not only lowering expectations. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain career growth aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat career growth as a shared model for decisions. Classroom routines reduce transition chaos and maximize instructional minutes. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "career-growth-s2",
      "8.2 Career Growth — How professionals apply this in practice",
      ["Professionals rarely dispute whether career growth exists—they dispute how classroom management is relationship plus predictable consequences. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Professional boundaries protect students and educators in one-to-one settings.","When stakes rise, pause for a second opinion or formal review. Differentiation adjusts process, product, or content—not only lowering expectations. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Classroom routines reduce transition chaos and maximize instructional minutes. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades."]
      }
    ),
    section(
      "career-growth-s3",
      "8.3 Career Growth — Workplace scenarios and documentation",
      ["Scenario: a teammate cites career growth in a meeting, but details in the packet do not match the textbook example. Formative assessment guides teaching mid-unit; summative certifies learning. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Classroom management is relationship plus predictable consequences.","Good documentation states facts, cites the framework, and records the decision. Professional boundaries protect students and educators in one-to-one settings. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Differentiation adjusts process, product, or content—not only lowering expectations. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design."]
      }
    ),
    section(
      "career-growth-s4",
      "8.4 Career Growth — Common mistakes and how to avoid them",
      ["Common mistakes around career growth include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Feedback should be timely, specific, and actionable—not only letter grades.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Formative assessment guides teaching mid-unit; summative certifies learning. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Classroom management is relationship plus predictable consequences. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Professional boundaries protect students and educators in one-to-one settings. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration."]
      }
    ),
    section(
      "career-growth-s5",
      "8.5 Career Growth — Putting the chapter together",
      ["This chapter’s through-line is simple: Career Growth connects principles to accountable action. IEP and 504 plans are legal documents requiring team collaboration.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Feedback should be timely, specific, and actionable—not only letter grades. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits career growth in your field. Formative assessment guides teaching mid-unit; summative certifies learning. Classroom management is relationship plus predictable consequences."], {
        bulletPoints: ["MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades."]
      }
    )
    ],
    {
      learningObjectives: ["Define career growth and explain why it matters in Personal Development Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Career Growth connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring."],
      realWorldRelevance: "Strong grasp of career growth reduces rework, supports defensible records, and speeds collaboration across Personal Development Fundamentals.",
    }
  ),
  chapter(
    "learning-how",
    9,
    "Learning How to Learn",
    [
    section(
      "learning-how-s1",
      "9.1 Learning How to Learn — Foundations and vocabulary",
      ["Learning How to Learn is a foundation in Personal Development Fundamentals because differentiation adjusts process, product, or content—not only lowering expectations. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Classroom routines reduce transition chaos and maximize instructional minutes. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain learning how to learn aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat learning how to learn as a shared model for decisions. Objectives written with measurable verbs clarify what students will demonstrate. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "learning-how-s2",
      "9.2 Learning How to Learn — How professionals apply this in practice",
      ["Professionals rarely dispute whether learning how to learn exists—they dispute how classroom routines reduce transition chaos and maximize instructional minutes. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Objectives written with measurable verbs clarify what students will demonstrate.","When stakes rise, pause for a second opinion or formal review. Tutoring diagnoses gaps with short cycles of teach, practice, check. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. MTSS tiers align interventions to student need with progress monitoring. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration."]
      }
    ),
    section(
      "learning-how-s3",
      "9.3 Learning How to Learn — Workplace scenarios and documentation",
      ["Scenario: a teammate cites learning how to learn in a meeting, but details in the packet do not match the textbook example. Objectives written with measurable verbs clarify what students will demonstrate. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Tutoring diagnoses gaps with short cycles of teach, practice, check.","Good documentation states facts, cites the framework, and records the decision. MTSS tiers align interventions to student need with progress monitoring. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Educator burnout signals need for sustainable systems, not heroics alone. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone."]
      }
    ),
    section(
      "learning-how-s4",
      "9.4 Learning How to Learn — Common mistakes and how to avoid them",
      ["Common mistakes around learning how to learn include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Tutoring diagnoses gaps with short cycles of teach, practice, check.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. MTSS tiers align interventions to student need with progress monitoring. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Educator burnout signals need for sustainable systems, not heroics alone. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Digital tools should serve pedagogy, not replace lesson design. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design."]
      }
    ),
    section(
      "learning-how-s5",
      "9.5 Learning How to Learn — Putting the chapter together",
      ["This chapter’s through-line is simple: Learning How to Learn connects principles to accountable action. MTSS tiers align interventions to student need with progress monitoring.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Educator burnout signals need for sustainable systems, not heroics alone. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits learning how to learn in your field. Digital tools should serve pedagogy, not replace lesson design. IEP and 504 plans are legal documents requiring team collaboration."], {
        bulletPoints: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration."]
      }
    )
    ],
    {
      learningObjectives: ["Define learning how to learn and explain why it matters in Personal Development Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Learning How to Learn connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check."],
      realWorldRelevance: "Strong grasp of learning how to learn reduces rework, supports defensible records, and speeds collaboration across Personal Development Fundamentals.",
    }
  ),
  chapter(
    "life-design",
    10,
    "Life Design",
    [
    section(
      "life-design-s1",
      "10.1 Life Design — Foundations and vocabulary",
      ["Life Design is a foundation in Personal Development Fundamentals because tutoring diagnoses gaps with short cycles of teach, practice, check. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: MTSS tiers align interventions to student need with progress monitoring. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain life design aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat life design as a shared model for decisions. Educator burnout signals need for sustainable systems, not heroics alone. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "life-design-s2",
      "10.2 Life Design — How professionals apply this in practice",
      ["Professionals rarely dispute whether life design exists—they dispute how mTSS tiers align interventions to student need with progress monitoring. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Educator burnout signals need for sustainable systems, not heroics alone.","When stakes rise, pause for a second opinion or formal review. IEP and 504 plans are legal documents requiring team collaboration. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Feedback should be timely, specific, and actionable—not only letter grades. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning."]
      }
    ),
    section(
      "life-design-s3",
      "10.3 Life Design — Workplace scenarios and documentation",
      ["Scenario: a teammate cites life design in a meeting, but details in the packet do not match the textbook example. Educator burnout signals need for sustainable systems, not heroics alone. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. IEP and 504 plans are legal documents requiring team collaboration.","Good documentation states facts, cites the framework, and records the decision. Feedback should be timely, specific, and actionable—not only letter grades. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Formative assessment guides teaching mid-unit; summative certifies learning. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","IEP and 504 plans are legal documents requiring team collaboration."]
      }
    ),
    section(
      "life-design-s4",
      "10.4 Life Design — Common mistakes and how to avoid them",
      ["Common mistakes around life design include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. IEP and 504 plans are legal documents requiring team collaboration.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Feedback should be timely, specific, and actionable—not only letter grades. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Formative assessment guides teaching mid-unit; summative certifies learning. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Digital tools should serve pedagogy, not replace lesson design. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades."]
      }
    ),
    section(
      "life-design-s5",
      "10.5 Life Design — Putting the chapter together",
      ["This chapter’s through-line is simple: Life Design connects principles to accountable action. Feedback should be timely, specific, and actionable—not only letter grades.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Formative assessment guides teaching mid-unit; summative certifies learning. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits life design in your field. Digital tools should serve pedagogy, not replace lesson design. Classroom management is relationship plus predictable consequences."], {
        bulletPoints: ["MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning."]
      }
    )
    ],
    {
      learningObjectives: ["Define life design and explain why it matters in Personal Development Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Life Design connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring."],
      realWorldRelevance: "Strong grasp of life design reduces rework, supports defensible records, and speeds collaboration across Personal Development Fundamentals.",
    }
  )
];
