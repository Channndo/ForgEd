import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const THREAT_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Threat Awareness",
  subtitle: "ForgEd workforce textbook — Threat Awareness",
  paragraphs: [
    "This ForgEd digital textbook presents Threat Awareness at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Follow organizational security policy; this course does not replace SOC procedures or certifications alone.",
  ],
};

export const THREAT_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "threat-landscape",
    1,
    "Threat Landscape",
    [
    section(
      "threat-landscape-s1",
      "1.1 Threat Landscape — Foundations and vocabulary",
      ["Threat Landscape is a foundation in Threat Awareness because multi-factor authentication blocks many credential-stuffing attempts. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Incident response phases include preparation, detection, containment, recovery, lessons learned. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain threat landscape aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat threat landscape as a shared model for decisions. Compliance frameworks map controls to risks but do not replace thinking. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "threat-landscape-s2",
      "1.2 Threat Landscape — How professionals apply this in practice",
      ["Professionals rarely dispute whether threat landscape exists—they dispute how logging and monitoring turn attacks into detectable patterns. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Multi-factor authentication blocks many credential-stuffing attempts.","When stakes rise, pause for a second opinion or formal review. Incident response phases include preparation, detection, containment, recovery, lessons learned. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Compliance frameworks map controls to risks but do not replace thinking. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    ),
    section(
      "threat-landscape-s3",
      "1.3 Threat Landscape — Workplace scenarios and documentation",
      ["Scenario: a teammate cites threat landscape in a meeting, but details in the packet do not match the textbook example. Backups are worthless if restores are never tested before ransomware strikes. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Logging and monitoring turn attacks into detectable patterns.","Good documentation states facts, cites the framework, and records the decision. Multi-factor authentication blocks many credential-stuffing attempts. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Incident response phases include preparation, detection, containment, recovery, lessons learned. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."]
      }
    ),
    section(
      "threat-landscape-s4",
      "1.4 Threat Landscape — Common mistakes and how to avoid them",
      ["Common mistakes around threat landscape include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Security awareness training must be short, frequent, and role-specific.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Backups are worthless if restores are never tested before ransomware strikes. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Logging and monitoring turn attacks into detectable patterns. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Multi-factor authentication blocks many credential-stuffing attempts. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    ),
    section(
      "threat-landscape-s5",
      "1.5 Threat Landscape — Putting the chapter together",
      ["This chapter’s through-line is simple: Threat Landscape connects principles to accountable action. Phishing exploits urgency and authority—not only technical vulnerabilities.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Security awareness training must be short, frequent, and role-specific. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits threat landscape in your field. Backups are worthless if restores are never tested before ransomware strikes. Logging and monitoring turn attacks into detectable patterns."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    )
    ],
    {
      learningObjectives: ["Define threat landscape and explain why it matters in Threat Awareness","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Threat Landscape connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen."],
      realWorldRelevance: "Strong grasp of threat landscape reduces rework, supports defensible records, and speeds collaboration across Threat Awareness.",
    }
  ),
  chapter(
    "malware-types",
    2,
    "Malware Types",
    [
    section(
      "malware-types-s1",
      "2.1 Malware Types — Foundations and vocabulary",
      ["Malware Types is a foundation in Threat Awareness because security awareness training must be short, frequent, and role-specific. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Backups are worthless if restores are never tested before ransomware strikes. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain malware types aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat malware types as a shared model for decisions. Logging and monitoring turn attacks into detectable patterns. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "malware-types-s2",
      "2.2 Malware Types — How professionals apply this in practice",
      ["Professionals rarely dispute whether malware types exists—they dispute how backups are worthless if restores are never tested before ransomware strikes. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Logging and monitoring turn attacks into detectable patterns.","When stakes rise, pause for a second opinion or formal review. Multi-factor authentication blocks many credential-stuffing attempts. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Incident response phases include preparation, detection, containment, recovery, lessons learned. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision."]
      }
    ),
    section(
      "malware-types-s3",
      "2.3 Malware Types — Workplace scenarios and documentation",
      ["Scenario: a teammate cites malware types in a meeting, but details in the packet do not match the textbook example. Logging and monitoring turn attacks into detectable patterns. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Multi-factor authentication blocks many credential-stuffing attempts.","Good documentation states facts, cites the framework, and records the decision. Incident response phases include preparation, detection, containment, recovery, lessons learned. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Compliance frameworks map controls to risks but do not replace thinking. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths."]
      }
    ),
    section(
      "malware-types-s4",
      "2.4 Malware Types — Common mistakes and how to avoid them",
      ["Common mistakes around malware types include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Multi-factor authentication blocks many credential-stuffing attempts.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Incident response phases include preparation, detection, containment, recovery, lessons learned. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Compliance frameworks map controls to risks but do not replace thinking. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Patching closes known doors but cannot fix social engineering. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen."]
      }
    ),
    section(
      "malware-types-s5",
      "2.5 Malware Types — Putting the chapter together",
      ["This chapter’s through-line is simple: Malware Types connects principles to accountable action. Incident response phases include preparation, detection, containment, recovery, lessons learned.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Compliance frameworks map controls to risks but do not replace thinking. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits malware types in your field. Patching closes known doors but cannot fix social engineering. Segmentation keeps flat networks from becoming easy lateral movement paths."], {
        bulletPoints: ["Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision."]
      }
    )
    ],
    {
      learningObjectives: ["Define malware types and explain why it matters in Threat Awareness","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Malware Types connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking."],
      realWorldRelevance: "Strong grasp of malware types reduces rework, supports defensible records, and speeds collaboration across Threat Awareness.",
    }
  ),
  chapter(
    "ransomware",
    3,
    "Ransomware",
    [
    section(
      "ransomware-s1",
      "3.1 Ransomware — Foundations and vocabulary",
      ["Ransomware is a foundation in Threat Awareness because security awareness training must be short, frequent, and role-specific. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Logging and monitoring turn attacks into detectable patterns. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ransomware aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ransomware as a shared model for decisions. Multi-factor authentication blocks many credential-stuffing attempts. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "ransomware-s2",
      "3.2 Ransomware — How professionals apply this in practice",
      ["Professionals rarely dispute whether ransomware exists—they dispute how phishing exploits urgency and authority—not only technical vulnerabilities. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Security awareness training must be short, frequent, and role-specific.","When stakes rise, pause for a second opinion or formal review. Logging and monitoring turn attacks into detectable patterns. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Multi-factor authentication blocks many credential-stuffing attempts. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    ),
    section(
      "ransomware-s3",
      "3.3 Ransomware — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ransomware in a meeting, but details in the packet do not match the textbook example. Vendor risk matters because your data lives on their systems too. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Phishing exploits urgency and authority—not only technical vulnerabilities.","Good documentation states facts, cites the framework, and records the decision. Security awareness training must be short, frequent, and role-specific. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Logging and monitoring turn attacks into detectable patterns. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."]
      }
    ),
    section(
      "ransomware-s4",
      "3.4 Ransomware — Common mistakes and how to avoid them",
      ["Common mistakes around ransomware include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Confidentiality, integrity, and availability frame nearly every security decision.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Vendor risk matters because your data lives on their systems too. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Phishing exploits urgency and authority—not only technical vulnerabilities. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Security awareness training must be short, frequent, and role-specific. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking."]
      }
    ),
    section(
      "ransomware-s5",
      "3.5 Ransomware — Putting the chapter together",
      ["This chapter’s through-line is simple: Ransomware connects principles to accountable action. Least privilege limits blast radius when credentials are stolen.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Confidentiality, integrity, and availability frame nearly every security decision. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ransomware in your field. Vendor risk matters because your data lives on their systems too. Phishing exploits urgency and authority—not only technical vulnerabilities."], {
        bulletPoints: ["Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    )
    ],
    {
      learningObjectives: ["Define ransomware and explain why it matters in Threat Awareness","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Ransomware connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Security awareness training must be short, frequent, and role-specific.","Logging and monitoring turn attacks into detectable patterns.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Logging and monitoring turn attacks into detectable patterns."],
      realWorldRelevance: "Strong grasp of ransomware reduces rework, supports defensible records, and speeds collaboration across Threat Awareness.",
    }
  ),
  chapter(
    "insider-threats",
    4,
    "Insider Threats",
    [
    section(
      "insider-threats-s1",
      "4.1 Insider Threats — Foundations and vocabulary",
      ["Insider Threats is a foundation in Threat Awareness because multi-factor authentication blocks many credential-stuffing attempts. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Incident response phases include preparation, detection, containment, recovery, lessons learned. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain insider threats aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat insider threats as a shared model for decisions. Compliance frameworks map controls to risks but do not replace thinking. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "insider-threats-s2",
      "4.2 Insider Threats — How professionals apply this in practice",
      ["Professionals rarely dispute whether insider threats exists—they dispute how incident response phases include preparation, detection, containment, recovery, lessons learned. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Compliance frameworks map controls to risks but do not replace thinking.","When stakes rise, pause for a second opinion or formal review. Patching closes known doors but cannot fix social engineering. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Segmentation keeps flat networks from becoming easy lateral movement paths. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    ),
    section(
      "insider-threats-s3",
      "4.3 Insider Threats — Workplace scenarios and documentation",
      ["Scenario: a teammate cites insider threats in a meeting, but details in the packet do not match the textbook example. Compliance frameworks map controls to risks but do not replace thinking. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Patching closes known doors but cannot fix social engineering.","Good documentation states facts, cites the framework, and records the decision. Segmentation keeps flat networks from becoming easy lateral movement paths. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Least privilege limits blast radius when credentials are stolen. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    ),
    section(
      "insider-threats-s4",
      "4.4 Insider Threats — Common mistakes and how to avoid them",
      ["Common mistakes around insider threats include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Patching closes known doors but cannot fix social engineering.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Segmentation keeps flat networks from becoming easy lateral movement paths. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Least privilege limits blast radius when credentials are stolen. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Confidentiality, integrity, and availability frame nearly every security decision. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    ),
    section(
      "insider-threats-s5",
      "4.5 Insider Threats — Putting the chapter together",
      ["This chapter’s through-line is simple: Insider Threats connects principles to accountable action. Segmentation keeps flat networks from becoming easy lateral movement paths.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Least privilege limits blast radius when credentials are stolen. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits insider threats in your field. Confidentiality, integrity, and availability frame nearly every security decision. Vendor risk matters because your data lives on their systems too."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    )
    ],
    {
      learningObjectives: ["Define insider threats and explain why it matters in Threat Awareness","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Insider Threats connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."],
      realWorldRelevance: "Strong grasp of insider threats reduces rework, supports defensible records, and speeds collaboration across Threat Awareness.",
    }
  ),
  chapter(
    "supply-chain",
    5,
    "Supply Chain Risk",
    [
    section(
      "supply-chain-s1",
      "5.1 Supply Chain Risk — Foundations and vocabulary",
      ["Supply Chain Risk is a foundation in Threat Awareness because segmentation keeps flat networks from becoming easy lateral movement paths. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Least privilege limits blast radius when credentials are stolen. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain supply chain risk aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat supply chain risk as a shared model for decisions. Confidentiality, integrity, and availability frame nearly every security decision. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "supply-chain-s2",
      "5.2 Supply Chain Risk — How professionals apply this in practice",
      ["Professionals rarely dispute whether supply chain risk exists—they dispute how patching closes known doors but cannot fix social engineering. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Segmentation keeps flat networks from becoming easy lateral movement paths.","When stakes rise, pause for a second opinion or formal review. Least privilege limits blast radius when credentials are stolen. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Confidentiality, integrity, and availability frame nearly every security decision. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    ),
    section(
      "supply-chain-s3",
      "5.3 Supply Chain Risk — Workplace scenarios and documentation",
      ["Scenario: a teammate cites supply chain risk in a meeting, but details in the packet do not match the textbook example. Compliance frameworks map controls to risks but do not replace thinking. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Patching closes known doors but cannot fix social engineering.","Good documentation states facts, cites the framework, and records the decision. Segmentation keeps flat networks from becoming easy lateral movement paths. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Least privilege limits blast radius when credentials are stolen. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    ),
    section(
      "supply-chain-s4",
      "5.4 Supply Chain Risk — Common mistakes and how to avoid them",
      ["Common mistakes around supply chain risk include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Vendor risk matters because your data lives on their systems too.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Compliance frameworks map controls to risks but do not replace thinking. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Patching closes known doors but cannot fix social engineering. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Segmentation keeps flat networks from becoming easy lateral movement paths. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    ),
    section(
      "supply-chain-s5",
      "5.5 Supply Chain Risk — Putting the chapter together",
      ["This chapter’s through-line is simple: Supply Chain Risk connects principles to accountable action. Incident response phases include preparation, detection, containment, recovery, lessons learned.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Vendor risk matters because your data lives on their systems too. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits supply chain risk in your field. Compliance frameworks map controls to risks but do not replace thinking. Patching closes known doors but cannot fix social engineering."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    )
    ],
    {
      learningObjectives: ["Define supply chain risk and explain why it matters in Threat Awareness","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Supply Chain Risk connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen."],
      realWorldRelevance: "Strong grasp of supply chain risk reduces rework, supports defensible records, and speeds collaboration across Threat Awareness.",
    }
  ),
  chapter(
    "attack-vectors",
    6,
    "Attack Vectors",
    [
    section(
      "attack-vectors-s1",
      "6.1 Attack Vectors — Foundations and vocabulary",
      ["Attack Vectors is a foundation in Threat Awareness because confidentiality, integrity, and availability frame nearly every security decision. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Vendor risk matters because your data lives on their systems too. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain attack vectors aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat attack vectors as a shared model for decisions. Phishing exploits urgency and authority—not only technical vulnerabilities. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "attack-vectors-s2",
      "6.2 Attack Vectors — How professionals apply this in practice",
      ["Professionals rarely dispute whether attack vectors exists—they dispute how least privilege limits blast radius when credentials are stolen. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Confidentiality, integrity, and availability frame nearly every security decision.","When stakes rise, pause for a second opinion or formal review. Vendor risk matters because your data lives on their systems too. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Phishing exploits urgency and authority—not only technical vulnerabilities. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    ),
    section(
      "attack-vectors-s3",
      "6.3 Attack Vectors — Workplace scenarios and documentation",
      ["Scenario: a teammate cites attack vectors in a meeting, but details in the packet do not match the textbook example. Segmentation keeps flat networks from becoming easy lateral movement paths. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Least privilege limits blast radius when credentials are stolen.","Good documentation states facts, cites the framework, and records the decision. Confidentiality, integrity, and availability frame nearly every security decision. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Vendor risk matters because your data lives on their systems too. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    ),
    section(
      "attack-vectors-s4",
      "6.4 Attack Vectors — Common mistakes and how to avoid them",
      ["Common mistakes around attack vectors include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Patching closes known doors but cannot fix social engineering.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Segmentation keeps flat networks from becoming easy lateral movement paths. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Least privilege limits blast radius when credentials are stolen. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Confidentiality, integrity, and availability frame nearly every security decision. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    ),
    section(
      "attack-vectors-s5",
      "6.5 Attack Vectors — Putting the chapter together",
      ["This chapter’s through-line is simple: Attack Vectors connects principles to accountable action. Logging and monitoring turn attacks into detectable patterns.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Patching closes known doors but cannot fix social engineering. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits attack vectors in your field. Segmentation keeps flat networks from becoming easy lateral movement paths. Least privilege limits blast radius when credentials are stolen."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    )
    ],
    {
      learningObjectives: ["Define attack vectors and explain why it matters in Threat Awareness","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Attack Vectors connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."],
      realWorldRelevance: "Strong grasp of attack vectors reduces rework, supports defensible records, and speeds collaboration across Threat Awareness.",
    }
  ),
  chapter(
    "threat-intel",
    7,
    "Threat Intelligence Intro",
    [
    section(
      "threat-intel-s1",
      "7.1 Threat Intelligence Intro — Foundations and vocabulary",
      ["Threat Intelligence Intro is a foundation in Threat Awareness because compliance frameworks map controls to risks but do not replace thinking. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Patching closes known doors but cannot fix social engineering. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain threat intelligence intro aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat threat intelligence intro as a shared model for decisions. Segmentation keeps flat networks from becoming easy lateral movement paths. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "threat-intel-s2",
      "7.2 Threat Intelligence Intro — How professionals apply this in practice",
      ["Professionals rarely dispute whether threat intelligence intro exists—they dispute how patching closes known doors but cannot fix social engineering. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Segmentation keeps flat networks from becoming easy lateral movement paths.","When stakes rise, pause for a second opinion or formal review. Least privilege limits blast radius when credentials are stolen. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Confidentiality, integrity, and availability frame nearly every security decision. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen."]
      }
    ),
    section(
      "threat-intel-s3",
      "7.3 Threat Intelligence Intro — Workplace scenarios and documentation",
      ["Scenario: a teammate cites threat intelligence intro in a meeting, but details in the packet do not match the textbook example. Segmentation keeps flat networks from becoming easy lateral movement paths. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Least privilege limits blast radius when credentials are stolen.","Good documentation states facts, cites the framework, and records the decision. Confidentiality, integrity, and availability frame nearly every security decision. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Vendor risk matters because your data lives on their systems too. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering."]
      }
    ),
    section(
      "threat-intel-s4",
      "7.4 Threat Intelligence Intro — Common mistakes and how to avoid them",
      ["Common mistakes around threat intelligence intro include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Least privilege limits blast radius when credentials are stolen.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Confidentiality, integrity, and availability frame nearly every security decision. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Vendor risk matters because your data lives on their systems too. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Phishing exploits urgency and authority—not only technical vulnerabilities. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths."]
      }
    ),
    section(
      "threat-intel-s5",
      "7.5 Threat Intelligence Intro — Putting the chapter together",
      ["This chapter’s through-line is simple: Threat Intelligence Intro connects principles to accountable action. Confidentiality, integrity, and availability frame nearly every security decision.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Vendor risk matters because your data lives on their systems too. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits threat intelligence intro in your field. Phishing exploits urgency and authority—not only technical vulnerabilities. Security awareness training must be short, frequent, and role-specific."], {
        bulletPoints: ["Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen."]
      }
    )
    ],
    {
      learningObjectives: ["Define threat intelligence intro and explain why it matters in Threat Awareness","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Threat Intelligence Intro connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."],
      realWorldRelevance: "Strong grasp of threat intelligence intro reduces rework, supports defensible records, and speeds collaboration across Threat Awareness.",
    }
  ),
  chapter(
    "reporting-threats",
    8,
    "Reporting Threats",
    [
    section(
      "reporting-threats-s1",
      "8.1 Reporting Threats — Foundations and vocabulary",
      ["Reporting Threats is a foundation in Threat Awareness because compliance frameworks map controls to risks but do not replace thinking. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Patching closes known doors but cannot fix social engineering. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain reporting threats aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat reporting threats as a shared model for decisions. Segmentation keeps flat networks from becoming easy lateral movement paths. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "reporting-threats-s2",
      "8.2 Reporting Threats — How professionals apply this in practice",
      ["Professionals rarely dispute whether reporting threats exists—they dispute how incident response phases include preparation, detection, containment, recovery, lessons learned. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Compliance frameworks map controls to risks but do not replace thinking.","When stakes rise, pause for a second opinion or formal review. Patching closes known doors but cannot fix social engineering. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Segmentation keeps flat networks from becoming easy lateral movement paths. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering."]
      }
    ),
    section(
      "reporting-threats-s3",
      "8.3 Reporting Threats — Workplace scenarios and documentation",
      ["Scenario: a teammate cites reporting threats in a meeting, but details in the packet do not match the textbook example. Multi-factor authentication blocks many credential-stuffing attempts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Incident response phases include preparation, detection, containment, recovery, lessons learned.","Good documentation states facts, cites the framework, and records the decision. Compliance frameworks map controls to risks but do not replace thinking. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Patching closes known doors but cannot fix social engineering. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen."]
      }
    ),
    section(
      "reporting-threats-s4",
      "8.4 Reporting Threats — Common mistakes and how to avoid them",
      ["Common mistakes around reporting threats include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Logging and monitoring turn attacks into detectable patterns.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Multi-factor authentication blocks many credential-stuffing attempts. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Incident response phases include preparation, detection, containment, recovery, lessons learned. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Compliance frameworks map controls to risks but do not replace thinking. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths."]
      }
    ),
    section(
      "reporting-threats-s5",
      "8.5 Reporting Threats — Putting the chapter together",
      ["This chapter’s through-line is simple: Reporting Threats connects principles to accountable action. Backups are worthless if restores are never tested before ransomware strikes.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Logging and monitoring turn attacks into detectable patterns. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits reporting threats in your field. Multi-factor authentication blocks many credential-stuffing attempts. Incident response phases include preparation, detection, containment, recovery, lessons learned."], {
        bulletPoints: ["Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering."]
      }
    )
    ],
    {
      learningObjectives: ["Define reporting threats and explain why it matters in Threat Awareness","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Reporting Threats connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Multi-factor authentication blocks many credential-stuffing attempts.","Logging and monitoring turn attacks into detectable patterns.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Multi-factor authentication blocks many credential-stuffing attempts.","Logging and monitoring turn attacks into detectable patterns."],
      realWorldRelevance: "Strong grasp of reporting threats reduces rework, supports defensible records, and speeds collaboration across Threat Awareness.",
    }
  )
];
