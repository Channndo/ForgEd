import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const AASVC_TEXTBOOK_INTRO: TextbookIntro = {
  title: "AI in Automotive Service",
  subtitle: "ForgEd workforce textbook — AI in Automotive Service",
  paragraphs: [
    "This ForgEd digital textbook presents AI in Automotive Service at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const AASVC_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "ai-scheduling-svc",
    1,
    "AI Scheduling",
    [
    section(
      "ai-scheduling-svc-s1",
      "1.1 AI Scheduling — Foundations and vocabulary",
      ["AI Scheduling is a foundation in AI in Automotive Service because versioning prompts is as important as versioning code. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Human review remains responsible for regulated or customer-facing text. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ai scheduling aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ai scheduling as a shared model for decisions. Tool use can call APIs but expands attack surface if unchecked. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "ai-scheduling-svc-s2",
      "1.2 AI Scheduling — How professionals apply this in practice",
      ["Professionals rarely dispute whether ai scheduling exists—they dispute how retrieval augments models with organization-specific documents. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Versioning prompts is as important as versioning code.","When stakes rise, pause for a second opinion or formal review. Human review remains responsible for regulated or customer-facing text. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Tool use can call APIs but expands attack surface if unchecked. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    ),
    section(
      "ai-scheduling-svc-s3",
      "1.3 AI Scheduling — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ai scheduling in a meeting, but details in the packet do not match the textbook example. Large language models predict text—they do not inherently know truth. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Retrieval augments models with organization-specific documents.","Good documentation states facts, cites the framework, and records the decision. Versioning prompts is as important as versioning code. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Human review remains responsible for regulated or customer-facing text. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "ai-scheduling-svc-s4",
      "1.4 AI Scheduling — Common mistakes and how to avoid them",
      ["Common mistakes around ai scheduling include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Automation should fail safe when models refuse or hallucinate.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Large language models predict text—they do not inherently know truth. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Retrieval augments models with organization-specific documents. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Versioning prompts is as important as versioning code. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    ),
    section(
      "ai-scheduling-svc-s5",
      "1.5 AI Scheduling — Putting the chapter together",
      ["This chapter’s through-line is simple: AI Scheduling connects principles to accountable action. Prompt clarity reduces ambiguous outputs and rework.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Automation should fail safe when models refuse or hallucinate. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ai scheduling in your field. Large language models predict text—they do not inherently know truth. Retrieval augments models with organization-specific documents."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    )
    ],
    {
      learningObjectives: ["Define ai scheduling and explain why it matters in AI in Automotive Service","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "AI Scheduling connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Prompt clarity reduces ambiguous outputs and rework.","Evaluation sets measure quality before wide rollout.","Automation should fail safe when models refuse or hallucinate.","Prompt clarity reduces ambiguous outputs and rework.","Evaluation sets measure quality before wide rollout."],
      realWorldRelevance: "Strong grasp of ai scheduling reduces rework, supports defensible records, and speeds collaboration across AI in Automotive Service.",
    }
  ),
  chapter(
    "ai-status",
    2,
    "AI Status Updates",
    [
    section(
      "ai-status-s1",
      "2.1 AI Status Updates — Foundations and vocabulary",
      ["AI Status Updates is a foundation in AI in Automotive Service because data minimization limits what you paste into third-party tools. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Bias in training data appears in recommendations and classifications. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ai status updates aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ai status updates as a shared model for decisions. Cost scales with tokens; batching and caching affect unit economics. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "ai-status-s2",
      "2.2 AI Status Updates — How professionals apply this in practice",
      ["Professionals rarely dispute whether ai status updates exists—they dispute how bias in training data appears in recommendations and classifications. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Cost scales with tokens; batching and caching affect unit economics.","When stakes rise, pause for a second opinion or formal review. Evaluation sets measure quality before wide rollout. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Prompt clarity reduces ambiguous outputs and rework. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    ),
    section(
      "ai-status-s3",
      "2.3 AI Status Updates — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ai status updates in a meeting, but details in the packet do not match the textbook example. Cost scales with tokens; batching and caching affect unit economics. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Evaluation sets measure quality before wide rollout.","Good documentation states facts, cites the framework, and records the decision. Prompt clarity reduces ambiguous outputs and rework. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Automation should fail safe when models refuse or hallucinate. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    ),
    section(
      "ai-status-s4",
      "2.4 AI Status Updates — Common mistakes and how to avoid them",
      ["Common mistakes around ai status updates include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Evaluation sets measure quality before wide rollout.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Prompt clarity reduces ambiguous outputs and rework. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Automation should fail safe when models refuse or hallucinate. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Large language models predict text—they do not inherently know truth. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."]
      }
    ),
    section(
      "ai-status-s5",
      "2.5 AI Status Updates — Putting the chapter together",
      ["This chapter’s through-line is simple: AI Status Updates connects principles to accountable action. Prompt clarity reduces ambiguous outputs and rework.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Automation should fail safe when models refuse or hallucinate. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ai status updates in your field. Large language models predict text—they do not inherently know truth. Retrieval augments models with organization-specific documents."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    )
    ],
    {
      learningObjectives: ["Define ai status updates and explain why it matters in AI in Automotive Service","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "AI Status Updates connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."],
      realWorldRelevance: "Strong grasp of ai status updates reduces rework, supports defensible records, and speeds collaboration across AI in Automotive Service.",
    }
  ),
  chapter(
    "ai-notes",
    3,
    "AI Service Notes",
    [
    section(
      "ai-notes-s1",
      "3.1 AI Service Notes — Foundations and vocabulary",
      ["AI Service Notes is a foundation in AI in Automotive Service because tool use can call APIs but expands attack surface if unchecked. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Disclosure builds trust when customers interact with AI-assisted content. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ai service notes aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ai service notes as a shared model for decisions. Data minimization limits what you paste into third-party tools. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "ai-notes-s2",
      "3.2 AI Service Notes — How professionals apply this in practice",
      ["Professionals rarely dispute whether ai service notes exists—they dispute how disclosure builds trust when customers interact with AI-assisted content. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Data minimization limits what you paste into third-party tools.","When stakes rise, pause for a second opinion or formal review. Bias in training data appears in recommendations and classifications. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Cost scales with tokens; batching and caching affect unit economics. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."]
      }
    ),
    section(
      "ai-notes-s3",
      "3.3 AI Service Notes — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ai service notes in a meeting, but details in the packet do not match the textbook example. Data minimization limits what you paste into third-party tools. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Bias in training data appears in recommendations and classifications.","Good documentation states facts, cites the framework, and records the decision. Cost scales with tokens; batching and caching affect unit economics. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Evaluation sets measure quality before wide rollout. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "ai-notes-s4",
      "3.4 AI Service Notes — Common mistakes and how to avoid them",
      ["Common mistakes around ai service notes include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Bias in training data appears in recommendations and classifications.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Cost scales with tokens; batching and caching affect unit economics. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Evaluation sets measure quality before wide rollout. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Prompt clarity reduces ambiguous outputs and rework. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    ),
    section(
      "ai-notes-s5",
      "3.5 AI Service Notes — Putting the chapter together",
      ["This chapter’s through-line is simple: AI Service Notes connects principles to accountable action. Cost scales with tokens; batching and caching affect unit economics.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Evaluation sets measure quality before wide rollout. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ai service notes in your field. Prompt clarity reduces ambiguous outputs and rework. Automation should fail safe when models refuse or hallucinate."], {
        bulletPoints: ["Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."]
      }
    )
    ],
    {
      learningObjectives: ["Define ai service notes and explain why it matters in AI in Automotive Service","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "AI Service Notes connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."],
      realWorldRelevance: "Strong grasp of ai service notes reduces rework, supports defensible records, and speeds collaboration across AI in Automotive Service.",
    }
  ),
  chapter(
    "ai-parts",
    4,
    "AI Parts Lookup",
    [
    section(
      "ai-parts-s1",
      "4.1 AI Parts Lookup — Foundations and vocabulary",
      ["AI Parts Lookup is a foundation in AI in Automotive Service because large language models predict text—they do not inherently know truth. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Retrieval augments models with organization-specific documents. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ai parts lookup aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ai parts lookup as a shared model for decisions. Versioning prompts is as important as versioning code. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "ai-parts-s2",
      "4.2 AI Parts Lookup — How professionals apply this in practice",
      ["Professionals rarely dispute whether ai parts lookup exists—they dispute how automation should fail safe when models refuse or hallucinate. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Large language models predict text—they do not inherently know truth.","When stakes rise, pause for a second opinion or formal review. Retrieval augments models with organization-specific documents. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Versioning prompts is as important as versioning code. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    ),
    section(
      "ai-parts-s3",
      "4.3 AI Parts Lookup — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ai parts lookup in a meeting, but details in the packet do not match the textbook example. Prompt clarity reduces ambiguous outputs and rework. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Automation should fail safe when models refuse or hallucinate.","Good documentation states facts, cites the framework, and records the decision. Large language models predict text—they do not inherently know truth. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Retrieval augments models with organization-specific documents. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    ),
    section(
      "ai-parts-s4",
      "4.4 AI Parts Lookup — Common mistakes and how to avoid them",
      ["Common mistakes around ai parts lookup include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Evaluation sets measure quality before wide rollout.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Prompt clarity reduces ambiguous outputs and rework. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Automation should fail safe when models refuse or hallucinate. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Large language models predict text—they do not inherently know truth. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."]
      }
    ),
    section(
      "ai-parts-s5",
      "4.5 AI Parts Lookup — Putting the chapter together",
      ["This chapter’s through-line is simple: AI Parts Lookup connects principles to accountable action. Cost scales with tokens; batching and caching affect unit economics.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Evaluation sets measure quality before wide rollout. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ai parts lookup in your field. Prompt clarity reduces ambiguous outputs and rework. Automation should fail safe when models refuse or hallucinate."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    )
    ],
    {
      learningObjectives: ["Define ai parts lookup and explain why it matters in AI in Automotive Service","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "AI Parts Lookup connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."],
      realWorldRelevance: "Strong grasp of ai parts lookup reduces rework, supports defensible records, and speeds collaboration across AI in Automotive Service.",
    }
  ),
  chapter(
    "ai-training",
    5,
    "Training Staff on AI",
    [
    section(
      "ai-training-s1",
      "5.1 Training Staff on AI — Foundations and vocabulary",
      ["Training Staff on AI is a foundation in AI in Automotive Service because automation should fail safe when models refuse or hallucinate. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Large language models predict text—they do not inherently know truth. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain training staff on ai aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat training staff on ai as a shared model for decisions. Retrieval augments models with organization-specific documents. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "ai-training-s2",
      "5.2 Training Staff on AI — How professionals apply this in practice",
      ["Professionals rarely dispute whether training staff on ai exists—they dispute how large language models predict text—they do not inherently know truth. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Retrieval augments models with organization-specific documents.","When stakes rise, pause for a second opinion or formal review. Versioning prompts is as important as versioning code. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Human review remains responsible for regulated or customer-facing text. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    ),
    section(
      "ai-training-s3",
      "5.3 Training Staff on AI — Workplace scenarios and documentation",
      ["Scenario: a teammate cites training staff on ai in a meeting, but details in the packet do not match the textbook example. Retrieval augments models with organization-specific documents. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Versioning prompts is as important as versioning code.","Good documentation states facts, cites the framework, and records the decision. Human review remains responsible for regulated or customer-facing text. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Tool use can call APIs but expands attack surface if unchecked. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    ),
    section(
      "ai-training-s4",
      "5.4 Training Staff on AI — Common mistakes and how to avoid them",
      ["Common mistakes around training staff on ai include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Versioning prompts is as important as versioning code.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Human review remains responsible for regulated or customer-facing text. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Tool use can call APIs but expands attack surface if unchecked. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Disclosure builds trust when customers interact with AI-assisted content. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "ai-training-s5",
      "5.5 Training Staff on AI — Putting the chapter together",
      ["This chapter’s through-line is simple: Training Staff on AI connects principles to accountable action. Human review remains responsible for regulated or customer-facing text.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Tool use can call APIs but expands attack surface if unchecked. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits training staff on ai in your field. Disclosure builds trust when customers interact with AI-assisted content. Bias in training data appears in recommendations and classifications."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    )
    ],
    {
      learningObjectives: ["Define training staff on ai and explain why it matters in AI in Automotive Service","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Training Staff on AI connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Automation should fail safe when models refuse or hallucinate.","Prompt clarity reduces ambiguous outputs and rework.","Large language models predict text—they do not inherently know truth.","Automation should fail safe when models refuse or hallucinate.","Prompt clarity reduces ambiguous outputs and rework."],
      realWorldRelevance: "Strong grasp of training staff on ai reduces rework, supports defensible records, and speeds collaboration across AI in Automotive Service.",
    }
  ),
  chapter(
    "privacy-svc",
    6,
    "Customer Privacy",
    [
    section(
      "privacy-svc-s1",
      "6.1 Customer Privacy — Foundations and vocabulary",
      ["Customer Privacy is a foundation in AI in Automotive Service because prompt clarity reduces ambiguous outputs and rework. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Automation should fail safe when models refuse or hallucinate. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain customer privacy aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat customer privacy as a shared model for decisions. Large language models predict text—they do not inherently know truth. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "privacy-svc-s2",
      "6.2 Customer Privacy — How professionals apply this in practice",
      ["Professionals rarely dispute whether customer privacy exists—they dispute how automation should fail safe when models refuse or hallucinate. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Large language models predict text—they do not inherently know truth.","When stakes rise, pause for a second opinion or formal review. Retrieval augments models with organization-specific documents. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Versioning prompts is as important as versioning code. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    ),
    section(
      "privacy-svc-s3",
      "6.3 Customer Privacy — Workplace scenarios and documentation",
      ["Scenario: a teammate cites customer privacy in a meeting, but details in the packet do not match the textbook example. Large language models predict text—they do not inherently know truth. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Retrieval augments models with organization-specific documents.","Good documentation states facts, cites the framework, and records the decision. Versioning prompts is as important as versioning code. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Tool use can call APIs but expands attack surface if unchecked. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    ),
    section(
      "privacy-svc-s4",
      "6.4 Customer Privacy — Common mistakes and how to avoid them",
      ["Common mistakes around customer privacy include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Retrieval augments models with organization-specific documents.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Versioning prompts is as important as versioning code. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Tool use can call APIs but expands attack surface if unchecked. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Human review remains responsible for regulated or customer-facing text. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."]
      }
    ),
    section(
      "privacy-svc-s5",
      "6.5 Customer Privacy — Putting the chapter together",
      ["This chapter’s through-line is simple: Customer Privacy connects principles to accountable action. Versioning prompts is as important as versioning code.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Tool use can call APIs but expands attack surface if unchecked. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits customer privacy in your field. Human review remains responsible for regulated or customer-facing text. Disclosure builds trust when customers interact with AI-assisted content."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    )
    ],
    {
      learningObjectives: ["Define customer privacy and explain why it matters in AI in Automotive Service","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Customer Privacy connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Data minimization limits what you paste into third-party tools.","Disclosure builds trust when customers interact with AI-assisted content.","Bias in training data appears in recommendations and classifications.","Data minimization limits what you paste into third-party tools.","Disclosure builds trust when customers interact with AI-assisted content."],
      realWorldRelevance: "Strong grasp of customer privacy reduces rework, supports defensible records, and speeds collaboration across AI in Automotive Service.",
    }
  ),
  chapter(
    "quality-ai-svc",
    7,
    "Quality Control",
    [
    section(
      "quality-ai-svc-s1",
      "7.1 Quality Control — Foundations and vocabulary",
      ["Quality Control is a foundation in AI in Automotive Service because evaluation sets measure quality before wide rollout. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Data minimization limits what you paste into third-party tools. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain quality control aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat quality control as a shared model for decisions. Bias in training data appears in recommendations and classifications. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Evaluation sets measure quality before wide rollout."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "quality-ai-svc-s2",
      "7.2 Quality Control — How professionals apply this in practice",
      ["Professionals rarely dispute whether quality control exists—they dispute how data minimization limits what you paste into third-party tools. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Bias in training data appears in recommendations and classifications.","When stakes rise, pause for a second opinion or formal review. Cost scales with tokens; batching and caching affect unit economics. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Prompt clarity reduces ambiguous outputs and rework. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."]
      }
    ),
    section(
      "quality-ai-svc-s3",
      "7.3 Quality Control — Workplace scenarios and documentation",
      ["Scenario: a teammate cites quality control in a meeting, but details in the packet do not match the textbook example. Bias in training data appears in recommendations and classifications. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Cost scales with tokens; batching and caching affect unit economics.","Good documentation states facts, cites the framework, and records the decision. Prompt clarity reduces ambiguous outputs and rework. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Automation should fail safe when models refuse or hallucinate. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Evaluation sets measure quality before wide rollout.","Data minimization limits what you paste into third-party tools."]
      }
    ),
    section(
      "quality-ai-svc-s4",
      "7.4 Quality Control — Common mistakes and how to avoid them",
      ["Common mistakes around quality control include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Cost scales with tokens; batching and caching affect unit economics.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Prompt clarity reduces ambiguous outputs and rework. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Automation should fail safe when models refuse or hallucinate. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Large language models predict text—they do not inherently know truth. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Evaluation sets measure quality before wide rollout."]
      }
    ),
    section(
      "quality-ai-svc-s5",
      "7.5 Quality Control — Putting the chapter together",
      ["This chapter’s through-line is simple: Quality Control connects principles to accountable action. Prompt clarity reduces ambiguous outputs and rework.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Automation should fail safe when models refuse or hallucinate. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits quality control in your field. Large language models predict text—they do not inherently know truth. Retrieval augments models with organization-specific documents."], {
        bulletPoints: ["Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."]
      }
    )
    ],
    {
      learningObjectives: ["Define quality control and explain why it matters in AI in Automotive Service","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Quality Control connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Versioning prompts is as important as versioning code.","Retrieval augments models with organization-specific documents.","Human review remains responsible for regulated or customer-facing text.","Versioning prompts is as important as versioning code.","Retrieval augments models with organization-specific documents."],
      realWorldRelevance: "Strong grasp of quality control reduces rework, supports defensible records, and speeds collaboration across AI in Automotive Service.",
    }
  ),
  chapter(
    "future-svc-ai",
    8,
    "Future of AI in Service",
    [
    section(
      "future-svc-ai-s1",
      "8.1 Future of AI in Service — Foundations and vocabulary",
      ["Future of AI in Service is a foundation in AI in Automotive Service because tool use can call APIs but expands attack surface if unchecked. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Disclosure builds trust when customers interact with AI-assisted content. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain future of ai in service aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat future of ai in service as a shared model for decisions. Data minimization limits what you paste into third-party tools. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "future-svc-ai-s2",
      "8.2 Future of AI in Service — How professionals apply this in practice",
      ["Professionals rarely dispute whether future of ai in service exists—they dispute how disclosure builds trust when customers interact with AI-assisted content. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Data minimization limits what you paste into third-party tools.","When stakes rise, pause for a second opinion or formal review. Bias in training data appears in recommendations and classifications. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Cost scales with tokens; batching and caching affect unit economics. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    ),
    section(
      "future-svc-ai-s3",
      "8.3 Future of AI in Service — Workplace scenarios and documentation",
      ["Scenario: a teammate cites future of ai in service in a meeting, but details in the packet do not match the textbook example. Data minimization limits what you paste into third-party tools. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Bias in training data appears in recommendations and classifications.","Good documentation states facts, cites the framework, and records the decision. Cost scales with tokens; batching and caching affect unit economics. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Evaluation sets measure quality before wide rollout. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    ),
    section(
      "future-svc-ai-s4",
      "8.4 Future of AI in Service — Common mistakes and how to avoid them",
      ["Common mistakes around future of ai in service include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Bias in training data appears in recommendations and classifications.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Cost scales with tokens; batching and caching affect unit economics. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Evaluation sets measure quality before wide rollout. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Prompt clarity reduces ambiguous outputs and rework. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."]
      }
    ),
    section(
      "future-svc-ai-s5",
      "8.5 Future of AI in Service — Putting the chapter together",
      ["This chapter’s through-line is simple: Future of AI in Service connects principles to accountable action. Cost scales with tokens; batching and caching affect unit economics.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Evaluation sets measure quality before wide rollout. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits future of ai in service in your field. Prompt clarity reduces ambiguous outputs and rework. Automation should fail safe when models refuse or hallucinate."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    )
    ],
    {
      learningObjectives: ["Define future of ai in service and explain why it matters in AI in Automotive Service","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Future of AI in Service connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."],
      realWorldRelevance: "Strong grasp of future of ai in service reduces rework, supports defensible records, and speeds collaboration across AI in Automotive Service.",
    }
  )
];
