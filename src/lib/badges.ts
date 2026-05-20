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
];

export function getBadge(id: string): Badge | undefined {
  return BADGES.find((b) => b.id === id);
}
