import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const BANK_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Banking Basics",
  subtitle: "ForgEd workforce textbook — Banking Basics",
  paragraphs: [
    "This ForgEd digital textbook presents Banking Basics at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const BANK_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "account-types",
    1,
    "Account Types",
    [
    section(
      "account-types-s1",
      "1.1 Account Types — Foundations and vocabulary",
      ["Account Types is a foundation in Banking Basics because budgets assign dollars to priorities before month-end surprises. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Fraud controls separate duties so one person cannot steal end-to-end. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain account types aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat account types as a shared model for decisions. Cash flow timing can bankrupt profitable businesses on paper. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "account-types-s2",
      "1.2 Account Types — How professionals apply this in practice",
      ["Professionals rarely dispute whether account types exists—they dispute how fraud controls separate duties so one person cannot steal end-to-end. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Cash flow timing can bankrupt profitable businesses on paper.","When stakes rise, pause for a second opinion or formal review. Inflation erodes purchasing power of cash held too long. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Insurance transfers catastrophic risk for predictable premiums. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk."]
      }
    ),
    section(
      "account-types-s3",
      "1.3 Account Types — Workplace scenarios and documentation",
      ["Scenario: a teammate cites account types in a meeting, but details in the packet do not match the textbook example. Cash flow timing can bankrupt profitable businesses on paper. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Inflation erodes purchasing power of cash held too long.","Good documentation states facts, cites the framework, and records the decision. Insurance transfers catastrophic risk for predictable premiums. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Diversification reduces idiosyncratic risk but not all market risk. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long."]
      }
    ),
    section(
      "account-types-s4",
      "1.4 Account Types — Common mistakes and how to avoid them",
      ["Common mistakes around account types include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Inflation erodes purchasing power of cash held too long.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Insurance transfers catastrophic risk for predictable premiums. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Diversification reduces idiosyncratic risk but not all market risk. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Compound interest helps savers and hurts undisciplined borrowers. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums."]
      }
    ),
    section(
      "account-types-s5",
      "1.5 Account Types — Putting the chapter together",
      ["This chapter’s through-line is simple: Account Types connects principles to accountable action. Insurance transfers catastrophic risk for predictable premiums.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Diversification reduces idiosyncratic risk but not all market risk. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits account types in your field. Compound interest helps savers and hurts undisciplined borrowers. Credit scores summarize repayment history but not full financial health."], {
        bulletPoints: ["Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk."]
      }
    )
    ],
    {
      learningObjectives: ["Define account types and explain why it matters in Banking Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Account Types connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end."],
      realWorldRelevance: "Strong grasp of account types reduces rework, supports defensible records, and speeds collaboration across Banking Basics.",
    }
  ),
  chapter(
    "fees-banking",
    2,
    "Fees and Features",
    [
    section(
      "fees-banking-s1",
      "2.1 Fees and Features — Foundations and vocabulary",
      ["Fees and Features is a foundation in Banking Basics because credit scores summarize repayment history but not full financial health. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Identity theft remediation requires fast institution notification. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain fees and features aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat fees and features as a shared model for decisions. Emergency funds reduce forced high-interest debt during shocks. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks."],
        citations: [{"source":"Federal Reserve Education","url":"https://www.federalreserveeducation.org/","note":"Money, banking, and policy basics"}]
      }
    ),
    section(
      "fees-banking-s2",
      "2.2 Fees and Features — How professionals apply this in practice",
      ["Professionals rarely dispute whether fees and features exists—they dispute how compound interest helps savers and hurts undisciplined borrowers. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Credit scores summarize repayment history but not full financial health.","When stakes rise, pause for a second opinion or formal review. Identity theft remediation requires fast institution notification. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Emergency funds reduce forced high-interest debt during shocks. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification."]
      }
    ),
    section(
      "fees-banking-s3",
      "2.3 Fees and Features — Workplace scenarios and documentation",
      ["Scenario: a teammate cites fees and features in a meeting, but details in the packet do not match the textbook example. Diversification reduces idiosyncratic risk but not all market risk. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Compound interest helps savers and hurts undisciplined borrowers.","Good documentation states facts, cites the framework, and records the decision. Credit scores summarize repayment history but not full financial health. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Identity theft remediation requires fast institution notification. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Compound interest helps savers and hurts undisciplined borrowers.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Fees compound silently in retirement and brokerage accounts."]
      }
    ),
    section(
      "fees-banking-s4",
      "2.4 Fees and Features — Common mistakes and how to avoid them",
      ["Common mistakes around fees and features include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Insurance transfers catastrophic risk for predictable premiums.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Diversification reduces idiosyncratic risk but not all market risk. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Compound interest helps savers and hurts undisciplined borrowers. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Credit scores summarize repayment history but not full financial health. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks."]
      }
    ),
    section(
      "fees-banking-s5",
      "2.5 Fees and Features — Putting the chapter together",
      ["This chapter’s through-line is simple: Fees and Features connects principles to accountable action. Inflation erodes purchasing power of cash held too long.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Insurance transfers catastrophic risk for predictable premiums. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits fees and features in your field. Diversification reduces idiosyncratic risk but not all market risk. Compound interest helps savers and hurts undisciplined borrowers."], {
        bulletPoints: ["Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification."]
      }
    )
    ],
    {
      learningObjectives: ["Define fees and features and explain why it matters in Banking Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Fees and Features connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Diversification reduces idiosyncratic risk but not all market risk.","Insurance transfers catastrophic risk for predictable premiums.","Compound interest helps savers and hurts undisciplined borrowers.","Diversification reduces idiosyncratic risk but not all market risk.","Insurance transfers catastrophic risk for predictable premiums."],
      realWorldRelevance: "Strong grasp of fees and features reduces rework, supports defensible records, and speeds collaboration across Banking Basics.",
    }
  ),
  chapter(
    "digital-banking",
    3,
    "Digital Banking",
    [
    section(
      "digital-banking-s1",
      "3.1 Digital Banking — Foundations and vocabulary",
      ["Digital Banking is a foundation in Banking Basics because identity theft remediation requires fast institution notification. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Emergency funds reduce forced high-interest debt during shocks. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain digital banking aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat digital banking as a shared model for decisions. Tax rules change; documentation beats memory at filing time. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "digital-banking-s2",
      "3.2 Digital Banking — How professionals apply this in practice",
      ["Professionals rarely dispute whether digital banking exists—they dispute how emergency funds reduce forced high-interest debt during shocks. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Tax rules change; documentation beats memory at filing time.","When stakes rise, pause for a second opinion or formal review. Budgets assign dollars to priorities before month-end surprises. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Fraud controls separate duties so one person cannot steal end-to-end. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises."]
      }
    ),
    section(
      "digital-banking-s3",
      "3.3 Digital Banking — Workplace scenarios and documentation",
      ["Scenario: a teammate cites digital banking in a meeting, but details in the packet do not match the textbook example. Tax rules change; documentation beats memory at filing time. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Budgets assign dollars to priorities before month-end surprises.","Good documentation states facts, cites the framework, and records the decision. Fraud controls separate duties so one person cannot steal end-to-end. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Cash flow timing can bankrupt profitable businesses on paper. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper."]
      }
    ),
    section(
      "digital-banking-s4",
      "3.4 Digital Banking — Common mistakes and how to avoid them",
      ["Common mistakes around digital banking include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Budgets assign dollars to priorities before month-end surprises.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Fraud controls separate duties so one person cannot steal end-to-end. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Cash flow timing can bankrupt profitable businesses on paper. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Inflation erodes purchasing power of cash held too long. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end."]
      }
    ),
    section(
      "digital-banking-s5",
      "3.5 Digital Banking — Putting the chapter together",
      ["This chapter’s through-line is simple: Digital Banking connects principles to accountable action. Fraud controls separate duties so one person cannot steal end-to-end.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Cash flow timing can bankrupt profitable businesses on paper. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits digital banking in your field. Inflation erodes purchasing power of cash held too long. Insurance transfers catastrophic risk for predictable premiums."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises."]
      }
    )
    ],
    {
      learningObjectives: ["Define digital banking and explain why it matters in Banking Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Digital Banking connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Identity theft remediation requires fast institution notification.","Credit scores summarize repayment history but not full financial health.","Emergency funds reduce forced high-interest debt during shocks.","Identity theft remediation requires fast institution notification.","Credit scores summarize repayment history but not full financial health."],
      realWorldRelevance: "Strong grasp of digital banking reduces rework, supports defensible records, and speeds collaboration across Banking Basics.",
    }
  ),
  chapter(
    "fraud-banking",
    4,
    "Fraud Protection",
    [
    section(
      "fraud-banking-s1",
      "4.1 Fraud Protection — Foundations and vocabulary",
      ["Fraud Protection is a foundation in Banking Basics because compound interest helps savers and hurts undisciplined borrowers. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Fees compound silently in retirement and brokerage accounts. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain fraud protection aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat fraud protection as a shared model for decisions. Credit scores summarize repayment history but not full financial health. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health."],
        citations: [{"source":"Federal Reserve Education","url":"https://www.federalreserveeducation.org/","note":"Money, banking, and policy basics"}]
      }
    ),
    section(
      "fraud-banking-s2",
      "4.2 Fraud Protection — How professionals apply this in practice",
      ["Professionals rarely dispute whether fraud protection exists—they dispute how fees compound silently in retirement and brokerage accounts. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Credit scores summarize repayment history but not full financial health.","When stakes rise, pause for a second opinion or formal review. Identity theft remediation requires fast institution notification. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Emergency funds reduce forced high-interest debt during shocks. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification."]
      }
    ),
    section(
      "fraud-banking-s3",
      "4.3 Fraud Protection — Workplace scenarios and documentation",
      ["Scenario: a teammate cites fraud protection in a meeting, but details in the packet do not match the textbook example. Credit scores summarize repayment history but not full financial health. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Identity theft remediation requires fast institution notification.","Good documentation states facts, cites the framework, and records the decision. Emergency funds reduce forced high-interest debt during shocks. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Fraud controls separate duties so one person cannot steal end-to-end. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts."]
      }
    ),
    section(
      "fraud-banking-s4",
      "4.4 Fraud Protection — Common mistakes and how to avoid them",
      ["Common mistakes around fraud protection include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Identity theft remediation requires fast institution notification.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Emergency funds reduce forced high-interest debt during shocks. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Fraud controls separate duties so one person cannot steal end-to-end. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Tax rules change; documentation beats memory at filing time. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health."]
      }
    ),
    section(
      "fraud-banking-s5",
      "4.5 Fraud Protection — Putting the chapter together",
      ["This chapter’s through-line is simple: Fraud Protection connects principles to accountable action. Emergency funds reduce forced high-interest debt during shocks.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Fraud controls separate duties so one person cannot steal end-to-end. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits fraud protection in your field. Tax rules change; documentation beats memory at filing time. Budgets assign dollars to priorities before month-end surprises."], {
        bulletPoints: ["Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification."]
      }
    )
    ],
    {
      learningObjectives: ["Define fraud protection and explain why it matters in Banking Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Fraud Protection connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk."],
      realWorldRelevance: "Strong grasp of fraud protection reduces rework, supports defensible records, and speeds collaboration across Banking Basics.",
    }
  ),
  chapter(
    "savings",
    5,
    "Savings Strategies",
    [
    section(
      "savings-s1",
      "5.1 Savings Strategies — Foundations and vocabulary",
      ["Savings Strategies is a foundation in Banking Basics because inflation erodes purchasing power of cash held too long. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Insurance transfers catastrophic risk for predictable premiums. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain savings strategies aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat savings strategies as a shared model for decisions. Diversification reduces idiosyncratic risk but not all market risk. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "savings-s2",
      "5.2 Savings Strategies — How professionals apply this in practice",
      ["Professionals rarely dispute whether savings strategies exists—they dispute how insurance transfers catastrophic risk for predictable premiums. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Diversification reduces idiosyncratic risk but not all market risk.","When stakes rise, pause for a second opinion or formal review. Compound interest helps savers and hurts undisciplined borrowers. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Fees compound silently in retirement and brokerage accounts. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks."]
      }
    ),
    section(
      "savings-s3",
      "5.3 Savings Strategies — Workplace scenarios and documentation",
      ["Scenario: a teammate cites savings strategies in a meeting, but details in the packet do not match the textbook example. Diversification reduces idiosyncratic risk but not all market risk. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Compound interest helps savers and hurts undisciplined borrowers.","Good documentation states facts, cites the framework, and records the decision. Fees compound silently in retirement and brokerage accounts. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Credit scores summarize repayment history but not full financial health. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises."]
      }
    ),
    section(
      "savings-s4",
      "5.4 Savings Strategies — Common mistakes and how to avoid them",
      ["Common mistakes around savings strategies include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Compound interest helps savers and hurts undisciplined borrowers.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Fees compound silently in retirement and brokerage accounts. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Credit scores summarize repayment history but not full financial health. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Identity theft remediation requires fast institution notification. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time."]
      }
    ),
    section(
      "savings-s5",
      "5.5 Savings Strategies — Putting the chapter together",
      ["This chapter’s through-line is simple: Savings Strategies connects principles to accountable action. Fees compound silently in retirement and brokerage accounts.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Credit scores summarize repayment history but not full financial health. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits savings strategies in your field. Identity theft remediation requires fast institution notification. Emergency funds reduce forced high-interest debt during shocks."], {
        bulletPoints: ["Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks."]
      }
    )
    ],
    {
      learningObjectives: ["Define savings strategies and explain why it matters in Banking Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Savings Strategies connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Fees compound silently in retirement and brokerage accounts.","Compound interest helps savers and hurts undisciplined borrowers.","Credit scores summarize repayment history but not full financial health.","Fees compound silently in retirement and brokerage accounts.","Compound interest helps savers and hurts undisciplined borrowers."],
      realWorldRelevance: "Strong grasp of savings strategies reduces rework, supports defensible records, and speeds collaboration across Banking Basics.",
    }
  ),
  chapter(
    "joint-accounts",
    6,
    "Joint and Shared Accounts",
    [
    section(
      "joint-accounts-s1",
      "6.1 Joint and Shared Accounts — Foundations and vocabulary",
      ["Joint and Shared Accounts is a foundation in Banking Basics because insurance transfers catastrophic risk for predictable premiums. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Diversification reduces idiosyncratic risk but not all market risk. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain joint and shared accounts aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat joint and shared accounts as a shared model for decisions. Compound interest helps savers and hurts undisciplined borrowers. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "joint-accounts-s2",
      "6.2 Joint and Shared Accounts — How professionals apply this in practice",
      ["Professionals rarely dispute whether joint and shared accounts exists—they dispute how inflation erodes purchasing power of cash held too long. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Insurance transfers catastrophic risk for predictable premiums.","When stakes rise, pause for a second opinion or formal review. Diversification reduces idiosyncratic risk but not all market risk. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Compound interest helps savers and hurts undisciplined borrowers. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks."]
      }
    ),
    section(
      "joint-accounts-s3",
      "6.3 Joint and Shared Accounts — Workplace scenarios and documentation",
      ["Scenario: a teammate cites joint and shared accounts in a meeting, but details in the packet do not match the textbook example. Cash flow timing can bankrupt profitable businesses on paper. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Inflation erodes purchasing power of cash held too long.","Good documentation states facts, cites the framework, and records the decision. Insurance transfers catastrophic risk for predictable premiums. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Diversification reduces idiosyncratic risk but not all market risk. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Credit scores summarize repayment history but not full financial health."]
      }
    ),
    section(
      "joint-accounts-s4",
      "6.4 Joint and Shared Accounts — Common mistakes and how to avoid them",
      ["Common mistakes around joint and shared accounts include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Fraud controls separate duties so one person cannot steal end-to-end.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Cash flow timing can bankrupt profitable businesses on paper. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Inflation erodes purchasing power of cash held too long. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Insurance transfers catastrophic risk for predictable premiums. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification."]
      }
    ),
    section(
      "joint-accounts-s5",
      "6.5 Joint and Shared Accounts — Putting the chapter together",
      ["This chapter’s through-line is simple: Joint and Shared Accounts connects principles to accountable action. Budgets assign dollars to priorities before month-end surprises.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Fraud controls separate duties so one person cannot steal end-to-end. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits joint and shared accounts in your field. Cash flow timing can bankrupt profitable businesses on paper. Inflation erodes purchasing power of cash held too long."], {
        bulletPoints: ["Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks."]
      }
    )
    ],
    {
      learningObjectives: ["Define joint and shared accounts and explain why it matters in Banking Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Joint and Shared Accounts connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk."],
      realWorldRelevance: "Strong grasp of joint and shared accounts reduces rework, supports defensible records, and speeds collaboration across Banking Basics.",
    }
  ),
  chapter(
    "business-banking",
    7,
    "Business Banking Intro",
    [
    section(
      "business-banking-s1",
      "7.1 Business Banking Intro — Foundations and vocabulary",
      ["Business Banking Intro is a foundation in Banking Basics because diversification reduces idiosyncratic risk but not all market risk. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Compound interest helps savers and hurts undisciplined borrowers. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain business banking intro aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat business banking intro as a shared model for decisions. Fees compound silently in retirement and brokerage accounts. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Cash flow timing can bankrupt profitable businesses on paper.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "business-banking-s2",
      "7.2 Business Banking Intro — How professionals apply this in practice",
      ["Professionals rarely dispute whether business banking intro exists—they dispute how compound interest helps savers and hurts undisciplined borrowers. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Fees compound silently in retirement and brokerage accounts.","When stakes rise, pause for a second opinion or formal review. Credit scores summarize repayment history but not full financial health. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Identity theft remediation requires fast institution notification. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Cash flow timing can bankrupt profitable businesses on paper.","Tax rules change; documentation beats memory at filing time."]
      }
    ),
    section(
      "business-banking-s3",
      "7.3 Business Banking Intro — Workplace scenarios and documentation",
      ["Scenario: a teammate cites business banking intro in a meeting, but details in the packet do not match the textbook example. Fees compound silently in retirement and brokerage accounts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Credit scores summarize repayment history but not full financial health.","Good documentation states facts, cites the framework, and records the decision. Identity theft remediation requires fast institution notification. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Emergency funds reduce forced high-interest debt during shocks. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Emergency funds reduce forced high-interest debt during shocks.","Cash flow timing can bankrupt profitable businesses on paper.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end."]
      }
    ),
    section(
      "business-banking-s4",
      "7.4 Business Banking Intro — Common mistakes and how to avoid them",
      ["Common mistakes around business banking intro include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Credit scores summarize repayment history but not full financial health.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Identity theft remediation requires fast institution notification. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Emergency funds reduce forced high-interest debt during shocks. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Cash flow timing can bankrupt profitable businesses on paper. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Cash flow timing can bankrupt profitable businesses on paper.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises."]
      }
    ),
    section(
      "business-banking-s5",
      "7.5 Business Banking Intro — Putting the chapter together",
      ["This chapter’s through-line is simple: Business Banking Intro connects principles to accountable action. Identity theft remediation requires fast institution notification.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Emergency funds reduce forced high-interest debt during shocks. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits business banking intro in your field. Cash flow timing can bankrupt profitable businesses on paper. Tax rules change; documentation beats memory at filing time."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Cash flow timing can bankrupt profitable businesses on paper.","Tax rules change; documentation beats memory at filing time."]
      }
    )
    ],
    {
      learningObjectives: ["Define business banking intro and explain why it matters in Banking Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Business Banking Intro connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Identity theft remediation requires fast institution notification.","Credit scores summarize repayment history but not full financial health.","Emergency funds reduce forced high-interest debt during shocks.","Identity theft remediation requires fast institution notification.","Credit scores summarize repayment history but not full financial health."],
      realWorldRelevance: "Strong grasp of business banking intro reduces rework, supports defensible records, and speeds collaboration across Banking Basics.",
    }
  ),
  chapter(
    "choosing-bank",
    8,
    "Choosing a Bank",
    [
    section(
      "choosing-bank-s1",
      "8.1 Choosing a Bank — Foundations and vocabulary",
      ["Choosing a Bank is a foundation in Banking Basics because insurance transfers catastrophic risk for predictable premiums. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Diversification reduces idiosyncratic risk but not all market risk. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain choosing a bank aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat choosing a bank as a shared model for decisions. Compound interest helps savers and hurts undisciplined borrowers. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks."],
        citations: [{"source":"Federal Reserve Education","url":"https://www.federalreserveeducation.org/","note":"Money, banking, and policy basics"}]
      }
    ),
    section(
      "choosing-bank-s2",
      "8.2 Choosing a Bank — How professionals apply this in practice",
      ["Professionals rarely dispute whether choosing a bank exists—they dispute how diversification reduces idiosyncratic risk but not all market risk. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Compound interest helps savers and hurts undisciplined borrowers.","When stakes rise, pause for a second opinion or formal review. Fees compound silently in retirement and brokerage accounts. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Credit scores summarize repayment history but not full financial health. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Cash flow timing can bankrupt profitable businesses on paper."]
      }
    ),
    section(
      "choosing-bank-s3",
      "8.3 Choosing a Bank — Workplace scenarios and documentation",
      ["Scenario: a teammate cites choosing a bank in a meeting, but details in the packet do not match the textbook example. Compound interest helps savers and hurts undisciplined borrowers. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Fees compound silently in retirement and brokerage accounts.","Good documentation states facts, cites the framework, and records the decision. Credit scores summarize repayment history but not full financial health. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Identity theft remediation requires fast institution notification. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification."]
      }
    ),
    section(
      "choosing-bank-s4",
      "8.4 Choosing a Bank — Common mistakes and how to avoid them",
      ["Common mistakes around choosing a bank include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Fees compound silently in retirement and brokerage accounts.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Credit scores summarize repayment history but not full financial health. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Identity theft remediation requires fast institution notification. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Emergency funds reduce forced high-interest debt during shocks. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks."]
      }
    ),
    section(
      "choosing-bank-s5",
      "8.5 Choosing a Bank — Putting the chapter together",
      ["This chapter’s through-line is simple: Choosing a Bank connects principles to accountable action. Credit scores summarize repayment history but not full financial health.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Identity theft remediation requires fast institution notification. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits choosing a bank in your field. Emergency funds reduce forced high-interest debt during shocks. Cash flow timing can bankrupt profitable businesses on paper."], {
        bulletPoints: ["Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Cash flow timing can bankrupt profitable businesses on paper."]
      }
    )
    ],
    {
      learningObjectives: ["Define choosing a bank and explain why it matters in Banking Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Choosing a Bank connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts."],
      realWorldRelevance: "Strong grasp of choosing a bank reduces rework, supports defensible records, and speeds collaboration across Banking Basics.",
    }
  )
];
