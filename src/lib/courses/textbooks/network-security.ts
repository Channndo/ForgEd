import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const NETSEC_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Network Security",
  subtitle: "ForgEd workforce textbook — Network Security",
  paragraphs: [
    "This ForgEd digital textbook presents Network Security at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Follow organizational security policy; this course does not replace SOC procedures or certifications alone.",
  ],
};

export const NETSEC_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "firewalls",
    1,
    "Firewalls",
    [
    section(
      "firewalls-s1",
      "1.1 Firewalls — Foundations and vocabulary",
      ["Firewalls is a foundation in Network Security because confidentiality, integrity, and availability frame nearly every security decision. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Vendor risk matters because your data lives on their systems too. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain firewalls aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat firewalls as a shared model for decisions. Phishing exploits urgency and authority—not only technical vulnerabilities. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "firewalls-s2",
      "1.2 Firewalls — How professionals apply this in practice",
      ["Professionals rarely dispute whether firewalls exists—they dispute how least privilege limits blast radius when credentials are stolen. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Confidentiality, integrity, and availability frame nearly every security decision.","When stakes rise, pause for a second opinion or formal review. Vendor risk matters because your data lives on their systems too. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Phishing exploits urgency and authority—not only technical vulnerabilities. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."]
      }
    ),
    section(
      "firewalls-s3",
      "1.3 Firewalls — Workplace scenarios and documentation",
      ["Scenario: a teammate cites firewalls in a meeting, but details in the packet do not match the textbook example. Segmentation keeps flat networks from becoming easy lateral movement paths. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Least privilege limits blast radius when credentials are stolen.","Good documentation states facts, cites the framework, and records the decision. Confidentiality, integrity, and availability frame nearly every security decision. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Vendor risk matters because your data lives on their systems too. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen."]
      }
    ),
    section(
      "firewalls-s4",
      "1.4 Firewalls — Common mistakes and how to avoid them",
      ["Common mistakes around firewalls include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Patching closes known doors but cannot fix social engineering.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Segmentation keeps flat networks from becoming easy lateral movement paths. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Least privilege limits blast radius when credentials are stolen. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Confidentiality, integrity, and availability frame nearly every security decision. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision."]
      }
    ),
    section(
      "firewalls-s5",
      "1.5 Firewalls — Putting the chapter together",
      ["This chapter’s through-line is simple: Firewalls connects principles to accountable action. Compliance frameworks map controls to risks but do not replace thinking.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Patching closes known doors but cannot fix social engineering. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits firewalls in your field. Segmentation keeps flat networks from becoming easy lateral movement paths. Least privilege limits blast radius when credentials are stolen."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."]
      }
    )
    ],
    {
      learningObjectives: ["Define firewalls and explain why it matters in Network Security","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Firewalls connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering."],
      realWorldRelevance: "Strong grasp of firewalls reduces rework, supports defensible records, and speeds collaboration across Network Security.",
    }
  ),
  chapter(
    "segmentation",
    2,
    "Network Segmentation",
    [
    section(
      "segmentation-s1",
      "2.1 Network Segmentation — Foundations and vocabulary",
      ["Network design trades convenience for segmentation—flat LANs let one stolen laptop become a company-wide event. Network Segmentation is a foundation in Network Security because vendor risk matters because your data lives on their systems too. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Phishing exploits urgency and authority—not only technical vulnerabilities. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain network segmentation aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat network segmentation as a shared model for decisions. Security awareness training must be short, frequent, and role-specific. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "segmentation-s2",
      "2.2 Network Segmentation — How professionals apply this in practice",
      ["Professionals rarely dispute whether network segmentation exists—they dispute how phishing exploits urgency and authority—not only technical vulnerabilities. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Security awareness training must be short, frequent, and role-specific.","When stakes rise, pause for a second opinion or formal review. Backups are worthless if restores are never tested before ransomware strikes. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Logging and monitoring turn attacks into detectable patterns. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    ),
    section(
      "segmentation-s3",
      "2.3 Network Segmentation — Workplace scenarios and documentation",
      ["Scenario: a teammate cites network segmentation in a meeting, but details in the packet do not match the textbook example. Security awareness training must be short, frequent, and role-specific. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Backups are worthless if restores are never tested before ransomware strikes.","Good documentation states facts, cites the framework, and records the decision. Logging and monitoring turn attacks into detectable patterns. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Multi-factor authentication blocks many credential-stuffing attempts. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    ),
    section(
      "segmentation-s4",
      "2.4 Network Segmentation — Common mistakes and how to avoid them",
      ["Common mistakes around network segmentation include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Backups are worthless if restores are never tested before ransomware strikes.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Logging and monitoring turn attacks into detectable patterns. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Multi-factor authentication blocks many credential-stuffing attempts. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Incident response phases include preparation, detection, containment, recovery, lessons learned. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    ),
    section(
      "segmentation-s5",
      "2.5 Network Segmentation — Putting the chapter together",
      ["This chapter’s through-line is simple: Network Segmentation connects principles to accountable action. Logging and monitoring turn attacks into detectable patterns.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Multi-factor authentication blocks many credential-stuffing attempts. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits network segmentation in your field. Incident response phases include preparation, detection, containment, recovery, lessons learned. Compliance frameworks map controls to risks but do not replace thinking."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    )
    ],
    {
      learningObjectives: ["Define network segmentation and explain why it matters in Network Security","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Network Segmentation: Network design trades convenience for segmentation—flat LANs let one stolen laptop become a company-wide event. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Vendor risk matters because your data lives on their systems too.","Confidentiality, integrity, and availability frame nearly every security decision.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Vendor risk matters because your data lives on their systems too.","Confidentiality, integrity, and availability frame nearly every security decision."],
      realWorldRelevance: "Strong grasp of network segmentation reduces rework, supports defensible records, and speeds collaboration across Network Security.",
    }
  ),
  chapter(
    "zt-intro",
    3,
    "Zero Trust Intro",
    [
    section(
      "zt-intro-s1",
      "3.1 Zero Trust Intro — Foundations and vocabulary",
      ["Zero Trust Intro is a foundation in Network Security because patching closes known doors but cannot fix social engineering. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Segmentation keeps flat networks from becoming easy lateral movement paths. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain zero trust intro aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat zero trust intro as a shared model for decisions. Least privilege limits blast radius when credentials are stolen. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "zt-intro-s2",
      "3.2 Zero Trust Intro — How professionals apply this in practice",
      ["Professionals rarely dispute whether zero trust intro exists—they dispute how compliance frameworks map controls to risks but do not replace thinking. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Patching closes known doors but cannot fix social engineering.","When stakes rise, pause for a second opinion or formal review. Segmentation keeps flat networks from becoming easy lateral movement paths. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Least privilege limits blast radius when credentials are stolen. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths."]
      }
    ),
    section(
      "zt-intro-s3",
      "3.3 Zero Trust Intro — Workplace scenarios and documentation",
      ["Scenario: a teammate cites zero trust intro in a meeting, but details in the packet do not match the textbook example. Incident response phases include preparation, detection, containment, recovery, lessons learned. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Compliance frameworks map controls to risks but do not replace thinking.","Good documentation states facts, cites the framework, and records the decision. Patching closes known doors but cannot fix social engineering. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Segmentation keeps flat networks from becoming easy lateral movement paths. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking."]
      }
    ),
    section(
      "zt-intro-s4",
      "3.4 Zero Trust Intro — Common mistakes and how to avoid them",
      ["Common mistakes around zero trust intro include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Multi-factor authentication blocks many credential-stuffing attempts.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Incident response phases include preparation, detection, containment, recovery, lessons learned. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Compliance frameworks map controls to risks but do not replace thinking. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Patching closes known doors but cannot fix social engineering. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering."]
      }
    ),
    section(
      "zt-intro-s5",
      "3.5 Zero Trust Intro — Putting the chapter together",
      ["This chapter’s through-line is simple: Zero Trust Intro connects principles to accountable action. Logging and monitoring turn attacks into detectable patterns.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Multi-factor authentication blocks many credential-stuffing attempts. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits zero trust intro in your field. Incident response phases include preparation, detection, containment, recovery, lessons learned. Compliance frameworks map controls to risks but do not replace thinking."], {
        bulletPoints: ["Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths."]
      }
    )
    ],
    {
      learningObjectives: ["Define zero trust intro and explain why it matters in Network Security","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Zero Trust Intro connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."],
      realWorldRelevance: "Strong grasp of zero trust intro reduces rework, supports defensible records, and speeds collaboration across Network Security.",
    }
  ),
  chapter(
    "remote-access",
    4,
    "Secure Remote Access",
    [
    section(
      "remote-access-s1",
      "4.1 Secure Remote Access — Foundations and vocabulary",
      ["Secure Remote Access is a foundation in Network Security because compliance frameworks map controls to risks but do not replace thinking. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Patching closes known doors but cannot fix social engineering. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain secure remote access aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat secure remote access as a shared model for decisions. Segmentation keeps flat networks from becoming easy lateral movement paths. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "remote-access-s2",
      "4.2 Secure Remote Access — How professionals apply this in practice",
      ["Professionals rarely dispute whether secure remote access exists—they dispute how patching closes known doors but cannot fix social engineering. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Segmentation keeps flat networks from becoming easy lateral movement paths.","When stakes rise, pause for a second opinion or formal review. Least privilege limits blast radius when credentials are stolen. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Confidentiality, integrity, and availability frame nearly every security decision. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    ),
    section(
      "remote-access-s3",
      "4.3 Secure Remote Access — Workplace scenarios and documentation",
      ["Scenario: a teammate cites secure remote access in a meeting, but details in the packet do not match the textbook example. Segmentation keeps flat networks from becoming easy lateral movement paths. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Least privilege limits blast radius when credentials are stolen.","Good documentation states facts, cites the framework, and records the decision. Confidentiality, integrity, and availability frame nearly every security decision. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Vendor risk matters because your data lives on their systems too. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    ),
    section(
      "remote-access-s4",
      "4.4 Secure Remote Access — Common mistakes and how to avoid them",
      ["Common mistakes around secure remote access include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Least privilege limits blast radius when credentials are stolen.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Confidentiality, integrity, and availability frame nearly every security decision. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Vendor risk matters because your data lives on their systems too. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Phishing exploits urgency and authority—not only technical vulnerabilities. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    ),
    section(
      "remote-access-s5",
      "4.5 Secure Remote Access — Putting the chapter together",
      ["This chapter’s through-line is simple: Secure Remote Access connects principles to accountable action. Confidentiality, integrity, and availability frame nearly every security decision.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Vendor risk matters because your data lives on their systems too. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits secure remote access in your field. Phishing exploits urgency and authority—not only technical vulnerabilities. Security awareness training must be short, frequent, and role-specific."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    )
    ],
    {
      learningObjectives: ["Define secure remote access and explain why it matters in Network Security","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Secure Remote Access connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Confidentiality, integrity, and availability frame nearly every security decision.","Least privilege limits blast radius when credentials are stolen.","Vendor risk matters because your data lives on their systems too.","Confidentiality, integrity, and availability frame nearly every security decision.","Least privilege limits blast radius when credentials are stolen."],
      realWorldRelevance: "Strong grasp of secure remote access reduces rework, supports defensible records, and speeds collaboration across Network Security.",
    }
  ),
  chapter(
    "wifi-security",
    5,
    "Wi-Fi Security",
    [
    section(
      "wifi-security-s1",
      "5.1 Wi-Fi Security — Foundations and vocabulary",
      ["Wi-Fi Security is a foundation in Network Security because phishing exploits urgency and authority—not only technical vulnerabilities. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Backups are worthless if restores are never tested before ransomware strikes. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain wi-fi security aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat wi-fi security as a shared model for decisions. Logging and monitoring turn attacks into detectable patterns. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "wifi-security-s2",
      "5.2 Wi-Fi Security — How professionals apply this in practice",
      ["Professionals rarely dispute whether wi-fi security exists—they dispute how backups are worthless if restores are never tested before ransomware strikes. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Logging and monitoring turn attacks into detectable patterns.","When stakes rise, pause for a second opinion or formal review. Multi-factor authentication blocks many credential-stuffing attempts. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Incident response phases include preparation, detection, containment, recovery, lessons learned. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Vendor risk matters because your data lives on their systems too."]
      }
    ),
    section(
      "wifi-security-s3",
      "5.3 Wi-Fi Security — Workplace scenarios and documentation",
      ["Scenario: a teammate cites wi-fi security in a meeting, but details in the packet do not match the textbook example. Logging and monitoring turn attacks into detectable patterns. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Multi-factor authentication blocks many credential-stuffing attempts.","Good documentation states facts, cites the framework, and records the decision. Incident response phases include preparation, detection, containment, recovery, lessons learned. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Compliance frameworks map controls to risks but do not replace thinking. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    ),
    section(
      "wifi-security-s4",
      "5.4 Wi-Fi Security — Common mistakes and how to avoid them",
      ["Common mistakes around wi-fi security include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Multi-factor authentication blocks many credential-stuffing attempts.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Incident response phases include preparation, detection, containment, recovery, lessons learned. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Compliance frameworks map controls to risks but do not replace thinking. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Confidentiality, integrity, and availability frame nearly every security decision. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    ),
    section(
      "wifi-security-s5",
      "5.5 Wi-Fi Security — Putting the chapter together",
      ["This chapter’s through-line is simple: Wi-Fi Security connects principles to accountable action. Incident response phases include preparation, detection, containment, recovery, lessons learned.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Compliance frameworks map controls to risks but do not replace thinking. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits wi-fi security in your field. Confidentiality, integrity, and availability frame nearly every security decision. Security awareness training must be short, frequent, and role-specific."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Vendor risk matters because your data lives on their systems too."]
      }
    )
    ],
    {
      learningObjectives: ["Define wi-fi security and explain why it matters in Network Security","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Wi-Fi Security connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Patching closes known doors but cannot fix social engineering.","Security awareness training must be short, frequent, and role-specific.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Patching closes known doors but cannot fix social engineering.","Security awareness training must be short, frequent, and role-specific."],
      realWorldRelevance: "Strong grasp of wi-fi security reduces rework, supports defensible records, and speeds collaboration across Network Security.",
    }
  ),
  chapter(
    "ids-ips",
    6,
    "IDS/IPS Overview",
    [
    section(
      "ids-ips-s1",
      "6.1 IDS/IPS Overview — Foundations and vocabulary",
      ["IDS/IPS Overview is a foundation in Network Security because patching closes known doors but cannot fix social engineering. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Segmentation keeps flat networks from becoming easy lateral movement paths. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ids/ips overview aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ids/ips overview as a shared model for decisions. Least privilege limits blast radius when credentials are stolen. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "ids-ips-s2",
      "6.2 IDS/IPS Overview — How professionals apply this in practice",
      ["Professionals rarely dispute whether ids/ips overview exists—they dispute how segmentation keeps flat networks from becoming easy lateral movement paths. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Least privilege limits blast radius when credentials are stolen.","When stakes rise, pause for a second opinion or formal review. Confidentiality, integrity, and availability frame nearly every security decision. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Vendor risk matters because your data lives on their systems too. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    ),
    section(
      "ids-ips-s3",
      "6.3 IDS/IPS Overview — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ids/ips overview in a meeting, but details in the packet do not match the textbook example. Least privilege limits blast radius when credentials are stolen. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Confidentiality, integrity, and availability frame nearly every security decision.","Good documentation states facts, cites the framework, and records the decision. Vendor risk matters because your data lives on their systems too. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Phishing exploits urgency and authority—not only technical vulnerabilities. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    ),
    section(
      "ids-ips-s4",
      "6.4 IDS/IPS Overview — Common mistakes and how to avoid them",
      ["Common mistakes around ids/ips overview include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Confidentiality, integrity, and availability frame nearly every security decision.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Vendor risk matters because your data lives on their systems too. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Phishing exploits urgency and authority—not only technical vulnerabilities. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Security awareness training must be short, frequent, and role-specific. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    ),
    section(
      "ids-ips-s5",
      "6.5 IDS/IPS Overview — Putting the chapter together",
      ["This chapter’s through-line is simple: IDS/IPS Overview connects principles to accountable action. Vendor risk matters because your data lives on their systems too.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Phishing exploits urgency and authority—not only technical vulnerabilities. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ids/ips overview in your field. Security awareness training must be short, frequent, and role-specific. Backups are worthless if restores are never tested before ransomware strikes."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    )
    ],
    {
      learningObjectives: ["Define ids/ips overview and explain why it matters in Network Security","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "IDS/IPS Overview connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."],
      realWorldRelevance: "Strong grasp of ids/ips overview reduces rework, supports defensible records, and speeds collaboration across Network Security.",
    }
  ),
  chapter(
    "vpn-security",
    7,
    "VPN Security",
    [
    section(
      "vpn-security-s1",
      "7.1 VPN Security — Foundations and vocabulary",
      ["VPN Security is a foundation in Network Security because logging and monitoring turn attacks into detectable patterns. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Multi-factor authentication blocks many credential-stuffing attempts. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain vpn security aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat vpn security as a shared model for decisions. Incident response phases include preparation, detection, containment, recovery, lessons learned. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "vpn-security-s2",
      "7.2 VPN Security — How professionals apply this in practice",
      ["Professionals rarely dispute whether vpn security exists—they dispute how multi-factor authentication blocks many credential-stuffing attempts. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Incident response phases include preparation, detection, containment, recovery, lessons learned.","When stakes rise, pause for a second opinion or formal review. Compliance frameworks map controls to risks but do not replace thinking. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Confidentiality, integrity, and availability frame nearly every security decision. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    ),
    section(
      "vpn-security-s3",
      "7.3 VPN Security — Workplace scenarios and documentation",
      ["Scenario: a teammate cites vpn security in a meeting, but details in the packet do not match the textbook example. Incident response phases include preparation, detection, containment, recovery, lessons learned. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Compliance frameworks map controls to risks but do not replace thinking.","Good documentation states facts, cites the framework, and records the decision. Confidentiality, integrity, and availability frame nearly every security decision. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Security awareness training must be short, frequent, and role-specific. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    ),
    section(
      "vpn-security-s4",
      "7.4 VPN Security — Common mistakes and how to avoid them",
      ["Common mistakes around vpn security include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Compliance frameworks map controls to risks but do not replace thinking.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Confidentiality, integrity, and availability frame nearly every security decision. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Security awareness training must be short, frequent, and role-specific. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Patching closes known doors but cannot fix social engineering. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    ),
    section(
      "vpn-security-s5",
      "7.5 VPN Security — Putting the chapter together",
      ["This chapter’s through-line is simple: VPN Security connects principles to accountable action. Confidentiality, integrity, and availability frame nearly every security decision.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Security awareness training must be short, frequent, and role-specific. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits vpn security in your field. Patching closes known doors but cannot fix social engineering. Segmentation keeps flat networks from becoming easy lateral movement paths."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    )
    ],
    {
      learningObjectives: ["Define vpn security and explain why it matters in Network Security","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "VPN Security connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Least privilege limits blast radius when credentials are stolen.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Vendor risk matters because your data lives on their systems too.","Least privilege limits blast radius when credentials are stolen.","Segmentation keeps flat networks from becoming easy lateral movement paths."],
      realWorldRelevance: "Strong grasp of vpn security reduces rework, supports defensible records, and speeds collaboration across Network Security.",
    }
  ),
  chapter(
    "monitoring-net",
    8,
    "Network Monitoring",
    [
    section(
      "monitoring-net-s1",
      "8.1 Network Monitoring — Foundations and vocabulary",
      ["Network design trades convenience for segmentation—flat LANs let one stolen laptop become a company-wide event. Network Monitoring is a foundation in Network Security because phishing exploits urgency and authority—not only technical vulnerabilities. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Security awareness training must be short, frequent, and role-specific. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain network monitoring aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat network monitoring as a shared model for decisions. Backups are worthless if restores are never tested before ransomware strikes. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "monitoring-net-s2",
      "8.2 Network Monitoring — How professionals apply this in practice",
      ["Professionals rarely dispute whether network monitoring exists—they dispute how vendor risk matters because your data lives on their systems too. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Phishing exploits urgency and authority—not only technical vulnerabilities.","When stakes rise, pause for a second opinion or formal review. Security awareness training must be short, frequent, and role-specific. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Backups are worthless if restores are never tested before ransomware strikes. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    ),
    section(
      "monitoring-net-s3",
      "8.3 Network Monitoring — Workplace scenarios and documentation",
      ["Scenario: a teammate cites network monitoring in a meeting, but details in the packet do not match the textbook example. Confidentiality, integrity, and availability frame nearly every security decision. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Vendor risk matters because your data lives on their systems too.","Good documentation states facts, cites the framework, and records the decision. Phishing exploits urgency and authority—not only technical vulnerabilities. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Security awareness training must be short, frequent, and role-specific. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking."]
      }
    ),
    section(
      "monitoring-net-s4",
      "8.4 Network Monitoring — Common mistakes and how to avoid them",
      ["Common mistakes around network monitoring include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Least privilege limits blast radius when credentials are stolen.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Confidentiality, integrity, and availability frame nearly every security decision. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Vendor risk matters because your data lives on their systems too. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Phishing exploits urgency and authority—not only technical vulnerabilities. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."]
      }
    ),
    section(
      "monitoring-net-s5",
      "8.5 Network Monitoring — Putting the chapter together",
      ["This chapter’s through-line is simple: Network Monitoring connects principles to accountable action. Patching closes known doors but cannot fix social engineering.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Least privilege limits blast radius when credentials are stolen. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits network monitoring in your field. Confidentiality, integrity, and availability frame nearly every security decision. Vendor risk matters because your data lives on their systems too."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    )
    ],
    {
      learningObjectives: ["Define network monitoring and explain why it matters in Network Security","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Network Monitoring: Network design trades convenience for segmentation—flat LANs let one stolen laptop become a company-wide event. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Vendor risk matters because your data lives on their systems too.","Security awareness training must be short, frequent, and role-specific.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Vendor risk matters because your data lives on their systems too."],
      realWorldRelevance: "Strong grasp of network monitoring reduces rework, supports defensible records, and speeds collaboration across Network Security.",
    }
  )
];
