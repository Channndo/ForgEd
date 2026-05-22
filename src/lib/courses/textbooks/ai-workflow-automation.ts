import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const AIAUTO_TEXTBOOK_INTRO: TextbookIntro = {
  title: "AI Workflow Automation",
  subtitle: "ForgEd workforce textbook — AI Workflow Automation",
  paragraphs: [
    "This ForgEd digital textbook presents AI Workflow Automation at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const AIAUTO_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "automation-map",
    1,
    "Mapping Workflows",
    [
    section(
      "automation-map-s1",
      "1.1 Mapping Workflows — Foundations and vocabulary",
      ["Mapping Workflows is a foundation in AI Workflow Automation because large language models predict text—they do not inherently know truth. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Retrieval augments models with organization-specific documents. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain mapping workflows aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat mapping workflows as a shared model for decisions. Versioning prompts is as important as versioning code. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "automation-map-s2",
      "1.2 Mapping Workflows — How professionals apply this in practice",
      ["Professionals rarely dispute whether mapping workflows exists—they dispute how retrieval augments models with organization-specific documents. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Versioning prompts is as important as versioning code.","When stakes rise, pause for a second opinion or formal review. Human review remains responsible for regulated or customer-facing text. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Tool use can call APIs but expands attack surface if unchecked. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    ),
    section(
      "automation-map-s3",
      "1.3 Mapping Workflows — Workplace scenarios and documentation",
      ["Scenario: a teammate cites mapping workflows in a meeting, but details in the packet do not match the textbook example. Versioning prompts is as important as versioning code. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Human review remains responsible for regulated or customer-facing text.","Good documentation states facts, cites the framework, and records the decision. Tool use can call APIs but expands attack surface if unchecked. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Disclosure builds trust when customers interact with AI-assisted content. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    ),
    section(
      "automation-map-s4",
      "1.4 Mapping Workflows — Common mistakes and how to avoid them",
      ["Common mistakes around mapping workflows include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Human review remains responsible for regulated or customer-facing text.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Tool use can call APIs but expands attack surface if unchecked. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Disclosure builds trust when customers interact with AI-assisted content. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Data minimization limits what you paste into third-party tools. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."]
      }
    ),
    section(
      "automation-map-s5",
      "1.5 Mapping Workflows — Putting the chapter together",
      ["This chapter’s through-line is simple: Mapping Workflows connects principles to accountable action. Tool use can call APIs but expands attack surface if unchecked.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Disclosure builds trust when customers interact with AI-assisted content. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits mapping workflows in your field. Data minimization limits what you paste into third-party tools. Bias in training data appears in recommendations and classifications."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    )
    ],
    {
      learningObjectives: ["Define mapping workflows and explain why it matters in AI Workflow Automation","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Mapping Workflows connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."],
      realWorldRelevance: "Strong grasp of mapping workflows reduces rework, supports defensible records, and speeds collaboration across AI Workflow Automation.",
    }
  ),
  chapter(
    "triggers",
    2,
    "Triggers and Inputs",
    [
    section(
      "triggers-s1",
      "2.1 Triggers and Inputs — Foundations and vocabulary",
      ["Triggers and Inputs is a foundation in AI Workflow Automation because disclosure builds trust when customers interact with AI-assisted content. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Data minimization limits what you paste into third-party tools. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain triggers and inputs aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat triggers and inputs as a shared model for decisions. Bias in training data appears in recommendations and classifications. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "triggers-s2",
      "2.2 Triggers and Inputs — How professionals apply this in practice",
      ["Professionals rarely dispute whether triggers and inputs exists—they dispute how tool use can call APIs but expands attack surface if unchecked. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Disclosure builds trust when customers interact with AI-assisted content.","When stakes rise, pause for a second opinion or formal review. Data minimization limits what you paste into third-party tools. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Bias in training data appears in recommendations and classifications. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools."]
      }
    ),
    section(
      "triggers-s3",
      "2.3 Triggers and Inputs — Workplace scenarios and documentation",
      ["Scenario: a teammate cites triggers and inputs in a meeting, but details in the packet do not match the textbook example. Human review remains responsible for regulated or customer-facing text. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Tool use can call APIs but expands attack surface if unchecked.","Good documentation states facts, cites the framework, and records the decision. Disclosure builds trust when customers interact with AI-assisted content. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Data minimization limits what you paste into third-party tools. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."]
      }
    ),
    section(
      "triggers-s4",
      "2.4 Triggers and Inputs — Common mistakes and how to avoid them",
      ["Common mistakes around triggers and inputs include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Versioning prompts is as important as versioning code.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Human review remains responsible for regulated or customer-facing text. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Tool use can call APIs but expands attack surface if unchecked. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Disclosure builds trust when customers interact with AI-assisted content. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    ),
    section(
      "triggers-s5",
      "2.5 Triggers and Inputs — Putting the chapter together",
      ["This chapter’s through-line is simple: Triggers and Inputs connects principles to accountable action. Retrieval augments models with organization-specific documents.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Versioning prompts is as important as versioning code. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits triggers and inputs in your field. Human review remains responsible for regulated or customer-facing text. Tool use can call APIs but expands attack surface if unchecked."], {
        bulletPoints: ["Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools."]
      }
    )
    ],
    {
      learningObjectives: ["Define triggers and inputs and explain why it matters in AI Workflow Automation","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Triggers and Inputs connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Human review remains responsible for regulated or customer-facing text.","Versioning prompts is as important as versioning code.","Tool use can call APIs but expands attack surface if unchecked.","Human review remains responsible for regulated or customer-facing text.","Versioning prompts is as important as versioning code."],
      realWorldRelevance: "Strong grasp of triggers and inputs reduces rework, supports defensible records, and speeds collaboration across AI Workflow Automation.",
    }
  ),
  chapter(
    "steps-human",
    3,
    "Human-in-the-Loop Steps",
    [
    section(
      "steps-human-s1",
      "3.1 Human-in-the-Loop Steps — Foundations and vocabulary",
      ["Human-in-the-Loop Steps is a foundation in AI Workflow Automation because data minimization limits what you paste into third-party tools. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Bias in training data appears in recommendations and classifications. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain human-in-the-loop steps aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat human-in-the-loop steps as a shared model for decisions. Cost scales with tokens; batching and caching affect unit economics. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "steps-human-s2",
      "3.2 Human-in-the-Loop Steps — How professionals apply this in practice",
      ["Professionals rarely dispute whether human-in-the-loop steps exists—they dispute how bias in training data appears in recommendations and classifications. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Cost scales with tokens; batching and caching affect unit economics.","When stakes rise, pause for a second opinion or formal review. Evaluation sets measure quality before wide rollout. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Prompt clarity reduces ambiguous outputs and rework. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    ),
    section(
      "steps-human-s3",
      "3.3 Human-in-the-Loop Steps — Workplace scenarios and documentation",
      ["Scenario: a teammate cites human-in-the-loop steps in a meeting, but details in the packet do not match the textbook example. Cost scales with tokens; batching and caching affect unit economics. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Evaluation sets measure quality before wide rollout.","Good documentation states facts, cites the framework, and records the decision. Prompt clarity reduces ambiguous outputs and rework. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Automation should fail safe when models refuse or hallucinate. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    ),
    section(
      "steps-human-s4",
      "3.4 Human-in-the-Loop Steps — Common mistakes and how to avoid them",
      ["Common mistakes around human-in-the-loop steps include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Evaluation sets measure quality before wide rollout.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Prompt clarity reduces ambiguous outputs and rework. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Automation should fail safe when models refuse or hallucinate. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Large language models predict text—they do not inherently know truth. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."]
      }
    ),
    section(
      "steps-human-s5",
      "3.5 Human-in-the-Loop Steps — Putting the chapter together",
      ["This chapter’s through-line is simple: Human-in-the-Loop Steps connects principles to accountable action. Prompt clarity reduces ambiguous outputs and rework.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Automation should fail safe when models refuse or hallucinate. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits human-in-the-loop steps in your field. Large language models predict text—they do not inherently know truth. Retrieval augments models with organization-specific documents."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    )
    ],
    {
      learningObjectives: ["Define human-in-the-loop steps and explain why it matters in AI Workflow Automation","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Human-in-the-Loop Steps connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."],
      realWorldRelevance: "Strong grasp of human-in-the-loop steps reduces rework, supports defensible records, and speeds collaboration across AI Workflow Automation.",
    }
  ),
  chapter(
    "approvals",
    4,
    "Approval Gates",
    [
    section(
      "approvals-s1",
      "4.1 Approval Gates — Foundations and vocabulary",
      ["Approval Gates is a foundation in AI Workflow Automation because evaluation sets measure quality before wide rollout. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Prompt clarity reduces ambiguous outputs and rework. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain approval gates aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat approval gates as a shared model for decisions. Automation should fail safe when models refuse or hallucinate. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "approvals-s2",
      "4.2 Approval Gates — How professionals apply this in practice",
      ["Professionals rarely dispute whether approval gates exists—they dispute how cost scales with tokens; batching and caching affect unit economics. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Evaluation sets measure quality before wide rollout.","When stakes rise, pause for a second opinion or formal review. Prompt clarity reduces ambiguous outputs and rework. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Automation should fail safe when models refuse or hallucinate. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    ),
    section(
      "approvals-s3",
      "4.3 Approval Gates — Workplace scenarios and documentation",
      ["Scenario: a teammate cites approval gates in a meeting, but details in the packet do not match the textbook example. Bias in training data appears in recommendations and classifications. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Cost scales with tokens; batching and caching affect unit economics.","Good documentation states facts, cites the framework, and records the decision. Evaluation sets measure quality before wide rollout. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Prompt clarity reduces ambiguous outputs and rework. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."]
      }
    ),
    section(
      "approvals-s4",
      "4.4 Approval Gates — Common mistakes and how to avoid them",
      ["Common mistakes around approval gates include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Data minimization limits what you paste into third-party tools.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Bias in training data appears in recommendations and classifications. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Cost scales with tokens; batching and caching affect unit economics. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Evaluation sets measure quality before wide rollout. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    ),
    section(
      "approvals-s5",
      "4.5 Approval Gates — Putting the chapter together",
      ["This chapter’s through-line is simple: Approval Gates connects principles to accountable action. Disclosure builds trust when customers interact with AI-assisted content.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Data minimization limits what you paste into third-party tools. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits approval gates in your field. Bias in training data appears in recommendations and classifications. Cost scales with tokens; batching and caching affect unit economics."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    )
    ],
    {
      learningObjectives: ["Define approval gates and explain why it matters in AI Workflow Automation","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Approval Gates connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."],
      realWorldRelevance: "Strong grasp of approval gates reduces rework, supports defensible records, and speeds collaboration across AI Workflow Automation.",
    }
  ),
  chapter(
    "integrations",
    5,
    "Tool Integrations",
    [
    section(
      "integrations-s1",
      "5.1 Tool Integrations — Foundations and vocabulary",
      ["Tool Integrations is a foundation in AI Workflow Automation because disclosure builds trust when customers interact with AI-assisted content. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Data minimization limits what you paste into third-party tools. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain tool integrations aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat tool integrations as a shared model for decisions. Tool use can call APIs but expands attack surface if unchecked. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "integrations-s2",
      "5.2 Tool Integrations — How professionals apply this in practice",
      ["Professionals rarely dispute whether tool integrations exists—they dispute how human review remains responsible for regulated or customer-facing text. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Disclosure builds trust when customers interact with AI-assisted content.","When stakes rise, pause for a second opinion or formal review. Data minimization limits what you paste into third-party tools. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Tool use can call APIs but expands attack surface if unchecked. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Tool use can call APIs but expands attack surface if unchecked.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    ),
    section(
      "integrations-s3",
      "5.3 Tool Integrations — Workplace scenarios and documentation",
      ["Scenario: a teammate cites tool integrations in a meeting, but details in the packet do not match the textbook example. Versioning prompts is as important as versioning code. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Human review remains responsible for regulated or customer-facing text.","Good documentation states facts, cites the framework, and records the decision. Disclosure builds trust when customers interact with AI-assisted content. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Data minimization limits what you paste into third-party tools. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    ),
    section(
      "integrations-s4",
      "5.4 Tool Integrations — Common mistakes and how to avoid them",
      ["Common mistakes around tool integrations include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Retrieval augments models with organization-specific documents.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Versioning prompts is as important as versioning code. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Human review remains responsible for regulated or customer-facing text. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Disclosure builds trust when customers interact with AI-assisted content. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."]
      }
    ),
    section(
      "integrations-s5",
      "5.5 Tool Integrations — Putting the chapter together",
      ["This chapter’s through-line is simple: Tool Integrations connects principles to accountable action. Large language models predict text—they do not inherently know truth.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Retrieval augments models with organization-specific documents. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits tool integrations in your field. Versioning prompts is as important as versioning code. Human review remains responsible for regulated or customer-facing text."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Tool use can call APIs but expands attack surface if unchecked.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    )
    ],
    {
      learningObjectives: ["Define tool integrations and explain why it matters in AI Workflow Automation","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Tool Integrations connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Tool use can call APIs but expands attack surface if unchecked.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Tool use can call APIs but expands attack surface if unchecked.","Data minimization limits what you paste into third-party tools."],
      realWorldRelevance: "Strong grasp of tool integrations reduces rework, supports defensible records, and speeds collaboration across AI Workflow Automation.",
    }
  ),
  chapter(
    "monitoring",
    6,
    "Monitoring Outputs",
    [
    section(
      "monitoring-s1",
      "6.1 Monitoring Outputs — Foundations and vocabulary",
      ["Monitoring Outputs is a foundation in AI Workflow Automation because bias in training data appears in recommendations and classifications. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Cost scales with tokens; batching and caching affect unit economics. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain monitoring outputs aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat monitoring outputs as a shared model for decisions. Evaluation sets measure quality before wide rollout. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Prompt clarity reduces ambiguous outputs and rework.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "monitoring-s2",
      "6.2 Monitoring Outputs — How professionals apply this in practice",
      ["Professionals rarely dispute whether monitoring outputs exists—they dispute how data minimization limits what you paste into third-party tools. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Bias in training data appears in recommendations and classifications.","When stakes rise, pause for a second opinion or formal review. Cost scales with tokens; batching and caching affect unit economics. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Evaluation sets measure quality before wide rollout. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Prompt clarity reduces ambiguous outputs and rework.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."]
      }
    ),
    section(
      "monitoring-s3",
      "6.3 Monitoring Outputs — Workplace scenarios and documentation",
      ["Scenario: a teammate cites monitoring outputs in a meeting, but details in the packet do not match the textbook example. Prompt clarity reduces ambiguous outputs and rework. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Data minimization limits what you paste into third-party tools.","Good documentation states facts, cites the framework, and records the decision. Bias in training data appears in recommendations and classifications. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Cost scales with tokens; batching and caching affect unit economics. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Prompt clarity reduces ambiguous outputs and rework.","Data minimization limits what you paste into third-party tools."]
      }
    ),
    section(
      "monitoring-s4",
      "6.4 Monitoring Outputs — Common mistakes and how to avoid them",
      ["Common mistakes around monitoring outputs include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Disclosure builds trust when customers interact with AI-assisted content.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Prompt clarity reduces ambiguous outputs and rework. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Data minimization limits what you paste into third-party tools. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Bias in training data appears in recommendations and classifications. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Prompt clarity reduces ambiguous outputs and rework.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    ),
    section(
      "monitoring-s5",
      "6.5 Monitoring Outputs — Putting the chapter together",
      ["This chapter’s through-line is simple: Monitoring Outputs connects principles to accountable action. Tool use can call APIs but expands attack surface if unchecked.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Disclosure builds trust when customers interact with AI-assisted content. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits monitoring outputs in your field. Prompt clarity reduces ambiguous outputs and rework. Data minimization limits what you paste into third-party tools."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Prompt clarity reduces ambiguous outputs and rework.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."]
      }
    )
    ],
    {
      learningObjectives: ["Define monitoring outputs and explain why it matters in AI Workflow Automation","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Monitoring Outputs connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."],
      realWorldRelevance: "Strong grasp of monitoring outputs reduces rework, supports defensible records, and speeds collaboration across AI Workflow Automation.",
    }
  ),
  chapter(
    "rollback",
    7,
    "Rollback and Overrides",
    [
    section(
      "rollback-s1",
      "7.1 Rollback and Overrides — Foundations and vocabulary",
      ["Rollback and Overrides is a foundation in AI Workflow Automation because tool use can call APIs but expands attack surface if unchecked. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Disclosure builds trust when customers interact with AI-assisted content. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain rollback and overrides aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat rollback and overrides as a shared model for decisions. Data minimization limits what you paste into third-party tools. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "rollback-s2",
      "7.2 Rollback and Overrides — How professionals apply this in practice",
      ["Professionals rarely dispute whether rollback and overrides exists—they dispute how disclosure builds trust when customers interact with AI-assisted content. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Data minimization limits what you paste into third-party tools.","When stakes rise, pause for a second opinion or formal review. Bias in training data appears in recommendations and classifications. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Cost scales with tokens; batching and caching affect unit economics. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."]
      }
    ),
    section(
      "rollback-s3",
      "7.3 Rollback and Overrides — Workplace scenarios and documentation",
      ["Scenario: a teammate cites rollback and overrides in a meeting, but details in the packet do not match the textbook example. Data minimization limits what you paste into third-party tools. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Bias in training data appears in recommendations and classifications.","Good documentation states facts, cites the framework, and records the decision. Cost scales with tokens; batching and caching affect unit economics. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Evaluation sets measure quality before wide rollout. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "rollback-s4",
      "7.4 Rollback and Overrides — Common mistakes and how to avoid them",
      ["Common mistakes around rollback and overrides include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Bias in training data appears in recommendations and classifications.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Cost scales with tokens; batching and caching affect unit economics. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Evaluation sets measure quality before wide rollout. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Prompt clarity reduces ambiguous outputs and rework. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    ),
    section(
      "rollback-s5",
      "7.5 Rollback and Overrides — Putting the chapter together",
      ["This chapter’s through-line is simple: Rollback and Overrides connects principles to accountable action. Cost scales with tokens; batching and caching affect unit economics.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Evaluation sets measure quality before wide rollout. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits rollback and overrides in your field. Prompt clarity reduces ambiguous outputs and rework. Automation should fail safe when models refuse or hallucinate."], {
        bulletPoints: ["Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."]
      }
    )
    ],
    {
      learningObjectives: ["Define rollback and overrides and explain why it matters in AI Workflow Automation","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Rollback and Overrides connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."],
      realWorldRelevance: "Strong grasp of rollback and overrides reduces rework, supports defensible records, and speeds collaboration across AI Workflow Automation.",
    }
  ),
  chapter(
    "scale-automation",
    8,
    "Scaling Automation Safely",
    [
    section(
      "scale-automation-s1",
      "8.1 Scaling Automation Safely — Foundations and vocabulary",
      ["Scaling Automation Safely is a foundation in AI Workflow Automation because bias in training data appears in recommendations and classifications. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Cost scales with tokens; batching and caching affect unit economics. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain scaling automation safely aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat scaling automation safely as a shared model for decisions. Evaluation sets measure quality before wide rollout. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Automation should fail safe when models refuse or hallucinate.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "scale-automation-s2",
      "8.2 Scaling Automation Safely — How professionals apply this in practice",
      ["Professionals rarely dispute whether scaling automation safely exists—they dispute how data minimization limits what you paste into third-party tools. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Bias in training data appears in recommendations and classifications.","When stakes rise, pause for a second opinion or formal review. Cost scales with tokens; batching and caching affect unit economics. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Evaluation sets measure quality before wide rollout. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Automation should fail safe when models refuse or hallucinate.","Data minimization limits what you paste into third-party tools."]
      }
    ),
    section(
      "scale-automation-s3",
      "8.3 Scaling Automation Safely — Workplace scenarios and documentation",
      ["Scenario: a teammate cites scaling automation safely in a meeting, but details in the packet do not match the textbook example. Automation should fail safe when models refuse or hallucinate. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Data minimization limits what you paste into third-party tools.","Good documentation states facts, cites the framework, and records the decision. Bias in training data appears in recommendations and classifications. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Cost scales with tokens; batching and caching affect unit economics. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Automation should fail safe when models refuse or hallucinate.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."]
      }
    ),
    section(
      "scale-automation-s4",
      "8.4 Scaling Automation Safely — Common mistakes and how to avoid them",
      ["Common mistakes around scaling automation safely include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Disclosure builds trust when customers interact with AI-assisted content.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Automation should fail safe when models refuse or hallucinate. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Data minimization limits what you paste into third-party tools. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Bias in training data appears in recommendations and classifications. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Automation should fail safe when models refuse or hallucinate.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    ),
    section(
      "scale-automation-s5",
      "8.5 Scaling Automation Safely — Putting the chapter together",
      ["This chapter’s through-line is simple: Scaling Automation Safely connects principles to accountable action. Tool use can call APIs but expands attack surface if unchecked.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Disclosure builds trust when customers interact with AI-assisted content. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits scaling automation safely in your field. Automation should fail safe when models refuse or hallucinate. Data minimization limits what you paste into third-party tools."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Automation should fail safe when models refuse or hallucinate.","Data minimization limits what you paste into third-party tools."]
      }
    )
    ],
    {
      learningObjectives: ["Define scaling automation safely and explain why it matters in AI Workflow Automation","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Scaling Automation Safely connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Tool use can call APIs but expands attack surface if unchecked.","Human review remains responsible for regulated or customer-facing text.","Disclosure builds trust when customers interact with AI-assisted content.","Tool use can call APIs but expands attack surface if unchecked.","Human review remains responsible for regulated or customer-facing text."],
      realWorldRelevance: "Strong grasp of scaling automation safely reduces rework, supports defensible records, and speeds collaboration across AI Workflow Automation.",
    }
  )
];
