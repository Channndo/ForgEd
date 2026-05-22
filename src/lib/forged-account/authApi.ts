import { apiUrl } from "@/lib/basePath";
import type { UserProgress } from "@/lib/types";
import type { ForgedAccountResponse, ForgedAccountUser, SignUpInput } from "./types";
import { getAccessToken } from "./session";

export class ForgedAccountError extends Error {
  constructor(
    message: string,
    public status: number
  ) {
    super(message);
    this.name = "ForgedAccountError";
  }
}

async function callForgedAccount<T extends ForgedAccountResponse>(
  body: Record<string, unknown>
): Promise<T> {
  const token = getAccessToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  let res: Response;
  try {
    res = await fetch(apiUrl("/api/forged-account"), {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
  } catch {
    throw new ForgedAccountError(
      "Could not reach ForgEd account service. Check your connection.",
      0
    );
  }

  const data = (await res.json().catch(() => ({}))) as T & { error?: string };
  if (!res.ok || !data.ok) {
    throw new ForgedAccountError(
      data.error || "Request failed.",
      res.status || 500
    );
  }
  return data;
}

export async function registerUser(
  input: SignUpInput
): Promise<{ accessToken: string; user: ForgedAccountUser }> {
  const data = await callForgedAccount<ForgedAccountResponse>({
    action: "registerUser",
    ...input,
  });
  if (!data.accessToken || !data.user) {
    throw new ForgedAccountError("Registration succeeded but no session returned.", 500);
  }
  return { accessToken: data.accessToken, user: data.user };
}

/** Normalize email or username the same way Apps Script does on login. */
export function normalizeLoginId(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (trimmed.includes("@")) return trimmed.toLowerCase();
  return trimmed
    .toLowerCase()
    .replace(/[^a-z0-9_]/g, "_")
    .slice(0, 24);
}

export async function loginUser(
  login: string,
  password: string
): Promise<{ accessToken: string; user: ForgedAccountUser }> {
  const data = await callForgedAccount<ForgedAccountResponse>({
    action: "loginUser",
    login: normalizeLoginId(login),
    password,
  });
  if (!data.accessToken || !data.user) {
    throw new ForgedAccountError("Sign-in succeeded but no session returned.", 500);
  }
  return { accessToken: data.accessToken, user: data.user };
}

export async function requestPasswordReset(email: string): Promise<string> {
  const data = await callForgedAccount<ForgedAccountResponse>({
    action: "requestPasswordReset",
    email,
  });
  return data.message || "If that email exists, reset instructions were sent.";
}

export async function resetPassword(
  token: string,
  password: string
): Promise<string> {
  const data = await callForgedAccount<ForgedAccountResponse>({
    action: "resetPassword",
    token,
    password,
  });
  return data.message || "Password updated.";
}

export async function getUserProfile(): Promise<ForgedAccountUser> {
  const data = await callForgedAccount<ForgedAccountResponse>({
    action: "getUserProfile",
    accessToken: getAccessToken(),
  });
  if (!data.user) throw new ForgedAccountError("Profile not found.", 404);
  return data.user;
}

export async function loadUserDashboard(): Promise<{
  user: ForgedAccountUser;
  progress: UserProgress | null;
}> {
  const data = await callForgedAccount<ForgedAccountResponse>({
    action: "loadUserDashboard",
    accessToken: getAccessToken(),
  });
  if (!data.user) throw new ForgedAccountError("Dashboard load failed.", 500);
  return { user: data.user, progress: data.progress ?? null };
}

export async function saveUserProgress(progress: UserProgress): Promise<void> {
  await callForgedAccount({
    action: "saveUserProgress",
    accessToken: getAccessToken(),
    progress,
  });
}

export async function restoreProgressFromArchive(): Promise<{
  progress: UserProgress | null;
  message: string;
}> {
  const data = await callForgedAccount<ForgedAccountResponse & {
    dashboard?: { progress?: UserProgress | null };
    message?: string;
  }>({
    action: "restoreFromArchive",
    accessToken: getAccessToken(),
  });
  const progress = data.dashboard?.progress ?? null;
  return {
    progress,
    message: data.message || "Progress restored from archive.",
  };
}

export async function updateUserProfile(input: {
  displayName?: string;
  username?: string;
}): Promise<ForgedAccountUser> {
  const data = await callForgedAccount<ForgedAccountResponse>({
    action: "updateUserProfile",
    accessToken: getAccessToken(),
    ...input,
  });
  if (!data.user) throw new ForgedAccountError("Profile update failed.", 500);
  return data.user;
}

export async function saveLabProgress(input: {
  labName: string;
  completed?: boolean;
  xpEarned?: number;
  solutionViewed?: boolean;
  retryRequired?: boolean;
  status?: string;
}): Promise<void> {
  await callForgedAccount({
    action: "saveLabProgress",
    accessToken: getAccessToken(),
    ...input,
  });
}
