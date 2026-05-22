"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { UserProgress } from "@/lib/types";
import {
  DEFAULT_PROGRESS,
  readProgress,
  registerProgressSync,
  writeProgress,
} from "@/lib/progress";
import {
  clearLocalProgress,
  migrateGuestProgress,
  saveRemoteProgress,
  writeLocalProgress,
} from "@/lib/progress/persistence";
import { hasActiveSession } from "@/lib/forged-account/session";
import { xpProgressInLevel } from "@/lib/xp";
import { useAuth } from "./AuthProvider";

interface ProgressContextValue {
  progress: UserProgress;
  refresh: () => void;
  setProgress: (data: UserProgress) => void;
  xpBar: ReturnType<typeof xpProgressInLevel>;
  syncing: boolean;
  isSignedIn: boolean;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

const EMPTY_PROGRESS = (): UserProgress => ({ ...DEFAULT_PROGRESS });

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const { user, loading: authLoading } = useAuth();
  const [progress, setProgressState] = useState<UserProgress>(EMPTY_PROGRESS);
  const [mounted, setMounted] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const syncTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isSignedIn = Boolean(user);

  const refresh = useCallback(() => {
    if (!user) {
      setProgressState(EMPTY_PROGRESS());
      return;
    }
    setProgressState(readProgress());
  }, [user]);

  const setProgress = useCallback(
    (data: UserProgress) => {
      if (!user) return;
      writeProgress(data);
    },
    [user]
  );

  useEffect(() => {
    registerProgressSync((data) => {
      if (!hasActiveSession()) return;
      setProgressState(data);
      if (syncTimer.current) clearTimeout(syncTimer.current);
      syncTimer.current = setTimeout(async () => {
        setSyncing(true);
        try {
          await saveRemoteProgress(data);
        } finally {
          setSyncing(false);
        }
      }, 800);
    });
    return () => registerProgressSync(null);
  }, []);

  useEffect(() => {
    if (authLoading) return;
    let cancelled = false;
    (async () => {
      if (user?.userId) {
        const data = await migrateGuestProgress(user.userId);
        if (!cancelled) {
          writeLocalProgress(data);
          setProgressState(data);
        }
      } else {
        clearLocalProgress();
        if (!cancelled) setProgressState(EMPTY_PROGRESS());
      }
      if (!cancelled) setMounted(true);
    })();
    return () => {
      cancelled = true;
    };
  }, [user?.userId, authLoading]);

  const progressForUi = isSignedIn ? progress : EMPTY_PROGRESS();
  const xpBar = useMemo(() => xpProgressInLevel(progressForUi.xp), [progressForUi.xp]);

  const value = useMemo(
    () => ({
      progress: progressForUi,
      refresh,
      setProgress,
      xpBar,
      syncing,
      isSignedIn,
    }),
    [progressForUi, refresh, setProgress, xpBar, syncing, isSignedIn]
  );

  if (!mounted) {
    return (
      <ProgressContext.Provider
        value={{
          progress: EMPTY_PROGRESS(),
          refresh,
          setProgress,
          xpBar: xpProgressInLevel(0),
          syncing: false,
          isSignedIn: false,
        }}
      >
        {children}
      </ProgressContext.Provider>
    );
  }

  return (
    <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}
