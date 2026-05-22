import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const AIENT_TEXTBOOK_INTRO: TextbookIntro = {
  title: "AI For Entrepreneurs",
  subtitle: "ForgEd workforce textbook — AI For Entrepreneurs",
  paragraphs: [
    "This ForgEd digital textbook presents AI For Entrepreneurs at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const AIENT_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "ai-market-research",
    1,
    "AI Market Research",
    [
    section(
      "ai-market-research-s1",
      "1.1 AI Market Research — Foundations and vocabulary",
      ["AI Market Research is a foundation in AI For Entrepreneurs because bias in training data appears in recommendations and classifications. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Cost scales with tokens; batching and caching affect unit economics. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ai market research aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ai market research as a shared model for decisions. Evaluation sets measure quality before wide rollout. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "ai-market-research-s2",
      "1.2 AI Market Research — How professionals apply this in practice",
      ["Professionals rarely dispute whether ai market research exists—they dispute how cost scales with tokens; batching and caching affect unit economics. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Evaluation sets measure quality before wide rollout.","When stakes rise, pause for a second opinion or formal review. Prompt clarity reduces ambiguous outputs and rework. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Automation should fail safe when models refuse or hallucinate. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools."]
      }
    ),
    section(
      "ai-market-research-s3",
      "1.3 AI Market Research — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ai market research in a meeting, but details in the packet do not match the textbook example. Evaluation sets measure quality before wide rollout. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Prompt clarity reduces ambiguous outputs and rework.","Good documentation states facts, cites the framework, and records the decision. Automation should fail safe when models refuse or hallucinate. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Large language models predict text—they do not inherently know truth. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."]
      }
    ),
    section(
      "ai-market-research-s4",
      "1.4 AI Market Research — Common mistakes and how to avoid them",
      ["Common mistakes around ai market research include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Prompt clarity reduces ambiguous outputs and rework.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Automation should fail safe when models refuse or hallucinate. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Large language models predict text—they do not inherently know truth. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Retrieval augments models with organization-specific documents. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    ),
    section(
      "ai-market-research-s5",
      "1.5 AI Market Research — Putting the chapter together",
      ["This chapter’s through-line is simple: AI Market Research connects principles to accountable action. Automation should fail safe when models refuse or hallucinate.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Large language models predict text—they do not inherently know truth. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ai market research in your field. Retrieval augments models with organization-specific documents. Versioning prompts is as important as versioning code."], {
        bulletPoints: ["Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools."]
      }
    )
    ],
    {
      learningObjectives: ["Define ai market research and explain why it matters in AI For Entrepreneurs","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "AI Market Research connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Human review remains responsible for regulated or customer-facing text.","Versioning prompts is as important as versioning code.","Tool use can call APIs but expands attack surface if unchecked.","Human review remains responsible for regulated or customer-facing text.","Versioning prompts is as important as versioning code."],
      realWorldRelevance: "Strong grasp of ai market research reduces rework, supports defensible records, and speeds collaboration across AI For Entrepreneurs.",
    }
  ),
  chapter(
    "ai-copy",
    2,
    "AI Copy and Content",
    [
    section(
      "ai-copy-s1",
      "2.1 AI Copy and Content — Foundations and vocabulary",
      ["AI Copy and Content is a foundation in AI For Entrepreneurs because tool use can call APIs but expands attack surface if unchecked. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Disclosure builds trust when customers interact with AI-assisted content. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ai copy and content aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ai copy and content as a shared model for decisions. Data minimization limits what you paste into third-party tools. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "ai-copy-s2",
      "2.2 AI Copy and Content — How professionals apply this in practice",
      ["Professionals rarely dispute whether ai copy and content exists—they dispute how disclosure builds trust when customers interact with AI-assisted content. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Data minimization limits what you paste into third-party tools.","When stakes rise, pause for a second opinion or formal review. Bias in training data appears in recommendations and classifications. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Cost scales with tokens; batching and caching affect unit economics. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    ),
    section(
      "ai-copy-s3",
      "2.3 AI Copy and Content — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ai copy and content in a meeting, but details in the packet do not match the textbook example. Data minimization limits what you paste into third-party tools. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Bias in training data appears in recommendations and classifications.","Good documentation states facts, cites the framework, and records the decision. Cost scales with tokens; batching and caching affect unit economics. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Evaluation sets measure quality before wide rollout. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    ),
    section(
      "ai-copy-s4",
      "2.4 AI Copy and Content — Common mistakes and how to avoid them",
      ["Common mistakes around ai copy and content include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Bias in training data appears in recommendations and classifications.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Cost scales with tokens; batching and caching affect unit economics. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Evaluation sets measure quality before wide rollout. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Prompt clarity reduces ambiguous outputs and rework. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."]
      }
    ),
    section(
      "ai-copy-s5",
      "2.5 AI Copy and Content — Putting the chapter together",
      ["This chapter’s through-line is simple: AI Copy and Content connects principles to accountable action. Cost scales with tokens; batching and caching affect unit economics.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Evaluation sets measure quality before wide rollout. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ai copy and content in your field. Prompt clarity reduces ambiguous outputs and rework. Automation should fail safe when models refuse or hallucinate."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    )
    ],
    {
      learningObjectives: ["Define ai copy and content and explain why it matters in AI For Entrepreneurs","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "AI Copy and Content connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."],
      realWorldRelevance: "Strong grasp of ai copy and content reduces rework, supports defensible records, and speeds collaboration across AI For Entrepreneurs.",
    }
  ),
  chapter(
    "ai-support",
    3,
    "AI Customer Support",
    [
    section(
      "ai-support-s1",
      "3.1 AI Customer Support — Foundations and vocabulary",
      ["AI Customer Support is a foundation in AI For Entrepreneurs because tool use can call APIs but expands attack surface if unchecked. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Human review remains responsible for regulated or customer-facing text. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ai customer support aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ai customer support as a shared model for decisions. Disclosure builds trust when customers interact with AI-assisted content. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "ai-support-s2",
      "3.2 AI Customer Support — How professionals apply this in practice",
      ["Professionals rarely dispute whether ai customer support exists—they dispute how human review remains responsible for regulated or customer-facing text. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Disclosure builds trust when customers interact with AI-assisted content.","When stakes rise, pause for a second opinion or formal review. Data minimization limits what you paste into third-party tools. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Bias in training data appears in recommendations and classifications. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."]
      }
    ),
    section(
      "ai-support-s3",
      "3.3 AI Customer Support — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ai customer support in a meeting, but details in the packet do not match the textbook example. Disclosure builds trust when customers interact with AI-assisted content. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Data minimization limits what you paste into third-party tools.","Good documentation states facts, cites the framework, and records the decision. Bias in training data appears in recommendations and classifications. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Cost scales with tokens; batching and caching affect unit economics. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."]
      }
    ),
    section(
      "ai-support-s4",
      "3.4 AI Customer Support — Common mistakes and how to avoid them",
      ["Common mistakes around ai customer support include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Data minimization limits what you paste into third-party tools.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Bias in training data appears in recommendations and classifications. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Cost scales with tokens; batching and caching affect unit economics. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Evaluation sets measure quality before wide rollout. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    ),
    section(
      "ai-support-s5",
      "3.5 AI Customer Support — Putting the chapter together",
      ["This chapter’s through-line is simple: AI Customer Support connects principles to accountable action. Bias in training data appears in recommendations and classifications.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Cost scales with tokens; batching and caching affect unit economics. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ai customer support in your field. Evaluation sets measure quality before wide rollout. Prompt clarity reduces ambiguous outputs and rework."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."]
      }
    )
    ],
    {
      learningObjectives: ["Define ai customer support and explain why it matters in AI For Entrepreneurs","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "AI Customer Support connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Bias in training data appears in recommendations and classifications.","Data minimization limits what you paste into third-party tools.","Cost scales with tokens; batching and caching affect unit economics.","Bias in training data appears in recommendations and classifications.","Data minimization limits what you paste into third-party tools."],
      realWorldRelevance: "Strong grasp of ai customer support reduces rework, supports defensible records, and speeds collaboration across AI For Entrepreneurs.",
    }
  ),
  chapter(
    "ai-ops-startup",
    4,
    "AI in Operations",
    [
    section(
      "ai-ops-startup-s1",
      "4.1 AI in Operations — Foundations and vocabulary",
      ["AI in Operations is a foundation in AI For Entrepreneurs because evaluation sets measure quality before wide rollout. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Prompt clarity reduces ambiguous outputs and rework. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ai in operations aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ai in operations as a shared model for decisions. Automation should fail safe when models refuse or hallucinate. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "ai-ops-startup-s2",
      "4.2 AI in Operations — How professionals apply this in practice",
      ["Professionals rarely dispute whether ai in operations exists—they dispute how cost scales with tokens; batching and caching affect unit economics. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Evaluation sets measure quality before wide rollout.","When stakes rise, pause for a second opinion or formal review. Prompt clarity reduces ambiguous outputs and rework. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Automation should fail safe when models refuse or hallucinate. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    ),
    section(
      "ai-ops-startup-s3",
      "4.3 AI in Operations — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ai in operations in a meeting, but details in the packet do not match the textbook example. Bias in training data appears in recommendations and classifications. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Cost scales with tokens; batching and caching affect unit economics.","Good documentation states facts, cites the framework, and records the decision. Evaluation sets measure quality before wide rollout. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Prompt clarity reduces ambiguous outputs and rework. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    ),
    section(
      "ai-ops-startup-s4",
      "4.4 AI in Operations — Common mistakes and how to avoid them",
      ["Common mistakes around ai in operations include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Data minimization limits what you paste into third-party tools.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Bias in training data appears in recommendations and classifications. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Cost scales with tokens; batching and caching affect unit economics. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Evaluation sets measure quality before wide rollout. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "ai-ops-startup-s5",
      "4.5 AI in Operations — Putting the chapter together",
      ["This chapter’s through-line is simple: AI in Operations connects principles to accountable action. Disclosure builds trust when customers interact with AI-assisted content.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Data minimization limits what you paste into third-party tools. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ai in operations in your field. Bias in training data appears in recommendations and classifications. Cost scales with tokens; batching and caching affect unit economics."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    )
    ],
    {
      learningObjectives: ["Define ai in operations and explain why it matters in AI For Entrepreneurs","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "AI in Operations connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Automation should fail safe when models refuse or hallucinate.","Prompt clarity reduces ambiguous outputs and rework.","Large language models predict text—they do not inherently know truth.","Automation should fail safe when models refuse or hallucinate.","Prompt clarity reduces ambiguous outputs and rework."],
      realWorldRelevance: "Strong grasp of ai in operations reduces rework, supports defensible records, and speeds collaboration across AI For Entrepreneurs.",
    }
  ),
  chapter(
    "ai-product",
    5,
    "AI in Product",
    [
    section(
      "ai-product-s1",
      "5.1 AI in Product — Foundations and vocabulary",
      ["AI in Product is a foundation in AI For Entrepreneurs because versioning prompts is as important as versioning code. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Human review remains responsible for regulated or customer-facing text. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ai in product aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ai in product as a shared model for decisions. Tool use can call APIs but expands attack surface if unchecked. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "ai-product-s2",
      "5.2 AI in Product — How professionals apply this in practice",
      ["Professionals rarely dispute whether ai in product exists—they dispute how retrieval augments models with organization-specific documents. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Versioning prompts is as important as versioning code.","When stakes rise, pause for a second opinion or formal review. Human review remains responsible for regulated or customer-facing text. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Tool use can call APIs but expands attack surface if unchecked. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    ),
    section(
      "ai-product-s3",
      "5.3 AI in Product — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ai in product in a meeting, but details in the packet do not match the textbook example. Large language models predict text—they do not inherently know truth. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Retrieval augments models with organization-specific documents.","Good documentation states facts, cites the framework, and records the decision. Versioning prompts is as important as versioning code. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Human review remains responsible for regulated or customer-facing text. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."]
      }
    ),
    section(
      "ai-product-s4",
      "5.4 AI in Product — Common mistakes and how to avoid them",
      ["Common mistakes around ai in product include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Automation should fail safe when models refuse or hallucinate.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Large language models predict text—they do not inherently know truth. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Retrieval augments models with organization-specific documents. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Versioning prompts is as important as versioning code. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools."]
      }
    ),
    section(
      "ai-product-s5",
      "5.5 AI in Product — Putting the chapter together",
      ["This chapter’s through-line is simple: AI in Product connects principles to accountable action. Prompt clarity reduces ambiguous outputs and rework.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Automation should fail safe when models refuse or hallucinate. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ai in product in your field. Large language models predict text—they do not inherently know truth. Retrieval augments models with organization-specific documents."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    )
    ],
    {
      learningObjectives: ["Define ai in product and explain why it matters in AI For Entrepreneurs","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "AI in Product connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."],
      realWorldRelevance: "Strong grasp of ai in product reduces rework, supports defensible records, and speeds collaboration across AI For Entrepreneurs.",
    }
  ),
  chapter(
    "cost-ai",
    6,
    "Cost Control",
    [
    section(
      "cost-ai-s1",
      "6.1 Cost Control — Foundations and vocabulary",
      ["Cost Control is a foundation in AI For Entrepreneurs because tool use can call APIs but expands attack surface if unchecked. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Disclosure builds trust when customers interact with AI-assisted content. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain cost control aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat cost control as a shared model for decisions. Cost scales with tokens; batching and caching affect unit economics. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "cost-ai-s2",
      "6.2 Cost Control — How professionals apply this in practice",
      ["Professionals rarely dispute whether cost control exists—they dispute how disclosure builds trust when customers interact with AI-assisted content. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Cost scales with tokens; batching and caching affect unit economics.","When stakes rise, pause for a second opinion or formal review. Data minimization limits what you paste into third-party tools. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Bias in training data appears in recommendations and classifications. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."]
      }
    ),
    section(
      "cost-ai-s3",
      "6.3 Cost Control — Workplace scenarios and documentation",
      ["Scenario: a teammate cites cost control in a meeting, but details in the packet do not match the textbook example. Cost scales with tokens; batching and caching affect unit economics. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Data minimization limits what you paste into third-party tools.","Good documentation states facts, cites the framework, and records the decision. Bias in training data appears in recommendations and classifications. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Evaluation sets measure quality before wide rollout. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "cost-ai-s4",
      "6.4 Cost Control — Common mistakes and how to avoid them",
      ["Common mistakes around cost control include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Data minimization limits what you paste into third-party tools.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Bias in training data appears in recommendations and classifications. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Evaluation sets measure quality before wide rollout. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Prompt clarity reduces ambiguous outputs and rework. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    ),
    section(
      "cost-ai-s5",
      "6.5 Cost Control — Putting the chapter together",
      ["This chapter’s through-line is simple: Cost Control connects principles to accountable action. Bias in training data appears in recommendations and classifications.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Evaluation sets measure quality before wide rollout. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits cost control in your field. Prompt clarity reduces ambiguous outputs and rework. Automation should fail safe when models refuse or hallucinate."], {
        bulletPoints: ["Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."]
      }
    )
    ],
    {
      learningObjectives: ["Define cost control and explain why it matters in AI For Entrepreneurs","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Cost Control connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."],
      realWorldRelevance: "Strong grasp of cost control reduces rework, supports defensible records, and speeds collaboration across AI For Entrepreneurs.",
    }
  ),
  chapter(
    "policy-startup",
    7,
    "Startup AI Policy",
    [
    section(
      "policy-startup-s1",
      "7.1 Startup AI Policy — Foundations and vocabulary",
      ["Startup AI Policy is a foundation in AI For Entrepreneurs because evaluation sets measure quality before wide rollout. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Prompt clarity reduces ambiguous outputs and rework. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain startup ai policy aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat startup ai policy as a shared model for decisions. Automation should fail safe when models refuse or hallucinate. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "policy-startup-s2",
      "7.2 Startup AI Policy — How professionals apply this in practice",
      ["Professionals rarely dispute whether startup ai policy exists—they dispute how cost scales with tokens; batching and caching affect unit economics. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Evaluation sets measure quality before wide rollout.","When stakes rise, pause for a second opinion or formal review. Prompt clarity reduces ambiguous outputs and rework. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Automation should fail safe when models refuse or hallucinate. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools."]
      }
    ),
    section(
      "policy-startup-s3",
      "7.3 Startup AI Policy — Workplace scenarios and documentation",
      ["Scenario: a teammate cites startup ai policy in a meeting, but details in the packet do not match the textbook example. Bias in training data appears in recommendations and classifications. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Cost scales with tokens; batching and caching affect unit economics.","Good documentation states facts, cites the framework, and records the decision. Evaluation sets measure quality before wide rollout. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Prompt clarity reduces ambiguous outputs and rework. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."]
      }
    ),
    section(
      "policy-startup-s4",
      "7.4 Startup AI Policy — Common mistakes and how to avoid them",
      ["Common mistakes around startup ai policy include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Data minimization limits what you paste into third-party tools.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Bias in training data appears in recommendations and classifications. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Cost scales with tokens; batching and caching affect unit economics. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Evaluation sets measure quality before wide rollout. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    ),
    section(
      "policy-startup-s5",
      "7.5 Startup AI Policy — Putting the chapter together",
      ["This chapter’s through-line is simple: Startup AI Policy connects principles to accountable action. Disclosure builds trust when customers interact with AI-assisted content.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Data minimization limits what you paste into third-party tools. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits startup ai policy in your field. Bias in training data appears in recommendations and classifications. Cost scales with tokens; batching and caching affect unit economics."], {
        bulletPoints: ["Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools."]
      }
    )
    ],
    {
      learningObjectives: ["Define startup ai policy and explain why it matters in AI For Entrepreneurs","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Startup AI Policy connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Human review remains responsible for regulated or customer-facing text.","Versioning prompts is as important as versioning code.","Tool use can call APIs but expands attack surface if unchecked.","Human review remains responsible for regulated or customer-facing text.","Versioning prompts is as important as versioning code."],
      realWorldRelevance: "Strong grasp of startup ai policy reduces rework, supports defensible records, and speeds collaboration across AI For Entrepreneurs.",
    }
  ),
  chapter(
    "scale-ai",
    8,
    "Scaling AI Use",
    [
    section(
      "scale-ai-s1",
      "8.1 Scaling AI Use — Foundations and vocabulary",
      ["Scaling AI Use is a foundation in AI For Entrepreneurs because data minimization limits what you paste into third-party tools. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Bias in training data appears in recommendations and classifications. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain scaling ai use aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat scaling ai use as a shared model for decisions. Cost scales with tokens; batching and caching affect unit economics. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "scale-ai-s2",
      "8.2 Scaling AI Use — How professionals apply this in practice",
      ["Professionals rarely dispute whether scaling ai use exists—they dispute how disclosure builds trust when customers interact with AI-assisted content. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Data minimization limits what you paste into third-party tools.","When stakes rise, pause for a second opinion or formal review. Bias in training data appears in recommendations and classifications. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Cost scales with tokens; batching and caching affect unit economics. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    ),
    section(
      "scale-ai-s3",
      "8.3 Scaling AI Use — Workplace scenarios and documentation",
      ["Scenario: a teammate cites scaling ai use in a meeting, but details in the packet do not match the textbook example. Tool use can call APIs but expands attack surface if unchecked. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Disclosure builds trust when customers interact with AI-assisted content.","Good documentation states facts, cites the framework, and records the decision. Data minimization limits what you paste into third-party tools. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Bias in training data appears in recommendations and classifications. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    ),
    section(
      "scale-ai-s4",
      "8.4 Scaling AI Use — Common mistakes and how to avoid them",
      ["Common mistakes around scaling ai use include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Human review remains responsible for regulated or customer-facing text.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Tool use can call APIs but expands attack surface if unchecked. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Disclosure builds trust when customers interact with AI-assisted content. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Data minimization limits what you paste into third-party tools. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."]
      }
    ),
    section(
      "scale-ai-s5",
      "8.5 Scaling AI Use — Putting the chapter together",
      ["This chapter’s through-line is simple: Scaling AI Use connects principles to accountable action. Versioning prompts is as important as versioning code.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Human review remains responsible for regulated or customer-facing text. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits scaling ai use in your field. Tool use can call APIs but expands attack surface if unchecked. Disclosure builds trust when customers interact with AI-assisted content."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    )
    ],
    {
      learningObjectives: ["Define scaling ai use and explain why it matters in AI For Entrepreneurs","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Scaling AI Use connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Data minimization limits what you paste into third-party tools.","Disclosure builds trust when customers interact with AI-assisted content.","Bias in training data appears in recommendations and classifications.","Data minimization limits what you paste into third-party tools.","Disclosure builds trust when customers interact with AI-assisted content."],
      realWorldRelevance: "Strong grasp of scaling ai use reduces rework, supports defensible records, and speeds collaboration across AI For Entrepreneurs.",
    }
  )
];
