import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const SVCCOM_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Customer Communication",
  subtitle: "ForgEd workforce textbook — Customer Communication",
  paragraphs: [
    "This ForgEd digital textbook presents Customer Communication at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const SVCCOM_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "greeting",
    1,
    "Professional Greeting",
    [
    section(
      "greeting-s1",
      "1.1 Professional Greeting — Foundations and vocabulary",
      ["Professional Greeting is a foundation in Customer Communication because proposals align scope, price, timeline, and success criteria. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Active listening beats scripted monologues in complex deals. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain professional greeting aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat professional greeting as a shared model for decisions. Pipeline stages should mean observable buyer behaviors. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "greeting-s2",
      "1.2 Professional Greeting — How professionals apply this in practice",
      ["Professionals rarely dispute whether professional greeting exists—they dispute how active listening beats scripted monologues in complex deals. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Pipeline stages should mean observable buyer behaviors.","When stakes rise, pause for a second opinion or formal review. Social proof reduces perceived risk for new buyers. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Ethical selling refuses to misrepresent capabilities or pricing. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."]
      }
    ),
    section(
      "greeting-s3",
      "1.3 Professional Greeting — Workplace scenarios and documentation",
      ["Scenario: a teammate cites professional greeting in a meeting, but details in the packet do not match the textbook example. Pipeline stages should mean observable buyer behaviors. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Social proof reduces perceived risk for new buyers.","Good documentation states facts, cites the framework, and records the decision. Ethical selling refuses to misrepresent capabilities or pricing. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Objections often mask timing, budget, or trust—not product flaws. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    ),
    section(
      "greeting-s4",
      "1.4 Professional Greeting — Common mistakes and how to avoid them",
      ["Common mistakes around professional greeting include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Social proof reduces perceived risk for new buyers.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Ethical selling refuses to misrepresent capabilities or pricing. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Objections often mask timing, budget, or trust—not product flaws. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. CRM hygiene makes forecasts trustworthy for managers and reps. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."]
      }
    ),
    section(
      "greeting-s5",
      "1.5 Professional Greeting — Putting the chapter together",
      ["This chapter’s through-line is simple: Professional Greeting connects principles to accountable action. Ethical selling refuses to misrepresent capabilities or pricing.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Objections often mask timing, budget, or trust—not product flaws. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits professional greeting in your field. CRM hygiene makes forecasts trustworthy for managers and reps. Onboarding handoffs prevent churn right after the signature."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."]
      }
    )
    ],
    {
      learningObjectives: ["Define professional greeting and explain why it matters in Customer Communication","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Professional Greeting connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."],
      realWorldRelevance: "Strong grasp of professional greeting reduces rework, supports defensible records, and speeds collaboration across Customer Communication.",
    }
  ),
  chapter(
    "explain-repairs",
    2,
    "Explaining Repairs",
    [
    section(
      "explain-repairs-s1",
      "2.1 Explaining Repairs — Foundations and vocabulary",
      ["Explaining Repairs is a foundation in Customer Communication because metrics like win rate and cycle length guide coaching. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Negotiation trades concessions with documented give-and-get. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain explaining repairs aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat explaining repairs as a shared model for decisions. Follow-up cadences respect buyer attention without harassment. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "explain-repairs-s2",
      "2.2 Explaining Repairs — How professionals apply this in practice",
      ["Professionals rarely dispute whether explaining repairs exists—they dispute how negotiation trades concessions with documented give-and-get. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Follow-up cadences respect buyer attention without harassment.","When stakes rise, pause for a second opinion or formal review. Proposals align scope, price, timeline, and success criteria. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Active listening beats scripted monologues in complex deals. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."]
      }
    ),
    section(
      "explain-repairs-s3",
      "2.3 Explaining Repairs — Workplace scenarios and documentation",
      ["Scenario: a teammate cites explaining repairs in a meeting, but details in the packet do not match the textbook example. Follow-up cadences respect buyer attention without harassment. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Proposals align scope, price, timeline, and success criteria.","Good documentation states facts, cites the framework, and records the decision. Active listening beats scripted monologues in complex deals. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Pipeline stages should mean observable buyer behaviors. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps."]
      }
    ),
    section(
      "explain-repairs-s4",
      "2.4 Explaining Repairs — Common mistakes and how to avoid them",
      ["Common mistakes around explaining repairs include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Proposals align scope, price, timeline, and success criteria.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Active listening beats scripted monologues in complex deals. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Pipeline stages should mean observable buyer behaviors. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Social proof reduces perceived risk for new buyers. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    ),
    section(
      "explain-repairs-s5",
      "2.5 Explaining Repairs — Putting the chapter together",
      ["This chapter’s through-line is simple: Explaining Repairs connects principles to accountable action. Active listening beats scripted monologues in complex deals.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Pipeline stages should mean observable buyer behaviors. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits explaining repairs in your field. Social proof reduces perceived risk for new buyers. Ethical selling refuses to misrepresent capabilities or pricing."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."]
      }
    )
    ],
    {
      learningObjectives: ["Define explaining repairs and explain why it matters in Customer Communication","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Explaining Repairs connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."],
      realWorldRelevance: "Strong grasp of explaining repairs reduces rework, supports defensible records, and speeds collaboration across Customer Communication.",
    }
  ),
  chapter(
    "time-estimates",
    3,
    "Time Estimates",
    [
    section(
      "time-estimates-s1",
      "3.1 Time Estimates — Foundations and vocabulary",
      ["Time Estimates is a foundation in Customer Communication because metrics like win rate and cycle length guide coaching. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Negotiation trades concessions with documented give-and-get. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain time estimates aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat time estimates as a shared model for decisions. Follow-up cadences respect buyer attention without harassment. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Proposals align scope, price, timeline, and success criteria."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "time-estimates-s2",
      "3.2 Time Estimates — How professionals apply this in practice",
      ["Professionals rarely dispute whether time estimates exists—they dispute how discovery questions diagnose pain before pitching features. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Metrics like win rate and cycle length guide coaching.","When stakes rise, pause for a second opinion or formal review. Negotiation trades concessions with documented give-and-get. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Follow-up cadences respect buyer attention without harassment. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "time-estimates-s3",
      "3.3 Time Estimates — Workplace scenarios and documentation",
      ["Scenario: a teammate cites time estimates in a meeting, but details in the packet do not match the textbook example. Onboarding handoffs prevent churn right after the signature. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Discovery questions diagnose pain before pitching features.","Good documentation states facts, cites the framework, and records the decision. Metrics like win rate and cycle length guide coaching. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Negotiation trades concessions with documented give-and-get. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Proposals align scope, price, timeline, and success criteria.","CRM hygiene makes forecasts trustworthy for managers and reps."]
      }
    ),
    section(
      "time-estimates-s4",
      "3.4 Time Estimates — Common mistakes and how to avoid them",
      ["Common mistakes around time estimates include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. CRM hygiene makes forecasts trustworthy for managers and reps.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Onboarding handoffs prevent churn right after the signature. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Discovery questions diagnose pain before pitching features. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Metrics like win rate and cycle length guide coaching. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Proposals align scope, price, timeline, and success criteria."]
      }
    ),
    section(
      "time-estimates-s5",
      "3.5 Time Estimates — Putting the chapter together",
      ["This chapter’s through-line is simple: Time Estimates connects principles to accountable action. Proposals align scope, price, timeline, and success criteria.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. CRM hygiene makes forecasts trustworthy for managers and reps. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits time estimates in your field. Onboarding handoffs prevent churn right after the signature. Discovery questions diagnose pain before pitching features."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    )
    ],
    {
      learningObjectives: ["Define time estimates and explain why it matters in Customer Communication","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Time Estimates connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Pipeline stages should mean observable buyer behaviors.","Active listening beats scripted monologues in complex deals.","Social proof reduces perceived risk for new buyers.","Pipeline stages should mean observable buyer behaviors.","Active listening beats scripted monologues in complex deals."],
      realWorldRelevance: "Strong grasp of time estimates reduces rework, supports defensible records, and speeds collaboration across Customer Communication.",
    }
  ),
  chapter(
    "cost-transparency",
    4,
    "Cost Transparency",
    [
    section(
      "cost-transparency-s1",
      "4.1 Cost Transparency — Foundations and vocabulary",
      ["Cost Transparency is a foundation in Customer Communication because onboarding handoffs prevent churn right after the signature. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Discovery questions diagnose pain before pitching features. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain cost transparency aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat cost transparency as a shared model for decisions. Metrics like win rate and cycle length guide coaching. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "cost-transparency-s2",
      "4.2 Cost Transparency — How professionals apply this in practice",
      ["Professionals rarely dispute whether cost transparency exists—they dispute how discovery questions diagnose pain before pitching features. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Metrics like win rate and cycle length guide coaching.","When stakes rise, pause for a second opinion or formal review. Negotiation trades concessions with documented give-and-get. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Follow-up cadences respect buyer attention without harassment. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."]
      }
    ),
    section(
      "cost-transparency-s3",
      "4.3 Cost Transparency — Workplace scenarios and documentation",
      ["Scenario: a teammate cites cost transparency in a meeting, but details in the packet do not match the textbook example. Metrics like win rate and cycle length guide coaching. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Negotiation trades concessions with documented give-and-get.","Good documentation states facts, cites the framework, and records the decision. Follow-up cadences respect buyer attention without harassment. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Proposals align scope, price, timeline, and success criteria. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."]
      }
    ),
    section(
      "cost-transparency-s4",
      "4.4 Cost Transparency — Common mistakes and how to avoid them",
      ["Common mistakes around cost transparency include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Negotiation trades concessions with documented give-and-get.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Follow-up cadences respect buyer attention without harassment. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Proposals align scope, price, timeline, and success criteria. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Active listening beats scripted monologues in complex deals. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."]
      }
    ),
    section(
      "cost-transparency-s5",
      "4.5 Cost Transparency — Putting the chapter together",
      ["This chapter’s through-line is simple: Cost Transparency connects principles to accountable action. Follow-up cadences respect buyer attention without harassment.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Proposals align scope, price, timeline, and success criteria. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits cost transparency in your field. Active listening beats scripted monologues in complex deals. Pipeline stages should mean observable buyer behaviors."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."]
      }
    )
    ],
    {
      learningObjectives: ["Define cost transparency and explain why it matters in Customer Communication","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Cost Transparency connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Onboarding handoffs prevent churn right after the signature.","CRM hygiene makes forecasts trustworthy for managers and reps.","Discovery questions diagnose pain before pitching features.","Onboarding handoffs prevent churn right after the signature.","CRM hygiene makes forecasts trustworthy for managers and reps."],
      realWorldRelevance: "Strong grasp of cost transparency reduces rework, supports defensible records, and speeds collaboration across Customer Communication.",
    }
  ),
  chapter(
    "phone-service",
    5,
    "Phone Skills",
    [
    section(
      "phone-service-s1",
      "5.1 Phone Skills — Foundations and vocabulary",
      ["Phone Skills is a foundation in Customer Communication because pipeline stages should mean observable buyer behaviors. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Social proof reduces perceived risk for new buyers. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain phone skills aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat phone skills as a shared model for decisions. Ethical selling refuses to misrepresent capabilities or pricing. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "phone-service-s2",
      "5.2 Phone Skills — How professionals apply this in practice",
      ["Professionals rarely dispute whether phone skills exists—they dispute how active listening beats scripted monologues in complex deals. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Pipeline stages should mean observable buyer behaviors.","When stakes rise, pause for a second opinion or formal review. Social proof reduces perceived risk for new buyers. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Ethical selling refuses to misrepresent capabilities or pricing. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "phone-service-s3",
      "5.3 Phone Skills — Workplace scenarios and documentation",
      ["Scenario: a teammate cites phone skills in a meeting, but details in the packet do not match the textbook example. Proposals align scope, price, timeline, and success criteria. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Active listening beats scripted monologues in complex deals.","Good documentation states facts, cites the framework, and records the decision. Pipeline stages should mean observable buyer behaviors. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Social proof reduces perceived risk for new buyers. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    ),
    section(
      "phone-service-s4",
      "5.4 Phone Skills — Common mistakes and how to avoid them",
      ["Common mistakes around phone skills include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Follow-up cadences respect buyer attention without harassment.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Proposals align scope, price, timeline, and success criteria. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Active listening beats scripted monologues in complex deals. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Pipeline stages should mean observable buyer behaviors. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps."]
      }
    ),
    section(
      "phone-service-s5",
      "5.5 Phone Skills — Putting the chapter together",
      ["This chapter’s through-line is simple: Phone Skills connects principles to accountable action. Negotiation trades concessions with documented give-and-get.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Follow-up cadences respect buyer attention without harassment. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits phone skills in your field. Proposals align scope, price, timeline, and success criteria. Active listening beats scripted monologues in complex deals."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    )
    ],
    {
      learningObjectives: ["Define phone skills and explain why it matters in Customer Communication","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Phone Skills connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Pipeline stages should mean observable buyer behaviors.","Active listening beats scripted monologues in complex deals.","Social proof reduces perceived risk for new buyers.","Pipeline stages should mean observable buyer behaviors.","Active listening beats scripted monologues in complex deals."],
      realWorldRelevance: "Strong grasp of phone skills reduces rework, supports defensible records, and speeds collaboration across Customer Communication.",
    }
  ),
  chapter(
    "text-updates",
    6,
    "Text Updates",
    [
    section(
      "text-updates-s1",
      "6.1 Text Updates — Foundations and vocabulary",
      ["Text Updates is a foundation in Customer Communication because objections often mask timing, budget, or trust—not product flaws. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: CRM hygiene makes forecasts trustworthy for managers and reps. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain text updates aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat text updates as a shared model for decisions. Onboarding handoffs prevent churn right after the signature. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "text-updates-s2",
      "6.2 Text Updates — How professionals apply this in practice",
      ["Professionals rarely dispute whether text updates exists—they dispute how ethical selling refuses to misrepresent capabilities or pricing. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Objections often mask timing, budget, or trust—not product flaws.","When stakes rise, pause for a second opinion or formal review. CRM hygiene makes forecasts trustworthy for managers and reps. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Onboarding handoffs prevent churn right after the signature. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps."]
      }
    ),
    section(
      "text-updates-s3",
      "6.3 Text Updates — Workplace scenarios and documentation",
      ["Scenario: a teammate cites text updates in a meeting, but details in the packet do not match the textbook example. Social proof reduces perceived risk for new buyers. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Ethical selling refuses to misrepresent capabilities or pricing.","Good documentation states facts, cites the framework, and records the decision. Objections often mask timing, budget, or trust—not product flaws. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. CRM hygiene makes forecasts trustworthy for managers and reps. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."]
      }
    ),
    section(
      "text-updates-s4",
      "6.4 Text Updates — Common mistakes and how to avoid them",
      ["Common mistakes around text updates include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Pipeline stages should mean observable buyer behaviors.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Social proof reduces perceived risk for new buyers. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Ethical selling refuses to misrepresent capabilities or pricing. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Objections often mask timing, budget, or trust—not product flaws. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    ),
    section(
      "text-updates-s5",
      "6.5 Text Updates — Putting the chapter together",
      ["This chapter’s through-line is simple: Text Updates connects principles to accountable action. Active listening beats scripted monologues in complex deals.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Pipeline stages should mean observable buyer behaviors. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits text updates in your field. Social proof reduces perceived risk for new buyers. Ethical selling refuses to misrepresent capabilities or pricing."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps."]
      }
    )
    ],
    {
      learningObjectives: ["Define text updates and explain why it matters in Customer Communication","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Text Updates connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Social proof reduces perceived risk for new buyers.","Pipeline stages should mean observable buyer behaviors.","Ethical selling refuses to misrepresent capabilities or pricing.","Social proof reduces perceived risk for new buyers.","Pipeline stages should mean observable buyer behaviors."],
      realWorldRelevance: "Strong grasp of text updates reduces rework, supports defensible records, and speeds collaboration across Customer Communication.",
    }
  ),
  chapter(
    "difficult-news",
    7,
    "Delivering Difficult News",
    [
    section(
      "difficult-news-s1",
      "7.1 Delivering Difficult News — Foundations and vocabulary",
      ["Delivering Difficult News is a foundation in Customer Communication because CRM hygiene makes forecasts trustworthy for managers and reps. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Onboarding handoffs prevent churn right after the signature. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain delivering difficult news aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat delivering difficult news as a shared model for decisions. Discovery questions diagnose pain before pitching features. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "difficult-news-s2",
      "7.2 Delivering Difficult News — How professionals apply this in practice",
      ["Professionals rarely dispute whether delivering difficult news exists—they dispute how objections often mask timing, budget, or trust—not product flaws. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. CRM hygiene makes forecasts trustworthy for managers and reps.","When stakes rise, pause for a second opinion or formal review. Onboarding handoffs prevent churn right after the signature. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Discovery questions diagnose pain before pitching features. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."]
      }
    ),
    section(
      "difficult-news-s3",
      "7.3 Delivering Difficult News — Workplace scenarios and documentation",
      ["Scenario: a teammate cites delivering difficult news in a meeting, but details in the packet do not match the textbook example. Ethical selling refuses to misrepresent capabilities or pricing. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Objections often mask timing, budget, or trust—not product flaws.","Good documentation states facts, cites the framework, and records the decision. CRM hygiene makes forecasts trustworthy for managers and reps. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Onboarding handoffs prevent churn right after the signature. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."]
      }
    ),
    section(
      "difficult-news-s4",
      "7.4 Delivering Difficult News — Common mistakes and how to avoid them",
      ["Common mistakes around delivering difficult news include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Social proof reduces perceived risk for new buyers.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Ethical selling refuses to misrepresent capabilities or pricing. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Objections often mask timing, budget, or trust—not product flaws. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. CRM hygiene makes forecasts trustworthy for managers and reps. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."]
      }
    ),
    section(
      "difficult-news-s5",
      "7.5 Delivering Difficult News — Putting the chapter together",
      ["This chapter’s through-line is simple: Delivering Difficult News connects principles to accountable action. Pipeline stages should mean observable buyer behaviors.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Social proof reduces perceived risk for new buyers. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits delivering difficult news in your field. Ethical selling refuses to misrepresent capabilities or pricing. Objections often mask timing, budget, or trust—not product flaws."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."]
      }
    )
    ],
    {
      learningObjectives: ["Define delivering difficult news and explain why it matters in Customer Communication","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Delivering Difficult News connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Objections often mask timing, budget, or trust—not product flaws.","Onboarding handoffs prevent churn right after the signature.","CRM hygiene makes forecasts trustworthy for managers and reps.","Objections often mask timing, budget, or trust—not product flaws."],
      realWorldRelevance: "Strong grasp of delivering difficult news reduces rework, supports defensible records, and speeds collaboration across Customer Communication.",
    }
  ),
  chapter(
    "csi",
    8,
    "Customer Satisfaction",
    [
    section(
      "csi-s1",
      "8.1 Customer Satisfaction — Foundations and vocabulary",
      ["Customer Satisfaction is a foundation in Customer Communication because ethical selling refuses to misrepresent capabilities or pricing. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Objections often mask timing, budget, or trust—not product flaws. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain customer satisfaction aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat customer satisfaction as a shared model for decisions. CRM hygiene makes forecasts trustworthy for managers and reps. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "csi-s2",
      "8.2 Customer Satisfaction — How professionals apply this in practice",
      ["Professionals rarely dispute whether customer satisfaction exists—they dispute how social proof reduces perceived risk for new buyers. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Ethical selling refuses to misrepresent capabilities or pricing.","When stakes rise, pause for a second opinion or formal review. Objections often mask timing, budget, or trust—not product flaws. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. CRM hygiene makes forecasts trustworthy for managers and reps. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals."]
      }
    ),
    section(
      "csi-s3",
      "8.3 Customer Satisfaction — Workplace scenarios and documentation",
      ["Scenario: a teammate cites customer satisfaction in a meeting, but details in the packet do not match the textbook example. Pipeline stages should mean observable buyer behaviors. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Social proof reduces perceived risk for new buyers.","Good documentation states facts, cites the framework, and records the decision. Ethical selling refuses to misrepresent capabilities or pricing. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Objections often mask timing, budget, or trust—not product flaws. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."]
      }
    ),
    section(
      "csi-s4",
      "8.4 Customer Satisfaction — Common mistakes and how to avoid them",
      ["Common mistakes around customer satisfaction include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Active listening beats scripted monologues in complex deals.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Pipeline stages should mean observable buyer behaviors. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Social proof reduces perceived risk for new buyers. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Ethical selling refuses to misrepresent capabilities or pricing. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."]
      }
    ),
    section(
      "csi-s5",
      "8.5 Customer Satisfaction — Putting the chapter together",
      ["This chapter’s through-line is simple: Customer Satisfaction connects principles to accountable action. Proposals align scope, price, timeline, and success criteria.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Active listening beats scripted monologues in complex deals. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits customer satisfaction in your field. Pipeline stages should mean observable buyer behaviors. Social proof reduces perceived risk for new buyers."], {
        bulletPoints: ["Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals."]
      }
    )
    ],
    {
      learningObjectives: ["Define customer satisfaction and explain why it matters in Customer Communication","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Customer Satisfaction connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."],
      realWorldRelevance: "Strong grasp of customer satisfaction reduces rework, supports defensible records, and speeds collaboration across Customer Communication.",
    }
  )
];
