import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const CRM_TEXTBOOK_INTRO: TextbookIntro = {
  title: "CRM Fundamentals",
  subtitle: "ForgEd workforce textbook — CRM Fundamentals",
  paragraphs: [
    "This ForgEd digital textbook presents CRM Fundamentals at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const CRM_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "crm-purpose",
    1,
    "Why CRMs Matter",
    [
    section(
      "crm-purpose-s1",
      "1.1 Why CRMs Matter — Foundations and vocabulary",
      ["Why CRMs Matter is a foundation in CRM Fundamentals because negotiation trades concessions with documented give-and-get. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Follow-up cadences respect buyer attention without harassment. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain why crms matter aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat why crms matter as a shared model for decisions. Proposals align scope, price, timeline, and success criteria. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "crm-purpose-s2",
      "1.2 Why CRMs Matter — How professionals apply this in practice",
      ["Professionals rarely dispute whether why crms matter exists—they dispute how follow-up cadences respect buyer attention without harassment. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Proposals align scope, price, timeline, and success criteria.","When stakes rise, pause for a second opinion or formal review. Active listening beats scripted monologues in complex deals. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Pipeline stages should mean observable buyer behaviors. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."]
      }
    ),
    section(
      "crm-purpose-s3",
      "1.3 Why CRMs Matter — Workplace scenarios and documentation",
      ["Scenario: a teammate cites why crms matter in a meeting, but details in the packet do not match the textbook example. Proposals align scope, price, timeline, and success criteria. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Active listening beats scripted monologues in complex deals.","Good documentation states facts, cites the framework, and records the decision. Pipeline stages should mean observable buyer behaviors. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Social proof reduces perceived risk for new buyers. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."]
      }
    ),
    section(
      "crm-purpose-s4",
      "1.4 Why CRMs Matter — Common mistakes and how to avoid them",
      ["Common mistakes around why crms matter include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Active listening beats scripted monologues in complex deals.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Pipeline stages should mean observable buyer behaviors. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Social proof reduces perceived risk for new buyers. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Ethical selling refuses to misrepresent capabilities or pricing. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."]
      }
    ),
    section(
      "crm-purpose-s5",
      "1.5 Why CRMs Matter — Putting the chapter together",
      ["This chapter’s through-line is simple: Why CRMs Matter connects principles to accountable action. Pipeline stages should mean observable buyer behaviors.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Social proof reduces perceived risk for new buyers. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits why crms matter in your field. Ethical selling refuses to misrepresent capabilities or pricing. Objections often mask timing, budget, or trust—not product flaws."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."]
      }
    )
    ],
    {
      learningObjectives: ["Define why crms matter and explain why it matters in CRM Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Why CRMs Matter connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."],
      realWorldRelevance: "Strong grasp of why crms matter reduces rework, supports defensible records, and speeds collaboration across CRM Fundamentals.",
    }
  ),
  chapter(
    "data-model",
    2,
    "CRM Data Model",
    [
    section(
      "data-model-s1",
      "2.1 CRM Data Model — Foundations and vocabulary",
      ["CRM Data Model is a foundation in CRM Fundamentals because metrics like win rate and cycle length guide coaching. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Negotiation trades concessions with documented give-and-get. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain crm data model aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat crm data model as a shared model for decisions. Follow-up cadences respect buyer attention without harassment. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "data-model-s2",
      "2.2 CRM Data Model — How professionals apply this in practice",
      ["Professionals rarely dispute whether crm data model exists—they dispute how negotiation trades concessions with documented give-and-get. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Follow-up cadences respect buyer attention without harassment.","When stakes rise, pause for a second opinion or formal review. Proposals align scope, price, timeline, and success criteria. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Active listening beats scripted monologues in complex deals. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."]
      }
    ),
    section(
      "data-model-s3",
      "2.3 CRM Data Model — Workplace scenarios and documentation",
      ["Scenario: a teammate cites crm data model in a meeting, but details in the packet do not match the textbook example. Follow-up cadences respect buyer attention without harassment. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Proposals align scope, price, timeline, and success criteria.","Good documentation states facts, cites the framework, and records the decision. Active listening beats scripted monologues in complex deals. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Pipeline stages should mean observable buyer behaviors. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."]
      }
    ),
    section(
      "data-model-s4",
      "2.4 CRM Data Model — Common mistakes and how to avoid them",
      ["Common mistakes around crm data model include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Proposals align scope, price, timeline, and success criteria.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Active listening beats scripted monologues in complex deals. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Pipeline stages should mean observable buyer behaviors. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Social proof reduces perceived risk for new buyers. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."]
      }
    ),
    section(
      "data-model-s5",
      "2.5 CRM Data Model — Putting the chapter together",
      ["This chapter’s through-line is simple: CRM Data Model connects principles to accountable action. Active listening beats scripted monologues in complex deals.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Pipeline stages should mean observable buyer behaviors. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits crm data model in your field. Social proof reduces perceived risk for new buyers. Ethical selling refuses to misrepresent capabilities or pricing."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."]
      }
    )
    ],
    {
      learningObjectives: ["Define crm data model and explain why it matters in CRM Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "CRM Data Model connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."],
      realWorldRelevance: "Strong grasp of crm data model reduces rework, supports defensible records, and speeds collaboration across CRM Fundamentals.",
    }
  ),
  chapter(
    "stages",
    3,
    "Pipeline Stages",
    [
    section(
      "stages-s1",
      "3.1 Pipeline Stages — Foundations and vocabulary",
      ["Pipeline Stages is a foundation in CRM Fundamentals because negotiation trades concessions with documented give-and-get. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Follow-up cadences respect buyer attention without harassment. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain pipeline stages aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat pipeline stages as a shared model for decisions. Proposals align scope, price, timeline, and success criteria. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "stages-s2",
      "3.2 Pipeline Stages — How professionals apply this in practice",
      ["Professionals rarely dispute whether pipeline stages exists—they dispute how follow-up cadences respect buyer attention without harassment. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Proposals align scope, price, timeline, and success criteria.","When stakes rise, pause for a second opinion or formal review. Active listening beats scripted monologues in complex deals. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Social proof reduces perceived risk for new buyers. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."]
      }
    ),
    section(
      "stages-s3",
      "3.3 Pipeline Stages — Workplace scenarios and documentation",
      ["Scenario: a teammate cites pipeline stages in a meeting, but details in the packet do not match the textbook example. Proposals align scope, price, timeline, and success criteria. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Active listening beats scripted monologues in complex deals.","Good documentation states facts, cites the framework, and records the decision. Social proof reduces perceived risk for new buyers. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Ethical selling refuses to misrepresent capabilities or pricing. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."]
      }
    ),
    section(
      "stages-s4",
      "3.4 Pipeline Stages — Common mistakes and how to avoid them",
      ["Common mistakes around pipeline stages include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Active listening beats scripted monologues in complex deals.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Social proof reduces perceived risk for new buyers. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Ethical selling refuses to misrepresent capabilities or pricing. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Objections often mask timing, budget, or trust—not product flaws. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."]
      }
    ),
    section(
      "stages-s5",
      "3.5 Pipeline Stages — Putting the chapter together",
      ["This chapter’s through-line is simple: Pipeline Stages connects principles to accountable action. Social proof reduces perceived risk for new buyers.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Ethical selling refuses to misrepresent capabilities or pricing. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits pipeline stages in your field. Objections often mask timing, budget, or trust—not product flaws. Pipeline stages should mean observable buyer behaviors."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."]
      }
    )
    ],
    {
      learningObjectives: ["Define pipeline stages and explain why it matters in CRM Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Pipeline Stages connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Pipeline stages should mean observable buyer behaviors.","Onboarding handoffs prevent churn right after the signature.","CRM hygiene makes forecasts trustworthy for managers and reps.","Pipeline stages should mean observable buyer behaviors."],
      realWorldRelevance: "Strong grasp of pipeline stages reduces rework, supports defensible records, and speeds collaboration across CRM Fundamentals.",
    }
  ),
  chapter(
    "activities",
    4,
    "Logging Activities",
    [
    section(
      "activities-s1",
      "4.1 Logging Activities — Foundations and vocabulary",
      ["Logging Activities is a foundation in CRM Fundamentals because ethical selling refuses to misrepresent capabilities or pricing. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Objections often mask timing, budget, or trust—not product flaws. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain logging activities aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat logging activities as a shared model for decisions. CRM hygiene makes forecasts trustworthy for managers and reps. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "activities-s2",
      "4.2 Logging Activities — How professionals apply this in practice",
      ["Professionals rarely dispute whether logging activities exists—they dispute how objections often mask timing, budget, or trust—not product flaws. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. CRM hygiene makes forecasts trustworthy for managers and reps.","When stakes rise, pause for a second opinion or formal review. Onboarding handoffs prevent churn right after the signature. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Discovery questions diagnose pain before pitching features. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."]
      }
    ),
    section(
      "activities-s3",
      "4.3 Logging Activities — Workplace scenarios and documentation",
      ["Scenario: a teammate cites logging activities in a meeting, but details in the packet do not match the textbook example. CRM hygiene makes forecasts trustworthy for managers and reps. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Onboarding handoffs prevent churn right after the signature.","Good documentation states facts, cites the framework, and records the decision. Discovery questions diagnose pain before pitching features. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Metrics like win rate and cycle length guide coaching. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals."]
      }
    ),
    section(
      "activities-s4",
      "4.4 Logging Activities — Common mistakes and how to avoid them",
      ["Common mistakes around logging activities include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Onboarding handoffs prevent churn right after the signature.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Discovery questions diagnose pain before pitching features. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Metrics like win rate and cycle length guide coaching. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Negotiation trades concessions with documented give-and-get. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."]
      }
    ),
    section(
      "activities-s5",
      "4.5 Logging Activities — Putting the chapter together",
      ["This chapter’s through-line is simple: Logging Activities connects principles to accountable action. Discovery questions diagnose pain before pitching features.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Metrics like win rate and cycle length guide coaching. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits logging activities in your field. Negotiation trades concessions with documented give-and-get. Follow-up cadences respect buyer attention without harassment."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."]
      }
    )
    ],
    {
      learningObjectives: ["Define logging activities and explain why it matters in CRM Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Logging Activities connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Discovery questions diagnose pain before pitching features.","Onboarding handoffs prevent churn right after the signature.","Metrics like win rate and cycle length guide coaching.","Discovery questions diagnose pain before pitching features.","Onboarding handoffs prevent churn right after the signature."],
      realWorldRelevance: "Strong grasp of logging activities reduces rework, supports defensible records, and speeds collaboration across CRM Fundamentals.",
    }
  ),
  chapter(
    "reports-crm",
    5,
    "CRM Reporting",
    [
    section(
      "reports-crm-s1",
      "5.1 CRM Reporting — Foundations and vocabulary",
      ["CRM Reporting is a foundation in CRM Fundamentals because negotiation trades concessions with documented give-and-get. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Follow-up cadences respect buyer attention without harassment. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain crm reporting aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat crm reporting as a shared model for decisions. Proposals align scope, price, timeline, and success criteria. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "reports-crm-s2",
      "5.2 CRM Reporting — How professionals apply this in practice",
      ["Professionals rarely dispute whether crm reporting exists—they dispute how metrics like win rate and cycle length guide coaching. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Negotiation trades concessions with documented give-and-get.","When stakes rise, pause for a second opinion or formal review. Follow-up cadences respect buyer attention without harassment. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Proposals align scope, price, timeline, and success criteria. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "reports-crm-s3",
      "5.3 CRM Reporting — Workplace scenarios and documentation",
      ["Scenario: a teammate cites crm reporting in a meeting, but details in the packet do not match the textbook example. Discovery questions diagnose pain before pitching features. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Metrics like win rate and cycle length guide coaching.","Good documentation states facts, cites the framework, and records the decision. Negotiation trades concessions with documented give-and-get. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Follow-up cadences respect buyer attention without harassment. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    ),
    section(
      "reports-crm-s4",
      "5.4 CRM Reporting — Common mistakes and how to avoid them",
      ["Common mistakes around crm reporting include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Onboarding handoffs prevent churn right after the signature.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Discovery questions diagnose pain before pitching features. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Metrics like win rate and cycle length guide coaching. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Negotiation trades concessions with documented give-and-get. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps."]
      }
    ),
    section(
      "reports-crm-s5",
      "5.5 CRM Reporting — Putting the chapter together",
      ["This chapter’s through-line is simple: CRM Reporting connects principles to accountable action. CRM hygiene makes forecasts trustworthy for managers and reps.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Onboarding handoffs prevent churn right after the signature. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits crm reporting in your field. Discovery questions diagnose pain before pitching features. Metrics like win rate and cycle length guide coaching."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    )
    ],
    {
      learningObjectives: ["Define crm reporting and explain why it matters in CRM Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "CRM Reporting connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Pipeline stages should mean observable buyer behaviors.","Active listening beats scripted monologues in complex deals.","Social proof reduces perceived risk for new buyers.","Pipeline stages should mean observable buyer behaviors.","Active listening beats scripted monologues in complex deals."],
      realWorldRelevance: "Strong grasp of crm reporting reduces rework, supports defensible records, and speeds collaboration across CRM Fundamentals.",
    }
  ),
  chapter(
    "hygiene",
    6,
    "Data Hygiene",
    [
    section(
      "hygiene-s1",
      "6.1 Data Hygiene — Foundations and vocabulary",
      ["Data Hygiene is a foundation in CRM Fundamentals because onboarding handoffs prevent churn right after the signature. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Discovery questions diagnose pain before pitching features. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain data hygiene aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat data hygiene as a shared model for decisions. Metrics like win rate and cycle length guide coaching. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "hygiene-s2",
      "6.2 Data Hygiene — How professionals apply this in practice",
      ["Professionals rarely dispute whether data hygiene exists—they dispute how discovery questions diagnose pain before pitching features. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Metrics like win rate and cycle length guide coaching.","When stakes rise, pause for a second opinion or formal review. Negotiation trades concessions with documented give-and-get. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Follow-up cadences respect buyer attention without harassment. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."]
      }
    ),
    section(
      "hygiene-s3",
      "6.3 Data Hygiene — Workplace scenarios and documentation",
      ["Scenario: a teammate cites data hygiene in a meeting, but details in the packet do not match the textbook example. Metrics like win rate and cycle length guide coaching. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Negotiation trades concessions with documented give-and-get.","Good documentation states facts, cites the framework, and records the decision. Follow-up cadences respect buyer attention without harassment. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Proposals align scope, price, timeline, and success criteria. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."]
      }
    ),
    section(
      "hygiene-s4",
      "6.4 Data Hygiene — Common mistakes and how to avoid them",
      ["Common mistakes around data hygiene include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Negotiation trades concessions with documented give-and-get.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Follow-up cadences respect buyer attention without harassment. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Proposals align scope, price, timeline, and success criteria. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Active listening beats scripted monologues in complex deals. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."]
      }
    ),
    section(
      "hygiene-s5",
      "6.5 Data Hygiene — Putting the chapter together",
      ["This chapter’s through-line is simple: Data Hygiene connects principles to accountable action. Follow-up cadences respect buyer attention without harassment.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Proposals align scope, price, timeline, and success criteria. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits data hygiene in your field. Active listening beats scripted monologues in complex deals. Pipeline stages should mean observable buyer behaviors."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."]
      }
    )
    ],
    {
      learningObjectives: ["Define data hygiene and explain why it matters in CRM Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Data Hygiene connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Onboarding handoffs prevent churn right after the signature.","CRM hygiene makes forecasts trustworthy for managers and reps.","Discovery questions diagnose pain before pitching features.","Onboarding handoffs prevent churn right after the signature.","CRM hygiene makes forecasts trustworthy for managers and reps."],
      realWorldRelevance: "Strong grasp of data hygiene reduces rework, supports defensible records, and speeds collaboration across CRM Fundamentals.",
    }
  ),
  chapter(
    "automation-crm",
    7,
    "CRM Automation",
    [
    section(
      "automation-crm-s1",
      "7.1 CRM Automation — Foundations and vocabulary",
      ["CRM Automation is a foundation in CRM Fundamentals because active listening beats scripted monologues in complex deals. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Pipeline stages should mean observable buyer behaviors. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain crm automation aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat crm automation as a shared model for decisions. Social proof reduces perceived risk for new buyers. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "automation-crm-s2",
      "7.2 CRM Automation — How professionals apply this in practice",
      ["Professionals rarely dispute whether crm automation exists—they dispute how pipeline stages should mean observable buyer behaviors. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Social proof reduces perceived risk for new buyers.","When stakes rise, pause for a second opinion or formal review. Ethical selling refuses to misrepresent capabilities or pricing. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Objections often mask timing, budget, or trust—not product flaws. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."]
      }
    ),
    section(
      "automation-crm-s3",
      "7.3 CRM Automation — Workplace scenarios and documentation",
      ["Scenario: a teammate cites crm automation in a meeting, but details in the packet do not match the textbook example. Social proof reduces perceived risk for new buyers. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Ethical selling refuses to misrepresent capabilities or pricing.","Good documentation states facts, cites the framework, and records the decision. Objections often mask timing, budget, or trust—not product flaws. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. CRM hygiene makes forecasts trustworthy for managers and reps. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."]
      }
    ),
    section(
      "automation-crm-s4",
      "7.4 CRM Automation — Common mistakes and how to avoid them",
      ["Common mistakes around crm automation include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Ethical selling refuses to misrepresent capabilities or pricing.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Objections often mask timing, budget, or trust—not product flaws. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. CRM hygiene makes forecasts trustworthy for managers and reps. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Onboarding handoffs prevent churn right after the signature. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."]
      }
    ),
    section(
      "automation-crm-s5",
      "7.5 CRM Automation — Putting the chapter together",
      ["This chapter’s through-line is simple: CRM Automation connects principles to accountable action. Objections often mask timing, budget, or trust—not product flaws.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. CRM hygiene makes forecasts trustworthy for managers and reps. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits crm automation in your field. Onboarding handoffs prevent churn right after the signature. Discovery questions diagnose pain before pitching features."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."]
      }
    )
    ],
    {
      learningObjectives: ["Define crm automation and explain why it matters in CRM Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "CRM Automation connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."],
      realWorldRelevance: "Strong grasp of crm automation reduces rework, supports defensible records, and speeds collaboration across CRM Fundamentals.",
    }
  ),
  chapter(
    "crm-adoption",
    8,
    "Team Adoption",
    [
    section(
      "crm-adoption-s1",
      "8.1 Team Adoption — Foundations and vocabulary",
      ["Team Adoption is a foundation in CRM Fundamentals because social proof reduces perceived risk for new buyers. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Ethical selling refuses to misrepresent capabilities or pricing. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain team adoption aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat team adoption as a shared model for decisions. Objections often mask timing, budget, or trust—not product flaws. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "crm-adoption-s2",
      "8.2 Team Adoption — How professionals apply this in practice",
      ["Professionals rarely dispute whether team adoption exists—they dispute how ethical selling refuses to misrepresent capabilities or pricing. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Objections often mask timing, budget, or trust—not product flaws.","When stakes rise, pause for a second opinion or formal review. CRM hygiene makes forecasts trustworthy for managers and reps. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Onboarding handoffs prevent churn right after the signature. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors."]
      }
    ),
    section(
      "crm-adoption-s3",
      "8.3 Team Adoption — Workplace scenarios and documentation",
      ["Scenario: a teammate cites team adoption in a meeting, but details in the packet do not match the textbook example. Objections often mask timing, budget, or trust—not product flaws. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. CRM hygiene makes forecasts trustworthy for managers and reps.","Good documentation states facts, cites the framework, and records the decision. Onboarding handoffs prevent churn right after the signature. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Discovery questions diagnose pain before pitching features. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    ),
    section(
      "crm-adoption-s4",
      "8.4 Team Adoption — Common mistakes and how to avoid them",
      ["Common mistakes around team adoption include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. CRM hygiene makes forecasts trustworthy for managers and reps.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Onboarding handoffs prevent churn right after the signature. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Discovery questions diagnose pain before pitching features. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Metrics like win rate and cycle length guide coaching. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    ),
    section(
      "crm-adoption-s5",
      "8.5 Team Adoption — Putting the chapter together",
      ["This chapter’s through-line is simple: Team Adoption connects principles to accountable action. Onboarding handoffs prevent churn right after the signature.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Discovery questions diagnose pain before pitching features. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits team adoption in your field. Metrics like win rate and cycle length guide coaching. Negotiation trades concessions with documented give-and-get."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors."]
      }
    )
    ],
    {
      learningObjectives: ["Define team adoption and explain why it matters in CRM Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Team Adoption connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Follow-up cadences respect buyer attention without harassment.","Negotiation trades concessions with documented give-and-get.","Proposals align scope, price, timeline, and success criteria.","Follow-up cadences respect buyer attention without harassment.","Negotiation trades concessions with documented give-and-get."],
      realWorldRelevance: "Strong grasp of team adoption reduces rework, supports defensible records, and speeds collaboration across CRM Fundamentals.",
    }
  )
];
