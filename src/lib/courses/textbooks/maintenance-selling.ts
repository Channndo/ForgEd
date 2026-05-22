import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const MAINT_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Maintenance Selling",
  subtitle: "ForgEd workforce textbook — Maintenance Selling",
  paragraphs: [
    "This ForgEd digital textbook presents Maintenance Selling at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const MAINT_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "factory-schedule",
    1,
    "Factory Maintenance",
    [
    section(
      "factory-schedule-s1",
      "1.1 Factory Maintenance — Foundations and vocabulary",
      ["Factory Maintenance is a foundation in Maintenance Selling because retrieval augments models with organization-specific documents. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Versioning prompts is as important as versioning code. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain factory maintenance aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat factory maintenance as a shared model for decisions. Human review remains responsible for regulated or customer-facing text. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "factory-schedule-s2",
      "1.2 Factory Maintenance — How professionals apply this in practice",
      ["Professionals rarely dispute whether factory maintenance exists—they dispute how versioning prompts is as important as versioning code. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Human review remains responsible for regulated or customer-facing text.","When stakes rise, pause for a second opinion or formal review. Tool use can call APIs but expands attack surface if unchecked. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Disclosure builds trust when customers interact with AI-assisted content. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."]
      }
    ),
    section(
      "factory-schedule-s3",
      "1.3 Factory Maintenance — Workplace scenarios and documentation",
      ["Scenario: a teammate cites factory maintenance in a meeting, but details in the packet do not match the textbook example. Human review remains responsible for regulated or customer-facing text. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Tool use can call APIs but expands attack surface if unchecked.","Good documentation states facts, cites the framework, and records the decision. Disclosure builds trust when customers interact with AI-assisted content. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Data minimization limits what you paste into third-party tools. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools."]
      }
    ),
    section(
      "factory-schedule-s4",
      "1.4 Factory Maintenance — Common mistakes and how to avoid them",
      ["Common mistakes around factory maintenance include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Tool use can call APIs but expands attack surface if unchecked.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Disclosure builds trust when customers interact with AI-assisted content. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Data minimization limits what you paste into third-party tools. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Bias in training data appears in recommendations and classifications. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    ),
    section(
      "factory-schedule-s5",
      "1.5 Factory Maintenance — Putting the chapter together",
      ["This chapter’s through-line is simple: Factory Maintenance connects principles to accountable action. Disclosure builds trust when customers interact with AI-assisted content.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Data minimization limits what you paste into third-party tools. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits factory maintenance in your field. Bias in training data appears in recommendations and classifications. Cost scales with tokens; batching and caching affect unit economics."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."]
      }
    )
    ],
    {
      learningObjectives: ["Define factory maintenance and explain why it matters in Maintenance Selling","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Factory Maintenance connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."],
      realWorldRelevance: "Strong grasp of factory maintenance reduces rework, supports defensible records, and speeds collaboration across Maintenance Selling.",
    }
  ),
  chapter(
    "menus",
    2,
    "Maintenance Menus",
    [
    section(
      "menus-s1",
      "2.1 Maintenance Menus — Foundations and vocabulary",
      ["Maintenance Menus is a foundation in Maintenance Selling because evaluation sets measure quality before wide rollout. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Prompt clarity reduces ambiguous outputs and rework. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain maintenance menus aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat maintenance menus as a shared model for decisions. Automation should fail safe when models refuse or hallucinate. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "menus-s2",
      "2.2 Maintenance Menus — How professionals apply this in practice",
      ["Professionals rarely dispute whether maintenance menus exists—they dispute how cost scales with tokens; batching and caching affect unit economics. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Evaluation sets measure quality before wide rollout.","When stakes rise, pause for a second opinion or formal review. Prompt clarity reduces ambiguous outputs and rework. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Automation should fail safe when models refuse or hallucinate. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    ),
    section(
      "menus-s3",
      "2.3 Maintenance Menus — Workplace scenarios and documentation",
      ["Scenario: a teammate cites maintenance menus in a meeting, but details in the packet do not match the textbook example. Bias in training data appears in recommendations and classifications. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Cost scales with tokens; batching and caching affect unit economics.","Good documentation states facts, cites the framework, and records the decision. Evaluation sets measure quality before wide rollout. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Prompt clarity reduces ambiguous outputs and rework. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    ),
    section(
      "menus-s4",
      "2.4 Maintenance Menus — Common mistakes and how to avoid them",
      ["Common mistakes around maintenance menus include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Data minimization limits what you paste into third-party tools.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Bias in training data appears in recommendations and classifications. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Cost scales with tokens; batching and caching affect unit economics. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Evaluation sets measure quality before wide rollout. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "menus-s5",
      "2.5 Maintenance Menus — Putting the chapter together",
      ["This chapter’s through-line is simple: Maintenance Menus connects principles to accountable action. Disclosure builds trust when customers interact with AI-assisted content.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Data minimization limits what you paste into third-party tools. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits maintenance menus in your field. Bias in training data appears in recommendations and classifications. Cost scales with tokens; batching and caching affect unit economics."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    )
    ],
    {
      learningObjectives: ["Define maintenance menus and explain why it matters in Maintenance Selling","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Maintenance Menus connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Automation should fail safe when models refuse or hallucinate.","Prompt clarity reduces ambiguous outputs and rework.","Large language models predict text—they do not inherently know truth.","Automation should fail safe when models refuse or hallucinate.","Prompt clarity reduces ambiguous outputs and rework."],
      realWorldRelevance: "Strong grasp of maintenance menus reduces rework, supports defensible records, and speeds collaboration across Maintenance Selling.",
    }
  ),
  chapter(
    "ethical-upsell",
    3,
    "Ethical Recommendations",
    [
    section(
      "ethical-upsell-s1",
      "3.1 Ethical Recommendations — Foundations and vocabulary",
      ["Ethical Recommendations is a foundation in Maintenance Selling because bias in training data appears in recommendations and classifications. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Data minimization limits what you paste into third-party tools. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ethical recommendations aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ethical recommendations as a shared model for decisions. Cost scales with tokens; batching and caching affect unit economics. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "ethical-upsell-s2",
      "3.2 Ethical Recommendations — How professionals apply this in practice",
      ["Professionals rarely dispute whether ethical recommendations exists—they dispute how data minimization limits what you paste into third-party tools. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Cost scales with tokens; batching and caching affect unit economics.","When stakes rise, pause for a second opinion or formal review. Evaluation sets measure quality before wide rollout. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Prompt clarity reduces ambiguous outputs and rework. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    ),
    section(
      "ethical-upsell-s3",
      "3.3 Ethical Recommendations — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ethical recommendations in a meeting, but details in the packet do not match the textbook example. Cost scales with tokens; batching and caching affect unit economics. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Evaluation sets measure quality before wide rollout.","Good documentation states facts, cites the framework, and records the decision. Prompt clarity reduces ambiguous outputs and rework. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Automation should fail safe when models refuse or hallucinate. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "ethical-upsell-s4",
      "3.4 Ethical Recommendations — Common mistakes and how to avoid them",
      ["Common mistakes around ethical recommendations include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Evaluation sets measure quality before wide rollout.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Prompt clarity reduces ambiguous outputs and rework. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Automation should fail safe when models refuse or hallucinate. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Large language models predict text—they do not inherently know truth. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    ),
    section(
      "ethical-upsell-s5",
      "3.5 Ethical Recommendations — Putting the chapter together",
      ["This chapter’s through-line is simple: Ethical Recommendations connects principles to accountable action. Prompt clarity reduces ambiguous outputs and rework.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Automation should fail safe when models refuse or hallucinate. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ethical recommendations in your field. Large language models predict text—they do not inherently know truth. Retrieval augments models with organization-specific documents."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    )
    ],
    {
      learningObjectives: ["Define ethical recommendations and explain why it matters in Maintenance Selling","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Ethical Recommendations connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Prompt clarity reduces ambiguous outputs and rework.","Evaluation sets measure quality before wide rollout.","Automation should fail safe when models refuse or hallucinate.","Prompt clarity reduces ambiguous outputs and rework.","Evaluation sets measure quality before wide rollout."],
      realWorldRelevance: "Strong grasp of ethical recommendations reduces rework, supports defensible records, and speeds collaboration across Maintenance Selling.",
    }
  ),
  chapter(
    "declined-work",
    4,
    "Declined Work",
    [
    section(
      "declined-work-s1",
      "4.1 Declined Work — Foundations and vocabulary",
      ["Declined Work is a foundation in Maintenance Selling because data minimization limits what you paste into third-party tools. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Bias in training data appears in recommendations and classifications. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain declined work aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat declined work as a shared model for decisions. Cost scales with tokens; batching and caching affect unit economics. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "declined-work-s2",
      "4.2 Declined Work — How professionals apply this in practice",
      ["Professionals rarely dispute whether declined work exists—they dispute how bias in training data appears in recommendations and classifications. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Cost scales with tokens; batching and caching affect unit economics.","When stakes rise, pause for a second opinion or formal review. Evaluation sets measure quality before wide rollout. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Automation should fail safe when models refuse or hallucinate. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    ),
    section(
      "declined-work-s3",
      "4.3 Declined Work — Workplace scenarios and documentation",
      ["Scenario: a teammate cites declined work in a meeting, but details in the packet do not match the textbook example. Cost scales with tokens; batching and caching affect unit economics. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Evaluation sets measure quality before wide rollout.","Good documentation states facts, cites the framework, and records the decision. Automation should fail safe when models refuse or hallucinate. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Large language models predict text—they do not inherently know truth. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."]
      }
    ),
    section(
      "declined-work-s4",
      "4.4 Declined Work — Common mistakes and how to avoid them",
      ["Common mistakes around declined work include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Evaluation sets measure quality before wide rollout.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Automation should fail safe when models refuse or hallucinate. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Large language models predict text—they do not inherently know truth. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Retrieval augments models with organization-specific documents. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    ),
    section(
      "declined-work-s5",
      "4.5 Declined Work — Putting the chapter together",
      ["This chapter’s through-line is simple: Declined Work connects principles to accountable action. Automation should fail safe when models refuse or hallucinate.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Large language models predict text—they do not inherently know truth. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits declined work in your field. Retrieval augments models with organization-specific documents. Versioning prompts is as important as versioning code."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    )
    ],
    {
      learningObjectives: ["Define declined work and explain why it matters in Maintenance Selling","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Declined Work connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."],
      realWorldRelevance: "Strong grasp of declined work reduces rework, supports defensible records, and speeds collaboration across Maintenance Selling.",
    }
  ),
  chapter(
    "seasonal",
    5,
    "Seasonal Services",
    [
    section(
      "seasonal-s1",
      "5.1 Seasonal Services — Foundations and vocabulary",
      ["Seasonal Services is a foundation in Maintenance Selling because versioning prompts is as important as versioning code. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Human review remains responsible for regulated or customer-facing text. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain seasonal services aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat seasonal services as a shared model for decisions. Tool use can call APIs but expands attack surface if unchecked. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "seasonal-s2",
      "5.2 Seasonal Services — How professionals apply this in practice",
      ["Professionals rarely dispute whether seasonal services exists—they dispute how human review remains responsible for regulated or customer-facing text. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Tool use can call APIs but expands attack surface if unchecked.","When stakes rise, pause for a second opinion or formal review. Disclosure builds trust when customers interact with AI-assisted content. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Data minimization limits what you paste into third-party tools. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."]
      }
    ),
    section(
      "seasonal-s3",
      "5.3 Seasonal Services — Workplace scenarios and documentation",
      ["Scenario: a teammate cites seasonal services in a meeting, but details in the packet do not match the textbook example. Tool use can call APIs but expands attack surface if unchecked. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Disclosure builds trust when customers interact with AI-assisted content.","Good documentation states facts, cites the framework, and records the decision. Data minimization limits what you paste into third-party tools. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Bias in training data appears in recommendations and classifications. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    ),
    section(
      "seasonal-s4",
      "5.4 Seasonal Services — Common mistakes and how to avoid them",
      ["Common mistakes around seasonal services include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Disclosure builds trust when customers interact with AI-assisted content.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Data minimization limits what you paste into third-party tools. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Bias in training data appears in recommendations and classifications. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Cost scales with tokens; batching and caching affect unit economics. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools."]
      }
    ),
    section(
      "seasonal-s5",
      "5.5 Seasonal Services — Putting the chapter together",
      ["This chapter’s through-line is simple: Seasonal Services connects principles to accountable action. Data minimization limits what you paste into third-party tools.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Bias in training data appears in recommendations and classifications. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits seasonal services in your field. Cost scales with tokens; batching and caching affect unit economics. Evaluation sets measure quality before wide rollout."], {
        bulletPoints: ["Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."]
      }
    )
    ],
    {
      learningObjectives: ["Define seasonal services and explain why it matters in Maintenance Selling","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Seasonal Services connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Versioning prompts is as important as versioning code.","Retrieval augments models with organization-specific documents.","Human review remains responsible for regulated or customer-facing text.","Versioning prompts is as important as versioning code.","Retrieval augments models with organization-specific documents."],
      realWorldRelevance: "Strong grasp of seasonal services reduces rework, supports defensible records, and speeds collaboration across Maintenance Selling.",
    }
  ),
  chapter(
    "fluids-filters",
    6,
    "Fluids and Filters",
    [
    section(
      "fluids-filters-s1",
      "6.1 Fluids and Filters — Foundations and vocabulary",
      ["Fluids and Filters is a foundation in Maintenance Selling because evaluation sets measure quality before wide rollout. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Prompt clarity reduces ambiguous outputs and rework. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain fluids and filters aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat fluids and filters as a shared model for decisions. Automation should fail safe when models refuse or hallucinate. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "fluids-filters-s2",
      "6.2 Fluids and Filters — How professionals apply this in practice",
      ["Professionals rarely dispute whether fluids and filters exists—they dispute how cost scales with tokens; batching and caching affect unit economics. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Evaluation sets measure quality before wide rollout.","When stakes rise, pause for a second opinion or formal review. Prompt clarity reduces ambiguous outputs and rework. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Automation should fail safe when models refuse or hallucinate. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    ),
    section(
      "fluids-filters-s3",
      "6.3 Fluids and Filters — Workplace scenarios and documentation",
      ["Scenario: a teammate cites fluids and filters in a meeting, but details in the packet do not match the textbook example. Bias in training data appears in recommendations and classifications. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Cost scales with tokens; batching and caching affect unit economics.","Good documentation states facts, cites the framework, and records the decision. Evaluation sets measure quality before wide rollout. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Prompt clarity reduces ambiguous outputs and rework. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    ),
    section(
      "fluids-filters-s4",
      "6.4 Fluids and Filters — Common mistakes and how to avoid them",
      ["Common mistakes around fluids and filters include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Data minimization limits what you paste into third-party tools.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Bias in training data appears in recommendations and classifications. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Cost scales with tokens; batching and caching affect unit economics. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Evaluation sets measure quality before wide rollout. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "fluids-filters-s5",
      "6.5 Fluids and Filters — Putting the chapter together",
      ["This chapter’s through-line is simple: Fluids and Filters connects principles to accountable action. Disclosure builds trust when customers interact with AI-assisted content.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Data minimization limits what you paste into third-party tools. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits fluids and filters in your field. Bias in training data appears in recommendations and classifications. Cost scales with tokens; batching and caching affect unit economics."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    )
    ],
    {
      learningObjectives: ["Define fluids and filters and explain why it matters in Maintenance Selling","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Fluids and Filters connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Automation should fail safe when models refuse or hallucinate.","Prompt clarity reduces ambiguous outputs and rework.","Large language models predict text—they do not inherently know truth.","Automation should fail safe when models refuse or hallucinate.","Prompt clarity reduces ambiguous outputs and rework."],
      realWorldRelevance: "Strong grasp of fluids and filters reduces rework, supports defensible records, and speeds collaboration across Maintenance Selling.",
    }
  ),
  chapter(
    "ev-maintenance",
    7,
    "EV Maintenance",
    [
    section(
      "ev-maintenance-s1",
      "7.1 EV Maintenance — Foundations and vocabulary",
      ["EV Maintenance is a foundation in Maintenance Selling because data minimization limits what you paste into third-party tools. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Bias in training data appears in recommendations and classifications. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ev maintenance aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ev maintenance as a shared model for decisions. Cost scales with tokens; batching and caching affect unit economics. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "ev-maintenance-s2",
      "7.2 EV Maintenance — How professionals apply this in practice",
      ["Professionals rarely dispute whether ev maintenance exists—they dispute how disclosure builds trust when customers interact with AI-assisted content. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Data minimization limits what you paste into third-party tools.","When stakes rise, pause for a second opinion or formal review. Bias in training data appears in recommendations and classifications. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Cost scales with tokens; batching and caching affect unit economics. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    ),
    section(
      "ev-maintenance-s3",
      "7.3 EV Maintenance — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ev maintenance in a meeting, but details in the packet do not match the textbook example. Tool use can call APIs but expands attack surface if unchecked. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Disclosure builds trust when customers interact with AI-assisted content.","Good documentation states facts, cites the framework, and records the decision. Data minimization limits what you paste into third-party tools. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Bias in training data appears in recommendations and classifications. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."]
      }
    ),
    section(
      "ev-maintenance-s4",
      "7.4 EV Maintenance — Common mistakes and how to avoid them",
      ["Common mistakes around ev maintenance include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Human review remains responsible for regulated or customer-facing text.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Tool use can call APIs but expands attack surface if unchecked. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Disclosure builds trust when customers interact with AI-assisted content. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Data minimization limits what you paste into third-party tools. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools."]
      }
    ),
    section(
      "ev-maintenance-s5",
      "7.5 EV Maintenance — Putting the chapter together",
      ["This chapter’s through-line is simple: EV Maintenance connects principles to accountable action. Versioning prompts is as important as versioning code.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Human review remains responsible for regulated or customer-facing text. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ev maintenance in your field. Tool use can call APIs but expands attack surface if unchecked. Disclosure builds trust when customers interact with AI-assisted content."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    )
    ],
    {
      learningObjectives: ["Define ev maintenance and explain why it matters in Maintenance Selling","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "EV Maintenance connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."],
      realWorldRelevance: "Strong grasp of ev maintenance reduces rework, supports defensible records, and speeds collaboration across Maintenance Selling.",
    }
  ),
  chapter(
    "tracking-maintenance",
    8,
    "Tracking History",
    [
    section(
      "tracking-maintenance-s1",
      "8.1 Tracking History — Foundations and vocabulary",
      ["Tracking History is a foundation in Maintenance Selling because bias in training data appears in recommendations and classifications. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Cost scales with tokens; batching and caching affect unit economics. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain tracking history aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat tracking history as a shared model for decisions. Evaluation sets measure quality before wide rollout. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "tracking-maintenance-s2",
      "8.2 Tracking History — How professionals apply this in practice",
      ["Professionals rarely dispute whether tracking history exists—they dispute how cost scales with tokens; batching and caching affect unit economics. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Evaluation sets measure quality before wide rollout.","When stakes rise, pause for a second opinion or formal review. Prompt clarity reduces ambiguous outputs and rework. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Automation should fail safe when models refuse or hallucinate. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."]
      }
    ),
    section(
      "tracking-maintenance-s3",
      "8.3 Tracking History — Workplace scenarios and documentation",
      ["Scenario: a teammate cites tracking history in a meeting, but details in the packet do not match the textbook example. Evaluation sets measure quality before wide rollout. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Prompt clarity reduces ambiguous outputs and rework.","Good documentation states facts, cites the framework, and records the decision. Automation should fail safe when models refuse or hallucinate. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Large language models predict text—they do not inherently know truth. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."]
      }
    ),
    section(
      "tracking-maintenance-s4",
      "8.4 Tracking History — Common mistakes and how to avoid them",
      ["Common mistakes around tracking history include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Prompt clarity reduces ambiguous outputs and rework.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Automation should fail safe when models refuse or hallucinate. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Large language models predict text—they do not inherently know truth. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Retrieval augments models with organization-specific documents. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    ),
    section(
      "tracking-maintenance-s5",
      "8.5 Tracking History — Putting the chapter together",
      ["This chapter’s through-line is simple: Tracking History connects principles to accountable action. Automation should fail safe when models refuse or hallucinate.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Large language models predict text—they do not inherently know truth. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits tracking history in your field. Retrieval augments models with organization-specific documents. Versioning prompts is as important as versioning code."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."]
      }
    )
    ],
    {
      learningObjectives: ["Define tracking history and explain why it matters in Maintenance Selling","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Tracking History connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Bias in training data appears in recommendations and classifications.","Data minimization limits what you paste into third-party tools.","Cost scales with tokens; batching and caching affect unit economics.","Bias in training data appears in recommendations and classifications.","Data minimization limits what you paste into third-party tools."],
      realWorldRelevance: "Strong grasp of tracking history reduces rework, supports defensible records, and speeds collaboration across Maintenance Selling.",
    }
  )
];
