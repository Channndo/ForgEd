import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const CREA_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Creative Media Fundamentals",
  subtitle: "ForgEd workforce textbook — Creative Media Fundamentals",
  paragraphs: [
    "This ForgEd digital textbook presents Creative Media Fundamentals at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 10 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const CREA_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "design-principles",
    1,
    "Design Principles",
    [
    section(
      "design-principles-s1",
      "1.1 Design Principles — Foundations and vocabulary",
      ["Design Principles is a foundation in Creative Media Fundamentals because brand guidelines protect consistency across channels and freelancers. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Storyboards reduce wasted shoot days for video teams. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain design principles aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat design principles as a shared model for decisions. Contracts should define revisions, deliverables, and usage rights. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "design-principles-s2",
      "1.2 Design Principles — How professionals apply this in practice",
      ["Professionals rarely dispute whether design principles exists—they dispute how storyboards reduce wasted shoot days for video teams. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Contracts should define revisions, deliverables, and usage rights.","When stakes rise, pause for a second opinion or formal review. Audio levels and room tone matter as much as camera framing. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Licensing stock assets prevents costly infringement surprises. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work."]
      }
    ),
    section(
      "design-principles-s3",
      "1.3 Design Principles — Workplace scenarios and documentation",
      ["Scenario: a teammate cites design principles in a meeting, but details in the packet do not match the textbook example. Contracts should define revisions, deliverables, and usage rights. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Audio levels and room tone matter as much as camera framing.","Good documentation states facts, cites the framework, and records the decision. Licensing stock assets prevents costly infringement surprises. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Typography choices signal tone—playful, corporate, urgent, or calm. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm."]
      }
    ),
    section(
      "design-principles-s4",
      "1.4 Design Principles — Common mistakes and how to avoid them",
      ["Common mistakes around design principles include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Audio levels and room tone matter as much as camera framing.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Licensing stock assets prevents costly infringement surprises. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Typography choices signal tone—playful, corporate, urgent, or calm. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Feedback rounds need deadlines or projects drift without shipping. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping."]
      }
    ),
    section(
      "design-principles-s5",
      "1.5 Design Principles — Putting the chapter together",
      ["This chapter’s through-line is simple: Design Principles connects principles to accountable action. Licensing stock assets prevents costly infringement surprises.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Typography choices signal tone—playful, corporate, urgent, or calm. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits design principles in your field. Feedback rounds need deadlines or projects drift without shipping. Portfolios demonstrate range but should emphasize target client work."], {
        bulletPoints: ["Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work."]
      }
    )
    ],
    {
      learningObjectives: ["Define design principles and explain why it matters in Creative Media Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Design Principles connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing."],
      realWorldRelevance: "Strong grasp of design principles reduces rework, supports defensible records, and speeds collaboration across Creative Media Fundamentals.",
    }
  ),
  chapter(
    "visual-tools",
    2,
    "Visual Tools and Workflow",
    [
    section(
      "visual-tools-s1",
      "2.1 Visual Tools and Workflow — Foundations and vocabulary",
      ["Visual Tools and Workflow is a foundation in Creative Media Fundamentals because brand guidelines protect consistency across channels and freelancers. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Visual hierarchy guides the eye before readers process every word. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain visual tools and workflow aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat visual tools and workflow as a shared model for decisions. Storyboards reduce wasted shoot days for video teams. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Brand guidelines protect consistency across channels and freelancers.","Visual hierarchy guides the eye before readers process every word.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "visual-tools-s2",
      "2.2 Visual Tools and Workflow — How professionals apply this in practice",
      ["Professionals rarely dispute whether visual tools and workflow exists—they dispute how visual hierarchy guides the eye before readers process every word. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Storyboards reduce wasted shoot days for video teams.","When stakes rise, pause for a second opinion or formal review. Contracts should define revisions, deliverables, and usage rights. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Audio levels and room tone matter as much as camera framing. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Visual hierarchy guides the eye before readers process every word.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights."]
      }
    ),
    section(
      "visual-tools-s3",
      "2.3 Visual Tools and Workflow — Workplace scenarios and documentation",
      ["Scenario: a teammate cites visual tools and workflow in a meeting, but details in the packet do not match the textbook example. Storyboards reduce wasted shoot days for video teams. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Contracts should define revisions, deliverables, and usage rights.","Good documentation states facts, cites the framework, and records the decision. Audio levels and room tone matter as much as camera framing. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Licensing stock assets prevents costly infringement surprises. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Visual hierarchy guides the eye before readers process every word.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises."]
      }
    ),
    section(
      "visual-tools-s4",
      "2.4 Visual Tools and Workflow — Common mistakes and how to avoid them",
      ["Common mistakes around visual tools and workflow include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Contracts should define revisions, deliverables, and usage rights.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Audio levels and room tone matter as much as camera framing. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Licensing stock assets prevents costly infringement surprises. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Typography choices signal tone—playful, corporate, urgent, or calm. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Brand guidelines protect consistency across channels and freelancers.","Visual hierarchy guides the eye before readers process every word.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing."]
      }
    ),
    section(
      "visual-tools-s5",
      "2.5 Visual Tools and Workflow — Putting the chapter together",
      ["This chapter’s through-line is simple: Visual Tools and Workflow connects principles to accountable action. Audio levels and room tone matter as much as camera framing.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Licensing stock assets prevents costly infringement surprises. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits visual tools and workflow in your field. Typography choices signal tone—playful, corporate, urgent, or calm. Feedback rounds need deadlines or projects drift without shipping."], {
        bulletPoints: ["File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Visual hierarchy guides the eye before readers process every word.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights."]
      }
    )
    ],
    {
      learningObjectives: ["Define visual tools and workflow and explain why it matters in Creative Media Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Visual Tools and Workflow connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Brand guidelines protect consistency across channels and freelancers.","File formats and resolution rules differ for print, web, and video.","Visual hierarchy guides the eye before readers process every word.","Brand guidelines protect consistency across channels and freelancers.","File formats and resolution rules differ for print, web, and video."],
      realWorldRelevance: "Strong grasp of visual tools and workflow reduces rework, supports defensible records, and speeds collaboration across Creative Media Fundamentals.",
    }
  ),
  chapter(
    "photography",
    3,
    "Photography Basics",
    [
    section(
      "photography-s1",
      "3.1 Photography Basics — Foundations and vocabulary",
      ["Photography Basics is a foundation in Creative Media Fundamentals because grids align elements so layouts feel intentional, not accidental. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Visual hierarchy guides the eye before readers process every word. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain photography basics aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat photography basics as a shared model for decisions. File formats and resolution rules differ for print, web, and video. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "photography-s2",
      "3.2 Photography Basics — How professionals apply this in practice",
      ["Professionals rarely dispute whether photography basics exists—they dispute how visual hierarchy guides the eye before readers process every word. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. File formats and resolution rules differ for print, web, and video.","When stakes rise, pause for a second opinion or formal review. Brand guidelines protect consistency across channels and freelancers. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Storyboards reduce wasted shoot days for video teams. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights."]
      }
    ),
    section(
      "photography-s3",
      "3.3 Photography Basics — Workplace scenarios and documentation",
      ["Scenario: a teammate cites photography basics in a meeting, but details in the packet do not match the textbook example. File formats and resolution rules differ for print, web, and video. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Brand guidelines protect consistency across channels and freelancers.","Good documentation states facts, cites the framework, and records the decision. Storyboards reduce wasted shoot days for video teams. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Contracts should define revisions, deliverables, and usage rights. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers."]
      }
    ),
    section(
      "photography-s4",
      "3.4 Photography Basics — Common mistakes and how to avoid them",
      ["Common mistakes around photography basics include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Brand guidelines protect consistency across channels and freelancers.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Storyboards reduce wasted shoot days for video teams. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Contracts should define revisions, deliverables, and usage rights. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Audio levels and room tone matter as much as camera framing. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams."]
      }
    ),
    section(
      "photography-s5",
      "3.5 Photography Basics — Putting the chapter together",
      ["This chapter’s through-line is simple: Photography Basics connects principles to accountable action. Storyboards reduce wasted shoot days for video teams.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Contracts should define revisions, deliverables, and usage rights. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits photography basics in your field. Audio levels and room tone matter as much as camera framing. Licensing stock assets prevents costly infringement surprises."], {
        bulletPoints: ["Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights."]
      }
    )
    ],
    {
      learningObjectives: ["Define photography basics and explain why it matters in Creative Media Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Photography Basics connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word."],
      realWorldRelevance: "Strong grasp of photography basics reduces rework, supports defensible records, and speeds collaboration across Creative Media Fundamentals.",
    }
  ),
  chapter(
    "video-editing",
    4,
    "Video Editing Intro",
    [
    section(
      "video-editing-s1",
      "4.1 Video Editing Intro — Foundations and vocabulary",
      ["Video Editing Intro is a foundation in Creative Media Fundamentals because typography choices signal tone—playful, corporate, urgent, or calm. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Feedback rounds need deadlines or projects drift without shipping. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain video editing intro aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat video editing intro as a shared model for decisions. Portfolios demonstrate range but should emphasize target client work. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","Brand guidelines protect consistency across channels and freelancers."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "video-editing-s2",
      "4.2 Video Editing Intro — How professionals apply this in practice",
      ["Professionals rarely dispute whether video editing intro exists—they dispute how feedback rounds need deadlines or projects drift without shipping. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Portfolios demonstrate range but should emphasize target client work.","When stakes rise, pause for a second opinion or formal review. Color contrast affects accessibility and brand recognition. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Grids align elements so layouts feel intentional, not accidental. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams."]
      }
    ),
    section(
      "video-editing-s3",
      "4.3 Video Editing Intro — Workplace scenarios and documentation",
      ["Scenario: a teammate cites video editing intro in a meeting, but details in the packet do not match the textbook example. Portfolios demonstrate range but should emphasize target client work. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Color contrast affects accessibility and brand recognition.","Good documentation states facts, cites the framework, and records the decision. Grids align elements so layouts feel intentional, not accidental. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Visual hierarchy guides the eye before readers process every word. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word."]
      }
    ),
    section(
      "video-editing-s4",
      "4.4 Video Editing Intro — Common mistakes and how to avoid them",
      ["Common mistakes around video editing intro include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Color contrast affects accessibility and brand recognition.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Grids align elements so layouts feel intentional, not accidental. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Visual hierarchy guides the eye before readers process every word. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Brand guidelines protect consistency across channels and freelancers. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","Brand guidelines protect consistency across channels and freelancers."]
      }
    ),
    section(
      "video-editing-s5",
      "4.5 Video Editing Intro — Putting the chapter together",
      ["This chapter’s through-line is simple: Video Editing Intro connects principles to accountable action. Grids align elements so layouts feel intentional, not accidental.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Visual hierarchy guides the eye before readers process every word. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits video editing intro in your field. Brand guidelines protect consistency across channels and freelancers. Storyboards reduce wasted shoot days for video teams."], {
        bulletPoints: ["Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams."]
      }
    )
    ],
    {
      learningObjectives: ["Define video editing intro and explain why it matters in Creative Media Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Video Editing Intro connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition."],
      realWorldRelevance: "Strong grasp of video editing intro reduces rework, supports defensible records, and speeds collaboration across Creative Media Fundamentals.",
    }
  ),
  chapter(
    "audio-basics",
    5,
    "Audio and Music Basics",
    [
    section(
      "audio-basics-s1",
      "5.1 Audio and Music Basics — Foundations and vocabulary",
      ["Audio and Music Basics is a foundation in Creative Media Fundamentals because storyboards reduce wasted shoot days for video teams. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Contracts should define revisions, deliverables, and usage rights. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain audio and music basics aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat audio and music basics as a shared model for decisions. Licensing stock assets prevents costly infringement surprises. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "audio-basics-s2",
      "5.2 Audio and Music Basics — How professionals apply this in practice",
      ["Professionals rarely dispute whether audio and music basics exists—they dispute how contracts should define revisions, deliverables, and usage rights. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Licensing stock assets prevents costly infringement surprises.","When stakes rise, pause for a second opinion or formal review. Typography choices signal tone—playful, corporate, urgent, or calm. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Feedback rounds need deadlines or projects drift without shipping. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental."]
      }
    ),
    section(
      "audio-basics-s3",
      "5.3 Audio and Music Basics — Workplace scenarios and documentation",
      ["Scenario: a teammate cites audio and music basics in a meeting, but details in the packet do not match the textbook example. Licensing stock assets prevents costly infringement surprises. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Typography choices signal tone—playful, corporate, urgent, or calm.","Good documentation states facts, cites the framework, and records the decision. Feedback rounds need deadlines or projects drift without shipping. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Portfolios demonstrate range but should emphasize target client work. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video."]
      }
    ),
    section(
      "audio-basics-s4",
      "5.4 Audio and Music Basics — Common mistakes and how to avoid them",
      ["Common mistakes around audio and music basics include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Typography choices signal tone—playful, corporate, urgent, or calm.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Feedback rounds need deadlines or projects drift without shipping. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Portfolios demonstrate range but should emphasize target client work. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Color contrast affects accessibility and brand recognition. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word."]
      }
    ),
    section(
      "audio-basics-s5",
      "5.5 Audio and Music Basics — Putting the chapter together",
      ["This chapter’s through-line is simple: Audio and Music Basics connects principles to accountable action. Feedback rounds need deadlines or projects drift without shipping.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Portfolios demonstrate range but should emphasize target client work. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits audio and music basics in your field. Color contrast affects accessibility and brand recognition. Grids align elements so layouts feel intentional, not accidental."], {
        bulletPoints: ["Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental."]
      }
    )
    ],
    {
      learningObjectives: ["Define audio and music basics and explain why it matters in Creative Media Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Audio and Music Basics connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Feedback rounds need deadlines or projects drift without shipping.","Typography choices signal tone—playful, corporate, urgent, or calm.","Portfolios demonstrate range but should emphasize target client work.","Feedback rounds need deadlines or projects drift without shipping.","Typography choices signal tone—playful, corporate, urgent, or calm."],
      realWorldRelevance: "Strong grasp of audio and music basics reduces rework, supports defensible records, and speeds collaboration across Creative Media Fundamentals.",
    }
  ),
  chapter(
    "writing-creative",
    6,
    "Creative Writing",
    [
    section(
      "writing-creative-s1",
      "6.1 Creative Writing — Foundations and vocabulary",
      ["Creative Writing is a foundation in Creative Media Fundamentals because licensing stock assets prevents costly infringement surprises. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Typography choices signal tone—playful, corporate, urgent, or calm. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain creative writing aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat creative writing as a shared model for decisions. Feedback rounds need deadlines or projects drift without shipping. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "writing-creative-s2",
      "6.2 Creative Writing — How professionals apply this in practice",
      ["Professionals rarely dispute whether creative writing exists—they dispute how audio levels and room tone matter as much as camera framing. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Licensing stock assets prevents costly infringement surprises.","When stakes rise, pause for a second opinion or formal review. Typography choices signal tone—playful, corporate, urgent, or calm. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Feedback rounds need deadlines or projects drift without shipping. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams."]
      }
    ),
    section(
      "writing-creative-s3",
      "6.3 Creative Writing — Workplace scenarios and documentation",
      ["Scenario: a teammate cites creative writing in a meeting, but details in the packet do not match the textbook example. Contracts should define revisions, deliverables, and usage rights. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Audio levels and room tone matter as much as camera framing.","Good documentation states facts, cites the framework, and records the decision. Licensing stock assets prevents costly infringement surprises. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Typography choices signal tone—playful, corporate, urgent, or calm. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video."]
      }
    ),
    section(
      "writing-creative-s4",
      "6.4 Creative Writing — Common mistakes and how to avoid them",
      ["Common mistakes around creative writing include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Storyboards reduce wasted shoot days for video teams.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Contracts should define revisions, deliverables, and usage rights. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Audio levels and room tone matter as much as camera framing. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Licensing stock assets prevents costly infringement surprises. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers."]
      }
    ),
    section(
      "writing-creative-s5",
      "6.5 Creative Writing — Putting the chapter together",
      ["This chapter’s through-line is simple: Creative Writing connects principles to accountable action. Brand guidelines protect consistency across channels and freelancers.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Storyboards reduce wasted shoot days for video teams. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits creative writing in your field. Contracts should define revisions, deliverables, and usage rights. Audio levels and room tone matter as much as camera framing."], {
        bulletPoints: ["Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams."]
      }
    )
    ],
    {
      learningObjectives: ["Define creative writing and explain why it matters in Creative Media Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Creative Writing connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental."],
      realWorldRelevance: "Strong grasp of creative writing reduces rework, supports defensible records, and speeds collaboration across Creative Media Fundamentals.",
    }
  ),
  chapter(
    "branding",
    7,
    "Branding and Portfolios",
    [
    section(
      "branding-s1",
      "7.1 Branding and Portfolios — Foundations and vocabulary",
      ["Branding and Portfolios is a foundation in Creative Media Fundamentals because color contrast affects accessibility and brand recognition. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Grids align elements so layouts feel intentional, not accidental. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain branding and portfolios aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat branding and portfolios as a shared model for decisions. Visual hierarchy guides the eye before readers process every word. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "branding-s2",
      "7.2 Branding and Portfolios — How professionals apply this in practice",
      ["Professionals rarely dispute whether branding and portfolios exists—they dispute how grids align elements so layouts feel intentional, not accidental. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Visual hierarchy guides the eye before readers process every word.","When stakes rise, pause for a second opinion or formal review. File formats and resolution rules differ for print, web, and video. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Brand guidelines protect consistency across channels and freelancers. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Feedback rounds need deadlines or projects drift without shipping.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video."]
      }
    ),
    section(
      "branding-s3",
      "7.3 Branding and Portfolios — Workplace scenarios and documentation",
      ["Scenario: a teammate cites branding and portfolios in a meeting, but details in the packet do not match the textbook example. Visual hierarchy guides the eye before readers process every word. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. File formats and resolution rules differ for print, web, and video.","Good documentation states facts, cites the framework, and records the decision. Brand guidelines protect consistency across channels and freelancers. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Portfolios demonstrate range but should emphasize target client work. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Portfolios demonstrate range but should emphasize target client work."]
      }
    ),
    section(
      "branding-s4",
      "7.4 Branding and Portfolios — Common mistakes and how to avoid them",
      ["Common mistakes around branding and portfolios include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. File formats and resolution rules differ for print, web, and video.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Brand guidelines protect consistency across channels and freelancers. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Portfolios demonstrate range but should emphasize target client work. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Storyboards reduce wasted shoot days for video teams. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers."]
      }
    ),
    section(
      "branding-s5",
      "7.5 Branding and Portfolios — Putting the chapter together",
      ["This chapter’s through-line is simple: Branding and Portfolios connects principles to accountable action. Brand guidelines protect consistency across channels and freelancers.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Portfolios demonstrate range but should emphasize target client work. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits branding and portfolios in your field. Storyboards reduce wasted shoot days for video teams. Contracts should define revisions, deliverables, and usage rights."], {
        bulletPoints: ["Feedback rounds need deadlines or projects drift without shipping.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video."]
      }
    )
    ],
    {
      learningObjectives: ["Define branding and portfolios and explain why it matters in Creative Media Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Branding and Portfolios connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Color contrast affects accessibility and brand recognition.","Feedback rounds need deadlines or projects drift without shipping.","Grids align elements so layouts feel intentional, not accidental.","Color contrast affects accessibility and brand recognition.","Feedback rounds need deadlines or projects drift without shipping."],
      realWorldRelevance: "Strong grasp of branding and portfolios reduces rework, supports defensible records, and speeds collaboration across Creative Media Fundamentals.",
    }
  ),
  chapter(
    "collaboration",
    8,
    "Creative Collaboration",
    [
    section(
      "collaboration-s1",
      "8.1 Creative Collaboration — Foundations and vocabulary",
      ["Creative Collaboration is a foundation in Creative Media Fundamentals because typography choices signal tone—playful, corporate, urgent, or calm. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Feedback rounds need deadlines or projects drift without shipping. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain creative collaboration aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat creative collaboration as a shared model for decisions. Portfolios demonstrate range but should emphasize target client work. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "collaboration-s2",
      "8.2 Creative Collaboration — How professionals apply this in practice",
      ["Professionals rarely dispute whether creative collaboration exists—they dispute how feedback rounds need deadlines or projects drift without shipping. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Portfolios demonstrate range but should emphasize target client work.","When stakes rise, pause for a second opinion or formal review. Color contrast affects accessibility and brand recognition. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Grids align elements so layouts feel intentional, not accidental. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition."]
      }
    ),
    section(
      "collaboration-s3",
      "8.3 Creative Collaboration — Workplace scenarios and documentation",
      ["Scenario: a teammate cites creative collaboration in a meeting, but details in the packet do not match the textbook example. Portfolios demonstrate range but should emphasize target client work. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Color contrast affects accessibility and brand recognition.","Good documentation states facts, cites the framework, and records the decision. Grids align elements so layouts feel intentional, not accidental. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Visual hierarchy guides the eye before readers process every word. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word."]
      }
    ),
    section(
      "collaboration-s4",
      "8.4 Creative Collaboration — Common mistakes and how to avoid them",
      ["Common mistakes around creative collaboration include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Color contrast affects accessibility and brand recognition.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Grids align elements so layouts feel intentional, not accidental. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Visual hierarchy guides the eye before readers process every word. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. File formats and resolution rules differ for print, web, and video. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental."]
      }
    ),
    section(
      "collaboration-s5",
      "8.5 Creative Collaboration — Putting the chapter together",
      ["This chapter’s through-line is simple: Creative Collaboration connects principles to accountable action. Grids align elements so layouts feel intentional, not accidental.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Visual hierarchy guides the eye before readers process every word. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits creative collaboration in your field. File formats and resolution rules differ for print, web, and video. Brand guidelines protect consistency across channels and freelancers."], {
        bulletPoints: ["Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition."]
      }
    )
    ],
    {
      learningObjectives: ["Define creative collaboration and explain why it matters in Creative Media Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Creative Collaboration connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Typography choices signal tone—playful, corporate, urgent, or calm.","Licensing stock assets prevents costly infringement surprises.","Feedback rounds need deadlines or projects drift without shipping.","Typography choices signal tone—playful, corporate, urgent, or calm.","Licensing stock assets prevents costly infringement surprises."],
      realWorldRelevance: "Strong grasp of creative collaboration reduces rework, supports defensible records, and speeds collaboration across Creative Media Fundamentals.",
    }
  ),
  chapter(
    "freelance",
    9,
    "Freelance and Client Work",
    [
    section(
      "freelance-s1",
      "9.1 Freelance and Client Work — Foundations and vocabulary",
      ["Freelance and Client Work is a foundation in Creative Media Fundamentals because portfolios demonstrate range but should emphasize target client work. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Brand guidelines protect consistency across channels and freelancers. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain freelance and client work aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat freelance and client work as a shared model for decisions. Storyboards reduce wasted shoot days for video teams. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Portfolios demonstrate range but should emphasize target client work.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "freelance-s2",
      "9.2 Freelance and Client Work — How professionals apply this in practice",
      ["Professionals rarely dispute whether freelance and client work exists—they dispute how brand guidelines protect consistency across channels and freelancers. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Storyboards reduce wasted shoot days for video teams.","When stakes rise, pause for a second opinion or formal review. Contracts should define revisions, deliverables, and usage rights. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Audio levels and room tone matter as much as camera framing. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["File formats and resolution rules differ for print, web, and video.","Portfolios demonstrate range but should emphasize target client work.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights."]
      }
    ),
    section(
      "freelance-s3",
      "9.3 Freelance and Client Work — Workplace scenarios and documentation",
      ["Scenario: a teammate cites freelance and client work in a meeting, but details in the packet do not match the textbook example. Storyboards reduce wasted shoot days for video teams. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Contracts should define revisions, deliverables, and usage rights.","Good documentation states facts, cites the framework, and records the decision. Audio levels and room tone matter as much as camera framing. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Licensing stock assets prevents costly infringement surprises. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises."]
      }
    ),
    section(
      "freelance-s4",
      "9.4 Freelance and Client Work — Common mistakes and how to avoid them",
      ["Common mistakes around freelance and client work include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Contracts should define revisions, deliverables, and usage rights.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Audio levels and room tone matter as much as camera framing. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Licensing stock assets prevents costly infringement surprises. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Typography choices signal tone—playful, corporate, urgent, or calm. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Portfolios demonstrate range but should emphasize target client work.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing."]
      }
    ),
    section(
      "freelance-s5",
      "9.5 Freelance and Client Work — Putting the chapter together",
      ["This chapter’s through-line is simple: Freelance and Client Work connects principles to accountable action. Audio levels and room tone matter as much as camera framing.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Licensing stock assets prevents costly infringement surprises. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits freelance and client work in your field. Typography choices signal tone—playful, corporate, urgent, or calm. Feedback rounds need deadlines or projects drift without shipping."], {
        bulletPoints: ["File formats and resolution rules differ for print, web, and video.","Portfolios demonstrate range but should emphasize target client work.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights."]
      }
    )
    ],
    {
      learningObjectives: ["Define freelance and client work and explain why it matters in Creative Media Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Freelance and Client Work connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Portfolios demonstrate range but should emphasize target client work.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Portfolios demonstrate range but should emphasize target client work.","File formats and resolution rules differ for print, web, and video."],
      realWorldRelevance: "Strong grasp of freelance and client work reduces rework, supports defensible records, and speeds collaboration across Creative Media Fundamentals.",
    }
  ),
  chapter(
    "creative-careers",
    10,
    "Creative Careers",
    [
    section(
      "creative-careers-s1",
      "10.1 Creative Careers — Foundations and vocabulary",
      ["Creative Careers is a foundation in Creative Media Fundamentals because grids align elements so layouts feel intentional, not accidental. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Visual hierarchy guides the eye before readers process every word. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain creative careers aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat creative careers as a shared model for decisions. File formats and resolution rules differ for print, web, and video. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "creative-careers-s2",
      "10.2 Creative Careers — How professionals apply this in practice",
      ["Professionals rarely dispute whether creative careers exists—they dispute how color contrast affects accessibility and brand recognition. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Grids align elements so layouts feel intentional, not accidental.","When stakes rise, pause for a second opinion or formal review. Visual hierarchy guides the eye before readers process every word. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. File formats and resolution rules differ for print, web, and video. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition."]
      }
    ),
    section(
      "creative-careers-s3",
      "10.3 Creative Careers — Workplace scenarios and documentation",
      ["Scenario: a teammate cites creative careers in a meeting, but details in the packet do not match the textbook example. Portfolios demonstrate range but should emphasize target client work. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Color contrast affects accessibility and brand recognition.","Good documentation states facts, cites the framework, and records the decision. Grids align elements so layouts feel intentional, not accidental. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Visual hierarchy guides the eye before readers process every word. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word."]
      }
    ),
    section(
      "creative-careers-s4",
      "10.4 Creative Careers — Common mistakes and how to avoid them",
      ["Common mistakes around creative careers include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Feedback rounds need deadlines or projects drift without shipping.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Portfolios demonstrate range but should emphasize target client work. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Color contrast affects accessibility and brand recognition. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Grids align elements so layouts feel intentional, not accidental. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental."]
      }
    ),
    section(
      "creative-careers-s5",
      "10.5 Creative Careers — Putting the chapter together",
      ["This chapter’s through-line is simple: Creative Careers connects principles to accountable action. Typography choices signal tone—playful, corporate, urgent, or calm.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Feedback rounds need deadlines or projects drift without shipping. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits creative careers in your field. Portfolios demonstrate range but should emphasize target client work. Color contrast affects accessibility and brand recognition."], {
        bulletPoints: ["Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition."]
      }
    )
    ],
    {
      learningObjectives: ["Define creative careers and explain why it matters in Creative Media Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Creative Careers connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Typography choices signal tone—playful, corporate, urgent, or calm.","Licensing stock assets prevents costly infringement surprises.","Feedback rounds need deadlines or projects drift without shipping.","Typography choices signal tone—playful, corporate, urgent, or calm.","Licensing stock assets prevents costly infringement surprises."],
      realWorldRelevance: "Strong grasp of creative careers reduces rework, supports defensible records, and speeds collaboration across Creative Media Fundamentals.",
    }
  )
];
