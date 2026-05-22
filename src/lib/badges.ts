import type { Badge } from "./types";

export const BADGES: Badge[] = [
  {
    id: "first-lesson",
    name: "First Spark",
    description: "Complete your first lesson",
    icon: "zap",
    xpBonus: 25,
  },
  {
    id: "streak-3",
    name: "On Fire",
    description: "Maintain a 3-day learning streak",
    icon: "flame",
    xpBonus: 50,
  },
  {
    id: "streak-7",
    name: "Week Warrior",
    description: "Maintain a 7-day learning streak",
    icon: "trophy",
    xpBonus: 100,
  },
  {
    id: "quiz-pass",
    name: "Quiz Ace",
    description: "Pass any course quiz with 70%+",
    icon: "target",
    xpBonus: 75,
  },
  {
    id: "insurance-ch1",
    name: "Risk Scholar",
    description: "Complete Insurance Fundamentals Chapter I",
    icon: "shield",
    xpBonus: 40,
  },
  {
    id: "insurance-complete",
    name: "Coverage Master",
    description: "Complete the Insurance Fundamentals course",
    icon: "award",
    xpBonus: 500,
  },
  {
    id: "explorer",
    name: "Pathfinder",
    description: "Start courses in 3 different categories",
    icon: "compass",
    xpBonus: 80,
  },
  {
    id: "path-ai-practitioner",
    name: "AI Practitioner",
    description: "Completed the AI Literacy mastery path",
    icon: "cpu",
    xpBonus: 400,
  },
  {
    id: "path-sales-operator",
    name: "Sales Operator",
    description: "Completed the Sales mastery path",
    icon: "target",
    xpBonus: 400,
  },
  {
    id: "path-financial-foundations",
    name: "Financial Foundations",
    description: "Completed the Financial Literacy mastery path",
    icon: "wallet",
    xpBonus: 400,
  },
  {
    id: "path-it-foundations",
    name: "IT Foundations",
    description: "Completed the IT Foundations mastery path",
    icon: "monitor",
    xpBonus: 400,
  },
  {
    id: "path-cyber-defense",
    name: "Cyber Defense",
    description: "Completed the Cybersecurity mastery path",
    icon: "shield",
    xpBonus: 400,
  },
  {
    id: "path-founder",
    name: "Founder",
    description: "Completed the Entrepreneurship mastery path",
    icon: "rocket",
    xpBonus: 400,
  },
  {
    id: "path-service-advisor",
    name: "Service Advisor",
    description: "Completed the Service Advisor mastery path",
    icon: "wrench",
    xpBonus: 400,
  },
];

export function getBadge(id: string): Badge | undefined {
  return BADGES.find((b) => b.id === id);
}

export interface BadgeGroup {
  id: string;
  label: string;
  badges: Badge[];
}

/** Groups for the Achievements gallery */
export function getBadgeGroups(): BadgeGroup[] {
  const general = BADGES.filter(
    (b) => !b.id.startsWith("path-") && !b.id.startsWith("insurance")
  );
  const course = BADGES.filter((b) => b.id.startsWith("insurance"));
  const paths = BADGES.filter((b) => b.id.startsWith("path-"));
  return [
    { id: "milestones", label: "Learning milestones", badges: general },
    { id: "courses", label: "Course achievements", badges: course },
    { id: "paths", label: "Mastery paths", badges: paths },
  ].filter((g) => g.badges.length > 0);
}
