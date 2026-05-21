/**
 * High-quality educational prose for ForgEd course generation.
 * Avoids generic AI filler; workforce-focused, structured, readable.
 */

export function chapterMeta(chapterTitle, courseTitle, sectionTitles) {
  return {
    learningObjectives: [
      `Explain why ${chapterTitle.toLowerCase()} matters in modern ${courseTitle.toLowerCase()} work`,
      `Apply core ideas from this chapter to realistic workplace decisions`,
      `Identify common mistakes professionals make around ${chapterTitle.toLowerCase()}`,
      `Use chapter review questions to verify understanding before advancing`,
    ],
    chapterSummary: `${chapterTitle} connects theory to practice: you learn what to do, what to avoid, and how to explain your choices to customers, managers, or teammates. The sections build in order—skipping ahead usually costs time later.`,
    keyConcepts: sectionTitles.map((t) => {
      const part = t.split(" — ")[1];
      return part ? part.trim() : t.replace(/^\d+\.\d+\s+/, "").trim();
    }),
    realWorldRelevance: `Professionals who master ${chapterTitle.toLowerCase()} reduce rework, protect trust, and move faster on the job. This chapter is written for workforce learners, not academic theorists—every section should change how you act Monday morning.`,
  };
}

const DOMAIN_HOOKS = {
  financial: [
    "Money decisions compound: a small fee today can cost thousands over a decade.",
    "Your paycheck is a system—inputs, fixed outputs, and what you control.",
  ],
  automotive: [
    "Service lanes run on trust and timestamps; customers forgive delays they understand.",
    "A repair order is a contract—what you document protects the shop and the driver.",
  ],
  ai: [
    "AI outputs are drafts until a human checks facts, policy, and tone.",
    "The best prompt is the one your teammate could run without you in the room.",
  ],
  cybersecurity: [
    "Attackers optimize for speed; defenders win by making cheap mistakes expensive.",
    "Security habits are boring until the day they prevent an expensive incident.",
  ],
};

function domainKey(courseTitle) {
  const t = courseTitle.toLowerCase();
  if (t.includes("financial") || t.includes("budget") || t.includes("credit")) return "financial";
  if (t.includes("service") || t.includes("automotive")) return "automotive";
  if (t.includes("cyber") || t.includes("phishing") || t.includes("security")) return "cybersecurity";
  if (t.includes("ai") || t.includes("prompt")) return "ai";
  return null;
}

export function sectionParagraphs(chapterTitle, sectionTitle, courseTitle, sectionIndex) {
  const topic = chapterTitle.replace(/"/g, "'");
  const angle = sectionTitle.replace(/^\d+\.\d+\s+/, "").split(" — ")[1] || sectionTitle;
  const dk = domainKey(courseTitle);
  const hook = dk ? DOMAIN_HOOKS[dk][sectionIndex % DOMAIN_HOOKS[dk].length] : null;

  const openings = [
    `${angle} is where ${topic.toLowerCase()} stops being abstract. In ${courseTitle}, this section answers a practical question: what would a competent professional notice, decide, and document in the first ten minutes of a real shift?`,
    `Most mistakes in ${topic.toLowerCase()} happen here—not because people lack intelligence, but because they skip the checks that turn opinion into evidence. ${angle} gives you those checks in plain language.`,
    `Workforce training fails when it only defines terms. This section on ${angle} shows how the concept shows up in conversations, systems, and outcomes you are accountable for.`,
  ];

  const middles = [
    `A useful habit is to separate facts from interpretations before you act. Facts are observable: what was said, what was measured, what policy applies. Interpretations are conclusions—and they should be labeled that way when you escalate to a manager or customer.`,
    `When stakes are moderate, write down the decision you are making and what would prove you wrong. That single sentence prevents the most common failure mode: confident answers built on missing context.`,
    `Compare two responses: a vague "we should improve communication" versus "we will confirm approval in writing before ordering parts." The second is actionable; the first is noise. ${angle} is about making the second kind of statement normal.`,
  ];

  const applications = [
    `On the job, adapt examples to your shop, team, or organization. Policies, price books, and customer expectations differ—but the reasoning pattern in this section should survive those differences if you keep evidence and courtesy paired together.`,
    `If you are learning with ForgEd quizzes, treat wrong answers as signal, not shame. Re-read the paragraph that contradicts your assumption, then explain the correct idea aloud once. That transfer beats rereading bullet lists silently.`,
    `Before you leave this section, name one behavior you will try this week and one you will stop. Small, explicit commitments outperform vague "I learned something" notes in performance reviews and team standups.`,
  ];

  const i = sectionIndex - 1;
  const paras = [
    openings[i % openings.length],
    middles[i % middles.length],
    applications[i % applications.length],
  ];
  if (hook) paras[1] = `${hook} ${paras[1]}`;
  return paras;
}

export function introParagraphs(courseTitle, pathContext) {
  return [
    `${courseTitle} is built for professionals who want usable skill—not trivia. Each chapter moves from why the topic matters, through structured explanation, to quizzes that check judgment rather than memorization.`,
    pathContext ||
      "You will read in sequence: objectives, applied sections, chapter review, then the next chapter. Finish the course review and final exam to certify completion on your ForgEd profile.",
    "Content is practical workforce education. It does not replace licensure, legal, medical, or employer-specific policy. When your organization has a rule that conflicts with a general lesson, follow your organization's rule and treat this course as context.",
  ];
}

export function buildChapterBlock(chapterId, num, chapterTitle, courseTitle, sectionCount = 5) {
  const sectionTitles = [];
  const sections = [];
  for (let s = 1; s <= sectionCount; s++) {
    const sid = `${chapterId}-s${s}`;
    const st = `${num}.${s} ${chapterTitle} — ${sectionAngle(s, chapterTitle)}`;
    sectionTitles.push(st);
    const paras = sectionParagraphs(chapterTitle, st, courseTitle, s);
    sections.push(
      `    section(${JSON.stringify(sid)}, ${JSON.stringify(st)}, ${JSON.stringify(paras)}),`
    );
  }
  const meta = chapterMeta(chapterTitle, courseTitle, sectionTitles);
  return `  chapter(${JSON.stringify(chapterId)}, ${num}, ${JSON.stringify(chapterTitle)}, [\n${sections.join("\n")}
  ], {
    learningObjectives: ${JSON.stringify(meta.learningObjectives)},
    chapterSummary: ${JSON.stringify(meta.chapterSummary)},
    keyConcepts: ${JSON.stringify(meta.keyConcepts)},
    realWorldRelevance: ${JSON.stringify(meta.realWorldRelevance)},
  })`;
}

function sectionAngle(s, chapterTitle) {
  const angles = [
    "foundations and vocabulary",
    "how practitioners think",
    "workplace application",
    "common failures and fixes",
    "putting it together",
  ];
  return angles[s - 1] || `applied practice (${s})`;
}
