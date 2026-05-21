"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";
import { getBadge } from "@/lib/badges";
import { useProgress } from "./ProgressProvider";

interface Toast {
  id: string;
  badgeId: string;
  title: string;
  description: string;
}

const AchievementContext = createContext<{
  celebrate: (badgeId: string) => void;
} | null>(null);

export function AchievementProvider({ children }: { children: React.ReactNode }) {
  const { progress } = useProgress();
  const [toasts, setToasts] = useState<Toast[]>([]);
  const seen = useRef<Set<string>>(new Set(progress.earnedBadges));

  const celebrate = useCallback((badgeId: string) => {
    const badge = getBadge(badgeId);
    if (!badge) return;
    setToasts((t) => [
      ...t,
      {
        id: `${badgeId}-${Date.now()}`,
        badgeId,
        title: badge.name,
        description: badge.description,
      },
    ]);
  }, []);

  useEffect(() => {
    for (const id of progress.earnedBadges) {
      if (!seen.current.has(id)) {
        seen.current.add(id);
        celebrate(id);
      }
    }
  }, [progress.earnedBadges, celebrate]);

  function dismiss(id: string) {
    setToasts((t) => t.filter((x) => x.id !== id));
  }

  return (
    <AchievementContext.Provider value={{ celebrate }}>
      {children}
      <div className="pointer-events-none fixed right-4 top-20 z-[90] flex flex-col gap-3 sm:right-6">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              className="pointer-events-auto flex max-w-sm items-start gap-3 rounded-xl border border-[var(--gold)]/35 bg-[#0a0a0a]/95 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-md"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--gold)]/30 bg-[var(--gold)]/10">
                <Award className="h-5 w-5 text-[var(--gold)]" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--gold)]">
                  Achievement unlocked
                </p>
                <p className="font-serif text-sm font-semibold text-[var(--silver)]">{t.title}</p>
                <p className="mt-0.5 text-xs text-[var(--muted)]">{t.description}</p>
              </div>
              <button
                type="button"
                onClick={() => dismiss(t.id)}
                className="shrink-0 text-[var(--muted)] hover:text-white"
                aria-label="Dismiss"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </AchievementContext.Provider>
  );
}

export function useAchievement() {
  const ctx = useContext(AchievementContext);
  if (!ctx) throw new Error("useAchievement within AchievementProvider");
  return ctx;
}
