import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const PASS_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Password Security",
  subtitle: "ForgEd workforce textbook — Password Security",
  paragraphs: [
    "This ForgEd digital textbook presents Password Security at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Follow organizational security policy; this course does not replace SOC procedures or certifications alone.",
  ],
};

export const PASS_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "password-strength",
    1,
    "Password Strength",
    [
    section(
      "password-strength-s1",
      "1.1 Password Strength — Foundations and vocabulary",
      ["Password policies should pair length with managers, breach checks, and phishing-resistant factors—not rotating trivial strings monthly. Password Strength is a foundation in Password Security because incident response phases include preparation, detection, containment, recovery, lessons learned. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Compliance frameworks map controls to risks but do not replace thinking. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain password strength aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat password strength as a shared model for decisions. Patching closes known doors but cannot fix social engineering. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "password-strength-s2",
      "1.2 Password Strength — How professionals apply this in practice",
      ["Professionals rarely dispute whether password strength exists—they dispute how multi-factor authentication blocks many credential-stuffing attempts. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Incident response phases include preparation, detection, containment, recovery, lessons learned.","When stakes rise, pause for a second opinion or formal review. Compliance frameworks map controls to risks but do not replace thinking. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Patching closes known doors but cannot fix social engineering. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    ),
    section(
      "password-strength-s3",
      "1.3 Password Strength — Workplace scenarios and documentation",
      ["Scenario: a teammate cites password strength in a meeting, but details in the packet do not match the textbook example. Logging and monitoring turn attacks into detectable patterns. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Multi-factor authentication blocks many credential-stuffing attempts.","Good documentation states facts, cites the framework, and records the decision. Incident response phases include preparation, detection, containment, recovery, lessons learned. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Compliance frameworks map controls to risks but do not replace thinking. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    ),
    section(
      "password-strength-s4",
      "1.4 Password Strength — Common mistakes and how to avoid them",
      ["Common mistakes around password strength include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Backups are worthless if restores are never tested before ransomware strikes.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Logging and monitoring turn attacks into detectable patterns. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Multi-factor authentication blocks many credential-stuffing attempts. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Incident response phases include preparation, detection, containment, recovery, lessons learned. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    ),
    section(
      "password-strength-s5",
      "1.5 Password Strength — Putting the chapter together",
      ["This chapter’s through-line is simple: Password Strength connects principles to accountable action. Security awareness training must be short, frequent, and role-specific.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Backups are worthless if restores are never tested before ransomware strikes. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits password strength in your field. Logging and monitoring turn attacks into detectable patterns. Multi-factor authentication blocks many credential-stuffing attempts."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    )
    ],
    {
      learningObjectives: ["Define password strength and explain why it matters in Password Security","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Password Strength: Password policies should pair length with managers, breach checks, and phishing-resistant factors—not rotating trivial strings monthly. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Least privilege limits blast radius when credentials are stolen.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Confidentiality, integrity, and availability frame nearly every security decision.","Least privilege limits blast radius when credentials are stolen.","Segmentation keeps flat networks from becoming easy lateral movement paths."],
      realWorldRelevance: "Strong grasp of password strength reduces rework, supports defensible records, and speeds collaboration across Password Security.",
    }
  ),
  chapter(
    "mfa-types",
    2,
    "MFA Types",
    [
    section(
      "mfa-types-s1",
      "2.1 MFA Types — Foundations and vocabulary",
      ["MFA Types is a foundation in Password Security because compliance frameworks map controls to risks but do not replace thinking. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Patching closes known doors but cannot fix social engineering. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain mfa types aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat mfa types as a shared model for decisions. Segmentation keeps flat networks from becoming easy lateral movement paths. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "mfa-types-s2",
      "2.2 MFA Types — How professionals apply this in practice",
      ["Professionals rarely dispute whether mfa types exists—they dispute how patching closes known doors but cannot fix social engineering. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Segmentation keeps flat networks from becoming easy lateral movement paths.","When stakes rise, pause for a second opinion or formal review. Least privilege limits blast radius when credentials are stolen. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Confidentiality, integrity, and availability frame nearly every security decision. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."]
      }
    ),
    section(
      "mfa-types-s3",
      "2.3 MFA Types — Workplace scenarios and documentation",
      ["Scenario: a teammate cites mfa types in a meeting, but details in the packet do not match the textbook example. Segmentation keeps flat networks from becoming easy lateral movement paths. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Least privilege limits blast radius when credentials are stolen.","Good documentation states facts, cites the framework, and records the decision. Confidentiality, integrity, and availability frame nearly every security decision. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Vendor risk matters because your data lives on their systems too. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering."]
      }
    ),
    section(
      "mfa-types-s4",
      "2.4 MFA Types — Common mistakes and how to avoid them",
      ["Common mistakes around mfa types include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Least privilege limits blast radius when credentials are stolen.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Confidentiality, integrity, and availability frame nearly every security decision. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Vendor risk matters because your data lives on their systems too. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Phishing exploits urgency and authority—not only technical vulnerabilities. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking."]
      }
    ),
    section(
      "mfa-types-s5",
      "2.5 MFA Types — Putting the chapter together",
      ["This chapter’s through-line is simple: MFA Types connects principles to accountable action. Confidentiality, integrity, and availability frame nearly every security decision.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Vendor risk matters because your data lives on their systems too. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits mfa types in your field. Phishing exploits urgency and authority—not only technical vulnerabilities. Security awareness training must be short, frequent, and role-specific."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."]
      }
    )
    ],
    {
      learningObjectives: ["Define mfa types and explain why it matters in Password Security","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "MFA Types connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Backups are worthless if restores are never tested before ransomware strikes.","Security awareness training must be short, frequent, and role-specific.","Logging and monitoring turn attacks into detectable patterns.","Backups are worthless if restores are never tested before ransomware strikes.","Security awareness training must be short, frequent, and role-specific."],
      realWorldRelevance: "Strong grasp of mfa types reduces rework, supports defensible records, and speeds collaboration across Password Security.",
    }
  ),
  chapter(
    "passkeys",
    3,
    "Passkeys",
    [
    section(
      "passkeys-s1",
      "3.1 Passkeys — Foundations and vocabulary",
      ["Passkeys is a foundation in Password Security because compliance frameworks map controls to risks but do not replace thinking. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Patching closes known doors but cannot fix social engineering. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain passkeys aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat passkeys as a shared model for decisions. Segmentation keeps flat networks from becoming easy lateral movement paths. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "passkeys-s2",
      "3.2 Passkeys — How professionals apply this in practice",
      ["Professionals rarely dispute whether passkeys exists—they dispute how patching closes known doors but cannot fix social engineering. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Segmentation keeps flat networks from becoming easy lateral movement paths.","When stakes rise, pause for a second opinion or formal review. Least privilege limits blast radius when credentials are stolen. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Confidentiality, integrity, and availability frame nearly every security decision. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."]
      }
    ),
    section(
      "passkeys-s3",
      "3.3 Passkeys — Workplace scenarios and documentation",
      ["Scenario: a teammate cites passkeys in a meeting, but details in the packet do not match the textbook example. Segmentation keeps flat networks from becoming easy lateral movement paths. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Least privilege limits blast radius when credentials are stolen.","Good documentation states facts, cites the framework, and records the decision. Confidentiality, integrity, and availability frame nearly every security decision. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Vendor risk matters because your data lives on their systems too. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    ),
    section(
      "passkeys-s4",
      "3.4 Passkeys — Common mistakes and how to avoid them",
      ["Common mistakes around passkeys include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Least privilege limits blast radius when credentials are stolen.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Confidentiality, integrity, and availability frame nearly every security decision. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Vendor risk matters because your data lives on their systems too. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Phishing exploits urgency and authority—not only technical vulnerabilities. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    ),
    section(
      "passkeys-s5",
      "3.5 Passkeys — Putting the chapter together",
      ["This chapter’s through-line is simple: Passkeys connects principles to accountable action. Confidentiality, integrity, and availability frame nearly every security decision.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Vendor risk matters because your data lives on their systems too. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits passkeys in your field. Phishing exploits urgency and authority—not only technical vulnerabilities. Security awareness training must be short, frequent, and role-specific."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."]
      }
    )
    ],
    {
      learningObjectives: ["Define passkeys and explain why it matters in Password Security","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Passkeys connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."],
      realWorldRelevance: "Strong grasp of passkeys reduces rework, supports defensible records, and speeds collaboration across Password Security.",
    }
  ),
  chapter(
    "managers",
    4,
    "Password Managers",
    [
    section(
      "managers-s1",
      "4.1 Password Managers — Foundations and vocabulary",
      ["Password policies should pair length with managers, breach checks, and phishing-resistant factors—not rotating trivial strings monthly. Password Managers is a foundation in Password Security because compliance frameworks map controls to risks but do not replace thinking. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Patching closes known doors but cannot fix social engineering. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain password managers aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat password managers as a shared model for decisions. Segmentation keeps flat networks from becoming easy lateral movement paths. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "managers-s2",
      "4.2 Password Managers — How professionals apply this in practice",
      ["Professionals rarely dispute whether password managers exists—they dispute how incident response phases include preparation, detection, containment, recovery, lessons learned. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Compliance frameworks map controls to risks but do not replace thinking.","When stakes rise, pause for a second opinion or formal review. Patching closes known doors but cannot fix social engineering. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Segmentation keeps flat networks from becoming easy lateral movement paths. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering."]
      }
    ),
    section(
      "managers-s3",
      "4.3 Password Managers — Workplace scenarios and documentation",
      ["Scenario: a teammate cites password managers in a meeting, but details in the packet do not match the textbook example. Multi-factor authentication blocks many credential-stuffing attempts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Incident response phases include preparation, detection, containment, recovery, lessons learned.","Good documentation states facts, cites the framework, and records the decision. Compliance frameworks map controls to risks but do not replace thinking. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Patching closes known doors but cannot fix social engineering. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."]
      }
    ),
    section(
      "managers-s4",
      "4.4 Password Managers — Common mistakes and how to avoid them",
      ["Common mistakes around password managers include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Logging and monitoring turn attacks into detectable patterns.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Multi-factor authentication blocks many credential-stuffing attempts. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Incident response phases include preparation, detection, containment, recovery, lessons learned. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Compliance frameworks map controls to risks but do not replace thinking. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking."]
      }
    ),
    section(
      "managers-s5",
      "4.5 Password Managers — Putting the chapter together",
      ["This chapter’s through-line is simple: Password Managers connects principles to accountable action. Backups are worthless if restores are never tested before ransomware strikes.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Logging and monitoring turn attacks into detectable patterns. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits password managers in your field. Multi-factor authentication blocks many credential-stuffing attempts. Incident response phases include preparation, detection, containment, recovery, lessons learned."], {
        bulletPoints: ["Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering."]
      }
    )
    ],
    {
      learningObjectives: ["Define password managers and explain why it matters in Password Security","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Password Managers: Password policies should pair length with managers, breach checks, and phishing-resistant factors—not rotating trivial strings monthly. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."],
      realWorldRelevance: "Strong grasp of password managers reduces rework, supports defensible records, and speeds collaboration across Password Security.",
    }
  ),
  chapter(
    "rotation-myths",
    5,
    "Rotation Myths",
    [
    section(
      "rotation-myths-s1",
      "5.1 Rotation Myths — Foundations and vocabulary",
      ["Rotation Myths is a foundation in Password Security because confidentiality, integrity, and availability frame nearly every security decision. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Vendor risk matters because your data lives on their systems too. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain rotation myths aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat rotation myths as a shared model for decisions. Phishing exploits urgency and authority—not only technical vulnerabilities. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "rotation-myths-s2",
      "5.2 Rotation Myths — How professionals apply this in practice",
      ["Professionals rarely dispute whether rotation myths exists—they dispute how vendor risk matters because your data lives on their systems too. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Phishing exploits urgency and authority—not only technical vulnerabilities.","When stakes rise, pause for a second opinion or formal review. Security awareness training must be short, frequent, and role-specific. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Backups are worthless if restores are never tested before ransomware strikes. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."]
      }
    ),
    section(
      "rotation-myths-s3",
      "5.3 Rotation Myths — Workplace scenarios and documentation",
      ["Scenario: a teammate cites rotation myths in a meeting, but details in the packet do not match the textbook example. Phishing exploits urgency and authority—not only technical vulnerabilities. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Security awareness training must be short, frequent, and role-specific.","Good documentation states facts, cites the framework, and records the decision. Backups are worthless if restores are never tested before ransomware strikes. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Logging and monitoring turn attacks into detectable patterns. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering."]
      }
    ),
    section(
      "rotation-myths-s4",
      "5.4 Rotation Myths — Common mistakes and how to avoid them",
      ["Common mistakes around rotation myths include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Security awareness training must be short, frequent, and role-specific.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Backups are worthless if restores are never tested before ransomware strikes. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Logging and monitoring turn attacks into detectable patterns. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Multi-factor authentication blocks many credential-stuffing attempts. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking."]
      }
    ),
    section(
      "rotation-myths-s5",
      "5.5 Rotation Myths — Putting the chapter together",
      ["This chapter’s through-line is simple: Rotation Myths connects principles to accountable action. Backups are worthless if restores are never tested before ransomware strikes.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Logging and monitoring turn attacks into detectable patterns. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits rotation myths in your field. Multi-factor authentication blocks many credential-stuffing attempts. Incident response phases include preparation, detection, containment, recovery, lessons learned."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."]
      }
    )
    ],
    {
      learningObjectives: ["Define rotation myths and explain why it matters in Password Security","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Rotation Myths connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Backups are worthless if restores are never tested before ransomware strikes.","Security awareness training must be short, frequent, and role-specific.","Logging and monitoring turn attacks into detectable patterns.","Backups are worthless if restores are never tested before ransomware strikes.","Security awareness training must be short, frequent, and role-specific."],
      realWorldRelevance: "Strong grasp of rotation myths reduces rework, supports defensible records, and speeds collaboration across Password Security.",
    }
  ),
  chapter(
    "breach-response",
    6,
    "Credential Breach Response",
    [
    section(
      "breach-response-s1",
      "6.1 Credential Breach Response — Foundations and vocabulary",
      ["Credential Breach Response is a foundation in Password Security because multi-factor authentication blocks many credential-stuffing attempts. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Incident response phases include preparation, detection, containment, recovery, lessons learned. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain credential breach response aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat credential breach response as a shared model for decisions. Patching closes known doors but cannot fix social engineering. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Compliance frameworks map controls to risks but do not replace thinking.","Least privilege limits blast radius when credentials are stolen.","Multi-factor authentication blocks many credential-stuffing attempts."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "breach-response-s2",
      "6.2 Credential Breach Response — How professionals apply this in practice",
      ["Professionals rarely dispute whether credential breach response exists—they dispute how incident response phases include preparation, detection, containment, recovery, lessons learned. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Patching closes known doors but cannot fix social engineering.","When stakes rise, pause for a second opinion or formal review. Segmentation keeps flat networks from becoming easy lateral movement paths. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Confidentiality, integrity, and availability frame nearly every security decision. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Compliance frameworks map controls to risks but do not replace thinking.","Least privilege limits blast radius when credentials are stolen."]
      }
    ),
    section(
      "breach-response-s3",
      "6.3 Credential Breach Response — Workplace scenarios and documentation",
      ["Scenario: a teammate cites credential breach response in a meeting, but details in the packet do not match the textbook example. Patching closes known doors but cannot fix social engineering. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Segmentation keeps flat networks from becoming easy lateral movement paths.","Good documentation states facts, cites the framework, and records the decision. Confidentiality, integrity, and availability frame nearly every security decision. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Vendor risk matters because your data lives on their systems too. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Logging and monitoring turn attacks into detectable patterns.","Compliance frameworks map controls to risks but do not replace thinking.","Least privilege limits blast radius when credentials are stolen.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."]
      }
    ),
    section(
      "breach-response-s4",
      "6.4 Credential Breach Response — Common mistakes and how to avoid them",
      ["Common mistakes around credential breach response include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Segmentation keeps flat networks from becoming easy lateral movement paths.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Confidentiality, integrity, and availability frame nearly every security decision. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Vendor risk matters because your data lives on their systems too. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Phishing exploits urgency and authority—not only technical vulnerabilities. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Compliance frameworks map controls to risks but do not replace thinking.","Least privilege limits blast radius when credentials are stolen.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    ),
    section(
      "breach-response-s5",
      "6.5 Credential Breach Response — Putting the chapter together",
      ["This chapter’s through-line is simple: Credential Breach Response connects principles to accountable action. Confidentiality, integrity, and availability frame nearly every security decision.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Vendor risk matters because your data lives on their systems too. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits credential breach response in your field. Phishing exploits urgency and authority—not only technical vulnerabilities. Security awareness training must be short, frequent, and role-specific."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Compliance frameworks map controls to risks but do not replace thinking.","Least privilege limits blast radius when credentials are stolen."]
      }
    )
    ],
    {
      learningObjectives: ["Define credential breach response and explain why it matters in Password Security","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Credential Breach Response connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Backups are worthless if restores are never tested before ransomware strikes.","Security awareness training must be short, frequent, and role-specific.","Logging and monitoring turn attacks into detectable patterns.","Backups are worthless if restores are never tested before ransomware strikes.","Security awareness training must be short, frequent, and role-specific."],
      realWorldRelevance: "Strong grasp of credential breach response reduces rework, supports defensible records, and speeds collaboration across Password Security.",
    }
  ),
  chapter(
    "team-passwords",
    7,
    "Team Password Policy",
    [
    section(
      "team-passwords-s1",
      "7.1 Team Password Policy — Foundations and vocabulary",
      ["Password policies should pair length with managers, breach checks, and phishing-resistant factors—not rotating trivial strings monthly. Team Password Policy is a foundation in Password Security because patching closes known doors but cannot fix social engineering. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Segmentation keeps flat networks from becoming easy lateral movement paths. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain team password policy aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat team password policy as a shared model for decisions. Least privilege limits blast radius when credentials are stolen. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "team-passwords-s2",
      "7.2 Team Password Policy — How professionals apply this in practice",
      ["Professionals rarely dispute whether team password policy exists—they dispute how segmentation keeps flat networks from becoming easy lateral movement paths. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Least privilege limits blast radius when credentials are stolen.","When stakes rise, pause for a second opinion or formal review. Confidentiality, integrity, and availability frame nearly every security decision. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Vendor risk matters because your data lives on their systems too. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision."]
      }
    ),
    section(
      "team-passwords-s3",
      "7.3 Team Password Policy — Workplace scenarios and documentation",
      ["Scenario: a teammate cites team password policy in a meeting, but details in the packet do not match the textbook example. Least privilege limits blast radius when credentials are stolen. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Confidentiality, integrity, and availability frame nearly every security decision.","Good documentation states facts, cites the framework, and records the decision. Vendor risk matters because your data lives on their systems too. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Phishing exploits urgency and authority—not only technical vulnerabilities. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    ),
    section(
      "team-passwords-s4",
      "7.4 Team Password Policy — Common mistakes and how to avoid them",
      ["Common mistakes around team password policy include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Confidentiality, integrity, and availability frame nearly every security decision.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Vendor risk matters because your data lives on their systems too. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Phishing exploits urgency and authority—not only technical vulnerabilities. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Security awareness training must be short, frequent, and role-specific. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."]
      }
    ),
    section(
      "team-passwords-s5",
      "7.5 Team Password Policy — Putting the chapter together",
      ["This chapter’s through-line is simple: Team Password Policy connects principles to accountable action. Vendor risk matters because your data lives on their systems too.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Phishing exploits urgency and authority—not only technical vulnerabilities. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits team password policy in your field. Security awareness training must be short, frequent, and role-specific. Backups are worthless if restores are never tested before ransomware strikes."], {
        bulletPoints: ["Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision."]
      }
    )
    ],
    {
      learningObjectives: ["Define team password policy and explain why it matters in Password Security","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Team Password Policy: Password policies should pair length with managers, breach checks, and phishing-resistant factors—not rotating trivial strings monthly. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Patching closes known doors but cannot fix social engineering.","Compliance frameworks map controls to risks but do not replace thinking.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Patching closes known doors but cannot fix social engineering.","Compliance frameworks map controls to risks but do not replace thinking."],
      realWorldRelevance: "Strong grasp of team password policy reduces rework, supports defensible records, and speeds collaboration across Password Security.",
    }
  ),
  chapter(
    "sso",
    8,
    "SSO Basics",
    [
    section(
      "sso-s1",
      "8.1 SSO Basics — Foundations and vocabulary",
      ["SSO Basics is a foundation in Password Security because incident response phases include preparation, detection, containment, recovery, lessons learned. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Compliance frameworks map controls to risks but do not replace thinking. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain sso basics aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat sso basics as a shared model for decisions. Patching closes known doors but cannot fix social engineering. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "sso-s2",
      "8.2 SSO Basics — How professionals apply this in practice",
      ["Professionals rarely dispute whether sso basics exists—they dispute how compliance frameworks map controls to risks but do not replace thinking. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Patching closes known doors but cannot fix social engineering.","When stakes rise, pause for a second opinion or formal review. Segmentation keeps flat networks from becoming easy lateral movement paths. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Least privilege limits blast radius when credentials are stolen. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    ),
    section(
      "sso-s3",
      "8.3 SSO Basics — Workplace scenarios and documentation",
      ["Scenario: a teammate cites sso basics in a meeting, but details in the packet do not match the textbook example. Patching closes known doors but cannot fix social engineering. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Segmentation keeps flat networks from becoming easy lateral movement paths.","Good documentation states facts, cites the framework, and records the decision. Least privilege limits blast radius when credentials are stolen. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Confidentiality, integrity, and availability frame nearly every security decision. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking."]
      }
    ),
    section(
      "sso-s4",
      "8.4 SSO Basics — Common mistakes and how to avoid them",
      ["Common mistakes around sso basics include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Segmentation keeps flat networks from becoming easy lateral movement paths.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Least privilege limits blast radius when credentials are stolen. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Confidentiality, integrity, and availability frame nearly every security decision. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Vendor risk matters because your data lives on their systems too. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."]
      }
    ),
    section(
      "sso-s5",
      "8.5 SSO Basics — Putting the chapter together",
      ["This chapter’s through-line is simple: SSO Basics connects principles to accountable action. Least privilege limits blast radius when credentials are stolen.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Confidentiality, integrity, and availability frame nearly every security decision. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits sso basics in your field. Vendor risk matters because your data lives on their systems too. Phishing exploits urgency and authority—not only technical vulnerabilities."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    )
    ],
    {
      learningObjectives: ["Define sso basics and explain why it matters in Password Security","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "SSO Basics connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Security awareness training must be short, frequent, and role-specific.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Backups are worthless if restores are never tested before ransomware strikes.","Security awareness training must be short, frequent, and role-specific.","Phishing exploits urgency and authority—not only technical vulnerabilities."],
      realWorldRelevance: "Strong grasp of sso basics reduces rework, supports defensible records, and speeds collaboration across Password Security.",
    }
  )
];
