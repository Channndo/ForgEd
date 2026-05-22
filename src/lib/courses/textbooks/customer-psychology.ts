import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const CUSTPSY_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Customer Psychology",
  subtitle: "ForgEd workforce textbook — Customer Psychology",
  paragraphs: [
    "This ForgEd digital textbook presents Customer Psychology at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const CUSTPSY_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "buyer-journey",
    1,
    "Buyer Journey Stages",
    [
    section(
      "buyer-journey-s1",
      "1.1 Buyer Journey Stages — Foundations and vocabulary",
      ["Buyer Journey Stages is a foundation in Customer Psychology because ethical selling refuses to misrepresent capabilities or pricing. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Objections often mask timing, budget, or trust—not product flaws. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain buyer journey stages aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat buyer journey stages as a shared model for decisions. Pipeline stages should mean observable buyer behaviors. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Ethical selling refuses to misrepresent capabilities or pricing."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "buyer-journey-s2",
      "1.2 Buyer Journey Stages — How professionals apply this in practice",
      ["Professionals rarely dispute whether buyer journey stages exists—they dispute how objections often mask timing, budget, or trust—not product flaws. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Pipeline stages should mean observable buyer behaviors.","When stakes rise, pause for a second opinion or formal review. Follow-up cadences respect buyer attention without harassment. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Social proof reduces perceived risk for new buyers. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "buyer-journey-s3",
      "1.3 Buyer Journey Stages — Workplace scenarios and documentation",
      ["Scenario: a teammate cites buyer journey stages in a meeting, but details in the packet do not match the textbook example. Pipeline stages should mean observable buyer behaviors. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Follow-up cadences respect buyer attention without harassment.","Good documentation states facts, cites the framework, and records the decision. Social proof reduces perceived risk for new buyers. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. CRM hygiene makes forecasts trustworthy for managers and reps. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals."]
      }
    ),
    section(
      "buyer-journey-s4",
      "1.4 Buyer Journey Stages — Common mistakes and how to avoid them",
      ["Common mistakes around buyer journey stages include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Follow-up cadences respect buyer attention without harassment.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Social proof reduces perceived risk for new buyers. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. CRM hygiene makes forecasts trustworthy for managers and reps. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Onboarding handoffs prevent churn right after the signature. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    ),
    section(
      "buyer-journey-s5",
      "1.5 Buyer Journey Stages — Putting the chapter together",
      ["This chapter’s through-line is simple: Buyer Journey Stages connects principles to accountable action. Social proof reduces perceived risk for new buyers.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. CRM hygiene makes forecasts trustworthy for managers and reps. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits buyer journey stages in your field. Onboarding handoffs prevent churn right after the signature. Discovery questions diagnose pain before pitching features."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    )
    ],
    {
      learningObjectives: ["Define buyer journey stages and explain why it matters in Customer Psychology","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Buyer Journey Stages connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."],
      realWorldRelevance: "Strong grasp of buyer journey stages reduces rework, supports defensible records, and speeds collaboration across Customer Psychology.",
    }
  ),
  chapter(
    "motivation",
    2,
    "Motivation and Trust",
    [
    section(
      "motivation-s1",
      "2.1 Motivation and Trust — Foundations and vocabulary",
      ["Motivation and Trust is a foundation in Customer Psychology because negotiation trades concessions with documented give-and-get. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Follow-up cadences respect buyer attention without harassment. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain motivation and trust aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat motivation and trust as a shared model for decisions. Proposals align scope, price, timeline, and success criteria. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "motivation-s2",
      "2.2 Motivation and Trust — How professionals apply this in practice",
      ["Professionals rarely dispute whether motivation and trust exists—they dispute how metrics like win rate and cycle length guide coaching. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Negotiation trades concessions with documented give-and-get.","When stakes rise, pause for a second opinion or formal review. Follow-up cadences respect buyer attention without harassment. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Proposals align scope, price, timeline, and success criteria. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    ),
    section(
      "motivation-s3",
      "2.3 Motivation and Trust — Workplace scenarios and documentation",
      ["Scenario: a teammate cites motivation and trust in a meeting, but details in the packet do not match the textbook example. Discovery questions diagnose pain before pitching features. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Metrics like win rate and cycle length guide coaching.","Good documentation states facts, cites the framework, and records the decision. Negotiation trades concessions with documented give-and-get. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Follow-up cadences respect buyer attention without harassment. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","CRM hygiene makes forecasts trustworthy for managers and reps."]
      }
    ),
    section(
      "motivation-s4",
      "2.4 Motivation and Trust — Common mistakes and how to avoid them",
      ["Common mistakes around motivation and trust include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Onboarding handoffs prevent churn right after the signature.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Discovery questions diagnose pain before pitching features. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Metrics like win rate and cycle length guide coaching. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Negotiation trades concessions with documented give-and-get. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    ),
    section(
      "motivation-s5",
      "2.5 Motivation and Trust — Putting the chapter together",
      ["This chapter’s through-line is simple: Motivation and Trust connects principles to accountable action. Objections often mask timing, budget, or trust—not product flaws.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Onboarding handoffs prevent churn right after the signature. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits motivation and trust in your field. Discovery questions diagnose pain before pitching features. Metrics like win rate and cycle length guide coaching."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    )
    ],
    {
      learningObjectives: ["Define motivation and trust and explain why it matters in Customer Psychology","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Motivation and Trust connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Proposals align scope, price, timeline, and success criteria.","Follow-up cadences respect buyer attention without harassment.","Active listening beats scripted monologues in complex deals.","Proposals align scope, price, timeline, and success criteria.","Follow-up cadences respect buyer attention without harassment."],
      realWorldRelevance: "Strong grasp of motivation and trust reduces rework, supports defensible records, and speeds collaboration across Customer Psychology.",
    }
  ),
  chapter(
    "friction",
    3,
    "Decision Friction",
    [
    section(
      "friction-s1",
      "3.1 Decision Friction — Foundations and vocabulary",
      ["Decision Friction is a foundation in Customer Psychology because discovery questions diagnose pain before pitching features. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Metrics like win rate and cycle length guide coaching. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain decision friction aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat decision friction as a shared model for decisions. Negotiation trades concessions with documented give-and-get. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "friction-s2",
      "3.2 Decision Friction — How professionals apply this in practice",
      ["Professionals rarely dispute whether decision friction exists—they dispute how onboarding handoffs prevent churn right after the signature. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Discovery questions diagnose pain before pitching features.","When stakes rise, pause for a second opinion or formal review. Metrics like win rate and cycle length guide coaching. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Negotiation trades concessions with documented give-and-get. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    ),
    section(
      "friction-s3",
      "3.3 Decision Friction — Workplace scenarios and documentation",
      ["Scenario: a teammate cites decision friction in a meeting, but details in the packet do not match the textbook example. CRM hygiene makes forecasts trustworthy for managers and reps. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Onboarding handoffs prevent churn right after the signature.","Good documentation states facts, cites the framework, and records the decision. Discovery questions diagnose pain before pitching features. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Metrics like win rate and cycle length guide coaching. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "friction-s4",
      "3.4 Decision Friction — Common mistakes and how to avoid them",
      ["Common mistakes around decision friction include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Objections often mask timing, budget, or trust—not product flaws.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. CRM hygiene makes forecasts trustworthy for managers and reps. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Onboarding handoffs prevent churn right after the signature. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Discovery questions diagnose pain before pitching features. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    ),
    section(
      "friction-s5",
      "3.5 Decision Friction — Putting the chapter together",
      ["This chapter’s through-line is simple: Decision Friction connects principles to accountable action. Ethical selling refuses to misrepresent capabilities or pricing.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Objections often mask timing, budget, or trust—not product flaws. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits decision friction in your field. CRM hygiene makes forecasts trustworthy for managers and reps. Onboarding handoffs prevent churn right after the signature."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    )
    ],
    {
      learningObjectives: ["Define decision friction and explain why it matters in Customer Psychology","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Decision Friction connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Proposals align scope, price, timeline, and success criteria.","Follow-up cadences respect buyer attention without harassment.","Active listening beats scripted monologues in complex deals.","Proposals align scope, price, timeline, and success criteria.","Follow-up cadences respect buyer attention without harassment."],
      realWorldRelevance: "Strong grasp of decision friction reduces rework, supports defensible records, and speeds collaboration across Customer Psychology.",
    }
  ),
  chapter(
    "social-proof",
    4,
    "Social Proof",
    [
    section(
      "social-proof-s1",
      "4.1 Social Proof — Foundations and vocabulary",
      ["Social Proof is a foundation in Customer Psychology because proposals align scope, price, timeline, and success criteria. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Active listening beats scripted monologues in complex deals. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain social proof aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat social proof as a shared model for decisions. Pipeline stages should mean observable buyer behaviors. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","Social proof reduces perceived risk for new buyers.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "social-proof-s2",
      "4.2 Social Proof — How professionals apply this in practice",
      ["Professionals rarely dispute whether social proof exists—they dispute how active listening beats scripted monologues in complex deals. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Pipeline stages should mean observable buyer behaviors.","When stakes rise, pause for a second opinion or formal review. Ethical selling refuses to misrepresent capabilities or pricing. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Objections often mask timing, budget, or trust—not product flaws. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Social proof reduces perceived risk for new buyers.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    ),
    section(
      "social-proof-s3",
      "4.3 Social Proof — Workplace scenarios and documentation",
      ["Scenario: a teammate cites social proof in a meeting, but details in the packet do not match the textbook example. Pipeline stages should mean observable buyer behaviors. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Ethical selling refuses to misrepresent capabilities or pricing.","Good documentation states facts, cites the framework, and records the decision. Objections often mask timing, budget, or trust—not product flaws. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Social proof reduces perceived risk for new buyers. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Social proof reduces perceived risk for new buyers.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."]
      }
    ),
    section(
      "social-proof-s4",
      "4.4 Social Proof — Common mistakes and how to avoid them",
      ["Common mistakes around social proof include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Ethical selling refuses to misrepresent capabilities or pricing.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Objections often mask timing, budget, or trust—not product flaws. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Social proof reduces perceived risk for new buyers. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. CRM hygiene makes forecasts trustworthy for managers and reps. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","Social proof reduces perceived risk for new buyers.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."]
      }
    ),
    section(
      "social-proof-s5",
      "4.5 Social Proof — Putting the chapter together",
      ["This chapter’s through-line is simple: Social Proof connects principles to accountable action. Objections often mask timing, budget, or trust—not product flaws.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Social proof reduces perceived risk for new buyers. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits social proof in your field. CRM hygiene makes forecasts trustworthy for managers and reps. Onboarding handoffs prevent churn right after the signature."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Social proof reduces perceived risk for new buyers.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature."]
      }
    )
    ],
    {
      learningObjectives: ["Define social proof and explain why it matters in Customer Psychology","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Social Proof connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Objections often mask timing, budget, or trust—not product flaws.","Ethical selling refuses to misrepresent capabilities or pricing.","Social proof reduces perceived risk for new buyers.","Objections often mask timing, budget, or trust—not product flaws.","Ethical selling refuses to misrepresent capabilities or pricing."],
      realWorldRelevance: "Strong grasp of social proof reduces rework, supports defensible records, and speeds collaboration across Customer Psychology.",
    }
  ),
  chapter(
    "pricing-psych",
    5,
    "Pricing Psychology",
    [
    section(
      "pricing-psych-s1",
      "5.1 Pricing Psychology — Foundations and vocabulary",
      ["Pricing Psychology is a foundation in Customer Psychology because pipeline stages should mean observable buyer behaviors. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Social proof reduces perceived risk for new buyers. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain pricing psychology aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat pricing psychology as a shared model for decisions. Objections often mask timing, budget, or trust—not product flaws. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Objections often mask timing, budget, or trust—not product flaws."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "pricing-psych-s2",
      "5.2 Pricing Psychology — How professionals apply this in practice",
      ["Professionals rarely dispute whether pricing psychology exists—they dispute how social proof reduces perceived risk for new buyers. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Objections often mask timing, budget, or trust—not product flaws.","When stakes rise, pause for a second opinion or formal review. Ethical selling refuses to misrepresent capabilities or pricing. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. CRM hygiene makes forecasts trustworthy for managers and reps. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Objections often mask timing, budget, or trust—not product flaws.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    ),
    section(
      "pricing-psych-s3",
      "5.3 Pricing Psychology — Workplace scenarios and documentation",
      ["Scenario: a teammate cites pricing psychology in a meeting, but details in the packet do not match the textbook example. Objections often mask timing, budget, or trust—not product flaws. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Ethical selling refuses to misrepresent capabilities or pricing.","Good documentation states facts, cites the framework, and records the decision. CRM hygiene makes forecasts trustworthy for managers and reps. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Onboarding handoffs prevent churn right after the signature. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers."]
      }
    ),
    section(
      "pricing-psych-s4",
      "5.4 Pricing Psychology — Common mistakes and how to avoid them",
      ["Common mistakes around pricing psychology include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Ethical selling refuses to misrepresent capabilities or pricing.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. CRM hygiene makes forecasts trustworthy for managers and reps. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Onboarding handoffs prevent churn right after the signature. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Discovery questions diagnose pain before pitching features. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "pricing-psych-s5",
      "5.5 Pricing Psychology — Putting the chapter together",
      ["This chapter’s through-line is simple: Pricing Psychology connects principles to accountable action. CRM hygiene makes forecasts trustworthy for managers and reps.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Onboarding handoffs prevent churn right after the signature. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits pricing psychology in your field. Discovery questions diagnose pain before pitching features. Metrics like win rate and cycle length guide coaching."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Pipeline stages should mean observable buyer behaviors.","Social proof reduces perceived risk for new buyers.","Objections often mask timing, budget, or trust—not product flaws.","Ethical selling refuses to misrepresent capabilities or pricing."]
      }
    )
    ],
    {
      learningObjectives: ["Define pricing psychology and explain why it matters in Customer Psychology","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Pricing Psychology connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals."],
      realWorldRelevance: "Strong grasp of pricing psychology reduces rework, supports defensible records, and speeds collaboration across Customer Psychology.",
    }
  ),
  chapter(
    "objections-psych",
    6,
    "Psychology of Objections",
    [
    section(
      "objections-psych-s1",
      "6.1 Psychology of Objections — Foundations and vocabulary",
      ["Psychology of Objections is a foundation in Customer Psychology because metrics like win rate and cycle length guide coaching. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Negotiation trades concessions with documented give-and-get. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain psychology of objections aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat psychology of objections as a shared model for decisions. Follow-up cadences respect buyer attention without harassment. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "objections-psych-s2",
      "6.2 Psychology of Objections — How professionals apply this in practice",
      ["Professionals rarely dispute whether psychology of objections exists—they dispute how discovery questions diagnose pain before pitching features. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Metrics like win rate and cycle length guide coaching.","When stakes rise, pause for a second opinion or formal review. Negotiation trades concessions with documented give-and-get. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Follow-up cadences respect buyer attention without harassment. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."]
      }
    ),
    section(
      "objections-psych-s3",
      "6.3 Psychology of Objections — Workplace scenarios and documentation",
      ["Scenario: a teammate cites psychology of objections in a meeting, but details in the packet do not match the textbook example. Onboarding handoffs prevent churn right after the signature. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Discovery questions diagnose pain before pitching features.","Good documentation states facts, cites the framework, and records the decision. Metrics like win rate and cycle length guide coaching. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Negotiation trades concessions with documented give-and-get. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."]
      }
    ),
    section(
      "objections-psych-s4",
      "6.4 Psychology of Objections — Common mistakes and how to avoid them",
      ["Common mistakes around psychology of objections include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. CRM hygiene makes forecasts trustworthy for managers and reps.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Onboarding handoffs prevent churn right after the signature. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Discovery questions diagnose pain before pitching features. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Metrics like win rate and cycle length guide coaching. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching."]
      }
    ),
    section(
      "objections-psych-s5",
      "6.5 Psychology of Objections — Putting the chapter together",
      ["This chapter’s through-line is simple: Psychology of Objections connects principles to accountable action. Objections often mask timing, budget, or trust—not product flaws.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. CRM hygiene makes forecasts trustworthy for managers and reps. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits psychology of objections in your field. Onboarding handoffs prevent churn right after the signature. Discovery questions diagnose pain before pitching features."], {
        bulletPoints: ["Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features."]
      }
    )
    ],
    {
      learningObjectives: ["Define psychology of objections and explain why it matters in Customer Psychology","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Psychology of Objections connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Objections often mask timing, budget, or trust—not product flaws.","Ethical selling refuses to misrepresent capabilities or pricing.","CRM hygiene makes forecasts trustworthy for managers and reps.","Objections often mask timing, budget, or trust—not product flaws.","Ethical selling refuses to misrepresent capabilities or pricing."],
      realWorldRelevance: "Strong grasp of psychology of objections reduces rework, supports defensible records, and speeds collaboration across Customer Psychology.",
    }
  ),
  chapter(
    "loyalty",
    7,
    "Loyalty and Retention",
    [
    section(
      "loyalty-s1",
      "7.1 Loyalty and Retention — Foundations and vocabulary",
      ["Loyalty and Retention is a foundation in Customer Psychology because social proof reduces perceived risk for new buyers. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Ethical selling refuses to misrepresent capabilities or pricing. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain loyalty and retention aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat loyalty and retention as a shared model for decisions. Objections often mask timing, budget, or trust—not product flaws. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "loyalty-s2",
      "7.2 Loyalty and Retention — How professionals apply this in practice",
      ["Professionals rarely dispute whether loyalty and retention exists—they dispute how ethical selling refuses to misrepresent capabilities or pricing. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Objections often mask timing, budget, or trust—not product flaws.","When stakes rise, pause for a second opinion or formal review. CRM hygiene makes forecasts trustworthy for managers and reps. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Onboarding handoffs prevent churn right after the signature. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."]
      }
    ),
    section(
      "loyalty-s3",
      "7.3 Loyalty and Retention — Workplace scenarios and documentation",
      ["Scenario: a teammate cites loyalty and retention in a meeting, but details in the packet do not match the textbook example. Objections often mask timing, budget, or trust—not product flaws. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. CRM hygiene makes forecasts trustworthy for managers and reps.","Good documentation states facts, cites the framework, and records the decision. Onboarding handoffs prevent churn right after the signature. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Discovery questions diagnose pain before pitching features. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment.","Proposals align scope, price, timeline, and success criteria."]
      }
    ),
    section(
      "loyalty-s4",
      "7.4 Loyalty and Retention — Common mistakes and how to avoid them",
      ["Common mistakes around loyalty and retention include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. CRM hygiene makes forecasts trustworthy for managers and reps.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Onboarding handoffs prevent churn right after the signature. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Discovery questions diagnose pain before pitching features. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Metrics like win rate and cycle length guide coaching. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get.","Follow-up cadences respect buyer attention without harassment."]
      }
    ),
    section(
      "loyalty-s5",
      "7.5 Loyalty and Retention — Putting the chapter together",
      ["This chapter’s through-line is simple: Loyalty and Retention connects principles to accountable action. Onboarding handoffs prevent churn right after the signature.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Discovery questions diagnose pain before pitching features. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits loyalty and retention in your field. Metrics like win rate and cycle length guide coaching. Negotiation trades concessions with documented give-and-get."], {
        bulletPoints: ["CRM hygiene makes forecasts trustworthy for managers and reps.","Onboarding handoffs prevent churn right after the signature.","Discovery questions diagnose pain before pitching features.","Metrics like win rate and cycle length guide coaching.","Negotiation trades concessions with documented give-and-get."]
      }
    )
    ],
    {
      learningObjectives: ["Define loyalty and retention and explain why it matters in Customer Psychology","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Loyalty and Retention connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Onboarding handoffs prevent churn right after the signature.","CRM hygiene makes forecasts trustworthy for managers and reps.","Discovery questions diagnose pain before pitching features.","Onboarding handoffs prevent churn right after the signature.","CRM hygiene makes forecasts trustworthy for managers and reps."],
      realWorldRelevance: "Strong grasp of loyalty and retention reduces rework, supports defensible records, and speeds collaboration across Customer Psychology.",
    }
  ),
  chapter(
    "personas",
    8,
    "Buyer Personas",
    [
    section(
      "personas-s1",
      "8.1 Buyer Personas — Foundations and vocabulary",
      ["Buyer Personas is a foundation in Customer Psychology because follow-up cadences respect buyer attention without harassment. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Pipeline stages should mean observable buyer behaviors. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain buyer personas aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat buyer personas as a shared model for decisions. Social proof reduces perceived risk for new buyers. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Follow-up cadences respect buyer attention without harassment."],
        citations: [{"source":"HubSpot Sales Blog (reference)","url":"https://blog.hubspot.com/sales","note":"Mainstream sales operations vocabulary"}]
      }
    ),
    section(
      "personas-s2",
      "8.2 Buyer Personas — How professionals apply this in practice",
      ["Professionals rarely dispute whether buyer personas exists—they dispute how objections often mask timing, budget, or trust—not product flaws. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Follow-up cadences respect buyer attention without harassment.","When stakes rise, pause for a second opinion or formal review. Pipeline stages should mean observable buyer behaviors. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Social proof reduces perceived risk for new buyers. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    ),
    section(
      "personas-s3",
      "8.3 Buyer Personas — Workplace scenarios and documentation",
      ["Scenario: a teammate cites buyer personas in a meeting, but details in the packet do not match the textbook example. Ethical selling refuses to misrepresent capabilities or pricing. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Objections often mask timing, budget, or trust—not product flaws.","Good documentation states facts, cites the framework, and records the decision. Follow-up cadences respect buyer attention without harassment. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Pipeline stages should mean observable buyer behaviors. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Active listening beats scripted monologues in complex deals.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Follow-up cadences respect buyer attention without harassment.","Pipeline stages should mean observable buyer behaviors."]
      }
    ),
    section(
      "personas-s4",
      "8.4 Buyer Personas — Common mistakes and how to avoid them",
      ["Common mistakes around buyer personas include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Active listening beats scripted monologues in complex deals.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Ethical selling refuses to misrepresent capabilities or pricing. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Objections often mask timing, budget, or trust—not product flaws. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Follow-up cadences respect buyer attention without harassment. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws.","Follow-up cadences respect buyer attention without harassment."]
      }
    ),
    section(
      "personas-s5",
      "8.5 Buyer Personas — Putting the chapter together",
      ["This chapter’s through-line is simple: Buyer Personas connects principles to accountable action. Proposals align scope, price, timeline, and success criteria.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Active listening beats scripted monologues in complex deals. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits buyer personas in your field. Ethical selling refuses to misrepresent capabilities or pricing. Objections often mask timing, budget, or trust—not product flaws."], {
        bulletPoints: ["Negotiation trades concessions with documented give-and-get.","Proposals align scope, price, timeline, and success criteria.","Active listening beats scripted monologues in complex deals.","Ethical selling refuses to misrepresent capabilities or pricing.","Objections often mask timing, budget, or trust—not product flaws."]
      }
    )
    ],
    {
      learningObjectives: ["Define buyer personas and explain why it matters in Customer Psychology","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Buyer Personas connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Proposals align scope, price, timeline, and success criteria.","Negotiation trades concessions with documented give-and-get.","Active listening beats scripted monologues in complex deals.","Proposals align scope, price, timeline, and success criteria.","Negotiation trades concessions with documented give-and-get."],
      realWorldRelevance: "Strong grasp of buyer personas reduces rework, supports defensible records, and speeds collaboration across Customer Psychology.",
    }
  )
];
