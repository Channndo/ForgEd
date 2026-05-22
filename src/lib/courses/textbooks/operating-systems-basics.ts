import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const OS_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Operating Systems",
  subtitle: "ForgEd workforce textbook — Operating Systems",
  paragraphs: [
    "This ForgEd digital textbook presents Operating Systems at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Follow organizational security policy; this course does not replace SOC procedures or certifications alone.",
  ],
};

export const OS_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "os-overview",
    1,
    "OS Overview",
    [
    section(
      "os-overview-s1",
      "1.1 OS Overview — Foundations and vocabulary",
      ["OS Overview is a foundation in Operating Systems because backups are worthless if restores are never tested before ransomware strikes. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Logging and monitoring turn attacks into detectable patterns. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain os overview aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat os overview as a shared model for decisions. Multi-factor authentication blocks many credential-stuffing attempts. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "os-overview-s2",
      "1.2 OS Overview — How professionals apply this in practice",
      ["Professionals rarely dispute whether os overview exists—they dispute how logging and monitoring turn attacks into detectable patterns. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Multi-factor authentication blocks many credential-stuffing attempts.","When stakes rise, pause for a second opinion or formal review. Incident response phases include preparation, detection, containment, recovery, lessons learned. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Compliance frameworks map controls to risks but do not replace thinking. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen."]
      }
    ),
    section(
      "os-overview-s3",
      "1.3 OS Overview — Workplace scenarios and documentation",
      ["Scenario: a teammate cites os overview in a meeting, but details in the packet do not match the textbook example. Multi-factor authentication blocks many credential-stuffing attempts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Incident response phases include preparation, detection, containment, recovery, lessons learned.","Good documentation states facts, cites the framework, and records the decision. Compliance frameworks map controls to risks but do not replace thinking. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Patching closes known doors but cannot fix social engineering. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering."]
      }
    ),
    section(
      "os-overview-s4",
      "1.4 OS Overview — Common mistakes and how to avoid them",
      ["Common mistakes around os overview include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Incident response phases include preparation, detection, containment, recovery, lessons learned.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Compliance frameworks map controls to risks but do not replace thinking. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Patching closes known doors but cannot fix social engineering. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Segmentation keeps flat networks from becoming easy lateral movement paths. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths."]
      }
    ),
    section(
      "os-overview-s5",
      "1.5 OS Overview — Putting the chapter together",
      ["This chapter’s through-line is simple: OS Overview connects principles to accountable action. Compliance frameworks map controls to risks but do not replace thinking.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Patching closes known doors but cannot fix social engineering. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits os overview in your field. Segmentation keeps flat networks from becoming easy lateral movement paths. Least privilege limits blast radius when credentials are stolen."], {
        bulletPoints: ["Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen."]
      }
    )
    ],
    {
      learningObjectives: ["Define os overview and explain why it matters in Operating Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "OS Overview connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."],
      realWorldRelevance: "Strong grasp of os overview reduces rework, supports defensible records, and speeds collaboration across Operating Systems.",
    }
  ),
  chapter(
    "windows-basics",
    2,
    "Windows Essentials",
    [
    section(
      "windows-basics-s1",
      "2.1 Windows Essentials — Foundations and vocabulary",
      ["Windows Essentials is a foundation in Operating Systems because least privilege limits blast radius when credentials are stolen. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Confidentiality, integrity, and availability frame nearly every security decision. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain windows essentials aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat windows essentials as a shared model for decisions. Vendor risk matters because your data lives on their systems too. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "windows-basics-s2",
      "2.2 Windows Essentials — How professionals apply this in practice",
      ["Professionals rarely dispute whether windows essentials exists—they dispute how confidentiality, integrity, and availability frame nearly every security decision. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Vendor risk matters because your data lives on their systems too.","When stakes rise, pause for a second opinion or formal review. Phishing exploits urgency and authority—not only technical vulnerabilities. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Security awareness training must be short, frequent, and role-specific. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    ),
    section(
      "windows-basics-s3",
      "2.3 Windows Essentials — Workplace scenarios and documentation",
      ["Scenario: a teammate cites windows essentials in a meeting, but details in the packet do not match the textbook example. Vendor risk matters because your data lives on their systems too. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Phishing exploits urgency and authority—not only technical vulnerabilities.","Good documentation states facts, cites the framework, and records the decision. Security awareness training must be short, frequent, and role-specific. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Backups are worthless if restores are never tested before ransomware strikes. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking."]
      }
    ),
    section(
      "windows-basics-s4",
      "2.4 Windows Essentials — Common mistakes and how to avoid them",
      ["Common mistakes around windows essentials include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Phishing exploits urgency and authority—not only technical vulnerabilities.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Security awareness training must be short, frequent, and role-specific. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Backups are worthless if restores are never tested before ransomware strikes. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Logging and monitoring turn attacks into detectable patterns. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."]
      }
    ),
    section(
      "windows-basics-s5",
      "2.5 Windows Essentials — Putting the chapter together",
      ["This chapter’s through-line is simple: Windows Essentials connects principles to accountable action. Security awareness training must be short, frequent, and role-specific.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Backups are worthless if restores are never tested before ransomware strikes. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits windows essentials in your field. Logging and monitoring turn attacks into detectable patterns. Multi-factor authentication blocks many credential-stuffing attempts."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    )
    ],
    {
      learningObjectives: ["Define windows essentials and explain why it matters in Operating Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Windows Essentials connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Security awareness training must be short, frequent, and role-specific.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Backups are worthless if restores are never tested before ransomware strikes.","Security awareness training must be short, frequent, and role-specific.","Phishing exploits urgency and authority—not only technical vulnerabilities."],
      realWorldRelevance: "Strong grasp of windows essentials reduces rework, supports defensible records, and speeds collaboration across Operating Systems.",
    }
  ),
  chapter(
    "macos-basics",
    3,
    "macOS Essentials",
    [
    section(
      "macos-basics-s1",
      "3.1 macOS Essentials — Foundations and vocabulary",
      ["macOS Essentials is a foundation in Operating Systems because incident response phases include preparation, detection, containment, recovery, lessons learned. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Compliance frameworks map controls to risks but do not replace thinking. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain macos essentials aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat macos essentials as a shared model for decisions. Patching closes known doors but cannot fix social engineering. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "macos-basics-s2",
      "3.2 macOS Essentials — How professionals apply this in practice",
      ["Professionals rarely dispute whether macos essentials exists—they dispute how compliance frameworks map controls to risks but do not replace thinking. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Patching closes known doors but cannot fix social engineering.","When stakes rise, pause for a second opinion or formal review. Segmentation keeps flat networks from becoming easy lateral movement paths. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Least privilege limits blast radius when credentials are stolen. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    ),
    section(
      "macos-basics-s3",
      "3.3 macOS Essentials — Workplace scenarios and documentation",
      ["Scenario: a teammate cites macos essentials in a meeting, but details in the packet do not match the textbook example. Patching closes known doors but cannot fix social engineering. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Segmentation keeps flat networks from becoming easy lateral movement paths.","Good documentation states facts, cites the framework, and records the decision. Least privilege limits blast radius when credentials are stolen. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Confidentiality, integrity, and availability frame nearly every security decision. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking."]
      }
    ),
    section(
      "macos-basics-s4",
      "3.4 macOS Essentials — Common mistakes and how to avoid them",
      ["Common mistakes around macos essentials include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Segmentation keeps flat networks from becoming easy lateral movement paths.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Least privilege limits blast radius when credentials are stolen. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Confidentiality, integrity, and availability frame nearly every security decision. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Vendor risk matters because your data lives on their systems too. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."]
      }
    ),
    section(
      "macos-basics-s5",
      "3.5 macOS Essentials — Putting the chapter together",
      ["This chapter’s through-line is simple: macOS Essentials connects principles to accountable action. Least privilege limits blast radius when credentials are stolen.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Confidentiality, integrity, and availability frame nearly every security decision. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits macos essentials in your field. Vendor risk matters because your data lives on their systems too. Phishing exploits urgency and authority—not only technical vulnerabilities."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    )
    ],
    {
      learningObjectives: ["Define macos essentials and explain why it matters in Operating Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "macOS Essentials connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Security awareness training must be short, frequent, and role-specific.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Backups are worthless if restores are never tested before ransomware strikes.","Security awareness training must be short, frequent, and role-specific.","Phishing exploits urgency and authority—not only technical vulnerabilities."],
      realWorldRelevance: "Strong grasp of macos essentials reduces rework, supports defensible records, and speeds collaboration across Operating Systems.",
    }
  ),
  chapter(
    "linux-intro",
    4,
    "Linux Introduction",
    [
    section(
      "linux-intro-s1",
      "4.1 Linux Introduction — Foundations and vocabulary",
      ["Linux Introduction is a foundation in Operating Systems because least privilege limits blast radius when credentials are stolen. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Confidentiality, integrity, and availability frame nearly every security decision. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain linux introduction aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat linux introduction as a shared model for decisions. Vendor risk matters because your data lives on their systems too. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "linux-intro-s2",
      "4.2 Linux Introduction — How professionals apply this in practice",
      ["Professionals rarely dispute whether linux introduction exists—they dispute how segmentation keeps flat networks from becoming easy lateral movement paths. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Least privilege limits blast radius when credentials are stolen.","When stakes rise, pause for a second opinion or formal review. Confidentiality, integrity, and availability frame nearly every security decision. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Vendor risk matters because your data lives on their systems too. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    ),
    section(
      "linux-intro-s3",
      "4.3 Linux Introduction — Workplace scenarios and documentation",
      ["Scenario: a teammate cites linux introduction in a meeting, but details in the packet do not match the textbook example. Patching closes known doors but cannot fix social engineering. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Segmentation keeps flat networks from becoming easy lateral movement paths.","Good documentation states facts, cites the framework, and records the decision. Least privilege limits blast radius when credentials are stolen. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Confidentiality, integrity, and availability frame nearly every security decision. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    ),
    section(
      "linux-intro-s4",
      "4.4 Linux Introduction — Common mistakes and how to avoid them",
      ["Common mistakes around linux introduction include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Compliance frameworks map controls to risks but do not replace thinking.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Patching closes known doors but cannot fix social engineering. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Segmentation keeps flat networks from becoming easy lateral movement paths. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Least privilege limits blast radius when credentials are stolen. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    ),
    section(
      "linux-intro-s5",
      "4.5 Linux Introduction — Putting the chapter together",
      ["This chapter’s through-line is simple: Linux Introduction connects principles to accountable action. Incident response phases include preparation, detection, containment, recovery, lessons learned.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Compliance frameworks map controls to risks but do not replace thinking. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits linux introduction in your field. Patching closes known doors but cannot fix social engineering. Segmentation keeps flat networks from becoming easy lateral movement paths."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    )
    ],
    {
      learningObjectives: ["Define linux introduction and explain why it matters in Operating Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Linux Introduction connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision."],
      realWorldRelevance: "Strong grasp of linux introduction reduces rework, supports defensible records, and speeds collaboration across Operating Systems.",
    }
  ),
  chapter(
    "users-perms",
    5,
    "Users and Permissions",
    [
    section(
      "users-perms-s1",
      "5.1 Users and Permissions — Foundations and vocabulary",
      ["Users and Permissions is a foundation in Operating Systems because segmentation keeps flat networks from becoming easy lateral movement paths. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Least privilege limits blast radius when credentials are stolen. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain users and permissions aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat users and permissions as a shared model for decisions. Confidentiality, integrity, and availability frame nearly every security decision. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "users-perms-s2",
      "5.2 Users and Permissions — How professionals apply this in practice",
      ["Professionals rarely dispute whether users and permissions exists—they dispute how least privilege limits blast radius when credentials are stolen. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Confidentiality, integrity, and availability frame nearly every security decision.","When stakes rise, pause for a second opinion or formal review. Vendor risk matters because your data lives on their systems too. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Phishing exploits urgency and authority—not only technical vulnerabilities. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering."]
      }
    ),
    section(
      "users-perms-s3",
      "5.3 Users and Permissions — Workplace scenarios and documentation",
      ["Scenario: a teammate cites users and permissions in a meeting, but details in the packet do not match the textbook example. Confidentiality, integrity, and availability frame nearly every security decision. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Vendor risk matters because your data lives on their systems too.","Good documentation states facts, cites the framework, and records the decision. Phishing exploits urgency and authority—not only technical vulnerabilities. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Security awareness training must be short, frequent, and role-specific. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."]
      }
    ),
    section(
      "users-perms-s4",
      "5.4 Users and Permissions — Common mistakes and how to avoid them",
      ["Common mistakes around users and permissions include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Vendor risk matters because your data lives on their systems too.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Phishing exploits urgency and authority—not only technical vulnerabilities. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Security awareness training must be short, frequent, and role-specific. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Backups are worthless if restores are never tested before ransomware strikes. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking."]
      }
    ),
    section(
      "users-perms-s5",
      "5.5 Users and Permissions — Putting the chapter together",
      ["This chapter’s through-line is simple: Users and Permissions connects principles to accountable action. Phishing exploits urgency and authority—not only technical vulnerabilities.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Security awareness training must be short, frequent, and role-specific. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits users and permissions in your field. Backups are worthless if restores are never tested before ransomware strikes. Logging and monitoring turn attacks into detectable patterns."], {
        bulletPoints: ["Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering."]
      }
    )
    ],
    {
      learningObjectives: ["Define users and permissions and explain why it matters in Operating Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Users and Permissions connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."],
      realWorldRelevance: "Strong grasp of users and permissions reduces rework, supports defensible records, and speeds collaboration across Operating Systems.",
    }
  ),
  chapter(
    "updates-os",
    6,
    "Updates and Patches",
    [
    section(
      "updates-os-s1",
      "6.1 Updates and Patches — Foundations and vocabulary",
      ["Updates and Patches is a foundation in Operating Systems because multi-factor authentication blocks many credential-stuffing attempts. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Incident response phases include preparation, detection, containment, recovery, lessons learned. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain updates and patches aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat updates and patches as a shared model for decisions. Compliance frameworks map controls to risks but do not replace thinking. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "updates-os-s2",
      "6.2 Updates and Patches — How professionals apply this in practice",
      ["Professionals rarely dispute whether updates and patches exists—they dispute how incident response phases include preparation, detection, containment, recovery, lessons learned. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Compliance frameworks map controls to risks but do not replace thinking.","When stakes rise, pause for a second opinion or formal review. Patching closes known doors but cannot fix social engineering. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Segmentation keeps flat networks from becoming easy lateral movement paths. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."]
      }
    ),
    section(
      "updates-os-s3",
      "6.3 Updates and Patches — Workplace scenarios and documentation",
      ["Scenario: a teammate cites updates and patches in a meeting, but details in the packet do not match the textbook example. Compliance frameworks map controls to risks but do not replace thinking. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Patching closes known doors but cannot fix social engineering.","Good documentation states facts, cites the framework, and records the decision. Segmentation keeps flat networks from becoming easy lateral movement paths. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Least privilege limits blast radius when credentials are stolen. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen."]
      }
    ),
    section(
      "updates-os-s4",
      "6.4 Updates and Patches — Common mistakes and how to avoid them",
      ["Common mistakes around updates and patches include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Patching closes known doors but cannot fix social engineering.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Segmentation keeps flat networks from becoming easy lateral movement paths. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Least privilege limits blast radius when credentials are stolen. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Confidentiality, integrity, and availability frame nearly every security decision. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision."]
      }
    ),
    section(
      "updates-os-s5",
      "6.5 Updates and Patches — Putting the chapter together",
      ["This chapter’s through-line is simple: Updates and Patches connects principles to accountable action. Segmentation keeps flat networks from becoming easy lateral movement paths.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Least privilege limits blast radius when credentials are stolen. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits updates and patches in your field. Confidentiality, integrity, and availability frame nearly every security decision. Vendor risk matters because your data lives on their systems too."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."]
      }
    )
    ],
    {
      learningObjectives: ["Define updates and patches and explain why it matters in Operating Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Updates and Patches connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering."],
      realWorldRelevance: "Strong grasp of updates and patches reduces rework, supports defensible records, and speeds collaboration across Operating Systems.",
    }
  ),
  chapter(
    "filesystems",
    7,
    "Files and Folders",
    [
    section(
      "filesystems-s1",
      "7.1 Files and Folders — Foundations and vocabulary",
      ["Files and Folders is a foundation in Operating Systems because compliance frameworks map controls to risks but do not replace thinking. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Patching closes known doors but cannot fix social engineering. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain files and folders aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat files and folders as a shared model for decisions. Segmentation keeps flat networks from becoming easy lateral movement paths. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "filesystems-s2",
      "7.2 Files and Folders — How professionals apply this in practice",
      ["Professionals rarely dispute whether files and folders exists—they dispute how incident response phases include preparation, detection, containment, recovery, lessons learned. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Compliance frameworks map controls to risks but do not replace thinking.","When stakes rise, pause for a second opinion or formal review. Patching closes known doors but cannot fix social engineering. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Segmentation keeps flat networks from becoming easy lateral movement paths. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    ),
    section(
      "filesystems-s3",
      "7.3 Files and Folders — Workplace scenarios and documentation",
      ["Scenario: a teammate cites files and folders in a meeting, but details in the packet do not match the textbook example. Multi-factor authentication blocks many credential-stuffing attempts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Incident response phases include preparation, detection, containment, recovery, lessons learned.","Good documentation states facts, cites the framework, and records the decision. Compliance frameworks map controls to risks but do not replace thinking. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Patching closes known doors but cannot fix social engineering. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."]
      }
    ),
    section(
      "filesystems-s4",
      "7.4 Files and Folders — Common mistakes and how to avoid them",
      ["Common mistakes around files and folders include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Logging and monitoring turn attacks into detectable patterns.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Multi-factor authentication blocks many credential-stuffing attempts. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Incident response phases include preparation, detection, containment, recovery, lessons learned. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Compliance frameworks map controls to risks but do not replace thinking. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    ),
    section(
      "filesystems-s5",
      "7.5 Files and Folders — Putting the chapter together",
      ["This chapter’s through-line is simple: Files and Folders connects principles to accountable action. Backups are worthless if restores are never tested before ransomware strikes.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Logging and monitoring turn attacks into detectable patterns. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits files and folders in your field. Multi-factor authentication blocks many credential-stuffing attempts. Incident response phases include preparation, detection, containment, recovery, lessons learned."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    )
    ],
    {
      learningObjectives: ["Define files and folders and explain why it matters in Operating Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Files and Folders connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Vendor risk matters because your data lives on their systems too.","Security awareness training must be short, frequent, and role-specific.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Vendor risk matters because your data lives on their systems too."],
      realWorldRelevance: "Strong grasp of files and folders reduces rework, supports defensible records, and speeds collaboration across Operating Systems.",
    }
  ),
  chapter(
    "backup-os",
    8,
    "Backups",
    [
    section(
      "backup-os-s1",
      "8.1 Backups — Foundations and vocabulary",
      ["Backups is a foundation in Operating Systems because least privilege limits blast radius when credentials are stolen. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Confidentiality, integrity, and availability frame nearly every security decision. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain backups aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat backups as a shared model for decisions. Vendor risk matters because your data lives on their systems too. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "backup-os-s2",
      "8.2 Backups — How professionals apply this in practice",
      ["Professionals rarely dispute whether backups exists—they dispute how confidentiality, integrity, and availability frame nearly every security decision. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Vendor risk matters because your data lives on their systems too.","When stakes rise, pause for a second opinion or formal review. Phishing exploits urgency and authority—not only technical vulnerabilities. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Security awareness training must be short, frequent, and role-specific. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    ),
    section(
      "backup-os-s3",
      "8.3 Backups — Workplace scenarios and documentation",
      ["Scenario: a teammate cites backups in a meeting, but details in the packet do not match the textbook example. Vendor risk matters because your data lives on their systems too. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Phishing exploits urgency and authority—not only technical vulnerabilities.","Good documentation states facts, cites the framework, and records the decision. Security awareness training must be short, frequent, and role-specific. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Logging and monitoring turn attacks into detectable patterns. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Logging and monitoring turn attacks into detectable patterns."]
      }
    ),
    section(
      "backup-os-s4",
      "8.4 Backups — Common mistakes and how to avoid them",
      ["Common mistakes around backups include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Phishing exploits urgency and authority—not only technical vulnerabilities.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Security awareness training must be short, frequent, and role-specific. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Logging and monitoring turn attacks into detectable patterns. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Multi-factor authentication blocks many credential-stuffing attempts. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    ),
    section(
      "backup-os-s5",
      "8.5 Backups — Putting the chapter together",
      ["This chapter’s through-line is simple: Backups connects principles to accountable action. Security awareness training must be short, frequent, and role-specific.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Logging and monitoring turn attacks into detectable patterns. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits backups in your field. Multi-factor authentication blocks many credential-stuffing attempts. Incident response phases include preparation, detection, containment, recovery, lessons learned."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    )
    ],
    {
      learningObjectives: ["Define backups and explain why it matters in Operating Systems","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Backups connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Least privilege limits blast radius when credentials are stolen.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Confidentiality, integrity, and availability frame nearly every security decision.","Least privilege limits blast radius when credentials are stolen.","Segmentation keeps flat networks from becoming easy lateral movement paths."],
      realWorldRelevance: "Strong grasp of backups reduces rework, supports defensible records, and speeds collaboration across Operating Systems.",
    }
  )
];
