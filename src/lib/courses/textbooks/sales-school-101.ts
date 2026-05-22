import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const SALES_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Sales School 101",
  subtitle: "ForgEd workforce textbook — Sales School 101",
  paragraphs: [
    "This ForgEd digital textbook presents Sales School 101 at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const SALES_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "sales-cycle",
    1,
    "The Modern Sales Cycle",
    [
    section(
      "sales-cycle-s1",
      "1.1 The Modern Sales Cycle — Foundations and vocabulary",
      ["The Modern Sales Cycle is a foundation in Sales School 101 because pipeline stages should mean observable buyer behaviors. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Social proof reduces perceived risk for new buyers. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain the modern sales cycle aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat the modern sales cycle as a shared model for decisions. Ethical selling refuses to misrepresent capabilities or pricing. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Metrics like win rate and cycle length guide coaching."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "sales-cycle-s2",
      "1.2 The Modern Sales Cycle — How professionals apply this in practice",
      ["Professionals rarely dispute whether the modern sales cycle exists—they dispute how active listening beats scripted monologues in complex deals. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Pipeline stages should mean observable buyer behaviors.","When stakes rise, pause for a second opinion or formal review. Social proof reduces perceived risk for new buyers. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Ethical selling refuses to misrepresent capabilities or pricing. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "sales-cycle-s3",
      "1.3 The Modern Sales Cycle — Workplace scenarios and documentation",
      ["Scenario: a teammate cites the modern sales cycle in a meeting, but details in the packet do not match the textbook example. Proposals align scope, price, timeline, and success criteria. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Active listening beats scripted monologues in complex deals.","Good documentation states facts, cites the framework, and records the decision. Pipeline stages should mean observable buyer behaviors. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Social proof reduces perceived risk for new buyers. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Metrics like win rate and cycle length guide coaching.","CRM hygiene makes forecasts trustworthy for managers and reps."]
      }
    ),
    section(
      "sales-cycle-s4",
      "1.4 The Modern Sales Cycle — Common mistakes and how to avoid them",
      ["Common mistakes around the modern sales cycle include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Follow-up cadences respect buyer attention without harassment.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Proposals align scope, price, timeline, and success criteria. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Active listening beats scripted monologues in complex deals. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Pipeline stages should mean observable buyer behaviors. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Metrics like win rate and cycle length guide coaching."]
      }
    ),
    section(
      "sales-cycle-s5",
      "1.5 The Modern Sales Cycle — Putting the chapter together",
      ["This chapter’s through-line is simple: The Modern Sales Cycle connects principles to accountable action. Negotiation trades concessions with documented give-and-get.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Follow-up cadences respect buyer attention without harassment. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits the modern sales cycle in your field. Proposals align scope, price, timeline, and success criteria. Active listening beats scripted monologues in complex deals."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    )
    ],
    {
      learningObjectives: ["Define the modern sales cycle and explain why it matters in Sales School 101","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "The Modern Sales Cycle connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Pipeline stages should mean observable buyer behaviors.","Active listening beats scripted monologues in complex deals.","Social proof reduces perceived risk for new buyers.","Pipeline stages should mean observable buyer behaviors.","Active listening beats scripted monologues in complex deals."],
      realWorldRelevance: "Strong grasp of the modern sales cycle reduces rework, supports defensible records, and speeds collaboration across Sales School 101.",
    }
  ),
  chapter(
    "icp",
    2,
    "Ideal Customer Profile",
    [
    section(
      "icp-s1",
      "2.1 Ideal Customer Profile — Foundations and vocabulary",
      ["Ideal Customer Profile is a foundation in Sales School 101 because proposals align scope, price, timeline, and success criteria. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Active listening beats scripted monologues in complex deals. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ideal customer profile aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ideal customer profile as a shared model for decisions. Pipeline stages should mean observable buyer behaviors. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "icp-s2",
      "2.2 Ideal Customer Profile — How professionals apply this in practice",
      ["Professionals rarely dispute whether ideal customer profile exists—they dispute how active listening beats scripted monologues in complex deals. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Pipeline stages should mean observable buyer behaviors.","When stakes rise, pause for a second opinion or formal review. Social proof reduces perceived risk for new buyers. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Ethical selling refuses to misrepresent capabilities or pricing. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."]
      }
    ),
    section(
      "icp-s3",
      "2.3 Ideal Customer Profile — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ideal customer profile in a meeting, but details in the packet do not match the textbook example. Pipeline stages should mean observable buyer behaviors. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Social proof reduces perceived risk for new buyers.","Good documentation states facts, cites the framework, and records the decision. Ethical selling refuses to misrepresent capabilities or pricing. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Objections often mask timing, budget, or trust—not product flaws. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    ),
    section(
      "icp-s4",
      "2.4 Ideal Customer Profile — Common mistakes and how to avoid them",
      ["Common mistakes around ideal customer profile include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Social proof reduces perceived risk for new buyers.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Ethical selling refuses to misrepresent capabilities or pricing. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Objections often mask timing, budget, or trust—not product flaws. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. CRM hygiene makes forecasts trustworthy for managers and reps. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."]
      }
    ),
    section(
      "icp-s5",
      "2.5 Ideal Customer Profile — Putting the chapter together",
      ["This chapter’s through-line is simple: Ideal Customer Profile connects principles to accountable action. Ethical selling refuses to misrepresent capabilities or pricing.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Objections often mask timing, budget, or trust—not product flaws. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ideal customer profile in your field. CRM hygiene makes forecasts trustworthy for managers and reps. Onboarding handoffs prevent churn right after the signature."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."]
      }
    )
    ],
    {
      learningObjectives: ["Define ideal customer profile and explain why it matters in Sales School 101","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Ideal Customer Profile connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."],
      realWorldRelevance: "Strong grasp of ideal customer profile reduces rework, supports defensible records, and speeds collaboration across Sales School 101.",
    }
  ),
  chapter(
    "discovery",
    3,
    "Discovery Conversations",
    [
    section(
      "discovery-s1",
      "3.1 Discovery Conversations — Foundations and vocabulary",
      ["Discovery Conversations is a foundation in Sales School 101 because discovery questions diagnose pain before pitching features. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: CRM hygiene makes forecasts trustworthy for managers and reps. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain discovery conversations aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat discovery conversations as a shared model for decisions. Onboarding handoffs prevent churn right after the signature. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "discovery-s2",
      "3.2 Discovery Conversations — How professionals apply this in practice",
      ["Professionals rarely dispute whether discovery conversations exists—they dispute how cRM hygiene makes forecasts trustworthy for managers and reps. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Onboarding handoffs prevent churn right after the signature.","When stakes rise, pause for a second opinion or formal review. Metrics like win rate and cycle length guide coaching. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Negotiation trades concessions with documented give-and-get. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals."]
      }
    ),
    section(
      "discovery-s3",
      "3.3 Discovery Conversations — Workplace scenarios and documentation",
      ["Scenario: a teammate cites discovery conversations in a meeting, but details in the packet do not match the textbook example. Onboarding handoffs prevent churn right after the signature. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Metrics like win rate and cycle length guide coaching.","Good documentation states facts, cites the framework, and records the decision. Negotiation trades concessions with documented give-and-get. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Follow-up cadences respect buyer attention without harassment. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    ),
    section(
      "discovery-s4",
      "3.4 Discovery Conversations — Common mistakes and how to avoid them",
      ["Common mistakes around discovery conversations include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Metrics like win rate and cycle length guide coaching.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Negotiation trades concessions with documented give-and-get. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Follow-up cadences respect buyer attention without harassment. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Proposals align scope, price, timeline, and success criteria. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors."]
      }
    ),
    section(
      "discovery-s5",
      "3.5 Discovery Conversations — Putting the chapter together",
      ["This chapter’s through-line is simple: Discovery Conversations connects principles to accountable action. Negotiation trades concessions with documented give-and-get.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Follow-up cadences respect buyer attention without harassment. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits discovery conversations in your field. Proposals align scope, price, timeline, and success criteria. Active listening beats scripted monologues in complex deals."], {
        bulletPoints: ["Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals."]
      }
    )
    ],
    {
      learningObjectives: ["Define discovery conversations and explain why it matters in Sales School 101","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Discovery Conversations connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Negotiation trades concessions with documented give-and-get.","Metrics like win rate and cycle length guide coaching.","Follow-up cadences respect buyer attention without harassment.","Negotiation trades concessions with documented give-and-get.","Metrics like win rate and cycle length guide coaching."],
      realWorldRelevance: "Strong grasp of discovery conversations reduces rework, supports defensible records, and speeds collaboration across Sales School 101.",
    }
  ),
  chapter(
    "value-prop",
    4,
    "Value Propositions",
    [
    section(
      "value-prop-s1",
      "4.1 Value Propositions — Foundations and vocabulary",
      ["Value Propositions is a foundation in Sales School 101 because negotiation trades concessions with documented give-and-get. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Follow-up cadences respect buyer attention without harassment. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain value propositions aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat value propositions as a shared model for decisions. Proposals align scope, price, timeline, and success criteria. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "value-prop-s2",
      "4.2 Value Propositions — How professionals apply this in practice",
      ["Professionals rarely dispute whether value propositions exists—they dispute how metrics like win rate and cycle length guide coaching. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Negotiation trades concessions with documented give-and-get.","When stakes rise, pause for a second opinion or formal review. Follow-up cadences respect buyer attention without harassment. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Proposals align scope, price, timeline, and success criteria. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    ),
    section(
      "value-prop-s3",
      "4.3 Value Propositions — Workplace scenarios and documentation",
      ["Scenario: a teammate cites value propositions in a meeting, but details in the packet do not match the textbook example. Discovery questions diagnose pain before pitching features. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Metrics like win rate and cycle length guide coaching.","Good documentation states facts, cites the framework, and records the decision. Negotiation trades concessions with documented give-and-get. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Follow-up cadences respect buyer attention without harassment. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals."]
      }
    ),
    section(
      "value-prop-s4",
      "4.4 Value Propositions — Common mistakes and how to avoid them",
      ["Common mistakes around value propositions include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Onboarding handoffs prevent churn right after the signature.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Discovery questions diagnose pain before pitching features. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Metrics like win rate and cycle length guide coaching. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Negotiation trades concessions with documented give-and-get. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors."]
      }
    ),
    section(
      "value-prop-s5",
      "4.5 Value Propositions — Putting the chapter together",
      ["This chapter’s through-line is simple: Value Propositions connects principles to accountable action. CRM hygiene makes forecasts trustworthy for managers and reps.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Onboarding handoffs prevent churn right after the signature. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits value propositions in your field. Discovery questions diagnose pain before pitching features. Metrics like win rate and cycle length guide coaching."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    )
    ],
    {
      learningObjectives: ["Define value propositions and explain why it matters in Sales School 101","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Value Propositions connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."],
      realWorldRelevance: "Strong grasp of value propositions reduces rework, supports defensible records, and speeds collaboration across Sales School 101.",
    }
  ),
  chapter(
    "demo-basics",
    5,
    "Demonstrations That Convert",
    [
    section(
      "demo-basics-s1",
      "5.1 Demonstrations That Convert — Foundations and vocabulary",
      ["Demonstrations That Convert is a foundation in Sales School 101 because discovery questions diagnose pain before pitching features. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Metrics like win rate and cycle length guide coaching. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain demonstrations that convert aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat demonstrations that convert as a shared model for decisions. Negotiation trades concessions with documented give-and-get. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "demo-basics-s2",
      "5.2 Demonstrations That Convert — How professionals apply this in practice",
      ["Professionals rarely dispute whether demonstrations that convert exists—they dispute how onboarding handoffs prevent churn right after the signature. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Discovery questions diagnose pain before pitching features.","When stakes rise, pause for a second opinion or formal review. Metrics like win rate and cycle length guide coaching. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Negotiation trades concessions with documented give-and-get. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."]
      }
    ),
    section(
      "demo-basics-s3",
      "5.3 Demonstrations That Convert — Workplace scenarios and documentation",
      ["Scenario: a teammate cites demonstrations that convert in a meeting, but details in the packet do not match the textbook example. CRM hygiene makes forecasts trustworthy for managers and reps. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Onboarding handoffs prevent churn right after the signature.","Good documentation states facts, cites the framework, and records the decision. Discovery questions diagnose pain before pitching features. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Metrics like win rate and cycle length guide coaching. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    ),
    section(
      "demo-basics-s4",
      "5.4 Demonstrations That Convert — Common mistakes and how to avoid them",
      ["Common mistakes around demonstrations that convert include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Objections often mask timing, budget, or trust—not product flaws.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. CRM hygiene makes forecasts trustworthy for managers and reps. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Onboarding handoffs prevent churn right after the signature. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Discovery questions diagnose pain before pitching features. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."]
      }
    ),
    section(
      "demo-basics-s5",
      "5.5 Demonstrations That Convert — Putting the chapter together",
      ["This chapter’s through-line is simple: Demonstrations That Convert connects principles to accountable action. Ethical selling refuses to misrepresent capabilities or pricing.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Objections often mask timing, budget, or trust—not product flaws. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits demonstrations that convert in your field. CRM hygiene makes forecasts trustworthy for managers and reps. Onboarding handoffs prevent churn right after the signature."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."]
      }
    )
    ],
    {
      learningObjectives: ["Define demonstrations that convert and explain why it matters in Sales School 101","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Demonstrations That Convert connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."],
      realWorldRelevance: "Strong grasp of demonstrations that convert reduces rework, supports defensible records, and speeds collaboration across Sales School 101.",
    }
  ),
  chapter(
    "pipeline",
    6,
    "Pipeline Management",
    [
    section(
      "pipeline-s1",
      "6.1 Pipeline Management — Foundations and vocabulary",
      ["Pipeline Management is a foundation in Sales School 101 because proposals align scope, price, timeline, and success criteria. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Active listening beats scripted monologues in complex deals. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain pipeline management aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat pipeline management as a shared model for decisions. Social proof reduces perceived risk for new buyers. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "pipeline-s2",
      "6.2 Pipeline Management — How professionals apply this in practice",
      ["Professionals rarely dispute whether pipeline management exists—they dispute how active listening beats scripted monologues in complex deals. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Social proof reduces perceived risk for new buyers.","When stakes rise, pause for a second opinion or formal review. Ethical selling refuses to misrepresent capabilities or pricing. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Objections often mask timing, budget, or trust—not product flaws. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."]
      }
    ),
    section(
      "pipeline-s3",
      "6.3 Pipeline Management — Workplace scenarios and documentation",
      ["Scenario: a teammate cites pipeline management in a meeting, but details in the packet do not match the textbook example. Social proof reduces perceived risk for new buyers. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Ethical selling refuses to misrepresent capabilities or pricing.","Good documentation states facts, cites the framework, and records the decision. Objections often mask timing, budget, or trust—not product flaws. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Pipeline stages should mean observable buyer behaviors. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."]
      }
    ),
    section(
      "pipeline-s4",
      "6.4 Pipeline Management — Common mistakes and how to avoid them",
      ["Common mistakes around pipeline management include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Ethical selling refuses to misrepresent capabilities or pricing.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Objections often mask timing, budget, or trust—not product flaws. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Pipeline stages should mean observable buyer behaviors. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. CRM hygiene makes forecasts trustworthy for managers and reps. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."]
      }
    ),
    section(
      "pipeline-s5",
      "6.5 Pipeline Management — Putting the chapter together",
      ["This chapter’s through-line is simple: Pipeline Management connects principles to accountable action. Objections often mask timing, budget, or trust—not product flaws.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Pipeline stages should mean observable buyer behaviors. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits pipeline management in your field. CRM hygiene makes forecasts trustworthy for managers and reps. Onboarding handoffs prevent churn right after the signature."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."]
      }
    )
    ],
    {
      learningObjectives: ["Define pipeline management and explain why it matters in Sales School 101","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Pipeline Management connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Pipeline stages should mean observable buyer behaviors.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."],
      realWorldRelevance: "Strong grasp of pipeline management reduces rework, supports defensible records, and speeds collaboration across Sales School 101.",
    }
  ),
  chapter(
    "ethics-sales",
    7,
    "Ethical Selling",
    [
    section(
      "ethics-sales-s1",
      "7.1 Ethical Selling — Foundations and vocabulary",
      ["Ethical Selling is a foundation in Sales School 101 because follow-up cadences respect buyer attention without harassment. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Proposals align scope, price, timeline, and success criteria. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ethical selling aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ethical selling as a shared model for decisions. Active listening beats scripted monologues in complex deals. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "ethics-sales-s2",
      "7.2 Ethical Selling — How professionals apply this in practice",
      ["Professionals rarely dispute whether ethical selling exists—they dispute how proposals align scope, price, timeline, and success criteria. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Active listening beats scripted monologues in complex deals.","When stakes rise, pause for a second opinion or formal review. Pipeline stages should mean observable buyer behaviors. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Social proof reduces perceived risk for new buyers. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "ethics-sales-s3",
      "7.3 Ethical Selling — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ethical selling in a meeting, but details in the packet do not match the textbook example. Active listening beats scripted monologues in complex deals. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Pipeline stages should mean observable buyer behaviors.","Good documentation states facts, cites the framework, and records the decision. Social proof reduces perceived risk for new buyers. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Objections often mask timing, budget, or trust—not product flaws. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors."]
      }
    ),
    section(
      "ethics-sales-s4",
      "7.4 Ethical Selling — Common mistakes and how to avoid them",
      ["Common mistakes around ethical selling include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Pipeline stages should mean observable buyer behaviors.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Social proof reduces perceived risk for new buyers. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Objections often mask timing, budget, or trust—not product flaws. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Ethical selling refuses to misrepresent capabilities or pricing. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    ),
    section(
      "ethics-sales-s5",
      "7.5 Ethical Selling — Putting the chapter together",
      ["This chapter’s through-line is simple: Ethical Selling connects principles to accountable action. Social proof reduces perceived risk for new buyers.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Objections often mask timing, budget, or trust—not product flaws. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ethical selling in your field. Ethical selling refuses to misrepresent capabilities or pricing. CRM hygiene makes forecasts trustworthy for managers and reps."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    )
    ],
    {
      learningObjectives: ["Define ethical selling and explain why it matters in Sales School 101","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Ethical Selling connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."],
      realWorldRelevance: "Strong grasp of ethical selling reduces rework, supports defensible records, and speeds collaboration across Sales School 101.",
    }
  ),
  chapter(
    "sales-careers",
    8,
    "Sales Career Paths",
    [
    section(
      "sales-careers-s1",
      "8.1 Sales Career Paths — Foundations and vocabulary",
      ["Sales Career Paths is a foundation in Sales School 101 because negotiation trades concessions with documented give-and-get. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Follow-up cadences respect buyer attention without harassment. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain sales career paths aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat sales career paths as a shared model for decisions. Proposals align scope, price, timeline, and success criteria. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "sales-careers-s2",
      "8.2 Sales Career Paths — How professionals apply this in practice",
      ["Professionals rarely dispute whether sales career paths exists—they dispute how follow-up cadences respect buyer attention without harassment. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Proposals align scope, price, timeline, and success criteria.","When stakes rise, pause for a second opinion or formal review. Active listening beats scripted monologues in complex deals. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Pipeline stages should mean observable buyer behaviors. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals."]
      }
    ),
    section(
      "sales-careers-s3",
      "8.3 Sales Career Paths — Workplace scenarios and documentation",
      ["Scenario: a teammate cites sales career paths in a meeting, but details in the packet do not match the textbook example. Proposals align scope, price, timeline, and success criteria. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Active listening beats scripted monologues in complex deals.","Good documentation states facts, cites the framework, and records the decision. Pipeline stages should mean observable buyer behaviors. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Social proof reduces perceived risk for new buyers. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    ),
    section(
      "sales-careers-s4",
      "8.4 Sales Career Paths — Common mistakes and how to avoid them",
      ["Common mistakes around sales career paths include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Active listening beats scripted monologues in complex deals.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Pipeline stages should mean observable buyer behaviors. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Social proof reduces perceived risk for new buyers. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Ethical selling refuses to misrepresent capabilities or pricing. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors."]
      }
    ),
    section(
      "sales-careers-s5",
      "8.5 Sales Career Paths — Putting the chapter together",
      ["This chapter’s through-line is simple: Sales Career Paths connects principles to accountable action. Pipeline stages should mean observable buyer behaviors.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Social proof reduces perceived risk for new buyers. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits sales career paths in your field. Ethical selling refuses to misrepresent capabilities or pricing. Objections often mask timing, budget, or trust—not product flaws."], {
        bulletPoints: ["Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals."]
      }
    )
    ],
    {
      learningObjectives: ["Define sales career paths and explain why it matters in Sales School 101","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Sales Career Paths connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Negotiation trades concessions with documented give-and-get.","Metrics like win rate and cycle length guide coaching.","Follow-up cadences respect buyer attention without harassment.","Negotiation trades concessions with documented give-and-get.","Metrics like win rate and cycle length guide coaching."],
      realWorldRelevance: "Strong grasp of sales career paths reduces rework, supports defensible records, and speeds collaboration across Sales School 101.",
    }
  )
];
