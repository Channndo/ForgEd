import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const DIG_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Digital Presence",
  subtitle: "ForgEd workforce textbook — Digital Presence",
  paragraphs: [
    "This ForgEd digital textbook presents Digital Presence at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const DIG_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "website-basics",
    1,
    "Website Essentials",
    [
    section(
      "website-basics-s1",
      "1.1 Website Essentials — Foundations and vocabulary",
      ["Website Essentials is a foundation in Digital Presence because audio levels and room tone matter as much as camera framing. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Licensing stock assets prevents costly infringement surprises. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain website essentials aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat website essentials as a shared model for decisions. Typography choices signal tone—playful, corporate, urgent, or calm. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "website-basics-s2",
      "1.2 Website Essentials — How professionals apply this in practice",
      ["Professionals rarely dispute whether website essentials exists—they dispute how contracts should define revisions, deliverables, and usage rights. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Audio levels and room tone matter as much as camera framing.","When stakes rise, pause for a second opinion or formal review. Licensing stock assets prevents costly infringement surprises. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Typography choices signal tone—playful, corporate, urgent, or calm. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights."]
      }
    ),
    section(
      "website-basics-s3",
      "1.3 Website Essentials — Workplace scenarios and documentation",
      ["Scenario: a teammate cites website essentials in a meeting, but details in the packet do not match the textbook example. Storyboards reduce wasted shoot days for video teams. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Contracts should define revisions, deliverables, and usage rights.","Good documentation states facts, cites the framework, and records the decision. Audio levels and room tone matter as much as camera framing. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Licensing stock assets prevents costly infringement surprises. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises."]
      }
    ),
    section(
      "website-basics-s4",
      "1.4 Website Essentials — Common mistakes and how to avoid them",
      ["Common mistakes around website essentials include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Brand guidelines protect consistency across channels and freelancers.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Storyboards reduce wasted shoot days for video teams. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Contracts should define revisions, deliverables, and usage rights. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Audio levels and room tone matter as much as camera framing. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing."]
      }
    ),
    section(
      "website-basics-s5",
      "1.5 Website Essentials — Putting the chapter together",
      ["This chapter’s through-line is simple: Website Essentials connects principles to accountable action. File formats and resolution rules differ for print, web, and video.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Brand guidelines protect consistency across channels and freelancers. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits website essentials in your field. Storyboards reduce wasted shoot days for video teams. Contracts should define revisions, deliverables, and usage rights."], {
        bulletPoints: ["Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights."]
      }
    )
    ],
    {
      learningObjectives: ["Define website essentials and explain why it matters in Digital Presence","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Website Essentials connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["File formats and resolution rules differ for print, web, and video.","Visual hierarchy guides the eye before readers process every word.","Brand guidelines protect consistency across channels and freelancers.","File formats and resolution rules differ for print, web, and video.","Visual hierarchy guides the eye before readers process every word."],
      realWorldRelevance: "Strong grasp of website essentials reduces rework, supports defensible records, and speeds collaboration across Digital Presence.",
    }
  ),
  chapter(
    "seo-intro",
    2,
    "SEO Introduction",
    [
    section(
      "seo-intro-s1",
      "2.1 SEO Introduction — Foundations and vocabulary",
      ["SEO Introduction is a foundation in Digital Presence because visual hierarchy guides the eye before readers process every word. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: File formats and resolution rules differ for print, web, and video. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain seo introduction aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat seo introduction as a shared model for decisions. Brand guidelines protect consistency across channels and freelancers. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "seo-intro-s2",
      "2.2 SEO Introduction — How professionals apply this in practice",
      ["Professionals rarely dispute whether seo introduction exists—they dispute how grids align elements so layouts feel intentional, not accidental. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Visual hierarchy guides the eye before readers process every word.","When stakes rise, pause for a second opinion or formal review. File formats and resolution rules differ for print, web, and video. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Brand guidelines protect consistency across channels and freelancers. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing."]
      }
    ),
    section(
      "seo-intro-s3",
      "2.3 SEO Introduction — Workplace scenarios and documentation",
      ["Scenario: a teammate cites seo introduction in a meeting, but details in the packet do not match the textbook example. Color contrast affects accessibility and brand recognition. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Grids align elements so layouts feel intentional, not accidental.","Good documentation states facts, cites the framework, and records the decision. Visual hierarchy guides the eye before readers process every word. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. File formats and resolution rules differ for print, web, and video. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm."]
      }
    ),
    section(
      "seo-intro-s4",
      "2.4 SEO Introduction — Common mistakes and how to avoid them",
      ["Common mistakes around seo introduction include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Portfolios demonstrate range but should emphasize target client work.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Color contrast affects accessibility and brand recognition. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Grids align elements so layouts feel intentional, not accidental. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Visual hierarchy guides the eye before readers process every word. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises."]
      }
    ),
    section(
      "seo-intro-s5",
      "2.5 SEO Introduction — Putting the chapter together",
      ["This chapter’s through-line is simple: SEO Introduction connects principles to accountable action. Feedback rounds need deadlines or projects drift without shipping.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Portfolios demonstrate range but should emphasize target client work. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits seo introduction in your field. Color contrast affects accessibility and brand recognition. Grids align elements so layouts feel intentional, not accidental."], {
        bulletPoints: ["File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing."]
      }
    )
    ],
    {
      learningObjectives: ["Define seo introduction and explain why it matters in Digital Presence","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "SEO Introduction connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Brand guidelines protect consistency across channels and freelancers.","File formats and resolution rules differ for print, web, and video.","Storyboards reduce wasted shoot days for video teams.","Brand guidelines protect consistency across channels and freelancers.","File formats and resolution rules differ for print, web, and video."],
      realWorldRelevance: "Strong grasp of seo introduction reduces rework, supports defensible records, and speeds collaboration across Digital Presence.",
    }
  ),
  chapter(
    "social-proof",
    3,
    "Social Proof Online",
    [
    section(
      "social-proof-s1",
      "3.1 Social Proof Online — Foundations and vocabulary",
      ["Social Proof Online is a foundation in Digital Presence because portfolios demonstrate range but should emphasize target client work. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Color contrast affects accessibility and brand recognition. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain social proof online aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat social proof online as a shared model for decisions. Grids align elements so layouts feel intentional, not accidental. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "social-proof-s2",
      "3.2 Social Proof Online — How professionals apply this in practice",
      ["Professionals rarely dispute whether social proof online exists—they dispute how color contrast affects accessibility and brand recognition. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Grids align elements so layouts feel intentional, not accidental.","When stakes rise, pause for a second opinion or formal review. Visual hierarchy guides the eye before readers process every word. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. File formats and resolution rules differ for print, web, and video. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises."]
      }
    ),
    section(
      "social-proof-s3",
      "3.3 Social Proof Online — Workplace scenarios and documentation",
      ["Scenario: a teammate cites social proof online in a meeting, but details in the packet do not match the textbook example. Grids align elements so layouts feel intentional, not accidental. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Visual hierarchy guides the eye before readers process every word.","Good documentation states facts, cites the framework, and records the decision. File formats and resolution rules differ for print, web, and video. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Brand guidelines protect consistency across channels and freelancers. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights."]
      }
    ),
    section(
      "social-proof-s4",
      "3.4 Social Proof Online — Common mistakes and how to avoid them",
      ["Common mistakes around social proof online include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Visual hierarchy guides the eye before readers process every word.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. File formats and resolution rules differ for print, web, and video. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Brand guidelines protect consistency across channels and freelancers. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Storyboards reduce wasted shoot days for video teams. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing."]
      }
    ),
    section(
      "social-proof-s5",
      "3.5 Social Proof Online — Putting the chapter together",
      ["This chapter’s through-line is simple: Social Proof Online connects principles to accountable action. File formats and resolution rules differ for print, web, and video.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Brand guidelines protect consistency across channels and freelancers. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits social proof online in your field. Storyboards reduce wasted shoot days for video teams. Contracts should define revisions, deliverables, and usage rights."], {
        bulletPoints: ["Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises."]
      }
    )
    ],
    {
      learningObjectives: ["Define social proof online and explain why it matters in Digital Presence","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Social Proof Online connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers."],
      realWorldRelevance: "Strong grasp of social proof online reduces rework, supports defensible records, and speeds collaboration across Digital Presence.",
    }
  ),
  chapter(
    "content-calendar",
    4,
    "Content Calendar",
    [
    section(
      "content-calendar-s1",
      "4.1 Content Calendar — Foundations and vocabulary",
      ["Content Calendar is a foundation in Digital Presence because contracts should define revisions, deliverables, and usage rights. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Audio levels and room tone matter as much as camera framing. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain content calendar aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat content calendar as a shared model for decisions. Licensing stock assets prevents costly infringement surprises. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "content-calendar-s2",
      "4.2 Content Calendar — How professionals apply this in practice",
      ["Professionals rarely dispute whether content calendar exists—they dispute how storyboards reduce wasted shoot days for video teams. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Contracts should define revisions, deliverables, and usage rights.","When stakes rise, pause for a second opinion or formal review. Audio levels and room tone matter as much as camera framing. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Licensing stock assets prevents costly infringement surprises. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video."]
      }
    ),
    section(
      "content-calendar-s3",
      "4.3 Content Calendar — Workplace scenarios and documentation",
      ["Scenario: a teammate cites content calendar in a meeting, but details in the packet do not match the textbook example. Brand guidelines protect consistency across channels and freelancers. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Storyboards reduce wasted shoot days for video teams.","Good documentation states facts, cites the framework, and records the decision. Contracts should define revisions, deliverables, and usage rights. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Audio levels and room tone matter as much as camera framing. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams."]
      }
    ),
    section(
      "content-calendar-s4",
      "4.4 Content Calendar — Common mistakes and how to avoid them",
      ["Common mistakes around content calendar include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. File formats and resolution rules differ for print, web, and video.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Brand guidelines protect consistency across channels and freelancers. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Storyboards reduce wasted shoot days for video teams. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Contracts should define revisions, deliverables, and usage rights. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers."]
      }
    ),
    section(
      "content-calendar-s5",
      "4.5 Content Calendar — Putting the chapter together",
      ["This chapter’s through-line is simple: Content Calendar connects principles to accountable action. Visual hierarchy guides the eye before readers process every word.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. File formats and resolution rules differ for print, web, and video. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits content calendar in your field. Brand guidelines protect consistency across channels and freelancers. Storyboards reduce wasted shoot days for video teams."], {
        bulletPoints: ["Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video."]
      }
    )
    ],
    {
      learningObjectives: ["Define content calendar and explain why it matters in Digital Presence","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Content Calendar connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Color contrast affects accessibility and brand recognition.","Portfolios demonstrate range but should emphasize target client work.","Grids align elements so layouts feel intentional, not accidental.","Color contrast affects accessibility and brand recognition.","Portfolios demonstrate range but should emphasize target client work."],
      realWorldRelevance: "Strong grasp of content calendar reduces rework, supports defensible records, and speeds collaboration across Digital Presence.",
    }
  ),
  chapter(
    "reviews",
    5,
    "Reviews and Reputation",
    [
    section(
      "reviews-s1",
      "5.1 Reviews and Reputation — Foundations and vocabulary",
      ["Reviews and Reputation is a foundation in Digital Presence because visual hierarchy guides the eye before readers process every word. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: File formats and resolution rules differ for print, web, and video. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain reviews and reputation aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat reviews and reputation as a shared model for decisions. Brand guidelines protect consistency across channels and freelancers. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "reviews-s2",
      "5.2 Reviews and Reputation — How professionals apply this in practice",
      ["Professionals rarely dispute whether reviews and reputation exists—they dispute how file formats and resolution rules differ for print, web, and video. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Brand guidelines protect consistency across channels and freelancers.","When stakes rise, pause for a second opinion or formal review. Storyboards reduce wasted shoot days for video teams. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Contracts should define revisions, deliverables, and usage rights. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental."]
      }
    ),
    section(
      "reviews-s3",
      "5.3 Reviews and Reputation — Workplace scenarios and documentation",
      ["Scenario: a teammate cites reviews and reputation in a meeting, but details in the packet do not match the textbook example. Brand guidelines protect consistency across channels and freelancers. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Storyboards reduce wasted shoot days for video teams.","Good documentation states facts, cites the framework, and records the decision. Contracts should define revisions, deliverables, and usage rights. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Audio levels and room tone matter as much as camera framing. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video."]
      }
    ),
    section(
      "reviews-s4",
      "5.4 Reviews and Reputation — Common mistakes and how to avoid them",
      ["Common mistakes around reviews and reputation include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Storyboards reduce wasted shoot days for video teams.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Contracts should define revisions, deliverables, and usage rights. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Audio levels and room tone matter as much as camera framing. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Licensing stock assets prevents costly infringement surprises. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word."]
      }
    ),
    section(
      "reviews-s5",
      "5.5 Reviews and Reputation — Putting the chapter together",
      ["This chapter’s through-line is simple: Reviews and Reputation connects principles to accountable action. Contracts should define revisions, deliverables, and usage rights.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Audio levels and room tone matter as much as camera framing. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits reviews and reputation in your field. Licensing stock assets prevents costly infringement surprises. Typography choices signal tone—playful, corporate, urgent, or calm."], {
        bulletPoints: ["Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental."]
      }
    )
    ],
    {
      learningObjectives: ["Define reviews and reputation and explain why it matters in Digital Presence","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Reviews and Reputation connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Feedback rounds need deadlines or projects drift without shipping.","Typography choices signal tone—playful, corporate, urgent, or calm.","Portfolios demonstrate range but should emphasize target client work.","Feedback rounds need deadlines or projects drift without shipping.","Typography choices signal tone—playful, corporate, urgent, or calm."],
      realWorldRelevance: "Strong grasp of reviews and reputation reduces rework, supports defensible records, and speeds collaboration across Digital Presence.",
    }
  ),
  chapter(
    "analytics-web",
    6,
    "Web Analytics Intro",
    [
    section(
      "analytics-web-s1",
      "6.1 Web Analytics Intro — Foundations and vocabulary",
      ["Web Analytics Intro is a foundation in Digital Presence because portfolios demonstrate range but should emphasize target client work. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Color contrast affects accessibility and brand recognition. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain web analytics intro aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat web analytics intro as a shared model for decisions. Grids align elements so layouts feel intentional, not accidental. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "analytics-web-s2",
      "6.2 Web Analytics Intro — How professionals apply this in practice",
      ["Professionals rarely dispute whether web analytics intro exists—they dispute how color contrast affects accessibility and brand recognition. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Grids align elements so layouts feel intentional, not accidental.","When stakes rise, pause for a second opinion or formal review. Visual hierarchy guides the eye before readers process every word. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. File formats and resolution rules differ for print, web, and video. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition."]
      }
    ),
    section(
      "analytics-web-s3",
      "6.3 Web Analytics Intro — Workplace scenarios and documentation",
      ["Scenario: a teammate cites web analytics intro in a meeting, but details in the packet do not match the textbook example. Grids align elements so layouts feel intentional, not accidental. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Visual hierarchy guides the eye before readers process every word.","Good documentation states facts, cites the framework, and records the decision. File formats and resolution rules differ for print, web, and video. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Brand guidelines protect consistency across channels and freelancers. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping."]
      }
    ),
    section(
      "analytics-web-s4",
      "6.4 Web Analytics Intro — Common mistakes and how to avoid them",
      ["Common mistakes around web analytics intro include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Visual hierarchy guides the eye before readers process every word.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. File formats and resolution rules differ for print, web, and video. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Brand guidelines protect consistency across channels and freelancers. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Storyboards reduce wasted shoot days for video teams. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work."]
      }
    ),
    section(
      "analytics-web-s5",
      "6.5 Web Analytics Intro — Putting the chapter together",
      ["This chapter’s through-line is simple: Web Analytics Intro connects principles to accountable action. File formats and resolution rules differ for print, web, and video.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Brand guidelines protect consistency across channels and freelancers. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits web analytics intro in your field. Storyboards reduce wasted shoot days for video teams. Contracts should define revisions, deliverables, and usage rights."], {
        bulletPoints: ["Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition."]
      }
    )
    ],
    {
      learningObjectives: ["Define web analytics intro and explain why it matters in Digital Presence","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Web Analytics Intro connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises."],
      realWorldRelevance: "Strong grasp of web analytics intro reduces rework, supports defensible records, and speeds collaboration across Digital Presence.",
    }
  ),
  chapter(
    "local-presence",
    7,
    "Local Presence",
    [
    section(
      "local-presence-s1",
      "7.1 Local Presence — Foundations and vocabulary",
      ["Local Presence is a foundation in Digital Presence because grids align elements so layouts feel intentional, not accidental. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Visual hierarchy guides the eye before readers process every word. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain local presence aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat local presence as a shared model for decisions. File formats and resolution rules differ for print, web, and video. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "local-presence-s2",
      "7.2 Local Presence — How professionals apply this in practice",
      ["Professionals rarely dispute whether local presence exists—they dispute how color contrast affects accessibility and brand recognition. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Grids align elements so layouts feel intentional, not accidental.","When stakes rise, pause for a second opinion or formal review. Visual hierarchy guides the eye before readers process every word. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. File formats and resolution rules differ for print, web, and video. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers."]
      }
    ),
    section(
      "local-presence-s3",
      "7.3 Local Presence — Workplace scenarios and documentation",
      ["Scenario: a teammate cites local presence in a meeting, but details in the packet do not match the textbook example. Portfolios demonstrate range but should emphasize target client work. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Color contrast affects accessibility and brand recognition.","Good documentation states facts, cites the framework, and records the decision. Grids align elements so layouts feel intentional, not accidental. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Visual hierarchy guides the eye before readers process every word. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights."]
      }
    ),
    section(
      "local-presence-s4",
      "7.4 Local Presence — Common mistakes and how to avoid them",
      ["Common mistakes around local presence include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Feedback rounds need deadlines or projects drift without shipping.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Portfolios demonstrate range but should emphasize target client work. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Color contrast affects accessibility and brand recognition. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Grids align elements so layouts feel intentional, not accidental. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams."]
      }
    ),
    section(
      "local-presence-s5",
      "7.5 Local Presence — Putting the chapter together",
      ["This chapter’s through-line is simple: Local Presence connects principles to accountable action. Typography choices signal tone—playful, corporate, urgent, or calm.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Feedback rounds need deadlines or projects drift without shipping. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits local presence in your field. Portfolios demonstrate range but should emphasize target client work. Color contrast affects accessibility and brand recognition."], {
        bulletPoints: ["Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers."]
      }
    )
    ],
    {
      learningObjectives: ["Define local presence and explain why it matters in Digital Presence","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Local Presence connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Grids align elements so layouts feel intentional, not accidental.","Color contrast affects accessibility and brand recognition.","Visual hierarchy guides the eye before readers process every word.","Grids align elements so layouts feel intentional, not accidental.","Color contrast affects accessibility and brand recognition."],
      realWorldRelevance: "Strong grasp of local presence reduces rework, supports defensible records, and speeds collaboration across Digital Presence.",
    }
  ),
  chapter(
    "brand-digital",
    8,
    "Digital Brand Safety",
    [
    section(
      "brand-digital-s1",
      "8.1 Digital Brand Safety — Foundations and vocabulary",
      ["Digital Brand Safety is a foundation in Digital Presence because licensing stock assets prevents costly infringement surprises. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Typography choices signal tone—playful, corporate, urgent, or calm. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain digital brand safety aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat digital brand safety as a shared model for decisions. Feedback rounds need deadlines or projects drift without shipping. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Grids align elements so layouts feel intentional, not accidental."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "brand-digital-s2",
      "8.2 Digital Brand Safety — How professionals apply this in practice",
      ["Professionals rarely dispute whether digital brand safety exists—they dispute how typography choices signal tone—playful, corporate, urgent, or calm. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Feedback rounds need deadlines or projects drift without shipping.","When stakes rise, pause for a second opinion or formal review. Portfolios demonstrate range but should emphasize target client work. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Grids align elements so layouts feel intentional, not accidental. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work."]
      }
    ),
    section(
      "brand-digital-s3",
      "8.3 Digital Brand Safety — Workplace scenarios and documentation",
      ["Scenario: a teammate cites digital brand safety in a meeting, but details in the packet do not match the textbook example. Feedback rounds need deadlines or projects drift without shipping. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Portfolios demonstrate range but should emphasize target client work.","Good documentation states facts, cites the framework, and records the decision. Grids align elements so layouts feel intentional, not accidental. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Visual hierarchy guides the eye before readers process every word. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word."]
      }
    ),
    section(
      "brand-digital-s4",
      "8.4 Digital Brand Safety — Common mistakes and how to avoid them",
      ["Common mistakes around digital brand safety include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Portfolios demonstrate range but should emphasize target client work.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Grids align elements so layouts feel intentional, not accidental. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Visual hierarchy guides the eye before readers process every word. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. File formats and resolution rules differ for print, web, and video. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Grids align elements so layouts feel intentional, not accidental."]
      }
    ),
    section(
      "brand-digital-s5",
      "8.5 Digital Brand Safety — Putting the chapter together",
      ["This chapter’s through-line is simple: Digital Brand Safety connects principles to accountable action. Grids align elements so layouts feel intentional, not accidental.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Visual hierarchy guides the eye before readers process every word. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits digital brand safety in your field. File formats and resolution rules differ for print, web, and video. Color contrast affects accessibility and brand recognition."], {
        bulletPoints: ["Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work."]
      }
    )
    ],
    {
      learningObjectives: ["Define digital brand safety and explain why it matters in Digital Presence","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Digital Brand Safety connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Licensing stock assets prevents costly infringement surprises.","Audio levels and room tone matter as much as camera framing.","Typography choices signal tone—playful, corporate, urgent, or calm.","Licensing stock assets prevents costly infringement surprises.","Audio levels and room tone matter as much as camera framing."],
      realWorldRelevance: "Strong grasp of digital brand safety reduces rework, supports defensible records, and speeds collaboration across Digital Presence.",
    }
  )
];
