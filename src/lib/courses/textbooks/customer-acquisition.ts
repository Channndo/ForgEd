import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const CAC_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Customer Acquisition",
  subtitle: "ForgEd workforce textbook — Customer Acquisition",
  paragraphs: [
    "This ForgEd digital textbook presents Customer Acquisition at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const CAC_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "channels-acq",
    1,
    "Acquisition Channels",
    [
    section(
      "channels-acq-s1",
      "1.1 Acquisition Channels — Foundations and vocabulary",
      ["Acquisition Channels is a foundation in Customer Acquisition because active listening beats scripted monologues in complex deals. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Pipeline stages should mean observable buyer behaviors. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain acquisition channels aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat acquisition channels as a shared model for decisions. Social proof reduces perceived risk for new buyers. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "channels-acq-s2",
      "1.2 Acquisition Channels — How professionals apply this in practice",
      ["Professionals rarely dispute whether acquisition channels exists—they dispute how proposals align scope, price, timeline, and success criteria. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Active listening beats scripted monologues in complex deals.","When stakes rise, pause for a second opinion or formal review. Pipeline stages should mean observable buyer behaviors. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Social proof reduces perceived risk for new buyers. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps."]
      }
    ),
    section(
      "channels-acq-s3",
      "1.3 Acquisition Channels — Workplace scenarios and documentation",
      ["Scenario: a teammate cites acquisition channels in a meeting, but details in the packet do not match the textbook example. Follow-up cadences respect buyer attention without harassment. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Proposals align scope, price, timeline, and success criteria.","Good documentation states facts, cites the framework, and records the decision. Active listening beats scripted monologues in complex deals. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Pipeline stages should mean observable buyer behaviors. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."]
      }
    ),
    section(
      "channels-acq-s4",
      "1.4 Acquisition Channels — Common mistakes and how to avoid them",
      ["Common mistakes around acquisition channels include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Negotiation trades concessions with documented give-and-get.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Follow-up cadences respect buyer attention without harassment. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Proposals align scope, price, timeline, and success criteria. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Active listening beats scripted monologues in complex deals. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    ),
    section(
      "channels-acq-s5",
      "1.5 Acquisition Channels — Putting the chapter together",
      ["This chapter’s through-line is simple: Acquisition Channels connects principles to accountable action. Metrics like win rate and cycle length guide coaching.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Negotiation trades concessions with documented give-and-get. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits acquisition channels in your field. Follow-up cadences respect buyer attention without harassment. Proposals align scope, price, timeline, and success criteria."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps."]
      }
    )
    ],
    {
      learningObjectives: ["Define acquisition channels and explain why it matters in Customer Acquisition","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Acquisition Channels connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Social proof reduces perceived risk for new buyers.","Pipeline stages should mean observable buyer behaviors.","Ethical selling refuses to misrepresent capabilities or pricing.","Social proof reduces perceived risk for new buyers.","Pipeline stages should mean observable buyer behaviors."],
      realWorldRelevance: "Strong grasp of acquisition channels reduces rework, supports defensible records, and speeds collaboration across Customer Acquisition.",
    }
  ),
  chapter(
    "cac-ltv",
    2,
    "CAC and LTV",
    [
    section(
      "cac-ltv-s1",
      "2.1 CAC and LTV — Foundations and vocabulary",
      ["CAC and LTV is a foundation in Customer Acquisition because ethical selling refuses to misrepresent capabilities or pricing. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Objections often mask timing, budget, or trust—not product flaws. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain cac and ltv aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat cac and ltv as a shared model for decisions. CRM hygiene makes forecasts trustworthy for managers and reps. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "cac-ltv-s2",
      "2.2 CAC and LTV — How professionals apply this in practice",
      ["Professionals rarely dispute whether cac and ltv exists—they dispute how objections often mask timing, budget, or trust—not product flaws. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. CRM hygiene makes forecasts trustworthy for managers and reps.","When stakes rise, pause for a second opinion or formal review. Onboarding handoffs prevent churn right after the signature. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Discovery questions diagnose pain before pitching features. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    ),
    section(
      "cac-ltv-s3",
      "2.3 CAC and LTV — Workplace scenarios and documentation",
      ["Scenario: a teammate cites cac and ltv in a meeting, but details in the packet do not match the textbook example. CRM hygiene makes forecasts trustworthy for managers and reps. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Onboarding handoffs prevent churn right after the signature.","Good documentation states facts, cites the framework, and records the decision. Discovery questions diagnose pain before pitching features. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Metrics like win rate and cycle length guide coaching. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "cac-ltv-s4",
      "2.4 CAC and LTV — Common mistakes and how to avoid them",
      ["Common mistakes around cac and ltv include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Onboarding handoffs prevent churn right after the signature.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Discovery questions diagnose pain before pitching features. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Metrics like win rate and cycle length guide coaching. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Negotiation trades concessions with documented give-and-get. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    ),
    section(
      "cac-ltv-s5",
      "2.5 CAC and LTV — Putting the chapter together",
      ["This chapter’s through-line is simple: CAC and LTV connects principles to accountable action. Discovery questions diagnose pain before pitching features.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Metrics like win rate and cycle length guide coaching. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits cac and ltv in your field. Negotiation trades concessions with documented give-and-get. Follow-up cadences respect buyer attention without harassment."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    )
    ],
    {
      learningObjectives: ["Define cac and ltv and explain why it matters in Customer Acquisition","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "CAC and LTV connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Proposals align scope, price, timeline, and success criteria.","Follow-up cadences respect buyer attention without harassment.","Active listening beats scripted monologues in complex deals.","Proposals align scope, price, timeline, and success criteria.","Follow-up cadences respect buyer attention without harassment."],
      realWorldRelevance: "Strong grasp of cac and ltv reduces rework, supports defensible records, and speeds collaboration across Customer Acquisition.",
    }
  ),
  chapter(
    "experiments-growth",
    3,
    "Growth Experiments",
    [
    section(
      "experiments-growth-s1",
      "3.1 Growth Experiments — Foundations and vocabulary",
      ["Growth Experiments is a foundation in Customer Acquisition because onboarding handoffs prevent churn right after the signature. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Discovery questions diagnose pain before pitching features. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain growth experiments aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat growth experiments as a shared model for decisions. Metrics like win rate and cycle length guide coaching. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "experiments-growth-s2",
      "3.2 Growth Experiments — How professionals apply this in practice",
      ["Professionals rarely dispute whether growth experiments exists—they dispute how cRM hygiene makes forecasts trustworthy for managers and reps. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Onboarding handoffs prevent churn right after the signature.","When stakes rise, pause for a second opinion or formal review. Discovery questions diagnose pain before pitching features. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Metrics like win rate and cycle length guide coaching. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    ),
    section(
      "experiments-growth-s3",
      "3.3 Growth Experiments — Workplace scenarios and documentation",
      ["Scenario: a teammate cites growth experiments in a meeting, but details in the packet do not match the textbook example. Objections often mask timing, budget, or trust—not product flaws. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. CRM hygiene makes forecasts trustworthy for managers and reps.","Good documentation states facts, cites the framework, and records the decision. Onboarding handoffs prevent churn right after the signature. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Discovery questions diagnose pain before pitching features. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps."]
      }
    ),
    section(
      "experiments-growth-s4",
      "3.4 Growth Experiments — Common mistakes and how to avoid them",
      ["Common mistakes around growth experiments include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Ethical selling refuses to misrepresent capabilities or pricing.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Objections often mask timing, budget, or trust—not product flaws. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. CRM hygiene makes forecasts trustworthy for managers and reps. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Onboarding handoffs prevent churn right after the signature. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "experiments-growth-s5",
      "3.5 Growth Experiments — Putting the chapter together",
      ["This chapter’s through-line is simple: Growth Experiments connects principles to accountable action. Social proof reduces perceived risk for new buyers.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Ethical selling refuses to misrepresent capabilities or pricing. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits growth experiments in your field. Objections often mask timing, budget, or trust—not product flaws. CRM hygiene makes forecasts trustworthy for managers and reps."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    )
    ],
    {
      learningObjectives: ["Define growth experiments and explain why it matters in Customer Acquisition","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Growth Experiments connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Active listening beats scripted monologues in complex deals.","Proposals align scope, price, timeline, and success criteria.","Pipeline stages should mean observable buyer behaviors.","Active listening beats scripted monologues in complex deals.","Proposals align scope, price, timeline, and success criteria."],
      realWorldRelevance: "Strong grasp of growth experiments reduces rework, supports defensible records, and speeds collaboration across Customer Acquisition.",
    }
  ),
  chapter(
    "content-acq",
    4,
    "Content Marketing",
    [
    section(
      "content-acq-s1",
      "4.1 Content Marketing — Foundations and vocabulary",
      ["Content Marketing is a foundation in Customer Acquisition because metrics like win rate and cycle length guide coaching. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Negotiation trades concessions with documented give-and-get. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain content marketing aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat content marketing as a shared model for decisions. Follow-up cadences respect buyer attention without harassment. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "content-acq-s2",
      "4.2 Content Marketing — How professionals apply this in practice",
      ["Professionals rarely dispute whether content marketing exists—they dispute how discovery questions diagnose pain before pitching features. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Metrics like win rate and cycle length guide coaching.","When stakes rise, pause for a second opinion or formal review. Negotiation trades concessions with documented give-and-get. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Follow-up cadences respect buyer attention without harassment. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors."]
      }
    ),
    section(
      "content-acq-s3",
      "4.3 Content Marketing — Workplace scenarios and documentation",
      ["Scenario: a teammate cites content marketing in a meeting, but details in the packet do not match the textbook example. Onboarding handoffs prevent churn right after the signature. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Discovery questions diagnose pain before pitching features.","Good documentation states facts, cites the framework, and records the decision. Metrics like win rate and cycle length guide coaching. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Negotiation trades concessions with documented give-and-get. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    ),
    section(
      "content-acq-s4",
      "4.4 Content Marketing — Common mistakes and how to avoid them",
      ["Common mistakes around content marketing include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. CRM hygiene makes forecasts trustworthy for managers and reps.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Onboarding handoffs prevent churn right after the signature. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Discovery questions diagnose pain before pitching features. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Metrics like win rate and cycle length guide coaching. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    ),
    section(
      "content-acq-s5",
      "4.5 Content Marketing — Putting the chapter together",
      ["This chapter’s through-line is simple: Content Marketing connects principles to accountable action. Objections often mask timing, budget, or trust—not product flaws.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. CRM hygiene makes forecasts trustworthy for managers and reps. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits content marketing in your field. Onboarding handoffs prevent churn right after the signature. Discovery questions diagnose pain before pitching features."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors."]
      }
    )
    ],
    {
      learningObjectives: ["Define content marketing and explain why it matters in Customer Acquisition","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Content Marketing connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Follow-up cadences respect buyer attention without harassment.","Negotiation trades concessions with documented give-and-get.","Proposals align scope, price, timeline, and success criteria.","Follow-up cadences respect buyer attention without harassment.","Negotiation trades concessions with documented give-and-get."],
      realWorldRelevance: "Strong grasp of content marketing reduces rework, supports defensible records, and speeds collaboration across Customer Acquisition.",
    }
  ),
  chapter(
    "paid-acq",
    5,
    "Paid Acquisition Intro",
    [
    section(
      "paid-acq-s1",
      "5.1 Paid Acquisition Intro — Foundations and vocabulary",
      ["Paid Acquisition Intro is a foundation in Customer Acquisition because active listening beats scripted monologues in complex deals. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Pipeline stages should mean observable buyer behaviors. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain paid acquisition intro aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat paid acquisition intro as a shared model for decisions. Social proof reduces perceived risk for new buyers. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "paid-acq-s2",
      "5.2 Paid Acquisition Intro — How professionals apply this in practice",
      ["Professionals rarely dispute whether paid acquisition intro exists—they dispute how pipeline stages should mean observable buyer behaviors. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Social proof reduces perceived risk for new buyers.","When stakes rise, pause for a second opinion or formal review. Ethical selling refuses to misrepresent capabilities or pricing. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Objections often mask timing, budget, or trust—not product flaws. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."]
      }
    ),
    section(
      "paid-acq-s3",
      "5.3 Paid Acquisition Intro — Workplace scenarios and documentation",
      ["Scenario: a teammate cites paid acquisition intro in a meeting, but details in the packet do not match the textbook example. Social proof reduces perceived risk for new buyers. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Ethical selling refuses to misrepresent capabilities or pricing.","Good documentation states facts, cites the framework, and records the decision. Objections often mask timing, budget, or trust—not product flaws. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. CRM hygiene makes forecasts trustworthy for managers and reps. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps."]
      }
    ),
    section(
      "paid-acq-s4",
      "5.4 Paid Acquisition Intro — Common mistakes and how to avoid them",
      ["Common mistakes around paid acquisition intro include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Ethical selling refuses to misrepresent capabilities or pricing.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Objections often mask timing, budget, or trust—not product flaws. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. CRM hygiene makes forecasts trustworthy for managers and reps. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Onboarding handoffs prevent churn right after the signature. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    ),
    section(
      "paid-acq-s5",
      "5.5 Paid Acquisition Intro — Putting the chapter together",
      ["This chapter’s through-line is simple: Paid Acquisition Intro connects principles to accountable action. Objections often mask timing, budget, or trust—not product flaws.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. CRM hygiene makes forecasts trustworthy for managers and reps. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits paid acquisition intro in your field. Onboarding handoffs prevent churn right after the signature. Discovery questions diagnose pain before pitching features."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."]
      }
    )
    ],
    {
      learningObjectives: ["Define paid acquisition intro and explain why it matters in Customer Acquisition","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Paid Acquisition Intro connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."],
      realWorldRelevance: "Strong grasp of paid acquisition intro reduces rework, supports defensible records, and speeds collaboration across Customer Acquisition.",
    }
  ),
  chapter(
    "referrals",
    6,
    "Referral Programs",
    [
    section(
      "referrals-s1",
      "6.1 Referral Programs — Foundations and vocabulary",
      ["Referral Programs is a foundation in Customer Acquisition because ethical selling refuses to misrepresent capabilities or pricing. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Objections often mask timing, budget, or trust—not product flaws. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain referral programs aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat referral programs as a shared model for decisions. CRM hygiene makes forecasts trustworthy for managers and reps. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "referrals-s2",
      "6.2 Referral Programs — How professionals apply this in practice",
      ["Professionals rarely dispute whether referral programs exists—they dispute how social proof reduces perceived risk for new buyers. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Ethical selling refuses to misrepresent capabilities or pricing.","When stakes rise, pause for a second opinion or formal review. Objections often mask timing, budget, or trust—not product flaws. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. CRM hygiene makes forecasts trustworthy for managers and reps. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    ),
    section(
      "referrals-s3",
      "6.3 Referral Programs — Workplace scenarios and documentation",
      ["Scenario: a teammate cites referral programs in a meeting, but details in the packet do not match the textbook example. Pipeline stages should mean observable buyer behaviors. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Social proof reduces perceived risk for new buyers.","Good documentation states facts, cites the framework, and records the decision. Ethical selling refuses to misrepresent capabilities or pricing. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Objections often mask timing, budget, or trust—not product flaws. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "referrals-s4",
      "6.4 Referral Programs — Common mistakes and how to avoid them",
      ["Common mistakes around referral programs include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Active listening beats scripted monologues in complex deals.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Pipeline stages should mean observable buyer behaviors. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Social proof reduces perceived risk for new buyers. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Ethical selling refuses to misrepresent capabilities or pricing. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    ),
    section(
      "referrals-s5",
      "6.5 Referral Programs — Putting the chapter together",
      ["This chapter’s through-line is simple: Referral Programs connects principles to accountable action. Proposals align scope, price, timeline, and success criteria.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Active listening beats scripted monologues in complex deals. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits referral programs in your field. Pipeline stages should mean observable buyer behaviors. Social proof reduces perceived risk for new buyers."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    )
    ],
    {
      learningObjectives: ["Define referral programs and explain why it matters in Customer Acquisition","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Referral Programs connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Proposals align scope, price, timeline, and success criteria.","Follow-up cadences respect buyer attention without harassment.","Active listening beats scripted monologues in complex deals.","Proposals align scope, price, timeline, and success criteria.","Follow-up cadences respect buyer attention without harassment."],
      realWorldRelevance: "Strong grasp of referral programs reduces rework, supports defensible records, and speeds collaboration across Customer Acquisition.",
    }
  ),
  chapter(
    "partnerships",
    7,
    "Partnerships",
    [
    section(
      "partnerships-s1",
      "7.1 Partnerships — Foundations and vocabulary",
      ["Partnerships is a foundation in Customer Acquisition because metrics like win rate and cycle length guide coaching. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Negotiation trades concessions with documented give-and-get. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain partnerships aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat partnerships as a shared model for decisions. Follow-up cadences respect buyer attention without harassment. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "partnerships-s2",
      "7.2 Partnerships — How professionals apply this in practice",
      ["Professionals rarely dispute whether partnerships exists—they dispute how discovery questions diagnose pain before pitching features. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Metrics like win rate and cycle length guide coaching.","When stakes rise, pause for a second opinion or formal review. Negotiation trades concessions with documented give-and-get. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Follow-up cadences respect buyer attention without harassment. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."]
      }
    ),
    section(
      "partnerships-s3",
      "7.3 Partnerships — Workplace scenarios and documentation",
      ["Scenario: a teammate cites partnerships in a meeting, but details in the packet do not match the textbook example. Onboarding handoffs prevent churn right after the signature. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Discovery questions diagnose pain before pitching features.","Good documentation states facts, cites the framework, and records the decision. Metrics like win rate and cycle length guide coaching. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Negotiation trades concessions with documented give-and-get. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."]
      }
    ),
    section(
      "partnerships-s4",
      "7.4 Partnerships — Common mistakes and how to avoid them",
      ["Common mistakes around partnerships include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. CRM hygiene makes forecasts trustworthy for managers and reps.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Onboarding handoffs prevent churn right after the signature. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Discovery questions diagnose pain before pitching features. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Metrics like win rate and cycle length guide coaching. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."]
      }
    ),
    section(
      "partnerships-s5",
      "7.5 Partnerships — Putting the chapter together",
      ["This chapter’s through-line is simple: Partnerships connects principles to accountable action. Objections often mask timing, budget, or trust—not product flaws.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. CRM hygiene makes forecasts trustworthy for managers and reps. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits partnerships in your field. Onboarding handoffs prevent churn right after the signature. Discovery questions diagnose pain before pitching features."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."]
      }
    )
    ],
    {
      learningObjectives: ["Define partnerships and explain why it matters in Customer Acquisition","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Partnerships connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps."],
      realWorldRelevance: "Strong grasp of partnerships reduces rework, supports defensible records, and speeds collaboration across Customer Acquisition.",
    }
  ),
  chapter(
    "measure-acq",
    8,
    "Measuring Acquisition",
    [
    section(
      "measure-acq-s1",
      "8.1 Measuring Acquisition — Foundations and vocabulary",
      ["Measuring Acquisition is a foundation in Customer Acquisition because CRM hygiene makes forecasts trustworthy for managers and reps. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Onboarding handoffs prevent churn right after the signature. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain measuring acquisition aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat measuring acquisition as a shared model for decisions. Discovery questions diagnose pain before pitching features. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "measure-acq-s2",
      "8.2 Measuring Acquisition — How professionals apply this in practice",
      ["Professionals rarely dispute whether measuring acquisition exists—they dispute how objections often mask timing, budget, or trust—not product flaws. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. CRM hygiene makes forecasts trustworthy for managers and reps.","When stakes rise, pause for a second opinion or formal review. Onboarding handoffs prevent churn right after the signature. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Discovery questions diagnose pain before pitching features. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    ),
    section(
      "measure-acq-s3",
      "8.3 Measuring Acquisition — Workplace scenarios and documentation",
      ["Scenario: a teammate cites measuring acquisition in a meeting, but details in the packet do not match the textbook example. Ethical selling refuses to misrepresent capabilities or pricing. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Objections often mask timing, budget, or trust—not product flaws.","Good documentation states facts, cites the framework, and records the decision. CRM hygiene makes forecasts trustworthy for managers and reps. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Onboarding handoffs prevent churn right after the signature. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals."]
      }
    ),
    section(
      "measure-acq-s4",
      "8.4 Measuring Acquisition — Common mistakes and how to avoid them",
      ["Common mistakes around measuring acquisition include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Social proof reduces perceived risk for new buyers.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Ethical selling refuses to misrepresent capabilities or pricing. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Objections often mask timing, budget, or trust—not product flaws. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. CRM hygiene makes forecasts trustworthy for managers and reps. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors."]
      }
    ),
    section(
      "measure-acq-s5",
      "8.5 Measuring Acquisition — Putting the chapter together",
      ["This chapter’s through-line is simple: Measuring Acquisition connects principles to accountable action. Pipeline stages should mean observable buyer behaviors.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Social proof reduces perceived risk for new buyers. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits measuring acquisition in your field. Ethical selling refuses to misrepresent capabilities or pricing. Objections often mask timing, budget, or trust—not product flaws."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    )
    ],
    {
      learningObjectives: ["Define measuring acquisition and explain why it matters in Customer Acquisition","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Measuring Acquisition connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."],
      realWorldRelevance: "Strong grasp of measuring acquisition reduces rework, supports defensible records, and speeds collaboration across Customer Acquisition.",
    }
  )
];
