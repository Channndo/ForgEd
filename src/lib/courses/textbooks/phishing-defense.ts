import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const PHISH_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Phishing Defense",
  subtitle: "ForgEd workforce textbook — Phishing Defense",
  paragraphs: [
    "This ForgEd digital textbook presents Phishing Defense at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Follow organizational security policy; this course does not replace SOC procedures or certifications alone.",
  ],
};

export const PHISH_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "phishing-types",
    1,
    "Phishing Types",
    [
    section(
      "phishing-types-s1",
      "1.1 Phishing Types — Foundations and vocabulary",
      ["Phishing succeeds on urgency and impersonation; technical controls help, but reporting channels and verification habits stop most losses. Phishing Types is a foundation in Phishing Defense because vendor risk matters because your data lives on their systems too. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Security awareness training must be short, frequent, and role-specific. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain phishing types aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat phishing types as a shared model for decisions. Backups are worthless if restores are never tested before ransomware strikes. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "phishing-types-s2",
      "1.2 Phishing Types — How professionals apply this in practice",
      ["Professionals rarely dispute whether phishing types exists—they dispute how confidentiality, integrity, and availability frame nearly every security decision. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Vendor risk matters because your data lives on their systems too.","When stakes rise, pause for a second opinion or formal review. Security awareness training must be short, frequent, and role-specific. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Backups are worthless if restores are never tested before ransomware strikes. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Security awareness training must be short, frequent, and role-specific."]
      }
    ),
    section(
      "phishing-types-s3",
      "1.3 Phishing Types — Workplace scenarios and documentation",
      ["Scenario: a teammate cites phishing types in a meeting, but details in the packet do not match the textbook example. Least privilege limits blast radius when credentials are stolen. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Confidentiality, integrity, and availability frame nearly every security decision.","Good documentation states facts, cites the framework, and records the decision. Vendor risk matters because your data lives on their systems too. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Security awareness training must be short, frequent, and role-specific. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision."]
      }
    ),
    section(
      "phishing-types-s4",
      "1.4 Phishing Types — Common mistakes and how to avoid them",
      ["Common mistakes around phishing types include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Segmentation keeps flat networks from becoming easy lateral movement paths.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Least privilege limits blast radius when credentials are stolen. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Confidentiality, integrity, and availability frame nearly every security decision. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Vendor risk matters because your data lives on their systems too. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."]
      }
    ),
    section(
      "phishing-types-s5",
      "1.5 Phishing Types — Putting the chapter together",
      ["This chapter’s through-line is simple: Phishing Types connects principles to accountable action. Patching closes known doors but cannot fix social engineering.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Segmentation keeps flat networks from becoming easy lateral movement paths. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits phishing types in your field. Least privilege limits blast radius when credentials are stolen. Confidentiality, integrity, and availability frame nearly every security decision."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Security awareness training must be short, frequent, and role-specific."]
      }
    )
    ],
    {
      learningObjectives: ["Define phishing types and explain why it matters in Phishing Defense","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Phishing Types: Phishing succeeds on urgency and impersonation; technical controls help, but reporting channels and verification habits stop most losses. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths."],
      realWorldRelevance: "Strong grasp of phishing types reduces rework, supports defensible records, and speeds collaboration across Phishing Defense.",
    }
  ),
  chapter(
    "email-signals",
    2,
    "Email Red Flags",
    [
    section(
      "email-signals-s1",
      "2.1 Email Red Flags — Foundations and vocabulary",
      ["Email Red Flags is a foundation in Phishing Defense because vendor risk matters because your data lives on their systems too. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Phishing exploits urgency and authority—not only technical vulnerabilities. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain email red flags aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat email red flags as a shared model for decisions. Security awareness training must be short, frequent, and role-specific. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "email-signals-s2",
      "2.2 Email Red Flags — How professionals apply this in practice",
      ["Professionals rarely dispute whether email red flags exists—they dispute how phishing exploits urgency and authority—not only technical vulnerabilities. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Security awareness training must be short, frequent, and role-specific.","When stakes rise, pause for a second opinion or formal review. Backups are worthless if restores are never tested before ransomware strikes. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Logging and monitoring turn attacks into detectable patterns. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    ),
    section(
      "email-signals-s3",
      "2.3 Email Red Flags — Workplace scenarios and documentation",
      ["Scenario: a teammate cites email red flags in a meeting, but details in the packet do not match the textbook example. Security awareness training must be short, frequent, and role-specific. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Backups are worthless if restores are never tested before ransomware strikes.","Good documentation states facts, cites the framework, and records the decision. Logging and monitoring turn attacks into detectable patterns. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Multi-factor authentication blocks many credential-stuffing attempts. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    ),
    section(
      "email-signals-s4",
      "2.4 Email Red Flags — Common mistakes and how to avoid them",
      ["Common mistakes around email red flags include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Backups are worthless if restores are never tested before ransomware strikes.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Logging and monitoring turn attacks into detectable patterns. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Multi-factor authentication blocks many credential-stuffing attempts. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Incident response phases include preparation, detection, containment, recovery, lessons learned. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    ),
    section(
      "email-signals-s5",
      "2.5 Email Red Flags — Putting the chapter together",
      ["This chapter’s through-line is simple: Email Red Flags connects principles to accountable action. Logging and monitoring turn attacks into detectable patterns.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Multi-factor authentication blocks many credential-stuffing attempts. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits email red flags in your field. Incident response phases include preparation, detection, containment, recovery, lessons learned. Compliance frameworks map controls to risks but do not replace thinking."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    )
    ],
    {
      learningObjectives: ["Define email red flags and explain why it matters in Phishing Defense","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Email Red Flags connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Vendor risk matters because your data lives on their systems too.","Confidentiality, integrity, and availability frame nearly every security decision.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Vendor risk matters because your data lives on their systems too.","Confidentiality, integrity, and availability frame nearly every security decision."],
      realWorldRelevance: "Strong grasp of email red flags reduces rework, supports defensible records, and speeds collaboration across Phishing Defense.",
    }
  ),
  chapter(
    "smishing",
    3,
    "Smishing and Vishing",
    [
    section(
      "smishing-s1",
      "3.1 Smishing and Vishing — Foundations and vocabulary",
      ["Smishing and Vishing is a foundation in Phishing Defense because compliance frameworks map controls to risks but do not replace thinking. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Patching closes known doors but cannot fix social engineering. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain smishing and vishing aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat smishing and vishing as a shared model for decisions. Segmentation keeps flat networks from becoming easy lateral movement paths. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "smishing-s2",
      "3.2 Smishing and Vishing — How professionals apply this in practice",
      ["Professionals rarely dispute whether smishing and vishing exists—they dispute how incident response phases include preparation, detection, containment, recovery, lessons learned. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Compliance frameworks map controls to risks but do not replace thinking.","When stakes rise, pause for a second opinion or formal review. Patching closes known doors but cannot fix social engineering. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Segmentation keeps flat networks from becoming easy lateral movement paths. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    ),
    section(
      "smishing-s3",
      "3.3 Smishing and Vishing — Workplace scenarios and documentation",
      ["Scenario: a teammate cites smishing and vishing in a meeting, but details in the packet do not match the textbook example. Multi-factor authentication blocks many credential-stuffing attempts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Incident response phases include preparation, detection, containment, recovery, lessons learned.","Good documentation states facts, cites the framework, and records the decision. Compliance frameworks map controls to risks but do not replace thinking. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Patching closes known doors but cannot fix social engineering. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    ),
    section(
      "smishing-s4",
      "3.4 Smishing and Vishing — Common mistakes and how to avoid them",
      ["Common mistakes around smishing and vishing include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Logging and monitoring turn attacks into detectable patterns.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Multi-factor authentication blocks many credential-stuffing attempts. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Incident response phases include preparation, detection, containment, recovery, lessons learned. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Compliance frameworks map controls to risks but do not replace thinking. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    ),
    section(
      "smishing-s5",
      "3.5 Smishing and Vishing — Putting the chapter together",
      ["This chapter’s through-line is simple: Smishing and Vishing connects principles to accountable action. Backups are worthless if restores are never tested before ransomware strikes.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Logging and monitoring turn attacks into detectable patterns. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits smishing and vishing in your field. Multi-factor authentication blocks many credential-stuffing attempts. Incident response phases include preparation, detection, containment, recovery, lessons learned."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    )
    ],
    {
      learningObjectives: ["Define smishing and vishing and explain why it matters in Phishing Defense","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Smishing and Vishing connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."],
      realWorldRelevance: "Strong grasp of smishing and vishing reduces rework, supports defensible records, and speeds collaboration across Phishing Defense.",
    }
  ),
  chapter(
    "bec",
    4,
    "Business Email Compromise",
    [
    section(
      "bec-s1",
      "4.1 Business Email Compromise — Foundations and vocabulary",
      ["Business Email Compromise is a foundation in Phishing Defense because least privilege limits blast radius when credentials are stolen. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Confidentiality, integrity, and availability frame nearly every security decision. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain business email compromise aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat business email compromise as a shared model for decisions. Vendor risk matters because your data lives on their systems too. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "bec-s2",
      "4.2 Business Email Compromise — How professionals apply this in practice",
      ["Professionals rarely dispute whether business email compromise exists—they dispute how segmentation keeps flat networks from becoming easy lateral movement paths. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Least privilege limits blast radius when credentials are stolen.","When stakes rise, pause for a second opinion or formal review. Confidentiality, integrity, and availability frame nearly every security decision. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Vendor risk matters because your data lives on their systems too. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking."]
      }
    ),
    section(
      "bec-s3",
      "4.3 Business Email Compromise — Workplace scenarios and documentation",
      ["Scenario: a teammate cites business email compromise in a meeting, but details in the packet do not match the textbook example. Patching closes known doors but cannot fix social engineering. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Segmentation keeps flat networks from becoming easy lateral movement paths.","Good documentation states facts, cites the framework, and records the decision. Least privilege limits blast radius when credentials are stolen. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Confidentiality, integrity, and availability frame nearly every security decision. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    ),
    section(
      "bec-s4",
      "4.4 Business Email Compromise — Common mistakes and how to avoid them",
      ["Common mistakes around business email compromise include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Compliance frameworks map controls to risks but do not replace thinking.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Patching closes known doors but cannot fix social engineering. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Segmentation keeps flat networks from becoming easy lateral movement paths. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Least privilege limits blast radius when credentials are stolen. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."]
      }
    ),
    section(
      "bec-s5",
      "4.5 Business Email Compromise — Putting the chapter together",
      ["This chapter’s through-line is simple: Business Email Compromise connects principles to accountable action. Incident response phases include preparation, detection, containment, recovery, lessons learned.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Compliance frameworks map controls to risks but do not replace thinking. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits business email compromise in your field. Patching closes known doors but cannot fix social engineering. Segmentation keeps flat networks from becoming easy lateral movement paths."], {
        bulletPoints: ["Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking."]
      }
    )
    ],
    {
      learningObjectives: ["Define business email compromise and explain why it matters in Phishing Defense","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Business Email Compromise connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."],
      realWorldRelevance: "Strong grasp of business email compromise reduces rework, supports defensible records, and speeds collaboration across Phishing Defense.",
    }
  ),
  chapter(
    "report-phish",
    5,
    "Reporting Phishing",
    [
    section(
      "report-phish-s1",
      "5.1 Reporting Phishing — Foundations and vocabulary",
      ["Phishing succeeds on urgency and impersonation; technical controls help, but reporting channels and verification habits stop most losses. Reporting Phishing is a foundation in Phishing Defense because segmentation keeps flat networks from becoming easy lateral movement paths. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Least privilege limits blast radius when credentials are stolen. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain reporting phishing aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat reporting phishing as a shared model for decisions. Confidentiality, integrity, and availability frame nearly every security decision. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "report-phish-s2",
      "5.2 Reporting Phishing — How professionals apply this in practice",
      ["Professionals rarely dispute whether reporting phishing exists—they dispute how least privilege limits blast radius when credentials are stolen. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Confidentiality, integrity, and availability frame nearly every security decision.","When stakes rise, pause for a second opinion or formal review. Vendor risk matters because your data lives on their systems too. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Security awareness training must be short, frequent, and role-specific. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Patching closes known doors but cannot fix social engineering."]
      }
    ),
    section(
      "report-phish-s3",
      "5.3 Reporting Phishing — Workplace scenarios and documentation",
      ["Scenario: a teammate cites reporting phishing in a meeting, but details in the packet do not match the textbook example. Confidentiality, integrity, and availability frame nearly every security decision. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Vendor risk matters because your data lives on their systems too.","Good documentation states facts, cites the framework, and records the decision. Security awareness training must be short, frequent, and role-specific. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Backups are worthless if restores are never tested before ransomware strikes. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Compliance frameworks map controls to risks but do not replace thinking.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen."]
      }
    ),
    section(
      "report-phish-s4",
      "5.4 Reporting Phishing — Common mistakes and how to avoid them",
      ["Common mistakes around reporting phishing include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Vendor risk matters because your data lives on their systems too.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Security awareness training must be short, frequent, and role-specific. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Backups are worthless if restores are never tested before ransomware strikes. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Logging and monitoring turn attacks into detectable patterns. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths."]
      }
    ),
    section(
      "report-phish-s5",
      "5.5 Reporting Phishing — Putting the chapter together",
      ["This chapter’s through-line is simple: Reporting Phishing connects principles to accountable action. Security awareness training must be short, frequent, and role-specific.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Backups are worthless if restores are never tested before ransomware strikes. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits reporting phishing in your field. Logging and monitoring turn attacks into detectable patterns. Multi-factor authentication blocks many credential-stuffing attempts."], {
        bulletPoints: ["Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Patching closes known doors but cannot fix social engineering."]
      }
    )
    ],
    {
      learningObjectives: ["Define reporting phishing and explain why it matters in Phishing Defense","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Reporting Phishing: Phishing succeeds on urgency and impersonation; technical controls help, but reporting channels and verification habits stop most losses. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Incident response phases include preparation, detection, containment, recovery, lessons learned.","Multi-factor authentication blocks many credential-stuffing attempts.","Compliance frameworks map controls to risks but do not replace thinking.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Multi-factor authentication blocks many credential-stuffing attempts."],
      realWorldRelevance: "Strong grasp of reporting phishing reduces rework, supports defensible records, and speeds collaboration across Phishing Defense.",
    }
  ),
  chapter(
    "simulations",
    6,
    "Phishing Simulations",
    [
    section(
      "simulations-s1",
      "6.1 Phishing Simulations — Foundations and vocabulary",
      ["Phishing succeeds on urgency and impersonation; technical controls help, but reporting channels and verification habits stop most losses. Phishing Simulations is a foundation in Phishing Defense because confidentiality, integrity, and availability frame nearly every security decision. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Vendor risk matters because your data lives on their systems too. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain phishing simulations aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat phishing simulations as a shared model for decisions. Security awareness training must be short, frequent, and role-specific. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Phishing exploits urgency and authority—not only technical vulnerabilities."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "simulations-s2",
      "6.2 Phishing Simulations — How professionals apply this in practice",
      ["Professionals rarely dispute whether phishing simulations exists—they dispute how vendor risk matters because your data lives on their systems too. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Security awareness training must be short, frequent, and role-specific.","When stakes rise, pause for a second opinion or formal review. Backups are worthless if restores are never tested before ransomware strikes. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Logging and monitoring turn attacks into detectable patterns. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Patching closes known doors but cannot fix social engineering."]
      }
    ),
    section(
      "simulations-s3",
      "6.3 Phishing Simulations — Workplace scenarios and documentation",
      ["Scenario: a teammate cites phishing simulations in a meeting, but details in the packet do not match the textbook example. Security awareness training must be short, frequent, and role-specific. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Backups are worthless if restores are never tested before ransomware strikes.","Good documentation states facts, cites the framework, and records the decision. Logging and monitoring turn attacks into detectable patterns. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Multi-factor authentication blocks many credential-stuffing attempts. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking."]
      }
    ),
    section(
      "simulations-s4",
      "6.4 Phishing Simulations — Common mistakes and how to avoid them",
      ["Common mistakes around phishing simulations include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Backups are worthless if restores are never tested before ransomware strikes.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Logging and monitoring turn attacks into detectable patterns. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Multi-factor authentication blocks many credential-stuffing attempts. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Incident response phases include preparation, detection, containment, recovery, lessons learned. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    ),
    section(
      "simulations-s5",
      "6.5 Phishing Simulations — Putting the chapter together",
      ["This chapter’s through-line is simple: Phishing Simulations connects principles to accountable action. Logging and monitoring turn attacks into detectable patterns.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Multi-factor authentication blocks many credential-stuffing attempts. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits phishing simulations in your field. Incident response phases include preparation, detection, containment, recovery, lessons learned. Compliance frameworks map controls to risks but do not replace thinking."], {
        bulletPoints: ["Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Patching closes known doors but cannot fix social engineering."]
      }
    )
    ],
    {
      learningObjectives: ["Define phishing simulations and explain why it matters in Phishing Defense","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Phishing Simulations: Phishing succeeds on urgency and impersonation; technical controls help, but reporting channels and verification habits stop most losses. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."],
      realWorldRelevance: "Strong grasp of phishing simulations reduces rework, supports defensible records, and speeds collaboration across Phishing Defense.",
    }
  ),
  chapter(
    "user-training",
    7,
    "Security Awareness",
    [
    section(
      "user-training-s1",
      "7.1 Security Awareness — Foundations and vocabulary",
      ["Security Awareness is a foundation in Phishing Defense because multi-factor authentication blocks many credential-stuffing attempts. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Incident response phases include preparation, detection, containment, recovery, lessons learned. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain security awareness aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat security awareness as a shared model for decisions. Compliance frameworks map controls to risks but do not replace thinking. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Compliance frameworks map controls to risks but do not replace thinking.","Security awareness training must be short, frequent, and role-specific.","Confidentiality, integrity, and availability frame nearly every security decision.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "user-training-s2",
      "7.2 Security Awareness — How professionals apply this in practice",
      ["Professionals rarely dispute whether security awareness exists—they dispute how logging and monitoring turn attacks into detectable patterns. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Multi-factor authentication blocks many credential-stuffing attempts.","When stakes rise, pause for a second opinion or formal review. Incident response phases include preparation, detection, containment, recovery, lessons learned. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Compliance frameworks map controls to risks but do not replace thinking. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Security awareness training must be short, frequent, and role-specific.","Confidentiality, integrity, and availability frame nearly every security decision.","Patching closes known doors but cannot fix social engineering."]
      }
    ),
    section(
      "user-training-s3",
      "7.3 Security Awareness — Workplace scenarios and documentation",
      ["Scenario: a teammate cites security awareness in a meeting, but details in the packet do not match the textbook example. Backups are worthless if restores are never tested before ransomware strikes. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Logging and monitoring turn attacks into detectable patterns.","Good documentation states facts, cites the framework, and records the decision. Multi-factor authentication blocks many credential-stuffing attempts. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Incident response phases include preparation, detection, containment, recovery, lessons learned. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Confidentiality, integrity, and availability frame nearly every security decision.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen."]
      }
    ),
    section(
      "user-training-s4",
      "7.4 Security Awareness — Common mistakes and how to avoid them",
      ["Common mistakes around security awareness include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Phishing exploits urgency and authority—not only technical vulnerabilities.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Backups are worthless if restores are never tested before ransomware strikes. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Logging and monitoring turn attacks into detectable patterns. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Multi-factor authentication blocks many credential-stuffing attempts. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Compliance frameworks map controls to risks but do not replace thinking.","Security awareness training must be short, frequent, and role-specific.","Confidentiality, integrity, and availability frame nearly every security decision.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths."]
      }
    ),
    section(
      "user-training-s5",
      "7.5 Security Awareness — Putting the chapter together",
      ["This chapter’s through-line is simple: Security Awareness connects principles to accountable action. Vendor risk matters because your data lives on their systems too.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Phishing exploits urgency and authority—not only technical vulnerabilities. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits security awareness in your field. Backups are worthless if restores are never tested before ransomware strikes. Logging and monitoring turn attacks into detectable patterns."], {
        bulletPoints: ["Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Security awareness training must be short, frequent, and role-specific.","Confidentiality, integrity, and availability frame nearly every security decision.","Patching closes known doors but cannot fix social engineering."]
      }
    )
    ],
    {
      learningObjectives: ["Define security awareness and explain why it matters in Phishing Defense","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Security Awareness connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Compliance frameworks map controls to risks but do not replace thinking.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Security awareness training must be short, frequent, and role-specific.","Compliance frameworks map controls to risks but do not replace thinking.","Incident response phases include preparation, detection, containment, recovery, lessons learned."],
      realWorldRelevance: "Strong grasp of security awareness reduces rework, supports defensible records, and speeds collaboration across Phishing Defense.",
    }
  ),
  chapter(
    "recovery-phish",
    8,
    "After a Click",
    [
    section(
      "recovery-phish-s1",
      "8.1 After a Click — Foundations and vocabulary",
      ["After a Click is a foundation in Phishing Defense because segmentation keeps flat networks from becoming easy lateral movement paths. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Least privilege limits blast radius when credentials are stolen. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain after a click aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat after a click as a shared model for decisions. Confidentiality, integrity, and availability frame nearly every security decision. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "recovery-phish-s2",
      "8.2 After a Click — How professionals apply this in practice",
      ["Professionals rarely dispute whether after a click exists—they dispute how patching closes known doors but cannot fix social engineering. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Segmentation keeps flat networks from becoming easy lateral movement paths.","When stakes rise, pause for a second opinion or formal review. Least privilege limits blast radius when credentials are stolen. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Confidentiality, integrity, and availability frame nearly every security decision. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."]
      }
    ),
    section(
      "recovery-phish-s3",
      "8.3 After a Click — Workplace scenarios and documentation",
      ["Scenario: a teammate cites after a click in a meeting, but details in the packet do not match the textbook example. Compliance frameworks map controls to risks but do not replace thinking. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Patching closes known doors but cannot fix social engineering.","Good documentation states facts, cites the framework, and records the decision. Segmentation keeps flat networks from becoming easy lateral movement paths. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Least privilege limits blast radius when credentials are stolen. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    ),
    section(
      "recovery-phish-s4",
      "8.4 After a Click — Common mistakes and how to avoid them",
      ["Common mistakes around after a click include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Incident response phases include preparation, detection, containment, recovery, lessons learned.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Compliance frameworks map controls to risks but do not replace thinking. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Patching closes known doors but cannot fix social engineering. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Segmentation keeps flat networks from becoming easy lateral movement paths. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    ),
    section(
      "recovery-phish-s5",
      "8.5 After a Click — Putting the chapter together",
      ["This chapter’s through-line is simple: After a Click connects principles to accountable action. Multi-factor authentication blocks many credential-stuffing attempts.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Incident response phases include preparation, detection, containment, recovery, lessons learned. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits after a click in your field. Compliance frameworks map controls to risks but do not replace thinking. Patching closes known doors but cannot fix social engineering."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."]
      }
    )
    ],
    {
      learningObjectives: ["Define after a click and explain why it matters in Phishing Defense","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "After a Click connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."],
      realWorldRelevance: "Strong grasp of after a click reduces rework, supports defensible records, and speeds collaboration across Phishing Defense.",
    }
  )
];
