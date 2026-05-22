import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const NET_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Networking Basics",
  subtitle: "ForgEd workforce textbook — Networking Basics",
  paragraphs: [
    "This ForgEd digital textbook presents Networking Basics at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Follow organizational security policy; this course does not replace SOC procedures or certifications alone.",
  ],
};

export const NET_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "network-models",
    1,
    "Network Models",
    [
    section(
      "network-models-s1",
      "1.1 Network Models — Foundations and vocabulary",
      ["Network design trades convenience for segmentation—flat LANs let one stolen laptop become a company-wide event. Network Models is a foundation in Networking Basics because vendor risk matters because your data lives on their systems too. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Phishing exploits urgency and authority—not only technical vulnerabilities. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain network models aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat network models as a shared model for decisions. Security awareness training must be short, frequent, and role-specific. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Segmentation keeps flat networks from becoming easy lateral movement paths."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "network-models-s2",
      "1.2 Network Models — How professionals apply this in practice",
      ["Professionals rarely dispute whether network models exists—they dispute how confidentiality, integrity, and availability frame nearly every security decision. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Vendor risk matters because your data lives on their systems too.","When stakes rise, pause for a second opinion or formal review. Phishing exploits urgency and authority—not only technical vulnerabilities. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Security awareness training must be short, frequent, and role-specific. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking."]
      }
    ),
    section(
      "network-models-s3",
      "1.3 Network Models — Workplace scenarios and documentation",
      ["Scenario: a teammate cites network models in a meeting, but details in the packet do not match the textbook example. Least privilege limits blast radius when credentials are stolen. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Confidentiality, integrity, and availability frame nearly every security decision.","Good documentation states facts, cites the framework, and records the decision. Vendor risk matters because your data lives on their systems too. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Phishing exploits urgency and authority—not only technical vulnerabilities. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Patching closes known doors but cannot fix social engineering."]
      }
    ),
    section(
      "network-models-s4",
      "1.4 Network Models — Common mistakes and how to avoid them",
      ["Common mistakes around network models include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Patching closes known doors but cannot fix social engineering.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Least privilege limits blast radius when credentials are stolen. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Confidentiality, integrity, and availability frame nearly every security decision. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Vendor risk matters because your data lives on their systems too. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Segmentation keeps flat networks from becoming easy lateral movement paths."]
      }
    ),
    section(
      "network-models-s5",
      "1.5 Network Models — Putting the chapter together",
      ["This chapter’s through-line is simple: Network Models connects principles to accountable action. Segmentation keeps flat networks from becoming easy lateral movement paths.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Patching closes known doors but cannot fix social engineering. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits network models in your field. Least privilege limits blast radius when credentials are stolen. Confidentiality, integrity, and availability frame nearly every security decision."], {
        bulletPoints: ["Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking."]
      }
    )
    ],
    {
      learningObjectives: ["Define network models and explain why it matters in Networking Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Network Models: Network design trades convenience for segmentation—flat LANs let one stolen laptop become a company-wide event. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Logging and monitoring turn attacks into detectable patterns.","Backups are worthless if restores are never tested before ransomware strikes.","Multi-factor authentication blocks many credential-stuffing attempts.","Logging and monitoring turn attacks into detectable patterns.","Backups are worthless if restores are never tested before ransomware strikes."],
      realWorldRelevance: "Strong grasp of network models reduces rework, supports defensible records, and speeds collaboration across Networking Basics.",
    }
  ),
  chapter(
    "ip-addressing",
    2,
    "IP Addressing",
    [
    section(
      "ip-addressing-s1",
      "2.1 IP Addressing — Foundations and vocabulary",
      ["IP Addressing is a foundation in Networking Basics because confidentiality, integrity, and availability frame nearly every security decision. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Vendor risk matters because your data lives on their systems too. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ip addressing aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ip addressing as a shared model for decisions. Phishing exploits urgency and authority—not only technical vulnerabilities. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "ip-addressing-s2",
      "2.2 IP Addressing — How professionals apply this in practice",
      ["Professionals rarely dispute whether ip addressing exists—they dispute how least privilege limits blast radius when credentials are stolen. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Confidentiality, integrity, and availability frame nearly every security decision.","When stakes rise, pause for a second opinion or formal review. Vendor risk matters because your data lives on their systems too. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Phishing exploits urgency and authority—not only technical vulnerabilities. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."]
      }
    ),
    section(
      "ip-addressing-s3",
      "2.3 IP Addressing — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ip addressing in a meeting, but details in the packet do not match the textbook example. Segmentation keeps flat networks from becoming easy lateral movement paths. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Least privilege limits blast radius when credentials are stolen.","Good documentation states facts, cites the framework, and records the decision. Confidentiality, integrity, and availability frame nearly every security decision. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Vendor risk matters because your data lives on their systems too. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    ),
    section(
      "ip-addressing-s4",
      "2.4 IP Addressing — Common mistakes and how to avoid them",
      ["Common mistakes around ip addressing include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Patching closes known doors but cannot fix social engineering.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Segmentation keeps flat networks from becoming easy lateral movement paths. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Least privilege limits blast radius when credentials are stolen. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Confidentiality, integrity, and availability frame nearly every security decision. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."]
      }
    ),
    section(
      "ip-addressing-s5",
      "2.5 IP Addressing — Putting the chapter together",
      ["This chapter’s through-line is simple: IP Addressing connects principles to accountable action. Compliance frameworks map controls to risks but do not replace thinking.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Patching closes known doors but cannot fix social engineering. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ip addressing in your field. Segmentation keeps flat networks from becoming easy lateral movement paths. Least privilege limits blast radius when credentials are stolen."], {
        bulletPoints: ["Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too."]
      }
    )
    ],
    {
      learningObjectives: ["Define ip addressing and explain why it matters in Networking Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "IP Addressing connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Segmentation keeps flat networks from becoming easy lateral movement paths.","Patching closes known doors but cannot fix social engineering.","Least privilege limits blast radius when credentials are stolen.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Patching closes known doors but cannot fix social engineering."],
      realWorldRelevance: "Strong grasp of ip addressing reduces rework, supports defensible records, and speeds collaboration across Networking Basics.",
    }
  ),
  chapter(
    "dns-basics",
    3,
    "DNS",
    [
    section(
      "dns-basics-s1",
      "3.1 DNS — Foundations and vocabulary",
      ["DNS is a foundation in Networking Basics because backups are worthless if restores are never tested before ransomware strikes. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Logging and monitoring turn attacks into detectable patterns. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain dns aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat dns as a shared model for decisions. Multi-factor authentication blocks many credential-stuffing attempts. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "dns-basics-s2",
      "3.2 DNS — How professionals apply this in practice",
      ["Professionals rarely dispute whether dns exists—they dispute how logging and monitoring turn attacks into detectable patterns. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Multi-factor authentication blocks many credential-stuffing attempts.","When stakes rise, pause for a second opinion or formal review. Incident response phases include preparation, detection, containment, recovery, lessons learned. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Compliance frameworks map controls to risks but do not replace thinking. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    ),
    section(
      "dns-basics-s3",
      "3.3 DNS — Workplace scenarios and documentation",
      ["Scenario: a teammate cites dns in a meeting, but details in the packet do not match the textbook example. Multi-factor authentication blocks many credential-stuffing attempts. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Incident response phases include preparation, detection, containment, recovery, lessons learned.","Good documentation states facts, cites the framework, and records the decision. Compliance frameworks map controls to risks but do not replace thinking. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Patching closes known doors but cannot fix social engineering. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    ),
    section(
      "dns-basics-s4",
      "3.4 DNS — Common mistakes and how to avoid them",
      ["Common mistakes around dns include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Incident response phases include preparation, detection, containment, recovery, lessons learned.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Compliance frameworks map controls to risks but do not replace thinking. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Patching closes known doors but cannot fix social engineering. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Segmentation keeps flat networks from becoming easy lateral movement paths. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    ),
    section(
      "dns-basics-s5",
      "3.5 DNS — Putting the chapter together",
      ["This chapter’s through-line is simple: DNS connects principles to accountable action. Compliance frameworks map controls to risks but do not replace thinking.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Patching closes known doors but cannot fix social engineering. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits dns in your field. Segmentation keeps flat networks from becoming easy lateral movement paths. Least privilege limits blast radius when credentials are stolen."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    )
    ],
    {
      learningObjectives: ["Define dns and explain why it matters in Networking Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "DNS connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Confidentiality, integrity, and availability frame nearly every security decision.","Least privilege limits blast radius when credentials are stolen.","Vendor risk matters because your data lives on their systems too.","Confidentiality, integrity, and availability frame nearly every security decision.","Least privilege limits blast radius when credentials are stolen."],
      realWorldRelevance: "Strong grasp of dns reduces rework, supports defensible records, and speeds collaboration across Networking Basics.",
    }
  ),
  chapter(
    "wifi-basics",
    4,
    "Wi-Fi",
    [
    section(
      "wifi-basics-s1",
      "4.1 Wi-Fi — Foundations and vocabulary",
      ["Wi-Fi is a foundation in Networking Basics because incident response phases include preparation, detection, containment, recovery, lessons learned. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Compliance frameworks map controls to risks but do not replace thinking. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain wi-fi aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat wi-fi as a shared model for decisions. Patching closes known doors but cannot fix social engineering. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "wifi-basics-s2",
      "4.2 Wi-Fi — How professionals apply this in practice",
      ["Professionals rarely dispute whether wi-fi exists—they dispute how compliance frameworks map controls to risks but do not replace thinking. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Patching closes known doors but cannot fix social engineering.","When stakes rise, pause for a second opinion or formal review. Segmentation keeps flat networks from becoming easy lateral movement paths. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Least privilege limits blast radius when credentials are stolen. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths."]
      }
    ),
    section(
      "wifi-basics-s3",
      "4.3 Wi-Fi — Workplace scenarios and documentation",
      ["Scenario: a teammate cites wi-fi in a meeting, but details in the packet do not match the textbook example. Patching closes known doors but cannot fix social engineering. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Segmentation keeps flat networks from becoming easy lateral movement paths.","Good documentation states facts, cites the framework, and records the decision. Least privilege limits blast radius when credentials are stolen. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Confidentiality, integrity, and availability frame nearly every security decision. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision."]
      }
    ),
    section(
      "wifi-basics-s4",
      "4.4 Wi-Fi — Common mistakes and how to avoid them",
      ["Common mistakes around wi-fi include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Segmentation keeps flat networks from becoming easy lateral movement paths.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Least privilege limits blast radius when credentials are stolen. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Confidentiality, integrity, and availability frame nearly every security decision. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Vendor risk matters because your data lives on their systems too. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths.","Least privilege limits blast radius when credentials are stolen."]
      }
    ),
    section(
      "wifi-basics-s5",
      "4.5 Wi-Fi — Putting the chapter together",
      ["This chapter’s through-line is simple: Wi-Fi connects principles to accountable action. Least privilege limits blast radius when credentials are stolen.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Confidentiality, integrity, and availability frame nearly every security decision. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits wi-fi in your field. Vendor risk matters because your data lives on their systems too. Phishing exploits urgency and authority—not only technical vulnerabilities."], {
        bulletPoints: ["Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths."]
      }
    )
    ],
    {
      learningObjectives: ["Define wi-fi and explain why it matters in Networking Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Wi-Fi connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Incident response phases include preparation, detection, containment, recovery, lessons learned.","Multi-factor authentication blocks many credential-stuffing attempts.","Compliance frameworks map controls to risks but do not replace thinking.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Multi-factor authentication blocks many credential-stuffing attempts."],
      realWorldRelevance: "Strong grasp of wi-fi reduces rework, supports defensible records, and speeds collaboration across Networking Basics.",
    }
  ),
  chapter(
    "ethernet",
    5,
    "Ethernet and Switches",
    [
    section(
      "ethernet-s1",
      "5.1 Ethernet and Switches — Foundations and vocabulary",
      ["Ethernet and Switches is a foundation in Networking Basics because patching closes known doors but cannot fix social engineering. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Segmentation keeps flat networks from becoming easy lateral movement paths. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain ethernet and switches aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat ethernet and switches as a shared model for decisions. Least privilege limits blast radius when credentials are stolen. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "ethernet-s2",
      "5.2 Ethernet and Switches — How professionals apply this in practice",
      ["Professionals rarely dispute whether ethernet and switches exists—they dispute how segmentation keeps flat networks from becoming easy lateral movement paths. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Least privilege limits blast radius when credentials are stolen.","When stakes rise, pause for a second opinion or formal review. Confidentiality, integrity, and availability frame nearly every security decision. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Vendor risk matters because your data lives on their systems too. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths."]
      }
    ),
    section(
      "ethernet-s3",
      "5.3 Ethernet and Switches — Workplace scenarios and documentation",
      ["Scenario: a teammate cites ethernet and switches in a meeting, but details in the packet do not match the textbook example. Least privilege limits blast radius when credentials are stolen. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Confidentiality, integrity, and availability frame nearly every security decision.","Good documentation states facts, cites the framework, and records the decision. Vendor risk matters because your data lives on their systems too. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Phishing exploits urgency and authority—not only technical vulnerabilities. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking."]
      }
    ),
    section(
      "ethernet-s4",
      "5.4 Ethernet and Switches — Common mistakes and how to avoid them",
      ["Common mistakes around ethernet and switches include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Confidentiality, integrity, and availability frame nearly every security decision.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Vendor risk matters because your data lives on their systems too. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Phishing exploits urgency and authority—not only technical vulnerabilities. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Security awareness training must be short, frequent, and role-specific. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering."]
      }
    ),
    section(
      "ethernet-s5",
      "5.5 Ethernet and Switches — Putting the chapter together",
      ["This chapter’s through-line is simple: Ethernet and Switches connects principles to accountable action. Vendor risk matters because your data lives on their systems too.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Phishing exploits urgency and authority—not only technical vulnerabilities. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits ethernet and switches in your field. Security awareness training must be short, frequent, and role-specific. Backups are worthless if restores are never tested before ransomware strikes."], {
        bulletPoints: ["Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned.","Compliance frameworks map controls to risks but do not replace thinking.","Patching closes known doors but cannot fix social engineering.","Segmentation keeps flat networks from becoming easy lateral movement paths."]
      }
    )
    ],
    {
      learningObjectives: ["Define ethernet and switches and explain why it matters in Networking Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Ethernet and Switches connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."],
      realWorldRelevance: "Strong grasp of ethernet and switches reduces rework, supports defensible records, and speeds collaboration across Networking Basics.",
    }
  ),
  chapter(
    "vpn-basics",
    6,
    "VPN Basics",
    [
    section(
      "vpn-basics-s1",
      "6.1 VPN Basics — Foundations and vocabulary",
      ["VPN Basics is a foundation in Networking Basics because phishing exploits urgency and authority—not only technical vulnerabilities. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Security awareness training must be short, frequent, and role-specific. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain vpn basics aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat vpn basics as a shared model for decisions. Backups are worthless if restores are never tested before ransomware strikes. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "vpn-basics-s2",
      "6.2 VPN Basics — How professionals apply this in practice",
      ["Professionals rarely dispute whether vpn basics exists—they dispute how vendor risk matters because your data lives on their systems too. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Phishing exploits urgency and authority—not only technical vulnerabilities.","When stakes rise, pause for a second opinion or formal review. Security awareness training must be short, frequent, and role-specific. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Backups are worthless if restores are never tested before ransomware strikes. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    ),
    section(
      "vpn-basics-s3",
      "6.3 VPN Basics — Workplace scenarios and documentation",
      ["Scenario: a teammate cites vpn basics in a meeting, but details in the packet do not match the textbook example. Confidentiality, integrity, and availability frame nearly every security decision. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Vendor risk matters because your data lives on their systems too.","Good documentation states facts, cites the framework, and records the decision. Phishing exploits urgency and authority—not only technical vulnerabilities. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Security awareness training must be short, frequent, and role-specific. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    ),
    section(
      "vpn-basics-s4",
      "6.4 VPN Basics — Common mistakes and how to avoid them",
      ["Common mistakes around vpn basics include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Least privilege limits blast radius when credentials are stolen.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Confidentiality, integrity, and availability frame nearly every security decision. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Vendor risk matters because your data lives on their systems too. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Phishing exploits urgency and authority—not only technical vulnerabilities. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    ),
    section(
      "vpn-basics-s5",
      "6.5 VPN Basics — Putting the chapter together",
      ["This chapter’s through-line is simple: VPN Basics connects principles to accountable action. Segmentation keeps flat networks from becoming easy lateral movement paths.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Least privilege limits blast radius when credentials are stolen. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits vpn basics in your field. Confidentiality, integrity, and availability frame nearly every security decision. Vendor risk matters because your data lives on their systems too."], {
        bulletPoints: ["Least privilege limits blast radius when credentials are stolen.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific."]
      }
    )
    ],
    {
      learningObjectives: ["Define vpn basics and explain why it matters in Networking Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "VPN Basics connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Confidentiality, integrity, and availability frame nearly every security decision.","Least privilege limits blast radius when credentials are stolen.","Vendor risk matters because your data lives on their systems too.","Confidentiality, integrity, and availability frame nearly every security decision.","Least privilege limits blast radius when credentials are stolen."],
      realWorldRelevance: "Strong grasp of vpn basics reduces rework, supports defensible records, and speeds collaboration across Networking Basics.",
    }
  ),
  chapter(
    "troubleshoot-net",
    7,
    "Network Troubleshooting",
    [
    section(
      "troubleshoot-net-s1",
      "7.1 Network Troubleshooting — Foundations and vocabulary",
      ["Network design trades convenience for segmentation—flat LANs let one stolen laptop become a company-wide event. Network Troubleshooting is a foundation in Networking Basics because segmentation keeps flat networks from becoming easy lateral movement paths. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Patching closes known doors but cannot fix social engineering. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain network troubleshooting aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat network troubleshooting as a shared model for decisions. Least privilege limits blast radius when credentials are stolen. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."],
        citations: [{"source":"CISA — Cybersecurity Guidance","url":"https://www.cisa.gov/topics/cybersecurity-best-practices","note":"Federal best-practice resources"}]
      }
    ),
    section(
      "troubleshoot-net-s2",
      "7.2 Network Troubleshooting — How professionals apply this in practice",
      ["Professionals rarely dispute whether network troubleshooting exists—they dispute how patching closes known doors but cannot fix social engineering. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Least privilege limits blast radius when credentials are stolen.","When stakes rise, pause for a second opinion or formal review. Confidentiality, integrity, and availability frame nearly every security decision. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Vendor risk matters because your data lives on their systems too. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    ),
    section(
      "troubleshoot-net-s3",
      "7.3 Network Troubleshooting — Workplace scenarios and documentation",
      ["Scenario: a teammate cites network troubleshooting in a meeting, but details in the packet do not match the textbook example. Least privilege limits blast radius when credentials are stolen. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Confidentiality, integrity, and availability frame nearly every security decision.","Good documentation states facts, cites the framework, and records the decision. Vendor risk matters because your data lives on their systems too. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Phishing exploits urgency and authority—not only technical vulnerabilities. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes."]
      }
    ),
    section(
      "troubleshoot-net-s4",
      "7.4 Network Troubleshooting — Common mistakes and how to avoid them",
      ["Common mistakes around network troubleshooting include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Confidentiality, integrity, and availability frame nearly every security decision.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Vendor risk matters because your data lives on their systems too. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Phishing exploits urgency and authority—not only technical vulnerabilities. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Security awareness training must be short, frequent, and role-specific. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    ),
    section(
      "troubleshoot-net-s5",
      "7.5 Network Troubleshooting — Putting the chapter together",
      ["This chapter’s through-line is simple: Network Troubleshooting connects principles to accountable action. Vendor risk matters because your data lives on their systems too.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Phishing exploits urgency and authority—not only technical vulnerabilities. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits network troubleshooting in your field. Security awareness training must be short, frequent, and role-specific. Backups are worthless if restores are never tested before ransomware strikes."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    )
    ],
    {
      learningObjectives: ["Define network troubleshooting and explain why it matters in Networking Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Network Troubleshooting: Network design trades convenience for segmentation—flat LANs let one stolen laptop become a company-wide event. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Confidentiality, integrity, and availability frame nearly every security decision.","Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities."],
      realWorldRelevance: "Strong grasp of network troubleshooting reduces rework, supports defensible records, and speeds collaboration across Networking Basics.",
    }
  ),
  chapter(
    "home-office-net",
    8,
    "Home and Office Networks",
    [
    section(
      "home-office-net-s1",
      "8.1 Home and Office Networks — Foundations and vocabulary",
      ["Network design trades convenience for segmentation—flat LANs let one stolen laptop become a company-wide event. Home and Office Networks is a foundation in Networking Basics because patching closes known doors but cannot fix social engineering. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Least privilege limits blast radius when credentials are stolen. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain home and office networks aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat home and office networks as a shared model for decisions. Confidentiality, integrity, and availability frame nearly every security decision. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."],
        citations: [{"source":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Risk-based security outcomes"}]
      }
    ),
    section(
      "home-office-net-s2",
      "8.2 Home and Office Networks — How professionals apply this in practice",
      ["Professionals rarely dispute whether home and office networks exists—they dispute how least privilege limits blast radius when credentials are stolen. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Confidentiality, integrity, and availability frame nearly every security decision.","When stakes rise, pause for a second opinion or formal review. Vendor risk matters because your data lives on their systems too. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Phishing exploits urgency and authority—not only technical vulnerabilities. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    ),
    section(
      "home-office-net-s3",
      "8.3 Home and Office Networks — Workplace scenarios and documentation",
      ["Scenario: a teammate cites home and office networks in a meeting, but details in the packet do not match the textbook example. Confidentiality, integrity, and availability frame nearly every security decision. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Vendor risk matters because your data lives on their systems too.","Good documentation states facts, cites the framework, and records the decision. Phishing exploits urgency and authority—not only technical vulnerabilities. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Security awareness training must be short, frequent, and role-specific. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts.","Incident response phases include preparation, detection, containment, recovery, lessons learned."]
      }
    ),
    section(
      "home-office-net-s4",
      "8.4 Home and Office Networks — Common mistakes and how to avoid them",
      ["Common mistakes around home and office networks include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Vendor risk matters because your data lives on their systems too.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Phishing exploits urgency and authority—not only technical vulnerabilities. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Security awareness training must be short, frequent, and role-specific. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Backups are worthless if restores are never tested before ransomware strikes. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns.","Multi-factor authentication blocks many credential-stuffing attempts."]
      }
    ),
    section(
      "home-office-net-s5",
      "8.5 Home and Office Networks — Putting the chapter together",
      ["This chapter’s through-line is simple: Home and Office Networks connects principles to accountable action. Phishing exploits urgency and authority—not only technical vulnerabilities.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Security awareness training must be short, frequent, and role-specific. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits home and office networks in your field. Backups are worthless if restores are never tested before ransomware strikes. Logging and monitoring turn attacks into detectable patterns."], {
        bulletPoints: ["Vendor risk matters because your data lives on their systems too.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Security awareness training must be short, frequent, and role-specific.","Backups are worthless if restores are never tested before ransomware strikes.","Logging and monitoring turn attacks into detectable patterns."]
      }
    )
    ],
    {
      learningObjectives: ["Define home and office networks and explain why it matters in Networking Basics","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Home and Office Networks: Network design trades convenience for segmentation—flat LANs let one stolen laptop become a company-wide event. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Phishing exploits urgency and authority—not only technical vulnerabilities.","Vendor risk matters because your data lives on their systems too.","Security awareness training must be short, frequent, and role-specific.","Phishing exploits urgency and authority—not only technical vulnerabilities.","Vendor risk matters because your data lives on their systems too."],
      realWorldRelevance: "Strong grasp of home and office networks reduces rework, supports defensible records, and speeds collaboration across Networking Basics.",
    }
  )
];
