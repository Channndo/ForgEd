/**
 * Syntrix password auth — same API as CoverIQ consumer accounts (MIRA).
 * Production: same-origin proxy at /api/syntrix/* → api.syntrix.solutions
 */

export function syntrixApiBase(): string {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_SYNTRIX_API_URL?.trim()) {
    return process.env.NEXT_PUBLIC_SYNTRIX_API_URL.replace(/\/$/, "");
  }
  return "";
}

export class SyntrixAuthError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string
  ) {
    super(message);
    this.name = "SyntrixAuthError";
  }
}

export interface SyntrixMeUser {
  id?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  onboarding_complete?: boolean;
  onboardingComplete?: boolean;
  [key: string]: unknown;
}

export interface SyntrixSecurityQuestion {
  id: number;
  text: string;
}

export interface SyntrixAuthResult {
  accessToken: string;
  user?: SyntrixMeUser;
  requiresSecurity?: boolean;
  challengeToken?: string;
  securityQuestions?: SyntrixSecurityQuestion[];
}

function authPath(path: string): string {
  const base = syntrixApiBase();
  return base ? `${base}${path}` : `/api/syntrix${path}`;
}

function extractToken(data: Record<string, unknown>): string | null {
  const token =
    (data.access_token as string) ||
    (data.accessToken as string) ||
    (data.token as string) ||
    null;
  return typeof token === "string" && token.length > 0 ? token : null;
}

async function parseJson(res: Response): Promise<Record<string, unknown>> {
  try {
    return (await res.json()) as Record<string, unknown>;
  } catch {
    return {};
  }
}

async function syntrixFetch(path: string, init: RequestInit): Promise<Response> {
  try {
    return await fetch(authPath(path), init);
  } catch {
    throw new SyntrixAuthError(
      "Could not reach the Omnistrata account service. Check your connection.",
      0,
      "network"
    );
  }
}

function errorMessage(data: Record<string, unknown>, fallback: string): string {
  const detail = data.detail;
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail)) {
    const msgs = detail
      .map((item) => {
        if (typeof item === "object" && item && "msg" in item) {
          return String((item as { msg?: string }).msg ?? "");
        }
        return "";
      })
      .filter(Boolean);
    if (msgs.length) return msgs.join(" ");
  }
  if (typeof data.message === "string") return data.message;
  if (typeof data.error === "string") return data.error;
  return fallback;
}

export async function syntrixRegister(body: Record<string, unknown>): Promise<SyntrixAuthResult> {
  const res = await syntrixFetch("/api/auth/password/register", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });
  const data = await parseJson(res);
  if (!res.ok) {
    throw new SyntrixAuthError(errorMessage(data, "Registration failed."), res.status);
  }
  const token = extractToken(data);
  if (!token) {
    throw new SyntrixAuthError("Registration succeeded but no session token was returned.", res.status);
  }
  return { accessToken: token, user: data.user as SyntrixMeUser | undefined };
}

export async function syntrixLogin(email: string, password: string): Promise<SyntrixAuthResult> {
  const res = await syntrixFetch("/api/auth/password/login", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ email: email.trim().toLowerCase(), password }),
  });
  const data = await parseJson(res);
  if (!res.ok) {
    throw new SyntrixAuthError(errorMessage(data, "Invalid email or password."), res.status);
  }

  const requiresSecurity =
    data.requires_security_questions === true ||
    data.requires_security === true ||
    data.requiresSecurity === true;

  if (requiresSecurity) {
    const raw = (data.questions ?? data.security_questions ?? data.securityQuestions) as
      | Array<{ id?: number; text?: string } | string>
      | undefined;
    const questions: SyntrixSecurityQuestion[] = (raw ?? []).map((q, i) =>
      typeof q === "string"
        ? { id: i + 1, text: q }
        : { id: Number(q.id ?? i + 1), text: String(q.text ?? "Security question") }
    );
    return {
      accessToken: "",
      requiresSecurity: true,
      challengeToken: String(data.challenge_token ?? data.challengeToken ?? ""),
      securityQuestions: questions,
    };
  }

  const token = extractToken(data);
  if (!token) {
    throw new SyntrixAuthError("Sign-in requires additional verification.", res.status);
  }
  return { accessToken: token, user: data.user as SyntrixMeUser | undefined };
}

export async function syntrixLoginSecurity(body: Record<string, unknown>): Promise<SyntrixAuthResult> {
  const res = await syntrixFetch("/api/auth/password/login/security", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });
  const data = await parseJson(res);
  if (!res.ok) {
    throw new SyntrixAuthError(errorMessage(data, "Security verification failed."), res.status);
  }
  const token = extractToken(data);
  if (!token) {
    throw new SyntrixAuthError("Verification succeeded but no session token was returned.", res.status);
  }
  return { accessToken: token, user: data.user as SyntrixMeUser | undefined };
}

export async function syntrixMe(accessToken: string): Promise<SyntrixMeUser> {
  const res = await syntrixFetch("/api/auth/me", {
    method: "GET",
    headers: { Accept: "application/json", Authorization: `Bearer ${accessToken}` },
  });
  const data = await parseJson(res);
  if (!res.ok) {
    throw new SyntrixAuthError(errorMessage(data, "Session expired. Please sign in again."), res.status);
  }
  return (data.user ?? data) as SyntrixMeUser;
}

export function buildForgedRegisterPayload(input: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  securityQuestion1Id: number;
  securityAnswer1: string;
  securityQuestion2Id: number;
  securityAnswer2: string;
}): Record<string, unknown> {
  return {
    email: input.email.trim().toLowerCase(),
    password: input.password,
    first_name: input.firstName.trim(),
    last_name: input.lastName.trim(),
    phone: input.phone.trim(),
    street: "N/A",
    city: "N/A",
    state: "NA",
    zip: "00000",
    current_insurance_provider: "ForgEd Learner",
    security_q1_id: input.securityQuestion1Id,
    security_q2_id: input.securityQuestion2Id,
    security_answer1: input.securityAnswer1.trim(),
    security_answer2: input.securityAnswer2.trim(),
  };
}
