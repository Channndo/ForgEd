import type { ForgedAccountUser } from "@/lib/forged-account/types";

type NameSource = Pick<
  ForgedAccountUser,
  "displayName" | "firstName" | "lastName" | "username"
>;

/** Resolve certificate recipient name from signed-in user credentials */
export function resolveForgedPathStudentName(
  profile?: NameSource | null,
  fallbackUsername?: string | null
): string {
  const display = profile?.displayName?.trim();
  if (display) return display;

  const fullName = [profile?.firstName, profile?.lastName]
    .filter(Boolean)
    .join(" ")
    .trim();
  if (fullName) return fullName;

  const username = profile?.username?.trim() || fallbackUsername?.trim();
  if (username) return username;

  return "ForgEd Learner";
}
