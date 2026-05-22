import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const AISLS_TEXTBOOK_INTRO: TextbookIntro = {
  title: "AI-Assisted Sales",
  subtitle: "ForgEd workforce textbook — AI-Assisted Sales",
  paragraphs: [
    "This ForgEd digital textbook presents AI-Assisted Sales at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const AISLS_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "ai-prospecting",
    1,
    "AI for Prospecting",
    [
    section(
      "ai-prospecting-s1",
      "1.1 AI for Prospecting — Foundations and vocabulary",
      ["AI for Prospecting is a foundation in AI-Assisted Sales because follow-up cadences respect buyer attention without harassment. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Proposals align scope, price, timeline, and success criteria. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ai for prospecting aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ai for prospecting as a shared model for decisions. Active listening beats scripted monologues in complex deals. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "ai-prospecting-s2",
      "1.2 AI for Prospecting — How professionals apply this in practice",
      ["Professionals rarely dispute whether ai for prospecting exists—they dispute how proposals align scope, price, timeline, and success criteria. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Active listening beats scripted monologues in complex deals.","When stakes rise, pause for a second opinion or formal review. Pipeline stages should mean observable buyer behaviors. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Social proof reduces perceived risk for new buyers. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors."]
      }
    ),
    section(
      "ai-prospecting-s3",
      "1.3 AI for Prospecting — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ai for prospecting in a meeting, but details in the packet do not match the textbook example. Active listening beats scripted monologues in complex deals. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Pipeline stages should mean observable buyer behaviors.","Good documentation states facts, cites the framework, and records the decision. Social proof reduces perceived risk for new buyers. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Ethical selling refuses to misrepresent capabilities or pricing. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    ),
    section(
      "ai-prospecting-s4",
      "1.4 AI for Prospecting — Common mistakes and how to avoid them",
      ["Common mistakes around ai for prospecting include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Pipeline stages should mean observable buyer behaviors.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Social proof reduces perceived risk for new buyers. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Ethical selling refuses to misrepresent capabilities or pricing. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Objections often mask timing, budget, or trust—not product flaws. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    ),
    section(
      "ai-prospecting-s5",
      "1.5 AI for Prospecting — Putting the chapter together",
      ["This chapter’s through-line is simple: AI for Prospecting connects principles to accountable action. Social proof reduces perceived risk for new buyers.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Ethical selling refuses to misrepresent capabilities or pricing. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ai for prospecting in your field. Objections often mask timing, budget, or trust—not product flaws. CRM hygiene makes forecasts trustworthy for managers and reps."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors."]
      }
    )
    ],
    {
      learningObjectives: ["Define ai for prospecting and explain why it matters in AI-Assisted Sales","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "AI for Prospecting connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Follow-up cadences respect buyer attention without harassment.","Negotiation trades concessions with documented give-and-get.","Proposals align scope, price, timeline, and success criteria.","Follow-up cadences respect buyer attention without harassment.","Negotiation trades concessions with documented give-and-get."],
      realWorldRelevance: "Strong grasp of ai for prospecting reduces rework, supports defensible records, and speeds collaboration across AI-Assisted Sales.",
    }
  ),
  chapter(
    "ai-prep-calls",
    2,
    "AI Call Preparation",
    [
    section(
      "ai-prep-calls-s1",
      "2.1 AI Call Preparation — Foundations and vocabulary",
      ["AI Call Preparation is a foundation in AI-Assisted Sales because metrics like win rate and cycle length guide coaching. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Negotiation trades concessions with documented give-and-get. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ai call preparation aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ai call preparation as a shared model for decisions. Follow-up cadences respect buyer attention without harassment. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "ai-prep-calls-s2",
      "2.2 AI Call Preparation — How professionals apply this in practice",
      ["Professionals rarely dispute whether ai call preparation exists—they dispute how negotiation trades concessions with documented give-and-get. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Follow-up cadences respect buyer attention without harassment.","When stakes rise, pause for a second opinion or formal review. Proposals align scope, price, timeline, and success criteria. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Active listening beats scripted monologues in complex deals. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."]
      }
    ),
    section(
      "ai-prep-calls-s3",
      "2.3 AI Call Preparation — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ai call preparation in a meeting, but details in the packet do not match the textbook example. Follow-up cadences respect buyer attention without harassment. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Proposals align scope, price, timeline, and success criteria.","Good documentation states facts, cites the framework, and records the decision. Active listening beats scripted monologues in complex deals. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Pipeline stages should mean observable buyer behaviors. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors."]
      }
    ),
    section(
      "ai-prep-calls-s4",
      "2.4 AI Call Preparation — Common mistakes and how to avoid them",
      ["Common mistakes around ai call preparation include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Proposals align scope, price, timeline, and success criteria.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Active listening beats scripted monologues in complex deals. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Pipeline stages should mean observable buyer behaviors. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Social proof reduces perceived risk for new buyers. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals."]
      }
    ),
    section(
      "ai-prep-calls-s5",
      "2.5 AI Call Preparation — Putting the chapter together",
      ["This chapter’s through-line is simple: AI Call Preparation connects principles to accountable action. Active listening beats scripted monologues in complex deals.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Pipeline stages should mean observable buyer behaviors. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ai call preparation in your field. Social proof reduces perceived risk for new buyers. Ethical selling refuses to misrepresent capabilities or pricing."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."]
      }
    )
    ],
    {
      learningObjectives: ["Define ai call preparation and explain why it matters in AI-Assisted Sales","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "AI Call Preparation connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Metrics like win rate and cycle length guide coaching.","Discovery questions diagnose pain before pitching features.","Negotiation trades concessions with documented give-and-get.","Metrics like win rate and cycle length guide coaching.","Discovery questions diagnose pain before pitching features."],
      realWorldRelevance: "Strong grasp of ai call preparation reduces rework, supports defensible records, and speeds collaboration across AI-Assisted Sales.",
    }
  ),
  chapter(
    "ai-email",
    3,
    "AI Email Drafts",
    [
    section(
      "ai-email-s1",
      "3.1 AI Email Drafts — Foundations and vocabulary",
      ["AI Email Drafts is a foundation in AI-Assisted Sales because proposals align scope, price, timeline, and success criteria. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Active listening beats scripted monologues in complex deals. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ai email drafts aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ai email drafts as a shared model for decisions. Pipeline stages should mean observable buyer behaviors. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "ai-email-s2",
      "3.2 AI Email Drafts — How professionals apply this in practice",
      ["Professionals rarely dispute whether ai email drafts exists—they dispute how follow-up cadences respect buyer attention without harassment. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Proposals align scope, price, timeline, and success criteria.","When stakes rise, pause for a second opinion or formal review. Active listening beats scripted monologues in complex deals. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Pipeline stages should mean observable buyer behaviors. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    ),
    section(
      "ai-email-s3",
      "3.3 AI Email Drafts — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ai email drafts in a meeting, but details in the packet do not match the textbook example. Negotiation trades concessions with documented give-and-get. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Follow-up cadences respect buyer attention without harassment.","Good documentation states facts, cites the framework, and records the decision. Proposals align scope, price, timeline, and success criteria. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Active listening beats scripted monologues in complex deals. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "ai-email-s4",
      "3.4 AI Email Drafts — Common mistakes and how to avoid them",
      ["Common mistakes around ai email drafts include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Metrics like win rate and cycle length guide coaching.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Negotiation trades concessions with documented give-and-get. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Follow-up cadences respect buyer attention without harassment. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Proposals align scope, price, timeline, and success criteria. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    ),
    section(
      "ai-email-s5",
      "3.5 AI Email Drafts — Putting the chapter together",
      ["This chapter’s through-line is simple: AI Email Drafts connects principles to accountable action. Discovery questions diagnose pain before pitching features.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Metrics like win rate and cycle length guide coaching. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ai email drafts in your field. Negotiation trades concessions with documented give-and-get. Follow-up cadences respect buyer attention without harassment."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    )
    ],
    {
      learningObjectives: ["Define ai email drafts and explain why it matters in AI-Assisted Sales","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "AI Email Drafts connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Proposals align scope, price, timeline, and success criteria.","Follow-up cadences respect buyer attention without harassment.","Active listening beats scripted monologues in complex deals.","Proposals align scope, price, timeline, and success criteria.","Follow-up cadences respect buyer attention without harassment."],
      realWorldRelevance: "Strong grasp of ai email drafts reduces rework, supports defensible records, and speeds collaboration across AI-Assisted Sales.",
    }
  ),
  chapter(
    "ai-research-account",
    4,
    "Account Research",
    [
    section(
      "ai-research-account-s1",
      "4.1 Account Research — Foundations and vocabulary",
      ["Account Research is a foundation in AI-Assisted Sales because proposals align scope, price, timeline, and success criteria. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Active listening beats scripted monologues in complex deals. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain account research aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat account research as a shared model for decisions. Pipeline stages should mean observable buyer behaviors. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "ai-research-account-s2",
      "4.2 Account Research — How professionals apply this in practice",
      ["Professionals rarely dispute whether account research exists—they dispute how follow-up cadences respect buyer attention without harassment. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Proposals align scope, price, timeline, and success criteria.","When stakes rise, pause for a second opinion or formal review. Active listening beats scripted monologues in complex deals. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Pipeline stages should mean observable buyer behaviors. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "ai-research-account-s3",
      "4.3 Account Research — Workplace scenarios and documentation",
      ["Scenario: a teammate cites account research in a meeting, but details in the packet do not match the textbook example. Negotiation trades concessions with documented give-and-get. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Follow-up cadences respect buyer attention without harassment.","Good documentation states facts, cites the framework, and records the decision. Proposals align scope, price, timeline, and success criteria. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Active listening beats scripted monologues in complex deals. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    ),
    section(
      "ai-research-account-s4",
      "4.4 Account Research — Common mistakes and how to avoid them",
      ["Common mistakes around account research include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Metrics like win rate and cycle length guide coaching.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Negotiation trades concessions with documented give-and-get. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Follow-up cadences respect buyer attention without harassment. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Proposals align scope, price, timeline, and success criteria. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    ),
    section(
      "ai-research-account-s5",
      "4.5 Account Research — Putting the chapter together",
      ["This chapter’s through-line is simple: Account Research connects principles to accountable action. Discovery questions diagnose pain before pitching features.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Metrics like win rate and cycle length guide coaching. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits account research in your field. Negotiation trades concessions with documented give-and-get. Follow-up cadences respect buyer attention without harassment."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    )
    ],
    {
      learningObjectives: ["Define account research and explain why it matters in AI-Assisted Sales","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Account Research connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals."],
      realWorldRelevance: "Strong grasp of account research reduces rework, supports defensible records, and speeds collaboration across AI-Assisted Sales.",
    }
  ),
  chapter(
    "ai-proposals",
    5,
    "Proposal Support",
    [
    section(
      "ai-proposals-s1",
      "5.1 Proposal Support — Foundations and vocabulary",
      ["Proposal Support is a foundation in AI-Assisted Sales because objections often mask timing, budget, or trust—not product flaws. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Proposals align scope, price, timeline, and success criteria. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain proposal support aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat proposal support as a shared model for decisions. CRM hygiene makes forecasts trustworthy for managers and reps. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "ai-proposals-s2",
      "5.2 Proposal Support — How professionals apply this in practice",
      ["Professionals rarely dispute whether proposal support exists—they dispute how proposals align scope, price, timeline, and success criteria. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. CRM hygiene makes forecasts trustworthy for managers and reps.","When stakes rise, pause for a second opinion or formal review. Onboarding handoffs prevent churn right after the signature. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Discovery questions diagnose pain before pitching features. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    ),
    section(
      "ai-proposals-s3",
      "5.3 Proposal Support — Workplace scenarios and documentation",
      ["Scenario: a teammate cites proposal support in a meeting, but details in the packet do not match the textbook example. CRM hygiene makes forecasts trustworthy for managers and reps. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Onboarding handoffs prevent churn right after the signature.","Good documentation states facts, cites the framework, and records the decision. Discovery questions diagnose pain before pitching features. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Metrics like win rate and cycle length guide coaching. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Proposals align scope, price, timeline, and success criteria."]
      }
    ),
    section(
      "ai-proposals-s4",
      "5.4 Proposal Support — Common mistakes and how to avoid them",
      ["Common mistakes around proposal support include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Onboarding handoffs prevent churn right after the signature.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Discovery questions diagnose pain before pitching features. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Metrics like win rate and cycle length guide coaching. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Negotiation trades concessions with documented give-and-get. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "ai-proposals-s5",
      "5.5 Proposal Support — Putting the chapter together",
      ["This chapter’s through-line is simple: Proposal Support connects principles to accountable action. Discovery questions diagnose pain before pitching features.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Metrics like win rate and cycle length guide coaching. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits proposal support in your field. Negotiation trades concessions with documented give-and-get. Follow-up cadences respect buyer attention without harassment."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    )
    ],
    {
      learningObjectives: ["Define proposal support and explain why it matters in AI-Assisted Sales","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Proposal Support connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Active listening beats scripted monologues in complex deals.","Follow-up cadences respect buyer attention without harassment.","Pipeline stages should mean observable buyer behaviors.","Active listening beats scripted monologues in complex deals.","Follow-up cadences respect buyer attention without harassment."],
      realWorldRelevance: "Strong grasp of proposal support reduces rework, supports defensible records, and speeds collaboration across AI-Assisted Sales.",
    }
  ),
  chapter(
    "compliance-sales",
    6,
    "Compliance in AI Sales",
    [
    section(
      "compliance-sales-s1",
      "6.1 Compliance in AI Sales — Foundations and vocabulary",
      ["Compliance in AI Sales is a foundation in AI-Assisted Sales because discovery questions diagnose pain before pitching features. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Metrics like win rate and cycle length guide coaching. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain compliance in ai sales aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat compliance in ai sales as a shared model for decisions. Negotiation trades concessions with documented give-and-get. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "compliance-sales-s2",
      "6.2 Compliance in AI Sales — How professionals apply this in practice",
      ["Professionals rarely dispute whether compliance in ai sales exists—they dispute how onboarding handoffs prevent churn right after the signature. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Discovery questions diagnose pain before pitching features.","When stakes rise, pause for a second opinion or formal review. Metrics like win rate and cycle length guide coaching. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Negotiation trades concessions with documented give-and-get. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    ),
    section(
      "compliance-sales-s3",
      "6.3 Compliance in AI Sales — Workplace scenarios and documentation",
      ["Scenario: a teammate cites compliance in ai sales in a meeting, but details in the packet do not match the textbook example. CRM hygiene makes forecasts trustworthy for managers and reps. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Onboarding handoffs prevent churn right after the signature.","Good documentation states facts, cites the framework, and records the decision. Discovery questions diagnose pain before pitching features. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Metrics like win rate and cycle length guide coaching. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "compliance-sales-s4",
      "6.4 Compliance in AI Sales — Common mistakes and how to avoid them",
      ["Common mistakes around compliance in ai sales include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Objections often mask timing, budget, or trust—not product flaws.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. CRM hygiene makes forecasts trustworthy for managers and reps. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Onboarding handoffs prevent churn right after the signature. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Discovery questions diagnose pain before pitching features. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    ),
    section(
      "compliance-sales-s5",
      "6.5 Compliance in AI Sales — Putting the chapter together",
      ["This chapter’s through-line is simple: Compliance in AI Sales connects principles to accountable action. Ethical selling refuses to misrepresent capabilities or pricing.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Objections often mask timing, budget, or trust—not product flaws. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits compliance in ai sales in your field. CRM hygiene makes forecasts trustworthy for managers and reps. Onboarding handoffs prevent churn right after the signature."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    )
    ],
    {
      learningObjectives: ["Define compliance in ai sales and explain why it matters in AI-Assisted Sales","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Compliance in AI Sales connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Proposals align scope, price, timeline, and success criteria.","Follow-up cadences respect buyer attention without harassment.","Active listening beats scripted monologues in complex deals.","Proposals align scope, price, timeline, and success criteria.","Follow-up cadences respect buyer attention without harassment."],
      realWorldRelevance: "Strong grasp of compliance in ai sales reduces rework, supports defensible records, and speeds collaboration across AI-Assisted Sales.",
    }
  ),
  chapter(
    "quality-control",
    7,
    "Quality Control",
    [
    section(
      "quality-control-s1",
      "7.1 Quality Control — Foundations and vocabulary",
      ["Quality Control is a foundation in AI-Assisted Sales because CRM hygiene makes forecasts trustworthy for managers and reps. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Onboarding handoffs prevent churn right after the signature. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain quality control aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat quality control as a shared model for decisions. Discovery questions diagnose pain before pitching features. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "quality-control-s2",
      "7.2 Quality Control — How professionals apply this in practice",
      ["Professionals rarely dispute whether quality control exists—they dispute how onboarding handoffs prevent churn right after the signature. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Discovery questions diagnose pain before pitching features.","When stakes rise, pause for a second opinion or formal review. Metrics like win rate and cycle length guide coaching. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Negotiation trades concessions with documented give-and-get. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "quality-control-s3",
      "7.3 Quality Control — Workplace scenarios and documentation",
      ["Scenario: a teammate cites quality control in a meeting, but details in the packet do not match the textbook example. Discovery questions diagnose pain before pitching features. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Metrics like win rate and cycle length guide coaching.","Good documentation states facts, cites the framework, and records the decision. Negotiation trades concessions with documented give-and-get. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Follow-up cadences respect buyer attention without harassment. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    ),
    section(
      "quality-control-s4",
      "7.4 Quality Control — Common mistakes and how to avoid them",
      ["Common mistakes around quality control include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Metrics like win rate and cycle length guide coaching.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Negotiation trades concessions with documented give-and-get. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Follow-up cadences respect buyer attention without harassment. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Proposals align scope, price, timeline, and success criteria. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps."]
      }
    ),
    section(
      "quality-control-s5",
      "7.5 Quality Control — Putting the chapter together",
      ["This chapter’s through-line is simple: Quality Control connects principles to accountable action. Negotiation trades concessions with documented give-and-get.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Follow-up cadences respect buyer attention without harassment. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits quality control in your field. Proposals align scope, price, timeline, and success criteria. Active listening beats scripted monologues in complex deals."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    )
    ],
    {
      learningObjectives: ["Define quality control and explain why it matters in AI-Assisted Sales","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Quality Control connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Pipeline stages should mean observable buyer behaviors.","Active listening beats scripted monologues in complex deals.","Social proof reduces perceived risk for new buyers.","Pipeline stages should mean observable buyer behaviors.","Active listening beats scripted monologues in complex deals."],
      realWorldRelevance: "Strong grasp of quality control reduces rework, supports defensible records, and speeds collaboration across AI-Assisted Sales.",
    }
  ),
  chapter(
    "ai-sales-future",
    8,
    "Future of AI in Sales",
    [
    section(
      "ai-sales-future-s1",
      "8.1 Future of AI in Sales — Foundations and vocabulary",
      ["Future of AI in Sales is a foundation in AI-Assisted Sales because follow-up cadences respect buyer attention without harassment. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Proposals align scope, price, timeline, and success criteria. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain future of ai in sales aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat future of ai in sales as a shared model for decisions. Active listening beats scripted monologues in complex deals. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "ai-sales-future-s2",
      "8.2 Future of AI in Sales — How professionals apply this in practice",
      ["Professionals rarely dispute whether future of ai in sales exists—they dispute how negotiation trades concessions with documented give-and-get. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Follow-up cadences respect buyer attention without harassment.","When stakes rise, pause for a second opinion or formal review. Proposals align scope, price, timeline, and success criteria. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Active listening beats scripted monologues in complex deals. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    ),
    section(
      "ai-sales-future-s3",
      "8.3 Future of AI in Sales — Workplace scenarios and documentation",
      ["Scenario: a teammate cites future of ai in sales in a meeting, but details in the packet do not match the textbook example. Metrics like win rate and cycle length guide coaching. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Negotiation trades concessions with documented give-and-get.","Good documentation states facts, cites the framework, and records the decision. Follow-up cadences respect buyer attention without harassment. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Proposals align scope, price, timeline, and success criteria. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps."]
      }
    ),
    section(
      "ai-sales-future-s4",
      "8.4 Future of AI in Sales — Common mistakes and how to avoid them",
      ["Common mistakes around future of ai in sales include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Discovery questions diagnose pain before pitching features.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Metrics like win rate and cycle length guide coaching. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Negotiation trades concessions with documented give-and-get. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Follow-up cadences respect buyer attention without harassment. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "ai-sales-future-s5",
      "8.5 Future of AI in Sales — Putting the chapter together",
      ["This chapter’s through-line is simple: Future of AI in Sales connects principles to accountable action. Onboarding handoffs prevent churn right after the signature.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Discovery questions diagnose pain before pitching features. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits future of ai in sales in your field. Metrics like win rate and cycle length guide coaching. Negotiation trades concessions with documented give-and-get."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    )
    ],
    {
      learningObjectives: ["Define future of ai in sales and explain why it matters in AI-Assisted Sales","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Future of AI in Sales connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Active listening beats scripted monologues in complex deals.","Proposals align scope, price, timeline, and success criteria.","Pipeline stages should mean observable buyer behaviors.","Active listening beats scripted monologues in complex deals.","Proposals align scope, price, timeline, and success criteria."],
      realWorldRelevance: "Strong grasp of future of ai in sales reduces rework, supports defensible records, and speeds collaboration across AI-Assisted Sales.",
    }
  )
];
