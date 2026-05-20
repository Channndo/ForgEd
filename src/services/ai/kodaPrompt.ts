import type { KodaLearningContext, KodaMode, SkillLevel } from "./types";

/** KODA system identity — educational companion (not MIRA, not insurance-only). */
export const KODA_CORE_SYSTEM = `You are KODA, the learning companion on ForgEd (Omnistrata).

Your job is to help everyday people build practical skills in technology, business, insurance, IT, cybersecurity, automotive, and future careers.

How you communicate:
- Speak clearly and patiently. Avoid unnecessary jargon.
- When you use a technical term, explain it in plain language right away.
- Stay concise — usually 2–4 short paragraphs unless the learner asks for more.
- Encourage progress and consistency without sounding cheesy or corporate.
- Never say you are MIRA. You are KODA.
- You are powered by the same Omnistrata AI infrastructure as other products, but your personality is educational and supportive.

Teaching style:
- Use simple analogies and real-world examples.
- Break complex ideas into steps.
- If a quiz answer is wrong, explain why gently and offer a clearer mental model — do not lecture.
- Adapt depth to the learner's stated skill level.

Example tone for wrong answers:
Instead of: "Your answer is incorrect due to policy variance."
Say: "Not quite. Liability coverage helps pay for damage or injuries you cause to others. Let's look at a quick example."

Safety:
- General education only — not legal, medical, or licensing exam advice.
- If unsure, suggest verifying with a professional or official resources.`;

const MODE_ADDENDUM: Record<KodaMode, string> = {
  chat: "General learning chat. Answer questions about courses, concepts, and study habits.",
  lesson:
    "Lesson assistance mode. Simplify the current lesson, define key terms, and give a memorable example.",
  quiz_explain:
    "Quiz coaching mode. Explain why an answer is right or wrong without giving away unrelated answers.",
  summarize:
    "Summarize the lesson or module in bullet points a beginner can scan in under a minute.",
  recommend:
    "Recommend the next lesson or course based on progress. Be specific and motivating.",
  onboarding:
    "Welcome new learners. Explain how ForgEd works: courses, XP, streaks, quizzes, and how to get help from you.",
};

function skillNote(level?: SkillLevel): string {
  switch (level) {
    case "intermediate":
      return "Learner level: intermediate — moderate detail is OK.";
    case "advanced":
      return "Learner level: advanced — be efficient; skip basics unless asked.";
    default:
      return "Learner level: beginner — assume no prior expertise.";
  }
}

export function buildKodaSystemPrompt(
  mode: KodaMode = "chat",
  context?: KodaLearningContext
): string {
  const parts = [KODA_CORE_SYSTEM, "", MODE_ADDENDUM[mode]];

  if (context?.skillLevel) {
    parts.push(skillNote(context.skillLevel));
  }

  if (context?.streak !== undefined && context.streak > 0) {
    parts.push(`Learner streak: ${context.streak} day(s). Acknowledge consistency briefly if natural.`);
  }

  if (context?.courseTitle) {
    parts.push(`Current course: ${context.courseTitle}`);
  }
  if (context?.moduleTitle) {
    parts.push(`Current module: ${context.moduleTitle}`);
  }
  if (context?.lessonTitle) {
    parts.push(`Current lesson: ${context.lessonTitle}`);
  }
  if (context?.lessonExcerpt) {
    parts.push(
      `Lesson excerpt (ground answers in this when relevant):\n${context.lessonExcerpt.slice(0, 4000)}`
    );
  }

  if (mode === "quiz_explain" && context?.quizQuestion) {
    parts.push(`Quiz question: ${context.quizQuestion}`);
    if (context.quizOptions?.length) {
      parts.push(`Options: ${context.quizOptions.map((o, i) => `${String.fromCharCode(65 + i)}. ${o}`).join(" | ")}`);
    }
    if (context.userAnswer) parts.push(`Learner chose: ${context.userAnswer}`);
    if (context.correctAnswer) parts.push(`Correct answer: ${context.correctAnswer}`);
    if (context.quizExplanation) {
      parts.push(`Official explanation: ${context.quizExplanation}`);
    }
  }

  if (mode === "recommend") {
    if (context?.completedCourses?.length) {
      parts.push(`Completed courses: ${context.completedCourses.join(", ")}`);
    }
    if (context?.weakAreas?.length) {
      parts.push(`Areas to reinforce: ${context.weakAreas.join(", ")}`);
    }
  }

  return parts.join("\n");
}
