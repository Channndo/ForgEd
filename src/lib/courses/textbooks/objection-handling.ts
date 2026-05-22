import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const OBJ_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Objection Handling",
  subtitle: "ForgEd workforce textbook — Objection Handling",
  paragraphs: [
    "This ForgEd digital textbook presents Objection Handling at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const OBJ_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "objection-types",
    1,
    "Types of Objections",
    [
    section(
      "objection-types-s1",
      "1.1 Types of Objections — Foundations and vocabulary",
      ["Types of Objections is a foundation in Objection Handling because objections often mask timing, budget, or trust—not product flaws. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: CRM hygiene makes forecasts trustworthy for managers and reps. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain types of objections aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat types of objections as a shared model for decisions. Onboarding handoffs prevent churn right after the signature. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "objection-types-s2",
      "1.2 Types of Objections — How professionals apply this in practice",
      ["Professionals rarely dispute whether types of objections exists—they dispute how cRM hygiene makes forecasts trustworthy for managers and reps. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Onboarding handoffs prevent churn right after the signature.","When stakes rise, pause for a second opinion or formal review. Discovery questions diagnose pain before pitching features. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Metrics like win rate and cycle length guide coaching. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."]
      }
    ),
    section(
      "objection-types-s3",
      "1.3 Types of Objections — Workplace scenarios and documentation",
      ["Scenario: a teammate cites types of objections in a meeting, but details in the packet do not match the textbook example. Onboarding handoffs prevent churn right after the signature. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Discovery questions diagnose pain before pitching features.","Good documentation states facts, cites the framework, and records the decision. Metrics like win rate and cycle length guide coaching. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Negotiation trades concessions with documented give-and-get. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."]
      }
    ),
    section(
      "objection-types-s4",
      "1.4 Types of Objections — Common mistakes and how to avoid them",
      ["Common mistakes around types of objections include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Discovery questions diagnose pain before pitching features.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Metrics like win rate and cycle length guide coaching. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Negotiation trades concessions with documented give-and-get. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Follow-up cadences respect buyer attention without harassment. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."]
      }
    ),
    section(
      "objection-types-s5",
      "1.5 Types of Objections — Putting the chapter together",
      ["This chapter’s through-line is simple: Types of Objections connects principles to accountable action. Metrics like win rate and cycle length guide coaching.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Negotiation trades concessions with documented give-and-get. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits types of objections in your field. Follow-up cadences respect buyer attention without harassment. Proposals align scope, price, timeline, and success criteria."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."]
      }
    )
    ],
    {
      learningObjectives: ["Define types of objections and explain why it matters in Objection Handling","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Types of Objections connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Objections often mask timing, budget, or trust—not product flaws.","Ethical selling refuses to misrepresent capabilities or pricing.","CRM hygiene makes forecasts trustworthy for managers and reps.","Objections often mask timing, budget, or trust—not product flaws.","Ethical selling refuses to misrepresent capabilities or pricing."],
      realWorldRelevance: "Strong grasp of types of objections reduces rework, supports defensible records, and speeds collaboration across Objection Handling.",
    }
  ),
  chapter(
    "listen-first",
    2,
    "Listen-First Technique",
    [
    section(
      "listen-first-s1",
      "2.1 Listen-First Technique — Foundations and vocabulary",
      ["Listen-First Technique is a foundation in Objection Handling because onboarding handoffs prevent churn right after the signature. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Discovery questions diagnose pain before pitching features. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain listen-first technique aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat listen-first technique as a shared model for decisions. Metrics like win rate and cycle length guide coaching. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "listen-first-s2",
      "2.2 Listen-First Technique — How professionals apply this in practice",
      ["Professionals rarely dispute whether listen-first technique exists—they dispute how discovery questions diagnose pain before pitching features. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Metrics like win rate and cycle length guide coaching.","When stakes rise, pause for a second opinion or formal review. Negotiation trades concessions with documented give-and-get. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Follow-up cadences respect buyer attention without harassment. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "listen-first-s3",
      "2.3 Listen-First Technique — Workplace scenarios and documentation",
      ["Scenario: a teammate cites listen-first technique in a meeting, but details in the packet do not match the textbook example. Metrics like win rate and cycle length guide coaching. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Negotiation trades concessions with documented give-and-get.","Good documentation states facts, cites the framework, and records the decision. Follow-up cadences respect buyer attention without harassment. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Proposals align scope, price, timeline, and success criteria. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    ),
    section(
      "listen-first-s4",
      "2.4 Listen-First Technique — Common mistakes and how to avoid them",
      ["Common mistakes around listen-first technique include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Negotiation trades concessions with documented give-and-get.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Follow-up cadences respect buyer attention without harassment. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Proposals align scope, price, timeline, and success criteria. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Pipeline stages should mean observable buyer behaviors. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    ),
    section(
      "listen-first-s5",
      "2.5 Listen-First Technique — Putting the chapter together",
      ["This chapter’s through-line is simple: Listen-First Technique connects principles to accountable action. Follow-up cadences respect buyer attention without harassment.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Proposals align scope, price, timeline, and success criteria. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits listen-first technique in your field. Pipeline stages should mean observable buyer behaviors. Social proof reduces perceived risk for new buyers."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    )
    ],
    {
      learningObjectives: ["Define listen-first technique and explain why it matters in Objection Handling","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Listen-First Technique connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."],
      realWorldRelevance: "Strong grasp of listen-first technique reduces rework, supports defensible records, and speeds collaboration across Objection Handling.",
    }
  ),
  chapter(
    "price-objections",
    3,
    "Price Objections",
    [
    section(
      "price-objections-s1",
      "3.1 Price Objections — Foundations and vocabulary",
      ["Price Objections is a foundation in Objection Handling because ethical selling refuses to misrepresent capabilities or pricing. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Proposals align scope, price, timeline, and success criteria. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain price objections aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat price objections as a shared model for decisions. Objections often mask timing, budget, or trust—not product flaws. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "price-objections-s2",
      "3.2 Price Objections — How professionals apply this in practice",
      ["Professionals rarely dispute whether price objections exists—they dispute how proposals align scope, price, timeline, and success criteria. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Objections often mask timing, budget, or trust—not product flaws.","When stakes rise, pause for a second opinion or formal review. CRM hygiene makes forecasts trustworthy for managers and reps. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Onboarding handoffs prevent churn right after the signature. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    ),
    section(
      "price-objections-s3",
      "3.3 Price Objections — Workplace scenarios and documentation",
      ["Scenario: a teammate cites price objections in a meeting, but details in the packet do not match the textbook example. Objections often mask timing, budget, or trust—not product flaws. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. CRM hygiene makes forecasts trustworthy for managers and reps.","Good documentation states facts, cites the framework, and records the decision. Onboarding handoffs prevent churn right after the signature. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Discovery questions diagnose pain before pitching features. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Proposals align scope, price, timeline, and success criteria."]
      }
    ),
    section(
      "price-objections-s4",
      "3.4 Price Objections — Common mistakes and how to avoid them",
      ["Common mistakes around price objections include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. CRM hygiene makes forecasts trustworthy for managers and reps.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Onboarding handoffs prevent churn right after the signature. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Discovery questions diagnose pain before pitching features. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Metrics like win rate and cycle length guide coaching. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    ),
    section(
      "price-objections-s5",
      "3.5 Price Objections — Putting the chapter together",
      ["This chapter’s through-line is simple: Price Objections connects principles to accountable action. Onboarding handoffs prevent churn right after the signature.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Discovery questions diagnose pain before pitching features. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits price objections in your field. Metrics like win rate and cycle length guide coaching. Negotiation trades concessions with documented give-and-get."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    )
    ],
    {
      learningObjectives: ["Define price objections and explain why it matters in Objection Handling","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Price Objections connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Follow-up cadences respect buyer attention without harassment.","Negotiation trades concessions with documented give-and-get.","Active listening beats scripted monologues in complex deals.","Follow-up cadences respect buyer attention without harassment.","Negotiation trades concessions with documented give-and-get."],
      realWorldRelevance: "Strong grasp of price objections reduces rework, supports defensible records, and speeds collaboration across Objection Handling.",
    }
  ),
  chapter(
    "timing-objections",
    4,
    "Timing Objections",
    [
    section(
      "timing-objections-s1",
      "4.1 Timing Objections — Foundations and vocabulary",
      ["Timing Objections is a foundation in Objection Handling because active listening beats scripted monologues in complex deals. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Pipeline stages should mean observable buyer behaviors. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain timing objections aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat timing objections as a shared model for decisions. Social proof reduces perceived risk for new buyers. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "timing-objections-s2",
      "4.2 Timing Objections — How professionals apply this in practice",
      ["Professionals rarely dispute whether timing objections exists—they dispute how proposals align scope, price, timeline, and success criteria. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Active listening beats scripted monologues in complex deals.","When stakes rise, pause for a second opinion or formal review. Pipeline stages should mean observable buyer behaviors. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Social proof reduces perceived risk for new buyers. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."]
      }
    ),
    section(
      "timing-objections-s3",
      "4.3 Timing Objections — Workplace scenarios and documentation",
      ["Scenario: a teammate cites timing objections in a meeting, but details in the packet do not match the textbook example. Follow-up cadences respect buyer attention without harassment. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Proposals align scope, price, timeline, and success criteria.","Good documentation states facts, cites the framework, and records the decision. Active listening beats scripted monologues in complex deals. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Pipeline stages should mean observable buyer behaviors. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."]
      }
    ),
    section(
      "timing-objections-s4",
      "4.4 Timing Objections — Common mistakes and how to avoid them",
      ["Common mistakes around timing objections include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Negotiation trades concessions with documented give-and-get.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Follow-up cadences respect buyer attention without harassment. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Proposals align scope, price, timeline, and success criteria. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Active listening beats scripted monologues in complex deals. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."]
      }
    ),
    section(
      "timing-objections-s5",
      "4.5 Timing Objections — Putting the chapter together",
      ["This chapter’s through-line is simple: Timing Objections connects principles to accountable action. Metrics like win rate and cycle length guide coaching.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Negotiation trades concessions with documented give-and-get. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits timing objections in your field. Follow-up cadences respect buyer attention without harassment. Proposals align scope, price, timeline, and success criteria."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."]
      }
    )
    ],
    {
      learningObjectives: ["Define timing objections and explain why it matters in Objection Handling","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Timing Objections connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Objections often mask timing, budget, or trust—not product flaws.","Ethical selling refuses to misrepresent capabilities or pricing.","CRM hygiene makes forecasts trustworthy for managers and reps.","Objections often mask timing, budget, or trust—not product flaws.","Ethical selling refuses to misrepresent capabilities or pricing."],
      realWorldRelevance: "Strong grasp of timing objections reduces rework, supports defensible records, and speeds collaboration across Objection Handling.",
    }
  ),
  chapter(
    "competitor-objections",
    5,
    "Competitor Objections",
    [
    section(
      "competitor-objections-s1",
      "5.1 Competitor Objections — Foundations and vocabulary",
      ["Competitor Objections is a foundation in Objection Handling because follow-up cadences respect buyer attention without harassment. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Proposals align scope, price, timeline, and success criteria. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain competitor objections aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat competitor objections as a shared model for decisions. Active listening beats scripted monologues in complex deals. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "competitor-objections-s2",
      "5.2 Competitor Objections — How professionals apply this in practice",
      ["Professionals rarely dispute whether competitor objections exists—they dispute how proposals align scope, price, timeline, and success criteria. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Active listening beats scripted monologues in complex deals.","When stakes rise, pause for a second opinion or formal review. Pipeline stages should mean observable buyer behaviors. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Social proof reduces perceived risk for new buyers. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    ),
    section(
      "competitor-objections-s3",
      "5.3 Competitor Objections — Workplace scenarios and documentation",
      ["Scenario: a teammate cites competitor objections in a meeting, but details in the packet do not match the textbook example. Active listening beats scripted monologues in complex deals. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Pipeline stages should mean observable buyer behaviors.","Good documentation states facts, cites the framework, and records the decision. Social proof reduces perceived risk for new buyers. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Ethical selling refuses to misrepresent capabilities or pricing. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors."]
      }
    ),
    section(
      "competitor-objections-s4",
      "5.4 Competitor Objections — Common mistakes and how to avoid them",
      ["Common mistakes around competitor objections include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Pipeline stages should mean observable buyer behaviors.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Social proof reduces perceived risk for new buyers. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Ethical selling refuses to misrepresent capabilities or pricing. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Objections often mask timing, budget, or trust—not product flaws. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    ),
    section(
      "competitor-objections-s5",
      "5.5 Competitor Objections — Putting the chapter together",
      ["This chapter’s through-line is simple: Competitor Objections connects principles to accountable action. Social proof reduces perceived risk for new buyers.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Ethical selling refuses to misrepresent capabilities or pricing. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits competitor objections in your field. Objections often mask timing, budget, or trust—not product flaws. CRM hygiene makes forecasts trustworthy for managers and reps."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    )
    ],
    {
      learningObjectives: ["Define competitor objections and explain why it matters in Objection Handling","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Competitor Objections connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."],
      realWorldRelevance: "Strong grasp of competitor objections reduces rework, supports defensible records, and speeds collaboration across Objection Handling.",
    }
  ),
  chapter(
    "reframes",
    6,
    "Reframing Value",
    [
    section(
      "reframes-s1",
      "6.1 Reframing Value — Foundations and vocabulary",
      ["Reframing Value is a foundation in Objection Handling because pipeline stages should mean observable buyer behaviors. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Social proof reduces perceived risk for new buyers. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain reframing value aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat reframing value as a shared model for decisions. Ethical selling refuses to misrepresent capabilities or pricing. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "reframes-s2",
      "6.2 Reframing Value — How professionals apply this in practice",
      ["Professionals rarely dispute whether reframing value exists—they dispute how social proof reduces perceived risk for new buyers. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Ethical selling refuses to misrepresent capabilities or pricing.","When stakes rise, pause for a second opinion or formal review. Objections often mask timing, budget, or trust—not product flaws. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. CRM hygiene makes forecasts trustworthy for managers and reps. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    ),
    section(
      "reframes-s3",
      "6.3 Reframing Value — Workplace scenarios and documentation",
      ["Scenario: a teammate cites reframing value in a meeting, but details in the packet do not match the textbook example. Ethical selling refuses to misrepresent capabilities or pricing. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Objections often mask timing, budget, or trust—not product flaws.","Good documentation states facts, cites the framework, and records the decision. CRM hygiene makes forecasts trustworthy for managers and reps. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Onboarding handoffs prevent churn right after the signature. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "reframes-s4",
      "6.4 Reframing Value — Common mistakes and how to avoid them",
      ["Common mistakes around reframing value include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Objections often mask timing, budget, or trust—not product flaws.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. CRM hygiene makes forecasts trustworthy for managers and reps. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Onboarding handoffs prevent churn right after the signature. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Discovery questions diagnose pain before pitching features. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps."]
      }
    ),
    section(
      "reframes-s5",
      "6.5 Reframing Value — Putting the chapter together",
      ["This chapter’s through-line is simple: Reframing Value connects principles to accountable action. CRM hygiene makes forecasts trustworthy for managers and reps.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Onboarding handoffs prevent churn right after the signature. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits reframing value in your field. Discovery questions diagnose pain before pitching features. Metrics like win rate and cycle length guide coaching."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    )
    ],
    {
      learningObjectives: ["Define reframing value and explain why it matters in Objection Handling","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Reframing Value connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."],
      realWorldRelevance: "Strong grasp of reframing value reduces rework, supports defensible records, and speeds collaboration across Objection Handling.",
    }
  ),
  chapter(
    "trial-closes",
    7,
    "Trial Closes",
    [
    section(
      "trial-closes-s1",
      "7.1 Trial Closes — Foundations and vocabulary",
      ["Trial Closes is a foundation in Objection Handling because follow-up cadences respect buyer attention without harassment. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Proposals align scope, price, timeline, and success criteria. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain trial closes aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat trial closes as a shared model for decisions. Active listening beats scripted monologues in complex deals. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "trial-closes-s2",
      "7.2 Trial Closes — How professionals apply this in practice",
      ["Professionals rarely dispute whether trial closes exists—they dispute how negotiation trades concessions with documented give-and-get. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Follow-up cadences respect buyer attention without harassment.","When stakes rise, pause for a second opinion or formal review. Proposals align scope, price, timeline, and success criteria. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Active listening beats scripted monologues in complex deals. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."]
      }
    ),
    section(
      "trial-closes-s3",
      "7.3 Trial Closes — Workplace scenarios and documentation",
      ["Scenario: a teammate cites trial closes in a meeting, but details in the packet do not match the textbook example. Metrics like win rate and cycle length guide coaching. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Negotiation trades concessions with documented give-and-get.","Good documentation states facts, cites the framework, and records the decision. Follow-up cadences respect buyer attention without harassment. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Proposals align scope, price, timeline, and success criteria. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors."]
      }
    ),
    section(
      "trial-closes-s4",
      "7.4 Trial Closes — Common mistakes and how to avoid them",
      ["Common mistakes around trial closes include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Discovery questions diagnose pain before pitching features.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Metrics like win rate and cycle length guide coaching. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Negotiation trades concessions with documented give-and-get. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Follow-up cadences respect buyer attention without harassment. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals."]
      }
    ),
    section(
      "trial-closes-s5",
      "7.5 Trial Closes — Putting the chapter together",
      ["This chapter’s through-line is simple: Trial Closes connects principles to accountable action. Onboarding handoffs prevent churn right after the signature.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Discovery questions diagnose pain before pitching features. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits trial closes in your field. Metrics like win rate and cycle length guide coaching. Negotiation trades concessions with documented give-and-get."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."]
      }
    )
    ],
    {
      learningObjectives: ["Define trial closes and explain why it matters in Objection Handling","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Trial Closes connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Metrics like win rate and cycle length guide coaching.","Discovery questions diagnose pain before pitching features.","Negotiation trades concessions with documented give-and-get.","Metrics like win rate and cycle length guide coaching.","Discovery questions diagnose pain before pitching features."],
      realWorldRelevance: "Strong grasp of trial closes reduces rework, supports defensible records, and speeds collaboration across Objection Handling.",
    }
  ),
  chapter(
    "follow-through",
    8,
    "Follow-Through After Objections",
    [
    section(
      "follow-through-s1",
      "8.1 Follow-Through After Objections — Foundations and vocabulary",
      ["Follow-Through After Objections is a foundation in Objection Handling because metrics like win rate and cycle length guide coaching. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Negotiation trades concessions with documented give-and-get. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain follow-through after objections aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat follow-through after objections as a shared model for decisions. Proposals align scope, price, timeline, and success criteria. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Onboarding handoffs prevent churn right after the signature.","Follow-up cadences respect buyer attention without harassment.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "follow-through-s2",
      "8.2 Follow-Through After Objections — How professionals apply this in practice",
      ["Professionals rarely dispute whether follow-through after objections exists—they dispute how discovery questions diagnose pain before pitching features. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Metrics like win rate and cycle length guide coaching.","When stakes rise, pause for a second opinion or formal review. Negotiation trades concessions with documented give-and-get. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Proposals align scope, price, timeline, and success criteria. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Onboarding handoffs prevent churn right after the signature.","Follow-up cadences respect buyer attention without harassment.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "follow-through-s3",
      "8.3 Follow-Through After Objections — Workplace scenarios and documentation",
      ["Scenario: a teammate cites follow-through after objections in a meeting, but details in the packet do not match the textbook example. CRM hygiene makes forecasts trustworthy for managers and reps. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Discovery questions diagnose pain before pitching features.","Good documentation states facts, cites the framework, and records the decision. Metrics like win rate and cycle length guide coaching. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Negotiation trades concessions with documented give-and-get. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Follow-up cadences respect buyer attention without harassment.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Discovery questions diagnose pain before pitching features."]
      }
    ),
    section(
      "follow-through-s4",
      "8.4 Follow-Through After Objections — Common mistakes and how to avoid them",
      ["Common mistakes around follow-through after objections include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Objections often mask timing, budget, or trust—not product flaws.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. CRM hygiene makes forecasts trustworthy for managers and reps. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Discovery questions diagnose pain before pitching features. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Metrics like win rate and cycle length guide coaching. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Onboarding handoffs prevent churn right after the signature.","Follow-up cadences respect buyer attention without harassment.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps."]
      }
    ),
    section(
      "follow-through-s5",
      "8.5 Follow-Through After Objections — Putting the chapter together",
      ["This chapter’s through-line is simple: Follow-Through After Objections connects principles to accountable action. Follow-up cadences respect buyer attention without harassment.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Objections often mask timing, budget, or trust—not product flaws. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits follow-through after objections in your field. CRM hygiene makes forecasts trustworthy for managers and reps. Discovery questions diagnose pain before pitching features."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Onboarding handoffs prevent churn right after the signature.","Follow-up cadences respect buyer attention without harassment.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    )
    ],
    {
      learningObjectives: ["Define follow-through after objections and explain why it matters in Objection Handling","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Follow-Through After Objections connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Ethical selling refuses to misrepresent capabilities or pricing.","Social proof reduces perceived risk for new buyers.","Onboarding handoffs prevent churn right after the signature.","Ethical selling refuses to misrepresent capabilities or pricing.","Social proof reduces perceived risk for new buyers."],
      realWorldRelevance: "Strong grasp of follow-through after objections reduces rework, supports defensible records, and speeds collaboration across Objection Handling.",
    }
  )
];
