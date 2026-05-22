import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const ENTR_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Entrepreneurship Fundamentals",
  subtitle: "ForgEd workforce textbook — Entrepreneurship Fundamentals",
  paragraphs: [
    "This ForgEd digital textbook presents Entrepreneurship Fundamentals at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 10 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const ENTR_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "entrepreneur-mindset",
    1,
    "Entrepreneurial Mindset",
    [
    section(
      "entrepreneur-mindset-s1",
      "1.1 Entrepreneurial Mindset — Foundations and vocabulary",
      ["Entrepreneurial Mindset is a foundation in Entrepreneurship Fundamentals because professional boundaries protect students and educators in one-to-one settings. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Differentiation adjusts process, product, or content—not only lowering expectations. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain entrepreneurial mindset aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat entrepreneurial mindset as a shared model for decisions. Classroom routines reduce transition chaos and maximize instructional minutes. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "entrepreneur-mindset-s2",
      "1.2 Entrepreneurial Mindset — How professionals apply this in practice",
      ["Professionals rarely dispute whether entrepreneurial mindset exists—they dispute how differentiation adjusts process, product, or content—not only lowering expectations. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Classroom routines reduce transition chaos and maximize instructional minutes.","When stakes rise, pause for a second opinion or formal review. Objectives written with measurable verbs clarify what students will demonstrate. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Tutoring diagnoses gaps with short cycles of teach, practice, check. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate."]
      }
    ),
    section(
      "entrepreneur-mindset-s3",
      "1.3 Entrepreneurial Mindset — Workplace scenarios and documentation",
      ["Scenario: a teammate cites entrepreneurial mindset in a meeting, but details in the packet do not match the textbook example. Classroom routines reduce transition chaos and maximize instructional minutes. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Objectives written with measurable verbs clarify what students will demonstrate.","Good documentation states facts, cites the framework, and records the decision. Tutoring diagnoses gaps with short cycles of teach, practice, check. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. MTSS tiers align interventions to student need with progress monitoring. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations."]
      }
    ),
    section(
      "entrepreneur-mindset-s4",
      "1.4 Entrepreneurial Mindset — Common mistakes and how to avoid them",
      ["Common mistakes around entrepreneurial mindset include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Objectives written with measurable verbs clarify what students will demonstrate.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Tutoring diagnoses gaps with short cycles of teach, practice, check. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. MTSS tiers align interventions to student need with progress monitoring. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Educator burnout signals need for sustainable systems, not heroics alone. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes."]
      }
    ),
    section(
      "entrepreneur-mindset-s5",
      "1.5 Entrepreneurial Mindset — Putting the chapter together",
      ["This chapter’s through-line is simple: Entrepreneurial Mindset connects principles to accountable action. Tutoring diagnoses gaps with short cycles of teach, practice, check.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. MTSS tiers align interventions to student need with progress monitoring. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits entrepreneurial mindset in your field. Educator burnout signals need for sustainable systems, not heroics alone. Digital tools should serve pedagogy, not replace lesson design."], {
        bulletPoints: ["Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate."]
      }
    )
    ],
    {
      learningObjectives: ["Define entrepreneurial mindset and explain why it matters in Entrepreneurship Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Entrepreneurial Mindset connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences."],
      realWorldRelevance: "Strong grasp of entrepreneurial mindset reduces rework, supports defensible records, and speeds collaboration across Entrepreneurship Fundamentals.",
    }
  ),
  chapter(
    "ideation",
    2,
    "Ideation and Validation",
    [
    section(
      "ideation-s1",
      "2.1 Ideation and Validation — Foundations and vocabulary",
      ["Ideation and Validation is a foundation in Entrepreneurship Fundamentals because IEP and 504 plans are legal documents requiring team collaboration. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Feedback should be timely, specific, and actionable—not only letter grades. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ideation and validation aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ideation and validation as a shared model for decisions. Formative assessment guides teaching mid-unit; summative certifies learning. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "ideation-s2",
      "2.2 Ideation and Validation — How professionals apply this in practice",
      ["Professionals rarely dispute whether ideation and validation exists—they dispute how feedback should be timely, specific, and actionable—not only letter grades. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Formative assessment guides teaching mid-unit; summative certifies learning.","When stakes rise, pause for a second opinion or formal review. Classroom management is relationship plus predictable consequences. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Professional boundaries protect students and educators in one-to-one settings. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences."]
      }
    ),
    section(
      "ideation-s3",
      "2.3 Ideation and Validation — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ideation and validation in a meeting, but details in the packet do not match the textbook example. Formative assessment guides teaching mid-unit; summative certifies learning. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Classroom management is relationship plus predictable consequences.","Good documentation states facts, cites the framework, and records the decision. Professional boundaries protect students and educators in one-to-one settings. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Differentiation adjusts process, product, or content—not only lowering expectations. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades."]
      }
    ),
    section(
      "ideation-s4",
      "2.4 Ideation and Validation — Common mistakes and how to avoid them",
      ["Common mistakes around ideation and validation include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Classroom management is relationship plus predictable consequences.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Professional boundaries protect students and educators in one-to-one settings. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Differentiation adjusts process, product, or content—not only lowering expectations. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Classroom routines reduce transition chaos and maximize instructional minutes. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning."]
      }
    ),
    section(
      "ideation-s5",
      "2.5 Ideation and Validation — Putting the chapter together",
      ["This chapter’s through-line is simple: Ideation and Validation connects principles to accountable action. Professional boundaries protect students and educators in one-to-one settings.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Differentiation adjusts process, product, or content—not only lowering expectations. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ideation and validation in your field. Classroom routines reduce transition chaos and maximize instructional minutes. Objectives written with measurable verbs clarify what students will demonstrate."], {
        bulletPoints: ["Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences."]
      }
    )
    ],
    {
      learningObjectives: ["Define ideation and validation and explain why it matters in Entrepreneurship Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Ideation and Validation connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design."],
      realWorldRelevance: "Strong grasp of ideation and validation reduces rework, supports defensible records, and speeds collaboration across Entrepreneurship Fundamentals.",
    }
  ),
  chapter(
    "business-models",
    3,
    "Business Models",
    [
    section(
      "business-models-s1",
      "3.1 Business Models — Foundations and vocabulary",
      ["Business Models is a foundation in Entrepreneurship Fundamentals because differentiation adjusts process, product, or content—not only lowering expectations. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Classroom routines reduce transition chaos and maximize instructional minutes. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain business models aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat business models as a shared model for decisions. Objectives written with measurable verbs clarify what students will demonstrate. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "business-models-s2",
      "3.2 Business Models — How professionals apply this in practice",
      ["Professionals rarely dispute whether business models exists—they dispute how professional boundaries protect students and educators in one-to-one settings. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Differentiation adjusts process, product, or content—not only lowering expectations.","When stakes rise, pause for a second opinion or formal review. Classroom routines reduce transition chaos and maximize instructional minutes. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Objectives written with measurable verbs clarify what students will demonstrate. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check."]
      }
    ),
    section(
      "business-models-s3",
      "3.3 Business Models — Workplace scenarios and documentation",
      ["Scenario: a teammate cites business models in a meeting, but details in the packet do not match the textbook example. Classroom management is relationship plus predictable consequences. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Professional boundaries protect students and educators in one-to-one settings.","Good documentation states facts, cites the framework, and records the decision. Differentiation adjusts process, product, or content—not only lowering expectations. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Classroom routines reduce transition chaos and maximize instructional minutes. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone."]
      }
    ),
    section(
      "business-models-s4",
      "3.4 Business Models — Common mistakes and how to avoid them",
      ["Common mistakes around business models include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Formative assessment guides teaching mid-unit; summative certifies learning.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Classroom management is relationship plus predictable consequences. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Professional boundaries protect students and educators in one-to-one settings. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Differentiation adjusts process, product, or content—not only lowering expectations. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring."]
      }
    ),
    section(
      "business-models-s5",
      "3.5 Business Models — Putting the chapter together",
      ["This chapter’s through-line is simple: Business Models connects principles to accountable action. Feedback should be timely, specific, and actionable—not only letter grades.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Formative assessment guides teaching mid-unit; summative certifies learning. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits business models in your field. Classroom management is relationship plus predictable consequences. Professional boundaries protect students and educators in one-to-one settings."], {
        bulletPoints: ["Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check."]
      }
    )
    ],
    {
      learningObjectives: ["Define business models and explain why it matters in Entrepreneurship Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Business Models connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Differentiation adjusts process, product, or content—not only lowering expectations.","Professional boundaries protect students and educators in one-to-one settings.","Classroom routines reduce transition chaos and maximize instructional minutes.","Differentiation adjusts process, product, or content—not only lowering expectations.","Professional boundaries protect students and educators in one-to-one settings."],
      realWorldRelevance: "Strong grasp of business models reduces rework, supports defensible records, and speeds collaboration across Entrepreneurship Fundamentals.",
    }
  ),
  chapter(
    "marketing-sales",
    4,
    "Marketing and Sales",
    [
    section(
      "marketing-sales-s1",
      "4.1 Marketing and Sales — Foundations and vocabulary",
      ["Marketing and Sales is a foundation in Entrepreneurship Fundamentals because professional boundaries protect students and educators in one-to-one settings. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Differentiation adjusts process, product, or content—not only lowering expectations. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain marketing and sales aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat marketing and sales as a shared model for decisions. Classroom routines reduce transition chaos and maximize instructional minutes. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "marketing-sales-s2",
      "4.2 Marketing and Sales — How professionals apply this in practice",
      ["Professionals rarely dispute whether marketing and sales exists—they dispute how classroom management is relationship plus predictable consequences. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Professional boundaries protect students and educators in one-to-one settings.","When stakes rise, pause for a second opinion or formal review. Differentiation adjusts process, product, or content—not only lowering expectations. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Classroom routines reduce transition chaos and maximize instructional minutes. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades."]
      }
    ),
    section(
      "marketing-sales-s3",
      "4.3 Marketing and Sales — Workplace scenarios and documentation",
      ["Scenario: a teammate cites marketing and sales in a meeting, but details in the packet do not match the textbook example. Formative assessment guides teaching mid-unit; summative certifies learning. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Classroom management is relationship plus predictable consequences.","Good documentation states facts, cites the framework, and records the decision. Professional boundaries protect students and educators in one-to-one settings. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Differentiation adjusts process, product, or content—not only lowering expectations. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design."]
      }
    ),
    section(
      "marketing-sales-s4",
      "4.4 Marketing and Sales — Common mistakes and how to avoid them",
      ["Common mistakes around marketing and sales include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Feedback should be timely, specific, and actionable—not only letter grades.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Formative assessment guides teaching mid-unit; summative certifies learning. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Classroom management is relationship plus predictable consequences. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Professional boundaries protect students and educators in one-to-one settings. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration."]
      }
    ),
    section(
      "marketing-sales-s5",
      "4.5 Marketing and Sales — Putting the chapter together",
      ["This chapter’s through-line is simple: Marketing and Sales connects principles to accountable action. IEP and 504 plans are legal documents requiring team collaboration.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Feedback should be timely, specific, and actionable—not only letter grades. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits marketing and sales in your field. Formative assessment guides teaching mid-unit; summative certifies learning. Classroom management is relationship plus predictable consequences."], {
        bulletPoints: ["MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades."]
      }
    )
    ],
    {
      learningObjectives: ["Define marketing and sales and explain why it matters in Entrepreneurship Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Marketing and Sales connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring."],
      realWorldRelevance: "Strong grasp of marketing and sales reduces rework, supports defensible records, and speeds collaboration across Entrepreneurship Fundamentals.",
    }
  ),
  chapter(
    "operations",
    5,
    "Operations and Delivery",
    [
    section(
      "operations-s1",
      "5.1 Operations and Delivery — Foundations and vocabulary",
      ["Operations and Delivery is a foundation in Entrepreneurship Fundamentals because educator burnout signals need for sustainable systems, not heroics alone. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Digital tools should serve pedagogy, not replace lesson design. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain operations and delivery aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat operations and delivery as a shared model for decisions. IEP and 504 plans are legal documents requiring team collaboration. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "operations-s2",
      "5.2 Operations and Delivery — How professionals apply this in practice",
      ["Professionals rarely dispute whether operations and delivery exists—they dispute how digital tools should serve pedagogy, not replace lesson design. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. IEP and 504 plans are legal documents requiring team collaboration.","When stakes rise, pause for a second opinion or formal review. Feedback should be timely, specific, and actionable—not only letter grades. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Formative assessment guides teaching mid-unit; summative certifies learning. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades."]
      }
    ),
    section(
      "operations-s3",
      "5.3 Operations and Delivery — Workplace scenarios and documentation",
      ["Scenario: a teammate cites operations and delivery in a meeting, but details in the packet do not match the textbook example. IEP and 504 plans are legal documents requiring team collaboration. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Feedback should be timely, specific, and actionable—not only letter grades.","Good documentation states facts, cites the framework, and records the decision. Formative assessment guides teaching mid-unit; summative certifies learning. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Classroom management is relationship plus predictable consequences. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences."]
      }
    ),
    section(
      "operations-s4",
      "5.4 Operations and Delivery — Common mistakes and how to avoid them",
      ["Common mistakes around operations and delivery include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Feedback should be timely, specific, and actionable—not only letter grades.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Formative assessment guides teaching mid-unit; summative certifies learning. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Classroom management is relationship plus predictable consequences. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Professional boundaries protect students and educators in one-to-one settings. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning."]
      }
    ),
    section(
      "operations-s5",
      "5.5 Operations and Delivery — Putting the chapter together",
      ["This chapter’s through-line is simple: Operations and Delivery connects principles to accountable action. Formative assessment guides teaching mid-unit; summative certifies learning.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Classroom management is relationship plus predictable consequences. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits operations and delivery in your field. Professional boundaries protect students and educators in one-to-one settings. Differentiation adjusts process, product, or content—not only lowering expectations."], {
        bulletPoints: ["MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades."]
      }
    )
    ],
    {
      learningObjectives: ["Define operations and delivery and explain why it matters in Entrepreneurship Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Operations and Delivery connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Educator burnout signals need for sustainable systems, not heroics alone.","MTSS tiers align interventions to student need with progress monitoring.","Digital tools should serve pedagogy, not replace lesson design.","Educator burnout signals need for sustainable systems, not heroics alone.","MTSS tiers align interventions to student need with progress monitoring."],
      realWorldRelevance: "Strong grasp of operations and delivery reduces rework, supports defensible records, and speeds collaboration across Entrepreneurship Fundamentals.",
    }
  ),
  chapter(
    "finance-startup",
    6,
    "Startup Finance",
    [
    section(
      "finance-startup-s1",
      "6.1 Startup Finance — Foundations and vocabulary",
      ["Startup Finance is a foundation in Entrepreneurship Fundamentals because tutoring diagnoses gaps with short cycles of teach, practice, check. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: MTSS tiers align interventions to student need with progress monitoring. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain startup finance aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat startup finance as a shared model for decisions. Educator burnout signals need for sustainable systems, not heroics alone. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "finance-startup-s2",
      "6.2 Startup Finance — How professionals apply this in practice",
      ["Professionals rarely dispute whether startup finance exists—they dispute how mTSS tiers align interventions to student need with progress monitoring. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Educator burnout signals need for sustainable systems, not heroics alone.","When stakes rise, pause for a second opinion or formal review. Digital tools should serve pedagogy, not replace lesson design. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. IEP and 504 plans are legal documents requiring team collaboration. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design."]
      }
    ),
    section(
      "finance-startup-s3",
      "6.3 Startup Finance — Workplace scenarios and documentation",
      ["Scenario: a teammate cites startup finance in a meeting, but details in the packet do not match the textbook example. Educator burnout signals need for sustainable systems, not heroics alone. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Digital tools should serve pedagogy, not replace lesson design.","Good documentation states facts, cites the framework, and records the decision. IEP and 504 plans are legal documents requiring team collaboration. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Feedback should be timely, specific, and actionable—not only letter grades. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring."]
      }
    ),
    section(
      "finance-startup-s4",
      "6.4 Startup Finance — Common mistakes and how to avoid them",
      ["Common mistakes around startup finance include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Digital tools should serve pedagogy, not replace lesson design.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. IEP and 504 plans are legal documents requiring team collaboration. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Feedback should be timely, specific, and actionable—not only letter grades. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Formative assessment guides teaching mid-unit; summative certifies learning. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone."]
      }
    ),
    section(
      "finance-startup-s5",
      "6.5 Startup Finance — Putting the chapter together",
      ["This chapter’s through-line is simple: Startup Finance connects principles to accountable action. IEP and 504 plans are legal documents requiring team collaboration.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Feedback should be timely, specific, and actionable—not only letter grades. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits startup finance in your field. Formative assessment guides teaching mid-unit; summative certifies learning. Classroom management is relationship plus predictable consequences."], {
        bulletPoints: ["Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design."]
      }
    )
    ],
    {
      learningObjectives: ["Define startup finance and explain why it matters in Entrepreneurship Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Startup Finance connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate."],
      realWorldRelevance: "Strong grasp of startup finance reduces rework, supports defensible records, and speeds collaboration across Entrepreneurship Fundamentals.",
    }
  ),
  chapter(
    "legal-basics",
    7,
    "Legal Basics for Founders",
    [
    section(
      "legal-basics-s1",
      "7.1 Legal Basics for Founders — Foundations and vocabulary",
      ["Legal Basics for Founders is a foundation in Entrepreneurship Fundamentals because objectives written with measurable verbs clarify what students will demonstrate. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Tutoring diagnoses gaps with short cycles of teach, practice, check. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain legal basics for founders aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat legal basics for founders as a shared model for decisions. MTSS tiers align interventions to student need with progress monitoring. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "legal-basics-s2",
      "7.2 Legal Basics for Founders — How professionals apply this in practice",
      ["Professionals rarely dispute whether legal basics for founders exists—they dispute how tutoring diagnoses gaps with short cycles of teach, practice, check. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. MTSS tiers align interventions to student need with progress monitoring.","When stakes rise, pause for a second opinion or formal review. Educator burnout signals need for sustainable systems, not heroics alone. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Digital tools should serve pedagogy, not replace lesson design. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone."]
      }
    ),
    section(
      "legal-basics-s3",
      "7.3 Legal Basics for Founders — Workplace scenarios and documentation",
      ["Scenario: a teammate cites legal basics for founders in a meeting, but details in the packet do not match the textbook example. MTSS tiers align interventions to student need with progress monitoring. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Educator burnout signals need for sustainable systems, not heroics alone.","Good documentation states facts, cites the framework, and records the decision. Digital tools should serve pedagogy, not replace lesson design. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Feedback should be timely, specific, and actionable—not only letter grades. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check."]
      }
    ),
    section(
      "legal-basics-s4",
      "7.4 Legal Basics for Founders — Common mistakes and how to avoid them",
      ["Common mistakes around legal basics for founders include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Educator burnout signals need for sustainable systems, not heroics alone.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Digital tools should serve pedagogy, not replace lesson design. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Feedback should be timely, specific, and actionable—not only letter grades. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Formative assessment guides teaching mid-unit; summative certifies learning. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring."]
      }
    ),
    section(
      "legal-basics-s5",
      "7.5 Legal Basics for Founders — Putting the chapter together",
      ["This chapter’s through-line is simple: Legal Basics for Founders connects principles to accountable action. Digital tools should serve pedagogy, not replace lesson design.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Feedback should be timely, specific, and actionable—not only letter grades. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits legal basics for founders in your field. Formative assessment guides teaching mid-unit; summative certifies learning. IEP and 504 plans are legal documents requiring team collaboration."], {
        bulletPoints: ["Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone."]
      }
    )
    ],
    {
      learningObjectives: ["Define legal basics for founders and explain why it matters in Entrepreneurship Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Legal Basics for Founders connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Professional boundaries protect students and educators in one-to-one settings.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes."],
      realWorldRelevance: "Strong grasp of legal basics for founders reduces rework, supports defensible records, and speeds collaboration across Entrepreneurship Fundamentals.",
    }
  ),
  chapter(
    "fundraising",
    8,
    "Fundraising Intro",
    [
    section(
      "fundraising-s1",
      "8.1 Fundraising Intro — Foundations and vocabulary",
      ["Fundraising Intro is a foundation in Entrepreneurship Fundamentals because objectives written with measurable verbs clarify what students will demonstrate. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Tutoring diagnoses gaps with short cycles of teach, practice, check. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain fundraising intro aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat fundraising intro as a shared model for decisions. MTSS tiers align interventions to student need with progress monitoring. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "fundraising-s2",
      "8.2 Fundraising Intro — How professionals apply this in practice",
      ["Professionals rarely dispute whether fundraising intro exists—they dispute how classroom routines reduce transition chaos and maximize instructional minutes. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Objectives written with measurable verbs clarify what students will demonstrate.","When stakes rise, pause for a second opinion or formal review. Tutoring diagnoses gaps with short cycles of teach, practice, check. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. MTSS tiers align interventions to student need with progress monitoring. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings."]
      }
    ),
    section(
      "fundraising-s3",
      "8.3 Fundraising Intro — Workplace scenarios and documentation",
      ["Scenario: a teammate cites fundraising intro in a meeting, but details in the packet do not match the textbook example. Differentiation adjusts process, product, or content—not only lowering expectations. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Classroom routines reduce transition chaos and maximize instructional minutes.","Good documentation states facts, cites the framework, and records the decision. Objectives written with measurable verbs clarify what students will demonstrate. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Tutoring diagnoses gaps with short cycles of teach, practice, check. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning."]
      }
    ),
    section(
      "fundraising-s4",
      "8.4 Fundraising Intro — Common mistakes and how to avoid them",
      ["Common mistakes around fundraising intro include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Professional boundaries protect students and educators in one-to-one settings.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Differentiation adjusts process, product, or content—not only lowering expectations. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Classroom routines reduce transition chaos and maximize instructional minutes. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Objectives written with measurable verbs clarify what students will demonstrate. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences."]
      }
    ),
    section(
      "fundraising-s5",
      "8.5 Fundraising Intro — Putting the chapter together",
      ["This chapter’s through-line is simple: Fundraising Intro connects principles to accountable action. Classroom management is relationship plus predictable consequences.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Professional boundaries protect students and educators in one-to-one settings. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits fundraising intro in your field. Differentiation adjusts process, product, or content—not only lowering expectations. Classroom routines reduce transition chaos and maximize instructional minutes."], {
        bulletPoints: ["IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings."]
      }
    )
    ],
    {
      learningObjectives: ["Define fundraising intro and explain why it matters in Entrepreneurship Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Fundraising Intro connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration."],
      realWorldRelevance: "Strong grasp of fundraising intro reduces rework, supports defensible records, and speeds collaboration across Entrepreneurship Fundamentals.",
    }
  ),
  chapter(
    "scaling",
    9,
    "Scaling and Teams",
    [
    section(
      "scaling-s1",
      "9.1 Scaling and Teams — Foundations and vocabulary",
      ["Scaling and Teams is a foundation in Entrepreneurship Fundamentals because objectives written with measurable verbs clarify what students will demonstrate. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Tutoring diagnoses gaps with short cycles of teach, practice, check. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain scaling and teams aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat scaling and teams as a shared model for decisions. MTSS tiers align interventions to student need with progress monitoring. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "scaling-s2",
      "9.2 Scaling and Teams — How professionals apply this in practice",
      ["Professionals rarely dispute whether scaling and teams exists—they dispute how tutoring diagnoses gaps with short cycles of teach, practice, check. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. MTSS tiers align interventions to student need with progress monitoring.","When stakes rise, pause for a second opinion or formal review. Educator burnout signals need for sustainable systems, not heroics alone. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Digital tools should serve pedagogy, not replace lesson design. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning."]
      }
    ),
    section(
      "scaling-s3",
      "9.3 Scaling and Teams — Workplace scenarios and documentation",
      ["Scenario: a teammate cites scaling and teams in a meeting, but details in the packet do not match the textbook example. MTSS tiers align interventions to student need with progress monitoring. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Educator burnout signals need for sustainable systems, not heroics alone.","Good documentation states facts, cites the framework, and records the decision. Digital tools should serve pedagogy, not replace lesson design. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. IEP and 504 plans are legal documents requiring team collaboration. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences.","Professional boundaries protect students and educators in one-to-one settings."]
      }
    ),
    section(
      "scaling-s4",
      "9.4 Scaling and Teams — Common mistakes and how to avoid them",
      ["Common mistakes around scaling and teams include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Educator burnout signals need for sustainable systems, not heroics alone.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Digital tools should serve pedagogy, not replace lesson design. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. IEP and 504 plans are legal documents requiring team collaboration. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Feedback should be timely, specific, and actionable—not only letter grades. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning.","Classroom management is relationship plus predictable consequences."]
      }
    ),
    section(
      "scaling-s5",
      "9.5 Scaling and Teams — Putting the chapter together",
      ["This chapter’s through-line is simple: Scaling and Teams connects principles to accountable action. Digital tools should serve pedagogy, not replace lesson design.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. IEP and 504 plans are legal documents requiring team collaboration. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits scaling and teams in your field. Feedback should be timely, specific, and actionable—not only letter grades. Formative assessment guides teaching mid-unit; summative certifies learning."], {
        bulletPoints: ["Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design.","IEP and 504 plans are legal documents requiring team collaboration.","Feedback should be timely, specific, and actionable—not only letter grades.","Formative assessment guides teaching mid-unit; summative certifies learning."]
      }
    )
    ],
    {
      learningObjectives: ["Define scaling and teams and explain why it matters in Entrepreneurship Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Scaling and Teams connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Digital tools should serve pedagogy, not replace lesson design.","Educator burnout signals need for sustainable systems, not heroics alone.","IEP and 504 plans are legal documents requiring team collaboration.","Digital tools should serve pedagogy, not replace lesson design.","Educator burnout signals need for sustainable systems, not heroics alone."],
      realWorldRelevance: "Strong grasp of scaling and teams reduces rework, supports defensible records, and speeds collaboration across Entrepreneurship Fundamentals.",
    }
  ),
  chapter(
    "entrepreneur-careers",
    10,
    "Entrepreneurship Paths",
    [
    section(
      "entrepreneur-careers-s1",
      "10.1 Entrepreneurship Paths — Foundations and vocabulary",
      ["Entrepreneurship Paths is a foundation in Entrepreneurship Fundamentals because tutoring diagnoses gaps with short cycles of teach, practice, check. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: MTSS tiers align interventions to student need with progress monitoring. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain entrepreneurship paths aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat entrepreneurship paths as a shared model for decisions. Educator burnout signals need for sustainable systems, not heroics alone. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone."],
        citations: [{"source":"U.S. Department of Education","url":"https://www.ed.gov/","note":"Policy and teaching context in U.S. schools"}]
      }
    ),
    section(
      "entrepreneur-careers-s2",
      "10.2 Entrepreneurship Paths — How professionals apply this in practice",
      ["Professionals rarely dispute whether entrepreneurship paths exists—they dispute how mTSS tiers align interventions to student need with progress monitoring. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Educator burnout signals need for sustainable systems, not heroics alone.","When stakes rise, pause for a second opinion or formal review. Digital tools should serve pedagogy, not replace lesson design. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. IEP and 504 plans are legal documents requiring team collaboration. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design."]
      }
    ),
    section(
      "entrepreneur-careers-s3",
      "10.3 Entrepreneurship Paths — Workplace scenarios and documentation",
      ["Scenario: a teammate cites entrepreneurship paths in a meeting, but details in the packet do not match the textbook example. Educator burnout signals need for sustainable systems, not heroics alone. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Digital tools should serve pedagogy, not replace lesson design.","Good documentation states facts, cites the framework, and records the decision. IEP and 504 plans are legal documents requiring team collaboration. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Feedback should be timely, specific, and actionable—not only letter grades. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring."]
      }
    ),
    section(
      "entrepreneur-careers-s4",
      "10.4 Entrepreneurship Paths — Common mistakes and how to avoid them",
      ["Common mistakes around entrepreneurship paths include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Digital tools should serve pedagogy, not replace lesson design.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. IEP and 504 plans are legal documents requiring team collaboration. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Feedback should be timely, specific, and actionable—not only letter grades. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Formative assessment guides teaching mid-unit; summative certifies learning. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone."]
      }
    ),
    section(
      "entrepreneur-careers-s5",
      "10.5 Entrepreneurship Paths — Putting the chapter together",
      ["This chapter’s through-line is simple: Entrepreneurship Paths connects principles to accountable action. IEP and 504 plans are legal documents requiring team collaboration.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Feedback should be timely, specific, and actionable—not only letter grades. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits entrepreneurship paths in your field. Formative assessment guides teaching mid-unit; summative certifies learning. Classroom management is relationship plus predictable consequences."], {
        bulletPoints: ["Objectives written with measurable verbs clarify what students will demonstrate.","Tutoring diagnoses gaps with short cycles of teach, practice, check.","MTSS tiers align interventions to student need with progress monitoring.","Educator burnout signals need for sustainable systems, not heroics alone.","Digital tools should serve pedagogy, not replace lesson design."]
      }
    )
    ],
    {
      learningObjectives: ["Define entrepreneurship paths and explain why it matters in Entrepreneurship Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Entrepreneurship Paths connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate.","Differentiation adjusts process, product, or content—not only lowering expectations.","Classroom routines reduce transition chaos and maximize instructional minutes.","Objectives written with measurable verbs clarify what students will demonstrate."],
      realWorldRelevance: "Strong grasp of entrepreneurship paths reduces rework, supports defensible records, and speeds collaboration across Entrepreneurship Fundamentals.",
    }
  )
];
