import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Sparkles,
  Briefcase,
  Library,
  Shield,
  Brain,
  Lock,
  Monitor,
  Car,
  Wallet,
  MessageSquare,
  Building2,
  Smartphone,
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  badge?: string;
}

export const MAIN_NAV: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/courses", label: "Course Library", icon: Library },
  { href: "/courses/insurance-fundamentals", label: "Insurance Fundamentals", icon: Shield, badge: "Featured" },
  { href: "/assistant", label: "KODA", icon: Sparkles },
  { href: "/career", label: "Career Path", icon: Briefcase },
];

export const LEARN_NAV: NavItem[] = [
  { href: "/courses?category=ai", label: "AI Fundamentals", icon: Brain },
  { href: "/courses?category=cybersecurity", label: "Cybersecurity", icon: Lock },
  { href: "/courses?category=it", label: "IT Fundamentals", icon: Monitor },
  { href: "/courses?category=automotive", label: "Automotive", icon: Car },
  { href: "/courses?category=financial", label: "Financial Literacy", icon: Wallet },
  { href: "/courses?category=communication", label: "Communication", icon: MessageSquare },
  { href: "/courses?category=business", label: "Business", icon: Building2 },
  { href: "/courses?category=technology", label: "Tech for Beginners", icon: Smartphone },
];

export const PAGE_TITLES: Record<string, string> = {
  "/": "Home",
  "/dashboard": "Dashboard",
  "/courses": "Course Library",
  "/assistant": "KODA",
  "/career": "Career Path",
};

export function titleForPath(pathname: string): string {
  const path = pathname.replace(/\/$/, "") || "/";
  if (PAGE_TITLES[path]) return PAGE_TITLES[path];
  if (path === "" || path === "/") return "Dashboard";
  if (path.startsWith("/courses/") && path.endsWith("/read")) return "Textbook";
  if (path.startsWith("/courses/") && path.includes("/learn/")) return "Textbook";
  if (path.endsWith("/quiz")) return "Quiz";
  if (path.startsWith("/courses/")) return "Course";
  return "ForgEd";
}
