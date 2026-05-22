import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const RO_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Repair Order Workflow",
  subtitle: "ForgEd workforce textbook — Repair Order Workflow",
  paragraphs: [
    "This ForgEd digital textbook presents Repair Order Workflow at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const RO_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "ro-basics",
    1,
    "Repair Order Basics",
    [
    section(
      "ro-basics-s1",
      "1.1 Repair Order Basics — Foundations and vocabulary",
      ["Repair Order Basics is a foundation in Repair Order Workflow because cost scales with tokens; batching and caching affect unit economics. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Evaluation sets measure quality before wide rollout. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain repair order basics aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat repair order basics as a shared model for decisions. Prompt clarity reduces ambiguous outputs and rework. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "ro-basics-s2",
      "1.2 Repair Order Basics — How professionals apply this in practice",
      ["Professionals rarely dispute whether repair order basics exists—they dispute how evaluation sets measure quality before wide rollout. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Prompt clarity reduces ambiguous outputs and rework.","When stakes rise, pause for a second opinion or formal review. Automation should fail safe when models refuse or hallucinate. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Large language models predict text—they do not inherently know truth. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    ),
    section(
      "ro-basics-s3",
      "1.3 Repair Order Basics — Workplace scenarios and documentation",
      ["Scenario: a teammate cites repair order basics in a meeting, but details in the packet do not match the textbook example. Prompt clarity reduces ambiguous outputs and rework. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Automation should fail safe when models refuse or hallucinate.","Good documentation states facts, cites the framework, and records the decision. Large language models predict text—they do not inherently know truth. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Retrieval augments models with organization-specific documents. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."]
      }
    ),
    section(
      "ro-basics-s4",
      "1.4 Repair Order Basics — Common mistakes and how to avoid them",
      ["Common mistakes around repair order basics include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Automation should fail safe when models refuse or hallucinate.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Large language models predict text—they do not inherently know truth. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Retrieval augments models with organization-specific documents. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Versioning prompts is as important as versioning code. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics."]
      }
    ),
    section(
      "ro-basics-s5",
      "1.5 Repair Order Basics — Putting the chapter together",
      ["This chapter’s through-line is simple: Repair Order Basics connects principles to accountable action. Large language models predict text—they do not inherently know truth.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Retrieval augments models with organization-specific documents. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits repair order basics in your field. Versioning prompts is as important as versioning code. Human review remains responsible for regulated or customer-facing text."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    )
    ],
    {
      learningObjectives: ["Define repair order basics and explain why it matters in Repair Order Workflow","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Repair Order Basics connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content.","Human review remains responsible for regulated or customer-facing text.","Tool use can call APIs but expands attack surface if unchecked.","Disclosure builds trust when customers interact with AI-assisted content."],
      realWorldRelevance: "Strong grasp of repair order basics reduces rework, supports defensible records, and speeds collaboration across Repair Order Workflow.",
    }
  ),
  chapter(
    "write-up",
    2,
    "Customer Write-Up",
    [
    section(
      "write-up-s1",
      "2.1 Customer Write-Up — Foundations and vocabulary",
      ["Customer Write-Up is a foundation in Repair Order Workflow because evaluation sets measure quality before wide rollout. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Prompt clarity reduces ambiguous outputs and rework. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain customer write-up aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat customer write-up as a shared model for decisions. Automation should fail safe when models refuse or hallucinate. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "write-up-s2",
      "2.2 Customer Write-Up — How professionals apply this in practice",
      ["Professionals rarely dispute whether customer write-up exists—they dispute how prompt clarity reduces ambiguous outputs and rework. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Automation should fail safe when models refuse or hallucinate.","When stakes rise, pause for a second opinion or formal review. Large language models predict text—they do not inherently know truth. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Retrieval augments models with organization-specific documents. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."]
      }
    ),
    section(
      "write-up-s3",
      "2.3 Customer Write-Up — Workplace scenarios and documentation",
      ["Scenario: a teammate cites customer write-up in a meeting, but details in the packet do not match the textbook example. Automation should fail safe when models refuse or hallucinate. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Large language models predict text—they do not inherently know truth.","Good documentation states facts, cites the framework, and records the decision. Retrieval augments models with organization-specific documents. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Versioning prompts is as important as versioning code. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    ),
    section(
      "write-up-s4",
      "2.4 Customer Write-Up — Common mistakes and how to avoid them",
      ["Common mistakes around customer write-up include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Large language models predict text—they do not inherently know truth.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Retrieval augments models with organization-specific documents. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Versioning prompts is as important as versioning code. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Tool use can call APIs but expands attack surface if unchecked. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    ),
    section(
      "write-up-s5",
      "2.5 Customer Write-Up — Putting the chapter together",
      ["This chapter’s through-line is simple: Customer Write-Up connects principles to accountable action. Retrieval augments models with organization-specific documents.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Versioning prompts is as important as versioning code. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits customer write-up in your field. Tool use can call APIs but expands attack surface if unchecked. Human review remains responsible for regulated or customer-facing text."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."]
      }
    )
    ],
    {
      learningObjectives: ["Define customer write-up and explain why it matters in Repair Order Workflow","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Customer Write-Up connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Evaluation sets measure quality before wide rollout.","Cost scales with tokens; batching and caching affect unit economics.","Prompt clarity reduces ambiguous outputs and rework.","Evaluation sets measure quality before wide rollout.","Cost scales with tokens; batching and caching affect unit economics."],
      realWorldRelevance: "Strong grasp of customer write-up reduces rework, supports defensible records, and speeds collaboration across Repair Order Workflow.",
    }
  ),
  chapter(
    "approvals-ro",
    3,
    "Approvals",
    [
    section(
      "approvals-ro-s1",
      "3.1 Approvals — Foundations and vocabulary",
      ["Approvals is a foundation in Repair Order Workflow because prompt clarity reduces ambiguous outputs and rework. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Automation should fail safe when models refuse or hallucinate. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain approvals aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat approvals as a shared model for decisions. Large language models predict text—they do not inherently know truth. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "approvals-ro-s2",
      "3.2 Approvals — How professionals apply this in practice",
      ["Professionals rarely dispute whether approvals exists—they dispute how automation should fail safe when models refuse or hallucinate. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Large language models predict text—they do not inherently know truth.","When stakes rise, pause for a second opinion or formal review. Retrieval augments models with organization-specific documents. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Versioning prompts is as important as versioning code. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    ),
    section(
      "approvals-ro-s3",
      "3.3 Approvals — Workplace scenarios and documentation",
      ["Scenario: a teammate cites approvals in a meeting, but details in the packet do not match the textbook example. Large language models predict text—they do not inherently know truth. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Retrieval augments models with organization-specific documents.","Good documentation states facts, cites the framework, and records the decision. Versioning prompts is as important as versioning code. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Human review remains responsible for regulated or customer-facing text. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    ),
    section(
      "approvals-ro-s4",
      "3.4 Approvals — Common mistakes and how to avoid them",
      ["Common mistakes around approvals include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Retrieval augments models with organization-specific documents.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Versioning prompts is as important as versioning code. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Human review remains responsible for regulated or customer-facing text. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Tool use can call APIs but expands attack surface if unchecked. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."]
      }
    ),
    section(
      "approvals-ro-s5",
      "3.5 Approvals — Putting the chapter together",
      ["This chapter’s through-line is simple: Approvals connects principles to accountable action. Versioning prompts is as important as versioning code.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Human review remains responsible for regulated or customer-facing text. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits approvals in your field. Tool use can call APIs but expands attack surface if unchecked. Disclosure builds trust when customers interact with AI-assisted content."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    )
    ],
    {
      learningObjectives: ["Define approvals and explain why it matters in Repair Order Workflow","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Approvals connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Data minimization limits what you paste into third-party tools.","Disclosure builds trust when customers interact with AI-assisted content.","Bias in training data appears in recommendations and classifications.","Data minimization limits what you paste into third-party tools.","Disclosure builds trust when customers interact with AI-assisted content."],
      realWorldRelevance: "Strong grasp of approvals reduces rework, supports defensible records, and speeds collaboration across Repair Order Workflow.",
    }
  ),
  chapter(
    "labor-parts",
    4,
    "Labor and Parts",
    [
    section(
      "labor-parts-s1",
      "4.1 Labor and Parts — Foundations and vocabulary",
      ["Labor and Parts is a foundation in Repair Order Workflow because retrieval augments models with organization-specific documents. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Versioning prompts is as important as versioning code. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain labor and parts aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat labor and parts as a shared model for decisions. Human review remains responsible for regulated or customer-facing text. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "labor-parts-s2",
      "4.2 Labor and Parts — How professionals apply this in practice",
      ["Professionals rarely dispute whether labor and parts exists—they dispute how large language models predict text—they do not inherently know truth. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Retrieval augments models with organization-specific documents.","When stakes rise, pause for a second opinion or formal review. Versioning prompts is as important as versioning code. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Human review remains responsible for regulated or customer-facing text. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."]
      }
    ),
    section(
      "labor-parts-s3",
      "4.3 Labor and Parts — Workplace scenarios and documentation",
      ["Scenario: a teammate cites labor and parts in a meeting, but details in the packet do not match the textbook example. Automation should fail safe when models refuse or hallucinate. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Large language models predict text—they do not inherently know truth.","Good documentation states facts, cites the framework, and records the decision. Retrieval augments models with organization-specific documents. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Versioning prompts is as important as versioning code. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."]
      }
    ),
    section(
      "labor-parts-s4",
      "4.4 Labor and Parts — Common mistakes and how to avoid them",
      ["Common mistakes around labor and parts include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Prompt clarity reduces ambiguous outputs and rework.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Automation should fail safe when models refuse or hallucinate. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Large language models predict text—they do not inherently know truth. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Retrieval augments models with organization-specific documents. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    ),
    section(
      "labor-parts-s5",
      "4.5 Labor and Parts — Putting the chapter together",
      ["This chapter’s through-line is simple: Labor and Parts connects principles to accountable action. Evaluation sets measure quality before wide rollout.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Prompt clarity reduces ambiguous outputs and rework. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits labor and parts in your field. Automation should fail safe when models refuse or hallucinate. Large language models predict text—they do not inherently know truth."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."]
      }
    )
    ],
    {
      learningObjectives: ["Define labor and parts and explain why it matters in Repair Order Workflow","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Labor and Parts connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Bias in training data appears in recommendations and classifications.","Data minimization limits what you paste into third-party tools.","Cost scales with tokens; batching and caching affect unit economics.","Bias in training data appears in recommendations and classifications.","Data minimization limits what you paste into third-party tools."],
      realWorldRelevance: "Strong grasp of labor and parts reduces rework, supports defensible records, and speeds collaboration across Repair Order Workflow.",
    }
  ),
  chapter(
    "status-updates",
    5,
    "Status Updates",
    [
    section(
      "status-updates-s1",
      "5.1 Status Updates — Foundations and vocabulary",
      ["Status Updates is a foundation in Repair Order Workflow because versioning prompts is as important as versioning code. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Human review remains responsible for regulated or customer-facing text. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain status updates aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat status updates as a shared model for decisions. Tool use can call APIs but expands attack surface if unchecked. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "status-updates-s2",
      "5.2 Status Updates — How professionals apply this in practice",
      ["Professionals rarely dispute whether status updates exists—they dispute how human review remains responsible for regulated or customer-facing text. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Tool use can call APIs but expands attack surface if unchecked.","When stakes rise, pause for a second opinion or formal review. Disclosure builds trust when customers interact with AI-assisted content. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Data minimization limits what you paste into third-party tools. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    ),
    section(
      "status-updates-s3",
      "5.3 Status Updates — Workplace scenarios and documentation",
      ["Scenario: a teammate cites status updates in a meeting, but details in the packet do not match the textbook example. Tool use can call APIs but expands attack surface if unchecked. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Disclosure builds trust when customers interact with AI-assisted content.","Good documentation states facts, cites the framework, and records the decision. Data minimization limits what you paste into third-party tools. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Bias in training data appears in recommendations and classifications. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."]
      }
    ),
    section(
      "status-updates-s4",
      "5.4 Status Updates — Common mistakes and how to avoid them",
      ["Common mistakes around status updates include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Disclosure builds trust when customers interact with AI-assisted content.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Data minimization limits what you paste into third-party tools. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Bias in training data appears in recommendations and classifications. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Cost scales with tokens; batching and caching affect unit economics. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."]
      }
    ),
    section(
      "status-updates-s5",
      "5.5 Status Updates — Putting the chapter together",
      ["This chapter’s through-line is simple: Status Updates connects principles to accountable action. Data minimization limits what you paste into third-party tools.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Bias in training data appears in recommendations and classifications. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits status updates in your field. Cost scales with tokens; batching and caching affect unit economics. Evaluation sets measure quality before wide rollout."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    )
    ],
    {
      learningObjectives: ["Define status updates and explain why it matters in Repair Order Workflow","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Status Updates connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Disclosure builds trust when customers interact with AI-assisted content.","Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications."],
      realWorldRelevance: "Strong grasp of status updates reduces rework, supports defensible records, and speeds collaboration across Repair Order Workflow.",
    }
  ),
  chapter(
    "comebacks-ro",
    6,
    "Comebacks",
    [
    section(
      "comebacks-ro-s1",
      "6.1 Comebacks — Foundations and vocabulary",
      ["Comebacks is a foundation in Repair Order Workflow because prompt clarity reduces ambiguous outputs and rework. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Automation should fail safe when models refuse or hallucinate. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain comebacks aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat comebacks as a shared model for decisions. Large language models predict text—they do not inherently know truth. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "comebacks-ro-s2",
      "6.2 Comebacks — How professionals apply this in practice",
      ["Professionals rarely dispute whether comebacks exists—they dispute how evaluation sets measure quality before wide rollout. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Prompt clarity reduces ambiguous outputs and rework.","When stakes rise, pause for a second opinion or formal review. Automation should fail safe when models refuse or hallucinate. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Large language models predict text—they do not inherently know truth. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    ),
    section(
      "comebacks-ro-s3",
      "6.3 Comebacks — Workplace scenarios and documentation",
      ["Scenario: a teammate cites comebacks in a meeting, but details in the packet do not match the textbook example. Cost scales with tokens; batching and caching affect unit economics. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Evaluation sets measure quality before wide rollout.","Good documentation states facts, cites the framework, and records the decision. Prompt clarity reduces ambiguous outputs and rework. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Automation should fail safe when models refuse or hallucinate. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code.","Human review remains responsible for regulated or customer-facing text."]
      }
    ),
    section(
      "comebacks-ro-s4",
      "6.4 Comebacks — Common mistakes and how to avoid them",
      ["Common mistakes around comebacks include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Bias in training data appears in recommendations and classifications.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Cost scales with tokens; batching and caching affect unit economics. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Evaluation sets measure quality before wide rollout. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Prompt clarity reduces ambiguous outputs and rework. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents.","Versioning prompts is as important as versioning code."]
      }
    ),
    section(
      "comebacks-ro-s5",
      "6.5 Comebacks — Putting the chapter together",
      ["This chapter’s through-line is simple: Comebacks connects principles to accountable action. Data minimization limits what you paste into third-party tools.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Bias in training data appears in recommendations and classifications. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits comebacks in your field. Cost scales with tokens; batching and caching affect unit economics. Evaluation sets measure quality before wide rollout."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    )
    ],
    {
      learningObjectives: ["Define comebacks and explain why it matters in Repair Order Workflow","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Comebacks connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Prompt clarity reduces ambiguous outputs and rework.","Evaluation sets measure quality before wide rollout.","Automation should fail safe when models refuse or hallucinate.","Prompt clarity reduces ambiguous outputs and rework.","Evaluation sets measure quality before wide rollout."],
      realWorldRelevance: "Strong grasp of comebacks reduces rework, supports defensible records, and speeds collaboration across Repair Order Workflow.",
    }
  ),
  chapter(
    "warranty-ro",
    7,
    "Warranty on RO",
    [
    section(
      "warranty-ro-s1",
      "7.1 Warranty on RO — Foundations and vocabulary",
      ["Warranty on RO is a foundation in Repair Order Workflow because large language models predict text—they do not inherently know truth. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Retrieval augments models with organization-specific documents. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain warranty on ro aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat warranty on ro as a shared model for decisions. Versioning prompts is as important as versioning code. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "warranty-ro-s2",
      "7.2 Warranty on RO — How professionals apply this in practice",
      ["Professionals rarely dispute whether warranty on ro exists—they dispute how automation should fail safe when models refuse or hallucinate. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Large language models predict text—they do not inherently know truth.","When stakes rise, pause for a second opinion or formal review. Retrieval augments models with organization-specific documents. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Versioning prompts is as important as versioning code. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    ),
    section(
      "warranty-ro-s3",
      "7.3 Warranty on RO — Workplace scenarios and documentation",
      ["Scenario: a teammate cites warranty on ro in a meeting, but details in the packet do not match the textbook example. Prompt clarity reduces ambiguous outputs and rework. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Automation should fail safe when models refuse or hallucinate.","Good documentation states facts, cites the framework, and records the decision. Large language models predict text—they do not inherently know truth. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Retrieval augments models with organization-specific documents. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    ),
    section(
      "warranty-ro-s4",
      "7.4 Warranty on RO — Common mistakes and how to avoid them",
      ["Common mistakes around warranty on ro include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Evaluation sets measure quality before wide rollout.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Prompt clarity reduces ambiguous outputs and rework. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Automation should fail safe when models refuse or hallucinate. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Large language models predict text—they do not inherently know truth. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."]
      }
    ),
    section(
      "warranty-ro-s5",
      "7.5 Warranty on RO — Putting the chapter together",
      ["This chapter’s through-line is simple: Warranty on RO connects principles to accountable action. Cost scales with tokens; batching and caching affect unit economics.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Evaluation sets measure quality before wide rollout. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits warranty on ro in your field. Prompt clarity reduces ambiguous outputs and rework. Automation should fail safe when models refuse or hallucinate."], {
        bulletPoints: ["Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth.","Retrieval augments models with organization-specific documents."]
      }
    )
    ],
    {
      learningObjectives: ["Define warranty on ro and explain why it matters in Repair Order Workflow","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Warranty on RO connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout."],
      realWorldRelevance: "Strong grasp of warranty on ro reduces rework, supports defensible records, and speeds collaboration across Repair Order Workflow.",
    }
  ),
  chapter(
    "closing-ro",
    8,
    "Closing the RO",
    [
    section(
      "closing-ro-s1",
      "8.1 Closing the RO — Foundations and vocabulary",
      ["Closing the RO is a foundation in Repair Order Workflow because retrieval augments models with organization-specific documents. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Versioning prompts is as important as versioning code. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain closing the ro aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat closing the ro as a shared model for decisions. Human review remains responsible for regulated or customer-facing text. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."],
        citations: [{"source":"NIST AI Risk Management Framework","url":"https://www.nist.gov/itl/ai-risk-management-framework","note":"Governance vocabulary for workplace AI"}]
      }
    ),
    section(
      "closing-ro-s2",
      "8.2 Closing the RO — How professionals apply this in practice",
      ["Professionals rarely dispute whether closing the ro exists—they dispute how large language models predict text—they do not inherently know truth. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Retrieval augments models with organization-specific documents.","When stakes rise, pause for a second opinion or formal review. Versioning prompts is as important as versioning code. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Human review remains responsible for regulated or customer-facing text. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."]
      }
    ),
    section(
      "closing-ro-s3",
      "8.3 Closing the RO — Workplace scenarios and documentation",
      ["Scenario: a teammate cites closing the ro in a meeting, but details in the packet do not match the textbook example. Automation should fail safe when models refuse or hallucinate. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Large language models predict text—they do not inherently know truth.","Good documentation states facts, cites the framework, and records the decision. Retrieval augments models with organization-specific documents. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Versioning prompts is as important as versioning code. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate.","Large language models predict text—they do not inherently know truth."]
      }
    ),
    section(
      "closing-ro-s4",
      "8.4 Closing the RO — Common mistakes and how to avoid them",
      ["Common mistakes around closing the ro include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Prompt clarity reduces ambiguous outputs and rework.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Automation should fail safe when models refuse or hallucinate. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Large language models predict text—they do not inherently know truth. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Retrieval augments models with organization-specific documents. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework.","Automation should fail safe when models refuse or hallucinate."]
      }
    ),
    section(
      "closing-ro-s5",
      "8.5 Closing the RO — Putting the chapter together",
      ["This chapter’s through-line is simple: Closing the RO connects principles to accountable action. Evaluation sets measure quality before wide rollout.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Prompt clarity reduces ambiguous outputs and rework. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits closing the ro in your field. Automation should fail safe when models refuse or hallucinate. Large language models predict text—they do not inherently know truth."], {
        bulletPoints: ["Data minimization limits what you paste into third-party tools.","Bias in training data appears in recommendations and classifications.","Cost scales with tokens; batching and caching affect unit economics.","Evaluation sets measure quality before wide rollout.","Prompt clarity reduces ambiguous outputs and rework."]
      }
    )
    ],
    {
      learningObjectives: ["Define closing the ro and explain why it matters in Repair Order Workflow","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Closing the RO connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Bias in training data appears in recommendations and classifications.","Data minimization limits what you paste into third-party tools.","Cost scales with tokens; batching and caching affect unit economics.","Bias in training data appears in recommendations and classifications.","Data minimization limits what you paste into third-party tools."],
      realWorldRelevance: "Strong grasp of closing the ro reduces rework, supports defensible records, and speeds collaboration across Repair Order Workflow.",
    }
  )
];
