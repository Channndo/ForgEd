import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const BRAND_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Branding Fundamentals",
  subtitle: "ForgEd workforce textbook — Branding Fundamentals",
  paragraphs: [
    "This ForgEd digital textbook presents Branding Fundamentals at workforce survey depth — scenarios, objectives, and assessments tied to a randomized question bank. 8 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const BRAND_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "brand-why",
    1,
    "Why Brand Matters",
    [
    section(
      "brand-why-s1",
      "1.1 Why Brand Matters — Foundations and vocabulary",
      ["Why Brand Matters is a foundation in Branding Fundamentals because brand guidelines protect consistency across channels and freelancers. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Storyboards reduce wasted shoot days for video teams. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain why brand matters aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat why brand matters as a shared model for decisions. Contracts should define revisions, deliverables, and usage rights. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["File formats and resolution rules differ for print, web, and video.","Color contrast affects accessibility and brand recognition.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "brand-why-s2",
      "1.2 Why Brand Matters — How professionals apply this in practice",
      ["Professionals rarely dispute whether why brand matters exists—they dispute how color contrast affects accessibility and brand recognition. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Brand guidelines protect consistency across channels and freelancers.","When stakes rise, pause for a second opinion or formal review. Storyboards reduce wasted shoot days for video teams. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Contracts should define revisions, deliverables, and usage rights. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Color contrast affects accessibility and brand recognition.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams."]
      }
    ),
    section(
      "brand-why-s3",
      "1.3 Why Brand Matters — Workplace scenarios and documentation",
      ["Scenario: a teammate cites why brand matters in a meeting, but details in the packet do not match the textbook example. File formats and resolution rules differ for print, web, and video. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Color contrast affects accessibility and brand recognition.","Good documentation states facts, cites the framework, and records the decision. Brand guidelines protect consistency across channels and freelancers. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Storyboards reduce wasted shoot days for video teams. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Color contrast affects accessibility and brand recognition.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing."]
      }
    ),
    section(
      "brand-why-s4",
      "1.4 Why Brand Matters — Common mistakes and how to avoid them",
      ["Common mistakes around why brand matters include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Visual hierarchy guides the eye before readers process every word.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. File formats and resolution rules differ for print, web, and video. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Color contrast affects accessibility and brand recognition. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Brand guidelines protect consistency across channels and freelancers. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["File formats and resolution rules differ for print, web, and video.","Color contrast affects accessibility and brand recognition.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights."]
      }
    ),
    section(
      "brand-why-s5",
      "1.5 Why Brand Matters — Putting the chapter together",
      ["This chapter’s through-line is simple: Why Brand Matters connects principles to accountable action. Grids align elements so layouts feel intentional, not accidental.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Visual hierarchy guides the eye before readers process every word. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits why brand matters in your field. File formats and resolution rules differ for print, web, and video. Color contrast affects accessibility and brand recognition."], {
        bulletPoints: ["Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Color contrast affects accessibility and brand recognition.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams."]
      }
    )
    ],
    {
      learningObjectives: ["Define why brand matters and explain why it matters in Branding Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Why Brand Matters connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["File formats and resolution rules differ for print, web, and video.","Visual hierarchy guides the eye before readers process every word.","Color contrast affects accessibility and brand recognition.","File formats and resolution rules differ for print, web, and video.","Visual hierarchy guides the eye before readers process every word."],
      realWorldRelevance: "Strong grasp of why brand matters reduces rework, supports defensible records, and speeds collaboration across Branding Fundamentals.",
    }
  ),
  chapter(
    "positioning",
    2,
    "Positioning",
    [
    section(
      "positioning-s1",
      "2.1 Positioning — Foundations and vocabulary",
      ["Positioning is a foundation in Branding Fundamentals because contracts should define revisions, deliverables, and usage rights. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Audio levels and room tone matter as much as camera framing. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain positioning aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat positioning as a shared model for decisions. Licensing stock assets prevents costly infringement surprises. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "positioning-s2",
      "2.2 Positioning — How professionals apply this in practice",
      ["Professionals rarely dispute whether positioning exists—they dispute how storyboards reduce wasted shoot days for video teams. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Contracts should define revisions, deliverables, and usage rights.","When stakes rise, pause for a second opinion or formal review. Audio levels and room tone matter as much as camera framing. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Licensing stock assets prevents costly infringement surprises. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work."]
      }
    ),
    section(
      "positioning-s3",
      "2.3 Positioning — Workplace scenarios and documentation",
      ["Scenario: a teammate cites positioning in a meeting, but details in the packet do not match the textbook example. Brand guidelines protect consistency across channels and freelancers. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Storyboards reduce wasted shoot days for video teams.","Good documentation states facts, cites the framework, and records the decision. Contracts should define revisions, deliverables, and usage rights. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Audio levels and room tone matter as much as camera framing. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm."]
      }
    ),
    section(
      "positioning-s4",
      "2.4 Positioning — Common mistakes and how to avoid them",
      ["Common mistakes around positioning include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. File formats and resolution rules differ for print, web, and video.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Brand guidelines protect consistency across channels and freelancers. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Storyboards reduce wasted shoot days for video teams. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Contracts should define revisions, deliverables, and usage rights. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping."]
      }
    ),
    section(
      "positioning-s5",
      "2.5 Positioning — Putting the chapter together",
      ["This chapter’s through-line is simple: Positioning connects principles to accountable action. Visual hierarchy guides the eye before readers process every word.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. File formats and resolution rules differ for print, web, and video. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits positioning in your field. Brand guidelines protect consistency across channels and freelancers. Storyboards reduce wasted shoot days for video teams."], {
        bulletPoints: ["Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work."]
      }
    )
    ],
    {
      learningObjectives: ["Define positioning and explain why it matters in Branding Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Positioning connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing."],
      realWorldRelevance: "Strong grasp of positioning reduces rework, supports defensible records, and speeds collaboration across Branding Fundamentals.",
    }
  ),
  chapter(
    "voice-tone",
    3,
    "Voice and Tone",
    [
    section(
      "voice-tone-s1",
      "3.1 Voice and Tone — Foundations and vocabulary",
      ["Voice and Tone is a foundation in Branding Fundamentals because visual hierarchy guides the eye before readers process every word. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: File formats and resolution rules differ for print, web, and video. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain voice and tone aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat voice and tone as a shared model for decisions. Brand guidelines protect consistency across channels and freelancers. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Contracts should define revisions, deliverables, and usage rights.","Licensing stock assets prevents costly infringement surprises.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "voice-tone-s2",
      "3.2 Voice and Tone — How professionals apply this in practice",
      ["Professionals rarely dispute whether voice and tone exists—they dispute how grids align elements so layouts feel intentional, not accidental. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Visual hierarchy guides the eye before readers process every word.","When stakes rise, pause for a second opinion or formal review. File formats and resolution rules differ for print, web, and video. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Brand guidelines protect consistency across channels and freelancers. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Licensing stock assets prevents costly infringement surprises.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work."]
      }
    ),
    section(
      "voice-tone-s3",
      "3.3 Voice and Tone — Workplace scenarios and documentation",
      ["Scenario: a teammate cites voice and tone in a meeting, but details in the packet do not match the textbook example. Color contrast affects accessibility and brand recognition. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Grids align elements so layouts feel intentional, not accidental.","Good documentation states facts, cites the framework, and records the decision. Visual hierarchy guides the eye before readers process every word. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. File formats and resolution rules differ for print, web, and video. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Licensing stock assets prevents costly infringement surprises.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental."]
      }
    ),
    section(
      "voice-tone-s4",
      "3.4 Voice and Tone — Common mistakes and how to avoid them",
      ["Common mistakes around voice and tone include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Portfolios demonstrate range but should emphasize target client work.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Color contrast affects accessibility and brand recognition. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Grids align elements so layouts feel intentional, not accidental. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Visual hierarchy guides the eye before readers process every word. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Contracts should define revisions, deliverables, and usage rights.","Licensing stock assets prevents costly infringement surprises.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition."]
      }
    ),
    section(
      "voice-tone-s5",
      "3.5 Voice and Tone — Putting the chapter together",
      ["This chapter’s through-line is simple: Voice and Tone connects principles to accountable action. Feedback rounds need deadlines or projects drift without shipping.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Portfolios demonstrate range but should emphasize target client work. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits voice and tone in your field. Color contrast affects accessibility and brand recognition. Grids align elements so layouts feel intentional, not accidental."], {
        bulletPoints: ["Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Licensing stock assets prevents costly infringement surprises.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work."]
      }
    )
    ],
    {
      learningObjectives: ["Define voice and tone and explain why it matters in Branding Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Voice and Tone connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Contracts should define revisions, deliverables, and usage rights.","Storyboards reduce wasted shoot days for video teams.","Licensing stock assets prevents costly infringement surprises.","Contracts should define revisions, deliverables, and usage rights.","Storyboards reduce wasted shoot days for video teams."],
      realWorldRelevance: "Strong grasp of voice and tone reduces rework, supports defensible records, and speeds collaboration across Branding Fundamentals.",
    }
  ),
  chapter(
    "visual-id",
    4,
    "Visual Identity",
    [
    section(
      "visual-id-s1",
      "4.1 Visual Identity — Foundations and vocabulary",
      ["Visual Identity is a foundation in Branding Fundamentals because feedback rounds need deadlines or projects drift without shipping. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Portfolios demonstrate range but should emphasize target client work. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain visual identity aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat visual identity as a shared model for decisions. Color contrast affects accessibility and brand recognition. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "visual-id-s2",
      "4.2 Visual Identity — How professionals apply this in practice",
      ["Professionals rarely dispute whether visual identity exists—they dispute how portfolios demonstrate range but should emphasize target client work. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Color contrast affects accessibility and brand recognition.","When stakes rise, pause for a second opinion or formal review. Grids align elements so layouts feel intentional, not accidental. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. File formats and resolution rules differ for print, web, and video. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work."]
      }
    ),
    section(
      "visual-id-s3",
      "4.3 Visual Identity — Workplace scenarios and documentation",
      ["Scenario: a teammate cites visual identity in a meeting, but details in the packet do not match the textbook example. Color contrast affects accessibility and brand recognition. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Grids align elements so layouts feel intentional, not accidental.","Good documentation states facts, cites the framework, and records the decision. File formats and resolution rules differ for print, web, and video. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Brand guidelines protect consistency across channels and freelancers. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm."]
      }
    ),
    section(
      "visual-id-s4",
      "4.4 Visual Identity — Common mistakes and how to avoid them",
      ["Common mistakes around visual identity include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Grids align elements so layouts feel intentional, not accidental.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. File formats and resolution rules differ for print, web, and video. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Brand guidelines protect consistency across channels and freelancers. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Visual hierarchy guides the eye before readers process every word. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping."]
      }
    ),
    section(
      "visual-id-s5",
      "4.5 Visual Identity — Putting the chapter together",
      ["This chapter’s through-line is simple: Visual Identity connects principles to accountable action. File formats and resolution rules differ for print, web, and video.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Brand guidelines protect consistency across channels and freelancers. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits visual identity in your field. Visual hierarchy guides the eye before readers process every word. Storyboards reduce wasted shoot days for video teams."], {
        bulletPoints: ["Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work."]
      }
    )
    ],
    {
      learningObjectives: ["Define visual identity and explain why it matters in Branding Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Visual Identity connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing."],
      realWorldRelevance: "Strong grasp of visual identity reduces rework, supports defensible records, and speeds collaboration across Branding Fundamentals.",
    }
  ),
  chapter(
    "consistency",
    5,
    "Brand Consistency",
    [
    section(
      "consistency-s1",
      "5.1 Brand Consistency — Foundations and vocabulary",
      ["Brand Consistency is a foundation in Branding Fundamentals because grids align elements so layouts feel intentional, not accidental. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Visual hierarchy guides the eye before readers process every word. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain brand consistency aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat brand consistency as a shared model for decisions. File formats and resolution rules differ for print, web, and video. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Color contrast affects accessibility and brand recognition.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "consistency-s2",
      "5.2 Brand Consistency — How professionals apply this in practice",
      ["Professionals rarely dispute whether brand consistency exists—they dispute how visual hierarchy guides the eye before readers process every word. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. File formats and resolution rules differ for print, web, and video.","When stakes rise, pause for a second opinion or formal review. Brand guidelines protect consistency across channels and freelancers. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Color contrast affects accessibility and brand recognition. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Brand guidelines protect consistency across channels and freelancers.","Color contrast affects accessibility and brand recognition.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing."]
      }
    ),
    section(
      "consistency-s3",
      "5.3 Brand Consistency — Workplace scenarios and documentation",
      ["Scenario: a teammate cites brand consistency in a meeting, but details in the packet do not match the textbook example. File formats and resolution rules differ for print, web, and video. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Brand guidelines protect consistency across channels and freelancers.","Good documentation states facts, cites the framework, and records the decision. Color contrast affects accessibility and brand recognition. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Storyboards reduce wasted shoot days for video teams. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Color contrast affects accessibility and brand recognition.","Storyboards reduce wasted shoot days for video teams."]
      }
    ),
    section(
      "consistency-s4",
      "5.4 Brand Consistency — Common mistakes and how to avoid them",
      ["Common mistakes around brand consistency include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Brand guidelines protect consistency across channels and freelancers.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Color contrast affects accessibility and brand recognition. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Storyboards reduce wasted shoot days for video teams. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Contracts should define revisions, deliverables, and usage rights. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Color contrast affects accessibility and brand recognition.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights."]
      }
    ),
    section(
      "consistency-s5",
      "5.5 Brand Consistency — Putting the chapter together",
      ["This chapter’s through-line is simple: Brand Consistency connects principles to accountable action. Color contrast affects accessibility and brand recognition.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Storyboards reduce wasted shoot days for video teams. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits brand consistency in your field. Contracts should define revisions, deliverables, and usage rights. Audio levels and room tone matter as much as camera framing."], {
        bulletPoints: ["Brand guidelines protect consistency across channels and freelancers.","Color contrast affects accessibility and brand recognition.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing."]
      }
    )
    ],
    {
      learningObjectives: ["Define brand consistency and explain why it matters in Branding Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Brand Consistency connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Brand guidelines protect consistency across channels and freelancers."],
      realWorldRelevance: "Strong grasp of brand consistency reduces rework, supports defensible records, and speeds collaboration across Branding Fundamentals.",
    }
  ),
  chapter(
    "story",
    6,
    "Brand Story",
    [
    section(
      "story-s1",
      "6.1 Brand Story — Foundations and vocabulary",
      ["Brand Story is a foundation in Branding Fundamentals because portfolios demonstrate range but should emphasize target client work. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Grids align elements so layouts feel intentional, not accidental. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain brand story aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat brand story as a shared model for decisions. Visual hierarchy guides the eye before readers process every word. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Storyboards reduce wasted shoot days for video teams.","Color contrast affects accessibility and brand recognition.","Brand guidelines protect consistency across channels and freelancers.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "story-s2",
      "6.2 Brand Story — How professionals apply this in practice",
      ["Professionals rarely dispute whether brand story exists—they dispute how feedback rounds need deadlines or projects drift without shipping. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Portfolios demonstrate range but should emphasize target client work.","When stakes rise, pause for a second opinion or formal review. Grids align elements so layouts feel intentional, not accidental. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Visual hierarchy guides the eye before readers process every word. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["File formats and resolution rules differ for print, web, and video.","Storyboards reduce wasted shoot days for video teams.","Color contrast affects accessibility and brand recognition.","Brand guidelines protect consistency across channels and freelancers.","Contracts should define revisions, deliverables, and usage rights."]
      }
    ),
    section(
      "story-s3",
      "6.3 Brand Story — Workplace scenarios and documentation",
      ["Scenario: a teammate cites brand story in a meeting, but details in the packet do not match the textbook example. Typography choices signal tone—playful, corporate, urgent, or calm. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Feedback rounds need deadlines or projects drift without shipping.","Good documentation states facts, cites the framework, and records the decision. Portfolios demonstrate range but should emphasize target client work. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Grids align elements so layouts feel intentional, not accidental. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Color contrast affects accessibility and brand recognition.","Brand guidelines protect consistency across channels and freelancers.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing.","Licensing stock assets prevents costly infringement surprises."]
      }
    ),
    section(
      "story-s4",
      "6.4 Brand Story — Common mistakes and how to avoid them",
      ["Common mistakes around brand story include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Licensing stock assets prevents costly infringement surprises.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Typography choices signal tone—playful, corporate, urgent, or calm. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Feedback rounds need deadlines or projects drift without shipping. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Portfolios demonstrate range but should emphasize target client work. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Storyboards reduce wasted shoot days for video teams.","Color contrast affects accessibility and brand recognition.","Brand guidelines protect consistency across channels and freelancers.","Contracts should define revisions, deliverables, and usage rights.","Audio levels and room tone matter as much as camera framing."]
      }
    ),
    section(
      "story-s5",
      "6.5 Brand Story — Putting the chapter together",
      ["This chapter’s through-line is simple: Brand Story connects principles to accountable action. Audio levels and room tone matter as much as camera framing.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Licensing stock assets prevents costly infringement surprises. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits brand story in your field. Typography choices signal tone—playful, corporate, urgent, or calm. Feedback rounds need deadlines or projects drift without shipping."], {
        bulletPoints: ["File formats and resolution rules differ for print, web, and video.","Storyboards reduce wasted shoot days for video teams.","Color contrast affects accessibility and brand recognition.","Brand guidelines protect consistency across channels and freelancers.","Contracts should define revisions, deliverables, and usage rights."]
      }
    )
    ],
    {
      learningObjectives: ["Define brand story and explain why it matters in Branding Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Brand Story connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Storyboards reduce wasted shoot days for video teams.","File formats and resolution rules differ for print, web, and video.","Color contrast affects accessibility and brand recognition.","Storyboards reduce wasted shoot days for video teams.","File formats and resolution rules differ for print, web, and video."],
      realWorldRelevance: "Strong grasp of brand story reduces rework, supports defensible records, and speeds collaboration across Branding Fundamentals.",
    }
  ),
  chapter(
    "competitors-brand",
    7,
    "Competitive Differentiation",
    [
    section(
      "competitors-brand-s1",
      "7.1 Competitive Differentiation — Foundations and vocabulary",
      ["Competitive Differentiation is a foundation in Branding Fundamentals because typography choices signal tone—playful, corporate, urgent, or calm. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Feedback rounds need deadlines or projects drift without shipping. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain competitive differentiation aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat competitive differentiation as a shared model for decisions. Portfolios demonstrate range but should emphasize target client work. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "competitors-brand-s2",
      "7.2 Competitive Differentiation — How professionals apply this in practice",
      ["Professionals rarely dispute whether competitive differentiation exists—they dispute how feedback rounds need deadlines or projects drift without shipping. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Portfolios demonstrate range but should emphasize target client work.","When stakes rise, pause for a second opinion or formal review. Color contrast affects accessibility and brand recognition. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Grids align elements so layouts feel intentional, not accidental. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word."]
      }
    ),
    section(
      "competitors-brand-s3",
      "7.3 Competitive Differentiation — Workplace scenarios and documentation",
      ["Scenario: a teammate cites competitive differentiation in a meeting, but details in the packet do not match the textbook example. Portfolios demonstrate range but should emphasize target client work. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Color contrast affects accessibility and brand recognition.","Good documentation states facts, cites the framework, and records the decision. Grids align elements so layouts feel intentional, not accidental. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Visual hierarchy guides the eye before readers process every word. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition."]
      }
    ),
    section(
      "competitors-brand-s4",
      "7.4 Competitive Differentiation — Common mistakes and how to avoid them",
      ["Common mistakes around competitive differentiation include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Color contrast affects accessibility and brand recognition.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Grids align elements so layouts feel intentional, not accidental. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Visual hierarchy guides the eye before readers process every word. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. File formats and resolution rules differ for print, web, and video. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental."]
      }
    ),
    section(
      "competitors-brand-s5",
      "7.5 Competitive Differentiation — Putting the chapter together",
      ["This chapter’s through-line is simple: Competitive Differentiation connects principles to accountable action. Grids align elements so layouts feel intentional, not accidental.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Visual hierarchy guides the eye before readers process every word. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits competitive differentiation in your field. File formats and resolution rules differ for print, web, and video. Brand guidelines protect consistency across channels and freelancers."], {
        bulletPoints: ["Feedback rounds need deadlines or projects drift without shipping.","Portfolios demonstrate range but should emphasize target client work.","Color contrast affects accessibility and brand recognition.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word."]
      }
    )
    ],
    {
      learningObjectives: ["Define competitive differentiation and explain why it matters in Branding Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Competitive Differentiation connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping.","Licensing stock assets prevents costly infringement surprises.","Typography choices signal tone—playful, corporate, urgent, or calm.","Feedback rounds need deadlines or projects drift without shipping."],
      realWorldRelevance: "Strong grasp of competitive differentiation reduces rework, supports defensible records, and speeds collaboration across Branding Fundamentals.",
    }
  ),
  chapter(
    "brand-metrics",
    8,
    "Brand Metrics",
    [
    section(
      "brand-metrics-s1",
      "8.1 Brand Metrics — Foundations and vocabulary",
      ["Brand Metrics is a foundation in Branding Fundamentals because visual hierarchy guides the eye before readers process every word. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: File formats and resolution rules differ for print, web, and video. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain brand metrics aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat brand metrics as a shared model for decisions. Color contrast affects accessibility and brand recognition. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Color contrast affects accessibility and brand recognition.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams."],
        citations: [{"source":"AIGA — Design","url":"https://www.aiga.org/","note":"Professional design community standards"}]
      }
    ),
    section(
      "brand-metrics-s2",
      "8.2 Brand Metrics — How professionals apply this in practice",
      ["Professionals rarely dispute whether brand metrics exists—they dispute how file formats and resolution rules differ for print, web, and video. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Color contrast affects accessibility and brand recognition.","When stakes rise, pause for a second opinion or formal review. Brand guidelines protect consistency across channels and freelancers. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Storyboards reduce wasted shoot days for video teams. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["File formats and resolution rules differ for print, web, and video.","Color contrast affects accessibility and brand recognition.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights."]
      }
    ),
    section(
      "brand-metrics-s3",
      "8.3 Brand Metrics — Workplace scenarios and documentation",
      ["Scenario: a teammate cites brand metrics in a meeting, but details in the packet do not match the textbook example. Color contrast affects accessibility and brand recognition. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Brand guidelines protect consistency across channels and freelancers.","Good documentation states facts, cites the framework, and records the decision. Storyboards reduce wasted shoot days for video teams. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Contracts should define revisions, deliverables, and usage rights. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Color contrast affects accessibility and brand recognition.","Brand guidelines protect consistency across channels and freelancers."]
      }
    ),
    section(
      "brand-metrics-s4",
      "8.4 Brand Metrics — Common mistakes and how to avoid them",
      ["Common mistakes around brand metrics include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Brand guidelines protect consistency across channels and freelancers.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Storyboards reduce wasted shoot days for video teams. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Contracts should define revisions, deliverables, and usage rights. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Audio levels and room tone matter as much as camera framing. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Color contrast affects accessibility and brand recognition.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams."]
      }
    ),
    section(
      "brand-metrics-s5",
      "8.5 Brand Metrics — Putting the chapter together",
      ["This chapter’s through-line is simple: Brand Metrics connects principles to accountable action. Storyboards reduce wasted shoot days for video teams.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Contracts should define revisions, deliverables, and usage rights. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits brand metrics in your field. Audio levels and room tone matter as much as camera framing. Licensing stock assets prevents costly infringement surprises."], {
        bulletPoints: ["File formats and resolution rules differ for print, web, and video.","Color contrast affects accessibility and brand recognition.","Brand guidelines protect consistency across channels and freelancers.","Storyboards reduce wasted shoot days for video teams.","Contracts should define revisions, deliverables, and usage rights."]
      }
    )
    ],
    {
      learningObjectives: ["Define brand metrics and explain why it matters in Branding Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Brand Metrics connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video.","Grids align elements so layouts feel intentional, not accidental.","Visual hierarchy guides the eye before readers process every word.","File formats and resolution rules differ for print, web, and video."],
      realWorldRelevance: "Strong grasp of brand metrics reduces rework, supports defensible records, and speeds collaboration across Branding Fundamentals.",
    }
  )
];
