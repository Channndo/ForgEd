import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const INV_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Investing Fundamentals",
  subtitle: "ForgEd workforce textbook — Investing Fundamentals",
  paragraphs: [
    "This ForgEd digital textbook presents Investing Fundamentals at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const INV_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "risk-return",
    1,
    "Risk and Return",
    [
    section(
      "risk-return-s1",
      "1.1 Risk and Return — Foundations and vocabulary",
      ["Risk and Return is a foundation in Investing Fundamentals because identity theft remediation requires fast institution notification. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Emergency funds reduce forced high-interest debt during shocks. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain risk and return aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat risk and return as a shared model for decisions. Insurance transfers catastrophic risk for predictable premiums. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "risk-return-s2",
      "1.2 Risk and Return — How professionals apply this in practice",
      ["Professionals rarely dispute whether risk and return exists—they dispute how credit scores summarize repayment history but not full financial health. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Identity theft remediation requires fast institution notification.","When stakes rise, pause for a second opinion or formal review. Emergency funds reduce forced high-interest debt during shocks. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Insurance transfers catastrophic risk for predictable premiums. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Diversification reduces idiosyncratic risk but not all market risk.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper."]
      }
    ),
    section(
      "risk-return-s3",
      "1.3 Risk and Return — Workplace scenarios and documentation",
      ["Scenario: a teammate cites risk and return in a meeting, but details in the packet do not match the textbook example. Fees compound silently in retirement and brokerage accounts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Credit scores summarize repayment history but not full financial health.","Good documentation states facts, cites the framework, and records the decision. Identity theft remediation requires fast institution notification. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Emergency funds reduce forced high-interest debt during shocks. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Compound interest helps savers and hurts undisciplined borrowers."]
      }
    ),
    section(
      "risk-return-s4",
      "1.4 Risk and Return — Common mistakes and how to avoid them",
      ["Common mistakes around risk and return include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Compound interest helps savers and hurts undisciplined borrowers.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Fees compound silently in retirement and brokerage accounts. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Credit scores summarize repayment history but not full financial health. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Identity theft remediation requires fast institution notification. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long."]
      }
    ),
    section(
      "risk-return-s5",
      "1.5 Risk and Return — Putting the chapter together",
      ["This chapter’s through-line is simple: Risk and Return connects principles to accountable action. Inflation erodes purchasing power of cash held too long.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Compound interest helps savers and hurts undisciplined borrowers. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits risk and return in your field. Fees compound silently in retirement and brokerage accounts. Credit scores summarize repayment history but not full financial health."], {
        bulletPoints: ["Diversification reduces idiosyncratic risk but not all market risk.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper."]
      }
    )
    ],
    {
      learningObjectives: ["Define risk and return and explain why it matters in Investing Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Risk and Return connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Tax rules change; documentation beats memory at filing time.","Diversification reduces idiosyncratic risk but not all market risk.","Budgets assign dollars to priorities before month-end surprises.","Tax rules change; documentation beats memory at filing time.","Diversification reduces idiosyncratic risk but not all market risk."],
      realWorldRelevance: "Strong grasp of risk and return reduces rework, supports defensible records, and speeds collaboration across Investing Fundamentals.",
    }
  ),
  chapter(
    "stocks-bonds",
    2,
    "Stocks and Bonds",
    [
    section(
      "stocks-bonds-s1",
      "2.1 Stocks and Bonds — Foundations and vocabulary",
      ["Stocks and Bonds is a foundation in Investing Fundamentals because fees compound silently in retirement and brokerage accounts. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Credit scores summarize repayment history but not full financial health. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain stocks and bonds aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat stocks and bonds as a shared model for decisions. Identity theft remediation requires fast institution notification. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "stocks-bonds-s2",
      "2.2 Stocks and Bonds — How professionals apply this in practice",
      ["Professionals rarely dispute whether stocks and bonds exists—they dispute how credit scores summarize repayment history but not full financial health. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Identity theft remediation requires fast institution notification.","When stakes rise, pause for a second opinion or formal review. Emergency funds reduce forced high-interest debt during shocks. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Tax rules change; documentation beats memory at filing time. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper."]
      }
    ),
    section(
      "stocks-bonds-s3",
      "2.3 Stocks and Bonds — Workplace scenarios and documentation",
      ["Scenario: a teammate cites stocks and bonds in a meeting, but details in the packet do not match the textbook example. Identity theft remediation requires fast institution notification. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Emergency funds reduce forced high-interest debt during shocks.","Good documentation states facts, cites the framework, and records the decision. Tax rules change; documentation beats memory at filing time. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Budgets assign dollars to priorities before month-end surprises. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums."]
      }
    ),
    section(
      "stocks-bonds-s4",
      "2.4 Stocks and Bonds — Common mistakes and how to avoid them",
      ["Common mistakes around stocks and bonds include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Emergency funds reduce forced high-interest debt during shocks.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Tax rules change; documentation beats memory at filing time. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Budgets assign dollars to priorities before month-end surprises. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Fraud controls separate duties so one person cannot steal end-to-end. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long."]
      }
    ),
    section(
      "stocks-bonds-s5",
      "2.5 Stocks and Bonds — Putting the chapter together",
      ["This chapter’s through-line is simple: Stocks and Bonds connects principles to accountable action. Tax rules change; documentation beats memory at filing time.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Budgets assign dollars to priorities before month-end surprises. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits stocks and bonds in your field. Fraud controls separate duties so one person cannot steal end-to-end. Cash flow timing can bankrupt profitable businesses on paper."], {
        bulletPoints: ["Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper."]
      }
    )
    ],
    {
      learningObjectives: ["Define stocks and bonds and explain why it matters in Investing Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Stocks and Bonds connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Tax rules change; documentation beats memory at filing time.","Emergency funds reduce forced high-interest debt during shocks.","Budgets assign dollars to priorities before month-end surprises.","Tax rules change; documentation beats memory at filing time.","Emergency funds reduce forced high-interest debt during shocks."],
      realWorldRelevance: "Strong grasp of stocks and bonds reduces rework, supports defensible records, and speeds collaboration across Investing Fundamentals.",
    }
  ),
  chapter(
    "index-funds",
    3,
    "Index Funds",
    [
    section(
      "index-funds-s1",
      "3.1 Index Funds — Foundations and vocabulary",
      ["Index Funds is a foundation in Investing Fundamentals because compound interest helps savers and hurts undisciplined borrowers. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Fees compound silently in retirement and brokerage accounts. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain index funds aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat index funds as a shared model for decisions. Credit scores summarize repayment history but not full financial health. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "index-funds-s2",
      "3.2 Index Funds — How professionals apply this in practice",
      ["Professionals rarely dispute whether index funds exists—they dispute how fees compound silently in retirement and brokerage accounts. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Credit scores summarize repayment history but not full financial health.","When stakes rise, pause for a second opinion or formal review. Identity theft remediation requires fast institution notification. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Emergency funds reduce forced high-interest debt during shocks. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end."]
      }
    ),
    section(
      "index-funds-s3",
      "3.3 Index Funds — Workplace scenarios and documentation",
      ["Scenario: a teammate cites index funds in a meeting, but details in the packet do not match the textbook example. Credit scores summarize repayment history but not full financial health. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Identity theft remediation requires fast institution notification.","Good documentation states facts, cites the framework, and records the decision. Emergency funds reduce forced high-interest debt during shocks. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Tax rules change; documentation beats memory at filing time. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long."]
      }
    ),
    section(
      "index-funds-s4",
      "3.4 Index Funds — Common mistakes and how to avoid them",
      ["Common mistakes around index funds include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Identity theft remediation requires fast institution notification.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Emergency funds reduce forced high-interest debt during shocks. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Tax rules change; documentation beats memory at filing time. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Budgets assign dollars to priorities before month-end surprises. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper."]
      }
    ),
    section(
      "index-funds-s5",
      "3.5 Index Funds — Putting the chapter together",
      ["This chapter’s through-line is simple: Index Funds connects principles to accountable action. Emergency funds reduce forced high-interest debt during shocks.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Tax rules change; documentation beats memory at filing time. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits index funds in your field. Budgets assign dollars to priorities before month-end surprises. Fraud controls separate duties so one person cannot steal end-to-end."], {
        bulletPoints: ["Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end."]
      }
    )
    ],
    {
      learningObjectives: ["Define index funds and explain why it matters in Investing Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Index Funds connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Emergency funds reduce forced high-interest debt during shocks.","Identity theft remediation requires fast institution notification.","Tax rules change; documentation beats memory at filing time.","Emergency funds reduce forced high-interest debt during shocks.","Identity theft remediation requires fast institution notification."],
      realWorldRelevance: "Strong grasp of index funds reduces rework, supports defensible records, and speeds collaboration across Investing Fundamentals.",
    }
  ),
  chapter(
    "diversification",
    4,
    "Diversification",
    [
    section(
      "diversification-s1",
      "4.1 Diversification — Foundations and vocabulary",
      ["Diversification is a foundation in Investing Fundamentals because credit scores summarize repayment history but not full financial health. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Identity theft remediation requires fast institution notification. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain diversification aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat diversification as a shared model for decisions. Emergency funds reduce forced high-interest debt during shocks. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health."],
        citations: [{"source":"Federal Reserve Education","url":"https://www.federalreserveeducation.org/","note":"Money, banking, and policy basics"}]
      }
    ),
    section(
      "diversification-s2",
      "4.2 Diversification — How professionals apply this in practice",
      ["Professionals rarely dispute whether diversification exists—they dispute how fees compound silently in retirement and brokerage accounts. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Credit scores summarize repayment history but not full financial health.","When stakes rise, pause for a second opinion or formal review. Identity theft remediation requires fast institution notification. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Emergency funds reduce forced high-interest debt during shocks. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Insurance transfers catastrophic risk for predictable premiums.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification."]
      }
    ),
    section(
      "diversification-s3",
      "4.3 Diversification — Workplace scenarios and documentation",
      ["Scenario: a teammate cites diversification in a meeting, but details in the packet do not match the textbook example. Compound interest helps savers and hurts undisciplined borrowers. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Fees compound silently in retirement and brokerage accounts.","Good documentation states facts, cites the framework, and records the decision. Credit scores summarize repayment history but not full financial health. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Identity theft remediation requires fast institution notification. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts."]
      }
    ),
    section(
      "diversification-s4",
      "4.4 Diversification — Common mistakes and how to avoid them",
      ["Common mistakes around diversification include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Insurance transfers catastrophic risk for predictable premiums.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Compound interest helps savers and hurts undisciplined borrowers. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Fees compound silently in retirement and brokerage accounts. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Credit scores summarize repayment history but not full financial health. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health."]
      }
    ),
    section(
      "diversification-s5",
      "4.5 Diversification — Putting the chapter together",
      ["This chapter’s through-line is simple: Diversification connects principles to accountable action. Inflation erodes purchasing power of cash held too long.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Insurance transfers catastrophic risk for predictable premiums. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits diversification in your field. Compound interest helps savers and hurts undisciplined borrowers. Fees compound silently in retirement and brokerage accounts."], {
        bulletPoints: ["Insurance transfers catastrophic risk for predictable premiums.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification."]
      }
    )
    ],
    {
      learningObjectives: ["Define diversification and explain why it matters in Investing Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Diversification connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums."],
      realWorldRelevance: "Strong grasp of diversification reduces rework, supports defensible records, and speeds collaboration across Investing Fundamentals.",
    }
  ),
  chapter(
    "time-horizon",
    5,
    "Time Horizon",
    [
    section(
      "time-horizon-s1",
      "5.1 Time Horizon — Foundations and vocabulary",
      ["Time Horizon is a foundation in Investing Fundamentals because inflation erodes purchasing power of cash held too long. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Insurance transfers catastrophic risk for predictable premiums. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain time horizon aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat time horizon as a shared model for decisions. Diversification reduces idiosyncratic risk but not all market risk. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "time-horizon-s2",
      "5.2 Time Horizon — How professionals apply this in practice",
      ["Professionals rarely dispute whether time horizon exists—they dispute how insurance transfers catastrophic risk for predictable premiums. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Diversification reduces idiosyncratic risk but not all market risk.","When stakes rise, pause for a second opinion or formal review. Compound interest helps savers and hurts undisciplined borrowers. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Fees compound silently in retirement and brokerage accounts. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers."]
      }
    ),
    section(
      "time-horizon-s3",
      "5.3 Time Horizon — Workplace scenarios and documentation",
      ["Scenario: a teammate cites time horizon in a meeting, but details in the packet do not match the textbook example. Diversification reduces idiosyncratic risk but not all market risk. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Compound interest helps savers and hurts undisciplined borrowers.","Good documentation states facts, cites the framework, and records the decision. Fees compound silently in retirement and brokerage accounts. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Credit scores summarize repayment history but not full financial health. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health."]
      }
    ),
    section(
      "time-horizon-s4",
      "5.4 Time Horizon — Common mistakes and how to avoid them",
      ["Common mistakes around time horizon include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Compound interest helps savers and hurts undisciplined borrowers.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Fees compound silently in retirement and brokerage accounts. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Credit scores summarize repayment history but not full financial health. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Identity theft remediation requires fast institution notification. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts."]
      }
    ),
    section(
      "time-horizon-s5",
      "5.5 Time Horizon — Putting the chapter together",
      ["This chapter’s through-line is simple: Time Horizon connects principles to accountable action. Fees compound silently in retirement and brokerage accounts.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Credit scores summarize repayment history but not full financial health. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits time horizon in your field. Identity theft remediation requires fast institution notification. Emergency funds reduce forced high-interest debt during shocks."], {
        bulletPoints: ["Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers."]
      }
    )
    ],
    {
      learningObjectives: ["Define time horizon and explain why it matters in Investing Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Time Horizon connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Inflation erodes purchasing power of cash held too long.","Cash flow timing can bankrupt profitable businesses on paper.","Insurance transfers catastrophic risk for predictable premiums.","Inflation erodes purchasing power of cash held too long.","Cash flow timing can bankrupt profitable businesses on paper."],
      realWorldRelevance: "Strong grasp of time horizon reduces rework, supports defensible records, and speeds collaboration across Investing Fundamentals.",
    }
  ),
  chapter(
    "brokerages",
    6,
    "Brokerage Accounts",
    [
    section(
      "brokerages-s1",
      "6.1 Brokerage Accounts — Foundations and vocabulary",
      ["Brokerage Accounts is a foundation in Investing Fundamentals because cash flow timing can bankrupt profitable businesses on paper. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Inflation erodes purchasing power of cash held too long. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain brokerage accounts aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat brokerage accounts as a shared model for decisions. Insurance transfers catastrophic risk for predictable premiums. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Compound interest helps savers and hurts undisciplined borrowers.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Fees compound silently in retirement and brokerage accounts."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "brokerages-s2",
      "6.2 Brokerage Accounts — How professionals apply this in practice",
      ["Professionals rarely dispute whether brokerage accounts exists—they dispute how fraud controls separate duties so one person cannot steal end-to-end. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Cash flow timing can bankrupt profitable businesses on paper.","When stakes rise, pause for a second opinion or formal review. Inflation erodes purchasing power of cash held too long. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Insurance transfers catastrophic risk for predictable premiums. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Fees compound silently in retirement and brokerage accounts.","Tax rules change; documentation beats memory at filing time."]
      }
    ),
    section(
      "brokerages-s3",
      "6.3 Brokerage Accounts — Workplace scenarios and documentation",
      ["Scenario: a teammate cites brokerage accounts in a meeting, but details in the packet do not match the textbook example. Budgets assign dollars to priorities before month-end surprises. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Fraud controls separate duties so one person cannot steal end-to-end.","Good documentation states facts, cites the framework, and records the decision. Cash flow timing can bankrupt profitable businesses on paper. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Inflation erodes purchasing power of cash held too long. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks."]
      }
    ),
    section(
      "brokerages-s4",
      "6.4 Brokerage Accounts — Common mistakes and how to avoid them",
      ["Common mistakes around brokerage accounts include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Tax rules change; documentation beats memory at filing time.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Budgets assign dollars to priorities before month-end surprises. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Fraud controls separate duties so one person cannot steal end-to-end. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Cash flow timing can bankrupt profitable businesses on paper. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Compound interest helps savers and hurts undisciplined borrowers.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Fees compound silently in retirement and brokerage accounts."]
      }
    ),
    section(
      "brokerages-s5",
      "6.5 Brokerage Accounts — Putting the chapter together",
      ["This chapter’s through-line is simple: Brokerage Accounts connects principles to accountable action. Fees compound silently in retirement and brokerage accounts.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Tax rules change; documentation beats memory at filing time. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits brokerage accounts in your field. Budgets assign dollars to priorities before month-end surprises. Fraud controls separate duties so one person cannot steal end-to-end."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Fees compound silently in retirement and brokerage accounts.","Tax rules change; documentation beats memory at filing time."]
      }
    )
    ],
    {
      learningObjectives: ["Define brokerage accounts and explain why it matters in Investing Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Brokerage Accounts connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Compound interest helps savers and hurts undisciplined borrowers.","Credit scores summarize repayment history but not full financial health.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Credit scores summarize repayment history but not full financial health."],
      realWorldRelevance: "Strong grasp of brokerage accounts reduces rework, supports defensible records, and speeds collaboration across Investing Fundamentals.",
    }
  ),
  chapter(
    "dca",
    7,
    "Dollar-Cost Averaging",
    [
    section(
      "dca-s1",
      "7.1 Dollar-Cost Averaging — Foundations and vocabulary",
      ["Dollar-Cost Averaging is a foundation in Investing Fundamentals because inflation erodes purchasing power of cash held too long. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Insurance transfers catastrophic risk for predictable premiums. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain dollar-cost averaging aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat dollar-cost averaging as a shared model for decisions. Diversification reduces idiosyncratic risk but not all market risk. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Budgets assign dollars to priorities before month-end surprises."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "dca-s2",
      "7.2 Dollar-Cost Averaging — How professionals apply this in practice",
      ["Professionals rarely dispute whether dollar-cost averaging exists—they dispute how cash flow timing can bankrupt profitable businesses on paper. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Inflation erodes purchasing power of cash held too long.","When stakes rise, pause for a second opinion or formal review. Insurance transfers catastrophic risk for predictable premiums. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Diversification reduces idiosyncratic risk but not all market risk. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Budgets assign dollars to priorities before month-end surprises.","Tax rules change; documentation beats memory at filing time."]
      }
    ),
    section(
      "dca-s3",
      "7.3 Dollar-Cost Averaging — Workplace scenarios and documentation",
      ["Scenario: a teammate cites dollar-cost averaging in a meeting, but details in the packet do not match the textbook example. Fraud controls separate duties so one person cannot steal end-to-end. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Cash flow timing can bankrupt profitable businesses on paper.","Good documentation states facts, cites the framework, and records the decision. Inflation erodes purchasing power of cash held too long. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Insurance transfers catastrophic risk for predictable premiums. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks."]
      }
    ),
    section(
      "dca-s4",
      "7.4 Dollar-Cost Averaging — Common mistakes and how to avoid them",
      ["Common mistakes around dollar-cost averaging include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Tax rules change; documentation beats memory at filing time.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Fraud controls separate duties so one person cannot steal end-to-end. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Cash flow timing can bankrupt profitable businesses on paper. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Inflation erodes purchasing power of cash held too long. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Budgets assign dollars to priorities before month-end surprises."]
      }
    ),
    section(
      "dca-s5",
      "7.5 Dollar-Cost Averaging — Putting the chapter together",
      ["This chapter’s through-line is simple: Dollar-Cost Averaging connects principles to accountable action. Budgets assign dollars to priorities before month-end surprises.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Tax rules change; documentation beats memory at filing time. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits dollar-cost averaging in your field. Fraud controls separate duties so one person cannot steal end-to-end. Cash flow timing can bankrupt profitable businesses on paper."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Budgets assign dollars to priorities before month-end surprises.","Tax rules change; documentation beats memory at filing time."]
      }
    )
    ],
    {
      learningObjectives: ["Define dollar-cost averaging and explain why it matters in Investing Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Dollar-Cost Averaging connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health."],
      realWorldRelevance: "Strong grasp of dollar-cost averaging reduces rework, supports defensible records, and speeds collaboration across Investing Fundamentals.",
    }
  ),
  chapter(
    "investing-mistakes",
    8,
    "Common Mistakes",
    [
    section(
      "investing-mistakes-s1",
      "8.1 Common Mistakes — Foundations and vocabulary",
      ["Common Mistakes is a foundation in Investing Fundamentals because fraud controls separate duties so one person cannot steal end-to-end. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Cash flow timing can bankrupt profitable businesses on paper. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain common mistakes aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat common mistakes as a shared model for decisions. Inflation erodes purchasing power of cash held too long. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "investing-mistakes-s2",
      "8.2 Common Mistakes — How professionals apply this in practice",
      ["Professionals rarely dispute whether common mistakes exists—they dispute how budgets assign dollars to priorities before month-end surprises. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Fraud controls separate duties so one person cannot steal end-to-end.","When stakes rise, pause for a second opinion or formal review. Cash flow timing can bankrupt profitable businesses on paper. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Inflation erodes purchasing power of cash held too long. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises."]
      }
    ),
    section(
      "investing-mistakes-s3",
      "8.3 Common Mistakes — Workplace scenarios and documentation",
      ["Scenario: a teammate cites common mistakes in a meeting, but details in the packet do not match the textbook example. Tax rules change; documentation beats memory at filing time. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Budgets assign dollars to priorities before month-end surprises.","Good documentation states facts, cites the framework, and records the decision. Fraud controls separate duties so one person cannot steal end-to-end. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Cash flow timing can bankrupt profitable businesses on paper. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper."]
      }
    ),
    section(
      "investing-mistakes-s4",
      "8.4 Common Mistakes — Common mistakes and how to avoid them",
      ["Common mistakes around common mistakes include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Emergency funds reduce forced high-interest debt during shocks.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Tax rules change; documentation beats memory at filing time. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Budgets assign dollars to priorities before month-end surprises. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Fraud controls separate duties so one person cannot steal end-to-end. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end."]
      }
    ),
    section(
      "investing-mistakes-s5",
      "8.5 Common Mistakes — Putting the chapter together",
      ["This chapter’s through-line is simple: Common Mistakes connects principles to accountable action. Identity theft remediation requires fast institution notification.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Emergency funds reduce forced high-interest debt during shocks. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits common mistakes in your field. Tax rules change; documentation beats memory at filing time. Budgets assign dollars to priorities before month-end surprises."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises."]
      }
    )
    ],
    {
      learningObjectives: ["Define common mistakes and explain why it matters in Investing Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Common Mistakes connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Identity theft remediation requires fast institution notification.","Credit scores summarize repayment history but not full financial health.","Emergency funds reduce forced high-interest debt during shocks.","Identity theft remediation requires fast institution notification.","Credit scores summarize repayment history but not full financial health."],
      realWorldRelevance: "Strong grasp of common mistakes reduces rework, supports defensible records, and speeds collaboration across Investing Fundamentals.",
    }
  )
];
