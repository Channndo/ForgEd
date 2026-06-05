export type CourseCategory =
  | "insurance"
  | "ai"
  | "cybersecurity"
  | "it"
  | "automotive"
  | "financial"
  | "communication"
  | "business"
  | "technology"
  | "law"
  | "engineering"
  | "skilled-trades"
  | "science"
  | "healthcare"
  | "creative"
  | "personal-development"
  | "education"
  | "entrepreneurship";

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
  /** Learning path memberships */
  learningPathIds?: string[];
  /** Original step slug when aliased to another catalog slug */
  pathStepSlug?: string;
  pathOrder?: number;
  instructorLed?: boolean;
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
  /** courseId → chapter numbers with passed chapter quizzes (5 questions) */
  chapterQuickChecks?: Record<string, number[]>;
  /** courseId → lesson ids (chapterId-sectionId) with passed section quizzes */
  sectionQuizzesPassed?: Record<string, string[]>;
  /** courseIds that passed the 10-question course review quiz */
  courseReviewQuizPassed?: string[];
  /** courseIds that passed the 20-question final exam (unlocks course completion) */
  finalExamPassed?: string[];
  /** Per learning path progress */
  pathProgress?: Record<
    string,
    {
      startedAt?: string;
      completedCourseSlugs: string[];
      completedLabs: string[];
      masteryExamPassed?: boolean;
      badgeEarned?: boolean;
    }
  >;
  activePathId?: string | null;
  dailyXpGoal?: number;
  dailyXpEarnedToday?: number;
  dailyXpDate?: string | null;
  /** Per-lab state (Excel labs, simulations) */
  labProgress?: Record<
    string,
    {
      completed: boolean;
      solutionViewed: boolean;
      retryRequired: boolean;
      xpEarned: number;
      completedAt?: string;
    }
  >;
  /** ForgEd Path Executive Mastery Program — self-directed external course tracking */
  forgedPathProgress?: {
    completedCourseIds: string[];
    certificateUnlockedAt?: string;
  };
}
