import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const NEG_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Negotiation Basics",
  subtitle: "ForgEd workforce textbook — Negotiation Basics",
  paragraphs: [
    "This ForgEd digital textbook presents Negotiation Basics at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const NEG_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "negotiation-prep",
    1,
    "Negotiation Preparation",
    [
    section(
      "negotiation-prep-s1",
      "1.1 Negotiation Preparation — Foundations and vocabulary",
      ["Negotiation Preparation is a foundation in Negotiation Basics because metrics like win rate and cycle length guide coaching. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Follow-up cadences respect buyer attention without harassment. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain negotiation preparation aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat negotiation preparation as a shared model for decisions. Proposals align scope, price, timeline, and success criteria. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "negotiation-prep-s2",
      "1.2 Negotiation Preparation — How professionals apply this in practice",
      ["Professionals rarely dispute whether negotiation preparation exists—they dispute how discovery questions diagnose pain before pitching features. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Metrics like win rate and cycle length guide coaching.","When stakes rise, pause for a second opinion or formal review. Follow-up cadences respect buyer attention without harassment. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Proposals align scope, price, timeline, and success criteria. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","Negotiation trades concessions with documented give-and-get.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."]
      }
    ),
    section(
      "negotiation-prep-s3",
      "1.3 Negotiation Preparation — Workplace scenarios and documentation",
      ["Scenario: a teammate cites negotiation preparation in a meeting, but details in the packet do not match the textbook example. Onboarding handoffs prevent churn right after the signature. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Discovery questions diagnose pain before pitching features.","Good documentation states facts, cites the framework, and records the decision. Metrics like win rate and cycle length guide coaching. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Follow-up cadences respect buyer attention without harassment. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Follow-up cadences respect buyer attention without harassment."]
      }
    ),
    section(
      "negotiation-prep-s4",
      "1.4 Negotiation Preparation — Common mistakes and how to avoid them",
      ["Common mistakes around negotiation preparation include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. CRM hygiene makes forecasts trustworthy for managers and reps.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Onboarding handoffs prevent churn right after the signature. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Discovery questions diagnose pain before pitching features. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Metrics like win rate and cycle length guide coaching. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."]
      }
    ),
    section(
      "negotiation-prep-s5",
      "1.5 Negotiation Preparation — Putting the chapter together",
      ["This chapter’s through-line is simple: Negotiation Preparation connects principles to accountable action. Negotiation trades concessions with documented give-and-get.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. CRM hygiene makes forecasts trustworthy for managers and reps. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits negotiation preparation in your field. Onboarding handoffs prevent churn right after the signature. Discovery questions diagnose pain before pitching features."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","Negotiation trades concessions with documented give-and-get.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."]
      }
    )
    ],
    {
      learningObjectives: ["Define negotiation preparation and explain why it matters in Negotiation Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Negotiation Preparation connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Negotiation trades concessions with documented give-and-get.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Negotiation trades concessions with documented give-and-get.","Objections often mask timing, budget, or trust—not product flaws."],
      realWorldRelevance: "Strong grasp of negotiation preparation reduces rework, supports defensible records, and speeds collaboration across Negotiation Basics.",
    }
  ),
  chapter(
    "batna",
    2,
    "BATNA and Limits",
    [
    section(
      "batna-s1",
      "2.1 BATNA and Limits — Foundations and vocabulary",
      ["BATNA and Limits is a foundation in Negotiation Basics because metrics like win rate and cycle length guide coaching. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Negotiation trades concessions with documented give-and-get. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain batna and limits aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat batna and limits as a shared model for decisions. Follow-up cadences respect buyer attention without harassment. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "batna-s2",
      "2.2 BATNA and Limits — How professionals apply this in practice",
      ["Professionals rarely dispute whether batna and limits exists—they dispute how negotiation trades concessions with documented give-and-get. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Follow-up cadences respect buyer attention without harassment.","When stakes rise, pause for a second opinion or formal review. Proposals align scope, price, timeline, and success criteria. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Active listening beats scripted monologues in complex deals. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."]
      }
    ),
    section(
      "batna-s3",
      "2.3 BATNA and Limits — Workplace scenarios and documentation",
      ["Scenario: a teammate cites batna and limits in a meeting, but details in the packet do not match the textbook example. Follow-up cadences respect buyer attention without harassment. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Proposals align scope, price, timeline, and success criteria.","Good documentation states facts, cites the framework, and records the decision. Active listening beats scripted monologues in complex deals. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Pipeline stages should mean observable buyer behaviors. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."]
      }
    ),
    section(
      "batna-s4",
      "2.4 BATNA and Limits — Common mistakes and how to avoid them",
      ["Common mistakes around batna and limits include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Proposals align scope, price, timeline, and success criteria.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Active listening beats scripted monologues in complex deals. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Pipeline stages should mean observable buyer behaviors. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Social proof reduces perceived risk for new buyers. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."]
      }
    ),
    section(
      "batna-s5",
      "2.5 BATNA and Limits — Putting the chapter together",
      ["This chapter’s through-line is simple: BATNA and Limits connects principles to accountable action. Active listening beats scripted monologues in complex deals.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Pipeline stages should mean observable buyer behaviors. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits batna and limits in your field. Social proof reduces perceived risk for new buyers. Ethical selling refuses to misrepresent capabilities or pricing."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."]
      }
    )
    ],
    {
      learningObjectives: ["Define batna and limits and explain why it matters in Negotiation Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "BATNA and Limits connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."],
      realWorldRelevance: "Strong grasp of batna and limits reduces rework, supports defensible records, and speeds collaboration across Negotiation Basics.",
    }
  ),
  chapter(
    "anchoring",
    3,
    "Anchoring and Framing",
    [
    section(
      "anchoring-s1",
      "3.1 Anchoring and Framing — Foundations and vocabulary",
      ["Anchoring and Framing is a foundation in Negotiation Basics because proposals align scope, price, timeline, and success criteria. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Active listening beats scripted monologues in complex deals. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain anchoring and framing aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat anchoring and framing as a shared model for decisions. Pipeline stages should mean observable buyer behaviors. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "anchoring-s2",
      "3.2 Anchoring and Framing — How professionals apply this in practice",
      ["Professionals rarely dispute whether anchoring and framing exists—they dispute how active listening beats scripted monologues in complex deals. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Pipeline stages should mean observable buyer behaviors.","When stakes rise, pause for a second opinion or formal review. Social proof reduces perceived risk for new buyers. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Ethical selling refuses to misrepresent capabilities or pricing. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."]
      }
    ),
    section(
      "anchoring-s3",
      "3.3 Anchoring and Framing — Workplace scenarios and documentation",
      ["Scenario: a teammate cites anchoring and framing in a meeting, but details in the packet do not match the textbook example. Pipeline stages should mean observable buyer behaviors. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Social proof reduces perceived risk for new buyers.","Good documentation states facts, cites the framework, and records the decision. Ethical selling refuses to misrepresent capabilities or pricing. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Objections often mask timing, budget, or trust—not product flaws. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals."]
      }
    ),
    section(
      "anchoring-s4",
      "3.4 Anchoring and Framing — Common mistakes and how to avoid them",
      ["Common mistakes around anchoring and framing include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Social proof reduces perceived risk for new buyers.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Ethical selling refuses to misrepresent capabilities or pricing. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Objections often mask timing, budget, or trust—not product flaws. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. CRM hygiene makes forecasts trustworthy for managers and reps. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."]
      }
    ),
    section(
      "anchoring-s5",
      "3.5 Anchoring and Framing — Putting the chapter together",
      ["This chapter’s through-line is simple: Anchoring and Framing connects principles to accountable action. Ethical selling refuses to misrepresent capabilities or pricing.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Objections often mask timing, budget, or trust—not product flaws. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits anchoring and framing in your field. CRM hygiene makes forecasts trustworthy for managers and reps. Onboarding handoffs prevent churn right after the signature."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."]
      }
    )
    ],
    {
      learningObjectives: ["Define anchoring and framing and explain why it matters in Negotiation Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Anchoring and Framing connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Discovery questions diagnose pain before pitching features.","Onboarding handoffs prevent churn right after the signature.","Metrics like win rate and cycle length guide coaching.","Discovery questions diagnose pain before pitching features.","Onboarding handoffs prevent churn right after the signature."],
      realWorldRelevance: "Strong grasp of anchoring and framing reduces rework, supports defensible records, and speeds collaboration across Negotiation Basics.",
    }
  ),
  chapter(
    "concessions",
    4,
    "Trading Concessions",
    [
    section(
      "concessions-s1",
      "4.1 Trading Concessions — Foundations and vocabulary",
      ["Trading Concessions is a foundation in Negotiation Basics because pipeline stages should mean observable buyer behaviors. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Social proof reduces perceived risk for new buyers. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain trading concessions aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat trading concessions as a shared model for decisions. Ethical selling refuses to misrepresent capabilities or pricing. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Negotiation trades concessions with documented give-and-get."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "concessions-s2",
      "4.2 Trading Concessions — How professionals apply this in practice",
      ["Professionals rarely dispute whether trading concessions exists—they dispute how active listening beats scripted monologues in complex deals. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Pipeline stages should mean observable buyer behaviors.","When stakes rise, pause for a second opinion or formal review. Social proof reduces perceived risk for new buyers. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Ethical selling refuses to misrepresent capabilities or pricing. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Negotiation trades concessions with documented give-and-get.","CRM hygiene makes forecasts trustworthy for managers and reps."]
      }
    ),
    section(
      "concessions-s3",
      "4.3 Trading Concessions — Workplace scenarios and documentation",
      ["Scenario: a teammate cites trading concessions in a meeting, but details in the packet do not match the textbook example. Proposals align scope, price, timeline, and success criteria. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Active listening beats scripted monologues in complex deals.","Good documentation states facts, cites the framework, and records the decision. Pipeline stages should mean observable buyer behaviors. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Social proof reduces perceived risk for new buyers. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "concessions-s4",
      "4.4 Trading Concessions — Common mistakes and how to avoid them",
      ["Common mistakes around trading concessions include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Follow-up cadences respect buyer attention without harassment.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Proposals align scope, price, timeline, and success criteria. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Active listening beats scripted monologues in complex deals. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Pipeline stages should mean observable buyer behaviors. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Negotiation trades concessions with documented give-and-get."]
      }
    ),
    section(
      "concessions-s5",
      "4.5 Trading Concessions — Putting the chapter together",
      ["This chapter’s through-line is simple: Trading Concessions connects principles to accountable action. Metrics like win rate and cycle length guide coaching.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Follow-up cadences respect buyer attention without harassment. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits trading concessions in your field. Proposals align scope, price, timeline, and success criteria. Active listening beats scripted monologues in complex deals."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Negotiation trades concessions with documented give-and-get.","CRM hygiene makes forecasts trustworthy for managers and reps."]
      }
    )
    ],
    {
      learningObjectives: ["Define trading concessions and explain why it matters in Negotiation Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Trading Concessions connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."],
      realWorldRelevance: "Strong grasp of trading concessions reduces rework, supports defensible records, and speeds collaboration across Negotiation Basics.",
    }
  ),
  chapter(
    "win-win",
    5,
    "Win-Win Outcomes",
    [
    section(
      "win-win-s1",
      "5.1 Win-Win Outcomes — Foundations and vocabulary",
      ["Win-Win Outcomes is a foundation in Negotiation Basics because proposals align scope, price, timeline, and success criteria. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Active listening beats scripted monologues in complex deals. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain win-win outcomes aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat win-win outcomes as a shared model for decisions. Pipeline stages should mean observable buyer behaviors. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "win-win-s2",
      "5.2 Win-Win Outcomes — How professionals apply this in practice",
      ["Professionals rarely dispute whether win-win outcomes exists—they dispute how active listening beats scripted monologues in complex deals. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Pipeline stages should mean observable buyer behaviors.","When stakes rise, pause for a second opinion or formal review. Social proof reduces perceived risk for new buyers. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Ethical selling refuses to misrepresent capabilities or pricing. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    ),
    section(
      "win-win-s3",
      "5.3 Win-Win Outcomes — Workplace scenarios and documentation",
      ["Scenario: a teammate cites win-win outcomes in a meeting, but details in the packet do not match the textbook example. Pipeline stages should mean observable buyer behaviors. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Social proof reduces perceived risk for new buyers.","Good documentation states facts, cites the framework, and records the decision. Ethical selling refuses to misrepresent capabilities or pricing. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Objections often mask timing, budget, or trust—not product flaws. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."]
      }
    ),
    section(
      "win-win-s4",
      "5.4 Win-Win Outcomes — Common mistakes and how to avoid them",
      ["Common mistakes around win-win outcomes include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Social proof reduces perceived risk for new buyers.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Ethical selling refuses to misrepresent capabilities or pricing. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Objections often mask timing, budget, or trust—not product flaws. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. CRM hygiene makes forecasts trustworthy for managers and reps. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."]
      }
    ),
    section(
      "win-win-s5",
      "5.5 Win-Win Outcomes — Putting the chapter together",
      ["This chapter’s through-line is simple: Win-Win Outcomes connects principles to accountable action. Ethical selling refuses to misrepresent capabilities or pricing.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Objections often mask timing, budget, or trust—not product flaws. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits win-win outcomes in your field. CRM hygiene makes forecasts trustworthy for managers and reps. Onboarding handoffs prevent churn right after the signature."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    )
    ],
    {
      learningObjectives: ["Define win-win outcomes and explain why it matters in Negotiation Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Win-Win Outcomes connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Ethical selling refuses to misrepresent capabilities or pricing.","Social proof reduces perceived risk for new buyers.","Objections often mask timing, budget, or trust—not product flaws.","Ethical selling refuses to misrepresent capabilities or pricing.","Social proof reduces perceived risk for new buyers."],
      realWorldRelevance: "Strong grasp of win-win outcomes reduces rework, supports defensible records, and speeds collaboration across Negotiation Basics.",
    }
  ),
  chapter(
    "difficult-negotiation",
    6,
    "Difficult Negotiations",
    [
    section(
      "difficult-negotiation-s1",
      "6.1 Difficult Negotiations — Foundations and vocabulary",
      ["Difficult Negotiations is a foundation in Negotiation Basics because CRM hygiene makes forecasts trustworthy for managers and reps. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Onboarding handoffs prevent churn right after the signature. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain difficult negotiations aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat difficult negotiations as a shared model for decisions. Discovery questions diagnose pain before pitching features. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "difficult-negotiation-s2",
      "6.2 Difficult Negotiations — How professionals apply this in practice",
      ["Professionals rarely dispute whether difficult negotiations exists—they dispute how onboarding handoffs prevent churn right after the signature. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Discovery questions diagnose pain before pitching features.","When stakes rise, pause for a second opinion or formal review. Metrics like win rate and cycle length guide coaching. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Negotiation trades concessions with documented give-and-get. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "difficult-negotiation-s3",
      "6.3 Difficult Negotiations — Workplace scenarios and documentation",
      ["Scenario: a teammate cites difficult negotiations in a meeting, but details in the packet do not match the textbook example. Discovery questions diagnose pain before pitching features. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Metrics like win rate and cycle length guide coaching.","Good documentation states facts, cites the framework, and records the decision. Negotiation trades concessions with documented give-and-get. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Follow-up cadences respect buyer attention without harassment. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    ),
    section(
      "difficult-negotiation-s4",
      "6.4 Difficult Negotiations — Common mistakes and how to avoid them",
      ["Common mistakes around difficult negotiations include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Metrics like win rate and cycle length guide coaching.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Negotiation trades concessions with documented give-and-get. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Follow-up cadences respect buyer attention without harassment. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Proposals align scope, price, timeline, and success criteria. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps."]
      }
    ),
    section(
      "difficult-negotiation-s5",
      "6.5 Difficult Negotiations — Putting the chapter together",
      ["This chapter’s through-line is simple: Difficult Negotiations connects principles to accountable action. Negotiation trades concessions with documented give-and-get.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Follow-up cadences respect buyer attention without harassment. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits difficult negotiations in your field. Proposals align scope, price, timeline, and success criteria. Active listening beats scripted monologues in complex deals."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    )
    ],
    {
      learningObjectives: ["Define difficult negotiations and explain why it matters in Negotiation Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Difficult Negotiations connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Pipeline stages should mean observable buyer behaviors.","Active listening beats scripted monologues in complex deals.","Social proof reduces perceived risk for new buyers.","Pipeline stages should mean observable buyer behaviors.","Active listening beats scripted monologues in complex deals."],
      realWorldRelevance: "Strong grasp of difficult negotiations reduces rework, supports defensible records, and speeds collaboration across Negotiation Basics.",
    }
  ),
  chapter(
    "contracts-negotiation",
    7,
    "Contract Basics in Deals",
    [
    section(
      "contracts-negotiation-s1",
      "7.1 Contract Basics in Deals — Foundations and vocabulary",
      ["Contract Basics in Deals is a foundation in Negotiation Basics because negotiation trades concessions with documented give-and-get. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Follow-up cadences respect buyer attention without harassment. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain contract basics in deals aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat contract basics in deals as a shared model for decisions. Proposals align scope, price, timeline, and success criteria. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "contracts-negotiation-s2",
      "7.2 Contract Basics in Deals — How professionals apply this in practice",
      ["Professionals rarely dispute whether contract basics in deals exists—they dispute how metrics like win rate and cycle length guide coaching. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Negotiation trades concessions with documented give-and-get.","When stakes rise, pause for a second opinion or formal review. Follow-up cadences respect buyer attention without harassment. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Proposals align scope, price, timeline, and success criteria. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    ),
    section(
      "contracts-negotiation-s3",
      "7.3 Contract Basics in Deals — Workplace scenarios and documentation",
      ["Scenario: a teammate cites contract basics in deals in a meeting, but details in the packet do not match the textbook example. Discovery questions diagnose pain before pitching features. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Metrics like win rate and cycle length guide coaching.","Good documentation states facts, cites the framework, and records the decision. Negotiation trades concessions with documented give-and-get. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Follow-up cadences respect buyer attention without harassment. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Active listening beats scripted monologues in complex deals."]
      }
    ),
    section(
      "contracts-negotiation-s4",
      "7.4 Contract Basics in Deals — Common mistakes and how to avoid them",
      ["Common mistakes around contract basics in deals include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Onboarding handoffs prevent churn right after the signature.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Discovery questions diagnose pain before pitching features. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Metrics like win rate and cycle length guide coaching. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Negotiation trades concessions with documented give-and-get. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "contracts-negotiation-s5",
      "7.5 Contract Basics in Deals — Putting the chapter together",
      ["This chapter’s through-line is simple: Contract Basics in Deals connects principles to accountable action. CRM hygiene makes forecasts trustworthy for managers and reps.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Onboarding handoffs prevent churn right after the signature. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits contract basics in deals in your field. Discovery questions diagnose pain before pitching features. Metrics like win rate and cycle length guide coaching."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    )
    ],
    {
      learningObjectives: ["Define contract basics in deals and explain why it matters in Negotiation Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Contract Basics in Deals connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Proposals align scope, price, timeline, and success criteria.","Follow-up cadences respect buyer attention without harassment.","Pipeline stages should mean observable buyer behaviors.","Proposals align scope, price, timeline, and success criteria.","Follow-up cadences respect buyer attention without harassment."],
      realWorldRelevance: "Strong grasp of contract basics in deals reduces rework, supports defensible records, and speeds collaboration across Negotiation Basics.",
    }
  ),
  chapter(
    "negotiation-ethics",
    8,
    "Negotiation Ethics",
    [
    section(
      "negotiation-ethics-s1",
      "8.1 Negotiation Ethics — Foundations and vocabulary",
      ["Negotiation Ethics is a foundation in Negotiation Basics because active listening beats scripted monologues in complex deals. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Pipeline stages should mean observable buyer behaviors. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain negotiation ethics aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat negotiation ethics as a shared model for decisions. Social proof reduces perceived risk for new buyers. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","Negotiation trades concessions with documented give-and-get.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "negotiation-ethics-s2",
      "8.2 Negotiation Ethics — How professionals apply this in practice",
      ["Professionals rarely dispute whether negotiation ethics exists—they dispute how proposals align scope, price, timeline, and success criteria. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Active listening beats scripted monologues in complex deals.","When stakes rise, pause for a second opinion or formal review. Pipeline stages should mean observable buyer behaviors. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Social proof reduces perceived risk for new buyers. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."]
      }
    ),
    section(
      "negotiation-ethics-s3",
      "8.3 Negotiation Ethics — Workplace scenarios and documentation",
      ["Scenario: a teammate cites negotiation ethics in a meeting, but details in the packet do not match the textbook example. Follow-up cadences respect buyer attention without harassment. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Proposals align scope, price, timeline, and success criteria.","Good documentation states facts, cites the framework, and records the decision. Active listening beats scripted monologues in complex deals. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Pipeline stages should mean observable buyer behaviors. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Negotiation trades concessions with documented give-and-get.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    ),
    section(
      "negotiation-ethics-s4",
      "8.4 Negotiation Ethics — Common mistakes and how to avoid them",
      ["Common mistakes around negotiation ethics include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Metrics like win rate and cycle length guide coaching.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Follow-up cadences respect buyer attention without harassment. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Proposals align scope, price, timeline, and success criteria. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Active listening beats scripted monologues in complex deals. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","Negotiation trades concessions with documented give-and-get.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."]
      }
    ),
    section(
      "negotiation-ethics-s5",
      "8.5 Negotiation Ethics — Putting the chapter together",
      ["This chapter’s through-line is simple: Negotiation Ethics connects principles to accountable action. Discovery questions diagnose pain before pitching features.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Metrics like win rate and cycle length guide coaching. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits negotiation ethics in your field. Follow-up cadences respect buyer attention without harassment. Proposals align scope, price, timeline, and success criteria."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."]
      }
    )
    ],
    {
      learningObjectives: ["Define negotiation ethics and explain why it matters in Negotiation Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Negotiation Ethics connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Objections often mask timing, budget, or trust—not product flaws.","Negotiation trades concessions with documented give-and-get.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Negotiation trades concessions with documented give-and-get."],
      realWorldRelevance: "Strong grasp of negotiation ethics reduces rework, supports defensible records, and speeds collaboration across Negotiation Basics.",
    }
  )
];
