import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const PROMPT_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Prompting Fundamentals",
  subtitle: "ForgEd workforce textbook — Prompting Fundamentals",
  paragraphs: [
    "This ForgEd digital textbook presents Prompting Fundamentals at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const PROMPT_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "prompt-basics",
    1,
    "Prompt Structure and Clarity",
    [
    section(
      "prompt-basics-s1",
      "1.1 Prompt Structure and Clarity — Foundations and vocabulary",
      ["Prompt Structure and Clarity is a foundation in Prompting Fundamentals because tool use can call APIs but expands attack surface if unchecked. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Disclosure builds trust when customers interact with AI-assisted content. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain prompt structure and clarity aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat prompt structure and clarity as a shared model for decisions. Prompt clarity reduces ambiguous outputs and rework. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Prompt clarity reduces ambiguous outputs and rework.","Versioning prompts is as important as versioning code.","Data minimization limits what you paste into third-party tools."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "prompt-basics-s2",
      "1.2 Prompt Structure and Clarity — How professionals apply this in practice",
      ["Professionals rarely dispute whether prompt structure and clarity exists—they dispute how disclosure builds trust when customers interact with AI-assisted content. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Prompt clarity reduces ambiguous outputs and rework.","When stakes rise, pause for a second opinion or formal review. Versioning prompts is as important as versioning code. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Data minimization limits what you paste into third-party tools. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Prompt clarity reduces ambiguous outputs and rework.","Versioning prompts is as important as versioning code.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    ),
    section(
      "prompt-basics-s3",
      "1.3 Prompt Structure and Clarity — Workplace scenarios and documentation",
      ["Scenario: a teammate cites prompt structure and clarity in a meeting, but details in the packet do not match the textbook example. Prompt clarity reduces ambiguous outputs and rework. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Versioning prompts is as important as versioning code.","Good documentation states facts, cites the framework, and records the decision. Data minimization limits what you paste into third-party tools. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Bias in training data appears in recommendations and classifications. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Prompt clarity reduces ambiguous outputs and rework.","Versioning prompts is as important as versioning code."]
      }
    ),
    section(
      "prompt-basics-s4",
      "1.4 Prompt Structure and Clarity — Common mistakes and how to avoid them",
      ["Common mistakes around prompt structure and clarity include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Versioning prompts is as important as versioning code.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Data minimization limits what you paste into third-party tools. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Bias in training data appears in recommendations and classifications. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Cost scales with tokens; batching and caching affect unit economics. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Prompt clarity reduces ambiguous outputs and rework.","Versioning prompts is as important as versioning code.","Data minimization limits what you paste into third-party tools."]
      }
    ),
    section(
      "prompt-basics-s5",
      "1.5 Prompt Structure and Clarity — Putting the chapter together",
      ["This chapter’s through-line is simple: Prompt Structure and Clarity connects principles to accountable action. Data minimization limits what you paste into third-party tools.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Bias in training data appears in recommendations and classifications. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits prompt structure and clarity in your field. Cost scales with tokens; batching and caching affect unit economics. Evaluation sets measure quality before wide rollout."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Prompt clarity reduces ambiguous outputs and rework.","Versioning prompts is as important as versioning code.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    )
    ],
    {
      learningObjectives: ["Define prompt structure and clarity and explain why it matters in Prompting Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Prompt Structure and Clarity connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."],
      realWorldRelevance: "Strong grasp of prompt structure and clarity reduces rework, supports defensible records, and speeds collaboration across Prompting Fundamentals.",
    }
  ),
  chapter(
    "context-control",
    2,
    "Context Windows and Control",
    [
    section(
      "context-control-s1",
      "2.1 Context Windows and Control — Foundations and vocabulary",
      ["Context Windows and Control is a foundation in Prompting Fundamentals because tool use can call APIs but expands attack surface if unchecked. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Disclosure builds trust when customers interact with AI-assisted content. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain context windows and control aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat context windows and control as a shared model for decisions. Data minimization limits what you paste into third-party tools. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "context-control-s2",
      "2.2 Context Windows and Control — How professionals apply this in practice",
      ["Professionals rarely dispute whether context windows and control exists—they dispute how disclosure builds trust when customers interact with AI-assisted content. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Data minimization limits what you paste into third-party tools.","When stakes rise, pause for a second opinion or formal review. Bias in training data appears in recommendations and classifications. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Cost scales with tokens; batching and caching affect unit economics. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    ),
    section(
      "context-control-s3",
      "2.3 Context Windows and Control — Workplace scenarios and documentation",
      ["Scenario: a teammate cites context windows and control in a meeting, but details in the packet do not match the textbook example. Data minimization limits what you paste into third-party tools. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Bias in training data appears in recommendations and classifications.","Good documentation states facts, cites the framework, and records the decision. Cost scales with tokens; batching and caching affect unit economics. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Evaluation sets measure quality before wide rollout. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    ),
    section(
      "context-control-s4",
      "2.4 Context Windows and Control — Common mistakes and how to avoid them",
      ["Common mistakes around context windows and control include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Bias in training data appears in recommendations and classifications.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Cost scales with tokens; batching and caching affect unit economics. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Evaluation sets measure quality before wide rollout. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Prompt clarity reduces ambiguous outputs and rework. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."]
      }
    ),
    section(
      "context-control-s5",
      "2.5 Context Windows and Control — Putting the chapter together",
      ["This chapter’s through-line is simple: Context Windows and Control connects principles to accountable action. Cost scales with tokens; batching and caching affect unit economics.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Evaluation sets measure quality before wide rollout. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits context windows and control in your field. Prompt clarity reduces ambiguous outputs and rework. Automation should fail safe when models refuse or hallucinate."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    )
    ],
    {
      learningObjectives: ["Define context windows and control and explain why it matters in Prompting Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Context Windows and Control connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Tool use can call APIs but expands attack surface if unchecked.","Human review remains responsible for regulated or customer-facing text.","Disclosure builds trust when customers interact with AI-assisted content.","Tool use can call APIs but expands attack surface if unchecked.","Human review remains responsible for regulated or customer-facing text."],
      realWorldRelevance: "Strong grasp of context windows and control reduces rework, supports defensible records, and speeds collaboration across Prompting Fundamentals.",
    }
  ),
  chapter(
    "role-prompts",
    3,
    "Role and Persona Prompts",
    [
    section(
      "role-prompts-s1",
      "3.1 Role and Persona Prompts — Foundations and vocabulary",
      ["Role and Persona Prompts is a foundation in Prompting Fundamentals because evaluation sets measure quality before wide rollout. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Prompt clarity reduces ambiguous outputs and rework. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain role and persona prompts aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat role and persona prompts as a shared model for decisions. Automation should fail safe when models refuse or hallucinate. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "role-prompts-s2",
      "3.2 Role and Persona Prompts — How professionals apply this in practice",
      ["Professionals rarely dispute whether role and persona prompts exists—they dispute how cost scales with tokens; batching and caching affect unit economics. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Evaluation sets measure quality before wide rollout.","When stakes rise, pause for a second opinion or formal review. Prompt clarity reduces ambiguous outputs and rework. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Automation should fail safe when models refuse or hallucinate. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "role-prompts-s3",
      "3.3 Role and Persona Prompts — Workplace scenarios and documentation",
      ["Scenario: a teammate cites role and persona prompts in a meeting, but details in the packet do not match the textbook example. Bias in training data appears in recommendations and classifications. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Cost scales with tokens; batching and caching affect unit economics.","Good documentation states facts, cites the framework, and records the decision. Evaluation sets measure quality before wide rollout. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Prompt clarity reduces ambiguous outputs and rework. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."]
      }
    ),
    section(
      "role-prompts-s4",
      "3.4 Role and Persona Prompts — Common mistakes and how to avoid them",
      ["Common mistakes around role and persona prompts include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Data minimization limits what you paste into third-party tools.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Bias in training data appears in recommendations and classifications. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Cost scales with tokens; batching and caching affect unit economics. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Evaluation sets measure quality before wide rollout. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    ),
    section(
      "role-prompts-s5",
      "3.5 Role and Persona Prompts — Putting the chapter together",
      ["This chapter’s through-line is simple: Role and Persona Prompts connects principles to accountable action. Versioning prompts is as important as versioning code.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Data minimization limits what you paste into third-party tools. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits role and persona prompts in your field. Bias in training data appears in recommendations and classifications. Cost scales with tokens; batching and caching affect unit economics."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Human review remains responsible for regulated or customer-facing text."]
      }
    )
    ],
    {
      learningObjectives: ["Define role and persona prompts and explain why it matters in Prompting Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Role and Persona Prompts connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."],
      realWorldRelevance: "Strong grasp of role and persona prompts reduces rework, supports defensible records, and speeds collaboration across Prompting Fundamentals.",
    }
  ),
  chapter(
    "few-shot",
    4,
    "Few-Shot Examples",
    [
    section(
      "few-shot-s1",
      "4.1 Few-Shot Examples — Foundations and vocabulary",
      ["Few-Shot Examples is a foundation in Prompting Fundamentals because tool use can call APIs but expands attack surface if unchecked. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Disclosure builds trust when customers interact with AI-assisted content. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain few-shot examples aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat few-shot examples as a shared model for decisions. Data minimization limits what you paste into third-party tools. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "few-shot-s2",
      "4.2 Few-Shot Examples — How professionals apply this in practice",
      ["Professionals rarely dispute whether few-shot examples exists—they dispute how human review remains responsible for regulated or customer-facing text. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Tool use can call APIs but expands attack surface if unchecked.","When stakes rise, pause for a second opinion or formal review. Disclosure builds trust when customers interact with AI-assisted content. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Data minimization limits what you paste into third-party tools. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    ),
    section(
      "few-shot-s3",
      "4.3 Few-Shot Examples — Workplace scenarios and documentation",
      ["Scenario: a teammate cites few-shot examples in a meeting, but details in the packet do not match the textbook example. Versioning prompts is as important as versioning code. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Human review remains responsible for regulated or customer-facing text.","Good documentation states facts, cites the framework, and records the decision. Tool use can call APIs but expands attack surface if unchecked. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Disclosure builds trust when customers interact with AI-assisted content. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    ),
    section(
      "few-shot-s4",
      "4.4 Few-Shot Examples — Common mistakes and how to avoid them",
      ["Common mistakes around few-shot examples include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Retrieval augments models with organization-specific documents.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Versioning prompts is as important as versioning code. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Human review remains responsible for regulated or customer-facing text. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Tool use can call APIs but expands attack surface if unchecked. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."]
      }
    ),
    section(
      "few-shot-s5",
      "4.5 Few-Shot Examples — Putting the chapter together",
      ["This chapter’s through-line is simple: Few-Shot Examples connects principles to accountable action. Large language models predict text—they do not inherently know truth.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Retrieval augments models with organization-specific documents. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits few-shot examples in your field. Versioning prompts is as important as versioning code. Human review remains responsible for regulated or customer-facing text."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    )
    ],
    {
      learningObjectives: ["Define few-shot examples and explain why it matters in Prompting Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Few-Shot Examples connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Tool use can call APIs but expands attack surface if unchecked.","Human review remains responsible for regulated or customer-facing text.","Disclosure builds trust when customers interact with AI-assisted content.","Tool use can call APIs but expands attack surface if unchecked.","Human review remains responsible for regulated or customer-facing text."],
      realWorldRelevance: "Strong grasp of few-shot examples reduces rework, supports defensible records, and speeds collaboration across Prompting Fundamentals.",
    }
  ),
  chapter(
    "chain-prompts",
    5,
    "Chained Instructions",
    [
    section(
      "chain-prompts-s1",
      "5.1 Chained Instructions — Foundations and vocabulary",
      ["Chained Instructions is a foundation in Prompting Fundamentals because human review remains responsible for regulated or customer-facing text. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Tool use can call APIs but expands attack surface if unchecked. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain chained instructions aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat chained instructions as a shared model for decisions. Disclosure builds trust when customers interact with AI-assisted content. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "chain-prompts-s2",
      "5.2 Chained Instructions — How professionals apply this in practice",
      ["Professionals rarely dispute whether chained instructions exists—they dispute how versioning prompts is as important as versioning code. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Human review remains responsible for regulated or customer-facing text.","When stakes rise, pause for a second opinion or formal review. Tool use can call APIs but expands attack surface if unchecked. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Disclosure builds trust when customers interact with AI-assisted content. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    ),
    section(
      "chain-prompts-s3",
      "5.3 Chained Instructions — Workplace scenarios and documentation",
      ["Scenario: a teammate cites chained instructions in a meeting, but details in the packet do not match the textbook example. Retrieval augments models with organization-specific documents. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Versioning prompts is as important as versioning code.","Good documentation states facts, cites the framework, and records the decision. Human review remains responsible for regulated or customer-facing text. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Tool use can call APIs but expands attack surface if unchecked. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools."]
      }
    ),
    section(
      "chain-prompts-s4",
      "5.4 Chained Instructions — Common mistakes and how to avoid them",
      ["Common mistakes around chained instructions include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Large language models predict text—they do not inherently know truth.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Retrieval augments models with organization-specific documents. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Versioning prompts is as important as versioning code. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Human review remains responsible for regulated or customer-facing text. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."]
      }
    ),
    section(
      "chain-prompts-s5",
      "5.5 Chained Instructions — Putting the chapter together",
      ["This chapter’s through-line is simple: Chained Instructions connects principles to accountable action. Automation should fail safe when models refuse or hallucinate.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Large language models predict text—they do not inherently know truth. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits chained instructions in your field. Retrieval augments models with organization-specific documents. Versioning prompts is as important as versioning code."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    )
    ],
    {
      learningObjectives: ["Define chained instructions and explain why it matters in Prompting Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Chained Instructions connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Retrieval augments models with organization-specific documents.","Large language models predict text—they do not inherently know truth.","Versioning prompts is as important as versioning code.","Retrieval augments models with organization-specific documents.","Large language models predict text—they do not inherently know truth."],
      realWorldRelevance: "Strong grasp of chained instructions reduces rework, supports defensible records, and speeds collaboration across Prompting Fundamentals.",
    }
  ),
  chapter(
    "evaluation",
    6,
    "Evaluating Model Outputs",
    [
    section(
      "evaluation-s1",
      "6.1 Evaluating Model Outputs — Foundations and vocabulary",
      ["Evaluating Model Outputs is a foundation in Prompting Fundamentals because retrieval augments models with organization-specific documents. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Prompt clarity reduces ambiguous outputs and rework. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain evaluating model outputs aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat evaluating model outputs as a shared model for decisions. Automation should fail safe when models refuse or hallucinate. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "evaluation-s2",
      "6.2 Evaluating Model Outputs — How professionals apply this in practice",
      ["Professionals rarely dispute whether evaluating model outputs exists—they dispute how prompt clarity reduces ambiguous outputs and rework. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Automation should fail safe when models refuse or hallucinate.","When stakes rise, pause for a second opinion or formal review. Large language models predict text—they do not inherently know truth. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Retrieval augments models with organization-specific documents. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    ),
    section(
      "evaluation-s3",
      "6.3 Evaluating Model Outputs — Workplace scenarios and documentation",
      ["Scenario: a teammate cites evaluating model outputs in a meeting, but details in the packet do not match the textbook example. Automation should fail safe when models refuse or hallucinate. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Large language models predict text—they do not inherently know truth.","Good documentation states facts, cites the framework, and records the decision. Retrieval augments models with organization-specific documents. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Prompt clarity reduces ambiguous outputs and rework. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Versioning prompts is as important as versioning code."]
      }
    ),
    section(
      "evaluation-s4",
      "6.4 Evaluating Model Outputs — Common mistakes and how to avoid them",
      ["Common mistakes around evaluating model outputs include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Large language models predict text—they do not inherently know truth.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Retrieval augments models with organization-specific documents. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Prompt clarity reduces ambiguous outputs and rework. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Automation should fail safe when models refuse or hallucinate. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "evaluation-s5",
      "6.5 Evaluating Model Outputs — Putting the chapter together",
      ["This chapter’s through-line is simple: Evaluating Model Outputs connects principles to accountable action. Retrieval augments models with organization-specific documents.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Prompt clarity reduces ambiguous outputs and rework. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits evaluating model outputs in your field. Automation should fail safe when models refuse or hallucinate. Large language models predict text—they do not inherently know truth."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    )
    ],
    {
      learningObjectives: ["Define evaluating model outputs and explain why it matters in Prompting Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Evaluating Model Outputs connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."],
      realWorldRelevance: "Strong grasp of evaluating model outputs reduces rework, supports defensible records, and speeds collaboration across Prompting Fundamentals.",
    }
  ),
  chapter(
    "safety-prompts",
    7,
    "Safety and Refusal Handling",
    [
    section(
      "safety-prompts-s1",
      "7.1 Safety and Refusal Handling — Foundations and vocabulary",
      ["Safety and Refusal Handling is a foundation in Prompting Fundamentals because versioning prompts is as important as versioning code. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Human review remains responsible for regulated or customer-facing text. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain safety and refusal handling aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat safety and refusal handling as a shared model for decisions. Tool use can call APIs but expands attack surface if unchecked. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "safety-prompts-s2",
      "7.2 Safety and Refusal Handling — How professionals apply this in practice",
      ["Professionals rarely dispute whether safety and refusal handling exists—they dispute how human review remains responsible for regulated or customer-facing text. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Tool use can call APIs but expands attack surface if unchecked.","When stakes rise, pause for a second opinion or formal review. Disclosure builds trust when customers interact with AI-assisted content. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Data minimization limits what you paste into third-party tools. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "safety-prompts-s3",
      "7.3 Safety and Refusal Handling — Workplace scenarios and documentation",
      ["Scenario: a teammate cites safety and refusal handling in a meeting, but details in the packet do not match the textbook example. Tool use can call APIs but expands attack surface if unchecked. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Disclosure builds trust when customers interact with AI-assisted content.","Good documentation states facts, cites the framework, and records the decision. Data minimization limits what you paste into third-party tools. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Bias in training data appears in recommendations and classifications. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    ),
    section(
      "safety-prompts-s4",
      "7.4 Safety and Refusal Handling — Common mistakes and how to avoid them",
      ["Common mistakes around safety and refusal handling include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Disclosure builds trust when customers interact with AI-assisted content.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Data minimization limits what you paste into third-party tools. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Bias in training data appears in recommendations and classifications. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Cost scales with tokens; batching and caching affect unit economics. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    ),
    section(
      "safety-prompts-s5",
      "7.5 Safety and Refusal Handling — Putting the chapter together",
      ["This chapter’s through-line is simple: Safety and Refusal Handling connects principles to accountable action. Data minimization limits what you paste into third-party tools.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Bias in training data appears in recommendations and classifications. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits safety and refusal handling in your field. Cost scales with tokens; batching and caching affect unit economics. Evaluation sets measure quality before wide rollout."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    )
    ],
    {
      learningObjectives: ["Define safety and refusal handling and explain why it matters in Prompting Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Safety and Refusal Handling connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."],
      realWorldRelevance: "Strong grasp of safety and refusal handling reduces rework, supports defensible records, and speeds collaboration across Prompting Fundamentals.",
    }
  ),
  chapter(
    "prompt-workflows",
    8,
    "Prompts in Daily Work",
    [
    section(
      "prompt-workflows-s1",
      "8.1 Prompts in Daily Work — Foundations and vocabulary",
      ["Prompts in Daily Work is a foundation in Prompting Fundamentals because tool use can call APIs but expands attack surface if unchecked. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Disclosure builds trust when customers interact with AI-assisted content. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain prompts in daily work aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat prompts in daily work as a shared model for decisions. Prompt clarity reduces ambiguous outputs and rework. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Automation should fail safe when models refuse or hallucinate."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "prompt-workflows-s2",
      "8.2 Prompts in Daily Work — How professionals apply this in practice",
      ["Professionals rarely dispute whether prompts in daily work exists—they dispute how human review remains responsible for regulated or customer-facing text. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Tool use can call APIs but expands attack surface if unchecked.","When stakes rise, pause for a second opinion or formal review. Disclosure builds trust when customers interact with AI-assisted content. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Prompt clarity reduces ambiguous outputs and rework. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."]
      }
    ),
    section(
      "prompt-workflows-s3",
      "8.3 Prompts in Daily Work — Workplace scenarios and documentation",
      ["Scenario: a teammate cites prompts in daily work in a meeting, but details in the packet do not match the textbook example. Retrieval augments models with organization-specific documents. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Human review remains responsible for regulated or customer-facing text.","Good documentation states facts, cites the framework, and records the decision. Tool use can call APIs but expands attack surface if unchecked. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Disclosure builds trust when customers interact with AI-assisted content. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Versioning prompts is as important as versioning code.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    ),
    section(
      "prompt-workflows-s4",
      "8.4 Prompts in Daily Work — Common mistakes and how to avoid them",
      ["Common mistakes around prompts in daily work include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Large language models predict text—they do not inherently know truth.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Retrieval augments models with organization-specific documents. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Human review remains responsible for regulated or customer-facing text. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Tool use can call APIs but expands attack surface if unchecked. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Automation should fail safe when models refuse or hallucinate."]
      }
    ),
    section(
      "prompt-workflows-s5",
      "8.5 Prompts in Daily Work — Putting the chapter together",
      ["This chapter’s through-line is simple: Prompts in Daily Work connects principles to accountable action. Automation should fail safe when models refuse or hallucinate.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Large language models predict text—they do not inherently know truth. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits prompts in daily work in your field. Retrieval augments models with organization-specific documents. Human review remains responsible for regulated or customer-facing text."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."]
      }
    )
    ],
    {
      learningObjectives: ["Define prompts in daily work and explain why it matters in Prompting Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Prompts in Daily Work connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Versioning prompts is as important as versioning code.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."],
      realWorldRelevance: "Strong grasp of prompts in daily work reduces rework, supports defensible records, and speeds collaboration across Prompting Fundamentals.",
    }
  )
];
