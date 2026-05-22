/**
 * Builds rigorous multiple-choice banks (~200 questions) with varied exam-style stems.
 */

export const TARGET_BANK_SIZE = 200;

/** Distribute `total` questions across chapters as evenly as possible. */
export function questionsPerChapter(chapterCount, total = TARGET_BANK_SIZE) {
  const base = Math.floor(total / chapterCount);
  const extra = total % chapterCount;
  return Array.from({ length: chapterCount }, (_, i) => base + (i < extra ? 1 : 0));
}

function placeCorrect(options, correctText, variantIndex) {
  const distractors = [...options];
  const ci = variantIndex % 4;
  distractors[ci] = correctText;
  const seen = new Set();
  const out = [];
  for (const o of distractors) {
    if (!seen.has(o) && out.length < 4) {
      seen.add(o);
      out.push(o);
    }
  }
  while (out.length < 4) out.push("None of the above — review the chapter.");
  return { options: out.slice(0, 4), correctIndex: ci };
}

function templatesForTopic(topic, chapterNum) {
  const T = topic;
  return [
    {
      q: `A case manager is briefing a new hire on ${T}. Which statement best reflects professional practice?`,
      c: `Decisions about ${T} should be grounded in chapter objectives, cited standards, and documented reasoning.`,
      w: [
        `Anecdotes from social media are sufficient authority for ${T}`,
        `${T} never requires written records or measurable outcomes`,
        `Personal preference alone overrides policy when applying ${T}`,
      ],
    },
    {
      q: `On a practice assessment about ${T}, which study habit most improves retention?`,
      c: `Read the section, attempt practice items without notes, then review explanations for misses`,
      w: [
        `Memorize answer letters from one attempt only`,
        `Skip section quizzes and rely on the final exam alone`,
        `Avoid applying ${T} to realistic scenarios`,
      ],
    },
    {
      q: `Which outcome is LEAST consistent with correct application of ${T}?`,
      c: `Ignoring scope-of-practice limits and organizational policy when implementing ${T}`,
      w: [
        `Using evidence to justify a recommendation tied to ${T}`,
        `Documenting assumptions and sources when ${T} affects a decision`,
        `Escalating uncertainty to a supervisor when ${T} is outside training`,
      ],
    },
    {
      q: `In a workplace scenario involving ${T}, what should happen first?`,
      c: `Clarify the goal, constraints, and stakeholders before choosing an action`,
      w: [
        `Finalize a solution before defining the problem`,
        `Skip risk assessment because ${T} is always low risk`,
        `Defer documentation until after outcomes are public`,
      ],
    },
    {
      q: `Which pair correctly distinguishes concepts within ${T}?`,
      c: `Core definitions in the chapter separate terms that beginners often confuse`,
      w: [
        `All terms in ${T} are interchangeable synonyms`,
        `${T} has no relationship to ethics or safety`,
        `Theory in ${T} never guides practical procedures`,
      ],
    },
    {
      q: `A learner claims: "${T} is optional after onboarding." What is the best response?`,
      c: `Ongoing competence in ${T} is required; policies and assessments exist to verify it`,
      w: [
        `Agree — once hired, ${T} rarely matters`,
        `Defer entirely to customers without training in ${T}`,
        `Replace ${T} with informal guesswork to save time`,
      ],
    },
    {
      q: `Which error in ${T} most often causes rework or compliance problems?`,
      c: `Treating a partial understanding of ${T} as mastery without verification`,
      w: [
        `Double-checking calculations or terminology tied to ${T}`,
        `Asking for clarification when ${T} requirements are ambiguous`,
        `Citing the textbook section when explaining ${T}`,
      ],
    },
    {
      q: `When ${T} appears on a timed quiz, what test-taking strategy is appropriate?`,
      c: `Eliminate clearly wrong options, compare remaining choices to chapter criteria, then select the best fit`,
      w: [
        `Always choose the longest option regardless of content`,
        `Skip questions about ${T} and return later without tracking time`,
        `Change answers randomly if unsure about ${T}`,
      ],
    },
    {
      q: `Which source is most appropriate to verify a disputed point about ${T}?`,
      c: `The assigned chapter, cited frameworks, and instructor-approved references`,
      w: [
        `Unverified forum posts about ${T}`,
        `A single opinion article with no citations`,
        `Outdated material unrelated to ${T}`,
      ],
    },
    {
      q: `How does ${T} connect to interdisciplinary teamwork in this course?`,
      c: `${T} interacts with communication, ethics, documentation, and quality metrics described in the chapter`,
      w: [
        `${T} is isolated from every other subject in the catalog`,
        `${T} applies only to individual work with no handoffs`,
        `${T} eliminates the need for standard operating procedures`,
      ],
    },
    {
      q: `A supervisor audits work involving ${T}. Which documentation practice is strongest?`,
      c: `Timestamped notes that tie actions to standards, approvals, and measurable results`,
      w: [
        `Verbal-only agreements with no record of ${T}`,
        `Deleting drafts to avoid review of ${T}`,
        `Using vague labels that do not reference ${T}`,
      ],
    },
    {
      q: `Which metric or indicator best shows progress mastering ${T}?`,
      c: `Improving scores on randomized section and chapter quizzes while explaining reasoning`,
      w: [
        `Completing readings without attempting any assessments on ${T}`,
        `Copying peer answers on items about ${T}`,
        `Avoiding feedback on missed objectives for ${T}`,
      ],
    },
    {
      q: `Under pressure, a team must apply ${T} with incomplete data. What is the best course?`,
      c: `State assumptions explicitly, use conservative choices aligned with policy, and seek authoritative input`,
      w: [
        `Guess aggressively because ${T} never allows uncertainty`,
        `Delay all action indefinitely without communication`,
        `Abandon ${T} standards to meet a deadline`,
      ],
    },
    {
      q: `Which scenario demonstrates ethical use of ${T}?`,
      c: `Respecting privacy, scope, and accuracy while giving credit to sources and supervisors`,
      w: [
        `Sharing confidential details to win an argument about ${T}`,
        `Misrepresenting credentials related to ${T}`,
        `Bypassing required approvals when ${T} is inconvenient`,
      ],
    },
    {
      q: `For Chapter ${chapterNum} (${T}), which learning objective is assessed by practice items?`,
      c: `Applying vocabulary and procedures from the chapter to realistic decisions, not slogans`,
      w: [
        `Reciting headings without understanding ${T}`,
        `Ignoring chapter quizzes entirely`,
        `Avoiding the 200-question course bank`,
      ],
    },
    {
      q: `A student misses an item on ${T}. What should they do before retaking?`,
      c: `Re-read the section, review the explanation, and attempt a new randomized set`,
      w: [
        `Memorize the letter of the previous correct answer`,
        `Assume the bank will repeat the same questions in order`,
        `Skip remediation because retakes are automatic passes`,
      ],
    },
    {
      q: `Which statement about regulatory or policy context for ${T} is most accurate?`,
      c: `Organizations may impose stricter rules than the textbook minimum; verify local policy`,
      w: [
        `Federal and state rules never influence ${T}`,
        `Policies never change after publication`,
        `The textbook replaces all employer training on ${T}`,
      ],
    },
    {
      q: `When teaching ${T} to beginners, which sequence is most effective?`,
      c: `Define terms, show worked examples, practice with feedback, then integrate into scenarios`,
      w: [
        `Start with the final exam, then read about ${T}`,
        `Avoid examples because ${T} is purely theoretical`,
        `Skip practice until all chapters are memorized`,
      ],
    },
    {
      q: `Which question stem style is used on ForgEd assessments for ${T}?`,
      c: `Randomized draws from a 200-question bank with four-option multiple choice and explained answers`,
      w: [
        `A fixed list of ten questions reused in the same order every attempt`,
        `True/false only with no reading required`,
        `Open-ended essays graded instantly without rubrics`,
      ],
    },
    {
      q: `How should professionals communicate results tied to ${T}?`,
      c: `Use precise terms, quantify impact when possible, and separate facts from opinions`,
      w: [
        `Use vague language so results about ${T} cannot be audited`,
        `Withhold limitations of an analysis involving ${T}`,
        `Exaggerate certainty to appear expert in ${T}`,
      ],
    },
  ];
}

