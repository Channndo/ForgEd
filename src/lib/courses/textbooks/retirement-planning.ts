import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const RET_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Retirement Planning",
  subtitle: "ForgEd workforce textbook — Retirement Planning",
  paragraphs: [
    "This ForgEd digital textbook presents Retirement Planning at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const RET_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "retirement-why",
    1,
    "Why Start Early",
    [
    section(
      "retirement-why-s1",
      "1.1 Why Start Early — Foundations and vocabulary",
      ["Why Start Early is a foundation in Retirement Planning because credit scores summarize repayment history but not full financial health. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Identity theft remediation requires fast institution notification. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain why start early aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat why start early as a shared model for decisions. Emergency funds reduce forced high-interest debt during shocks. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks."],
        citations: [{"source":"Federal Reserve Education","url":"https://www.federalreserveeducation.org/","note":"Money, banking, and policy basics"}]
      }
    ),
    section(
      "retirement-why-s2",
      "1.2 Why Start Early — How professionals apply this in practice",
      ["Professionals rarely dispute whether why start early exists—they dispute how fees compound silently in retirement and brokerage accounts. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Credit scores summarize repayment history but not full financial health.","When stakes rise, pause for a second opinion or formal review. Identity theft remediation requires fast institution notification. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Emergency funds reduce forced high-interest debt during shocks. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification."]
      }
    ),
    section(
      "retirement-why-s3",
      "1.3 Why Start Early — Workplace scenarios and documentation",
      ["Scenario: a teammate cites why start early in a meeting, but details in the packet do not match the textbook example. Compound interest helps savers and hurts undisciplined borrowers. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Fees compound silently in retirement and brokerage accounts.","Good documentation states facts, cites the framework, and records the decision. Credit scores summarize repayment history but not full financial health. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Identity theft remediation requires fast institution notification. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time."]
      }
    ),
    section(
      "retirement-why-s4",
      "1.4 Why Start Early — Common mistakes and how to avoid them",
      ["Common mistakes around why start early include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Diversification reduces idiosyncratic risk but not all market risk.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Compound interest helps savers and hurts undisciplined borrowers. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Fees compound silently in retirement and brokerage accounts. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Credit scores summarize repayment history but not full financial health. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks."]
      }
    ),
    section(
      "retirement-why-s5",
      "1.5 Why Start Early — Putting the chapter together",
      ["This chapter’s through-line is simple: Why Start Early connects principles to accountable action. Insurance transfers catastrophic risk for predictable premiums.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Diversification reduces idiosyncratic risk but not all market risk. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits why start early in your field. Compound interest helps savers and hurts undisciplined borrowers. Fees compound silently in retirement and brokerage accounts."], {
        bulletPoints: ["Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification."]
      }
    )
    ],
    {
      learningObjectives: ["Define why start early and explain why it matters in Retirement Planning","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Why Start Early connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Compound interest helps savers and hurts undisciplined borrowers.","Diversification reduces idiosyncratic risk but not all market risk.","Fees compound silently in retirement and brokerage accounts.","Compound interest helps savers and hurts undisciplined borrowers.","Diversification reduces idiosyncratic risk but not all market risk."],
      realWorldRelevance: "Strong grasp of why start early reduces rework, supports defensible records, and speeds collaboration across Retirement Planning.",
    }
  ),
  chapter(
    "401k",
    2,
    "401(k) Basics",
    [
    section(
      "401k-s1",
      "2.1 401(k) Basics — Foundations and vocabulary",
      ["401(k) Basics is a foundation in Retirement Planning because fees compound silently in retirement and brokerage accounts. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Credit scores summarize repayment history but not full financial health. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain 401(k) basics aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat 401(k) basics as a shared model for decisions. Identity theft remediation requires fast institution notification. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "401k-s2",
      "2.2 401(k) Basics — How professionals apply this in practice",
      ["Professionals rarely dispute whether 401(k) basics exists—they dispute how compound interest helps savers and hurts undisciplined borrowers. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Fees compound silently in retirement and brokerage accounts.","When stakes rise, pause for a second opinion or formal review. Credit scores summarize repayment history but not full financial health. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Identity theft remediation requires fast institution notification. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers."]
      }
    ),
    section(
      "401k-s3",
      "2.3 401(k) Basics — Workplace scenarios and documentation",
      ["Scenario: a teammate cites 401(k) basics in a meeting, but details in the packet do not match the textbook example. Diversification reduces idiosyncratic risk but not all market risk. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Compound interest helps savers and hurts undisciplined borrowers.","Good documentation states facts, cites the framework, and records the decision. Fees compound silently in retirement and brokerage accounts. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Credit scores summarize repayment history but not full financial health. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health."]
      }
    ),
    section(
      "401k-s4",
      "2.4 401(k) Basics — Common mistakes and how to avoid them",
      ["Common mistakes around 401(k) basics include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Insurance transfers catastrophic risk for predictable premiums.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Diversification reduces idiosyncratic risk but not all market risk. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Compound interest helps savers and hurts undisciplined borrowers. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Fees compound silently in retirement and brokerage accounts. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts."]
      }
    ),
    section(
      "401k-s5",
      "2.5 401(k) Basics — Putting the chapter together",
      ["This chapter’s through-line is simple: 401(k) Basics connects principles to accountable action. Inflation erodes purchasing power of cash held too long.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Insurance transfers catastrophic risk for predictable premiums. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits 401(k) basics in your field. Diversification reduces idiosyncratic risk but not all market risk. Compound interest helps savers and hurts undisciplined borrowers."], {
        bulletPoints: ["Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers."]
      }
    )
    ],
    {
      learningObjectives: ["Define 401(k) basics and explain why it matters in Retirement Planning","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "401(k) Basics connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Inflation erodes purchasing power of cash held too long.","Cash flow timing can bankrupt profitable businesses on paper.","Insurance transfers catastrophic risk for predictable premiums.","Inflation erodes purchasing power of cash held too long.","Cash flow timing can bankrupt profitable businesses on paper."],
      realWorldRelevance: "Strong grasp of 401(k) basics reduces rework, supports defensible records, and speeds collaboration across Retirement Planning.",
    }
  ),
  chapter(
    "ira",
    3,
    "IRA Options",
    [
    section(
      "ira-s1",
      "3.1 IRA Options — Foundations and vocabulary",
      ["IRA Options is a foundation in Retirement Planning because fraud controls separate duties so one person cannot steal end-to-end. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Cash flow timing can bankrupt profitable businesses on paper. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ira options aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ira options as a shared model for decisions. Inflation erodes purchasing power of cash held too long. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "ira-s2",
      "3.2 IRA Options — How professionals apply this in practice",
      ["Professionals rarely dispute whether ira options exists—they dispute how cash flow timing can bankrupt profitable businesses on paper. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Inflation erodes purchasing power of cash held too long.","When stakes rise, pause for a second opinion or formal review. Insurance transfers catastrophic risk for predictable premiums. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Diversification reduces idiosyncratic risk but not all market risk. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises."]
      }
    ),
    section(
      "ira-s3",
      "3.3 IRA Options — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ira options in a meeting, but details in the packet do not match the textbook example. Inflation erodes purchasing power of cash held too long. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Insurance transfers catastrophic risk for predictable premiums.","Good documentation states facts, cites the framework, and records the decision. Diversification reduces idiosyncratic risk but not all market risk. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Compound interest helps savers and hurts undisciplined borrowers. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper."]
      }
    ),
    section(
      "ira-s4",
      "3.4 IRA Options — Common mistakes and how to avoid them",
      ["Common mistakes around ira options include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Insurance transfers catastrophic risk for predictable premiums.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Diversification reduces idiosyncratic risk but not all market risk. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Compound interest helps savers and hurts undisciplined borrowers. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Fees compound silently in retirement and brokerage accounts. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end."]
      }
    ),
    section(
      "ira-s5",
      "3.5 IRA Options — Putting the chapter together",
      ["This chapter’s through-line is simple: IRA Options connects principles to accountable action. Diversification reduces idiosyncratic risk but not all market risk.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Compound interest helps savers and hurts undisciplined borrowers. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ira options in your field. Fees compound silently in retirement and brokerage accounts. Credit scores summarize repayment history but not full financial health."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises."]
      }
    )
    ],
    {
      learningObjectives: ["Define ira options and explain why it matters in Retirement Planning","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "IRA Options connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Identity theft remediation requires fast institution notification.","Credit scores summarize repayment history but not full financial health.","Emergency funds reduce forced high-interest debt during shocks.","Identity theft remediation requires fast institution notification.","Credit scores summarize repayment history but not full financial health."],
      realWorldRelevance: "Strong grasp of ira options reduces rework, supports defensible records, and speeds collaboration across Retirement Planning.",
    }
  ),
  chapter(
    "employer-match",
    4,
    "Employer Match",
    [
    section(
      "employer-match-s1",
      "4.1 Employer Match — Foundations and vocabulary",
      ["Employer Match is a foundation in Retirement Planning because inflation erodes purchasing power of cash held too long. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Insurance transfers catastrophic risk for predictable premiums. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain employer match aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat employer match as a shared model for decisions. Diversification reduces idiosyncratic risk but not all market risk. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "employer-match-s2",
      "4.2 Employer Match — How professionals apply this in practice",
      ["Professionals rarely dispute whether employer match exists—they dispute how cash flow timing can bankrupt profitable businesses on paper. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Inflation erodes purchasing power of cash held too long.","When stakes rise, pause for a second opinion or formal review. Insurance transfers catastrophic risk for predictable premiums. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Diversification reduces idiosyncratic risk but not all market risk. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises."]
      }
    ),
    section(
      "employer-match-s3",
      "4.3 Employer Match — Workplace scenarios and documentation",
      ["Scenario: a teammate cites employer match in a meeting, but details in the packet do not match the textbook example. Fraud controls separate duties so one person cannot steal end-to-end. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Cash flow timing can bankrupt profitable businesses on paper.","Good documentation states facts, cites the framework, and records the decision. Inflation erodes purchasing power of cash held too long. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Insurance transfers catastrophic risk for predictable premiums. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks."]
      }
    ),
    section(
      "employer-match-s4",
      "4.4 Employer Match — Common mistakes and how to avoid them",
      ["Common mistakes around employer match include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Budgets assign dollars to priorities before month-end surprises.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Fraud controls separate duties so one person cannot steal end-to-end. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Cash flow timing can bankrupt profitable businesses on paper. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Inflation erodes purchasing power of cash held too long. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time."]
      }
    ),
    section(
      "employer-match-s5",
      "4.5 Employer Match — Putting the chapter together",
      ["This chapter’s through-line is simple: Employer Match connects principles to accountable action. Tax rules change; documentation beats memory at filing time.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Budgets assign dollars to priorities before month-end surprises. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits employer match in your field. Fraud controls separate duties so one person cannot steal end-to-end. Cash flow timing can bankrupt profitable businesses on paper."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises."]
      }
    )
    ],
    {
      learningObjectives: ["Define employer match and explain why it matters in Retirement Planning","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Employer Match connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health."],
      realWorldRelevance: "Strong grasp of employer match reduces rework, supports defensible records, and speeds collaboration across Retirement Planning.",
    }
  ),
  chapter(
    "social-security",
    5,
    "Social Security Overview",
    [
    section(
      "social-security-s1",
      "5.1 Social Security Overview — Foundations and vocabulary",
      ["Social Security Overview is a foundation in Retirement Planning because identity theft remediation requires fast institution notification. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Emergency funds reduce forced high-interest debt during shocks. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain social security overview aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat social security overview as a shared model for decisions. Tax rules change; documentation beats memory at filing time. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "social-security-s2",
      "5.2 Social Security Overview — How professionals apply this in practice",
      ["Professionals rarely dispute whether social security overview exists—they dispute how emergency funds reduce forced high-interest debt during shocks. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Tax rules change; documentation beats memory at filing time.","When stakes rise, pause for a second opinion or formal review. Budgets assign dollars to priorities before month-end surprises. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Fraud controls separate duties so one person cannot steal end-to-end. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health."]
      }
    ),
    section(
      "social-security-s3",
      "5.3 Social Security Overview — Workplace scenarios and documentation",
      ["Scenario: a teammate cites social security overview in a meeting, but details in the packet do not match the textbook example. Tax rules change; documentation beats memory at filing time. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Budgets assign dollars to priorities before month-end surprises.","Good documentation states facts, cites the framework, and records the decision. Fraud controls separate duties so one person cannot steal end-to-end. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Cash flow timing can bankrupt profitable businesses on paper. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks."]
      }
    ),
    section(
      "social-security-s4",
      "5.4 Social Security Overview — Common mistakes and how to avoid them",
      ["Common mistakes around social security overview include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Budgets assign dollars to priorities before month-end surprises.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Fraud controls separate duties so one person cannot steal end-to-end. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Cash flow timing can bankrupt profitable businesses on paper. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Inflation erodes purchasing power of cash held too long. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification."]
      }
    ),
    section(
      "social-security-s5",
      "5.5 Social Security Overview — Putting the chapter together",
      ["This chapter’s through-line is simple: Social Security Overview connects principles to accountable action. Fraud controls separate duties so one person cannot steal end-to-end.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Cash flow timing can bankrupt profitable businesses on paper. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits social security overview in your field. Inflation erodes purchasing power of cash held too long. Insurance transfers catastrophic risk for predictable premiums."], {
        bulletPoints: ["Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health."]
      }
    )
    ],
    {
      learningObjectives: ["Define social security overview and explain why it matters in Retirement Planning","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Social Security Overview connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Diversification reduces idiosyncratic risk but not all market risk.","Insurance transfers catastrophic risk for predictable premiums.","Compound interest helps savers and hurts undisciplined borrowers.","Diversification reduces idiosyncratic risk but not all market risk.","Insurance transfers catastrophic risk for predictable premiums."],
      realWorldRelevance: "Strong grasp of social security overview reduces rework, supports defensible records, and speeds collaboration across Retirement Planning.",
    }
  ),
  chapter(
    "withdrawal",
    6,
    "Withdrawal Strategies",
    [
    section(
      "withdrawal-s1",
      "6.1 Withdrawal Strategies — Foundations and vocabulary",
      ["Withdrawal Strategies is a foundation in Retirement Planning because inflation erodes purchasing power of cash held too long. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Insurance transfers catastrophic risk for predictable premiums. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain withdrawal strategies aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat withdrawal strategies as a shared model for decisions. Diversification reduces idiosyncratic risk but not all market risk. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "withdrawal-s2",
      "6.2 Withdrawal Strategies — How professionals apply this in practice",
      ["Professionals rarely dispute whether withdrawal strategies exists—they dispute how cash flow timing can bankrupt profitable businesses on paper. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Inflation erodes purchasing power of cash held too long.","When stakes rise, pause for a second opinion or formal review. Insurance transfers catastrophic risk for predictable premiums. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Diversification reduces idiosyncratic risk but not all market risk. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums."]
      }
    ),
    section(
      "withdrawal-s3",
      "6.3 Withdrawal Strategies — Workplace scenarios and documentation",
      ["Scenario: a teammate cites withdrawal strategies in a meeting, but details in the packet do not match the textbook example. Fraud controls separate duties so one person cannot steal end-to-end. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Cash flow timing can bankrupt profitable businesses on paper.","Good documentation states facts, cites the framework, and records the decision. Inflation erodes purchasing power of cash held too long. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Insurance transfers catastrophic risk for predictable premiums. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper."]
      }
    ),
    section(
      "withdrawal-s4",
      "6.4 Withdrawal Strategies — Common mistakes and how to avoid them",
      ["Common mistakes around withdrawal strategies include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Budgets assign dollars to priorities before month-end surprises.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Fraud controls separate duties so one person cannot steal end-to-end. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Cash flow timing can bankrupt profitable businesses on paper. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Inflation erodes purchasing power of cash held too long. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long."]
      }
    ),
    section(
      "withdrawal-s5",
      "6.5 Withdrawal Strategies — Putting the chapter together",
      ["This chapter’s through-line is simple: Withdrawal Strategies connects principles to accountable action. Tax rules change; documentation beats memory at filing time.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Budgets assign dollars to priorities before month-end surprises. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits withdrawal strategies in your field. Fraud controls separate duties so one person cannot steal end-to-end. Cash flow timing can bankrupt profitable businesses on paper."], {
        bulletPoints: ["Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums."]
      }
    )
    ],
    {
      learningObjectives: ["Define withdrawal strategies and explain why it matters in Retirement Planning","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Withdrawal Strategies connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises."],
      realWorldRelevance: "Strong grasp of withdrawal strategies reduces rework, supports defensible records, and speeds collaboration across Retirement Planning.",
    }
  ),
  chapter(
    "healthcare-retire",
    7,
    "Healthcare in Retirement",
    [
    section(
      "healthcare-retire-s1",
      "7.1 Healthcare in Retirement — Foundations and vocabulary",
      ["Healthcare in Retirement is a foundation in Retirement Planning because emergency funds reduce forced high-interest debt during shocks. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Fees compound silently in retirement and brokerage accounts. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain healthcare in retirement aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat healthcare in retirement as a shared model for decisions. Tax rules change; documentation beats memory at filing time. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Credit scores summarize repayment history but not full financial health."],
        citations: [{"source":"Federal Reserve Education","url":"https://www.federalreserveeducation.org/","note":"Money, banking, and policy basics"}]
      }
    ),
    section(
      "healthcare-retire-s2",
      "7.2 Healthcare in Retirement — How professionals apply this in practice",
      ["Professionals rarely dispute whether healthcare in retirement exists—they dispute how fees compound silently in retirement and brokerage accounts. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Tax rules change; documentation beats memory at filing time.","When stakes rise, pause for a second opinion or formal review. Budgets assign dollars to priorities before month-end surprises. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Fraud controls separate duties so one person cannot steal end-to-end. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification."]
      }
    ),
    section(
      "healthcare-retire-s3",
      "7.3 Healthcare in Retirement — Workplace scenarios and documentation",
      ["Scenario: a teammate cites healthcare in retirement in a meeting, but details in the packet do not match the textbook example. Tax rules change; documentation beats memory at filing time. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Budgets assign dollars to priorities before month-end surprises.","Good documentation states facts, cites the framework, and records the decision. Fraud controls separate duties so one person cannot steal end-to-end. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Cash flow timing can bankrupt profitable businesses on paper. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers."]
      }
    ),
    section(
      "healthcare-retire-s4",
      "7.4 Healthcare in Retirement — Common mistakes and how to avoid them",
      ["Common mistakes around healthcare in retirement include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Budgets assign dollars to priorities before month-end surprises.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Fraud controls separate duties so one person cannot steal end-to-end. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Cash flow timing can bankrupt profitable businesses on paper. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Inflation erodes purchasing power of cash held too long. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Credit scores summarize repayment history but not full financial health."]
      }
    ),
    section(
      "healthcare-retire-s5",
      "7.5 Healthcare in Retirement — Putting the chapter together",
      ["This chapter’s through-line is simple: Healthcare in Retirement connects principles to accountable action. Fraud controls separate duties so one person cannot steal end-to-end.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Cash flow timing can bankrupt profitable businesses on paper. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits healthcare in retirement in your field. Inflation erodes purchasing power of cash held too long. Insurance transfers catastrophic risk for predictable premiums."], {
        bulletPoints: ["Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification."]
      }
    )
    ],
    {
      learningObjectives: ["Define healthcare in retirement and explain why it matters in Retirement Planning","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Healthcare in Retirement connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums."],
      realWorldRelevance: "Strong grasp of healthcare in retirement reduces rework, supports defensible records, and speeds collaboration across Retirement Planning.",
    }
  ),
  chapter(
    "retirement-goals",
    8,
    "Setting Retirement Goals",
    [
    section(
      "retirement-goals-s1",
      "8.1 Setting Retirement Goals — Foundations and vocabulary",
      ["Setting Retirement Goals is a foundation in Retirement Planning because diversification reduces idiosyncratic risk but not all market risk. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Compound interest helps savers and hurts undisciplined borrowers. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain setting retirement goals aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat setting retirement goals as a shared model for decisions. Credit scores summarize repayment history but not full financial health. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Fees compound silently in retirement and brokerage accounts.","Tax rules change; documentation beats memory at filing time."],
        citations: [{"source":"Federal Reserve Education","url":"https://www.federalreserveeducation.org/","note":"Money, banking, and policy basics"}]
      }
    ),
    section(
      "retirement-goals-s2",
      "8.2 Setting Retirement Goals — How professionals apply this in practice",
      ["Professionals rarely dispute whether setting retirement goals exists—they dispute how compound interest helps savers and hurts undisciplined borrowers. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Credit scores summarize repayment history but not full financial health.","When stakes rise, pause for a second opinion or formal review. Identity theft remediation requires fast institution notification. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Emergency funds reduce forced high-interest debt during shocks. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Fees compound silently in retirement and brokerage accounts.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises."]
      }
    ),
    section(
      "retirement-goals-s3",
      "8.3 Setting Retirement Goals — Workplace scenarios and documentation",
      ["Scenario: a teammate cites setting retirement goals in a meeting, but details in the packet do not match the textbook example. Credit scores summarize repayment history but not full financial health. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Identity theft remediation requires fast institution notification.","Good documentation states facts, cites the framework, and records the decision. Emergency funds reduce forced high-interest debt during shocks. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Fees compound silently in retirement and brokerage accounts. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Compound interest helps savers and hurts undisciplined borrowers.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Fees compound silently in retirement and brokerage accounts."]
      }
    ),
    section(
      "retirement-goals-s4",
      "8.4 Setting Retirement Goals — Common mistakes and how to avoid them",
      ["Common mistakes around setting retirement goals include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Identity theft remediation requires fast institution notification.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Emergency funds reduce forced high-interest debt during shocks. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Fees compound silently in retirement and brokerage accounts. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Tax rules change; documentation beats memory at filing time. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Fees compound silently in retirement and brokerage accounts.","Tax rules change; documentation beats memory at filing time."]
      }
    ),
    section(
      "retirement-goals-s5",
      "8.5 Setting Retirement Goals — Putting the chapter together",
      ["This chapter’s through-line is simple: Setting Retirement Goals connects principles to accountable action. Emergency funds reduce forced high-interest debt during shocks.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Fees compound silently in retirement and brokerage accounts. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits setting retirement goals in your field. Tax rules change; documentation beats memory at filing time. Budgets assign dollars to priorities before month-end surprises."], {
        bulletPoints: ["Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Fees compound silently in retirement and brokerage accounts.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises."]
      }
    )
    ],
    {
      learningObjectives: ["Define setting retirement goals and explain why it matters in Retirement Planning","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Setting Retirement Goals connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Compound interest helps savers and hurts undisciplined borrowers.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification."],
      realWorldRelevance: "Strong grasp of setting retirement goals reduces rework, supports defensible records, and speeds collaboration across Retirement Planning.",
    }
  )
];
