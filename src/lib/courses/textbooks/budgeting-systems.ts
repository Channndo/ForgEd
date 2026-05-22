import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const BUD_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Budgeting Systems",
  subtitle: "ForgEd workforce textbook — Budgeting Systems",
  paragraphs: [
    "This ForgEd digital textbook presents Budgeting Systems at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const BUD_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "budget-why",
    1,
    "Why Budgets Work",
    [
    section(
      "budget-why-s1",
      "1.1 Why Budgets Work — Foundations and vocabulary",
      ["Why Budgets Work is a foundation in Budgeting Systems because tax rules change; documentation beats memory at filing time. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Fraud controls separate duties so one person cannot steal end-to-end. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain why budgets work aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat why budgets work as a shared model for decisions. Cash flow timing can bankrupt profitable businesses on paper. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers."],
        citations: [{"source":"Federal Reserve Education","url":"https://www.federalreserveeducation.org/","note":"Money, banking, and policy basics"}]
      }
    ),
    section(
      "budget-why-s2",
      "1.2 Why Budgets Work — How professionals apply this in practice",
      ["Professionals rarely dispute whether why budgets work exists—they dispute how fraud controls separate duties so one person cannot steal end-to-end. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Cash flow timing can bankrupt profitable businesses on paper.","When stakes rise, pause for a second opinion or formal review. Inflation erodes purchasing power of cash held too long. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Insurance transfers catastrophic risk for predictable premiums. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts."]
      }
    ),
    section(
      "budget-why-s3",
      "1.3 Why Budgets Work — Workplace scenarios and documentation",
      ["Scenario: a teammate cites why budgets work in a meeting, but details in the packet do not match the textbook example. Cash flow timing can bankrupt profitable businesses on paper. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Inflation erodes purchasing power of cash held too long.","Good documentation states facts, cites the framework, and records the decision. Insurance transfers catastrophic risk for predictable premiums. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Diversification reduces idiosyncratic risk but not all market risk. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk."]
      }
    ),
    section(
      "budget-why-s4",
      "1.4 Why Budgets Work — Common mistakes and how to avoid them",
      ["Common mistakes around why budgets work include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Inflation erodes purchasing power of cash held too long.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Insurance transfers catastrophic risk for predictable premiums. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Diversification reduces idiosyncratic risk but not all market risk. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Compound interest helps savers and hurts undisciplined borrowers. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers."]
      }
    ),
    section(
      "budget-why-s5",
      "1.5 Why Budgets Work — Putting the chapter together",
      ["This chapter’s through-line is simple: Why Budgets Work connects principles to accountable action. Insurance transfers catastrophic risk for predictable premiums.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Diversification reduces idiosyncratic risk but not all market risk. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits why budgets work in your field. Compound interest helps savers and hurts undisciplined borrowers. Fees compound silently in retirement and brokerage accounts."], {
        bulletPoints: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts."]
      }
    )
    ],
    {
      learningObjectives: ["Define why budgets work and explain why it matters in Budgeting Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Why Budgets Work connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long."],
      realWorldRelevance: "Strong grasp of why budgets work reduces rework, supports defensible records, and speeds collaboration across Budgeting Systems.",
    }
  ),
  chapter(
    "zero-based",
    2,
    "Zero-Based Budgeting",
    [
    section(
      "zero-based-s1",
      "2.1 Zero-Based Budgeting — Foundations and vocabulary",
      ["Zero-Based Budgeting is a foundation in Budgeting Systems because budgets assign dollars to priorities before month-end surprises. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Fraud controls separate duties so one person cannot steal end-to-end. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain zero-based budgeting aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat zero-based budgeting as a shared model for decisions. Cash flow timing can bankrupt profitable businesses on paper. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers."],
        citations: [{"source":"Federal Reserve Education","url":"https://www.federalreserveeducation.org/","note":"Money, banking, and policy basics"}]
      }
    ),
    section(
      "zero-based-s2",
      "2.2 Zero-Based Budgeting — How professionals apply this in practice",
      ["Professionals rarely dispute whether zero-based budgeting exists—they dispute how fraud controls separate duties so one person cannot steal end-to-end. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Cash flow timing can bankrupt profitable businesses on paper.","When stakes rise, pause for a second opinion or formal review. Inflation erodes purchasing power of cash held too long. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Insurance transfers catastrophic risk for predictable premiums. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts."]
      }
    ),
    section(
      "zero-based-s3",
      "2.3 Zero-Based Budgeting — Workplace scenarios and documentation",
      ["Scenario: a teammate cites zero-based budgeting in a meeting, but details in the packet do not match the textbook example. Cash flow timing can bankrupt profitable businesses on paper. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Inflation erodes purchasing power of cash held too long.","Good documentation states facts, cites the framework, and records the decision. Insurance transfers catastrophic risk for predictable premiums. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Diversification reduces idiosyncratic risk but not all market risk. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk."]
      }
    ),
    section(
      "zero-based-s4",
      "2.4 Zero-Based Budgeting — Common mistakes and how to avoid them",
      ["Common mistakes around zero-based budgeting include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Inflation erodes purchasing power of cash held too long.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Insurance transfers catastrophic risk for predictable premiums. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Diversification reduces idiosyncratic risk but not all market risk. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Compound interest helps savers and hurts undisciplined borrowers. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers."]
      }
    ),
    section(
      "zero-based-s5",
      "2.5 Zero-Based Budgeting — Putting the chapter together",
      ["This chapter’s through-line is simple: Zero-Based Budgeting connects principles to accountable action. Insurance transfers catastrophic risk for predictable premiums.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Diversification reduces idiosyncratic risk but not all market risk. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits zero-based budgeting in your field. Compound interest helps savers and hurts undisciplined borrowers. Fees compound silently in retirement and brokerage accounts."], {
        bulletPoints: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts."]
      }
    )
    ],
    {
      learningObjectives: ["Define zero-based budgeting and explain why it matters in Budgeting Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Zero-Based Budgeting connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long."],
      realWorldRelevance: "Strong grasp of zero-based budgeting reduces rework, supports defensible records, and speeds collaboration across Budgeting Systems.",
    }
  ),
  chapter(
    "envelope",
    3,
    "Envelope Method",
    [
    section(
      "envelope-s1",
      "3.1 Envelope Method — Foundations and vocabulary",
      ["Envelope Method is a foundation in Budgeting Systems because credit scores summarize repayment history but not full financial health. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Identity theft remediation requires fast institution notification. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain envelope method aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat envelope method as a shared model for decisions. Emergency funds reduce forced high-interest debt during shocks. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises."],
        citations: [{"source":"Federal Reserve Education","url":"https://www.federalreserveeducation.org/","note":"Money, banking, and policy basics"}]
      }
    ),
    section(
      "envelope-s2",
      "3.2 Envelope Method — How professionals apply this in practice",
      ["Professionals rarely dispute whether envelope method exists—they dispute how fees compound silently in retirement and brokerage accounts. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Credit scores summarize repayment history but not full financial health.","When stakes rise, pause for a second opinion or formal review. Identity theft remediation requires fast institution notification. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Emergency funds reduce forced high-interest debt during shocks. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end."]
      }
    ),
    section(
      "envelope-s3",
      "3.3 Envelope Method — Workplace scenarios and documentation",
      ["Scenario: a teammate cites envelope method in a meeting, but details in the packet do not match the textbook example. Compound interest helps savers and hurts undisciplined borrowers. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Fees compound silently in retirement and brokerage accounts.","Good documentation states facts, cites the framework, and records the decision. Credit scores summarize repayment history but not full financial health. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Identity theft remediation requires fast institution notification. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time."]
      }
    ),
    section(
      "envelope-s4",
      "3.4 Envelope Method — Common mistakes and how to avoid them",
      ["Common mistakes around envelope method include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Diversification reduces idiosyncratic risk but not all market risk.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Compound interest helps savers and hurts undisciplined borrowers. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Fees compound silently in retirement and brokerage accounts. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Credit scores summarize repayment history but not full financial health. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises."]
      }
    ),
    section(
      "envelope-s5",
      "3.5 Envelope Method — Putting the chapter together",
      ["This chapter’s through-line is simple: Envelope Method connects principles to accountable action. Insurance transfers catastrophic risk for predictable premiums.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Diversification reduces idiosyncratic risk but not all market risk. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits envelope method in your field. Compound interest helps savers and hurts undisciplined borrowers. Fees compound silently in retirement and brokerage accounts."], {
        bulletPoints: ["Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Tax rules change; documentation beats memory at filing time.","Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end."]
      }
    )
    ],
    {
      learningObjectives: ["Define envelope method and explain why it matters in Budgeting Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Envelope Method connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification."],
      realWorldRelevance: "Strong grasp of envelope method reduces rework, supports defensible records, and speeds collaboration across Budgeting Systems.",
    }
  ),
  chapter(
    "irregular-income",
    4,
    "Irregular Income",
    [
    section(
      "irregular-income-s1",
      "4.1 Irregular Income — Foundations and vocabulary",
      ["Irregular Income is a foundation in Budgeting Systems because identity theft remediation requires fast institution notification. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Emergency funds reduce forced high-interest debt during shocks. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain irregular income aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat irregular income as a shared model for decisions. Tax rules change; documentation beats memory at filing time. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "irregular-income-s2",
      "4.2 Irregular Income — How professionals apply this in practice",
      ["Professionals rarely dispute whether irregular income exists—they dispute how credit scores summarize repayment history but not full financial health. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Identity theft remediation requires fast institution notification.","When stakes rise, pause for a second opinion or formal review. Emergency funds reduce forced high-interest debt during shocks. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Tax rules change; documentation beats memory at filing time. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums."]
      }
    ),
    section(
      "irregular-income-s3",
      "4.3 Irregular Income — Workplace scenarios and documentation",
      ["Scenario: a teammate cites irregular income in a meeting, but details in the packet do not match the textbook example. Fees compound silently in retirement and brokerage accounts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Credit scores summarize repayment history but not full financial health.","Good documentation states facts, cites the framework, and records the decision. Identity theft remediation requires fast institution notification. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Emergency funds reduce forced high-interest debt during shocks. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers."]
      }
    ),
    section(
      "irregular-income-s4",
      "4.4 Irregular Income — Common mistakes and how to avoid them",
      ["Common mistakes around irregular income include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Compound interest helps savers and hurts undisciplined borrowers.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Fees compound silently in retirement and brokerage accounts. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Credit scores summarize repayment history but not full financial health. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Identity theft remediation requires fast institution notification. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk."]
      }
    ),
    section(
      "irregular-income-s5",
      "4.5 Irregular Income — Putting the chapter together",
      ["This chapter’s through-line is simple: Irregular Income connects principles to accountable action. Diversification reduces idiosyncratic risk but not all market risk.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Compound interest helps savers and hurts undisciplined borrowers. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits irregular income in your field. Fees compound silently in retirement and brokerage accounts. Credit scores summarize repayment history but not full financial health."], {
        bulletPoints: ["Budgets assign dollars to priorities before month-end surprises.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums."]
      }
    )
    ],
    {
      learningObjectives: ["Define irregular income and explain why it matters in Budgeting Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Irregular Income connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Fraud controls separate duties so one person cannot steal end-to-end.","Budgets assign dollars to priorities before month-end surprises.","Cash flow timing can bankrupt profitable businesses on paper.","Fraud controls separate duties so one person cannot steal end-to-end.","Budgets assign dollars to priorities before month-end surprises."],
      realWorldRelevance: "Strong grasp of irregular income reduces rework, supports defensible records, and speeds collaboration across Budgeting Systems.",
    }
  ),
  chapter(
    "categories",
    5,
    "Expense Categories",
    [
    section(
      "categories-s1",
      "5.1 Expense Categories — Foundations and vocabulary",
      ["Expense Categories is a foundation in Budgeting Systems because fees compound silently in retirement and brokerage accounts. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Credit scores summarize repayment history but not full financial health. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain expense categories aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat expense categories as a shared model for decisions. Identity theft remediation requires fast institution notification. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "categories-s2",
      "5.2 Expense Categories — How professionals apply this in practice",
      ["Professionals rarely dispute whether expense categories exists—they dispute how credit scores summarize repayment history but not full financial health. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Identity theft remediation requires fast institution notification.","When stakes rise, pause for a second opinion or formal review. Emergency funds reduce forced high-interest debt during shocks. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Tax rules change; documentation beats memory at filing time. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers."]
      }
    ),
    section(
      "categories-s3",
      "5.3 Expense Categories — Workplace scenarios and documentation",
      ["Scenario: a teammate cites expense categories in a meeting, but details in the packet do not match the textbook example. Identity theft remediation requires fast institution notification. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Emergency funds reduce forced high-interest debt during shocks.","Good documentation states facts, cites the framework, and records the decision. Tax rules change; documentation beats memory at filing time. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Budgets assign dollars to priorities before month-end surprises. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health."]
      }
    ),
    section(
      "categories-s4",
      "5.4 Expense Categories — Common mistakes and how to avoid them",
      ["Common mistakes around expense categories include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Emergency funds reduce forced high-interest debt during shocks.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Tax rules change; documentation beats memory at filing time. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Budgets assign dollars to priorities before month-end surprises. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Fraud controls separate duties so one person cannot steal end-to-end. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts."]
      }
    ),
    section(
      "categories-s5",
      "5.5 Expense Categories — Putting the chapter together",
      ["This chapter’s through-line is simple: Expense Categories connects principles to accountable action. Tax rules change; documentation beats memory at filing time.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Budgets assign dollars to priorities before month-end surprises. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits expense categories in your field. Fraud controls separate duties so one person cannot steal end-to-end. Cash flow timing can bankrupt profitable businesses on paper."], {
        bulletPoints: ["Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers."]
      }
    )
    ],
    {
      learningObjectives: ["Define expense categories and explain why it matters in Budgeting Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Expense Categories connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Inflation erodes purchasing power of cash held too long.","Cash flow timing can bankrupt profitable businesses on paper.","Insurance transfers catastrophic risk for predictable premiums.","Inflation erodes purchasing power of cash held too long.","Cash flow timing can bankrupt profitable businesses on paper."],
      realWorldRelevance: "Strong grasp of expense categories reduces rework, supports defensible records, and speeds collaboration across Budgeting Systems.",
    }
  ),
  chapter(
    "tracking-tools",
    6,
    "Tracking Tools",
    [
    section(
      "tracking-tools-s1",
      "6.1 Tracking Tools — Foundations and vocabulary",
      ["Tracking Tools is a foundation in Budgeting Systems because identity theft remediation requires fast institution notification. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Emergency funds reduce forced high-interest debt during shocks. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain tracking tools aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat tracking tools as a shared model for decisions. Tax rules change; documentation beats memory at filing time. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "tracking-tools-s2",
      "6.2 Tracking Tools — How professionals apply this in practice",
      ["Professionals rarely dispute whether tracking tools exists—they dispute how credit scores summarize repayment history but not full financial health. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Identity theft remediation requires fast institution notification.","When stakes rise, pause for a second opinion or formal review. Emergency funds reduce forced high-interest debt during shocks. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Tax rules change; documentation beats memory at filing time. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health."]
      }
    ),
    section(
      "tracking-tools-s3",
      "6.3 Tracking Tools — Workplace scenarios and documentation",
      ["Scenario: a teammate cites tracking tools in a meeting, but details in the packet do not match the textbook example. Fees compound silently in retirement and brokerage accounts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Credit scores summarize repayment history but not full financial health.","Good documentation states facts, cites the framework, and records the decision. Identity theft remediation requires fast institution notification. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Emergency funds reduce forced high-interest debt during shocks. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks."]
      }
    ),
    section(
      "tracking-tools-s4",
      "6.4 Tracking Tools — Common mistakes and how to avoid them",
      ["Common mistakes around tracking tools include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Compound interest helps savers and hurts undisciplined borrowers.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Fees compound silently in retirement and brokerage accounts. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Credit scores summarize repayment history but not full financial health. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Identity theft remediation requires fast institution notification. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health.","Identity theft remediation requires fast institution notification."]
      }
    ),
    section(
      "tracking-tools-s5",
      "6.5 Tracking Tools — Putting the chapter together",
      ["This chapter’s through-line is simple: Tracking Tools connects principles to accountable action. Diversification reduces idiosyncratic risk but not all market risk.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Compound interest helps savers and hurts undisciplined borrowers. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits tracking tools in your field. Fees compound silently in retirement and brokerage accounts. Credit scores summarize repayment history but not full financial health."], {
        bulletPoints: ["Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health."]
      }
    )
    ],
    {
      learningObjectives: ["Define tracking tools and explain why it matters in Budgeting Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Tracking Tools connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Diversification reduces idiosyncratic risk but not all market risk.","Insurance transfers catastrophic risk for predictable premiums.","Compound interest helps savers and hurts undisciplined borrowers.","Diversification reduces idiosyncratic risk but not all market risk.","Insurance transfers catastrophic risk for predictable premiums."],
      realWorldRelevance: "Strong grasp of tracking tools reduces rework, supports defensible records, and speeds collaboration across Budgeting Systems.",
    }
  ),
  chapter(
    "review-monthly",
    7,
    "Monthly Reviews",
    [
    section(
      "review-monthly-s1",
      "7.1 Monthly Reviews — Foundations and vocabulary",
      ["Monthly Reviews is a foundation in Budgeting Systems because fees compound silently in retirement and brokerage accounts. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Credit scores summarize repayment history but not full financial health. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain monthly reviews aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat monthly reviews as a shared model for decisions. Identity theft remediation requires fast institution notification. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts."],
        citations: [{"source":"CFPB — Consumer Finance","url":"https://www.consumerfinance.gov/","note":"Consumer protection and plain-language guides"}]
      }
    ),
    section(
      "review-monthly-s2",
      "7.2 Monthly Reviews — How professionals apply this in practice",
      ["Professionals rarely dispute whether monthly reviews exists—they dispute how credit scores summarize repayment history but not full financial health. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Identity theft remediation requires fast institution notification.","When stakes rise, pause for a second opinion or formal review. Emergency funds reduce forced high-interest debt during shocks. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Tax rules change; documentation beats memory at filing time. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health."]
      }
    ),
    section(
      "review-monthly-s3",
      "7.3 Monthly Reviews — Workplace scenarios and documentation",
      ["Scenario: a teammate cites monthly reviews in a meeting, but details in the packet do not match the textbook example. Identity theft remediation requires fast institution notification. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Emergency funds reduce forced high-interest debt during shocks.","Good documentation states facts, cites the framework, and records the decision. Tax rules change; documentation beats memory at filing time. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Budgets assign dollars to priorities before month-end surprises. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers."]
      }
    ),
    section(
      "review-monthly-s4",
      "7.4 Monthly Reviews — Common mistakes and how to avoid them",
      ["Common mistakes around monthly reviews include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Emergency funds reduce forced high-interest debt during shocks.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Tax rules change; documentation beats memory at filing time. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Budgets assign dollars to priorities before month-end surprises. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Fraud controls separate duties so one person cannot steal end-to-end. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts."]
      }
    ),
    section(
      "review-monthly-s5",
      "7.5 Monthly Reviews — Putting the chapter together",
      ["This chapter’s through-line is simple: Monthly Reviews connects principles to accountable action. Tax rules change; documentation beats memory at filing time.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Budgets assign dollars to priorities before month-end surprises. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits monthly reviews in your field. Fraud controls separate duties so one person cannot steal end-to-end. Cash flow timing can bankrupt profitable businesses on paper."], {
        bulletPoints: ["Insurance transfers catastrophic risk for predictable premiums.","Diversification reduces idiosyncratic risk but not all market risk.","Compound interest helps savers and hurts undisciplined borrowers.","Fees compound silently in retirement and brokerage accounts.","Credit scores summarize repayment history but not full financial health."]
      }
    )
    ],
    {
      learningObjectives: ["Define monthly reviews and explain why it matters in Budgeting Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Monthly Reviews connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long.","Insurance transfers catastrophic risk for predictable premiums."],
      realWorldRelevance: "Strong grasp of monthly reviews reduces rework, supports defensible records, and speeds collaboration across Budgeting Systems.",
    }
  ),
  chapter(
    "budget-goals",
    8,
    "Goal-Based Budgets",
    [
    section(
      "budget-goals-s1",
      "8.1 Goal-Based Budgets — Foundations and vocabulary",
      ["Goal-Based Budgets is a foundation in Budgeting Systems because emergency funds reduce forced high-interest debt during shocks. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Budgets assign dollars to priorities before month-end surprises. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain goal-based budgets aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat goal-based budgets as a shared model for decisions. Tax rules change; documentation beats memory at filing time. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Emergency funds reduce forced high-interest debt during shocks.","Budgets assign dollars to priorities before month-end surprises.","Tax rules change; documentation beats memory at filing time.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper."],
        citations: [{"source":"Federal Reserve Education","url":"https://www.federalreserveeducation.org/","note":"Money, banking, and policy basics"}]
      }
    ),
    section(
      "budget-goals-s2",
      "8.2 Goal-Based Budgets — How professionals apply this in practice",
      ["Professionals rarely dispute whether goal-based budgets exists—they dispute how identity theft remediation requires fast institution notification. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Emergency funds reduce forced high-interest debt during shocks.","When stakes rise, pause for a second opinion or formal review. Budgets assign dollars to priorities before month-end surprises. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Tax rules change; documentation beats memory at filing time. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Budgets assign dollars to priorities before month-end surprises.","Tax rules change; documentation beats memory at filing time.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long."]
      }
    ),
    section(
      "budget-goals-s3",
      "8.3 Goal-Based Budgets — Workplace scenarios and documentation",
      ["Scenario: a teammate cites goal-based budgets in a meeting, but details in the packet do not match the textbook example. Credit scores summarize repayment history but not full financial health. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Identity theft remediation requires fast institution notification.","Good documentation states facts, cites the framework, and records the decision. Emergency funds reduce forced high-interest debt during shocks. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Budgets assign dollars to priorities before month-end surprises. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Budgets assign dollars to priorities before month-end surprises.","Tax rules change; documentation beats memory at filing time.","Fraud controls separate duties so one person cannot steal end-to-end."]
      }
    ),
    section(
      "budget-goals-s4",
      "8.4 Goal-Based Budgets — Common mistakes and how to avoid them",
      ["Common mistakes around goal-based budgets include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Fees compound silently in retirement and brokerage accounts.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Credit scores summarize repayment history but not full financial health. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Identity theft remediation requires fast institution notification. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Emergency funds reduce forced high-interest debt during shocks. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Emergency funds reduce forced high-interest debt during shocks.","Budgets assign dollars to priorities before month-end surprises.","Tax rules change; documentation beats memory at filing time.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper."]
      }
    ),
    section(
      "budget-goals-s5",
      "8.5 Goal-Based Budgets — Putting the chapter together",
      ["This chapter’s through-line is simple: Goal-Based Budgets connects principles to accountable action. Compound interest helps savers and hurts undisciplined borrowers.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Fees compound silently in retirement and brokerage accounts. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits goal-based budgets in your field. Credit scores summarize repayment history but not full financial health. Identity theft remediation requires fast institution notification."], {
        bulletPoints: ["Budgets assign dollars to priorities before month-end surprises.","Tax rules change; documentation beats memory at filing time.","Fraud controls separate duties so one person cannot steal end-to-end.","Cash flow timing can bankrupt profitable businesses on paper.","Inflation erodes purchasing power of cash held too long."]
      }
    )
    ],
    {
      learningObjectives: ["Define goal-based budgets and explain why it matters in Budgeting Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Goal-Based Budgets connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Emergency funds reduce forced high-interest debt during shocks.","Budgets assign dollars to priorities before month-end surprises.","Identity theft remediation requires fast institution notification.","Emergency funds reduce forced high-interest debt during shocks.","Budgets assign dollars to priorities before month-end surprises."],
      realWorldRelevance: "Strong grasp of goal-based budgets reduces rework, supports defensible records, and speeds collaboration across Budgeting Systems.",
    }
  )
];