export function buildBankFile({ slug, exportName, prefix, chapterTitles }) {
  const counts = questionsPerChapter(chapterTitles.length);
  const lines = [];
  let total = 0;

  for (let ch = 1; ch <= chapterTitles.length; ch++) {
    const topic = chapterTitles[ch - 1];
    const count = counts[ch - 1];
    const chs = String(ch).padStart(2, "0");
    const templates = templatesForTopic(topic, ch);

    for (let v = 0; v < count; v++) {
      total++;
      const t = templates[v % templates.length];
      const id = `${prefix}-ch${chs}-q${String(v + 1).padStart(2, "0")}`;
      const { options, correctIndex } = placeCorrect(t.w, t.c, v + ch);
      lines.push(
        `  q(${JSON.stringify(id)}, ${JSON.stringify(t.q)}, ${JSON.stringify(options)}, ${correctIndex}, ${JSON.stringify(`Ch. ${ch} (${topic}): review the section and explanation, then retry a new randomized attempt.`)}),`
      );
    }
  }

  const body = `import type { QuizQuestion } from "@/lib/quizTypes";

function q(
  id: string,
  question: string,
  options: [string, string, string, string],
  correctIndex: 0 | 1 | 2 | 3,
  explanation: string
): QuizQuestion {
  return { id, question, options, correctIndex, explanation };
}

/** ${total} questions — randomized section/chapter/course/final draws */
export const ${exportName}: QuizQuestion[] = [
${lines.join("\n")}
];
`;

  return { body, total };
}
