"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { UserProgress } from "@/lib/types";
import {
  DEFAULT_PROGRESS,
  readProgress,
  writeProgress,
} from "@/lib/progress";
import { xpProgressInLevel } from "@/lib/xp";

interface ProgressContextValue {
  progress: UserProgress;
  refresh: () => void;
  setProgress: (data: UserProgress) => void;
  xpBar: ReturnType<typeof xpProgressInLevel>;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgressState] = useState<UserProgress>(DEFAULT_PROGRESS);
  const [mounted, setMounted] = useState(false);

  const refresh = useCallback(() => {
    setProgressState(readProgress());
  }, []);

  useEffect(() => {
    refresh();
    setMounted(true);
  }, [refresh]);

  const setProgress = useCallback((data: UserProgress) => {
    writeProgress(data);
    setProgressState(data);
  }, []);

  const xpBar = useMemo(() => xpProgressInLevel(progress.xp), [progress.xp]);

  const value = useMemo(
    () => ({ progress, refresh, setProgress, xpBar }),
    [progress, refresh, setProgress, xpBar]
  );

  if (!mounted) {
    return (
      <ProgressContext.Provider
        value={{
          progress: DEFAULT_PROGRESS,
          refresh,
          setProgress,
          xpBar: xpProgressInLevel(0),
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
