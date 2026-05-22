import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const SCI_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Science Fundamentals",
  subtitle: "ForgEd deep-dive — science fundamentals",
  paragraphs: [
    "This ForgEd digital textbook presents Science Fundamentals at academic survey depth — cited frameworks, rigorous prose, and chapter learning objectives. 10 chapters build logically; each includes five sections you should read before attempting quizzes.",
    "Use the table of contents to study sequentially or to revisit topics before exams. Section quizzes, chapter checks, and the course final are tracked on your ForgEd profile when signed in.",
    "Content is practical workforce education—not licensure, certification exams, or employer policy by itself.",
  ],
};

export const SCI_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "scientific-method",
    1,
    "The Scientific Method",
    [
    section(
      "scientific-method-s1",
      "1.1 The Scientific Method — Foundations and vocabulary",
      ["The scientific method cycles observation, hypothesis, controlled experiment, analysis, and revision—claims stay provisional until evidence accumulates. The Scientific Method is a foundation in Science Fundamentals because measurement uncertainty should be reported, not hidden, in honest science. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Research ethics require consent, privacy, and humane treatment of subjects. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain the scientific method aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat the scientific method as a shared model for decisions. Controlled variables help isolate cause from coincidence in experiments. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Models simplify reality and fail when their assumptions stop holding.","Peer review slows publication but filters obvious methodological flaws.","Hypotheses must be testable and falsifiable to count as scientific claims.","Graphs require labeled axes, units, and honest scales.","Measurement uncertainty should be reported, not hidden, in honest science."],
        citations: [{"source":"NIH — Science Education","url":"https://www.nih.gov/health-information","note":"Evidence and health-science literacy links"}]
      }
    ),
    section(
      "scientific-method-s2",
      "1.2 The Scientific Method — How professionals apply this in practice",
      ["Professionals rarely dispute whether the scientific method exists—they dispute how research ethics require consent, privacy, and humane treatment of subjects. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Controlled variables help isolate cause from coincidence in experiments.","When stakes rise, pause for a second opinion or formal review. Atoms combine in fixed ratios in compounds described by chemical equations. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Plate tectonics, weather, and oceans interact in earth systems. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Forces, energy, and motion follow conservation laws in classical physics.","Models simplify reality and fail when their assumptions stop holding.","Peer review slows publication but filters obvious methodological flaws.","Hypotheses must be testable and falsifiable to count as scientific claims.","Graphs require labeled axes, units, and honest scales."]
      }
    ),
    section(
      "scientific-method-s3",
      "1.3 The Scientific Method — Workplace scenarios and documentation",
      ["Scenario: a teammate cites the scientific method in a meeting, but details in the packet do not match the textbook example. Controlled variables help isolate cause from coincidence in experiments. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Atoms combine in fixed ratios in compounds described by chemical equations.","Good documentation states facts, cites the framework, and records the decision. Plate tectonics, weather, and oceans interact in earth systems. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Cells are the basic unit of life; DNA stores hereditary information. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Peer review slows publication but filters obvious methodological flaws.","Hypotheses must be testable and falsifiable to count as scientific claims.","Graphs require labeled axes, units, and honest scales.","Measurement uncertainty should be reported, not hidden, in honest science.","Research ethics require consent, privacy, and humane treatment of subjects."]
      }
    ),
    section(
      "scientific-method-s4",
      "1.4 The Scientific Method — Common mistakes and how to avoid them",
      ["Common mistakes around the scientific method include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Atoms combine in fixed ratios in compounds described by chemical equations.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Plate tectonics, weather, and oceans interact in earth systems. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Cells are the basic unit of life; DNA stores hereditary information. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Lab notebooks create an audit trail for replication and safety. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Models simplify reality and fail when their assumptions stop holding.","Peer review slows publication but filters obvious methodological flaws.","Hypotheses must be testable and falsifiable to count as scientific claims.","Graphs require labeled axes, units, and honest scales.","Measurement uncertainty should be reported, not hidden, in honest science."]
      }
    ),
    section(
      "scientific-method-s5",
      "1.5 The Scientific Method — Putting the chapter together",
      ["This chapter’s through-line is simple: The Scientific Method connects principles to accountable action. Plate tectonics, weather, and oceans interact in earth systems.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Cells are the basic unit of life; DNA stores hereditary information. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits the scientific method in your field. Lab notebooks create an audit trail for replication and safety. Forces, energy, and motion follow conservation laws in classical physics."], {
        bulletPoints: ["Forces, energy, and motion follow conservation laws in classical physics.","Models simplify reality and fail when their assumptions stop holding.","Peer review slows publication but filters obvious methodological flaws.","Hypotheses must be testable and falsifiable to count as scientific claims.","Graphs require labeled axes, units, and honest scales."]
      }
    )
    ],
    {
      learningObjectives: ["Define the scientific method and explain why it matters in Science Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "The Scientific Method: The scientific method cycles observation, hypothesis, controlled experiment, analysis, and revision—claims stay provisional until evidence accumulates. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Models simplify reality and fail when their assumptions stop holding.","Forces, energy, and motion follow conservation laws in classical physics.","Peer review slows publication but filters obvious methodological flaws.","Models simplify reality and fail when their assumptions stop holding.","Forces, energy, and motion follow conservation laws in classical physics."],
      realWorldRelevance: "Strong grasp of the scientific method reduces rework, supports defensible records, and speeds collaboration across Science Fundamentals.",
    }
  ),
  chapter(
    "biology-basics",
    2,
    "Biology Essentials",
    [
    section(
      "biology-basics-s1",
      "2.1 Biology Essentials — Foundations and vocabulary",
      ["Biology Essentials is a foundation in Science Fundamentals because controlled variables help isolate cause from coincidence in experiments. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Atoms combine in fixed ratios in compounds described by chemical equations. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain biology essentials aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat biology essentials as a shared model for decisions. Hypotheses must be testable and falsifiable to count as scientific claims. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Peer review slows publication but filters obvious methodological flaws.","Graphs require labeled axes, units, and honest scales.","Measurement uncertainty should be reported, not hidden, in honest science.","Research ethics require consent, privacy, and humane treatment of subjects.","Controlled variables help isolate cause from coincidence in experiments."],
        citations: [{"source":"National Science Foundation","url":"https://www.nsf.gov/","note":"U.S. science education and research context"}]
      }
    ),
    section(
      "biology-basics-s2",
      "2.2 Biology Essentials — How professionals apply this in practice",
      ["Professionals rarely dispute whether biology essentials exists—they dispute how research ethics require consent, privacy, and humane treatment of subjects. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Controlled variables help isolate cause from coincidence in experiments.","When stakes rise, pause for a second opinion or formal review. Atoms combine in fixed ratios in compounds described by chemical equations. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Hypotheses must be testable and falsifiable to count as scientific claims. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Graphs require labeled axes, units, and honest scales.","Measurement uncertainty should be reported, not hidden, in honest science.","Research ethics require consent, privacy, and humane treatment of subjects.","Controlled variables help isolate cause from coincidence in experiments.","Atoms combine in fixed ratios in compounds described by chemical equations."]
      }
    ),
    section(
      "biology-basics-s3",
      "2.3 Biology Essentials — Workplace scenarios and documentation",
      ["Scenario: a teammate cites biology essentials in a meeting, but details in the packet do not match the textbook example. Measurement uncertainty should be reported, not hidden, in honest science. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Research ethics require consent, privacy, and humane treatment of subjects.","Good documentation states facts, cites the framework, and records the decision. Controlled variables help isolate cause from coincidence in experiments. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Atoms combine in fixed ratios in compounds described by chemical equations. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Models simplify reality and fail when their assumptions stop holding.","Peer review slows publication but filters obvious methodological flaws.","Graphs require labeled axes, units, and honest scales.","Measurement uncertainty should be reported, not hidden, in honest science.","Research ethics require consent, privacy, and humane treatment of subjects."]
      }
    ),
    section(
      "biology-basics-s4",
      "2.4 Biology Essentials — Common mistakes and how to avoid them",
      ["Common mistakes around biology essentials include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Graphs require labeled axes, units, and honest scales.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Measurement uncertainty should be reported, not hidden, in honest science. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Research ethics require consent, privacy, and humane treatment of subjects. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Controlled variables help isolate cause from coincidence in experiments. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Peer review slows publication but filters obvious methodological flaws.","Graphs require labeled axes, units, and honest scales.","Measurement uncertainty should be reported, not hidden, in honest science.","Research ethics require consent, privacy, and humane treatment of subjects.","Controlled variables help isolate cause from coincidence in experiments."]
      }
    ),
    section(
      "biology-basics-s5",
      "2.5 Biology Essentials — Putting the chapter together",
      ["This chapter’s through-line is simple: Biology Essentials connects principles to accountable action. Peer review slows publication but filters obvious methodological flaws.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Graphs require labeled axes, units, and honest scales. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits biology essentials in your field. Measurement uncertainty should be reported, not hidden, in honest science. Research ethics require consent, privacy, and humane treatment of subjects."], {
        bulletPoints: ["Graphs require labeled axes, units, and honest scales.","Measurement uncertainty should be reported, not hidden, in honest science.","Research ethics require consent, privacy, and humane treatment of subjects.","Controlled variables help isolate cause from coincidence in experiments.","Atoms combine in fixed ratios in compounds described by chemical equations."]
      }
    )
    ],
    {
      learningObjectives: ["Define biology essentials and explain why it matters in Science Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Biology Essentials connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Peer review slows publication but filters obvious methodological flaws.","Graphs require labeled axes, units, and honest scales.","Models simplify reality and fail when their assumptions stop holding.","Peer review slows publication but filters obvious methodological flaws.","Graphs require labeled axes, units, and honest scales."],
      realWorldRelevance: "Strong grasp of biology essentials reduces rework, supports defensible records, and speeds collaboration across Science Fundamentals.",
    }
  ),
  chapter(
    "chemistry-basics",
    3,
    "Chemistry Essentials",
    [
    section(
      "chemistry-basics-s1",
      "3.1 Chemistry Essentials — Foundations and vocabulary",
      ["Chemistry Essentials is a foundation in Science Fundamentals because research ethics require consent, privacy, and humane treatment of subjects. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Controlled variables help isolate cause from coincidence in experiments. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain chemistry essentials aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat chemistry essentials as a shared model for decisions. Atoms combine in fixed ratios in compounds described by chemical equations. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety.","Forces, energy, and motion follow conservation laws in classical physics.","Models simplify reality and fail when their assumptions stop holding."],
        citations: [{"source":"NIH — Science Education","url":"https://www.nih.gov/health-information","note":"Evidence and health-science literacy links"}]
      }
    ),
    section(
      "chemistry-basics-s2",
      "3.2 Chemistry Essentials — How professionals apply this in practice",
      ["Professionals rarely dispute whether chemistry essentials exists—they dispute how controlled variables help isolate cause from coincidence in experiments. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Atoms combine in fixed ratios in compounds described by chemical equations.","When stakes rise, pause for a second opinion or formal review. Hypotheses must be testable and falsifiable to count as scientific claims. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Plate tectonics, weather, and oceans interact in earth systems. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Hypotheses must be testable and falsifiable to count as scientific claims.","Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety.","Forces, energy, and motion follow conservation laws in classical physics."]
      }
    ),
    section(
      "chemistry-basics-s3",
      "3.3 Chemistry Essentials — Workplace scenarios and documentation",
      ["Scenario: a teammate cites chemistry essentials in a meeting, but details in the packet do not match the textbook example. Atoms combine in fixed ratios in compounds described by chemical equations. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Hypotheses must be testable and falsifiable to count as scientific claims.","Good documentation states facts, cites the framework, and records the decision. Plate tectonics, weather, and oceans interact in earth systems. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Cells are the basic unit of life; DNA stores hereditary information. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety.","Forces, energy, and motion follow conservation laws in classical physics.","Models simplify reality and fail when their assumptions stop holding.","Peer review slows publication but filters obvious methodological flaws."]
      }
    ),
    section(
      "chemistry-basics-s4",
      "3.4 Chemistry Essentials — Common mistakes and how to avoid them",
      ["Common mistakes around chemistry essentials include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Hypotheses must be testable and falsifiable to count as scientific claims.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Plate tectonics, weather, and oceans interact in earth systems. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Cells are the basic unit of life; DNA stores hereditary information. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Lab notebooks create an audit trail for replication and safety. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety.","Forces, energy, and motion follow conservation laws in classical physics.","Models simplify reality and fail when their assumptions stop holding."]
      }
    ),
    section(
      "chemistry-basics-s5",
      "3.5 Chemistry Essentials — Putting the chapter together",
      ["This chapter’s through-line is simple: Chemistry Essentials connects principles to accountable action. Plate tectonics, weather, and oceans interact in earth systems.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Cells are the basic unit of life; DNA stores hereditary information. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits chemistry essentials in your field. Lab notebooks create an audit trail for replication and safety. Forces, energy, and motion follow conservation laws in classical physics."], {
        bulletPoints: ["Hypotheses must be testable and falsifiable to count as scientific claims.","Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety.","Forces, energy, and motion follow conservation laws in classical physics."]
      }
    )
    ],
    {
      learningObjectives: ["Define chemistry essentials and explain why it matters in Science Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Chemistry Essentials connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Plate tectonics, weather, and oceans interact in earth systems.","Hypotheses must be testable and falsifiable to count as scientific claims.","Cells are the basic unit of life; DNA stores hereditary information.","Plate tectonics, weather, and oceans interact in earth systems.","Hypotheses must be testable and falsifiable to count as scientific claims."],
      realWorldRelevance: "Strong grasp of chemistry essentials reduces rework, supports defensible records, and speeds collaboration across Science Fundamentals.",
    }
  ),
  chapter(
    "physics-basics",
    4,
    "Physics Essentials",
    [
    section(
      "physics-basics-s1",
      "4.1 Physics Essentials — Foundations and vocabulary",
      ["Physics Essentials is a foundation in Science Fundamentals because graphs require labeled axes, units, and honest scales. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Measurement uncertainty should be reported, not hidden, in honest science. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain physics essentials aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat physics essentials as a shared model for decisions. Research ethics require consent, privacy, and humane treatment of subjects. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Atoms combine in fixed ratios in compounds described by chemical equations.","Hypotheses must be testable and falsifiable to count as scientific claims.","Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety."],
        citations: [{"source":"National Science Foundation","url":"https://www.nsf.gov/","note":"U.S. science education and research context"}]
      }
    ),
    section(
      "physics-basics-s2",
      "4.2 Physics Essentials — How professionals apply this in practice",
      ["Professionals rarely dispute whether physics essentials exists—they dispute how peer review slows publication but filters obvious methodological flaws. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Graphs require labeled axes, units, and honest scales.","When stakes rise, pause for a second opinion or formal review. Measurement uncertainty should be reported, not hidden, in honest science. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Research ethics require consent, privacy, and humane treatment of subjects. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Hypotheses must be testable and falsifiable to count as scientific claims.","Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety.","Models simplify reality and fail when their assumptions stop holding."]
      }
    ),
    section(
      "physics-basics-s3",
      "4.3 Physics Essentials — Workplace scenarios and documentation",
      ["Scenario: a teammate cites physics essentials in a meeting, but details in the packet do not match the textbook example. Forces, energy, and motion follow conservation laws in classical physics. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Peer review slows publication but filters obvious methodological flaws.","Good documentation states facts, cites the framework, and records the decision. Graphs require labeled axes, units, and honest scales. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Measurement uncertainty should be reported, not hidden, in honest science. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Controlled variables help isolate cause from coincidence in experiments.","Atoms combine in fixed ratios in compounds described by chemical equations.","Hypotheses must be testable and falsifiable to count as scientific claims.","Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information."]
      }
    ),
    section(
      "physics-basics-s4",
      "4.4 Physics Essentials — Common mistakes and how to avoid them",
      ["Common mistakes around physics essentials include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Models simplify reality and fail when their assumptions stop holding.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Forces, energy, and motion follow conservation laws in classical physics. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Peer review slows publication but filters obvious methodological flaws. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Graphs require labeled axes, units, and honest scales. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Atoms combine in fixed ratios in compounds described by chemical equations.","Hypotheses must be testable and falsifiable to count as scientific claims.","Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety."]
      }
    ),
    section(
      "physics-basics-s5",
      "4.5 Physics Essentials — Putting the chapter together",
      ["This chapter’s through-line is simple: Physics Essentials connects principles to accountable action. Lab notebooks create an audit trail for replication and safety.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Models simplify reality and fail when their assumptions stop holding. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits physics essentials in your field. Forces, energy, and motion follow conservation laws in classical physics. Peer review slows publication but filters obvious methodological flaws."], {
        bulletPoints: ["Hypotheses must be testable and falsifiable to count as scientific claims.","Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety.","Models simplify reality and fail when their assumptions stop holding."]
      }
    )
    ],
    {
      learningObjectives: ["Define physics essentials and explain why it matters in Science Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Physics Essentials connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Atoms combine in fixed ratios in compounds described by chemical equations.","Hypotheses must be testable and falsifiable to count as scientific claims.","Controlled variables help isolate cause from coincidence in experiments.","Atoms combine in fixed ratios in compounds described by chemical equations.","Hypotheses must be testable and falsifiable to count as scientific claims."],
      realWorldRelevance: "Strong grasp of physics essentials reduces rework, supports defensible records, and speeds collaboration across Science Fundamentals.",
    }
  ),
  chapter(
    "earth-science",
    5,
    "Earth and Space Science",
    [
    section(
      "earth-science-s1",
      "5.1 Earth and Space Science — Foundations and vocabulary",
      ["Earth systems integrate geology, oceanography, and atmospheric processes—plate tectonics and climate data interpret change across deep time. Earth and Space Science is a foundation in Science Fundamentals because controlled variables help isolate cause from coincidence in experiments. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Atoms combine in fixed ratios in compounds described by chemical equations. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain earth and space science aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat earth and space science as a shared model for decisions. Hypotheses must be testable and falsifiable to count as scientific claims. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Plate tectonics, weather, and oceans interact in earth systems.","Peer review slows publication but filters obvious methodological flaws.","Graphs require labeled axes, units, and honest scales.","Research ethics require consent, privacy, and humane treatment of subjects.","Controlled variables help isolate cause from coincidence in experiments."],
        citations: [{"source":"NIH — Science Education","url":"https://www.nih.gov/health-information","note":"Evidence and health-science literacy links"}]
      }
    ),
    section(
      "earth-science-s2",
      "5.2 Earth and Space Science — How professionals apply this in practice",
      ["Professionals rarely dispute whether earth and space science exists—they dispute how atoms combine in fixed ratios in compounds described by chemical equations. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Hypotheses must be testable and falsifiable to count as scientific claims.","When stakes rise, pause for a second opinion or formal review. Cells are the basic unit of life; DNA stores hereditary information. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Lab notebooks create an audit trail for replication and safety. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Measurement uncertainty should be reported, not hidden, in honest science.","Plate tectonics, weather, and oceans interact in earth systems.","Peer review slows publication but filters obvious methodological flaws.","Graphs require labeled axes, units, and honest scales.","Research ethics require consent, privacy, and humane treatment of subjects."]
      }
    ),
    section(
      "earth-science-s3",
      "5.3 Earth and Space Science — Workplace scenarios and documentation",
      ["Scenario: a teammate cites earth and space science in a meeting, but details in the packet do not match the textbook example. Hypotheses must be testable and falsifiable to count as scientific claims. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Cells are the basic unit of life; DNA stores hereditary information.","Good documentation states facts, cites the framework, and records the decision. Lab notebooks create an audit trail for replication and safety. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Forces, energy, and motion follow conservation laws in classical physics. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Peer review slows publication but filters obvious methodological flaws.","Graphs require labeled axes, units, and honest scales.","Research ethics require consent, privacy, and humane treatment of subjects.","Controlled variables help isolate cause from coincidence in experiments.","Atoms combine in fixed ratios in compounds described by chemical equations."]
      }
    ),
    section(
      "earth-science-s4",
      "5.4 Earth and Space Science — Common mistakes and how to avoid them",
      ["Common mistakes around earth and space science include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Cells are the basic unit of life; DNA stores hereditary information.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Lab notebooks create an audit trail for replication and safety. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Forces, energy, and motion follow conservation laws in classical physics. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Models simplify reality and fail when their assumptions stop holding. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Plate tectonics, weather, and oceans interact in earth systems.","Peer review slows publication but filters obvious methodological flaws.","Graphs require labeled axes, units, and honest scales.","Research ethics require consent, privacy, and humane treatment of subjects.","Controlled variables help isolate cause from coincidence in experiments."]
      }
    ),
    section(
      "earth-science-s5",
      "5.5 Earth and Space Science — Putting the chapter together",
      ["This chapter’s through-line is simple: Earth and Space Science connects principles to accountable action. Lab notebooks create an audit trail for replication and safety.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Forces, energy, and motion follow conservation laws in classical physics. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits earth and space science in your field. Models simplify reality and fail when their assumptions stop holding. Measurement uncertainty should be reported, not hidden, in honest science."], {
        bulletPoints: ["Measurement uncertainty should be reported, not hidden, in honest science.","Plate tectonics, weather, and oceans interact in earth systems.","Peer review slows publication but filters obvious methodological flaws.","Graphs require labeled axes, units, and honest scales.","Research ethics require consent, privacy, and humane treatment of subjects."]
      }
    )
    ],
    {
      learningObjectives: ["Define earth and space science and explain why it matters in Science Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Earth and Space Science: Earth systems integrate geology, oceanography, and atmospheric processes—plate tectonics and climate data interpret change across deep time. Five sections move from vocabulary to application, scenarios, pitfalls, and synthesis.",
      keyConcepts: ["Plate tectonics, weather, and oceans interact in earth systems.","Measurement uncertainty should be reported, not hidden, in honest science.","Peer review slows publication but filters obvious methodological flaws.","Plate tectonics, weather, and oceans interact in earth systems.","Measurement uncertainty should be reported, not hidden, in honest science."],
      realWorldRelevance: "Strong grasp of earth and space science reduces rework, supports defensible records, and speeds collaboration across Science Fundamentals.",
    }
  ),
  chapter(
    "lab-skills",
    6,
    "Laboratory Skills",
    [
    section(
      "lab-skills-s1",
      "6.1 Laboratory Skills — Foundations and vocabulary",
      ["Laboratory Skills is a foundation in Science Fundamentals because graphs require labeled axes, units, and honest scales. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Measurement uncertainty should be reported, not hidden, in honest science. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain laboratory skills aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat laboratory skills as a shared model for decisions. Research ethics require consent, privacy, and humane treatment of subjects. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Atoms combine in fixed ratios in compounds described by chemical equations.","Hypotheses must be testable and falsifiable to count as scientific claims.","Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety."],
        citations: [{"source":"NIH — Science Education","url":"https://www.nih.gov/health-information","note":"Evidence and health-science literacy links"}]
      }
    ),
    section(
      "lab-skills-s2",
      "6.2 Laboratory Skills — How professionals apply this in practice",
      ["Professionals rarely dispute whether laboratory skills exists—they dispute how measurement uncertainty should be reported, not hidden, in honest science. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Research ethics require consent, privacy, and humane treatment of subjects.","When stakes rise, pause for a second opinion or formal review. Controlled variables help isolate cause from coincidence in experiments. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Atoms combine in fixed ratios in compounds described by chemical equations. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Controlled variables help isolate cause from coincidence in experiments.","Atoms combine in fixed ratios in compounds described by chemical equations.","Hypotheses must be testable and falsifiable to count as scientific claims.","Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information."]
      }
    ),
    section(
      "lab-skills-s3",
      "6.3 Laboratory Skills — Workplace scenarios and documentation",
      ["Scenario: a teammate cites laboratory skills in a meeting, but details in the packet do not match the textbook example. Research ethics require consent, privacy, and humane treatment of subjects. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Controlled variables help isolate cause from coincidence in experiments.","Good documentation states facts, cites the framework, and records the decision. Atoms combine in fixed ratios in compounds described by chemical equations. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Hypotheses must be testable and falsifiable to count as scientific claims. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Hypotheses must be testable and falsifiable to count as scientific claims.","Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety.","Forces, energy, and motion follow conservation laws in classical physics."]
      }
    ),
    section(
      "lab-skills-s4",
      "6.4 Laboratory Skills — Common mistakes and how to avoid them",
      ["Common mistakes around laboratory skills include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Controlled variables help isolate cause from coincidence in experiments.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Atoms combine in fixed ratios in compounds described by chemical equations. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Hypotheses must be testable and falsifiable to count as scientific claims. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Plate tectonics, weather, and oceans interact in earth systems. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Atoms combine in fixed ratios in compounds described by chemical equations.","Hypotheses must be testable and falsifiable to count as scientific claims.","Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety."]
      }
    ),
    section(
      "lab-skills-s5",
      "6.5 Laboratory Skills — Putting the chapter together",
      ["This chapter’s through-line is simple: Laboratory Skills connects principles to accountable action. Atoms combine in fixed ratios in compounds described by chemical equations.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Hypotheses must be testable and falsifiable to count as scientific claims. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits laboratory skills in your field. Plate tectonics, weather, and oceans interact in earth systems. Cells are the basic unit of life; DNA stores hereditary information."], {
        bulletPoints: ["Controlled variables help isolate cause from coincidence in experiments.","Atoms combine in fixed ratios in compounds described by chemical equations.","Hypotheses must be testable and falsifiable to count as scientific claims.","Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information."]
      }
    )
    ],
    {
      learningObjectives: ["Define laboratory skills and explain why it matters in Science Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Laboratory Skills connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Atoms combine in fixed ratios in compounds described by chemical equations.","Controlled variables help isolate cause from coincidence in experiments.","Hypotheses must be testable and falsifiable to count as scientific claims.","Atoms combine in fixed ratios in compounds described by chemical equations.","Controlled variables help isolate cause from coincidence in experiments."],
      realWorldRelevance: "Strong grasp of laboratory skills reduces rework, supports defensible records, and speeds collaboration across Science Fundamentals.",
    }
  ),
  chapter(
    "data-analysis",
    7,
    "Data and Graphs",
    [
    section(
      "data-analysis-s1",
      "7.1 Data and Graphs — Foundations and vocabulary",
      ["Data and Graphs is a foundation in Science Fundamentals because graphs require labeled axes, units, and honest scales. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Peer review slows publication but filters obvious methodological flaws. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain data and graphs aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat data and graphs as a shared model for decisions. Measurement uncertainty should be reported, not hidden, in honest science. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Controlled variables help isolate cause from coincidence in experiments.","Atoms combine in fixed ratios in compounds described by chemical equations.","Hypotheses must be testable and falsifiable to count as scientific claims.","Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information."],
        citations: [{"source":"National Science Foundation","url":"https://www.nsf.gov/","note":"U.S. science education and research context"}]
      }
    ),
    section(
      "data-analysis-s2",
      "7.2 Data and Graphs — How professionals apply this in practice",
      ["Professionals rarely dispute whether data and graphs exists—they dispute how models simplify reality and fail when their assumptions stop holding. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Graphs require labeled axes, units, and honest scales.","When stakes rise, pause for a second opinion or formal review. Peer review slows publication but filters obvious methodological flaws. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Measurement uncertainty should be reported, not hidden, in honest science. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Atoms combine in fixed ratios in compounds described by chemical equations.","Hypotheses must be testable and falsifiable to count as scientific claims.","Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety."]
      }
    ),
    section(
      "data-analysis-s3",
      "7.3 Data and Graphs — Workplace scenarios and documentation",
      ["Scenario: a teammate cites data and graphs in a meeting, but details in the packet do not match the textbook example. Forces, energy, and motion follow conservation laws in classical physics. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Models simplify reality and fail when their assumptions stop holding.","Good documentation states facts, cites the framework, and records the decision. Graphs require labeled axes, units, and honest scales. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Peer review slows publication but filters obvious methodological flaws. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Research ethics require consent, privacy, and humane treatment of subjects.","Controlled variables help isolate cause from coincidence in experiments.","Atoms combine in fixed ratios in compounds described by chemical equations.","Hypotheses must be testable and falsifiable to count as scientific claims.","Plate tectonics, weather, and oceans interact in earth systems."]
      }
    ),
    section(
      "data-analysis-s4",
      "7.4 Data and Graphs — Common mistakes and how to avoid them",
      ["Common mistakes around data and graphs include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Lab notebooks create an audit trail for replication and safety.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Forces, energy, and motion follow conservation laws in classical physics. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Models simplify reality and fail when their assumptions stop holding. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Graphs require labeled axes, units, and honest scales. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Controlled variables help isolate cause from coincidence in experiments.","Atoms combine in fixed ratios in compounds described by chemical equations.","Hypotheses must be testable and falsifiable to count as scientific claims.","Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information."]
      }
    ),
    section(
      "data-analysis-s5",
      "7.5 Data and Graphs — Putting the chapter together",
      ["This chapter’s through-line is simple: Data and Graphs connects principles to accountable action. Cells are the basic unit of life; DNA stores hereditary information.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Lab notebooks create an audit trail for replication and safety. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits data and graphs in your field. Forces, energy, and motion follow conservation laws in classical physics. Models simplify reality and fail when their assumptions stop holding."], {
        bulletPoints: ["Atoms combine in fixed ratios in compounds described by chemical equations.","Hypotheses must be testable and falsifiable to count as scientific claims.","Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety."]
      }
    )
    ],
    {
      learningObjectives: ["Define data and graphs and explain why it matters in Science Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Data and Graphs connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Controlled variables help isolate cause from coincidence in experiments.","Atoms combine in fixed ratios in compounds described by chemical equations.","Research ethics require consent, privacy, and humane treatment of subjects.","Controlled variables help isolate cause from coincidence in experiments.","Atoms combine in fixed ratios in compounds described by chemical equations."],
      realWorldRelevance: "Strong grasp of data and graphs reduces rework, supports defensible records, and speeds collaboration across Science Fundamentals.",
    }
  ),
  chapter(
    "research-ethics",
    8,
    "Research and Ethics",
    [
    section(
      "research-ethics-s1",
      "8.1 Research and Ethics — Foundations and vocabulary",
      ["Research and Ethics is a foundation in Science Fundamentals because forces, energy, and motion follow conservation laws in classical physics. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Models simplify reality and fail when their assumptions stop holding. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain research and ethics aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat research and ethics as a shared model for decisions. Research ethics require consent, privacy, and humane treatment of subjects. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Graphs require labeled axes, units, and honest scales.","Measurement uncertainty should be reported, not hidden, in honest science.","Controlled variables help isolate cause from coincidence in experiments.","Atoms combine in fixed ratios in compounds described by chemical equations.","Hypotheses must be testable and falsifiable to count as scientific claims."],
        citations: [{"source":"National Science Foundation","url":"https://www.nsf.gov/","note":"U.S. science education and research context"}]
      }
    ),
    section(
      "research-ethics-s2",
      "8.2 Research and Ethics — How professionals apply this in practice",
      ["Professionals rarely dispute whether research and ethics exists—they dispute how models simplify reality and fail when their assumptions stop holding. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Research ethics require consent, privacy, and humane treatment of subjects.","When stakes rise, pause for a second opinion or formal review. Peer review slows publication but filters obvious methodological flaws. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Graphs require labeled axes, units, and honest scales. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Peer review slows publication but filters obvious methodological flaws.","Graphs require labeled axes, units, and honest scales.","Measurement uncertainty should be reported, not hidden, in honest science.","Controlled variables help isolate cause from coincidence in experiments.","Atoms combine in fixed ratios in compounds described by chemical equations."]
      }
    ),
    section(
      "research-ethics-s3",
      "8.3 Research and Ethics — Workplace scenarios and documentation",
      ["Scenario: a teammate cites research and ethics in a meeting, but details in the packet do not match the textbook example. Research ethics require consent, privacy, and humane treatment of subjects. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Peer review slows publication but filters obvious methodological flaws.","Good documentation states facts, cites the framework, and records the decision. Graphs require labeled axes, units, and honest scales. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Measurement uncertainty should be reported, not hidden, in honest science. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Measurement uncertainty should be reported, not hidden, in honest science.","Controlled variables help isolate cause from coincidence in experiments.","Atoms combine in fixed ratios in compounds described by chemical equations.","Hypotheses must be testable and falsifiable to count as scientific claims.","Plate tectonics, weather, and oceans interact in earth systems."]
      }
    ),
    section(
      "research-ethics-s4",
      "8.4 Research and Ethics — Common mistakes and how to avoid them",
      ["Common mistakes around research and ethics include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Peer review slows publication but filters obvious methodological flaws.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Graphs require labeled axes, units, and honest scales. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Measurement uncertainty should be reported, not hidden, in honest science. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Controlled variables help isolate cause from coincidence in experiments. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Graphs require labeled axes, units, and honest scales.","Measurement uncertainty should be reported, not hidden, in honest science.","Controlled variables help isolate cause from coincidence in experiments.","Atoms combine in fixed ratios in compounds described by chemical equations.","Hypotheses must be testable and falsifiable to count as scientific claims."]
      }
    ),
    section(
      "research-ethics-s5",
      "8.5 Research and Ethics — Putting the chapter together",
      ["This chapter’s through-line is simple: Research and Ethics connects principles to accountable action. Graphs require labeled axes, units, and honest scales.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Measurement uncertainty should be reported, not hidden, in honest science. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits research and ethics in your field. Controlled variables help isolate cause from coincidence in experiments. Atoms combine in fixed ratios in compounds described by chemical equations."], {
        bulletPoints: ["Peer review slows publication but filters obvious methodological flaws.","Graphs require labeled axes, units, and honest scales.","Measurement uncertainty should be reported, not hidden, in honest science.","Controlled variables help isolate cause from coincidence in experiments.","Atoms combine in fixed ratios in compounds described by chemical equations."]
      }
    )
    ],
    {
      learningObjectives: ["Define research and ethics and explain why it matters in Science Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Research and Ethics connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Graphs require labeled axes, units, and honest scales.","Peer review slows publication but filters obvious methodological flaws.","Measurement uncertainty should be reported, not hidden, in honest science.","Graphs require labeled axes, units, and honest scales.","Peer review slows publication but filters obvious methodological flaws."],
      realWorldRelevance: "Strong grasp of research and ethics reduces rework, supports defensible records, and speeds collaboration across Science Fundamentals.",
    }
  ),
  chapter(
    "applied-science",
    9,
    "Applied Science",
    [
    section(
      "applied-science-s1",
      "9.1 Applied Science — Foundations and vocabulary",
      ["Applied Science is a foundation in Science Fundamentals because atoms combine in fixed ratios in compounds described by chemical equations. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Hypotheses must be testable and falsifiable to count as scientific claims. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain applied science aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat applied science as a shared model for decisions. Plate tectonics, weather, and oceans interact in earth systems. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety.","Forces, energy, and motion follow conservation laws in classical physics.","Models simplify reality and fail when their assumptions stop holding."],
        citations: [{"source":"NIH — Science Education","url":"https://www.nih.gov/health-information","note":"Evidence and health-science literacy links"}]
      }
    ),
    section(
      "applied-science-s2",
      "9.2 Applied Science — How professionals apply this in practice",
      ["Professionals rarely dispute whether applied science exists—they dispute how controlled variables help isolate cause from coincidence in experiments. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Atoms combine in fixed ratios in compounds described by chemical equations.","When stakes rise, pause for a second opinion or formal review. Hypotheses must be testable and falsifiable to count as scientific claims. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Plate tectonics, weather, and oceans interact in earth systems. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Hypotheses must be testable and falsifiable to count as scientific claims.","Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety.","Forces, energy, and motion follow conservation laws in classical physics."]
      }
    ),
    section(
      "applied-science-s3",
      "9.3 Applied Science — Workplace scenarios and documentation",
      ["Scenario: a teammate cites applied science in a meeting, but details in the packet do not match the textbook example. Research ethics require consent, privacy, and humane treatment of subjects. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Controlled variables help isolate cause from coincidence in experiments.","Good documentation states facts, cites the framework, and records the decision. Atoms combine in fixed ratios in compounds described by chemical equations. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Hypotheses must be testable and falsifiable to count as scientific claims. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety.","Forces, energy, and motion follow conservation laws in classical physics.","Models simplify reality and fail when their assumptions stop holding.","Measurement uncertainty should be reported, not hidden, in honest science."]
      }
    ),
    section(
      "applied-science-s4",
      "9.4 Applied Science — Common mistakes and how to avoid them",
      ["Common mistakes around applied science include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Graphs require labeled axes, units, and honest scales.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Research ethics require consent, privacy, and humane treatment of subjects. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Controlled variables help isolate cause from coincidence in experiments. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Atoms combine in fixed ratios in compounds described by chemical equations. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety.","Forces, energy, and motion follow conservation laws in classical physics.","Models simplify reality and fail when their assumptions stop holding."]
      }
    ),
    section(
      "applied-science-s5",
      "9.5 Applied Science — Putting the chapter together",
      ["This chapter’s through-line is simple: Applied Science connects principles to accountable action. Peer review slows publication but filters obvious methodological flaws.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Graphs require labeled axes, units, and honest scales. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits applied science in your field. Research ethics require consent, privacy, and humane treatment of subjects. Controlled variables help isolate cause from coincidence in experiments."], {
        bulletPoints: ["Hypotheses must be testable and falsifiable to count as scientific claims.","Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety.","Forces, energy, and motion follow conservation laws in classical physics."]
      }
    )
    ],
    {
      learningObjectives: ["Define applied science and explain why it matters in Science Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Applied Science connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Plate tectonics, weather, and oceans interact in earth systems.","Hypotheses must be testable and falsifiable to count as scientific claims.","Cells are the basic unit of life; DNA stores hereditary information.","Plate tectonics, weather, and oceans interact in earth systems.","Hypotheses must be testable and falsifiable to count as scientific claims."],
      realWorldRelevance: "Strong grasp of applied science reduces rework, supports defensible records, and speeds collaboration across Science Fundamentals.",
    }
  ),
  chapter(
    "science-careers",
    10,
    "Science Careers",
    [
    section(
      "science-careers-s1",
      "10.1 Science Careers — Foundations and vocabulary",
      ["Science Careers is a foundation in Science Fundamentals because peer review slows publication but filters obvious methodological flaws. Learners who memorize titles without mechanisms struggle on assessments that expect you to apply ideas to short scenarios.","Start with vocabulary that professionals actually use: Graphs require labeled axes, units, and honest scales. When you read statutes, standards, lab reports, or customer tickets, underline terms you cannot define—those gaps become quiz misses later.","A practical study method is to explain science careers aloud in two minutes without slides. If you stall on “why it matters,” return to this section before attempting section quizzes.","Workplace teams treat science careers as a shared model for decisions. Research ethics require consent, privacy, and humane treatment of subjects. Document assumptions in writing so handoffs between shifts, counsel, or subcontractors do not silently change the plan."], {
        bulletPoints: ["Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety.","Forces, energy, and motion follow conservation laws in classical physics.","Models simplify reality and fail when their assumptions stop holding."],
        citations: [{"source":"NIH — Science Education","url":"https://www.nih.gov/health-information","note":"Evidence and health-science literacy links"}]
      }
    ),
    section(
      "science-careers-s2",
      "10.2 Science Careers — How professionals apply this in practice",
      ["Professionals rarely dispute whether science careers exists—they dispute how measurement uncertainty should be reported, not hidden, in honest science. This section focuses on application: what you measure, who approves, and what record you keep.","Translate concepts into a simple workflow: observe the situation, name the rule or standard, choose among allowed options, log the outcome. Peer review slows publication but filters obvious methodological flaws.","When stakes rise, pause for a second opinion or formal review. Graphs require labeled axes, units, and honest scales. Escalation is not failure; it protects licenses, safety, and customer trust.","If your organization uses templates, SOPs, or checklists, map each step to language from this chapter. Research ethics require consent, privacy, and humane treatment of subjects. That mapping is how textbook knowledge survives contact with real jobsites, clinics, courts, or server rooms."], {
        bulletPoints: ["Hypotheses must be testable and falsifiable to count as scientific claims.","Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety.","Forces, energy, and motion follow conservation laws in classical physics."]
      }
    ),
    section(
      "science-careers-s3",
      "10.3 Science Careers — Workplace scenarios and documentation",
      ["Scenario: a teammate cites science careers in a meeting, but details in the packet do not match the textbook example. Models simplify reality and fail when their assumptions stop holding. Your job is to reconcile the story with the rule—not to win the argument.","Ask clarifying questions: what happened first, what was measured, what policy applies, and what harm or risk remains. Measurement uncertainty should be reported, not hidden, in honest science.","Good documentation states facts, cites the framework, and records the decision. Peer review slows publication but filters obvious methodological flaws. One paragraph in a ticket, incident log, or memo often prevents expensive rework.","After action reviews should link outcomes back to concepts, not only blame individuals. Graphs require labeled axes, units, and honest scales. That habit is how teams improve without repeating the same failure mode."], {
        bulletPoints: ["Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety.","Forces, energy, and motion follow conservation laws in classical physics.","Models simplify reality and fail when their assumptions stop holding.","Measurement uncertainty should be reported, not hidden, in honest science."]
      }
    ),
    section(
      "science-careers-s4",
      "10.4 Science Careers — Common mistakes and how to avoid them",
      ["Common mistakes around science careers include skipping definitions, trusting confident tone over evidence, and confusing correlation with cause. Forces, energy, and motion follow conservation laws in classical physics.","Another failure mode is “checkbox compliance”—filing the form without changing behavior. Models simplify reality and fail when their assumptions stop holding. Auditors, inspectors, and senior engineers notice when records and reality diverge.","Avoid copying answers from unrelated chapters. Measurement uncertainty should be reported, not hidden, in honest science. Courses are cumulative; a fix that works in networking may fail in contracts or thermodynamics.","When you are wrong, correct the record quickly and notify affected parties. Peer review slows publication but filters obvious methodological flaws. Delayed fixes cost more than prompt ones in regulated and customer-facing work."], {
        bulletPoints: ["Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety.","Forces, energy, and motion follow conservation laws in classical physics.","Models simplify reality and fail when their assumptions stop holding."]
      }
    ),
    section(
      "science-careers-s5",
      "10.5 Science Careers — Putting the chapter together",
      ["This chapter’s through-line is simple: Science Careers connects principles to accountable action. Lab notebooks create an audit trail for replication and safety.","You should be able to teach a peer the core idea, walk through one realistic example, and name one pitfall—without reading the section headings.","Synthesis questions on chapter checks often combine two ideas from different sections. Forces, energy, and motion follow conservation laws in classical physics. Review bullets from §1–§4 before attempting the chapter quiz.","Carry one habit forward: verify sources, show units, cite the rule, or document customer consent—whatever fits science careers in your field. Models simplify reality and fail when their assumptions stop holding. Measurement uncertainty should be reported, not hidden, in honest science."], {
        bulletPoints: ["Hypotheses must be testable and falsifiable to count as scientific claims.","Plate tectonics, weather, and oceans interact in earth systems.","Cells are the basic unit of life; DNA stores hereditary information.","Lab notebooks create an audit trail for replication and safety.","Forces, energy, and motion follow conservation laws in classical physics."]
      }
    )
    ],
    {
      learningObjectives: ["Define science careers and explain why it matters in Science Fundamentals","Apply chapter ideas to realistic workplace or classroom scenarios","Spot common errors and choose safer documentation or escalation paths","Use section quizzes and the chapter check to verify understanding before advancing"],
      chapterSummary: "Science Careers connects concepts to accountable practice—what to do, what to avoid, and how to explain your reasoning to teammates, managers, or customers.",
      keyConcepts: ["Plate tectonics, weather, and oceans interact in earth systems.","Hypotheses must be testable and falsifiable to count as scientific claims.","Cells are the basic unit of life; DNA stores hereditary information.","Plate tectonics, weather, and oceans interact in earth systems.","Hypotheses must be testable and falsifiable to count as scientific claims."],
      realWorldRelevance: "Strong grasp of science careers reduces rework, supports defensible records, and speeds collaboration across Science Fundamentals.",
    }
  )
];
