import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const TROUB_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Troubleshooting Basics",
  subtitle: "ForgEd workforce textbook — Troubleshooting Basics",
  paragraphs: [
    "This ForgEd digital textbook presents Troubleshooting Basics at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Follow organizational security policy; this course does not replace SOC procedures or certifications alone.",
  ],
};

export const TROUB_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "trouble-method",
    1,
    "Troubleshooting Method",
    [
    section(
      "trouble-method-s1",
      "1.1 Troubleshooting Method — Foundations and vocabulary",
      ["Troubleshooting Method is a foundation in Troubleshooting Basics because backups are worthless if restores are never tested before ransomware strikes. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Logging and monitoring turn attacks into detectable patterns. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain troubleshooting method aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat troubleshooting method as a shared model for decisions. Multi-factor authentication blocks many credential-stuffing attempts. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "trouble-method-s2",
      "1.2 Troubleshooting Method — How professionals apply this in practice",
      ["Professionals rarely dispute whether troubleshooting method exists—they dispute how security awareness training must be short, frequent, and role-specific. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Backups are worthless if restores are never tested before ransomware strikes.","When stakes rise, pause for a second opinion or formal review. Logging and monitoring turn attacks into detectable patterns. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Multi-factor authentication blocks many credential-stuffing attempts. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."]
      }
    ),
    section(
      "trouble-method-s3",
      "1.3 Troubleshooting Method — Workplace scenarios and documentation",
      ["Scenario: a teammate cites troubleshooting method in a meeting, but details in the packet do not match the textbook example. Phishing exploits urgency and authority—not only technical vulnerabilities. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Security awareness training must be short, frequent, and role-specific.","Good documentation states facts, cites the framework, and records the decision. Backups are worthless if restores are never tested before ransomware strikes. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Logging and monitoring turn attacks into detectable patterns. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    ),
    section(
      "trouble-method-s4",
      "1.4 Troubleshooting Method — Common mistakes and how to avoid them",
      ["Common mistakes around troubleshooting method include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Vendor risk matters because your data lives on their systems too.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Phishing exploits urgency and authority—not only technical vulnerabilities. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Security awareness training must be short, frequent, and role-specific. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Backups are worthless if restores are never tested before ransomware strikes. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    ),
    section(
      "trouble-method-s5",
      "1.5 Troubleshooting Method — Putting the chapter together",
      ["This chapter’s through-line is simple: Troubleshooting Method connects principles to accountable action. Confidentiality, integrity, and availability frame nearly every security decision.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Vendor risk matters because your data lives on their systems too. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits troubleshooting method in your field. Phishing exploits urgency and authority—not only technical vulnerabilities. Security awareness training must be short, frequent, and role-specific."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."]
      }
    )
    ],
    {
      learningObjectives: ["Define troubleshooting method and explain why it matters in Troubleshooting Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Troubleshooting Method connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Patching closes known doors but cannot fix social engineering.","Least privilege limits blast radius when credentials are stolen.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Patching closes known doors but cannot fix social engineering."],
      realWorldRelevance: "Strong grasp of troubleshooting method reduces rework, supports defensible records, and speeds collaboration across Troubleshooting Basics.",
    }
  ),
  chapter(
    "reproduce",
    2,
    "Reproducing Issues",
    [
    section(
      "reproduce-s1",
      "2.1 Reproducing Issues — Foundations and vocabulary",
      ["Reproducing Issues is a foundation in Troubleshooting Basics because logging and monitoring turn attacks into detectable patterns. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Multi-factor authentication blocks many credential-stuffing attempts. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain reproducing issues aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat reproducing issues as a shared model for decisions. Incident response phases include preparation, detection, containment, recovery, lessons learned. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "reproduce-s2",
      "2.2 Reproducing Issues — How professionals apply this in practice",
      ["Professionals rarely dispute whether reproducing issues exists—they dispute how backups are worthless if restores are never tested before ransomware strikes. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Logging and monitoring turn attacks into detectable patterns.","When stakes rise, pause for a second opinion or formal review. Multi-factor authentication blocks many credential-stuffing attempts. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Incident response phases include preparation, detection, containment, recovery, lessons learned. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    ),
    section(
      "reproduce-s3",
      "2.3 Reproducing Issues — Workplace scenarios and documentation",
      ["Scenario: a teammate cites reproducing issues in a meeting, but details in the packet do not match the textbook example. Security awareness training must be short, frequent, and role-specific. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Backups are worthless if restores are never tested before ransomware strikes.","Good documentation states facts, cites the framework, and records the decision. Logging and monitoring turn attacks into detectable patterns. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Multi-factor authentication blocks many credential-stuffing attempts. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision."]
      }
    ),
    section(
      "reproduce-s4",
      "2.4 Reproducing Issues — Common mistakes and how to avoid them",
      ["Common mistakes around reproducing issues include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Phishing exploits urgency and authority—not only technical vulnerabilities.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Security awareness training must be short, frequent, and role-specific. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Backups are worthless if restores are never tested before ransomware strikes. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Logging and monitoring turn attacks into detectable patterns. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."]
      }
    ),
    section(
      "reproduce-s5",
      "2.5 Reproducing Issues — Putting the chapter together",
      ["This chapter’s through-line is simple: Reproducing Issues connects principles to accountable action. Vendor risk matters because your data lives on their systems too.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Phishing exploits urgency and authority—not only technical vulnerabilities. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits reproducing issues in your field. Security awareness training must be short, frequent, and role-specific. Backups are worthless if restores are never tested before ransomware strikes."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    )
    ],
    {
      learningObjectives: ["Define reproducing issues and explain why it matters in Troubleshooting Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Reproducing Issues connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths."],
      realWorldRelevance: "Strong grasp of reproducing issues reduces rework, supports defensible records, and speeds collaboration across Troubleshooting Basics.",
    }
  ),
  chapter(
    "logs",
    3,
    "Reading Logs",
    [
    section(
      "logs-s1",
      "3.1 Reading Logs — Foundations and vocabulary",
      ["Reading Logs is a foundation in Troubleshooting Basics because multi-factor authentication blocks many credential-stuffing attempts. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Incident response phases include preparation, detection, containment, recovery, lessons learned. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain reading logs aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat reading logs as a shared model for decisions. Compliance frameworks map controls to risks but do not replace thinking. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "logs-s2",
      "3.2 Reading Logs — How professionals apply this in practice",
      ["Professionals rarely dispute whether reading logs exists—they dispute how incident response phases include preparation, detection, containment, recovery, lessons learned. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Compliance frameworks map controls to risks but do not replace thinking.","When stakes rise, pause for a second opinion or formal review. Patching closes known doors but cannot fix social engineering. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Segmentation keeps flat networks from becoming easy lateral movement paths. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    ),
    section(
      "logs-s3",
      "3.3 Reading Logs — Workplace scenarios and documentation",
      ["Scenario: a teammate cites reading logs in a meeting, but details in the packet do not match the textbook example. Compliance frameworks map controls to risks but do not replace thinking. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Patching closes known doors but cannot fix social engineering.","Good documentation states facts, cites the framework, and records the decision. Segmentation keeps flat networks from becoming easy lateral movement paths. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Least privilege limits blast radius when credentials are stolen. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."]
      }
    ),
    section(
      "logs-s4",
      "3.4 Reading Logs — Common mistakes and how to avoid them",
      ["Common mistakes around reading logs include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Patching closes known doors but cannot fix social engineering.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Segmentation keeps flat networks from becoming easy lateral movement paths. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Least privilege limits blast radius when credentials are stolen. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Confidentiality, integrity, and availability frame nearly every security decision. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    ),
    section(
      "logs-s5",
      "3.5 Reading Logs — Putting the chapter together",
      ["This chapter’s through-line is simple: Reading Logs connects principles to accountable action. Segmentation keeps flat networks from becoming easy lateral movement paths.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Least privilege limits blast radius when credentials are stolen. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits reading logs in your field. Confidentiality, integrity, and availability frame nearly every security decision. Vendor risk matters because your data lives on their systems too."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    )
    ],
    {
      learningObjectives: ["Define reading logs and explain why it matters in Troubleshooting Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Reading Logs connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Vendor risk matters because your data lives on their systems too.","Security awareness training must be short, frequent, and role-specific.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Vendor risk matters because your data lives on their systems too."],
      realWorldRelevance: "Strong grasp of reading logs reduces rework, supports defensible records, and speeds collaboration across Troubleshooting Basics.",
    }
  ),
  chapter(
    "hardware-trouble",
    4,
    "Hardware Checks",
    [
    section(
      "hardware-trouble-s1",
      "4.1 Hardware Checks — Foundations and vocabulary",
      ["Hardware Checks is a foundation in Troubleshooting Basics because segmentation keeps flat networks from becoming easy lateral movement paths. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Least privilege limits blast radius when credentials are stolen. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain hardware checks aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat hardware checks as a shared model for decisions. Confidentiality, integrity, and availability frame nearly every security decision. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "hardware-trouble-s2",
      "4.2 Hardware Checks — How professionals apply this in practice",
      ["Professionals rarely dispute whether hardware checks exists—they dispute how least privilege limits blast radius when credentials are stolen. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Confidentiality, integrity, and availability frame nearly every security decision.","When stakes rise, pause for a second opinion or formal review. Vendor risk matters because your data lives on their systems too. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Phishing exploits urgency and authority—not only technical vulnerabilities. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."]
      }
    ),
    section(
      "hardware-trouble-s3",
      "4.3 Hardware Checks — Workplace scenarios and documentation",
      ["Scenario: a teammate cites hardware checks in a meeting, but details in the packet do not match the textbook example. Confidentiality, integrity, and availability frame nearly every security decision. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Vendor risk matters because your data lives on their systems too.","Good documentation states facts, cites the framework, and records the decision. Phishing exploits urgency and authority—not only technical vulnerabilities. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Security awareness training must be short, frequent, and role-specific. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    ),
    section(
      "hardware-trouble-s4",
      "4.4 Hardware Checks — Common mistakes and how to avoid them",
      ["Common mistakes around hardware checks include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Vendor risk matters because your data lives on their systems too.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Phishing exploits urgency and authority—not only technical vulnerabilities. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Security awareness training must be short, frequent, and role-specific. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Backups are worthless if restores are never tested before ransomware strikes. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    ),
    section(
      "hardware-trouble-s5",
      "4.5 Hardware Checks — Putting the chapter together",
      ["This chapter’s through-line is simple: Hardware Checks connects principles to accountable action. Phishing exploits urgency and authority—not only technical vulnerabilities.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Security awareness training must be short, frequent, and role-specific. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits hardware checks in your field. Backups are worthless if restores are never tested before ransomware strikes. Logging and monitoring turn attacks into detectable patterns."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."]
      }
    )
    ],
    {
      learningObjectives: ["Define hardware checks and explain why it matters in Troubleshooting Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Hardware Checks connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Patching closes known doors but cannot fix social engineering.","Least privilege limits blast radius when credentials are stolen.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Patching closes known doors but cannot fix social engineering."],
      realWorldRelevance: "Strong grasp of hardware checks reduces rework, supports defensible records, and speeds collaboration across Troubleshooting Basics.",
    }
  ),
  chapter(
    "software-trouble",
    5,
    "Software Checks",
    [
    section(
      "software-trouble-s1",
      "5.1 Software Checks — Foundations and vocabulary",
      ["Software Checks is a foundation in Troubleshooting Basics because vendor risk matters because your data lives on their systems too. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Phishing exploits urgency and authority—not only technical vulnerabilities. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain software checks aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat software checks as a shared model for decisions. Security awareness training must be short, frequent, and role-specific. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "software-trouble-s2",
      "5.2 Software Checks — How professionals apply this in practice",
      ["Professionals rarely dispute whether software checks exists—they dispute how confidentiality, integrity, and availability frame nearly every security decision. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Vendor risk matters because your data lives on their systems too.","When stakes rise, pause for a second opinion or formal review. Phishing exploits urgency and authority—not only technical vulnerabilities. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Security awareness training must be short, frequent, and role-specific. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision."]
      }
    ),
    section(
      "software-trouble-s3",
      "5.3 Software Checks — Workplace scenarios and documentation",
      ["Scenario: a teammate cites software checks in a meeting, but details in the packet do not match the textbook example. Least privilege limits blast radius when credentials are stolen. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Confidentiality, integrity, and availability frame nearly every security decision.","Good documentation states facts, cites the framework, and records the decision. Vendor risk matters because your data lives on their systems too. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Phishing exploits urgency and authority—not only technical vulnerabilities. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    ),
    section(
      "software-trouble-s4",
      "5.4 Software Checks — Common mistakes and how to avoid them",
      ["Common mistakes around software checks include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Segmentation keeps flat networks from becoming easy lateral movement paths.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Least privilege limits blast radius when credentials are stolen. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Confidentiality, integrity, and availability frame nearly every security decision. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Vendor risk matters because your data lives on their systems too. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."]
      }
    ),
    section(
      "software-trouble-s5",
      "5.5 Software Checks — Putting the chapter together",
      ["This chapter’s through-line is simple: Software Checks connects principles to accountable action. Patching closes known doors but cannot fix social engineering.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Segmentation keeps flat networks from becoming easy lateral movement paths. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits software checks in your field. Least privilege limits blast radius when credentials are stolen. Confidentiality, integrity, and availability frame nearly every security decision."], {
        bulletPoints: ["Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision."]
      }
    )
    ],
    {
      learningObjectives: ["Define software checks and explain why it matters in Troubleshooting Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Software Checks connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Patching closes known doors but cannot fix social engineering.","Compliance frameworks map controls to risks but do not replace thinking.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Patching closes known doors but cannot fix social engineering.","Compliance frameworks map controls to risks but do not replace thinking."],
      realWorldRelevance: "Strong grasp of software checks reduces rework, supports defensible records, and speeds collaboration across Troubleshooting Basics.",
    }
  ),
  chapter(
    "network-trouble",
    6,
    "Network Checks",
    [
    section(
      "network-trouble-s1",
      "6.1 Network Checks — Foundations and vocabulary",
      ["Network design trades convenience for segmentation—flat LANs let one stolen laptop become a company-wide event. Network Checks is a foundation in Troubleshooting Basics because backups are worthless if restores are never tested before ransomware strikes. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Logging and monitoring turn attacks into detectable patterns. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain network checks aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat network checks as a shared model for decisions. Multi-factor authentication blocks many credential-stuffing attempts. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "network-trouble-s2",
      "6.2 Network Checks — How professionals apply this in practice",
      ["Professionals rarely dispute whether network checks exists—they dispute how logging and monitoring turn attacks into detectable patterns. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Multi-factor authentication blocks many credential-stuffing attempts.","When stakes rise, pause for a second opinion or formal review. Incident response phases include preparation, detection, containment, recovery, lessons learned. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Compliance frameworks map controls to risks but do not replace thinking. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    ),
    section(
      "network-trouble-s3",
      "6.3 Network Checks — Workplace scenarios and documentation",
      ["Scenario: a teammate cites network checks in a meeting, but details in the packet do not match the textbook example. Multi-factor authentication blocks many credential-stuffing attempts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Incident response phases include preparation, detection, containment, recovery, lessons learned.","Good documentation states facts, cites the framework, and records the decision. Compliance frameworks map controls to risks but do not replace thinking. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Segmentation keeps flat networks from becoming easy lateral movement paths. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Patching closes known doors but cannot fix social engineering.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."]
      }
    ),
    section(
      "network-trouble-s4",
      "6.4 Network Checks — Common mistakes and how to avoid them",
      ["Common mistakes around network checks include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Incident response phases include preparation, detection, containment, recovery, lessons learned.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Compliance frameworks map controls to risks but do not replace thinking. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Segmentation keeps flat networks from becoming easy lateral movement paths. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Patching closes known doors but cannot fix social engineering. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    ),
    section(
      "network-trouble-s5",
      "6.5 Network Checks — Putting the chapter together",
      ["This chapter’s through-line is simple: Network Checks connects principles to accountable action. Compliance frameworks map controls to risks but do not replace thinking.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Segmentation keeps flat networks from becoming easy lateral movement paths. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits network checks in your field. Patching closes known doors but cannot fix social engineering. Least privilege limits blast radius when credentials are stolen."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    )
    ],
    {
      learningObjectives: ["Define network checks and explain why it matters in Troubleshooting Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Network Checks: Network design trades convenience for segmentation—flat LANs let one stolen laptop become a company-wide event. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Patching closes known doors but cannot fix social engineering.","Least privilege limits blast radius when credentials are stolen.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Patching closes known doors but cannot fix social engineering.","Least privilege limits blast radius when credentials are stolen."],
      realWorldRelevance: "Strong grasp of network checks reduces rework, supports defensible records, and speeds collaboration across Troubleshooting Basics.",
    }
  ),
  chapter(
    "escalation",
    7,
    "Escalation",
    [
    section(
      "escalation-s1",
      "7.1 Escalation — Foundations and vocabulary",
      ["Escalation is a foundation in Troubleshooting Basics because compliance frameworks map controls to risks but do not replace thinking. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Patching closes known doors but cannot fix social engineering. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain escalation aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat escalation as a shared model for decisions. Segmentation keeps flat networks from becoming easy lateral movement paths. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "escalation-s2",
      "7.2 Escalation — How professionals apply this in practice",
      ["Professionals rarely dispute whether escalation exists—they dispute how patching closes known doors but cannot fix social engineering. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Segmentation keeps flat networks from becoming easy lateral movement paths.","When stakes rise, pause for a second opinion or formal review. Least privilege limits blast radius when credentials are stolen. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Confidentiality, integrity, and availability frame nearly every security decision. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    ),
    section(
      "escalation-s3",
      "7.3 Escalation — Workplace scenarios and documentation",
      ["Scenario: a teammate cites escalation in a meeting, but details in the packet do not match the textbook example. Segmentation keeps flat networks from becoming easy lateral movement paths. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Least privilege limits blast radius when credentials are stolen.","Good documentation states facts, cites the framework, and records the decision. Confidentiality, integrity, and availability frame nearly every security decision. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Vendor risk matters because your data lives on their systems too. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."]
      }
    ),
    section(
      "escalation-s4",
      "7.4 Escalation — Common mistakes and how to avoid them",
      ["Common mistakes around escalation include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Least privilege limits blast radius when credentials are stolen.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Confidentiality, integrity, and availability frame nearly every security decision. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Vendor risk matters because your data lives on their systems too. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Phishing exploits urgency and authority—not only technical vulnerabilities. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    ),
    section(
      "escalation-s5",
      "7.5 Escalation — Putting the chapter together",
      ["This chapter’s through-line is simple: Escalation connects principles to accountable action. Confidentiality, integrity, and availability frame nearly every security decision.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Vendor risk matters because your data lives on their systems too. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits escalation in your field. Phishing exploits urgency and authority—not only technical vulnerabilities. Security awareness training must be short, frequent, and role-specific."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    )
    ],
    {
      learningObjectives: ["Define escalation and explain why it matters in Troubleshooting Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Escalation connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen."],
      realWorldRelevance: "Strong grasp of escalation reduces rework, supports defensible records, and speeds collaboration across Troubleshooting Basics.",
    }
  ),
  chapter(
    "documentation",
    8,
    "Documenting Fixes",
    [
    section(
      "documentation-s1",
      "8.1 Documenting Fixes — Foundations and vocabulary",
      ["Documenting Fixes is a foundation in Troubleshooting Basics because least privilege limits blast radius when credentials are stolen. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Confidentiality, integrity, and availability frame nearly every security decision. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain documenting fixes aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat documenting fixes as a shared model for decisions. Vendor risk matters because your data lives on their systems too. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "documentation-s2",
      "8.2 Documenting Fixes — How professionals apply this in practice",
      ["Professionals rarely dispute whether documenting fixes exists—they dispute how confidentiality, integrity, and availability frame nearly every security decision. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Vendor risk matters because your data lives on their systems too.","When stakes rise, pause for a second opinion or formal review. Phishing exploits urgency and authority—not only technical vulnerabilities. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Security awareness training must be short, frequent, and role-specific. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    ),
    section(
      "documentation-s3",
      "8.3 Documenting Fixes — Workplace scenarios and documentation",
      ["Scenario: a teammate cites documenting fixes in a meeting, but details in the packet do not match the textbook example. Vendor risk matters because your data lives on their systems too. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Phishing exploits urgency and authority—not only technical vulnerabilities.","Good documentation states facts, cites the framework, and records the decision. Security awareness training must be short, frequent, and role-specific. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Backups are worthless if restores are never tested before ransomware strikes. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    ),
    section(
      "documentation-s4",
      "8.4 Documenting Fixes — Common mistakes and how to avoid them",
      ["Common mistakes around documenting fixes include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Phishing exploits urgency and authority—not only technical vulnerabilities.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Security awareness training must be short, frequent, and role-specific. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Backups are worthless if restores are never tested before ransomware strikes. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Logging and monitoring turn attacks into detectable patterns. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    ),
    section(
      "documentation-s5",
      "8.5 Documenting Fixes — Putting the chapter together",
      ["This chapter’s through-line is simple: Documenting Fixes connects principles to accountable action. Security awareness training must be short, frequent, and role-specific.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Backups are worthless if restores are never tested before ransomware strikes. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits documenting fixes in your field. Logging and monitoring turn attacks into detectable patterns. Multi-factor authentication blocks many credential-stuffing attempts."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    )
    ],
    {
      learningObjectives: ["Define documenting fixes and explain why it matters in Troubleshooting Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Documenting Fixes connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Least privilege limits blast radius when credentials are stolen.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Confidentiality, integrity, and availability frame nearly every security decision.","Least privilege limits blast radius when credentials are stolen.","Segmentation keeps flat networks from becoming easy lateral movement paths."],
      realWorldRelevance: "Strong grasp of documenting fixes reduces rework, supports defensible records, and speeds collaboration across Troubleshooting Basics.",
    }
  )
];
