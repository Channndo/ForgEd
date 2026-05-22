import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const AIRES_TEXTBOOK_INTRO: TextbookIntro = {
  title: "AI Research Skills",
  subtitle: "ForgEd workforce textbook — AI Research Skills",
  paragraphs: [
    "This ForgEd digital textbook presents AI Research Skills at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const AIRES_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "research-plan",
    1,
    "Planning a Research Sprint",
    [
    section(
      "research-plan-s1",
      "1.1 Planning a Research Sprint — Foundations and vocabulary",
      ["Planning a Research Sprint is a foundation in AI Research Skills because retrieval augments models with organization-specific documents. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Versioning prompts is as important as versioning code. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain planning a research sprint aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat planning a research sprint as a shared model for decisions. Human review remains responsible for regulated or customer-facing text. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "research-plan-s2",
      "1.2 Planning a Research Sprint — How professionals apply this in practice",
      ["Professionals rarely dispute whether planning a research sprint exists—they dispute how versioning prompts is as important as versioning code. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Human review remains responsible for regulated or customer-facing text.","When stakes rise, pause for a second opinion or formal review. Tool use can call APIs but expands attack surface if unchecked. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Disclosure builds trust when customers interact with AI-assisted content. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."]
      }
    ),
    section(
      "research-plan-s3",
      "1.3 Planning a Research Sprint — Workplace scenarios and documentation",
      ["Scenario: a teammate cites planning a research sprint in a meeting, but details in the packet do not match the textbook example. Human review remains responsible for regulated or customer-facing text. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Tool use can call APIs but expands attack surface if unchecked.","Good documentation states facts, cites the framework, and records the decision. Disclosure builds trust when customers interact with AI-assisted content. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Data minimization limits what you paste into third-party tools. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools."]
      }
    ),
    section(
      "research-plan-s4",
      "1.4 Planning a Research Sprint — Common mistakes and how to avoid them",
      ["Common mistakes around planning a research sprint include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Tool use can call APIs but expands attack surface if unchecked.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Disclosure builds trust when customers interact with AI-assisted content. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Data minimization limits what you paste into third-party tools. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Bias in training data appears in recommendations and classifications. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    ),
    section(
      "research-plan-s5",
      "1.5 Planning a Research Sprint — Putting the chapter together",
      ["This chapter’s through-line is simple: Planning a Research Sprint connects principles to accountable action. Disclosure builds trust when customers interact with AI-assisted content.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Data minimization limits what you paste into third-party tools. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits planning a research sprint in your field. Bias in training data appears in recommendations and classifications. Cost scales with tokens; batching and caching affect unit economics."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."]
      }
    )
    ],
    {
      learningObjectives: ["Define planning a research sprint and explain why it matters in AI Research Skills","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Planning a Research Sprint connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."],
      realWorldRelevance: "Strong grasp of planning a research sprint reduces rework, supports defensible records, and speeds collaboration across AI Research Skills.",
    }
  ),
  chapter(
    "source-quality",
    2,
    "Source Quality Criteria",
    [
    section(
      "source-quality-s1",
      "2.1 Source Quality Criteria — Foundations and vocabulary",
      ["Source Quality Criteria is a foundation in AI Research Skills because human review remains responsible for regulated or customer-facing text. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Tool use can call APIs but expands attack surface if unchecked. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain source quality criteria aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat source quality criteria as a shared model for decisions. Disclosure builds trust when customers interact with AI-assisted content. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "source-quality-s2",
      "2.2 Source Quality Criteria — How professionals apply this in practice",
      ["Professionals rarely dispute whether source quality criteria exists—they dispute how versioning prompts is as important as versioning code. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Human review remains responsible for regulated or customer-facing text.","When stakes rise, pause for a second opinion or formal review. Tool use can call APIs but expands attack surface if unchecked. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Disclosure builds trust when customers interact with AI-assisted content. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    ),
    section(
      "source-quality-s3",
      "2.3 Source Quality Criteria — Workplace scenarios and documentation",
      ["Scenario: a teammate cites source quality criteria in a meeting, but details in the packet do not match the textbook example. Retrieval augments models with organization-specific documents. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Versioning prompts is as important as versioning code.","Good documentation states facts, cites the framework, and records the decision. Human review remains responsible for regulated or customer-facing text. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Tool use can call APIs but expands attack surface if unchecked. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Evaluation sets measure quality before wide rollout."]
      }
    ),
    section(
      "source-quality-s4",
      "2.4 Source Quality Criteria — Common mistakes and how to avoid them",
      ["Common mistakes around source quality criteria include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Large language models predict text—they do not inherently know truth.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Retrieval augments models with organization-specific documents. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Versioning prompts is as important as versioning code. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Human review remains responsible for regulated or customer-facing text. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."]
      }
    ),
    section(
      "source-quality-s5",
      "2.5 Source Quality Criteria — Putting the chapter together",
      ["This chapter’s through-line is simple: Source Quality Criteria connects principles to accountable action. Automation should fail safe when models refuse or hallucinate.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Large language models predict text—they do not inherently know truth. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits source quality criteria in your field. Retrieval augments models with organization-specific documents. Versioning prompts is as important as versioning code."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    )
    ],
    {
      learningObjectives: ["Define source quality criteria and explain why it matters in AI Research Skills","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Source Quality Criteria connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Retrieval augments models with organization-specific documents.","Large language models predict text—they do not inherently know truth.","Versioning prompts is as important as versioning code.","Retrieval augments models with organization-specific documents.","Large language models predict text—they do not inherently know truth."],
      realWorldRelevance: "Strong grasp of source quality criteria reduces rework, supports defensible records, and speeds collaboration across AI Research Skills.",
    }
  ),
  chapter(
    "synthesis",
    3,
    "Synthesizing Findings",
    [
    section(
      "synthesis-s1",
      "3.1 Synthesizing Findings — Foundations and vocabulary",
      ["Synthesizing Findings is a foundation in AI Research Skills because retrieval augments models with organization-specific documents. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Versioning prompts is as important as versioning code. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain synthesizing findings aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat synthesizing findings as a shared model for decisions. Human review remains responsible for regulated or customer-facing text. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "synthesis-s2",
      "3.2 Synthesizing Findings — How professionals apply this in practice",
      ["Professionals rarely dispute whether synthesizing findings exists—they dispute how large language models predict text—they do not inherently know truth. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Retrieval augments models with organization-specific documents.","When stakes rise, pause for a second opinion or formal review. Versioning prompts is as important as versioning code. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Human review remains responsible for regulated or customer-facing text. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    ),
    section(
      "synthesis-s3",
      "3.3 Synthesizing Findings — Workplace scenarios and documentation",
      ["Scenario: a teammate cites synthesizing findings in a meeting, but details in the packet do not match the textbook example. Automation should fail safe when models refuse or hallucinate. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Large language models predict text—they do not inherently know truth.","Good documentation states facts, cites the framework, and records the decision. Retrieval augments models with organization-specific documents. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Versioning prompts is as important as versioning code. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    ),
    section(
      "synthesis-s4",
      "3.4 Synthesizing Findings — Common mistakes and how to avoid them",
      ["Common mistakes around synthesizing findings include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Prompt clarity reduces ambiguous outputs and rework.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Automation should fail safe when models refuse or hallucinate. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Large language models predict text—they do not inherently know truth. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Retrieval augments models with organization-specific documents. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "synthesis-s5",
      "3.5 Synthesizing Findings — Putting the chapter together",
      ["This chapter’s through-line is simple: Synthesizing Findings connects principles to accountable action. Evaluation sets measure quality before wide rollout.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Prompt clarity reduces ambiguous outputs and rework. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits synthesizing findings in your field. Automation should fail safe when models refuse or hallucinate. Large language models predict text—they do not inherently know truth."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    )
    ],
    {
      learningObjectives: ["Define synthesizing findings and explain why it matters in AI Research Skills","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Synthesizing Findings connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Automation should fail safe when models refuse or hallucinate.","Prompt clarity reduces ambiguous outputs and rework.","Large language models predict text—they do not inherently know truth.","Automation should fail safe when models refuse or hallucinate.","Prompt clarity reduces ambiguous outputs and rework."],
      realWorldRelevance: "Strong grasp of synthesizing findings reduces rework, supports defensible records, and speeds collaboration across AI Research Skills.",
    }
  ),
  chapter(
    "fact-check",
    4,
    "Fact-Checking Outputs",
    [
    section(
      "fact-check-s1",
      "4.1 Fact-Checking Outputs — Foundations and vocabulary",
      ["Fact-Checking Outputs is a foundation in AI Research Skills because data minimization limits what you paste into third-party tools. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Bias in training data appears in recommendations and classifications. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain fact-checking outputs aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat fact-checking outputs as a shared model for decisions. Cost scales with tokens; batching and caching affect unit economics. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "fact-check-s2",
      "4.2 Fact-Checking Outputs — How professionals apply this in practice",
      ["Professionals rarely dispute whether fact-checking outputs exists—they dispute how prompt clarity reduces ambiguous outputs and rework. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Data minimization limits what you paste into third-party tools.","When stakes rise, pause for a second opinion or formal review. Bias in training data appears in recommendations and classifications. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Cost scales with tokens; batching and caching affect unit economics. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    ),
    section(
      "fact-check-s3",
      "4.3 Fact-Checking Outputs — Workplace scenarios and documentation",
      ["Scenario: a teammate cites fact-checking outputs in a meeting, but details in the packet do not match the textbook example. Disclosure builds trust when customers interact with AI-assisted content. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Prompt clarity reduces ambiguous outputs and rework.","Good documentation states facts, cites the framework, and records the decision. Data minimization limits what you paste into third-party tools. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Bias in training data appears in recommendations and classifications. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Prompt clarity reduces ambiguous outputs and rework."]
      }
    ),
    section(
      "fact-check-s4",
      "4.4 Fact-Checking Outputs — Common mistakes and how to avoid them",
      ["Common mistakes around fact-checking outputs include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Tool use can call APIs but expands attack surface if unchecked.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Disclosure builds trust when customers interact with AI-assisted content. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Prompt clarity reduces ambiguous outputs and rework. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Data minimization limits what you paste into third-party tools. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."]
      }
    ),
    section(
      "fact-check-s5",
      "4.5 Fact-Checking Outputs — Putting the chapter together",
      ["This chapter’s through-line is simple: Fact-Checking Outputs connects principles to accountable action. Human review remains responsible for regulated or customer-facing text.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Tool use can call APIs but expands attack surface if unchecked. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits fact-checking outputs in your field. Disclosure builds trust when customers interact with AI-assisted content. Prompt clarity reduces ambiguous outputs and rework."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    )
    ],
    {
      learningObjectives: ["Define fact-checking outputs and explain why it matters in AI Research Skills","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Fact-Checking Outputs connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Retrieval augments models with organization-specific documents.","Large language models predict text—they do not inherently know truth.","Versioning prompts is as important as versioning code.","Retrieval augments models with organization-specific documents.","Large language models predict text—they do not inherently know truth."],
      realWorldRelevance: "Strong grasp of fact-checking outputs reduces rework, supports defensible records, and speeds collaboration across AI Research Skills.",
    }
  ),
  chapter(
    "citations",
    5,
    "Citations and Attribution",
    [
    section(
      "citations-s1",
      "5.1 Citations and Attribution — Foundations and vocabulary",
      ["Citations and Attribution is a foundation in AI Research Skills because large language models predict text—they do not inherently know truth. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Retrieval augments models with organization-specific documents. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain citations and attribution aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat citations and attribution as a shared model for decisions. Versioning prompts is as important as versioning code. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "citations-s2",
      "5.2 Citations and Attribution — How professionals apply this in practice",
      ["Professionals rarely dispute whether citations and attribution exists—they dispute how retrieval augments models with organization-specific documents. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Versioning prompts is as important as versioning code.","When stakes rise, pause for a second opinion or formal review. Human review remains responsible for regulated or customer-facing text. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Tool use can call APIs but expands attack surface if unchecked. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    ),
    section(
      "citations-s3",
      "5.3 Citations and Attribution — Workplace scenarios and documentation",
      ["Scenario: a teammate cites citations and attribution in a meeting, but details in the packet do not match the textbook example. Versioning prompts is as important as versioning code. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Human review remains responsible for regulated or customer-facing text.","Good documentation states facts, cites the framework, and records the decision. Tool use can call APIs but expands attack surface if unchecked. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Disclosure builds trust when customers interact with AI-assisted content. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    ),
    section(
      "citations-s4",
      "5.4 Citations and Attribution — Common mistakes and how to avoid them",
      ["Common mistakes around citations and attribution include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Human review remains responsible for regulated or customer-facing text.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Tool use can call APIs but expands attack surface if unchecked. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Disclosure builds trust when customers interact with AI-assisted content. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Data minimization limits what you paste into third-party tools. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."]
      }
    ),
    section(
      "citations-s5",
      "5.5 Citations and Attribution — Putting the chapter together",
      ["This chapter’s through-line is simple: Citations and Attribution connects principles to accountable action. Tool use can call APIs but expands attack surface if unchecked.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Disclosure builds trust when customers interact with AI-assisted content. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits citations and attribution in your field. Data minimization limits what you paste into third-party tools. Bias in training data appears in recommendations and classifications."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    )
    ],
    {
      learningObjectives: ["Define citations and attribution and explain why it matters in AI Research Skills","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Citations and Attribution connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Cost scales with tokens; batching and caching affect unit economics.","Bias in training data appears in recommendations and classifications.","Evaluation sets measure quality before wide rollout.","Cost scales with tokens; batching and caching affect unit economics.","Bias in training data appears in recommendations and classifications."],
      realWorldRelevance: "Strong grasp of citations and attribution reduces rework, supports defensible records, and speeds collaboration across AI Research Skills.",
    }
  ),
  chapter(
    "comparisons",
    6,
    "Comparative Analysis",
    [
    section(
      "comparisons-s1",
      "6.1 Comparative Analysis — Foundations and vocabulary",
      ["Comparative Analysis is a foundation in AI Research Skills because automation should fail safe when models refuse or hallucinate. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Large language models predict text—they do not inherently know truth. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain comparative analysis aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat comparative analysis as a shared model for decisions. Retrieval augments models with organization-specific documents. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "comparisons-s2",
      "6.2 Comparative Analysis — How professionals apply this in practice",
      ["Professionals rarely dispute whether comparative analysis exists—they dispute how large language models predict text—they do not inherently know truth. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Retrieval augments models with organization-specific documents.","When stakes rise, pause for a second opinion or formal review. Versioning prompts is as important as versioning code. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Human review remains responsible for regulated or customer-facing text. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    ),
    section(
      "comparisons-s3",
      "6.3 Comparative Analysis — Workplace scenarios and documentation",
      ["Scenario: a teammate cites comparative analysis in a meeting, but details in the packet do not match the textbook example. Retrieval augments models with organization-specific documents. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Versioning prompts is as important as versioning code.","Good documentation states facts, cites the framework, and records the decision. Human review remains responsible for regulated or customer-facing text. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Tool use can call APIs but expands attack surface if unchecked. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    ),
    section(
      "comparisons-s4",
      "6.4 Comparative Analysis — Common mistakes and how to avoid them",
      ["Common mistakes around comparative analysis include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Versioning prompts is as important as versioning code.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Human review remains responsible for regulated or customer-facing text. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Tool use can call APIs but expands attack surface if unchecked. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Disclosure builds trust when customers interact with AI-assisted content. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "comparisons-s5",
      "6.5 Comparative Analysis — Putting the chapter together",
      ["This chapter’s through-line is simple: Comparative Analysis connects principles to accountable action. Human review remains responsible for regulated or customer-facing text.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Tool use can call APIs but expands attack surface if unchecked. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits comparative analysis in your field. Disclosure builds trust when customers interact with AI-assisted content. Data minimization limits what you paste into third-party tools."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    )
    ],
    {
      learningObjectives: ["Define comparative analysis and explain why it matters in AI Research Skills","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Comparative Analysis connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Automation should fail safe when models refuse or hallucinate.","Prompt clarity reduces ambiguous outputs and rework.","Large language models predict text—they do not inherently know truth.","Automation should fail safe when models refuse or hallucinate.","Prompt clarity reduces ambiguous outputs and rework."],
      realWorldRelevance: "Strong grasp of comparative analysis reduces rework, supports defensible records, and speeds collaboration across AI Research Skills.",
    }
  ),
  chapter(
    "bias-research",
    7,
    "Bias in Research Assistants",
    [
    section(
      "bias-research-s1",
      "7.1 Bias in Research Assistants — Foundations and vocabulary",
      ["Bias in Research Assistants is a foundation in AI Research Skills because cost scales with tokens; batching and caching affect unit economics. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Evaluation sets measure quality before wide rollout. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain bias in research assistants aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat bias in research assistants as a shared model for decisions. Prompt clarity reduces ambiguous outputs and rework. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "bias-research-s2",
      "7.2 Bias in Research Assistants — How professionals apply this in practice",
      ["Professionals rarely dispute whether bias in research assistants exists—they dispute how evaluation sets measure quality before wide rollout. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Prompt clarity reduces ambiguous outputs and rework.","When stakes rise, pause for a second opinion or formal review. Automation should fail safe when models refuse or hallucinate. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Large language models predict text—they do not inherently know truth. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "bias-research-s3",
      "7.3 Bias in Research Assistants — Workplace scenarios and documentation",
      ["Scenario: a teammate cites bias in research assistants in a meeting, but details in the packet do not match the textbook example. Prompt clarity reduces ambiguous outputs and rework. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Automation should fail safe when models refuse or hallucinate.","Good documentation states facts, cites the framework, and records the decision. Large language models predict text—they do not inherently know truth. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Retrieval augments models with organization-specific documents. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."]
      }
    ),
    section(
      "bias-research-s4",
      "7.4 Bias in Research Assistants — Common mistakes and how to avoid them",
      ["Common mistakes around bias in research assistants include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Automation should fail safe when models refuse or hallucinate.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Large language models predict text—they do not inherently know truth. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Retrieval augments models with organization-specific documents. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Versioning prompts is as important as versioning code. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    ),
    section(
      "bias-research-s5",
      "7.5 Bias in Research Assistants — Putting the chapter together",
      ["This chapter’s through-line is simple: Bias in Research Assistants connects principles to accountable action. Large language models predict text—they do not inherently know truth.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Retrieval augments models with organization-specific documents. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits bias in research assistants in your field. Versioning prompts is as important as versioning code. Human review remains responsible for regulated or customer-facing text."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    )
    ],
    {
      learningObjectives: ["Define bias in research assistants and explain why it matters in AI Research Skills","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Bias in Research Assistants connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Large language models predict text—they do not inherently know truth.","Automation should fail safe when models refuse or hallucinate.","Retrieval augments models with organization-specific documents.","Large language models predict text—they do not inherently know truth.","Automation should fail safe when models refuse or hallucinate."],
      realWorldRelevance: "Strong grasp of bias in research assistants reduces rework, supports defensible records, and speeds collaboration across AI Research Skills.",
    }
  ),
  chapter(
    "deliverables",
    8,
    "Research Deliverables",
    [
    section(
      "deliverables-s1",
      "8.1 Research Deliverables — Foundations and vocabulary",
      ["Research Deliverables is a foundation in AI Research Skills because bias in training data appears in recommendations and classifications. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Cost scales with tokens; batching and caching affect unit economics. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain research deliverables aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat research deliverables as a shared model for decisions. Evaluation sets measure quality before wide rollout. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "deliverables-s2",
      "8.2 Research Deliverables — How professionals apply this in practice",
      ["Professionals rarely dispute whether research deliverables exists—they dispute how data minimization limits what you paste into third-party tools. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Bias in training data appears in recommendations and classifications.","When stakes rise, pause for a second opinion or formal review. Cost scales with tokens; batching and caching affect unit economics. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Evaluation sets measure quality before wide rollout. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    ),
    section(
      "deliverables-s3",
      "8.3 Research Deliverables — Workplace scenarios and documentation",
      ["Scenario: a teammate cites research deliverables in a meeting, but details in the packet do not match the textbook example. Disclosure builds trust when customers interact with AI-assisted content. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Data minimization limits what you paste into third-party tools.","Good documentation states facts, cites the framework, and records the decision. Bias in training data appears in recommendations and classifications. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Cost scales with tokens; batching and caching affect unit economics. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    ),
    section(
      "deliverables-s4",
      "8.4 Research Deliverables — Common mistakes and how to avoid them",
      ["Common mistakes around research deliverables include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Tool use can call APIs but expands attack surface if unchecked.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Disclosure builds trust when customers interact with AI-assisted content. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Data minimization limits what you paste into third-party tools. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Bias in training data appears in recommendations and classifications. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "deliverables-s5",
      "8.5 Research Deliverables — Putting the chapter together",
      ["This chapter’s through-line is simple: Research Deliverables connects principles to accountable action. Human review remains responsible for regulated or customer-facing text.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Tool use can call APIs but expands attack surface if unchecked. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits research deliverables in your field. Disclosure builds trust when customers interact with AI-assisted content. Data minimization limits what you paste into third-party tools."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    )
    ],
    {
      learningObjectives: ["Define research deliverables and explain why it matters in AI Research Skills","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Research Deliverables connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."],
      realWorldRelevance: "Strong grasp of research deliverables reduces rework, supports defensible records, and speeds collaboration across AI Research Skills.",
    }
  )
];
