export interface ForgedAccountUser {
  id: string;
  userId: string;
  email: string;
  username: string;
  displayName: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  referralSource?: string;
  xp: number;
  level: number;
  streak: number;
  activePaths?: string;
  certifications?: string;
  createdDate?: string;
  lastLogin?: string;
  isAdmin?: boolean;
}

export interface SignUpInput {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  securityQuestion1: string;
  securityAnswer1: string;
  securityQuestion2: string;
  securityAnswer2: string;
  referralSource: string;
}

export interface ForgedAccountResponse<T = unknown> {
  ok: boolean;
  error?: string;
  accessToken?: string;
  user?: ForgedAccountUser;
  progress?: import("@/lib/types").UserProgress;
  message?: string;
  resetToken?: string;
  emailSent?: boolean;
  emailError?: string;
}
