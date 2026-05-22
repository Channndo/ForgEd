import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const AIETH_TEXTBOOK_INTRO: TextbookIntro = {
  title: "AI Ethics & Risks",
  subtitle: "ForgEd workforce textbook — AI Ethics & Risks",
  paragraphs: [
    "This ForgEd digital textbook presents AI Ethics & Risks at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const AIETH_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "ethics-framework",
    1,
    "Ethics Frameworks",
    [
    section(
      "ethics-framework-s1",
      "1.1 Ethics Frameworks — Foundations and vocabulary",
      ["Ethics Frameworks is a foundation in AI Ethics & Risks because bias in training data appears in recommendations and classifications. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Cost scales with tokens; batching and caching affect unit economics. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ethics frameworks aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ethics frameworks as a shared model for decisions. Evaluation sets measure quality before wide rollout. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "ethics-framework-s2",
      "1.2 Ethics Frameworks — How professionals apply this in practice",
      ["Professionals rarely dispute whether ethics frameworks exists—they dispute how data minimization limits what you paste into third-party tools. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Bias in training data appears in recommendations and classifications.","When stakes rise, pause for a second opinion or formal review. Cost scales with tokens; batching and caching affect unit economics. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Evaluation sets measure quality before wide rollout. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    ),
    section(
      "ethics-framework-s3",
      "1.3 Ethics Frameworks — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ethics frameworks in a meeting, but details in the packet do not match the textbook example. Disclosure builds trust when customers interact with AI-assisted content. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Data minimization limits what you paste into third-party tools.","Good documentation states facts, cites the framework, and records the decision. Bias in training data appears in recommendations and classifications. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Cost scales with tokens; batching and caching affect unit economics. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    ),
    section(
      "ethics-framework-s4",
      "1.4 Ethics Frameworks — Common mistakes and how to avoid them",
      ["Common mistakes around ethics frameworks include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Tool use can call APIs but expands attack surface if unchecked.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Disclosure builds trust when customers interact with AI-assisted content. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Data minimization limits what you paste into third-party tools. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Bias in training data appears in recommendations and classifications. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "ethics-framework-s5",
      "1.5 Ethics Frameworks — Putting the chapter together",
      ["This chapter’s through-line is simple: Ethics Frameworks connects principles to accountable action. Human review remains responsible for regulated or customer-facing text.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Tool use can call APIs but expands attack surface if unchecked. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ethics frameworks in your field. Disclosure builds trust when customers interact with AI-assisted content. Data minimization limits what you paste into third-party tools."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    )
    ],
    {
      learningObjectives: ["Define ethics frameworks and explain why it matters in AI Ethics & Risks","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Ethics Frameworks connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."],
      realWorldRelevance: "Strong grasp of ethics frameworks reduces rework, supports defensible records, and speeds collaboration across AI Ethics & Risks.",
    }
  ),
  chapter(
    "bias-fairness",
    2,
    "Bias and Fairness",
    [
    section(
      "bias-fairness-s1",
      "2.1 Bias and Fairness — Foundations and vocabulary",
      ["Bias and Fairness is a foundation in AI Ethics & Risks because retrieval augments models with organization-specific documents. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Versioning prompts is as important as versioning code. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain bias and fairness aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat bias and fairness as a shared model for decisions. Human review remains responsible for regulated or customer-facing text. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "bias-fairness-s2",
      "2.2 Bias and Fairness — How professionals apply this in practice",
      ["Professionals rarely dispute whether bias and fairness exists—they dispute how large language models predict text—they do not inherently know truth. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Retrieval augments models with organization-specific documents.","When stakes rise, pause for a second opinion or formal review. Versioning prompts is as important as versioning code. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Human review remains responsible for regulated or customer-facing text. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    ),
    section(
      "bias-fairness-s3",
      "2.3 Bias and Fairness — Workplace scenarios and documentation",
      ["Scenario: a teammate cites bias and fairness in a meeting, but details in the packet do not match the textbook example. Automation should fail safe when models refuse or hallucinate. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Large language models predict text—they do not inherently know truth.","Good documentation states facts, cites the framework, and records the decision. Retrieval augments models with organization-specific documents. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Versioning prompts is as important as versioning code. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked."]
      }
    ),
    section(
      "bias-fairness-s4",
      "2.4 Bias and Fairness — Common mistakes and how to avoid them",
      ["Common mistakes around bias and fairness include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Prompt clarity reduces ambiguous outputs and rework.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Automation should fail safe when models refuse or hallucinate. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Large language models predict text—they do not inherently know truth. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Retrieval augments models with organization-specific documents. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "bias-fairness-s5",
      "2.5 Bias and Fairness — Putting the chapter together",
      ["This chapter’s through-line is simple: Bias and Fairness connects principles to accountable action. Evaluation sets measure quality before wide rollout.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Prompt clarity reduces ambiguous outputs and rework. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits bias and fairness in your field. Automation should fail safe when models refuse or hallucinate. Large language models predict text—they do not inherently know truth."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    )
    ],
    {
      learningObjectives: ["Define bias and fairness and explain why it matters in AI Ethics & Risks","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Bias and Fairness connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Automation should fail safe when models refuse or hallucinate.","Prompt clarity reduces ambiguous outputs and rework.","Large language models predict text—they do not inherently know truth.","Automation should fail safe when models refuse or hallucinate.","Prompt clarity reduces ambiguous outputs and rework."],
      realWorldRelevance: "Strong grasp of bias and fairness reduces rework, supports defensible records, and speeds collaboration across AI Ethics & Risks.",
    }
  ),
  chapter(
    "privacy-ai",
    3,
    "Privacy and Data Use",
    [
    section(
      "privacy-ai-s1",
      "3.1 Privacy and Data Use — Foundations and vocabulary",
      ["Privacy and Data Use is a foundation in AI Ethics & Risks because large language models predict text—they do not inherently know truth. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Retrieval augments models with organization-specific documents. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain privacy and data use aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat privacy and data use as a shared model for decisions. Versioning prompts is as important as versioning code. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "privacy-ai-s2",
      "3.2 Privacy and Data Use — How professionals apply this in practice",
      ["Professionals rarely dispute whether privacy and data use exists—they dispute how retrieval augments models with organization-specific documents. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Versioning prompts is as important as versioning code.","When stakes rise, pause for a second opinion or formal review. Human review remains responsible for regulated or customer-facing text. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Tool use can call APIs but expands attack surface if unchecked. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    ),
    section(
      "privacy-ai-s3",
      "3.3 Privacy and Data Use — Workplace scenarios and documentation",
      ["Scenario: a teammate cites privacy and data use in a meeting, but details in the packet do not match the textbook example. Versioning prompts is as important as versioning code. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Human review remains responsible for regulated or customer-facing text.","Good documentation states facts, cites the framework, and records the decision. Tool use can call APIs but expands attack surface if unchecked. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Disclosure builds trust when customers interact with AI-assisted content. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    ),
    section(
      "privacy-ai-s4",
      "3.4 Privacy and Data Use — Common mistakes and how to avoid them",
      ["Common mistakes around privacy and data use include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Human review remains responsible for regulated or customer-facing text.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Tool use can call APIs but expands attack surface if unchecked. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Disclosure builds trust when customers interact with AI-assisted content. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Data minimization limits what you paste into third-party tools. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."]
      }
    ),
    section(
      "privacy-ai-s5",
      "3.5 Privacy and Data Use — Putting the chapter together",
      ["This chapter’s through-line is simple: Privacy and Data Use connects principles to accountable action. Tool use can call APIs but expands attack surface if unchecked.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Disclosure builds trust when customers interact with AI-assisted content. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits privacy and data use in your field. Data minimization limits what you paste into third-party tools. Bias in training data appears in recommendations and classifications."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    )
    ],
    {
      learningObjectives: ["Define privacy and data use and explain why it matters in AI Ethics & Risks","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Privacy and Data Use connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Tool use can call APIs but expands attack surface if unchecked.","Human review remains responsible for regulated or customer-facing text.","Disclosure builds trust when customers interact with AI-assisted content.","Tool use can call APIs but expands attack surface if unchecked.","Human review remains responsible for regulated or customer-facing text."],
      realWorldRelevance: "Strong grasp of privacy and data use reduces rework, supports defensible records, and speeds collaboration across AI Ethics & Risks.",
    }
  ),
  chapter(
    "ip-ai",
    4,
    "Intellectual Property",
    [
    section(
      "ip-ai-s1",
      "4.1 Intellectual Property — Foundations and vocabulary",
      ["Intellectual Property is a foundation in AI Ethics & Risks because evaluation sets measure quality before wide rollout. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Prompt clarity reduces ambiguous outputs and rework. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain intellectual property aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat intellectual property as a shared model for decisions. Automation should fail safe when models refuse or hallucinate. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "ip-ai-s2",
      "4.2 Intellectual Property — How professionals apply this in practice",
      ["Professionals rarely dispute whether intellectual property exists—they dispute how prompt clarity reduces ambiguous outputs and rework. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Automation should fail safe when models refuse or hallucinate.","When stakes rise, pause for a second opinion or formal review. Large language models predict text—they do not inherently know truth. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Retrieval augments models with organization-specific documents. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."]
      }
    ),
    section(
      "ip-ai-s3",
      "4.3 Intellectual Property — Workplace scenarios and documentation",
      ["Scenario: a teammate cites intellectual property in a meeting, but details in the packet do not match the textbook example. Automation should fail safe when models refuse or hallucinate. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Large language models predict text—they do not inherently know truth.","Good documentation states facts, cites the framework, and records the decision. Retrieval augments models with organization-specific documents. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Versioning prompts is as important as versioning code. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."]
      }
    ),
    section(
      "ip-ai-s4",
      "4.4 Intellectual Property — Common mistakes and how to avoid them",
      ["Common mistakes around intellectual property include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Large language models predict text—they do not inherently know truth.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Retrieval augments models with organization-specific documents. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Versioning prompts is as important as versioning code. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Human review remains responsible for regulated or customer-facing text. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    ),
    section(
      "ip-ai-s5",
      "4.5 Intellectual Property — Putting the chapter together",
      ["This chapter’s through-line is simple: Intellectual Property connects principles to accountable action. Retrieval augments models with organization-specific documents.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Versioning prompts is as important as versioning code. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits intellectual property in your field. Human review remains responsible for regulated or customer-facing text. Tool use can call APIs but expands attack surface if unchecked."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."]
      }
    )
    ],
    {
      learningObjectives: ["Define intellectual property and explain why it matters in AI Ethics & Risks","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Intellectual Property connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."],
      realWorldRelevance: "Strong grasp of intellectual property reduces rework, supports defensible records, and speeds collaboration across AI Ethics & Risks.",
    }
  ),
  chapter(
    "workplace-policy",
    5,
    "Workplace AI Policy",
    [
    section(
      "workplace-policy-s1",
      "5.1 Workplace AI Policy — Foundations and vocabulary",
      ["Workplace AI Policy is a foundation in AI Ethics & Risks because prompt clarity reduces ambiguous outputs and rework. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Automation should fail safe when models refuse or hallucinate. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain workplace ai policy aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat workplace ai policy as a shared model for decisions. Large language models predict text—they do not inherently know truth. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "workplace-policy-s2",
      "5.2 Workplace AI Policy — How professionals apply this in practice",
      ["Professionals rarely dispute whether workplace ai policy exists—they dispute how evaluation sets measure quality before wide rollout. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Prompt clarity reduces ambiguous outputs and rework.","When stakes rise, pause for a second opinion or formal review. Automation should fail safe when models refuse or hallucinate. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Large language models predict text—they do not inherently know truth. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    ),
    section(
      "workplace-policy-s3",
      "5.3 Workplace AI Policy — Workplace scenarios and documentation",
      ["Scenario: a teammate cites workplace ai policy in a meeting, but details in the packet do not match the textbook example. Cost scales with tokens; batching and caching affect unit economics. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Evaluation sets measure quality before wide rollout.","Good documentation states facts, cites the framework, and records the decision. Prompt clarity reduces ambiguous outputs and rework. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Automation should fail safe when models refuse or hallucinate. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    ),
    section(
      "workplace-policy-s4",
      "5.4 Workplace AI Policy — Common mistakes and how to avoid them",
      ["Common mistakes around workplace ai policy include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Bias in training data appears in recommendations and classifications.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Cost scales with tokens; batching and caching affect unit economics. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Evaluation sets measure quality before wide rollout. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Prompt clarity reduces ambiguous outputs and rework. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."]
      }
    ),
    section(
      "workplace-policy-s5",
      "5.5 Workplace AI Policy — Putting the chapter together",
      ["This chapter’s through-line is simple: Workplace AI Policy connects principles to accountable action. Data minimization limits what you paste into third-party tools.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Bias in training data appears in recommendations and classifications. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits workplace ai policy in your field. Cost scales with tokens; batching and caching affect unit economics. Evaluation sets measure quality before wide rollout."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    )
    ],
    {
      learningObjectives: ["Define workplace ai policy and explain why it matters in AI Ethics & Risks","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Workplace AI Policy connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Data minimization limits what you paste into third-party tools.","Disclosure builds trust when customers interact with AI-assisted content.","Bias in training data appears in recommendations and classifications.","Data minimization limits what you paste into third-party tools.","Disclosure builds trust when customers interact with AI-assisted content."],
      realWorldRelevance: "Strong grasp of workplace ai policy reduces rework, supports defensible records, and speeds collaboration across AI Ethics & Risks.",
    }
  ),
  chapter(
    "transparency",
    6,
    "Transparency and Disclosure",
    [
    section(
      "transparency-s1",
      "6.1 Transparency and Disclosure — Foundations and vocabulary",
      ["Transparency and Disclosure is a foundation in AI Ethics & Risks because automation should fail safe when models refuse or hallucinate. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Large language models predict text—they do not inherently know truth. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain transparency and disclosure aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat transparency and disclosure as a shared model for decisions. Retrieval augments models with organization-specific documents. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "transparency-s2",
      "6.2 Transparency and Disclosure — How professionals apply this in practice",
      ["Professionals rarely dispute whether transparency and disclosure exists—they dispute how large language models predict text—they do not inherently know truth. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Retrieval augments models with organization-specific documents.","When stakes rise, pause for a second opinion or formal review. Versioning prompts is as important as versioning code. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Human review remains responsible for regulated or customer-facing text. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools."]
      }
    ),
    section(
      "transparency-s3",
      "6.3 Transparency and Disclosure — Workplace scenarios and documentation",
      ["Scenario: a teammate cites transparency and disclosure in a meeting, but details in the packet do not match the textbook example. Retrieval augments models with organization-specific documents. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Versioning prompts is as important as versioning code.","Good documentation states facts, cites the framework, and records the decision. Human review remains responsible for regulated or customer-facing text. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Tool use can call APIs but expands attack surface if unchecked. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."]
      }
    ),
    section(
      "transparency-s4",
      "6.4 Transparency and Disclosure — Common mistakes and how to avoid them",
      ["Common mistakes around transparency and disclosure include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Versioning prompts is as important as versioning code.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Human review remains responsible for regulated or customer-facing text. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Tool use can call APIs but expands attack surface if unchecked. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Disclosure builds trust when customers interact with AI-assisted content. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    ),
    section(
      "transparency-s5",
      "6.5 Transparency and Disclosure — Putting the chapter together",
      ["This chapter’s through-line is simple: Transparency and Disclosure connects principles to accountable action. Human review remains responsible for regulated or customer-facing text.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Tool use can call APIs but expands attack surface if unchecked. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits transparency and disclosure in your field. Disclosure builds trust when customers interact with AI-assisted content. Data minimization limits what you paste into third-party tools."], {
        bulletPoints: ["Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools."]
      }
    )
    ],
    {
      learningObjectives: ["Define transparency and disclosure and explain why it matters in AI Ethics & Risks","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Transparency and Disclosure connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Human review remains responsible for regulated or customer-facing text.","Versioning prompts is as important as versioning code.","Tool use can call APIs but expands attack surface if unchecked.","Human review remains responsible for regulated or customer-facing text.","Versioning prompts is as important as versioning code."],
      realWorldRelevance: "Strong grasp of transparency and disclosure reduces rework, supports defensible records, and speeds collaboration across AI Ethics & Risks.",
    }
  ),
  chapter(
    "incident-ai",
    7,
    "When AI Fails",
    [
    section(
      "incident-ai-s1",
      "7.1 When AI Fails — Foundations and vocabulary",
      ["When AI Fails is a foundation in AI Ethics & Risks because large language models predict text—they do not inherently know truth. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Retrieval augments models with organization-specific documents. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain when ai fails aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat when ai fails as a shared model for decisions. Versioning prompts is as important as versioning code. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "incident-ai-s2",
      "7.2 When AI Fails — How professionals apply this in practice",
      ["Professionals rarely dispute whether when ai fails exists—they dispute how prompt clarity reduces ambiguous outputs and rework. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Large language models predict text—they do not inherently know truth.","When stakes rise, pause for a second opinion or formal review. Retrieval augments models with organization-specific documents. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Versioning prompts is as important as versioning code. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    ),
    section(
      "incident-ai-s3",
      "7.3 When AI Fails — Workplace scenarios and documentation",
      ["Scenario: a teammate cites when ai fails in a meeting, but details in the packet do not match the textbook example. Evaluation sets measure quality before wide rollout. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Prompt clarity reduces ambiguous outputs and rework.","Good documentation states facts, cites the framework, and records the decision. Large language models predict text—they do not inherently know truth. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Retrieval augments models with organization-specific documents. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "incident-ai-s4",
      "7.4 When AI Fails — Common mistakes and how to avoid them",
      ["Common mistakes around when ai fails include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Cost scales with tokens; batching and caching affect unit economics.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Evaluation sets measure quality before wide rollout. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Prompt clarity reduces ambiguous outputs and rework. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Large language models predict text—they do not inherently know truth. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    ),
    section(
      "incident-ai-s5",
      "7.5 When AI Fails — Putting the chapter together",
      ["This chapter’s through-line is simple: When AI Fails connects principles to accountable action. Bias in training data appears in recommendations and classifications.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Cost scales with tokens; batching and caching affect unit economics. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits when ai fails in your field. Evaluation sets measure quality before wide rollout. Prompt clarity reduces ambiguous outputs and rework."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    )
    ],
    {
      learningObjectives: ["Define when ai fails and explain why it matters in AI Ethics & Risks","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "When AI Fails connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Evaluation sets measure quality before wide rollout.","Cost scales with tokens; batching and caching affect unit economics.","Prompt clarity reduces ambiguous outputs and rework.","Evaluation sets measure quality before wide rollout.","Cost scales with tokens; batching and caching affect unit economics."],
      realWorldRelevance: "Strong grasp of when ai fails reduces rework, supports defensible records, and speeds collaboration across AI Ethics & Risks.",
    }
  ),
  chapter(
    "governance",
    8,
    "Lightweight AI Governance",
    [
    section(
      "governance-s1",
      "8.1 Lightweight AI Governance — Foundations and vocabulary",
      ["Lightweight AI Governance is a foundation in AI Ethics & Risks because versioning prompts is as important as versioning code. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Human review remains responsible for regulated or customer-facing text. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain lightweight ai governance aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat lightweight ai governance as a shared model for decisions. Tool use can call APIs but expands attack surface if unchecked. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "governance-s2",
      "8.2 Lightweight AI Governance — How professionals apply this in practice",
      ["Professionals rarely dispute whether lightweight ai governance exists—they dispute how human review remains responsible for regulated or customer-facing text. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Tool use can call APIs but expands attack surface if unchecked.","When stakes rise, pause for a second opinion or formal review. Disclosure builds trust when customers interact with AI-assisted content. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Data minimization limits what you paste into third-party tools. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    ),
    section(
      "governance-s3",
      "8.3 Lightweight AI Governance — Workplace scenarios and documentation",
      ["Scenario: a teammate cites lightweight ai governance in a meeting, but details in the packet do not match the textbook example. Tool use can call APIs but expands attack surface if unchecked. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Disclosure builds trust when customers interact with AI-assisted content.","Good documentation states facts, cites the framework, and records the decision. Data minimization limits what you paste into third-party tools. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Bias in training data appears in recommendations and classifications. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "governance-s4",
      "8.4 Lightweight AI Governance — Common mistakes and how to avoid them",
      ["Common mistakes around lightweight ai governance include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Disclosure builds trust when customers interact with AI-assisted content.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Data minimization limits what you paste into third-party tools. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Bias in training data appears in recommendations and classifications. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Cost scales with tokens; batching and caching affect unit economics. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    ),
    section(
      "governance-s5",
      "8.5 Lightweight AI Governance — Putting the chapter together",
      ["This chapter’s through-line is simple: Lightweight AI Governance connects principles to accountable action. Data minimization limits what you paste into third-party tools.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Bias in training data appears in recommendations and classifications. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits lightweight ai governance in your field. Cost scales with tokens; batching and caching affect unit economics. Evaluation sets measure quality before wide rollout."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    )
    ],
    {
      learningObjectives: ["Define lightweight ai governance and explain why it matters in AI Ethics & Risks","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Lightweight AI Governance connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Prompt clarity reduces ambiguous outputs and rework.","Evaluation sets measure quality before wide rollout.","Automation should fail safe when models refuse or hallucinate.","Prompt clarity reduces ambiguous outputs and rework.","Evaluation sets measure quality before wide rollout."],
      realWorldRelevance: "Strong grasp of lightweight ai governance reduces rework, supports defensible records, and speeds collaboration across AI Ethics & Risks.",
    }
  )
];
