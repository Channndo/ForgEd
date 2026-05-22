import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const IR_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Incident Response Basics",
  subtitle: "ForgEd workforce textbook — Incident Response Basics",
  paragraphs: [
    "This ForgEd digital textbook presents Incident Response Basics at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Follow organizational security policy; this course does not replace SOC procedures or certifications alone.",
  ],
};

export const IR_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "ir-lifecycle",
    1,
    "IR Lifecycle",
    [
    section(
      "ir-lifecycle-s1",
      "1.1 IR Lifecycle — Foundations and vocabulary",
      ["IR Lifecycle is a foundation in Incident Response Basics because compliance frameworks map controls to risks but do not replace thinking. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Patching closes known doors but cannot fix social engineering. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ir lifecycle aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ir lifecycle as a shared model for decisions. Segmentation keeps flat networks from becoming easy lateral movement paths. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "ir-lifecycle-s2",
      "1.2 IR Lifecycle — How professionals apply this in practice",
      ["Professionals rarely dispute whether ir lifecycle exists—they dispute how incident response phases include preparation, detection, containment, recovery, lessons learned. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Compliance frameworks map controls to risks but do not replace thinking.","When stakes rise, pause for a second opinion or formal review. Patching closes known doors but cannot fix social engineering. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Segmentation keeps flat networks from becoming easy lateral movement paths. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."]
      }
    ),
    section(
      "ir-lifecycle-s3",
      "1.3 IR Lifecycle — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ir lifecycle in a meeting, but details in the packet do not match the textbook example. Multi-factor authentication blocks many credential-stuffing attempts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Incident response phases include preparation, detection, containment, recovery, lessons learned.","Good documentation states facts, cites the framework, and records the decision. Compliance frameworks map controls to risks but do not replace thinking. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Patching closes known doors but cannot fix social engineering. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    ),
    section(
      "ir-lifecycle-s4",
      "1.4 IR Lifecycle — Common mistakes and how to avoid them",
      ["Common mistakes around ir lifecycle include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Logging and monitoring turn attacks into detectable patterns.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Multi-factor authentication blocks many credential-stuffing attempts. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Incident response phases include preparation, detection, containment, recovery, lessons learned. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Compliance frameworks map controls to risks but do not replace thinking. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    ),
    section(
      "ir-lifecycle-s5",
      "1.5 IR Lifecycle — Putting the chapter together",
      ["This chapter’s through-line is simple: IR Lifecycle connects principles to accountable action. Backups are worthless if restores are never tested before ransomware strikes.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Logging and monitoring turn attacks into detectable patterns. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ir lifecycle in your field. Multi-factor authentication blocks many credential-stuffing attempts. Incident response phases include preparation, detection, containment, recovery, lessons learned."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."]
      }
    )
    ],
    {
      learningObjectives: ["Define ir lifecycle and explain why it matters in Incident Response Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "IR Lifecycle connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Patching closes known doors but cannot fix social engineering.","Least privilege limits blast radius when credentials are stolen.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Patching closes known doors but cannot fix social engineering."],
      realWorldRelevance: "Strong grasp of ir lifecycle reduces rework, supports defensible records, and speeds collaboration across Incident Response Basics.",
    }
  ),
  chapter(
    "detection",
    2,
    "Detection",
    [
    section(
      "detection-s1",
      "2.1 Detection — Foundations and vocabulary",
      ["Detection is a foundation in Incident Response Basics because logging and monitoring turn attacks into detectable patterns. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Multi-factor authentication blocks many credential-stuffing attempts. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain detection aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat detection as a shared model for decisions. Compliance frameworks map controls to risks but do not replace thinking. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "detection-s2",
      "2.2 Detection — How professionals apply this in practice",
      ["Professionals rarely dispute whether detection exists—they dispute how backups are worthless if restores are never tested before ransomware strikes. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Logging and monitoring turn attacks into detectable patterns.","When stakes rise, pause for a second opinion or formal review. Multi-factor authentication blocks many credential-stuffing attempts. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Compliance frameworks map controls to risks but do not replace thinking. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    ),
    section(
      "detection-s3",
      "2.3 Detection — Workplace scenarios and documentation",
      ["Scenario: a teammate cites detection in a meeting, but details in the packet do not match the textbook example. Security awareness training must be short, frequent, and role-specific. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Backups are worthless if restores are never tested before ransomware strikes.","Good documentation states facts, cites the framework, and records the decision. Logging and monitoring turn attacks into detectable patterns. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Multi-factor authentication blocks many credential-stuffing attempts. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Incident response phases include preparation, detection, containment, recovery, lessons learned.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision."]
      }
    ),
    section(
      "detection-s4",
      "2.4 Detection — Common mistakes and how to avoid them",
      ["Common mistakes around detection include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Phishing exploits urgency and authority—not only technical vulnerabilities.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Security awareness training must be short, frequent, and role-specific. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Backups are worthless if restores are never tested before ransomware strikes. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Logging and monitoring turn attacks into detectable patterns. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."]
      }
    ),
    section(
      "detection-s5",
      "2.5 Detection — Putting the chapter together",
      ["This chapter’s through-line is simple: Detection connects principles to accountable action. Vendor risk matters because your data lives on their systems too.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Phishing exploits urgency and authority—not only technical vulnerabilities. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits detection in your field. Security awareness training must be short, frequent, and role-specific. Backups are worthless if restores are never tested before ransomware strikes."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    )
    ],
    {
      learningObjectives: ["Define detection and explain why it matters in Incident Response Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Detection connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths."],
      realWorldRelevance: "Strong grasp of detection reduces rework, supports defensible records, and speeds collaboration across Incident Response Basics.",
    }
  ),
  chapter(
    "containment",
    3,
    "Containment",
    [
    section(
      "containment-s1",
      "3.1 Containment — Foundations and vocabulary",
      ["Containment is a foundation in Incident Response Basics because multi-factor authentication blocks many credential-stuffing attempts. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Compliance frameworks map controls to risks but do not replace thinking. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain containment aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat containment as a shared model for decisions. Incident response phases include preparation, detection, containment, recovery, lessons learned. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "containment-s2",
      "3.2 Containment — How professionals apply this in practice",
      ["Professionals rarely dispute whether containment exists—they dispute how logging and monitoring turn attacks into detectable patterns. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Multi-factor authentication blocks many credential-stuffing attempts.","When stakes rise, pause for a second opinion or formal review. Compliance frameworks map controls to risks but do not replace thinking. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Incident response phases include preparation, detection, containment, recovery, lessons learned. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    ),
    section(
      "containment-s3",
      "3.3 Containment — Workplace scenarios and documentation",
      ["Scenario: a teammate cites containment in a meeting, but details in the packet do not match the textbook example. Backups are worthless if restores are never tested before ransomware strikes. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Logging and monitoring turn attacks into detectable patterns.","Good documentation states facts, cites the framework, and records the decision. Multi-factor authentication blocks many credential-stuffing attempts. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Compliance frameworks map controls to risks but do not replace thinking. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Compliance frameworks map controls to risks but do not replace thinking."]
      }
    ),
    section(
      "containment-s4",
      "3.4 Containment — Common mistakes and how to avoid them",
      ["Common mistakes around containment include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Security awareness training must be short, frequent, and role-specific.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Backups are worthless if restores are never tested before ransomware strikes. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Logging and monitoring turn attacks into detectable patterns. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Multi-factor authentication blocks many credential-stuffing attempts. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    ),
    section(
      "containment-s5",
      "3.5 Containment — Putting the chapter together",
      ["This chapter’s through-line is simple: Containment connects principles to accountable action. Phishing exploits urgency and authority—not only technical vulnerabilities.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Security awareness training must be short, frequent, and role-specific. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits containment in your field. Backups are worthless if restores are never tested before ransomware strikes. Logging and monitoring turn attacks into detectable patterns."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    )
    ],
    {
      learningObjectives: ["Define containment and explain why it matters in Incident Response Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Containment connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Vendor risk matters because your data lives on their systems too.","Security awareness training must be short, frequent, and role-specific.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Vendor risk matters because your data lives on their systems too."],
      realWorldRelevance: "Strong grasp of containment reduces rework, supports defensible records, and speeds collaboration across Incident Response Basics.",
    }
  ),
  chapter(
    "eradication",
    4,
    "Eradication",
    [
    section(
      "eradication-s1",
      "4.1 Eradication — Foundations and vocabulary",
      ["Eradication is a foundation in Incident Response Basics because backups are worthless if restores are never tested before ransomware strikes. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Logging and monitoring turn attacks into detectable patterns. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain eradication aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat eradication as a shared model for decisions. Multi-factor authentication blocks many credential-stuffing attempts. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "eradication-s2",
      "4.2 Eradication — How professionals apply this in practice",
      ["Professionals rarely dispute whether eradication exists—they dispute how security awareness training must be short, frequent, and role-specific. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Backups are worthless if restores are never tested before ransomware strikes.","When stakes rise, pause for a second opinion or formal review. Logging and monitoring turn attacks into detectable patterns. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Multi-factor authentication blocks many credential-stuffing attempts. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    ),
    section(
      "eradication-s3",
      "4.3 Eradication — Workplace scenarios and documentation",
      ["Scenario: a teammate cites eradication in a meeting, but details in the packet do not match the textbook example. Phishing exploits urgency and authority—not only technical vulnerabilities. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Security awareness training must be short, frequent, and role-specific.","Good documentation states facts, cites the framework, and records the decision. Backups are worthless if restores are never tested before ransomware strikes. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Logging and monitoring turn attacks into detectable patterns. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    ),
    section(
      "eradication-s4",
      "4.4 Eradication — Common mistakes and how to avoid them",
      ["Common mistakes around eradication include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Vendor risk matters because your data lives on their systems too.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Phishing exploits urgency and authority—not only technical vulnerabilities. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Security awareness training must be short, frequent, and role-specific. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Backups are worthless if restores are never tested before ransomware strikes. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    ),
    section(
      "eradication-s5",
      "4.5 Eradication — Putting the chapter together",
      ["This chapter’s through-line is simple: Eradication connects principles to accountable action. Confidentiality, integrity, and availability frame nearly every security decision.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Vendor risk matters because your data lives on their systems too. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits eradication in your field. Phishing exploits urgency and authority—not only technical vulnerabilities. Security awareness training must be short, frequent, and role-specific."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    )
    ],
    {
      learningObjectives: ["Define eradication and explain why it matters in Incident Response Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Eradication connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."],
      realWorldRelevance: "Strong grasp of eradication reduces rework, supports defensible records, and speeds collaboration across Incident Response Basics.",
    }
  ),
  chapter(
    "recovery",
    5,
    "Recovery",
    [
    section(
      "recovery-s1",
      "5.1 Recovery — Foundations and vocabulary",
      ["Recovery is a foundation in Incident Response Basics because logging and monitoring turn attacks into detectable patterns. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Multi-factor authentication blocks many credential-stuffing attempts. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain recovery aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat recovery as a shared model for decisions. Compliance frameworks map controls to risks but do not replace thinking. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Compliance frameworks map controls to risks but do not replace thinking.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "recovery-s2",
      "5.2 Recovery — How professionals apply this in practice",
      ["Professionals rarely dispute whether recovery exists—they dispute how backups are worthless if restores are never tested before ransomware strikes. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Logging and monitoring turn attacks into detectable patterns.","When stakes rise, pause for a second opinion or formal review. Multi-factor authentication blocks many credential-stuffing attempts. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Compliance frameworks map controls to risks but do not replace thinking. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Multi-factor authentication blocks many credential-stuffing attempts.","Compliance frameworks map controls to risks but do not replace thinking.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths."]
      }
    ),
    section(
      "recovery-s3",
      "5.3 Recovery — Workplace scenarios and documentation",
      ["Scenario: a teammate cites recovery in a meeting, but details in the packet do not match the textbook example. Security awareness training must be short, frequent, and role-specific. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Backups are worthless if restores are never tested before ransomware strikes.","Good documentation states facts, cites the framework, and records the decision. Logging and monitoring turn attacks into detectable patterns. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Multi-factor authentication blocks many credential-stuffing attempts. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Incident response phases include preparation, detection, containment, recovery, lessons learned.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision."]
      }
    ),
    section(
      "recovery-s4",
      "5.4 Recovery — Common mistakes and how to avoid them",
      ["Common mistakes around recovery include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Phishing exploits urgency and authority—not only technical vulnerabilities.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Security awareness training must be short, frequent, and role-specific. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Backups are worthless if restores are never tested before ransomware strikes. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Logging and monitoring turn attacks into detectable patterns. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Compliance frameworks map controls to risks but do not replace thinking.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen."]
      }
    ),
    section(
      "recovery-s5",
      "5.5 Recovery — Putting the chapter together",
      ["This chapter’s through-line is simple: Recovery connects principles to accountable action. Vendor risk matters because your data lives on their systems too.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Phishing exploits urgency and authority—not only technical vulnerabilities. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits recovery in your field. Security awareness training must be short, frequent, and role-specific. Backups are worthless if restores are never tested before ransomware strikes."], {
        bulletPoints: ["Multi-factor authentication blocks many credential-stuffing attempts.","Compliance frameworks map controls to risks but do not replace thinking.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths."]
      }
    )
    ],
    {
      learningObjectives: ["Define recovery and explain why it matters in Incident Response Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Recovery connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Compliance frameworks map controls to risks but do not replace thinking.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Multi-factor authentication blocks many credential-stuffing attempts."],
      realWorldRelevance: "Strong grasp of recovery reduces rework, supports defensible records, and speeds collaboration across Incident Response Basics.",
    }
  ),
  chapter(
    "evidence",
    6,
    "Evidence Handling",
    [
    section(
      "evidence-s1",
      "6.1 Evidence Handling — Foundations and vocabulary",
      ["Evidence Handling is a foundation in Incident Response Basics because incident response phases include preparation, detection, containment, recovery, lessons learned. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Compliance frameworks map controls to risks but do not replace thinking. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain evidence handling aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat evidence handling as a shared model for decisions. Patching closes known doors but cannot fix social engineering. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "evidence-s2",
      "6.2 Evidence Handling — How professionals apply this in practice",
      ["Professionals rarely dispute whether evidence handling exists—they dispute how compliance frameworks map controls to risks but do not replace thinking. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Patching closes known doors but cannot fix social engineering.","When stakes rise, pause for a second opinion or formal review. Segmentation keeps flat networks from becoming easy lateral movement paths. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Least privilege limits blast radius when credentials are stolen. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    ),
    section(
      "evidence-s3",
      "6.3 Evidence Handling — Workplace scenarios and documentation",
      ["Scenario: a teammate cites evidence handling in a meeting, but details in the packet do not match the textbook example. Patching closes known doors but cannot fix social engineering. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Segmentation keeps flat networks from becoming easy lateral movement paths.","Good documentation states facts, cites the framework, and records the decision. Least privilege limits blast radius when credentials are stolen. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Confidentiality, integrity, and availability frame nearly every security decision. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    ),
    section(
      "evidence-s4",
      "6.4 Evidence Handling — Common mistakes and how to avoid them",
      ["Common mistakes around evidence handling include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Segmentation keeps flat networks from becoming easy lateral movement paths.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Least privilege limits blast radius when credentials are stolen. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Confidentiality, integrity, and availability frame nearly every security decision. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Vendor risk matters because your data lives on their systems too. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    ),
    section(
      "evidence-s5",
      "6.5 Evidence Handling — Putting the chapter together",
      ["This chapter’s through-line is simple: Evidence Handling connects principles to accountable action. Least privilege limits blast radius when credentials are stolen.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Confidentiality, integrity, and availability frame nearly every security decision. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits evidence handling in your field. Vendor risk matters because your data lives on their systems too. Phishing exploits urgency and authority—not only technical vulnerabilities."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    )
    ],
    {
      learningObjectives: ["Define evidence handling and explain why it matters in Incident Response Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Evidence Handling connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision."],
      realWorldRelevance: "Strong grasp of evidence handling reduces rework, supports defensible records, and speeds collaboration across Incident Response Basics.",
    }
  ),
  chapter(
    "comms-ir",
    7,
    "Incident Communications",
    [
    section(
      "comms-ir-s1",
      "7.1 Incident Communications — Foundations and vocabulary",
      ["Incident response is a rehearsed playbook: prepare, detect, analyze, contain, eradicate, recover, and document lessons for the next event. Incident Communications is a foundation in Incident Response Basics because compliance frameworks map controls to risks but do not replace thinking. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Incident response phases include preparation, detection, containment, recovery, lessons learned. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain incident communications aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat incident communications as a shared model for decisions. Patching closes known doors but cannot fix social engineering. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "comms-ir-s2",
      "7.2 Incident Communications — How professionals apply this in practice",
      ["Professionals rarely dispute whether incident communications exists—they dispute how multi-factor authentication blocks many credential-stuffing attempts. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Compliance frameworks map controls to risks but do not replace thinking.","When stakes rise, pause for a second opinion or formal review. Incident response phases include preparation, detection, containment, recovery, lessons learned. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Patching closes known doors but cannot fix social engineering. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Incident response phases include preparation, detection, containment, recovery, lessons learned.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision."]
      }
    ),
    section(
      "comms-ir-s3",
      "7.3 Incident Communications — Workplace scenarios and documentation",
      ["Scenario: a teammate cites incident communications in a meeting, but details in the packet do not match the textbook example. Logging and monitoring turn attacks into detectable patterns. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Multi-factor authentication blocks many credential-stuffing attempts.","Good documentation states facts, cites the framework, and records the decision. Compliance frameworks map controls to risks but do not replace thinking. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Incident response phases include preparation, detection, containment, recovery, lessons learned. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    ),
    section(
      "comms-ir-s4",
      "7.4 Incident Communications — Common mistakes and how to avoid them",
      ["Common mistakes around incident communications include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Backups are worthless if restores are never tested before ransomware strikes.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Logging and monitoring turn attacks into detectable patterns. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Multi-factor authentication blocks many credential-stuffing attempts. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Compliance frameworks map controls to risks but do not replace thinking. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."]
      }
    ),
    section(
      "comms-ir-s5",
      "7.5 Incident Communications — Putting the chapter together",
      ["This chapter’s through-line is simple: Incident Communications connects principles to accountable action. Security awareness training must be short, frequent, and role-specific.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Backups are worthless if restores are never tested before ransomware strikes. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits incident communications in your field. Logging and monitoring turn attacks into detectable patterns. Multi-factor authentication blocks many credential-stuffing attempts."], {
        bulletPoints: ["Incident response phases include preparation, detection, containment, recovery, lessons learned.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision."]
      }
    )
    ],
    {
      learningObjectives: ["Define incident communications and explain why it matters in Incident Response Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Incident Communications: Incident response is a rehearsed playbook: prepare, detect, analyze, contain, eradicate, recover, and document lessons for the next event. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Patching closes known doors but cannot fix social engineering.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Patching closes known doors but cannot fix social engineering.","Incident response phases include preparation, detection, containment, recovery, lessons learned."],
      realWorldRelevance: "Strong grasp of incident communications reduces rework, supports defensible records, and speeds collaboration across Incident Response Basics.",
    }
  ),
  chapter(
    "post-incident",
    8,
    "Post-Incident Review",
    [
    section(
      "post-incident-s1",
      "8.1 Post-Incident Review — Foundations and vocabulary",
      ["Incident response is a rehearsed playbook: prepare, detect, analyze, contain, eradicate, recover, and document lessons for the next event. Post-Incident Review is a foundation in Incident Response Basics because compliance frameworks map controls to risks but do not replace thinking. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Incident response phases include preparation, detection, containment, recovery, lessons learned. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain post-incident review aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat post-incident review as a shared model for decisions. Patching closes known doors but cannot fix social engineering. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "post-incident-s2",
      "8.2 Post-Incident Review — How professionals apply this in practice",
      ["Professionals rarely dispute whether post-incident review exists—they dispute how incident response phases include preparation, detection, containment, recovery, lessons learned. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Patching closes known doors but cannot fix social engineering.","When stakes rise, pause for a second opinion or formal review. Segmentation keeps flat networks from becoming easy lateral movement paths. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Least privilege limits blast radius when credentials are stolen. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    ),
    section(
      "post-incident-s3",
      "8.3 Post-Incident Review — Workplace scenarios and documentation",
      ["Scenario: a teammate cites post-incident review in a meeting, but details in the packet do not match the textbook example. Patching closes known doors but cannot fix social engineering. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Segmentation keeps flat networks from becoming easy lateral movement paths.","Good documentation states facts, cites the framework, and records the decision. Least privilege limits blast radius when credentials are stolen. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Confidentiality, integrity, and availability frame nearly every security decision. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Incident response phases include preparation, detection, containment, recovery, lessons learned.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision."]
      }
    ),
    section(
      "post-incident-s4",
      "8.4 Post-Incident Review — Common mistakes and how to avoid them",
      ["Common mistakes around post-incident review include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Segmentation keeps flat networks from becoming easy lateral movement paths.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Least privilege limits blast radius when credentials are stolen. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Confidentiality, integrity, and availability frame nearly every security decision. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Vendor risk matters because your data lives on their systems too. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."]
      }
    ),
    section(
      "post-incident-s5",
      "8.5 Post-Incident Review — Putting the chapter together",
      ["This chapter’s through-line is simple: Post-Incident Review connects principles to accountable action. Least privilege limits blast radius when credentials are stolen.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Confidentiality, integrity, and availability frame nearly every security decision. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits post-incident review in your field. Vendor risk matters because your data lives on their systems too. Phishing exploits urgency and authority—not only technical vulnerabilities."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    )
    ],
    {
      learningObjectives: ["Define post-incident review and explain why it matters in Incident Response Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Post-Incident Review: Incident response is a rehearsed playbook: prepare, detect, analyze, contain, eradicate, recover, and document lessons for the next event. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths."],
      realWorldRelevance: "Strong grasp of post-incident review reduces rework, supports defensible records, and speeds collaboration across Incident Response Basics.",
    }
  )
];
