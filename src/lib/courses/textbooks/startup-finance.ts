import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const STFIN_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Startup Finance",
  subtitle: "ForgEd workforce textbook — Startup Finance",
  paragraphs: [
    "This ForgEd digital textbook presents Startup Finance at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const STFIN_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "runway",
    1,
    "Runway",
    [
    section(
      "runway-s1",
      "1.1 Runway — Foundations and vocabulary",
      ["Runway is a foundation in Startup Finance because inflation erodes purchasing power of cash held too long. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Insurance transfers catastrophic risk for predictable premiums. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain runway aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat runway as a shared model for decisions. Diversification reduces idiosyncratic risk but not all market risk. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "runway-s2",
      "1.2 Runway — How professionals apply this in practice",
      ["Professionals rarely dispute whether runway exists—they dispute how cash flow timing can bankrupt profitable businesses on paper. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Inflation erodes purchasing power of cash held too long.","When stakes rise, pause for a second opinion or formal review. Insurance transfers catastrophic risk for predictable premiums. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Diversification reduces idiosyncratic risk but not all market risk. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks."]
      }
    ),
    section(
      "runway-s3",
      "1.3 Runway — Workplace scenarios and documentation",
      ["Scenario: a teammate cites runway in a meeting, but details in the packet do not match the textbook example. Fraud controls separate duties so one person cannot steal end-to-end. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Cash flow timing can bankrupt profitable businesses on paper.","Good documentation states facts, cites the framework, and records the decision. Inflation erodes purchasing power of cash held too long. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Insurance transfers catastrophic risk for predictable premiums. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises."]
      }
    ),
    section(
      "runway-s4",
      "1.4 Runway — Common mistakes and how to avoid them",
      ["Common mistakes around runway include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Budgets assign dollars to priorities before month-end surprises.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Fraud controls separate duties so one person cannot steal end-to-end. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Cash flow timing can bankrupt profitable businesses on paper. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Inflation erodes purchasing power of cash held too long. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time."]
      }
    ),
    section(
      "runway-s5",
      "1.5 Runway — Putting the chapter together",
      ["This chapter’s through-line is simple: Runway connects principles to accountable action. Tax rules change; documentation beats memory at filing time.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Budgets assign dollars to priorities before month-end surprises. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits runway in your field. Fraud controls separate duties so one person cannot steal end-to-end. Cash flow timing can bankrupt profitable businesses on paper."], {
        bulletPoints: ["Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks."]
      }
    )
    ],
    {
      learningObjectives: ["Define runway and explain why it matters in Startup Finance","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Runway connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Fees compound silently in retirement and brokerage accounts.","Compound interest helps savers and hurts undisciplined borrowers.","Credit scores summarize repayment history but not full financial health.","Fees compound silently in retirement and brokerage accounts.","Compound interest helps savers and hurts undisciplined borrowers."],
      realWorldRelevance: "Strong grasp of runway reduces rework, supports defensible records, and speeds collaboration across Startup Finance.",
    }
  ),
  chapter(
    "burn-rate",
    2,
    "Burn Rate",
    [
    section(
      "burn-rate-s1",
      "2.1 Burn Rate — Foundations and vocabulary",
      ["Burn Rate is a foundation in Startup Finance because compound interest helps savers and hurts undisciplined borrowers. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Fees compound silently in retirement and brokerage accounts. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain burn rate aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat burn rate as a shared model for decisions. Credit scores summarize repayment history but not full financial health. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks."],
        citations: [{"source":"Federal Reserve Education","url":"https://www.federalreserveeducation.org/","note":"Money, banking, and policy basics"}]
      }
    ),
    section(
      "burn-rate-s2",
      "2.2 Burn Rate — How professionals apply this in practice",
      ["Professionals rarely dispute whether burn rate exists—they dispute how fees compound silently in retirement and brokerage accounts. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Credit scores summarize repayment history but not full financial health.","When stakes rise, pause for a second opinion or formal review. Identity theft remediation requires fast institution notification. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Emergency funds reduce forced high-interest debt during shocks. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification."]
      }
    ),
    section(
      "burn-rate-s3",
      "2.3 Burn Rate — Workplace scenarios and documentation",
      ["Scenario: a teammate cites burn rate in a meeting, but details in the packet do not match the textbook example. Credit scores summarize repayment history but not full financial health. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Identity theft remediation requires fast institution notification.","Good documentation states facts, cites the framework, and records the decision. Emergency funds reduce forced high-interest debt during shocks. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Fraud controls separate duties so one person cannot steal end-to-end. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Fraud controls separate duties so one person cannot steal end-to-end."]
      }
    ),
    section(
      "burn-rate-s4",
      "2.4 Burn Rate — Common mistakes and how to avoid them",
      ["Common mistakes around burn rate include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Identity theft remediation requires fast institution notification.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Emergency funds reduce forced high-interest debt during shocks. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Fraud controls separate duties so one person cannot steal end-to-end. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Tax rules change; documentation beats memory at filing time. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks."]
      }
    ),
    section(
      "burn-rate-s5",
      "2.5 Burn Rate — Putting the chapter together",
      ["This chapter’s through-line is simple: Burn Rate connects principles to accountable action. Emergency funds reduce forced high-interest debt during shocks.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Fraud controls separate duties so one person cannot steal end-to-end. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits burn rate in your field. Tax rules change; documentation beats memory at filing time. Budgets assign dollars to priorities before month-end surprises."], {
        bulletPoints: ["Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification."]
      }
    )
    ],
    {
      learningObjectives: ["Define burn rate and explain why it matters in Startup Finance","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Burn Rate connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Compound interest helps savers and hurts undisciplined borrowers.","Diversification reduces idiosyncratic risk but not all market risk.","Fees compound silently in retirement and brokerage accounts.","Compound interest helps savers and hurts undisciplined borrowers.","Diversification reduces idiosyncratic risk but not all market risk."],
      realWorldRelevance: "Strong grasp of burn rate reduces rework, supports defensible records, and speeds collaboration across Startup Finance.",
    }
  ),
  chapter(
    "unit-economics",
    3,
    "Unit Economics",
    [
    section(
      "unit-economics-s1",
      "3.1 Unit Economics — Foundations and vocabulary",
      ["Unit Economics is a foundation in Startup Finance because diversification reduces idiosyncratic risk but not all market risk. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Compound interest helps savers and hurts undisciplined borrowers. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain unit economics aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat unit economics as a shared model for decisions. Fees compound silently in retirement and brokerage accounts. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "unit-economics-s2",
      "3.2 Unit Economics — How professionals apply this in practice",
      ["Professionals rarely dispute whether unit economics exists—they dispute how compound interest helps savers and hurts undisciplined borrowers. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Fees compound silently in retirement and brokerage accounts.","When stakes rise, pause for a second opinion or formal review. Credit scores summarize repayment history but not full financial health. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Identity theft remediation requires fast institution notification. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers."]
      }
    ),
    section(
      "unit-economics-s3",
      "3.3 Unit Economics — Workplace scenarios and documentation",
      ["Scenario: a teammate cites unit economics in a meeting, but details in the packet do not match the textbook example. Fees compound silently in retirement and brokerage accounts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Credit scores summarize repayment history but not full financial health.","Good documentation states facts, cites the framework, and records the decision. Identity theft remediation requires fast institution notification. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Emergency funds reduce forced high-interest debt during shocks. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums."]
      }
    ),
    section(
      "unit-economics-s4",
      "3.4 Unit Economics — Common mistakes and how to avoid them",
      ["Common mistakes around unit economics include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Credit scores summarize repayment history but not full financial health.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Identity theft remediation requires fast institution notification. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Emergency funds reduce forced high-interest debt during shocks. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Tax rules change; documentation beats memory at filing time. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk."]
      }
    ),
    section(
      "unit-economics-s5",
      "3.5 Unit Economics — Putting the chapter together",
      ["This chapter’s through-line is simple: Unit Economics connects principles to accountable action. Identity theft remediation requires fast institution notification.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Emergency funds reduce forced high-interest debt during shocks. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits unit economics in your field. Tax rules change; documentation beats memory at filing time. Budgets assign dollars to priorities before month-end surprises."], {
        bulletPoints: ["Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers."]
      }
    )
    ],
    {
      learningObjectives: ["Define unit economics and explain why it matters in Startup Finance","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Unit Economics connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper."],
      realWorldRelevance: "Strong grasp of unit economics reduces rework, supports defensible records, and speeds collaboration across Startup Finance.",
    }
  ),
  chapter(
    "forecasting",
    4,
    "Simple Forecasting",
    [
    section(
      "forecasting-s1",
      "4.1 Simple Forecasting — Foundations and vocabulary",
      ["Simple Forecasting is a foundation in Startup Finance because compound interest helps savers and hurts undisciplined borrowers. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Fees compound silently in retirement and brokerage accounts. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain simple forecasting aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat simple forecasting as a shared model for decisions. Credit scores summarize repayment history but not full financial health. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums."],
        citations: [{"source":"Federal Reserve Education","url":"https://www.federalreserveeducation.org/","note":"Money, banking, and policy basics"}]
      }
    ),
    section(
      "forecasting-s2",
      "4.2 Simple Forecasting — How professionals apply this in practice",
      ["Professionals rarely dispute whether simple forecasting exists—they dispute how fees compound silently in retirement and brokerage accounts. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Credit scores summarize repayment history but not full financial health.","When stakes rise, pause for a second opinion or formal review. Identity theft remediation requires fast institution notification. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Emergency funds reduce forced high-interest debt during shocks. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk."]
      }
    ),
    section(
      "forecasting-s3",
      "4.3 Simple Forecasting — Workplace scenarios and documentation",
      ["Scenario: a teammate cites simple forecasting in a meeting, but details in the packet do not match the textbook example. Credit scores summarize repayment history but not full financial health. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Identity theft remediation requires fast institution notification.","Good documentation states facts, cites the framework, and records the decision. Emergency funds reduce forced high-interest debt during shocks. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Tax rules change; documentation beats memory at filing time. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long."]
      }
    ),
    section(
      "forecasting-s4",
      "4.4 Simple Forecasting — Common mistakes and how to avoid them",
      ["Common mistakes around simple forecasting include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Identity theft remediation requires fast institution notification.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Emergency funds reduce forced high-interest debt during shocks. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Tax rules change; documentation beats memory at filing time. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Budgets assign dollars to priorities before month-end surprises. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums."]
      }
    ),
    section(
      "forecasting-s5",
      "4.5 Simple Forecasting — Putting the chapter together",
      ["This chapter’s through-line is simple: Simple Forecasting connects principles to accountable action. Emergency funds reduce forced high-interest debt during shocks.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Tax rules change; documentation beats memory at filing time. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits simple forecasting in your field. Budgets assign dollars to priorities before month-end surprises. Fraud controls separate duties so one person cannot steal end-to-end."], {
        bulletPoints: ["Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk."]
      }
    )
    ],
    {
      learningObjectives: ["Define simple forecasting and explain why it matters in Startup Finance","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Simple Forecasting connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end."],
      realWorldRelevance: "Strong grasp of simple forecasting reduces rework, supports defensible records, and speeds collaboration across Startup Finance.",
    }
  ),
  chapter(
    "fundraising-intro",
    5,
    "Fundraising Intro",
    [
    section(
      "fundraising-intro-s1",
      "5.1 Fundraising Intro — Foundations and vocabulary",
      ["Fundraising Intro is a foundation in Startup Finance because inflation erodes purchasing power of cash held too long. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Insurance transfers catastrophic risk for predictable premiums. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain fundraising intro aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat fundraising intro as a shared model for decisions. Diversification reduces idiosyncratic risk but not all market risk. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "fundraising-intro-s2",
      "5.2 Fundraising Intro — How professionals apply this in practice",
      ["Professionals rarely dispute whether fundraising intro exists—they dispute how cash flow timing can bankrupt profitable businesses on paper. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Inflation erodes purchasing power of cash held too long.","When stakes rise, pause for a second opinion or formal review. Insurance transfers catastrophic risk for predictable premiums. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Diversification reduces idiosyncratic risk but not all market risk. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises."]
      }
    ),
    section(
      "fundraising-intro-s3",
      "5.3 Fundraising Intro — Workplace scenarios and documentation",
      ["Scenario: a teammate cites fundraising intro in a meeting, but details in the packet do not match the textbook example. Fraud controls separate duties so one person cannot steal end-to-end. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Cash flow timing can bankrupt profitable businesses on paper.","Good documentation states facts, cites the framework, and records the decision. Inflation erodes purchasing power of cash held too long. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Insurance transfers catastrophic risk for predictable premiums. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks."]
      }
    ),
    section(
      "fundraising-intro-s4",
      "5.4 Fundraising Intro — Common mistakes and how to avoid them",
      ["Common mistakes around fundraising intro include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Budgets assign dollars to priorities before month-end surprises.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Fraud controls separate duties so one person cannot steal end-to-end. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Cash flow timing can bankrupt profitable businesses on paper. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Inflation erodes purchasing power of cash held too long. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time."]
      }
    ),
    section(
      "fundraising-intro-s5",
      "5.5 Fundraising Intro — Putting the chapter together",
      ["This chapter’s through-line is simple: Fundraising Intro connects principles to accountable action. Tax rules change; documentation beats memory at filing time.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Budgets assign dollars to priorities before month-end surprises. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits fundraising intro in your field. Fraud controls separate duties so one person cannot steal end-to-end. Cash flow timing can bankrupt profitable businesses on paper."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises."]
      }
    )
    ],
    {
      learningObjectives: ["Define fundraising intro and explain why it matters in Startup Finance","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Fundraising Intro connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health."],
      realWorldRelevance: "Strong grasp of fundraising intro reduces rework, supports defensible records, and speeds collaboration across Startup Finance.",
    }
  ),
  chapter(
    "cap-table",
    6,
    "Cap Table Basics",
    [
    section(
      "cap-table-s1",
      "6.1 Cap Table Basics — Foundations and vocabulary",
      ["Cap Table Basics is a foundation in Startup Finance because inflation erodes purchasing power of cash held too long. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Diversification reduces idiosyncratic risk but not all market risk. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain cap table basics aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat cap table basics as a shared model for decisions. Compound interest helps savers and hurts undisciplined borrowers. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Emergency funds reduce forced high-interest debt during shocks.","Cash flow timing can bankrupt profitable businesses on paper.","Insurance transfers catastrophic risk for predictable premiums.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises."],
        citations: [{"source":"Federal Reserve Education","url":"https://www.federalreserveeducation.org/","note":"Money, banking, and policy basics"}]
      }
    ),
    section(
      "cap-table-s2",
      "6.2 Cap Table Basics — How professionals apply this in practice",
      ["Professionals rarely dispute whether cap table basics exists—they dispute how fraud controls separate duties so one person cannot steal end-to-end. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Inflation erodes purchasing power of cash held too long.","When stakes rise, pause for a second opinion or formal review. Diversification reduces idiosyncratic risk but not all market risk. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Compound interest helps savers and hurts undisciplined borrowers. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Cash flow timing can bankrupt profitable businesses on paper.","Insurance transfers catastrophic risk for predictable premiums.","Tax rules change; documentation beats memory at filing time."]
      }
    ),
    section(
      "cap-table-s3",
      "6.3 Cap Table Basics — Workplace scenarios and documentation",
      ["Scenario: a teammate cites cap table basics in a meeting, but details in the packet do not match the textbook example. Budgets assign dollars to priorities before month-end surprises. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Fraud controls separate duties so one person cannot steal end-to-end.","Good documentation states facts, cites the framework, and records the decision. Inflation erodes purchasing power of cash held too long. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Diversification reduces idiosyncratic risk but not all market risk. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Cash flow timing can bankrupt profitable businesses on paper.","Insurance transfers catastrophic risk for predictable premiums.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end."]
      }
    ),
    section(
      "cap-table-s4",
      "6.4 Cap Table Basics — Common mistakes and how to avoid them",
      ["Common mistakes around cap table basics include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Tax rules change; documentation beats memory at filing time.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Budgets assign dollars to priorities before month-end surprises. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Fraud controls separate duties so one person cannot steal end-to-end. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Inflation erodes purchasing power of cash held too long. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Emergency funds reduce forced high-interest debt during shocks.","Cash flow timing can bankrupt profitable businesses on paper.","Insurance transfers catastrophic risk for predictable premiums.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises."]
      }
    ),
    section(
      "cap-table-s5",
      "6.5 Cap Table Basics — Putting the chapter together",
      ["This chapter’s through-line is simple: Cap Table Basics connects principles to accountable action. Insurance transfers catastrophic risk for predictable premiums.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Tax rules change; documentation beats memory at filing time. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits cap table basics in your field. Budgets assign dollars to priorities before month-end surprises. Fraud controls separate duties so one person cannot steal end-to-end."], {
        bulletPoints: ["Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Cash flow timing can bankrupt profitable businesses on paper.","Insurance transfers catastrophic risk for predictable premiums.","Tax rules change; documentation beats memory at filing time."]
      }
    )
    ],
    {
      learningObjectives: ["Define cap table basics and explain why it matters in Startup Finance","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Cap Table Basics connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Emergency funds reduce forced high-interest debt during shocks.","Identity theft remediation requires fast institution notification.","Cash flow timing can bankrupt profitable businesses on paper.","Emergency funds reduce forced high-interest debt during shocks.","Identity theft remediation requires fast institution notification."],
      realWorldRelevance: "Strong grasp of cap table basics reduces rework, supports defensible records, and speeds collaboration across Startup Finance.",
    }
  ),
  chapter(
    "financial-model",
    7,
    "Lightweight Models",
    [
    section(
      "financial-model-s1",
      "7.1 Lightweight Models — Foundations and vocabulary",
      ["Lightweight Models is a foundation in Startup Finance because tax rules change; documentation beats memory at filing time. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Budgets assign dollars to priorities before month-end surprises. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain lightweight models aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat lightweight models as a shared model for decisions. Fraud controls separate duties so one person cannot steal end-to-end. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "financial-model-s2",
      "7.2 Lightweight Models — How professionals apply this in practice",
      ["Professionals rarely dispute whether lightweight models exists—they dispute how emergency funds reduce forced high-interest debt during shocks. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Tax rules change; documentation beats memory at filing time.","When stakes rise, pause for a second opinion or formal review. Budgets assign dollars to priorities before month-end surprises. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Fraud controls separate duties so one person cannot steal end-to-end. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health."]
      }
    ),
    section(
      "financial-model-s3",
      "7.3 Lightweight Models — Workplace scenarios and documentation",
      ["Scenario: a teammate cites lightweight models in a meeting, but details in the packet do not match the textbook example. Identity theft remediation requires fast institution notification. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Emergency funds reduce forced high-interest debt during shocks.","Good documentation states facts, cites the framework, and records the decision. Tax rules change; documentation beats memory at filing time. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Budgets assign dollars to priorities before month-end surprises. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers."]
      }
    ),
    section(
      "financial-model-s4",
      "7.4 Lightweight Models — Common mistakes and how to avoid them",
      ["Common mistakes around lightweight models include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Credit scores summarize repayment history but not full financial health.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Identity theft remediation requires fast institution notification. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Emergency funds reduce forced high-interest debt during shocks. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Tax rules change; documentation beats memory at filing time. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts."]
      }
    ),
    section(
      "financial-model-s5",
      "7.5 Lightweight Models — Putting the chapter together",
      ["This chapter’s through-line is simple: Lightweight Models connects principles to accountable action. Fees compound silently in retirement and brokerage accounts.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Credit scores summarize repayment history but not full financial health. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits lightweight models in your field. Identity theft remediation requires fast institution notification. Emergency funds reduce forced high-interest debt during shocks."], {
        bulletPoints: ["Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health."]
      }
    )
    ],
    {
      learningObjectives: ["Define lightweight models and explain why it matters in Startup Finance","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Lightweight Models connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums."],
      realWorldRelevance: "Strong grasp of lightweight models reduces rework, supports defensible records, and speeds collaboration across Startup Finance.",
    }
  ),
  chapter(
    "finance-ops",
    8,
    "Finance Operations",
    [
    section(
      "finance-ops-s1",
      "8.1 Finance Operations — Foundations and vocabulary",
      ["Finance Operations is a foundation in Startup Finance because diversification reduces idiosyncratic risk but not all market risk. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Compound interest helps savers and hurts undisciplined borrowers. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain finance operations aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat finance operations as a shared model for decisions. Fees compound silently in retirement and brokerage accounts. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "finance-ops-s2",
      "8.2 Finance Operations — How professionals apply this in practice",
      ["Professionals rarely dispute whether finance operations exists—they dispute how compound interest helps savers and hurts undisciplined borrowers. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Fees compound silently in retirement and brokerage accounts.","When stakes rise, pause for a second opinion or formal review. Credit scores summarize repayment history but not full financial health. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Identity theft remediation requires fast institution notification. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises."]
      }
    ),
    section(
      "finance-ops-s3",
      "8.3 Finance Operations — Workplace scenarios and documentation",
      ["Scenario: a teammate cites finance operations in a meeting, but details in the packet do not match the textbook example. Fees compound silently in retirement and brokerage accounts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Credit scores summarize repayment history but not full financial health.","Good documentation states facts, cites the framework, and records the decision. Identity theft remediation requires fast institution notification. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Emergency funds reduce forced high-interest debt during shocks. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper."]
      }
    ),
    section(
      "finance-ops-s4",
      "8.4 Finance Operations — Common mistakes and how to avoid them",
      ["Common mistakes around finance operations include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Credit scores summarize repayment history but not full financial health.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Identity theft remediation requires fast institution notification. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Emergency funds reduce forced high-interest debt during shocks. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Tax rules change; documentation beats memory at filing time. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end."]
      }
    ),
    section(
      "finance-ops-s5",
      "8.5 Finance Operations — Putting the chapter together",
      ["This chapter’s through-line is simple: Finance Operations connects principles to accountable action. Identity theft remediation requires fast institution notification.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Emergency funds reduce forced high-interest debt during shocks. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits finance operations in your field. Tax rules change; documentation beats memory at filing time. Budgets assign dollars to priorities before month-end surprises."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises."]
      }
    )
    ],
    {
      learningObjectives: ["Define finance operations and explain why it matters in Startup Finance","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Finance Operations connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Identity theft remediation requires fast institution notification.","Credit scores summarize repayment history but not full financial health.","Emergency funds reduce forced high-interest debt during shocks.","Identity theft remediation requires fast institution notification.","Credit scores summarize repayment history but not full financial health."],
      realWorldRelevance: "Strong grasp of finance operations reduces rework, supports defensible records, and speeds collaboration across Startup Finance.",
    }
  )
];
