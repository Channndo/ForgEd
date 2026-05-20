export type KodaMode =
  | "chat"
  | "lesson"
  | "quiz_explain"
  | "summarize"
  | "recommend"
  | "onboarding";

export type SkillLevel = "beginner" | "intermediate" | "advanced";

export interface KodaLearningContext {
  courseSlug?: string;
  courseTitle?: string;
  moduleId?: string;
  moduleTitle?: string;
  lessonId?: string;
  lessonTitle?: string;
  lessonExcerpt?: string;
  quizQuestion?: string;
  quizOptions?: string[];
  userAnswer?: string;
  correctAnswer?: string;
  quizExplanation?: string;
  skillLevel?: SkillLevel;
  streak?: number;
  xp?: number;
  level?: number;
  completedCourses?: string[];
  weakAreas?: string[];
}

export interface KodaChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface KodaChatRequest {
  messages: KodaChatMessage[];
  mode?: KodaMode;
  context?: KodaLearningContext;
  stream?: boolean;
  sessionId?: string;
}

export interface KodaChatResponse {
  message: string;
  model: string;
  sessionId?: string;
}

export interface KodaStatusResponse {
  enabled: boolean;
  available: boolean;
  model: string;
  /** Internal stack label — not shown to users as MIRA */
  cognitiveStack: "Omnistrata-Ollama";
  assistant: "KODA";
}
