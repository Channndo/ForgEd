export interface ForgedAccountUser {
  id: string;
  userId: string;
  email: string;
  username: string;
  displayName: string;
  xp: number;
  level: number;
  streak: number;
  activePaths?: string;
  certifications?: string;
  createdDate?: string;
  lastLogin?: string;
}

export interface ForgedAccountResponse<T = unknown> {
  ok: boolean;
  error?: string;
  accessToken?: string;
  user?: ForgedAccountUser;
  progress?: import("@/lib/types").UserProgress;
  message?: string;
  resetToken?: string;
}
