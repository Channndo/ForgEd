"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  ForgedAccountError,
  getUserProfile,
  loginUser,
  registerUser,
  requestPasswordReset,
  resetPassword,
} from "@/lib/forged-account/authApi";
import {
  clearSession,
  getAccessToken,
  readSession,
  updateLocalProfile,
  writeSession,
} from "@/lib/forged-account/session";
import { updateUserProfile } from "@/lib/forged-account/authApi";
import type { ForgedAccountUser } from "@/lib/forged-account/types";

interface AuthContextValue {
  user: ForgedAccountUser | null;
  profile: ForgedAccountUser | null;
  loading: boolean;
  configured: boolean;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
  signUp: (input: {
    displayName: string;
    username: string;
    email: string;
    password: string;
  }) => Promise<{ error?: string }>;
  signOut: () => void;
  resetPasswordRequest: (email: string) => Promise<{ error?: string; message?: string }>;
  resetPasswordWithToken: (
    token: string,
    password: string
  ) => Promise<{ error?: string; message?: string }>;
  updateProfile: (patch: {
    displayName?: string;
    username?: string;
  }) => Promise<{ error?: string }>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<ForgedAccountUser | null>(null);
  const [loading, setLoading] = useState(true);
  const configured = true;

  const refreshProfile = useCallback(async () => {
    const token = getAccessToken();
    if (!token) {
      setUser(null);
      return;
    }
    try {
      const profile = await getUserProfile();
      writeSession(token, profile);
      setUser(profile);
    } catch {
      clearSession();
      setUser(null);
    }
  }, []);

  useEffect(() => {
    const token = getAccessToken();
    const cached = readSession();
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }
    if (cached) setUser(cached);
    void refreshProfile().finally(() => setLoading(false));
  }, [refreshProfile]);

  const signIn = useCallback(async (email: string, password: string) => {
    try {
      const result = await loginUser(email, password);
      writeSession(result.accessToken, result.user);
      setUser(result.user);
      return {};
    } catch (e) {
      return {
        error: e instanceof ForgedAccountError ? e.message : "Sign in failed.",
      };
    }
  }, []);

  const signUp = useCallback(
    async (input: {
      displayName: string;
      username: string;
      email: string;
      password: string;
    }) => {
      try {
        const result = await registerUser(input);
        writeSession(result.accessToken, result.user);
        setUser(result.user);
        return {};
      } catch (e) {
        return {
          error: e instanceof ForgedAccountError ? e.message : "Registration failed.",
        };
      }
    },
    []
  );

  const signOut = useCallback(() => {
    clearSession();
    setUser(null);
  }, []);

  const resetPasswordRequest = useCallback(async (email: string) => {
    try {
      const message = await requestPasswordReset(email);
      return { message };
    } catch (e) {
      return {
        error: e instanceof ForgedAccountError ? e.message : "Could not send reset.",
      };
    }
  }, []);

  const resetPasswordWithToken = useCallback(async (token: string, password: string) => {
    try {
      const message = await resetPassword(token, password);
      return { message };
    } catch (e) {
      return {
        error: e instanceof ForgedAccountError ? e.message : "Could not reset password.",
      };
    }
  }, []);

  const updateProfile = useCallback(
    async (patch: { displayName?: string; username?: string }) => {
      if (!getAccessToken()) return { error: "Not signed in." };
      try {
        const remote = await updateUserProfile(patch);
        writeSession(getAccessToken()!, remote);
        setUser(remote);
        return {};
      } catch (e) {
        const updated = updateLocalProfile(patch);
        if (updated) setUser(updated);
        return {
          error:
            e instanceof ForgedAccountError
              ? e.message
              : "Could not save profile. Try again.",
        };
      }
    },
    []
  );

  const value = useMemo(
    () => ({
      user,
      profile: user,
      loading,
      configured,
      signIn,
      signUp,
      signOut,
      resetPasswordRequest,
      resetPasswordWithToken,
      updateProfile,
      refreshProfile,
    }),
    [
      user,
      loading,
      configured,
      signIn,
      signUp,
      signOut,
      resetPasswordRequest,
      resetPasswordWithToken,
      updateProfile,
      refreshProfile,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
