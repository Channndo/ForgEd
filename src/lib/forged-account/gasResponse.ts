import type { ForgedAccountUser } from "./types";

/** doGet health payload — sometimes returned when a POST is treated as GET after redirects. */
export function isForgedGasHealthPayload(data: Record<string, unknown>): boolean {
  return (
    Boolean(data.ok) &&
    typeof data.service === "string" &&
    !data.accessToken &&
    !data.access_token &&
    !data.user
  );
}

export function normalizeForgedUser(raw: unknown): ForgedAccountUser | undefined {
  if (!raw || typeof raw !== "object") return undefined;
  const u = raw as Record<string, unknown>;
  const userId = String(u.userId || u.id || "").trim();
  if (!userId) return undefined;
  return {
    id: userId,
    userId,
    email: String(u.email || ""),
    username: String(u.username || ""),
    displayName: String(u.displayName || u.username || "ForgEd Learner"),
    firstName: u.firstName != null ? String(u.firstName) : undefined,
    lastName: u.lastName != null ? String(u.lastName) : undefined,
    phone: u.phone != null ? String(u.phone) : undefined,
    street: u.street != null ? String(u.street) : undefined,
    city: u.city != null ? String(u.city) : undefined,
    state: u.state != null ? String(u.state) : undefined,
    zip: u.zip != null ? String(u.zip) : undefined,
    referralSource: u.referralSource != null ? String(u.referralSource) : undefined,
    xp: Number(u.xp) || 0,
    level: Number(u.level) || 1,
    streak: Number(u.streak) || 0,
    activePaths: u.activePaths != null ? String(u.activePaths) : undefined,
    certifications: u.certifications != null ? String(u.certifications) : undefined,
    createdDate: u.createdDate != null ? String(u.createdDate) : undefined,
    lastLogin: u.lastLogin != null ? String(u.lastLogin) : undefined,
    isAdmin: Boolean(u.isAdmin),
  };
}

export function normalizeAuthSessionResponse(
  data: Record<string, unknown>
): Record<string, unknown> {
  if (!data.ok) return data;

  if (isForgedGasHealthPayload(data)) {
    return {
      ok: false,
      error:
        "Account service returned a startup page instead of your session. Please try signing in again.",
    };
  }

  const accessToken = String(data.accessToken || data.access_token || "").trim();
  const user = normalizeForgedUser(data.user);

  if (!accessToken || !user) {
    return {
      ok: false,
      error:
        (typeof data.error === "string" && data.error) ||
        "Sign-in response was incomplete. Please try again in a few seconds.",
    };
  }

  return { ...data, accessToken, user };
}

export function extractJsonFromGasText(text: string): Record<string, unknown> {
  const trimmed = text.trim();
  if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
    return JSON.parse(trimmed) as Record<string, unknown>;
  }
  const start = trimmed.indexOf("{");
  const end = trimmed.lastIndexOf("}");
  if (start >= 0 && end > start) {
    return JSON.parse(trimmed.slice(start, end + 1)) as Record<string, unknown>;
  }
  throw new Error("ForgEd database returned non-JSON.");
}
