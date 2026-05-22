import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const TEACH_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Teaching Fundamentals",
  subtitle: "ForgEd workforce textbook — Teaching Fundamentals",
  paragraphs: [
    "This ForgEd digital textbook presents Teaching Fundamentals at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 10 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const TEACH_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "learning-theory",
    1,
    "Learning Theory",
    [
    section(
      "learning-theory-s1",
      "1.1 Learning Theory — Foundations and vocabulary",
      ["Learning Theory is a foundation in Teaching Fundamentals because differentiation adjusts process, product, or content—not only lowering expectations. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Classroom routines reduce transition chaos and maximize instructional minutes. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain learning theory aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat learning theory as a shared model for decisions. Objectives written with measurable verbs clarify what students will demonstrate. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "learning-theory-s2",
      "1.2 Learning Theory — How professionals apply this in practice",
      ["Professionals rarely dispute whether learning theory exists—they dispute how professional boundaries protect students and educators in one-to-one settings. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Differentiation adjusts process, product, or content—not only lowering expectations.","When stakes rise, pause for a second opinion or formal review. Classroom routines reduce transition chaos and maximize instructional minutes. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Objectives written with measurable verbs clarify what students will demonstrate. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone."]
      }
    ),
    section(
      "learning-theory-s3",
      "1.3 Learning Theory — Workplace scenarios and documentation",
      ["Scenario: a teammate cites learning theory in a meeting, but details in the packet do not match the textbook example. Classroom management is relationship plus predictable consequences. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Professional boundaries protect students and educators in one-to-one settings.","Good documentation states facts, cites the framework, and records the decision. Differentiation adjusts process, product, or content—not only lowering expectations. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Classroom routines reduce transition chaos and maximize instructional minutes. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check."]
      }
    ),
    section(
      "learning-theory-s4",
      "1.4 Learning Theory — Common mistakes and how to avoid them",
      ["Common mistakes around learning theory include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Formative assessment guides teaching mid-unit; summative certifies learning.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Classroom management is relationship plus predictable consequences. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Professional boundaries protect students and educators in one-to-one settings. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Differentiation adjusts process, product, or content—not only lowering expectations. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring."]
      }
    ),
    section(
      "learning-theory-s5",
      "1.5 Learning Theory — Putting the chapter together",
      ["This chapter’s through-line is simple: Learning Theory connects principles to accountable action. Feedback should be timely, specific, and actionable—not only letter grades.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Formative assessment guides teaching mid-unit; summative certifies learning. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits learning theory in your field. Classroom management is relationship plus predictable consequences. Professional boundaries protect students and educators in one-to-one settings."], {
        bulletPoints: ["Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone."]
      }
    )
    ],
    {
      learningObjectives: ["Define learning theory and explain why it matters in Teaching Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Learning Theory connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes."],
      realWorldRelevance: "Strong grasp of learning theory reduces rework, supports defensible records, and speeds collaboration across Teaching Fundamentals.",
    }
  ),
  chapter(
    "lesson-planning",
    2,
    "Lesson Planning",
    [
    section(
      "lesson-planning-s1",
      "2.1 Lesson Planning — Foundations and vocabulary",
      ["Lesson Planning is a foundation in Teaching Fundamentals because differentiation adjusts process, product, or content—not only lowering expectations. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Classroom routines reduce transition chaos and maximize instructional minutes. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain lesson planning aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat lesson planning as a shared model for decisions. Objectives written with measurable verbs clarify what students will demonstrate. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Formative assessment guides teaching mid-unit; summative certifies learning.","Digital tools should serve pedagogy, not replace lesson design.","Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "lesson-planning-s2",
      "2.2 Lesson Planning — How professionals apply this in practice",
      ["Professionals rarely dispute whether lesson planning exists—they dispute how classroom routines reduce transition chaos and maximize instructional minutes. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Objectives written with measurable verbs clarify what students will demonstrate.","When stakes rise, pause for a second opinion or formal review. Tutoring diagnoses gaps with short cycles of teach, practice, check. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. MTSS tiers align interventions to student need with progress monitoring. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Digital tools should serve pedagogy, not replace lesson design.","Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings."]
      }
    ),
    section(
      "lesson-planning-s3",
      "2.3 Lesson Planning — Workplace scenarios and documentation",
      ["Scenario: a teammate cites lesson planning in a meeting, but details in the packet do not match the textbook example. Objectives written with measurable verbs clarify what students will demonstrate. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Tutoring diagnoses gaps with short cycles of teach, practice, check.","Good documentation states facts, cites the framework, and records the decision. MTSS tiers align interventions to student need with progress monitoring. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Educator burnout signals need for sustainable systems, not heroics alone. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Digital tools should serve pedagogy, not replace lesson design.","Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes."]
      }
    ),
    section(
      "lesson-planning-s4",
      "2.4 Lesson Planning — Common mistakes and how to avoid them",
      ["Common mistakes around lesson planning include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Tutoring diagnoses gaps with short cycles of teach, practice, check.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. MTSS tiers align interventions to student need with progress monitoring. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Educator burnout signals need for sustainable systems, not heroics alone. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. IEP and 504 plans are legal documents requiring team collaboration. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Formative assessment guides teaching mid-unit; summative certifies learning.","Digital tools should serve pedagogy, not replace lesson design.","Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations."]
      }
    ),
    section(
      "lesson-planning-s5",
      "2.5 Lesson Planning — Putting the chapter together",
      ["This chapter’s through-line is simple: Lesson Planning connects principles to accountable action. MTSS tiers align interventions to student need with progress monitoring.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Educator burnout signals need for sustainable systems, not heroics alone. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits lesson planning in your field. IEP and 504 plans are legal documents requiring team collaboration. Feedback should be timely, specific, and actionable—not only letter grades."], {
        bulletPoints: ["Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Digital tools should serve pedagogy, not replace lesson design.","Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings."]
      }
    )
    ],
    {
      learningObjectives: ["Define lesson planning and explain why it matters in Teaching Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Lesson Planning connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Formative assessment guides teaching mid-unit; summative certifies learning.","Feedback should be timely, specific, and actionable—not only letter grades.","Digital tools should serve pedagogy, not replace lesson design.","Formative assessment guides teaching mid-unit; summative certifies learning.","Feedback should be timely, specific, and actionable—not only letter grades."],
      realWorldRelevance: "Strong grasp of lesson planning reduces rework, supports defensible records, and speeds collaboration across Teaching Fundamentals.",
    }
  ),
  chapter(
    "classroom-management",
    3,
    "Classroom Management",
    [
    section(
      "classroom-management-s1",
      "3.1 Classroom Management — Foundations and vocabulary",
      ["Classroom Management is a foundation in Teaching Fundamentals because classroom management is relationship plus predictable consequences. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Classroom routines reduce transition chaos and maximize instructional minutes. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain classroom management aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat classroom management as a shared model for decisions. Professional boundaries protect students and educators in one-to-one settings. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Classroom management is relationship plus predictable consequences.","Classroom routines reduce transition chaos and maximize instructional minutes.","Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations.","Objectives written with measurable verbs clarify what students will demonstrate."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "classroom-management-s2",
      "3.2 Classroom Management — How professionals apply this in practice",
      ["Professionals rarely dispute whether classroom management exists—they dispute how classroom routines reduce transition chaos and maximize instructional minutes. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Professional boundaries protect students and educators in one-to-one settings.","When stakes rise, pause for a second opinion or formal review. Differentiation adjusts process, product, or content—not only lowering expectations. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Objectives written with measurable verbs clarify what students will demonstrate. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences.","Classroom routines reduce transition chaos and maximize instructional minutes.","Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations."]
      }
    ),
    section(
      "classroom-management-s3",
      "3.3 Classroom Management — Workplace scenarios and documentation",
      ["Scenario: a teammate cites classroom management in a meeting, but details in the packet do not match the textbook example. Professional boundaries protect students and educators in one-to-one settings. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Differentiation adjusts process, product, or content—not only lowering expectations.","Good documentation states facts, cites the framework, and records the decision. Objectives written with measurable verbs clarify what students will demonstrate. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Tutoring diagnoses gaps with short cycles of teach, practice, check. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Classroom routines reduce transition chaos and maximize instructional minutes.","Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check."]
      }
    ),
    section(
      "classroom-management-s4",
      "3.4 Classroom Management — Common mistakes and how to avoid them",
      ["Common mistakes around classroom management include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Differentiation adjusts process, product, or content—not only lowering expectations.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Objectives written with measurable verbs clarify what students will demonstrate. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Tutoring diagnoses gaps with short cycles of teach, practice, check. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. MTSS tiers align interventions to student need with progress monitoring. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Classroom management is relationship plus predictable consequences.","Classroom routines reduce transition chaos and maximize instructional minutes.","Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations.","Objectives written with measurable verbs clarify what students will demonstrate."]
      }
    ),
    section(
      "classroom-management-s5",
      "3.5 Classroom Management — Putting the chapter together",
      ["This chapter’s through-line is simple: Classroom Management connects principles to accountable action. Objectives written with measurable verbs clarify what students will demonstrate.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Tutoring diagnoses gaps with short cycles of teach, practice, check. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits classroom management in your field. MTSS tiers align interventions to student need with progress monitoring. Educator burnout signals need for sustainable systems, not heroics alone."], {
        bulletPoints: ["Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences.","Classroom routines reduce transition chaos and maximize instructional minutes.","Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations."]
      }
    )
    ],
    {
      learningObjectives: ["Define classroom management and explain why it matters in Teaching Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Classroom Management connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Classroom management is relationship plus predictable consequences.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom routines reduce transition chaos and maximize instructional minutes.","Classroom management is relationship plus predictable consequences.","Formative assessment guides teaching mid-unit; summative certifies learning."],
      realWorldRelevance: "Strong grasp of classroom management reduces rework, supports defensible records, and speeds collaboration across Teaching Fundamentals.",
    }
  ),
  chapter(
    "assessment",
    4,
    "Assessment and Feedback",
    [
    section(
      "assessment-s1",
      "4.1 Assessment and Feedback — Foundations and vocabulary",
      ["Assessment and Feedback is a foundation in Teaching Fundamentals because feedback should be timely, specific, and actionable—not only letter grades. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Formative assessment guides teaching mid-unit; summative certifies learning. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain assessment and feedback aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat assessment and feedback as a shared model for decisions. Classroom management is relationship plus predictable consequences. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "assessment-s2",
      "4.2 Assessment and Feedback — How professionals apply this in practice",
      ["Professionals rarely dispute whether assessment and feedback exists—they dispute how iEP and 504 plans are legal documents requiring team collaboration. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Feedback should be timely, specific, and actionable—not only letter grades.","When stakes rise, pause for a second opinion or formal review. Formative assessment guides teaching mid-unit; summative certifies learning. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Classroom management is relationship plus predictable consequences. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check."]
      }
    ),
    section(
      "assessment-s3",
      "4.3 Assessment and Feedback — Workplace scenarios and documentation",
      ["Scenario: a teammate cites assessment and feedback in a meeting, but details in the packet do not match the textbook example. Digital tools should serve pedagogy, not replace lesson design. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. IEP and 504 plans are legal documents requiring team collaboration.","Good documentation states facts, cites the framework, and records the decision. Feedback should be timely, specific, and actionable—not only letter grades. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Formative assessment guides teaching mid-unit; summative certifies learning. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone."]
      }
    ),
    section(
      "assessment-s4",
      "4.4 Assessment and Feedback — Common mistakes and how to avoid them",
      ["Common mistakes around assessment and feedback include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Educator burnout signals need for sustainable systems, not heroics alone.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Digital tools should serve pedagogy, not replace lesson design. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. IEP and 504 plans are legal documents requiring team collaboration. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Feedback should be timely, specific, and actionable—not only letter grades. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring."]
      }
    ),
    section(
      "assessment-s5",
      "4.5 Assessment and Feedback — Putting the chapter together",
      ["This chapter’s through-line is simple: Assessment and Feedback connects principles to accountable action. MTSS tiers align interventions to student need with progress monitoring.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Educator burnout signals need for sustainable systems, not heroics alone. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits assessment and feedback in your field. Digital tools should serve pedagogy, not replace lesson design. IEP and 504 plans are legal documents requiring team collaboration."], {
        bulletPoints: ["Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check."]
      }
    )
    ],
    {
      learningObjectives: ["Define assessment and feedback and explain why it matters in Teaching Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Assessment and Feedback connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Differentiation adjusts process, product, or content—not only lowering expectations.","Professional boundaries protect students and educators in one-to-one settings.","Classroom routines reduce transition chaos and maximize instructional minutes.","Differentiation adjusts process, product, or content—not only lowering expectations.","Professional boundaries protect students and educators in one-to-one settings."],
      realWorldRelevance: "Strong grasp of assessment and feedback reduces rework, supports defensible records, and speeds collaboration across Teaching Fundamentals.",
    }
  ),
  chapter(
    "differentiation",
    5,
    "Differentiation",
    [
    section(
      "differentiation-s1",
      "5.1 Differentiation — Foundations and vocabulary",
      ["Differentiation is a foundation in Teaching Fundamentals because classroom management is relationship plus predictable consequences. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Professional boundaries protect students and educators in one-to-one settings. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain differentiation aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat differentiation as a shared model for decisions. Classroom routines reduce transition chaos and maximize instructional minutes. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "differentiation-s2",
      "5.2 Differentiation — How professionals apply this in practice",
      ["Professionals rarely dispute whether differentiation exists—they dispute how differentiation adjusts process, product, or content—not only lowering expectations. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Classroom management is relationship plus predictable consequences.","When stakes rise, pause for a second opinion or formal review. Professional boundaries protect students and educators in one-to-one settings. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Classroom routines reduce transition chaos and maximize instructional minutes. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades."]
      }
    ),
    section(
      "differentiation-s3",
      "5.3 Differentiation — Workplace scenarios and documentation",
      ["Scenario: a teammate cites differentiation in a meeting, but details in the packet do not match the textbook example. Formative assessment guides teaching mid-unit; summative certifies learning. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Differentiation adjusts process, product, or content—not only lowering expectations.","Good documentation states facts, cites the framework, and records the decision. Classroom management is relationship plus predictable consequences. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Professional boundaries protect students and educators in one-to-one settings. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design."]
      }
    ),
    section(
      "differentiation-s4",
      "5.4 Differentiation — Common mistakes and how to avoid them",
      ["Common mistakes around differentiation include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Feedback should be timely, specific, and actionable—not only letter grades.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Formative assessment guides teaching mid-unit; summative certifies learning. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Differentiation adjusts process, product, or content—not only lowering expectations. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Classroom management is relationship plus predictable consequences. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration."]
      }
    ),
    section(
      "differentiation-s5",
      "5.5 Differentiation — Putting the chapter together",
      ["This chapter’s through-line is simple: Differentiation connects principles to accountable action. IEP and 504 plans are legal documents requiring team collaboration.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Feedback should be timely, specific, and actionable—not only letter grades. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits differentiation in your field. Formative assessment guides teaching mid-unit; summative certifies learning. Differentiation adjusts process, product, or content—not only lowering expectations."], {
        bulletPoints: ["MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades."]
      }
    )
    ],
    {
      learningObjectives: ["Define differentiation and explain why it matters in Teaching Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Differentiation connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring."],
      realWorldRelevance: "Strong grasp of differentiation reduces rework, supports defensible records, and speeds collaboration across Teaching Fundamentals.",
    }
  ),
  chapter(
    "edtech",
    6,
    "Educational Technology",
    [
    section(
      "edtech-s1",
      "6.1 Educational Technology — Foundations and vocabulary",
      ["Educational Technology is a foundation in Teaching Fundamentals because professional boundaries protect students and educators in one-to-one settings. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Differentiation adjusts process, product, or content—not only lowering expectations. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain educational technology aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat educational technology as a shared model for decisions. Classroom routines reduce transition chaos and maximize instructional minutes. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "edtech-s2",
      "6.2 Educational Technology — How professionals apply this in practice",
      ["Professionals rarely dispute whether educational technology exists—they dispute how classroom management is relationship plus predictable consequences. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Professional boundaries protect students and educators in one-to-one settings.","When stakes rise, pause for a second opinion or formal review. Differentiation adjusts process, product, or content—not only lowering expectations. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Classroom routines reduce transition chaos and maximize instructional minutes. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring."]
      }
    ),
    section(
      "edtech-s3",
      "6.3 Educational Technology — Workplace scenarios and documentation",
      ["Scenario: a teammate cites educational technology in a meeting, but details in the packet do not match the textbook example. Formative assessment guides teaching mid-unit; summative certifies learning. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Classroom management is relationship plus predictable consequences.","Good documentation states facts, cites the framework, and records the decision. Professional boundaries protect students and educators in one-to-one settings. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Differentiation adjusts process, product, or content—not only lowering expectations. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design."]
      }
    ),
    section(
      "edtech-s4",
      "6.4 Educational Technology — Common mistakes and how to avoid them",
      ["Common mistakes around educational technology include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Feedback should be timely, specific, and actionable—not only letter grades.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Formative assessment guides teaching mid-unit; summative certifies learning. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Classroom management is relationship plus predictable consequences. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Professional boundaries protect students and educators in one-to-one settings. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone."]
      }
    ),
    section(
      "edtech-s5",
      "6.5 Educational Technology — Putting the chapter together",
      ["This chapter’s through-line is simple: Educational Technology connects principles to accountable action. IEP and 504 plans are legal documents requiring team collaboration.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Feedback should be timely, specific, and actionable—not only letter grades. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits educational technology in your field. Formative assessment guides teaching mid-unit; summative certifies learning. Classroom management is relationship plus predictable consequences."], {
        bulletPoints: ["Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring."]
      }
    )
    ],
    {
      learningObjectives: ["Define educational technology and explain why it matters in Teaching Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Educational Technology connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Classroom routines reduce transition chaos and maximize instructional minutes.","Differentiation adjusts process, product, or content—not only lowering expectations.","Objectives written with measurable verbs clarify what students will demonstrate.","Classroom routines reduce transition chaos and maximize instructional minutes.","Differentiation adjusts process, product, or content—not only lowering expectations."],
      realWorldRelevance: "Strong grasp of educational technology reduces rework, supports defensible records, and speeds collaboration across Teaching Fundamentals.",
    }
  ),
  chapter(
    "tutoring",
    7,
    "Tutoring Skills",
    [
    section(
      "tutoring-s1",
      "7.1 Tutoring Skills — Foundations and vocabulary",
      ["Tutoring Skills is a foundation in Teaching Fundamentals because professional boundaries protect students and educators in one-to-one settings. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Differentiation adjusts process, product, or content—not only lowering expectations. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain tutoring skills aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat tutoring skills as a shared model for decisions. Classroom routines reduce transition chaos and maximize instructional minutes. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "tutoring-s2",
      "7.2 Tutoring Skills — How professionals apply this in practice",
      ["Professionals rarely dispute whether tutoring skills exists—they dispute how classroom management is relationship plus predictable consequences. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Professional boundaries protect students and educators in one-to-one settings.","When stakes rise, pause for a second opinion or formal review. Differentiation adjusts process, product, or content—not only lowering expectations. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Classroom routines reduce transition chaos and maximize instructional minutes. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning."]
      }
    ),
    section(
      "tutoring-s3",
      "7.3 Tutoring Skills — Workplace scenarios and documentation",
      ["Scenario: a teammate cites tutoring skills in a meeting, but details in the packet do not match the textbook example. Tutoring diagnoses gaps with short cycles of teach, practice, check. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Classroom management is relationship plus predictable consequences.","Good documentation states facts, cites the framework, and records the decision. Professional boundaries protect students and educators in one-to-one settings. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Differentiation adjusts process, product, or content—not only lowering expectations. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Objectives written with measurable verbs clarify what students will demonstrate.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration."]
      }
    ),
    section(
      "tutoring-s4",
      "7.4 Tutoring Skills — Common mistakes and how to avoid them",
      ["Common mistakes around tutoring skills include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Formative assessment guides teaching mid-unit; summative certifies learning.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Tutoring diagnoses gaps with short cycles of teach, practice, check. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Classroom management is relationship plus predictable consequences. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Professional boundaries protect students and educators in one-to-one settings. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades."]
      }
    ),
    section(
      "tutoring-s5",
      "7.5 Tutoring Skills — Putting the chapter together",
      ["This chapter’s through-line is simple: Tutoring Skills connects principles to accountable action. Feedback should be timely, specific, and actionable—not only letter grades.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Formative assessment guides teaching mid-unit; summative certifies learning. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits tutoring skills in your field. Tutoring diagnoses gaps with short cycles of teach, practice, check. Classroom management is relationship plus predictable consequences."], {
        bulletPoints: ["Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning."]
      }
    )
    ],
    {
      learningObjectives: ["Define tutoring skills and explain why it matters in Teaching Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Tutoring Skills connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Objectives written with measurable verbs clarify what students will demonstrate.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone."],
      realWorldRelevance: "Strong grasp of tutoring skills reduces rework, supports defensible records, and speeds collaboration across Teaching Fundamentals.",
    }
  ),
  chapter(
    "special-needs",
    8,
    "Inclusive Education",
    [
    section(
      "special-needs-s1",
      "8.1 Inclusive Education — Foundations and vocabulary",
      ["Inclusive Education is a foundation in Teaching Fundamentals because objectives written with measurable verbs clarify what students will demonstrate. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Tutoring diagnoses gaps with short cycles of teach, practice, check. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain inclusive education aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat inclusive education as a shared model for decisions. MTSS tiers align interventions to student need with progress monitoring. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "special-needs-s2",
      "8.2 Inclusive Education — How professionals apply this in practice",
      ["Professionals rarely dispute whether inclusive education exists—they dispute how tutoring diagnoses gaps with short cycles of teach, practice, check. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. MTSS tiers align interventions to student need with progress monitoring.","When stakes rise, pause for a second opinion or formal review. Educator burnout signals need for sustainable systems, not heroics alone. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Digital tools should serve pedagogy, not replace lesson design. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings."]
      }
    ),
    section(
      "special-needs-s3",
      "8.3 Inclusive Education — Workplace scenarios and documentation",
      ["Scenario: a teammate cites inclusive education in a meeting, but details in the packet do not match the textbook example. MTSS tiers align interventions to student need with progress monitoring. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Educator burnout signals need for sustainable systems, not heroics alone.","Good documentation states facts, cites the framework, and records the decision. Digital tools should serve pedagogy, not replace lesson design. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. IEP and 504 plans are legal documents requiring team collaboration. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning."]
      }
    ),
    section(
      "special-needs-s4",
      "8.4 Inclusive Education — Common mistakes and how to avoid them",
      ["Common mistakes around inclusive education include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Educator burnout signals need for sustainable systems, not heroics alone.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Digital tools should serve pedagogy, not replace lesson design. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. IEP and 504 plans are legal documents requiring team collaboration. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Feedback should be timely, specific, and actionable—not only letter grades. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences."]
      }
    ),
    section(
      "special-needs-s5",
      "8.5 Inclusive Education — Putting the chapter together",
      ["This chapter’s through-line is simple: Inclusive Education connects principles to accountable action. Digital tools should serve pedagogy, not replace lesson design.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. IEP and 504 plans are legal documents requiring team collaboration. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits inclusive education in your field. Feedback should be timely, specific, and actionable—not only letter grades. Formative assessment guides teaching mid-unit; summative certifies learning."], {
        bulletPoints: ["IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings."]
      }
    )
    ],
    {
      learningObjectives: ["Define inclusive education and explain why it matters in Teaching Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Inclusive Education connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration."],
      realWorldRelevance: "Strong grasp of inclusive education reduces rework, supports defensible records, and speeds collaboration across Teaching Fundamentals.",
    }
  ),
  chapter(
    "professionalism",
    9,
    "Professionalism in Education",
    [
    section(
      "professionalism-s1",
      "9.1 Professionalism in Education — Foundations and vocabulary",
      ["Professionalism in Education is a foundation in Teaching Fundamentals because IEP and 504 plans are legal documents requiring team collaboration. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Feedback should be timely, specific, and actionable—not only letter grades. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain professionalism in education aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat professionalism in education as a shared model for decisions. Formative assessment guides teaching mid-unit; summative certifies learning. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "professionalism-s2",
      "9.2 Professionalism in Education — How professionals apply this in practice",
      ["Professionals rarely dispute whether professionalism in education exists—they dispute how digital tools should serve pedagogy, not replace lesson design. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. IEP and 504 plans are legal documents requiring team collaboration.","When stakes rise, pause for a second opinion or formal review. Feedback should be timely, specific, and actionable—not only letter grades. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Formative assessment guides teaching mid-unit; summative certifies learning. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations."]
      }
    ),
    section(
      "professionalism-s3",
      "9.3 Professionalism in Education — Workplace scenarios and documentation",
      ["Scenario: a teammate cites professionalism in education in a meeting, but details in the packet do not match the textbook example. Educator burnout signals need for sustainable systems, not heroics alone. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Digital tools should serve pedagogy, not replace lesson design.","Good documentation states facts, cites the framework, and records the decision. IEP and 504 plans are legal documents requiring team collaboration. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Feedback should be timely, specific, and actionable—not only letter grades. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate."]
      }
    ),
    section(
      "professionalism-s4",
      "9.4 Professionalism in Education — Common mistakes and how to avoid them",
      ["Common mistakes around professionalism in education include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. MTSS tiers align interventions to student need with progress monitoring.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Educator burnout signals need for sustainable systems, not heroics alone. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Digital tools should serve pedagogy, not replace lesson design. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. IEP and 504 plans are legal documents requiring team collaboration. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes."]
      }
    ),
    section(
      "professionalism-s5",
      "9.5 Professionalism in Education — Putting the chapter together",
      ["This chapter’s through-line is simple: Professionalism in Education connects principles to accountable action. Tutoring diagnoses gaps with short cycles of teach, practice, check.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. MTSS tiers align interventions to student need with progress monitoring. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits professionalism in education in your field. Educator burnout signals need for sustainable systems, not heroics alone. Digital tools should serve pedagogy, not replace lesson design."], {
        bulletPoints: ["Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations."]
      }
    )
    ],
    {
      learningObjectives: ["Define professionalism in education and explain why it matters in Teaching Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Professionalism in Education connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Formative assessment guides teaching mid-unit; summative certifies learning.","Feedback should be timely, specific, and actionable—not only letter grades.","Classroom management is relationship plus predictable consequences.","Formative assessment guides teaching mid-unit; summative certifies learning.","Feedback should be timely, specific, and actionable—not only letter grades."],
      realWorldRelevance: "Strong grasp of professionalism in education reduces rework, supports defensible records, and speeds collaboration across Teaching Fundamentals.",
    }
  ),
  chapter(
    "teaching-careers",
    10,
    "Teaching Careers",
    [
    section(
      "teaching-careers-s1",
      "10.1 Teaching Careers — Foundations and vocabulary",
      ["Teaching Careers is a foundation in Teaching Fundamentals because IEP and 504 plans are legal documents requiring team collaboration. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Feedback should be timely, specific, and actionable—not only letter grades. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain teaching careers aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat teaching careers as a shared model for decisions. Formative assessment guides teaching mid-unit; summative certifies learning. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "teaching-careers-s2",
      "10.2 Teaching Careers — How professionals apply this in practice",
      ["Professionals rarely dispute whether teaching careers exists—they dispute how feedback should be timely, specific, and actionable—not only letter grades. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Formative assessment guides teaching mid-unit; summative certifies learning.","When stakes rise, pause for a second opinion or formal review. Classroom management is relationship plus predictable consequences. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Professional boundaries protect students and educators in one-to-one settings. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades."]
      }
    ),
    section(
      "teaching-careers-s3",
      "10.3 Teaching Careers — Workplace scenarios and documentation",
      ["Scenario: a teammate cites teaching careers in a meeting, but details in the packet do not match the textbook example. Formative assessment guides teaching mid-unit; summative certifies learning. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Classroom management is relationship plus predictable consequences.","Good documentation states facts, cites the framework, and records the decision. Professional boundaries protect students and educators in one-to-one settings. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Differentiation adjusts process, product, or content—not only lowering expectations. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design."]
      }
    ),
    section(
      "teaching-careers-s4",
      "10.4 Teaching Careers — Common mistakes and how to avoid them",
      ["Common mistakes around teaching careers include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Classroom management is relationship plus predictable consequences.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Professional boundaries protect students and educators in one-to-one settings. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Differentiation adjusts process, product, or content—not only lowering expectations. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Classroom routines reduce transition chaos and maximize instructional minutes. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration."]
      }
    ),
    section(
      "teaching-careers-s5",
      "10.5 Teaching Careers — Putting the chapter together",
      ["This chapter’s through-line is simple: Teaching Careers connects principles to accountable action. Professional boundaries protect students and educators in one-to-one settings.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Differentiation adjusts process, product, or content—not only lowering expectations. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits teaching careers in your field. Classroom routines reduce transition chaos and maximize instructional minutes. Objectives written with measurable verbs clarify what students will demonstrate."], {
        bulletPoints: ["MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades."]
      }
    )
    ],
    {
      learningObjectives: ["Define teaching careers and explain why it matters in Teaching Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Teaching Careers connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring."],
      realWorldRelevance: "Strong grasp of teaching careers reduces rework, supports defensible records, and speeds collaboration across Teaching Fundamentals.",
    }
  )
];
