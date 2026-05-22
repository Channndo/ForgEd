import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Library,
  Route,
  Briefcase,
  BarChart3,
  Trophy,
  Users,
  User,
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  badge?: string;
}

/** Core platform — scalable ecosystem shell (KODA is FAB-only, not listed here) */
export const PLATFORM_NAV: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/courses", label: "Course Library", icon: Library },
  { href: "/paths", label: "Learning Paths", icon: Route },
  { href: "/career", label: "Career Hub", icon: Briefcase },
  { href: "/progress", label: "Progress", icon: BarChart3 },
  { href: "/achievements", label: "Achievements", icon: Trophy },
  { href: "/profile", label: "Profile", icon: User },
  { href: "/community", label: "Community", icon: Users },
];

export const PAGE_TITLES: Record<string, string> = {
  "/": "Home",
  "/dashboard": "Dashboard",
  "/courses": "Course Library",
  "/paths": "Learning Paths",
  "/career": "Career Hub",
  "/progress": "Progress",
  "/achievements": "Achievements",
  "/profile": "Profile",
  "/profile/settings": "Settings",
  "/community": "Community",
  "/login": "Sign in",
  "/signup": "Sign up",
  "/signup/success": "Account created",
  "/forgot-password": "Reset password",
  "/assistant": "AI Tutor",
};

export function titleForPath(pathname: string): string {
  const path = pathname.replace(/\/$/, "") || "/";
  if (PAGE_TITLES[path]) return PAGE_TITLES[path];
  if (path === "" || path === "/") return "Dashboard";
  if (path.startsWith("/courses/") && path.endsWith("/read")) return "Textbook";
  if (path.startsWith("/courses/") && path.endsWith("/exam")) return "Final Exam";
  if (path.startsWith("/courses/") && path.endsWith("/quiz")) return "Course Quiz";
  if (path.startsWith("/courses/") && path.includes("/learn/")) return "Textbook";
  if (path.startsWith("/courses/")) return "Course";
  return "ForgEd";
}
