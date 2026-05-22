import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const AIPROD_TEXTBOOK_INTRO: TextbookIntro = {
  title: "AI Productivity Systems",
  subtitle: "ForgEd workforce textbook — AI Productivity Systems",
  paragraphs: [
    "This ForgEd digital textbook presents AI Productivity Systems at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const AIPROD_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "inbox-triage",
    1,
    "Inbox and Message Triage",
    [
    section(
      "inbox-triage-s1",
      "1.1 Inbox and Message Triage — Foundations and vocabulary",
      ["Inbox and Message Triage is a foundation in AI Productivity Systems because versioning prompts is as important as versioning code. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Human review remains responsible for regulated or customer-facing text. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain inbox and message triage aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat inbox and message triage as a shared model for decisions. Tool use can call APIs but expands attack surface if unchecked. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "inbox-triage-s2",
      "1.2 Inbox and Message Triage — How professionals apply this in practice",
      ["Professionals rarely dispute whether inbox and message triage exists—they dispute how retrieval augments models with organization-specific documents. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Versioning prompts is as important as versioning code.","When stakes rise, pause for a second opinion or formal review. Human review remains responsible for regulated or customer-facing text. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Tool use can call APIs but expands attack surface if unchecked. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    ),
    section(
      "inbox-triage-s3",
      "1.3 Inbox and Message Triage — Workplace scenarios and documentation",
      ["Scenario: a teammate cites inbox and message triage in a meeting, but details in the packet do not match the textbook example. Large language models predict text—they do not inherently know truth. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Retrieval augments models with organization-specific documents.","Good documentation states facts, cites the framework, and records the decision. Versioning prompts is as important as versioning code. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Human review remains responsible for regulated or customer-facing text. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "inbox-triage-s4",
      "1.4 Inbox and Message Triage — Common mistakes and how to avoid them",
      ["Common mistakes around inbox and message triage include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Automation should fail safe when models refuse or hallucinate.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Large language models predict text—they do not inherently know truth. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Retrieval augments models with organization-specific documents. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Versioning prompts is as important as versioning code. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    ),
    section(
      "inbox-triage-s5",
      "1.5 Inbox and Message Triage — Putting the chapter together",
      ["This chapter’s through-line is simple: Inbox and Message Triage connects principles to accountable action. Prompt clarity reduces ambiguous outputs and rework.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Automation should fail safe when models refuse or hallucinate. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits inbox and message triage in your field. Large language models predict text—they do not inherently know truth. Retrieval augments models with organization-specific documents."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    )
    ],
    {
      learningObjectives: ["Define inbox and message triage and explain why it matters in AI Productivity Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Inbox and Message Triage connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Prompt clarity reduces ambiguous outputs and rework.","Evaluation sets measure quality before wide rollout.","Automation should fail safe when models refuse or hallucinate.","Prompt clarity reduces ambiguous outputs and rework.","Evaluation sets measure quality before wide rollout."],
      realWorldRelevance: "Strong grasp of inbox and message triage reduces rework, supports defensible records, and speeds collaboration across AI Productivity Systems.",
    }
  ),
  chapter(
    "meeting-prep",
    2,
    "Meeting Preparation",
    [
    section(
      "meeting-prep-s1",
      "2.1 Meeting Preparation — Foundations and vocabulary",
      ["Meeting Preparation is a foundation in AI Productivity Systems because cost scales with tokens; batching and caching affect unit economics. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Evaluation sets measure quality before wide rollout. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain meeting preparation aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat meeting preparation as a shared model for decisions. Prompt clarity reduces ambiguous outputs and rework. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "meeting-prep-s2",
      "2.2 Meeting Preparation — How professionals apply this in practice",
      ["Professionals rarely dispute whether meeting preparation exists—they dispute how bias in training data appears in recommendations and classifications. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Cost scales with tokens; batching and caching affect unit economics.","When stakes rise, pause for a second opinion or formal review. Evaluation sets measure quality before wide rollout. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Prompt clarity reduces ambiguous outputs and rework. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "meeting-prep-s3",
      "2.3 Meeting Preparation — Workplace scenarios and documentation",
      ["Scenario: a teammate cites meeting preparation in a meeting, but details in the packet do not match the textbook example. Data minimization limits what you paste into third-party tools. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Bias in training data appears in recommendations and classifications.","Good documentation states facts, cites the framework, and records the decision. Cost scales with tokens; batching and caching affect unit economics. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Evaluation sets measure quality before wide rollout. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."]
      }
    ),
    section(
      "meeting-prep-s4",
      "2.4 Meeting Preparation — Common mistakes and how to avoid them",
      ["Common mistakes around meeting preparation include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Disclosure builds trust when customers interact with AI-assisted content.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Data minimization limits what you paste into third-party tools. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Bias in training data appears in recommendations and classifications. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Cost scales with tokens; batching and caching affect unit economics. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    ),
    section(
      "meeting-prep-s5",
      "2.5 Meeting Preparation — Putting the chapter together",
      ["This chapter’s through-line is simple: Meeting Preparation connects principles to accountable action. Tool use can call APIs but expands attack surface if unchecked.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Disclosure builds trust when customers interact with AI-assisted content. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits meeting preparation in your field. Data minimization limits what you paste into third-party tools. Bias in training data appears in recommendations and classifications."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    )
    ],
    {
      learningObjectives: ["Define meeting preparation and explain why it matters in AI Productivity Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Meeting Preparation connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Large language models predict text—they do not inherently know truth.","Automation should fail safe when models refuse or hallucinate.","Retrieval augments models with organization-specific documents.","Large language models predict text—they do not inherently know truth.","Automation should fail safe when models refuse or hallucinate."],
      realWorldRelevance: "Strong grasp of meeting preparation reduces rework, supports defensible records, and speeds collaboration across AI Productivity Systems.",
    }
  ),
  chapter(
    "doc-drafting",
    3,
    "Document Drafting",
    [
    section(
      "doc-drafting-s1",
      "3.1 Document Drafting — Foundations and vocabulary",
      ["Document Drafting is a foundation in AI Productivity Systems because tool use can call APIs but expands attack surface if unchecked. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Disclosure builds trust when customers interact with AI-assisted content. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain document drafting aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat document drafting as a shared model for decisions. Retrieval augments models with organization-specific documents. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Retrieval augments models with organization-specific documents.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "doc-drafting-s2",
      "3.2 Document Drafting — How professionals apply this in practice",
      ["Professionals rarely dispute whether document drafting exists—they dispute how human review remains responsible for regulated or customer-facing text. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Tool use can call APIs but expands attack surface if unchecked.","When stakes rise, pause for a second opinion or formal review. Disclosure builds trust when customers interact with AI-assisted content. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Retrieval augments models with organization-specific documents. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Retrieval augments models with organization-specific documents.","Data minimization limits what you paste into third-party tools."]
      }
    ),
    section(
      "doc-drafting-s3",
      "3.3 Document Drafting — Workplace scenarios and documentation",
      ["Scenario: a teammate cites document drafting in a meeting, but details in the packet do not match the textbook example. Versioning prompts is as important as versioning code. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Human review remains responsible for regulated or customer-facing text.","Good documentation states facts, cites the framework, and records the decision. Tool use can call APIs but expands attack surface if unchecked. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Disclosure builds trust when customers interact with AI-assisted content. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Retrieval augments models with organization-specific documents.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."]
      }
    ),
    section(
      "doc-drafting-s4",
      "3.4 Document Drafting — Common mistakes and how to avoid them",
      ["Common mistakes around document drafting include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Large language models predict text—they do not inherently know truth.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Versioning prompts is as important as versioning code. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Human review remains responsible for regulated or customer-facing text. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Tool use can call APIs but expands attack surface if unchecked. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Retrieval augments models with organization-specific documents.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    ),
    section(
      "doc-drafting-s5",
      "3.5 Document Drafting — Putting the chapter together",
      ["This chapter’s through-line is simple: Document Drafting connects principles to accountable action. Automation should fail safe when models refuse or hallucinate.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Large language models predict text—they do not inherently know truth. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits document drafting in your field. Versioning prompts is as important as versioning code. Human review remains responsible for regulated or customer-facing text."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Retrieval augments models with organization-specific documents.","Data minimization limits what you paste into third-party tools."]
      }
    )
    ],
    {
      learningObjectives: ["Define document drafting and explain why it matters in AI Productivity Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Document Drafting connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Tool use can call APIs but expands attack surface if unchecked.","Human review remains responsible for regulated or customer-facing text.","Disclosure builds trust when customers interact with AI-assisted content.","Tool use can call APIs but expands attack surface if unchecked.","Human review remains responsible for regulated or customer-facing text."],
      realWorldRelevance: "Strong grasp of document drafting reduces rework, supports defensible records, and speeds collaboration across AI Productivity Systems.",
    }
  ),
  chapter(
    "summarization",
    4,
    "Summarization Patterns",
    [
    section(
      "summarization-s1",
      "4.1 Summarization Patterns — Foundations and vocabulary",
      ["Summarization Patterns is a foundation in AI Productivity Systems because cost scales with tokens; batching and caching affect unit economics. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Evaluation sets measure quality before wide rollout. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain summarization patterns aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat summarization patterns as a shared model for decisions. Prompt clarity reduces ambiguous outputs and rework. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "summarization-s2",
      "4.2 Summarization Patterns — How professionals apply this in practice",
      ["Professionals rarely dispute whether summarization patterns exists—they dispute how bias in training data appears in recommendations and classifications. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Cost scales with tokens; batching and caching affect unit economics.","When stakes rise, pause for a second opinion or formal review. Evaluation sets measure quality before wide rollout. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Prompt clarity reduces ambiguous outputs and rework. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    ),
    section(
      "summarization-s3",
      "4.3 Summarization Patterns — Workplace scenarios and documentation",
      ["Scenario: a teammate cites summarization patterns in a meeting, but details in the packet do not match the textbook example. Data minimization limits what you paste into third-party tools. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Bias in training data appears in recommendations and classifications.","Good documentation states facts, cites the framework, and records the decision. Cost scales with tokens; batching and caching affect unit economics. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Evaluation sets measure quality before wide rollout. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    ),
    section(
      "summarization-s4",
      "4.4 Summarization Patterns — Common mistakes and how to avoid them",
      ["Common mistakes around summarization patterns include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Disclosure builds trust when customers interact with AI-assisted content.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Data minimization limits what you paste into third-party tools. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Bias in training data appears in recommendations and classifications. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Cost scales with tokens; batching and caching affect unit economics. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."]
      }
    ),
    section(
      "summarization-s5",
      "4.5 Summarization Patterns — Putting the chapter together",
      ["This chapter’s through-line is simple: Summarization Patterns connects principles to accountable action. Tool use can call APIs but expands attack surface if unchecked.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Disclosure builds trust when customers interact with AI-assisted content. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits summarization patterns in your field. Data minimization limits what you paste into third-party tools. Bias in training data appears in recommendations and classifications."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    )
    ],
    {
      learningObjectives: ["Define summarization patterns and explain why it matters in AI Productivity Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Summarization Patterns connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Cost scales with tokens; batching and caching affect unit economics.","Bias in training data appears in recommendations and classifications.","Evaluation sets measure quality before wide rollout.","Cost scales with tokens; batching and caching affect unit economics.","Bias in training data appears in recommendations and classifications."],
      realWorldRelevance: "Strong grasp of summarization patterns reduces rework, supports defensible records, and speeds collaboration across AI Productivity Systems.",
    }
  ),
  chapter(
    "task-delegation",
    5,
    "Task Delegation to AI",
    [
    section(
      "task-delegation-s1",
      "5.1 Task Delegation to AI — Foundations and vocabulary",
      ["Task Delegation to AI is a foundation in AI Productivity Systems because prompt clarity reduces ambiguous outputs and rework. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Automation should fail safe when models refuse or hallucinate. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain task delegation to ai aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat task delegation to ai as a shared model for decisions. Large language models predict text—they do not inherently know truth. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "task-delegation-s2",
      "5.2 Task Delegation to AI — How professionals apply this in practice",
      ["Professionals rarely dispute whether task delegation to ai exists—they dispute how evaluation sets measure quality before wide rollout. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Prompt clarity reduces ambiguous outputs and rework.","When stakes rise, pause for a second opinion or formal review. Automation should fail safe when models refuse or hallucinate. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Large language models predict text—they do not inherently know truth. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    ),
    section(
      "task-delegation-s3",
      "5.3 Task Delegation to AI — Workplace scenarios and documentation",
      ["Scenario: a teammate cites task delegation to ai in a meeting, but details in the packet do not match the textbook example. Cost scales with tokens; batching and caching affect unit economics. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Evaluation sets measure quality before wide rollout.","Good documentation states facts, cites the framework, and records the decision. Prompt clarity reduces ambiguous outputs and rework. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Automation should fail safe when models refuse or hallucinate. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    ),
    section(
      "task-delegation-s4",
      "5.4 Task Delegation to AI — Common mistakes and how to avoid them",
      ["Common mistakes around task delegation to ai include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Bias in training data appears in recommendations and classifications.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Cost scales with tokens; batching and caching affect unit economics. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Evaluation sets measure quality before wide rollout. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Prompt clarity reduces ambiguous outputs and rework. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."]
      }
    ),
    section(
      "task-delegation-s5",
      "5.5 Task Delegation to AI — Putting the chapter together",
      ["This chapter’s through-line is simple: Task Delegation to AI connects principles to accountable action. Data minimization limits what you paste into third-party tools.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Bias in training data appears in recommendations and classifications. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits task delegation to ai in your field. Cost scales with tokens; batching and caching affect unit economics. Evaluation sets measure quality before wide rollout."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    )
    ],
    {
      learningObjectives: ["Define task delegation to ai and explain why it matters in AI Productivity Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Task Delegation to AI connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Data minimization limits what you paste into third-party tools.","Disclosure builds trust when customers interact with AI-assisted content.","Bias in training data appears in recommendations and classifications.","Data minimization limits what you paste into third-party tools.","Disclosure builds trust when customers interact with AI-assisted content."],
      realWorldRelevance: "Strong grasp of task delegation to ai reduces rework, supports defensible records, and speeds collaboration across AI Productivity Systems.",
    }
  ),
  chapter(
    "templates",
    6,
    "Reusable Templates",
    [
    section(
      "templates-s1",
      "6.1 Reusable Templates — Foundations and vocabulary",
      ["Reusable Templates is a foundation in AI Productivity Systems because prompt clarity reduces ambiguous outputs and rework. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Automation should fail safe when models refuse or hallucinate. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain reusable templates aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat reusable templates as a shared model for decisions. Large language models predict text—they do not inherently know truth. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "templates-s2",
      "6.2 Reusable Templates — How professionals apply this in practice",
      ["Professionals rarely dispute whether reusable templates exists—they dispute how automation should fail safe when models refuse or hallucinate. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Large language models predict text—they do not inherently know truth.","When stakes rise, pause for a second opinion or formal review. Retrieval augments models with organization-specific documents. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Versioning prompts is as important as versioning code. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    ),
    section(
      "templates-s3",
      "6.3 Reusable Templates — Workplace scenarios and documentation",
      ["Scenario: a teammate cites reusable templates in a meeting, but details in the packet do not match the textbook example. Large language models predict text—they do not inherently know truth. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Retrieval augments models with organization-specific documents.","Good documentation states facts, cites the framework, and records the decision. Versioning prompts is as important as versioning code. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Human review remains responsible for regulated or customer-facing text. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    ),
    section(
      "templates-s4",
      "6.4 Reusable Templates — Common mistakes and how to avoid them",
      ["Common mistakes around reusable templates include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Retrieval augments models with organization-specific documents.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Versioning prompts is as important as versioning code. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Human review remains responsible for regulated or customer-facing text. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Tool use can call APIs but expands attack surface if unchecked. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."]
      }
    ),
    section(
      "templates-s5",
      "6.5 Reusable Templates — Putting the chapter together",
      ["This chapter’s through-line is simple: Reusable Templates connects principles to accountable action. Versioning prompts is as important as versioning code.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Human review remains responsible for regulated or customer-facing text. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits reusable templates in your field. Tool use can call APIs but expands attack surface if unchecked. Disclosure builds trust when customers interact with AI-assisted content."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    )
    ],
    {
      learningObjectives: ["Define reusable templates and explain why it matters in AI Productivity Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Reusable Templates connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Data minimization limits what you paste into third-party tools.","Disclosure builds trust when customers interact with AI-assisted content.","Bias in training data appears in recommendations and classifications.","Data minimization limits what you paste into third-party tools.","Disclosure builds trust when customers interact with AI-assisted content."],
      realWorldRelevance: "Strong grasp of reusable templates reduces rework, supports defensible records, and speeds collaboration across AI Productivity Systems.",
    }
  ),
  chapter(
    "review-loops",
    7,
    "Human Review Loops",
    [
    section(
      "review-loops-s1",
      "7.1 Human Review Loops — Foundations and vocabulary",
      ["Human Review Loops is a foundation in AI Productivity Systems because automation should fail safe when models refuse or hallucinate. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Large language models predict text—they do not inherently know truth. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain human review loops aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat human review loops as a shared model for decisions. Retrieval augments models with organization-specific documents. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Tool use can call APIs but expands attack surface if unchecked."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "review-loops-s2",
      "7.2 Human Review Loops — How professionals apply this in practice",
      ["Professionals rarely dispute whether human review loops exists—they dispute how prompt clarity reduces ambiguous outputs and rework. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Automation should fail safe when models refuse or hallucinate.","When stakes rise, pause for a second opinion or formal review. Large language models predict text—they do not inherently know truth. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Retrieval augments models with organization-specific documents. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    ),
    section(
      "review-loops-s3",
      "7.3 Human Review Loops — Workplace scenarios and documentation",
      ["Scenario: a teammate cites human review loops in a meeting, but details in the packet do not match the textbook example. Evaluation sets measure quality before wide rollout. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Prompt clarity reduces ambiguous outputs and rework.","Good documentation states facts, cites the framework, and records the decision. Automation should fail safe when models refuse or hallucinate. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Large language models predict text—they do not inherently know truth. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."]
      }
    ),
    section(
      "review-loops-s4",
      "7.4 Human Review Loops — Common mistakes and how to avoid them",
      ["Common mistakes around human review loops include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Cost scales with tokens; batching and caching affect unit economics.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Evaluation sets measure quality before wide rollout. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Prompt clarity reduces ambiguous outputs and rework. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Automation should fail safe when models refuse or hallucinate. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    ),
    section(
      "review-loops-s5",
      "7.5 Human Review Loops — Putting the chapter together",
      ["This chapter’s through-line is simple: Human Review Loops connects principles to accountable action. Bias in training data appears in recommendations and classifications.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Cost scales with tokens; batching and caching affect unit economics. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits human review loops in your field. Evaluation sets measure quality before wide rollout. Prompt clarity reduces ambiguous outputs and rework."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    )
    ],
    {
      learningObjectives: ["Define human review loops and explain why it matters in AI Productivity Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Human Review Loops connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Automation should fail safe when models refuse or hallucinate.","Prompt clarity reduces ambiguous outputs and rework.","Large language models predict text—they do not inherently know truth.","Automation should fail safe when models refuse or hallucinate.","Prompt clarity reduces ambiguous outputs and rework."],
      realWorldRelevance: "Strong grasp of human review loops reduces rework, supports defensible records, and speeds collaboration across AI Productivity Systems.",
    }
  ),
  chapter(
    "productivity-metrics",
    8,
    "Measuring Productivity Gains",
    [
    section(
      "productivity-metrics-s1",
      "8.1 Measuring Productivity Gains — Foundations and vocabulary",
      ["Measuring Productivity Gains is a foundation in AI Productivity Systems because human review remains responsible for regulated or customer-facing text. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Tool use can call APIs but expands attack surface if unchecked. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain measuring productivity gains aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat measuring productivity gains as a shared model for decisions. Disclosure builds trust when customers interact with AI-assisted content. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "productivity-metrics-s2",
      "8.2 Measuring Productivity Gains — How professionals apply this in practice",
      ["Professionals rarely dispute whether measuring productivity gains exists—they dispute how tool use can call APIs but expands attack surface if unchecked. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Disclosure builds trust when customers interact with AI-assisted content.","When stakes rise, pause for a second opinion or formal review. Data minimization limits what you paste into third-party tools. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Bias in training data appears in recommendations and classifications. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    ),
    section(
      "productivity-metrics-s3",
      "8.3 Measuring Productivity Gains — Workplace scenarios and documentation",
      ["Scenario: a teammate cites measuring productivity gains in a meeting, but details in the packet do not match the textbook example. Disclosure builds trust when customers interact with AI-assisted content. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Data minimization limits what you paste into third-party tools.","Good documentation states facts, cites the framework, and records the decision. Bias in training data appears in recommendations and classifications. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Cost scales with tokens; batching and caching affect unit economics. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    ),
    section(
      "productivity-metrics-s4",
      "8.4 Measuring Productivity Gains — Common mistakes and how to avoid them",
      ["Common mistakes around measuring productivity gains include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Data minimization limits what you paste into third-party tools.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Bias in training data appears in recommendations and classifications. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Cost scales with tokens; batching and caching affect unit economics. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Evaluation sets measure quality before wide rollout. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "productivity-metrics-s5",
      "8.5 Measuring Productivity Gains — Putting the chapter together",
      ["This chapter’s through-line is simple: Measuring Productivity Gains connects principles to accountable action. Bias in training data appears in recommendations and classifications.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Cost scales with tokens; batching and caching affect unit economics. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits measuring productivity gains in your field. Evaluation sets measure quality before wide rollout. Prompt clarity reduces ambiguous outputs and rework."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    )
    ],
    {
      learningObjectives: ["Define measuring productivity gains and explain why it matters in AI Productivity Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Measuring Productivity Gains connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Automation should fail safe when models refuse or hallucinate.","Prompt clarity reduces ambiguous outputs and rework.","Large language models predict text—they do not inherently know truth.","Automation should fail safe when models refuse or hallucinate.","Prompt clarity reduces ambiguous outputs and rework."],
      realWorldRelevance: "Strong grasp of measuring productivity gains reduces rework, supports defensible records, and speeds collaboration across AI Productivity Systems.",
    }
  )
];
