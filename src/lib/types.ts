export type CourseCategory =
  | "insurance"
  | "ai"
  | "cybersecurity"
  | "it"
  | "automotive"
  | "financial"
  | "communication"
  | "business"
  | "technology";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface CourseSkill {
  id: string;
  name: string;
}

export interface LessonCard {
  id: string;
  title: string;
  content: string;
  example?: string;
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  lessons: LessonCard[];
  keyConcepts: string[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: CourseCategory;
  difficulty: Difficulty;
  estimatedHours: number;
  xpReward: number;
  skills: CourseSkill[];
  modules: CourseModule[];
  featured?: boolean;
  /** Extended textbook course uses external content */
  textbookCourse?: boolean;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  xpBonus: number;
}

export interface UserProgress {
  xp: number;
  level: number;
  streak: number;
  lastActiveDate: string | null;
  completedLessons: string[];
  completedModules: string[];
  completedCourses: string[];
  quizScores: Record<string, { score: number; total: number; at: string }>;
  earnedBadges: string[];
  courseProgress: Record<string, number>;
}
