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
import { getAccessToken } from "@/lib/forged-account/session";
import { xpProgressInLevel } from "@/lib/xp";
import { useAuth } from "./AuthProvider";

interface ProgressContextValue {
  progress: UserProgress;
  refresh: () => void;
  setProgress: (data: UserProgress) => void;
  xpBar: ReturnType<typeof xpProgressInLevel>;
  syncing: boolean;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const { user, loading: authLoading } = useAuth();
  const [progress, setProgressState] = useState<UserProgress>(DEFAULT_PROGRESS);
  const [mounted, setMounted] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const syncTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hadSignedInUser = useRef(false);

  const refresh = useCallback(() => {
    setProgressState(getAccessToken() ? readProgress() : { ...DEFAULT_PROGRESS });
  }, []);

  const setProgress = useCallback((data: UserProgress) => {
    if (!getAccessToken()) return;
    writeProgress(data);
  }, []);

  useEffect(() => {
    registerProgressSync((data) => {
      setProgressState(data);
      if (getAccessToken()) {
        if (syncTimer.current) clearTimeout(syncTimer.current);
        syncTimer.current = setTimeout(async () => {
          setSyncing(true);
          try {
            await saveRemoteProgress(data);
          } finally {
            setSyncing(false);
          }
        }, 800);
      }
    });
    return () => registerProgressSync(null);
  }, []);

  useEffect(() => {
    if (authLoading) return;
    let cancelled = false;
    (async () => {
      if (user?.email) {
        hadSignedInUser.current = true;
        const data = await migrateGuestProgress(user.email);
        if (!cancelled) {
          writeLocalProgress(data);
          setProgressState(data);
        }
      } else {
        if (hadSignedInUser.current) {
          clearLocalProgress();
          hadSignedInUser.current = false;
        }
        if (!cancelled) setProgressState({ ...DEFAULT_PROGRESS });
      }
      if (!cancelled) setMounted(true);
    })();
    return () => {
      cancelled = true;
    };
  }, [user?.email, authLoading]);

  const xpBar = useMemo(() => xpProgressInLevel(progress.xp), [progress.xp]);

  const value = useMemo(
    () => ({ progress, refresh, setProgress, xpBar, syncing }),
    [progress, refresh, setProgress, xpBar, syncing]
  );

  if (!mounted) {
    return (
      <ProgressContext.Provider
        value={{
          progress: DEFAULT_PROGRESS,
          refresh,
          setProgress,
          xpBar: xpProgressInLevel(0),
          syncing: false,
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
