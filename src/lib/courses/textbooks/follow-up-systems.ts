import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const FUP_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Follow-Up Systems",
  subtitle: "ForgEd workforce textbook — Follow-Up Systems",
  paragraphs: [
    "This ForgEd digital textbook presents Follow-Up Systems at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const FUP_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "cadence-design",
    1,
    "Designing Cadences",
    [
    section(
      "cadence-design-s1",
      "1.1 Designing Cadences — Foundations and vocabulary",
      ["Designing Cadences is a foundation in Follow-Up Systems because onboarding handoffs prevent churn right after the signature. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Discovery questions diagnose pain before pitching features. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain designing cadences aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat designing cadences as a shared model for decisions. Metrics like win rate and cycle length guide coaching. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "cadence-design-s2",
      "1.2 Designing Cadences — How professionals apply this in practice",
      ["Professionals rarely dispute whether designing cadences exists—they dispute how cRM hygiene makes forecasts trustworthy for managers and reps. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Onboarding handoffs prevent churn right after the signature.","When stakes rise, pause for a second opinion or formal review. Discovery questions diagnose pain before pitching features. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Metrics like win rate and cycle length guide coaching. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    ),
    section(
      "cadence-design-s3",
      "1.3 Designing Cadences — Workplace scenarios and documentation",
      ["Scenario: a teammate cites designing cadences in a meeting, but details in the packet do not match the textbook example. Follow-up cadences respect buyer attention without harassment. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. CRM hygiene makes forecasts trustworthy for managers and reps.","Good documentation states facts, cites the framework, and records the decision. Onboarding handoffs prevent churn right after the signature. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Discovery questions diagnose pain before pitching features. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "cadence-design-s4",
      "1.4 Designing Cadences — Common mistakes and how to avoid them",
      ["Common mistakes around designing cadences include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Objections often mask timing, budget, or trust—not product flaws.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Follow-up cadences respect buyer attention without harassment. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. CRM hygiene makes forecasts trustworthy for managers and reps. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Onboarding handoffs prevent churn right after the signature. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    ),
    section(
      "cadence-design-s5",
      "1.5 Designing Cadences — Putting the chapter together",
      ["This chapter’s through-line is simple: Designing Cadences connects principles to accountable action. Ethical selling refuses to misrepresent capabilities or pricing.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Objections often mask timing, budget, or trust—not product flaws. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits designing cadences in your field. Follow-up cadences respect buyer attention without harassment. CRM hygiene makes forecasts trustworthy for managers and reps."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    )
    ],
    {
      learningObjectives: ["Define designing cadences and explain why it matters in Follow-Up Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Designing Cadences connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Proposals align scope, price, timeline, and success criteria.","Negotiation trades concessions with documented give-and-get.","Active listening beats scripted monologues in complex deals.","Proposals align scope, price, timeline, and success criteria.","Negotiation trades concessions with documented give-and-get."],
      realWorldRelevance: "Strong grasp of designing cadences reduces rework, supports defensible records, and speeds collaboration across Follow-Up Systems.",
    }
  ),
  chapter(
    "email-followup",
    2,
    "Email Follow-Up",
    [
    section(
      "email-followup-s1",
      "2.1 Email Follow-Up — Foundations and vocabulary",
      ["Email Follow-Up is a foundation in Follow-Up Systems because active listening beats scripted monologues in complex deals. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Pipeline stages should mean observable buyer behaviors. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain email follow-up aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat email follow-up as a shared model for decisions. Social proof reduces perceived risk for new buyers. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","Follow-up cadences respect buyer attention without harassment.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "email-followup-s2",
      "2.2 Email Follow-Up — How professionals apply this in practice",
      ["Professionals rarely dispute whether email follow-up exists—they dispute how proposals align scope, price, timeline, and success criteria. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Active listening beats scripted monologues in complex deals.","When stakes rise, pause for a second opinion or formal review. Pipeline stages should mean observable buyer behaviors. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Social proof reduces perceived risk for new buyers. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."]
      }
    ),
    section(
      "email-followup-s3",
      "2.3 Email Follow-Up — Workplace scenarios and documentation",
      ["Scenario: a teammate cites email follow-up in a meeting, but details in the packet do not match the textbook example. Negotiation trades concessions with documented give-and-get. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Proposals align scope, price, timeline, and success criteria.","Good documentation states facts, cites the framework, and records the decision. Active listening beats scripted monologues in complex deals. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Pipeline stages should mean observable buyer behaviors. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Follow-up cadences respect buyer attention without harassment.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    ),
    section(
      "email-followup-s4",
      "2.4 Email Follow-Up — Common mistakes and how to avoid them",
      ["Common mistakes around email follow-up include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Metrics like win rate and cycle length guide coaching.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Negotiation trades concessions with documented give-and-get. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Proposals align scope, price, timeline, and success criteria. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Active listening beats scripted monologues in complex deals. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","Follow-up cadences respect buyer attention without harassment.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."]
      }
    ),
    section(
      "email-followup-s5",
      "2.5 Email Follow-Up — Putting the chapter together",
      ["This chapter’s through-line is simple: Email Follow-Up connects principles to accountable action. Discovery questions diagnose pain before pitching features.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Metrics like win rate and cycle length guide coaching. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits email follow-up in your field. Negotiation trades concessions with documented give-and-get. Proposals align scope, price, timeline, and success criteria."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."]
      }
    )
    ],
    {
      learningObjectives: ["Define email follow-up and explain why it matters in Follow-Up Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Email Follow-Up connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Objections often mask timing, budget, or trust—not product flaws.","Follow-up cadences respect buyer attention without harassment.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Follow-up cadences respect buyer attention without harassment."],
      realWorldRelevance: "Strong grasp of email follow-up reduces rework, supports defensible records, and speeds collaboration across Follow-Up Systems.",
    }
  ),
  chapter(
    "call-followup",
    3,
    "Call Follow-Up",
    [
    section(
      "call-followup-s1",
      "3.1 Call Follow-Up — Foundations and vocabulary",
      ["Call Follow-Up is a foundation in Follow-Up Systems because negotiation trades concessions with documented give-and-get. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Proposals align scope, price, timeline, and success criteria. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain call follow-up aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat call follow-up as a shared model for decisions. Active listening beats scripted monologues in complex deals. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Follow-up cadences respect buyer attention without harassment.","CRM hygiene makes forecasts trustworthy for managers and reps."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "call-followup-s2",
      "3.2 Call Follow-Up — How professionals apply this in practice",
      ["Professionals rarely dispute whether call follow-up exists—they dispute how metrics like win rate and cycle length guide coaching. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Negotiation trades concessions with documented give-and-get.","When stakes rise, pause for a second opinion or formal review. Proposals align scope, price, timeline, and success criteria. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Active listening beats scripted monologues in complex deals. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Follow-up cadences respect buyer attention without harassment.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    ),
    section(
      "call-followup-s3",
      "3.3 Call Follow-Up — Workplace scenarios and documentation",
      ["Scenario: a teammate cites call follow-up in a meeting, but details in the packet do not match the textbook example. Discovery questions diagnose pain before pitching features. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Metrics like win rate and cycle length guide coaching.","Good documentation states facts, cites the framework, and records the decision. Negotiation trades concessions with documented give-and-get. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Proposals align scope, price, timeline, and success criteria. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Follow-up cadences respect buyer attention without harassment."]
      }
    ),
    section(
      "call-followup-s4",
      "3.4 Call Follow-Up — Common mistakes and how to avoid them",
      ["Common mistakes around call follow-up include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Onboarding handoffs prevent churn right after the signature.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Discovery questions diagnose pain before pitching features. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Metrics like win rate and cycle length guide coaching. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Negotiation trades concessions with documented give-and-get. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Follow-up cadences respect buyer attention without harassment.","CRM hygiene makes forecasts trustworthy for managers and reps."]
      }
    ),
    section(
      "call-followup-s5",
      "3.5 Call Follow-Up — Putting the chapter together",
      ["This chapter’s through-line is simple: Call Follow-Up connects principles to accountable action. CRM hygiene makes forecasts trustworthy for managers and reps.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Onboarding handoffs prevent churn right after the signature. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits call follow-up in your field. Discovery questions diagnose pain before pitching features. Metrics like win rate and cycle length guide coaching."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Follow-up cadences respect buyer attention without harassment.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    )
    ],
    {
      learningObjectives: ["Define call follow-up and explain why it matters in Follow-Up Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Call Follow-Up connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."],
      realWorldRelevance: "Strong grasp of call follow-up reduces rework, supports defensible records, and speeds collaboration across Follow-Up Systems.",
    }
  ),
  chapter(
    "nurture",
    4,
    "Nurture Sequences",
    [
    section(
      "nurture-s1",
      "4.1 Nurture Sequences — Foundations and vocabulary",
      ["Nurture Sequences is a foundation in Follow-Up Systems because onboarding handoffs prevent churn right after the signature. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Discovery questions diagnose pain before pitching features. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain nurture sequences aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat nurture sequences as a shared model for decisions. Metrics like win rate and cycle length guide coaching. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "nurture-s2",
      "4.2 Nurture Sequences — How professionals apply this in practice",
      ["Professionals rarely dispute whether nurture sequences exists—they dispute how cRM hygiene makes forecasts trustworthy for managers and reps. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Onboarding handoffs prevent churn right after the signature.","When stakes rise, pause for a second opinion or formal review. Discovery questions diagnose pain before pitching features. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Metrics like win rate and cycle length guide coaching. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."]
      }
    ),
    section(
      "nurture-s3",
      "4.3 Nurture Sequences — Workplace scenarios and documentation",
      ["Scenario: a teammate cites nurture sequences in a meeting, but details in the packet do not match the textbook example. Objections often mask timing, budget, or trust—not product flaws. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. CRM hygiene makes forecasts trustworthy for managers and reps.","Good documentation states facts, cites the framework, and records the decision. Onboarding handoffs prevent churn right after the signature. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Discovery questions diagnose pain before pitching features. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."]
      }
    ),
    section(
      "nurture-s4",
      "4.4 Nurture Sequences — Common mistakes and how to avoid them",
      ["Common mistakes around nurture sequences include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Ethical selling refuses to misrepresent capabilities or pricing.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Objections often mask timing, budget, or trust—not product flaws. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. CRM hygiene makes forecasts trustworthy for managers and reps. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Onboarding handoffs prevent churn right after the signature. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."]
      }
    ),
    section(
      "nurture-s5",
      "4.5 Nurture Sequences — Putting the chapter together",
      ["This chapter’s through-line is simple: Nurture Sequences connects principles to accountable action. Social proof reduces perceived risk for new buyers.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Ethical selling refuses to misrepresent capabilities or pricing. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits nurture sequences in your field. Objections often mask timing, budget, or trust—not product flaws. CRM hygiene makes forecasts trustworthy for managers and reps."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."]
      }
    )
    ],
    {
      learningObjectives: ["Define nurture sequences and explain why it matters in Follow-Up Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Nurture Sequences connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."],
      realWorldRelevance: "Strong grasp of nurture sequences reduces rework, supports defensible records, and speeds collaboration across Follow-Up Systems.",
    }
  ),
  chapter(
    "re-engagement",
    5,
    "Re-Engagement",
    [
    section(
      "re-engagement-s1",
      "5.1 Re-Engagement — Foundations and vocabulary",
      ["Re-Engagement is a foundation in Follow-Up Systems because metrics like win rate and cycle length guide coaching. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Negotiation trades concessions with documented give-and-get. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain re-engagement aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat re-engagement as a shared model for decisions. Follow-up cadences respect buyer attention without harassment. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "re-engagement-s2",
      "5.2 Re-Engagement — How professionals apply this in practice",
      ["Professionals rarely dispute whether re-engagement exists—they dispute how negotiation trades concessions with documented give-and-get. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Follow-up cadences respect buyer attention without harassment.","When stakes rise, pause for a second opinion or formal review. Proposals align scope, price, timeline, and success criteria. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Active listening beats scripted monologues in complex deals. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."]
      }
    ),
    section(
      "re-engagement-s3",
      "5.3 Re-Engagement — Workplace scenarios and documentation",
      ["Scenario: a teammate cites re-engagement in a meeting, but details in the packet do not match the textbook example. Follow-up cadences respect buyer attention without harassment. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Proposals align scope, price, timeline, and success criteria.","Good documentation states facts, cites the framework, and records the decision. Active listening beats scripted monologues in complex deals. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Pipeline stages should mean observable buyer behaviors. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."]
      }
    ),
    section(
      "re-engagement-s4",
      "5.4 Re-Engagement — Common mistakes and how to avoid them",
      ["Common mistakes around re-engagement include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Proposals align scope, price, timeline, and success criteria.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Active listening beats scripted monologues in complex deals. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Pipeline stages should mean observable buyer behaviors. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Social proof reduces perceived risk for new buyers. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."]
      }
    ),
    section(
      "re-engagement-s5",
      "5.5 Re-Engagement — Putting the chapter together",
      ["This chapter’s through-line is simple: Re-Engagement connects principles to accountable action. Active listening beats scripted monologues in complex deals.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Pipeline stages should mean observable buyer behaviors. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits re-engagement in your field. Social proof reduces perceived risk for new buyers. Ethical selling refuses to misrepresent capabilities or pricing."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."]
      }
    )
    ],
    {
      learningObjectives: ["Define re-engagement and explain why it matters in Follow-Up Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Re-Engagement connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."],
      realWorldRelevance: "Strong grasp of re-engagement reduces rework, supports defensible records, and speeds collaboration across Follow-Up Systems.",
    }
  ),
  chapter(
    "metrics-followup",
    6,
    "Follow-Up Metrics",
    [
    section(
      "metrics-followup-s1",
      "6.1 Follow-Up Metrics — Foundations and vocabulary",
      ["Follow-Up Metrics is a foundation in Follow-Up Systems because proposals align scope, price, timeline, and success criteria. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Active listening beats scripted monologues in complex deals. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain follow-up metrics aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat follow-up metrics as a shared model for decisions. Pipeline stages should mean observable buyer behaviors. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Metrics like win rate and cycle length guide coaching.","Follow-up cadences respect buyer attention without harassment.","CRM hygiene makes forecasts trustworthy for managers and reps."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "metrics-followup-s2",
      "6.2 Follow-Up Metrics — How professionals apply this in practice",
      ["Professionals rarely dispute whether follow-up metrics exists—they dispute how active listening beats scripted monologues in complex deals. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Pipeline stages should mean observable buyer behaviors.","When stakes rise, pause for a second opinion or formal review. Social proof reduces perceived risk for new buyers. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Ethical selling refuses to misrepresent capabilities or pricing. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","Metrics like win rate and cycle length guide coaching.","Follow-up cadences respect buyer attention without harassment.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    ),
    section(
      "metrics-followup-s3",
      "6.3 Follow-Up Metrics — Workplace scenarios and documentation",
      ["Scenario: a teammate cites follow-up metrics in a meeting, but details in the packet do not match the textbook example. Pipeline stages should mean observable buyer behaviors. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Social proof reduces perceived risk for new buyers.","Good documentation states facts, cites the framework, and records the decision. Ethical selling refuses to misrepresent capabilities or pricing. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Objections often mask timing, budget, or trust—not product flaws. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Metrics like win rate and cycle length guide coaching.","Follow-up cadences respect buyer attention without harassment."]
      }
    ),
    section(
      "metrics-followup-s4",
      "6.4 Follow-Up Metrics — Common mistakes and how to avoid them",
      ["Common mistakes around follow-up metrics include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Social proof reduces perceived risk for new buyers.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Ethical selling refuses to misrepresent capabilities or pricing. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Objections often mask timing, budget, or trust—not product flaws. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Metrics like win rate and cycle length guide coaching. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Metrics like win rate and cycle length guide coaching.","Follow-up cadences respect buyer attention without harassment.","CRM hygiene makes forecasts trustworthy for managers and reps."]
      }
    ),
    section(
      "metrics-followup-s5",
      "6.5 Follow-Up Metrics — Putting the chapter together",
      ["This chapter’s through-line is simple: Follow-Up Metrics connects principles to accountable action. Ethical selling refuses to misrepresent capabilities or pricing.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Objections often mask timing, budget, or trust—not product flaws. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits follow-up metrics in your field. Metrics like win rate and cycle length guide coaching. Follow-up cadences respect buyer attention without harassment."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","Metrics like win rate and cycle length guide coaching.","Follow-up cadences respect buyer attention without harassment.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    )
    ],
    {
      learningObjectives: ["Define follow-up metrics and explain why it matters in Follow-Up Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Follow-Up Metrics connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."],
      realWorldRelevance: "Strong grasp of follow-up metrics reduces rework, supports defensible records, and speeds collaboration across Follow-Up Systems.",
    }
  ),
  chapter(
    "tools-followup",
    7,
    "Tools and Templates",
    [
    section(
      "tools-followup-s1",
      "7.1 Tools and Templates — Foundations and vocabulary",
      ["Tools and Templates is a foundation in Follow-Up Systems because follow-up cadences respect buyer attention without harassment. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Proposals align scope, price, timeline, and success criteria. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain tools and templates aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat tools and templates as a shared model for decisions. Active listening beats scripted monologues in complex deals. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "tools-followup-s2",
      "7.2 Tools and Templates — How professionals apply this in practice",
      ["Professionals rarely dispute whether tools and templates exists—they dispute how proposals align scope, price, timeline, and success criteria. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Active listening beats scripted monologues in complex deals.","When stakes rise, pause for a second opinion or formal review. Pipeline stages should mean observable buyer behaviors. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Social proof reduces perceived risk for new buyers. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps."]
      }
    ),
    section(
      "tools-followup-s3",
      "7.3 Tools and Templates — Workplace scenarios and documentation",
      ["Scenario: a teammate cites tools and templates in a meeting, but details in the packet do not match the textbook example. Active listening beats scripted monologues in complex deals. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Pipeline stages should mean observable buyer behaviors.","Good documentation states facts, cites the framework, and records the decision. Social proof reduces perceived risk for new buyers. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Ethical selling refuses to misrepresent capabilities or pricing. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."]
      }
    ),
    section(
      "tools-followup-s4",
      "7.4 Tools and Templates — Common mistakes and how to avoid them",
      ["Common mistakes around tools and templates include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Pipeline stages should mean observable buyer behaviors.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Social proof reduces perceived risk for new buyers. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Ethical selling refuses to misrepresent capabilities or pricing. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Objections often mask timing, budget, or trust—not product flaws. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    ),
    section(
      "tools-followup-s5",
      "7.5 Tools and Templates — Putting the chapter together",
      ["This chapter’s through-line is simple: Tools and Templates connects principles to accountable action. Social proof reduces perceived risk for new buyers.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Ethical selling refuses to misrepresent capabilities or pricing. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits tools and templates in your field. Objections often mask timing, budget, or trust—not product flaws. CRM hygiene makes forecasts trustworthy for managers and reps."], {
        bulletPoints: ["Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps."]
      }
    )
    ],
    {
      learningObjectives: ["Define tools and templates and explain why it matters in Follow-Up Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Tools and Templates connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Social proof reduces perceived risk for new buyers.","Pipeline stages should mean observable buyer behaviors.","Ethical selling refuses to misrepresent capabilities or pricing.","Social proof reduces perceived risk for new buyers.","Pipeline stages should mean observable buyer behaviors."],
      realWorldRelevance: "Strong grasp of tools and templates reduces rework, supports defensible records, and speeds collaboration across Follow-Up Systems.",
    }
  ),
  chapter(
    "accountability",
    8,
    "Personal Accountability",
    [
    section(
      "accountability-s1",
      "8.1 Personal Accountability — Foundations and vocabulary",
      ["Personal Accountability is a foundation in Follow-Up Systems because objections often mask timing, budget, or trust—not product flaws. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: CRM hygiene makes forecasts trustworthy for managers and reps. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain personal accountability aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat personal accountability as a shared model for decisions. Onboarding handoffs prevent churn right after the signature. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "accountability-s2",
      "8.2 Personal Accountability — How professionals apply this in practice",
      ["Professionals rarely dispute whether personal accountability exists—they dispute how cRM hygiene makes forecasts trustworthy for managers and reps. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Onboarding handoffs prevent churn right after the signature.","When stakes rise, pause for a second opinion or formal review. Discovery questions diagnose pain before pitching features. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Metrics like win rate and cycle length guide coaching. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    ),
    section(
      "accountability-s3",
      "8.3 Personal Accountability — Workplace scenarios and documentation",
      ["Scenario: a teammate cites personal accountability in a meeting, but details in the packet do not match the textbook example. Onboarding handoffs prevent churn right after the signature. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Discovery questions diagnose pain before pitching features.","Good documentation states facts, cites the framework, and records the decision. Metrics like win rate and cycle length guide coaching. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Negotiation trades concessions with documented give-and-get. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors."]
      }
    ),
    section(
      "accountability-s4",
      "8.4 Personal Accountability — Common mistakes and how to avoid them",
      ["Common mistakes around personal accountability include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Discovery questions diagnose pain before pitching features.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Metrics like win rate and cycle length guide coaching. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Negotiation trades concessions with documented give-and-get. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Follow-up cadences respect buyer attention without harassment. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    ),
    section(
      "accountability-s5",
      "8.5 Personal Accountability — Putting the chapter together",
      ["This chapter’s through-line is simple: Personal Accountability connects principles to accountable action. Metrics like win rate and cycle length guide coaching.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Negotiation trades concessions with documented give-and-get. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits personal accountability in your field. Follow-up cadences respect buyer attention without harassment. Proposals align scope, price, timeline, and success criteria."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    )
    ],
    {
      learningObjectives: ["Define personal accountability and explain why it matters in Follow-Up Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Personal Accountability connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."],
      realWorldRelevance: "Strong grasp of personal accountability reduces rework, supports defensible records, and speeds collaboration across Follow-Up Systems.",
    }
  )
];
